(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{SW7T:function(e,t,n){"use strict";n.r(t);var o=n("rt45"),r=n("q1tI"),i=n.n(r),a=n("vOnD"),l=n("OS56"),s=n.n(l);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){d(e,t,n[t])}))}return e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}var x={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},S={empty:y({},x,{backgroundColor:"#ccc"}),full:y({},x,{backgroundColor:"black"}),placeholder:y({},x,{backgroundColor:"red"})},w=function(e){return i.a.isValidElement(e)?e:"object"===c(e)&&null!==e?i.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?i.a.createElement("span",{className:e}):void 0},M=function(e){function t(){return u(this,t),k(this,b(t).apply(this,arguments))}return v(t,e),f(t,[{key:"render",value:function(){var e,t=this.props,n=t.index,o=t.inactiveIcon,r=t.activeIcon,a=t.percent,l=t.direction,s=t.readonly,c=t.onClick,u=t.onMouseMove,p=w(o),f=w(r),h=(d(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===l?"right":"left",0),d(e,"width","".concat(a,"%")),e),y={cursor:s?"inherit":"pointer",display:"inline-block",position:"relative"};function v(e){u&&u(n,e)}function b(e){c&&(e.preventDefault(),c(n,e))}return i.a.createElement("span",{style:y,onClick:b,onMouseMove:v,onTouchMove:v,onTouchEnd:b},p,i.a.createElement("span",{style:h},f))}}]),t}(i.a.PureComponent),O=function(e){function t(e){var n;return u(this,t),(n=k(this,b(t).call(this,e))).state={displayValue:n.props.value,interacting:!1},n.onMouseLeave=n.onMouseLeave.bind(g(g(n))),n.symbolMouseMove=n.symbolMouseMove.bind(g(g(n))),n.symbolClick=n.symbolClick.bind(g(g(n))),n}return v(t,e),f(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(n){return{displayValue:t?e.value:n.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.props.onClick(n,t)}},{key:"symbolMouseMove",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:n})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var n=this.calculateHoverPercentage(t),o=Math.ceil(n%1*this.props.fractions)/this.props.fractions,r=Math.pow(10,3),i=e+(Math.floor(n)+Math.floor(o*r)/r);return i>0?i>this.props.totalSymbols?this.props.totalSymbols:i:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,n=e.target.getBoundingClientRect(),o="rtl"===this.props.direction?n.right-t:t-n.left;return o<0?0:o/n.width}},{key:"render",value:function(){var e,t=this.props,n=t.readonly,o=t.quiet,r=t.totalSymbols,a=t.value,l=t.placeholderValue,s=t.direction,c=t.emptySymbol,u=t.fullSymbol,p=t.placeholderSymbol,f=t.className,d=t.id,v=t.style,b=t.tabIndex,m=this.state,g=m.displayValue,k=m.interacting,x=[],S=[].concat(c),w=[].concat(u),O=[].concat(p),C=0!==l&&0===a&&!k;e=C?l:o?a:g;for(var j=Math.floor(e),V=0;V<r;V++){var T=void 0;T=V-j<0?100:V-j===0?100*(e-V):0,x.push(i.a.createElement(M,h({key:V,index:V,readonly:n,inactiveIcon:S[V%S.length],activeIcon:C?O[V%w.length]:w[V%w.length],percent:T,direction:s},!n&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return i.a.createElement("span",h({id:d,style:y({},v,{display:"inline-block",direction:s}),className:f,tabIndex:b,"aria-label":this.props["aria-label"]},!n&&{onMouseLeave:this.onMouseLeave}),x)}}]),t}(i.a.PureComponent);function C(){}C._name="react_rating_noop";var j=function(e){function t(e){var n;return u(this,t),(n=k(this,b(t).call(this,e))).state={value:e.initialRating},n.handleClick=n.handleClick.bind(g(g(n))),n.handleHover=n.handleHover.bind(g(g(n))),n}return v(t,e),f(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var n=this,o=this.translateDisplayValueToValue(e);this.props.onClick(o),this.state.value!==o&&this.setState({value:o},(function(){return n.props.onChange(n.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.emptySymbol,o=e.fullSymbol,r=e.placeholderSymbol,a=e.readonly,l=e.quiet,s=e.fractions,c=e.direction,u=e.start,p=e.stop,f=e.id,d=e.className,h=e.style,y=e.tabIndex;return i.a.createElement(O,{id:f,style:h,className:d,tabIndex:y,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,n){return Math.floor((t-e)/n)}(u,p,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:a,quiet:l,fractions:s,direction:c,emptySymbol:n,fullSymbol:o,placeholderSymbol:r,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(i.a.PureComponent);j.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:C,onClick:C,onChange:C,emptySymbol:S.empty,fullSymbol:S.full,placeholderSymbol:S.placeholder};var V=j,T=n("UPMj"),_=n("DrpM"),E=n("rdom");n.d(t,"default",(function(){return L}));var P=i.a.createElement;function H(){var e=Object(o.a)(["\n  display:flex;\n  flex-flow:column;\n  justify-content:space-between;\n"]);return H=function(){return e},e}function D(){var e=Object(o.a)(["\n  margin-right:16px;\n  width: 48px;\n  height: 48px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  img {\n    display: inline;\n    margin: 0 auto;\n  }\n"]);return D=function(){return e},e}function F(){var e=Object(o.a)(["\n  margin-top:47px;\n  display:flex;\n  flex-flow:row;\n  @media screen and (max-width:1024px){\n    margin-top:64px;\n  }\n"]);return F=function(){return e},e}function I(){var e=Object(o.a)(["\n  margin-top:18px;\n"]);return I=function(){return e},e}function N(){var e=Object(o.a)(["\n  position:relative;\n  width:470px !important;\n  height:272px;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);\n  border-radius: 6px;\n  margin-right:20px;\n  box-sizing:border-box;\n  padding:40px 30px 30px 30px;\n  display:flex;\n  flex-flow:column;\n  ::after{\n    content:'';\n    position:absolute;\n    bottom:-20px;\n    left:20px;\n    width:0;\n    height:0;\n    border-color:#ffffff transparent transparent #ffffff;\n    border-width:10px;\n    border-style:solid;\n  }\n  @media screen and (max-width:1024px){\n    width:311px !important;\n    height:336px;\n  }\n"]);return N=function(){return e},e}function R(){var e=Object(o.a)(["\n  margin-top:72px;\n  .slick-track{\n    display:flex;\n  }\n  .slick-list{    \n    overflow: hidden;\n    padding-bottom: 20px;\n  }\n  .slick-dots{\n    text-align:center;\n  }\n"]);return R=function(){return e},e}function L(){var e=T.attributes.enabledSection,t=T.attributes.sectionName,n=T.attributes.smallTitle,o=T.attributes.title,r=T.attributes.dataTestimonials;return P(i.a.Fragment,null,e&&P(_.m,{className:t,backgroundColor:"#202020"},P(_.p,{both:!0},P(_.e,{sm:!0},P(E.a,{centerContainer:!0,smallTitle:n,smallTitleAlign:"center",title:o,titleColor:"#fff",titleTextAlign:"center",titleSize:"H3",titleMaxWidth:"566px"}),P(q,null,P(s.a,{dots:!0,arrows:!1,infinite:!1,speed:500,variableWidth:!0,swipeToSlide:!1},r.map((function(e,t){return P(W,{key:String(t)},P(V,{initialRating:e.rating,emptySymbol:P("img",{src:"/static/icons/icon_star.svg",className:"icon"}),fullSymbol:P("img",{src:"/static/icons/icon_starfull.svg",className:"icon"}),readonly:!0}),P(A,{color:"#6F6F6E",height:"true",dangerouslySetInnerHTML:{__html:e.description}}),P(U,null,P(X,null,P("img",{src:e.picture})),P(z,null,P(_.k,{color:"#000",dangerouslySetInnerHTML:{__html:e.name}}),P(_.o,{color:"#6F6F6F",font:"Montserrat-Medium",dangerouslySetInnerHTML:{__html:e.role}}))))}))))))))}var q=a.c.div(R()),W=a.c.div(N()),A=Object(a.c)(_.o)(I()),U=a.c.div(F()),X=a.c.div(D()),z=a.c.div(H())}}]);