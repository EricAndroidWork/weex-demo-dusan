// { "framework": "Vue"} 

!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=23)}({12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wrap"],on:{focus:t.rotate}},[r("div",{staticClass:["logo_wrap"]},[r("image",{staticClass:["img_logo"],attrs:{src:t.splash_logo,resize:"contain"},on:{click:t.testClick}}),r("image",{staticClass:["img_circle"],attrs:{src:t.splash_circle,resize:"contain"},on:{click:t.rotate}})]),r("button",{on:{click:t.testClick}},[t._v("animation")])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},23:function(t,e,r){var n,o,i=[];i.push(r(6)),n=r(5);var s=r(12);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/duqian/Downloads/Nonolive/Weex_ReactNative/weex_demo/weex-project/src/splash.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-e9a0b02a",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=n,t.exports.el="true",new Vue(t.exports)},5:function(t,e,r){"use strict";var n=(weex.requireModule("navigator"),weex.requireModule("modal")),o=weex.requireModule("animation");t.exports={data:function(){return{splash_circle:"//duqian291902259.github.io/dusan/oair/splash_circle.png",splash_logo:"//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg",transformOrigin:"center center",current_rotate:0,current_scale:1,current_color:"#FF0000",current_opacity:1,current_translate:"",current_transform:"",isStop:!0}},methods:{testClick:function(){console.log("testClick"),n.toast({message:"Welcome to Weex...",duration:.3}),this.rotate()},goSite:function(){console.log("goSite","goSite")},anim:function(t,e,r,n){o.transition(this.$refs.block,{styles:t,timingFunction:e,duration:r},n)},rotate:function(){console.log("rotate","rotating");var t=this;t.current_rotate+=30,t.anim({transform:"rotate("+t.current_rotate+"deg)"},"ease-in-out",100,function(){360===t.current_rotate?t.current_rotate=0:(t.rotate(),t.current_rotate)})},scale:function(){var t=this;t.current_scale=2===t.current_scale?.5:.3,t.anim({transform:"scale("+t.current_scale+")"},"linear",500,function(){})}}}},6:function(t,e){t.exports={wrap:{marginTop:0,marginBottom:0,alignItems:"center",justifyContent:"center",backgroundColor:"#000000"},logo_wrap:{width:200,height:500,marginTop:0,marginBottom:0,alignItems:"center",justifyContent:"center",backgroundColor:"#000000"},img_logo:{width:200,height:200,alignItems:"center",justifyContent:"center"},img_circle:{width:200,height:200,alignItems:"center",justifyContent:"center"}}}});