<?php
namespace SimpleGallery;
require_once (MODX_BASE_PATH . 'assets/lib/MODxAPI/autoTable.abstract.php');

class sgData extends \autoTable {
	/* @var autoTable $table */
	protected $table = 'sg_images';
	protected $pkName = 'sg_id';
	/* @var autoTable $_table */
	public $_table = '';

	public $default_field = array(
		'sg_id' => 0,
		'sg_image' => '',
		'sg_title' => '',
		'sg_description' => '',
		'sg_properties' => '',
		'sg_add' => '',
		'sg_isactive' => 1,
		'sg_rid' => 0,
		'sg_index' => 0,
		'sg_createdon' => '',
	);

	public function __construct($modx, $debug = false) {
		parent::__construct($modx, $debug);
        $this->_table = $this->makeTable($this->table);
        $this->modx = $modx;
        $this->params = $modx->event->params;
	}
	public function delete($ids, $fire_events = NULL) {
		$ids = explode(',',$ids);
		foreach ($ids as &$id) $id = (int)$id;
		$min = min ($ids);
		if (!$min) return false;
		$count = count($ids);
		$fields = $this->edit($min)->toArray();

		$ids = implode(',',$ids);
		$images = $this->modx->db->select('`sg_id`,`sg_image`',$this->_table,"`sg_id` IN ($ids)");
		$out = parent::delete($ids);
		while ($row = $this->modx->db->getRow($images)) {
			$this->deleteThumb($row['sg_image']);
			$filename = end(explode('/',$row['sg_image']));
			$filepath = MODX_BASE_PATH.str_replace('/'.$filename, '', $row['sg_image']);
			$this->invokeEvent('OnSimpleGalleryDelete',array(
				'id'		=>	$row['sg_id'],
				'filepath'	=>	$filepath,
				'filename'	=>	$filename
				),true);
		}
		$rows = $this->modx->db->update( "`sg_index`=`sg_index`-$count", $this->_table, '`sg_rid`='.($fields['sg_rid'] ? $fields['sg_rid'] : 0).' AND `sg_id` > ' . $min);
		return $out;
	}
	
	public function deleteThumb($url, $cache = false) {
		if (empty($url)) return;
		$thumb = $this->modx->config['base_path'].$url;
		if (file_exists($thumb)) {
			$dir = pathinfo($thumb);
			$dir = $dir['dirname'];
			unlink($thumb);
			$iterator = new \FilesystemIterator($dir);
			if (!$iterator->valid()) rmdir ($dir);
		}
		if ($cache) return;
		$thumbsCache = 'assets/.sgThumbs/';
		if (isset($this->modx->pluginCache['SimpleGalleryProps'])) {
			$pluginParams = $this->modx->parseProperties($this->modx->pluginCache['SimpleGalleryProps']);
			if (isset($pluginParams['thumbsCache'])) $thumbsCache = $pluginParams['thumbsCache'];
		}
		$thumb = $thumbsCache.$url;
		if (file_exists($this->modx->config['base_path'].$thumb)) $this->deleteThumb($thumb, true);
	}

	public function reorder($source, $target, $point, $rid, $orderDir) {
		$rid = (int)$rid;
		$point = strtolower($point);
		$orderDir = strtolower($orderDir);
		$sourceIndex = (int)$source['st_index'];
		$targetIndex = (int)$target['st_index'];
		$sourceId = (int)$source['st_id'];
		/* more refactoring  needed */
		
		return true;
	}

	public function getInexistantFilename($file) {
		$path_parts = pathinfo($file);
		$filename = $path_parts['filename'];
		$fileext = $path_parts['extension'];
		$dir = $path_parts['dirname'];
		$file = $path_parts['basename'];
		$i = 1;
		while (file_exists("$dir/$file")) {
			$i++;
			$file = "$filename($i).$fileext";
		}
		return $file;
	}

	public function save($fire_events = null, $clearCache = false) {
		if ($this->newDoc) {
			$rows = $this->modx->db->select('`sg_id`', $this->_table, '`sg_rid`='.$this->field['sg_rid']);
			$this->field['sg_index'] = $this->modx->db->getRecordCount($rows);
			$this->field['sg_createdon'] = date('Y-m-d H:i:s');
		}
		if (parent::save()) {
			if ($this->newDoc) {
				$filename = end(explode('/',$this->field['sg_image']));
				$filepath = MODX_BASE_PATH.str_replace('/'.$filename, '', $this->field['sg_image']);
				$this->invokeEvent('OnFileBrowserUpload',array(
					'filepath' => $filepath,
					'filename' => $filename
					),true);
			} 
			$this->invokeEvent('OnSimpleGallerySave',$this->field,true);
		}
	}

	public function refresh() {
		$this->invokeEvent('OnSimpleGalleryRefresh',$this->field,true);
	}
	public function makeThumb($folder,$url,$options) {
		if (empty($url)) return false;
		include_once($this->modx->config['base_path'].'assets/snippets/phpthumb/phpthumb.class.php');
		$thumb = new \phpthumb();
		$thumb->sourceFilename = $this->modx->config['base_path'].$url;
		$options = strtr($options, Array("," => "&", "_" => "=", '{' => '[', '}' => ']'));
		parse_str($options, $params);
		foreach ($params as $key => $value) {
        	$thumb->setParameter($key, $value);
    	}
  		$outputFilename = $this->modx->config['base_path'].$folder.$url;
  		$info = pathinfo($outputFilename);
  		$dir = $info['dirname'];
  		if (!is_dir($dir)) mkdir($dir,intval($this->modx->config['new_folder_permissions'],8),true);
		if ($thumb->GenerateThumbnail() && $thumb->RenderToFile($outputFilename)) {
        	return true;
		} else {
			return false;
		}
	}
}