(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c63cb762"],{"67e5":function(e,t,a){},baba:function(e,t,a){"use strict";var n=a("67e5"),o=a.n(n);o.a},feb0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tenantform"}},[a("div",{staticClass:"header"},[e._v("Tenant: "+e._s(e.model.name))]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"name"}},[e._v("VNF:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.vnf,expression:"model.vnf"}],attrs:{id:"vnf",name:"vnf",required:""},domProps:{value:e.model.vnf},on:{input:function(t){t.target.composing||e.$set(e.model,"vnf",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"version"}},[e._v("Version:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.version,expression:"model.version"}],attrs:{id:"version",name:"version",required:""},domProps:{value:e.model.version},on:{input:function(t){t.target.composing||e.$set(e.model,"version",t.target.value)}}})]),a("hr"),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant"}},[e._v("Tenant:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.name,expression:"model.tenant.name"}],attrs:{id:"tenant_name",name:"tenant_name",required:""},domProps:{value:e.model.tenant.name},on:{input:function(t){t.target.composing||e.$set(e.model.tenant,"name",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"prefix"}},[e._v("Prefix:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.prefix,expression:"model.tenant.prefix"}],attrs:{id:"tenant_prefix",name:"tenant_prefix",required:""},domProps:{value:e.model.tenant.prefix},on:{input:function(t){t.target.composing||e.$set(e.model.tenant,"prefix",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_username"}},[e._v("Username:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.username,expression:"model.tenant.auth.username"}],attrs:{id:"tenant_auth_username",name:"tenant_auth_username",required:""},domProps:{value:e.model.tenant.auth.username},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"username",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_password"}},[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.password,expression:"model.tenant.auth.password"}],attrs:{id:"tenant_auth_password",name:"tenant_auth_password",required:""},domProps:{value:e.model.tenant.auth.password},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"password",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_proxy"}},[e._v("API Proxy:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.proxy,expression:"model.tenant.auth.proxy"}],attrs:{id:"tenant_auth_proxy",name:"tenant_auth_proxy",required:""},domProps:{value:e.model.tenant.auth.proxy},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"proxy",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_url"}},[e._v("URL:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.url,expression:"model.tenant.auth.url"}],attrs:{id:"tenant_auth_url",name:"tenant_auth_url",required:""},domProps:{value:e.model.tenant.auth.url},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"url",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_cert"}},[e._v("CERT:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.cert,expression:"model.tenant.auth.cert"}],attrs:{id:"tenant_auth_cert",name:"tenant_auth_cert",required:""},domProps:{value:e.model.tenant.auth.cert},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"cert",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_region"}},[e._v("Region:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.region,expression:"model.tenant.auth.region"}],attrs:{id:"tenant_auth_region",name:"tenant_auth_region",required:""},domProps:{value:e.model.tenant.auth.region},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"region",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_vol_api"}},[e._v("Vol. API:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.vol_api,expression:"model.tenant.auth.vol_api"}],attrs:{id:"tenant_auth_vol_api",name:"tenant_auth_vol_api",required:""},domProps:{value:e.model.tenant.auth.vol_api},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"vol_api",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_auth_plugin"}},[e._v("Plug-In:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.auth.plugin,expression:"model.tenant.auth.plugin"}],attrs:{id:"tenant_auth_plugin",name:"tenant_auth_plugin",required:""},domProps:{value:e.model.tenant.auth.plugin},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.auth,"plugin",t.target.value)}}})]),a("hr"),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_service_network"}},[e._v("SVC-Network:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.service.network,expression:"model.tenant.service.network"}],attrs:{id:"tenant_service_network",name:"tenant_service_network",required:""},domProps:{value:e.model.tenant.service.network},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.service,"network",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_service_cidr"}},[e._v("CIDR:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.service.cidr,expression:"model.tenant.service.cidr"}],attrs:{id:"tenant_service_cidr",name:"tenant_service_cidr",required:""},domProps:{value:e.model.tenant.service.cidr},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.service,"cidr",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_service_gateway"}},[e._v("Gateway:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.service.gateway,expression:"model.tenant.service.gateway"}],attrs:{id:"tenant_service_gateway",name:"tenant_service_gateway",required:""},domProps:{value:e.model.tenant.service.gateway},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.service,"gateway",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_service_proxy"}},[e._v("Proxy:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.service.proxy,expression:"model.tenant.service.proxy"}],attrs:{id:"tenant_service_proxy",name:"tenant_service_proxy",required:""},domProps:{value:e.model.tenant.service.proxy},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.service,"proxy",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_service_port"}},[e._v("Proxy Port:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.service.port,expression:"model.tenant.service.port"}],attrs:{id:"tenant_service_port",name:"tenant_service_port",required:""},domProps:{value:e.model.tenant.service.port},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.service,"port",t.target.value)}}})]),a("hr"),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_jumphost"}},[e._v("Jumphost:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.jumphost,expression:"model.tenant.jumphost"}],attrs:{id:"tenant_jumphost",name:"tenant_jumphost"},domProps:{value:e.model.tenant.jumphost},on:{input:function(t){t.target.composing||e.$set(e.model.tenant,"jumphost",t.target.value)}}})]),a("hr"),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_proxy_http"}},[e._v("http proxy:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.proxy.http,expression:"model.tenant.proxy.http"}],attrs:{id:"tenant_proxy_http",name:"tenant_proxy_http"},domProps:{value:e.model.tenant.proxy.http},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.proxy,"http",t.target.value)}}})]),a("div",{staticClass:"line"},[a("label",{attrs:{for:"tenant_proxy_https"}},[e._v("https proxy:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.model.tenant.proxy.https,expression:"model.tenant.proxy.https"}],attrs:{id:"tenant_proxy_https",name:"tenant_proxy_https"},domProps:{value:e.model.tenant.proxy.https},on:{input:function(t){t.target.composing||e.$set(e.model.tenant.proxy,"https",t.target.value)}}})])])},o=[],r={props:["model","view"]},i=r,s=(a("baba"),a("2877")),l=Object(s["a"])(i,n,o,!1,null,"1221f999",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-c63cb762.ce675670.js.map