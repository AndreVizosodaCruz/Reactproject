(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var u=a(n("q1tI")),o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n||a&&(void 0!==u&&u)}t.isInAmpMode=i,t.useAmp=function(){return i(u.default.useContext(o.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),a=n.n(r),u=n("8Kt/"),o=n.n(u),i=(n("t0wZ"),n("C7TM"),n("RDVA"),a.a.createElement);function c(e){var t=e.Component,n=e.pageProps;return i(a.a.Fragment,null,i(o.a,null,i("title",null,"RedAdviser")),i(t,n))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),a=n("hfKm"),u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var o=u(n("q1tI")),i=u(n("Xuae")),c=n("lwAK"),l=n("FYa8"),f=n("/0+H");function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=d;var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,a={};return function(u){var o=!0;if(u.key&&"number"!==typeof u.key&&u.key.indexOf("$")>0){var i=u.key.slice(u.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(u.type){case"title":case"base":t.has(u.type)?o=!1:t.add(u.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var f=p[c];if(u.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var d=u.props[f],s=a[f]||new r;s.has(d)?o=!1:(s.add(d),a[f]=s)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=i.default();function m(e){var t=e.children;return o.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)}))}))}m.rewind=h.rewind,t.default=m},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},PQJW:function(e,t,n){var r=n("d04V"),a=n("yLu3");e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),a=n("PQJW"),u=n("2PDY");e.exports=function(e){return r(e)||a(e)||u()}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),u=n("JB68"),o=n("sNwI"),i=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),f=n("fNZA");a(a.S+a.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,a,d,s=u(e),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,w=f(s);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&i(w))for(n=new p(t=c(s.length));t>y;y++)l(n,y,m?h(s[y],y):s[y]);else for(d=w.call(s),n=new p;!(a=d.next()).done;y++)l(n,y,m?o(d,h,[a.value,y],!0):a.value);return n.length=y,n}})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),a=n("ZDA2"),u=n("/+P4"),o=n("K47E"),i=n("WaGi"),c=n("N9n2"),l=n("TbGu"),f=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var d=n("q1tI"),s=!1;t.default=function(){var e,t=new f;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function f(e){var i;return r(this,f),i=a(this,u(f).call(this,e)),s&&(t.add(o(i)),n(o(i))),i}return c(f,l),i(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(d.Component)}},d04V:function(e,t,n){e.exports=n("0tVQ")},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var u=a(n("q1tI"));t.AmpStateContext=u.createContext({})}},[["GcxT",1,0,11]]]);