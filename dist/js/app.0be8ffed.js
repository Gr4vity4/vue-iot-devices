(function(t){function e(e){for(var n,a,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),i=s.n(n);i.a},1:function(t,e){},2:function(t,e){},2173:function(t,e,s){},3:function(t,e){},4:function(t,e){},"486b":function(t,e,s){"use strict";var n=s("b6b6"),i=s.n(n);i.a},"4d44":function(t,e,s){t.exports=s.p+"img/cmmc-logo.2eb203f3.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=s("2f62"),o=(s("4160"),s("159b"),{state:{mqttConfig:{host:"mqtt.cmmc.io",port:9001,clientId:"",username:"",password:"",topic:""},mqttConnected:!1,devices:[],deviceInfo:{}},mutations:{mqttConfig:function(t,e){t.mqttConfig=e},mqttConnected:function(t,e){t.mqttConnected=e},devices:function(t,e){var s=t.devices,i=e.info.client_id;if(s.length<1)s.push(e);else{var o=!1,a=0;s.forEach((function(t,e){t.info.client_id===i&&(o=!0,a=e)})),o?n["default"].set(t.devices,a,e):s.push(e)}t.devices=s},deviceInfo:function(t,e){t.deviceInfo=e}},actions:{mqttConfig:function(t,e){t.commit("mqttConfig",e)},mqttConnected:function(t,e){t.commit("mqttConnected",e)},devices:function(t,e){t.commit("devices",e)},deviceInfo:function(t,e){t.commit("deviceInfo",e)}}}),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container",staticStyle:{padding:"10px 0 60px 0"}},[s("Navbar"),s("div",{staticClass:"columns",staticStyle:{"padding-top":"10px"}},[s("div",{staticClass:"column is-one-quarter"},[s("Sidebar")],1),s("div",{staticClass:"column"},[s("Content")],1)])],1)])},c=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[n("img",{staticStyle:{"margin-right":"20px"},attrs:{src:s("4d44"),width:"112",height:"28"}}),n("img",{attrs:{src:s("ff2f"),width:"112",height:"28"}})])])])}],u={name:"Navbar"},d=u,f=s("2877"),p=Object(f["a"])(d,r,l,!1,null,null,null),v=p.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("p",{class:["bold",t.mqttStatus?"has-text-success":"has-text-danger"],domProps:{textContent:t._s(t.mqttTextStatus)}}),s("div",[s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Host")]),s("input",{ref:"hostInput",staticClass:"input",attrs:{type:"text",value:"mqtt.cmmc.io"}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Port")]),s("input",{ref:"portInput",staticClass:"input",attrs:{type:"text",value:"9001"}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("ClientID")]),s("input",{ref:"clientIdInput",staticClass:"input",attrs:{type:"text"}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Username")]),s("input",{ref:"usernameInput",staticClass:"input",attrs:{type:"text"}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Password")]),s("input",{ref:"passwordInput",staticClass:"input",attrs:{type:"text"}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Subscribe Topic")]),s("input",{ref:"topicInput",staticClass:"input",attrs:{type:"text",value:"CMMC/#"}})]),s("div",{staticClass:"field",staticStyle:{"padding-top":"10px"}},[s("button",{class:["button w-full",t.mqttStatus?"is-danger":"is-success"],attrs:{type:"button"},domProps:{textContent:t._s(t.buttonText)},on:{click:t.mqttConnect}})])])])])])])},h=[],C=(s("fb6a"),s("a9e3"),s("d3b7"),s("25f0"),s("53ca")),b=s("5530"),_=s("e7fc"),g=s.n(_),x={name:"Sidebar",data:function(){return{mqttTextStatus:"Waiting for connection",mqttStatus:!1,buttonText:"Connect"}},computed:Object(b["a"])({},Object(i["b"])(["mqttConfig","mqttConnected"])),watch:{mqttConfig:function(t){var e=this,s={clientId:t.clientId,clean:!0,port:t.port};window.client=g.a.connect("mqtt://".concat(t.host),s),window.client.on("connect",(function(){console.log("MQTT Connected."),e.$store.dispatch("mqttConnected",!0),window.client.subscribe(t.topic)})),window.client.on("message",(function(t,s){if("object"===Object(C["a"])(s))try{var n=JSON.parse(s);void 0!==n.info&&(console.log(n.info),e.$store.dispatch("devices",n))}catch(i){}}))},mqttConnected:function(t){t&&(this.mqttStatus=!0,this.mqttTextStatus="Connected",this.buttonText="Disconnect")}},mounted:function(){this.$refs.clientIdInput.value="CMMC_".concat(Math.random().toString(36).slice(-8))},methods:{mqttConnect:function(){this.mqttStatus?window.location.reload():this.$store.dispatch("mqttConfig",{host:this.$refs.hostInput.value,port:Number(this.$refs.portInput.value),clientId:this.$refs.clientIdInput.value,username:this.$refs.usernameInput.value,password:this.$refs.passwordInput.value,topic:this.$refs.topicInput.value})}}},w=x,y=(s("ea09"),Object(f["a"])(w,m,h,!1,null,"2d4635d1",null)),I=y.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns"},[t.$store.state.devices.length<1&&!0===t.$store.state.mqttConnected?n("div",{staticClass:"column has-text-centered"},[n("img",{attrs:{src:s("cf1c"),alt:"",width:"64",height:"64"}}),n("p",{staticClass:"bold"},[t._v(" Please wait a few minute. ")])]):t._e()]),n("DeviceLists")],1)},O=[],P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{class:["modal",t.showControlModal&&"is-active"]},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("device-control"),s("div",{staticClass:"has-text-right"},[s("button",{staticClass:"button is-danger is-light",staticStyle:{"margin-top":"20px"},attrs:{type:"button"},on:{click:function(e){t.showControlModal=!1}}},[t._v(" Close ")])])],1)])]),s("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.showControlModal=!1}}})]),s("div",{class:["modal",t.showInfoModal&&"is-active"]},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("device-info"),s("div",{staticClass:"has-text-right"},[s("button",{staticClass:"button is-danger is-light",staticStyle:{"margin-top":"20px"},attrs:{type:"button"},on:{click:function(e){t.showInfoModal=!1}}},[t._v(" Close ")])])],1)])]),s("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.showInfoModal=!1}}})]),t._l(t.lists,(function(e,n){return s("div",{key:n},[s("div",{staticClass:"columns"},t._l(e,(function(e){return s("div",{key:e.info.client_id,staticClass:"column"},[s("div",{staticClass:"card"},[s("header",{staticClass:"card-header has-background-info"},[s("p",{staticClass:"card-header-title has-text-white",domProps:{textContent:t._s(e.d.myName)}})]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("p",{domProps:{textContent:t._s("ip : "+e.info.ip)}}),s("p",{domProps:{textContent:t._s("heap : "+e.d.heap)}}),s("p",{domProps:{textContent:t._s("millis : "+e.d.millis)}}),s("p",{domProps:{textContent:t._s("prefix : "+e.info.prefix)}}),s("p",{domProps:{textContent:t._s("runtime : "+t.runtime(e.d.millis))}})])]),s("footer",{staticClass:"card-footer is-flex",staticStyle:{"justify-content":"space-between",border:"0"}},[s("button",{staticClass:"button is-success no-radius",attrs:{type:"button"},on:{click:function(s){return t.fetchDeviceControl(e)}}},[s("i",{staticClass:"fas fa-cogs",staticStyle:{"margin-right":"5px"}}),t._v(" Control ")]),s("button",{staticClass:"button is-info no-radius",attrs:{type:"button"},on:{click:function(s){return t.fetchDeviceInfo(e)}}},[s("i",{staticClass:"fas fa-info-circle",staticStyle:{"margin-right":"5px"}}),t._v(" More Info ")])])])])})),0)])}))],2)},$=[],k=(s("99af"),s("c35a"),s("b680"),s("ac1f"),s("1276"),s("2ef0")),q=s.n(k),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"group"},[s("p",{staticClass:"title is-4"},[t._v(" Device Info ")]),s("table",{staticClass:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},[t._m(0),s("tbody",t._l(t.data["info"],(function(e,n,i){return s("tr",{key:n+"-"+i},[s("td",{domProps:{textContent:t._s(n)}}),s("td",{domProps:{textContent:t._s(e)}})])})),0)])]),s("div",{staticClass:"group"},[s("p",{staticClass:"title is-4"},[t._v(" Device Data ")]),s("table",{staticClass:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},[t._m(1),s("tbody",t._l(t.data["d"],(function(e,n,i){return s("tr",{key:n+"-"+i},[s("td",{domProps:{textContent:t._s(n)}}),s("td",{domProps:{textContent:t._s(e)}})])})),0)])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("key")]),s("th",[t._v("value")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("key")]),s("th",[t._v("value")])])])}],M={name:"DeviceInfo",data:function(){return{data:{}}},computed:Object(b["a"])({},Object(i["b"])(["deviceInfo"])),watch:{deviceInfo:function(t){this.data=t}}},T=M,E=(s("bd30"),Object(f["a"])(T,j,D,!1,null,"18c5c395",null)),N=E.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"title is-4"},[t._v(" Device Control ")]),s("div",{staticClass:"group"},[t._m(0),s("div",{staticClass:"field"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Destination Topic",readonly:""},domProps:{value:t.prefix}})]),s("div",{staticClass:"field"},[s("button",{staticClass:"button is-success btn-switch",attrs:{type:"button"},domProps:{textContent:t._s("ON")},on:{click:function(e){return t.switchControl("ON")}}}),s("button",{staticClass:"button is-danger btn-switch",attrs:{type:"button"},domProps:{textContent:t._s("OFF")},on:{click:function(e){return t.switchControl("OFF")}}})])]),s("div",{staticClass:"group"},[t._m(1),s("div",{staticClass:"field"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Destination Topic",readonly:""},domProps:{value:t.data.info.prefix+"$/servo"}})]),s("div",{staticClass:"field"},[s("vue-slider",t._b({model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}},"vue-slider",t.sliderOptions,!1))],1),s("div",{staticClass:"field"},[s("button",{staticClass:"button is-success",attrs:{type:"button"},domProps:{textContent:t._s("Send")},on:{click:function(e){return t.sliderControl()}}})])]),s("div",{staticClass:"group"},[t._m(2),s("div",{staticClass:"field"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Destination Topic",readonly:""},domProps:{value:t.data.info.prefix+"$/neopixel"}})]),s("div",{staticClass:"field"},[s("photoshop-picker",{staticStyle:{width:"100% !important","margin-top":"20px"},attrs:{value:"#3299DC"},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),s("div",{staticClass:"field"},[s("button",{staticClass:"button is-success",attrs:{type:"button"},domProps:{textContent:t._s("Send")},on:{click:function(e){return t.colorPicker()}}})])])])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Switch Control")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Slider Control "),s("span",{staticClass:"has-text-success"},[t._v("(Degree)")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{attrs:{for:""}},[t._v("Color Picker")])])}],J=s("4971"),L=s.n(J),A=(s("3e39"),s("c345")),H={name:"DeviceControl",components:{"vue-slider":L.a,"photoshop-picker":A["Photoshop"]},data:function(){return{data:{info:{prefix:""}},prefix:"",sliderValue:0,sliderOptions:{max:180},colors:{hex:"#3299DC",hsl:{h:150,s:.5,l:.2,a:1},hsv:{h:150,s:.66,v:.3,a:1},rgba:{r:25,g:77,b:51,a:1},a:1}}},computed:Object(b["a"])({},Object(i["b"])(["deviceInfo"])),watch:{deviceInfo:function(t){this.data=t,this.prefix="".concat(t.info.prefix,"$/command")}},methods:{switchControl:function(t){window.client.publish(this.prefix,t)},sliderControl:function(){var t=this.data.info;window.client.publish("".concat(t.prefix,"$/servo"),String(this.sliderValue))},colorPicker:function(){var t=this.data.info;window.client.publish("".concat(t.prefix,"$/neopixel"),String(JSON.stringify(this.colors.rgba)))}}},Q=H,U=(s("486b"),Object(f["a"])(Q,F,V,!1,null,"a79437c4",null)),W=U.exports,z={name:"DeviceLists",components:{"device-info":N,"device-control":W},data:function(){return{lists:[],showControlModal:!1,showInfoModal:!1}},computed:Object(b["a"])({},Object(i["b"])(["devices"])),watch:{devices:function(t){this.lists=q.a.chunk(t,3)}},methods:{fetchDeviceInfo:function(t){this.$store.dispatch("deviceInfo",t),this.showInfoModal=!0},fetchDeviceControl:function(t){this.$store.dispatch("deviceInfo",t),this.showControlModal=!0},runtime:function(t){var e=Number.parseFloat(t/1e3/60/60).toFixed(2),s=e.split(".");return console.log(s),Number(s[1])>=60&&(s[0]=Number(s[0])+1,s[1]=Number(s[1]-60)),"".concat(s[0],":").concat(s[1])}}},B=z,G=Object(f["a"])(B,P,$,!1,null,null,null),K=G.exports,R={name:"Content",components:{DeviceLists:K}},X=R,Y=Object(f["a"])(X,S,O,!1,null,null,null),Z=Y.exports,tt={name:"App",components:{Navbar:v,Sidebar:I,Content:Z}},et=tt,st=(s("034f"),Object(f["a"])(et,a,c,!1,null,null,null)),nt=st.exports;n["default"].use(i["a"]),n["default"].config.productionTip=!1;var it=new i["a"].Store(o);new n["default"]({render:function(t){return t(nt)},store:it}).$mount("#app")},"644b":function(t,e,s){},"85ec":function(t,e,s){},b6b6:function(t,e,s){},bd30:function(t,e,s){"use strict";var n=s("644b"),i=s.n(n);i.a},cf1c:function(t,e,s){t.exports=s.p+"img/loading.9f31ed55.gif"},ea09:function(t,e,s){"use strict";var n=s("2173"),i=s.n(n);i.a},ff2f:function(t,e,s){t.exports=s.p+"img/makerasia-logo.e9293a74.png"}});
//# sourceMappingURL=app.0be8ffed.js.map