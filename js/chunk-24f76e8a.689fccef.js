(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24f76e8a"],{1050:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"importform"}},[a("div",{staticClass:"header"},[t._v(" Import: "),a("div",{staticClass:"button",on:{click:t.import_model}},[a("i",{staticClass:"fas fa-redo-alt"}),t._v(" Impoort")]),a("div",{staticClass:"button",on:{click:t.load_model}},[a("input",{attrs:{type:"file",id:"files",name:"files"},on:{change:t.load_model2}}),a("i",{staticClass:"fas fa-upload"}),t._v(" Load")])]),t._m(0)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"line"},[a("textarea",{attrs:{id:"import",name:"import"}})])}],i={props:["model","view","templates"],methods:{load_model:function(){document.getElementById("files").click()},load_model2:function(t){for(var e,a=t.target.files,o=0;e=a[o];o++){var n=new FileReader;n.onload=function(t){return function(t){document.getElementById("import").value=t.target.result}}(),n.readAsText(e);break}},import_model:function(){var t=document.getElementById("import").value,e=null,a="";try{e=jsyaml.safeLoad(t)}catch(o){return void(view.modal="Yaml Error:\n"+o.message)}return a=validate_schema(e),""!=a?(view.modal=a,void setContext("Import")):(a=validate_xref(e),""!=a?(view.modal=a,void setContext("Import")):(e.tenant.service||(e.tenant.service={network:"",cidr:"",gateway:"",proxy:"",port:""}),"current"==this.view.mode?current=e:target=e,setModel(e),void setContext("Tenant")))}}},r=i,l=(a("9937"),a("2877")),s=Object(l["a"])(r,o,n,!1,null,"5e967e18",null);e["default"]=s.exports},"4d00":function(t,e,a){},9937:function(t,e,a){"use strict";var o=a("4d00"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-24f76e8a.689fccef.js.map