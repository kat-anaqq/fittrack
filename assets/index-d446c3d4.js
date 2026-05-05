(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var py={exports:{}},Kl={},my={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),M1=Symbol.for("react.portal"),L1=Symbol.for("react.fragment"),j1=Symbol.for("react.strict_mode"),F1=Symbol.for("react.profiler"),U1=Symbol.for("react.provider"),z1=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),$1=Symbol.for("react.suspense"),W1=Symbol.for("react.memo"),H1=Symbol.for("react.lazy"),Op=Symbol.iterator;function q1(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yy=Object.assign,vy={};function ss(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||gy}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _y(){}_y.prototype=ss.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||gy}var Yd=Xd.prototype=new _y;Yd.constructor=Xd;yy(Yd,ss.prototype);Yd.isPureReactComponent=!0;var Mp=Array.isArray,wy=Object.prototype.hasOwnProperty,Jd={current:null},Ey={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wy.call(e,r)&&!Ey.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oo,type:t,key:s,ref:o,props:i,_owner:Jd.current}}function K1(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function G1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lp=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G1(""+t.key):e.toString(36)}function Ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case M1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hu(o,0):r,Mp(i)?(n="",t!=null&&(n=t.replace(Lp,"$&/")+"/"),Ma(i,e,n,"",function(d){return d})):i!=null&&(Zd(i)&&(i=K1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Hu(s,l);o+=Ma(s,e,n,u,i)}else if(u=q1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Hu(s,l++),o+=Ma(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var r=[],i=0;return Ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Q1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},La={transition:null},X1={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:La,ReactCurrentOwner:Jd};function Iy(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=ss;ie.Fragment=L1;ie.Profiler=F1;ie.PureComponent=Xd;ie.StrictMode=j1;ie.Suspense=$1;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X1;ie.act=Iy;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)wy.call(e,u)&&!Ey.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Oo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:z1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:U1,_context:t},t.Consumer=t};ie.createElement=Ty;ie.createFactory=function(t){var e=Ty.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:B1,render:t}};ie.isValidElement=Zd;ie.lazy=function(t){return{$$typeof:H1,_payload:{_status:-1,_result:t},_init:Q1}};ie.memo=function(t,e){return{$$typeof:W1,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};ie.unstable_act=Iy;ie.useCallback=function(t,e){return vt.current.useCallback(t,e)};ie.useContext=function(t){return vt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return vt.current.useEffect(t,e)};ie.useId=function(){return vt.current.useId()};ie.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return vt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ie.useRef=function(t){return vt.current.useRef(t)};ie.useState=function(t){return vt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return vt.current.useTransition()};ie.version="18.3.1";my.exports=ie;var ye=my.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=ye,J1=Symbol.for("react.element"),Z1=Symbol.for("react.fragment"),eE=Object.prototype.hasOwnProperty,tE=Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nE={key:!0,ref:!0,__self:!0,__source:!0};function xy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eE.call(e,r)&&!nE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:J1,type:t,key:s,ref:o,props:i,_owner:tE.current}}Kl.Fragment=Z1;Kl.jsx=xy;Kl.jsxs=xy;py.exports=Kl;var m=py.exports;var ky={exports:{}},Ot={},Sy={exports:{}},Ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var ne=z.length;z.push(G);e:for(;0<ne;){var we=ne-1>>>1,fe=z[we];if(0<i(fe,G))z[we]=G,z[ne]=fe,ne=we;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],ne=z.pop();if(ne!==G){z[0]=ne;e:for(var we=0,fe=z.length,Se=fe>>>1;we<Se;){var qt=2*(we+1)-1,At=z[qt],Kt=qt+1,Lt=z[Kt];if(0>i(At,ne))Kt<fe&&0>i(Lt,At)?(z[we]=Lt,z[Kt]=ne,we=Kt):(z[we]=At,z[qt]=ne,we=qt);else if(Kt<fe&&0>i(Lt,ne))z[we]=Lt,z[Kt]=ne,we=Kt;else break e}}return G}function i(z,G){var ne=z.sortIndex-G.sortIndex;return ne!==0?ne:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,g=null,v=3,S=!1,R=!1,b=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(z){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=z)r(d),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(d)}}function V(z){if(b=!1,k(z),!R)if(n(u)!==null)R=!0,Gn(U);else{var G=n(d);G!==null&&tt(V,G.startTime-z)}}function U(z,G){R=!1,b&&(b=!1,T(y),y=-1),S=!0;var ne=v;try{for(k(G),g=n(u);g!==null&&(!(g.expirationTime>G)||z&&!A());){var we=g.callback;if(typeof we=="function"){g.callback=null,v=g.priorityLevel;var fe=we(g.expirationTime<=G);G=t.unstable_now(),typeof fe=="function"?g.callback=fe:g===n(u)&&r(u),k(G)}else r(u);g=n(u)}if(g!==null)var Se=!0;else{var qt=n(d);qt!==null&&tt(V,qt.startTime-G),Se=!1}return Se}finally{g=null,v=ne,S=!1}}var j=!1,E=null,y=-1,w=5,x=-1;function A(){return!(t.unstable_now()-x<w)}function P(){if(E!==null){var z=t.unstable_now();x=z;var G=!0;try{G=E(!0,z)}finally{G?I():(j=!1,E=null)}}else j=!1}var I;if(typeof _=="function")I=function(){_(P)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,un=ht.port2;ht.port1.onmessage=P,I=function(){un.postMessage(null)}}else I=function(){D(P,0)};function Gn(z){E=z,j||(j=!0,I())}function tt(z,G){y=D(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,Gn(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ne=v;v=G;try{return z()}finally{v=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=v;v=z;try{return G()}finally{v=ne}},t.unstable_scheduleCallback=function(z,G,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,z){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,z={id:f++,callback:G,priorityLevel:z,startTime:ne,expirationTime:fe,sortIndex:-1},ne>we?(z.sortIndex=ne,e(d,z),n(u)===null&&z===n(d)&&(b?(T(y),y=-1):b=!0,tt(V,ne-we))):(z.sortIndex=fe,e(u,z),R||S||(R=!0,Gn(U))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var G=v;return function(){var ne=v;v=G;try{return z.apply(this,arguments)}finally{v=ne}}}})(Ay);Sy.exports=Ay;var rE=Sy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE=ye,Vt=rE;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ry=new Set,ao={};function si(t,e){Hi(t,e),Hi(t+"Capture",e)}function Hi(t,e){for(ao[t]=e,t=0;t<e.length;t++)Ry.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=Object.prototype.hasOwnProperty,sE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Fp={};function oE(t){return Oc.call(Fp,t)?!0:Oc.call(jp,t)?!1:sE.test(t)?Fp[t]=!0:(jp[t]=!0,!1)}function aE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lE(t,e,n,r){if(e===null||typeof e>"u"||aE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eh,th);Ze[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eh,th);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eh,th);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function nh(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lE(e,n,i,r)&&(n=null),r||i===null?oE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=iE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Py=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),Up=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,qu;function js(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Ku=!1;function Gu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function uE(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function Fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ii:return"Fragment";case Ti:return"Portal";case Mc:return"Profiler";case rh:return"StrictMode";case Lc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Py:return(t.displayName||"Context")+".Consumer";case Cy:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sh:return e=t.displayName||null,e!==null?e:Fc(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Fc(t(e))}catch{}}return null}function cE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ny(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dE(t){var e=Ny(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=dE(t))}function Dy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ny(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uc(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vy(t,e){e=e.checked,e!=null&&nh(t,"checked",e,!1)}function zc(t,e){Vy(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Fs(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function Oy(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function My(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?My(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,Ly=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hE=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){hE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function jy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function Fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fE=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(t,e){if(e){if(fE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gc=null,Mi=null,Li=null;function Hp(t){if(t=jo(t)){if(typeof Gc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Jl(e),Gc(t.stateNode,t.type,e))}}function Uy(t){Mi?Li?Li.push(t):Li=[t]:Mi=t}function zy(){if(Mi){var t=Mi,e=Li;if(Li=Mi=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function By(t,e){return t(e)}function $y(){}var Qu=!1;function Wy(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return By(t,e,n)}finally{Qu=!1,(Mi!==null||Li!==null)&&($y(),zy())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Qc=!1;if(Ln)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Qc=!1}function pE(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Ks=!1,sl=null,ol=!1,Xc=null,mE={onError:function(t){Ks=!0,sl=t}};function gE(t,e,n,r,i,s,o,l,u){Ks=!1,sl=null,pE.apply(mE,arguments)}function yE(t,e,n,r,i,s,o,l,u){if(gE.apply(this,arguments),Ks){if(Ks){var d=sl;Ks=!1,sl=null}else throw Error(L(198));ol||(ol=!0,Xc=d)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qp(t){if(oi(t)!==t)throw Error(L(188))}function vE(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qp(i),t;if(s===r)return qp(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function qy(t){return t=vE(t),t!==null?Ky(t):null}function Ky(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ky(t);if(e!==null)return e;t=t.sibling}return null}var Gy=Vt.unstable_scheduleCallback,Kp=Vt.unstable_cancelCallback,_E=Vt.unstable_shouldYield,wE=Vt.unstable_requestPaint,Me=Vt.unstable_now,EE=Vt.unstable_getCurrentPriorityLevel,ah=Vt.unstable_ImmediatePriority,Qy=Vt.unstable_UserBlockingPriority,al=Vt.unstable_NormalPriority,TE=Vt.unstable_LowPriority,Xy=Vt.unstable_IdlePriority,Gl=null,gn=null;function IE(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:SE,xE=Math.log,kE=Math.LN2;function SE(t){return t>>>=0,t===0?32:31-(xE(t)/kE|0)|0}var va=64,_a=4194304;function Us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Us(l):(s&=o,s!==0&&(r=Us(s)))}else o=n&~i,o!==0?r=Us(o):s!==0&&(r=Us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function AE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=AE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yy(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function CE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function Jy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zy,uh,e0,t0,n0,Jc=!1,wa=[],dr=null,hr=null,fr=null,co=new Map,ho=new Map,nr=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jo(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bE(t,e,n,r,i){switch(e){case"focusin":return dr=bs(dr,t,e,n,r,i),!0;case"dragenter":return hr=bs(hr,t,e,n,r,i),!0;case"mouseover":return fr=bs(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return co.set(s,bs(co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ho.set(s,bs(ho.get(s)||null,t,e,n,r,i)),!0}return!1}function r0(t){var e=jr(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=Hy(n),e!==null){t.blockedOn=e,n0(t.priority,function(){e0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return e=jo(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Qp(t,e,n){ja(t)&&n.delete(e)}function NE(){Jc=!1,dr!==null&&ja(dr)&&(dr=null),hr!==null&&ja(hr)&&(hr=null),fr!==null&&ja(fr)&&(fr=null),co.forEach(Qp),ho.forEach(Qp)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,Jc||(Jc=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,NE)))}function fo(t){function e(i){return Ns(i,t)}if(0<wa.length){Ns(wa[0],t);for(var n=1;n<wa.length;n++){var r=wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Ns(dr,t),hr!==null&&Ns(hr,t),fr!==null&&Ns(fr,t),co.forEach(e),ho.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&nr.shift()}var ji=Kn.ReactCurrentBatchConfig,ul=!0;function DE(t,e,n,r){var i=pe,s=ji.transition;ji.transition=null;try{pe=1,ch(t,e,n,r)}finally{pe=i,ji.transition=s}}function VE(t,e,n,r){var i=pe,s=ji.transition;ji.transition=null;try{pe=4,ch(t,e,n,r)}finally{pe=i,ji.transition=s}}function ch(t,e,n,r){if(ul){var i=Zc(t,e,n,r);if(i===null)oc(t,e,r,cl,n),Gp(t,r);else if(bE(i,t,e,n,r))r.stopPropagation();else if(Gp(t,r),e&4&&-1<PE.indexOf(t)){for(;i!==null;){var s=jo(i);if(s!==null&&Zy(s),s=Zc(t,e,n,r),s===null&&oc(t,e,r,cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oc(t,e,r,null,n)}}var cl=null;function Zc(t,e,n,r){if(cl=null,t=oh(r),t=jr(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function i0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EE()){case ah:return 1;case Qy:return 4;case al:case TE:return 16;case Xy:return 536870912;default:return 16}default:return 16}}var lr=null,dh=null,Fa=null;function s0(){if(Fa)return Fa;var t,e=dh,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fa=i.slice(t,1<r?1-r:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Xp(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Xp,this.isPropagationStopped=Xp,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Mt(os),Lo=Pe({},os,{view:0,detail:0}),OE=Mt(Lo),Yu,Ju,Ds,Ql=Pe({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Yu=t.screenX-Ds.screenX,Ju=t.screenY-Ds.screenY):Ju=Yu=0,Ds=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Yp=Mt(Ql),ME=Pe({},Ql,{dataTransfer:0}),LE=Mt(ME),jE=Pe({},Lo,{relatedTarget:0}),Zu=Mt(jE),FE=Pe({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),UE=Mt(FE),zE=Pe({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BE=Mt(zE),$E=Pe({},os,{data:0}),Jp=Mt($E),WE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qE[t])?!!e[t]:!1}function fh(){return KE}var GE=Pe({},Lo,{key:function(t){if(t.key){var e=WE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QE=Mt(GE),XE=Pe({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Mt(XE),YE=Pe({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),JE=Mt(YE),ZE=Pe({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),eT=Mt(ZE),tT=Pe({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nT=Mt(tT),rT=[9,13,27,32],ph=Ln&&"CompositionEvent"in window,Gs=null;Ln&&"documentMode"in document&&(Gs=document.documentMode);var iT=Ln&&"TextEvent"in window&&!Gs,o0=Ln&&(!ph||Gs&&8<Gs&&11>=Gs),em=String.fromCharCode(32),tm=!1;function a0(t,e){switch(t){case"keyup":return rT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function sT(t,e){switch(t){case"compositionend":return l0(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return t=e.data,t===em&&tm?null:t;default:return null}}function oT(t,e){if(xi)return t==="compositionend"||!ph&&a0(t,e)?(t=s0(),Fa=dh=lr=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o0&&e.locale!=="ko"?null:e.data;default:return null}}var aT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aT[t.type]:e==="textarea"}function u0(t,e,n,r){Uy(r),e=dl(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qs=null,po=null;function lT(t){w0(t,0)}function Xl(t){var e=Ai(t);if(Dy(e))return t}function uT(t,e){if(t==="change")return e}var c0=!1;if(Ln){var ec;if(Ln){var tc="oninput"in document;if(!tc){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),tc=typeof rm.oninput=="function"}ec=tc}else ec=!1;c0=ec&&(!document.documentMode||9<document.documentMode)}function im(){Qs&&(Qs.detachEvent("onpropertychange",d0),po=Qs=null)}function d0(t){if(t.propertyName==="value"&&Xl(po)){var e=[];u0(e,po,t,oh(t)),Wy(lT,e)}}function cT(t,e,n){t==="focusin"?(im(),Qs=e,po=n,Qs.attachEvent("onpropertychange",d0)):t==="focusout"&&im()}function dT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(po)}function hT(t,e){if(t==="click")return Xl(e)}function fT(t,e){if(t==="input"||t==="change")return Xl(e)}function pT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:pT;function mo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oc.call(e,i)||!on(t[i],e[i]))return!1}return!0}function sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,e){var n=sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sm(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f0(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mT(t){var e=f0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(r!==null&&mh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=om(n,s);var o=om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gT=Ln&&"documentMode"in document&&11>=document.documentMode,ki=null,ed=null,Xs=null,td=!1;function am(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||ki==null||ki!==il(r)||(r=ki,"selectionStart"in r&&mh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&mo(Xs,r)||(Xs=r,r=dl(ed,"onSelect"),0<r.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ki)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},nc={},p0={};Ln&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function Yl(t){if(nc[t])return nc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p0)return nc[t]=e[n];return t}var m0=Yl("animationend"),g0=Yl("animationiteration"),y0=Yl("animationstart"),v0=Yl("transitionend"),_0=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){_0.set(t,e),si(e,[t])}for(var rc=0;rc<lm.length;rc++){var ic=lm[rc],yT=ic.toLowerCase(),vT=ic[0].toUpperCase()+ic.slice(1);Ar(yT,"on"+vT)}Ar(m0,"onAnimationEnd");Ar(g0,"onAnimationIteration");Ar(y0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(v0,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_T=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yE(r,e,void 0,t),t.currentTarget=null}function w0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;um(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;um(i,l,d),s=u}}}if(ol)throw t=Xc,ol=!1,Xc=null,t}function Te(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var r=t+"__bubble";n.has(r)||(E0(e,t,2,!1),n.add(r))}function sc(t,e,n){var r=0;e&&(r|=4),E0(n,t,r,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[Ia]){t[Ia]=!0,Ry.forEach(function(n){n!=="selectionchange"&&(_T.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,sc("selectionchange",!1,e))}}function E0(t,e,n,r){switch(i0(e)){case 1:var i=DE;break;case 4:i=VE;break;default:i=ch}n=i.bind(null,e,n,t),i=void 0,!Qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Wy(function(){var d=s,f=oh(n),g=[];e:{var v=_0.get(t);if(v!==void 0){var S=hh,R=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":S=QE;break;case"focusin":R="focus",S=Zu;break;case"focusout":R="blur",S=Zu;break;case"beforeblur":case"afterblur":S=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=JE;break;case m0:case g0:case y0:S=UE;break;case v0:S=eT;break;case"scroll":S=OE;break;case"wheel":S=nT;break;case"copy":case"cut":case"paste":S=BE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Zp}var b=(e&4)!==0,D=!b&&t==="scroll",T=b?v!==null?v+"Capture":null:v;b=[];for(var _=d,k;_!==null;){k=_;var V=k.stateNode;if(k.tag===5&&V!==null&&(k=V,T!==null&&(V=uo(_,T),V!=null&&b.push(yo(_,V,k)))),D)break;_=_.return}0<b.length&&(v=new S(v,R,null,n,f),g.push({event:v,listeners:b}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",v&&n!==Kc&&(R=n.relatedTarget||n.fromElement)&&(jr(R)||R[jn]))break e;if((S||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=d,R=R?jr(R):null,R!==null&&(D=oi(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=d),S!==R)){if(b=Yp,V="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=Zp,V="onPointerLeave",T="onPointerEnter",_="pointer"),D=S==null?v:Ai(S),k=R==null?v:Ai(R),v=new b(V,_+"leave",S,n,f),v.target=D,v.relatedTarget=k,V=null,jr(f)===d&&(b=new b(T,_+"enter",R,n,f),b.target=k,b.relatedTarget=D,V=b),D=V,S&&R)t:{for(b=S,T=R,_=0,k=b;k;k=gi(k))_++;for(k=0,V=T;V;V=gi(V))k++;for(;0<_-k;)b=gi(b),_--;for(;0<k-_;)T=gi(T),k--;for(;_--;){if(b===T||T!==null&&b===T.alternate)break t;b=gi(b),T=gi(T)}b=null}else b=null;S!==null&&cm(g,v,S,b,!1),R!==null&&D!==null&&cm(g,D,R,b,!0)}}e:{if(v=d?Ai(d):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var U=uT;else if(nm(v))if(c0)U=fT;else{U=dT;var j=cT}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(U=hT);if(U&&(U=U(t,d))){u0(g,U,n,f);break e}j&&j(t,v,d),t==="focusout"&&(j=v._wrapperState)&&j.controlled&&v.type==="number"&&Bc(v,"number",v.value)}switch(j=d?Ai(d):window,t){case"focusin":(nm(j)||j.contentEditable==="true")&&(ki=j,ed=d,Xs=null);break;case"focusout":Xs=ed=ki=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,am(g,n,f);break;case"selectionchange":if(gT)break;case"keydown":case"keyup":am(g,n,f)}var E;if(ph)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else xi?a0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(o0&&n.locale!=="ko"&&(xi||y!=="onCompositionStart"?y==="onCompositionEnd"&&xi&&(E=s0()):(lr=f,dh="value"in lr?lr.value:lr.textContent,xi=!0)),j=dl(d,y),0<j.length&&(y=new Jp(y,t,null,n,f),g.push({event:y,listeners:j}),E?y.data=E:(E=l0(n),E!==null&&(y.data=E)))),(E=iT?sT(t,n):oT(t,n))&&(d=dl(d,"onBeforeInput"),0<d.length&&(f=new Jp("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=E))}w0(g,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=uo(t,n),s!=null&&r.unshift(yo(t,s,i)),s=uo(t,e),s!=null&&r.push(yo(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=uo(n,s),u!=null&&o.unshift(yo(n,u,l))):i||(u=uo(n,s),u!=null&&o.push(yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wT=/\r\n?/g,ET=/\u0000|\uFFFD/g;function dm(t){return(typeof t=="string"?t:""+t).replace(wT,`
`).replace(ET,"")}function xa(t,e,n){if(e=dm(e),dm(t)!==e&&n)throw Error(L(425))}function hl(){}var nd=null,rd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,TT=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,IT=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(t){return hm.resolve(null).then(t).catch(xT)}:sd;function xT(t){setTimeout(function(){throw t})}function ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fo(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),pn="__reactFiber$"+as,vo="__reactProps$"+as,jn="__reactContainer$"+as,od="__reactEvents$"+as,kT="__reactListeners$"+as,ST="__reactHandles$"+as;function jr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fm(t);t!==null;){if(n=t[pn])return n;t=fm(t)}return e}t=n,n=t.parentNode}return null}function jo(t){return t=t[pn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Jl(t){return t[vo]||null}var ad=[],Ri=-1;function Rr(t){return{current:t}}function Ie(t){0>Ri||(t.current=ad[Ri],ad[Ri]=null,Ri--)}function _e(t,e){Ri++,ad[Ri]=t.current,t.current=e}var Ir={},ct=Rr(Ir),It=Rr(!1),Gr=Ir;function qi(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function fl(){Ie(It),Ie(ct)}function pm(t,e,n){if(ct.current!==Ir)throw Error(L(168));_e(ct,e),_e(It,n)}function T0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,cE(t)||"Unknown",i));return Pe({},n,r)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,Gr=ct.current,_e(ct,t),_e(It,It.current),!0}function mm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=T0(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,Ie(It),Ie(ct),_e(ct,t)):Ie(It),_e(It,n)}var Cn=null,Zl=!1,lc=!1;function I0(t){Cn===null?Cn=[t]:Cn.push(t)}function AT(t){Zl=!0,I0(t)}function Cr(){if(!lc&&Cn!==null){lc=!0;var t=0,e=pe;try{var n=Cn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,Zl=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),Gy(ah,Cr),i}finally{pe=e,lc=!1}}return null}var Ci=[],Pi=0,ml=null,gl=0,jt=[],Ft=0,Qr=null,Pn=1,bn="";function Or(t,e){Ci[Pi++]=gl,Ci[Pi++]=ml,ml=t,gl=e}function x0(t,e,n){jt[Ft++]=Pn,jt[Ft++]=bn,jt[Ft++]=Qr,Qr=t;var r=Pn;t=bn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-rn(e)+i|n<<i|r,bn=s+t}else Pn=1<<s|n<<i|r,bn=t}function gh(t){t.return!==null&&(Or(t,1),x0(t,1,0))}function yh(t){for(;t===ml;)ml=Ci[--Pi],Ci[Pi]=null,gl=Ci[--Pi],Ci[Pi]=null;for(;t===Qr;)Qr=jt[--Ft],jt[Ft]=null,bn=jt[--Ft],jt[Ft]=null,Pn=jt[--Ft],jt[Ft]=null}var bt=null,Pt=null,xe=!1,tn=null;function k0(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Pt=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Pn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Pt=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(xe){var e=Pt;if(e){var n=e;if(!gm(t,e)){if(ld(t))throw Error(L(418));e=pr(n.nextSibling);var r=bt;e&&gm(t,e)?k0(r,n):(t.flags=t.flags&-4097|2,xe=!1,bt=t)}}else{if(ld(t))throw Error(L(418));t.flags=t.flags&-4097|2,xe=!1,bt=t}}}function ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function ka(t){if(t!==bt)return!1;if(!xe)return ym(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Pt)){if(ld(t))throw S0(),Error(L(418));for(;e;)k0(t,e),e=pr(e.nextSibling)}if(ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=bt?pr(t.stateNode.nextSibling):null;return!0}function S0(){for(var t=Pt;t;)t=pr(t.nextSibling)}function Ki(){Pt=bt=null,xe=!1}function vh(t){tn===null?tn=[t]:tn.push(t)}var RT=Kn.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vm(t){var e=t._init;return e(t._payload)}function A0(t){function e(T,_){if(t){var k=T.deletions;k===null?(T.deletions=[_],T.flags|=16):k.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=vr(T,_),T.index=0,T.sibling=null,T}function s(T,_,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<_?(T.flags|=2,_):k):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,k,V){return _===null||_.tag!==6?(_=mc(k,T.mode,V),_.return=T,_):(_=i(_,k),_.return=T,_)}function u(T,_,k,V){var U=k.type;return U===Ii?f(T,_,k.props.children,V,k.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===er&&vm(U)===_.type)?(V=i(_,k.props),V.ref=Vs(T,_,k),V.return=T,V):(V=Ka(k.type,k.key,k.props,null,T.mode,V),V.ref=Vs(T,_,k),V.return=T,V)}function d(T,_,k,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=gc(k,T.mode,V),_.return=T,_):(_=i(_,k.children||[]),_.return=T,_)}function f(T,_,k,V,U){return _===null||_.tag!==7?(_=Wr(k,T.mode,V,U),_.return=T,_):(_=i(_,k),_.return=T,_)}function g(T,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=mc(""+_,T.mode,k),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ma:return k=Ka(_.type,_.key,_.props,null,T.mode,k),k.ref=Vs(T,null,_),k.return=T,k;case Ti:return _=gc(_,T.mode,k),_.return=T,_;case er:var V=_._init;return g(T,V(_._payload),k)}if(Fs(_)||Cs(_))return _=Wr(_,T.mode,k,null),_.return=T,_;Sa(T,_)}return null}function v(T,_,k,V){var U=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return U!==null?null:l(T,_,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ma:return k.key===U?u(T,_,k,V):null;case Ti:return k.key===U?d(T,_,k,V):null;case er:return U=k._init,v(T,_,U(k._payload),V)}if(Fs(k)||Cs(k))return U!==null?null:f(T,_,k,V,null);Sa(T,k)}return null}function S(T,_,k,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return T=T.get(k)||null,l(_,T,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ma:return T=T.get(V.key===null?k:V.key)||null,u(_,T,V,U);case Ti:return T=T.get(V.key===null?k:V.key)||null,d(_,T,V,U);case er:var j=V._init;return S(T,_,k,j(V._payload),U)}if(Fs(V)||Cs(V))return T=T.get(k)||null,f(_,T,V,U,null);Sa(_,V)}return null}function R(T,_,k,V){for(var U=null,j=null,E=_,y=_=0,w=null;E!==null&&y<k.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var x=v(T,E,k[y],V);if(x===null){E===null&&(E=w);break}t&&E&&x.alternate===null&&e(T,E),_=s(x,_,y),j===null?U=x:j.sibling=x,j=x,E=w}if(y===k.length)return n(T,E),xe&&Or(T,y),U;if(E===null){for(;y<k.length;y++)E=g(T,k[y],V),E!==null&&(_=s(E,_,y),j===null?U=E:j.sibling=E,j=E);return xe&&Or(T,y),U}for(E=r(T,E);y<k.length;y++)w=S(E,T,y,k[y],V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),_=s(w,_,y),j===null?U=w:j.sibling=w,j=w);return t&&E.forEach(function(A){return e(T,A)}),xe&&Or(T,y),U}function b(T,_,k,V){var U=Cs(k);if(typeof U!="function")throw Error(L(150));if(k=U.call(k),k==null)throw Error(L(151));for(var j=U=null,E=_,y=_=0,w=null,x=k.next();E!==null&&!x.done;y++,x=k.next()){E.index>y?(w=E,E=null):w=E.sibling;var A=v(T,E,x.value,V);if(A===null){E===null&&(E=w);break}t&&E&&A.alternate===null&&e(T,E),_=s(A,_,y),j===null?U=A:j.sibling=A,j=A,E=w}if(x.done)return n(T,E),xe&&Or(T,y),U;if(E===null){for(;!x.done;y++,x=k.next())x=g(T,x.value,V),x!==null&&(_=s(x,_,y),j===null?U=x:j.sibling=x,j=x);return xe&&Or(T,y),U}for(E=r(T,E);!x.done;y++,x=k.next())x=S(E,T,y,x.value,V),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?y:x.key),_=s(x,_,y),j===null?U=x:j.sibling=x,j=x);return t&&E.forEach(function(P){return e(T,P)}),xe&&Or(T,y),U}function D(T,_,k,V){if(typeof k=="object"&&k!==null&&k.type===Ii&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ma:e:{for(var U=k.key,j=_;j!==null;){if(j.key===U){if(U=k.type,U===Ii){if(j.tag===7){n(T,j.sibling),_=i(j,k.props.children),_.return=T,T=_;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===er&&vm(U)===j.type){n(T,j.sibling),_=i(j,k.props),_.ref=Vs(T,j,k),_.return=T,T=_;break e}n(T,j);break}else e(T,j);j=j.sibling}k.type===Ii?(_=Wr(k.props.children,T.mode,V,k.key),_.return=T,T=_):(V=Ka(k.type,k.key,k.props,null,T.mode,V),V.ref=Vs(T,_,k),V.return=T,T=V)}return o(T);case Ti:e:{for(j=k.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(T,_.sibling),_=i(_,k.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=gc(k,T.mode,V),_.return=T,T=_}return o(T);case er:return j=k._init,D(T,_,j(k._payload),V)}if(Fs(k))return R(T,_,k,V);if(Cs(k))return b(T,_,k,V);Sa(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,k),_.return=T,T=_):(n(T,_),_=mc(k,T.mode,V),_.return=T,T=_),o(T)):n(T,_)}return D}var Gi=A0(!0),R0=A0(!1),yl=Rr(null),vl=null,bi=null,_h=null;function wh(){_h=bi=vl=null}function Eh(t){var e=yl.current;Ie(yl),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){vl=t,_h=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(vl===null)throw Error(L(308));bi=t,vl.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var Fr=null;function Th(t){Fr===null?Fr=[t]:Fr.push(t)}function C0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Th(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Th(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lh(t,n)}}function _m(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=d=u=null,l=s;do{var v=l.lane,S=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,b=l;switch(v=e,S=n,b.tag){case 1:if(R=b.payload,typeof R=="function"){g=R.call(S,g,v);break e}g=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=b.payload,v=typeof R=="function"?R.call(S,g,v):R,v==null)break e;g=Pe({},g,v);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else S={eventTime:S,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=S,u=g):f=f.next=S,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=g}}function wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Fo={},yn=Rr(Fo),_o=Rr(Fo),wo=Rr(Fo);function Ur(t){if(t===Fo)throw Error(L(174));return t}function xh(t,e){switch(_e(wo,e),_e(_o,t),_e(yn,Fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wc(e,t)}Ie(yn),_e(yn,e)}function Qi(){Ie(yn),Ie(_o),Ie(wo)}function b0(t){Ur(wo.current);var e=Ur(yn.current),n=Wc(e,t.type);e!==n&&(_e(_o,t),_e(yn,n))}function kh(t){_o.current===t&&(Ie(yn),Ie(_o))}var Re=Rr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function Sh(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Ba=Kn.ReactCurrentDispatcher,cc=Kn.ReactCurrentBatchConfig,Xr=0,Ce=null,Ue=null,He=null,El=!1,Ys=!1,Eo=0,CT=0;function it(){throw Error(L(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function Rh(t,e,n,r,i,s){if(Xr=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?DT:VT,t=n(r,i),Ys){s=0;do{if(Ys=!1,Eo=0,25<=s)throw Error(L(301));s+=1,He=Ue=null,e.updateQueue=null,Ba.current=OT,t=n(r,i)}while(Ys)}if(Ba.current=Tl,e=Ue!==null&&Ue.next!==null,Xr=0,He=Ue=Ce=null,El=!1,e)throw Error(L(300));return t}function Ch(){var t=Eo!==0;return Eo=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ce.memoizedState=He=t:He=He.next=t,He}function Ht(){if(Ue===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=He===null?Ce.memoizedState:He.next;if(e!==null)He=e,Ue=t;else{if(t===null)throw Error(L(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ce.memoizedState=He=t:He=He.next=t}return He}function To(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((Xr&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ce.lanes|=f,Yr|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,on(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N0(){}function D0(t,e){var n=Ce,r=Ht(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Ph(M0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Io(9,O0.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(L(349));Xr&30||V0(n,e,i)}return i}function V0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,L0(e)&&j0(t)}function M0(t,e,n){return n(function(){L0(e)&&j0(t)})}function L0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function j0(t){var e=Fn(t,1);e!==null&&sn(e,t,1,-1)}function Em(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=NT.bind(null,Ce,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function F0(){return Ht().memoizedState}function $a(t,e,n,r){var i=fn();Ce.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Ah(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function Tm(t,e){return $a(8390656,8,t,e)}function Ph(t,e){return eu(2048,8,t,e)}function U0(t,e){return eu(4,2,t,e)}function z0(t,e){return eu(4,4,t,e)}function B0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $0(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,B0.bind(null,e,t),n)}function bh(){}function W0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ah(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ah(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return Xr&21?(on(n,e)||(n=Yy(),Ce.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function PT(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=cc.transition;cc.transition={};try{t(!1),e()}finally{pe=n,cc.transition=r}}function K0(){return Ht().memoizedState}function bT(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G0(t))Q0(e,n);else if(n=C0(t,e,n,r),n!==null){var i=gt();sn(n,t,r,i),X0(n,e,r)}}function NT(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G0(t))Q0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,on(l,o)){var u=e.interleaved;u===null?(i.next=i,Th(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=C0(t,e,i,r),n!==null&&(i=gt(),sn(n,t,r,i),X0(n,e,r))}}function G0(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function Q0(t,e){Ys=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function X0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lh(t,n)}}var Tl={readContext:Wt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},DT={readContext:Wt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:Tm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$a(4194308,4,B0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $a(4194308,4,t,e)},useInsertionEffect:function(t,e){return $a(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bT.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Em,useDebugValue:bh,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Em(!1),e=t[0];return t=PT.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=fn();if(xe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),qe===null)throw Error(L(349));Xr&30||V0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tm(M0.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=qe.identifierPrefix;if(xe){var n=bn,r=Pn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VT={readContext:Wt,useCallback:W0,useContext:Wt,useEffect:Ph,useImperativeHandle:$0,useInsertionEffect:U0,useLayoutEffect:z0,useMemo:H0,useReducer:dc,useRef:F0,useState:function(){return dc(To)},useDebugValue:bh,useDeferredValue:function(t){var e=Ht();return q0(e,Ue.memoizedState,t)},useTransition:function(){var t=dc(To)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:D0,useId:K0,unstable_isNewReconciler:!1},OT={readContext:Wt,useCallback:W0,useContext:Wt,useEffect:Ph,useImperativeHandle:$0,useInsertionEffect:U0,useLayoutEffect:z0,useMemo:H0,useReducer:hc,useRef:F0,useState:function(){return hc(To)},useDebugValue:bh,useDeferredValue:function(t){var e=Ht();return Ue===null?e.memoizedState=t:q0(e,Ue.memoizedState,t)},useTransition:function(){var t=hc(To)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:N0,useSyncExternalStore:D0,useId:K0,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=yr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(sn(e,t,i,r),za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=yr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(sn(e,t,i,r),za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=yr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(sn(e,t,r,n),za(e,t,r))}};function Im(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(i,s):!0}function Y0(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=xt(e)?Gr:ct.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ih(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=xt(e)?Gr:ct.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),_l(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xi(t,e){try{var n="",r=e;do n+=uE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MT=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xl||(xl=!0,Id=r),fd(t,e)},n}function Z0(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function km(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=XT.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Am(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var LT=Kn.ReactCurrentOwner,Tt=!1;function mt(t,e,n,r){e.child=t===null?R0(e,null,n,r):Gi(e,t.child,n,r)}function Rm(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=Rh(t,e,n,r,s,i),n=Ch(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(xe&&n&&gh(e),e.flags|=1,mt(t,e,r,i),e.child)}function Cm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ev(t,e,s,r,i)):(t=Ka(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ev(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(mo(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Un(t,e,i)}return pd(t,e,n,r,i)}function tv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Di,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Di,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Di,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Di,Ct),Ct|=r;return mt(t,e,i,n),e.child}function nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,i){var s=xt(n)?Gr:ct.current;return s=qi(e,s),Fi(e,i),n=Rh(t,e,n,r,s,i),r=Ch(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(xe&&r&&gh(e),e.flags|=1,mt(t,e,n,i),e.child)}function Pm(t,e,n,r,i){if(xt(n)){var s=!0;pl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)Wa(t,e),Y0(e,n,r),hd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Wt(d):(d=xt(n)?Gr:ct.current,d=qi(e,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&xm(e,o,r,d),tr=!1;var v=e.memoizedState;o.state=v,_l(e,r,o,i),u=e.memoizedState,l!==r||v!==u||It.current||tr?(typeof f=="function"&&(dd(e,n,f,r),u=e.memoizedState),(l=tr||Im(e,n,l,r,v,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,P0(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Zt(e.type,l),o.props=d,g=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=xt(n)?Gr:ct.current,u=qi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||v!==u)&&xm(e,o,r,u),tr=!1,v=e.memoizedState,o.state=v,_l(e,r,o,i);var R=e.memoizedState;l!==g||v!==R||It.current||tr?(typeof S=="function"&&(dd(e,n,S,r),R=e.memoizedState),(d=tr||Im(e,n,d,r,v,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,n,r,s,i)}function md(t,e,n,r,i,s){nv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mm(e,n,!1),Un(t,e,s);r=e.stateNode,LT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,l,s)):mt(t,e,l,s),e.memoizedState=r.state,i&&mm(e,n,!0),e.child}function rv(t){var e=t.stateNode;e.pendingContext?pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(t,e.context,!1),xh(t,e.containerInfo)}function bm(t,e,n,r,i){return Ki(),vh(i),e.flags|=256,mt(t,e,n,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function iv(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Re,i&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=iu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=gd,t):Nh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gd,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nh(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,r){return r!==null&&vh(r),Gi(e,t.child,null,n),t=Nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fc(Error(L(422))),Aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=iu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=gd,s);if(!(e.mode&1))return Aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=fc(s,r,void 0),Aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),sn(r,t,i,-1))}return jh(),r=fc(Error(L(421))),Aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=pr(i.nextSibling),bt=e,xe=!0,tn=null,t!==null&&(jt[Ft++]=Pn,jt[Ft++]=bn,jt[Ft++]=Qr,Pn=t.id,bn=t.overflow,Qr=e),e=Nh(e,r.children),e.flags|=4096,e)}function Nm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cd(t.return,e,n)}function pc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nm(t,n,e);else if(t.tag===19)Nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pc(e,!0,n,null,s);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FT(t,e,n){switch(e.tag){case 3:rv(e),Ki();break;case 5:b0(e);break;case 1:xt(e.type)&&pl(e);break;case 4:xh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(yl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?iv(t,e,n):(_e(Re,Re.current&1),t=Un(t,e,n),t!==null?t.sibling:null);_e(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,tv(t,e,n)}return Un(t,e,n)}var ov,vd,av,lv;ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};av=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(yn.current);var s=null;switch(n){case"input":i=Uc(t,i),r=Uc(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=$c(t,i),r=$c(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hl)}Hc(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ao.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ao.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Te("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};lv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Os(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UT(t,e,n){var r=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return xt(e.type)&&fl(),st(e),null;case 3:return r=e.stateNode,Qi(),Ie(It),Ie(ct),Sh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Sd(tn),tn=null))),vd(t,e),st(e),null;case 5:kh(e);var i=Ur(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)av(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return st(e),null}if(t=Ur(yn.current),ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[vo]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<zs.length;i++)Te(zs[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":zp(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":$p(r,s),Te("invalid",r)}Hc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,l,t),i=["children",""+l]):ao.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":ga(r),Bp(r,s,!0);break;case"textarea":ga(r),Wp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=My(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[vo]=r,ov(t,e,!1,!1),e.stateNode=t;e:{switch(o=qc(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<zs.length;i++)Te(zs[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":zp(t,r),i=Uc(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Te("invalid",t);break;case"textarea":$p(t,r),i=$c(t,r),Te("invalid",t);break;default:i=r}Hc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Fy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ly(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&lo(t,u):typeof u=="number"&&lo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&nh(t,s,u,o))}switch(n){case"input":ga(t),Bp(t,r,!1);break;case"textarea":ga(t),Wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)lv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Ur(wo.current),Ur(yn.current),ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return st(e),null;case 13:if(Ie(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Pt!==null&&e.mode&1&&!(e.flags&128))S0(),Ki(),e.flags|=98560,s=!1;else if(s=ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[pn]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else tn!==null&&(Sd(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Be===0&&(Be=3):jh())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Qi(),vd(t,e),t===null&&go(e.stateNode.containerInfo),st(e),null;case 10:return Eh(e.type._context),st(e),null;case 17:return xt(e.type)&&fl(),st(e),null;case 19:if(Ie(Re),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Os(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,Os(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>Yi&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304)}else{if(!r)if(t=wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return st(e),null}else 2*Me()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Re.current,_e(Re,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Lh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function zT(t,e){switch(yh(e),e.tag){case 1:return xt(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),Ie(It),Ie(ct),Sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(Ie(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Re),null;case 4:return Qi(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var Ra=!1,lt=!1,BT=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function _d(t,e,n){try{n()}catch(r){De(t,e,r)}}var Dm=!1;function $T(t,e){if(nd=ul,t=f0(),mh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,g=t,v=null;t:for(;;){for(var S;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)v=g,g=S;for(;;){if(g===t)break t;if(v===n&&++d===i&&(l=o),v===s&&++f===r&&(u=o),(S=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},ul=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var b=R.memoizedProps,D=R.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?b:Zt(e.type,b),D);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(V){De(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=Dm,Dm=!1,R}function Js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_d(e,n,s)}i=i.next}while(i!==r)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uv(t){var e=t.alternate;e!==null&&(t.alternate=null,uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[vo],delete e[od],delete e[kT],delete e[ST])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cv(t){return t.tag===5||t.tag===3||t.tag===4}function Vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var Ge=null,en=!1;function Jn(t,e,n){for(n=n.child;n!==null;)dv(t,e,n),n=n.sibling}function dv(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:lt||Ni(n,e);case 6:var r=Ge,i=en;Ge=null,Jn(t,e,n),Ge=r,en=i,Ge!==null&&(en?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(en?(t=Ge,n=n.stateNode,t.nodeType===8?ac(t.parentNode,n):t.nodeType===1&&ac(t,n),fo(t)):ac(Ge,n.stateNode));break;case 4:r=Ge,i=en,Ge=n.stateNode.containerInfo,en=!0,Jn(t,e,n),Ge=r,en=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_d(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!lt&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Jn(t,e,n),lt=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function Om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BT),e.forEach(function(r){var i=JT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,en=!1;break e;case 3:Ge=l.stateNode.containerInfo,en=!0;break e;case 4:Ge=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(Ge===null)throw Error(L(160));dv(s,o,i),Ge=null,en=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){De(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hv(e,t),e=e.sibling}function hv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),dn(t),r&4){try{Js(3,t,t.return),nu(3,t)}catch(b){De(t,t.return,b)}try{Js(5,t,t.return)}catch(b){De(t,t.return,b)}}break;case 1:Xt(e,t),dn(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(Xt(e,t),dn(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(b){De(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Vy(i,s),qc(l,o);var d=qc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?Fy(i,g):f==="dangerouslySetInnerHTML"?Ly(i,g):f==="children"?lo(i,g):nh(i,f,g,d)}switch(l){case"input":zc(i,s);break;case"textarea":Oy(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Oi(i,!!s.multiple,S,!1):v!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[vo]=s}catch(b){De(t,t.return,b)}}break;case 6:if(Xt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){De(t,t.return,b)}}break;case 3:if(Xt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(b){De(t,t.return,b)}break;case 4:Xt(e,t),dn(t);break;case 13:Xt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oh=Me())),r&4&&Om(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(d=lt)||f,Xt(e,t),lt=d):Xt(e,t),dn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(g=$=f;$!==null;){switch(v=$,S=v.child,v.tag){case 0:case 11:case 14:case 15:Js(4,v,v.return);break;case 1:Ni(v,v.return);var R=v.stateNode;if(typeof R.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(b){De(r,n,b)}}break;case 5:Ni(v,v.return);break;case 22:if(v.memoizedState!==null){Lm(g);continue}}S!==null?(S.return=v,$=S):Lm(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=jy("display",o))}catch(b){De(t,t.return,b)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(b){De(t,t.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Xt(e,t),dn(t),r&4&&Om(t);break;case 21:break;default:Xt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cv(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=Vm(t);Td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vm(t);Ed(t,l,o);break;default:throw Error(L(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WT(t,e,n){$=t,fv(t)}function fv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ra;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||lt;l=Ra;var d=lt;if(Ra=o,(lt=u)&&!d)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?jm(i):u!==null?(u.return=o,$=u):jm(i);for(;s!==null;)$=s,fv(s),s=s.sibling;$=i,Ra=l,lt=d}Mm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Mm(t)}}function Mm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&fo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}lt||e.flags&512&&wd(e)}catch(v){De(e,e.return,v)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Lm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function jm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{wd(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{wd(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var HT=Math.ceil,Il=Kn.ReactCurrentDispatcher,Dh=Kn.ReactCurrentOwner,Bt=Kn.ReactCurrentBatchConfig,ue=0,qe=null,Fe=null,Ye=0,Ct=0,Di=Rr(0),Be=0,xo=null,Yr=0,ru=0,Vh=0,Zs=null,Et=null,Oh=0,Yi=1/0,Rn=null,xl=!1,Id=null,gr=null,Ca=!1,ur=null,kl=0,eo=0,xd=null,Ha=-1,qa=0;function gt(){return ue&6?Me():Ha!==-1?Ha:Ha=Me()}function yr(t){return t.mode&1?ue&2&&Ye!==0?Ye&-Ye:RT.transition!==null?(qa===0&&(qa=Yy()),qa):(t=pe,t!==0||(t=window.event,t=t===void 0?16:i0(t.type)),t):1}function sn(t,e,n,r){if(50<eo)throw eo=0,xd=null,Error(L(185));Mo(t,n,r),(!(ue&2)||t!==qe)&&(t===qe&&(!(ue&2)&&(ru|=n),Be===4&&rr(t,Ye)),kt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Yi=Me()+500,Zl&&Cr()))}function kt(t,e){var n=t.callbackNode;RE(t,e);var r=ll(t,t===qe?Ye:0);if(r===0)n!==null&&Kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kp(n),e===1)t.tag===0?AT(Fm.bind(null,t)):I0(Fm.bind(null,t)),IT(function(){!(ue&6)&&Cr()}),n=null;else{switch(Jy(r)){case 1:n=ah;break;case 4:n=Qy;break;case 16:n=al;break;case 536870912:n=Xy;break;default:n=al}n=Ev(n,pv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pv(t,e){if(Ha=-1,qa=0,ue&6)throw Error(L(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=ll(t,t===qe?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sl(t,r);else{e=r;var i=ue;ue|=2;var s=gv();(qe!==t||Ye!==e)&&(Rn=null,Yi=Me()+500,$r(t,e));do try{GT();break}catch(l){mv(t,l)}while(1);wh(),Il.current=s,ue=i,Fe!==null?e=0:(qe=null,Ye=0,e=Be)}if(e!==0){if(e===2&&(i=Yc(t),i!==0&&(r=i,e=kd(t,i))),e===1)throw n=xo,$r(t,0),rr(t,r),kt(t,Me()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!qT(i)&&(e=Sl(t,r),e===2&&(s=Yc(t),s!==0&&(r=s,e=kd(t,s))),e===1))throw n=xo,$r(t,0),rr(t,r),kt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Mr(t,Et,Rn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Oh+500-Me(),10<e)){if(ll(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sd(Mr.bind(null,t,Et,Rn),e);break}Mr(t,Et,Rn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HT(r/1960))-r,10<r){t.timeoutHandle=sd(Mr.bind(null,t,Et,Rn),r);break}Mr(t,Et,Rn);break;case 5:Mr(t,Et,Rn);break;default:throw Error(L(329))}}}return kt(t,Me()),t.callbackNode===n?pv.bind(null,t):null}function kd(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=Et,Et=n,e!==null&&Sd(e)),t}function Sd(t){Et===null?Et=t:Et.push.apply(Et,t)}function qT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Vh,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Fm(t){if(ue&6)throw Error(L(327));Ui();var e=ll(t,0);if(!(e&1))return kt(t,Me()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var r=Yc(t);r!==0&&(e=r,n=kd(t,r))}if(n===1)throw n=xo,$r(t,0),rr(t,e),kt(t,Me()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,Et,Rn),kt(t,Me()),null}function Mh(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Yi=Me()+500,Zl&&Cr())}}function Jr(t){ur!==null&&ur.tag===0&&!(ue&6)&&Ui();var e=ue;ue|=1;var n=Bt.transition,r=pe;try{if(Bt.transition=null,pe=1,t)return t()}finally{pe=r,Bt.transition=n,ue=e,!(ue&6)&&Cr()}}function Lh(){Ct=Di.current,Ie(Di)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TT(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:Qi(),Ie(It),Ie(ct),Sh();break;case 5:kh(r);break;case 4:Qi();break;case 13:Ie(Re);break;case 19:Ie(Re);break;case 10:Eh(r.type._context);break;case 22:case 23:Lh()}n=n.return}if(qe=t,Fe=t=vr(t.current,null),Ye=Ct=e,Be=0,xo=null,Vh=ru=Yr=0,Et=Zs=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function mv(t,e){do{var n=Fe;try{if(wh(),Ba.current=Tl,El){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(Xr=0,He=Ue=Ce=null,Ys=!1,Eo=0,Dh.current=null,n===null||n.return===null){Be=1,xo=e,Fe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Sm(o);if(S!==null){S.flags&=-257,Am(S,o,l,s,e),S.mode&1&&km(s,d,e),e=S,u=d;var R=e.updateQueue;if(R===null){var b=new Set;b.add(u),e.updateQueue=b}else R.add(u);break e}else{if(!(e&1)){km(s,d,e),jh();break e}u=Error(L(426))}}else if(xe&&l.mode&1){var D=Sm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Am(D,o,l,s,e),vh(Xi(u,l));break e}}s=u=Xi(u,l),Be!==4&&(Be=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=J0(s,u,e);_m(s,T);break e;case 1:l=u;var _=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(gr===null||!gr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=Z0(s,l,e);_m(s,V);break e}}s=s.return}while(s!==null)}vv(n)}catch(U){e=U,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function gv(){var t=Il.current;return Il.current=Tl,t===null?Tl:t}function jh(){(Be===0||Be===3||Be===2)&&(Be=4),qe===null||!(Yr&268435455)&&!(ru&268435455)||rr(qe,Ye)}function Sl(t,e){var n=ue;ue|=2;var r=gv();(qe!==t||Ye!==e)&&(Rn=null,$r(t,e));do try{KT();break}catch(i){mv(t,i)}while(1);if(wh(),ue=n,Il.current=r,Fe!==null)throw Error(L(261));return qe=null,Ye=0,Be}function KT(){for(;Fe!==null;)yv(Fe)}function GT(){for(;Fe!==null&&!_E();)yv(Fe)}function yv(t){var e=wv(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?vv(t):Fe=e,Dh.current=null}function vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zT(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Fe=null;return}}else if(n=UT(n,e,Ct),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);Be===0&&(Be=5)}function Mr(t,e,n){var r=pe,i=Bt.transition;try{Bt.transition=null,pe=1,QT(t,e,n,r)}finally{Bt.transition=i,pe=r}return null}function QT(t,e,n,r){do Ui();while(ur!==null);if(ue&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CE(t,s),t===qe&&(Fe=qe=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,Ev(al,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,Dh.current=null,$T(t,n),hv(n,t),mT(rd),ul=!!nd,rd=nd=null,t.current=n,WT(n),wE(),ue=l,pe=o,Bt.transition=s}else t.current=n;if(Ca&&(Ca=!1,ur=t,kl=i),s=t.pendingLanes,s===0&&(gr=null),IE(n.stateNode),kt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xl)throw xl=!1,t=Id,Id=null,t;return kl&1&&t.tag!==0&&Ui(),s=t.pendingLanes,s&1?t===xd?eo++:(eo=0,xd=t):eo=0,Cr(),null}function Ui(){if(ur!==null){var t=Jy(kl),e=Bt.transition,n=pe;try{if(Bt.transition=null,pe=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,kl=0,ue&6)throw Error(L(331));var i=ue;for(ue|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for($=d;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Js(8,f,s)}var g=f.child;if(g!==null)g.return=f,$=g;else for(;$!==null;){f=$;var v=f.sibling,S=f.return;if(uv(f),f===d){$=null;break}if(v!==null){v.return=S,$=v;break}$=S}}}var R=s.alternate;if(R!==null){var b=R.child;if(b!==null){R.child=null;do{var D=b.sibling;b.sibling=null,b=D}while(b!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,$=T;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,$=k;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nu(9,l)}}catch(U){De(l,l.return,U)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(ue=i,Cr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Gl,t)}catch{}r=!0}return r}finally{pe=n,Bt.transition=e}}return!1}function Um(t,e,n){e=Xi(n,e),e=J0(t,e,1),t=mr(t,e,1),e=gt(),t!==null&&(Mo(t,1,e),kt(t,e))}function De(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=Xi(n,t),t=Z0(e,t,1),e=mr(e,t,1),t=gt(),e!==null&&(Mo(e,1,t),kt(e,t));break}}e=e.return}}function XT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Ye&n)===n&&(Be===4||Be===3&&(Ye&130023424)===Ye&&500>Me()-Oh?$r(t,0):Vh|=n),kt(t,e)}function _v(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=gt();t=Fn(t,e),t!==null&&(Mo(t,e,n),kt(t,n))}function YT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_v(t,n)}function JT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),_v(t,n)}var wv;wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,FT(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,xe&&e.flags&1048576&&x0(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wa(t,e),t=e.pendingProps;var i=qi(e,ct.current);Fi(e,n),i=Rh(null,e,r,t,i,n);var s=Ch();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ih(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,hd(e,r,t,n),e=md(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&gh(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eI(r),t=Zt(r,t),i){case 0:e=pd(null,e,r,t,n);break e;case 1:e=Pm(null,e,r,t,n);break e;case 11:e=Rm(null,e,r,t,n);break e;case 14:e=Cm(null,e,r,Zt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Pm(t,e,r,i,n);case 3:e:{if(rv(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,P0(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(L(423)),e),e=bm(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(L(424)),e),e=bm(t,e,r,n,i);break e}else for(Pt=pr(e.stateNode.containerInfo.firstChild),bt=e,xe=!0,tn=null,n=R0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=Un(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return b0(e),t===null&&ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,id(r,i)?o=null:s!==null&&id(r,s)&&(e.flags|=32),nv(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return iv(t,e,n);case 4:return xh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Rm(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(yl,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!It.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=On(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),cd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Wt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),Cm(t,e,r,i,n);case 15:return ev(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Wa(t,e),e.tag=1,xt(r)?(t=!0,pl(e)):t=!1,Fi(e,n),Y0(e,r,i),hd(e,r,i,n),md(null,e,r,!0,t,n);case 19:return sv(t,e,n);case 22:return tv(t,e,n)}throw Error(L(156,e.tag))};function Ev(t,e){return Gy(t,e)}function ZT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new ZT(t,e,n,r)}function Fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eI(t){if(typeof t=="function")return Fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===sh)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ii:return Wr(n.children,i,s,e);case rh:o=8,i|=8;break;case Mc:return t=zt(12,n,e,i|2),t.elementType=Mc,t.lanes=s,t;case Lc:return t=zt(13,n,e,i),t.elementType=Lc,t.lanes=s,t;case jc:return t=zt(19,n,e,i),t.elementType=jc,t.lanes=s,t;case by:return iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cy:o=10;break e;case Py:o=9;break e;case ih:o=11;break e;case sh:o=14;break e;case er:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function iu(t,e,n,r){return t=zt(22,t,r,e),t.elementType=by,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function gc(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uh(t,e,n,r,i,s,o,l,u){return t=new tI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ih(s),t}function nI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Tv(t){if(!t)return Ir;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(xt(n))return T0(t,n,e)}return e}function Iv(t,e,n,r,i,s,o,l,u){return t=Uh(n,r,!0,t,i,s,o,l,u),t.context=Tv(null),n=t.current,r=gt(),i=yr(n),s=On(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,Mo(t,i,r),kt(t,r),t}function su(t,e,n,r){var i=e.current,s=gt(),o=yr(i);return n=Tv(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(sn(t,i,o,s),za(t,i,o)),o}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){zm(t,e),(t=t.alternate)&&zm(t,e)}function rI(){return null}var xv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bh(t){this._internalRoot=t}ou.prototype.render=Bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));su(t,e,null,null)};ou.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){su(null,t,null,null)}),e[jn]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=t0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&r0(t)}};function $h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function iI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Al(o);s.call(d)}}var o=Iv(e,r,t,0,null,!1,!1,"",Bm);return t._reactRootContainer=o,t[jn]=o.current,go(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Al(u);l.call(d)}}var u=Uh(t,0,!1,null,null,!1,!1,"",Bm);return t._reactRootContainer=u,t[jn]=u.current,go(t.nodeType===8?t.parentNode:t),Jr(function(){su(e,u,n,r)}),u}function lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Al(o);l.call(u)}}su(e,o,t,i)}else o=iI(n,e,t,i,r);return Al(o)}Zy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Us(e.pendingLanes);n!==0&&(lh(e,n|1),kt(e,Me()),!(ue&6)&&(Yi=Me()+500,Cr()))}break;case 13:Jr(function(){var r=Fn(t,1);if(r!==null){var i=gt();sn(r,t,1,i)}}),zh(t,1)}};uh=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=gt();sn(e,t,134217728,n)}zh(t,134217728)}};e0=function(t){if(t.tag===13){var e=yr(t),n=Fn(t,e);if(n!==null){var r=gt();sn(n,t,e,r)}zh(t,e)}};t0=function(){return pe};n0=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Gc=function(t,e,n){switch(e){case"input":if(zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jl(r);if(!i)throw Error(L(90));Dy(r),zc(r,i)}}}break;case"textarea":Oy(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};By=Mh;$y=Jr;var sI={usingClientEntryPoint:!1,Events:[jo,Ai,Jl,Uy,zy,Mh]},Ms={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oI={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance||rI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Gl=Pa.inject(oI),gn=Pa}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sI;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$h(e))throw Error(L(200));return nI(t,e,null,n)};Ot.createRoot=function(t,e){if(!$h(t))throw Error(L(299));var n=!1,r="",i=xv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Uh(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,go(t.nodeType===8?t.parentNode:t),new Bh(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=qy(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return Jr(t)};Ot.hydrate=function(t,e,n){if(!au(e))throw Error(L(200));return lu(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!$h(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Iv(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ou(e)};Ot.render=function(t,e,n){if(!au(e))throw Error(L(200));return lu(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!au(t))throw Error(L(40));return t._reactRootContainer?(Jr(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Ot.unstable_batchedUpdates=Mh;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!au(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return lu(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),ky.exports=Ot;var aI=ky.exports,Sv,$m=aI;Sv=$m.createRoot,$m.hydrateRoot;var lI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const uI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cI=(t,e)=>{const n=ye.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},d)=>ye.createElement("svg",{ref:d,...lI,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${uI(t)}`,...u},[...e.map(([f,g])=>ye.createElement(f,g)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n};var Ve=cI;const Wm=Ve("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]),Av=Ve("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),dI=Ve("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),Wh=Ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Ga=Ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),hI=Ve("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),fI=Ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),pI=Ve("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),vi=Ve("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]),mI=Ve("FileSpreadsheet",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M14 17h2",key:"10kma7"}]]),yc=Ve("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),gI=Ve("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),Rv=Ve("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]),Rl=Ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),yI=Ve("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]),Hm=Ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),vI=Ve("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Hh=Ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),_I=Ve("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Cv=Ve("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),wI=Ve("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),qh=Ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,S=d&63;u||(S=64,o||(v=64)),r.push(n[f],n[g],n[v],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new TI;const v=s<<2|l>>4;if(r.push(v),d!==64){const S=l<<4&240|d>>2;if(r.push(S),g!==64){const R=d<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const II=function(t){const e=Pv(t);return bv.encodeByteArray(e,!0)},Cl=function(t){return II(t).replace(/\./g,"")},Nv=function(t){try{return bv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=()=>xI().__FIREBASE_DEFAULTS__,SI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nv(t[1]);return e&&JSON.parse(e)},uu=()=>{try{return kI()||SI()||AI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dv=t=>{var e,n;return(n=(e=uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RI=t=>{const e=Dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vv=()=>{var t;return(t=uu())===null||t===void 0?void 0:t.config},Ov=t=>{var e;return(e=uu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Cl(JSON.stringify(n)),Cl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function NI(){var t;const e=(t=uu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OI(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function MI(){return!NI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lv(){try{return typeof indexedDB=="object"}catch{return!1}}function jv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function LI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jI,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ln(i,l,r)}}function FI(t,e){return t.replace(UI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UI=/\{\$([^}]+)}/g;function zI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qm(s)&&qm(o)){if(!ko(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function BI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vc),i.error===void 0&&(i.error=vc),i.complete===void 0&&(i.complete=vc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=1e3,qI=2,KI=4*60*60*1e3,GI=.5;function Km(t,e=HI,n=qI){const r=e*Math.pow(n,t),i=Math.round(GI*r*(Math.random()-.5)*2);return Math.min(KI,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YI(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XI(t){return t===Lr?void 0:t}function YI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const ZI={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},ex=ae.INFO,tx={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},nx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=nx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const rx=(t,e)=>e.some(n=>t instanceof n);let Gm,Qm;function ix(){return Gm||(Gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sx(){return Qm||(Qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,Ad=new WeakMap,Uv=new WeakMap,_c=new WeakMap,Kh=new WeakMap;function ox(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fv.set(n,t)}).catch(()=>{}),Kh.set(e,t),e}function ax(t){if(Ad.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ad.set(t,e)}let Rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ad.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lx(t){Rd=t(Rd)}function ux(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wc(this),e,...n);return Uv.set(r,e.sort?e.sort():[e]),_r(r)}:sx().includes(t)?function(...e){return t.apply(wc(this),e),_r(Fv.get(this))}:function(...e){return _r(t.apply(wc(this),e))}}function cx(t){return typeof t=="function"?ux(t):(t instanceof IDBTransaction&&ax(t),rx(t,ix())?new Proxy(t,Rd):t)}function _r(t){if(t instanceof IDBRequest)return ox(t);if(_c.has(t))return _c.get(t);const e=cx(t);return e!==t&&(_c.set(t,e),Kh.set(e,t)),e}const wc=t=>Kh.get(t);function zv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_r(o.result),u.oldVersion,u.newVersion,_r(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const dx=["get","getKey","getAll","getAllKeys","count"],hx=["put","add","delete","clear"],Ec=new Map;function Xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Ec.set(e,s),s}lx(t=>({...t,get:(e,n,r)=>Xm(e,n)||t.get(e,n,r),has:(e,n)=>!!Xm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(px(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function px(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cd="@firebase/app",Ym="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new cu("@firebase/app"),mx="@firebase/app-compat",gx="@firebase/analytics-compat",yx="@firebase/analytics",vx="@firebase/app-check-compat",_x="@firebase/app-check",wx="@firebase/auth",Ex="@firebase/auth-compat",Tx="@firebase/database",Ix="@firebase/data-connect",xx="@firebase/database-compat",kx="@firebase/functions",Sx="@firebase/functions-compat",Ax="@firebase/installations",Rx="@firebase/installations-compat",Cx="@firebase/messaging",Px="@firebase/messaging-compat",bx="@firebase/performance",Nx="@firebase/performance-compat",Dx="@firebase/remote-config",Vx="@firebase/remote-config-compat",Ox="@firebase/storage",Mx="@firebase/storage-compat",Lx="@firebase/firestore",jx="@firebase/vertexai-preview",Fx="@firebase/firestore-compat",Ux="firebase",zx="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="[DEFAULT]",Bx={[Cd]:"fire-core",[mx]:"fire-core-compat",[yx]:"fire-analytics",[gx]:"fire-analytics-compat",[_x]:"fire-app-check",[vx]:"fire-app-check-compat",[wx]:"fire-auth",[Ex]:"fire-auth-compat",[Tx]:"fire-rtdb",[Ix]:"fire-data-connect",[xx]:"fire-rtdb-compat",[kx]:"fire-fn",[Sx]:"fire-fn-compat",[Ax]:"fire-iid",[Rx]:"fire-iid-compat",[Cx]:"fire-fcm",[Px]:"fire-fcm-compat",[bx]:"fire-perf",[Nx]:"fire-perf-compat",[Dx]:"fire-rc",[Vx]:"fire-rc-compat",[Ox]:"fire-gcs",[Mx]:"fire-gcs-compat",[Lx]:"fire-fst",[Fx]:"fire-fst-compat",[jx]:"fire-vertex","fire-js":"fire-js",[Ux]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Map,$x=new Map,bd=new Map;function Jm(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(bd.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;bd.set(e,t);for(const n of Pl.values())Jm(n,t);for(const n of $x.values())Jm(n,t);return!0}function li(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new ai("app","Firebase",Wx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=zx;function Bv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=Vv()),!n)throw wr.create("no-options");const s=Pl.get(i);if(s){if(ko(n,s.options)&&ko(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new JI(i);for(const u of bd.values())o.addComponent(u);const l=new Hx(n,r,o);return Pl.set(i,l),l}function Gh(t=Pd){const e=Pl.get(t);if(!e&&t===Pd&&Vv())return Bv();if(!e)throw wr.create("no-app",{appName:t});return e}function $t(t,e,n){var r;let i=(r=Bx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}In(new an(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx="firebase-heartbeat-database",Kx=1,So="firebase-heartbeat-store";let Tc=null;function $v(){return Tc||(Tc=zv(qx,Kx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function Gx(t){try{const n=(await $v()).transaction(So),r=await n.objectStore(So).get(Wv(t));return await n.done,r}catch(e){if(e instanceof ln)zn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Zm(t,e){try{const r=(await $v()).transaction(So,"readwrite");await r.objectStore(So).put(e,Wv(t)),await r.done}catch(n){if(n instanceof ln)zn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function Wv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=1024,Xx=30*24*60*60*1e3;class Yx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Xx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eg(),{heartbeatsToSend:r,unsentEntries:i}=Jx(this._heartbeatsCache.heartbeats),s=Cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zn.warn(n),""}}}function eg(){return new Date().toISOString().substring(0,10)}function Jx(t,e=Qx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lv()?jv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tg(t){return Cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){In(new an("platform-logger",e=>new fx(e),"PRIVATE")),In(new an("heartbeat",e=>new Yx(e),"PRIVATE")),$t(Cd,Ym,t),$t(Cd,Ym,"esm2017"),$t("fire-js","")}ek("");var tk="firebase",nk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(tk,nk,"app");const Hv="@firebase/installations",Qh="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=1e4,Kv=`w:${Qh}`,Gv="FIS_v2",rk="https://firebaseinstallations.googleapis.com/v1",ik=60*60*1e3,sk="installations",ok="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new ai(sk,ok,ak);function Qv(t){return t instanceof ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv({projectId:t}){return`${rk}/projects/${t}/installations`}function Yv(t){return{token:t.token,requestStatus:2,expiresIn:uk(t.expiresIn),creationTime:Date.now()}}async function Jv(t,e){const r=(await e.json()).error;return Zr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lk(t,{refreshToken:e}){const n=Zv(t);return n.append("Authorization",ck(e)),n}async function e_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uk(t){return Number(t.replace("s","000"))}function ck(t){return`${Gv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Xv(t),i=Zv(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:Gv,appId:t.appId,sdkVersion:Kv},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await e_(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Yv(d.authToken)}}else throw await Jv("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^[cdef][\w-]{21}$/,Nd="";function pk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mk(t);return fk.test(n)?n:Nd}catch{return Nd}}function mk(t){return hk(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Map;function r_(t,e){const n=du(t);i_(n,e),gk(n,e)}function i_(t,e){const n=n_.get(t);if(n)for(const r of n)r(e)}function gk(t,e){const n=yk();n&&n.postMessage({key:t,fid:e}),vk()}let zr=null;function yk(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=t=>{i_(t.data.key,t.data.fid)}),zr}function vk(){n_.size===0&&zr&&(zr.close(),zr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="firebase-installations-database",wk=1,ei="firebase-installations-store";let Ic=null;function Xh(){return Ic||(Ic=zv(_k,wk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}})),Ic}async function bl(t,e){const n=du(t),i=(await Xh()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&r_(t,e.fid),e}async function s_(t){const e=du(t),r=(await Xh()).transaction(ei,"readwrite");await r.objectStore(ei).delete(e),await r.done}async function hu(t,e){const n=du(t),i=(await Xh()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&r_(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t){let e;const n=await hu(t.appConfig,r=>{const i=Ek(r),s=Tk(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Nd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ek(t){const e=t||{fid:pk(),registrationStatus:0};return o_(e)}function Tk(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Ik(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xk(t)}:{installationEntry:e}}async function Ik(t,e){try{const n=await dk(t,e);return bl(t.appConfig,n)}catch(n){throw Qv(n)&&n.customData.serverCode===409?await s_(t.appConfig):await bl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function xk(t){let e=await ng(t.appConfig);for(;e.registrationStatus===1;)await t_(100),e=await ng(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yh(t);return r||n}return e}function ng(t){return hu(t,e=>{if(!e)throw Zr.create("installation-not-found");return o_(e)})}function o_(t){return kk(t)?{fid:t.fid,registrationStatus:0}:t}function kk(t){return t.registrationStatus===1&&t.registrationTime+qv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk({appConfig:t,heartbeatServiceProvider:e},n){const r=Ak(t,n),i=lk(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:Kv,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await e_(()=>fetch(r,l));if(u.ok){const d=await u.json();return Yv(d)}else throw await Jv("Generate Auth Token",u)}function Ak(t,{fid:e}){return`${Xv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t,e=!1){let n;const r=await hu(t.appConfig,s=>{if(!a_(s))throw Zr.create("not-registered");const o=s.authToken;if(!e&&Pk(o))return s;if(o.requestStatus===1)return n=Rk(t,e),s;{if(!navigator.onLine)throw Zr.create("app-offline");const l=Nk(s);return n=Ck(t,l),l}});return n?await n:r.authToken}async function Rk(t,e){let n=await rg(t.appConfig);for(;n.authToken.requestStatus===1;)await t_(100),n=await rg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Jh(t,e):r}function rg(t){return hu(t,e=>{if(!a_(e))throw Zr.create("not-registered");const n=e.authToken;return Dk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ck(t,e){try{const n=await Sk(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bl(t.appConfig,r),n}catch(n){if(Qv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await s_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bl(t.appConfig,r)}throw n}}function a_(t){return t!==void 0&&t.registrationStatus===2}function Pk(t){return t.requestStatus===2&&!bk(t)}function bk(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ik}function Nk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Dk(t){return t.requestStatus===1&&t.requestTime+qv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t){const e=t,{installationEntry:n,registrationPromise:r}=await Yh(e);return r?r.catch(console.error):Jh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e=!1){const n=t;return await Mk(n),(await Jh(n,e)).token}async function Mk(t){const{registrationPromise:e}=await Yh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){if(!t||!t.options)throw xc("App Configuration");if(!t.name)throw xc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xc(t){return Zr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="installations",jk="installations-internal",Fk=t=>{const e=t.getProvider("app").getImmediate(),n=Lk(e),r=li(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Uk=t=>{const e=t.getProvider("app").getImmediate(),n=li(e,l_).getImmediate();return{getId:()=>Vk(n),getToken:i=>Ok(n,i)}};function zk(){In(new an(l_,Fk,"PUBLIC")),In(new an(jk,Uk,"PRIVATE"))}zk();$t(Hv,Qh);$t(Hv,Qh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="analytics",Bk="firebase_id",$k="origin",Wk=60*1e3,Hk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new cu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new ai("analytics","Analytics",qk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){if(!t.startsWith(Zh)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function u_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Gk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Qk(t,e){const n=Gk("firebase-js-sdk-policy",{createScriptURL:Kk}),r=document.createElement("script"),i=`${Zh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Xk(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Yk(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await u_(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){St.error(l)}t("config",i,s)}async function Jk(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await u_(n);for(const u of o){const d=l.find(g=>g.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){St.error(s)}}function Zk(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Jk(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Yk(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){St.error(l)}}return i}function eS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Zk(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function tS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=30,rS=1e3;class iS{constructor(e={},n=rS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const c_=new iS;function sS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function oS(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:sS(r)},s=Hk.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function aS(t,e=c_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new cS;return setTimeout(async()=>{l.abort()},n!==void 0?n:Wk),d_({appId:r,apiKey:i,measurementId:s},o,l,e)}async function d_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=c_){var s;const{appId:o,measurementId:l}=t;try{await lS(r,e)}catch(u){if(l)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await oS(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!uS(d)){if(i.deleteThrottleMetadata(o),l)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?Km(n,i.intervalMillis,nS):Km(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,g),St.debug(`Calling attemptFetch again in ${f} millis`),d_(t,g,r,i)}}function lS(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uS(t){if(!(t instanceof ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(){if(Lv())try{await jv()}catch(t){return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fS(t,e,n,r,i,s,o){var l;const u=aS(t);u.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>St.error(S)),e.push(u);const d=hS().then(S=>{if(S)return r.getId()}),[f,g]=await Promise.all([u,d]);tS(s)||Qk(s,f.measurementId),i("js",new Date);const v=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return v[$k]="firebase",v.update=!0,g!=null&&(v[Bk]=g),i("config",f.measurementId,v),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.app=e}_delete(){return delete to[this.app.options.appId],Promise.resolve()}}let to={},ig=[];const sg={};let kc="dataLayer",mS="gtag",og,h_,ag=!1;function gS(){const t=[];if(Mv()&&t.push("This is a browser extension environment."),LI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function yS(t,e,n){gS();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(to[r]!=null)throw Nt.create("already-exists",{id:r});if(!ag){Xk(kc);const{wrappedGtag:s,gtagCore:o}=eS(to,ig,sg,kc,mS);h_=s,og=o,ag=!0}return to[r]=fS(t,ig,sg,e,og,kc,n),new pS(t)}function vS(t=Gh()){t=yt(t);const e=li(t,Nl);return e.isInitialized()?e.getImmediate():_S(t)}function _S(t,e={}){const n=li(t,Nl);if(n.isInitialized()){const i=n.getImmediate();if(ko(e,n.getOptions()))return i;throw Nt.create("already-initialized")}return n.initialize({options:e})}function wS(t,e,n,r){t=yt(t),dS(h_,to[t.app.options.appId],e,n,r).catch(i=>St.error(i))}const lg="@firebase/analytics",ug="0.10.8";function ES(){In(new an(Nl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return yS(r,i,n)},"PUBLIC")),In(new an("analytics-internal",t,"PRIVATE")),$t(lg,ug),$t(lg,ug,"esm2017");function t(e){try{const n=e.getProvider(Nl).getImmediate();return{logEvent:(r,i,s)=>wS(n,r,i,s)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}ES();function ef(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function f_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TS=f_,p_=new ai("auth","Firebase",f_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new cu("@firebase/auth");function IS(t,...e){Dl.logLevel<=ae.WARN&&Dl.warn(`Auth (${ls}): ${t}`,...e)}function Qa(t,...e){Dl.logLevel<=ae.ERROR&&Dl.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw tf(t,...e)}function vn(t,...e){return tf(t,...e)}function m_(t,e,n){const r=Object.assign(Object.assign({},TS()),{[e]:n});return new ai("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return m_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p_.create(t,...e)}function J(t,e,...n){if(!t)throw tf(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function $n(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xS(){return cg()==="http:"||cg()==="https:"}function cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xS()||Mv()||"connection"in navigator)?navigator.onLine:!0}function SS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=bI()||VI()}get(){return kS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new zo(3e4,6e4);function Bo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function us(t,e,n,r,i={}){return y_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return DI()||(d.referrerPolicy="no-referrer"),g_.fetch()(v_(t,t.config.apiHost,n,l),d)})}async function y_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AS),e);try{const i=new CS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw m_(t,f,d);Bn(t,f)}}catch(i){if(i instanceof ln)throw i;Bn(t,"network-request-failed",{message:String(i)})}}async function rf(t,e,n,r,i={}){const s=await us(t,e,n,r,i);return"mfaPendingCredential"in s&&Bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function v_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`}class CS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),RS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function __(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bS(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=sf(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(Sc(i.auth_time)),issuedAtTime:no(Sc(i.iat)),expirationTime:no(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function sf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nv(n);return i?JSON.parse(i):(Qa("Failed to decode base64 JWT payload"),null)}catch(i){return Qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dg(t){const e=sf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&NS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ao(t,__(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?w_(s.providerUserInfo):[],l=OS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Vd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function VS(t){const e=yt(t);await Vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function w_(t){return t.map(e=>{var{providerId:n}=e,r=ef(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e){const n=await y_(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=v_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",g_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LS(t,e){return us(t,"POST","/v2/accounts:revokeToken",Bo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await MS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bS(this,e)}reload(){return VS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await Ao(this,PS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:V,isAnonymous:U,providerData:j,stsTokenManager:E}=n;J(k&&E,e,"internal-error");const y=zi.fromJSON(this.name,E);J(typeof k=="string",e,"internal-error"),Zn(g,e.name),Zn(v,e.name),J(typeof V=="boolean",e,"internal-error"),J(typeof U=="boolean",e,"internal-error"),Zn(S,e.name),Zn(R,e.name),Zn(b,e.name),Zn(D,e.name),Zn(T,e.name),Zn(_,e.name);const w=new Dn({uid:k,auth:e,email:v,emailVerified:V,displayName:g,isAnonymous:U,photoURL:R,phoneNumber:S,tenantId:b,stsTokenManager:y,createdAt:T,lastLoginAt:_});return j&&Array.isArray(j)&&(w.providerData=j.map(x=>Object.assign({},x))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new zi;i.updateFromServerResponse(n);const s=new Dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?w_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new zi;l.updateFromIdToken(r);const u=new Dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function Vn(t){$n(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}E_.type="NONE";const fg=E_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(Vn(fg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Vn(fg);const o=Xa(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const g=Dn._fromJSON(e,f);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(A_(e))return"Blackberry";if(R_(e))return"Webos";if(I_(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(S_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function T_(t=dt()){return/firefox\//i.test(t)}function I_(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(t=dt()){return/crios\//i.test(t)}function k_(t=dt()){return/iemobile/i.test(t)}function S_(t=dt()){return/android/i.test(t)}function A_(t=dt()){return/blackberry/i.test(t)}function R_(t=dt()){return/webos/i.test(t)}function of(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jS(t=dt()){var e;return of(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FS(){return OI()&&document.documentMode===10}function C_(t=dt()){return of(t)||S_(t)||R_(t)||A_(t)||/windows phone/i.test(t)||k_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e=[]){let n;switch(t){case"Browser":n=pg(dt());break;case"Worker":n=`${pg(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e={}){return us(t,"GET","/v2/passwordPolicy",Bo(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=6;class $S{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new US(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await __(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Mn(this));const n=e?yt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zS(this),n=new $S(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=P_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $o(t){return yt(t)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=BI(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HS(t){af=t}function qS(t){return af.loadJS(t)}function KS(){return af.gapiScript}function GS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){const n=li(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ko(s,e??{}))return i;Bn(i,"already-initialized")}return n.initialize({options:e})}function XS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YS(t,e,n){const r=$o(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=b_(e),{host:o,port:l}=JS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZS()}function b_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JS(t){const e=b_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gg(o)}}}function gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e){return rf(t,"POST","/v1/accounts:signInWithIdp",Bo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="http://localhost";class ti extends N_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ef(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:eA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Wo{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Wo{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Wo{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){return rf(t,"POST","/v1/accounts:signUp",Bo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dn._fromIdTokenResponse(e,r,i),o=yg(r);return new Wn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yg(r);return new Wn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t){var e;if(mn(t.app))return Promise.reject(Mn(t));const n=$o(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Wn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await tA(n,{returnSecureToken:!0}),i=await Wn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ol(e,n,r,i)}}function V_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(t,s,e,r):s})}async function rA(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject(Mn(r));const i="reauthenticate";try{const s=await Ao(t,V_(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=sf(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Wn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e,n=!1){if(mn(t.app))return Promise.reject(Mn(t));const r="signIn",i=await V_(t,r,e),s=await Wn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return rf(t,"POST","/v1/accounts:signInWithCustomToken",Bo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e){if(mn(t.app))return Promise.reject(Mn(t));const n=$o(t),r=await oA(n,{token:e,returnSecureToken:!0}),i=await Wn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function lA(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function uA(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function cA(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}const Ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=1e3,hA=10;class M_ extends O_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}M_.type="LOCAL";const fA=M_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_ extends O_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}L_.type="SESSION";const j_=L_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await pA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=lf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function gA(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function yA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _A(){return F_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="firebaseLocalStorageDb",wA=1,Ll="firebaseLocalStorage",z_="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pu(t,e){return t.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function EA(){const t=indexedDB.deleteDatabase(U_);return new Ho(t).toPromise()}function Od(){const t=indexedDB.open(U_,wA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ll,{keyPath:z_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ll)?e(r):(r.close(),await EA(),e(await Od()))})})}async function vg(t,e,n){const r=pu(t,!0).put({[z_]:e,value:n});return new Ho(r).toPromise()}async function TA(t,e){const n=pu(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function _g(t,e){const n=pu(t,!0).delete(e);return new Ho(n).toPromise()}const IA=800,xA=3;class B_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return F_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(_A()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yA(),!this.activeServiceWorker)return;this.sender=new mA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await vg(e,Ml,"1"),await _g(e,Ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_g(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pu(i,!1).getAll();return new Ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}B_.type="LOCAL";const kA=B_;new zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t,e){return e?Vn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends N_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AA(t){return sA(t.auth,new uf(t),t.bypassAuthState)}function RA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),iA(n,new uf(t),t.bypassAuthState)}async function CA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),rA(n,new uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AA;case"linkViaPopup":case"linkViaRedirect":return CA;case"reauthViaPopup":case"reauthViaRedirect":return RA;default:Bn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new zo(2e3,1e4);class Vi extends $_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PA.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="pendingRedirect",Ya=new Map;class NA extends $_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ya.get(this.auth._key());if(!e){try{const r=await DA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ya.set(this.auth._key(),e)}return this.bypassAuthState||Ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DA(t,e){const n=MA(e),r=OA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function VA(t,e){Ya.set(t._key(),e)}function OA(t){return Vn(t._redirectPersistence)}function MA(t){return Xa(bA,t.config.apiKey,t.name)}async function LA(t,e,n=!1){if(mn(t.app))return Promise.reject(Mn(t));const r=$o(t),i=SA(r,e),o=await new NA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=10*60*1e3;class FA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!W_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jA&&this.cachedEventUids.clear(),this.cachedEventUids.has(wg(e))}saveEventToCache(e){this.cachedEventUids.add(wg(e)),this.lastProcessedEventTime=Date.now()}}function wg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e={}){return us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$A=/^https?/;async function WA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zA(t);for(const n of e)try{if(HA(n))return}catch{}Bn(t,"unauthorized-domain")}function HA(t){const e=Dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$A.test(n))return!1;if(BA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new zo(3e4,6e4);function Eg(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KA(t){return new Promise((e,n)=>{var r,i,s;function o(){Eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eg(),n(vn(t,"network-request-failed"))},timeout:qA.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const l=GS("iframefcb");return _n()[l]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},qS(`${KS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function GA(t){return Ja=Ja||KA(t),Ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new zo(5e3,15e3),XA="__/auth/iframe",YA="emulator/auth/iframe",JA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eR(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,YA):`https://${t.config.authDomain}/${XA}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=ZA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Uo(r).slice(1)}`}async function tR(t){const e=await GA(t),n=_n().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:eR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),l=_n().setTimeout(()=>{s(o)},QA.get());function u(){_n().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rR=500,iR=600,sR="_blank",oR="http://localhost";class Tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aR(t,e,n,r=rR,i=iR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},nR),{width:r.toString(),height:i.toString(),top:s,left:o}),d=dt().toLowerCase();n&&(l=x_(d)?sR:n),T_(d)&&(e=e||oR,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[S,R])=>`${v}${S}=${R},`,"");if(jS(d)&&l!=="_self")return lR(e||"",l),new Tg(null);const g=window.open(e||"",l,f);J(g,t,"popup-blocked");try{g.focus()}catch{}return new Tg(g)}function lR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="__/auth/handler",cR="emulator/auth/handler",dR=encodeURIComponent("fac");async function Ig(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof D_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(s||{}))o[f]=g}if(e instanceof Wo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${dR}=${encodeURIComponent(u)}`:"";return`${hR(t)}?${Uo(l).slice(1)}${d}`}function hR({config:t}){return t.emulator?nf(t,cR):`https://${t.authDomain}/${uR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="webStorageSupport";class fR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=j_,this._completeRedirectFn=LA,this._overrideRedirectResult=VA}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ig(e,n,r,Dd(),i);return aR(e,o,lf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ig(e,n,r,Dd(),i);return gA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tR(e),r=new FA(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ac];o!==void 0&&n(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C_()||I_()||of()}}const pR=fR;var xg="@firebase/auth",kg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yR(t){In(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P_(t)},d=new WS(r,i,s,u);return XS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new an("auth-internal",e=>{const n=$o(e.getProvider("auth").getImmediate());return(r=>new mR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(xg,kg,gR(t)),$t(xg,kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=5*60,_R=Ov("authIdTokenMaxAge")||vR;let Sg=null;const wR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_R)return;const i=n==null?void 0:n.token;Sg!==i&&(Sg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ER(t=Gh()){const e=li(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QS(t,{popupRedirectResolver:pR,persistence:[kA,fA,j_]}),r=Ov("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wR(s.toString());uA(n,o,()=>o(n.currentUser)),lA(n,l=>o(l))}}const i=Dv("auth");return i&&YS(n,`http://${i}`),n}function TR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}HS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yR("Browser");var Ag=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,H_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(x,A,P){for(var I=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)I[ht-2]=arguments[ht];return y.prototype[A].apply(x,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var x=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)x[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;16>A;++A)x[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],A=E.g[2];var P=E.g[3],I=y+(P^w&(A^P))+x[0]+3614090360&4294967295;y=w+(I<<7&4294967295|I>>>25),I=P+(A^y&(w^A))+x[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=A+(w^P&(y^w))+x[2]+606105819&4294967295,A=P+(I<<17&4294967295|I>>>15),I=w+(y^A&(P^y))+x[3]+3250441966&4294967295,w=A+(I<<22&4294967295|I>>>10),I=y+(P^w&(A^P))+x[4]+4118548399&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(A^y&(w^A))+x[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=A+(w^P&(y^w))+x[6]+2821735955&4294967295,A=P+(I<<17&4294967295|I>>>15),I=w+(y^A&(P^y))+x[7]+4249261313&4294967295,w=A+(I<<22&4294967295|I>>>10),I=y+(P^w&(A^P))+x[8]+1770035416&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(A^y&(w^A))+x[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=A+(w^P&(y^w))+x[10]+4294925233&4294967295,A=P+(I<<17&4294967295|I>>>15),I=w+(y^A&(P^y))+x[11]+2304563134&4294967295,w=A+(I<<22&4294967295|I>>>10),I=y+(P^w&(A^P))+x[12]+1804603682&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(A^y&(w^A))+x[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=A+(w^P&(y^w))+x[14]+2792965006&4294967295,A=P+(I<<17&4294967295|I>>>15),I=w+(y^A&(P^y))+x[15]+1236535329&4294967295,w=A+(I<<22&4294967295|I>>>10),I=y+(A^P&(w^A))+x[1]+4129170786&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^A&(y^w))+x[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=A+(y^w&(P^y))+x[11]+643717713&4294967295,A=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(A^P))+x[0]+3921069994&4294967295,w=A+(I<<20&4294967295|I>>>12),I=y+(A^P&(w^A))+x[5]+3593408605&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^A&(y^w))+x[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=A+(y^w&(P^y))+x[15]+3634488961&4294967295,A=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(A^P))+x[4]+3889429448&4294967295,w=A+(I<<20&4294967295|I>>>12),I=y+(A^P&(w^A))+x[9]+568446438&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^A&(y^w))+x[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=A+(y^w&(P^y))+x[3]+4107603335&4294967295,A=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(A^P))+x[8]+1163531501&4294967295,w=A+(I<<20&4294967295|I>>>12),I=y+(A^P&(w^A))+x[13]+2850285829&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^A&(y^w))+x[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=A+(y^w&(P^y))+x[7]+1735328473&4294967295,A=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(A^P))+x[12]+2368359562&4294967295,w=A+(I<<20&4294967295|I>>>12),I=y+(w^A^P)+x[5]+4294588738&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^A)+x[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=A+(P^y^w)+x[11]+1839030562&4294967295,A=P+(I<<16&4294967295|I>>>16),I=w+(A^P^y)+x[14]+4259657740&4294967295,w=A+(I<<23&4294967295|I>>>9),I=y+(w^A^P)+x[1]+2763975236&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^A)+x[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=A+(P^y^w)+x[7]+4139469664&4294967295,A=P+(I<<16&4294967295|I>>>16),I=w+(A^P^y)+x[10]+3200236656&4294967295,w=A+(I<<23&4294967295|I>>>9),I=y+(w^A^P)+x[13]+681279174&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^A)+x[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=A+(P^y^w)+x[3]+3572445317&4294967295,A=P+(I<<16&4294967295|I>>>16),I=w+(A^P^y)+x[6]+76029189&4294967295,w=A+(I<<23&4294967295|I>>>9),I=y+(w^A^P)+x[9]+3654602809&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^A)+x[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=A+(P^y^w)+x[15]+530742520&4294967295,A=P+(I<<16&4294967295|I>>>16),I=w+(A^P^y)+x[2]+3299628645&4294967295,w=A+(I<<23&4294967295|I>>>9),I=y+(A^(w|~P))+x[0]+4096336452&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~A))+x[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=A+(y^(P|~w))+x[14]+2878612391&4294967295,A=P+(I<<15&4294967295|I>>>17),I=w+(P^(A|~y))+x[5]+4237533241&4294967295,w=A+(I<<21&4294967295|I>>>11),I=y+(A^(w|~P))+x[12]+1700485571&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~A))+x[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=A+(y^(P|~w))+x[10]+4293915773&4294967295,A=P+(I<<15&4294967295|I>>>17),I=w+(P^(A|~y))+x[1]+2240044497&4294967295,w=A+(I<<21&4294967295|I>>>11),I=y+(A^(w|~P))+x[8]+1873313359&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~A))+x[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=A+(y^(P|~w))+x[6]+2734768916&4294967295,A=P+(I<<15&4294967295|I>>>17),I=w+(P^(A|~y))+x[13]+1309151649&4294967295,w=A+(I<<21&4294967295|I>>>11),I=y+(A^(w|~P))+x[4]+4149444226&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~A))+x[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=A+(y^(P|~w))+x[2]+718787259&4294967295,A=P+(I<<15&4294967295|I>>>17),I=w+(P^(A|~y))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,x=this.B,A=this.h,P=0;P<y;){if(A==0)for(;P<=w;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<y;)if(x[A++]=E.charCodeAt(P++),A==this.blockSize){i(this,x),A=0;break}}else for(;P<y;)if(x[A++]=E[P++],A==this.blockSize){i(this,x),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var x=0;32>x;x+=8)E[w++]=this.g[y]>>>x&255;return E};function s(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],x=!0,A=E.length-1;0<=A;A--){var P=E[A]|0;x&&P==y||(w[A]=P,x=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return D(d(-E));for(var y=[],w=1,x=0;E>=w;x++)y[x]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return D(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(y,8)),x=g,A=0;A<E.length;A+=8){var P=Math.min(8,E.length-A),I=parseInt(E.substring(A,A+P),y);8>P?(P=d(Math.pow(y,P)),x=x.j(P).add(d(I))):(x=x.j(w),x=x.add(d(I)))}return x}var g=u(0),v=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-D(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var x=this.i(w);E+=(0<=x?x:4294967296+x)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(b(this))return"-"+D(this).toString(E);for(var y=d(Math.pow(E,6)),w=this,x="";;){var A=V(w,y).g;w=T(w,A.j(y));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=A,R(w))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function b(E){return E.h==-1}t.l=function(E){return E=T(this,E),b(E)?-1:R(E)?0:1};function D(E){for(var y=E.g.length,w=[],x=0;x<y;x++)w[x]=~E.g[x];return new o(w,~E.h).add(v)}t.abs=function(){return b(this)?D(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],x=0,A=0;A<=y;A++){var P=x+(this.i(A)&65535)+(E.i(A)&65535),I=(P>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);x=I>>>16,P&=65535,I&=65535,w[A]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(E,y){return E.add(D(y))}t.j=function(E){if(R(this)||R(E))return g;if(b(this))return b(E)?D(this).j(D(E)):D(D(this).j(E));if(b(E))return D(this.j(D(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],x=0;x<2*y;x++)w[x]=0;for(x=0;x<this.g.length;x++)for(var A=0;A<E.g.length;A++){var P=this.i(x)>>>16,I=this.i(x)&65535,ht=E.i(A)>>>16,un=E.i(A)&65535;w[2*x+2*A]+=I*un,_(w,2*x+2*A),w[2*x+2*A+1]+=P*un,_(w,2*x+2*A+1),w[2*x+2*A+1]+=I*ht,_(w,2*x+2*A+1),w[2*x+2*A+2]+=P*ht,_(w,2*x+2*A+2)}for(x=0;x<y;x++)w[x]=w[2*x+1]<<16|w[2*x];for(x=y;x<2*y;x++)w[x]=0;return new o(w,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function k(E,y){this.g=E,this.h=y}function V(E,y){if(R(y))throw Error("division by zero");if(R(E))return new k(g,g);if(b(E))return y=V(D(E),y),new k(D(y.g),D(y.h));if(b(y))return y=V(E,D(y)),new k(D(y.g),y.h);if(30<E.g.length){if(b(E)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var w=v,x=y;0>=x.l(E);)w=U(w),x=U(x);var A=j(w,1),P=j(x,1);for(x=j(x,2),w=j(w,2);!R(x);){var I=P.add(x);0>=I.l(E)&&(A=A.add(w),P=I),x=j(x,1),w=j(w,1)}return y=T(E,A.j(y)),new k(A,y)}for(A=g;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),x=Math.ceil(Math.log(w)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=d(w),I=P.j(y);b(I)||0<I.l(E);)w-=x,P=d(w),I=P.j(y);R(P)&&(P=v),A=A.add(P),E=T(E,I)}return new k(A,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],x=0;x<y;x++)w[x]=this.i(x)&E.i(x);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],x=0;x<y;x++)w[x]=this.i(x)|E.i(x);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],x=0;x<y;x++)w[x]=this.i(x)^E.i(x);return new o(w,this.h^E.h)};function U(E){for(var y=E.g.length+1,w=[],x=0;x<y;x++)w[x]=E.i(x)<<1|E.i(x-1)>>>31;return new o(w,E.h)}function j(E,y){var w=y>>5;y%=32;for(var x=E.g.length-w,A=[],P=0;P<x;P++)A[P]=0<y?E.i(P+w)>>>y|E.i(P+w+1)<<32-y:E.i(P+w);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,H_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Hr=o}).apply(typeof Ag<"u"?Ag:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q_,Bs,K_,Za,Md,G_,Q_,X_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in h))break e;h=h[C]}a=a[a.length-1],p=h[a],c=c(p),c!=p&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,p=!1,C={next:function(){if(!p&&h<a.length){var N=h++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,h){return a.call.apply(a.bind,arguments)}function g(a,c,h){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function v(a,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,v.apply(null,arguments)}function S(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function R(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(p,C,N){for(var F=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)F[ve-2]=arguments[ve];return c.prototype[C].apply(p,F)}}function b(a){const c=a.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=a[p];return h}return[]}function D(a,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const C=a.length||0,N=p.length||0;a.length=C+N;for(let F=0;F<N;F++)a[C+F]=p[F]}else a.push(p)}}class T{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var U=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function j(a,c,h){for(const p in a)c.call(h,a[p],p,a)}function E(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function y(a){const c={};for(const h in a)c[h]=a[h];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,c){let h,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(h in p)a[h]=p[h];for(let N=0;N<w.length;N++)h=w[N],Object.prototype.hasOwnProperty.call(p,h)&&(a[h]=p[h])}}function A(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ht{constructor(){this.h=this.g=null}add(c,h){const p=un.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var un=new T(()=>new Gn,a=>a.reset());class Gn{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,z=!1,G=new ht,ne=()=>{const a=l.Promise.resolve(void 0);tt=()=>{a.then(we)}};var we=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){P(h)}var c=un;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function At(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{V(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&At.aa.h.call(this)}}R(At,Se);var Kt={2:"touch",3:"pen",4:"mouse"};At.prototype.h=function(){At.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),Au=0;function Ru(a,c,h,p,C){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=C,this.key=++Au,this.da=this.fa=!1}function Pr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function di(a){this.src=a,this.g={},this.h=0}di.prototype.add=function(a,c,h,p,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var F=ms(a,c,p,C);return-1<F?(c=a[F],h||(c.fa=!1)):(c=new Ru(c,this.src,N,!!p,C),c.fa=h,a.push(c)),c};function ps(a,c){var h=c.type;if(h in a.g){var p=a.g[h],C=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=C)&&Array.prototype.splice.call(p,C,1),N&&(Pr(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function ms(a,c,h,p){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==c&&N.capture==!!h&&N.ha==p)return C}return-1}var B="closure_lm_"+(1e6*Math.random()|0),Q={};function Y(a,c,h,p,C){if(p&&p.once)return X(a,c,h,p,C);if(Array.isArray(c)){for(var N=0;N<c.length;N++)Y(a,c[N],h,p,C);return null}return h=cn(h),a&&a[Lt]?a.K(c,h,d(p)?!!p.capture:!!p,C):Ae(a,c,h,!1,p,C)}function Ae(a,c,h,p,C,N){if(!c)throw Error("Invalid event type");var F=d(C)?!!C.capture:!!C,ve=wt(a);if(ve||(a[B]=ve=new di(a)),h=ve.add(c,h,p,F,N),h.proxy)return h;if(p=ge(),h.proxy=p,p.src=a,p.listener=h,a.addEventListener)qt||(C=F),C===void 0&&(C=!1),a.addEventListener(c.toString(),p,C);else if(a.attachEvent)a.attachEvent(ce(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ge(){function a(h){return c.call(a.src,a.listener,h)}const c=oe;return a}function X(a,c,h,p,C){if(Array.isArray(c)){for(var N=0;N<c.length;N++)X(a,c[N],h,p,C);return null}return h=cn(h),a&&a[Lt]?a.L(c,h,d(p)?!!p.capture:!!p,C):Ae(a,c,h,!0,p,C)}function re(a,c,h,p,C){if(Array.isArray(c))for(var N=0;N<c.length;N++)re(a,c[N],h,p,C);else p=d(p)?!!p.capture:!!p,h=cn(h),a&&a[Lt]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],h=ms(N,h,p,C),-1<h&&(Pr(N[h]),Array.prototype.splice.call(N,h,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=wt(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ms(c,h,p,C)),(h=-1<a?c[a]:null)&&K(h))}function K(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Lt])ps(c.i,a);else{var h=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(h,p,a.capture):c.detachEvent?c.detachEvent(ce(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=wt(c))?(ps(h,a),h.h==0&&(h.src=null,c[B]=null)):Pr(a)}}}function ce(a){return a in Q?Q[a]:Q[a]="on"+a}function oe(a,c){if(a.da)a=!0;else{c=new At(c,this);var h=a.listener,p=a.ha||a.src;a.fa&&K(a),a=h.call(p,c)}return a}function wt(a){return a=a[B],a instanceof di?a:null}var Gt="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(a){return typeof a=="function"?a:(a[Gt]||(a[Gt]=function(c){return a.handleEvent(c)}),a[Gt])}function Le(){fe.call(this),this.i=new di(this),this.M=this,this.F=null}R(Le,fe),Le.prototype[Lt]=!0,Le.prototype.removeEventListener=function(a,c,h,p){re(this,a,c,h,p)};function ft(a,c){var h,p=a.F;if(p)for(h=[];p;p=p.F)h.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var C=c;c=new Se(p,a),x(c,C)}if(C=!0,h)for(var N=h.length-1;0<=N;N--){var F=c.g=h[N];C=Jo(F,p,!0,c)&&C}if(F=c.g=a,C=Jo(F,p,!0,c)&&C,C=Jo(F,p,!1,c)&&C,h)for(N=0;N<h.length;N++)F=c.g=h[N],C=Jo(F,p,!1,c)&&C}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],p=0;p<h.length;p++)Pr(h[p]);delete a.g[c],a.h--}}this.F=null},Le.prototype.K=function(a,c,h,p){return this.i.add(String(a),c,!1,h,p)},Le.prototype.L=function(a,c,h,p){return this.i.add(String(a),c,!0,h,p)};function Jo(a,c,h,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,N=0;N<c.length;++N){var F=c[N];if(F&&!F.da&&F.capture==h){var ve=F.listener,Ke=F.ha||F.src;F.fa&&ps(a.i,F),C=ve.call(Ke,p)!==!1&&C}}return C&&!p.defaultPrevented}function Uf(a,c,h){if(typeof a=="function")h&&(a=v(a,h));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function zf(a){a.g=Uf(()=>{a.g=null,a.i&&(a.i=!1,zf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class c1 extends fe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:zf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){fe.call(this),this.h=a,this.g={}}R(gs,fe);var Bf=[];function $f(a){j(a.g,function(c,h){this.g.hasOwnProperty(h)&&K(c)},a),a.g={}}gs.prototype.N=function(){gs.aa.N.call(this),$f(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cu=l.JSON.stringify,d1=l.JSON.parse,h1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pu(){}Pu.prototype.h=null;function Wf(a){return a.h||(a.h=a.i())}function Hf(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bu(){Se.call(this,"d")}R(bu,Se);function Nu(){Se.call(this,"c")}R(Nu,Se);var br={},qf=null;function Zo(){return qf=qf||new Le}br.La="serverreachability";function Kf(a){Se.call(this,br.La,a)}R(Kf,Se);function vs(a){const c=Zo();ft(c,new Kf(c))}br.STAT_EVENT="statevent";function Gf(a,c){Se.call(this,br.STAT_EVENT,a),this.stat=c}R(Gf,Se);function pt(a){const c=Zo();ft(c,new Gf(c,a))}br.Ma="timingevent";function Qf(a,c){Se.call(this,br.Ma,a),this.size=c}R(Qf,Se);function _s(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function f1(a,c,h,p,C,N){a.info(function(){if(a.g)if(N)for(var F="",ve=N.split("&"),Ke=0;Ke<ve.length;Ke++){var de=ve[Ke].split("=");if(1<de.length){var nt=de[0];de=de[1];var rt=nt.split("_");F=2<=rt.length&&rt[1]=="type"?F+(nt+"="+de+"&"):F+(nt+"=redacted&")}}else F=null;else F=N;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+h+`
`+F})}function p1(a,c,h,p,C,N,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+h+`
`+N+" "+F})}function hi(a,c,h,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+g1(a,h)+(p?" "+p:"")})}function m1(a,c){a.info(function(){return"TIMEOUT: "+c})}ws.prototype.info=function(){};function g1(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var p=h[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return Cu(h)}catch{return c}}var ea={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Du;function ta(){}R(ta,Pu),ta.prototype.g=function(){return new XMLHttpRequest},ta.prototype.i=function(){return{}},Du=new ta;function Qn(a,c,h,p){this.j=a,this.i=c,this.l=h,this.R=p||1,this.U=new gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yf}function Yf(){this.i=null,this.g="",this.h=!1}var Jf={},Vu={};function Ou(a,c,h){a.L=1,a.v=sa(Sn(c)),a.m=h,a.P=!0,Zf(a,null)}function Zf(a,c){a.F=Date.now(),na(a),a.A=Sn(a.v);var h=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),fp(h.i,"t",p),a.C=0,h=a.j.J,a.h=new Yf,a.g=bp(a.j,h?c:null,!a.m),0<a.O&&(a.M=new c1(v(a.Y,a,a.g),a.O)),c=a.U,h=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Bf[0]=C.toString()),C=Bf);for(var N=0;N<C.length;N++){var F=Y(h,C[N],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),vs(),f1(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const c=this.M;c&&An(a)==3?c.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=An(this.g);var c=this.g.Ba();const mi=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||wp(this.g)))){this.J||rt!=4||c==7||(c==8||0>=mi?vs(3):vs(2)),Mu(this);var h=this.g.Z();this.X=h;t:if(ep(this)){var p=wp(this.g);a="";var C=p.length,N=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),Es(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==C-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,p1(this.i,this.u,this.A,this.l,this.R,rt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ke=this.g;if((ve=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ve)){var de=ve;break t}}de=null}if(h=de)hi(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lu(this,h);else{this.o=!1,this.s=3,pt(12),Nr(this),Es(this);break e}}if(this.P){h=!0;let Qt;for(;!this.J&&this.C<F.length;)if(Qt=y1(this,F),Qt==Vu){rt==4&&(this.s=4,pt(14),h=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Jf){this.s=4,pt(15),hi(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else hi(this.i,this.l,Qt,null),Lu(this,Qt);if(ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||F.length!=0||this.h.h||(this.s=1,pt(16),h=!1),this.o=this.o&&h,!h)hi(this.i,this.l,F,"[Invalid Chunked Response]"),Nr(this),Es(this);else if(0<F.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),$u(nt),nt.M=!0,pt(11))}}else hi(this.i,this.l,F,null),Lu(this,F);rt==4&&Nr(this),this.o&&!this.J&&(rt==4?Ap(this.j,this):(this.o=!1,na(this)))}else V1(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Nr(this),Es(this)}}}catch{}finally{}};function ep(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function y1(a,c){var h=a.C,p=c.indexOf(`
`,h);return p==-1?Vu:(h=Number(c.substring(h,p)),isNaN(h)?Jf:(p+=1,p+h>c.length?Vu:(c=c.slice(p,p+h),a.C=p+h,c)))}Qn.prototype.cancel=function(){this.J=!0,Nr(this)};function na(a){a.S=Date.now()+a.I,tp(a,a.I)}function tp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_s(v(a.ba,a),c)}function Mu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(m1(this.i,this.A),this.L!=2&&(vs(),pt(17)),Nr(this),this.s=2,Es(this)):tp(this,this.S-a)};function Es(a){a.j.G==0||a.J||Ap(a.j,a)}function Nr(a){Mu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,$f(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Lu(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||ju(h.h,a))){if(!a.K&&ju(h.h,a)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)da(h),ua(h);else break e;Bu(h),pt(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=_s(v(h.Za,h),6e3));if(1>=ip(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Vr(h,11)}else if((a.K||h.g==a)&&da(h),!_(c))for(C=h.Da.g.parse(c),c=0;c<C.length;c++){let de=C[c];if(h.T=de[0],de=de[1],h.G==2)if(de[0]=="c"){h.K=de[1],h.ia=de[2];const nt=de[3];nt!=null&&(h.la=nt,h.j.info("VER="+h.la));const rt=de[4];rt!=null&&(h.Aa=rt,h.j.info("SVER="+h.Aa));const mi=de[5];mi!=null&&typeof mi=="number"&&0<mi&&(p=1.5*mi,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Qt=a.g;if(Qt){const fa=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fa){var N=p.h;N.g||fa.indexOf("spdy")==-1&&fa.indexOf("quic")==-1&&fa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Fu(N,N.h),N.h=null))}if(p.D){const Wu=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wu&&(p.ya=Wu,Ee(p.I,p.D,Wu))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var F=a;if(p.qa=Pp(p,p.J?p.ia:null,p.W),F.K){sp(p.h,F);var ve=F,Ke=p.L;Ke&&(ve.I=Ke),ve.B&&(Mu(ve),na(ve)),p.g=F}else kp(p);0<h.i.length&&ca(h)}else de[0]!="stop"&&de[0]!="close"||Vr(h,7);else h.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Vr(h,7):zu(h):de[0]!="noop"&&h.l&&h.l.ta(de),h.v=0)}}vs(4)}catch{}}var v1=class{constructor(a,c){this.g=a,this.map=c}};function np(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ip(a){return a.h?1:a.g?a.g.size:0}function ju(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Fu(a,c){a.g?a.g.add(c):a.h=c}function sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}np.prototype.cancel=function(){if(this.i=op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function op(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return b(a.i)}function _1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,p=0;p<h;p++)c.push(a[p]);return c}c=[],h=0;for(p in a)c[h++]=a[p];return c}function w1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const p in a)c[h++]=p;return c}}}function ap(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=w1(a),p=_1(a),C=p.length,N=0;N<C;N++)c.call(void 0,p[N],h&&h[N],a)}var lp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E1(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var p=a[h].indexOf("="),C=null;if(0<=p){var N=a[h].substring(0,p);C=a[h].substring(p+1)}else N=a[h];c(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Dr){this.h=a.h,ra(this,a.j),this.o=a.o,this.g=a.g,ia(this,a.s),this.l=a.l;var c=a.i,h=new xs;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),up(this,h),this.m=a.m}else a&&(c=String(a).match(lp))?(this.h=!1,ra(this,c[1]||"",!0),this.o=Ts(c[2]||""),this.g=Ts(c[3]||"",!0),ia(this,c[4]),this.l=Ts(c[5]||"",!0),up(this,c[6]||"",!0),this.m=Ts(c[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}Dr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Is(c,cp,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Is(c,cp,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Is(h,h.charAt(0)=="/"?x1:I1,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Is(h,S1)),a.join("")};function Sn(a){return new Dr(a)}function ra(a,c,h){a.j=h?Ts(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ia(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function up(a,c,h){c instanceof xs?(a.i=c,A1(a.i,a.h)):(h||(c=Is(c,k1)),a.i=new xs(c,a.h))}function Ee(a,c,h){a.i.set(c,h)}function sa(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ts(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,T1),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function T1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cp=/[#\/\?@]/g,I1=/[#\?:]/g,x1=/[#\?]/g,k1=/[#\?@]/g,S1=/#/g;function xs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&E1(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=xs.prototype,t.add=function(a,c){Xn(this),this.i=null,a=fi(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function dp(a,c){Xn(a),c=fi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function hp(a,c){return Xn(a),c=fi(a,c),a.g.has(c)}t.forEach=function(a,c){Xn(this),this.g.forEach(function(h,p){h.forEach(function(C){a.call(c,C,p,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const C=a[p];for(let N=0;N<C.length;N++)h.push(c[p])}return h},t.V=function(a){Xn(this);let c=[];if(typeof a=="string")hp(this,a)&&(c=c.concat(this.g.get(fi(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return Xn(this),this.i=null,a=fi(this,a),hp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function fp(a,c,h){dp(a,c),0<h.length&&(a.i=null,a.g.set(fi(a,c),b(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const N=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var C=N;F[p]!==""&&(C+="="+encodeURIComponent(String(F[p]))),a.push(C)}}return this.i=a.join("&")};function fi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function A1(a,c){c&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(h,p){var C=p.toLowerCase();p!=C&&(dp(this,p),fp(this,C,h))},a)),a.j=c}function R1(a,c){const h=new ws;if(l.Image){const p=new Image;p.onload=S(Yn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=S(Yn,h,"TestLoadImage: error",!1,c,p),p.onabort=S(Yn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(Yn,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function C1(a,c){const h=new ws,p=new AbortController,C=setTimeout(()=>{p.abort(),Yn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(C),N.ok?Yn(h,"TestPingServer: ok",!0,c):Yn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Yn(h,"TestPingServer: error",!1,c)})}function Yn(a,c,h,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(h)}catch{}}function P1(){this.g=new h1}function b1(a,c,h){const p=h||"";try{ap(a,function(C,N){let F=C;d(C)&&(F=Cu(C)),c.push(p+N+"="+encodeURIComponent(F))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function oa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(oa,Pu),oa.prototype.g=function(){return new aa(this.l,this.j)},oa.prototype.i=function(a){return function(){return a}}({});function aa(a,c){Le.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(aa,Le),t=aa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function pp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ks(this):Ss(this),this.readyState==3&&pp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Qa=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ss(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mp(a){let c="";return j(a,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Uu(a,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=mp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):Ee(a,c,h))}function Ne(a){Le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ne,Le);var N1=/^https?$/i,D1=["POST","PUT"];t=Ne.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Du.g(),this.v=this.o?Wf(this.o):Wf(Du),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){gp(this,N);return}if(a=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)h.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())h.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(D1,c,void 0))||p||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of h)this.g.setRequestHeader(N,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_p(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){gp(this,N)}};function gp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,yp(a),la(a)}function yp(a){a.A||(a.A=!0,ft(a,"complete"),ft(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ft(this,"complete"),ft(this,"abort"),la(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),la(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vp(this):this.bb())},t.bb=function(){vp(this)};function vp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)Uf(a.Ea,0,a);else if(ft(a,"readystatechange"),An(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=F===0){var C=String(a.D).match(lp)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!N1.test(C?C.toLowerCase():"")}h=p}if(h)ft(a,"complete"),ft(a,"success");else{a.m=6;try{var N=2<An(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",yp(a)}}finally{la(a)}}}}function la(a,c){if(a.g){_p(a);const h=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ft(a,"ready");try{h.onreadystatechange=p}catch{}}}function _p(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),d1(c)}};function wp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function V1(a){const c={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var h=A(a[p]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=c[C]||[];c[C]=N,N.push(h)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function Ep(a){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,a),this.cb=As("retryDelaySeedMs",1e4,a),this.Wa=As("forwardChannelMaxRetries",2,a),this.wa=As("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new np(a&&a.concurrentRequestLimit),this.Da=new P1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ep.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,p){pt(0),this.W=a,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Pp(this,null,this.W),ca(this)};function zu(a){if(Tp(a),a.G==3){var c=a.U++,h=Sn(a.I);if(Ee(h,"SID",a.K),Ee(h,"RID",c),Ee(h,"TYPE","terminate"),Rs(a,h),c=new Qn(a,a.j,c),c.L=2,c.v=sa(Sn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=bp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),na(c)}Cp(a)}function ua(a){a.g&&($u(a),a.g.cancel(),a.g=null)}function Tp(a){ua(a),a.u&&(l.clearTimeout(a.u),a.u=null),da(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ca(a){if(!rp(a.h)&&!a.s){a.s=!0;var c=a.Ga;tt||ne(),z||(tt(),z=!0),G.add(c,a),a.B=0}}function O1(a,c){return ip(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_s(v(a.Ga,a,c),Rp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Qn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),x(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=xp(this,C,c),h=Sn(this.I),Ee(h,"RID",a),Ee(h,"CVER",22),this.D&&Ee(h,"X-HTTP-Session-Id",this.D),Rs(this,h),N&&(this.O?c="headers="+encodeURIComponent(String(mp(N)))+"&"+c:this.m&&Uu(h,this.m,N)),Fu(this.h,C),this.Ua&&Ee(h,"TYPE","init"),this.P?(Ee(h,"$req",c),Ee(h,"SID","null"),C.T=!0,Ou(C,h,null)):Ou(C,h,c),this.G=2}}else this.G==3&&(a?Ip(this,a):this.i.length==0||rp(this.h)||Ip(this))};function Ip(a,c){var h;c?h=c.l:h=a.U++;const p=Sn(a.I);Ee(p,"SID",a.K),Ee(p,"RID",h),Ee(p,"AID",a.T),Rs(a,p),a.m&&a.o&&Uu(p,a.m,a.o),h=new Qn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=xp(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fu(a.h,h),Ou(h,p,c)}function Rs(a,c){a.H&&j(a.H,function(h,p){Ee(c,p,h)}),a.l&&ap({},function(h,p){Ee(c,p,h)})}function xp(a,c,h){h=Math.min(a.i.length,h);var p=a.l?v(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const F=["count="+h];N==-1?0<h?(N=C[0].g,F.push("ofs="+N)):N=0:F.push("ofs="+N);let ve=!0;for(let Ke=0;Ke<h;Ke++){let de=C[Ke].g;const nt=C[Ke].map;if(de-=N,0>de)N=Math.max(0,C[Ke].g-100),ve=!1;else try{b1(nt,F,"req"+de+"_")}catch{p&&p(nt)}}if(ve){p=F.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,p}function kp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;tt||ne(),z||(tt(),z=!0),G.add(c,a),a.v=0}}function Bu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_s(v(a.Fa,a),Rp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Sp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_s(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),ua(this),Sp(this))};function $u(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Sp(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Sn(a.qa);Ee(c,"RID","rpc"),Ee(c,"SID",a.K),Ee(c,"AID",a.T),Ee(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(c,"TO",a.ja),Ee(c,"TYPE","xmlhttp"),Rs(a,c),a.m&&a.o&&Uu(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=sa(Sn(c)),h.m=null,h.P=!0,Zf(h,a)}t.Za=function(){this.C!=null&&(this.C=null,ua(this),Bu(this),pt(19))};function da(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ap(a,c){var h=null;if(a.g==c){da(a),$u(a),a.g=null;var p=2}else if(ju(a.h,c))h=c.D,sp(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;p=Zo(),ft(p,new Qf(p,h)),ca(a)}else kp(a);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&O1(a,c)||p==2&&Bu(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),C){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function Rp(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Vr(a,c){if(a.j.info("Error code "+c),c==2){var h=v(a.fb,a),p=a.Xa;const C=!p;p=new Dr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ra(p,"https"),sa(p),C?R1(p.toString(),h):C1(p.toString(),h)}else pt(2);a.G=0,a.l&&a.l.sa(c),Cp(a),Tp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Cp(a){if(a.G=0,a.ka=[],a.l){const c=op(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function Pp(a,c,h){var p=h instanceof Dr?Sn(h):new Dr(h);if(p.g!="")c&&(p.g=c+"."+p.g),ia(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var N=new Dr(null);p&&ra(N,p),c&&(N.g=c),C&&ia(N,C),h&&(N.l=h),p=N}return h=a.D,c=a.ya,h&&c&&Ee(p,h,c),Ee(p,"VER",a.la),Rs(a,p),p}function bp(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ne(new oa({eb:h})):new Ne(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Np(){}t=Np.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ha(){}ha.prototype.g=function(a,c){return new Rt(a,c)};function Rt(a,c){Le.call(this),this.g=new Ep(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new pi(this)}R(Rt,Le),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){zu(this.g)},Rt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Cu(a),a=h);c.i.push(new v1(c.Ya++,a)),c.G==3&&ca(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,zu(this.g),delete this.g,Rt.aa.N.call(this)};function Dp(a){bu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Dp,bu);function Vp(){Nu.call(this),this.status=1}R(Vp,Nu);function pi(a){this.g=a}R(pi,Np),pi.prototype.ua=function(){ft(this.g,"a")},pi.prototype.ta=function(a){ft(this.g,new Dp(a))},pi.prototype.sa=function(a){ft(this.g,new Vp)},pi.prototype.ra=function(){ft(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,X_=function(){return new ha},Q_=function(){return Zo()},G_=br,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ea.NO_ERROR=0,ea.TIMEOUT=8,ea.HTTP_ERROR=6,Za=ea,Xf.COMPLETE="complete",K_=Xf,Hf.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Le.prototype.listen=Le.prototype.K,Bs=Hf,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,q_=Ne}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});const Rg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new cu("@firebase/firestore");function Ls(){return ni.logLevel}function W(t,...e){if(ni.logLevel<=ae.DEBUG){const n=e.map(cf);ni.debug(`Firestore (${cs}): ${t}`,...n)}}function Hn(t,...e){if(ni.logLevel<=ae.ERROR){const n=e.map(cf);ni.error(`Firestore (${cs}): ${t}`,...n)}}function Ji(t,...e){if(ni.logLevel<=ae.WARN){const n=e.map(cf);ni.warn(`Firestore (${cs}): ${t}`,...n)}}function cf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function me(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class xR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kR{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Y_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new at(e)}}class SR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new SR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new RR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new $e(0,0))}static max(){return new ee(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Ro{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const bR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Ro{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return bR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ke.fromString(e))}static fromName(e){return new q(ke.fromString(e).popFirst(5))}static empty(){return new q(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ke(e.slice()))}}function NR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new xr(i,q.empty(),e)}function DR(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(ee.min(),q.empty(),-1)}static max(){return new xr(ee.max(),q.empty(),-1)}}function VR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==OR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function LR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ko(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}df.oe=-1;function mu(t){return t==null}function jl(t){return t===0&&1/t==-1/0}function jR(t){return typeof t=="number"&&Number.isInteger(t)&&!jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Z_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Da(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Da(this.root,e,this.comparator,!1)}getReverseIterator(){return new Da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Da(this.root,e,this.comparator,!0)}}class Da{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pg(this.data.getIterator())}getIteratorFrom(e){return new Pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new nn([])}unionWith(e){let n=new Je(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ew("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const FR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(me(!!t),typeof t=="string"){let e=0;const n=FR.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ff(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?ff(e):e}function Co(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:BR(t)?9007199254740991:zR(t)?10:11:Z()}function xn(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ri(i.bytesValue).isEqual(ri(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),l=Oe(s.doubleValue);return o===l?jl(o)===jl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Cg(o)!==Cg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!xn(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function bo(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return bg(t.timestampValue,e.timestampValue);case 4:return bg(Co(t),Co(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ri(s),u=ri(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=he(l[d],u[d]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(Oe(s.latitude),Oe(o.latitude));return l!==0?l:he(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ng(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const g=s.fields||{},v=o.fields||{},S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,R=(u=v.value)===null||u===void 0?void 0:u.arrayValue,b=he(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return b!==0?b:Ng(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Va.mapValue&&o===Va.mapValue)return 0;if(s===Va.mapValue)return 1;if(o===Va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=he(u[g],f[g]);if(v!==0)return v;const S=es(l[u[g]],d[f[g]]);if(S!==0)return S}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=kr(t),r=kr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Ng(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=es(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function ts(t){return Ld(t)}function Ld(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ld(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ld(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function jd(t){return!!t&&"integerValue"in t}function pf(t){return!!t&&"arrayValue"in t}function Dg(t){return!!t&&"nullValue"in t}function Vg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function el(t){return!!t&&"mapValue"in t}function zR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!el(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());el(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];el(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(ro(this.value))}}function tw(t){const e=[];return ds(t.fields,(n,r)=>{const i=new Xe([n]);if(el(r)){const s=tw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ee.min(),ee.min(),ee.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,ee.min(),ee.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ee.min(),ee.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.position=e,this.inclusive=n}}function Og(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function $R(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{}class ze extends nw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HR(e,n,r):n==="array-contains"?new GR(e,r):n==="in"?new QR(e,r):n==="not-in"?new XR(e,r):n==="array-contains-any"?new YR(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qR(e,r):new KR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends nw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new kn(e,n)}matches(e){return rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rw(t){return t.op==="and"}function iw(t){return WR(t)&&rw(t)}function WR(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function Fd(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(iw(t))return t.filters.map(e=>Fd(e)).join(",");{const e=t.filters.map(n=>Fd(n)).join(",");return`${t.op}(${e})`}}function sw(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(t,e):t instanceof kn?function(r,i){return i instanceof kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&sw(o,i.filters[l]),!0):!1}(t,e):void Z()}function ow(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map(ow).join(" ,")+"}"}(t):"Filter"}class HR extends ze{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class qR extends ze{constructor(e,n){super(e,"in",n),this.keys=aw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KR extends ze{constructor(e,n){super(e,"not-in",n),this.keys=aw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class GR extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&bo(n.arrayValue,this.value)}}class QR extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bo(this.value.arrayValue,n)}}class XR extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bo(this.value.arrayValue,n)}}class YR extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Lg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JR(t,e,n,r,i,s,o)}function mf(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.ue=n}return e.ue}function gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$R(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mg(t.startAt,e.startAt)&&Mg(t.endAt,e.endAt)}function Ud(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZR(t,e,n,r,i,s,o,l){return new gu(t,e,n,r,i,s,o,l)}function yf(t){return new gu(t)}function jg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eC(t){return t.collectionGroup!==null}function io(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ul(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Ul(Xe.keyField(),r))}return e.ce}function wn(t){const e=te(t);return e.le||(e.le=tC(e,io(t))),e.le}function tC(t,e){if(t.limitType==="F")return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ul(i.field,s)});const n=t.endAt?new Fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fl(t.startAt.position,t.startAt.inclusive):null;return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zd(t,e,n){return new gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yu(t,e){return gf(wn(t),wn(e))&&t.limitType===e.limitType}function lw(t){return`${mf(wn(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ow(i)).join(", ")}]`),mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Og(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,io(r),i)||r.endAt&&!function(o,l,u){const d=Og(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,io(r),i))}(t,e)}function nC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uw(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=rC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?es(u,d):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Z_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new be(q.comparator);function qn(){return iC}const cw=new be(q.comparator);function $s(...t){let e=cw;for(const n of t)e=e.insert(n.key,n);return e}function dw(t){let e=cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return so()}function hw(){return so()}function so(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const sC=new be(q.comparator),oC=new Je(q.comparator);function se(...t){let e=oC;for(const n of t)e=e.add(n);return e}const aC=new Je(he);function lC(){return aC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jl(e)?"-0":e}}function fw(t){return{integerValue:""+t}}function uC(t,e){return jR(e)?fw(e):vf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this._=void 0}}function cC(t,e,n){return t instanceof zl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hf(s)&&(s=ff(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof No?mw(t,e):t instanceof Do?gw(t,e):function(i,s){const o=pw(i,s),l=Fg(o)+Fg(i.Pe);return jd(o)&&jd(i.Pe)?fw(l):vf(i.serializer,l)}(t,e)}function dC(t,e,n){return t instanceof No?mw(t,e):t instanceof Do?gw(t,e):n}function pw(t,e){return t instanceof Bl?function(r){return jd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zl extends _u{}class No extends _u{constructor(e){super(),this.elements=e}}function mw(t,e){const n=yw(e);for(const r of t.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends _u{constructor(e){super(),this.elements=e}}function gw(t,e){let n=yw(e);for(const r of t.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class Bl extends _u{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fg(t){return Oe(t.integerValue||t.doubleValue)}function yw(t){return pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof No&&i instanceof No||r instanceof Do&&i instanceof Do?Zi(r.elements,i.elements,xn):r instanceof Bl&&i instanceof Bl?xn(r.Pe,i.Pe):r instanceof zl&&i instanceof zl}(t.transform,e.transform)}class fC{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wu{}function vw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _f(t.key,En.none()):new Go(t.key,t.data,En.none());{const n=t.data,r=Ut.empty();let i=new Je(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new nn(i.toArray()),En.none())}}function pC(t,e,n){t instanceof Go?function(i,s,o){const l=i.value.clone(),u=zg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!tl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=zg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(_w(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,r){return t instanceof Go?function(s,o,l,u){if(!tl(s.precondition,o))return l;const d=s.value.clone(),f=Bg(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,l,u){if(!tl(s.precondition,o))return l;const d=Bg(s.fieldTransforms,u,o),f=o.data;return f.setAll(_w(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return tl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pw(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function Ug(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>hC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Go extends wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zg(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,dC(o,l,n[i]))}return r}function Bg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cC(s,o,e))}return r}class _f extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gC extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=vw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>Ug(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>Ug(n,r))}}class wf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return sC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,le;function wC(t){switch(t){default:return Z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function ww(t){if(t===void 0)return Hn("GRPC error has no .code"),M.UNKNOWN;switch(t){case je.OK:return M.OK;case je.CANCELLED:return M.CANCELLED;case je.UNKNOWN:return M.UNKNOWN;case je.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case je.INTERNAL:return M.INTERNAL;case je.UNAVAILABLE:return M.UNAVAILABLE;case je.UNAUTHENTICATED:return M.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case je.NOT_FOUND:return M.NOT_FOUND;case je.ALREADY_EXISTS:return M.ALREADY_EXISTS;case je.PERMISSION_DENIED:return M.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case je.ABORTED:return M.ABORTED;case je.OUT_OF_RANGE:return M.OUT_OF_RANGE;case je.UNIMPLEMENTED:return M.UNIMPLEMENTED;case je.DATA_LOSS:return M.DATA_LOSS;default:return Z()}}(le=je||(je={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new Hr([4294967295,4294967295],0);function $g(t){const e=EC().encode(t),n=new H_;return n.update(e),new Uint8Array(n.digest())}function Wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class Ef{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Hr.fromNumber(r)));return i.compare(TC)===1&&(i=new Hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$g(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ef(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=$g(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eu(ee.min(),i,new be(he),qn(),se())}}class Qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qo(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Ew{constructor(e,n){this.targetId=e,this.me=n}}class Tw{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Hg{constructor(){this.fe=0,this.ge=Kg(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Qo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Kg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class IC{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=qg(),this.Qe=new be(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ud(s))if(r===0){const o=new q(s.path);this.Ue(n,o,ut.newNoDocument(o,ee.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ri(r).toUint8Array()}catch(u){if(u instanceof ew)return Ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ef(o,i,s)}catch(u){return Ji(u instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ud(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Eu(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=qg(),this.Qe=new be(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Hg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Hg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qg(){return new be(q.comparator)}function Kg(){return new be(q.comparator)}const xC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SC=(()=>({and:"AND",or:"OR"}))();class AC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bd(t,e){return t.useProto3Json||mu(e)?e:{value:e}}function $l(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RC(t,e){return $l(t,e.toTimestamp())}function Tn(t){return me(!!t),ee.fromTimestamp(function(n){const r=kr(n);return new $e(r.seconds,r.nanos)}(t))}function Tf(t,e){return $d(t,e).canonicalString()}function $d(t,e){const n=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xw(t){const e=ke.fromString(t);return me(Cw(e)),e}function Wd(t,e){return Tf(t.databaseId,e.path)}function Rc(t,e){const n=xw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Sw(n))}function kw(t,e){return Tf(t.databaseId,e)}function CC(t){const e=xw(t);return e.length===4?ke.emptyPath():Sw(e)}function Hd(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sw(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gg(t,e,n){return{name:Wd(t,e),fields:n.value.mapValue.fields}}function PC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(me(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?M.UNKNOWN:ww(d.code);return new H(f,d.message||"")}(o);n=new Tw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rc(t,r.document.name),s=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):ee.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new nl(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rc(t,r.document),s=r.readTime?Tn(r.readTime):ee.min(),o=ut.newNoDocument(i,s),l=r.removedTargetIds||[];n=new nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rc(t,r.document),s=r.removedTargetIds||[];n=new nl([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _C(i,s),l=r.targetId;n=new Ew(l,o)}}return n}function bC(t,e){let n;if(e instanceof Go)n={update:Gg(t,e.key,e.value)};else if(e instanceof _f)n={delete:Wd(t,e.key)};else if(e instanceof ui)n={update:Gg(t,e.key,e.data),updateMask:UC(e.fieldMask)};else{if(!(e instanceof gC))return Z();n={verify:Wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:RC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function NC(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Tn(i.updateTime):Tn(s);return o.isEqual(ee.min())&&(o=Tn(s)),new fC(o,i.transformResults||[])}(n,e))):[]}function DC(t,e){return{documents:[kw(t,e.path)]}}function VC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=kw(t,i);const s=function(d){if(d.length!==0)return Rw(kn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:wi(v.field),direction:LC(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Bd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function OC(t){let e=CC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const v=Aw(g);return v instanceof kn&&iw(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(v=>function(R){return new Ul(Ei(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(g){let v;return v=typeof g=="object"?g.value:g,mu(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(g){const v=!!g.before,S=g.values||[];return new Fl(S,v)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const v=!g.before,S=g.values||[];return new Fl(S,v)}(n.endAt)),ZR(e,i,o,s,l,"F",u,d)}function MC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Aw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ei(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ei(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ei(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ei(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(r=>Aw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function LC(t){return xC[t]}function jC(t){return kC[t]}function FC(t){return SC[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return Xe.fromServerFormat(t.fieldPath)}function Rw(t){return t instanceof ze?function(n){if(n.op==="=="){if(Vg(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if(Dg(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vg(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if(Dg(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:jC(n.op),value:n.value}}}(t):t instanceof kn?function(n){const r=n.getFilters().map(i=>Rw(i));return r.length===1?r[0]:{compositeFilter:{op:FC(n.op),filters:r}}}(t):Z()}function UC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.ct=e}}function BC(t){const e=OC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.un=new WC}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(xr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class WC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ns(0)}static kn(){return new ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&oo(r.mutation,i,nn.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$s();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=qn();const o=so(),l=function(){return so()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ui)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),oo(f.mutation,d,f.mutation.getFieldMask(),$e.now())):o.set(d.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var g;return l.set(d,new qC(f,(g=o.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=so();let i=new be((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||nn.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=hw();f.forEach(v=>{if(!s.has(v)){const S=vw(n.get(v),r.get(v));S!==null&&g.set(v,S),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Br());let l=-1,u=s;return o.next(d=>O.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,se())).next(f=>({batchId:l,changes:dw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=$s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$s();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const d=function(g,v){return new gu(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,v)=>{o=o.insert(g,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=$s();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&oo(f.mutation,d,nn.empty(),$e.now()),vu(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Tn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:BC(i.bundledQuery),readTime:Tn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.overlays=new be(q.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Br(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vC(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.Tr=new Je(We.Er),this.dr=new Je(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new We(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new ke([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new ke([])),r=new We(n,e),i=new We(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(We.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new We(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(he);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new We(new q(s),0);let l=new Je(he);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),O.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new We(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.Mr=e,this.docs=function(){return new be(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||VR(DR(f),r)<=0||(i.has(f.key)||vu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZC(this)}getSize(e){return O.resolve(this.size)}}class ZC extends HC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.persistence=e,this.Nr=new hs(n=>mf(n),gf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new If,this.targetCount=0,this.kr=ns.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new df(0),this.Kr=!1,this.Kr=!0,this.$r=new XC,this.referenceDelegate=e(this),this.Ur=new eP(this),this.indexManager=new $C,this.remoteDocumentCache=function(i){return new JC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new zC(n),this.Gr=new GC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new YC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new nP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nP extends MR{constructor(e){super(),this.currentSequenceNumber=e}}class xf{constructor(e){this.persistence=e,this.Jr=new If,this.Yr=null}static Zr(e){return new xf(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new kf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return MI()?8:LR(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rP;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ls()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Ls()<=ae.DEBUG&&W("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ls()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):O.resolve())}Yi(e,n){if(jg(n))return O.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zd(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,zd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return jg(n)||i.isEqual(ee.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?O.resolve(null):(Ls()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(n)),this.rs(e,o,n,NR(i,-1)).next(l=>l))})}ts(e,n){let r=new Je(uw(e));return n.forEach((i,s)=>{vu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ls()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",_i(n)),this.Ji.getDocumentsMatchingQuery(e,n,xr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new be(he),this._s=new hs(s=>mf(s),gf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function oP(t,e,n,r){return new sP(t,e,n,r)}async function Pw(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function aP(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,v=g.keys();let S=O.resolve();return v.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(b=>{const D=d.docVersions.get(R);me(D!==null),b.version.compareTo(D)<0&&(g.applyToRemoteDocument(b,d),b.isValidDocument()&&(b.setReadTime(d.commitVersion),f.addEntry(b)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bw(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lP(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const v=i.get(g);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let S=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(et.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(g,S),function(b,D,T){return b.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(v,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=qn(),d=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(uP(s,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function uP(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function cP(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dP(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function qd(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ko(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Qg(t,e,n){const r=te(t);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const g=te(u),v=g._s.get(f);return v!==void 0?O.resolve(g.os.get(v)):g.Ur.getTargetData(d,f)}(r,o,wn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:se())).next(l=>(hP(r,nC(e),l),{documents:l,Ts:s})))}function hP(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Xg{constructor(){this.activeTargetIds=lC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fP{constructor(){this.so=new Xg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa=null;function Cc(){return Oa===null?Oa=function(){return 268435456+Math.round(2147483648*Math.random())}():Oa++,"0x"+Oa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class yP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Cc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ji("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=mP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Cc();return new Promise((o,l)=>{const u=new q_;u.setWithCredentials(!0),u.listenOnce(K_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Za.NO_ERROR:const f=u.getResponseJson();W(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Za.TIMEOUT:W(ot,`RPC '${e}' ${s} timed out`),l(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const g=u.getStatus();if(W(ot,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const R=function(D){const T=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(S.status);l(new H(R,S.message))}else l(new H(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(M.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{W(ot,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);W(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Cc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=X_(),l=Q_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(ot,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let v=!1,S=!1;const R=new gP({Io:D=>{S?W(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(v||(W(ot,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),W(ot,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},To:()=>g.close()}),b=(D,T,_)=>{D.listen(T,k=>{try{_(k)}catch(V){setTimeout(()=>{throw V},0)}})};return b(g,Bs.EventType.OPEN,()=>{S||(W(ot,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),b(g,Bs.EventType.CLOSE,()=>{S||(S=!0,W(ot,`RPC '${e}' stream ${i} transport closed`),R.So())}),b(g,Bs.EventType.ERROR,D=>{S||(S=!0,Ji(ot,`RPC '${e}' stream ${i} transport errored:`,D),R.So(new H(M.UNAVAILABLE,"The operation could not be completed")))}),b(g,Bs.EventType.MESSAGE,D=>{var T;if(!S){const _=D.data[0];me(!!_);const k=_,V=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(V){W(ot,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let j=function(w){const x=je[w];if(x!==void 0)return ww(x)}(U),E=V.message;j===void 0&&(j=M.INTERNAL,E="Unknown error status: "+U+" with message "+V.message),S=!0,R.So(new H(j,E)),g.close()}else W(ot,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),b(l,G_.STAT_EVENT,D=>{D.stat===Md.PROXY?W(ot,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Md.NOPROXY&&W(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t){return new AC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Nw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vP extends Dw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=PC(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Tn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Hd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ud(u)?{documents:DC(s,u)}:{query:VC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Iw(s,o.resumeToken);const d=Bd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=$l(s,o.snapshotVersion.toTimestamp());const d=Bd(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=MC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Hd(this.serializer),n.removeTarget=e,this.a_(n)}}class _P extends Dw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=NC(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Hd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bC(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,$d(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,$d(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class EP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Hn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ci(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=te(u);d.L_.add(4),await Xo(d),d.q_.set("Unknown"),d.L_.delete(4),await Iu(d)}(this))})}),this.q_=new EP(r,i)}}async function Iu(t){if(ci(t))for(const e of t.B_)await e(!0)}async function Xo(t){for(const e of t.B_)await e(!1)}function Vw(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Cf(n)?Rf(n):fs(n).r_()&&Af(n,e))}function Sf(t,e){const n=te(t),r=fs(n);n.N_.delete(e),r.r_()&&Ow(n,e),n.N_.size===0&&(r.r_()?r.o_():ci(n)&&n.q_.set("Unknown"))}function Af(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).A_(e)}function Ow(t,e){t.Q_.xe(e),fs(t).R_(e)}function Rf(t){t.Q_=new IC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.q_.v_()}function Cf(t){return ci(t)&&!fs(t).n_()&&t.N_.size>0}function ci(t){return te(t).L_.size===0}function Mw(t){t.Q_=void 0}async function IP(t){t.q_.set("Online")}async function xP(t){t.N_.forEach((e,n)=>{Af(t,e)})}async function kP(t,e){Mw(t),Cf(t)?(t.q_.M_(e),Rf(t)):t.q_.set("Unknown")}async function SP(t,e,n){if(t.q_.set("Online"),e instanceof Tw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wl(t,r)}else if(e instanceof nl?t.Q_.Ke(e):e instanceof Ew?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await bw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),Ow(s,u);const g=new cr(f.target,u,d,f.sequenceNumber);Af(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Wl(t,r)}}async function Wl(t,e,n){if(!Ko(e))throw e;t.L_.add(1),await Xo(t),t.q_.set("Offline"),n||(n=()=>bw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Iu(t)})}function Lw(t,e){return e().catch(n=>Wl(t,n,e))}async function xu(t){const e=te(t),n=Sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;AP(e);)try{const i=await cP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,RP(e,i)}catch(i){await Wl(e,i)}jw(e)&&Fw(e)}function AP(t){return ci(t)&&t.O_.length<10}function RP(t,e){t.O_.push(e);const n=Sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function jw(t){return ci(t)&&!Sr(t).n_()&&t.O_.length>0}function Fw(t){Sr(t).start()}async function CP(t){Sr(t).p_()}async function PP(t){const e=Sr(t);for(const n of t.O_)e.m_(n.mutations)}async function bP(t,e,n){const r=t.O_.shift(),i=wf.from(r,e,n);await Lw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xu(t)}async function NP(t,e){e&&Sr(t).V_&&await async function(r,i){if(function(o){return wC(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Sr(r).s_(),await Lw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xu(r)}}(t,e),jw(t)&&Fw(t)}async function Jg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.L_.add(3),await Xo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Iu(n)}async function DP(t,e){const n=te(t);e?(n.L_.delete(2),await Iu(n)):e||(n.L_.add(2),await Xo(n),n.q_.set("Unknown"))}function fs(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new vP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:IP.bind(null,t),Ro:xP.bind(null,t),mo:kP.bind(null,t),d_:SP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Cf(t)?Rf(t):t.q_.set("Unknown")):(await t.K_.stop(),Mw(t))})),t.K_}function Sr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new _P(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:CP.bind(null,t),mo:NP.bind(null,t),f_:PP.bind(null,t),g_:bP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Pf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Ko(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Wi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.W_=new be(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new rs(e,n,Wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class OP{constructor(){this.queries=ey(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=ey(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function ey(){return new hs(t=>lw(t),yu)}async function MP(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=bf(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Nf(n)}async function LP(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jP(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Nf(n)}function FP(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Nf(t){t.Y_.forEach(e=>{e.next()})}var Kd,ty;(ty=Kd||(Kd={})).ea="default",ty.Cache="cache";class UP{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.key=e}}class zw{constructor(e){this.key=e}}class zP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=uw(e),this.Ra=new Wi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Zg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const v=i.get(f),S=vu(this.query,g)?g:null,R=!!v&&this.mutatedKeys.has(v.key),b=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;v&&S?v.data.isEqual(S.data)?R!==b&&(r.track({type:3,doc:S}),D=!0):this.ga(v,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(l=!0)):!v&&S?(r.track({type:0,doc:S}),D=!0):v&&!S&&(r.track({type:1,doc:v}),D=!0,(u||d)&&(l=!0)),D&&(S?(o=o.add(S),s=b?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(S,R){const b=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return b(S)-b(R)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new rs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new zw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Uw(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class BP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $P{constructor(e){this.key=e,this.va=!1}}class WP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new hs(l=>lw(l),yu),this.Ma=new Map,this.xa=new Set,this.Oa=new be(q.comparator),this.Na=new Map,this.La=new If,this.Ba={},this.ka=new Map,this.qa=ns.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function HP(t,e,n=!0){const r=Kw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Bw(r,e,n,!0),i}async function qP(t,e){const n=Kw(t);await Bw(n,e,!0,!1)}async function Bw(t,e,n,r){const i=await dP(t.localStore,wn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Vw(t.remoteStore,i),l}async function KP(t,e,n,r,i){t.Ka=(g,v,S)=>async function(b,D,T,_){let k=D.view.ma(T);k.ns&&(k=await Qg(b.localStore,D.query,!1).then(({documents:E})=>D.view.ma(E,k)));const V=_&&_.targetChanges.get(D.targetId),U=_&&_.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(k,b.isPrimaryClient,V,U);return ry(b,D.targetId,j.wa),j.snapshot}(t,g,v,S);const s=await Qg(t.localStore,e,!0),o=new zP(e,s.Ts),l=o.ma(s.documents),u=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);ry(t,n,d.wa);const f=new BP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function GP(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sf(r.remoteStore,i.targetId),Gd(r,i.targetId)}).catch(qo)):(Gd(r,i.targetId),await qd(r.localStore,i.targetId,!0))}async function QP(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sf(n.remoteStore,r.targetId))}async function XP(t,e,n){const r=r2(t);try{const i=await function(o,l){const u=te(o),d=$e.now(),f=l.reduce((S,R)=>S.add(R.key),se());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=qn(),b=se();return u.cs.getEntries(S,f).next(D=>{R=D,R.forEach((T,_)=>{_.isValidDocument()||(b=b.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(D=>{g=D;const T=[];for(const _ of l){const k=mC(_,g.get(_.key).overlayedDocument);k!=null&&T.push(new ui(_.key,k,tw(k.value.mapValue),En.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,T,l)}).next(D=>{v=D;const T=D.applyToLocalDocumentSet(g,b);return u.documentOverlayCache.saveOverlays(S,D.batchId,T)})}).then(()=>({batchId:v.batchId,changes:dw(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new be(he)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await Yo(r,i.changes),await xu(r.remoteStore)}catch(i){const s=bf(i,"Failed to persist write");n.reject(s)}}async function $w(t,e){const n=te(t);try{const r=await lP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Yo(n,r,e)}catch(r){await qo(r)}}function ny(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const v of g.j_)v.Z_(l)&&(d=!0)}),d&&Nf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YP(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new be(q.comparator);o=o.insert(s,ut.newNoDocument(s,ee.min()));const l=se().add(s),u=new Eu(ee.min(),new Map,new be(he),o,l);await $w(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Df(r)}else await qd(r.localStore,e,!1).then(()=>Gd(r,e,n)).catch(qo)}async function JP(t,e){const n=te(t),r=e.batch.batchId;try{const i=await aP(n.localStore,e);Hw(n,r,null),Ww(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,i)}catch(i){await qo(i)}}async function ZP(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(me(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);Hw(r,e,n),Ww(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,i)}catch(i){await qo(i)}}function Ww(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Hw(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||qw(t,r)})}function qw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Df(t))}function ry(t,e,n){for(const r of n)r instanceof Uw?(t.La.addReference(r.key,e),e2(t,r)):r instanceof zw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||qw(t,r.key)):Z()}function e2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Df(t))}function Df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(ke.fromString(e)),r=t.qa.next();t.Na.set(r,new $P(n)),t.Oa=t.Oa.insert(n,r),Vw(t.remoteStore,new cr(wn(yf(n.path)),r,"TargetPurposeLimboResolution",df.oe))}}async function Yo(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=kf.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(d,v=>O.forEach(v.$i,S=>f.persistence.referenceDelegate.addReference(g,v.targetId,S)).next(()=>O.forEach(v.Ui,S=>f.persistence.referenceDelegate.removeReference(g,v.targetId,S)))))}catch(g){if(!Ko(g))throw g;W("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const S=f.os.get(v),R=S.snapshotVersion,b=S.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(v,b)}}}(r.localStore,s))}async function t2(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Pw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.hs)}}function n2(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Kw(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YP.bind(null,e),e.Ca.d_=jP.bind(null,e.eventManager),e.Ca.$a=FP.bind(null,e.eventManager),e}function r2(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZP.bind(null,e),e}class Hl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return oP(this.persistence,new iP,e.initialUser,this.serializer)}Ga(e){return new tP(xf.Zr,this.serializer)}Wa(e){return new fP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hl.provider={build:()=>new Hl};class Qd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t2.bind(null,this.syncEngine),await DP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OP}()}createDatastore(e){const n=Tu(e.databaseInfo.databaseId),r=function(s){return new yP(s)}(e.databaseInfo);return function(s,o,l,u){return new wP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new TP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ny(this.syncEngine,n,0),function(){return Yg.D()?new Yg:new pP}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const g=new WP(i,s,o,l,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Xo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qd.provider={build:()=>new Qd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=J_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await o2(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jg(e.remoteStore,i)),t._onlineComponents=e}async function o2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await bc(t,new Hl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await bc(t,new Hl);return t._offlineComponents}async function Gw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await iy(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await iy(t,new Qd))),t._onlineComponents}function a2(t){return Gw(t).then(e=>e.syncEngine)}async function sy(t){const e=await Gw(t),n=e.eventManager;return n.onListen=HP.bind(null,e.syncEngine),n.onUnlisten=GP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QP.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function l2(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ay(t){if(!q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ly(t){if(q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vf(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}l2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ku{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IR;switch(r.type){case"firstParty":return new AR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oy.get(n);r&&(W("ComponentProvider","Removing Datastore"),oy.delete(n),r.terminate())}(this),Promise.resolve()}}function u2(t,e,n,r={}){var i;const s=(t=Kr(t,ku))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=at.MOCK_USER;else{l=PI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(d)}t._authCredentials=new xR(new Y_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Su(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Er extends Su{constructor(e,n,r){super(e,n,yf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new q(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function cy(t,e,...n){if(t=yt(t),Xw("collection","path",e),t instanceof ku){const r=ke.fromString(e,...n);return ly(r),new Er(t,null,r)}{if(!(t instanceof Dt||t instanceof Er))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return ly(r),new Er(t.firestore,null,r)}}function hn(t,e,...n){if(t=yt(t),arguments.length===1&&(e=J_.newId()),Xw("doc","path",e),t instanceof ku){const r=ke.fromString(e,...n);return ay(r),new Dt(t,null,new q(r))}{if(!(t instanceof Dt||t instanceof Er))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return ay(r),new Dt(t.firestore,t instanceof Er?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Nw(this,"async_queue_retry"),this.Vu=()=>{const r=Pc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new qr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ko(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Pf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function hy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Vo extends ku{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new dy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dy(e),this._firestoreClient=void 0,await e}}}function c2(t,e){const n=typeof t=="object"?t:Gh(),r=typeof t=="string"?t:e||"(default)",i=li(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RI("firestore");s&&u2(i,...s)}return i}function Yw(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||d2(t),t._firestoreClient}function d2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new UR(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Qw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new s2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(et.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=/^__.*__$/;class f2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new Go(e,this.data,n,this.fieldTransforms)}}function Zw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class jf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ql(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Zw(this.Cu)&&h2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class p2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tu(e)}Qu(e,n,r,i=!1){return new jf({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function m2(t){const e=t._freezeSettings(),n=Tu(t._databaseId);return new p2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function g2(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);r1("Data must be an object, but it was:",o,r);const l=t1(r,o);let u,d;if(s.merge)u=new nn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const v=y2(e,g,n);if(!o.contains(v))throw new H(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);_2(f,v)||f.push(v)}u=new nn(f),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new f2(new Ut(l),u,d)}function e1(t,e){if(n1(t=yt(t)))return r1("Unsupported field value:",e,t),t1(t,e);if(t instanceof Jw)return function(r,i){if(!Zw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=e1(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:$l(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$l(i.serializer,s)}}if(r instanceof Mf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof is)return{bytesValue:Iw(i.serializer,r._byteString)};if(r instanceof Dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return vf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Vf(r)}`)}(t,e)}function t1(t,e){const n={};return Z_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,i)=>{const s=e1(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function n1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Mf||t instanceof is||t instanceof Dt||t instanceof Jw||t instanceof Lf)}function r1(t,e,n){if(!n1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function y2(t,e,n){if((e=yt(e))instanceof Of)return e._internalPath;if(typeof e=="string")return i1(t,e);throw ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const v2=new RegExp("[~\\*/\\[\\]]");function i1(t,e,n){if(e.search(v2)>=0)throw ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Of(...e.split("."))._internalPath}catch{throw ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function _2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new w2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(o1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class w2 extends s1{data(){return super.data()}}function o1(t,e){return typeof e=="string"?i1(t,e):e instanceof Of?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class T2{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Oe(o.doubleValue));return new Lf(s)}convertGeoPoint(e){return new Mf(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ff(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=kr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);me(Cw(r));const i=new Po(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Hn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class a1 extends s1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(o1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rl extends a1{data(e={}){return super.data(e)}}class x2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rl(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new rl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Hs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new rl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Hs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:k2(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function k2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class l1 extends T2{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function yi(t,e,n){t=Kr(t,Dt);const r=Kr(t.firestore,Vo),i=I2(t.converter,e,n);return u1(r,[g2(m2(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,En.none())])}function Nc(t){return u1(Kr(t.firestore,Vo),[new _f(t._key,En.none())])}function Dc(t,...e){var n,r,i;t=yt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(hy(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,d,f;if(t instanceof Dt)d=Kr(t.firestore,Vo),f=yf(t._key.path),u={next:g=>{e[o]&&e[o](S2(d,t,g))},error:e[o+1],complete:e[o+2]};else{const g=Kr(t,Su);d=Kr(g.firestore,Vo),f=g._query;const v=new l1(d);u={next:S=>{e[o]&&e[o](new x2(d,v,g,S))},error:e[o+1],complete:e[o+2]},E2(t._query)}return function(v,S,R,b){const D=new i2(b),T=new UP(S,D,R);return v.asyncQueue.enqueueAndForget(async()=>MP(await sy(v),T)),()=>{D.Za(),v.asyncQueue.enqueueAndForget(async()=>LP(await sy(v),T))}}(Yw(d),f,l,u)}function u1(t,e){return function(r,i){const s=new qr;return r.asyncQueue.enqueueAndForget(async()=>XP(await a2(r),i,s)),s.promise}(Yw(t),e)}function S2(t,e,n){const r=n.docs.get(e._key),i=new l1(t);return new a1(t,i,e._key,r,new Hs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){cs=i})(ls),In(new an("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Vo(new kR(r.getProvider("auth-internal")),new CR(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),$t(Rg,"4.7.3",e),$t(Rg,"4.7.3","esm2017")})();const A2={apiKey:"AIzaSyC7rhKGxbnJQHFlP8aAA70fIAdyfz9wTYk",authDomain:"fitrack-60514.firebaseapp.com",projectId:"fitrack-60514",storageBucket:"fitrack-60514.firebasestorage.app",messagingSenderId:"986717353729",appId:"1:986717353729:web:74d402965ea391fdf00d00",measurementId:"G-BL2CQLX8GQ"},R2=typeof __firebase_config<"u"?JSON.parse(__firebase_config):A2,Ff=Bv(R2);let C2;try{C2=vS(Ff)}catch{}const Vc=ER(Ff),Yt=c2(Ff),Jt=typeof __app_id<"u"?__app_id:"fitrack-default",P2=[{id:"1",name:"Жим лежа",bodyPart:"Грудь"},{id:"2",name:"Приседания со штангой",bodyPart:"Ноги"},{id:"3",name:"Становая тяга",bodyPart:"Спина"},{id:"4",name:"Подтягивания",bodyPart:"Спина"},{id:"5",name:"Жим гантелей сидя",bodyPart:"Плечи"},{id:"6",name:"Сгибания рук с штангой",bodyPart:"Бицепс"}];function b2(){const[t,e]=ye.useState("workouts"),[n,r]=ye.useState([]),[i,s]=ye.useState([]),[o,l]=ye.useState(!1),[u,d]=ye.useState("кг"),[f,g]=ye.useState(null),[v,S]=ye.useState(!0),[R,b]=ye.useState(null),[D,T]=ye.useState(null),[_,k]=ye.useState(null),[V,U]=ye.useState(new Date),[j,E]=ye.useState(!1),[y,w]=ye.useState(new Date),[x,A]=ye.useState(!1),[P,I]=ye.useState(null),ht=ye.useRef(null);ye.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await aA(Vc,__initial_auth_token):await nA(Vc)}catch(Y){console.error("Ошибка авторизации Firebase:",Y),Y.code==="auth/configuration-not-found"?b("В вашем проекте Firebase не включена анонимная авторизация. Перейдите в Firebase Console -> Authentication -> Sign-in method и включите провайдер 'Anonymous'."):b(Y.message)}})();const Q=cA(Vc,Y=>{g(Y)});return()=>Q()},[]),ye.useEffect(()=>{if(!f)return;const B=cy(Yt,"artifacts",Jt,"users",f.uid,"workouts"),Q=cy(Yt,"artifacts",Jt,"users",f.uid,"exercises"),Y=hn(Yt,"artifacts",Jt,"users",f.uid,"settings","userSettings"),Ae=Dc(B,re=>{const K=re.docs.map(ce=>ce.data());s(K.sort((ce,oe)=>oe.startTime-ce.startTime))},re=>console.error("Ошибка синхронизации тренировок:",re)),ge=Dc(Q,re=>{re.empty?P2.forEach(K=>{yi(hn(Q,K.id),K).catch(ce=>console.error(ce))}):r(re.docs.map(K=>K.data())),S(!1)},re=>console.error("Ошибка синхронизации упражнений:",re)),X=Dc(Y,re=>{if(re.exists()){const K=re.data();K.weightUnit&&d(K.weightUnit),K.isDarkMode!==void 0&&l(K.isDarkMode)}},re=>console.error("Ошибка синхронизации настроек:",re));return()=>{Ae(),ge(),X()}},[f]),ye.useEffect(()=>{o?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[o]);const un=()=>Math.random().toString(36).substr(2,9),Gn=B=>new Date(B).toLocaleDateString("ru-RU",{day:"numeric",month:"long"}),tt=B=>{const Q=new Date(B);return`${Q.getFullYear()}-${String(Q.getMonth()+1).padStart(2,"0")}-${String(Q.getDate()).padStart(2,"0")}`},z=B=>{const Q=new Date(B),Y=Q.getDay(),Ae=Q.getDate()-Y+(Y===0?-6:1),ge=new Date(Q.setDate(Ae)),X=[];for(let re=0;re<7;re++)X.push(new Date(ge.getTime()+re*24*60*60*1e3));return X},G=async(B,Q)=>{if(B==="weightUnit"&&d(Q),B==="isDarkMode"&&l(Q),!!f)try{await yi(hn(Yt,"artifacts",Jt,"users",f.uid,"settings","userSettings"),{[B]:Q},{merge:!0})}catch(Y){console.error("Ошибка при сохранении настроек:",Y)}},ne=async B=>{if(!f)return;const Q=B.id||un(),Y={...B,id:Q};try{await yi(hn(Yt,"artifacts",Jt,"users",f.uid,"exercises",Q),Y),I(null)}catch(Ae){console.error(Ae)}},we=async B=>{if(f)try{await Nc(hn(Yt,"artifacts",Jt,"users",f.uid,"exercises",B))}catch(Q){console.error(Q)}},fe=()=>{T({id:un(),startTime:V.getTime(),exercises:[]})},Se=async()=>{if(!D||!f)return;let B=0;const Q=D.exercises.map(Y=>{const Ae=Y.sets.filter(ge=>ge.completed);return Ae.forEach(ge=>{B+=(parseFloat(ge.weight)||0)*(parseInt(ge.reps)||0)}),{...Y,sets:Ae}}).filter(Y=>Y.sets.length>0);try{if(Q.length>0){const Y={...D,endTime:D.endTime||Date.now(),exercises:Q,volume:B};await yi(hn(Yt,"artifacts",Jt,"users",f.uid,"workouts",Y.id),Y)}else await Nc(hn(Yt,"artifacts",Jt,"users",f.uid,"workouts",D.id));T(null)}catch(Y){console.error("Ошибка сохранения тренировки:",Y)}},qt=async B=>{if(f)try{await Nc(hn(Yt,"artifacts",Jt,"users",f.uid,"workouts",B))}catch(Q){console.error(Q)}},At=()=>new Promise((B,Q)=>{if(window.XLSX)return B(window.XLSX);const Y=document.createElement("script");Y.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",Y.onload=()=>B(window.XLSX),Y.onerror=()=>Q(new Error("Не удалось загрузить библиотеку для Excel")),document.head.appendChild(Y)}),Kt=async()=>{try{const B=await At(),Q=[];i.forEach(X=>{X.exercises.length===0?Q.push({WorkoutID:X.id,Date:new Date(X.startTime).toISOString(),TotalVolume:X.volume||0,ExerciseID:"",ExerciseName:"",SetID:"",Weight:"",Reps:"",Completed:""}):X.exercises.forEach(re=>{re.sets.forEach(K=>{Q.push({WorkoutID:X.id,Date:new Date(X.startTime).toISOString(),TotalVolume:X.volume||0,ExerciseID:re.exerciseId,ExerciseName:re.name,SetID:K.id,Weight:K.weight,Reps:K.reps,Completed:K.completed})})})});const Y=n.map(X=>({ID:X.id,Name:X.name,BodyPart:X.bodyPart})),Ae=[{Key:"weightUnit",Value:u}],ge=B.utils.book_new();B.utils.book_append_sheet(ge,B.utils.json_to_sheet(Q),"Тренировки"),B.utils.book_append_sheet(ge,B.utils.json_to_sheet(Y),"База упражнений"),B.utils.book_append_sheet(ge,B.utils.json_to_sheet(Ae),"Настройки"),B.writeFile(ge,"FitTrack_Backup.xlsx")}catch(B){alert("Ошибка при экспорте: "+B.message)}},Lt=async()=>{try{const B=await At(),Q=[{WorkoutID:"wk_1",Date:new Date().toISOString(),TotalVolume:200,ExerciseID:"ex_1",ExerciseName:"Пример: Жим лежа",SetID:"s_1",Weight:"50",Reps:"4",Completed:!0}],Y=[{ID:"ex_1",Name:"Пример: Жим лежа",BodyPart:"Грудь"}],Ae=[{Key:"weightUnit",Value:"кг"}],ge=B.utils.book_new();B.utils.book_append_sheet(ge,B.utils.json_to_sheet(Q),"Тренировки"),B.utils.book_append_sheet(ge,B.utils.json_to_sheet(Y),"База упражнений"),B.utils.book_append_sheet(ge,B.utils.json_to_sheet(Ae),"Настройки"),B.writeFile(ge,"FitTrack_Example.xlsx")}catch(B){alert("Ошибка: "+B.message)}},Au=()=>{var B;return(B=ht.current)==null?void 0:B.click()},Ru=async B=>{const Q=B.target.files[0];if(!(!Q||!f))try{const Y=await At(),Ae=new FileReader;Ae.onload=async ge=>{S(!0);try{const X=new Uint8Array(ge.target.result),re=Y.read(X,{type:"array"});if(re.Sheets.Настройки){const ce=Y.utils.sheet_to_json(re.Sheets.Настройки).find(oe=>oe.Key==="weightUnit");ce&&await G("weightUnit",ce.Value)}if(re.Sheets["База упражнений"]){const K=Y.utils.sheet_to_json(re.Sheets["База упражнений"]);for(const ce of K){const oe={id:String(ce.ID),name:String(ce.Name),bodyPart:String(ce.BodyPart)};await yi(hn(Yt,"artifacts",Jt,"users",f.uid,"exercises",oe.id),oe)}}if(re.Sheets.Тренировки){const K=Y.utils.sheet_to_json(re.Sheets.Тренировки),ce={};K.forEach(oe=>{const wt=String(oe.WorkoutID);if(ce[wt]||(ce[wt]={id:wt,startTime:new Date(oe.Date).getTime()||Date.now(),volume:Number(oe.TotalVolume)||0,exercises:[]}),oe.ExerciseID&&oe.ExerciseName){const Gt=ce[wt];let cn=Gt.exercises.find(Le=>Le.exerciseId===String(oe.ExerciseID));cn||(cn={id:Math.random().toString(36).substring(2,9),exerciseId:String(oe.ExerciseID),name:String(oe.ExerciseName),sets:[]},Gt.exercises.push(cn)),(oe.SetID||oe.Weight||oe.Reps)&&cn.sets.push({id:String(oe.SetID)||Math.random().toString(36).substring(2,9),weight:String(oe.Weight||""),reps:String(oe.Reps||""),completed:oe.Completed===!0||String(oe.Completed).toLowerCase()==="true"})}});for(const oe of Object.values(ce))await yi(hn(Yt,"artifacts",Jt,"users",f.uid,"workouts",oe.id),oe)}B.target.value=null,alert("Данные из Excel успешно импортированы!")}catch(X){alert("Ошибка при разборе Excel файла."),console.error(X)}finally{S(!1)}},Ae.readAsArrayBuffer(Q)}catch(Y){alert("Ошибка при загрузке библиотеки Excel: "+Y.message)}},Pr=({workout:B})=>m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md",children:[m.jsxs("div",{className:"flex justify-between items-start mb-4",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white text-lg",children:"Тренировка"}),m.jsx("button",{onClick:()=>T(B),className:"text-gray-400 hover:text-blue-500 transition-colors p-1",children:m.jsx(Rv,{size:16})}),m.jsx("button",{onClick:()=>qt(B.id),className:"text-gray-400 hover:text-red-500 transition-colors p-1",children:m.jsx(Hh,{size:16})})]}),m.jsxs("div",{className:"flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1",children:[m.jsx(fI,{size:14,className:"mr-1"}),Gn(B.startTime)]})]}),m.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300",children:[B.volume," ",u]})]}),m.jsx("div",{className:"space-y-2",children:B.exercises.map(Q=>m.jsxs("div",{className:"text-sm flex justify-between border-b border-gray-50 dark:border-gray-800/50 pb-2 last:border-0 last:pb-0",children:[m.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium",children:Q.name}),m.jsxs("span",{className:"text-gray-500 dark:text-gray-500",children:[Q.sets.length," подходов"]})]},Q.id))})]});if(v)return m.jsx("div",{className:`fixed inset-0 flex items-center justify-center p-6 ${o?"dark bg-gray-950 text-white":"bg-[#f2f2f7] text-gray-900"}`,children:R?m.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-3xl max-w-sm text-center border border-red-100 dark:border-red-900/50 shadow-xl",children:[m.jsx("div",{className:"w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4",children:m.jsx(qh,{size:32})}),m.jsx("h3",{className:"font-bold text-lg mb-2",children:"Ошибка подключения"}),m.jsx("p",{className:"text-sm font-medium",children:R})]}):m.jsxs("div",{className:"flex flex-col items-center gap-4 animate-pulse",children:[m.jsx("div",{className:"w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center",children:m.jsx(vi,{className:"text-blue-500",size:32})}),m.jsx("p",{className:"font-medium text-gray-500 dark:text-gray-400",children:"Синхронизация данных..."})]})});const di=()=>{const B=i.length,Q=i.reduce((X,re)=>X+(re.volume||0),0),Ae=Array.from({length:6}).map((X,re)=>{const K=new Date;return K.setMonth(K.getMonth()-(5-re)),{label:K.toLocaleString("ru-RU",{month:"short"}),month:K.getMonth(),year:K.getFullYear()}}).map(X=>{const re=i.filter(K=>{const ce=new Date(K.startTime);return ce.getMonth()===X.month&&ce.getFullYear()===X.year}).length;return{...X,count:re}}),ge=Math.max(...Ae.map(X=>X.count),1);return m.jsxs("div",{className:"space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto",children:[m.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10",children:"Статистика"}),m.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-2 gap-4 px-4 md:px-8",children:[m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:shadow-md transition-shadow",children:[m.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4",children:m.jsx(vi,{className:"text-blue-500 dark:text-blue-400",size:24})}),m.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium mb-1",children:"Всего тренировок"}),m.jsx("p",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:B})]}),m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:shadow-md transition-shadow",children:[m.jsx("div",{className:"w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4",children:m.jsx(Cv,{className:"text-green-500 dark:text-green-400",size:24})}),m.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium mb-1",children:["Общий тоннаж (",u,")"]}),m.jsx("p",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:Q})]})]}),m.jsx("div",{className:"px-4 md:px-8",children:m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800",children:[m.jsx("h2",{className:"text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100",children:"Тренировки по месяцам"}),m.jsx("div",{className:"flex items-end justify-between h-40 gap-2 md:gap-6",children:Ae.map((X,re)=>{const K=i.length>0?`${Math.max(15,X.count/ge*100)}%`:"15%";return m.jsxs("div",{className:"flex flex-col items-center gap-3 flex-1 relative group",children:[m.jsx("div",{className:"w-full bg-blue-50 dark:bg-gray-800 rounded-t-xl relative flex-1 flex items-end overflow-hidden",children:m.jsx("div",{className:"w-full bg-blue-500 dark:bg-blue-600 rounded-t-xl transition-all duration-700 ease-out flex items-start justify-center pt-2 group-hover:bg-blue-400 dark:group-hover:bg-blue-500",style:{height:K},children:X.count>0&&m.jsx("span",{className:"text-xs md:text-sm text-white font-bold",children:X.count})})}),m.jsx("span",{className:"text-xs md:text-sm text-gray-400 font-medium capitalize",children:X.label})]},re)})})]})}),m.jsxs("div",{className:"px-4 md:px-8 space-y-4",children:[m.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4",children:"Прогресс по упражнениям"}),m.jsx("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",children:n.map((X,re)=>m.jsxs("button",{onClick:()=>k(X),className:`w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${re!==n.length-1?"border-b border-gray-100 dark:border-gray-800":""}`,children:[m.jsxs("div",{children:[m.jsx("h3",{className:"font-medium text-gray-900 dark:text-white md:text-lg",children:X.name}),m.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:X.bodyPart})]}),m.jsx(Ga,{className:"text-gray-300 dark:text-gray-600",size:24})]},X.id))})]}),m.jsxs("div",{className:"px-4 md:px-8 space-y-4 pt-6 mt-6 border-t border-gray-200/50 dark:border-gray-800",children:[m.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100",children:"История всех тренировок"}),i.length===0?m.jsxs("div",{className:"text-center py-12 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm",children:[m.jsx(yc,{className:"mx-auto text-gray-300 dark:text-gray-600 mb-4",size:48}),m.jsx("p",{className:"text-gray-500 dark:text-gray-400 md:text-lg",children:"История пуста."})]}):m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:i.map(X=>m.jsx(Pr,{workout:X},X.id))})]})]})},ps=()=>{const B=new Date(y.getFullYear(),y.getMonth()+1,0).getDate(),Q=(new Date(y.getFullYear(),y.getMonth(),1).getDay()+6)%7,Y=()=>w(new Date(y.getFullYear(),y.getMonth()-1,1)),Ae=()=>w(new Date(y.getFullYear(),y.getMonth()+1,1)),ge=tt(V),X=i.filter(K=>tt(K.startTime)===ge),re=z(V);return m.jsxs("div",{className:"space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto",children:[m.jsxs("div",{className:"flex justify-between items-center px-4 md:px-8 mt-6 md:mt-10",children:[m.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Тренировки"}),m.jsx("button",{onClick:()=>{E(!j),j||w(new Date(V))},className:"p-3 text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm",children:j?m.jsx(hI,{size:24}):m.jsx(Av,{size:24})})]}),m.jsx("div",{className:"px-4 md:px-8 -mt-2",children:j?m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-4 fade-in duration-200",children:[m.jsxs("div",{className:"flex justify-between items-center mb-6",children:[m.jsx("button",{onClick:Y,className:"p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full",children:m.jsx(Wh,{size:20})}),m.jsx("span",{className:"font-bold text-lg capitalize dark:text-white",children:y.toLocaleString("ru-RU",{month:"long",year:"numeric"})}),m.jsx("button",{onClick:Ae,className:"p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full",children:m.jsx(Ga,{size:20})})]}),m.jsx("div",{className:"grid grid-cols-7 gap-1 text-center mb-2",children:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(K=>m.jsx("div",{className:"text-xs md:text-sm font-bold text-gray-400 py-1",children:K},K))}),m.jsxs("div",{className:"grid grid-cols-7 gap-y-2 gap-x-1 md:gap-2 text-center",children:[Array.from({length:Q}).map((K,ce)=>m.jsx("div",{},`empty-${ce}`)),Array.from({length:B}).map((K,ce)=>{const oe=new Date(y.getFullYear(),y.getMonth(),ce+1),wt=tt(oe),Gt=ge===wt,cn=i.some(Le=>tt(Le.startTime)===wt);return m.jsxs("button",{onClick:()=>{U(oe),E(!1)},className:`h-12 md:h-14 w-full rounded-2xl md:rounded-3xl flex flex-col items-center justify-center relative transition-all ${Gt?"bg-blue-500 text-white shadow-md":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:[m.jsx("span",{className:"text-sm md:text-base font-semibold",children:ce+1}),cn&&m.jsx("div",{className:`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full absolute bottom-1.5 md:bottom-2 ${Gt?"bg-white":"bg-blue-500"}`})]},wt)})]})]}):m.jsx("div",{className:"flex justify-between items-center bg-white dark:bg-gray-900 p-2 md:p-3 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 gap-1 md:gap-3",children:re.map(K=>{const ce=tt(K),oe=ge===ce,wt=i.some(Gt=>tt(Gt.startTime)===ce);return m.jsxs("button",{onClick:()=>U(K),className:`flex flex-col items-center justify-center flex-1 aspect-[3/4] md:aspect-square rounded-2xl transition-all ${oe?"bg-blue-500 text-white shadow-md":"text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:[m.jsx("span",{className:"text-[10px] md:text-xs font-medium opacity-80 uppercase tracking-wider mb-1",children:K.toLocaleDateString("ru-RU",{weekday:"short"})}),m.jsx("span",{className:`text-lg md:text-2xl font-bold leading-none ${oe?"text-white":"text-gray-900 dark:text-gray-200"}`,children:K.getDate()}),m.jsx("div",{className:`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-1.5 md:mt-2 ${oe?"bg-white":wt?"bg-blue-500":"bg-transparent"}`})]},ce)})})}),m.jsx("div",{className:"px-4 md:px-8",children:m.jsxs("button",{onClick:fe,className:"w-full bg-blue-500 hover:bg-blue-600 active:scale-[0.98] transition-all text-white font-semibold py-4 md:py-5 text-lg rounded-2xl md:rounded-3xl flex items-center justify-center shadow-md hover:shadow-lg",children:[m.jsx(Rl,{size:24,className:"mr-2 stroke-[2.5px]"}),"Добавить тренировку"]})}),m.jsxs("div",{className:"px-4 md:px-8 space-y-4 pt-4",children:[m.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 capitalize",children:Gn(V.getTime())}),X.length===0?m.jsxs("div",{className:"text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm",children:[m.jsx(vi,{className:"mx-auto text-gray-300 dark:text-gray-600 mb-4",size:56}),m.jsx("p",{className:"text-gray-500 dark:text-gray-400 md:text-lg",children:"Нет тренировок в этот день."})]}):m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:X.map(K=>m.jsx(Pr,{workout:K},K.id))})]})]})},ms=()=>m.jsxs("div",{className:"space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-3xl mx-auto",children:[m.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10",children:"Настройки"}),m.jsxs("div",{className:"px-4 md:px-8 space-y-8",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2",children:"Основные"}),m.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",children:[m.jsxs("div",{className:"p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:`p-3 rounded-2xl ${o?"bg-indigo-900/30":"bg-orange-100"}`,children:o?m.jsx(gI,{size:24,className:"text-indigo-400"}):m.jsx(vI,{size:24,className:"text-orange-500"})}),m.jsx("span",{className:"font-medium text-lg text-gray-900 dark:text-white",children:"Темная тема"})]}),m.jsx("button",{onClick:()=>G("isDarkMode",!o),className:`w-14 h-8 rounded-full transition-colors flex items-center px-1 ${o?"bg-green-500":"bg-gray-200 dark:bg-gray-700"}`,children:m.jsx("div",{className:`w-6 h-6 rounded-full bg-white transition-transform ${o?"translate-x-6":""} shadow-sm`})})]}),m.jsxs("button",{onClick:()=>G("weightUnit",u==="кг"?"lbs":"кг"),className:"w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 rounded-2xl bg-green-100 dark:bg-green-900/30",children:m.jsx(yI,{size:24,className:"text-green-500"})}),m.jsx("span",{className:"font-medium text-lg text-gray-900 dark:text-white",children:"Единицы веса"})]}),m.jsx("span",{className:"text-base text-blue-500 font-bold uppercase bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg",children:u})]})]})]}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2",children:"Данные"}),m.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",children:[m.jsxs("button",{onClick:()=>A(!0),className:"w-full p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30",children:m.jsx(vi,{size:24,className:"text-purple-500"})}),m.jsx("span",{className:"font-medium text-lg text-gray-900 dark:text-white",children:"База упражнений"})]}),m.jsx(Ga,{size:24,className:"text-gray-300 dark:text-gray-600"})]}),m.jsx("button",{onClick:Kt,className:"w-full p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left",children:m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30",children:m.jsx(pI,{size:24,className:"text-blue-500"})}),m.jsx("span",{className:"font-medium text-lg text-gray-900 dark:text-white",children:"Экспорт в Excel"})]})}),m.jsxs("button",{onClick:Au,className:"w-full p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 rounded-2xl bg-teal-100 dark:bg-teal-900/30",children:m.jsx(wI,{size:24,className:"text-teal-500"})}),m.jsx("span",{className:"font-medium text-lg text-gray-900 dark:text-white",children:"Импорт из Excel"})]}),m.jsx("input",{type:"file",accept:".xlsx, .xls",ref:ht,onChange:Ru,className:"hidden"})]}),m.jsx("button",{onClick:Lt,className:"w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left",children:m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 rounded-2xl bg-gray-100 dark:bg-gray-800",children:m.jsx(mI,{size:24,className:"text-gray-500 dark:text-gray-400"})}),m.jsx("span",{className:"font-medium text-lg text-gray-900 dark:text-white",children:"Скачать пример Excel"})]})})]})]})]})]});return m.jsx("div",{className:`fixed inset-0 flex justify-center ${o?"dark bg-gray-950":"bg-white"}`,children:m.jsxs("div",{className:"w-full h-full bg-[#f2f2f7] dark:bg-gray-950 relative overflow-hidden shadow-2xl flex flex-col md:flex-row font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[m.jsxs("div",{className:"hidden md:flex w-72 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 z-40 transition-colors shadow-sm",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-12 mt-4 text-blue-500 px-2",children:[m.jsx(vi,{size:36,strokeWidth:2.5}),m.jsx("h1",{className:"text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight",children:"FitTrack"})]}),m.jsxs("nav",{className:"flex flex-col gap-3",children:[m.jsxs("button",{onClick:()=>e("stats"),className:`flex items-center gap-4 p-4 rounded-2xl transition-all ${t==="stats"?"bg-blue-500 shadow-md text-white":"text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"}`,children:[m.jsx(Wm,{size:24,className:t==="stats"?"stroke-[2.5px]":""}),m.jsx("span",{className:"font-semibold text-lg",children:"Статистика"})]}),m.jsxs("button",{onClick:()=>e("workouts"),className:`flex items-center gap-4 p-4 rounded-2xl transition-all ${t==="workouts"?"bg-blue-500 shadow-md text-white":"text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"}`,children:[m.jsx(yc,{size:24,className:t==="workouts"?"stroke-[2.5px]":""}),m.jsx("span",{className:"font-semibold text-lg",children:"Тренировки"})]}),m.jsxs("button",{onClick:()=>e("settings"),className:`flex items-center gap-4 p-4 rounded-2xl transition-all ${t==="settings"?"bg-blue-500 shadow-md text-white":"text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"}`,children:[m.jsx(Hm,{size:24,className:t==="settings"?"stroke-[2.5px]":""}),m.jsx("span",{className:"font-semibold text-lg",children:"Настройки"})]})]})]}),m.jsxs("div",{className:"flex-1 h-full overflow-y-auto relative",children:[t==="stats"&&di(),t==="workouts"&&ps(),t==="settings"&&ms()]}),m.jsxs("div",{className:"md:hidden absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50 pb-safe pt-2 px-6 flex justify-between z-40 transition-colors",children:[m.jsxs("button",{onClick:()=>e("stats"),className:`flex flex-col items-center p-2 transition-colors ${t==="stats"?"text-blue-500":"text-gray-400 dark:text-gray-500"}`,children:[m.jsx(Wm,{size:24,className:t==="stats"?"stroke-[2.5px]":""}),m.jsx("span",{className:"text-[10px] font-medium mt-1",children:"Статистика"})]}),m.jsxs("button",{onClick:()=>e("workouts"),className:`flex flex-col items-center p-2 transition-colors ${t==="workouts"?"text-blue-500":"text-gray-400 dark:text-gray-500"}`,children:[m.jsx(yc,{size:24,className:t==="workouts"?"stroke-[2.5px]":""}),m.jsx("span",{className:"text-[10px] font-medium mt-1",children:"Тренировки"})]}),m.jsxs("button",{onClick:()=>e("settings"),className:`flex flex-col items-center p-2 transition-colors ${t==="settings"?"text-blue-500":"text-gray-400 dark:text-gray-500"}`,children:[m.jsx(Hm,{size:24,className:t==="settings"?"stroke-[2.5px]":""}),m.jsx("span",{className:"text-[10px] font-medium mt-1",children:"Настройки"})]})]}),D&&m.jsx(D2,{workout:D,setWorkout:T,exercises:n,weightUnit:u,onFinish:Se,onCancel:()=>T(null)}),_&&m.jsx(N2,{exercise:_,workouts:i,weightUnit:u,onClose:()=>k(null)}),x&&m.jsx(V2,{exercises:n,onClose:()=>A(!1),onAdd:()=>I({name:"",bodyPart:"Грудь"}),onEdit:I,onDelete:we}),P&&m.jsx(O2,{initialData:P,onSave:ne,onClose:()=>I(null)})]})})}function N2({exercise:t,workouts:e,weightUnit:n,onClose:r}){const i=e.map(f=>{const g=f.exercises.find(v=>v.exerciseId===t.id);return g?{date:f.startTime,sets:g.sets.filter(v=>v.completed)}:null}).filter(f=>f&&f.sets.length>0).sort((f,g)=>g.date-f.date),s=[...i].reverse(),o=s.map(f=>({label:new Date(f.date).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),value:f.sets.reduce((g,v)=>g+(parseFloat(v.weight)||0)*(parseInt(v.reps)||0),0)})),l=s.map(f=>({label:new Date(f.date).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),value:Math.max(...f.sets.map(g=>parseFloat(g.weight)||0))}));let u=0,d=0;return i.forEach(f=>{f.sets.forEach(g=>{const v=parseFloat(g.weight)||0;v>u&&(u=v),d+=v*(parseInt(g.reps)||0)})}),m.jsx("div",{className:"fixed inset-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center bg-[#f2f2f7] dark:bg-gray-950 md:bg-black/50 md:dark:bg-black/70 md:backdrop-blur-sm animate-in fade-in duration-200",children:m.jsxs("div",{className:"flex-1 md:flex-none w-full h-full md:h-[85vh] md:max-w-3xl bg-[#f2f2f7] dark:bg-gray-950 md:rounded-[32px] md:shadow-2xl md:border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden relative animate-in slide-in-from-bottom-10 md:zoom-in-95",children:[m.jsxs("div",{className:"bg-white dark:bg-gray-900 px-4 md:px-6 pt-6 md:pt-6 pb-4 border-b border-gray-200 dark:border-gray-800 flex items-center shadow-sm sticky top-0 z-10",children:[m.jsx("button",{onClick:r,className:"p-2 -ml-2 md:ml-0 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-colors mr-3",children:m.jsx(Wh,{size:28})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-xl md:text-2xl font-bold leading-tight dark:text-white",children:t.name}),m.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:t.bodyPart})]})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8",children:[m.jsxs("div",{className:"grid grid-cols-2 gap-4 md:gap-6",children:[m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between",children:[m.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3",children:m.jsx(_I,{className:"text-blue-500",size:20})}),m.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium mb-1",children:"Макс. вес"}),m.jsx("p",{className:"text-2xl md:text-3xl font-bold text-gray-900 dark:text-white",children:u>0?`${u} ${n}`:"-"})]}),m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between",children:[m.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-3",children:m.jsx(Cv,{className:"text-green-500",size:20})}),m.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium mb-1",children:"Тоннаж в упр."}),m.jsx("p",{className:"text-2xl md:text-3xl font-bold text-gray-900 dark:text-white",children:d>0?`${d} ${n}`:"-"})]})]}),m.jsx("div",{className:"pb-6",children:i.length===0?m.jsxs("div",{className:"text-center py-12 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm mt-4",children:[m.jsx(vi,{className:"mx-auto text-gray-300 dark:text-gray-600 mb-3",size:48}),m.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-base md:text-lg",children:"Вы еще не выполняли это упражнение."})]}):m.jsxs("div",{className:"space-y-6 md:space-y-8",children:[m.jsx(fy,{data:l,title:"Динамика макс. веса",colorClass:"text-blue-500",valueSuffix:n}),m.jsx(fy,{data:o,title:"Рост тоннажа",colorClass:"text-green-500",valueSuffix:n})]})})]})]})})}function fy({data:t,title:e,colorClass:n,valueSuffix:r}){var v,S;if(!t||t.length===0)return null;const i=Math.max(...t.map(R=>R.value)),s=Math.min(...t.map(R=>R.value)),o=i-s||1,l=i+o*.15,u=Math.max(0,s-o*.15),d=l-u||1,f=t.map((R,b)=>({x:t.length===1?50:b/(t.length-1)*100,y:100-(R.value-u)/d*100,value:R.value,label:R.label})),g=`M ${f.map(R=>`${R.x},${R.y}`).join(" L ")}`;return m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800",children:[m.jsxs("div",{className:"flex justify-between items-end mb-8",children:[m.jsx("h3",{className:"font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100",children:e}),t.length>0&&m.jsxs("span",{className:`text-base font-bold ${n} bg-current/10 px-3 py-1 rounded-lg`,children:[t[t.length-1].value," ",r]})]}),m.jsxs("div",{className:"h-40 md:h-56 w-full relative mb-4",children:[t.length>1?m.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full overflow-visible",preserveAspectRatio:"none",children:[m.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"0",stroke:"currentColor",strokeDasharray:"2 2",className:"text-gray-200 dark:text-gray-800",strokeWidth:"0.5",vectorEffect:"non-scaling-stroke"}),m.jsx("line",{x1:"0",y1:"50",x2:"100",y2:"50",stroke:"currentColor",strokeDasharray:"2 2",className:"text-gray-200 dark:text-gray-800",strokeWidth:"0.5",vectorEffect:"non-scaling-stroke"}),m.jsx("line",{x1:"0",y1:"100",x2:"100",y2:"100",stroke:"currentColor",strokeDasharray:"2 2",className:"text-gray-200 dark:text-gray-800",strokeWidth:"0.5",vectorEffect:"non-scaling-stroke"}),m.jsx("path",{d:g,fill:"none",className:n,stroke:"currentColor",strokeWidth:"3",vectorEffect:"non-scaling-stroke",strokeLinejoin:"round"}),f.map((R,b)=>m.jsx("circle",{cx:R.x,cy:R.y,r:"5",fill:"currentColor",className:`text-white dark:text-gray-900 stroke-current ${n}`,strokeWidth:"3",vectorEffect:"non-scaling-stroke"},b))]}):m.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center text-gray-400",children:[m.jsx("div",{className:`w-4 h-4 rounded-full bg-current ${n} mb-3`}),m.jsx("span",{className:"text-sm",children:"Только 1 запись"})]}),m.jsxs("div",{className:"absolute -bottom-8 left-0 right-0 flex justify-between text-xs md:text-sm text-gray-400 font-medium",children:[m.jsx("span",{children:(v=t[0])==null?void 0:v.label}),t.length>1&&m.jsx("span",{children:(S=t[t.length-1])==null?void 0:S.label})]})]})]})}function D2({workout:t,setWorkout:e,exercises:n,weightUnit:r,onFinish:i,onCancel:s}){const[o,l]=ye.useState(!1),u=R=>{const[b,D,T]=R.target.value.split("-");if(b&&D&&T){const _=new Date(t.startTime);_.setFullYear(b,D-1,T),e({...t,startTime:_.getTime()})}},d=R=>{e({...t,exercises:[...t.exercises,{id:Math.random().toString(),exerciseId:R.id,name:R.name,sets:[{id:Math.random().toString(),weight:"",reps:"",completed:!1}]}]}),l(!1)},f=(R,b,D,T)=>e({...t,exercises:t.exercises.map(_=>_.id===R?{..._,sets:_.sets.map(k=>k.id===b?{...k,[D]:T}:k)}:_)}),g=R=>e({...t,exercises:t.exercises.map(b=>{var D,T;return b.id===R?{...b,sets:[...b.sets,{id:Math.random().toString(),weight:((D=b.sets[b.sets.length-1])==null?void 0:D.weight)||"",reps:((T=b.sets[b.sets.length-1])==null?void 0:T.reps)||"",completed:!1}]}:b})}),v=(R,b)=>e({...t,exercises:t.exercises.map(D=>D.id===R?{...D,sets:D.sets.map(T=>T.id===b?{...T,completed:!T.completed}:T)}:D)}),S=R=>e({...t,exercises:t.exercises.filter(b=>b.id!==R)});return m.jsx("div",{className:"fixed inset-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center bg-[#f2f2f7] dark:bg-gray-950 md:bg-black/50 md:dark:bg-black/70 md:backdrop-blur-sm animate-in fade-in duration-200",children:m.jsxs("div",{className:"flex-1 md:flex-none w-full h-full md:h-[90vh] md:max-w-3xl bg-[#f2f2f7] dark:bg-gray-950 md:rounded-[32px] md:shadow-2xl md:border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden relative animate-in slide-in-from-bottom-10 md:zoom-in-95",children:[m.jsxs("div",{className:"bg-white dark:bg-gray-900 px-4 md:px-8 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center shadow-sm z-10",children:[m.jsx("button",{onClick:s,className:"text-gray-500 dark:text-gray-400 font-medium md:text-lg hover:text-gray-900 dark:hover:text-white transition-colors",children:"Отменить"}),m.jsx("h2",{className:"text-lg md:text-xl font-bold dark:text-white",children:"Тренировка"}),m.jsx("button",{onClick:i,className:"text-blue-500 font-semibold bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 md:py-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors",children:"Завершить"})]}),m.jsxs("div",{className:"bg-white dark:bg-gray-900 px-4 md:px-8 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center z-10 shadow-sm",children:[m.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[m.jsx(Av,{size:20,className:"mr-3"}),m.jsx("span",{className:"font-medium text-base",children:"Дата"})]}),m.jsx("input",{type:"date",value:new Date(t.startTime-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),onChange:u,className:"bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-semibold outline-none text-blue-600 dark:text-blue-400 cursor-pointer"})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8",children:[t.exercises.map(R=>m.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",children:[m.jsxs("div",{className:"p-4 md:p-5 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800",children:[m.jsx("h3",{className:"font-semibold text-blue-600 dark:text-blue-400 md:text-lg",children:R.name}),m.jsx("button",{onClick:()=>S(R.id),className:"text-red-400 hover:text-red-500 p-2 bg-red-50 dark:bg-red-900/20 rounded-full transition-colors",children:m.jsx(Hh,{size:18})})]}),m.jsxs("div",{className:"p-3 md:p-5",children:[m.jsxs("div",{className:"grid grid-cols-4 gap-2 md:gap-4 mb-3 text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider text-center",children:[m.jsx("div",{children:"Сет"}),m.jsxs("div",{children:["Вес (",r,")"]}),m.jsx("div",{children:"Повт"}),m.jsx("div",{children:"✓"})]}),R.sets.map((b,D)=>m.jsxs("div",{className:`grid grid-cols-4 gap-2 md:gap-4 items-center mb-2 md:mb-3 p-1 md:p-2 rounded-2xl transition-colors ${b.completed?"bg-green-50/50 dark:bg-green-900/20":""}`,children:[m.jsx("div",{className:"text-center font-bold text-gray-500 dark:text-gray-400",children:D+1}),m.jsx("div",{children:m.jsx("input",{type:"number",value:b.weight,onChange:T=>f(R.id,b.id,"weight",T.target.value),disabled:b.completed,className:"w-full bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded-xl text-center font-bold outline-none focus:ring-2 focus:ring-blue-300 dark:text-white disabled:opacity-50",placeholder:"-"})}),m.jsx("div",{children:m.jsx("input",{type:"number",value:b.reps,onChange:T=>f(R.id,b.id,"reps",T.target.value),disabled:b.completed,className:"w-full bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded-xl text-center font-bold outline-none focus:ring-2 focus:ring-blue-300 dark:text-white disabled:opacity-50",placeholder:"-"})}),m.jsx("div",{className:"flex justify-center",children:m.jsx("button",{onClick:()=>v(R.id,b.id),className:`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all ${b.completed?"bg-green-500 text-white shadow-md":"bg-gray-200 dark:bg-gray-700 text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"}`,children:m.jsx(dI,{size:20,strokeWidth:b.completed?3:2})})})]},b.id)),m.jsxs("button",{onClick:()=>g(R.id),className:"w-full mt-4 py-3 md:py-4 text-sm md:text-base font-bold text-blue-500 dark:text-blue-400 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-gray-800 rounded-2xl transition-colors",children:[m.jsx(Rl,{size:20,className:"mr-2"})," Добавить подход"]})]})]},R.id)),m.jsxs("button",{onClick:()=>l(!0),className:"w-full py-5 md:py-6 border-2 border-dashed border-blue-200 dark:border-blue-900/50 text-blue-500 dark:text-blue-400 md:text-lg font-bold rounded-3xl flex items-center justify-center bg-blue-50/30 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all",children:[m.jsx(Rl,{size:24,className:"mr-3"})," Добавить упражнение"]})]}),o&&m.jsxs("div",{className:"absolute inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col animate-in slide-in-from-bottom-10",children:[m.jsxs("div",{className:"px-4 md:px-8 py-5 md:py-6 border-b border-gray-100 dark:border-gray-800 flex items-center shadow-sm",children:[m.jsx("button",{onClick:()=>l(!1),className:"p-2 -ml-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors",children:m.jsx(qh,{size:28})}),m.jsx("h3",{className:"text-xl md:text-2xl font-bold ml-3 dark:text-white",children:"Выбрать упражнение"})]}),m.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 space-y-3",children:n.map(R=>m.jsxs("button",{onClick:()=>d(R),className:"w-full flex items-center justify-between p-5 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-3xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left border border-transparent hover:border-gray-200 dark:hover:border-gray-700",children:[m.jsxs("div",{children:[m.jsx("div",{className:"font-bold md:text-lg text-gray-900 dark:text-white",children:R.name}),m.jsx("div",{className:"text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1",children:R.bodyPart})]}),m.jsx(Ga,{className:"text-gray-300 dark:text-gray-600",size:24})]},R.id))})]})]})})}function V2({exercises:t,onClose:e,onAdd:n,onEdit:r,onDelete:i}){return m.jsx("div",{className:"fixed inset-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center bg-[#f2f2f7] dark:bg-gray-950 md:bg-black/50 md:dark:bg-black/70 md:backdrop-blur-sm animate-in fade-in duration-200",children:m.jsxs("div",{className:"flex-1 md:flex-none w-full h-full md:h-[80vh] md:max-w-2xl bg-[#f2f2f7] dark:bg-gray-950 md:rounded-[32px] md:shadow-2xl md:border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden relative animate-in slide-in-from-right-full md:slide-in-from-bottom-10 md:zoom-in-95",children:[m.jsxs("div",{className:"bg-white dark:bg-gray-900 px-4 md:px-8 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between shadow-sm",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx("button",{onClick:e,className:"p-2 -ml-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-colors mr-3",children:m.jsx(Wh,{size:28})}),m.jsx("h2",{className:"text-xl md:text-2xl font-bold dark:text-white",children:"База упражнений"})]}),m.jsx("button",{onClick:n,className:"text-white p-2.5 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition-colors",children:m.jsx(Rl,{size:24,strokeWidth:2.5})})]}),m.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 space-y-3",children:t.map(s=>m.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"font-bold md:text-lg text-gray-900 dark:text-white",children:s.name}),m.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:s.bodyPart})]}),m.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[m.jsx("button",{onClick:()=>r(s),className:"p-3 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors",children:m.jsx(Rv,{size:20})}),m.jsx("button",{onClick:()=>i(s.id),className:"p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-colors",children:m.jsx(Hh,{size:20})})]})]},s.id))})]})})}function O2({initialData:t,onSave:e,onClose:n}){const[r,i]=ye.useState((t==null?void 0:t.name)||""),[s,o]=ye.useState((t==null?void 0:t.bodyPart)||"Грудь"),l=!!(t!=null&&t.id),u=["Грудь","Спина","Ноги","Плечи","Бицепс","Трицепс","Пресс","Кардио"];return m.jsx("div",{className:"fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center p-4 md:p-0 animate-in fade-in duration-200",children:m.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-sm md:max-w-md rounded-[32px] p-6 md:p-8 animate-in slide-in-from-bottom-10 md:zoom-in-95 shadow-2xl border border-gray-100 dark:border-gray-800",children:[m.jsxs("div",{className:"flex justify-between items-center mb-8",children:[m.jsx("h2",{className:"text-2xl font-bold dark:text-white",children:l?"Редактировать":"Новое упражнение"}),m.jsx("button",{onClick:n,className:"bg-gray-100 dark:bg-gray-800 p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",children:m.jsx(qh,{size:20})})]}),m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 ml-1",children:"Название"}),m.jsx("input",{type:"text",value:r,onChange:d=>i(d.target.value),placeholder:"Например: Выпады с гантелями",className:"w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-900 dark:text-white font-medium text-lg"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 ml-1",children:"Группа мышц"}),m.jsx("select",{value:s,onChange:d=>o(d.target.value),className:"w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-900 dark:text-white font-medium text-lg appearance-none cursor-pointer",children:u.map(d=>m.jsx("option",{value:d,children:d},d))})]}),m.jsx("button",{onClick:()=>r.trim()&&e({id:t==null?void 0:t.id,name:r,bodyPart:s}),disabled:!r.trim(),className:"w-full mt-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 dark:disabled:bg-blue-900/50 disabled:cursor-not-allowed text-white font-bold py-4 text-lg rounded-2xl shadow-md transition-all active:scale-[0.98]",children:"Сохранить"})]})]})})}Sv(document.getElementById("root")).render(m.jsx(ye.StrictMode,{children:m.jsx(b2,{})}));
