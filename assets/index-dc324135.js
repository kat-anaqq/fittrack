(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var W_={exports:{}},Lu={},H_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),QT=Symbol.for("react.portal"),YT=Symbol.for("react.fragment"),JT=Symbol.for("react.strict_mode"),XT=Symbol.for("react.profiler"),ZT=Symbol.for("react.provider"),e1=Symbol.for("react.context"),t1=Symbol.for("react.forward_ref"),n1=Symbol.for("react.suspense"),r1=Symbol.for("react.memo"),i1=Symbol.for("react.lazy"),qm=Symbol.iterator;function s1(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var Q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y_=Object.assign,J_={};function bs(t,e,n){this.props=t,this.context=e,this.refs=J_,this.updater=n||Q_}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X_(){}X_.prototype=bs.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=J_,this.updater=n||Q_}var Zd=Xd.prototype=new X_;Zd.constructor=Xd;Y_(Zd,bs.prototype);Zd.isPureReactComponent=!0;var Km=Array.isArray,Z_=Object.prototype.hasOwnProperty,ef={current:null},ev={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Z_.call(e,r)&&!ev.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ma,type:t,key:s,ref:o,props:i,_owner:ef.current}}function o1(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gm=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case QT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bc(o,0):r,Km(i)?(n="",t!=null&&(n=t.replace(Gm,"$&/")+"/"),wl(i,e,n,"",function(c){return c})):i!=null&&(tf(i)&&(i=o1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Km(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Bc(s,l);o+=wl(s,e,n,u,i)}else if(u=s1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Bc(s,l++),o+=wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function l1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Il={transition:null},u1={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Il,ReactCurrentOwner:ef};function nv(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=bs;ie.Fragment=YT;ie.Profiler=XT;ie.PureComponent=Xd;ie.StrictMode=JT;ie.Suspense=n1;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u1;ie.act=nv;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Y_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ef.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Z_.call(e,u)&&!ev.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ma,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:e1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZT,_context:t},t.Consumer=t};ie.createElement=tv;ie.createFactory=function(t){var e=tv.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:t1,render:t}};ie.isValidElement=tf;ie.lazy=function(t){return{$$typeof:i1,_payload:{_status:-1,_result:t},_init:l1}};ie.memo=function(t,e){return{$$typeof:r1,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};ie.unstable_act=nv;ie.useCallback=function(t,e){return vt.current.useCallback(t,e)};ie.useContext=function(t){return vt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return vt.current.useEffect(t,e)};ie.useId=function(){return vt.current.useId()};ie.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return vt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ie.useRef=function(t){return vt.current.useRef(t)};ie.useState=function(t){return vt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return vt.current.useTransition()};ie.version="18.3.1";H_.exports=ie;var ye=H_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1=ye,h1=Symbol.for("react.element"),d1=Symbol.for("react.fragment"),f1=Object.prototype.hasOwnProperty,p1=c1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m1={key:!0,ref:!0,__self:!0,__source:!0};function rv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)f1.call(e,r)&&!m1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:h1,type:t,key:s,ref:o,props:i,_owner:p1.current}}Lu.Fragment=d1;Lu.jsx=rv;Lu.jsxs=rv;W_.exports=Lu;var x=W_.exports;var iv={exports:{}},jt={},sv={exports:{}},ov={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Z=B.length;B.push(Y);e:for(;0<Z;){var ve=Z-1>>>1,he=B[ve];if(0<i(he,Y))B[ve]=Y,B[Z]=he,Z=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],Z=B.pop();if(Z!==Y){B[0]=Z;e:for(var ve=0,he=B.length,q=he>>>1;ve<q;){var re=2*(ve+1)-1,te=B[re],be=re+1,Oe=B[be];if(0>i(te,Z))be<he&&0>i(Oe,te)?(B[ve]=Oe,B[be]=Z,ve=be):(B[ve]=te,B[re]=Z,ve=re);else if(be<he&&0>i(Oe,Z))B[ve]=Oe,B[be]=Z,ve=be;else break e}}return Y}function i(B,Y){var Z=B.sortIndex-Y.sortIndex;return Z!==0?Z:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,E=!1,C=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function V(B){if(N=!1,S(B),!C)if(n(u)!==null)C=!0,zt(F);else{var Y=n(c);Y!==null&&Zt(V,Y.startTime-B)}}function F(B,Y){C=!1,N&&(N=!1,A(y),y=-1),E=!0;var Z=g;try{for(S(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||B&&!k());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,g=p.priorityLevel;var he=ve(p.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(u)&&r(u),S(Y)}else r(u);p=n(u)}if(p!==null)var q=!0;else{var re=n(c);re!==null&&Zt(V,re.startTime-Y),q=!1}return q}finally{p=null,g=Z,E=!1}}var L=!1,v=null,y=-1,w=5,T=-1;function k(){return!(t.unstable_now()-T<w)}function P(){if(v!==null){var B=t.unstable_now();T=B;var Y=!0;try{Y=v(!0,B)}finally{Y?I():(L=!1,v=null)}}else L=!1}var I;if(typeof _=="function")I=function(){_(P)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,Sn=ut.port2;ut.port1.onmessage=P,I=function(){Sn.postMessage(null)}}else I=function(){O(P,0)};function zt(B){v=B,L||(L=!0,I())}function Zt(B,Y){y=O(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||E||(C=!0,zt(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var Z=g;g=Y;try{return B()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return Y()}finally{g=Z}},t.unstable_scheduleCallback=function(B,Y,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,B){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,B={id:f++,callback:Y,priorityLevel:B,startTime:Z,expirationTime:he,sortIndex:-1},Z>ve?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(N?(A(y),y=-1):N=!0,Zt(V,Z-ve))):(B.sortIndex=he,e(u,B),C||E||(C=!0,zt(F))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var Y=g;return function(){var Z=g;g=Y;try{return B.apply(this,arguments)}finally{g=Z}}}})(ov);sv.exports=ov;var g1=sv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y1=ye,Lt=g1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var av=new Set,Uo={};function Ai(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(Uo[t]=e,t=0;t<e.length;t++)av.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,_1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Hm={};function v1(t){return bh.call(Hm,t)?!0:bh.call(Wm,t)?!1:_1.test(t)?Hm[t]=!0:(Wm[t]=!0,!1)}function w1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I1(t,e,n,r){if(e===null||typeof e>"u"||w1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nf=/[\-:]([a-z])/g;function rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nf,rf);et[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nf,rf);et[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nf,rf);et[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sf(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I1(e,n,i,r)&&(n=null),r||i===null?v1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),Nh=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),cv=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,$c;function mo(t){if($c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+t}var qc=!1;function Kc(t,e){if(!t||qc)return"";qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function E1(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=Kc(t.type,!1),t;case 11:return t=Kc(t.type.render,!1),t;case 1:return t=Kc(t.type,!0),t;default:return""}}function Oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Ki:return"Portal";case Nh:return"Profiler";case of:return"StrictMode";case Dh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uv:return(t.displayName||"Context")+".Consumer";case lv:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lf:return e=t.displayName||null,e!==null?e:Oh(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Oh(t(e))}catch{}}return null}function T1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oh(e);case 8:return e===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S1(t){var e=hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=S1(t))}function dv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mh(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fv(t,e){e=e.checked,e!=null&&sf(t,"checked",e,!1)}function Lh(t,e){fv(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fh(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fh(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(go(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function pv(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A1=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){A1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function _v(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var x1=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zh(t,e){if(e){if(x1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,ss=null,os=null;function eg(t){if(t=_a(t)){if(typeof qh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Bu(e),qh(t.stateNode,t.type,e))}}function vv(t){ss?os?os.push(t):os=[t]:ss=t}function wv(){if(ss){var t=ss,e=os;if(os=ss=null,eg(t),e)for(t=0;t<e.length;t++)eg(e[t])}}function Iv(t,e){return t(e)}function Ev(){}var Gc=!1;function Tv(t,e,n){if(Gc)return t(e,n);Gc=!0;try{return Iv(t,e,n)}finally{Gc=!1,(ss!==null||os!==null)&&(Ev(),wv())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Kh=!1;if(jn)try{var to={};Object.defineProperty(to,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Kh=!1}function k1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ao=!1,Gl=null,Wl=!1,Gh=null,R1={onError:function(t){Ao=!0,Gl=t}};function P1(t,e,n,r,i,s,o,l,u){Ao=!1,Gl=null,k1.apply(R1,arguments)}function C1(t,e,n,r,i,s,o,l,u){if(P1.apply(this,arguments),Ao){if(Ao){var c=Gl;Ao=!1,Gl=null}else throw Error(U(198));Wl||(Wl=!0,Gh=c)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tg(t){if(xi(t)!==t)throw Error(U(188))}function b1(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tg(i),t;if(s===r)return tg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Av(t){return t=b1(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var kv=Lt.unstable_scheduleCallback,ng=Lt.unstable_cancelCallback,N1=Lt.unstable_shouldYield,D1=Lt.unstable_requestPaint,Me=Lt.unstable_now,V1=Lt.unstable_getCurrentPriorityLevel,cf=Lt.unstable_ImmediatePriority,Rv=Lt.unstable_UserBlockingPriority,Hl=Lt.unstable_NormalPriority,O1=Lt.unstable_LowPriority,Pv=Lt.unstable_IdlePriority,Fu=null,_n=null;function M1(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:j1,L1=Math.log,F1=Math.LN2;function j1(t){return t>>>=0,t===0?32:31-(L1(t)/F1|0)|0}var Za=64,el=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=yo(l):(s&=o,s!==0&&(r=yo(s)))}else o=n&~i,o!==0?r=yo(o):s!==0&&(r=yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function U1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=U1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cv(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function Wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function B1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nv,df,Dv,Vv,Ov,Hh=!1,tl=[],yr=null,_r=null,vr=null,$o=new Map,qo=new Map,ar=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function no(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_a(e),e!==null&&df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function q1(t,e,n,r,i){switch(e){case"focusin":return yr=no(yr,t,e,n,r,i),!0;case"dragenter":return _r=no(_r,t,e,n,r,i),!0;case"mouseover":return vr=no(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $o.set(s,no($o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qo.set(s,no(qo.get(s)||null,t,e,n,r,i)),!0}return!1}function Mv(t){var e=ti(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=Sv(n),e!==null){t.blockedOn=e,Ov(t.priority,function(){Dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$h=r,n.target.dispatchEvent(r),$h=null}else return e=_a(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function ig(t,e,n){El(t)&&n.delete(e)}function K1(){Hh=!1,yr!==null&&El(yr)&&(yr=null),_r!==null&&El(_r)&&(_r=null),vr!==null&&El(vr)&&(vr=null),$o.forEach(ig),qo.forEach(ig)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,Hh||(Hh=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,K1)))}function Ko(t){function e(i){return ro(i,t)}if(0<tl.length){ro(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&ro(yr,t),_r!==null&&ro(_r,t),vr!==null&&ro(vr,t),$o.forEach(e),qo.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Mv(n),n.blockedOn===null&&ar.shift()}var as=Hn.ReactCurrentBatchConfig,Yl=!0;function G1(t,e,n,r){var i=fe,s=as.transition;as.transition=null;try{fe=1,ff(t,e,n,r)}finally{fe=i,as.transition=s}}function W1(t,e,n,r){var i=fe,s=as.transition;as.transition=null;try{fe=4,ff(t,e,n,r)}finally{fe=i,as.transition=s}}function ff(t,e,n,r){if(Yl){var i=Qh(t,e,n,r);if(i===null)rh(t,e,r,Jl,n),rg(t,r);else if(q1(i,t,e,n,r))r.stopPropagation();else if(rg(t,r),e&4&&-1<$1.indexOf(t)){for(;i!==null;){var s=_a(i);if(s!==null&&Nv(s),s=Qh(t,e,n,r),s===null&&rh(t,e,r,Jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rh(t,e,r,null,n)}}var Jl=null;function Qh(t,e,n,r){if(Jl=null,t=uf(r),t=ti(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function Lv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V1()){case cf:return 1;case Rv:return 4;case Hl:case O1:return 16;case Pv:return 536870912;default:return 16}default:return 16}}var pr=null,pf=null,Tl=null;function Fv(){if(Tl)return Tl;var t,e=pf,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function sg(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:sg,this.isPropagationStopped=sg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=Ut(Ns),ya=Ce({},Ns,{view:0,detail:0}),H1=Ut(ya),Hc,Qc,io,ju=Ce({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Hc=t.screenX-io.screenX,Qc=t.screenY-io.screenY):Qc=Hc=0,io=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),og=Ut(ju),Q1=Ce({},ju,{dataTransfer:0}),Y1=Ut(Q1),J1=Ce({},ya,{relatedTarget:0}),Yc=Ut(J1),X1=Ce({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Z1=Ut(X1),eS=Ce({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tS=Ut(eS),nS=Ce({},Ns,{data:0}),ag=Ut(nS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sS[t])?!!e[t]:!1}function gf(){return oS}var aS=Ce({},ya,{key:function(t){if(t.key){var e=rS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lS=Ut(aS),uS=Ce({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lg=Ut(uS),cS=Ce({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),hS=Ut(cS),dS=Ce({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Ut(dS),pS=Ce({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mS=Ut(pS),gS=[9,13,27,32],yf=jn&&"CompositionEvent"in window,xo=null;jn&&"documentMode"in document&&(xo=document.documentMode);var yS=jn&&"TextEvent"in window&&!xo,jv=jn&&(!yf||xo&&8<xo&&11>=xo),ug=String.fromCharCode(32),cg=!1;function Uv(t,e){switch(t){case"keyup":return gS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function _S(t,e){switch(t){case"compositionend":return zv(e);case"keypress":return e.which!==32?null:(cg=!0,ug);case"textInput":return t=e.data,t===ug&&cg?null:t;default:return null}}function vS(t,e){if(Wi)return t==="compositionend"||!yf&&Uv(t,e)?(t=Fv(),Tl=pf=pr=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jv&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wS[t.type]:e==="textarea"}function Bv(t,e,n,r){vv(r),e=Xl(e,"onChange"),0<e.length&&(n=new mf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ko=null,Go=null;function IS(t){Zv(t,0)}function Uu(t){var e=Yi(t);if(dv(e))return t}function ES(t,e){if(t==="change")return e}var $v=!1;if(jn){var Jc;if(jn){var Xc="oninput"in document;if(!Xc){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Xc=typeof dg.oninput=="function"}Jc=Xc}else Jc=!1;$v=Jc&&(!document.documentMode||9<document.documentMode)}function fg(){ko&&(ko.detachEvent("onpropertychange",qv),Go=ko=null)}function qv(t){if(t.propertyName==="value"&&Uu(Go)){var e=[];Bv(e,Go,t,uf(t)),Tv(IS,e)}}function TS(t,e,n){t==="focusin"?(fg(),ko=e,Go=n,ko.attachEvent("onpropertychange",qv)):t==="focusout"&&fg()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(Go)}function AS(t,e){if(t==="click")return Uu(e)}function xS(t,e){if(t==="input"||t==="change")return Uu(e)}function kS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:kS;function Wo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bh.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function pg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mg(t,e){var n=pg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pg(n)}}function Kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function _f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RS(t){var e=Gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kv(n.ownerDocument.documentElement,n)){if(r!==null&&_f(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mg(n,s);var o=mg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PS=jn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Yh=null,Ro=null,Jh=!1;function gg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jh||Hi==null||Hi!==Kl(r)||(r=Hi,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Wo(Ro,r)||(Ro=r,r=Xl(Yh,"onSelect"),0<r.length&&(e=new mf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Zc={},Wv={};jn&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function zu(t){if(Zc[t])return Zc[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wv)return Zc[t]=e[n];return t}var Hv=zu("animationend"),Qv=zu("animationiteration"),Yv=zu("animationstart"),Jv=zu("transitionend"),Xv=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Xv.set(t,e),Ai(e,[t])}for(var eh=0;eh<yg.length;eh++){var th=yg[eh],CS=th.toLowerCase(),bS=th[0].toUpperCase()+th.slice(1);Mr(CS,"on"+bS)}Mr(Hv,"onAnimationEnd");Mr(Qv,"onAnimationIteration");Mr(Yv,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(Jv,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function _g(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,C1(r,e,void 0,t),t.currentTarget=null}function Zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;_g(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;_g(i,l,c),s=u}}}if(Wl)throw t=Gh,Wl=!1,Gh=null,t}function Ie(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var r=t+"__bubble";n.has(r)||(e0(e,t,2,!1),n.add(r))}function nh(t,e,n){var r=0;e&&(r|=4),e0(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[il]){t[il]=!0,av.forEach(function(n){n!=="selectionchange"&&(NS.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,nh("selectionchange",!1,e))}}function e0(t,e,n,r){switch(Lv(e)){case 1:var i=G1;break;case 4:i=W1;break;default:i=ff}n=i.bind(null,e,n,t),i=void 0,!Kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Tv(function(){var c=s,f=uf(n),p=[];e:{var g=Xv.get(t);if(g!==void 0){var E=mf,C=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":E=lS;break;case"focusin":C="focus",E=Yc;break;case"focusout":C="blur",E=Yc;break;case"beforeblur":case"afterblur":E=Yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=hS;break;case Hv:case Qv:case Yv:E=Z1;break;case Jv:E=fS;break;case"scroll":E=H1;break;case"wheel":E=mS;break;case"copy":case"cut":case"paste":E=tS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=lg}var N=(e&4)!==0,O=!N&&t==="scroll",A=N?g!==null?g+"Capture":null:g;N=[];for(var _=c,S;_!==null;){S=_;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,A!==null&&(V=Bo(_,A),V!=null&&N.push(Qo(_,V,S)))),O)break;_=_.return}0<N.length&&(g=new E(g,C,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==$h&&(C=n.relatedTarget||n.fromElement)&&(ti(C)||C[Un]))break e;if((E||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,E?(C=n.relatedTarget||n.toElement,E=c,C=C?ti(C):null,C!==null&&(O=xi(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(E=null,C=c),E!==C)){if(N=og,V="onMouseLeave",A="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=lg,V="onPointerLeave",A="onPointerEnter",_="pointer"),O=E==null?g:Yi(E),S=C==null?g:Yi(C),g=new N(V,_+"leave",E,n,f),g.target=O,g.relatedTarget=S,V=null,ti(f)===c&&(N=new N(A,_+"enter",C,n,f),N.target=S,N.relatedTarget=O,V=N),O=V,E&&C)t:{for(N=E,A=C,_=0,S=N;S;S=Oi(S))_++;for(S=0,V=A;V;V=Oi(V))S++;for(;0<_-S;)N=Oi(N),_--;for(;0<S-_;)A=Oi(A),S--;for(;_--;){if(N===A||A!==null&&N===A.alternate)break t;N=Oi(N),A=Oi(A)}N=null}else N=null;E!==null&&vg(p,g,E,N,!1),C!==null&&O!==null&&vg(p,O,C,N,!0)}}e:{if(g=c?Yi(c):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var F=ES;else if(hg(g))if($v)F=xS;else{F=SS;var L=TS}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=AS);if(F&&(F=F(t,c))){Bv(p,F,n,f);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Fh(g,"number",g.value)}switch(L=c?Yi(c):window,t){case"focusin":(hg(L)||L.contentEditable==="true")&&(Hi=L,Yh=c,Ro=null);break;case"focusout":Ro=Yh=Hi=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,gg(p,n,f);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":gg(p,n,f)}var v;if(yf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Wi?Uv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(jv&&n.locale!=="ko"&&(Wi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Wi&&(v=Fv()):(pr=f,pf="value"in pr?pr.value:pr.textContent,Wi=!0)),L=Xl(c,y),0<L.length&&(y=new ag(y,t,null,n,f),p.push({event:y,listeners:L}),v?y.data=v:(v=zv(n),v!==null&&(y.data=v)))),(v=yS?_S(t,n):vS(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(f=new ag("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=v))}Zv(p,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(t,n),s!=null&&r.unshift(Qo(t,s,i)),s=Bo(t,e),s!=null&&r.push(Qo(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Bo(n,s),u!=null&&o.unshift(Qo(n,u,l))):i||(u=Bo(n,s),u!=null&&o.push(Qo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(DS,`
`).replace(VS,"")}function sl(t,e,n){if(e=wg(e),wg(t)!==e&&n)throw Error(U(425))}function Zl(){}var Xh=null,Zh=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(LS)}:td;function LS(t){setTimeout(function(){throw t})}function ih(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ko(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ds,Yo="__reactProps$"+Ds,Un="__reactContainer$"+Ds,nd="__reactEvents$"+Ds,FS="__reactListeners$"+Ds,jS="__reactHandles$"+Ds;function ti(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Eg(t);t!==null;){if(n=t[pn])return n;t=Eg(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[pn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Bu(t){return t[Yo]||null}var rd=[],Ji=-1;function Lr(t){return{current:t}}function Ee(t){0>Ji||(t.current=rd[Ji],rd[Ji]=null,Ji--)}function _e(t,e){Ji++,rd[Ji]=t.current,t.current=e}var Nr={},lt=Lr(Nr),xt=Lr(!1),ui=Nr;function ms(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function eu(){Ee(xt),Ee(lt)}function Tg(t,e,n){if(lt.current!==Nr)throw Error(U(168));_e(lt,e),_e(xt,n)}function t0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,T1(t)||"Unknown",i));return Ce({},n,r)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ui=lt.current,_e(lt,t),_e(xt,xt.current),!0}function Sg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=t0(t,e,ui),r.__reactInternalMemoizedMergedChildContext=t,Ee(xt),Ee(lt),_e(lt,t)):Ee(xt),_e(xt,n)}var Cn=null,$u=!1,sh=!1;function n0(t){Cn===null?Cn=[t]:Cn.push(t)}function US(t){$u=!0,n0(t)}function Fr(){if(!sh&&Cn!==null){sh=!0;var t=0,e=fe;try{var n=Cn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,$u=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),kv(cf,Fr),i}finally{fe=e,sh=!1}}return null}var Xi=[],Zi=0,nu=null,ru=0,$t=[],qt=0,ci=null,bn=1,Nn="";function Wr(t,e){Xi[Zi++]=ru,Xi[Zi++]=nu,nu=t,ru=e}function r0(t,e,n){$t[qt++]=bn,$t[qt++]=Nn,$t[qt++]=ci,ci=t;var r=bn;t=Nn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-on(e)+i|n<<i|r,Nn=s+t}else bn=1<<s|n<<i|r,Nn=t}function vf(t){t.return!==null&&(Wr(t,1),r0(t,1,0))}function wf(t){for(;t===nu;)nu=Xi[--Zi],Xi[Zi]=null,ru=Xi[--Zi],Xi[Zi]=null;for(;t===ci;)ci=$t[--qt],$t[qt]=null,Nn=$t[--qt],$t[qt]=null,bn=$t[--qt],$t[qt]=null}var Vt=null,Nt=null,Se=!1,sn=null;function i0(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ag(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Nt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ci!==null?{id:bn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Nt=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(Se){var e=Nt;if(e){var n=e;if(!Ag(t,e)){if(id(t))throw Error(U(418));e=wr(n.nextSibling);var r=Vt;e&&Ag(t,e)?i0(r,n):(t.flags=t.flags&-4097|2,Se=!1,Vt=t)}}else{if(id(t))throw Error(U(418));t.flags=t.flags&-4097|2,Se=!1,Vt=t}}}function xg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function ol(t){if(t!==Vt)return!1;if(!Se)return xg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=Nt)){if(id(t))throw s0(),Error(U(418));for(;e;)i0(t,e),e=wr(e.nextSibling)}if(xg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Vt?wr(t.stateNode.nextSibling):null;return!0}function s0(){for(var t=Nt;t;)t=wr(t.nextSibling)}function gs(){Nt=Vt=null,Se=!1}function If(t){sn===null?sn=[t]:sn.push(t)}var zS=Hn.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kg(t){var e=t._init;return e(t._payload)}function o0(t){function e(A,_){if(t){var S=A.deletions;S===null?(A.deletions=[_],A.flags|=16):S.push(_)}}function n(A,_){if(!t)return null;for(;_!==null;)e(A,_),_=_.sibling;return null}function r(A,_){for(A=new Map;_!==null;)_.key!==null?A.set(_.key,_):A.set(_.index,_),_=_.sibling;return A}function i(A,_){return A=Sr(A,_),A.index=0,A.sibling=null,A}function s(A,_,S){return A.index=S,t?(S=A.alternate,S!==null?(S=S.index,S<_?(A.flags|=2,_):S):(A.flags|=2,_)):(A.flags|=1048576,_)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,_,S,V){return _===null||_.tag!==6?(_=dh(S,A.mode,V),_.return=A,_):(_=i(_,S),_.return=A,_)}function u(A,_,S,V){var F=S.type;return F===Gi?f(A,_,S.props.children,V,S.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===sr&&kg(F)===_.type)?(V=i(_,S.props),V.ref=so(A,_,S),V.return=A,V):(V=bl(S.type,S.key,S.props,null,A.mode,V),V.ref=so(A,_,S),V.return=A,V)}function c(A,_,S,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=fh(S,A.mode,V),_.return=A,_):(_=i(_,S.children||[]),_.return=A,_)}function f(A,_,S,V,F){return _===null||_.tag!==7?(_=oi(S,A.mode,V,F),_.return=A,_):(_=i(_,S),_.return=A,_)}function p(A,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=dh(""+_,A.mode,S),_.return=A,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:return S=bl(_.type,_.key,_.props,null,A.mode,S),S.ref=so(A,null,_),S.return=A,S;case Ki:return _=fh(_,A.mode,S),_.return=A,_;case sr:var V=_._init;return p(A,V(_._payload),S)}if(go(_)||eo(_))return _=oi(_,A.mode,S,null),_.return=A,_;al(A,_)}return null}function g(A,_,S,V){var F=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(A,_,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return S.key===F?u(A,_,S,V):null;case Ki:return S.key===F?c(A,_,S,V):null;case sr:return F=S._init,g(A,_,F(S._payload),V)}if(go(S)||eo(S))return F!==null?null:f(A,_,S,V,null);al(A,S)}return null}function E(A,_,S,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return A=A.get(S)||null,l(_,A,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ya:return A=A.get(V.key===null?S:V.key)||null,u(_,A,V,F);case Ki:return A=A.get(V.key===null?S:V.key)||null,c(_,A,V,F);case sr:var L=V._init;return E(A,_,S,L(V._payload),F)}if(go(V)||eo(V))return A=A.get(S)||null,f(_,A,V,F,null);al(_,V)}return null}function C(A,_,S,V){for(var F=null,L=null,v=_,y=_=0,w=null;v!==null&&y<S.length;y++){v.index>y?(w=v,v=null):w=v.sibling;var T=g(A,v,S[y],V);if(T===null){v===null&&(v=w);break}t&&v&&T.alternate===null&&e(A,v),_=s(T,_,y),L===null?F=T:L.sibling=T,L=T,v=w}if(y===S.length)return n(A,v),Se&&Wr(A,y),F;if(v===null){for(;y<S.length;y++)v=p(A,S[y],V),v!==null&&(_=s(v,_,y),L===null?F=v:L.sibling=v,L=v);return Se&&Wr(A,y),F}for(v=r(A,v);y<S.length;y++)w=E(v,A,y,S[y],V),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?y:w.key),_=s(w,_,y),L===null?F=w:L.sibling=w,L=w);return t&&v.forEach(function(k){return e(A,k)}),Se&&Wr(A,y),F}function N(A,_,S,V){var F=eo(S);if(typeof F!="function")throw Error(U(150));if(S=F.call(S),S==null)throw Error(U(151));for(var L=F=null,v=_,y=_=0,w=null,T=S.next();v!==null&&!T.done;y++,T=S.next()){v.index>y?(w=v,v=null):w=v.sibling;var k=g(A,v,T.value,V);if(k===null){v===null&&(v=w);break}t&&v&&k.alternate===null&&e(A,v),_=s(k,_,y),L===null?F=k:L.sibling=k,L=k,v=w}if(T.done)return n(A,v),Se&&Wr(A,y),F;if(v===null){for(;!T.done;y++,T=S.next())T=p(A,T.value,V),T!==null&&(_=s(T,_,y),L===null?F=T:L.sibling=T,L=T);return Se&&Wr(A,y),F}for(v=r(A,v);!T.done;y++,T=S.next())T=E(v,A,y,T.value,V),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),_=s(T,_,y),L===null?F=T:L.sibling=T,L=T);return t&&v.forEach(function(P){return e(A,P)}),Se&&Wr(A,y),F}function O(A,_,S,V){if(typeof S=="object"&&S!==null&&S.type===Gi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:e:{for(var F=S.key,L=_;L!==null;){if(L.key===F){if(F=S.type,F===Gi){if(L.tag===7){n(A,L.sibling),_=i(L,S.props.children),_.return=A,A=_;break e}}else if(L.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===sr&&kg(F)===L.type){n(A,L.sibling),_=i(L,S.props),_.ref=so(A,L,S),_.return=A,A=_;break e}n(A,L);break}else e(A,L);L=L.sibling}S.type===Gi?(_=oi(S.props.children,A.mode,V,S.key),_.return=A,A=_):(V=bl(S.type,S.key,S.props,null,A.mode,V),V.ref=so(A,_,S),V.return=A,A=V)}return o(A);case Ki:e:{for(L=S.key;_!==null;){if(_.key===L)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(A,_.sibling),_=i(_,S.children||[]),_.return=A,A=_;break e}else{n(A,_);break}else e(A,_);_=_.sibling}_=fh(S,A.mode,V),_.return=A,A=_}return o(A);case sr:return L=S._init,O(A,_,L(S._payload),V)}if(go(S))return C(A,_,S,V);if(eo(S))return N(A,_,S,V);al(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(A,_.sibling),_=i(_,S),_.return=A,A=_):(n(A,_),_=dh(S,A.mode,V),_.return=A,A=_),o(A)):n(A,_)}return O}var ys=o0(!0),a0=o0(!1),iu=Lr(null),su=null,es=null,Ef=null;function Tf(){Ef=es=su=null}function Sf(t){var e=iu.current;Ee(iu),t._currentValue=e}function od(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){su=t,Ef=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(su===null)throw Error(U(308));es=t,su.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ni=null;function Af(t){ni===null?ni=[t]:ni.push(t)}function l0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Af(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Af(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}function Rg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,E=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(g=e,E=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(E,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,g=typeof C=="function"?C.call(E,p,g):C,g==null)break e;p=Ce({},p,g);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else E={eventTime:E,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=E,u=p):f=f.next=E,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=p}}function Pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var va={},vn=Lr(va),Jo=Lr(va),Xo=Lr(va);function ri(t){if(t===va)throw Error(U(174));return t}function kf(t,e){switch(_e(Xo,e),_e(Jo,t),_e(vn,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uh(e,t)}Ee(vn),_e(vn,e)}function _s(){Ee(vn),Ee(Jo),Ee(Xo)}function c0(t){ri(Xo.current);var e=ri(vn.current),n=Uh(e,t.type);e!==n&&(_e(Jo,t),_e(vn,n))}function Rf(t){Jo.current===t&&(Ee(vn),Ee(Jo))}var xe=Lr(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function Pf(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var xl=Hn.ReactCurrentDispatcher,ah=Hn.ReactCurrentBatchConfig,hi=0,Re=null,Ue=null,Ke=null,lu=!1,Po=!1,Zo=0,BS=0;function it(){throw Error(U(321))}function Cf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function bf(t,e,n,r,i,s){if(hi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?GS:WS,t=n(r,i),Po){s=0;do{if(Po=!1,Zo=0,25<=s)throw Error(U(301));s+=1,Ke=Ue=null,e.updateQueue=null,xl.current=HS,t=n(r,i)}while(Po)}if(xl.current=uu,e=Ue!==null&&Ue.next!==null,hi=0,Ke=Ue=Re=null,lu=!1,e)throw Error(U(300));return t}function Nf(){var t=Zo!==0;return Zo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Xt(){if(Ue===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ke===null?Re.memoizedState:Ke.next;if(e!==null)Ke=e,Ue=t;else{if(t===null)throw Error(U(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function ea(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((hi&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=f,di|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,ln(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function h0(){}function d0(t,e){var n=Re,r=Xt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,Df(m0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ta(9,p0.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(U(349));hi&30||f0(n,e,i)}return i}function f0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p0(t,e,n,r){e.value=n,e.getSnapshot=r,g0(e)&&y0(t)}function m0(t,e,n){return n(function(){g0(e)&&y0(t)})}function g0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function y0(t){var e=zn(t,1);e!==null&&an(e,t,1,-1)}function Cg(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=KS.bind(null,Re,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _0(){return Xt().memoizedState}function kl(t,e,n,r){var i=dn();Re.flags|=t,i.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Cf(r,o.deps)){i.memoizedState=ta(e,n,s,r);return}}Re.flags|=t,i.memoizedState=ta(1|e,n,s,r)}function bg(t,e){return kl(8390656,8,t,e)}function Df(t,e){return qu(2048,8,t,e)}function v0(t,e){return qu(4,2,t,e)}function w0(t,e){return qu(4,4,t,e)}function I0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E0(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,I0.bind(null,e,t),n)}function Vf(){}function T0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function S0(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function A0(t,e,n){return hi&21?(ln(n,e)||(n=Cv(),Re.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function $S(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=ah.transition;ah.transition={};try{t(!1),e()}finally{fe=n,ah.transition=r}}function x0(){return Xt().memoizedState}function qS(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))R0(e,n);else if(n=l0(t,e,n,r),n!==null){var i=mt();an(n,t,r,i),P0(n,e,r)}}function KS(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))R0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,o)){var u=e.interleaved;u===null?(i.next=i,Af(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=l0(t,e,i,r),n!==null&&(i=mt(),an(n,t,r,i),P0(n,e,r))}}function k0(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function R0(t,e){Po=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}var uu={readContext:Jt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},GS={readContext:Jt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,I0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qS.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Vf,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=$S.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=dn();if(Se){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ge===null)throw Error(U(349));hi&30||f0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bg(m0.bind(null,r,s,t),[t]),r.flags|=2048,ta(9,p0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Ge.identifierPrefix;if(Se){var n=Nn,r=bn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WS={readContext:Jt,useCallback:T0,useContext:Jt,useEffect:Df,useImperativeHandle:E0,useInsertionEffect:v0,useLayoutEffect:w0,useMemo:S0,useReducer:lh,useRef:_0,useState:function(){return lh(ea)},useDebugValue:Vf,useDeferredValue:function(t){var e=Xt();return A0(e,Ue.memoizedState,t)},useTransition:function(){var t=lh(ea)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:h0,useSyncExternalStore:d0,useId:x0,unstable_isNewReconciler:!1},HS={readContext:Jt,useCallback:T0,useContext:Jt,useEffect:Df,useImperativeHandle:E0,useInsertionEffect:v0,useLayoutEffect:w0,useMemo:S0,useReducer:uh,useRef:_0,useState:function(){return uh(ea)},useDebugValue:Vf,useDeferredValue:function(t){var e=Xt();return Ue===null?e.memoizedState=t:A0(e,Ue.memoizedState,t)},useTransition:function(){var t=uh(ea)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:h0,useSyncExternalStore:d0,useId:x0,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ad(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Tr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(an(e,t,i,r),Al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Tr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(an(e,t,i,r),Al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Tr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(an(e,t,r,n),Al(e,t,r))}};function Ng(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(i,s):!0}function C0(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=kt(e)?ui:lt.current,r=e.contextTypes,s=(r=r!=null)?ms(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},xf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=kt(e)?ui:lt.current,i.context=ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ad(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ku.enqueueReplaceState(i,i.state,null),ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",r=e;do n+=E1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ch(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function b0(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hu||(hu=!0,vd=r),ud(t,e)},n}function N0(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uA.bind(null,t,e,n),e.then(t,t))}function Og(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var YS=Hn.ReactCurrentOwner,St=!1;function ft(t,e,n,r){e.child=t===null?a0(e,null,n,r):ys(e,t.child,n,r)}function Lg(t,e,n,r,i){n=n.render;var s=e.ref;return ls(e,i),r=bf(t,e,n,r,s,i),n=Nf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(Se&&n&&vf(e),e.flags|=1,ft(t,e,r,i),e.child)}function Fg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,r,i)):(t=bl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wo(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return cd(t,e,n,r,i)}function V0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(ns,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(ns,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(ns,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(ns,bt),bt|=r;return ft(t,e,i,n),e.child}function O0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cd(t,e,n,r,i){var s=kt(n)?ui:lt.current;return s=ms(e,s),ls(e,i),n=bf(t,e,n,r,s,i),r=Nf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(Se&&r&&vf(e),e.flags|=1,ft(t,e,n,i),e.child)}function jg(t,e,n,r,i){if(kt(n)){var s=!0;tu(e)}else s=!1;if(ls(e,i),e.stateNode===null)Rl(t,e),C0(e,n,r),ld(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=kt(n)?ui:lt.current,c=ms(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Dg(e,o,r,c),or=!1;var g=e.memoizedState;o.state=g,ou(e,r,o,i),u=e.memoizedState,l!==r||g!==u||xt.current||or?(typeof f=="function"&&(ad(e,n,f,r),u=e.memoizedState),(l=or||Ng(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,u0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:nn(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=kt(n)?ui:lt.current,u=ms(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Dg(e,o,r,u),or=!1,g=e.memoizedState,o.state=g,ou(e,r,o,i);var C=e.memoizedState;l!==p||g!==C||xt.current||or?(typeof E=="function"&&(ad(e,n,E,r),C=e.memoizedState),(c=or||Ng(e,n,c,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return hd(t,e,n,r,s,i)}function hd(t,e,n,r,i,s){O0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sg(e,n,!1),Bn(t,e,s);r=e.stateNode,YS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,l,s)):ft(t,e,l,s),e.memoizedState=r.state,i&&Sg(e,n,!0),e.child}function M0(t){var e=t.stateNode;e.pendingContext?Tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tg(t,e.context,!1),kf(t,e.containerInfo)}function Ug(t,e,n,r,i){return gs(),If(i),e.flags|=256,ft(t,e,n,r),e.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function L0(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(xe,i&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hu(o,r,0,null),t=oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fd(n),e.memoizedState=dd,t):Of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return JS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Sr(l,s):(s=oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dd,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Of(t,e){return e=Hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,r){return r!==null&&If(r),ys(e,t.child,null,n),t=Of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ch(Error(U(422))),ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Hu({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=fd(o),e.memoizedState=dd,s);if(!(e.mode&1))return ll(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=ch(s,r,void 0),ll(t,e,o,r)}if(l=(o&t.childLanes)!==0,St||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),an(r,t,i,-1))}return zf(),r=ch(Error(U(421))),ll(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=wr(i.nextSibling),Vt=e,Se=!0,sn=null,t!==null&&($t[qt++]=bn,$t[qt++]=Nn,$t[qt++]=ci,bn=t.id,Nn=t.overflow,ci=e),e=Of(e,r.children),e.flags|=4096,e)}function zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),od(t.return,e,n)}function hh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function F0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,n,e);else if(t.tag===19)zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hh(e,!0,n,null,s);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XS(t,e,n){switch(e.tag){case 3:M0(e),gs();break;case 5:c0(e);break;case 1:kt(e.type)&&tu(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?L0(t,e,n):(_e(xe,xe.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);_e(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return F0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,V0(t,e,n)}return Bn(t,e,n)}var j0,pd,U0,z0;j0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};U0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(vn.current);var s=null;switch(n){case"input":i=Mh(t,i),r=Mh(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=jh(t,i),r=jh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zl)}zh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};z0=function(t,e,n,r){n!==r&&(e.flags|=4)};function oo(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZS(t,e,n){var r=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return kt(e.type)&&eu(),st(e),null;case 3:return r=e.stateNode,_s(),Ee(xt),Ee(lt),Pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Ed(sn),sn=null))),pd(t,e),st(e),null;case 5:Rf(e);var i=ri(Xo.current);if(n=e.type,t!==null&&e.stateNode!=null)U0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return st(e),null}if(t=ri(vn.current),ol(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<_o.length;i++)Ie(_o[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Ym(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Xm(r,s),Ie("invalid",r)}zh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,l,t),i=["children",""+l]):Uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Ja(r),Jm(r,s,!0);break;case"textarea":Ja(r),Zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Yo]=r,j0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<_o.length;i++)Ie(_o[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Ym(t,r),i=Mh(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Xm(t,r),i=jh(t,r),Ie("invalid",t);break;default:i=r}zh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?_v(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zo(t,u):typeof u=="number"&&zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&sf(t,s,u,o))}switch(n){case"input":Ja(t),Jm(t,r,!1);break;case"textarea":Ja(t),Zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?is(t,!!r.multiple,s,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)z0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ri(Xo.current),ri(vn.current),ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return st(e),null;case 13:if(Ee(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Nt!==null&&e.mode&1&&!(e.flags&128))s0(),gs(),e.flags|=98560,s=!1;else if(s=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[pn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else sn!==null&&(Ed(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?ze===0&&(ze=3):zf())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return _s(),pd(t,e),t===null&&Ho(e.stateNode.containerInfo),st(e),null;case 10:return Sf(e.type._context),st(e),null;case 17:return kt(e.type)&&eu(),st(e),null;case 19:if(Ee(xe),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oo(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,oo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>ws&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304)}else{if(!r)if(t=au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return st(e),null}else 2*Me()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=xe.current,_e(xe,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function eA(t,e){switch(wf(e),e.tag){case 1:return kt(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),Ee(xt),Ee(lt),Pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(Ee(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(xe),null;case 4:return _s(),null;case 10:return Sf(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var ul=!1,at=!1,tA=typeof WeakSet=="function"?WeakSet:Set,K=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function md(t,e,n){try{n()}catch(r){De(t,e,r)}}var Bg=!1;function nA(t,e){if(Xh=Yl,t=Gv(),_f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)g=p,p=E;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(E=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zh={focusedElem:t,selectionRange:n},Yl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,O=C.memoizedState,A=e.stateNode,_=A.getSnapshotBeforeUpdate(e.elementType===e.type?N:nn(e.type,N),O);A.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){De(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return C=Bg,Bg=!1,C}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&md(e,n,s)}i=i.next}while(i!==r)}}function Gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Yo],delete e[nd],delete e[FS],delete e[jS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $0(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function _d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}var Ye=null,rn=!1;function er(t,e,n){for(n=n.child;n!==null;)q0(t,e,n),n=n.sibling}function q0(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:at||ts(n,e);case 6:var r=Ye,i=rn;Ye=null,er(t,e,n),Ye=r,rn=i,Ye!==null&&(rn?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(rn?(t=Ye,n=n.stateNode,t.nodeType===8?ih(t.parentNode,n):t.nodeType===1&&ih(t,n),Ko(t)):ih(Ye,n.stateNode));break;case 4:r=Ye,i=rn,Ye=n.stateNode.containerInfo,rn=!0,er(t,e,n),Ye=r,rn=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&md(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!at&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,er(t,e,n),at=r):er(t,e,n);break;default:er(t,e,n)}}function qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tA),e.forEach(function(r){var i=hA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,rn=!1;break e;case 3:Ye=l.stateNode.containerInfo,rn=!0;break e;case 4:Ye=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(Ye===null)throw Error(U(160));q0(s,o,i),Ye=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),hn(t),r&4){try{Co(3,t,t.return),Gu(3,t)}catch(N){De(t,t.return,N)}try{Co(5,t,t.return)}catch(N){De(t,t.return,N)}}break;case 1:tn(e,t),hn(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(tn(e,t),hn(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{zo(i,"")}catch(N){De(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fv(i,s),Bh(l,o);var c=Bh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?_v(i,p):f==="dangerouslySetInnerHTML"?gv(i,p):f==="children"?zo(i,p):sf(i,f,p,c)}switch(l){case"input":Lh(i,s);break;case"textarea":pv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?is(i,!!s.multiple,E,!1):g!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[Yo]=s}catch(N){De(t,t.return,N)}}break;case 6:if(tn(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){De(t,t.return,N)}}break;case 3:if(tn(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(N){De(t,t.return,N)}break;case 4:tn(e,t),hn(t);break;case 13:tn(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ff=Me())),r&4&&qg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||f,tn(e,t),at=c):tn(e,t),hn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(p=K=f;K!==null;){switch(g=K,E=g.child,g.tag){case 0:case 11:case 14:case 15:Co(4,g,g.return);break;case 1:ts(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){De(r,n,N)}}break;case 5:ts(g,g.return);break;case 22:if(g.memoizedState!==null){Gg(p);continue}}E!==null?(E.return=g,K=E):Gg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=yv("display",o))}catch(N){De(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){De(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:tn(e,t),hn(t),r&4&&qg(t);break;case 21:break;default:tn(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zo(i,""),r.flags&=-33);var s=$g(t);_d(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$g(t);yd(t,l,o);break;default:throw Error(U(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rA(t,e,n){K=t,G0(t)}function G0(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ul;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=ul;var c=at;if(ul=o,(at=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Wg(i):u!==null?(u.return=o,K=u):Wg(i);for(;s!==null;)K=s,G0(s),s=s.sibling;K=i,ul=l,at=c}Kg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Kg(t)}}function Kg(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ko(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}at||e.flags&512&&gd(e)}catch(g){De(e,e.return,g)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Gg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Wg(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{gd(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{gd(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var iA=Math.ceil,cu=Hn.ReactCurrentDispatcher,Mf=Hn.ReactCurrentOwner,Ht=Hn.ReactCurrentBatchConfig,le=0,Ge=null,Fe=null,Ze=0,bt=0,ns=Lr(0),ze=0,na=null,di=0,Wu=0,Lf=0,bo=null,Et=null,Ff=0,ws=1/0,Pn=null,hu=!1,vd=null,Er=null,cl=!1,mr=null,du=0,No=0,wd=null,Pl=-1,Cl=0;function mt(){return le&6?Me():Pl!==-1?Pl:Pl=Me()}function Tr(t){return t.mode&1?le&2&&Ze!==0?Ze&-Ze:zS.transition!==null?(Cl===0&&(Cl=Cv()),Cl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Lv(t.type)),t):1}function an(t,e,n,r){if(50<No)throw No=0,wd=null,Error(U(185));ga(t,n,r),(!(le&2)||t!==Ge)&&(t===Ge&&(!(le&2)&&(Wu|=n),ze===4&&lr(t,Ze)),Rt(t,r),n===1&&le===0&&!(e.mode&1)&&(ws=Me()+500,$u&&Fr()))}function Rt(t,e){var n=t.callbackNode;z1(t,e);var r=Ql(t,t===Ge?Ze:0);if(r===0)n!==null&&ng(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ng(n),e===1)t.tag===0?US(Hg.bind(null,t)):n0(Hg.bind(null,t)),MS(function(){!(le&6)&&Fr()}),n=null;else{switch(bv(r)){case 1:n=cf;break;case 4:n=Rv;break;case 16:n=Hl;break;case 536870912:n=Pv;break;default:n=Hl}n=ew(n,W0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W0(t,e){if(Pl=-1,Cl=0,le&6)throw Error(U(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var r=Ql(t,t===Ge?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=le;le|=2;var s=Q0();(Ge!==t||Ze!==e)&&(Pn=null,ws=Me()+500,si(t,e));do try{aA();break}catch(l){H0(t,l)}while(1);Tf(),cu.current=s,le=i,Fe!==null?e=0:(Ge=null,Ze=0,e=ze)}if(e!==0){if(e===2&&(i=Wh(t),i!==0&&(r=i,e=Id(t,i))),e===1)throw n=na,si(t,0),lr(t,r),Rt(t,Me()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!sA(i)&&(e=fu(t,r),e===2&&(s=Wh(t),s!==0&&(r=s,e=Id(t,s))),e===1))throw n=na,si(t,0),lr(t,r),Rt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Hr(t,Et,Pn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=Ff+500-Me(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=td(Hr.bind(null,t,Et,Pn),e);break}Hr(t,Et,Pn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iA(r/1960))-r,10<r){t.timeoutHandle=td(Hr.bind(null,t,Et,Pn),r);break}Hr(t,Et,Pn);break;case 5:Hr(t,Et,Pn);break;default:throw Error(U(329))}}}return Rt(t,Me()),t.callbackNode===n?W0.bind(null,t):null}function Id(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=fu(t,e),t!==2&&(e=Et,Et=n,e!==null&&Ed(e)),t}function Ed(t){Et===null?Et=t:Et.push.apply(Et,t)}function sA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Lf,e&=~Wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Hg(t){if(le&6)throw Error(U(327));us();var e=Ql(t,0);if(!(e&1))return Rt(t,Me()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=Wh(t);r!==0&&(e=r,n=Id(t,r))}if(n===1)throw n=na,si(t,0),lr(t,e),Rt(t,Me()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,Et,Pn),Rt(t,Me()),null}function jf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ws=Me()+500,$u&&Fr())}}function fi(t){mr!==null&&mr.tag===0&&!(le&6)&&us();var e=le;le|=1;var n=Ht.transition,r=fe;try{if(Ht.transition=null,fe=1,t)return t()}finally{fe=r,Ht.transition=n,le=e,!(le&6)&&Fr()}}function Uf(){bt=ns.current,Ee(ns)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OS(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eu();break;case 3:_s(),Ee(xt),Ee(lt),Pf();break;case 5:Rf(r);break;case 4:_s();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:Sf(r.type._context);break;case 22:case 23:Uf()}n=n.return}if(Ge=t,Fe=t=Sr(t.current,null),Ze=bt=e,ze=0,na=null,Lf=Wu=di=0,Et=bo=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function H0(t,e){do{var n=Fe;try{if(Tf(),xl.current=uu,lu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lu=!1}if(hi=0,Ke=Ue=Re=null,Po=!1,Zo=0,Mf.current=null,n===null||n.return===null){ze=1,na=e,Fe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Og(o);if(E!==null){E.flags&=-257,Mg(E,o,l,s,e),E.mode&1&&Vg(s,c,e),e=E,u=c;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Vg(s,c,e),zf();break e}u=Error(U(426))}}else if(Se&&l.mode&1){var O=Og(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Mg(O,o,l,s,e),If(vs(u,l));break e}}s=u=vs(u,l),ze!==4&&(ze=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=b0(s,u,e);Rg(s,A);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Er===null||!Er.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=N0(s,l,e);Rg(s,V);break e}}s=s.return}while(s!==null)}J0(n)}catch(F){e=F,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function Q0(){var t=cu.current;return cu.current=uu,t===null?uu:t}function zf(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(di&268435455)&&!(Wu&268435455)||lr(Ge,Ze)}function fu(t,e){var n=le;le|=2;var r=Q0();(Ge!==t||Ze!==e)&&(Pn=null,si(t,e));do try{oA();break}catch(i){H0(t,i)}while(1);if(Tf(),le=n,cu.current=r,Fe!==null)throw Error(U(261));return Ge=null,Ze=0,ze}function oA(){for(;Fe!==null;)Y0(Fe)}function aA(){for(;Fe!==null&&!N1();)Y0(Fe)}function Y0(t){var e=Z0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?J0(t):Fe=e,Mf.current=null}function J0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eA(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(n=ZS(n,e,bt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);ze===0&&(ze=5)}function Hr(t,e,n){var r=fe,i=Ht.transition;try{Ht.transition=null,fe=1,lA(t,e,n,r)}finally{Ht.transition=i,fe=r}return null}function lA(t,e,n,r){do us();while(mr!==null);if(le&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(B1(t,s),t===Ge&&(Fe=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,ew(Hl,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=fe;fe=1;var l=le;le|=4,Mf.current=null,nA(t,n),K0(n,t),RS(Zh),Yl=!!Xh,Zh=Xh=null,t.current=n,rA(n),D1(),le=l,fe=o,Ht.transition=s}else t.current=n;if(cl&&(cl=!1,mr=t,du=i),s=t.pendingLanes,s===0&&(Er=null),M1(n.stateNode),Rt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hu)throw hu=!1,t=vd,vd=null,t;return du&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===wd?No++:(No=0,wd=t):No=0,Fr(),null}function us(){if(mr!==null){var t=bv(du),e=Ht.transition,n=fe;try{if(Ht.transition=null,fe=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,du=0,le&6)throw Error(U(331));var i=le;for(le|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:Co(8,f,s)}var p=f.child;if(p!==null)p.return=f,K=p;else for(;K!==null;){f=K;var g=f.sibling,E=f.return;if(B0(f),f===c){K=null;break}if(g!==null){g.return=E,K=g;break}K=E}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,K=A;break e}K=s.return}}var _=t.current;for(K=_;K!==null;){o=K;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,K=S;else e:for(o=_;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gu(9,l)}}catch(F){De(l,l.return,F)}if(l===o){K=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,K=V;break e}K=l.return}}if(le=i,Fr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Fu,t)}catch{}r=!0}return r}finally{fe=n,Ht.transition=e}}return!1}function Qg(t,e,n){e=vs(n,e),e=b0(t,e,1),t=Ir(t,e,1),e=mt(),t!==null&&(ga(t,1,e),Rt(t,e))}function De(t,e,n){if(t.tag===3)Qg(t,t,n);else for(;e!==null;){if(e.tag===3){Qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=vs(n,t),t=N0(e,t,1),e=Ir(e,t,1),t=mt(),e!==null&&(ga(e,1,t),Rt(e,t));break}}e=e.return}}function uA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Ze&n)===n&&(ze===4||ze===3&&(Ze&130023424)===Ze&&500>Me()-Ff?si(t,0):Lf|=n),Rt(t,e)}function X0(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=mt();t=zn(t,e),t!==null&&(ga(t,e,n),Rt(t,n))}function cA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X0(t,n)}function hA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),X0(t,n)}var Z0;Z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,XS(t,e,n);St=!!(t.flags&131072)}else St=!1,Se&&e.flags&1048576&&r0(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rl(t,e),t=e.pendingProps;var i=ms(e,lt.current);ls(e,n),i=bf(null,e,r,t,i,n);var s=Nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xf(e),i.updater=Ku,e.stateNode=i,i._reactInternals=e,ld(e,r,t,n),e=hd(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&vf(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fA(r),t=nn(r,t),i){case 0:e=cd(null,e,r,t,n);break e;case 1:e=jg(null,e,r,t,n);break e;case 11:e=Lg(null,e,r,t,n);break e;case 14:e=Fg(null,e,r,nn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),cd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),jg(t,e,r,i,n);case 3:e:{if(M0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,u0(t,e),ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vs(Error(U(423)),e),e=Ug(t,e,r,n,i);break e}else if(r!==i){i=vs(Error(U(424)),e),e=Ug(t,e,r,n,i);break e}else for(Nt=wr(e.stateNode.containerInfo.firstChild),Vt=e,Se=!0,sn=null,n=a0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===i){e=Bn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return c0(e),t===null&&sd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ed(r,i)?o=null:s!==null&&ed(r,s)&&(e.flags|=32),O0(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&sd(e),null;case 13:return L0(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Lg(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(iu,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!xt.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),od(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ls(e,n),i=Jt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),Fg(t,e,r,i,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Rl(t,e),e.tag=1,kt(r)?(t=!0,tu(e)):t=!1,ls(e,n),C0(e,r,i),ld(e,r,i,n),hd(null,e,r,!0,t,n);case 19:return F0(t,e,n);case 22:return V0(t,e,n)}throw Error(U(156,e.tag))};function ew(t,e){return kv(t,e)}function dA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new dA(t,e,n,r)}function Bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fA(t){if(typeof t=="function")return Bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===lf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gi:return oi(n.children,i,s,e);case of:o=8,i|=8;break;case Nh:return t=Kt(12,n,e,i|2),t.elementType=Nh,t.lanes=s,t;case Dh:return t=Kt(13,n,e,i),t.elementType=Dh,t.lanes=s,t;case Vh:return t=Kt(19,n,e,i),t.elementType=Vh,t.lanes=s,t;case cv:return Hu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lv:o=10;break e;case uv:o=9;break e;case af:o=11;break e;case lf:o=14;break e;case sr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function oi(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Hu(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=cv,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wc(0),this.expirationTimes=Wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,r,i,s,o,l,u){return t=new pA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function mA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tw(t){if(!t)return Nr;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(kt(n))return t0(t,n,e)}return e}function nw(t,e,n,r,i,s,o,l,u){return t=$f(n,r,!0,t,i,s,o,l,u),t.context=tw(null),n=t.current,r=mt(),i=Tr(n),s=Ln(r,i),s.callback=e??null,Ir(n,s,i),t.current.lanes=i,ga(t,i,r),Rt(t,r),t}function Qu(t,e,n,r){var i=e.current,s=mt(),o=Tr(i);return n=tw(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,o),t!==null&&(an(t,i,o,s),Al(t,i,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Yg(t,e),(t=t.alternate)&&Yg(t,e)}function gA(){return null}var rw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kf(t){this._internalRoot=t}Yu.prototype.render=Kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Qu(t,e,null,null)};Yu.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fi(function(){Qu(null,t,null,null)}),e[Un]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&Mv(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function yA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=pu(o);s.call(c)}}var o=nw(e,r,t,0,null,!1,!1,"",Jg);return t._reactRootContainer=o,t[Un]=o.current,Ho(t.nodeType===8?t.parentNode:t),fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=pu(u);l.call(c)}}var u=$f(t,0,!1,null,null,!1,!1,"",Jg);return t._reactRootContainer=u,t[Un]=u.current,Ho(t.nodeType===8?t.parentNode:t),fi(function(){Qu(e,u,n,r)}),u}function Xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=pu(o);l.call(u)}}Qu(e,o,t,i)}else o=yA(n,e,t,i,r);return pu(o)}Nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(hf(e,n|1),Rt(e,Me()),!(le&6)&&(ws=Me()+500,Fr()))}break;case 13:fi(function(){var r=zn(t,1);if(r!==null){var i=mt();an(r,t,1,i)}}),qf(t,1)}};df=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=mt();an(e,t,134217728,n)}qf(t,134217728)}};Dv=function(t){if(t.tag===13){var e=Tr(t),n=zn(t,e);if(n!==null){var r=mt();an(n,t,e,r)}qf(t,e)}};Vv=function(){return fe};Ov=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};qh=function(t,e,n){switch(e){case"input":if(Lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bu(r);if(!i)throw Error(U(90));dv(r),Lh(r,i)}}}break;case"textarea":pv(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};Iv=jf;Ev=fi;var _A={usingClientEntryPoint:!1,Events:[_a,Yi,Bu,vv,wv,jf]},ao={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vA={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Av(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||gA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Fu=hl.inject(vA),_n=hl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_A;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(U(200));return mA(t,e,null,n)};jt.createRoot=function(t,e){if(!Gf(t))throw Error(U(299));var n=!1,r="",i=rw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Ho(t.nodeType===8?t.parentNode:t),new Kf(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Av(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return fi(t)};jt.hydrate=function(t,e,n){if(!Ju(e))throw Error(U(200));return Xu(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nw(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,Ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yu(e)};jt.render=function(t,e,n){if(!Ju(e))throw Error(U(200));return Xu(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(U(40));return t._reactRootContainer?(fi(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};jt.unstable_batchedUpdates=jf;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Xu(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iw)}catch(t){console.error(t)}}iw(),iv.exports=jt;var wA=iv.exports,sw,Xg=wA;sw=Xg.createRoot,Xg.hydrateRoot;var IA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const EA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),TA=(t,e)=>{const n=ye.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>ye.createElement("svg",{ref:c,...IA,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${EA(t)}`,...u},[...e.map(([f,p])=>ye.createElement(f,p)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n};var We=TA;const Zg=We("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]),SA=We("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),AA=We("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),Wf=We("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ph=We("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),xA=We("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),kA=We("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),lo=We("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]),ey=We("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),RA=We("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),ow=We("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]),mu=We("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),PA=We("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]),ty=We("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),CA=We("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Hf=We("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),bA=We("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),NA=We("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
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
 */const aw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new VA;const g=s<<2|l>>4;if(r.push(g),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OA=function(t){const e=aw(t);return lw.encodeByteArray(e,!0)},gu=function(t){return OA(t).replace(/\./g,"")},uw=function(t){try{return lw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LA=()=>MA().__FIREBASE_DEFAULTS__,FA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uw(t[1]);return e&&JSON.parse(e)},Zu=()=>{try{return LA()||FA()||jA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cw=t=>{var e,n;return(n=(e=Zu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UA=t=>{const e=cw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hw=()=>{var t;return(t=Zu())===null||t===void 0?void 0:t.config},dw=t=>{var e;return(e=Zu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function BA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),l].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $A(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function qA(){var t;const e=(t=Zu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WA(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pw(){return!qA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qf(){try{return typeof indexedDB=="object"}catch{return!1}}function mw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function HA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const QA="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QA,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cn(i,l,r)}}function YA(t,e){return t.replace(JA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JA=/\{\$([^}]+)}/g;function XA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ny(s)&&ny(o)){if(!ra(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ny(t){return t!==null&&typeof t=="object"}/**
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
 */function wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ZA(t,e){const n=new ex(t,e);return n.subscribe.bind(n)}class ex{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mh),i.error===void 0&&(i.error=mh),i.complete===void 0&&(i.complete=mh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mh(){}/**
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
 */const nx=1e3,rx=2,ix=4*60*60*1e3,sx=.5;function ry(t,e=nx,n=rx){const r=e*Math.pow(n,t),i=Math.round(sx*r*(Math.random()-.5)*2);return Math.min(ix,r+i)}/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class ox{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lx(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ax(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ax(t){return t===Qr?void 0:t}function lx(t){return t.instantiationMode==="EAGER"}/**
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
 */class ux{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ox(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const cx={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},hx=se.INFO,dx={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},fx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=hx,this._logHandler=fx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const px=(t,e)=>e.some(n=>t instanceof n);let iy,sy;function mx(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gx(){return sy||(sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gw=new WeakMap,Td=new WeakMap,yw=new WeakMap,gh=new WeakMap,Yf=new WeakMap;function yx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gw.set(n,t)}).catch(()=>{}),Yf.set(e,t),e}function _x(t){if(Td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Td.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vx(t){Sd=t(Sd)}function wx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yh(this),e,...n);return yw.set(r,e.sort?e.sort():[e]),Ar(r)}:gx().includes(t)?function(...e){return t.apply(yh(this),e),Ar(gw.get(this))}:function(...e){return Ar(t.apply(yh(this),e))}}function Ix(t){return typeof t=="function"?wx(t):(t instanceof IDBTransaction&&_x(t),px(t,mx())?new Proxy(t,Sd):t)}function Ar(t){if(t instanceof IDBRequest)return yx(t);if(gh.has(t))return gh.get(t);const e=Ix(t);return e!==t&&(gh.set(t,e),Yf.set(e,t)),e}const yh=t=>Yf.get(t);function _w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ar(o.result),u.oldVersion,u.newVersion,Ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ex=["get","getKey","getAll","getAllKeys","count"],Tx=["put","add","delete","clear"],_h=new Map;function oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Tx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ex.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return _h.set(e,s),s}vx(t=>({...t,get:(e,n,r)=>oy(e,n)||t.get(e,n,r),has:(e,n)=>!!oy(e,n)||t.has(e,n)}));/**
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
 */class Sx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ax(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ax(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",ay="0.10.13";/**
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
 */const $n=new ec("@firebase/app"),xx="@firebase/app-compat",kx="@firebase/analytics-compat",Rx="@firebase/analytics",Px="@firebase/app-check-compat",Cx="@firebase/app-check",bx="@firebase/auth",Nx="@firebase/auth-compat",Dx="@firebase/database",Vx="@firebase/data-connect",Ox="@firebase/database-compat",Mx="@firebase/functions",Lx="@firebase/functions-compat",Fx="@firebase/installations",jx="@firebase/installations-compat",Ux="@firebase/messaging",zx="@firebase/messaging-compat",Bx="@firebase/performance",$x="@firebase/performance-compat",qx="@firebase/remote-config",Kx="@firebase/remote-config-compat",Gx="@firebase/storage",Wx="@firebase/storage-compat",Hx="@firebase/firestore",Qx="@firebase/vertexai-preview",Yx="@firebase/firestore-compat",Jx="firebase",Xx="10.14.1";/**
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
 */const xd="[DEFAULT]",Zx={[Ad]:"fire-core",[xx]:"fire-core-compat",[Rx]:"fire-analytics",[kx]:"fire-analytics-compat",[Cx]:"fire-app-check",[Px]:"fire-app-check-compat",[bx]:"fire-auth",[Nx]:"fire-auth-compat",[Dx]:"fire-rtdb",[Vx]:"fire-data-connect",[Ox]:"fire-rtdb-compat",[Mx]:"fire-fn",[Lx]:"fire-fn-compat",[Fx]:"fire-iid",[jx]:"fire-iid-compat",[Ux]:"fire-fcm",[zx]:"fire-fcm-compat",[Bx]:"fire-perf",[$x]:"fire-perf-compat",[qx]:"fire-rc",[Kx]:"fire-rc-compat",[Gx]:"fire-gcs",[Wx]:"fire-gcs-compat",[Hx]:"fire-fst",[Yx]:"fire-fst-compat",[Qx]:"fire-vertex","fire-js":"fire-js",[Jx]:"fire-js-all"};/**
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
 */const yu=new Map,ek=new Map,kd=new Map;function ly(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(kd.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;kd.set(e,t);for(const n of yu.values())ly(n,t);for(const n of ek.values())ly(n,t);return!0}function Ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mn(t){return t.settings!==void 0}/**
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
 */const tk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new ki("app","Firebase",tk);/**
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
 */class nk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=Xx;function vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=hw()),!n)throw xr.create("no-options");const s=yu.get(i);if(s){if(ra(n,s.options)&&ra(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new ux(i);for(const u of kd.values())o.addComponent(u);const l=new nk(n,r,o);return yu.set(i,l),l}function Jf(t=xd){const e=yu.get(t);if(!e&&t===xd&&hw())return vw();if(!e)throw xr.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=Zx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}En(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rk="firebase-heartbeat-database",ik=1,ia="firebase-heartbeat-store";let vh=null;function ww(){return vh||(vh=_w(rk,ik,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),vh}async function sk(t){try{const n=(await ww()).transaction(ia),r=await n.objectStore(ia).get(Iw(t));return await n.done,r}catch(e){if(e instanceof cn)$n.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function uy(t,e){try{const r=(await ww()).transaction(ia,"readwrite");await r.objectStore(ia).put(e,Iw(t)),await r.done}catch(n){if(n instanceof cn)$n.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function Iw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ok=1024,ak=30*24*60*60*1e3;class lk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ck(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ak}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cy(),{heartbeatsToSend:r,unsentEntries:i}=uk(this._heartbeatsCache.heartbeats),s=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function cy(){return new Date().toISOString().substring(0,10)}function uk(t,e=ok){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ck{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qf()?mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hy(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hk(t){En(new un("platform-logger",e=>new Sx(e),"PRIVATE")),En(new un("heartbeat",e=>new lk(e),"PRIVATE")),Qt(Ad,ay,t),Qt(Ad,ay,"esm2017"),Qt("fire-js","")}hk("");var dk="firebase",fk="10.14.1";/**
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
 */Qt(dk,fk,"app");const Ew="@firebase/installations",Xf="0.6.9";/**
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
 */const Tw=1e4,Sw=`w:${Xf}`,Aw="FIS_v2",pk="https://firebaseinstallations.googleapis.com/v1",mk=60*60*1e3,gk="installations",yk="Installations";/**
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
 */const _k={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pi=new ki(gk,yk,_k);function xw(t){return t instanceof cn&&t.code.includes("request-failed")}/**
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
 */function kw({projectId:t}){return`${pk}/projects/${t}/installations`}function Rw(t){return{token:t.token,requestStatus:2,expiresIn:wk(t.expiresIn),creationTime:Date.now()}}async function Pw(t,e){const r=(await e.json()).error;return pi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vk(t,{refreshToken:e}){const n=Cw(t);return n.append("Authorization",Ik(e)),n}async function bw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wk(t){return Number(t.replace("s","000"))}function Ik(t){return`${Aw} ${t}`}/**
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
 */async function Ek({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=kw(t),i=Cw(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Aw,appId:t.appId,sdkVersion:Sw},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await bw(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Rw(c.authToken)}}else throw await Pw("Create Installation",u)}/**
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
 */function Nw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Tk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Sk=/^[cdef][\w-]{21}$/,Rd="";function Ak(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xk(t);return Sk.test(n)?n:Rd}catch{return Rd}}function xk(t){return Tk(t).substr(0,22)}/**
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
 */function tc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Dw=new Map;function Vw(t,e){const n=tc(t);Ow(n,e),kk(n,e)}function Ow(t,e){const n=Dw.get(t);if(n)for(const r of n)r(e)}function kk(t,e){const n=Rk();n&&n.postMessage({key:t,fid:e}),Pk()}let ii=null;function Rk(){return!ii&&"BroadcastChannel"in self&&(ii=new BroadcastChannel("[Firebase] FID Change"),ii.onmessage=t=>{Ow(t.data.key,t.data.fid)}),ii}function Pk(){Dw.size===0&&ii&&(ii.close(),ii=null)}/**
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
 */const Ck="firebase-installations-database",bk=1,mi="firebase-installations-store";let wh=null;function Zf(){return wh||(wh=_w(Ck,bk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mi)}}})),wh}async function _u(t,e){const n=tc(t),i=(await Zf()).transaction(mi,"readwrite"),s=i.objectStore(mi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Vw(t,e.fid),e}async function Mw(t){const e=tc(t),r=(await Zf()).transaction(mi,"readwrite");await r.objectStore(mi).delete(e),await r.done}async function nc(t,e){const n=tc(t),i=(await Zf()).transaction(mi,"readwrite"),s=i.objectStore(mi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Vw(t,l.fid),l}/**
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
 */async function ep(t){let e;const n=await nc(t.appConfig,r=>{const i=Nk(r),s=Dk(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Nk(t){const e=t||{fid:Ak(),registrationStatus:0};return Lw(e)}function Dk(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(pi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Vk(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ok(t)}:{installationEntry:e}}async function Vk(t,e){try{const n=await Ek(t,e);return _u(t.appConfig,n)}catch(n){throw xw(n)&&n.customData.serverCode===409?await Mw(t.appConfig):await _u(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ok(t){let e=await dy(t.appConfig);for(;e.registrationStatus===1;)await Nw(100),e=await dy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ep(t);return r||n}return e}function dy(t){return nc(t,e=>{if(!e)throw pi.create("installation-not-found");return Lw(e)})}function Lw(t){return Mk(t)?{fid:t.fid,registrationStatus:0}:t}function Mk(t){return t.registrationStatus===1&&t.registrationTime+Tw<Date.now()}/**
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
 */async function Lk({appConfig:t,heartbeatServiceProvider:e},n){const r=Fk(t,n),i=vk(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Sw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await bw(()=>fetch(r,l));if(u.ok){const c=await u.json();return Rw(c)}else throw await Pw("Generate Auth Token",u)}function Fk(t,{fid:e}){return`${kw(t)}/${e}/authTokens:generate`}/**
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
 */async function tp(t,e=!1){let n;const r=await nc(t.appConfig,s=>{if(!Fw(s))throw pi.create("not-registered");const o=s.authToken;if(!e&&zk(o))return s;if(o.requestStatus===1)return n=jk(t,e),s;{if(!navigator.onLine)throw pi.create("app-offline");const l=$k(s);return n=Uk(t,l),l}});return n?await n:r.authToken}async function jk(t,e){let n=await fy(t.appConfig);for(;n.authToken.requestStatus===1;)await Nw(100),n=await fy(t.appConfig);const r=n.authToken;return r.requestStatus===0?tp(t,e):r}function fy(t){return nc(t,e=>{if(!Fw(e))throw pi.create("not-registered");const n=e.authToken;return qk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Uk(t,e){try{const n=await Lk(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await _u(t.appConfig,r),n}catch(n){if(xw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _u(t.appConfig,r)}throw n}}function Fw(t){return t!==void 0&&t.registrationStatus===2}function zk(t){return t.requestStatus===2&&!Bk(t)}function Bk(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mk}function $k(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function qk(t){return t.requestStatus===1&&t.requestTime+Tw<Date.now()}/**
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
 */async function Kk(t){const e=t,{installationEntry:n,registrationPromise:r}=await ep(e);return r?r.catch(console.error):tp(e).catch(console.error),n.fid}/**
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
 */async function Gk(t,e=!1){const n=t;return await Wk(n),(await tp(n,e)).token}async function Wk(t){const{registrationPromise:e}=await ep(t);e&&await e}/**
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
 */function Hk(t){if(!t||!t.options)throw Ih("App Configuration");if(!t.name)throw Ih("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ih(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ih(t){return pi.create("missing-app-config-values",{valueName:t})}/**
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
 */const jw="installations",Qk="installations-internal",Yk=t=>{const e=t.getProvider("app").getImmediate(),n=Hk(e),r=Ri(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Jk=t=>{const e=t.getProvider("app").getImmediate(),n=Ri(e,jw).getImmediate();return{getId:()=>Kk(n),getToken:i=>Gk(n,i)}};function Xk(){En(new un(jw,Yk,"PUBLIC")),En(new un(Qk,Jk,"PRIVATE"))}Xk();Qt(Ew,Xf);Qt(Ew,Xf,"esm2017");/**
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
 */const vu="analytics",Zk="firebase_id",eR="origin",tR=60*1e3,nR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",np="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pt=new ec("@firebase/analytics");/**
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
 */const rR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new ki("analytics","Analytics",rR);/**
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
 */function iR(t){if(!t.startsWith(np)){const e=Ot.create("invalid-gtag-resource",{gtagURL:t});return Pt.warn(e.message),""}return t}function Uw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function oR(t,e){const n=sR("firebase-js-sdk-policy",{createScriptURL:iR}),r=document.createElement("script"),i=`${np}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function aR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function lR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await Uw(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Pt.error(l)}t("config",i,s)}async function uR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Uw(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Pt.error(s)}}function cR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await uR(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await lR(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Pt.error(l)}}return i}function hR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=cR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function dR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(np)&&n.src.includes(t))return n;return null}/**
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
 */const fR=30,pR=1e3;class mR{constructor(e={},n=pR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zw=new mR;function gR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function yR(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:gR(r)},s=nR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function _R(t,e=zw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ot.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ot.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new IR;return setTimeout(async()=>{l.abort()},n!==void 0?n:tR),Bw({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Bw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=zw){var s;const{appId:o,measurementId:l}=t;try{await vR(r,e)}catch(u){if(l)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await yR(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!wR(c)){if(i.deleteThrottleMetadata(o),l)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?ry(n,i.intervalMillis,fR):ry(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),Pt.debug(`Calling attemptFetch again in ${f} millis`),Bw(t,p,r,i)}}function vR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wR(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class IR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ER(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function TR(){if(Qf())try{await mw()}catch(t){return Pt.warn(Ot.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Pt.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function SR(t,e,n,r,i,s,o){var l;const u=_R(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Pt.error(E)),e.push(u);const c=TR().then(E=>{if(E)return r.getId()}),[f,p]=await Promise.all([u,c]);dR(s)||oR(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[eR]="firebase",g.update=!0,p!=null&&(g[Zk]=p),i("config",f.measurementId,g),f.measurementId}/**
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
 */class AR{constructor(e){this.app=e}_delete(){return delete Do[this.app.options.appId],Promise.resolve()}}let Do={},py=[];const my={};let Eh="dataLayer",xR="gtag",gy,$w,yy=!1;function kR(){const t=[];if(fw()&&t.push("This is a browser extension environment."),HA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ot.create("invalid-analytics-context",{errorInfo:e});Pt.warn(n.message)}}function RR(t,e,n){kR();const r=t.options.appId;if(!r)throw Ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(Do[r]!=null)throw Ot.create("already-exists",{id:r});if(!yy){aR(Eh);const{wrappedGtag:s,gtagCore:o}=hR(Do,py,my,Eh,xR);$w=s,gy=o,yy=!0}return Do[r]=SR(t,py,my,e,gy,Eh,n),new AR(t)}function PR(t=Jf()){t=_t(t);const e=Ri(t,vu);return e.isInitialized()?e.getImmediate():CR(t)}function CR(t,e={}){const n=Ri(t,vu);if(n.isInitialized()){const i=n.getImmediate();if(ra(e,n.getOptions()))return i;throw Ot.create("already-initialized")}return n.initialize({options:e})}function bR(t,e,n,r){t=_t(t),ER($w,Do[t.app.options.appId],e,n,r).catch(i=>Pt.error(i))}const _y="@firebase/analytics",vy="0.10.8";function NR(){En(new un(vu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return RR(r,i,n)},"PUBLIC")),En(new un("analytics-internal",t,"PRIVATE")),Qt(_y,vy),Qt(_y,vy,"esm2017");function t(e){try{const n=e.getProvider(vu).getImmediate();return{logEvent:(r,i,s)=>bR(n,r,i,s)}}catch(n){throw Ot.create("interop-component-reg-failed",{reason:n})}}}NR();function rp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function qw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DR=qw,Kw=new ki("auth","Firebase",qw());/**
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
 */const wu=new ec("@firebase/auth");function VR(t,...e){wu.logLevel<=se.WARN&&wu.warn(`Auth (${Vs}): ${t}`,...e)}function Nl(t,...e){wu.logLevel<=se.ERROR&&wu.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function qn(t,...e){throw ip(t,...e)}function wn(t,...e){return ip(t,...e)}function Gw(t,e,n){const r=Object.assign(Object.assign({},DR()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return Gw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ip(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kw.create(t,...e)}function J(t,e,...n){if(!t)throw ip(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nl(e),new Error(e)}function Kn(t,e){t||Dn(e)}/**
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
 */function Pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OR(){return wy()==="http:"||wy()==="https:"}function wy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OR()||fw()||"connection"in navigator)?navigator.onLine:!0}function LR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=$A()||GA()}get(){return MR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sp(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ww{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jR=new Ia(3e4,6e4);function Ea(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Os(t,e,n,r,i={}){return Hw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return KA()||(c.referrerPolicy="no-referrer"),Ww.fetch()(Qw(t,t.config.apiHost,n,l),c)})}async function Hw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FR),e);try{const i=new UR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw dl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gw(t,f,c);qn(t,f)}}catch(i){if(i instanceof cn)throw i;qn(t,"network-request-failed",{message:String(i)})}}async function op(t,e,n,r,i={}){const s=await Os(t,e,n,r,i);return"mfaPendingCredential"in s&&qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sp(t.config,i):`${t.config.apiScheme}://${i}`}class UR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),jR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function zR(t,e){return Os(t,"POST","/v1/accounts:delete",e)}async function Yw(t,e){return Os(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BR(t,e=!1){const n=_t(t),r=await n.getIdToken(e),i=ap(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vo(Th(i.auth_time)),issuedAtTime:Vo(Th(i.iat)),expirationTime:Vo(Th(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Th(t){return Number(t)*1e3}function ap(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=uw(n);return i?JSON.parse(i):(Nl("Failed to decode base64 JWT payload"),null)}catch(i){return Nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Iy(t){const e=ap(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&$R(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $R({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await sa(t,Yw(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Jw(s.providerUserInfo):[],l=GR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Cd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function KR(t){const e=_t(t);await Iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jw(t){return t.map(e=>{var{providerId:n}=e,r=rp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WR(t,e){const n=await Hw(t,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ww.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HR(t,e){return Os(t,"POST","/v2/accounts:revokeToken",Ea(t,e))}/**
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
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Iy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cs;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function tr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sa(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BR(this,e)}reload(){return KR(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await sa(this,zR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:F,providerData:L,stsTokenManager:v}=n;J(S&&v,e,"internal-error");const y=cs.fromJSON(this.name,v);J(typeof S=="string",e,"internal-error"),tr(p,e.name),tr(g,e.name),J(typeof V=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),tr(E,e.name),tr(C,e.name),tr(N,e.name),tr(O,e.name),tr(A,e.name),tr(_,e.name);const w=new Vn({uid:S,auth:e,email:g,emailVerified:V,displayName:p,isAnonymous:F,photoURL:C,phoneNumber:E,tenantId:N,stsTokenManager:y,createdAt:A,lastLoginAt:_});return L&&Array.isArray(L)&&(w.providerData=L.map(T=>Object.assign({},T))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new cs;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Iu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Jw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new cs;l.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Ey=new Map;function On(t){Kn(t instanceof Function,"Expected a class definition");let e=Ey.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ey.set(t,e),e)}/**
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
 */class Xw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xw.type="NONE";const Ty=Xw;/**
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
 */function Dl(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(On(Ty),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||On(Ty);const o=Dl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Vn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new hs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new hs(s,e,r))}}/**
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
 */function Sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iI(e))return"Blackberry";if(sI(e))return"Webos";if(eI(e))return"Safari";if((e.includes("chrome/")||tI(e))&&!e.includes("edge/"))return"Chrome";if(rI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zw(t=Be()){return/firefox\//i.test(t)}function eI(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tI(t=Be()){return/crios\//i.test(t)}function nI(t=Be()){return/iemobile/i.test(t)}function rI(t=Be()){return/android/i.test(t)}function iI(t=Be()){return/blackberry/i.test(t)}function sI(t=Be()){return/webos/i.test(t)}function lp(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QR(t=Be()){var e;return lp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YR(){return WA()&&document.documentMode===10}function oI(t=Be()){return lp(t)||rI(t)||sI(t)||iI(t)||/windows phone/i.test(t)||nI(t)}/**
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
 */function aI(t,e=[]){let n;switch(t){case"Browser":n=Sy(Be());break;case"Worker":n=`${Sy(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class JR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XR(t,e={}){return Os(t,"GET","/v2/passwordPolicy",Ea(t,e))}/**
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
 */const ZR=6;class eP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class tP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new JR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yw(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Fn(this));const n=e?_t(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XR(this),n=new eP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ta(t){return _t(t)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZA(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let up={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nP(t){up=t}function rP(t){return up.loadJS(t)}function iP(){return up.gapiScript}function sP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function oP(t,e){const n=Ri(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ra(s,e??{}))return i;qn(i,"already-initialized")}return n.initialize({options:e})}function aP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lP(t,e,n){const r=Ta(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=lI(e),{host:o,port:l}=uP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cP()}function lI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uP(t){const e=lI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xy(o)}}}function xy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function ds(t,e){return op(t,"POST","/v1/accounts:signInWithIdp",Ea(t,e))}/**
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
 */const hP="http://localhost";class gi extends uI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:hP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wa(n)}return e}}/**
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
 */class cI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sa extends cI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends Sa{constructor(){super("facebook.com")}static credential(e){return gi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class cr extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class hr extends Sa{constructor(){super("github.com")}static credential(e){return gi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class dr extends Sa{constructor(){super("twitter.com")}static credential(e,n){return gi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function dP(t,e){return op(t,"POST","/v1/accounts:signUp",Ea(t,e))}/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=ky(r);return new Gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ky(r);return new Gn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function fP(t){var e;if(mn(t.app))return Promise.reject(Fn(t));const n=Ta(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Gn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await dP(n,{returnSecureToken:!0}),i=await Gn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Eu extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Eu(e,n,r,i)}}function hI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,s,e,r):s})}async function pP(t,e,n=!1){const r=await sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}/**
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
 */async function mP(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject(Fn(r));const i="reauthenticate";try{const s=await sa(t,hI(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=ap(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Gn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),s}}/**
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
 */async function gP(t,e,n=!1){if(mn(t.app))return Promise.reject(Fn(t));const r="signIn",i=await hI(t,r,e),s=await Gn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */async function yP(t,e){return op(t,"POST","/v1/accounts:signInWithCustomToken",Ea(t,e))}/**
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
 */async function _P(t,e){if(mn(t.app))return Promise.reject(Fn(t));const n=Ta(t),r=await yP(n,{token:e,returnSecureToken:!0}),i=await Gn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function vP(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function wP(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function IP(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}const Tu="__sak";/**
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
 */class dI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EP=1e3,TP=10;class fI extends dI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fI.type="LOCAL";const SP=fI;/**
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
 */class pI extends dI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pI.type="SESSION";const mI=pI;/**
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
 */function AP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await AP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function cp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=cp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function In(){return window}function kP(t){In().location.href=t}/**
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
 */function gI(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function RP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CP(){return gI()?self:null}/**
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
 */const yI="firebaseLocalStorageDb",bP=1,Su="firebaseLocalStorage",_I="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([Su],e?"readwrite":"readonly").objectStore(Su)}function NP(){const t=indexedDB.deleteDatabase(yI);return new Aa(t).toPromise()}function bd(){const t=indexedDB.open(yI,bP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Su,{keyPath:_I})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Su)?e(r):(r.close(),await NP(),e(await bd()))})})}async function Ry(t,e,n){const r=ic(t,!0).put({[_I]:e,value:n});return new Aa(r).toPromise()}async function DP(t,e){const n=ic(t,!1).get(e),r=await new Aa(n).toPromise();return r===void 0?null:r.value}function Py(t,e){const n=ic(t,!0).delete(e);return new Aa(n).toPromise()}const VP=800,OP=3;class vI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(CP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RP(),!this.activeServiceWorker)return;this.sender=new xP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bd();return await Ry(e,Tu,"1"),await Py(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ry(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Py(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ic(i,!1).getAll();return new Aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vI.type="LOCAL";const MP=vI;new Ia(3e4,6e4);/**
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
 */function LP(t,e){return e?On(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hp extends uI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FP(t){return gP(t.auth,new hp(t),t.bypassAuthState)}function jP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),mP(n,new hp(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),pP(n,new hp(t),t.bypassAuthState)}/**
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
 */class wI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return jP;default:qn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zP=new Ia(2e3,1e4);class rs extends wI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}rs.currentPopupAction=null;/**
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
 */const BP="pendingRedirect",Vl=new Map;class $P extends wI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(t,e){const n=WP(e),r=GP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KP(t,e){Vl.set(t._key(),e)}function GP(t){return On(t._redirectPersistence)}function WP(t){return Dl(BP,t.config.apiKey,t.name)}async function HP(t,e,n=!1){if(mn(t.app))return Promise.reject(Fn(t));const r=Ta(t),i=LP(r,e),o=await new $P(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QP=10*60*1e3;class YP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!II(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cy(e))}saveEventToCache(e){this.cachedEventUids.add(Cy(e)),this.lastProcessedEventTime=Date.now()}}function Cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function II({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return II(t);default:return!1}}/**
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
 */async function XP(t,e={}){return Os(t,"GET","/v1/projects",e)}/**
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
 */const ZP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eC=/^https?/;async function tC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XP(t);for(const n of e)try{if(nC(n))return}catch{}qn(t,"unauthorized-domain")}function nC(t){const e=Pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eC.test(n))return!1;if(ZP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rC=new Ia(3e4,6e4);function by(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iC(t){return new Promise((e,n)=>{var r,i,s;function o(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),n(wn(t,"network-request-failed"))},timeout:rC.get()})}if(!((i=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=In().gapi)===null||s===void 0)&&s.load)o();else{const l=sP("iframefcb");return In()[l]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},rP(`${iP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function sC(t){return Ol=Ol||iC(t),Ol}/**
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
 */const oC=new Ia(5e3,15e3),aC="__/auth/iframe",lC="emulator/auth/iframe",uC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hC(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sp(e,lC):`https://${t.config.authDomain}/${aC}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=cC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wa(r).slice(1)}`}async function dC(t){const e=await sC(t),n=In().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:hC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=In().setTimeout(()=>{s(o)},oC.get());function u(){In().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const fC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pC=500,mC=600,gC="_blank",yC="http://localhost";class Ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _C(t,e,n,r=pC,i=mC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},fC),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Be().toLowerCase();n&&(l=tI(c)?gC:n),Zw(c)&&(e=e||yC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[E,C])=>`${g}${E}=${C},`,"");if(QR(c)&&l!=="_self")return vC(e||"",l),new Ny(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new Ny(p)}function vC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wC="__/auth/handler",IC="emulator/auth/handler",EC=encodeURIComponent("fac");async function Dy(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof cI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof Sa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${EC}=${encodeURIComponent(u)}`:"";return`${TC(t)}?${wa(l).slice(1)}${c}`}function TC({config:t}){return t.emulator?sp(t,IC):`https://${t.authDomain}/${wC}`}/**
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
 */const Sh="webStorageSupport";class SC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mI,this._completeRedirectFn=HP,this._overrideRedirectResult=KP}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dy(e,n,r,Pd(),i);return _C(e,o,cp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Dy(e,n,r,Pd(),i);return kP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dC(e),r=new YP(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sh,{type:Sh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sh];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oI()||eI()||lp()}}const AC=SC;var Vy="@firebase/auth",Oy="1.7.9";/**
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
 */class xC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RC(t){En(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aI(t)},c=new tP(r,i,s,u);return aP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new un("auth-internal",e=>{const n=Ta(e.getProvider("auth").getImmediate());return(r=>new xC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Vy,Oy,kC(t)),Qt(Vy,Oy,"esm2017")}/**
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
 */const PC=5*60,CC=dw("authIdTokenMaxAge")||PC;let My=null;const bC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CC)return;const i=n==null?void 0:n.token;My!==i&&(My=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NC(t=Jf()){const e=Ri(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oP(t,{popupRedirectResolver:AC,persistence:[MP,SP,mI]}),r=dw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bC(s.toString());wP(n,o,()=>o(n.currentUser)),vP(n,l=>o(l))}}const i=cw("auth");return i&&lP(n,`http://${i}`),n}function DC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RC("Browser");var Ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ai,EI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function w(){}w.prototype=y.prototype,v.D=y.prototype,v.prototype=new w,v.prototype.constructor=v,v.C=function(T,k,P){for(var I=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)I[ut-2]=arguments[ut];return y.prototype[k].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)T[k]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(k=0;16>k;++k)T[k]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=v.g[0],w=v.g[1],k=v.g[2];var P=v.g[3],I=y+(P^w&(k^P))+T[0]+3614090360&4294967295;y=w+(I<<7&4294967295|I>>>25),I=P+(k^y&(w^k))+T[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(w^P&(y^w))+T[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(y^k&(P^y))+T[3]+3250441966&4294967295,w=k+(I<<22&4294967295|I>>>10),I=y+(P^w&(k^P))+T[4]+4118548399&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(k^y&(w^k))+T[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(w^P&(y^w))+T[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(y^k&(P^y))+T[7]+4249261313&4294967295,w=k+(I<<22&4294967295|I>>>10),I=y+(P^w&(k^P))+T[8]+1770035416&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(k^y&(w^k))+T[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(w^P&(y^w))+T[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(y^k&(P^y))+T[11]+2304563134&4294967295,w=k+(I<<22&4294967295|I>>>10),I=y+(P^w&(k^P))+T[12]+1804603682&4294967295,y=w+(I<<7&4294967295|I>>>25),I=P+(k^y&(w^k))+T[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(w^P&(y^w))+T[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=w+(y^k&(P^y))+T[15]+1236535329&4294967295,w=k+(I<<22&4294967295|I>>>10),I=y+(k^P&(w^k))+T[1]+4129170786&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(y^w))+T[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^w&(P^y))+T[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(k^P))+T[0]+3921069994&4294967295,w=k+(I<<20&4294967295|I>>>12),I=y+(k^P&(w^k))+T[5]+3593408605&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(y^w))+T[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^w&(P^y))+T[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(k^P))+T[4]+3889429448&4294967295,w=k+(I<<20&4294967295|I>>>12),I=y+(k^P&(w^k))+T[9]+568446438&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(y^w))+T[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^w&(P^y))+T[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(k^P))+T[8]+1163531501&4294967295,w=k+(I<<20&4294967295|I>>>12),I=y+(k^P&(w^k))+T[13]+2850285829&4294967295,y=w+(I<<5&4294967295|I>>>27),I=P+(w^k&(y^w))+T[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^w&(P^y))+T[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=w+(P^y&(k^P))+T[12]+2368359562&4294967295,w=k+(I<<20&4294967295|I>>>12),I=y+(w^k^P)+T[5]+4294588738&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^k)+T[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^w)+T[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^y)+T[14]+4259657740&4294967295,w=k+(I<<23&4294967295|I>>>9),I=y+(w^k^P)+T[1]+2763975236&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^k)+T[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^w)+T[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^y)+T[10]+3200236656&4294967295,w=k+(I<<23&4294967295|I>>>9),I=y+(w^k^P)+T[13]+681279174&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^k)+T[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^w)+T[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^y)+T[6]+76029189&4294967295,w=k+(I<<23&4294967295|I>>>9),I=y+(w^k^P)+T[9]+3654602809&4294967295,y=w+(I<<4&4294967295|I>>>28),I=P+(y^w^k)+T[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^w)+T[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=w+(k^P^y)+T[2]+3299628645&4294967295,w=k+(I<<23&4294967295|I>>>9),I=y+(k^(w|~P))+T[0]+4096336452&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~k))+T[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~w))+T[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~y))+T[5]+4237533241&4294967295,w=k+(I<<21&4294967295|I>>>11),I=y+(k^(w|~P))+T[12]+1700485571&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~k))+T[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~w))+T[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~y))+T[1]+2240044497&4294967295,w=k+(I<<21&4294967295|I>>>11),I=y+(k^(w|~P))+T[8]+1873313359&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~k))+T[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~w))+T[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~y))+T[13]+1309151649&4294967295,w=k+(I<<21&4294967295|I>>>11),I=y+(k^(w|~P))+T[4]+4149444226&4294967295,y=w+(I<<6&4294967295|I>>>26),I=P+(w^(y|~k))+T[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~w))+T[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=w+(P^(k|~y))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var w=y-this.blockSize,T=this.B,k=this.h,P=0;P<y;){if(k==0)for(;P<=w;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<y;)if(T[k++]=v.charCodeAt(P++),k==this.blockSize){i(this,T),k=0;break}}else for(;P<y;)if(T[k++]=v[P++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var w=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=w&255,w/=256;for(this.u(v),v=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)v[w++]=this.g[y]>>>T&255;return v};function s(v,y){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=y(v)}function o(v,y){this.h=y;for(var w=[],T=!0,k=v.length-1;0<=k;k--){var P=v[k]|0;T&&P==y||(w[k]=P,T=!1)}this.g=w}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return O(c(-v));for(var y=[],w=1,T=0;v>=w;T++)y[T]=v/w|0,w*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return O(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(y,8)),T=p,k=0;k<v.length;k+=8){var P=Math.min(8,v.length-k),I=parseInt(v.substring(k,k+P),y);8>P?(P=c(Math.pow(y,P)),T=T.j(P).add(c(I))):(T=T.j(w),T=T.add(c(I)))}return T}var p=u(0),g=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var v=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);v+=(0<=T?T:4294967296+T)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(N(this))return"-"+O(this).toString(v);for(var y=c(Math.pow(v,6)),w=this,T="";;){var k=V(w,y).g;w=A(w,k.j(y));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(v);if(w=k,C(w))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=A(this,v),N(v)?-1:C(v)?0:1};function O(v){for(var y=v.g.length,w=[],T=0;T<y;T++)w[T]=~v.g[T];return new o(w,~v.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],T=0,k=0;k<=y;k++){var P=T+(this.i(k)&65535)+(v.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);T=I>>>16,P&=65535,I&=65535,w[k]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function A(v,y){return v.add(O(y))}t.j=function(v){if(C(this)||C(v))return p;if(N(this))return N(v)?O(this).j(O(v)):O(O(this).j(v));if(N(v))return O(this.j(O(v)));if(0>this.l(E)&&0>v.l(E))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<v.g.length;k++){var P=this.i(T)>>>16,I=this.i(T)&65535,ut=v.i(k)>>>16,Sn=v.i(k)&65535;w[2*T+2*k]+=I*Sn,_(w,2*T+2*k),w[2*T+2*k+1]+=P*Sn,_(w,2*T+2*k+1),w[2*T+2*k+1]+=I*ut,_(w,2*T+2*k+1),w[2*T+2*k+2]+=P*ut,_(w,2*T+2*k+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function S(v,y){this.g=v,this.h=y}function V(v,y){if(C(y))throw Error("division by zero");if(C(v))return new S(p,p);if(N(v))return y=V(O(v),y),new S(O(y.g),O(y.h));if(N(y))return y=V(v,O(y)),new S(O(y.g),y.h);if(30<v.g.length){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,T=y;0>=T.l(v);)w=F(w),T=F(T);var k=L(w,1),P=L(T,1);for(T=L(T,2),w=L(w,2);!C(T);){var I=P.add(T);0>=I.l(v)&&(k=k.add(w),P=I),T=L(T,1),w=L(w,1)}return y=A(v,k.j(y)),new S(k,y)}for(k=p;0<=v.l(y);){for(w=Math.max(1,Math.floor(v.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=c(w),I=P.j(y);N(I)||0<I.l(v);)w-=T,P=c(w),I=P.j(y);C(P)&&(P=g),k=k.add(P),v=A(v,I)}return new S(k,v)}t.A=function(v){return V(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&v.i(T);return new o(w,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|v.i(T);return new o(w,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^v.i(T);return new o(w,this.h^v.h)};function F(v){for(var y=v.g.length+1,w=[],T=0;T<y;T++)w[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(w,v.h)}function L(v,y){var w=y>>5;y%=32;for(var T=v.g.length-w,k=[],P=0;P<T;P++)k[P]=0<y?v.i(P+w)>>>y|v.i(P+w+1)<<32-y:v.i(P+w);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,EI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,ai=o}).apply(typeof Ly<"u"?Ly:typeof self<"u"?self:typeof window<"u"?window:{});var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TI,vo,SI,Ml,Nd,AI,xI,kI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fl=="object"&&fl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,m=!1,R={next:function(){if(!m&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,R,D){for(var z=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)z[ge-2]=arguments[ge];return h.prototype[R].apply(m,z)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const R=a.length||0,D=m.length||0;a.length=R+D;for(let z=0;z<D;z++)a[R+z]=m[z]}else a.push(m)}}class A{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function L(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ut{constructor(){this.h=this.g=null}add(h,d){const m=Sn.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Sn=new A(()=>new zt,a=>a.reset());class zt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Zt,B=!1,Y=new ut,Z=()=>{const a=l.Promise.resolve(void 0);Zt=()=>{a.then(ve)}};var ve=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){P(d)}var h=Sn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var re=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function te(a,h){if(q.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{V(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:be[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&te.aa.h.call(this)}}C(te,q);var be={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Qn=0;function ct(a,h,d,m,R){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=R,this.key=++Qn,this.da=this.fa=!1}function ce(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function He(a){this.src=a,this.g={},this.h=0}He.prototype.add=function(a,h,d,m,R){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=An(a,h,m,R);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new ct(h,this.src,D,!!m,R),h.fa=d,a.push(h)),h};function Bt(a,h){var d=h.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=R)&&Array.prototype.splice.call(m,R,1),D&&(ce(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function An(a,h,d,m){for(var R=0;R<a.length;++R){var D=a[R];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==m)return R}return-1}var Yn="closure_lm_"+(1e6*Math.random()|0),Us={};function Na(a,h,d,m,R){if(m&&m.once)return Gp(a,h,d,m,R);if(Array.isArray(h)){for(var D=0;D<h.length;D++)Na(a,h[D],d,m,R);return null}return d=Ac(d),a&&a[Oe]?a.K(h,d,c(m)?!!m.capture:!!m,R):Kp(a,h,d,!1,m,R)}function Kp(a,h,d,m,R,D){if(!h)throw Error("Invalid event type");var z=c(R)?!!R.capture:!!R,ge=Tc(a);if(ge||(a[Yn]=ge=new He(a)),d=ge.add(h,d,m,z,D),d.proxy)return d;if(m=IT(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)re||(R=z),R===void 0&&(R=!1),a.addEventListener(h.toString(),m,R);else if(a.attachEvent)a.attachEvent(Hp(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function IT(){function a(d){return h.call(a.src,a.listener,d)}const h=ET;return a}function Gp(a,h,d,m,R){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Gp(a,h[D],d,m,R);return null}return d=Ac(d),a&&a[Oe]?a.L(h,d,c(m)?!!m.capture:!!m,R):Kp(a,h,d,!0,m,R)}function Wp(a,h,d,m,R){if(Array.isArray(h))for(var D=0;D<h.length;D++)Wp(a,h[D],d,m,R);else m=c(m)?!!m.capture:!!m,d=Ac(d),a&&a[Oe]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=An(D,d,m,R),-1<d&&(ce(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Tc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=An(h,d,m,R)),(d=-1<a?h[a]:null)&&Ec(d))}function Ec(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Oe])Bt(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(Hp(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Tc(h))?(Bt(d,a),d.h==0&&(d.src=null,h[Yn]=null)):ce(a)}}}function Hp(a){return a in Us?Us[a]:Us[a]="on"+a}function ET(a,h){if(a.da)a=!0;else{h=new te(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ec(a),a=d.call(m,h)}return a}function Tc(a){return a=a[Yn],a instanceof He?a:null}var Sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ac(a){return typeof a=="function"?a:(a[Sc]||(a[Sc]=function(h){return a.handleEvent(h)}),a[Sc])}function tt(){he.call(this),this.i=new He(this),this.M=this,this.F=null}C(tt,he),tt.prototype[Oe]=!0,tt.prototype.removeEventListener=function(a,h,d,m){Wp(this,a,h,d,m)};function ht(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new q(h,a);else if(h instanceof q)h.target=h.target||a;else{var R=h;h=new q(m,a),T(h,R)}if(R=!0,d)for(var D=d.length-1;0<=D;D--){var z=h.g=d[D];R=Da(z,m,!0,h)&&R}if(z=h.g=a,R=Da(z,m,!0,h)&&R,R=Da(z,m,!1,h)&&R,d)for(D=0;D<d.length;D++)z=h.g=d[D],R=Da(z,m,!1,h)&&R}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)ce(d[m]);delete a.g[h],a.h--}}this.F=null},tt.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},tt.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Da(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==d){var ge=z.listener,Qe=z.ha||z.src;z.fa&&Bt(a.i,z),R=ge.call(Qe,m)!==!1&&R}}return R&&!m.defaultPrevented}function Qp(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Yp(a){a.g=Qp(()=>{a.g=null,a.i&&(a.i=!1,Yp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class TT extends he{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Yp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(a){he.call(this),this.h=a,this.g={}}C(zs,he);var Jp=[];function Xp(a){L(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ec(h)},a),a.g={}}zs.prototype.N=function(){zs.aa.N.call(this),Xp(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xc=l.JSON.stringify,ST=l.JSON.parse,AT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function kc(){}kc.prototype.h=null;function Zp(a){return a.h||(a.h=a.i())}function em(){}var Bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rc(){q.call(this,"d")}C(Rc,q);function Pc(){q.call(this,"c")}C(Pc,q);var Br={},tm=null;function Va(){return tm=tm||new tt}Br.La="serverreachability";function nm(a){q.call(this,Br.La,a)}C(nm,q);function $s(a){const h=Va();ht(h,new nm(h))}Br.STAT_EVENT="statevent";function rm(a,h){q.call(this,Br.STAT_EVENT,a),this.stat=h}C(rm,q);function dt(a){const h=Va();ht(h,new rm(h,a))}Br.Ma="timingevent";function im(a,h){q.call(this,Br.Ma,a),this.size=h}C(im,q);function qs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function xT(a,h,d,m,R,D){a.info(function(){if(a.g)if(D)for(var z="",ge=D.split("&"),Qe=0;Qe<ge.length;Qe++){var ue=ge[Qe].split("=");if(1<ue.length){var nt=ue[0];ue=ue[1];var rt=nt.split("_");z=2<=rt.length&&rt[1]=="type"?z+(nt+"="+ue+"&"):z+(nt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+d+`
`+z})}function kT(a,h,d,m,R,D,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+d+`
`+D+" "+z})}function bi(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+PT(a,d)+(m?" "+m:"")})}function RT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ks.prototype.info=function(){};function PT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var D=R[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<R.length;z++)R[z]=""}}}}return xc(d)}catch{return h}}var Oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cc;function Ma(){}C(Ma,kc),Ma.prototype.g=function(){return new XMLHttpRequest},Ma.prototype.i=function(){return{}},Cc=new Ma;function Jn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new zs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new om}function om(){this.i=null,this.g="",this.h=!1}var am={},bc={};function Nc(a,h,d){a.L=1,a.v=Ua(xn(h)),a.m=d,a.P=!0,lm(a,null)}function lm(a,h){a.F=Date.now(),La(a),a.A=xn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Em(d.i,"t",m),a.C=0,d=a.j.J,a.h=new om,a.g=Um(a.j,d?h:null,!a.m),0<a.O&&(a.M=new TT(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Jp[0]=R.toString()),R=Jp);for(var D=0;D<R.length;D++){var z=Na(d,R[D],m||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$s(),xT(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&kn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=kn(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Pm(this.g)))){this.J||rt!=4||h==7||(h==8||0>=Vi?$s(3):$s(2)),Dc(this);var d=this.g.Z();this.X=d;t:if(um(this)){var m=Pm(this.g);a="";var R=m.length,D=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),Gs(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==R-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,kT(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Qe=this.g;if((ge=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ge)){var ue=ge;break t}}ue=null}if(d=ue)bi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vc(this,d);else{this.o=!1,this.s=3,dt(12),$r(this),Gs(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<z.length;)if(en=CT(this,z),en==bc){rt==4&&(this.s=4,dt(14),d=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(en==am){this.s=4,dt(15),bi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else bi(this.i,this.l,en,null),Vc(this,en);if(um(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||z.length!=0||this.h.h||(this.s=1,dt(16),d=!1),this.o=this.o&&d,!d)bi(this.i,this.l,z,"[Invalid Chunked Response]"),$r(this),Gs(this);else if(0<z.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Uc(nt),nt.M=!0,dt(11))}}else bi(this.i,this.l,z,null),Vc(this,z);rt==4&&$r(this),this.o&&!this.J&&(rt==4?Mm(this.j,this):(this.o=!1,La(this)))}else WT(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),$r(this),Gs(this)}}}catch{}finally{}};function um(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function CT(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?bc:(d=Number(h.substring(d,m)),isNaN(d)?am:(m+=1,m+d>h.length?bc:(h=h.slice(m,m+d),a.C=m+d,h)))}Jn.prototype.cancel=function(){this.J=!0,$r(this)};function La(a){a.S=Date.now()+a.I,cm(a,a.I)}function cm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qs(g(a.ba,a),h)}function Dc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(RT(this.i,this.A),this.L!=2&&($s(),dt(17)),$r(this),this.s=2,Gs(this)):cm(this,this.S-a)};function Gs(a){a.j.G==0||a.J||Mm(a.j,a)}function $r(a){Dc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Xp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Vc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Oc(d.h,a))){if(!a.K&&Oc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ga(d),qa(d);else break e;jc(d),dt(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=qs(g(d.Za,d),6e3));if(1>=fm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Kr(d,11)}else if((a.K||d.g==a)&&Ga(d),!_(h))for(R=d.Da.g.parse(h),h=0;h<R.length;h++){let ue=R[h];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const nt=ue[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=ue[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const Vi=ue[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(m=1.5*Vi,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const en=a.g;if(en){const Ha=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ha){var D=m.h;D.g||Ha.indexOf("spdy")==-1&&Ha.indexOf("quic")==-1&&Ha.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Mc(D,D.h),D.h=null))}if(m.D){const zc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;zc&&(m.ya=zc,we(m.I,m.D,zc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=a;if(m.qa=jm(m,m.J?m.ia:null,m.W),z.K){pm(m.h,z);var ge=z,Qe=m.L;Qe&&(ge.I=Qe),ge.B&&(Dc(ge),La(ge)),m.g=z}else Vm(m);0<d.i.length&&Ka(d)}else ue[0]!="stop"&&ue[0]!="close"||Kr(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Kr(d,7):Fc(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}$s(4)}catch{}}var bT=class{constructor(a,h){this.g=a,this.map=h}};function hm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fm(a){return a.h?1:a.g?a.g.size:0}function Oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Mc(a,h){a.g?a.g.add(h):a.h=h}function pm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hm.prototype.cancel=function(){if(this.i=mm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function NT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function DT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function gm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=DT(a),m=NT(a),R=m.length,D=0;D<R;D++)h.call(void 0,m[D],d&&d[D],a)}var ym=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),R=null;if(0<=m){var D=a[d].substring(0,m);R=a[d].substring(m+1)}else D=a[d];h(D,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof qr){this.h=a.h,Fa(this,a.j),this.o=a.o,this.g=a.g,ja(this,a.s),this.l=a.l;var h=a.i,d=new Qs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),_m(this,d),this.m=a.m}else a&&(h=String(a).match(ym))?(this.h=!1,Fa(this,h[1]||"",!0),this.o=Ws(h[2]||""),this.g=Ws(h[3]||"",!0),ja(this,h[4]),this.l=Ws(h[5]||"",!0),_m(this,h[6]||"",!0),this.m=Ws(h[7]||"")):(this.h=!1,this.i=new Qs(null,this.h))}qr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Hs(h,vm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hs(h,vm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Hs(d,d.charAt(0)=="/"?LT:MT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Hs(d,jT)),a.join("")};function xn(a){return new qr(a)}function Fa(a,h,d){a.j=d?Ws(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ja(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function _m(a,h,d){h instanceof Qs?(a.i=h,UT(a.i,a.h)):(d||(h=Hs(h,FT)),a.i=new Qs(h,a.h))}function we(a,h,d){a.i.set(h,d)}function Ua(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ws(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,OT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function OT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vm=/[#\/\?@]/g,MT=/[#\?:]/g,LT=/[#\?]/g,FT=/[#\?@]/g,jT=/#/g;function Qs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&VT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Qs.prototype,t.add=function(a,h){Xn(this),this.i=null,a=Ni(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function wm(a,h){Xn(a),h=Ni(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Im(a,h){return Xn(a),h=Ni(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(h,R,m,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const R=a[m];for(let D=0;D<R.length;D++)d.push(h[m])}return d},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")Im(this,a)&&(h=h.concat(this.g.get(Ni(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=Ni(this,a),Im(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Em(a,h,d){wm(a,h),0<d.length&&(a.i=null,a.g.set(Ni(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const D=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var R=D;z[m]!==""&&(R+="="+encodeURIComponent(String(z[m]))),a.push(R)}}return this.i=a.join("&")};function Ni(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function UT(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(d,m){var R=m.toLowerCase();m!=R&&(wm(this,m),Em(this,R,d))},a)),a.j=h}function zT(a,h){const d=new Ks;if(l.Image){const m=new Image;m.onload=E(Zn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=E(Zn,d,"TestLoadImage: error",!1,h,m),m.onabort=E(Zn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=E(Zn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function BT(a,h){const d=new Ks,m=new AbortController,R=setTimeout(()=>{m.abort(),Zn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(R),D.ok?Zn(d,"TestPingServer: ok",!0,h):Zn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Zn(d,"TestPingServer: error",!1,h)})}function Zn(a,h,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function $T(){this.g=new AT}function qT(a,h,d){const m=d||"";try{gm(a,function(R,D){let z=R;c(R)&&(z=xc(R)),h.push(m+D+"="+encodeURIComponent(z))})}catch(R){throw h.push(m+"type="+encodeURIComponent("_badmap")),R}}function za(a){this.l=a.Ub||null,this.j=a.eb||!1}C(za,kc),za.prototype.g=function(){return new Ba(this.l,this.j)},za.prototype.i=function(a){return function(){return a}}({});function Ba(a,h){tt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ba,tt),t=Ba.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Js(this),this.readyState==3&&Tm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Qa=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Js(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sm(a){let h="";return L(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Lc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Sm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):we(a,h,d))}function Ne(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ne,tt);var KT=/^https?$/i,GT=["POST","PUT"];t=Ne.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cc.g(),this.v=this.o?Zp(this.o):Zp(Cc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Am(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(GT,h,void 0))||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Am(this,D)}};function Am(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,xm(a),$a(a)}function xm(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),$a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?km(this):this.bb())},t.bb=function(){km(this)};function km(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)Qp(a.Ea,0,a);else if(ht(a,"readystatechange"),kn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=z===0){var R=String(a.D).match(ym)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!KT.test(R?R.toLowerCase():"")}d=m}if(d)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var D=2<kn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",xm(a)}}finally{$a(a)}}}}function $a(a,h){if(a.g){Rm(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ht(a,"ready");try{d.onreadystatechange=m}catch{}}}function Rm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ST(h)}};function Pm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function WT(a){const h={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=k(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[R]||[];h[R]=D,D.push(d)}v(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Cm(a){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,a),this.cb=Xs("retryDelaySeedMs",1e4,a),this.Wa=Xs("forwardChannelMaxRetries",2,a),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hm(a&&a.concurrentRequestLimit),this.Da=new $T,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){dt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=jm(this,null,this.W),Ka(this)};function Fc(a){if(bm(a),a.G==3){var h=a.U++,d=xn(a.I);if(we(d,"SID",a.K),we(d,"RID",h),we(d,"TYPE","terminate"),Zs(a,d),h=new Jn(a,a.j,h),h.L=2,h.v=Ua(xn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Um(h.j,null),h.g.ea(h.v)),h.F=Date.now(),La(h)}Fm(a)}function qa(a){a.g&&(Uc(a),a.g.cancel(),a.g=null)}function bm(a){qa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ga(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ka(a){if(!dm(a.h)&&!a.s){a.s=!0;var h=a.Ga;Zt||Z(),B||(Zt(),B=!0),Y.add(h,a),a.B=0}}function HT(a,h){return fm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qs(g(a.Ga,a,h),Lm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(R.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Dm(this,R,h),d=xn(this.I),we(d,"RID",a),we(d,"CVER",22),this.D&&we(d,"X-HTTP-Session-Id",this.D),Zs(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(Sm(D)))+"&"+h:this.m&&Lc(d,this.m,D)),Mc(this.h,R),this.Ua&&we(d,"TYPE","init"),this.P?(we(d,"$req",h),we(d,"SID","null"),R.T=!0,Nc(R,d,null)):Nc(R,d,h),this.G=2}}else this.G==3&&(a?Nm(this,a):this.i.length==0||dm(this.h)||Nm(this))};function Nm(a,h){var d;h?d=h.l:d=a.U++;const m=xn(a.I);we(m,"SID",a.K),we(m,"RID",d),we(m,"AID",a.T),Zs(a,m),a.m&&a.o&&Lc(m,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Dm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Mc(a.h,d),Nc(d,m,h)}function Zs(a,h){a.H&&L(a.H,function(d,m){we(h,m,d)}),a.l&&gm({},function(d,m){we(h,m,d)})}function Dm(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=R[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let ge=!0;for(let Qe=0;Qe<d;Qe++){let ue=R[Qe].g;const nt=R[Qe].map;if(ue-=D,0>ue)D=Math.max(0,R[Qe].g-100),ge=!1;else try{qT(nt,z,"req"+ue+"_")}catch{m&&m(nt)}}if(ge){m=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function Vm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Zt||Z(),B||(Zt(),B=!0),Y.add(h,a),a.v=0}}function jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qs(g(a.Fa,a),Lm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Om(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),qa(this),Om(this))};function Uc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Om(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=xn(a.qa);we(h,"RID","rpc"),we(h,"SID",a.K),we(h,"AID",a.T),we(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(h,"TO",a.ja),we(h,"TYPE","xmlhttp"),Zs(a,h),a.m&&a.o&&Lc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ua(xn(h)),d.m=null,d.P=!0,lm(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qa(this),jc(this),dt(19))};function Ga(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Mm(a,h){var d=null;if(a.g==h){Ga(a),Uc(a),a.g=null;var m=2}else if(Oc(a.h,h))d=h.D,pm(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;m=Va(),ht(m,new im(m,d)),Ka(a)}else Vm(a);else if(R=h.s,R==3||R==0&&0<h.X||!(m==1&&HT(a,h)||m==2&&jc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),R){case 1:Kr(a,5);break;case 4:Kr(a,10);break;case 3:Kr(a,6);break;default:Kr(a,2)}}}function Lm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Kr(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const R=!m;m=new qr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fa(m,"https"),Ua(m),R?zT(m.toString(),d):BT(m.toString(),d)}else dt(2);a.G=0,a.l&&a.l.sa(h),Fm(a),bm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Fm(a){if(a.G=0,a.ka=[],a.l){const h=mm(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function jm(a,h,d){var m=d instanceof qr?xn(d):new qr(d);if(m.g!="")h&&(m.g=h+"."+m.g),ja(m,m.s);else{var R=l.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var D=new qr(null);m&&Fa(D,m),h&&(D.g=h),R&&ja(D,R),d&&(D.l=d),m=D}return d=a.D,h=a.ya,d&&h&&we(m,d,h),we(m,"VER",a.la),Zs(a,m),m}function Um(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ne(new za({eb:d})):new Ne(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zm(){}t=zm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wa(){}Wa.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){tt.call(this),this.g=new Cm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Di(this)}C(Ct,tt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Fc(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=xc(a),a=d);h.i.push(new bT(h.Ya++,a)),h.G==3&&Ka(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Fc(this.g),delete this.g,Ct.aa.N.call(this)};function Bm(a){Rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Bm,Rc);function $m(){Pc.call(this),this.status=1}C($m,Pc);function Di(a){this.g=a}C(Di,zm),Di.prototype.ua=function(){ht(this.g,"a")},Di.prototype.ta=function(a){ht(this.g,new Bm(a))},Di.prototype.sa=function(a){ht(this.g,new $m)},Di.prototype.ra=function(){ht(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,kI=function(){return new Wa},xI=function(){return Va()},AI=Br,Nd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,Ml=Oa,sm.COMPLETE="complete",SI=sm,em.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",tt.prototype.listen=tt.prototype.K,vo=em,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,TI=Ne}).apply(typeof fl<"u"?fl:typeof self<"u"?self:typeof window<"u"?window:{});const Fy="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let Ms="10.14.0";/**
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
 */const yi=new ec("@firebase/firestore");function Ui(){return yi.logLevel}function j(t,...e){if(yi.logLevel<=se.DEBUG){const n=e.map(dp);yi.debug(`Firestore (${Ms}): ${t}`,...n)}}function pt(t,...e){if(yi.logLevel<=se.ERROR){const n=e.map(dp);yi.error(`Firestore (${Ms}): ${t}`,...n)}}function _i(t,...e){if(yi.logLevel<=se.WARN){const n=e.map(dp);yi.warn(`Firestore (${Ms}): ${t}`,...n)}}function dp(t){if(typeof t=="string")return t;try{/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw pt(e),new Error(e)}function H(t,e){t||W()}function X(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class RI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class OC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MC{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){H(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new RI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new Je(e)}}class LC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class FC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){H(this.o===void 0);const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.R=n.token,new jC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class PI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function CI(t){return t+"\0"}/**
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
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Pe(0,0))}static max(){return new Q(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oa{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends oa{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const BC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends oa{construct(e,n,r){return new ke(e,n,r)}static isValidIdentifier(e){return BC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(n)}static emptyPath(){return new ke([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(de.fromString(e))}static fromName(e){return new $(de.fromString(e).popFirst(5))}static empty(){return new $(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new de(e.slice()))}}/**
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
 */class Au{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Dd(t){return t.fields.find(e=>e.kind===2)}function Yr(t){return t.fields.filter(e=>e.kind!==2)}Au.UNKNOWN_ID=-1;class Ll{constructor(e,n){this.fieldPath=e,this.kind=n}}class aa{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new aa(0,Ft.min())}}function $C(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new Ft(i,$.empty(),e)}function bI(t){return new Ft(t.readTime,t.key,-1)}class Ft{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ft(Q.min(),$.empty(),-1)}static max(){return new Ft(Q.max(),$.empty(),-1)}}function fp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const NI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==NI)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class sc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new kr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Oo(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=pp(r.target.error);this.V.reject(new Oo(e,i))}}static open(e,n,r,i){try{return new sc(n,e.transaction(i,r))}catch(s){throw new Oo(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new KC(n)}}class Rr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Rr.S(Be())===12.2&&pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return j("SimpleDb","Removing database:",e),Jr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Qf())return!1;if(Rr.v())return!0;const e=Be(),n=Rr.S(e),r=0<n&&n<10,i=VI(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Oo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new G(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new G(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Oo(e,o))},i.onupgradeneeded=s=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=sc.open(this.db,e,s?"readonly":"readwrite",r),u=i(l).next(c=>(l.g(),c)).catch(c=>(l.abort(c),b.reject(c))).toPromise();return u.catch(()=>{}),await l.m,u}catch(l){const u=l,c=u.name!=="FirebaseError"&&o<3;if(j("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function VI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class qC{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Jr(this.B.delete())}}class Oo extends G{constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function jr(t){return t.name==="IndexedDbTransactionError"}class KC{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(j("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Jr(r)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),Jr(this.store.add(e))}get(e){return Jr(this.store.get(e)).next(n=>(n===void 0&&(n=null),j("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),Jr(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),Jr(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new b((o,l)=>{s.onerror=u=>{l(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(l,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){j("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,l)=>l.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new b((r,i)=>{n.onerror=s=>{const o=pp(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const u=new qC(l),c=n(l.primaryKey,l.value,u);if(c instanceof b){const f=c.catch(p=>(u.done(),b.reject(p)));r.push(f)}u.isDone?i():u.K===null?l.continue():l.continue(u.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Jr(t){return new b((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=pp(r.target.error);n(i)}})}let jy=!1;function pp(t){const e=Rr.S(Be());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new G("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return jy||(jy=!0,setTimeout(()=>{throw r},0)),r}}return t}class GC{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){j("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{j("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){jr(n)?j("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Pi(n)}await this.X(6e4)})}}class WC{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return j("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(l=>{i-=l,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(l=>(j("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,n,l))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=bI(s);fp(o,r)>0&&(r=o)}),new Ft(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Gt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Gt.oe=-1;function oc(t){return t==null}function la(t){return t===0&&1/t==-1/0}function HC(t){return typeof t=="number"&&Number.isInteger(t)&&!la(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Uy(e)),e=QC(t.get(n),e);return Uy(e)}function QC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Uy(t){return t+""}function gn(t){const e=t.length;if(H(e>=2),e===2)return H(t.charAt(0)===""&&t.charAt(1)===""),de.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&W(),t.charAt(o+1)){case"":const l=t.substring(s,o);let u;i.length===0?u=l:(i+=l,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:W()}s=o+2}return new de(r)}/**
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
 */const zy=["userId","batchId"];/**
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
 */function Fl(t,e){return[t,gt(e)]}function OI(t,e,n){return[t,gt(e),n]}const YC={},JC=["prefixPath","collectionGroup","readTime","documentId"],XC=["prefixPath","collectionGroup","documentId"],ZC=["collectionGroup","readTime","prefixPath","documentId"],eb=["canonicalId","targetId"],tb=["targetId","path"],nb=["path","targetId"],rb=["collectionId","parent"],ib=["indexId","uid"],sb=["uid","sequenceNumber"],ob=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ab=["indexId","uid","orderedDocumentKey"],lb=["userId","collectionPath","documentId"],ub=["userId","collectionPath","largestBatchId"],cb=["userId","collectionGroup","largestBatchId"],MI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],hb=[...MI,"documentOverlays"],LI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],FI=LI,mp=[...FI,"indexConfiguration","indexState","indexEntries"],db=mp,fb=[...mp,"globals"];/**
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
 */class Vd extends DI{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function $e(t,e){const n=X(t);return Rr.F(n._e,e)}/**
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
 */function By(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $y(this.data.getIterator())}getIteratorFrom(e){return new $y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class $y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Mi(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new me(ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class UI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new UI("Invalid base64 string: "+s):s}}(e);return new je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(t){if(H(!!t),typeof t=="string"){let e=0;const n=pb.exec(t);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
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
 */function gp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yp(t){const e=t.mapValue.fields.__previous_value__;return gp(e)?yp(e):e}function ua(t){const e=Wn(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */class mb{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},jl={nullValue:"NULL_VALUE"};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gp(t)?4:zI(t)?9007199254740991:ac(t)?10:11:W()}function Tn(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ua(t).isEqual(ua(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Wn(i.timestampValue),l=Wn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Dr(i.bytesValue).isEqual(Dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),l=Te(s.doubleValue);return o===l?la(o)===la(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(By(o)!==By(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Tn(o[u],l[u])))return!1;return!0}(t,e);default:return W()}}function ca(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Vr(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Te(s.integerValue||s.doubleValue),u=Te(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qy(t.timestampValue,e.timestampValue);case 4:return qy(ua(t),ua(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Dr(s),u=Dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ee(l[c],u[c]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(Te(s.latitude),Te(o.latitude));return l!==0?l:ee(Te(s.longitude),Te(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ky(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},g=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=ee(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Ky(E,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===gr.mapValue&&o===gr.mapValue)return 0;if(s===gr.mapValue)return 1;if(o===gr.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=ee(u[p],f[p]);if(g!==0)return g;const E=Vr(l[u[p]],c[f[p]]);if(E!==0)return E}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw W()}}function qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Wn(t),r=Wn(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Ky(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Vr(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function Es(t){return Od(t)}function Od(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Od(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Od(n.fields[o])}`;return i+"}"}(t.mapValue):W()}function _p(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Md(t){return!!t&&"integerValue"in t}function ha(t){return!!t&&"arrayValue"in t}function Gy(t){return!!t&&"nullValue"in t}function Wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function ac(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const BI={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function gb(t){return"nullValue"in t?jl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?_p(vi.empty(),$.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?ac(t)?BI:{mapValue:{}}:W()}function yb(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?_p(vi.empty(),$.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?BI:"mapValue"in t?ac(t)?{mapValue:{}}:gr:W()}function Hy(t,e){const n=Vr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Qy(t,e){const n=Vr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=ke.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Mo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Mo(this.value))}}function $I(t){const e=[];return Ls(t.fields,(n,r)=>{const i=new ke([n]);if(Ul(r)){const s=$I(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
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
 */class Ve{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ve(e,0,Q.min(),Q.min(),Q.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ve(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ve(e,2,n,Q.min(),Q.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,Q.min(),Q.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ts{constructor(e,n){this.position=e,this.inclusive=n}}function Yy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Vr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xu{constructor(e,n="asc"){this.field=e,this.dir=n}}function _b(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qI{}class oe extends qI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vb(e,n,r):n==="array-contains"?new Eb(e,r):n==="in"?new YI(e,r):n==="not-in"?new Tb(e,r):n==="array-contains-any"?new Sb(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wb(e,r):new Ib(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vr(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(Vr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends qI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pe(e,n)}matches(e){return Ss(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ss(t){return t.op==="and"}function Ld(t){return t.op==="or"}function vp(t){return KI(t)&&Ss(t)}function KI(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function Fd(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(vp(t))return t.filters.map(e=>Fd(e)).join(",");{const e=t.filters.map(n=>Fd(n)).join(",");return`${t.op}(${e})`}}function GI(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Tn(r.value,i.value)}(t,e):t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&GI(o,i.filters[l]),!0):!1}(t,e):void W()}function WI(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function HI(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`}(t):t instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(HI).join(" ,")+"}"}(t):"Filter"}class vb extends oe{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class wb extends oe{constructor(e,n){super(e,"in",n),this.keys=QI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ib extends oe{constructor(e,n){super(e,"not-in",n),this.keys=QI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Eb extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ha(n)&&ca(n.arrayValue,this.value)}}class YI extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ca(this.value.arrayValue,n)}}class Tb extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ca(this.value.arrayValue,n)}}class Sb extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ca(this.value.arrayValue,r))}}/**
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
 */class Ab{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function jd(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ab(t,e,n,r,i,s,o)}function Ii(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Es(r)).join(",")),e.ue=n}return e.ue}function xa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_b(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!GI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jy(t.startAt,e.startAt)&&Jy(t.endAt,e.endAt)}function ku(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ru(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function Xy(t,e,n){let r=jl,i=!0;for(const s of Ru(t,e)){let o=jl,l=!0;switch(s.op){case"<":case"<=":o=gb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=jl}Hy({value:r,inclusive:i},{value:o,inclusive:l})<0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Hy({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Zy(t,e,n){let r=gr,i=!0;for(const s of Ru(t,e)){let o=gr,l=!0;switch(s.op){case">=":case">":o=yb(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=gr}Qy({value:r,inclusive:i},{value:o,inclusive:l})>0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Qy({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class lc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xb(t,e,n,r,i,s,o,l){return new lc(t,e,n,r,i,s,o,l)}function uc(t){return new lc(t)}function e_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kb(t){return t.collectionGroup!==null}function Lo(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new me(ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new xu(s,r))}),n.has(ke.keyField().canonicalString())||e.ce.push(new xu(ke.keyField(),r))}return e.ce}function Yt(t){const e=X(t);return e.le||(e.le=Rb(e,Lo(t))),e.le}function Rb(t,e){if(t.limitType==="F")return jd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xu(i.field,s)});const n=t.endAt?new Ts(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ts(t.startAt.position,t.startAt.inclusive):null;return jd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ud(t,e,n){return new lc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return xa(Yt(t),Yt(e))&&t.limitType===e.limitType}function JI(t){return`${Ii(Yt(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HI(i)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Es(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function ka(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Yy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Lo(r),i)||r.endAt&&!function(o,l,u){const c=Yy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Lo(r),i))}(t,e)}function Pb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XI(t){return(e,n)=>{let r=!1;for(const i of Lo(t)){const s=Cb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Cb(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Vr(u,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jI(this.inner)}size(){return this.innerSize}}/**
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
 */const bb=new Ae($.comparator);function Dt(){return bb}const ZI=new Ae($.comparator);function wo(...t){let e=ZI;for(const n of t)e=e.insert(n.key,n);return e}function eE(t){let e=ZI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yn(){return Fo()}function tE(){return Fo()}function Fo(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nb=new Ae($.comparator),Db=new me($.comparator);function ne(...t){let e=Db;for(const n of t)e=e.add(n);return e}const Vb=new me(ee);function Ob(){return Vb}/**
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
 */function wp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(e)?"-0":e}}function nE(t){return{integerValue:""+t}}function Mb(t,e){return HC(e)?nE(e):wp(t,e)}/**
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
 */class hc{constructor(){this._=void 0}}function Lb(t,e,n){return t instanceof da?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gp(s)&&(s=yp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof As?iE(t,e):t instanceof xs?sE(t,e):function(i,s){const o=rE(i,s),l=t_(o)+t_(i.Pe);return Md(o)&&Md(i.Pe)?nE(l):wp(i.serializer,l)}(t,e)}function Fb(t,e,n){return t instanceof As?iE(t,e):t instanceof xs?sE(t,e):n}function rE(t,e){return t instanceof fa?function(r){return Md(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class da extends hc{}class As extends hc{constructor(e){super(),this.elements=e}}function iE(t,e){const n=oE(e);for(const r of t.elements)n.some(i=>Tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xs extends hc{constructor(e){super(),this.elements=e}}function sE(t,e){let n=oE(e);for(const r of t.elements)n=n.filter(i=>!Tn(i,r));return{arrayValue:{values:n}}}class fa extends hc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function t_(t){return Te(t.integerValue||t.doubleValue)}function oE(t){return ha(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class jb{constructor(e,n){this.field=e,this.transform=n}}function Ub(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof As&&i instanceof As||r instanceof xs&&i instanceof xs?Is(r.elements,i.elements,Tn):r instanceof fa&&i instanceof fa?Tn(r.Pe,i.Pe):r instanceof da&&i instanceof da}(t.transform,e.transform)}class zb{constructor(e,n){this.version=e,this.transformResults=n}}class At{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function aE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fc(t.key,At.none()):new Fs(t.key,t.data,At.none());{const n=t.data,r=Tt.empty();let i=new me(ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new Wt(i.toArray()),At.none())}}function Bb(t,e,n){t instanceof Fs?function(i,s,o){const l=i.value.clone(),u=r_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!zl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=r_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(lE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jo(t,e,n,r){return t instanceof Fs?function(s,o,l,u){if(!zl(s.precondition,o))return l;const c=s.value.clone(),f=i_(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,l,u){if(!zl(s.precondition,o))return l;const c=i_(s.fieldTransforms,u,o),f=o.data;return f.setAll(lE(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return zl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $b(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=rE(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function n_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Is(r,i,(s,o)=>Ub(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fs extends dc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends dc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r_(t,e,n){const r=new Map;H(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Fb(o,l,n[i]))}return r}function i_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Lb(s,o,e))}return r}class fc extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uE extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ip{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Bb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=aE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>n_(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>n_(n,r))}}class Ep{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length);let i=function(){return Nb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ep(e,n,r,i)}}/**
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
 */class Tp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,ae;function Kb(t){switch(t){default:return W();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function cE(t){if(t===void 0)return pt("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return W()}}(ae=Le||(Le={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Gb(){return new TextEncoder}/**
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
 */const Wb=new ai([4294967295,4294967295],0);function s_(t){const e=Gb().encode(t),n=new EI;return n.update(e),new Uint8Array(n.digest())}function o_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ai([n,r],0),new ai([i,s],0)]}class Sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Io(`Invalid padding: ${n}`);if(r<0)throw new Io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Io(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ai.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ai.fromNumber(r)));return i.compare(Wb)===1&&(i=new ai([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Sp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pc(Q.min(),i,new Ae(ee),Dt(),ne())}}class Ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,ne(),ne(),ne())}}/**
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
 */class Bl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class hE{constructor(e,n){this.targetId=e,this.me=n}}class dE{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class a_{constructor(){this.fe=0,this.ge=u_(),this.pe=je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Ra(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=u_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Hb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dt(),this.qe=l_(),this.Qe=new Ae(ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ku(s))if(r===0){const o=new $(s.path);this.Ue(n,o,Ve.newNoDocument(o,Q.min()))}else H(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Dr(r).toUint8Array()}catch(u){if(u instanceof UI)return _i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Sp(o,i,s)}catch(u){return _i(u instanceof Io?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ku(l.target)){const u=new $(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ve.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new pc(e,n,this.Qe,this.ke,r);return this.ke=Dt(),this.qe=l_(),this.Qe=new Ae(ee),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new a_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new me(ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new a_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function l_(){return new Ae($.comparator)}function u_(){return new Ae($.comparator)}const Qb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Yb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Jb=(()=>({and:"AND",or:"OR"}))();class Xb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zd(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function ks(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zb(t,e){return ks(t,e.toTimestamp())}function yt(t){return H(!!t),Q.fromTimestamp(function(n){const r=Wn(n);return new Pe(r.seconds,r.nanos)}(t))}function Ap(t,e){return Bd(t,e).canonicalString()}function Bd(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pE(t){const e=de.fromString(t);return H(TE(e)),e}function Pu(t,e){return Ap(t.databaseId,e.path)}function li(t,e){const n=pE(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(yE(n))}function mE(t,e){return Ap(t.databaseId,e)}function gE(t){const e=pE(t);return e.length===4?de.emptyPath():yE(e)}function $d(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yE(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function c_(t,e,n){return{name:Pu(t,e),fields:n.value.mapValue.fields}}function eN(t,e,n){const r=li(t,e.name),i=yt(e.updateTime),s=e.createTime?yt(e.createTime):Q.min(),o=new Tt({mapValue:{fields:e.fields}}),l=Ve.newFoundDocument(r,i,s,o);return n&&l.setHasCommittedMutations(),n?l.setHasCommittedMutations():l}function tN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(H(f===void 0||typeof f=="string"),je.fromBase64String(f||"")):(H(f===void 0||f instanceof Buffer||f instanceof Uint8Array),je.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:cE(c.code);return new G(f,c.message||"")}(o);n=new dE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=li(t,r.document.name),s=yt(r.document.updateTime),o=r.document.createTime?yt(r.document.createTime):Q.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=Ve.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Bl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=li(t,r.document),s=r.readTime?yt(r.readTime):Q.min(),o=Ve.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Bl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=li(t,r.document),s=r.removedTargetIds||[];n=new Bl([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qb(i,s),l=r.targetId;n=new hE(l,o)}}return n}function Cu(t,e){let n;if(e instanceof Fs)n={update:c_(t,e.key,e.value)};else if(e instanceof fc)n={delete:Pu(t,e.key)};else if(e instanceof zr)n={update:c_(t,e.key,e.data),updateMask:aN(e.fieldMask)};else{if(!(e instanceof uE))return W();n={verify:Pu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof da)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof As)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Zb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function qd(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?At.updateTime(yt(s.updateTime)):s.exists!==void 0?At.exists(s.exists):At.none()}(e.currentDocument):At.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let u=null;if("setToServerValue"in l)H(l.setToServerValue==="REQUEST_TIME"),u=new da;else if("appendMissingElements"in l){const f=l.appendMissingElements.values||[];u=new As(f)}else if("removeAllFromArray"in l){const f=l.removeAllFromArray.values||[];u=new xs(f)}else"increment"in l?u=new fa(o,l.increment):W();const c=ke.fromServerFormat(l.fieldPath);return new jb(c,u)}(t,i)):[];if(e.update){e.update.name;const i=li(t,e.update.name),s=new Tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Wt(c.map(f=>ke.fromServerFormat(f)))}(e.updateMask);return new zr(i,s,o,n,r)}return new Fs(i,s,n,r)}if(e.delete){const i=li(t,e.delete);return new fc(i,n)}if(e.verify){const i=li(t,e.verify);return new uE(i,n)}return W()}function nN(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?yt(i.updateTime):yt(s);return o.isEqual(Q.min())&&(o=yt(s)),new zb(o,i.transformResults||[])}(n,e))):[]}function _E(t,e){return{documents:[mE(t,e.path)]}}function vE(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=mE(t,i);const s=function(c){if(c.length!==0)return EE(pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Bi(g.field),direction:iN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=zd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function wE(t){let e=gE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=IE(p);return g instanceof pe&&vp(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new xu($i(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,oc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,E=p.values||[];return new Ts(E,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,E=p.values||[];return new Ts(E,g)}(n.endAt)),xb(e,i,o,s,l,"F",u,c)}function rN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$i(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$i(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return oe.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>IE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function iN(t){return Qb[t]}function sN(t){return Yb[t]}function oN(t){return Jb[t]}function Bi(t){return{fieldPath:t.canonicalString()}}function $i(t){return ke.fromServerFormat(t.fieldPath)}function EE(t){return t instanceof oe?function(n){if(n.op==="=="){if(Wy(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NAN"}};if(Gy(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wy(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NAN"}};if(Gy(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(n.field),op:sN(n.op),value:n.value}}}(t):t instanceof pe?function(n){const r=n.getFilters().map(i=>EE(i));return r.length===1?r[0]:{compositeFilter:{op:oN(n.op),filters:r}}}(t):W()}function aN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class SE{constructor(e){this.ct=e}}function lN(t,e){let n;if(e.document)n=eN(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=Ti(e.noDocument.readTime);n=Ve.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=$.fromSegments(e.unknownDocument.path),i=Ti(e.unknownDocument.version);n=Ve.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Pe(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),n}function h_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:bu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Pu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ks(s,o.version.toTimestamp()),createTime:ks(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ei(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:n.path.toArray(),version:Ei(e.version)}}return r}function bu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ei(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ti(t){const e=new Pe(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function Xr(t,e){const n=(e.baseMutations||[]).map(s=>qd(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>qd(t.ct,s)),i=Pe.fromMillis(e.localWriteTimeMs);return new Ip(e.batchId,i,n,r)}function Eo(t){const e=Ti(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ti(t.lastLimboFreeSnapshotVersion):Q.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return H(s.documents.length===1),Yt(uc(gE(s.documents[0])))}(t.query):function(s){return Yt(wE(s))}(t.query),new Mn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,je.fromBase64String(t.resumeToken))}function AE(t,e){const n=Ei(e.snapshotVersion),r=Ei(e.lastLimboFreeSnapshotVersion);let i;i=ku(e.target)?_E(t.ct,e.target):vE(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ii(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function xE(t){const e=wE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ud(e,e.limit,"L"):e}function Ah(t,e){return new Tp(e.largestBatchId,qd(t.ct,e.overlayMutation))}function d_(t,e){const n=e.path.lastSegment();return[t,gt(e.path.popLast()),n]}function f_(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Ei(r.readTime),documentKey:gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class uN{getBundleMetadata(e,n){return p_(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ti(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return p_(e).put(function(i){return{bundleId:i.id,createTime:Ei(yt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return m_(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:xE(s.bundledQuery),readTime:Ti(s.readTime)}}(r)})}saveNamedQuery(e,n){return m_(e).put(function(i){return{name:i.name,readTime:Ei(yt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function p_(t){return $e(t,"bundles")}function m_(t){return $e(t,"namedQueries")}/**
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
 */class mc{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new mc(e,r)}getOverlay(e,n){return uo(e).get(d_(this.userId,n)).next(r=>r?Ah(this.serializer,r):null)}getOverlays(e,n){const r=yn();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const l=new Tp(n,o);i.push(this.ht(e,l))}),b.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(gt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(uo(e).j("collectionPathOverlayIndex",l))}),b.waitFor(s)}getOverlaysForCollection(e,n,r){const i=yn(),s=gt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return uo(e).U("collectionPathOverlayIndex",o).next(l=>{for(const u of l){const c=Ah(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=yn();let o;const l=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return uo(e).J({index:"collectionGroupOverlayIndex",range:l},(u,c,f)=>{const p=Ah(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,n){return uo(e).put(function(i,s,o){const[l,u,c]=d_(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Cu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function uo(t){return $e(t,"documentOverlays")}/**
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
 */class cN{Pt(e){return $e(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?je.fromUint8Array(r):je.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Zr{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Te(e.integerValue));else if("doubleValue"in e){const r=Te(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),la(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Wn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(Dr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?zI(e)?this.dt(n,Number.MAX_SAFE_INTEGER):ac(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):W()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",l=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Te(l)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),$.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Zr.vt=new Zr;function hN(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function g_(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=hN(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class dN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=g_(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=g_(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class fN{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class pN{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class co{constructor(){this.jt=new dN,this.Ht=new fN(this.jt),this.Jt=new pN(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class ei{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ei(this.indexId,this.documentKey,this.arrayValue,r)}}function nr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=y_(t.arrayValue,e.arrayValue),n!==0?n:(n=y_(t.directionalValue,e.directionalValue),n!==0?n:$.comparator(t.documentKey,e.documentKey)))}function y_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class __{constructor(e){this.Xt=new me((n,r)=>ke.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(H(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Dd(e);if(n!==void 0&&!this.sn(n))return!1;const r=Yr(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!i.has(l.field.canonicalString())){const u=r[s];if(!this.on(l,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const l=r[s];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new me(ke.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Ll(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Ll(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Ll(r.field,r.dir==="asc"?0:1)));return new Au(Au.UNKNOWN_ID,this.collectionId,n,aa.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function kE(t){var e,n;if(H(t instanceof oe||t instanceof pe),t instanceof oe){if(t instanceof YI){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>kE(i));return pe.create(r,t.op)}function mN(t){if(t.getFilters().length===0)return[];const e=Wd(kE(t));return H(RE(e)),Kd(e)||Gd(e)?[e]:e.getFilters()}function Kd(t){return t instanceof oe}function Gd(t){return t instanceof pe&&vp(t)}function RE(t){return Kd(t)||Gd(t)||function(n){if(n instanceof pe&&Ld(n)){for(const r of n.getFilters())if(!Kd(r)&&!Gd(r))return!1;return!0}return!1}(t)}function Wd(t){if(H(t instanceof oe||t instanceof pe),t instanceof oe)return t;if(t.filters.length===1)return Wd(t.filters[0]);const e=t.filters.map(r=>Wd(r));let n=pe.create(e,t.op);return n=Nu(n),RE(n)?n:(H(n instanceof pe),H(Ss(n)),H(n.filters.length>1),n.filters.reduce((r,i)=>xp(r,i)))}function xp(t,e){let n;return H(t instanceof oe||t instanceof pe),H(e instanceof oe||e instanceof pe),n=t instanceof oe?e instanceof oe?function(i,s){return pe.create([i,s],"and")}(t,e):v_(t,e):e instanceof oe?v_(e,t):function(i,s){if(H(i.filters.length>0&&s.filters.length>0),Ss(i)&&Ss(s))return WI(i,s.getFilters());const o=Ld(i)?i:s,l=Ld(i)?s:i,u=o.filters.map(c=>xp(c,l));return pe.create(u,"or")}(t,e),Nu(n)}function v_(t,e){if(Ss(e))return WI(e,t.getFilters());{const n=e.filters.map(r=>xp(t,r));return pe.create(n,"or")}}function Nu(t){if(H(t instanceof oe||t instanceof pe),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return Nu(e[0]);if(KI(t))return t;const n=e.map(i=>Nu(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
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
 */class gN{constructor(){this.un=new kp}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Ft.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class kp{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new me(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(de.comparator)).toArray()}}/**
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
 */const ml=new Uint8Array(0);class yN{constructor(e,n){this.databaseId=n,this.cn=new kp,this.ln=new Ur(r=>Ii(r),(r,i)=>xa(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:gt(i)};return w_(e).put(s)}return b.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[CI(n),""],!1,!0);return w_(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(gn(o.parent))}return r})}addFieldIndex(e,n){const r=ho(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Fi(e);return s.next(l=>{o.put(f_(l,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ho(e),i=Fi(e),s=Li(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ho(e),r=Li(e),i=Fi(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return b.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new __(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Li(e);let i=!0;const s=new Map;return b.forEach(this.hn(n),o=>this.Pn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=ne();const l=[];return b.forEach(s,(u,c)=>{j("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${Ii(n)}`);const f=function(S,V){const F=Dd(V);if(F===void 0)return null;for(const L of Ru(S,F.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),p=function(S,V){const F=new Map;for(const L of Yr(V))for(const v of Ru(S,L.fieldPath))switch(v.op){case"==":case"in":F.set(L.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return F.set(L.fieldPath.canonicalString(),v.value),Array.from(F.values())}return null}(c,u),g=function(S,V){const F=[];let L=!0;for(const v of Yr(V)){const y=v.kind===0?Xy(S,v.fieldPath,S.startAt):Zy(S,v.fieldPath,S.startAt);F.push(y.value),L&&(L=y.inclusive)}return new Ts(F,L)}(c,u),E=function(S,V){const F=[];let L=!0;for(const v of Yr(V)){const y=v.kind===0?Zy(S,v.fieldPath,S.endAt):Xy(S,v.fieldPath,S.endAt);F.push(y.value),L&&(L=y.inclusive)}return new Ts(F,L)}(c,u),C=this.In(u,c,g),N=this.In(u,c,E),O=this.Tn(u,c,p),A=this.En(u.indexId,f,C,g.inclusive,N,E.inclusive,O);return b.forEach(A,_=>r.G(_,n.limit).next(S=>{S.forEach(V=>{const F=$.fromSegments(V.documentKey);o.has(F)||(o=o.add(F),l.push(F))})}))}).next(()=>l)}return b.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=mN(pe.create(e.filters,"and")).map(r=>jd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,l){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),f=[];for(let p=0;p<u;++p){const g=n?this.dn(n[p/c]):ml,E=this.An(e,g,r[p%c],i),C=this.Rn(e,g,s[p%c],o),N=l.map(O=>this.An(e,g,O,!0));f.push(...this.createRange(E,C,N))}return f}An(e,n,r,i){const s=new ei(e,$.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new ei(e,$.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new __(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)r.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return b.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new me(ke.comparator),f=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:c=c.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new co;for(const i of Yr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Zr.vt.It(s,o)}return r.zt()}dn(e){const n=new co;return Zr.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new co;return Zr.vt.It(_p(this.databaseId,n),r.Yt(function(s){const o=Yr(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new co);let s=0;for(const o of Yr(e)){const l=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&ha(l))i=this.gn(i,o,l);else{const c=u.Yt(o.kind);Zr.vt.It(l,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const l of i){const u=new co;u.seed(l.zt()),Zr.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ho(e),i=Fi(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return b.forEach(s,l=>i.get([l.indexId,this.uid]).next(u=>{o.push(function(f,p){const g=p?new aa(p.sequenceNumber,new Ft(Ti(p.readTime),new $(gn(p.documentKey)),p.largestBatchId)):aa.empty(),E=f.fields.map(([C,N])=>new Ll(ke.fromServerFormat(C),N));return new Au(f.indexId,f.collectionGroup,E,g)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ho(e),s=Fi(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(l=>b.forEach(l,u=>s.put(f_(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(r.set(i.collectionGroup,l),b.forEach(l,u=>this.wn(e,i,u).next(c=>{const f=this.Sn(s,u);return c.isEqual(f)?b.resolve():this.bn(e,s,u,c,f)}))))})}Dn(e,n,r,i){return Li(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Li(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Li(e);let s=new me(nr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,l)=>{s=s.add(new ei(r.indexId,n,l.arrayValue,l.directionalValue))}).next(()=>s)}Sn(e,n){let r=new me(nr);const i=this.Vn(n,e);if(i==null)return r;const s=Dd(n);if(s!=null){const o=e.data.field(s.fieldPath);if(ha(o))for(const l of o.arrayValue.values||[])r=r.add(new ei(n.indexId,e.key,this.dn(l),i))}else r=r.add(new ei(n.indexId,e.key,ml,i));return r}bn(e,n,r,i,s){j("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,f,p,g){const E=u.getIterator(),C=c.getIterator();let N=Mi(E),O=Mi(C);for(;N||O;){let A=!1,_=!1;if(N&&O){const S=f(N,O);S<0?_=!0:S>0&&(A=!0)}else N!=null?_=!0:A=!0;A?(p(O),O=Mi(C)):_?(g(N),N=Mi(E)):(N=Mi(E),O=Mi(C))}}(i,s,nr,l=>{o.push(this.Dn(e,n,r,l))},l=>{o.push(this.vn(e,n,r,l))}),b.waitFor(o)}yn(e){let n=1;return Fi(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,l)=>nr(o,l)).filter((o,l,u)=>!l||nr(o,u[l-1])!==0);const i=[];i.push(e);for(const o of r){const l=nr(o,e),u=nr(o,n);if(l===0)i[0]=e.Zt();else if(l>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const l=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ml,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ml,[]];s.push(IDBKeyRange.bound(l,u))}return s}Cn(e,n){return nr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(I_)}getMinOffset(e,n){return b.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||W())).next(I_)}}function w_(t){return $e(t,"collectionParents")}function Li(t){return $e(t,"indexEntries")}function ho(t){return $e(t,"indexConfiguration")}function Fi(t){return $e(t,"indexState")}function I_(t){H(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;fp(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ft(e.readTime,e.documentKey,n)}/**
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
 */const E_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function PE(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let l=0;const u=r.J({range:o},(f,p,g)=>(l++,g.delete()));s.push(u.next(()=>{H(l===1)}));const c=[];for(const f of n.mutations){const p=OI(e,f.key.path,n.batchId);s.push(i.delete(p)),c.push(f.key)}return b.waitFor(s).next(()=>c)}function Du(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw W();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);class gc{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new gc(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return rr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=qi(e),o=rr(e);return o.add({}).next(l=>{H(typeof l=="number");const u=new Ip(l,n,r,i),c=function(E,C,N){const O=N.baseMutations.map(_=>Cu(E.ct,_)),A=N.mutations.map(_=>Cu(E.ct,_));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:O,mutations:A}}(this.serializer,this.userId,u),f=[];let p=new me((g,E)=>ee(g.canonicalString(),E.canonicalString()));for(const g of i){const E=OI(this.userId,g.key.path,l);p=p.add(g.key.path.popLast()),f.push(o.put(c)),f.push(s.put(E,YC))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[l]=u.keys()}),b.waitFor(f).next(()=>u)})}lookupMutationBatch(e,n){return rr(e).get(n).next(r=>r?(H(r.userId===this.userId),Xr(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?b.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return rr(e).J({index:"userMutationsIndex",range:i},(o,l,u)=>{l.userId===this.userId&&(H(l.batchId>=r),s=Xr(this.serializer,l)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return rr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return rr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Xr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Fl(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return qi(e).J({range:i},(o,l,u)=>{const[c,f,p]=o,g=gn(f);if(c===this.userId&&n.path.isEqual(g))return rr(e).get(p).next(E=>{if(!E)throw W();H(E.userId===this.userId),s.push(Xr(this.serializer,E))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(ee);const i=[];return n.forEach(s=>{const o=Fl(this.userId,s.path),l=IDBKeyRange.lowerBound(o),u=qi(e).J({range:l},(c,f,p)=>{const[g,E,C]=c,N=gn(E);g===this.userId&&s.path.isEqual(N)?r=r.add(C):p.done()});i.push(u)}),b.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Fl(this.userId,r),o=IDBKeyRange.lowerBound(s);let l=new me(ee);return qi(e).J({range:o},(u,c,f)=>{const[p,g,E]=u,C=gn(g);p===this.userId&&r.isPrefixOf(C)?C.length===i&&(l=l.add(E)):f.done()}).next(()=>this.xn(e,l))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(rr(e).get(s).next(o=>{if(o===null)throw W();H(o.userId===this.userId),r.push(Xr(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return PE(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return qi(e).J({range:r},(s,o,l)=>{if(s[0]===this.userId){const u=gn(s[1]);i.push(u)}else l.done()}).next(()=>{H(i.length===0)})})}containsKey(e,n){return CE(e,this.userId,n)}Nn(e){return bE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function CE(t,e,n){const r=Fl(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return qi(t).J({range:s,H:!0},(l,u,c)=>{const[f,p,g]=l;f===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function rr(t){return $e(t,"mutations")}function qi(t){return $e(t,"documentMutations")}function bE(t){return $e(t,"mutationQueues")}/**
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
 */class Si{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Si(0)}static kn(){return new Si(-1)}}/**
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
 */class _N{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Si(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>Q.fromTimestamp(new Pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ji(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ji(e).J((o,l)=>{const u=Eo(l);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ji(e).J((r,i)=>{const s=Eo(i);n(s)})}qn(e){return T_(e).get("targetGlobalKey").next(n=>(H(n!==null),n))}Qn(e,n){return T_(e).put("targetGlobalKey",n)}Kn(e,n){return ji(e).put(AE(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ii(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ji(e).J({range:i,index:"queryTargetsIndex"},(o,l,u)=>{const c=Eo(l);xa(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=fr(e);return n.forEach(o=>{const l=gt(o.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,n,r){const i=fr(e);return b.forEach(n,s=>{const o=gt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=fr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=fr(e);let s=ne();return i.J({range:r,H:!0},(o,l,u)=>{const c=gn(o[1]),f=new $(c);s=s.add(f)}).next(()=>s)}containsKey(e,n){const r=gt(n.path),i=IDBKeyRange.bound([r],[CI(r)],!1,!0);let s=0;return fr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,l],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return ji(e).get(n).next(r=>r?Eo(r):null)}}function ji(t){return $e(t,"targets")}function T_(t){return $e(t,"targetGlobal")}function fr(t){return $e(t,"targetDocuments")}/**
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
 */function S_([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class vN{constructor(e){this.Un=e,this.buffer=new me(S_),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();S_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){j("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){jr(n)?j("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Pi(n)}await this.Hn(3e5)})}}class IN{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Gt.oe);const r=new vN(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(E_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),E_):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ui()<=se.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function EN(t,e){return new IN(t,e)}/**
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
 */class TN{constructor(e,n){this.db=e,this.garbageCollector=EN(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return gl(e,r)}removeReference(e,n,r){return gl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return gl(e,n)}nr(e,n){return function(i,s){let o=!1;return bE(i).Y(l=>CE(i,l,s).next(u=>(u&&(o=!0),b.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,l)=>{if(l<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),fr(e).delete(function(p){return[0,gt(p.path)]}(o))))});i.push(u)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return gl(e,n)}tr(e,n){const r=fr(e);let i,s=Gt.oe;return r.J({index:"documentTargetsIndex"},([o,l],{path:u,sequenceNumber:c})=>{o===0?(s!==Gt.oe&&n(new $(gn(i)),s),s=c,i=u):s=Gt.oe}).next(()=>{s!==Gt.oe&&n(new $(gn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function gl(t,e){return fr(t).put(function(r,i){return{targetId:0,path:gt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class NE{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Gr(e).put(r)}removeEntry(e,n,r){return Gr(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],bu(o),l[l.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Ve.newInvalidDocument(n);return Gr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(fo(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Ve.newInvalidDocument(n)};return Gr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(fo(n))},(i,s)=>{r={document:this.ir(n,s),size:Du(s)}}).next(()=>r)}getEntries(e,n){let r=Dt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Dt(),i=new Ae($.comparator);return this._r(e,n,(s,o)=>{const l=this.ir(s,o);r=r.insert(s,l),i=i.insert(s,Du(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return b.resolve();let i=new me(k_);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(fo(i.first()),fo(i.last())),o=i.getIterator();let l=o.getNext();return Gr(e).J({index:"documentKeyIndex",range:s},(u,c,f)=>{const p=$.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;l&&k_(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,c),l=o.hasNext()?o.getNext():null),l?f.$(fo(l)):f.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,l=[o.popLast().toArray(),o.lastSegment(),bu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gr(e).U(IDBKeyRange.bound(l,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let f=Dt();for(const p of c){const g=this.ir($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(ka(n,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,n,r,i){let s=Dt();const o=x_(n,r),l=x_(n,Ft.max());return Gr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(u,c,f)=>{const p=this.ir($.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new AN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return A_(e).get("remoteDocumentGlobalKey").next(n=>(H(!!n),n))}rr(e,n){return A_(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=lN(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ve.newInvalidDocument(e)}}function DE(t){return new SN(t)}class AN extends NE{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Ur(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new me((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const u=h_(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Du(u);r+=c-l.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=l.size,this.trackRemovals){const u=h_(this.cr.serializer,o.convertToNoDocument(Q.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function A_(t){return $e(t,"remoteDocumentGlobal")}function Gr(t){return $e(t,"remoteDocumentsV14")}function fo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function x_(t,e){const n=e.documentKey.path.toArray();return[t,bu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function k_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class xN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class VE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&jo(r.mutation,i,Wt.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=yn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dt();const o=Fo(),l=function(){return Fo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof zr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),jo(f.mutation,c,f.mutation.getFieldMask(),Pe.now())):o.set(c.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new xN(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Fo();let i=new Ae((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Wt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=tE();f.forEach(g=>{if(!s.has(g)){const E=aE(n.get(g),r.get(g));E!==null&&p.set(g,E),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(yn());let l=-1,u=s;return o.next(c=>b.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(f=>({batchId:l,changes:eE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,g){return new lc(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Ve.newInvalidDocument(f)))});let l=wo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&jo(f.mutation,c,Wt.empty(),Pe.now()),ka(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class kN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yt(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:xE(i.bundledQuery),readTime:yt(i.readTime)}}(n)),b.resolve()}}/**
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
 */class RN{constructor(){this.overlays=new Ae($.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yn();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=yn(),s=n.length+1,o=new $(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=yn(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=yn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return b.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Tp(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class PN{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
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
 */class Rp{constructor(){this.Tr=new me(qe.Er),this.dr=new me(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new $(new de([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new $(new de([])),r=new qe(n,e),i=new qe(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return $.comparator(e.key,n.key)||ee(e.wr,n.wr)}static Ar(e,n){return ee(e.wr,n.wr)||$.comparator(e.key,n.key)}}/**
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
 */class CN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new me(qe.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ip(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(ee);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new qe(new $(s),0);let l=new me(ee);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),b.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bN{constructor(e){this.Mr=e,this.docs=function(){return new Ae($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=Dt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dt();const o=n.path,l=new $(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fp(bI(f),r)<=0||(i.has(f.key)||ka(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NN(this)}getSize(e){return b.resolve(this.size)}}class NN extends NE{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class DN{constructor(e){this.persistence=e,this.Nr=new Ur(n=>Ii(n),xa),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Rp,this.targetCount=0,this.kr=Si.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Si(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class OE{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Gt(0),this.Kr=!1,this.Kr=!0,this.$r=new PN,this.referenceDelegate=e(this),this.Ur=new DN(this),this.indexManager=new gN,this.remoteDocumentCache=function(i){return new bN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new SE(n),this.Gr=new kN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new CN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new VN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class VN extends DI{constructor(e){super(),this.currentSequenceNumber=e}}class yc{constructor(e){this.persistence=e,this.Jr=new Rp,this.Yr=null}static Zr(e){return new yc(e)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=$.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class ON{constructor(e){this.serializer=e}O(e,n,r,i){const s=new sc("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zy,{unique:!0}),u.createObjectStore("documentMutations")}(e),R_(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),R_(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zy,{unique:!0});const p=c.store("mutations"),g=f.map(E=>p.put(E));return b.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:lb});c.createIndex("collectionPathOverlayIndex",ub,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",cb,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:JC});c.createIndex("documentKeyIndex",XC),c.createIndex("collectionGroupIndex",ZC)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:ib}).createIndex("sequenceNumberIndex",sb,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:ob}).createIndex("documentKeyIndex",ab,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Du(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(l=>b.forEach(l,u=>{H(u.userId===s.userId);const c=Xr(this.serializer,u);return PE(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,l)=>{const u=new de(o),c=function(p){return[0,gt(p)]}(u);s.push(n.get(c).next(f=>f?b.resolve():(p=>n.put({targetId:0,path:gt(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>b.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:rb});const r=n.store("collectionParents"),i=new kp,s=o=>{if(i.add(o)){const l=o.lastSegment(),u=o.popLast();return r.put({collectionId:l,parent:gt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,l)=>{const u=new de(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,l,u],c)=>{const f=gn(l);return s(f.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Eo(i),o=AE(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const l=n.store("remoteDocumentsV14"),u=function(p){return p.document?new $(de.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):W()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(c))}).next(()=>b.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=DE(this.serializer),s=new OE(yc.Zr,this.serializer.ct);return r.U().next(o=>{const l=new Map;return o.forEach(u=>{var c;let f=(c=l.get(u.userId))!==null&&c!==void 0?c:ne();Xr(this.serializer,u).keys().forEach(p=>f=f.add(p)),l.set(u.userId,f)}),b.forEach(l,(u,c)=>{const f=new Je(c),p=mc.lt(this.serializer,f),g=s.getIndexManager(f),E=gc.lt(f,this.serializer,g,s.referenceDelegate);return new VE(i,E,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Vd(n,Gt.oe),u).next()})})}}function R_(t){t.createObjectStore("targetDocuments",{keyPath:tb}).createIndex("documentTargetsIndex",nb,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eb,{unique:!0}),t.createObjectStore("targetGlobal")}const xh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pp{constructor(e,n,r,i,s,o,l,u,c,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=l,this.ci=c,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Pp.D())throw new G(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new TN(this,i),this.Ai=n+"main",this.serializer=new SE(u),this.Ri=new Rr(this.Ai,this.hi,new ON(this.serializer)),this.$r=new cN,this.Ur=new _N(this.referenceDelegate,this.serializer),this.remoteDocumentCache=DE(this.serializer),this.Gr=new uN,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&pt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new G(M.FAILED_PRECONDITION,xh);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Gt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(jr(e))return j("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return j("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return po(e).get("owner").next(n=>b.resolve(this.vi(n)))}Ci(e){return yl(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=$e(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(l=>s.indexOf(l)===-1);return b.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?b.resolve(!0):po(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new G(M.FAILED_PRECONDITION,xh);return!1}}return!(!this.networkEnabled||!this.inForeground)||yl(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&j("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Vd(e,Gt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>yl(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return gc.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new yN(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return mc.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){j("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?fb:u===16?db:u===15?mp:u===14?FI:u===13?LI:u===12?hb:u===11?MI:void W()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,l=>(o=new Vd(l,this.Qr?this.Qr.next():Gt.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw pt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new G(M.FAILED_PRECONDITION,NI);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return po(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new G(M.FAILED_PRECONDITION,xh)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return po(e).put("owner",n)}static D(){return Rr.D()}bi(e){const n=po(e);return n.get("owner").next(r=>this.vi(r)?(j("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(pt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;pw()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return j("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return pt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){pt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function po(t){return $e(t,"owner")}function yl(t){return $e(t,"clientMetadata")}function MN(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Cp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cp(e,n.fromCache,r,i)}}/**
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
 */class LN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ME{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return pw()?8:VI(Be())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new LN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ui()<=se.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",zi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(Ui()<=se.DEBUG&&j("QueryEngine","Query:",zi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ui()<=se.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",zi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):b.resolve())}Yi(e,n){if(e_(n))return b.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ud(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ud(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return e_(n)||i.isEqual(Q.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?b.resolve(null):(Ui()<=se.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(n)),this.rs(e,o,n,$C(i,-1)).next(l=>l))})}ts(e,n){let r=new me(XI(e));return n.forEach((i,s)=>{ka(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ui()<=se.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ft.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(ee),this._s=new Ur(s=>Ii(s),xa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function LE(t,e,n,r){return new FN(t,e,n,r)}async function FE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function jN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let E=b.resolve();return g.forEach(C=>{E=E.next(()=>f.getEntry(u,C)).next(N=>{const O=c.docVersions.get(C);H(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function UN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let E=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(je.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(p,E),function(N,O,A){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(g,E,f)&&l.push(n.Ur.updateTargetData(s,E))});let u=Dt(),c=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(zN(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function zN(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dt();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):j("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function BN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $N(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Hd(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jr(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function P_(t,e,n){const r=X(t);let i=Q.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=X(u),g=p._s.get(f);return g!==void 0?b.resolve(p.os.get(g)):p.Ur.getTargetData(c,f)}(r,o,Yt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ne())).next(l=>(qN(r,Pb(e),l),{documents:l,Ts:s})))}function qN(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class C_{constructor(){this.activeTargetIds=Ob()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UE{constructor(){this.so=new C_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new C_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KN{_o(e){}shutdown(){}}/**
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
 */class b_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _l=null;function kh(){return _l===null?_l=function(){return 268435456+Math.round(2147483648*Math.random())}():_l++,"0x"+_l.toString(16)}/**
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
 */const GN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class WN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ot="WebChannelConnection";class HN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=kh(),u=this.xo(n,r.toUriEncodedString());j("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(j("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw _i("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=GN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=kh();return new Promise((o,l)=>{const u=new TI;u.setWithCredentials(!0),u.listenOnce(SI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ml.NO_ERROR:const f=u.getResponseJson();j(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ml.TIMEOUT:j(ot,`RPC '${e}' ${s} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const p=u.getStatus();if(j(ot,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const C=function(O){const A=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(A)>=0?A:M.UNKNOWN}(E.status);l(new G(C,E.message))}else l(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{j(ot,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);j(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=kh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kI(),l=xI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");j(ot,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,E=!1;const C=new WN({Io:O=>{E?j(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(j(ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),j(ot,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),N=(O,A,_)=>{O.listen(A,S=>{try{_(S)}catch(V){setTimeout(()=>{throw V},0)}})};return N(p,vo.EventType.OPEN,()=>{E||(j(ot,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(p,vo.EventType.CLOSE,()=>{E||(E=!0,j(ot,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(p,vo.EventType.ERROR,O=>{E||(E=!0,_i(ot,`RPC '${e}' stream ${i} transport errored:`,O),C.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,vo.EventType.MESSAGE,O=>{var A;if(!E){const _=O.data[0];H(!!_);const S=_,V=S.error||((A=S[0])===null||A===void 0?void 0:A.error);if(V){j(ot,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let L=function(w){const T=Le[w];if(T!==void 0)return cE(T)}(F),v=V.message;L===void 0&&(L=M.INTERNAL,v="Unknown error status: "+F+" with message "+V.message),E=!0,C.So(new G(L,v)),p.close()}else j(ot,`RPC '${e}' stream ${i} received:`,_),C.bo(_)}}),N(l,AI.STAT_EVENT,O=>{O.stat===Nd.PROXY?j(ot,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Nd.NOPROXY&&j(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}/**
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
 */function QN(){return typeof window<"u"?window:null}function $l(){return typeof document<"u"?document:null}/**
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
 */function _c(t){return new Xb(t,!0)}/**
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
 */class zE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class BE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YN extends BE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=tN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?yt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=$d(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ku(u)?{documents:_E(s,u)}:{query:vE(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fE(s,o.resumeToken);const c=zd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=ks(s,o.snapshotVersion.toTimestamp());const c=zd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=rN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=$d(this.serializer),n.removeTarget=e,this.a_(n)}}class JN extends BE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return H(!!e.streamToken),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=nN(e.writeResults,e.commitTime),r=yt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=$d(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Cu(this.serializer,r))};this.a_(n)}}/**
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
 */class XN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Bd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Bd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ZN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pt(n),this.D_=!1):j("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class e2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ci(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await Pa(c),c.q_.set("Unknown"),c.L_.delete(4),await vc(c)}(this))})}),this.q_=new ZN(r,i)}}async function vc(t){if(Ci(t))for(const e of t.B_)await e(!0)}async function Pa(t){for(const e of t.B_)await e(!1)}function $E(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Vp(n)?Dp(n):js(n).r_()&&Np(n,e))}function bp(t,e){const n=X(t),r=js(n);n.N_.delete(e),r.r_()&&qE(n,e),n.N_.size===0&&(r.r_()?r.o_():Ci(n)&&n.q_.set("Unknown"))}function Np(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}js(t).A_(e)}function qE(t,e){t.Q_.xe(e),js(t).R_(e)}function Dp(t){t.Q_=new Hb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),js(t).start(),t.q_.v_()}function Vp(t){return Ci(t)&&!js(t).n_()&&t.N_.size>0}function Ci(t){return X(t).L_.size===0}function KE(t){t.Q_=void 0}async function t2(t){t.q_.set("Online")}async function n2(t){t.N_.forEach((e,n)=>{Np(t,e)})}async function r2(t,e){KE(t),Vp(t)?(t.q_.M_(e),Dp(t)):t.q_.set("Unknown")}async function i2(t,e,n){if(t.q_.set("Online"),e instanceof dE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vu(t,r)}else if(e instanceof Bl?t.Q_.Ke(e):e instanceof hE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await jE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(je.EMPTY_BYTE_STRING,f.snapshotVersion)),qE(s,u);const p=new Mn(f.target,u,c,f.sequenceNumber);Np(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Vu(t,r)}}async function Vu(t,e,n){if(!jr(e))throw e;t.L_.add(1),await Pa(t),t.q_.set("Offline"),n||(n=()=>jE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vc(t)})}function GE(t,e){return e().catch(n=>Vu(t,n,e))}async function Ca(t){const e=X(t),n=Or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;s2(e);)try{const i=await BN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,o2(e,i)}catch(i){await Vu(e,i)}WE(e)&&HE(e)}function s2(t){return Ci(t)&&t.O_.length<10}function o2(t,e){t.O_.push(e);const n=Or(t);n.r_()&&n.V_&&n.m_(e.mutations)}function WE(t){return Ci(t)&&!Or(t).n_()&&t.O_.length>0}function HE(t){Or(t).start()}async function a2(t){Or(t).p_()}async function l2(t){const e=Or(t);for(const n of t.O_)e.m_(n.mutations)}async function u2(t,e,n){const r=t.O_.shift(),i=Ep.from(r,e,n);await GE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ca(t)}async function c2(t,e){e&&Or(t).V_&&await async function(r,i){if(function(o){return Kb(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Or(r).s_(),await GE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ca(r)}}(t,e),WE(t)&&HE(t)}async function N_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Ci(n);n.L_.add(3),await Pa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vc(n)}async function h2(t,e){const n=X(t);e?(n.L_.delete(2),await vc(n)):e||(n.L_.add(2),await Pa(n),n.q_.set("Unknown"))}function js(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new YN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:t2.bind(null,t),Ro:n2.bind(null,t),mo:r2.bind(null,t),d_:i2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Vp(t)?Dp(t):t.q_.set("Unknown")):(await t.K_.stop(),KE(t))})),t.K_}function Or(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new JN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:a2.bind(null,t),mo:c2.bind(null,t),f_:l2.bind(null,t),g_:u2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ca(t)):(await t.U_.stop(),t.O_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Op{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Op(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(t,e){if(pt("AsyncQueue",`${e}: ${t}`),jr(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class D_{constructor(){this.W_=new Ae($.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):W():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Rs(e,n,fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class d2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class f2{constructor(){this.queries=V_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=V_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function V_(){return new Ur(t=>JI(t),cc)}async function p2(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new d2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Mp(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Lp(n)}async function m2(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function g2(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Lp(n)}function y2(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Lp(t){t.Y_.forEach(e=>{e.next()})}var Qd,O_;(O_=Qd||(Qd={})).ea="default",O_.Cache="cache";class _2{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qd.Cache}}/**
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
 */class QE{constructor(e){this.key=e}}class YE{constructor(e){this.key=e}}class v2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=XI(e),this.Ra=new fs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new D_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),E=ka(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;g&&E?g.data.isEqual(E.data)?C!==N&&(r.track({type:3,doc:E}),O=!0):this.ga(g,E)||(r.track({type:2,doc:E}),O=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),O=!0):g&&!E&&(r.track({type:1,doc:g}),O=!0,(u||c)&&(l=!0)),O&&(E?(o=o.add(E),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(E,C){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return N(E)-N(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Rs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new D_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new YE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new QE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class w2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class I2{constructor(e){this.key=e,this.va=!1}}class E2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ur(l=>JI(l),cc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae($.comparator),this.Na=new Map,this.La=new Rp,this.Ba={},this.ka=new Map,this.qa=Si.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function T2(t,e,n=!0){const r=nT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await JE(r,e,n,!0),i}async function S2(t,e){const n=nT(t);await JE(n,e,!0,!1)}async function JE(t,e,n,r){const i=await $N(t.localStore,Yt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await A2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&$E(t.remoteStore,i),l}async function A2(t,e,n,r,i){t.Ka=(p,g,E)=>async function(N,O,A,_){let S=O.view.ma(A);S.ns&&(S=await P_(N.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,S)));const V=_&&_.targetChanges.get(O.targetId),F=_&&_.targetMismatches.get(O.targetId)!=null,L=O.view.applyChanges(S,N.isPrimaryClient,V,F);return L_(N,O.targetId,L.wa),L.snapshot}(t,p,g,E);const s=await P_(t.localStore,e,!0),o=new v2(e,s.Ts),l=o.ma(s.documents),u=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);L_(t,n,c.wa);const f=new w2(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function x2(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!cc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Hd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&bp(r.remoteStore,i.targetId),Yd(r,i.targetId)}).catch(Pi)):(Yd(r,i.targetId),await Hd(r.localStore,i.targetId,!0))}async function k2(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bp(n.remoteStore,r.targetId))}async function R2(t,e,n){const r=rT(t);try{const i=await function(o,l){const u=X(o),c=Pe.now(),f=l.reduce((E,C)=>E.add(C.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=Dt(),N=ne();return u.cs.getEntries(E,f).next(O=>{C=O,C.forEach((A,_)=>{_.isValidDocument()||(N=N.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,C)).next(O=>{p=O;const A=[];for(const _ of l){const S=$b(_,p.get(_.key).overlayedDocument);S!=null&&A.push(new zr(_.key,S,$I(S.value.mapValue),At.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,A,l)}).next(O=>{g=O;const A=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(E,O.batchId,A)})}).then(()=>({batchId:g.batchId,changes:eE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ee)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ba(r,i.changes),await Ca(r.remoteStore)}catch(i){const s=Mp(i,"Failed to persist write");n.reject(s)}}async function XE(t,e){const n=X(t);try{const r=await UN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?H(o.va):i.removedDocuments.size>0&&(H(o.va),o.va=!1))}),await ba(n,r,e)}catch(r){await Pi(r)}}function M_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&Lp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function P2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae($.comparator);o=o.insert(s,Ve.newNoDocument(s,Q.min()));const l=ne().add(s),u=new pc(Q.min(),new Map,new Ae(ee),o,l);await XE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Fp(r)}else await Hd(r.localStore,e,!1).then(()=>Yd(r,e,n)).catch(Pi)}async function C2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await jN(n.localStore,e);eT(n,r,null),ZE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,i)}catch(i){await Pi(i)}}async function b2(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(H(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);eT(r,e,n),ZE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,i)}catch(i){await Pi(i)}}function ZE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function eT(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||tT(t,r)})}function tT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(bp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Fp(t))}function L_(t,e,n){for(const r of n)r instanceof QE?(t.La.addReference(r.key,e),N2(t,r)):r instanceof YE?(j("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||tT(t,r.key)):W()}function N2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(j("SyncEngine","New document in limbo: "+n),t.xa.add(r),Fp(t))}function Fp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new $(de.fromString(e)),r=t.qa.next();t.Na.set(r,new I2(n)),t.Oa=t.Oa.insert(n,r),$E(t.remoteStore,new Mn(Yt(uc(n.path)),r,"TargetPurposeLimboResolution",Gt.oe))}}async function ba(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Cp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,g=>b.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>b.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!jr(p))throw p;j("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const E=f.os.get(g),C=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,N)}}}(r.localStore,s))}async function D2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await FE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r.hs)}}function V2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function nT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=V2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=P2.bind(null,e),e.Ca.d_=g2.bind(null,e.eventManager),e.Ca.$a=y2.bind(null,e.eventManager),e}function rT(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b2.bind(null,e),e}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return LE(this.persistence,new ME,e.initialUser,this.serializer)}Ga(e){return new OE(yc.Zr,this.serializer)}Wa(e){return new UE}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class O2 extends pa{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await rT(this.Ja.syncEngine),await Ca(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return LE(this.persistence,new ME,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new wN(r,e.asyncQueue,n)}Ha(e,n){const r=new WC(n,this.persistence);return new GC(e.asyncQueue,r)}Ga(e){const n=MN(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Pp(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,QN(),$l(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new UE}}class Ou{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=D2.bind(null,this.syncEngine),await h2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new f2}()}createDatastore(e){const n=_c(e.databaseInfo.databaseId),r=function(s){return new HN(s)}(e.databaseInfo);return function(s,o,l,u){return new XN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new e2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>M_(this.syncEngine,n,0),function(){return b_.D()?new b_:new KN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new E2(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);j("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Pa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ou.provider={build:()=>new Ou};/**
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
 */class M2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class L2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=PI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rh(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await FE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await F2(t);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>N_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>N_(e.remoteStore,i)),t._onlineComponents=e}async function F2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;_i("Error using user provided cache. Falling back to memory cache: "+n),await Rh(t,new pa)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Rh(t,new pa);return t._offlineComponents}async function iT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await F_(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await F_(t,new Ou))),t._onlineComponents}function j2(t){return iT(t).then(e=>e.syncEngine)}async function j_(t){const e=await iT(t),n=e.eventManager;return n.onListen=T2.bind(null,e.syncEngine),n.onUnlisten=x2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=S2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=k2.bind(null,e.syncEngine),n}/**
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
 */function sT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const U_=new Map;/**
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
 */function oT(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function U2(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function z_(t){if(!$.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function B_(t){if($.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jp(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class $_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VC;switch(r.type){case"firstParty":return new FC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=U_.get(n);r&&(j("ComponentProvider","Removing Datastore"),U_.delete(n),r.terminate())}(this),Promise.resolve()}}function z2(t,e,n,r={}){var i;const s=(t=Pr(t,wc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Je.MOCK_USER;else{l=BA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Je(c)}t._authCredentials=new OC(new RI(l,u))}}/**
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
 */class Ic{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ic(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class Cr extends Ic{constructor(e,n,r){super(e,n,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new $(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function q_(t,e,...n){if(t=_t(t),oT("collection","path",e),t instanceof wc){const r=de.fromString(e,...n);return B_(r),new Cr(t,null,r)}{if(!(t instanceof Mt||t instanceof Cr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return B_(r),new Cr(t.firestore,null,r)}}function ir(t,e,...n){if(t=_t(t),arguments.length===1&&(e=PI.newId()),oT("doc","path",e),t instanceof wc){const r=de.fromString(e,...n);return z_(r),new Mt(t,null,new $(r))}{if(!(t instanceof Mt||t instanceof Cr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return z_(r),new Mt(t.firestore,t instanceof Cr?t.converter:null,new $(r))}}/**
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
 */class K_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zE(this,"async_queue_retry"),this.Vu=()=>{const r=$l();r&&j("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=$l();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=$l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!jr(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw pt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Op.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function G_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ps extends wc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new K_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K_(e),this._firestoreClient=void 0,await e}}}function B2(t,e){const n=typeof t=="object"?t:Jf(),r=typeof t=="string"?t:e||"(default)",i=Ri(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=UA("firestore");s&&z2(i,...s)}return i}function aT(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lT(t),t._firestoreClient}function lT(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new mb(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new L2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}function $2(t,e){_i("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return q2(t,Ou.provider,{build:r=>new O2(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function q2(t,e,n){if((t=Pr(t,Ps))._firestoreClient||t._terminated)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new G(M.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},lT(t)}/**
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
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(je.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Up{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class uT{constructor(e){this._methodName=e}}/**
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
 */class zp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */class Bp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const K2=/^__.*__$/;class G2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fs(e,this.data,n,this.fieldTransforms)}}function cT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class $p{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new $p(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Mu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(cT(this.Cu)&&K2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class W2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_c(e)}Qu(e,n,r,i=!1){return new $p({Cu:e,methodName:n,qu:r,path:ke.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H2(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new W2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Q2(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);pT("Data must be an object, but it was:",o,r);const l=dT(r,o);let u,c;if(s.merge)u=new Wt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Y2(e,p,n);if(!o.contains(g))throw new G(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);X2(f,g)||f.push(g)}u=new Wt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new G2(new Tt(l),u,c)}function hT(t,e){if(fT(t=_t(t)))return pT("Unsupported field value:",e,t),dT(t,e);if(t instanceof uT)return function(r,i){if(!cT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=hT(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Pe.fromDate(r);return{timestampValue:ks(i.serializer,s)}}if(r instanceof Pe){const s=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ks(i.serializer,s)}}if(r instanceof zp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cs)return{bytesValue:fE(i.serializer,r._byteString)};if(r instanceof Mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ap(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Bp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return wp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${jp(r)}`)}(t,e)}function dT(t,e){const n={};return jI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,i)=>{const s=hT(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof zp||t instanceof Cs||t instanceof Mt||t instanceof uT||t instanceof Bp)}function pT(t,e,n){if(!fT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=jp(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Y2(t,e,n){if((e=_t(e))instanceof Up)return e._internalPath;if(typeof e=="string")return mT(t,e);throw Mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const J2=new RegExp("[~\\*/\\[\\]]");function mT(t,e,n){if(e.search(J2)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Up(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(M.INVALID_ARGUMENT,l+t+u)}function X2(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class gT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Z2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Z2 extends gT{data(){return super.data()}}function yT(t,e){return typeof e=="string"?mT(t,e):e instanceof Up?e._internalPath:e._delegate._internalPath}/**
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
 */function eD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tD{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ls(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Te(o.doubleValue));return new Bp(s)}convertGeoPoint(e){return new zp(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const n=Wn(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);H(TE(r));const i=new vi(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||pt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function nD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class To{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _T extends gT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ql extends _T{data(e={}){return super.data(e)}}class rD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new To(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ql(this._firestore,this._userDataWriter,r.key,r,new To(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ql(i._firestore,i._userDataWriter,l.doc.key,l.doc,new To(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ql(i._firestore,i._userDataWriter,l.doc.key,l.doc,new To(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:iD(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class vT extends tD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function vl(t,e,n){t=Pr(t,Mt);const r=Pr(t.firestore,Ps),i=nD(t.converter,e,n);return wT(r,[Q2(H2(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,At.none())])}function Jd(t){return wT(Pr(t.firestore,Ps),[new fc(t._key,At.none())])}function Ph(t,...e){var n,r,i;t=_t(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||G_(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(G_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,f;if(t instanceof Mt)c=Pr(t.firestore,Ps),f=uc(t._key.path),u={next:p=>{e[o]&&e[o](sD(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Pr(t,Ic);c=Pr(p.firestore,Ps),f=p._query;const g=new vT(c);u={next:E=>{e[o]&&e[o](new rD(c,g,p,E))},error:e[o+1],complete:e[o+2]},eD(t._query)}return function(g,E,C,N){const O=new M2(N),A=new _2(E,O,C);return g.asyncQueue.enqueueAndForget(async()=>p2(await j_(g),A)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>m2(await j_(g),A))}}(aT(c),f,l,u)}function wT(t,e){return function(r,i){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>R2(await j2(r),i,s)),s.promise}(aT(t),e)}function sD(t,e,n){const r=n.docs.get(e._key),i=new vT(t);return new _T(t,i,e._key,r,new To(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ms=i})(Vs),En(new un("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ps(new MC(r.getProvider("auth-internal")),new UC(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Qt(Fy,"4.7.3",e),Qt(Fy,"4.7.3","esm2017")})();const oD={apiKey:"AIzaSyC7rhKGxbnJQHFlP8aAA70fIAdyfz9wTYk",authDomain:"fitrack-60514.firebaseapp.com",projectId:"fitrack-60514",storageBucket:"fitrack-60514.firebasestorage.app",messagingSenderId:"986717353729",appId:"1:986717353729:web:74d402965ea391fdf00d00",measurementId:"G-BL2CQLX8GQ"},aD=typeof __firebase_config<"u"?JSON.parse(__firebase_config):oD,qp=vw(aD);let lD;try{lD=PR(qp)}catch{}const Ch=NC(qp),fn=B2(qp);try{$2(fn).catch(t=>{t.code==="failed-precondition"?console.warn("Persistence failed: multiple tabs open."):t.code==="unimplemented"&&console.warn("Persistence failed: browser not supported.")})}catch{}const uD=typeof __app_id<"u"?__app_id:"fitrack-default",Rn=uD.replace(/\//g,"_"),cD=[{id:"1",name:"Жим лежа",bodyPart:"Грудь"},{id:"2",name:"Приседания со штангой",bodyPart:"Ноги"},{id:"3",name:"Становая тяга",bodyPart:"Спина"},{id:"4",name:"Подтягивания",bodyPart:"Спина"},{id:"5",name:"Жим гантелей сидя",bodyPart:"Плечи"},{id:"6",name:"Сгибания рук с штангой",bodyPart:"Бицепс"}];function hD(){const[t,e]=ye.useState("workouts"),[n,r]=ye.useState([]),[i,s]=ye.useState([]),[o,l]=ye.useState(!1),[u,c]=ye.useState("кг"),[f,p]=ye.useState(null),[g,E]=ye.useState(!0),[C,N]=ye.useState(null),[O,A]=ye.useState(null),[_,S]=ye.useState(null),[V,F]=ye.useState(new Date),[L,v]=ye.useState(!1),[y,w]=ye.useState(new Date),[T,k]=ye.useState(!1),[P,I]=ye.useState(null);ye.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await _P(Ch,__initial_auth_token):await fP(Ch)}catch(te){console.error("Auth error:",te),N(te.message)}})();const re=IP(Ch,te=>{p(te),te||E(!1)});return()=>re()},[]),ye.useEffect(()=>{if(!f)return;const q=q_(fn,"artifacts",Rn,"users",f.uid,"workouts"),re=q_(fn,"artifacts",Rn,"users",f.uid,"exercises"),te=ir(fn,"artifacts",Rn,"users",f.uid,"settings","userSettings"),be=Ph(q,ct=>{const ce=ct.docs.map(He=>He.data());s(ce.sort((He,Bt)=>(Bt.startTime||0)-(He.startTime||0))),E(!1)}),Oe=Ph(re,ct=>{ct.empty?cD.forEach(ce=>vl(ir(re,ce.id),ce)):r(ct.docs.map(ce=>ce.data()))}),Qn=Ph(te,ct=>{if(ct.exists()){const ce=ct.data();ce.weightUnit&&c(ce.weightUnit),ce.isDarkMode!==void 0&&l(ce.isDarkMode)}});return()=>{be(),Oe(),Qn()}},[f]),ye.useEffect(()=>{document.documentElement.classList.toggle("dark",o)},[o]);const ut=()=>Math.random().toString(36).substr(2,9),Sn=q=>new Date(q).toLocaleDateString("ru-RU",{day:"numeric",month:"long"}),zt=q=>{const re=new Date(q);return`${re.getFullYear()}-${String(re.getMonth()+1).padStart(2,"0")}-${String(re.getDate()).padStart(2,"0")}`},Zt=q=>{const re=new Date(q),te=re.getDay(),be=re.getDate()-te+(te===0?-6:1),Oe=new Date(re.setDate(be)),Qn=[];for(let ct=0;ct<7;ct++)Qn.push(new Date(Oe.getTime()+ct*24*60*60*1e3));return Qn},B=async(q,re)=>{if(q==="weightUnit"&&c(re),q==="isDarkMode"&&l(re),!!f)try{await vl(ir(fn,"artifacts",Rn,"users",f.uid,"settings","userSettings"),{[q]:re},{merge:!0})}catch(te){console.error(te)}},Y=async()=>{if(!O||!f)return;let q=0;const re=O.exercises.map(te=>{const be=te.sets.filter(Oe=>Oe.completed);return be.forEach(Oe=>{q+=(parseFloat(Oe.weight)||0)*(parseInt(Oe.reps)||0)}),{...te,sets:be}}).filter(te=>te.sets.length>0);try{if(re.length>0){const te={...O,exercises:re,volume:q};await vl(ir(fn,"artifacts",Rn,"users",f.uid,"workouts",te.id),te)}else await Jd(ir(fn,"artifacts",Rn,"users",f.uid,"workouts",O.id));A(null)}catch(te){console.error(te)}},Z=()=>{const q=i.length,re=i.reduce((te,be)=>te+(be.volume||0),0);return x.jsxs("div",{className:"space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto",children:[x.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10",children:"Статистика"}),x.jsxs("div",{className:"grid grid-cols-2 gap-4 px-4 md:px-8",children:[x.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between",children:[x.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4",children:x.jsx(lo,{className:"text-blue-500",size:24})}),x.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:"Тренировок"}),x.jsx("p",{className:"text-3xl font-bold",children:q})]}),x.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between",children:[x.jsx("div",{className:"w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4",children:x.jsx(bA,{className:"text-green-500",size:24})}),x.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium",children:["Тоннаж (",u,")"]}),x.jsx("p",{className:"text-3xl font-bold",children:re})]})]}),x.jsxs("div",{className:"px-4 md:px-8 space-y-4",children:[x.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4",children:"Прогресс по упражнениям"}),x.jsx("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",children:n.map((te,be)=>x.jsxs("button",{onClick:()=>S(te),className:`w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${be!==n.length-1?"border-b border-gray-100 dark:border-gray-800":""}`,children:[x.jsxs("div",{children:[x.jsx("h3",{className:"font-medium text-gray-900 dark:text-white md:text-lg",children:te.name}),x.jsx("p",{className:"text-sm text-gray-500",children:te.bodyPart})]}),x.jsx(ph,{className:"text-gray-300",size:24})]},te.id))})]})]})},ve=()=>{const q=zt(V),re=i.filter(ce=>zt(ce.startTime)===q),te=new Date(y.getFullYear(),y.getMonth()+1,0).getDate(),be=(new Date(y.getFullYear(),y.getMonth(),1).getDay()+6)%7,Oe=()=>w(new Date(y.getFullYear(),y.getMonth()-1,1)),Qn=()=>w(new Date(y.getFullYear(),y.getMonth()+1,1)),ct=Zt(V);return x.jsxs("div",{className:"space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto",children:[x.jsxs("div",{className:"flex justify-between items-center px-4 md:px-8 mt-6 md:mt-10",children:[x.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Тренировки"}),x.jsx("button",{onClick:()=>{v(!L),L||w(new Date(V))},className:`p-3 rounded-full shadow-sm transition-colors ${L?"bg-blue-500 text-white":"text-blue-500 bg-blue-50 dark:bg-blue-900/30"}`,children:L?x.jsx(xA,{size:24}):x.jsx(SA,{size:24})})]}),x.jsx("div",{className:"px-4 md:px-8",children:L?x.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-4 duration-200",children:[x.jsxs("div",{className:"flex justify-between items-center mb-6",children:[x.jsx("button",{onClick:Oe,className:"p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full",children:x.jsx(Wf,{size:20})}),x.jsx("span",{className:"font-bold text-lg capitalize",children:y.toLocaleString("ru-RU",{month:"long",year:"numeric"})}),x.jsx("button",{onClick:Qn,className:"p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full",children:x.jsx(ph,{size:20})})]}),x.jsx("div",{className:"grid grid-cols-7 gap-1 text-center mb-2",children:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(ce=>x.jsx("div",{className:"text-xs font-bold text-gray-400",children:ce},ce))}),x.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[Array.from({length:be}).map((ce,He)=>x.jsx("div",{},`empty-${He}`)),Array.from({length:te}).map((ce,He)=>{const Bt=new Date(y.getFullYear(),y.getMonth(),He+1),An=zt(Bt),Yn=q===An,Us=i.some(Na=>zt(Na.startTime)===An);return x.jsxs("button",{onClick:()=>{F(Bt),v(!1)},className:`h-10 w-full rounded-xl flex flex-col items-center justify-center relative ${Yn?"bg-blue-500 text-white":"text-gray-700 dark:text-gray-300 hover:bg-gray-100"}`,children:[x.jsx("span",{className:"text-sm font-bold",children:He+1}),Us&&x.jsx("div",{className:`w-1 h-1 rounded-full absolute bottom-1 ${Yn?"bg-white":"bg-blue-500"}`})]},An)})]})]}):x.jsx("div",{className:"flex justify-between items-center bg-white dark:bg-gray-900 p-2 md:p-3 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 gap-1 md:gap-3",children:ct.map(ce=>{const He=zt(ce),Bt=q===He,An=i.some(Yn=>zt(Yn.startTime)===He);return x.jsxs("button",{onClick:()=>F(ce),className:`flex flex-col items-center justify-center flex-1 aspect-[3/4] md:aspect-square rounded-2xl transition-all ${Bt?"bg-blue-500 text-white shadow-md scale-105":"text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:[x.jsx("span",{className:"text-[10px] md:text-xs font-medium uppercase mb-1",children:ce.toLocaleDateString("ru-RU",{weekday:"short"})}),x.jsx("span",{className:`text-lg md:text-2xl font-bold leading-none ${Bt?"text-white":"text-gray-900 dark:text-gray-200"}`,children:ce.getDate()}),An&&x.jsx("div",{className:`w-1.5 h-1.5 rounded-full mt-1.5 ${Bt?"bg-white":"bg-blue-500"}`})]},He)})})}),x.jsx("div",{className:"px-4 md:px-8",children:x.jsxs("button",{onClick:()=>A({id:ut(),startTime:V.getTime(),exercises:[]}),className:"w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 md:py-5 text-lg rounded-3xl flex items-center justify-center shadow-lg active:scale-95 transition-transform",children:[x.jsx(mu,{size:24,className:"mr-2"}),"Добавить тренировку"]})}),x.jsxs("div",{className:"px-4 md:px-8 space-y-4",children:[x.jsx("h2",{className:"text-xl font-semibold capitalize",children:Sn(V.getTime())}),re.length===0?x.jsxs("div",{className:"text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm text-gray-400",children:[x.jsx(lo,{className:"mx-auto mb-4",size:56}),x.jsx("p",{children:"Нет тренировок в этот день."})]}):x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:re.map(ce=>x.jsx(dD,{workout:ce,weightUnit:u,user:f,onEdit:A},ce.id))})]})]})},he=()=>x.jsxs("div",{className:"space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-3xl mx-auto",children:[x.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10",children:"Настройки"}),x.jsxs("div",{className:"px-4 md:px-8 space-y-8",children:[x.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",children:[x.jsxs("div",{className:"p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800",children:[x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx("div",{className:"p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30",children:o?x.jsx(RA,{className:"text-indigo-500"}):x.jsx(CA,{className:"text-orange-500"})}),x.jsx("span",{className:"font-medium text-lg",children:"Темная тема"})]}),x.jsx("button",{onClick:()=>B("isDarkMode",!o),className:`w-14 h-8 rounded-full flex items-center px-1 transition-colors ${o?"bg-green-500":"bg-gray-200"}`,children:x.jsx("div",{className:`w-6 h-6 bg-white rounded-full transition-transform ${o?"translate-x-6":""}`})})]}),x.jsxs("button",{onClick:()=>B("weightUnit",u==="кг"?"lbs":"кг"),className:"w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",children:[x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx("div",{className:"p-3 rounded-2xl bg-green-100 dark:bg-green-900/30",children:x.jsx(PA,{className:"text-green-500"})}),x.jsx("span",{className:"font-medium text-lg",children:"Единицы веса"})]}),x.jsx("span",{className:"font-bold text-blue-500 uppercase",children:u})]})]}),x.jsx("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden",children:x.jsxs("button",{onClick:()=>k(!0),className:"w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800",children:[x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx("div",{className:"p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30",children:x.jsx(lo,{className:"text-purple-500"})}),x.jsx("span",{className:"font-medium text-lg",children:"База упражнений"})]}),x.jsx(ph,{className:"text-gray-300"})]})})]})]});return g&&i.length===0?x.jsx("div",{className:`fixed inset-0 flex items-center justify-center p-6 ${o?"dark bg-gray-950 text-white":"bg-[#f2f2f7] text-gray-900"}`,children:x.jsxs("div",{className:"flex flex-col items-center gap-4 animate-pulse text-blue-500",children:[x.jsx(lo,{size:48,className:"animate-spin-slow"}),x.jsx("p",{className:"font-medium text-gray-500",children:"Синхронизация данных..."})]})}):x.jsx("div",{className:`fixed inset-0 flex justify-center ${o?"dark bg-gray-950":"bg-white"}`,children:x.jsxs("div",{className:"w-full h-full bg-[#f2f2f7] dark:bg-gray-950 relative overflow-hidden flex flex-col md:flex-row transition-colors",children:[x.jsxs("div",{className:"hidden md:flex w-72 flex-col bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 p-6 z-40",children:[x.jsxs("div",{className:"flex items-center gap-3 mb-12 text-blue-500",children:[x.jsx(lo,{size:36,strokeWidth:2.5}),x.jsx("h1",{className:"text-2xl font-extrabold tracking-tight",children:"FitTrack"})]}),x.jsx("nav",{className:"flex flex-col gap-3",children:["stats","workouts","settings"].map(q=>x.jsxs("button",{onClick:()=>e(q),className:`flex items-center gap-4 p-4 rounded-2xl transition-all ${t===q?"bg-blue-500 shadow-md text-white":"text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:[q==="stats"&&x.jsx(Zg,{})," ",q==="workouts"&&x.jsx(ey,{})," ",q==="settings"&&x.jsx(ty,{}),x.jsx("span",{className:"font-semibold text-lg capitalize",children:q==="stats"?"Статистика":q==="workouts"?"Тренировки":"Настройки"})]},q))})]}),x.jsxs("div",{className:"flex-1 h-full overflow-y-auto relative",children:[t==="stats"&&Z(),t==="workouts"&&ve(),t==="settings"&&he()]}),x.jsx("div",{className:"md:hidden absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 flex justify-between z-40",children:["stats","workouts","settings"].map(q=>x.jsxs("button",{onClick:()=>e(q),className:`flex flex-col items-center p-2 ${t===q?"text-blue-500":"text-gray-400"}`,children:[q==="stats"&&x.jsx(Zg,{})," ",q==="workouts"&&x.jsx(ey,{})," ",q==="settings"&&x.jsx(ty,{}),x.jsx("span",{className:"text-[10px] font-medium mt-1 uppercase",children:q==="stats"?"Стат":q==="workouts"?"Трени":"Настр"})]},q))}),O&&x.jsx(fD,{workout:O,setWorkout:A,exercises:n,weightUnit:u,onFinish:Y,onCancel:()=>A(null)}),_&&x.jsx(pD,{exercise:_,workouts:i,weightUnit:u,onClose:()=>S(null)}),T&&x.jsx(mD,{exercises:n,onClose:()=>k(!1),onAdd:()=>I({name:"",bodyPart:"Грудь"}),onEdit:I,onDelete:q=>Jd(ir(fn,"artifacts",Rn,"users",f.uid,"exercises",q))}),P&&x.jsx(gD,{initialData:P,onSave:q=>{const re=q.id||ut();vl(ir(fn,"artifacts",Rn,"users",f.uid,"exercises",re),{...q,id:re}),I(null)},onClose:()=>I(null)})]})})}function dD({workout:t,weightUnit:e,user:n,onEdit:r}){return x.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all",children:[x.jsxs("div",{className:"flex justify-between items-start mb-4",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white text-lg",children:"Тренировка"}),x.jsx("button",{onClick:()=>r(t),className:"text-gray-400 hover:text-blue-500 p-1",children:x.jsx(ow,{size:16})}),x.jsx("button",{onClick:()=>Jd(ir(fn,"artifacts",Rn,"users",n.uid,"workouts",t.id)),className:"text-gray-400 hover:text-red-500 p-1",children:x.jsx(Hf,{size:16})})]}),x.jsxs("div",{className:"flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1",children:[x.jsx(kA,{size:14,className:"mr-1"}),new Date(t.startTime).toLocaleDateString("ru-RU",{day:"numeric",month:"long"})]})]}),x.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300",children:[t.volume," ",e]})]}),x.jsx("div",{className:"space-y-2",children:t.exercises.map(i=>x.jsxs("div",{className:"text-sm flex justify-between border-b border-gray-50 dark:border-gray-800/50 pb-2 last:border-0 last:pb-0",children:[x.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium",children:i.name}),x.jsxs("span",{className:"text-gray-500 dark:text-gray-500",children:[i.sets.length," сетов"]})]},i.id))})]})}function fD({workout:t,setWorkout:e,exercises:n,weightUnit:r,onFinish:i,onCancel:s}){const[o,l]=ye.useState(!1);return x.jsx("div",{className:"fixed inset-0 z-50 flex flex-col md:items-center md:justify-center bg-black/50 backdrop-blur-sm p-0 md:p-6",children:x.jsxs("div",{className:"bg-[#f2f2f7] dark:bg-gray-950 w-full h-full md:max-w-2xl md:h-[90vh] md:rounded-[32px] flex flex-col overflow-hidden shadow-2xl relative",children:[x.jsxs("div",{className:"bg-white dark:bg-gray-900 px-6 py-5 flex justify-between items-center shadow-sm z-10",children:[x.jsx("button",{onClick:s,className:"text-gray-500",children:"Отменить"}),x.jsx("h2",{className:"text-lg font-bold",children:"Тренировка"}),x.jsx("button",{onClick:i,className:"bg-blue-500 text-white px-4 py-2 rounded-full font-bold",children:"Завершить"})]}),x.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-6",children:[t.exercises.map(u=>x.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 overflow-hidden",children:[x.jsxs("div",{className:"p-4 flex justify-between items-center bg-gray-50",children:[x.jsx("h3",{className:"font-semibold text-blue-600",children:u.name}),x.jsx("button",{onClick:()=>e({...t,exercises:t.exercises.filter(c=>c.id!==u.id)}),className:"text-red-400 p-2",children:x.jsx(Hf,{size:18})})]}),x.jsxs("div",{className:"p-3",children:[u.sets.map((c,f)=>x.jsxs("div",{className:`grid grid-cols-4 gap-2 items-center mb-2 p-2 rounded-xl ${c.completed?"bg-green-50":""}`,children:[x.jsx("div",{className:"text-center font-bold text-gray-400",children:f+1}),x.jsx("input",{type:"number",value:c.weight,onChange:p=>e({...t,exercises:t.exercises.map(g=>g.id===u.id?{...g,sets:g.sets.map(E=>E.id===c.id?{...E,weight:p.target.value}:E)}:g)}),className:"w-full bg-gray-100 p-2 rounded-xl text-center font-bold",placeholder:"Вес"}),x.jsx("input",{type:"number",value:c.reps,onChange:p=>e({...t,exercises:t.exercises.map(g=>g.id===u.id?{...g,sets:g.sets.map(E=>E.id===c.id?{...E,reps:p.target.value}:E)}:g)}),className:"w-full bg-gray-100 p-2 rounded-xl text-center font-bold",placeholder:"Повт"}),x.jsx("button",{onClick:()=>e({...t,exercises:t.exercises.map(p=>p.id===u.id?{...p,sets:p.sets.map(g=>g.id===c.id?{...g,completed:!g.completed}:g)}:p)}),className:`w-10 h-10 rounded-xl flex items-center justify-center ${c.completed?"bg-green-500 text-white":"bg-gray-200 text-gray-400"}`,children:x.jsx(AA,{size:20})})]},c.id)),x.jsxs("button",{onClick:()=>e({...t,exercises:t.exercises.map(c=>c.id===u.id?{...c,sets:[...c.sets,{id:Math.random().toString(),weight:"",reps:"",completed:!1}]}:c)}),className:"w-full mt-4 py-3 text-blue-500 font-bold flex items-center justify-center",children:[x.jsx(mu,{size:20})," Сет"]})]})]},u.id)),x.jsxs("button",{onClick:()=>l(!0),className:"w-full py-5 border-2 border-dashed border-blue-200 text-blue-500 font-bold rounded-3xl flex items-center justify-center",children:[x.jsx(mu,{size:24})," Упражнение"]})]}),o&&x.jsxs("div",{className:"absolute inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col animate-in slide-in-from-bottom-10",children:[x.jsxs("div",{className:"p-6 flex justify-between items-center border-b",children:[x.jsx("h2",{className:"text-xl font-bold",children:"Выбрать упражнение"}),x.jsx("button",{onClick:()=>l(!1),children:x.jsx(NA,{size:32})})]}),x.jsx("div",{className:"p-4 space-y-3 overflow-y-auto",children:n.map(u=>x.jsxs("button",{onClick:()=>{e({...t,exercises:[...t.exercises,{id:Math.random().toString(),exerciseId:u.id,name:u.name,sets:[{id:Math.random().toString(),weight:"",reps:"",completed:!1}]}]}),l(!1)},className:"w-full p-5 bg-gray-50 rounded-2xl text-left hover:bg-blue-50",children:[x.jsx("div",{className:"font-bold text-lg",children:u.name}),x.jsx("div",{className:"text-sm text-gray-500",children:u.bodyPart})]},u.id))})]})]})})}function pD({exercise:t,workouts:e,weightUnit:n,onClose:r}){const i=e.filter(s=>s.exercises.some(o=>o.exerciseId===t.id));return x.jsx("div",{className:"fixed inset-0 z-50 flex flex-col md:items-center md:justify-center bg-black/50 backdrop-blur-sm p-0 md:p-6",children:x.jsxs("div",{className:"bg-[#f2f2f7] dark:bg-gray-950 w-full h-full md:max-w-2xl md:rounded-[32px] flex flex-col overflow-hidden",children:[x.jsxs("div",{className:"p-6 bg-white dark:bg-gray-900 flex items-center gap-4 border-b",children:[x.jsx("button",{onClick:r,children:x.jsx(Wf,{size:32})}),x.jsx("h2",{className:"text-2xl font-bold",children:t.name})]}),x.jsx("div",{className:"p-6 overflow-y-auto space-y-4",children:i.length===0?x.jsx("p",{className:"text-center text-gray-500 py-10",children:"История пуста"}):i.map(s=>{const o=s.exercises.find(l=>l.exerciseId===t.id);return x.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border",children:[x.jsx("div",{className:"font-bold text-blue-500 mb-2",children:new Date(s.startTime).toLocaleDateString()}),x.jsx("div",{className:"grid grid-cols-2 gap-2",children:o.sets.map((l,u)=>x.jsxs("div",{className:"text-sm text-gray-600 bg-gray-50 p-2 rounded-lg",children:[u+1,". ",l.weight," ",n," x ",l.reps]},u))})]},s.id)})})]})})}function mD({exercises:t,onClose:e,onAdd:n,onEdit:r,onDelete:i}){return x.jsx("div",{className:"fixed inset-0 z-50 flex flex-col md:items-center md:justify-center bg-black/50 backdrop-blur-sm p-0 md:p-6",children:x.jsxs("div",{className:"bg-[#f2f2f7] dark:bg-gray-950 w-full h-full md:max-w-2xl md:rounded-[32px] flex flex-col overflow-hidden",children:[x.jsxs("div",{className:"p-6 bg-white dark:bg-gray-900 flex justify-between items-center border-b",children:[x.jsx("button",{onClick:e,children:x.jsx(Wf,{size:32})}),x.jsx("h2",{className:"text-xl font-bold",children:"База упражнений"}),x.jsx("button",{onClick:n,className:"bg-blue-500 text-white p-2 rounded-full",children:x.jsx(mu,{})})]}),x.jsx("div",{className:"p-4 space-y-2 overflow-y-auto",children:t.map(s=>x.jsxs("div",{className:"bg-white dark:bg-gray-900 p-4 rounded-2xl flex justify-between items-center shadow-sm",children:[x.jsxs("div",{children:[x.jsx("div",{className:"font-bold",children:s.name}),x.jsx("div",{className:"text-sm text-gray-500",children:s.bodyPart})]}),x.jsxs("div",{className:"flex gap-2",children:[x.jsx("button",{onClick:()=>r(s),className:"p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-500",children:x.jsx(ow,{size:18})}),x.jsx("button",{onClick:()=>i(s.id),className:"p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500",children:x.jsx(Hf,{size:18})})]})]},s.id))})]})})}function gD({initialData:t,onSave:e,onClose:n}){const[r,i]=ye.useState((t==null?void 0:t.name)||""),[s,o]=ye.useState((t==null?void 0:t.bodyPart)||"Грудь");return x.jsx("div",{className:"fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm",children:x.jsxs("div",{className:"bg-white dark:bg-gray-900 w-full max-w-sm rounded-3xl p-6 shadow-2xl",children:[x.jsx("h2",{className:"text-xl font-bold mb-4",children:t!=null&&t.id?"Изменить":"Новое упражнение"}),x.jsx("input",{value:r,onChange:l=>i(l.target.value),className:"w-full bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl mb-4 outline-none border focus:border-blue-500",placeholder:"Название"}),x.jsx("select",{value:s,onChange:l=>o(l.target.value),className:"w-full bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl mb-6 outline-none border focus:border-blue-500",children:["Грудь","Спина","Ноги","Плечи","Бицепс","Трицепс","Пресс","Кардио"].map(l=>x.jsx("option",{value:l,children:l},l))}),x.jsxs("div",{className:"flex gap-3",children:[x.jsx("button",{onClick:n,className:"flex-1 py-4 bg-gray-100 rounded-2xl font-bold",children:"Отмена"}),x.jsx("button",{onClick:()=>e({id:t==null?void 0:t.id,name:r,bodyPart:s}),className:"flex-1 py-4 bg-blue-500 text-white rounded-2xl font-bold",children:"Сохранить"})]})]})})}sw(document.getElementById("root")).render(x.jsx(ye.StrictMode,{children:x.jsx(hD,{})}));
