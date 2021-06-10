!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/view-cover"]=t():e["utils/view-cover"]=t()}(self,(function(){return function(){"use strict";var e={915:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{staticClass:"view-cover",attrs:{disabled:!e.imageUrl,name:"查看封面",icon:"mdi-image-outline"},on:{click:function(t){return e.viewCover()}}})};o._withStripped=!0;var n=coreApis.ajax,r=coreApis.observer,s=coreApis.spinQuery,a=coreApis.utils.log,c=coreApis.ui;function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class d{constructor(e){l(this,"aid",void 0),l(this,"cid",void 0),l(this,"pageCount",void 0),l(this,"coverUrl",void 0),l(this,"tagId",void 0),l(this,"tagName",void 0),l(this,"title",void 0),l(this,"description",void 0),l(this,"up",void 0),l(this,"pages",void 0),l(this,"subtitles",void 0),this.aid=e}async fetchInfo(){let e;e=this.cid?`https://api.bilibili.com/x/web-interface/view?aid=${this.aid}&cid=${this.cid}`:`https://api.bilibili.com/x/web-interface/view?aid=${this.aid}`;const t=await(0,n.getJson)(e);if(0!==t.code)throw new Error(t.message);const{data:i}=t;return this.cid=i.cid,this.pageCount=i.videos,this.coverUrl=i.pic.replace("http:","https:"),this.tagId=i.tid,this.tagName=i.tname,this.title=i.title,this.description=i.desc,this.up={uid:i.owner.mid,name:i.owner.name,faceUrl:i.owner.face.replace("http:","https:")},this.pages=i.pages.map((e=>({cid:e.cid,title:e.part,pageNumber:e.page}))),this.subtitles=i.subtitle.list.map((e=>({id:e.id,languageCode:e.lan,language:e.lan_doc,url:e.subtitle_url.replace("http:","https:")}))),this}}var u=function(e,t,i,o,n,r,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=i,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=a?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:c.DefaultWidget},data:()=>({imageUrl:""}),async mounted(){if(document.URL.includes("live.bilibili.com")){const e=await(0,s.select)(".header-info-ctnr .room-cover");if(!e)return;const t=e.getAttribute("href").match(/space\.bilibili\.com\/([\d]+)/);if(t&&t[1]){const e=`https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=${t[1]}`,i=await(0,n.getJson)(e);this.imageUrl=i.data.cover.replace("http:","https:")}}else(0,r.videoChange)((async()=>{const{aid:e}=unsafeWindow,t=new d(e);try{await t.fetchInfo()}catch(e){throw(0,a.logError)(e),e}this.imageUrl=t.coverUrl.replace("http:","https:")}))},methods:{async viewCover(){(0,c.showImage)(this.imageUrl)}}}),o,[],!1,null,null,null);u.options.__file="registry/lib/components/utils/view-cover/ViewCover.vue";var p=u.exports}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){i.d(o,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"viewCover",displayName:"查看封面",tags:[componentsTags.utils,componentsTags.video,componentsTags.live],enabledByDefault:!0,entry:()=>(console.log("ok"),{foo:()=>console.log("hello world")}),reload:none,unload:none,widget:{component:()=>Promise.resolve().then(i.bind(i,915)).then((e=>e.default))},description:{"zh-CN":"在视频和直播页面中, 可从功能面板中查看封面."},urlInclude:[...e.videoAndBangumiUrls,...e.liveUrls]}}(),o=o.component}()}));