!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/player-on-top-new"]=t():e["style/player-on-top-new"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{component:()=>s});const n=coreApis.componentApis.define,o=coreApis.settings,i=coreApis.utils,r=coreApis.utils.urls;function a(){const e=window.innerHeight,t=Math.max(document.body&&document.body.clientWidth||window.innerWidth,1100),n=innerWidth>1680?411:350,o=parseInt(String(16*(e-(window.innerWidth>1690?318:308))/9)),i=t-112-n,r=i<o?i:o;return`${Math.round((r+n)*(9/16))+(innerWidth>1680?56:46)}px`}async function p(e){let{settings:{options:t},metadata:n}=e;await(0,i.playerReady)();const r=document.querySelector("#viewbox_report"),p=document.querySelector("#playerWrap");!function(e,t){const n=e.parentElement;n&&(n.removeChild(e),n.insertBefore(e,t.nextSibling))}(r,p),p.style.marginTop=`${t.marginTop}px`,(0,o.addComponentListener)(`${n.name}.marginTop`,(e=>{p.style.marginTop=`${e}px`})),function(){const e=document.querySelector(".up-panel-container"),t=document.querySelector("#danmukuBox");let n="normal";window.addEventListener("playerModeChange",(o=>{const{mode:i}=o.detail;n=i,"wide"===i?(t.style.marginTop="0px",e.style.marginTop=a()):e.style.marginTop="0px"})),window.addEventListener("resize",(()=>{"wide"===n&&(e.style.marginTop=a())}))}()}const s=(0,n.defineComponentMetadata)({name:"playerOnTopNew",author:[{name:"RieN7",link:"https://github.com/rien7"},{name:"ZiuChen",link:"https://github.com/ZiuChen"},{name:"LockRim",link:"https://github.com/LockRim"}],tags:[componentsTags.style,componentsTags.video],options:{marginTop:{displayName:"顶部留白 (px)",defaultValue:20,validator:(0,i.getNumberValidator)(0,1/0)}},urlInclude:r.videoUrls,displayName:"播放器置顶（新）",description:"原来的播放器置顶插件，现在已经不可用了，这是一个新的版本，可以在视频页面中将播放器放在页面最上方.",entry:p,reload:()=>p({settings:(0,o.getComponentSettings)("playerOnTopNew"),metadata:s}),commitHash:"a7fe2ebc28d8f3474ea8f364b9328e87238facc9",coreVersion:"2.8.13"});return t=t.component})()));