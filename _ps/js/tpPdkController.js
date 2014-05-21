(function(){var b=navigator.userAgent.toLowerCase(),n=function(e){return e.test(b)
},c=n(/opera/),d=!c&&n(/msie/),f=d&&n(/trident\/5.0/),i=d&&n(/msie 6/),j=n(/webkit/),a=n(/chrome/),l=n(/android/),g=n(/windows|win32/),h,m="";
try{h=document.getElementsByTagName("script");
m=h[h.length-1].src.substr(0,h[h.length-1].src.lastIndexOf("/"))
}catch(k){m=""
}window.$pdk={bootloader_version:1};
$pdk.apply=function(r,s,q){if(q){$pdk.apply(r,q)
}if(r&&s&&typeof s=="object"){for(var e in s){r[e]=s[e]
}}return r
};
$pdk.apply($pdk,{isOpera:c,isIE:d,isIE9:f,isIE6:i,isWebKit:j,isChrome:a,isAndroid:l,isWindows:g,scriptRoot:m,defaultAppJsRoot:"js/app",isArray:function(e){return Object.prototype.toString.apply(e)==="[object Array]"
},isEmpty:function(o,e){return o===null||o===undefined||(($pdk.isArray(o)&&!o.length))||(!e?o==="":false)
},isPrimitive:function(e){var o=typeof e;
return o=="string"||o=="number"||o=="boolean"
},isObject:function(e){return e&&typeof e=="object"
},tupleComp:function(s,r,o){var e=-1,q,p=s.length;
for(q=0;
q<p;
q++){e=o(s[q],r[q]);
if(e!==0){break
}}return e
},each:function(r,q,p){if($pdk.isEmpty(r,true)){return
}if(typeof r.length=="undefined"||$pdk.isPrimitive(r)){r=[r]
}for(var o=0,e=r.length;
o<e;
o++){if(q.call(p||r[o],r[o],o,r)===false){return o
}}},ns:function(){var s,r,p=window;
try{p=$wnd!==null&&typeof($wnd)==="object"?$wnd:window
}catch(q){p=window
}$pdk.each(arguments,function(e){r=e.split(".");
s=p[r[0]]=p[r[0]]||{};
$pdk.each(r.slice(1),function(o){s=s[o]=s[o]||{}
})
});
return s
},override:function(e,q){if(q){var o=e.prototype;
$pdk.apply(o,q);
if($pdk.isIE&&q.toString!=e.toString){o.toString=q.toString
}}},extend:function(){var o=function(q){for(var p in q){this[p]=q[p]
}};
var e=Object.prototype.constructor;
return function(u,r,t){if($pdk.isObject(r)){t=r;
r=u;
u=t.constructor!=e?t.constructor:function(){r.apply(this,arguments)
}
}var q=function(){},s,p=r.prototype;
q.prototype=p;
s=u.prototype=new q();
s.constructor=u;
u.superclass=p;
if(p.constructor==e){p.constructor=r
}u.override=function(v){$pdk.override(u,v)
};
s.superclass=s.supr=(function(){return p
});
s.override=o;
$pdk.override(u,t);
u.extend=function(v){$pdk.extend(u,v)
};
return u
}
}()});
$pdk.ns("js.com.theplatform.pdk");
js.com.theplatform.pdk=$pdk
})();
$pdk.ns("$pdk.entrypoint");
$pdk.entrypoint.Entrypoint=$pdk.extend(function(){},{constructor:function(){this._complete=false;
this._registry=null;
this._env=null;
this._callBacks=[];
this._postOnLoad=function(){}
},configure:function(a,b){this._registry=a;
this._env=b
},_loaded:false,addCallback:function(a){this._callBacks.push(a);
if(this._loaded){a.apply()
}},initialize:function(){},onLoad:function(){var c=0,a=this._callBacks.length,d=this;
this._loaded=true;
for(;
c<a;
c++){this._callBacks[c].apply()
}var b=typeof(window._PDK_SUPRESS_INITIALIZE)==="boolean"?window._PDK_SUPRESS_INITIALIZE:false;
if((this._env===null||this._env.getAutoInitialize())&&!b){this.initialize()
}this._postOnLoad()
}});
$pdk.ns("$pdk.env.HttpHead");
$pdk.env.HttpHead.Processor=$pdk.extend(function(){},{constructor:function(a){this._env=a
},process:function(f){var e,a,b,g=this._collectTpMetaTags(f),d=g.length,c;
for(c=0;
c<d;
c++){e=g[c];
if(!$pdk.isEmpty(e.value)){a=e.value.replace(/\s/g,"").toLowerCase().split(",");
b=e.name.replace(/^tp:/,"").toLowerCase();
while(a.length>0){this._env.addToConfigSet(b,a.shift())
}}}},_collectTpMetaTags:function(g){var f,a=[],b,e,h=g.getElementsByTagName("meta"),d=h.length,c;
for(c=0;
c<d;
c++){f=h[c];
b=f.getAttribute("name");
if(typeof(b)==="string"&&b.match(/^tp:/)){e=f.getAttribute("content");
a.push({name:b,value:e})
}}return a
}});
$pdk.Entrypoint=$pdk.apply({},{_class:$pdk.extend($pdk.entrypoint.Entrypoint,{constructor:function(){$pdk.Entrypoint._class.superclass.constructor.call(this)
},initialize:function(){$pdk.Entrypoint._class.superclass.initialize.call(this);
$pdk._bind=function(a){if(typeof a==="string"){$pdk._bind(document.getElementById(a))
}else{if((typeof $pdk.controller.setIFrame==="function"&&a!==null&&typeof a==="object"&&typeof a.tagName==="string"&&a.tagName.toLowerCase()==="iframe")||a instanceof HTMLIFrameElement){$pdk.controller.setIFrame(a)
}}};
$pdk.bind=function(a){$pdk._bind(a);
return $pdk.controller
}
}}),_singleton:null,getInstance:function(){if($pdk.Entrypoint._singleton===null){$pdk.Entrypoint._singleton=new $pdk.Entrypoint._class()
}return $pdk.Entrypoint._singleton
},onLoad:function(){$pdk.Entrypoint.getInstance().onLoad()
}});
$pdk.ns("$pdk.queue.external");
$pdk.queue.external.Controller=$pdk.extend(function(){},{constructor:function(){var a=this;
this.listeners={};
this.queue=[];
this.listenerId=0;
if(window.addEventListener){addEventListener("message",function(b){a.receiveMessage(b)
},false)
}else{attachEvent("onmessage",function(b){a.receiveMessage(b)
})
}},setIFrame:function(a){var b=this;
this.iframe=a;
this.DOMAIN=a.src.substring(0,a.src.indexOf("/",a.src.indexOf(":")+3));
if(a.src.indexOf("#")==-1){a.src+="#playerurl="+escape(window.location.href)
}if(typeof(window.JSON)!=="object"){return
}a.onload=function(d){b.ready=true;
var c;
b.sendMessage("initialization","playerUrl",[window.location.href]);
while(b.queue.length>0){c=window.JSON.parse(b.queue.shift());
b.sendMessage(c.type,c.name,c.parameters)
}}
},sendMessage:function(c,b,a){if(typeof(window.JSON)!=="object"){return
}var d=window.JSON.stringify({type:c,name:b,parameters:a});
if(this.ready){this.iframe.contentWindow.postMessage(d,this.DOMAIN)
}else{this.queue.push(d)
}},addEventListener:function(a,d,b){var c=this.listenerId++;
this.listeners[c]={callback:d,id:c,eventName:a};
this.sendMessage("addEventListener",a,[b,c])
},removeEventListener:function(a,e,b){for(var d in this.listeners){var c=this.listeners[d];
if(typeof(c)==="object"&&typeof(c.id)==="number"){if(c.callback===e&&a===c.eventName){delete this.listeners[c.id];
this.sendMessage("removeEventListener",a,[b,c.id]);
break
}}}},receiveMessage:function(a){if(typeof(window.JSON)!=="object"){return
}a=window.JSON.parse(a.data);
if(a.type=="event"){var b=this.listeners[a.parameters[1]];
if(typeof(b)==="object"){if(typeof(b.callback)==="function"){b.callback(a.parameters[0])
}}}},isExternal:function(){return true
}});
$pdk.ns("$pdk.interfaces");
$pdk.interfaces.expose=function(b,a){a.nextRange=function(d,c){d=typeof(d)==="undefined"?true:d;
this.sendMessage("method","nextRange",[d],c)
};
a.previousRange=function(d,c){d=typeof(d)==="undefined"?true:d;
this.sendMessage("method","previousRange",[d],c)
};
a.getCurrentRange=function(c){this.sendMessage("method","getCurrentRange",[],c)
};
a.firstRange=function(d,c){d=typeof(d)==="undefined"?true:d;
this.sendMessage("method","firstRange",[d],c)
};
a.search=function(d,c){d=typeof(d)==="undefined"?"":d;
this.sendMessage("method","search",[d],c)
};
a.addPlayerCard=function(g,j,d,i,e,c,f,h){this.sendMessage("method","addPlayerCard",[g,j,d,i,e,c,f],h)
};
a.hidePlayerCard=function(c,e,d){this.sendMessage("method","hidePlayerCard",[c,e],d)
};
a.showPlayerCard=function(d,g,f,c,e){this.sendMessage("method","showPlayerCard",[d,g,f,c],e)
};
a.getDefaultBanners=function(c){this.sendMessage("method","getDefaultBanners",[],c)
};
a.getValidRegions=function(c){this.sendMessage("method","getValidRegions",[],c)
};
a.setClipInfo=function(d,e,c){this.sendMessage("method","setClipInfo",[d,e],c)
};
a.loadRelease=function(c,d,e){this.sendMessage("method","loadRelease",[c,d],e)
};
a.refreshReleaseModel=function(c,k,e,f,d,i,j,g,h){this.sendMessage("method","refreshReleaseModel",[c,k,e,f,d,i,g,h],j)
};
a.playNext=function(e,c,d){this.sendMessage("method","playNext",[e,c],d)
};
a.seekToPercentage=function(d,c){this.sendMessage("method","seekToPercentage",[d],c)
};
a.useDefaultEmailForm=function(c,d){this.sendMessage("method","useDefaultEmailForm",[c],d)
};
a.nextClip=function(c){this.sendMessage("method","nextClip",[],c)
};
a.clearAdCookie=function(c){this.sendMessage("method","clearAdCookie",[],c)
};
a.setPreviewImageUrl=function(c,d){this.sendMessage("method","setPreviewImageUrl",[c],d)
};
a.setSubtitleLanguage=function(d,c){this.sendMessage("method","setSubtitleLanguage",[d],c)
};
a.setRelease=function(c,d,e){this.sendMessage("method","setRelease",[c,d],e)
};
a.seekToPosition=function(c,d){this.sendMessage("method","seekToPosition",[c],d)
};
a.previewNextRefreshReleaseModel=function(c){this.sendMessage("method","previewNextRefreshReleaseModel",[],c)
};
a.pause=function(c,d,e){this.sendMessage("method","pause",[c,e],d)
};
a.useDefaultLinkForm=function(c,d){this.sendMessage("method","useDefaultLinkForm",[c],d)
};
a.getBandwidthPreferences=function(c){this.sendMessage("method","getBandwidthPreferences",[],c)
};
a.removeAnnotation=function(c,d){this.sendMessage("method","removeAnnotation",[c],d)
};
a.addAnnotation=function(c,d){this.sendMessage("method","addAnnotation",[c],d)
};
a.hidePlayerRegions=function(d,c,e){this.sendMessage("method","hidePlayerRegions",[d,c],e)
};
a.setReleaseURL=function(d,c,e){this.sendMessage("method","setReleaseURL",[d,c],e)
};
a.previousClip=function(c){this.sendMessage("method","previousClip",[],c)
};
a.resetPlayer=function(c){this.sendMessage("method","resetPlayer",[],c)
};
a.loadReleaseURL=function(c,d,e){this.sendMessage("method","loadReleaseURL",[c,d],e)
};
a.refreshCategoryModel=function(d,c,e){this.sendMessage("method","refreshCategoryModel",[d,e],c)
};
a.setShowSubtitles=function(c,d){this.sendMessage("method","setShowSubtitles",[c],d)
};
a.setCurrentReleaseList=function(d,c){this.sendMessage("method","setCurrentReleaseList",[d],c)
};
a.setProperty=function(f,d,g,c,e){this.sendMessage("method","setProperty",[f,d,g,c],e)
};
a.showEmailForm=function(d,c){this.sendMessage("method","showEmailForm",[d],c)
};
a.showFullScreen=function(c,d){this.sendMessage("method","showFullScreen",[c],d)
};
a.getAnnotations=function(c){this.sendMessage("method","getAnnotations",[],c)
};
a.getCurrentRange=function(c){this.sendMessage("method","getCurrentRange",[],c)
};
a.mute=function(d,c){this.sendMessage("method","mute",[d],c)
};
a.setPlayerMessage=function(e,c,d){this.sendMessage("method","setPlayerMessage",[e,c],d)
};
a.getNextClip=function(c){this.sendMessage("method","getNextClip",[],c)
};
a.setVolume=function(d,c){this.sendMessage("method","setVolume",[d],c)
};
a.getSubtitleStyle=function(c){this.sendMessage("method","getSubtitleStyle",[],c)
};
a.clearAnnotations=function(c){this.sendMessage("method","clearAnnotations",[],c)
};
a.showLinkForm=function(d,c){this.sendMessage("method","showLinkForm",[d],c)
};
a.disablePlayerControls=function(c,d,e){this.sendMessage("method","disablePlayerControls",[c,d],e)
};
a.getNextRelease=function(e,c,d){this.sendMessage("method","getNextRelease",[e,c],d)
};
a.setExpandVideo=function(d,c){this.sendMessage("method","setExpandVideo",[d],c)
};
a.suspendPlayAll=function(d,c){this.sendMessage("method","suspendPlayAll",[d],c)
};
a.setToken=function(c,e,d){this.sendMessage("method","setToken",[c,e],d)
};
a.loadSmil=function(d,c,e){this.sendMessage("method","loadSmil",[d,c],e)
};
a.setClipInfo=function(d,e,c){this.sendMessage("method","setClipInfo",[d,e],c)
};
a.setBandwidthPreferences=function(d,c){this.sendMessage("method","setBandwidthPreferences",[d],c)
};
a.setSubtitleStyle=function(d,c){this.sendMessage("method","setSubtitleStyle",[d],c)
};
a.useDefaultPlayOverlay=function(c,d){this.sendMessage("method","useDefaultPlayOverlay",[c],d)
};
a.getPlayerVariables=function(d,c){this.sendMessage("method","getPlayerVariables",[d],c)
};
a.cancelMedia=function(c,d){this.sendMessage("method","cancelMedia",[c],d)
};
a.setVariable=function(f,d,g,c,e){this.sendMessage("method","setVariable",[f,d,g,c],e)
};
a.getUseDefaultPlayOverlay=function(c){this.sendMessage("method","getUseDefaultPlayOverlay",[],c)
};
a.clearPlayerMessage=function(c){this.sendMessage("method","clearPlayerMessage",[],c)
};
a.trace=function(e,d,f,c){this.sendMessage("method","trace",[e,d,f],c)
};
a.setVideoScalingMethod=function(d,c){this.sendMessage("method","setVideoScalingMethod",[d],c)
};
a.setSmil=function(c,d){this.sendMessage("method","setSmil",[c],d)
};
a.clearCategorySelection=function(c){this.sendMessage("method","clearCategorySelection",[],c)
};
a.clickPlayButton=function(c){this.sendMessage("method","clickPlayButton",[],c)
};
a.playPrevious=function(d,c){this.sendMessage("method","playPrevious",[d],c)
};
a.previewRefreshReleaseModel=function(c,k,e,f,d,i,j,g,h){this.sendMessage("method","previewRefreshReleaseModel",[c,k,e,f,d,i,g,h],j)
};
a.getSubtitleLanguage=function(c,d){this.sendMessage("method","getSubtitleLanguage",[c],d)
}
};
(function(b,a){a=typeof(a)==="boolean"?a:false;
if(!a){if($pdk.controller===null||typeof($pdk.controller)!=="object"){b.tpController=new $pdk.queue.external.Controller();
$pdk.controller=b.tpController
}$pdk.interfaces.expose(b,b.tpController);
$pdk.Entrypoint.onLoad()
}}(window,window._PDK_SUPRESS_AUTOINIT));