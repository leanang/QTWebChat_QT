(function(e){function n(n){for(var o,a,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"44999daf"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e);var u=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,t[1](u)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("6c98"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n),t.d(n,"JsClient",(function(){return L}));t("d9a3"),t("c9db"),t("de3e"),t("618d");var o=t("0261"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},i=[],a=(t("034f"),t("e90a")),c={},s=Object(a["a"])(c,r,i,!1,null,null,null),u=s.exports,l=(t("3a20"),t("1bee")),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-form",{attrs:{"label-position":"top","label-width":"80px",model:e.msg}},[t("el-form-item",{attrs:{label:"Receive Msg"}},[t("el-input",{attrs:{type:"textarea",readonly:"",rows:10},model:{value:e.msg.receiveMsg,callback:function(n){e.$set(e.msg,"receiveMsg",n)},expression:"msg.receiveMsg"}})],1),t("el-form-item",{attrs:{label:"Send Msg"}},[t("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.msg.sendMsg,callback:function(n){e.$set(e.msg,"sendMsg",n)},expression:"msg.sendMsg"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.send}},[e._v(" Send ")])],1)],1)},f=[],p=(t("7ae7"),t("7267"),{name:"Home",components:{},data:function(){return{action:"JSSendMessage",msg:{sendMsg:"",receiveMsg:""}}},created:function(){L.On("SigSendMessageToJS",this.receive)},beforeDestroy:function(){L.Off("SigSendMessageToJS",this.receive)},mounted:function(){},methods:{send:function(){var e=this;L.Send({action:this.action,data:this.msg.sendMsg}).then((function(n){var t=e.dateToString(new Date);e.msg.receiveMsg+="[".concat(t,"] JS: ").concat(e.msg.sendMsg,"\n"),e.msg.sendMsg=""})).catch((function(e){console.error(e)}))},receive:function(e){console.log(e);var n=this.dateToString(new Date);this.msg.receiveMsg+="[".concat(n,"] QT: ").concat(e,"\n")},dateToString:function(e){var n=e.getFullYear(),t=(e.getMonth()+1).toString(),o=e.getDate().toString(),r=e.getHours().toString(),i=e.getMinutes().toString(),a=e.getSeconds().toString();1==t.length&&(t="0"+t),1==o.length&&(o="0"+o),1==r.length&&(r="0"+r),1==i.length&&(i="0"+i),1==a.length&&(a="0"+a);var c=n+"-"+t+"-"+o+" "+r+":"+i+":"+a;return c}}}),g=p,_=Object(a["a"])(g,d,f,!1,null,null,null),h=_.exports;o["default"].use(l["a"]);var b=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],v=new l["a"]({routes:b}),y=v,m=t("8876");o["default"].use(m["a"]);var w=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),j=(t("a677"),t("79dd"),t("3547"),t("af82"),t("4045"),t("c1b0"),t("c354"),t("f4a0"),t("b3f9"),t("9a14"),t("d9ba")),S={signal:1,propertyUpdate:2,init:3,idle:4,debug:5,invokeMethod:6,connectToSignal:7,disconnectFromSignal:8,setProperty:9,response:10},E=function(e,n){if("object"===Object(j["a"])(e)&&"function"===typeof e.send){var t=this;this.transport=e,this.send=function(e){"string"!==typeof e&&(e=JSON.stringify(e)),t.transport.send(e)},this.transport.onmessage=function(e){var n=e.data;switch("string"===typeof n&&(n=JSON.parse(n)),n.type){case S.signal:t.handleSignal(n);break;case S.response:t.handleResponse(n);break;case S.propertyUpdate:t.handlePropertyUpdate(n);break;default:console.error("invalid message received:",e.data);break}},this.execCallbacks={},this.execId=0,this.exec=function(e,n){n?(t.execId===Number.MAX_VALUE&&(t.execId=Number.MIN_VALUE),e.hasOwnProperty("id")?console.error("Cannot exec message with property id: "+JSON.stringify(e)):(e.id=t.execId++,t.execCallbacks[e.id]=n,t.send(e))):t.send(e)},this.objects={},this.handleSignal=function(e){var n=t.objects[e.object];n?n.signalEmitted(e.signal,e.args):console.warn("Unhandled signal: "+e.object+"::"+e.signal)},this.handleResponse=function(e){e.hasOwnProperty("id")?(t.execCallbacks[e.id](e.data),delete t.execCallbacks[e.id]):console.error("Invalid response message received: ",JSON.stringify(e))},this.handlePropertyUpdate=function(e){for(var n in e.data){var o=e.data[n],r=t.objects[o.object];r?r.propertyUpdate(o.signals,o.properties):console.warn("Unhandled property update: "+o.object+"::"+o.signal)}t.exec({type:S.idle})},this.debug=function(e){t.send({type:S.debug,data:e})},t.exec({type:S.init},(function(e){for(var o in e)new O(o,e[o],t);for(var r in t.objects)t.objects[r].unwrapProperties();n&&n(t),t.exec({type:S.idle})}))}else console.error("The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: "+Object(j["a"])(e)+", transport.send: "+Object(j["a"])(e.send))};function O(e,n,t){this.__id__=e,t.objects[e]=this,this.__objectSignals__={},this.__propertyCache__={};var o=this;function r(e,n){var r=e[0],i=e[1];o[r]={connect:function(e){"function"===typeof e?(o.__objectSignals__[i]=o.__objectSignals__[i]||[],o.__objectSignals__[i].push(e),n||"destroyed"===r||t.exec({type:S.connectToSignal,object:o.__id__,signal:i})):console.error("Bad callback given to connect to signal "+r)},disconnect:function(e){if("function"===typeof e){o.__objectSignals__[i]=o.__objectSignals__[i]||[];var a=o.__objectSignals__[i].indexOf(e);-1!==a?(o.__objectSignals__[i].splice(a,1),n||0!==o.__objectSignals__[i].length||t.exec({type:S.disconnectFromSignal,object:o.__id__,signal:i})):console.error("Cannot find connection of signal "+r+" to "+e.name)}else console.error("Bad callback given to disconnect from signal "+r)}}}function i(e,n){var t=o.__objectSignals__[e];t&&t.forEach((function(e){e.apply(e,n)}))}function a(e){var n=e[0],r=e[1];o[n]=function(){for(var e,n=[],i=0;i<arguments.length;++i){var a=arguments[i];"function"===typeof a?e=a:a instanceof O&&void 0!==t.objects[a.__id__]?n.push({id:a.__id__}):n.push(a)}t.exec({type:S.invokeMethod,object:o.__id__,method:r,args:n},(function(n){if(void 0!==n){var t=o.unwrapQObject(n);e&&e(t)}}))}}function c(e){var n=e[0],i=e[1],a=e[2];o.__propertyCache__[n]=e[3],a&&(1===a[0]&&(a[0]=i+"Changed"),r(a,!0)),Object.defineProperty(o,i,{configurable:!0,get:function(){var e=o.__propertyCache__[n];return void 0===e&&console.warn('Undefined value in property cache for property "'+i+'" in object '+o.__id__),e},set:function(e){if(void 0!==e){o.__propertyCache__[n]=e;var r=e;r instanceof O&&void 0!==t.objects[r.__id__]&&(r={id:r.__id__}),t.exec({type:S.setProperty,object:o.__id__,property:n,value:r})}else console.warn("Property setter for "+i+" called with undefined value!")}})}for(var s in this.unwrapQObject=function(e){if(e instanceof Array){for(var n=new Array(e.length),r=0;r<e.length;++r)n[r]=o.unwrapQObject(e[r]);return n}if(!e||!e["__QObject*__"]||void 0===e.id)return e;var i=e.id;if(t.objects[i])return t.objects[i];if(e.data){var a=new O(i,e.data,t);return a.destroyed.connect((function(){if(t.objects[i]===a){delete t.objects[i];var e=[];for(var n in a)e.push(n);for(var o in e)delete a[e[o]]}})),a.unwrapProperties(),a}console.error("Cannot unwrap unknown QObject "+i+" without data.")},this.unwrapProperties=function(){for(var e in o.__propertyCache__)o.__propertyCache__[e]=o.unwrapQObject(o.__propertyCache__[e])},this.propertyUpdate=function(e,n){for(var t in n){var r=n[t];o.__propertyCache__[t]=r}for(var a in e)i(a,e[a])},this.signalEmitted=function(e,n){i(e,this.unwrapQObject(n))},n.methods.forEach(a),n.properties.forEach(c),n.signals.forEach((function(e){r(e,!1)})),n.enums)o[s]=n.enums[s]}var k=E,x=function(){return navigator.userAgent.includes("QtWebEngine")}();function M(e,n){if(!e)throw new Error("[ASSERT]: ".concat(n||e))}function C(e){console.log("%c".concat(e),"font-weight: bold;")}function T(e){return function(n){var t=n.action,o=n.data,r=void 0===o?"":o;return new Promise((function(n,o){return Object.keys(e).includes(t)?"function"!==typeof e[t]?o(new Error("function"===typeof e[t].connect?"[SENDER]: ".concat(t," is a Qt signal, not a method"):"[SENDER]: Missing function named ".concat(t," in QObject !"))):void e[t](r,n):o(new Error("[SENDER]: Unknown action name !"))}))}}function P(e){return function(n,t){return Object.keys(e).includes(n)?Object.keys(e[n]).includes("connect")?"function"!==typeof e[n].connect?reject(new Error("[LISTENER]: No Connect Function!")):void e[n].connect(t):reject(new Error("[LISTENER]: ".concat(n," is not a Qt signa!"))):reject(new Error("[LISTENER]: Unknown event name!"))}}function N(e){return function(n,t){return Object.keys(e).includes(n)?Object.keys(e[n]).includes("disconnect")?"function"!==typeof e[n].disconnect?reject(new Error("[LISTENER]: No Disconnect Function!")):void e[n].disconnect(t):reject(new Error("[LISTENER]: ".concat(n," is not a Qt signa!"))):reject(new Error("[LISTENER]: Unknown event name!"))}}var Q=!1,U=function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){};e||M(e,"必须提供一个QT对象的名称！"),Q||M(window&&window.qt&&window.qt.webChannelTransport,"'qt' 或者 'qt.webChannelTransport' 需要被 QtWebEngine 注入到页面中！"),Q&&!x&&(window.qt={webChannelTransport:{send:function(){C("QWebChannel simulator activated !")},onmessage:function(){}}}),this.Send=function(e){},this.On=function(e){console.log("尚未初始化！")},this.Off=function(e){console.log("尚未初始化！")},new k(window.qt.webChannelTransport,(function(o){if(!Object.keys(o.objects).includes(e))return t(),console.error("[QTWEBCHANNEL]: Unknown QT Object !");var r=o.objects[e];n.Send=T(r),n.On=P(r),n.Off=N(r),t()}))},R=U,I=t("2ca7"),A=t.n(I);t("46c6");o["default"].use(A.a);var J=function(e){new o["default"]({router:y,store:w,render:function(e){return e(u)}}).$mount("#app")},L=new R("context",J)},"6c98":function(e,n,t){}});
//# sourceMappingURL=app.09d23fec.js.map