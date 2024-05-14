!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/auto-hide-sidebar"]=t():e["style/auto-hide-sidebar"]=t()}(globalThis,(()=>(()=>{var e,t,o={715:(e,t,o)=>{var n=o(218)((function(e){return e[1]}));n.push([e.id,'body .be-settings::before {\n  content: "";\n  position: fixed;\n  width: var(--auto-hide-sidebar-width, 8px);\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\nbody .be-settings > .sidebar {\n  transition: transform 0.2s ease-out;\n}\nbody .be-settings:not(:hover) > .sidebar {\n  transform: translateX(calc(-100% * var(--direction))) translateY(-50%);\n}\nbody.settings-panel-dock-right .be-settings::before {\n  left: unset;\n  right: 0;\n}',""]),e.exports=n},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&r[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),t.push(d))}},t}},769:(e,t,o)=>{var n=o(715);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(i,a),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.settings,o=coreApis.utils,n=(0,e.defineComponentMetadata)({name:"autoHideSidebar",entry:()=>{(0,t.addComponentListener)("autoHideSidebar.triggerWidth",(e=>{document.documentElement.style.setProperty("--auto-hide-sidebar-width",`${e}px`)}),!0)},displayName:"自动隐藏侧栏",instantStyles:[{name:"autoHideSidebar",style:()=>Promise.resolve().then(r.t.bind(r,769,23)),important:!0}],tags:[componentsTags.style,componentsTags.general],options:{triggerWidth:{defaultValue:8,displayName:"触发区域宽度 (px)",validator:(0,o.getNumberValidator)(1,1e3)}},description:{"zh-CN":"自动隐藏脚本的侧栏 (功能和设置图标). 设置面板停靠在右侧时不建议使用, 因为网页的滚动条会占用右边缘的触发区域."},commitHash:"66ede2a74ce88d6e7a57911497e39e10aa8eeb54",coreVersion:"2.8.11"})})(),i=i.component})()));