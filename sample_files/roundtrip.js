window.__adroll||(function(){function k(){this.exp=8760;this.eexp=720;this.pv=1E11*Math.random();this.__adc="__ar_v4";this._nad=0;this._lce=null;this._loaded=this._broken=!1;this._url=2E3;this._kwl=300;this._r={};this._logs=[];this.consent_networks={facebook:"f",linkedin:"linkedin"};for(var a=Array(4),c=0;c<a.length;c++)a[c]=(Math.round(1E11*Math.random()).toString(16)+Array(9).join("0")).substr(0,8);this._set_global("adroll_sid",a.join(""))};k.prototype.load_consent_banner=function(){this.add_script_element("s.adroll.com/j/consent.js")};k.prototype.get_consent_params=function(){return this.get("__adroll_consent_params")};k.prototype.set_consent_params=function(a){this.set("__adroll_consent_params",a)};k.prototype.clear_consent_params=function(){this.del("__adroll_consent_params")};k.prototype.handle_null_consent=function(a){a||((a=this.get_consent_params())?this.call_consent_write(a):this.load_consent_banner())};
k.prototype.show_post_consent_message=function(a){var c=this.get("__adroll_post_consent_html"),b=this.get("__adroll_post_consent_css");if(c&&"boolean"!==typeof a){a=window.document.createElement("style");a.setAttribute("type","text/css");a.textContent=b;window.document.head.appendChild(a);b=document.createElement("div");b.innerHTML=c;window.document.body.appendChild(b.firstChild);var d=window.document.getElementById("adroll_consent_banner");setTimeout(function(){try{d.classList.add("hidden")}catch(a){d.className+=
" hidden"}},1E3);window.document.getElementById("adroll_post_consent_message_close").addEventListener("click",function(){d.parentNode.removeChild(d)});window.document.getElementById("adroll_post_consent_text").addEventListener("click",function(){window.open("http://d.adroll.com/consent/choices","_blank")});this.del("__adroll_post_consent_css");this.del("__adroll_post_consent_html")}};
k.prototype.set_consent=function(a,c,b){this.show_post_consent_message(a);if(0===arguments.length){if(!this._has_global("__adroll_consent"))return;a=this._global("__adroll_consent")}this._set_global("__adroll_consent",a);this._set_global("__adroll_consent_is_gdpr",b);null===a?this.handle_null_consent(c):(c||this.clear_consent_params(),!1!==a&&(this.set_first_party_cookie(),this.call_next_tpc()))};k.prototype.cookieEnabled=function(a){if(this._global("adroll_ext_network")||this._global("adroll_optout")||this._broken)return!1;if(2<=this._nad||a)return this._lce;this.set("_te_","1");return"1"===this.get("_te_")?(this.del("_te_"),0<this._nad&&!this.get(this.__adc)?this._lce=!1:this._lce=!0):this._lce=!1};
k.prototype.get=function(a){var c=window.document.cookie;if(null===c)return this._broken=!0,null;var b;0>c.indexOf(a+"=")?c=null:(a=c.indexOf(a+"=")+a.length+1,b=c.indexOf(";",a),-1===b&&(b=c.length),c=c.substring(a,b),c=""===c?null:window.unescape(c));return c};
k.prototype.set=function(a,c,b){var d;b&&"number"===typeof b?(d=new Date,d.setTime(d.getTime()+36E5*b),b=d.toGMTString(),b="; expires="+b):b="";d="; domain="+window.location.hostname;c=window.escape(c);window.document.cookie=a+"="+c+b+"; path=/"+d};k.prototype.del=function(a){this.set(a,"",-8760)};
k.prototype.check_cookie=function(a,c){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";for(var b=a.split("|"),d=b.length-1;0<=d;d--)if(b[d]){var g=b[d].split(":");c===g[0]&&(g[2]=""+(parseInt(g[2])+1),b[d]=g.join(":"))}return b.join("|")};k.prototype.handle=function(a){var c=this.get(this.__adc)||"";-1!==c.indexOf(a)?this.set(this.__adc,this.check_cookie(c,a),this.exp):(a=[c,[a,this.get_date(this.eexp),"1"].join(":")].join("|"),this.set(this.__adc,a,this.exp))};
k.prototype.expire_old=function(){if(!this._global("adroll_ext_network")&&!this._global("adroll_optout")){for(var a=this.get_date(!1),c=this.get(this.__adc),c=c?c.split("|"):[""],b=[],d=c.length-1;0<=d;d--)c[d]&&c[d].split(":")[1]>a&&b.push(c[d]);this.set(this.__adc,b.join("|"),this.exp)}};k.prototype.get_date=function(a){var c=new Date;a&&c.setTime(c.getTime()+36E5*a);a=""+c.getUTCFullYear();var b=c.getUTCMonth(),b=10<=b?b:"0"+b,c=c.getUTCDate();return[a,b,10<=c?c:"0"+c].join("")};
k.prototype.consent_allowed=function(a){var c=this._global("__adroll_consent");return"object"===typeof c?c[a]:c};k.prototype.generate_link=function(){return""};k.prototype.view=function(a){var c=new window.Image;c.src=this._srv("/view/"+a);c.setAttribute("width","1");c.setAttribute("height","1");c.setAttribute("border","0");this._head().appendChild(c)};k.prototype.set_cookie=function(){};
k.prototype.reset=function(){this._set_global("adroll_c_id",null);this._set_global("adroll_url_macro","");this._set_global("adroll_c_macro","");this._set_global("adroll_cpm_macro","");this._set_global("adroll_ext_network",null);this._set_global("adroll_subnetwork",null);this._set_global("adroll_ad_payload",null);this._set_global("adroll_win_notif",null)};k.prototype.set_pixel_cookie=function(a,c,b){this._global("adroll_optout")||(this.handle(a),this.handle(c),this.handle(b),this.pixel_loaded())};
k.prototype.add_pixel_load_callback=function(a){this._loaded?a():this._ensure_global("adroll_callbacks",[]).push(a)};k.prototype.pixel_loaded=function(){this._loaded=!0;for(var a=this._ensure_global("adroll_callbacks",[]),c=0;c<a.length;c++)a[c].called||(a[c](),a[c].called=!0)};k.prototype.addLoadEvent=function(a){if(this._has_global("__adroll_loaded")&&this._global("__adroll_loaded")||this._has_global("_adroll_ie")&&this._global("_adroll_ie")||/msie/i.test(window.navigator.userAgent))return a();if(/WebKit/i.test(window.navigator.userAgent)){var c=window.setInterval(function(){/loaded|complete/.test(window.document.readyState)&&window.clearInterval(c);a()},10);return null}var b=window.onload;window.onload=function(){a();b&&b()}};
k.prototype._head=function(){return(window.document.getElementsByTagName("head")||[null])[0]||(window.document.getElementsByTagName("body")||[null])[0]||window.document.getElementsByTagName("script")[0].parentNode};k.prototype.is_under_experiment=function(){var a=this._global("adroll_adv_id");return 0<=["ADV_EID","3QOM4TKN4RD7TO3HCPYRKV","RR6VELGGEBBKZEEQ2FK34E","VIDRP27DERDLPD5BI427XM"].indexOf(a)};k.prototype.load_experiment_js=function(){var a=window.document.getElementById("adroll_scr_exp");return a?a:this.add_script_element("https://s.adroll.com/j/exp/"+window.adroll_adv_id+"/index.js",{id:"adroll_scr_exp",onError:"window.adroll_exp_list = [];"})};k.prototype.is_experiment_js_loaded=function(){return!!window.adroll_exp_list};
k.prototype.is_test_advertisable=function(){return"ADV_EID"===this._global("adroll_adv_id")};k.prototype.if_under_experiment_js=function(a,c,b,d){function g(){if(p.is_experiment_js_loaded()||p.is_test_advertisable())m=!0;m?window.adroll_exp_list&&0<=window.adroll_exp_list.indexOf(a)?c.call(p):b.call(p):window.setTimeout(g,10)}var m=!1,p=this;this.load_experiment_js();window.setTimeout(function(){m=!0},d||500);g()};k.prototype.external_data_to_qs=function(a){var c=[],b=this.get_external_data();if(!b)return null;for(var d in b)b.hasOwnProperty(d)&&this._is_defined(b[d])&&null!==b[d]&&c.push(this.normalize_var(window.escape(""+d)+"="+window.escape(""+b[d]),!1));c=c.join("&");a&&(c=window.escape(c));return"adroll_external_data="+c};
k.prototype.replace_external_data=function(a){var c=this.get_external_data(),b=this.get_conversion_value(),d=null,g;if(c)for(g in c)c.hasOwnProperty(g)&&(d=new RegExp("\\["+g+"\\]","gi"),a=a.replace(d,c[g]),d=new RegExp("\\["+g+"_ESC\\]","gi"),a=a.replace(d,window.escape(c[g])));if(b)for(g in b)b.hasOwnProperty(g)&&(d=new RegExp("\\["+g+"\\]","gi"),a=a.replace(d,b[g]),d=new RegExp("\\["+g+"_ESC\\]","gi"),a=a.replace(d,window.escape(b[g])));return a};
k.prototype.get_external_data=function(){if(this._has_global("adroll_custom_data")){var a=this._global("adroll_custom_data"),c={},b;for(b in a)a.hasOwnProperty(b)&&"undefined"!==a[b]&&(c[b.toLowerCase()]=a[b]);return c}return null};
k.prototype.get_conversion_value=function(){var a=this._ensure_global("adroll_currency",null),c=this._ensure_global("adroll_conversion_value",null),b=this._ensure_global("adroll_conversion_value_in_dollars",null);return c?{conv_value:""+c,currency:a}:b?{conv_value:""+parseInt(100*b),currency:"USC"}:null};k.prototype._has_global=function(a){return this._is_defined(this._global(a))};k.prototype._global=function(a){return window[a]};k.prototype._set_global=function(a,c){window[a]=c};k.prototype._unset_global=function(a){delete window[a]};k.prototype._ensure_global=function(a,c){this._has_global(a)||this._set_global(a,c);return this._global(a)};k.prototype.jsonStringify=function(a){this.jsonStringifyFunc||this.initJsonStringify();return this.jsonStringifyFunc(a)};k.prototype.jsonParse=function(a){var c=this._global("JSON");return"function"===typeof c.parse?c.parse(a):eval("("+a+")")};
k.prototype.initJsonStringify=function(){var a=this._global("JSON");this.jsonStringifyFunc=a||a.stringify&&"function"===typeof a.stringify?a.stringify:function(){function a(c){return g[c]||"\\u"+(c.charCodeAt(0)+65536).toString(16).substr(1)}var b=Object.prototype.toString,d=Array.isArray||function(a){return"[object Array]"===b.call(a)},g={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},m=/[\\"\u0000-\u001F\u2028\u2029]/g;return function q(l){if(null===l)return"null";
if("number"===typeof l)return isFinite(l)?l.toString():"null";if("boolean"===typeof l)return l.toString();if("object"===typeof l){if("function"===typeof l.toJSON)return q(l.toJSON());if(d(l)){for(var e="[",h=0;h<l.length;h++)e+=(h?", ":"")+q(l[h]);return e+"]"}if("[object Object]"===b.call(l)){e=[];for(h in l)l.hasOwnProperty(h)&&e.push(q(h)+": "+q(l[h]));return"{"+e.join(", ")+"}"}}return'"'+l.toString().replace(m,a)+'"'}}()};k.prototype.macro_values=function(){var a=this._ensure_global("adroll_cpm_macro",null),c=this._ensure_global("adroll_url_macro",null),b=this._ensure_global("adroll_c_macro",null),d=this._ensure_global("adroll_subnetwork",null),g=this._ensure_global("adroll_ad_payload",null),m=this._ensure_global("adroll_win_notif",null),p=this._ensure_global("adroll_rtb_dict",null),q={r:/^\$\{.*\}$/i,g:/^%%.*%%$/i,b:/^\[.*\]$/i,x:/^\$\{.*\}$/i,t:/INSERTCLICKTRACKER/}[this._global("adroll_ext_network")],q=this._is_defined(q)?
q:/CANNOT_MATCH_THIS/,l={};a&&!q.test(a)&&(l.adroll_cpm_macro=a);c&&!q.test(c)&&(l.adroll_url_macro=c);b&&!q.test(b)&&(l.adroll_c_macro=b);d&&!q.test(d)&&(l.adroll_subnetwork=d);g&&!q.test(g)&&(l.adroll_ad_payload=g);m&&!/^[|$]/.test(m)&&(l.adroll_win_notif=m);if(p&&("string"!==typeof p||!/^[|$]/.test(p))){if("string"===typeof p)try{0===p.indexOf("b64:")&&(p=atob(p.substr(4))),p=this.jsonParse(p)}catch(e){this.log("failed to parse: "+e),p={}}"object"===typeof p&&(l.adroll_rtb_dict=p)}return l};
k.prototype.format_macros=function(a,c,b,d){return this.macro_url_params(this.macro_values(),a,c,b,d)};
k.prototype.macro_url_params=function(a,c,b,d,g){g=this._is_defined(g)?g:!1;var m=d?window.escape:function(a){return a},p=a.adroll_cpm_macro,q=a.adroll_url_macro,l=b?a.adroll_c_macro:null,e=[],h=c?this.parseUri(c):null,h=h?this.endswith(h.path,".tp"):!1;!h&&g&&e.push(["desturl",""]);l&&0===l.indexOf("http")?(g=m,"g"===this._global("adroll_ext_network")&&(g=d?function(a){return a}:window.unescape),e.push(["clickurl",g(l)])):h&&g&&e.push(["clickurl",""]);this._global("adroll_ext_network")&&e.push(["adroll_network",
this._global("adroll_ext_network")]);p&&e.push(["cpm",p]);a.adroll_subnetwork&&e.push(["adroll_subnetwork",a.adroll_subnetwork]);a.adroll_ad_payload&&e.push(["adroll_ad_payload",a.adroll_ad_payload]);q&&(a=this.parseUri(window.unescape(q)),e.push(["site_url",m("http://"+a.host)]),b&&(e.push(["adroll_width",m(this._global("adroll_width"))]),e.push(["adroll_height",m(this._global("adroll_height"))])));this.log("Macros found "+this.serialize(e));return c?this.buildurl(c,e):this.serialize(e)};
k.prototype.serialize=function(a){if(a.length){for(var c=[],b=a.length-1;0<=b;b--)c.push(a[b].join("="));return c.join("&")}return""};k.prototype.endswith=function(a,c){return-1!==a.indexOf(c,a.length-c.length)};k.prototype.buildurl=function(a,c){var b=this.serialize(c),d=a.indexOf("?");return b?d===a.length-1?a+b:-1!==d?"&"===a[a.length-1]?a+b:a+"&"+b:a+"?"+b:a};k.prototype.md5=function(){function a(a,c){var b=(a&65535)+(c&65535);return(a>>16)+(c>>16)+(b>>16)<<16|b&65535}function c(c,b,d,h,f,g){b=a(a(b,c),a(h,g));return a(b<<f|b>>>32-f,d)}function b(a,b,d,h,f,g,m){return c(b&d|~b&h,a,b,f,g,m)}function d(a,b,d,h,f,g,m){return c(b&h|d&~h,a,b,f,g,m)}function g(a,b,d,h,f,g,m){return c(d^(b|~h),a,b,f,g,m)}function m(m,l){var e=m[0],h=m[1],f=m[2],n=m[3],e=b(e,h,f,n,l[0],7,-680876936),n=b(n,e,h,f,l[1],12,-389564586),f=b(f,n,e,h,l[2],17,606105819),h=b(h,f,n,e,l[3],
22,-1044525330),e=b(e,h,f,n,l[4],7,-176418897),n=b(n,e,h,f,l[5],12,1200080426),f=b(f,n,e,h,l[6],17,-1473231341),h=b(h,f,n,e,l[7],22,-45705983),e=b(e,h,f,n,l[8],7,1770035416),n=b(n,e,h,f,l[9],12,-1958414417),f=b(f,n,e,h,l[10],17,-42063),h=b(h,f,n,e,l[11],22,-1990404162),e=b(e,h,f,n,l[12],7,1804603682),n=b(n,e,h,f,l[13],12,-40341101),f=b(f,n,e,h,l[14],17,-1502002290),h=b(h,f,n,e,l[15],22,1236535329),e=d(e,h,f,n,l[1],5,-165796510),n=d(n,e,h,f,l[6],9,-1069501632),f=d(f,n,e,h,l[11],14,643717713),h=d(h,
f,n,e,l[0],20,-373897302),e=d(e,h,f,n,l[5],5,-701558691),n=d(n,e,h,f,l[10],9,38016083),f=d(f,n,e,h,l[15],14,-660478335),h=d(h,f,n,e,l[4],20,-405537848),e=d(e,h,f,n,l[9],5,568446438),n=d(n,e,h,f,l[14],9,-1019803690),f=d(f,n,e,h,l[3],14,-187363961),h=d(h,f,n,e,l[8],20,1163531501),e=d(e,h,f,n,l[13],5,-1444681467),n=d(n,e,h,f,l[2],9,-51403784),f=d(f,n,e,h,l[7],14,1735328473),h=d(h,f,n,e,l[12],20,-1926607734),e=c(h^f^n,e,h,l[5],4,-378558),n=c(e^h^f,n,e,l[8],11,-2022574463),f=c(n^e^h,f,n,l[11],16,1839030562),
h=c(f^n^e,h,f,l[14],23,-35309556),e=c(h^f^n,e,h,l[1],4,-1530992060),n=c(e^h^f,n,e,l[4],11,1272893353),f=c(n^e^h,f,n,l[7],16,-155497632),h=c(f^n^e,h,f,l[10],23,-1094730640),e=c(h^f^n,e,h,l[13],4,681279174),n=c(e^h^f,n,e,l[0],11,-358537222),f=c(n^e^h,f,n,l[3],16,-722521979),h=c(f^n^e,h,f,l[6],23,76029189),e=c(h^f^n,e,h,l[9],4,-640364487),n=c(e^h^f,n,e,l[12],11,-421815835),f=c(n^e^h,f,n,l[15],16,530742520),h=c(f^n^e,h,f,l[2],23,-995338651),e=g(e,h,f,n,l[0],6,-198630844),n=g(n,e,h,f,l[7],10,1126891415),
f=g(f,n,e,h,l[14],15,-1416354905),h=g(h,f,n,e,l[5],21,-57434055),e=g(e,h,f,n,l[12],6,1700485571),n=g(n,e,h,f,l[3],10,-1894986606),f=g(f,n,e,h,l[10],15,-1051523),h=g(h,f,n,e,l[1],21,-2054922799),e=g(e,h,f,n,l[8],6,1873313359),n=g(n,e,h,f,l[15],10,-30611744),f=g(f,n,e,h,l[6],15,-1560198380),h=g(h,f,n,e,l[13],21,1309151649),e=g(e,h,f,n,l[4],6,-145523070),n=g(n,e,h,f,l[11],10,-1120210379),f=g(f,n,e,h,l[2],15,718787259),h=g(h,f,n,e,l[9],21,-343485551);m[0]=a(e,m[0]);m[1]=a(h,m[1]);m[2]=a(f,m[2]);m[3]=
a(n,m[3])}var p="0123456789abcdef".split("");return function(a){var b=a;/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b)));var c=b.length;a=[1732584193,-271733879,-1732584194,271733878];var d;for(d=64;d<=b.length;d+=64){for(var f=b.substring(d-64,d),g=[],r=void 0,r=0;64>r;r+=4)g[r>>2]=f.charCodeAt(r)+(f.charCodeAt(r+1)<<8)+(f.charCodeAt(r+2)<<16)+(f.charCodeAt(r+3)<<24);m(a,g)}b=b.substring(d-64);f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(d=0;d<b.length;d++)f[d>>2]|=b.charCodeAt(d)<<(d%4<<3);f[d>>2]|=
128<<(d%4<<3);if(55<d)for(m(a,f),d=0;16>d;d++)f[d]=0;f[14]=8*c;m(a,f);for(b=0;b<a.length;b++){c=a;d=b;f=a[b];g="";for(r=0;4>r;r++)g+=p[f>>8*r+4&15]+p[f>>8*r&15];c[d]=g}return a.join("")}}();k.prototype._gurl=function(){var a=window.location;return this.normalize_url(a.pathname+a.search)};k.prototype.get_dummy_product_for_facebook=function(a){return{product_id:"adroll_dummy_product",product_group:a,product_action:null,product_category:null}};k.prototype.facebook_dummy_product_enabled=function(){return!0};
k.prototype.extract_pid=function(a,c,b){function d(a){return a?(a=new RegExp(a,"gi"),!!a.exec(l)):null}a||(a={});var g=null,m=null,p=null,q=null,l=this._gurl(),e=this.get_external_data();e&&(m=e.product_id,g=e.product_group,p=e.product_action,q=e.adroll_product_category_id);if(!m&&a.regexp_group&&!("string"===a.regexp_group&&a.regexp_group instanceof String)&&"html"===a.regexp_group.scheme){if(d(a.blacklist_regexp)||!0!==d(a.regexp))return"";m=this.get_product_id_from_dom(a.regexp_group)}else if(!m){if(d(a.blacklist_regexp))return"";
m=this.get_product_id_from_url(l,a.regexp,a.regexp_group)}g||!a.product_group_group||"string"===a.product_group_group&&a.product_group_group instanceof String||"html"!==a.product_group_group.scheme?g||a.product_group_regexp&&(g=this.get_product_id_from_url(l,a.product_group_regexp,a.product_group_group)):g=this.get_product_id_from_dom(a.product_group_group);if(m)a={product_id:m,product_group:g,product_action:p,product_category:q};else if(this.facebook_dummy_product_enabled()&&"facebook"===c)a=this.get_dummy_product_for_facebook(g);
else return null;b&&b(a);return a};
k.prototype.get_pid=function(a){this.extract_pid(a,"adroll",function(a){if(a){var b=a.product_id,d=a.product_group,g=a.product_action,m=a.product_category;a=[];var p;if(b instanceof Array)for(p=0;p<b.length;p++)a.push(["adroll_product_id",this.normalize_var((b[p]+"").toLowerCase(),!0)]);else a.push(["adroll_product_id",this.normalize_var((b+"").toLowerCase(),!0)]);if(m instanceof Array)for(p=0;p<m.length;p++)a.push(["adroll_product_category_id",this.normalize_var((m[p]+"").toLowerCase(),!0)]);else m&&
a.push(["adroll_product_category_id",this.normalize_var((m+"").toLowerCase(),!0)]);d&&a.push(["adroll_product_group",this.normalize_var((d+"").toLowerCase(),!0)]);g&&a.push(["adroll_product_action",this.normalize_var((g+"").toLowerCase(),!0)]);(b=this.external_data_to_qs(!0))&&a.push([b]);b=this._srv(this.buildurl("/p/"+this._global("adroll_adv_id")+"/",a));d=window.document.createElement("img");d.src=b;d.height=d.width=1;d.border=0;this._head().appendChild(d)}}.bind(this))};
k.prototype.get_product_id_from_dom=function(a){var c=null,b;a.path&&(window.jQuery?(b=window.jQuery(a.path),b.length&&(b=b.eq(0),c="text"===a.attribute?b.text():b.attr(a.attribute))):window.Prototype&&window.$$?(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.innerText&&!window.opera?b.innerText:b.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g," "):b.readAttribute(a.attribute))):window.YUI?(b=window.YUI().use("node"),b.one&&(b=b.one(a.path),c=null,b&&(c="text"===a.attribute?
b.get("text"):b.getAttribute(a.attribute)))):window.$$&&(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.get("text"):b.getProperty(a.attribute))));if(c&&(c=c.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a.regular_expression&&a.regular_expression_replace))if(b=new RegExp(a.regular_expression,"gi"),c=b.exec(c),null!==c){a=a.regular_expression_replace;for(b=0;b<c.length;b++)a=a.replace(new RegExp("\\\\"+b,"gi"),c[b]||"");c=a}else c="";return c};
k.prototype.get_product_id_from_url=function(a,c,b){var d=null;try{d=parseInt(b)}catch(g){}return null!==d&&!isNaN(d)&&c&&(a=(new RegExp(c,"gi")).exec(a),null!==a&&d in a)?a[d]:null};k.prototype.render_pixel_code=function(a,c){var b=this;b._has_global("adroll_tpc")?b.render_pixel_code_exec(a,c):b.load_adroll_tpc(function(){b.render_pixel_code_exec(a,c)})};
k.prototype.render_pixel_code_exec=function(a,c){this.expire_old();var b=this._srv("/pixel"),d=window.document.createElement("script");d.setAttribute("async","true");d.type="text/javascript";var g=this.get_keywords();this.addLoadEvent(function(m){return function(){var p=[];try{200>=window.document.referrer.length&&p.push("adroll_s_ref="+window.escape(window.document.referrer))}catch(f){}try{p.push("keyw="+window.escape(g))}catch(f){}try{m._has_global("adroll_segments")&&p.push("name="+window.escape(m._global("adroll_segments").toLowerCase()))}catch(f){}try{m._has_global("adroll_p")&&
p.push("adroll_p="+window.escape(m._global("adroll_p")))}catch(f){}try{m._has_global("adroll_u")&&p.push("adroll_u="+window.escape(m._global("adroll_u")))}catch(f){}try{m._has_global("adroll_m")&&m._has_global("adroll_m_type")&&(p.push("adroll_m="+window.escape(m._global("adroll_m"))),p.push("adroll_m_type="+window.escape(m._global("adroll_m_type"))))}catch(f){}try{var q=m.get_conversion_value();q.conv_value&&p.push("conv_value="+q.conv_value);q.currency&&p.push("adroll_currency="+q.currency)}catch(f){}try{if(m._has_user_identifier()){var l=
m._global("adroll_user_identifier"),l=l.replace(/^\s\s*/,"").replace(/\s\s*$/,"");p.push("user_identifier="+m.md5(l))}}catch(f){}try{m._has_global("adroll_shop_id")&&(q={},m._has_global("adroll_custom_data")?q=m._global("adroll_custom_data"):m._set_global("adroll_custom_data",q),"undefined"===typeof q.adroll_shop_id&&(q.adroll_shop_id=m._global("adroll_shop_id")));var e=m.external_data_to_qs(!0);e&&p.push(e)}catch(f){}try{var h=window.location.href.split("#")[0];500>=h.length&&p.push("arrfrr="+window.encodeURIComponent(h))}catch(f){}p=
m.get_base_url(b,a,c,null,"",p);d.src=p;m._head().appendChild(d)}}(this));this.addLoadEvent(function(a){return function(){var b=a._global("adroll");if(b&&"object"===typeof b){b.identify=function(){return a.identify.apply(a,arguments)};b.track=function(){return a.track.apply(a,arguments)};for(var c,d,e=0;e<b.length;e++)c=b[e][0],d=b[e][1],"identify"===c?a.identify.apply(a,d):"track"===c&&a.track.apply(a,d)}}}(this))};
k.prototype.render_ad_code=function(a,c,b,d){d=this._is_defined(d)?d:null;if(!this._is_defined(this._r[c])||d){var g=["width="+this._global("adroll_width"),"height="+this._global("adroll_height"),"x=0","y=0"];if(b)this.log("Rendering test ad "+b+" in space "+c),g.push("test_ad="+b),a=this.get_url(a,c,null,"ad",g);else if(d){this.log("Rendering adgroup "+d);b=this.macro_values();var m=this.macro_url_params(b,!1,!1,!1,!1);g.push(m);this.render_win_notification(b);this.render_extra_script(b);a=this.get_url(a,
c,d,null,g)}else this.log("Rendering ad space "+c),a=this.get_url(a,c,null,"ad",g);this.expire_old();window.document.write('<script src="'+a+'">\x3c/script>');this._nad+=1;this._r[c]=1}};
k.prototype.render_win_notification=function(a){if(a.adroll_cpm_macro&&a.adroll_win_notif){var c=(this._secure()?"https://":"http://")+a.adroll_win_notif+a.adroll_cpm_macro;a.adroll_ad_payload&&(a.adroll_rtb_dict&&a.adroll_rtb_dict.waap||/waap=1&/.test(a.adroll_win_notif)&&!this._is_defined(a.adroll_rtb_dict))&&(c+="&ad_payload="+a.adroll_ad_payload);this.imgRequest(c)}};
k.prototype.render_extra_script=function(a){a.adroll_rtb_dict&&a.adroll_rtb_dict.extra_script_src&&this.add_script_element(a.adroll_rtb_dict.extra_script_src,{})};k.prototype.add_script_element=function(a,c){var b=window.document.createElement("script"),d=this._secure()?"https://":"http://";a.match(/^(\w+:)*\/\//)&&(d="");for(var g in c)c.hasOwnProperty(g)&&"src"!==g&&b.setAttribute(g,c[g]);b.type="text/javascript";b.src=d+a;this._head().appendChild(b);return b};
k.prototype.get_base_url=function(a,c,b,d,g,m){var p=a.split("?");a=p[0]+"/"+c+"/"+b+(d?"/"+d:"")+(g?"/"+g:"");var q="?";p[1]&&(a+="?"+p[1],q="&");var p=q+"no-cookies=1&pv=",l="";this.cookieEnabled(!1)?(l=window.escape(this.get_eids()),a+=q+"pv="+this.pv+"&cookie="+l):a+=p+this.pv;m&&(a+="&"+m.join("&"));a=this.add_tpc_to_url(a);if(a.length>this._url){this.del(this.__adc);if(a.length-l.length>this._url)return a;this.log("Url was too big, shrinking it");return this.get_url(c,b,d,g,m)}this.log("Generated url: "+
a);return a};k.prototype.get_url=function(a,c,b,d,g){var m=b?this._srv("/c"):this._srv("/r");return this.get_base_url(m,a,c,b,d,g)};k.prototype.get_eids=function(){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";try{for(var a=this.get(this.__adc),c=a?a.split("|"):"",a=[],b=c.length-1;0<=b;b--)if(c[b]){var d=c[b].split(":");a.push([d[0],d[2]].join(":"))}return a.join("|")}catch(g){return this.del(this.__adc),""}};k.prototype.record_user=function(a){var c="adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(" "),b,d;a=a||{};var g={adroll_user_identifier:!0};for(b=0;b<c.length;b++){try{this._unset_global(c[b])}catch(m){}if(c[b]in a){c[b]in g?this._set_global(c[b],window.escape(a[c[b]])):"adroll_email"!==c[b]&&this._set_global(c[b],a[c[b]]);try{delete a[c[b]]}catch(m){}}}try{this._unset_global("adroll_custom_data")}catch(m){}for(d in a)if(a.hasOwnProperty(d)){this._set_global("adroll_custom_data",
a);break}this.render_pixel_code(this._global("adroll_adv_id"),this._global("adroll_pix_id"))};k.prototype.record_adroll_email=function(a){if(this._has_email()){var c=this._global("_adroll_email"),c=c.replace(/^\s+|\s+$/g,""),b,d=c.toLowerCase(),c=this.is_email_valid(c);this.is_already_hashed(d)?b=d:c&&(b=this.md5(d));b="https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?hashed_email="+b;c&&(d=d.split("@")[1],b+="&email_domain="+window.encodeURIComponent(d));a&&(b+="&idsource="+a);this.imgRequest(b)}};
k.prototype._send_plain_text_identifiers=function(a,c,b){(a||c)&&b&&(b="https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?idsource="+b,a&&(a=a.replace(/^\s+|\s+$/g,"").toLowerCase(),b+="&email="+window.encodeURIComponent(a)+"&hashed_email="+this.md5(a),a=a.split("@")[1],b+="&email_domain="+window.encodeURIComponent(a)),c&&(b+="&user_identifier="+window.encodeURIComponent(c)),this.imgRequest(b))};k.prototype._has_email=function(){return this._has_global("_adroll_email")};
k.prototype._has_user_identifier=function(){return this._has_global("adroll_user_identifier")&&"example_user_id"!==this._global("adroll_user_identifier")};k.prototype.is_already_hashed=function(a){return/^[a-f0-9]{32}$/.test(a)};k.prototype.is_email_valid=function(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)};
k.prototype.identify=function(a,c){(a.email||a.userId)&&this._send_plain_text_identifiers(a.email,a.userId,c||"adroll-identify");a.email&&this._set_global("_adroll_email",a.email);var b=this.copyObj(a,["email","userId"]);b&&(b="https://d.adroll.com/uat/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?user_attributes="+window.encodeURIComponent(this.jsonStringify(b)),c&&(b+="&idsource="+c),this.imgRequest(b));this._queueAndCallback("identify",[a,c])};
k.prototype.track=function(a,c){if(a){var b="https://d.adroll.com/uev/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?event_name="+window.encodeURIComponent(a),d=this.copyObj(c);d&&(b+="&event_attributes="+window.encodeURIComponent(this.jsonStringify(d)));this.imgRequest(b);this._queueAndCallback("track",[a,c])}};
k.prototype._registerCallback=function(a,c,b){this.callbacks=this.callbacks||{};this.callbackNames=this.callbackNames||[];this.callbacks[a]=this.callbacks[a]||[];if(!("function"!==typeof c||-1<this.callbackNames.indexOf(b))&&(this.callbackNames.push(b),this.callbacks[a].push(c),this.callbackQueues&&this.callbackQueues[a]&&this.callbackQueues[a].length))for(b=0;b<this.callbackQueues[a].length;b++)c.apply(null,this.callbackQueues[a][b])};
k.prototype._queueAndCallback=function(a,c){this.callbackQueues=this.callbackQueues||{};this.callbackQueues[a]=this.callbackQueues[a]||[];this.callbackQueues[a].push(c);if(this.callbacks&&this.callbacks[a]&&this.callbacks[a].length)for(var b=0;b<this.callbacks[a].length;b++)this.callbacks[a][b].apply(null,c)};k.prototype.registerIdentifyCallback=function(a,c){this._registerCallback("identify",a,c)};k.prototype.registerTrackCallback=function(a,c){this._registerCallback("track",a,c)};k.prototype._is_defined=function(a){return"undefined"!==typeof a};k.prototype.normalize_var=function(a,c){if(!a)return"";a=a.toString().substr(0,this._kwl).replace(/,/gi,".");c&&(a=window.escape(a));return a};k.prototype.get_keywords=function(){try{var a=window.document.referrer||"";if(!a)return"";var c=this.parseUri(a);return-1!==c.host.indexOf("www.google.")?c.queryKey.q.substring(0,this._kwl):-1!==c.host.indexOf("bing.com")?c.queryKey.q.substring(0,this._kwl):""}catch(b){return""}};
k.prototype.parseUri=function(a){a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var c={queryKey:{}},b=14,d="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");b--;)c[d[b]]=a[b]||"";c[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,d){b&&(c.queryKey[b]=d)});return c};
k.prototype._secure=function(){return!0};k.prototype._protocol=function(){return window.document.location.protocol};k.prototype._native=function(){try{return"http"!==this._protocol().slice(0,4)}catch(a){return!0}};k.prototype._srv=function(a){a=this._is_defined(a)?a:"";a=this.add_tpc_to_url("https://d.adroll.com"+a);return this.add_fpc_to_url(a)};k.prototype._cdn=function(a){a=this._is_defined(a)?a:"";return"https://s.adroll.com"+a};k.prototype.log=function(a){this._logs.push(a)};
k.prototype.read_log=function(a){return this._logs.join(a?"\n":"<br>\n")};k.prototype.normalize_url=function(a){return a.toLowerCase()};k.prototype.imgRequest=function(a){var c=new window.Image;c.src=this.add_tpc_to_url(a);c.setAttribute("width","1");c.setAttribute("height","1");c.setAttribute("border","0");this._head().appendChild(c)};k.prototype.copyObj=function(a,c){if(!a)return null;var b={},d=0,g;for(g in a)!a.hasOwnProperty(g)||c&&-1!==c.indexOf(g)||(d++,b[g]=a[g]);return d?b:null};
k.prototype.add_tpc_to_url=function(a){var c=this._global("adroll_tpc");if(!a||!c)return a;var b=this.parseUri(a);if(b.queryKey.adroll_tpc||"d.adroll.com"!==b.host&&"d.adroll.com"!==b.host+":"+b.port)return a;var d=a.indexOf("?"),g=b="";-1!==d?(b=a.slice(0,d+1),g="&"+a.slice(d+1)):(d=a.indexOf("#",-1===d?0:d),-1===d?b=a+"?":(b=a.slice(0,d)+"?",g=a.slice(d)));return b+"adroll_tpc="+encodeURIComponent(c)+g};
k.prototype.add_fpc_to_url=function(a){var c=this.get_first_party_cookie();if(!a||!c)return a;var b=this.parseUri(a);if(b.queryKey.adroll_fpc||"d.adroll.com"!==b.host&&"d.adroll.com"!==b.host+":"+b.port)return a;b=-1===a.indexOf("?")?"?":"&";return a+b+"adroll_fpc="+encodeURIComponent(c)};k.prototype.getSafariVersion=function(){var a=/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(navigator.userAgent);return a?a[1]:null};
k.prototype.set_tpc=function(a,c){var b=this.tpc_callback();a&&c&&this._set_global("adroll_tpc",encodeURIComponent(a)+"="+encodeURIComponent(c));b&&b.call(this)};k.prototype.tpc_callback=function(a){var c=window.adroll_tpc_callback;window.adroll_tpc_callback=a;return c};k.prototype.call_next_tpc=function(a){(a=this.tpc_callback(a))&&a.call(this)};k.prototype.extract_query_param=function(a,c){for(var b=c.split("&"),d=0;d<b.length;d++){var g=b[d].split("=");if(decodeURIComponent(g[0])===a)return decodeURIComponent(g[1])}return null};
k.prototype.get_adroll_sid=function(){var a=this.get_consent_params();return a&&(a=this.extract_query_param("_s",a))?a:this._global("adroll_sid")};k.prototype.call_consent_write=function(a){this.add_script_element(this._srv("/consent/write?"+a))};k.prototype.call_consent_check=function(){var a=["_s="+this.get_adroll_sid()];"#_ar_gdpr="===window.location.hash.substr(0,10)&&a.push("dbg="+unescape(window.location.hash.substr(10)));a="/consent/check/"+this._global("adroll_adv_id")+"?"+a.join("&");this.add_script_element(this._srv(a))};
k.prototype.load_adroll_tpc=function(a){this.tpc_callback(a);if(this._consent_checked)return this.set_consent();this._consent_checked=!0;this.call_consent_check()};k.prototype.get_tpc_decode_timeout=function(){return 1E3};k.prototype.set_first_party_cookie=function(){if(!this.get_first_party_cookie()){var a=this.md5((new Date).getTime()+Math.round(1E11*Math.random())+window.navigator.userAgent.toLowerCase()+window.document.referrer);this.set("__adroll_fpc",a,43800)}};
k.prototype.get_first_party_cookie=function(){return this.get("__adroll_fpc")};window.__adroll=window.__adroll||new k;}());
(function(a){a.adroll_optout=!1;a.adroll_ext_network=null;a.adroll_callbacks="undefined"===typeof a.adroll_callbacks?[]:a.adroll_callbacks;a.__adroll.render_pixel_code(a.adroll_adv_id,a.adroll_pix_id)})(window);
