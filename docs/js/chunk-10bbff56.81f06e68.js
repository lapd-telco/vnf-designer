(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10bbff56"],{"1f00":function(t,n,e){"use strict";var o=e("d541"),r=e.n(o);r.a},5629:function(t,n,e){"use strict";e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"g",(function(){return i})),e.d(n,"f",(function(){return s})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return l})),e.d(n,"j",(function(){return a})),e.d(n,"l",(function(){return d})),e.d(n,"k",(function(){return m})),e.d(n,"m",(function(){return f})),e.d(n,"h",(function(){return v})),e.d(n,"i",(function(){return w}));const o=8,r=8,i=48,s=64,u=200,c=32,l=16,a=o+u,d=r+s,m=o+i,f=r+c,v=320,w=56},be86:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"tenant_layout"},on:{click:t.handleClick}},[e("div",{staticClass:"vnf"},[t._v("VNF: "+t._s(t.model.vnf))]),e("div",{staticClass:"tenant"},[t._v("Tenant: "+t._s(t.model.tenant.name))]),e("div",{staticClass:"version"},[t._v("Version: "+t._s(t.model.version))]),e("div",{staticClass:"date"},[t._v("Timestamp: "+t._s(t.timestamp))]),t._l(t.model.networks,(function(n,o){return e("tenant_network",{key:"network-"+o,attrs:{model:t.model,view:t.view,network:n,index:o}})})),e("tenant_network2",{key:"network-dummy",attrs:{model:t.model,view:t.view}}),t._l(t.model.components,(function(n,o){return e("tenant_component",{key:"component-"+o,attrs:{model:t.model,view:t.view,component:n,index:o}})})),e("tenant_component2",{key:"component-dummy",attrs:{model:t.model,view:t.view}})],2)},r=[],i=e("5629"),s=e("a79f"),u=(e("9acf"),{props:["model","view"],data(){return{timestamp:null}},components:{tenant_network:()=>e.e("chunk-2d0b2b24").then(e.bind(null,"24e1")),tenant_network2:()=>e.e("chunk-2d0e6864").then(e.bind(null,"98b1")),tenant_component:()=>e.e("chunk-6e2503b6").then(e.bind(null,"ce6d")),tenant_component2:()=>e.e("chunk-2d0c7944").then(e.bind(null,"50e8"))},methods:{handleClick:function(t){var n=document.getElementById("tenant_layout"),e=n.scrollLeft+t.pageX-i["h"]-i["j"],o=n.scrollTop+t.pageY-i["i"]-i["l"],r=Math.floor(e/i["k"]),u=Math.floor(o/i["m"]);if(0<=r&&r<this.model.networks.length&&0<=u&&u<this.model.components.length){var c=this.model.networks[r],l=this.model.components[u],a=Object(s["t"])(l,c.name);a?Object(s["l"])(l,a):Object(s["c"])(l,c.name)}},getNow:function(){var t=new Date;this.timestamp=t.getFullYear()+"-"+("0"+t.getMonth()).substr(-2)+"-"+("0"+t.getDate()).substr(-2)+" "+("0"+t.getHours()).substr(-2)+":"+("0"+t.getMinutes()).substr(-2)+":"+("0"+t.getSeconds()).substr(-2)}},created(){setInterval(this.getNow,1e3)}}),c=u,l=(e("1f00"),e("2877")),a=Object(l["a"])(c,o,r,!1,null,null,null);n["default"]=a.exports},d541:function(t,n,e){}}]);
//# sourceMappingURL=chunk-10bbff56.81f06e68.js.map