!function(){var n=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.editForm=n({compiler:[6,">= 2.0.0-beta.1"],main:function(n,l,a,e){var t,s,i="function",r=l.helperMissing,d=this.escapeExpression,u=this.lambda;return'<div id="sgEdit">\n    <div class="sgRow">\n        <div style="font-size:0;text-align:center;">\n            <img src="'+d((s=null!=(s=l.modxSiteUrl||(null!=n?n.modxSiteUrl:n))?s:r,typeof s===i?s.call(n,{name:"modxSiteUrl",hash:{},data:e}):s))+d(u(null!=(t=null!=n?n.data:n)?t.sg_image:t,n))+'">\n        </div>\n        <div>\n            <table>\n                <tr>\n                    <td class="rowTitle">ID</td>\n                    <td>'+d(u(null!=(t=null!=n?n.data:n)?t.sg_id:t,n))+'</td>\n                </tr>\n                <tr>\n                    <td class="rowTitle">'+d(u(null!=(t=null!=n?n.sgLang:n)?t.file:t,n))+"</td>\n                    <td>"+d(u(null!=(t=null!=n?n.data:n)?t.sg_image:t,n))+'</td>\n                </tr>\n                <tr>\n                    <td class="rowTitle">'+d(u(null!=(t=null!=n?n.sgLang:n)?t.size:t,n))+"</td>\n                    <td>"+d(u(null!=(t=null!=(t=null!=n?n.data:n)?t.sg_properties:t)?t.width:t,n))+"x"+d(u(null!=(t=null!=(t=null!=n?n.data:n)?t.sg_properties:t)?t.height:t,n))+", "+d(u(null!=(t=null!=(t=null!=n?n.data:n)?t.sg_properties:t)?t.size:t,n))+'</td>\n                </tr>\n                <tr>\n                    <td class="rowTitle">'+d(u(null!=(t=null!=n?n.sgLang:n)?t.createdon:t,n))+"</td><td>"+d(u(null!=(t=null!=n?n.data:n)?t.sg_createdon:t,n))+'</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n    <div class="sgRow">\n        <div>\n            <form id="sgForm"><input type="hidden" name="sg_id" value="'+d(u(null!=(t=null!=n?n.data:n)?t.sg_id:t,n))+'">\n                <label>'+d(u(null!=(t=null!=n?n.sgLang:n)?t.title:t,n))+'</label>\n                <input name="sg_title" maxlength="255" type="text" value="'+d(u(null!=(t=null!=n?n.data:n)?t.sg_title:t,n))+'">\n                <label>'+d(u(null!=(t=null!=n?n.sgLang:n)?t.description:t,n))+'</label>\n                <textarea name="sg_description">'+d(u(null!=(t=null!=n?n.data:n)?t.sg_description:t,n))+"</textarea>\n                <label>"+d(u(null!=(t=null!=n?n.sgLang:n)?t.add:t,n))+'</label>\n                <input name="sg_add" type="text" value="'+d(u(null!=(t=null!=n?n.data:n)?t.sg_add:t,n))+'">\n                <label>'+d(u(null!=(t=null!=n?n.sgLang:n)?t.show:t,n))+'</label>\n                <input type="checkbox" name="sg_isactive" value="1" '+d(u(null!=(t=null!=n?n.data:n)?t.sg_isactive:t,n))+">"+d(u(null!=(t=null!=n?n.sgLang:n)?t.yes:t,n))+'\n            </form>\n        </div>\n    </div>\n    <div style="clear:both;padding:10px;float:right;">\n        <div id="sgEditSave" class="btn btn-right">\n            <div class="btn-text">\n                <img src="'+d((s=null!=(s=l.modxTheme||(null!=n?n.modxTheme:n))?s:r,typeof s===i?s.call(n,{name:"modxTheme",hash:{},data:e}):s))+'/images/icons/save.png">\n                '+d(u(null!=(t=null!=n?n.sgLang:n)?t.save:t,n))+'\n            </div>\n        </div>\n        <div id="sgEditCancel" class="btn btn-right">\n            <div class="btn-text">\n                <img src="'+d((s=null!=(s=l.modxTheme||(null!=n?n.modxTheme:n))?s:r,typeof s===i?s.call(n,{name:"modxTheme",hash:{},data:e}):s))+'/images/icons/stop.png">\n                '+d(u(null!=(t=null!=n?n.sgLang:n)?t.cancel:t,n))+"\n            </div>\n        </div>\n    </div>\n</div>"},useData:!0}),l.moveForm=n({compiler:[6,">= 2.0.0-beta.1"],main:function(){return""},useData:!0}),l.preview=n({compiler:[6,">= 2.0.0-beta.1"],main:function(n,l,a,e){var t,s,i=this.lambda,r=this.escapeExpression,d="function",u=l.helperMissing;return'<div class="sg_image">\r\n    <a href="javascript:void(0)" class="del" title="'+r(i(null!=(t=null!=n?n.sgLang:n)?t["delete"]:t,n))+'"></a>\r\n    <img title="'+r(i(null!=(t=null!=n?n.data:n)?t.sg_description:t,n))+'" src="'+r((s=null!=(s=l.thumbPrefix||(null!=n?n.thumbPrefix:n))?s:u,typeof s===d?s.call(n,{name:"thumbPrefix",hash:{},data:e}):s))+r(i(null!=(t=null!=n?n.data:n)?t.sg_image:t,n))+'">\r\n    <div class="name'+r(i(null!=(t=null!=n?n.data:n)?t.sg_isactive:t,n))+'">'+r(i(null!=(t=null!=n?n.data:n)?t.sg_title:t,n))+"</div>\r\n</div>"},useData:!0}),l.refreshForm=n({1:function(n){var l=this.lambda,a=this.escapeExpression;return'\r\n            <label><input type="checkbox" value="'+a(l(null!=n?n.id:n,n))+'" name="template[]">'+a(l(null!=n?n.templatename:n,n))+"</label>\r\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(n,l,a,e){var t,s,i=this.lambda,r=this.escapeExpression,d="function",u=l.helperMissing,g='<div id="sgRefresh">\r\n    <div id="sgRefreshTpls">\r\n        <p>'+r(i(null!=(t=null!=n?n.sgLang:n)?t.select_tpls:t,n))+"</p>\r\n        <form>";return t=l.each.call(n,null!=n?n.tpls:n,{name:"each",hash:{},fn:this.program(1,e),inverse:this.noop,data:e}),null!=t&&(g+=t),g+'        </form>\r\n    </div>\r\n    <div id="sgRefreshProgress">\r\n        <span></span>\r\n        <div></div>\r\n    </div>\r\n    <div style="clear:both;padding:10px;float:right;">\r\n        <div id="sgRefreshStart" class="btn btn-right">\r\n            <div class="btn-text">\r\n                <img src="'+r((s=null!=(s=l.modxTheme||(null!=n?n.modxTheme:n))?s:u,typeof s===d?s.call(n,{name:"modxTheme",hash:{},data:e}):s))+'/images/icons/save.png">\r\n                <span>'+r(i(null!=(t=null!=n?n.sgLang:n)?t["continue"]:t,n))+"</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},useData:!0}),l.uploadForm=n({1:function(n,l,a,e){var t=this.lambda,s=this.escapeExpression;return'                <tr id="sgFilesListRow'+s(t(e&&e.index,n))+'">\r\n                    <td class="sgrow1">'+s(t(null!=n?n.name:n,n))+'</td>\r\n                    <td class="sgrow2">'+s(t(null!=n?n.size:n,n))+'</td>\r\n                    <td class="sgrow3 progress"></td>\r\n                </tr>\r\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(n,l,a,e){var t,s,i=this.lambda,r=this.escapeExpression,d="function",u=l.helperMissing,g='<div id="sgUploadState">\r\n    <div id="sgProgress">\r\n        <span></span>\r\n        <div></div>\r\n    </div>\r\n    <table>\r\n        <thead>\r\n        <tr>\r\n            <th class="sgrow1">'+r(i(null!=(t=null!=n?n.sgLang:n)?t.file:t,n))+'</th>\r\n            <th class="sgrow2">'+r(i(null!=(t=null!=n?n.sgLang:n)?t.size:t,n))+'</th>\r\n            <th class="sgrow3">'+r(i(null!=(t=null!=n?n.sgLang:n)?t.progress:t,n))+'</th>\r\n        </tr>\r\n        </thead>\r\n    </table>\r\n    <div id="sgFilesList">\r\n        <table>\r\n            <tbody>\r\n';return t=l.each.call(n,null!=n?n.files:n,{name:"each",hash:{},fn:this.program(1,e),inverse:this.noop,data:e}),null!=t&&(g+=t),g+'            </tbody>\r\n        </table>\r\n    </div>\r\n    <div style="clear:both;padding:10px;float:right;">\r\n        <div id="sgUploadCancel" class="btn btn-right">\r\n            <div class="btn-text">\r\n                <img src="'+r((s=null!=(s=l.modxTheme||(null!=n?n.modxTheme:n))?s:u,typeof s===d?s.call(n,{name:"modxTheme",hash:{},data:e}):s))+'/images/icons/stop.png">\r\n                <span>'+r(i(null!=(t=null!=n?n.sgLang:n)?t.cancel:t,n))+"</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},useData:!0})}();