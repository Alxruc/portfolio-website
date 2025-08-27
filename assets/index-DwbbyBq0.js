(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Xf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function kx(){if(e_)return Ao;e_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ao.Fragment=e,Ao.jsx=i,Ao.jsxs=i,Ao}var n_;function Xx(){return n_||(n_=1,Xf.exports=kx()),Xf.exports}var Wt=Xx(),Wf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function Wx(){if(i_)return re;i_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function M(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=M.prototype;function z(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||y}var N=z.prototype=new g;N.constructor=z,A(N,M.prototype),N.isPureReactComponent=!0;var w=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function F(U,$,vt,St,Q,mt){return vt=mt.ref,{$$typeof:o,type:U,key:$,ref:vt!==void 0?vt:null,props:mt}}function j(U,$){return F(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var B=/\/+/g;function at(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function nt(){}function pt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(nt,nt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ut(U,$,vt,St,Q){var mt=typeof U;(mt==="undefined"||mt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case e:Mt=!0;break;case _:return Mt=U._init,ut(Mt(U._payload),$,vt,St,Q)}}if(Mt)return Q=Q(U),Mt=St===""?"."+at(U,0):St,w(Q)?(vt="",Mt!=null&&(vt=Mt.replace(B,"$&/")+"/"),ut(Q,$,vt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=j(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(B,"$&/")+"/")+Mt)),$.push(Q)),1;Mt=0;var At=St===""?".":St+":";if(w(U))for(var Ct=0;Ct<U.length;Ct++)St=U[Ct],mt=At+at(St,Ct),Mt+=ut(St,$,vt,mt,Q);else if(Ct=x(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(St=U.next()).done;)St=St.value,mt=At+at(St,Ct++),Mt+=ut(St,$,vt,mt,Q);else if(mt==="object"){if(typeof U.then=="function")return ut(pt(U),$,vt,St,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function P(U,$,vt){if(U==null)return U;var St=[],Q=0;return ut(U,St,"","",function(mt){return $.call(vt,mt,Q++)}),St}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return re.Children={map:P,forEach:function(U,$,vt){P(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=M,re.Fragment=i,re.Profiler=l,re.PureComponent=z,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return H.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=A({},U.props),Q=U.key,mt=void 0;if($!=null)for(Mt in $.ref!==void 0&&(mt=void 0),$.key!==void 0&&(Q=""+$.key),$)!V.call($,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&$.ref===void 0||(St[Mt]=$[Mt]);var Mt=arguments.length-2;if(Mt===1)St.children=vt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];St.children=At}return F(U.type,Q,void 0,void 0,mt,St)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,$,vt){var St,Q={},mt=null;if($!=null)for(St in $.key!==void 0&&(mt=""+$.key),$)V.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Q[St]=$[St]);var Mt=arguments.length-2;if(Mt===1)Q.children=vt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];Q.children=At}if(U&&U.defaultProps)for(St in Mt=U.defaultProps,Mt)Q[St]===void 0&&(Q[St]=Mt[St]);return F(U,mt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=D,re.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:Z}},re.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},re.startTransition=function(U){var $=H.T,vt={};H.T=vt;try{var St=U(),Q=H.S;Q!==null&&Q(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,W)}catch(mt){W(mt)}finally{H.T=$}},re.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},re.use=function(U){return H.H.use(U)},re.useActionState=function(U,$,vt){return H.H.useActionState(U,$,vt)},re.useCallback=function(U,$){return H.H.useCallback(U,$)},re.useContext=function(U){return H.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,$){return H.H.useDeferredValue(U,$)},re.useEffect=function(U,$,vt){var St=H.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},re.useId=function(){return H.H.useId()},re.useImperativeHandle=function(U,$,vt){return H.H.useImperativeHandle(U,$,vt)},re.useInsertionEffect=function(U,$){return H.H.useInsertionEffect(U,$)},re.useLayoutEffect=function(U,$){return H.H.useLayoutEffect(U,$)},re.useMemo=function(U,$){return H.H.useMemo(U,$)},re.useOptimistic=function(U,$){return H.H.useOptimistic(U,$)},re.useReducer=function(U,$,vt){return H.H.useReducer(U,$,vt)},re.useRef=function(U){return H.H.useRef(U)},re.useState=function(U){return H.H.useState(U)},re.useSyncExternalStore=function(U,$,vt){return H.H.useSyncExternalStore(U,$,vt)},re.useTransition=function(){return H.H.useTransition()},re.version="19.1.0",re}var a_;function vd(){return a_||(a_=1,Wf.exports=Wx()),Wf.exports}var ka=vd(),qf={exports:{}},Ro={},Yf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function qx(){return r_||(r_=1,function(o){function e(P,Z){var W=P.length;P.push(Z);t:for(;0<W;){var yt=W-1>>>1,U=P[yt];if(0<l(U,Z))P[yt]=Z,P[W]=U,W=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Z=P[0],W=P.pop();if(W!==Z){P[0]=W;t:for(var yt=0,U=P.length,$=U>>>1;yt<$;){var vt=2*(yt+1)-1,St=P[vt],Q=vt+1,mt=P[Q];if(0>l(St,W))Q<U&&0>l(mt,St)?(P[yt]=mt,P[Q]=W,yt=Q):(P[yt]=St,P[vt]=W,yt=vt);else if(Q<U&&0>l(mt,W))P[yt]=mt,P[Q]=W,yt=Q;else break t}}return Z}function l(P,Z){var W=P.sortIndex-Z.sortIndex;return W!==0?W:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,y=!1,A=!1,C=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=P)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function H(P){if(C=!1,w(P),!A)if(i(m)!==null)A=!0,V||(V=!0,at());else{var Z=i(p);Z!==null&&ut(H,Z.startTime-P)}}var V=!1,F=-1,j=5,D=-1;function R(){return M?!0:!(o.unstable_now()-D<j)}function B(){if(M=!1,V){var P=o.unstable_now();D=P;var Z=!0;try{t:{A=!1,C&&(C=!1,z(F),F=-1),y=!0;var W=x;try{e:{for(w(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,w(P),Z=!0;break e}v===i(m)&&r(m),w(P)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var $=i(p);$!==null&&ut(H,$.startTime-P),Z=!1}}break t}finally{v=null,x=W,y=!1}Z=void 0}}finally{Z?at():V=!1}}}var at;if(typeof N=="function")at=function(){N(B)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,pt=nt.port2;nt.port1.onmessage=B,at=function(){pt.postMessage(null)}}else at=function(){g(B,0)};function ut(P,Z){F=g(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var W=x;x=Z;try{return P()}finally{x=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return Z()}finally{x=W}},o.unstable_scheduleCallback=function(P,Z,W){var yt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,P={id:_++,callback:Z,priorityLevel:P,startTime:W,expirationTime:U,sortIndex:-1},W>yt?(P.sortIndex=W,e(p,P),i(m)===null&&P===i(p)&&(C?(z(F),F=-1):C=!0,ut(H,W-yt))):(P.sortIndex=U,e(m,P),A||y||(A=!0,V||(V=!0,at()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var Z=x;return function(){var W=x;x=Z;try{return P.apply(this,arguments)}finally{x=W}}}}(jf)),jf}var s_;function Yx(){return s_||(s_=1,Yf.exports=qx()),Yf.exports}var Zf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function jx(){if(o_)return Cn;o_=1;var o=vd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var l_;function Zx(){if(l_)return Zf.exports;l_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=jx(),Zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function Kx(){if(c_)return Ro;c_=1;var o=Yx(),e=vd(),i=Zx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,s=f;break}if(T===s){S=!0,s=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=c;break}if(T===s){S=!0,s=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ut=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function $(t){return{current:t}}function vt(t){0>U||(t.current=yt[U],yt[U]=null,U--)}function St(t,n){U++,yt[U]=t.current,t.current=n}var Q=$(null),mt=$(null),Mt=$(null),At=$(null);function Ct(t,n){switch(St(Mt,n),St(mt,t),St(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?wg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=wg(n),t=Dg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Q),St(Q,t)}function oe(){vt(Q),vt(mt),vt(Mt)}function Qt(t){t.memoizedState!==null&&St(At,t);var n=Q.current,a=Dg(n,t.type);n!==a&&(St(mt,t),St(Q,a))}function Ne(t){mt.current===t&&(vt(Q),vt(mt)),At.current===t&&(vt(At),Mo._currentValue=W)}var Fe=Object.prototype.hasOwnProperty,ge=o.unstable_scheduleCallback,I=o.unstable_cancelCallback,xn=o.unstable_shouldYield,Me=o.unstable_requestPaint,de=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,tt=o.unstable_setDisableYieldValue,ft=null,dt=null;function lt(t){if(typeof E=="function"&&tt(t),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,t)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(t){return t>>>=0,t===0?32:31-(Dt(t)/Ht|0)|0}var xt=256,Pt=4194304;function qt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=qt(s):(S&=T,S!==0?c=qt(S):a||(a=T&~t,a!==0&&(c=qt(a))))):(T=s&~f,T!==0?c=qt(T):S!==0?c=qt(S):a||(a=s&~t,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),t}function Ut(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function zt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Ot(a),gt=1<<ct;T[ct]=0,O[ct]=-1;var et=J[ct];if(et!==null)for(J[ct]=null,ct=0;ct<et.length;ct++){var it=et[ct];it!==null&&(it.lane&=-536870913)}a&=~gt}s!==0&&_t(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function _t(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ot(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function It(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ot(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function De(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Zg(t.type))}function Xn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var hn=Math.random().toString(36).slice(2),rn="__reactFiber$"+hn,Sn="__reactProps$"+hn,Pn="__reactContainer$"+hn,ja="__reactEvents$"+hn,qo="__reactListeners$"+hn,Yo="__reactHandles$"+hn,Za="__reactResources$"+hn,fa="__reactMarker$"+hn;function ha(t){delete t[rn],delete t[Sn],delete t[ja],delete t[qo],delete t[Yo]}function Li(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Pn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Og(t);t!==null;){if(a=t[rn])return a;t=Og(t)}return n}t=a,a=t.parentNode}return null}function Ni(t){if(t=t[rn]||t[Pn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ka(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function da(t){var n=t[Za];return n||(n=t[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[fa]=!0}var jo=new Set,Zo={};function Oi(t,n){b(t,n),b(t+"Capture",n)}function b(t,n){for(Zo[t]=n,t=0;t<n.length;t++)jo.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function Y(t){return Fe.call(st,t)?!0:Fe.call(rt,t)?!1:q.test(t)?st[t]=!0:(rt[t]=!0,!1)}function Tt(t,n,a){if(Y(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Bt,te;function Kt(t){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+t+te}var kt=!1;function le(t,n){if(!t||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var et=it}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(it){et=it}t.call(gt.prototype)}}else{try{throw Error()}catch(it){et=it}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var O=S.split(`
`),J=T.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===J.length)for(s=O.length-1,c=J.length-1;1<=s&&0<=c&&O[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==J[c]){var ct=`
`+O[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Kt(a):""}function Ae(t){switch(t.tag){case 26:case 27:case 5:return Kt(t.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return Kt("Activity");default:return""}}function Xe(t){try{var n="";do n+=Ae(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t){var n=Re(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Oe(t){t._valueTracker||(t._valueTracker=Zt(t))}function ve(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Re(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function dn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function Ve(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,a,s,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?An(t,S,fe(n)):a!=null?An(t,S,fe(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+fe(T):t.removeAttribute("name")}function He(t,n,a,s,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function An(t,n,a){n==="number"&&dn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function xi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Dd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&wd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&wd(t,f,n[f])}function Vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return Vv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var kc=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,Rr=null;function Ud(t){var n=Ni(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Sn]||null;if(!c)throw Error(r(90));Pi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ve(s)}break t;case"textarea":pn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var Wc=!1;function Ld(t,n,a){if(Wc)return t(n,a);Wc=!0;try{var s=t(n);return s}finally{if(Wc=!1,(Ar!==null||Rr!==null)&&(Pl(),Ar&&(n=Ar,t=Rr,Rr=Ar=null,Ud(n),t)))for(n=0;n<t.length;n++)Ud(t[n])}}function Ns(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Sn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(Bi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){qc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{qc=!1}var ma=null,Yc=null,Qo=null;function Nd(){if(Qo)return Qo;var t,n=Yc,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Qo=c.slice(t,1<s?1-s:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function Od(){return!1}function zn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Od,this.isPropagationStopped=Od,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=zn(Qa),Ps=_({},Qa,{view:0,detail:0}),kv=zn(Ps),jc,Zc,zs,el=_({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(jc=t.screenX-zs.screenX,Zc=t.screenY-zs.screenY):Zc=jc=0,zs=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),Pd=zn(el),Xv=_({},el,{dataTransfer:0}),Wv=zn(Xv),qv=_({},Ps,{relatedTarget:0}),Kc=zn(qv),Yv=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=zn(Yv),Zv=_({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=zn(Zv),Qv=_({},Qa,{data:0}),zd=zn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=t0[t])?!!n[t]:!1}function Qc(){return e0}var n0=_({},Ps,{key:function(t){if(t.key){var n=Jv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i0=zn(n0),a0=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=zn(a0),r0=_({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),s0=zn(r0),o0=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=zn(o0),c0=_({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=zn(c0),f0=_({},Qa,{newState:0,oldState:0}),h0=zn(f0),d0=[9,13,27,32],Jc=Bi&&"CompositionEvent"in window,Bs=null;Bi&&"documentMode"in document&&(Bs=document.documentMode);var p0=Bi&&"TextEvent"in window&&!Bs,Id=Bi&&(!Jc||Bs&&8<Bs&&11>=Bs),Fd=" ",Hd=!1;function Gd(t,n){switch(t){case"keyup":return d0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function m0(t,n){switch(t){case"compositionend":return Vd(n);case"keypress":return n.which!==32?null:(Hd=!0,Fd);case"textInput":return t=n.data,t===Fd&&Hd?null:t;default:return null}}function g0(t,n){if(Cr)return t==="compositionend"||!Jc&&Gd(t,n)?(t=Nd(),Qo=Yc=ma=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Id&&n.locale!=="ko"?null:n.data;default:return null}}var _0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_0[t.type]:n==="textarea"}function Xd(t,n,a,s){Ar?Rr?Rr.push(s):Rr=[s]:Ar=s,n=Gl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Is=null,Fs=null;function v0(t){Tg(t,0)}function nl(t){var n=Ka(t);if(ve(n))return t}function Wd(t,n){if(t==="change")return n}var qd=!1;if(Bi){var $c;if(Bi){var tu="oninput"in document;if(!tu){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),tu=typeof Yd.oninput=="function"}$c=tu}else $c=!1;qd=$c&&(!document.documentMode||9<document.documentMode)}function jd(){Is&&(Is.detachEvent("onpropertychange",Zd),Fs=Is=null)}function Zd(t){if(t.propertyName==="value"&&nl(Fs)){var n=[];Xd(n,Fs,t,Xc(t)),Ld(v0,n)}}function x0(t,n,a){t==="focusin"?(jd(),Is=n,Fs=a,Is.attachEvent("onpropertychange",Zd)):t==="focusout"&&jd()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(Fs)}function M0(t,n){if(t==="click")return nl(n)}function y0(t,n){if(t==="input"||t==="change")return nl(n)}function E0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:E0;function Hs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Fe.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qd(t,n){var a=Kd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kd(a)}}function Jd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $d(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dn(t.document)}return n}function eu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var T0=Bi&&"documentMode"in document&&11>=document.documentMode,wr=null,nu=null,Gs=null,iu=!1;function tp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||wr==null||wr!==dn(s)||(s=wr,"selectionStart"in s&&eu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gs&&Hs(Gs,s)||(Gs=s,s=Gl(nu,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=wr)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},au={},ep={};Bi&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function $a(t){if(au[t])return au[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ep)return au[t]=n[a];return t}var np=$a("animationend"),ip=$a("animationiteration"),ap=$a("animationstart"),b0=$a("transitionrun"),A0=$a("transitionstart"),R0=$a("transitioncancel"),rp=$a("transitionend"),sp=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function fi(t,n){sp.set(t,n),Oi(n,[t])}var op=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},op.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var ei=[],Ur=0,su=0;function il(){for(var t=Ur,n=su=Ur=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&lp(a,c,f)}}function al(t,n,a,s){ei[Ur++]=t,ei[Ur++]=n,ei[Ur++]=a,ei[Ur++]=s,su|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ou(t,n,a,s){return al(t,n,a,s),rl(t)}function Lr(t,n){return al(t,null,null,n),rl(t)}function lp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ot(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function rl(t){if(50<ho)throw ho=0,pf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function C0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new C0(t,n,a,s)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function cp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function sl(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")lu(t)&&(S=1);else if(typeof t=="string")S=Dx(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=qn(31,a,n,c),t.elementType=D,t.lanes=f,t;case A:return tr(a.children,c,f,n);case C:S=8,c|=24;break;case M:return t=qn(12,a,n,c|2),t.elementType=M,t.lanes=f,t;case H:return t=qn(13,a,n,c),t.elementType=H,t.lanes=f,t;case V:return t=qn(19,a,n,c),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g:case N:S=10;break t;case z:S=9;break t;case w:S=11;break t;case F:S=14;break t;case j:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function tr(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function cu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function uu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Or=[],Pr=0,ol=null,ll=0,ni=[],ii=0,er=null,Fi=1,Hi="";function nr(t,n){Or[Pr++]=ll,Or[Pr++]=ol,ol=t,ll=n}function up(t,n,a){ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=er,er=t;var s=Fi;t=Hi;var c=32-Ot(s)-1;s&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Fi=1<<32-Ot(n)+c|a<<c|s,Hi=f+t}else Fi=1<<f|a<<c|s,Hi=t}function fu(t){t.return!==null&&(nr(t,1),up(t,1,0))}function hu(t){for(;t===ol;)ol=Or[--Pr],Or[Pr]=null,ll=Or[--Pr],Or[Pr]=null;for(;t===er;)er=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null}var Un=null,Ye=null,be=!1,ir=null,Si=!1,du=Error(r(519));function ar(t){var n=Error(r(418,""));throw Xs(ti(n,t)),du}function fp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[Sn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)me(mo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),He(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Oe(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Mn(n,s.value,s.defaultValue,s.children),Oe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cg(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Vl),n=!0):n=!1,n||ar(t)}function hp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Un=Un.return}}function Vs(t){if(t!==Un)return!1;if(!be)return hp(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Ye&&ar(t),hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ye=di(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ye=null}}else n===27?(n=Ye,Ua(t.type)?(t=Of,Of=null,Ye=t):Ye=n):Ye=Un?di(t.stateNode.nextSibling):null;return!0}function ks(){Ye=Un=null,be=!1}function dp(){var t=ir;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),ir=null),t}function Xs(t){ir===null?ir=[t]:ir.push(t)}var pu=$(null),rr=null,Gi=null;function ga(t,n,a){St(pu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=pu.current,vt(pu)}function mu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function gu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),mu(f.return,a,t),s||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),mu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ws(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Wn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===At.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Mo):t=[Mo])}c=c.return}t!==null&&gu(n,t,a,s),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){rr=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return pp(rr,t)}function ul(t,n){return rr===null&&sr(t),pp(t,n)}function pp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var w0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},D0=o.unstable_scheduleCallback,U0=o.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new w0,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&D0(U0,function(){t.controller.abort()})}var Ys=null,vu=0,zr=0,Br=null;function L0(t,n){if(Ys===null){var a=Ys=[];vu=0,zr=Mf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return vu++,n.then(mp,mp),n}function mp(){if(--vu===0&&Ys!==null){Br!==null&&(Br.status="fulfilled");var t=Ys;Ys=null,zr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function N0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var gp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&L0(t,n),gp!==null&&gp(t,n)};var or=$(null);function xu(){var t=or.current;return t!==null?t:ke.pooledCache}function fl(t,n){n===null?St(or,or.current):St(or,n.pool)}function _p(){var t=xu();return t===null?null:{parent:on._currentValue,pool:t}}var js=Error(r(460)),vp=Error(r(474)),hl=Error(r(542)),Su={then:function(){}};function xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dl(){}function Sp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(dl,dl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,yp(t),t;default:if(typeof n.status=="string")n.then(dl,dl);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,yp(t),t}throw Zs=n,js}}var Zs=null;function Mp(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}function yp(t){if(t===js||t===hl)throw Error(r(483))}var _a=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=rl(t),lp(t,null,a),n}return al(t,s,n,a),rl(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,It(t,a)}}function Eu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function Qs(){if(Tu){var t=Br;if(t!==null)throw t}}function Js(t,n,a,s){Tu=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,J=O.next;O.next=null,S===null?f=J:S.next=J,S=O;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==S&&(T===null?ct.firstBaseUpdate=J:T.next=J,ct.lastBaseUpdate=O))}if(f!==null){var gt=c.baseState;S=0,ct=J=O=null,T=f;do{var et=T.lane&-536870913,it=et!==T.lane;if(it?(Se&et)===et:(s&et)===et){et!==0&&et===zr&&(Tu=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=t,Jt=T;et=n;var Be=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(Be,gt,et);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,et=typeof ee=="function"?ee.call(Be,gt,et):ee,et==null)break t;gt=_({},gt,et);break t;case 2:_a=!0}}et=T.callback,et!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[et]:it.push(et))}else it={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(J=ct=it,O=gt):ct=ct.next=it,S|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;it=T,T=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(O=gt),c.baseState=O,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ra|=S,t.lanes=S,t.memoizedState=gt}}function Ep(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Tp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ep(a[t],n)}var Ir=$(null),pl=$(0);function bp(t,n){t=Zi,St(pl,t),St(Ir,n),Zi=t|n.baseLanes}function bu(){St(pl,Zi),St(Ir,Ir.current)}function Au(){Zi=pl.current,vt(Ir),vt(pl)}var Sa=0,ue=null,Pe=null,en=null,ml=!1,Fr=!1,lr=!1,gl=0,$s=0,Hr=null,O0=0;function Ke(){throw Error(r(321))}function Ru(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Cu(t,n,a,s,c,f){return Sa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?lm:cm,lr=!1,f=a(s,c),lr=!1,Fr&&(f=Rp(n,a,s,c)),Ap(t),f}function Ap(t){P.H=yl;var n=Pe!==null&&Pe.next!==null;if(Sa=0,en=Pe=ue=null,ml=!1,$s=0,Hr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&cl(t)&&(mn=!0))}function Rp(t,n,a,s){ue=t;var c=0;do{if(Fr&&(Hr=null),$s=0,Fr=!1,25<=c)throw Error(r(301));if(c+=1,en=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=G0,f=n(a,s)}while(Fr);return f}function P0(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(ue.flags|=1024),n}function wu(){var t=gl!==0;return gl=0,t}function Du(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uu(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}Sa=0,en=Pe=ue=null,Fr=!1,$s=gl=0,Hr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=t:en=en.next=t,en}function nn(){if(Pe===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Pe=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},en===null?ue.memoizedState=en=t:en=en.next=t}return en}function Lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Hr===null&&(Hr=[]),t=Sp(Hr,t,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?lm:cm),t}function _l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===N)return Rn(t)}throw Error(r(438,String(t)))}function Nu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Lu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function vl(t){var n=nn();return Ou(n,Pe,t)}function Ou(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,O=null,J=n,ct=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(Se&gt)===gt:(Sa&gt)===gt){var et=J.revertLane;if(et===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===zr&&(ct=!0);else if((Sa&et)===et){J=J.next,et===zr&&(ct=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=gt,S=f):O=O.next=gt,ue.lanes|=et,Ra|=et;gt=J.action,lr&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else et={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(T=O=et,S=f):O=O.next=et,ue.lanes|=gt,Ra|=gt;J=J.next}while(J!==null&&J!==n);if(O===null?S=f:O.next=T,!Wn(f,t.memoizedState)&&(mn=!0,ct&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Pu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Wn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Cp(t,n,a){var s=ue,c=nn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((Pe||c).memoizedState,a);S&&(c.memoizedState=a,mn=!0),c=c.queue;var T=Up.bind(null,s,c,t);if(eo(2048,8,T,[t]),c.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Gr(9,xl(),Dp.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(Sa&124)!==0||wp(s,n,a)}return a}function wp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Lu(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Dp(t,n,a,s){n.value=a,n.getSnapshot=s,Lp(n)&&Np(t)}function Up(t,n,a){return a(function(){Lp(n)&&Np(t)})}function Lp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Np(t){var n=Lr(t,2);n!==null&&Qn(n,t,2)}function zu(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),lr){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Op(t,n,a,s){return t.baseState=a,Ou(t,Pe,typeof s=="function"?s:ki)}function z0(t,n,a,s,c){if(Ml(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Pp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Pp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var T=a(c,s),O=P.S;O!==null&&O(S,T),zp(t,n,T)}catch(J){Bu(t,n,J)}finally{P.T=f}}else try{f=a(c,s),zp(t,n,f)}catch(J){Bu(t,n,J)}}function zp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Bp(t,n,s)},function(s){return Bu(t,n,s)}):Bp(t,n,a)}function Bp(t,n,a){n.status="fulfilled",n.value=a,Ip(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Pp(t,a)))}function Bu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ip(n),n=n.next;while(n!==s)}t.action=null}function Ip(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fp(t,n){return n}function Hp(t,n){if(be){var a=ke.formState;if(a!==null){t:{var s=ue;if(be){if(Ye){e:{for(var c=Ye,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=di(c.nextSibling),s=c.data==="F!";break t}}ar(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=s,a=rm.bind(null,ue,s),s.dispatch=a,s=zu(!1),f=Vu.bind(null,ue,!1,s.queue),s=Bn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=z0.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Gp(t){var n=nn();return Vp(n,Pe,t)}function Vp(t,n,a){if(n=Ou(t,n,Fp)[0],t=vl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(S){throw S===js?hl:S}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Gr(9,xl(),B0.bind(null,c,a),null)),[s,f,t]}function B0(t,n){t.action=n}function kp(t){var n=nn(),a=Pe;if(a!==null)return Vp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Gr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Lu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function xl(){return{destroy:void 0,resource:void 0}}function Xp(){return nn().memoizedState}function Sl(t,n,a,s){var c=Bn();s=s===void 0?null:s,ue.flags|=t,c.memoizedState=Gr(1|n,xl(),a,s)}function eo(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Pe!==null&&s!==null&&Ru(s,Pe.memoizedState.deps)?c.memoizedState=Gr(n,f,a,s):(ue.flags|=t,c.memoizedState=Gr(1|n,f,a,s))}function Wp(t,n){Sl(8390656,8,t,n)}function qp(t,n){eo(2048,8,t,n)}function Yp(t,n){return eo(4,2,t,n)}function jp(t,n){return eo(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Kp(t,n,a){a=a!=null?a.concat([t]):null,eo(4,4,Zp.bind(null,n,t),a)}function Iu(){}function Qp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Ru(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Jp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Ru(n,s[1]))return s[0];if(s=t(),lr){lt(!0);try{t()}finally{lt(!1)}}return a.memoizedState=[s,n],s}function Fu(t,n,a){return a===void 0||(Sa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=eg(),ue.lanes|=t,Ra|=t,a)}function $p(t,n,a,s){return Wn(a,n)?a:Ir.current!==null?(t=Fu(t,a,s),Wn(t,n)||(mn=!0),t):(Sa&42)===0?(mn=!0,t.memoizedState=a):(t=eg(),ue.lanes|=t,Ra|=t,n)}function tm(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=P.T,T={};P.T=T,Vu(t,!1,n,a);try{var O=c(),J=P.S;if(J!==null&&J(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ct=N0(O,s);no(t,n,ct,Kn(t))}else no(t,n,s,Kn(t))}catch(gt){no(t,n,{then:function(){},status:"rejected",reason:gt},Kn())}finally{Z.p=f,P.T=S}}function I0(){}function Hu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=em(t).queue;tm(t,c,n,W,a===null?I0:function(){return nm(t),a(s)})}function em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function nm(t){var n=em(t).next.queue;no(t,n,{},Kn())}function Gu(){return Rn(Mo)}function im(){return nn().memoizedState}function am(){return nn().memoizedState}function F0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=va(a);var s=xa(n,t,a);s!==null&&(Qn(s,n,a),Ks(s,n,a)),n={cache:_u()},t.payload=n;return}n=n.return}}function H0(t,n,a){var s=Kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?sm(n,a):(a=ou(t,n,a,s),a!==null&&(Qn(a,t,s),om(a,n,s)))}function rm(t,n,a){var s=Kn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))sm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,S))return al(t,n,c,0),ke===null&&il(),!1}catch{}finally{}if(a=ou(t,n,c,s),a!==null)return Qn(a,t,s),om(a,n,s),!0}return!1}function Vu(t,n,a,s){if(s={lane:2,revertLane:Mf(),action:s,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(r(479))}else n=ou(t,a,s,2),n!==null&&Qn(n,t,2)}function Ml(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function sm(t,n){Fr=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function om(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,It(t,a)}}var yl={readContext:Rn,use:_l,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},lm={readContext:Rn,use:_l,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Wp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Sl(4194308,4,Zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Sl(4194308,4,t,n)},useInsertionEffect:function(t,n){Sl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var s=t();if(lr){lt(!0);try{t()}finally{lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Bn();if(a!==void 0){var c=a(n);if(lr){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=H0.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=zu(t);var n=t.queue,a=rm.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(t,n){var a=Bn();return Fu(a,t,n)},useTransition:function(){var t=zu(!1);return t=tm.bind(null,ue,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,c=Bn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||wp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Wp(Up.bind(null,s,f,t),[t]),s.flags|=2048,Gr(9,xl(),Dp.bind(null,s,f,a,n),null),a},useId:function(){var t=Bn(),n=ke.identifierPrefix;if(be){var a=Hi,s=Fi;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=O0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Gu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Nu,useCacheRefresh:function(){return Bn().memoizedState=F0.bind(null,ue)}},cm={readContext:Rn,use:_l,useCallback:Qp,useContext:Rn,useEffect:qp,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:vl,useRef:Xp,useState:function(){return vl(ki)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=nn();return $p(a,Pe.memoizedState,t,n)},useTransition:function(){var t=vl(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Gu,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,n){var a=nn();return Op(a,Pe,t,n)},useMemoCache:Nu,useCacheRefresh:am},G0={readContext:Rn,use:_l,useCallback:Qp,useContext:Rn,useEffect:qp,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:Pu,useRef:Xp,useState:function(){return Pu(ki)},useDebugValue:Iu,useDeferredValue:function(t,n){var a=nn();return Pe===null?Fu(a,t,n):$p(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Pu(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Gu,useFormState:kp,useActionState:kp,useOptimistic:function(t,n){var a=nn();return Pe!==null?Op(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:am},Vr=null,io=0;function El(t){var n=io;return io+=1,Vr===null&&(Vr=[]),Sp(Vr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function um(t){var n=t._init;return n(t._payload)}function fm(t){function n(X,G){if(t){var K=X.deletions;K===null?(X.deletions=[G],X.flags|=16):K.push(G)}}function a(X,G){if(!t)return null;for(;G!==null;)n(X,G),G=G.sibling;return null}function s(X){for(var G=new Map;X!==null;)X.key!==null?G.set(X.key,X):G.set(X.index,X),X=X.sibling;return G}function c(X,G){return X=Ii(X,G),X.index=0,X.sibling=null,X}function f(X,G,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<G?(X.flags|=67108866,G):K):(X.flags|=67108866,G)):(X.flags|=1048576,G)}function S(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function T(X,G,K,ht){return G===null||G.tag!==6?(G=cu(K,X.mode,ht),G.return=X,G):(G=c(G,K),G.return=X,G)}function O(X,G,K,ht){var Ft=K.type;return Ft===A?ct(X,G,K.props.children,ht,K.key):G!==null&&(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===j&&um(Ft)===G.type)?(G=c(G,K.props),ao(G,K),G.return=X,G):(G=sl(K.type,K.key,K.props,null,X.mode,ht),ao(G,K),G.return=X,G)}function J(X,G,K,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=uu(K,X.mode,ht),G.return=X,G):(G=c(G,K.children||[]),G.return=X,G)}function ct(X,G,K,ht,Ft){return G===null||G.tag!==7?(G=tr(K,X.mode,ht,Ft),G.return=X,G):(G=c(G,K),G.return=X,G)}function gt(X,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=cu(""+G,X.mode,K),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return K=sl(G.type,G.key,G.props,null,X.mode,K),ao(K,G),K.return=X,K;case y:return G=uu(G,X.mode,K),G.return=X,G;case j:var ht=G._init;return G=ht(G._payload),gt(X,G,K)}if(ut(G)||at(G))return G=tr(G,X.mode,K,null),G.return=X,G;if(typeof G.then=="function")return gt(X,El(G),K);if(G.$$typeof===N)return gt(X,ul(X,G),K);Tl(X,G)}return null}function et(X,G,K,ht){var Ft=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:T(X,G,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?O(X,G,K,ht):null;case y:return K.key===Ft?J(X,G,K,ht):null;case j:return Ft=K._init,K=Ft(K._payload),et(X,G,K,ht)}if(ut(K)||at(K))return Ft!==null?null:ct(X,G,K,ht,null);if(typeof K.then=="function")return et(X,G,El(K),ht);if(K.$$typeof===N)return et(X,G,ul(X,K),ht);Tl(X,K)}return null}function it(X,G,K,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return X=X.get(K)||null,T(G,X,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return X=X.get(ht.key===null?K:ht.key)||null,O(G,X,ht,Ft);case y:return X=X.get(ht.key===null?K:ht.key)||null,J(G,X,ht,Ft);case j:var he=ht._init;return ht=he(ht._payload),it(X,G,K,ht,Ft)}if(ut(ht)||at(ht))return X=X.get(K)||null,ct(G,X,ht,Ft,null);if(typeof ht.then=="function")return it(X,G,K,El(ht),Ft);if(ht.$$typeof===N)return it(X,G,K,ul(G,ht),Ft);Tl(G,ht)}return null}function ee(X,G,K,ht){for(var Ft=null,he=null,Xt=G,$t=G=0,_n=null;Xt!==null&&$t<K.length;$t++){Xt.index>$t?(_n=Xt,Xt=null):_n=Xt.sibling;var Ee=et(X,Xt,K[$t],ht);if(Ee===null){Xt===null&&(Xt=_n);break}t&&Xt&&Ee.alternate===null&&n(X,Xt),G=f(Ee,G,$t),he===null?Ft=Ee:he.sibling=Ee,he=Ee,Xt=_n}if($t===K.length)return a(X,Xt),be&&nr(X,$t),Ft;if(Xt===null){for(;$t<K.length;$t++)Xt=gt(X,K[$t],ht),Xt!==null&&(G=f(Xt,G,$t),he===null?Ft=Xt:he.sibling=Xt,he=Xt);return be&&nr(X,$t),Ft}for(Xt=s(Xt);$t<K.length;$t++)_n=it(Xt,X,$t,K[$t],ht),_n!==null&&(t&&_n.alternate!==null&&Xt.delete(_n.key===null?$t:_n.key),G=f(_n,G,$t),he===null?Ft=_n:he.sibling=_n,he=_n);return t&&Xt.forEach(function(za){return n(X,za)}),be&&nr(X,$t),Ft}function Jt(X,G,K,ht){if(K==null)throw Error(r(151));for(var Ft=null,he=null,Xt=G,$t=G=0,_n=null,Ee=K.next();Xt!==null&&!Ee.done;$t++,Ee=K.next()){Xt.index>$t?(_n=Xt,Xt=null):_n=Xt.sibling;var za=et(X,Xt,Ee.value,ht);if(za===null){Xt===null&&(Xt=_n);break}t&&Xt&&za.alternate===null&&n(X,Xt),G=f(za,G,$t),he===null?Ft=za:he.sibling=za,he=za,Xt=_n}if(Ee.done)return a(X,Xt),be&&nr(X,$t),Ft;if(Xt===null){for(;!Ee.done;$t++,Ee=K.next())Ee=gt(X,Ee.value,ht),Ee!==null&&(G=f(Ee,G,$t),he===null?Ft=Ee:he.sibling=Ee,he=Ee);return be&&nr(X,$t),Ft}for(Xt=s(Xt);!Ee.done;$t++,Ee=K.next())Ee=it(Xt,X,$t,Ee.value,ht),Ee!==null&&(t&&Ee.alternate!==null&&Xt.delete(Ee.key===null?$t:Ee.key),G=f(Ee,G,$t),he===null?Ft=Ee:he.sibling=Ee,he=Ee);return t&&Xt.forEach(function(Vx){return n(X,Vx)}),be&&nr(X,$t),Ft}function Be(X,G,K,ht){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;G!==null;){if(G.key===Ft){if(Ft=K.type,Ft===A){if(G.tag===7){a(X,G.sibling),ht=c(G,K.props.children),ht.return=X,X=ht;break t}}else if(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===j&&um(Ft)===G.type){a(X,G.sibling),ht=c(G,K.props),ao(ht,K),ht.return=X,X=ht;break t}a(X,G);break}else n(X,G);G=G.sibling}K.type===A?(ht=tr(K.props.children,X.mode,ht,K.key),ht.return=X,X=ht):(ht=sl(K.type,K.key,K.props,null,X.mode,ht),ao(ht,K),ht.return=X,X=ht)}return S(X);case y:t:{for(Ft=K.key;G!==null;){if(G.key===Ft)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(X,G.sibling),ht=c(G,K.children||[]),ht.return=X,X=ht;break t}else{a(X,G);break}else n(X,G);G=G.sibling}ht=uu(K,X.mode,ht),ht.return=X,X=ht}return S(X);case j:return Ft=K._init,K=Ft(K._payload),Be(X,G,K,ht)}if(ut(K))return ee(X,G,K,ht);if(at(K)){if(Ft=at(K),typeof Ft!="function")throw Error(r(150));return K=Ft.call(K),Jt(X,G,K,ht)}if(typeof K.then=="function")return Be(X,G,El(K),ht);if(K.$$typeof===N)return Be(X,G,ul(X,K),ht);Tl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(X,G.sibling),ht=c(G,K),ht.return=X,X=ht):(a(X,G),ht=cu(K,X.mode,ht),ht.return=X,X=ht),S(X)):a(X,G)}return function(X,G,K,ht){try{io=0;var Ft=Be(X,G,K,ht);return Vr=null,Ft}catch(Xt){if(Xt===js||Xt===hl)throw Xt;var he=qn(29,Xt,null,X.mode);return he.lanes=ht,he.return=X,he}finally{}}}var kr=fm(!0),hm=fm(!1),ai=$(null),Mi=null;function Ma(t){var n=t.alternate;St(ln,ln.current&1),St(ai,t),Mi===null&&(n===null||Ir.current!==null||n.memoizedState!==null)&&(Mi=t)}function dm(t){if(t.tag===22){if(St(ln,ln.current),St(ai,t),Mi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Mi=t)}}else ya()}function ya(){St(ln,ln.current),St(ai,ai.current)}function Xi(t){vt(ai),Mi===t&&(Mi=null),vt(ln)}var ln=$(0);function bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Nf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ku(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=va(s);c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(Qn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=va(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(Qn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=va(a);s.tag=2,n!=null&&(s.callback=n),n=xa(t,s,a),n!==null&&(Qn(n,t,a),Ks(n,t,a))}};function pm(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,s)||!Hs(c,f):!0}function mm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Xu.enqueueReplaceState(n,n.state,null)}function cr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gm(t){Al(t)}function _m(t){console.error(t)}function vm(t){Al(t)}function Rl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function xm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wu(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(t,n)},a}function Sm(t){return t=va(t),t.tag=3,t}function Mm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){xm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){xm(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function V0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Mi===null?gf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Su?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),vf(t,s,c)),!1;case 22:return a.flags|=65536,s===Su?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),vf(t,s,c)),!1}throw Error(r(435,a.tag))}return vf(t,s,c),gf(),!1}if(be)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==du&&(t=Error(r(422),{cause:s}),Xs(ti(t,a)))):(s!==du&&(n=Error(r(423),{cause:s}),Xs(ti(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ti(s,a),c=Wu(t.stateNode,s,c),Eu(t,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),fo===null?fo=[f]:fo.push(f),je!==4&&(je=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Wu(a.stateNode,s,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Sm(c),Mm(c,t,a,s),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ym=Error(r(461)),mn=!1;function yn(t,n,a,s){n.child=t===null?hm(n,null,a,s):kr(n,t.child,a,s)}function Em(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return sr(n),s=Cu(t,n,a,S,f,c),T=wu(),t!==null&&!mn?(Du(t,n,c),Wi(t,n,c)):(be&&T&&fu(n),n.flags|=1,yn(t,n,s,c),n.child)}function Tm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bm(t,n,f,s,c)):(t=sl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!$u(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(S,s)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=Ii(f,s),t.ref=n.ref,t.return=n,n.child=t}function bm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Hs(f,s)&&t.ref===n.ref)if(mn=!1,n.pendingProps=s=f,$u(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return qu(t,n,a,s,c)}function Am(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Rm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?bp(n,f):bu(),dm(n);else return n.lanes=n.childLanes=536870912,Rm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(fl(n,f.cachePool),bp(n,f),ya(),n.memoizedState=null):(t!==null&&fl(n,null),bu(),ya());return yn(t,n,c,a),n.child}function Rm(t,n,a,s){var c=xu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&fl(n,null),bu(),dm(n),t!==null&&Ws(t,n,s,!0),null}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function qu(t,n,a,s,c){return sr(n),a=Cu(t,n,a,s,void 0,c),s=wu(),t!==null&&!mn?(Du(t,n,c),Wi(t,n,c)):(be&&s&&fu(n),n.flags|=1,yn(t,n,a,c),n.child)}function Cm(t,n,a,s,c,f){return sr(n),n.updateQueue=null,a=Rp(n,s,a,c),Ap(t),s=wu(),t!==null&&!mn?(Du(t,n,f),Wi(t,n,f)):(be&&s&&fu(n),n.flags|=1,yn(t,n,a,f),n.child)}function wm(t,n,a,s,c){if(sr(n),n.stateNode===null){var f=Nr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Mu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Nr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(ku(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Xu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,O=cr(a,T);f.props=O;var J=f.context,ct=a.contextType;S=Nr,typeof ct=="object"&&ct!==null&&(S=Rn(ct));var gt=a.getDerivedStateFromProps;ct=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==S)&&mm(n,f,s,S),_a=!1;var et=n.memoizedState;f.state=et,Js(n,s,f,c),Qs(),J=n.memoizedState,T||et!==J||_a?(typeof gt=="function"&&(ku(n,a,gt,s),J=n.memoizedState),(O=_a||pm(n,a,O,s,et,J,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,yu(t,n),S=n.memoizedProps,ct=cr(a,S),f.props=ct,gt=n.pendingProps,et=f.context,J=a.contextType,O=Nr,typeof J=="object"&&J!==null&&(O=Rn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||et!==O)&&mm(n,f,s,O),_a=!1,et=n.memoizedState,f.state=et,Js(n,s,f,c),Qs();var it=n.memoizedState;S!==gt||et!==it||_a||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof T=="function"&&(ku(n,a,T,s),it=n.memoizedState),(ct=_a||pm(n,a,ct,s,et,it,O)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=O,s=ct):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Cl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=kr(n,t.child,null,c),n.child=kr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Wi(t,n,c),t}function Dm(t,n,a,s){return ks(),n.flags|=256,yn(t,n,a,s),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(t){return{baseLanes:t,cachePool:_p()}}function Zu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function Um(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Ma(n):ya(),be){var T=Ye,O;if(O=T){t:{for(O=T,T=Si;O.nodeType!==8;){if(!T){T=null;break t}if(O=di(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:er!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},O=qn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Un=n,Ye=null,O=!0):O=!1}O||ar(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Nf(T)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return T=s.children,s=s.fallback,c?(ya(),c=n.mode,T=wl({mode:"hidden",children:T},c),s=tr(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=ju(a),c.childLanes=Zu(t,S,a),n.memoizedState=Yu,s):(Ma(n),Ku(n,T))}if(O=t.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=Qu(t,n,a)):n.memoizedState!==null?(ya(),n.child=t.child,n.flags|=128,n=null):(ya(),c=s.fallback,T=n.mode,s=wl({mode:"visible",children:s.children},T),c=tr(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,kr(n,t.child,null,a),s=n.child,s.memoizedState=ju(a),s.childLanes=Zu(t,S,a),n.memoizedState=Yu,n=c);else if(Ma(n),Nf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Xs({value:s,source:null,stack:null}),n=Qu(t,n,a)}else if(mn||Ws(t,n,a,!1),S=(a&t.childLanes)!==0,mn||S){if(S=ke,S!==null&&(s=a&-a,s=(s&42)!==0?1:ne(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,Lr(t,s),Qn(S,t,s),ym;T.data==="$?"||gf(),n=Qu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,Ye=di(T.nextSibling),Un=n,be=!0,ir=null,Si=!1,t!==null&&(ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=er,Fi=t.id,Hi=t.overflow,er=n),n=Ku(n,s.children),n.flags|=4096);return n}return c?(ya(),c=s.fallback,T=n.mode,O=t.child,J=O.sibling,s=Ii(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,J!==null?c=Ii(J,c):(c=tr(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=ju(a):(O=T.cachePool,O!==null?(J=on._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=_p(),T={baseLanes:T.baseLanes|a,cachePool:O}),c.memoizedState=T,c.childLanes=Zu(t,S,a),n.memoizedState=Yu,s):(Ma(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Ku(t,n){return n=wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wl(t,n){return t=qn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Qu(t,n,a){return kr(n,t.child,null,a),t=Ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Lm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),mu(t.return,n,a)}function Ju(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Nm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(yn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,a,n);else if(t.tag===19)Lm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(St(ln,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&bl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ju(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&bl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ju(n,!0,a,null,f);break;case"together":Ju(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $u(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function k0(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ga(n,on,t.memoizedState.cache),ks();break;case 27:case 5:Qt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Um(t,n,a):(Ma(n),t=Wi(t,n,a),t!==null?t.sibling:null);Ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ws(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Nm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,Am(t,n,a);case 24:ga(n,on,t.memoizedState.cache)}return Wi(t,n,a)}function Om(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!$u(t,a)&&(n.flags&128)===0)return mn=!1,k0(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,be&&(n.flags&1048576)!==0&&up(n,ll,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")lu(s)?(t=cr(s,t),n.tag=1,n=wm(null,n,s,t,a)):(n.tag=0,n=qu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===w){n.tag=11,n=Em(null,n,s,t,a);break t}else if(c===F){n.tag=14,n=Tm(null,n,s,t,a);break t}}throw n=pt(s)||s,Error(r(306,n,""))}}return n;case 0:return qu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=cr(s,n.pendingProps),wm(t,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,yu(t,n),Js(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ga(n,on,s),s!==f.cache&&gu(n,[on],a,!0),Qs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dm(t,n,s,a);break t}else if(s!==c){c=ti(Error(r(424)),n),Xs(c),n=Dm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=di(t.firstChild),Un=n,be=!0,ir=null,Si=!0,a=hm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ks(),s===c){n=Wi(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=Ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=kl(Mt.current).createElement(a),s[rn]=n,s[Sn]=t,Tn(s,a,t),tn(s),n.stateNode=s):n.memoizedState=Ig(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qt(n),t===null&&be&&(s=n.stateNode=Pg(n.type,n.pendingProps,Mt.current),Un=n,Si=!0,c=Ye,Ua(n.type)?(Of=c,Ye=di(s.firstChild)):Ye=c),yn(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=Ye)&&(s=_x(s,n.type,n.pendingProps,Si),s!==null?(n.stateNode=s,Un=n,Ye=di(s.firstChild),Si=!1,c=!0):c=!1),c||ar(n)),Qt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,Df(c,f)?s=null:S!==null&&Df(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(t,n,P0,null,null,a),Mo._currentValue=c),Cl(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Ye)&&(a=vx(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Un=n,Ye=null,t=!0):t=!1),t||ar(n)),null;case 13:return Um(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=kr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return Em(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),yn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,sr(n),c=Rn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return Tm(t,n,n.type,n.pendingProps,a);case 15:return bm(t,n,n.type,n.pendingProps,a);case 19:return Nm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=wl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ii(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Am(t,n,a);case 24:return sr(n),s=Rn(on),t===null?(c=xu(),c===null&&(c=ke,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Mu(n),ga(n,on,c)):((t.lanes&a)!==0&&(yu(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,on,s)):(s=f.cache,ga(n,on,s),s!==c.cache&&gu(n,[on],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function Pm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kg(n)){if(n=ai.current,n!==null&&((Se&4194048)===Se?Mi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Mi))throw Zs=Su,vp;t.flags|=8192}}function Dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ut():536870912,t.lanes|=n,Yr|=n)}function ro(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function X0(t,n,a){var s=n.pendingProps;switch(hu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vs(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dp())),qe(n),null;case 26:return a=n.memoizedState,t===null?(qi(n),a!==null?(qe(n),Pm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(qi(n),qe(n),Pm(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&qi(n),qe(n),n.flags&=-16777217),null;case 27:Ne(n),a=Mt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Q.current,Vs(n)?fp(n):(t=Pg(c,s,a),n.stateNode=t,qi(n))}return qe(n),null;case 5:if(Ne(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=Q.current,Vs(n))fp(n);else{switch(c=kl(Mt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[rn]=n,t[Sn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Tn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&qi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Mt.current,Vs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Un,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cg(t.nodeValue,a)),t||ar(n)}else t=kl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Vs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=dp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),qe(n),null;case 4:return oe(),t===null&&bf(n.stateNode.containerInfo),qe(n),null;case 10:return Vi(n.type),qe(n),null;case 19:if(vt(ln),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ro(c,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=bl(t),f!==null){for(n.flags|=128,ro(c,!1),t=f.updateQueue,n.updateQueue=t,Dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)cp(a,t),a=a.sibling;return St(ln,ln.current&1|2),n.child}t=t.sibling}c.tail!==null&&de()>Nl&&(n.flags|=128,s=!0,ro(c,!1),n.lanes=4194304)}else{if(!s)if(t=bl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Dl(n,t),ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return qe(n),null}else 2*de()-c.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,s=!0,ro(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,t=ln.current,St(ln,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Xi(n),Au(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(or),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function W0(t,n){switch(hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(on),oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(ln),null;case 4:return oe(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),Au(),t!==null&&vt(or),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function zm(t,n){switch(hu(n),n.tag){case 3:Vi(on),oe();break;case 26:case 27:case 5:Ne(n);break;case 4:oe();break;case 13:Xi(n);break;case 19:vt(ln);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),Au(),t!==null&&vt(or);break;case 24:Vi(on)}}function so(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(T){Ge(n,n.return,T)}}function Ea(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var O=a,J=T;try{J()}catch(ct){Ge(c,O,ct)}}}s=s.next}while(s!==f)}}catch(ct){Ge(n,n.return,ct)}}function Bm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Tp(n,a)}catch(s){Ge(t,t.return,s)}}}function Im(t,n,a){a.props=cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ge(t,n,c)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ge(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(t,n,c)}else a.current=null}function Fm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ge(t,t.return,c)}}function tf(t,n,a){try{var s=t.stateNode;hx(s,t.type,a,n),s[Sn]=n}catch(c){Ge(t,t.return,c)}}function Hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ua(t.type)||t.tag===4}function ef(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ua(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vl));else if(s!==4&&(s===27&&Ua(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(nf(t,n,a),t=t.sibling;t!==null;)nf(t,n,a),t=t.sibling}function Ul(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ua(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function Gm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[rn]=t,n[Sn]=a}catch(f){Ge(t,t.return,f)}}var Yi=!1,Qe=!1,af=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function q0(t,n){if(t=t.containerInfo,Cf=Zl,t=$d(t),eu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,O=-1,J=0,ct=0,gt=t,et=null;e:for(;;){for(var it;gt!==a||c!==0&&gt.nodeType!==3||(T=S+c),gt!==f||s!==0&&gt.nodeType!==3||(O=S+s),gt.nodeType===3&&(S+=gt.nodeValue.length),(it=gt.firstChild)!==null;)et=gt,gt=it;for(;;){if(gt===t)break e;if(et===a&&++J===c&&(T=S),et===f&&++ct===s&&(O=S),(it=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=it}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:t,selectionRange:a},Zl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=cr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function km(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(t,a),s&4&&so(5,a);break;case 1:if(Ta(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var c=cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}s&64&&Bm(a),s&512&&oo(a,a.return);break;case 3:if(Ta(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tp(t,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&s&4&&Gm(a);case 26:case 5:Ta(t,a),n===null&&s&4&&Fm(a),s&512&&oo(a,a.return);break;case 12:Ta(t,a);break;case 13:Ta(t,a),s&4&&qm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ex.bind(null,a),xx(t,a))));break;case 22:if(s=a.memoizedState!==null||Yi,!s){n=n!==null&&n.memoizedState!==null||Qe,c=Yi;var f=Qe;Yi=s,(Qe=n)&&!f?ba(t,a,(a.subtreeFlags&8772)!==0):Ta(t,a),Yi=c,Qe=f}break;case 30:break;default:Ta(t,a)}}function Xm(t){var n=t.alternate;n!==null&&(t.alternate=null,Xm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,In=!1;function ji(t,n,a){for(a=a.child;a!==null;)Wm(t,n,a),a=a.sibling}function Wm(t,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Qe||yi(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||yi(a,n);var s=We,c=In;Ua(a.type)&&(We=a.stateNode,In=!1),ji(t,n,a),_o(a.stateNode),We=s,In=c;break;case 5:Qe||yi(a,n);case 6:if(s=We,c=In,We=null,ji(t,n,a),We=s,In=c,We!==null)if(In)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(In?(t=We,Ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bo(t)):Ng(We,a.stateNode));break;case 4:s=We,c=In,We=a.stateNode.containerInfo,In=!0,ji(t,n,a),We=s,In=c;break;case 0:case 11:case 14:case 15:Qe||Ea(2,a,n),Qe||Ea(4,a,n),ji(t,n,a);break;case 1:Qe||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Im(a,n,s)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,ji(t,n,a),Qe=s;break;default:ji(t,n,a)}}function qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bo(t)}catch(a){Ge(n,n.return,a)}}function Y0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Vm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Vm),n;default:throw Error(r(435,t.tag))}}function rf(t,n){var a=Y0(t);n.forEach(function(s){var c=nx.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Ua(T.type)){We=T.stateNode,In=!1;break t}break;case 5:We=T.stateNode,In=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(We===null)throw Error(r(160));Wm(f,S,c),We=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ym(n,t),n=n.sibling}var hi=null;function Ym(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),jn(t),s&4&&(Ea(3,t,t.return),so(3,t),Ea(5,t,t.return));break;case 1:Yn(n,t),jn(t),s&512&&(Qe||a===null||yi(a,a.return)),s&64&&Yi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(Yn(n,t),jn(t),s&512&&(Qe||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[fa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[rn]=t,tn(f),s=f;break t;case"link":var S=Gg("link","href",c).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Gg("meta","content",c).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,tn(f),s=f}t.stateNode=s}else Vg(c,t.type,t.stateNode);else t.stateNode=Hg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vg(c,t.type,t.stateNode):Hg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&tf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),jn(t),s&512&&(Qe||a===null||yi(a,a.return)),a!==null&&s&4&&tf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),jn(t),s&512&&(Qe||a===null||yi(a,a.return)),t.flags&32){c=t.stateNode;try{xi(c,"")}catch(it){Ge(t,t.return,it)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,tf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(af=!0);break;case 6:if(Yn(n,t),jn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){Ge(t,t.return,it)}}break;case 3:if(ql=null,c=hi,hi=Xl(n.containerInfo),Yn(n,t),hi=c,jn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(n.containerInfo)}catch(it){Ge(t,t.return,it)}af&&(af=!1,jm(t));break;case 4:s=hi,hi=Xl(t.stateNode.containerInfo),Yn(n,t),jn(t),hi=s;break;case 12:Yn(n,t),jn(t);break;case 13:Yn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ff=de()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,rf(t,s)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,J=Yi,ct=Qe;if(Yi=J||c,Qe=ct||O,Yn(n,t),Qe=ct,Yi=J,jn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Yi||Qe||ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=O.stateNode;var gt=O.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Ge(O,O.return,it)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(it){Ge(O,O.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,rf(t,a))));break;case 19:Yn(n,t),jn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,rf(t,s)));break;case 30:break;case 21:break;default:Yn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Hm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ef(t);Ul(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(xi(S,""),a.flags&=-33);var T=ef(t);Ul(t,T,S);break;case 3:case 4:var O=a.stateNode.containerInfo,J=ef(t);nf(t,J,O);break;default:throw Error(r(161))}}catch(ct){Ge(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function jm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)km(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),ur(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Im(n,n.return,a),ur(n);break;case 27:_o(n.stateNode);case 26:case 5:yi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function ba(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ba(c,f,a),so(4,f);break;case 1:if(ba(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ge(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)Ep(O[c],T)}catch(J){Ge(s,s.return,J)}}a&&S&64&&Bm(f),oo(f,f.return);break;case 27:Gm(f);case 26:case 5:ba(c,f,a),a&&s===null&&S&4&&Fm(f),oo(f,f.return);break;case 12:ba(c,f,a);break;case 13:ba(c,f,a),a&&S&4&&qm(c,f);break;case 22:f.memoizedState===null&&ba(c,f,a),oo(f,f.return);break;case 30:break;default:ba(c,f,a)}n=n.sibling}}function sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function Ei(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(t,n,a,s),n=n.sibling}function Zm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),c&2048&&so(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){Ei(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Ge(n,n.return,O)}}else Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,s):lo(t,n):f._visibility&2?Ei(t,n,a,s):(f._visibility|=2,Xr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&sf(S,n);break;case 24:Ei(t,n,a,s),c&2048&&of(n.alternate,n);break;default:Ei(t,n,a,s)}}function Xr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,O=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Xr(f,S,T,O,c),so(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Xr(f,S,T,O,c):lo(f,S):(ct._visibility|=2,Xr(f,S,T,O,c)),c&&J&2048&&sf(S.alternate,S);break;case 24:Xr(f,S,T,O,c),c&&J&2048&&of(S.alternate,S);break;default:Xr(f,S,T,O,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&sf(s.alternate,s);break;case 24:lo(a,s),c&2048&&of(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Wr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)Km(t),t=t.sibling}function Km(t){switch(t.tag){case 26:Wr(t),t.flags&co&&t.memoizedState!==null&&Lx(hi,t.memoizedState,t.memoizedProps);break;case 5:Wr(t);break;case 3:case 4:var n=hi;hi=Xl(t.stateNode.containerInfo),Wr(t),hi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Wr(t),co=n):Wr(t));break;default:Wr(t)}}function Qm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,$m(s,t)}Qm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jm(t),t=t.sibling}function Jm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ll(t)):uo(t);break;default:uo(t)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,$m(s,t)}Qm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}t=t.sibling}}function $m(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(Xm(s),s===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var j0={getCacheForType:function(t){var n=Rn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Z0=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,pe=null,Se=0,Le=0,Zn=null,Aa=!1,qr=!1,lf=!1,Zi=0,je=0,Ra=0,fr=0,cf=0,ri=0,Yr=0,fo=null,Fn=null,uf=!1,ff=0,Nl=1/0,Ol=null,Ca=null,En=0,wa=null,jr=null,Zr=0,hf=0,df=null,tg=null,ho=0,pf=null;function Kn(){if((Ue&2)!==0&&Se!==0)return Se&-Se;if(P.T!==null){var t=zr;return t!==0?t:Mf()}return ye()}function eg(){ri===0&&(ri=(Se&536870912)===0||be?k():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===ke&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(Kr(t,0),Da(t,Se,ri,!1)),zt(t,a),((Ue&2)===0||t!==ke)&&(t===ke&&((Ue&2)===0&&(fr|=a),je===4&&Da(t,Se,ri,!1)),Ti(t))}function ng(t,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Rt(t,n),c=s?J0(t,n):_f(t,n,!0),f=s;do{if(c===0){qr&&!s&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!K0(a)){c=_f(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;c=fo;var O=T.current.memoizedState.isDehydrated;if(O&&(Kr(T,S).flags|=256),S=_f(T,S,!1),S!==2){if(lf&&!O){T.errorRecoveryDisabledLanes|=f,fr|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Kr(t,0),Da(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(s,n,ri,!Aa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=ff+300-de(),10<c)){if(Da(s,n,ri,!Aa),Yt(s,0,!0)!==0)break t;s.timeoutHandle=Ug(ig.bind(null,s,a,Fn,Ol,uf,n,ri,fr,Yr,Aa,f,2,-0,0),c);break t}ig(s,a,Fn,Ol,uf,n,ri,fr,Yr,Aa,f,0,-0,0)}}break}while(!0);Ti(t)}function ig(t,n,a,s,c,f,S,T,O,J,ct,gt,et,it){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:Ux},Km(n),gt=Nx(),gt!==null)){t.cancelPendingCommit=gt(ug.bind(null,t,n,f,a,s,c,S,T,O,ct,1,et,it)),Da(t,f,S,!J);return}ug(t,n,f,a,s,c,S,T,O)}function K0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,s){n&=~cf,n&=~fr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&_t(t,a,n)}function Pl(){return(Ue&6)===0?(po(0),!1):!0}function mf(){if(pe!==null){if(Le===0)var t=pe.return;else t=pe,Gi=rr=null,Uu(t),Vr=null,io=0,t=pe;for(;t!==null;)zm(t.alternate,t),t=t.return;pe=null}}function Kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,px(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),mf(),ke=t,pe=a=Ii(t.current,null),Se=n,Le=0,Zn=null,Aa=!1,qr=Rt(t,n),lf=!1,Yr=ri=cf=fr=Ra=je=0,Fn=fo=null,uf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ot(s),f=1<<c;n|=t[c],s&=~f}return Zi=n,il(),a}function ag(t,n){ue=null,P.H=yl,n===js||n===hl?(n=Mp(),Le=3):n===vp?(n=Mp(),Le=4):Le=n===ym?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(je=1,Rl(t,ti(n,t.current)))}function rg(){var t=P.H;return P.H=yl,t===null?yl:t}function sg(){var t=P.A;return P.A=j0,t}function gf(){je=4,Aa||(Se&4194048)!==Se&&ai.current!==null||(qr=!0),(Ra&134217727)===0&&(fr&134217727)===0||ke===null||Da(ke,Se,ri,!1)}function _f(t,n,a){var s=Ue;Ue|=2;var c=rg(),f=sg();(ke!==t||Se!==n)&&(Ol=null,Kr(t,n)),n=!1;var S=je;t:do try{if(Le!==0&&pe!==null){var T=pe,O=Zn;switch(Le){case 8:mf(),S=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Le;if(Le=0,Zn=null,Qr(t,T,O,J),a&&qr){S=0;break t}break;default:J=Le,Le=0,Zn=null,Qr(t,T,O,J)}}Q0(),S=je;break}catch(ct){ag(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Gi=rr=null,Ue=s,P.H=c,P.A=f,pe===null&&(ke=null,Se=0,il()),S}function Q0(){for(;pe!==null;)og(pe)}function J0(t,n){var a=Ue;Ue|=2;var s=rg(),c=sg();ke!==t||Se!==n?(Ol=null,Nl=de()+500,Kr(t,n)):qr=Rt(t,n);t:do try{if(Le!==0&&pe!==null){n=pe;var f=Zn;e:switch(Le){case 1:Le=0,Zn=null,Qr(t,n,f,1);break;case 2:case 9:if(xp(f)){Le=0,Zn=null,lg(n);break}n=function(){Le!==2&&Le!==9||ke!==t||(Le=7),Ti(t)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:xp(f)?(Le=0,Zn=null,lg(n)):(Le=0,Zn=null,Qr(t,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var T=pe;if(!S||kg(S)){Le=0,Zn=null;var O=T.sibling;if(O!==null)pe=O;else{var J=T.return;J!==null?(pe=J,zl(J)):pe=null}break e}}Le=0,Zn=null,Qr(t,n,f,5);break;case 6:Le=0,Zn=null,Qr(t,n,f,6);break;case 8:mf(),je=6;break t;default:throw Error(r(462))}}$0();break}catch(ct){ag(t,ct)}while(!0);return Gi=rr=null,P.H=s,P.A=c,Ue=a,pe!==null?0:(ke=null,Se=0,il(),je)}function $0(){for(;pe!==null&&!xn();)og(pe)}function og(t){var n=Om(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?zl(t):pe=n}function lg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Cm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Cm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Uu(n);default:zm(a,n),n=pe=cp(n,Zi),n=Om(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?zl(t):pe=n}function Qr(t,n,a,s){Gi=rr=null,Uu(n),Vr=null,io=0;var c=n.return;try{if(V0(t,c,n,a,Se)){je=1,Rl(t,ti(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;je=1,Rl(t,ti(a,t.current)),pe=null;return}n.flags&32768?(be||s===1?t=!0:qr||(Se&536870912)!==0?t=!1:(Aa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ai.current,s!==null&&s.tag===13&&(s.flags|=16384))),cg(n,t)):zl(n)}function zl(t){var n=t;do{if((n.flags&32768)!==0){cg(n,Aa);return}t=n.return;var a=X0(n.alternate,n,Zi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);je===0&&(je=5)}function cg(t,n){do{var a=W0(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);je=6,pe=null}function ug(t,n,a,s,c,f,S,T,O){t.cancelPendingCommit=null;do Bl();while(En!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=su,bt(t,a,f,S,T,O),t===ke&&(pe=ke=null,Se=0),jr=n,wa=t,Zr=a,hf=f,df=c,tg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ix(ae,function(){return mg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=Z.p,Z.p=2,S=Ue,Ue|=4;try{q0(t,n,a)}finally{Ue=S,Z.p=c,P.T=s}}En=1,fg(),hg(),dg()}}function fg(){if(En===1){En=0;var t=wa,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=Ue;Ue|=4;try{Ym(n,t);var f=wf,S=$d(t.containerInfo),T=f.focusedElem,O=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Jd(T.ownerDocument.documentElement,T)){if(O!==null&&eu(T)){var J=O.start,ct=O.end;if(ct===void 0&&(ct=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ct,T.value.length);else{var gt=T.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ee=T.textContent.length,Jt=Math.min(O.start,ee),Be=O.end===void 0?Jt:Math.min(O.end,ee);!it.extend&&Jt>Be&&(S=Be,Be=Jt,Jt=S);var X=Qd(T,Jt),G=Qd(T,Be);if(X&&G&&(it.rangeCount!==1||it.anchorNode!==X.node||it.anchorOffset!==X.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var K=gt.createRange();K.setStart(X.node,X.offset),it.removeAllRanges(),Jt>Be?(it.addRange(K),it.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),it.addRange(K))}}}}for(gt=[],it=T;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var ht=gt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Zl=!!Cf,wf=Cf=null}finally{Ue=c,Z.p=s,P.T=a}}t.current=n,En=2}}function hg(){if(En===2){En=0;var t=wa,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=Ue;Ue|=4;try{km(t,n.alternate,n)}finally{Ue=c,Z.p=s,P.T=a}}En=3}}function dg(){if(En===4||En===3){En=0,Me();var t=wa,n=jr,a=Zr,s=tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,jr=wa=null,pg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ca=null),De(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Z.p=c}}(Zr&3)!==0&&Bl(),Ti(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===pf?ho++:(ho=0,pf=t):ho=0,po(0)}}function pg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Bl(t){return fg(),hg(),dg(),mg()}function mg(){if(En!==5)return!1;var t=wa,n=hf;hf=0;var a=De(Zr),s=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=df,df=null;var f=wa,S=Zr;if(En=0,jr=wa=null,Zr=0,(Ue&6)!==0)throw Error(r(331));var T=Ue;if(Ue|=4,Jm(f.current),Zm(f,f.current,S,a),Ue=T,po(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{Z.p=c,P.T=s,pg(t,n)}}function gg(t,n,a){n=ti(a,n),n=Wu(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(zt(t,2),Ti(t))}function Ge(t,n,a){if(t.tag===3)gg(t,t,a);else for(;n!==null;){if(n.tag===3){gg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){t=ti(a,t),a=Sm(2),s=xa(n,a,2),s!==null&&(Mm(a,s,n,t),zt(s,2),Ti(s));break}}n=n.return}}function vf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Z0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(lf=!0,c.add(a),t=tx.bind(null,t,n,a),n.then(t,t))}function tx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Se&a)===a&&(je===4||je===3&&(Se&62914560)===Se&&300>de()-ff?(Ue&2)===0&&Kr(t,0):cf|=a,Yr===Se&&(Yr=0)),Ti(t)}function _g(t,n){n===0&&(n=Ut()),t=Lr(t,n),t!==null&&(zt(t,n),Ti(t))}function ex(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_g(t,a)}function nx(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),_g(t,a)}function ix(t,n){return ge(t,n)}var Il=null,Jr=null,xf=!1,Fl=!1,Sf=!1,hr=0;function Ti(t){t!==Jr&&t.next===null&&(Jr===null?Il=Jr=t:Jr=Jr.next=t),Fl=!0,xf||(xf=!0,rx())}function po(t,n){if(!Sf&&Fl){Sf=!0;do for(var a=!1,s=Il;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Mg(s,f))}else f=Se,f=Yt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,Mg(s,f));s=s.next}while(a);Sf=!1}}function ax(){vg()}function vg(){Fl=xf=!1;var t=0;hr!==0&&(dx()&&(t=hr),hr=0);for(var n=de(),a=null,s=Il;s!==null;){var c=s.next,f=xg(s,n);f===0?(s.next=null,a===null?Il=c:a.next=c,c===null&&(Jr=a)):(a=s,(t!==0||(f&3)!==0)&&(Fl=!0)),s=c}po(t)}function xg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Ot(f),T=1<<S,O=c[S];O===-1?((T&a)===0||(T&s)!==0)&&(c[S]=ie(T,n)):O<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=Se,a=Yt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&I(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Rt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&I(s),De(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=L;break;default:a=ae}return s=Sg.bind(null,t),a=ge(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&I(s),t.callbackPriority=2,t.callbackNode=null,2}function Sg(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var s=Se;return s=Yt(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ng(t,s,n),xg(t,de()),t.callbackNode!=null&&t.callbackNode===a?Sg.bind(null,t):null)}function Mg(t,n){if(Bl())return null;ng(t,n,!0)}function rx(){mx(function(){(Ue&6)!==0?ge(_e,ax):vg()})}function Mf(){return hr===0&&(hr=k()),hr}function yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function Eg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function sx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=yg((c[Sn]||null).action),S=s.submitter;S&&(n=(n=S[Sn]||null)?yg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new tl("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(hr!==0){var O=S?Eg(c,S):new FormData(c);Hu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=S?Eg(c,S):new FormData(c),Hu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var yf=0;yf<ru.length;yf++){var Ef=ru[yf],ox=Ef.toLowerCase(),lx=Ef[0].toUpperCase()+Ef.slice(1);fi(ox,"on"+lx)}fi(np,"onAnimationEnd"),fi(ip,"onAnimationIteration"),fi(ap,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(b0,"onTransitionRun"),fi(A0,"onTransitionStart"),fi(R0,"onTransitionCancel"),fi(rp,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Tg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],O=T.instance,J=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ct){Al(ct)}c.currentTarget=null,f=O}else for(S=0;S<s.length;S++){if(T=s[S],O=T.instance,J=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ct){Al(ct)}c.currentTarget=null,f=O}}}}function me(t,n){var a=n[ja];a===void 0&&(a=n[ja]=new Set);var s=t+"__bubble";a.has(s)||(bg(n,t,2,!1),a.add(s))}function Tf(t,n,a){var s=0;n&&(s|=4),bg(a,t,s,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function bf(t){if(!t[Hl]){t[Hl]=!0,jo.forEach(function(a){a!=="selectionchange"&&(cx.has(a)||Tf(a,!1,t),Tf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Tf("selectionchange",!1,n))}}function bg(t,n,a,s){switch(Zg(n)){case 2:var c=zx;break;case 8:c=Bx;break;default:c=Ff}a=c.bind(null,n,a,t),c=void 0,!qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Af(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=s.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Li(T),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Ld(function(){var J=f,ct=Xc(a),gt=[];t:{var et=sp.get(t);if(et!==void 0){var it=tl,ee=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":it=i0;break;case"focusin":ee="focus",it=Kc;break;case"focusout":ee="blur",it=Kc;break;case"beforeblur":case"afterblur":it=Kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=s0;break;case np:case ip:case ap:it=jv;break;case rp:it=l0;break;case"scroll":case"scrollend":it=kv;break;case"wheel":it=u0;break;case"copy":case"cut":case"paste":it=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Bd;break;case"toggle":case"beforetoggle":it=h0}var Jt=(n&4)!==0,Be=!Jt&&(t==="scroll"||t==="scrollend"),X=Jt?et!==null?et+"Capture":null:et;Jt=[];for(var G=J,K;G!==null;){var ht=G;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||X===null||(ht=Ns(G,X),ht!=null&&Jt.push(go(G,ht,K))),Be)break;G=G.return}0<Jt.length&&(et=new it(et,ee,null,a,ct),gt.push({event:et,listeners:Jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",et&&a!==kc&&(ee=a.relatedTarget||a.fromElement)&&(Li(ee)||ee[Pn]))break t;if((it||et)&&(et=ct.window===ct?ct:(et=ct.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=J,ee=ee?Li(ee):null,ee!==null&&(Be=u(ee),Jt=ee.tag,ee!==Be||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=J),it!==ee)){if(Jt=Pd,ht="onMouseLeave",X="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Bd,ht="onPointerLeave",X="onPointerEnter",G="pointer"),Be=it==null?et:Ka(it),K=ee==null?et:Ka(ee),et=new Jt(ht,G+"leave",it,a,ct),et.target=Be,et.relatedTarget=K,ht=null,Li(ct)===J&&(Jt=new Jt(X,G+"enter",ee,a,ct),Jt.target=K,Jt.relatedTarget=Be,ht=Jt),Be=ht,it&&ee)e:{for(Jt=it,X=ee,G=0,K=Jt;K;K=$r(K))G++;for(K=0,ht=X;ht;ht=$r(ht))K++;for(;0<G-K;)Jt=$r(Jt),G--;for(;0<K-G;)X=$r(X),K--;for(;G--;){if(Jt===X||X!==null&&Jt===X.alternate)break e;Jt=$r(Jt),X=$r(X)}Jt=null}else Jt=null;it!==null&&Ag(gt,et,it,Jt,!1),ee!==null&&Be!==null&&Ag(gt,Be,ee,Jt,!0)}}t:{if(et=J?Ka(J):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Ft=Wd;else if(kd(et))if(qd)Ft=y0;else{Ft=S0;var he=x0}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Vc(J.elementType)&&(Ft=Wd):Ft=M0;if(Ft&&(Ft=Ft(t,J))){Xd(gt,Ft,a,ct);break t}he&&he(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&An(et,"number",et.value)}switch(he=J?Ka(J):window,t){case"focusin":(kd(he)||he.contentEditable==="true")&&(wr=he,nu=J,Gs=null);break;case"focusout":Gs=nu=wr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,tp(gt,a,ct);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":tp(gt,a,ct)}var Xt;if(Jc)t:{switch(t){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Cr?Gd(t,a)&&($t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Id&&a.locale!=="ko"&&(Cr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Cr&&(Xt=Nd()):(ma=ct,Yc="value"in ma?ma.value:ma.textContent,Cr=!0)),he=Gl(J,$t),0<he.length&&($t=new zd($t,t,null,a,ct),gt.push({event:$t,listeners:he}),Xt?$t.data=Xt:(Xt=Vd(a),Xt!==null&&($t.data=Xt)))),(Xt=p0?m0(t,a):g0(t,a))&&($t=Gl(J,"onBeforeInput"),0<$t.length&&(he=new zd("onBeforeInput","beforeinput",null,a,ct),gt.push({event:he,listeners:$t}),he.data=Xt)),sx(gt,t,J,a,ct)}Tg(gt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(t,a),c!=null&&s.unshift(go(t,c,f)),c=Ns(t,n),c!=null&&s.push(go(t,c,f))),t.tag===3)return s;t=t.return}return[]}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ag(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,O=T.alternate,J=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||J===null||(O=J,c?(J=Ns(a,f),J!=null&&S.unshift(go(a,J,O))):c||(J=Ns(a,f),J!=null&&S.push(go(a,J,O)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var ux=/\r\n?/g,fx=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(fx,"")}function Cg(t,n){return n=Rg(n),Rg(t)===n}function Vl(){}function ze(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||xi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&xi(t,""+s);break;case"className":wt(t,"class",s);break;case"tabIndex":wt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,a,s);break;case"style":Dd(t,s,f);break;case"data":if(n!=="object"){wt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Vl);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gv.get(a)||a,Tt(t,a,s))}}function Rf(t,n,a,s,c,f){switch(a){case"style":Dd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?xi(t,s):(typeof s=="number"||typeof s=="bigint")&&xi(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,f,S,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),s&&ze(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=S=c=null,O=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":c=ct;break;case"type":S=ct;break;case"checked":O=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ze(t,n,s,ct,a,null)}}He(t,f,T,O,J,S,c,!1),Oe(t);return;case"select":me("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:ze(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?sn(t,!!s,n,!1):a!=null&&sn(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ze(t,n,S,T,a,null)}Mn(t,s,c,f),Oe(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(t,n,O,s,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<mo.length;s++)me(mo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,J,s,a,null)}return;default:if(Vc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&Rf(t,n,ct,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&ze(t,n,T,s,a,null))}function hx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,O=null,J=null,ct=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=gt;default:s.hasOwnProperty(it)||ze(t,n,it,null,s,gt)}}for(var et in s){var it=s[et];if(gt=a[et],s.hasOwnProperty(et)&&(it!=null||gt!=null))switch(et){case"type":f=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ct=it;break;case"value":S=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&ze(t,n,et,it,s,gt)}}Pi(t,S,T,O,J,ct,f,c);return;case"select":it=S=T=et=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":it=O;default:s.hasOwnProperty(f)||ze(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==O&&ze(t,n,c,f,s,O)}n=T,a=S,s=it,et!=null?sn(t,!!a,et,!1):!!s!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(t,n,T,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":et=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&ze(t,n,S,c,s,f)}pn(t,et,it);return;case"option":for(var ee in a)if(et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:ze(t,n,ee,null,s,et)}for(O in s)if(et=s[O],it=a[O],s.hasOwnProperty(O)&&et!==it&&(et!=null||it!=null))switch(O){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:ze(t,n,O,et,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!s.hasOwnProperty(Jt)&&ze(t,n,Jt,null,s,et);for(J in s)if(et=s[J],it=a[J],s.hasOwnProperty(J)&&et!==it&&(et!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:ze(t,n,J,et,s,it)}return;default:if(Vc(n)){for(var Be in a)et=a[Be],a.hasOwnProperty(Be)&&et!==void 0&&!s.hasOwnProperty(Be)&&Rf(t,n,Be,void 0,s,et);for(ct in s)et=s[ct],it=a[ct],!s.hasOwnProperty(ct)||et===it||et===void 0&&it===void 0||Rf(t,n,ct,et,s,it);return}}for(var X in a)et=a[X],a.hasOwnProperty(X)&&et!=null&&!s.hasOwnProperty(X)&&ze(t,n,X,null,s,et);for(gt in s)et=s[gt],it=a[gt],!s.hasOwnProperty(gt)||et===it||et==null&&it==null||ze(t,n,gt,et,s,it)}var Cf=null,wf=null;function kl(t){return t.nodeType===9?t:t.ownerDocument}function wg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function dx(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(gx)}:Ug;function gx(t){setTimeout(function(){throw t})}function Ua(t){return t==="head"}function Ng(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&_o(S.documentElement),a&2&&_o(S.body),a&4)for(a=S.head,_o(a),S=a.firstChild;S;){var T=S.nextSibling,O=S.nodeName;S[fa]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){t.removeChild(f),bo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);bo(n)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _x(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[fa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function vx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function xx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Of=null;function Og(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Pg(t,n,a){switch(n=kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ha(t)}var si=new Map,zg=new Set;function Xl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=Z.d;Z.d={f:Sx,r:Mx,D:yx,C:Ex,L:Tx,m:bx,X:Rx,S:Ax,M:Cx};function Sx(){var t=Ki.f(),n=Pl();return t||n}function Mx(t){var n=Ni(t);n!==null&&n.tag===5&&n.type==="form"?nm(n):Ki.r(t)}var ts=typeof document>"u"?null:document;function Bg(t,n,a){var s=ts;if(s&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),zg.has(c)||(zg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",t),tn(n),s.head.appendChild(n)))}}function yx(t){Ki.D(t),Bg("dns-prefetch",t,null)}function Ex(t,n){Ki.C(t,n),Bg("preconnect",t,n)}function Tx(t,n,a){Ki.L(t,n,a);var s=ts;if(s&&t&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(t)+'"]';var f=c;switch(n){case"style":f=es(t);break;case"script":f=ns(t)}si.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(vo(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),Tn(n,"link",t),tn(n),s.head.appendChild(n)))}}function bx(t,n){Ki.m(t,n);var a=ts;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(s)+'"][href="'+Ve(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ns(t)}if(!si.has(f)&&(t=_({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),Tn(s,"link",t),tn(s),a.head.appendChild(s)}}}function Ax(t,n,a){Ki.S(t,n,a);var s=ts;if(s&&t){var c=da(s).hoistableStyles,f=es(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(vo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&Pf(t,a);var O=S=s.createElement("link");tn(O),Tn(O,"link",t),O._p=new Promise(function(J,ct){O.onload=J,O.onerror=ct}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Wl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function Rx(t,n){Ki.X(t,n);var a=ts;if(a&&t){var s=da(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=_({src:t,async:!0},n),(n=si.get(c))&&zf(t,n),f=a.createElement("script"),tn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Cx(t,n){Ki.M(t,n);var a=ts;if(a&&t){var s=da(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=si.get(c))&&zf(t,n),f=a.createElement("script"),tn(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ig(t,n,a,s){var c=(c=Mt.current)?Xl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=es(a.href),a=da(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=es(a.href);var f=da(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(vo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||wx(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=da(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function es(t){return'href="'+Ve(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function Fg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function wx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),tn(n),t.head.appendChild(n))}function ns(t){return'[src="'+Ve(t)+'"]'}function xo(t){return"script[async]"+t}function Hg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tn(s),Tn(s,"style",c),Wl(s,a.precedence,t),n.instance=s;case"stylesheet":c=es(a.href);var f=t.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=Fg(a),(c=si.get(c))&&Pf(s,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Tn(f,"link",s),n.state.loading|=4,Wl(f,a.precedence,t),n.instance=f;case"script":return f=ns(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,tn(c),c):(s=a,(c=si.get(f))&&(s=_({},a),zf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),Tn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Wl(s,a.precedence,t));return n.instance}function Wl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ql=null;function Gg(t,n,a){if(ql===null){var s=new Map,c=ql=new Map;c.set(a,s)}else c=ql,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[fa]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Vg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Dx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var So=null;function Ux(){}function Lx(t,n,a){if(So===null)throw Error(r(475));var s=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=es(a.href),f=t.querySelector(vo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Yl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Fg(a),(c=si.get(c))&&Pf(a,c),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Yl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Nx(){if(So===null)throw Error(r(475));var t=So;return t.stylesheets&&t.count===0&&Bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Bf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Yl(){if(this.count--,this.count===0){if(this.stylesheets)Bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jl=null;function Bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jl=new Map,n.forEach(Ox,t),jl=null,Yl.call(t))}function Ox(t,n){if(!(n.state.loading&4)){var a=jl.get(t);if(a)var s=a.get(null);else{a=new Map,jl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Yl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Mo={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Px(t,n,a,s,c,f,S,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Xg(t,n,a,s,c,f,S,T,O,J,ct,gt){return t=new Px(t,n,a,S,T,O,J,gt),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=_u(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Mu(f),t}function Wg(t){return t?(t=Nr,t):Nr}function qg(t,n,a,s,c,f){c=Wg(c),s.context===null?s.context=c:s.pendingContext=c,s=va(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=xa(t,s,n),a!==null&&(Qn(a,t,n),Ks(a,t,n))}function Yg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){Yg(t,n),(t=t.alternate)&&Yg(t,n)}function jg(t){if(t.tag===13){var n=Lr(t,67108864);n!==null&&Qn(n,t,67108864),If(t,67108864)}}var Zl=!0;function zx(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,Ff(t,n,a,s)}finally{Z.p=f,P.T=c}}function Bx(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,Ff(t,n,a,s)}finally{Z.p=f,P.T=c}}function Ff(t,n,a,s){if(Zl){var c=Hf(s);if(c===null)Af(t,n,s,Kl,a),Kg(t,s);else if(Fx(c,t,n,a,s))s.stopPropagation();else if(Kg(t,s),n&4&&-1<Ix.indexOf(t)){for(;c!==null;){var f=Ni(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var O=1<<31-Ot(S);T.entanglements[1]|=O,S&=~O}Ti(f),(Ue&6)===0&&(Nl=de()+500,po(0))}}break;case 13:T=Lr(f,2),T!==null&&Qn(T,f,2),Pl(),If(f,2)}if(f=Hf(s),f===null&&Af(t,n,s,Kl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Af(t,n,s,null,a)}}function Hf(t){return t=Xc(t),Gf(t)}var Kl=null;function Gf(t){if(Kl=null,t=Li(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function Zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case _e:return 2;case jt:return 8;case ae:case Ze:return 32;case L:return 268435456;default:return 32}default:return 32}}var Vf=!1,La=null,Na=null,Oa=null,yo=new Map,Eo=new Map,Pa=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(t,n){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ni(n),n!==null&&jg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Fx(t,n,a,s,c){switch(n){case"focusin":return La=To(La,t,n,a,s,c),!0;case"dragenter":return Na=To(Na,t,n,a,s,c),!0;case"mouseover":return Oa=To(Oa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,To(yo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,t,n,a,s,c)),!0}return!1}function Qg(t){var n=Li(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Xn(t.priority,function(){if(a.tag===13){var s=Kn();s=ne(s);var c=Lr(a,s);c!==null&&Qn(c,a,s),If(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);kc=s,a.target.dispatchEvent(s),kc=null}else return n=Ni(a),n!==null&&jg(n),t.blockedOn=a,!1;n.shift()}return!0}function Jg(t,n,a){Ql(t)&&a.delete(n)}function Hx(){Vf=!1,La!==null&&Ql(La)&&(La=null),Na!==null&&Ql(Na)&&(Na=null),Oa!==null&&Ql(Oa)&&(Oa=null),yo.forEach(Jg),Eo.forEach(Jg)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hx)))}var $l=null;function $g(t){$l!==t&&($l=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Gf(s||a)===null)continue;break}var f=Ni(a);f!==null&&(t.splice(n,3),n-=3,Hu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function bo(t){function n(O){return Jl(O,t)}La!==null&&Jl(La,t),Na!==null&&Jl(Na,t),Oa!==null&&Jl(Oa,t),yo.forEach(n),Eo.forEach(n);for(var a=0;a<Pa.length;a++){var s=Pa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Qg(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[Sn]||null;if(typeof f=="function")S||$g(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Sn]||null)T=S.formAction;else if(Gf(c)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),$g(a)}}}function kf(t){this._internalRoot=t}tc.prototype.render=kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();qg(a,s,t,n,null,null)},tc.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;qg(t.current,2,null,t,null,null),Pl(),n[Pn]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Qg(t)}};var t_=e.version;if(t_!=="19.1.0")throw Error(r(527,t_,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Gx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{ft=ec.inject(Gx),dt=ec}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=gm,f=_m,S=vm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Xg(t,1,!1,null,null,a,s,c,f,S,T,null),t[Pn]=n.current,bf(t),new kf(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=gm,S=_m,T=vm,O=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Xg(t,1,!0,n,a??null,s,c,f,S,T,O,J),n.context=Wg(null),a=n.current,s=Kn(),s=ne(s),c=va(s),c.callback=null,xa(a,c,s),a=s,n.current.lanes=a,zt(n,a),Ti(n),t[Pn]=n.current,bf(t),new tc(n)},Ro.version="19.1.0",Ro}var u_;function Qx(){if(u_)return qf.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=Kx(),qf.exports}var Jx=Qx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="178",$x=0,f_=1,tS=2,uv=1,eS=2,ia=3,Ya=0,Vn=1,aa=2,Wa=0,Es=1,h_=2,d_=3,p_=4,nS=5,yr=100,iS=101,aS=102,rS=103,sS=104,oS=200,lS=201,cS=202,uS=203,Dh=204,Uh=205,fS=206,hS=207,dS=208,pS=209,mS=210,gS=211,_S=212,vS=213,xS=214,Lh=0,Nh=1,Oh=2,As=3,Ph=4,zh=5,Bh=6,Ih=7,fv=0,SS=1,MS=2,qa=0,yS=1,ES=2,TS=3,bS=4,AS=5,RS=6,CS=7,hv=300,Rs=301,Cs=302,Fh=303,Hh=304,Fc=306,Gh=1e3,ra=1001,Vh=1002,cn=1003,wS=1004,nc=1005,Ri=1006,Kf=1007,Tr=1008,la=1009,dv=1010,pv=1011,Po=1012,Sd=1013,br=1014,Nn=1015,Fo=1016,Md=1017,yd=1018,zo=1020,mv=35902,gv=1021,_v=1022,bn=1023,Bo=1026,Io=1027,vv=1028,Ed=1029,xv=1030,Td=1031,bd=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,kh=35840,Xh=35841,Wh=35842,qh=35843,Yh=36196,jh=37492,Zh=37496,Kh=37808,Qh=37809,Jh=37810,$h=37811,td=37812,ed=37813,nd=37814,id=37815,ad=37816,rd=37817,sd=37818,od=37819,ld=37820,cd=37821,Oc=36492,ud=36494,fd=36495,Sv=36283,hd=36284,dd=36285,pd=36286,DS=3200,US=3201,LS=0,NS=1,Xa="",li="srgb",ws="srgb-linear",zc="linear",Ie="srgb",is=7680,m_=519,OS=512,PS=513,zS=514,Mv=515,BS=516,IS=517,FS=518,HS=519,g_=35044,__="300 es",sa=2e3,Bc=2001;class Us{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,md=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function GS(o,e){return(o%e+e)%e}function Jf(o,e,i){return(1-i)*o+i*e}function Co(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=u[h+0],y=u[h+1],A=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(v!==C||m!==x||p!==y||_!==A){let M=1-d;const g=m*x+p*y+_*A+v*C,z=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const H=Math.sqrt(N),V=Math.atan2(H,g*z);M=Math.sin(M*V)/H,d=Math.sin(d*V)/H}const w=d*z;if(m=m*M+x*w,p=p*M+y*w,_=_*M+A*w,v=v*M+C*w,M===1-d){const H=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=H,p*=H,_*=H,v*=H}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=u[h],x=u[h+1],y=u[h+2],A=u[h+3];return e[i]=d*A+_*v+m*y-p*x,e[i+1]=m*A+_*x+p*v-d*y,e[i+2]=p*A+_*y+d*x-m*v,e[i+3]=_*A-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(u/2),x=m(r/2),y=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=x*_*v+p*y*A,this._y=p*y*v-x*_*A,this._z=p*_*A+x*y*v,this._w=p*_*v-x*y*A;break;case"YXZ":this._x=x*_*v+p*y*A,this._y=p*y*v-x*_*A,this._z=p*_*A-x*y*v,this._w=p*_*v+x*y*A;break;case"ZXY":this._x=x*_*v-p*y*A,this._y=p*y*v+x*_*A,this._z=p*_*A+x*y*v,this._w=p*_*v-x*y*A;break;case"ZYX":this._x=x*_*v-p*y*A,this._y=p*y*v+x*_*A,this._z=p*_*A-x*y*v,this._w=p*_*v+x*y*A;break;case"YZX":this._x=x*_*v+p*y*A,this._y=p*y*v+x*_*A,this._z=p*_*A-x*y*v,this._w=p*_*v-x*y*A;break;case"XZY":this._x=x*_*v-p*y*A,this._y=p*y*v-x*_*A,this._z=p*_*A+x*y*v,this._w=p*_*v+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(v_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(v_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $f.copy(this).projectOnVector(e),this.sub($f)}reflect(e){return this.sub($f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new ot,v_=new Go;class se{constructor(e,i,r,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],y=r[5],A=r[8],C=l[0],M=l[3],g=l[6],z=l[1],N=l[4],w=l[7],H=l[2],V=l[5],F=l[8];return u[0]=h*C+d*z+m*H,u[3]=h*M+d*N+m*V,u[6]=h*g+d*w+m*F,u[1]=p*C+_*z+v*H,u[4]=p*M+_*N+v*V,u[7]=p*g+_*w+v*F,u[2]=x*C+y*z+A*H,u[5]=x*M+y*N+A*V,u[8]=x*g+y*w+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,x=d*m-_*u,y=p*u-h*m,A=i*v+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*p-_*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new se;function yv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ic(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function VS(){const o=Ic("canvas");return o.style.display="block",o}const x_={};function Ts(o){o in x_||(x_[o]=!0,console.warn(o))}function kS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function XS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function WS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const S_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qS(){const o={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ie&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?zc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ws]:{primaries:e,whitePoint:r,transfer:zc,toXYZ:S_,fromXYZ:M_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:Ie,toXYZ:S_,fromXYZ:M_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Te=qS();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class YS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{as===void 0&&(as=Ic("canvas")),as.width=e.width,as.height=e.height;const l=as.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=as}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ic("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(eh(l[h].image)):u.push(eh(l[h]))}else u=eh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?YS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;const nh=new ot;class On extends Us{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=ra,l=ra,u=Ri,h=Tr,d=bn,m=la,p=On.DEFAULT_ANISOTROPY,_=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ho(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case ra:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case ra:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=hv;On.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],v=m[8],x=m[1],y=m[5],A=m[9],C=m[2],M=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(y+1)/2,H=(g+1)/2,V=(_+x)/4,F=(v+C)/4,j=(A+M)/4;return N>w&&N>H?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=V/r,u=F/r):w>H?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=V/l,u=j/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=F/u,l=j/u),this.set(r,l,u,i),this}let z=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(x-_)*(x-_));return Math.abs(z)<.001&&(z=1),this.x=(M-A)/z,this.y=(v-C)/z,this.z=(x-_)/z,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KS extends Us{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new On(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ad(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ca extends KS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ev extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=cn,this.minFilter=cn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=cn,this.minFilter=cn,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ic.copy(r.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),ac.subVectors(this.max,wo),rs.subVectors(e.a,wo),ss.subVectors(e.b,wo),os.subVectors(e.c,wo),Ba.subVectors(ss,rs),Ia.subVectors(os,ss),dr.subVectors(rs,os);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-dr.z,dr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,dr.z,0,-dr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-dr.y,dr.x,0];return!ih(i,rs,ss,os,ac)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,rs,ss,os,ac))?!1:(rc.crossVectors(Ba,Ia),i=[rc.x,rc.y,rc.z],ih(i,rs,ss,os,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],pi=new ot,ic=new Vo,rs=new ot,ss=new ot,os=new ot,Ba=new ot,Ia=new ot,dr=new ot,wo=new ot,ac=new ot,rc=new ot,pr=new ot;function ih(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){pr.fromArray(o,u);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=e.dot(pr),p=i.dot(pr),_=r.dot(pr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const JS=new Vo,Do=new ot,ah=new ot;class Hc{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):JS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(ah)),this.expandByPoint(Do.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new ot,rh=new ot,sc=new ot,Fa=new ot,sh=new ot,oc=new ot,oh=new ot;class Tv{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){rh.copy(e).add(i).multiplyScalar(.5),sc.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(rh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(sc),d=Fa.dot(this.direction),m=-Fa.dot(sc),p=Fa.lengthSq(),_=Math.abs(1-h*h);let v,x,y,A;if(_>0)if(v=h*m-d,x=h*d-m,A=u*_,v>=0)if(x>=-A)if(x<=A){const C=1/_;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(rh).addScaledVector(sc,x),y}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(u=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,u){sh.subVectors(i,e),oc.subVectors(r,e),oh.crossVectors(sh,oc);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,e);const m=d*this.direction.dot(oc.crossVectors(Fa,oc));if(m<0)return null;const p=d*this.direction.dot(sh.cross(Fa));if(p<0||m+p>h)return null;const _=-d*Fa.dot(oh);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,h,d,m,p,_,v,x,y,A,C,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,_,v,x,y,A,C,M)}set(e,i,r,l,u,h,d,m,p,_,v,x,y,A,C,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=A,g[11]=C,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),u=1/ls.setFromMatrixColumn(e,1).length(),h=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*_,y=h*v,A=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*_,y=m*v,A=p*_,C=p*v;i[0]=x+C*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=y*d-A,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*_,y=m*v,A=p*_,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*_,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*_,y=h*v,A=d*_,C=d*v;i[0]=m*_,i[4]=A*p-y,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=C-x*v,i[8]=A*v+y,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+A,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+C,i[5]=h*_,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*_,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($S,e,tM)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ha.crossVectors(r,Jn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ha.crossVectors(r,Jn)),Ha.normalize(),lc.crossVectors(Jn,Ha),l[0]=Ha.x,l[4]=lc.x,l[8]=Jn.x,l[1]=Ha.y,l[5]=lc.y,l[9]=Jn.y,l[2]=Ha.z,l[6]=lc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],y=r[13],A=r[2],C=r[6],M=r[10],g=r[14],z=r[3],N=r[7],w=r[11],H=r[15],V=l[0],F=l[4],j=l[8],D=l[12],R=l[1],B=l[5],at=l[9],nt=l[13],pt=l[2],ut=l[6],P=l[10],Z=l[14],W=l[3],yt=l[7],U=l[11],$=l[15];return u[0]=h*V+d*R+m*pt+p*W,u[4]=h*F+d*B+m*ut+p*yt,u[8]=h*j+d*at+m*P+p*U,u[12]=h*D+d*nt+m*Z+p*$,u[1]=_*V+v*R+x*pt+y*W,u[5]=_*F+v*B+x*ut+y*yt,u[9]=_*j+v*at+x*P+y*U,u[13]=_*D+v*nt+x*Z+y*$,u[2]=A*V+C*R+M*pt+g*W,u[6]=A*F+C*B+M*ut+g*yt,u[10]=A*j+C*at+M*P+g*U,u[14]=A*D+C*nt+M*Z+g*$,u[3]=z*V+N*R+w*pt+H*W,u[7]=z*F+N*B+w*ut+H*yt,u[11]=z*j+N*at+w*P+H*U,u[15]=z*D+N*nt+w*Z+H*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],x=e[10],y=e[14],A=e[3],C=e[7],M=e[11],g=e[15];return A*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*_-u*m*_)+M*(+i*p*v-i*d*y-u*h*v+r*h*y+u*d*_-r*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*h*v-r*h*x+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],x=e[10],y=e[11],A=e[12],C=e[13],M=e[14],g=e[15],z=v*M*p-C*x*p+C*m*y-d*M*y-v*m*g+d*x*g,N=A*x*p-_*M*p-A*m*y+h*M*y+_*m*g-h*x*g,w=_*C*p-A*v*p+A*d*y-h*C*y-_*d*g+h*v*g,H=A*v*m-_*C*m-A*d*x+h*C*x+_*d*M-h*v*M,V=i*z+r*N+l*w+u*H;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return e[0]=z*F,e[1]=(C*x*u-v*M*u-C*l*y+r*M*y+v*l*g-r*x*g)*F,e[2]=(d*M*u-C*m*u+C*l*p-r*M*p-d*l*g+r*m*g)*F,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*y-r*m*y)*F,e[4]=N*F,e[5]=(_*M*u-A*x*u+A*l*y-i*M*y-_*l*g+i*x*g)*F,e[6]=(A*m*u-h*M*u-A*l*p+i*M*p+h*l*g-i*m*g)*F,e[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*y+i*m*y)*F,e[8]=w*F,e[9]=(A*v*u-_*C*u-A*r*y+i*C*y+_*r*g-i*v*g)*F,e[10]=(h*C*u-A*d*u+A*r*p-i*C*p-h*r*g+i*d*g)*F,e[11]=(_*d*u-h*v*u-_*r*p+i*v*p+h*r*y-i*d*y)*F,e[12]=H*F,e[13]=(_*C*l-A*v*l+A*r*x-i*C*x-_*r*M+i*v*M)*F,e[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*M-i*d*M)*F,e[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*x+i*d*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,x=u*p,y=u*_,A=u*v,C=h*_,M=h*v,g=d*v,z=m*p,N=m*_,w=m*v,H=r.x,V=r.y,F=r.z;return l[0]=(1-(C+g))*H,l[1]=(y+w)*H,l[2]=(A-N)*H,l[3]=0,l[4]=(y-w)*V,l[5]=(1-(x+g))*V,l[6]=(M+z)*V,l[7]=0,l[8]=(A+N)*F,l[9]=(M-z)*F,l[10]=(1-(x+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ls.set(l[0],l[1],l[2]).length();const h=ls.set(l[4],l[5],l[6]).length(),d=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,_=1/h,v=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=_,mi.elements[5]*=_,mi.elements[6]*=_,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,i.setFromRotationMatrix(mi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=sa){const m=this.elements,p=2*u/(i-e),_=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let y,A;if(d===sa)y=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Bc)y=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=sa){const m=this.elements,p=1/(i-e),_=1/(r-l),v=1/(h-u),x=(i+e)*p,y=(r+l)*_;let A,C;if(d===sa)A=(h+u)*v,C=-2*v;else if(d===Bc)A=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new ot,mi=new $e,$S=new ot(0,0,0),tM=new ot(1,1,1),Ha=new ot,lc=new ot,Jn=new ot,y_=new $e,E_=new Go;class ua{constructor(e=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const T_=new ot,cs=new Go,$i=new $e,cc=new ot,Uo=new ot,nM=new ot,iM=new Go,b_=new ot(1,0,0),A_=new ot(0,1,0),R_=new ot(0,0,1),C_={type:"added"},aM={type:"removed"},us={type:"childadded",child:null},lh={type:"childremoved",child:null};class kn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ot,i=new ua,r=new Go,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new se}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,i){return cs.setFromAxisAngle(e,i),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(A_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,i){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(A_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?cc.copy(e):cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Uo,cc,this.up):$i.lookAt(cc,Uo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),cs.setFromRotationMatrix($i),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(aM),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new ot(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new ot,ta=new ot,ch=new ot,ea=new ot,fs=new ot,hs=new ot,w_=new ot,uh=new ot,fh=new ot,hh=new ot,dh=new Je,ph=new Je,mh=new Je;class vi{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){gi.subVectors(l,i),ta.subVectors(r,i),ch.subVectors(e,i);const h=gi.dot(gi),d=gi.dot(ta),m=gi.dot(ch),p=ta.dot(ta),_=ta.dot(ch),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-d*_)*x,A=(h*_-d*m)*x;return u.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(d,ea.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(dh,u.x),h.addScaledVector(ph,u.y),h.addScaledVector(mh,u.z),h}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),ta.subVectors(e,i),gi.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),gi.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;fs.subVectors(l,r),hs.subVectors(u,r),uh.subVectors(e,r);const m=fs.dot(uh),p=hs.dot(uh);if(m<=0&&p<=0)return i.copy(r);fh.subVectors(e,l);const _=fs.dot(fh),v=hs.dot(fh);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(fs,h);hh.subVectors(e,u);const y=fs.dot(hh),A=hs.dot(hh);if(A>=0&&y<=A)return i.copy(u);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(hs,d);const M=_*A-y*v;if(M<=0&&v-_>=0&&y-A>=0)return w_.subVectors(u,l),d=(v-_)/(v-_+(y-A)),i.copy(l).addScaledVector(w_,d);const g=1/(M+C+x);return h=C*g,d=x*g,i.copy(r).addScaledVector(fs,h).addScaledVector(hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},uc={h:0,s:0,l:0};function gh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=GS(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=gh(h,u,e+1/3),this.g=gh(h,u,e),this.b=gh(h,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=Av[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Te.workingToColorSpace(Dn.copy(this),e),Math.round(xe(Dn.r*255,0,255))*65536+Math.round(xe(Dn.g*255,0,255))*256+Math.round(xe(Dn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=li){Te.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+e,Ga.s+i,Ga.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ga),e.getHSL(uc);const r=Jf(Ga.h,uc.h,i),l=Jf(Ga.s,uc.s,i),u=Jf(Ga.l,uc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ce;Ce.NAMES=Av;let rM=0;class ko extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Es,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Uh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Dh&&(r.blendSrc=this.blendSrc),this.blendDst!==Uh&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rv extends ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new ot,fc=new we;let sM=0;class ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=g_,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}}class Cv extends ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class wv extends ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class wi extends ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let oM=0;const oi=new $e,_h=new kn,ds=new ot,$n=new Vo,Lo=new Vo,vn=new ot;class Ui extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yv(e)?wv:Cv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors($n.min,Lo.min),$n.expandByPoint(vn),vn.addVectors($n.max,Lo.max),$n.expandByPoint(vn)):($n.expandByPoint(Lo.min),$n.expandByPoint(Lo.max))}$n.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(ds.fromBufferAttribute(e,p),vn.add(ds)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new ot,m[j]=new ot;const p=new ot,_=new ot,v=new ot,x=new we,y=new we,A=new we,C=new ot,M=new ot;function g(j,D,R){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,D),A.fromBufferAttribute(u,R),_.sub(p),v.sub(p),y.sub(x),A.sub(x);const B=1/(y.x*A.y-A.x*y.y);isFinite(B)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(B),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-A.x).multiplyScalar(B),d[j].add(C),d[D].add(C),d[R].add(C),m[j].add(M),m[D].add(M),m[R].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let j=0,D=z.length;j<D;++j){const R=z[j],B=R.start,at=R.count;for(let nt=B,pt=B+at;nt<pt;nt+=3)g(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const N=new ot,w=new ot,H=new ot,V=new ot;function F(j){H.fromBufferAttribute(l,j),V.copy(H);const D=d[j];N.copy(D),N.sub(H.multiplyScalar(H.dot(D))).normalize(),w.crossVectors(V,D);const B=w.dot(m[j])<0?-1:1;h.setXYZW(j,N.x,N.y,N.z,B)}for(let j=0,D=z.length;j<D;++j){const R=z[j],B=R.start,at=R.count;for(let nt=B,pt=B+at;nt<pt;nt+=3)F(e.getX(nt+0)),F(e.getX(nt+1)),F(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new ot,u=new ot,h=new ot,d=new ot,m=new ot,p=new ot,_=new ot,v=new ot;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*_;for(let g=0;g<_;g++)x[A++]=p[y++]}return new ui(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],v=u[p];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new $e,mr=new Tv,hc=new Hc,U_=new ot,dc=new ot,pc=new ot,mc=new ot,vh=new ot,gc=new ot,L_=new ot,_c=new ot;class Ci extends kn{constructor(e=new Ui,i=new Rv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(vh.fromBufferAttribute(v,e),h?gc.addScaledVector(vh,_):gc.addScaledVector(vh.sub(i),_))}i.add(gc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(u),mr.copy(e.ray).recast(e.near),!(hc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(hc,U_)===null||mr.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(D_.copy(u).invert(),mr.copy(e.ray).applyMatrix4(D_),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],g=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=z,H=N;w<H;w+=3){const V=d.getX(w),F=d.getX(w+1),j=d.getX(w+2);l=vc(this,g,e,r,p,_,v,V,F,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,g=C;M<g;M+=3){const z=d.getX(M),N=d.getX(M+1),w=d.getX(M+2);l=vc(this,h,e,r,p,_,v,z,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],g=h[M.materialIndex],z=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=z,H=N;w<H;w+=3){const V=w,F=w+1,j=w+2;l=vc(this,g,e,r,p,_,v,V,F,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,g=C;M<g;M+=3){const z=M,N=M+1,w=M+2;l=vc(this,h,e,r,p,_,v,z,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function lM(o,e,i,r,l,u,h,d){let m;if(e.side===Vn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ya,d),m===null)return null;_c.copy(d),_c.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:o}}function vc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,dc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const _=lM(o,e,i,r,dc,pc,mc,L_);if(_){const v=new ot;vi.getBarycoord(L_,dc,pc,mc,v),l&&(_.uv=vi.getInterpolatedAttribute(l,d,m,p,v,new we)),u&&(_.uv1=vi.getInterpolatedAttribute(u,d,m,p,v,new we)),h&&(_.normal=vi.getInterpolatedAttribute(h,d,m,p,v,new ot),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ot,materialIndex:0};vi.getNormal(dc,pc,mc,x.normal),_.face=x,_.barycoord=v}return _}class Xo extends Ui{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(_,3)),this.setAttribute("uv",new wi(v,2));function A(C,M,g,z,N,w,H,V,F,j,D){const R=w/F,B=H/j,at=w/2,nt=H/2,pt=V/2,ut=F+1,P=j+1;let Z=0,W=0;const yt=new ot;for(let U=0;U<P;U++){const $=U*B-nt;for(let vt=0;vt<ut;vt++){const St=vt*R-at;yt[C]=St*z,yt[M]=$*N,yt[g]=pt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[g]=V>0?1:-1,_.push(yt.x,yt.y,yt.z),v.push(vt/F),v.push(1-U/j),Z+=1}}for(let U=0;U<j;U++)for(let $=0;$<F;$++){const vt=x+$+ut*U,St=x+$+ut*(U+1),Q=x+($+1)+ut*(U+1),mt=x+($+1)+ut*U;m.push(vt,St,mt),m.push(St,Q,mt),W+=6}d.addGroup(y,W,D),y+=W,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const r=Ds(o[i]);for(const l in r)e[l]=r[l]}return e}function cM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Dv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const uM={clone:Ds,merge:Ln};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=cM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Uv extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=sa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new ot,N_=new we,O_=new we;class ci extends Uv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=md*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return md*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,i){return this.getViewBounds(e,N_,O_),i.subVectors(O_,N_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ps=-90,ms=1;class dM extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(ps,ms,e,i);l.layers=this.layers,this.add(l);const u=new ci(ps,ms,e,i);u.layers=this.layers,this.add(u);const h=new ci(ps,ms,e,i);h.layers=this.layers,this.add(h);const d=new ci(ps,ms,e,i);d.layers=this.layers,this.add(d);const m=new ci(ps,ms,e,i);m.layers=this.layers,this.add(m);const p=new ci(ps,ms,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Lv extends On{constructor(e=[],i=Rs,r,l,u,h,d,m,p,_){super(e,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pM extends ca{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Lv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xo(5,5,5),u=new Di({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Wa});u.uniforms.tEquirect.value=i;const h=new Ci(l,u),d=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Ri),new dM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class xc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mM={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),g=this._getHandJoint(p,C);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class P_ extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Sh extends On{constructor(e=null,i=1,r=1,l,u,h,d,m,p=cn,_=cn,v,x){super(null,h,d,m,p,_,l,u,v,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mh=new ot,gM=new ot,_M=new se;class Sr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Mh.subVectors(r,i).cross(gM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Mh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||_M.getNormalMatrix(e),l=this.coplanarPoint(Mh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Hc,vM=new we(.5,.5),Sc=new ot;class Nv{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,h=new Sr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=sa){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],x=l[7],y=l[8],A=l[9],C=l[10],M=l[11],g=l[12],z=l[13],N=l[14],w=l[15];if(r[0].setComponents(m-u,x-p,M-y,w-g).normalize(),r[1].setComponents(m+u,x+p,M+y,w+g).normalize(),r[2].setComponents(m+h,x+_,M+A,w+z).normalize(),r[3].setComponents(m-h,x-_,M-A,w-z).normalize(),r[4].setComponents(m-d,x-v,M-C,w-N).normalize(),i===sa)r[5].setComponents(m+d,x+v,M+C,w+N).normalize();else if(i===Bc)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=vM.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Sc.x=l.normal.x>0?e.max.x:e.min.x,Sc.y=l.normal.y>0?e.max.y:e.min.y,Sc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xM extends ko{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z_=new $e,gd=new Tv,Mc=new Hc,yc=new ot;class SM extends kn{constructor(e=new Ui,i=new xM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=u,e.ray.intersectsSphere(Mc)===!1)return;z_.copy(l).invert(),gd.copy(e.ray).applyMatrix4(z_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let A=x,C=y;A<C;A++){const M=p.getX(A);yc.fromBufferAttribute(v,M),B_(yc,M,m,l,e,i,this)}}else{const x=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let A=x,C=y;A<C;A++)yc.fromBufferAttribute(v,A),B_(yc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function B_(o,e,i,r,l,u,h){const d=gd.distanceSqToPoint(o);if(d<i){const m=new ot;gd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Ov extends On{constructor(e,i,r=br,l,u,h,d=cn,m=cn,p,_=Bo,v=1){if(_!==Bo&&_!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Wo extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=e/d,x=i/m,y=[],A=[],C=[],M=[];for(let g=0;g<_;g++){const z=g*x-h;for(let N=0;N<p;N++){const w=N*v-u;A.push(w,-z,0),C.push(0,0,1),M.push(N/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let z=0;z<d;z++){const N=z+p*g,w=z+p*(g+1),H=z+1+p*(g+1),V=z+1+p*g;y.push(N,w,V),y.push(w,H,V)}this.setIndex(y),this.setAttribute("position",new wi(A,3)),this.setAttribute("normal",new wi(C,3)),this.setAttribute("uv",new wi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rd extends Ui{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const _=[],v=new ot,x=new ot,y=[],A=[],C=[],M=[];for(let g=0;g<=r;g++){const z=[],N=g/r;let w=0;g===0&&h===0?w=.5/i:g===r&&m===Math.PI&&(w=-.5/i);for(let H=0;H<=i;H++){const V=H/i;v.x=-e*Math.cos(l+V*u)*Math.sin(h+N*d),v.y=e*Math.cos(h+N*d),v.z=e*Math.sin(l+V*u)*Math.sin(h+N*d),A.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),M.push(V+w,1-N),z.push(p++)}_.push(z)}for(let g=0;g<r;g++)for(let z=0;z<i;z++){const N=_[g][z+1],w=_[g][z],H=_[g+1][z],V=_[g+1][z+1];(g!==0||h>0)&&y.push(N,w,V),(g!==r-1||m<Math.PI)&&y.push(w,H,V)}this.setIndex(y),this.setAttribute("position",new wi(A,3)),this.setAttribute("normal",new wi(C,3)),this.setAttribute("uv",new wi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class MM extends ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yM extends ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pv extends Uv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class EM extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class TM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function I_(o,e,i,r){const l=bM(r);switch(i){case gv:return o*e;case vv:return o*e/l.components*l.byteLength;case Ed:return o*e/l.components*l.byteLength;case xv:return o*e*2/l.components*l.byteLength;case Td:return o*e*2/l.components*l.byteLength;case _v:return o*e*3/l.components*l.byteLength;case bn:return o*e*4/l.components*l.byteLength;case bd:return o*e*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xh:case qh:return Math.max(o,16)*Math.max(e,8)/4;case kh:case Wh:return Math.max(o,8)*Math.max(e,8)/2;case Yh:case jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Oc:case ud:case fd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Sv:case hd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case dd:case pd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bM(o){switch(o){case la:case dv:return{byteLength:1,components:1};case Po:case pv:case Fo:return{byteLength:2,components:1};case Md:case yd:return{byteLength:2,components:4};case br:case Sd:case Nn:return{byteLength:4,components:1};case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function AM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<v.length;y++){const A=v[x],C=v[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,A=v.length;y<A;y++){const C=v[y];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,py=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,my=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,My=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,by=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ay=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ME=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:wM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:LM,aomap_fragment:NM,aomap_pars_fragment:OM,batching_pars_vertex:PM,batching_vertex:zM,begin_vertex:BM,beginnormal_vertex:IM,bsdfs:FM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:WM,color_fragment:qM,color_pars_fragment:YM,color_pars_vertex:jM,color_vertex:ZM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:ty,emissivemap_fragment:ey,emissivemap_pars_fragment:ny,colorspace_fragment:iy,colorspace_pars_fragment:ay,envmap_fragment:ry,envmap_common_pars_fragment:sy,envmap_pars_fragment:oy,envmap_pars_vertex:ly,envmap_physical_pars_fragment:xy,envmap_vertex:cy,fog_vertex:uy,fog_pars_vertex:fy,fog_fragment:hy,fog_pars_fragment:dy,gradientmap_pars_fragment:py,lightmap_pars_fragment:my,lights_lambert_fragment:gy,lights_lambert_pars_fragment:_y,lights_pars_begin:vy,lights_toon_fragment:Sy,lights_toon_pars_fragment:My,lights_phong_fragment:yy,lights_phong_pars_fragment:Ey,lights_physical_fragment:Ty,lights_physical_pars_fragment:by,lights_fragment_begin:Ay,lights_fragment_maps:Ry,lights_fragment_end:Cy,logdepthbuf_fragment:wy,logdepthbuf_pars_fragment:Dy,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Ly,map_fragment:Ny,map_pars_fragment:Oy,map_particle_fragment:Py,map_particle_pars_fragment:zy,metalnessmap_fragment:By,metalnessmap_pars_fragment:Iy,morphinstance_vertex:Fy,morphcolor_vertex:Hy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Vy,morphtarget_vertex:ky,normal_fragment_begin:Xy,normal_fragment_maps:Wy,normal_pars_fragment:qy,normal_pars_vertex:Yy,normal_vertex:jy,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:$y,opaque_fragment:tE,packing:eE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:aE,dithering_pars_fragment:rE,roughnessmap_fragment:sE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:cE,shadowmap_vertex:uE,shadowmask_pars_fragment:fE,skinbase_vertex:hE,skinning_pars_vertex:dE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:_E,tonemapping_fragment:vE,tonemapping_pars_fragment:xE,transmission_fragment:SE,transmission_pars_fragment:ME,uv_pars_fragment:yE,uv_pars_vertex:EE,uv_vertex:TE,worldpos_vertex:bE,background_vert:AE,background_frag:RE,backgroundCube_vert:CE,backgroundCube_frag:wE,cube_vert:DE,cube_frag:UE,depth_vert:LE,depth_frag:NE,distanceRGBA_vert:OE,distanceRGBA_frag:PE,equirect_vert:zE,equirect_frag:BE,linedashed_vert:IE,linedashed_frag:FE,meshbasic_vert:HE,meshbasic_frag:GE,meshlambert_vert:VE,meshlambert_frag:kE,meshmatcap_vert:XE,meshmatcap_frag:WE,meshnormal_vert:qE,meshnormal_frag:YE,meshphong_vert:jE,meshphong_frag:ZE,meshphysical_vert:KE,meshphysical_frag:QE,meshtoon_vert:JE,meshtoon_frag:$E,points_vert:tT,points_frag:eT,shadow_vert:nT,shadow_frag:iT,sprite_vert:aT,sprite_frag:rT},Lt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ai={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ai.physical={uniforms:Ln([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ec={r:0,b:0,g:0},_r=new ua,sT=new $e;function oT(o,e,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,_,v=null,x=0,y=null;function A(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:e).get(w)),w}function C(N){let w=!1;const H=A(N);H===null?g(d,m):H&&H.isColor&&(g(H,1),w=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,w){const H=A(w);H&&(H.isCubeTexture||H.mapping===Fc)?(_===void 0&&(_=new Ci(new Xo(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Ds(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(V,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_r.copy(w.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(_r)),_.material.toneMapped=Te.getTransfer(H.colorSpace)!==Ie,(v!==H||x!==H.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,v=H,x=H.version,y=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Ci(new Wo(2,2),new Di({name:"BackgroundMaterial",uniforms:Ds(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Te.getTransfer(H.colorSpace)!==Ie,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function g(N,w){N.getRGB(Ec,Dv(o)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,w,h)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,g(d,m)},render:C,addToRenderList:M,dispose:z}}function lT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(R,B,at,nt,pt){let ut=!1;const P=v(nt,at,B);u!==P&&(u=P,p(u.object)),ut=y(R,nt,at,pt),ut&&A(R,nt,at,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,w(R,B,at,nt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function v(R,B,at){const nt=at.wireframe===!0;let pt=r[R.id];pt===void 0&&(pt={},r[R.id]=pt);let ut=pt[B.id];ut===void 0&&(ut={},pt[B.id]=ut);let P=ut[nt];return P===void 0&&(P=x(m()),ut[nt]=P),P}function x(R){const B=[],at=[],nt=[];for(let pt=0;pt<i;pt++)B[pt]=0,at[pt]=0,nt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:at,attributeDivisors:nt,object:R,attributes:{},index:null}}function y(R,B,at,nt){const pt=u.attributes,ut=B.attributes;let P=0;const Z=at.getAttributes();for(const W in Z)if(Z[W].location>=0){const U=pt[W];let $=ut[W];if($===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return u.attributesNum!==P||u.index!==nt}function A(R,B,at,nt){const pt={},ut=B.attributes;let P=0;const Z=at.getAttributes();for(const W in Z)if(Z[W].location>=0){let U=ut[W];U===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),pt[W]=$,P++}u.attributes=pt,u.attributesNum=P,u.index=nt}function C(){const R=u.newAttributes;for(let B=0,at=R.length;B<at;B++)R[B]=0}function M(R){g(R,0)}function g(R,B){const at=u.newAttributes,nt=u.enabledAttributes,pt=u.attributeDivisors;at[R]=1,nt[R]===0&&(o.enableVertexAttribArray(R),nt[R]=1),pt[R]!==B&&(o.vertexAttribDivisor(R,B),pt[R]=B)}function z(){const R=u.newAttributes,B=u.enabledAttributes;for(let at=0,nt=B.length;at<nt;at++)B[at]!==R[at]&&(o.disableVertexAttribArray(at),B[at]=0)}function N(R,B,at,nt,pt,ut,P){P===!0?o.vertexAttribIPointer(R,B,at,pt,ut):o.vertexAttribPointer(R,B,at,nt,pt,ut)}function w(R,B,at,nt){C();const pt=nt.attributes,ut=at.getAttributes(),P=B.defaultAttributeValues;for(const Z in ut){const W=ut[Z];if(W.location>=0){let yt=pt[Z];if(yt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const U=yt.normalized,$=yt.itemSize,vt=e.get(yt);if(vt===void 0)continue;const St=vt.buffer,Q=vt.type,mt=vt.bytesPerElement,Mt=Q===o.INT||Q===o.UNSIGNED_INT||yt.gpuType===Sd;if(yt.isInterleavedBufferAttribute){const At=yt.data,Ct=At.stride,oe=yt.offset;if(At.isInstancedInterleavedBuffer){for(let Qt=0;Qt<W.locationSize;Qt++)g(W.location+Qt,At.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Qt=0;Qt<W.locationSize;Qt++)M(W.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Qt=0;Qt<W.locationSize;Qt++)N(W.location+Qt,$/W.locationSize,Q,U,Ct*mt,(oe+$/W.locationSize*Qt)*mt,Mt)}else{if(yt.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)g(W.location+At,yt.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let At=0;At<W.locationSize;At++)M(W.location+At);o.bindBuffer(o.ARRAY_BUFFER,St);for(let At=0;At<W.locationSize;At++)N(W.location+At,$/W.locationSize,Q,U,$*mt,$/W.locationSize*At*mt,Mt)}}else if(P!==void 0){const U=P[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(W.location,U);break;case 3:o.vertexAttrib3fv(W.location,U);break;case 4:o.vertexAttrib4fv(W.location,U);break;default:o.vertexAttrib1fv(W.location,U)}}}}z()}function H(){j();for(const R in r){const B=r[R];for(const at in B){const nt=B[at];for(const pt in nt)_(nt[pt].object),delete nt[pt];delete B[at]}delete r[R]}}function V(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const at in B){const nt=B[at];for(const pt in nt)_(nt[pt].object),delete nt[pt];delete B[at]}delete r[R.id]}function F(R){for(const B in r){const at=r[B];if(at[R.id]===void 0)continue;const nt=at[R.id];for(const pt in nt)_(nt[pt].object),delete nt[pt];delete at[R.id]}}function j(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:z}}function cT(o,e,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let y=0;for(let A=0;A<v;A++)y+=_[A];i.update(y,r,1)}function m(p,_,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],_[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=_[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function uT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==bn&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const j=F===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==la&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Nn&&!j)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:H,maxSamples:V}}function fT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Sr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,y){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,g=o.get(v);if(!l||A===null||A.length===0||u&&!M)u?_(null):p();else{const z=u?0:r,N=z*4;let w=g.clippingState||null;m.value=w,w=_(A,x,N,y);for(let H=0;H!==N;++H)w[H]=i[H];g.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,y,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const g=y+C*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<g)&&(M=new Float32Array(g));for(let N=0,w=y;N!==C;++N,w+=4)h.copy(v[N]).applyMatrix4(z,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function hT(o){let e=new WeakMap;function i(h,d){return d===Fh?h.mapping=Rs:d===Hh&&(h.mapping=Cs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fh||d===Hh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new pM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ys=4,F_=[.125,.215,.35,.446,.526,.582],Er=20,yh=new Pv,H_=new Ce;let Eh=null,Th=0,bh=0,Ah=!1;const Mr=(1+Math.sqrt(5))/2,gs=1/Mr,G_=[new ot(-Mr,gs,0),new ot(Mr,gs,0),new ot(-gs,0,Mr),new ot(gs,0,Mr),new ot(0,Mr,-gs),new ot(0,Mr,gs),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],dT=new ot;class V_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=dT}=u;Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Th,bh),this._renderer.xr.enabled=Ah,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Fo,format:bn,colorSpace:ws,depthBuffer:!1},l=k_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pT(u)),this._blurMaterial=mT(u,e,i)}return l}_compileMaterial(e){const i=new Ci(this._lodPlanes[0],e);this._renderer.compile(i,yh)}_sceneToCubeUV(e,i,r,l,u){const m=new ci(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(H_),v.toneMapping=qa,v.autoClear=!1;const A=new Rv({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),C=new Ci(new Xo,A);let M=!1;const g=e.background;g?g.isColor&&(A.color.copy(g),e.background=null,M=!0):(A.color.copy(H_),M=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[z],u.y,u.z)):N===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[z]));const w=this._cubeSize;Tc(l,N*w,z>2?w:0,w,w),v.setRenderTarget(l),M&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=g}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Rs||e.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ci(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,yh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=G_[(l-u-1)%G_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ci(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Er-1),C=u/A,M=isFinite(u)?1+Math.floor(_*C):Er;M>Er&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Er}`);const g=[];let z=0;for(let F=0;F<Er;++F){const j=F/C,D=Math.exp(-j*j/2);g.push(D),F===0?z+=D:F<M&&(z+=2*D)}for(let F=0;F<g.length;F++)g[F]=g[F]/z;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const w=this._sizeLods[l],H=3*w*(l>N-ys?l-N+ys:0),V=4*(this._cubeSize-w);Tc(i,H,V,3*w,2*w),m.setRenderTarget(i),m.render(v,yh)}}function pT(o){const e=[],i=[],r=[];let l=o;const u=o-ys+1+F_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ys?m=F_[h-o+ys-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,A=6,C=3,M=2,g=1,z=new Float32Array(C*A*y),N=new Float32Array(M*A*y),w=new Float32Array(g*A*y);for(let V=0;V<y;V++){const F=V%3*2/3-1,j=V>2?0:-1,D=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];z.set(D,C*A*V),N.set(x,M*A*V);const R=[V,V,V,V,V,V];w.set(R,g*A*V)}const H=new Ui;H.setAttribute("position",new ui(z,C)),H.setAttribute("uv",new ui(N,M)),H.setAttribute("faceIndex",new ui(w,g)),e.push(H),l>ys&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function k_(o,e,i){const r=new ca(o,e,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function mT(o,e,i){const r=new Float32Array(Er),l=new ot(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function X_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function W_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Fh||m===Hh,_=m===Rs||m===Cs;if(p||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function _T(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ts("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function vT(o,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,A=v.attributes.position;let C=0;if(y!==null){const z=y.array;C=y.version;for(let N=0,w=z.length;N<w;N+=3){const H=z[N+0],V=z[N+1],F=z[N+2];x.push(H,V,V,F,F,H)}}else if(A!==void 0){const z=A.array;C=A.version;for(let N=0,w=z.length/3-1;N<w;N+=3){const H=N+0,V=N+1,F=N+2;x.push(H,V,V,F,F,H)}}else return;const M=new(yv(x)?wv:Cv)(x,1);M.version=C;const g=u.get(v);g&&e.remove(g),u.set(v,M)}function _(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function xT(o,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,u,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,x*h,A),i.update(y,r,A))}function _(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,A);let M=0;for(let g=0;g<A;g++)M+=y[g];i.update(M,r,1)}function v(x,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)p(x[g]/h,y[g],C[g]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,C,0,A);let g=0;for(let z=0;z<A;z++)g+=y[z]*C[z];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function ST(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function MT(o,e,i){const r=new WeakMap,l=new Je;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;A===!0&&(w=1),C===!0&&(w=2),M===!0&&(w=3);let H=d.attributes.position.count*w,V=1;H>e.maxTextureSize&&(V=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*V*4*v),j=new Ev(F,H,V,v);j.type=Nn,j.needsUpdate=!0;const D=w*4;for(let B=0;B<v;B++){const at=g[B],nt=z[B],pt=N[B],ut=H*V*4*B;for(let P=0;P<at.count;P++){const Z=P*D;A===!0&&(l.fromBufferAttribute(at,P),F[ut+Z+0]=l.x,F[ut+Z+1]=l.y,F[ut+Z+2]=l.z,F[ut+Z+3]=0),C===!0&&(l.fromBufferAttribute(nt,P),F[ut+Z+4]=l.x,F[ut+Z+5]=l.y,F[ut+Z+6]=l.z,F[ut+Z+7]=0),M===!0&&(l.fromBufferAttribute(pt,P),F[ut+Z+8]=l.x,F[ut+Z+9]=l.y,F[ut+Z+10]=l.z,F[ut+Z+11]=pt.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new we(H,V)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function yT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Bv=new On,q_=new Ov(1,1),Iv=new Ev,Fv=new QS,Hv=new Lv,Y_=[],j_=[],Z_=new Float32Array(16),K_=new Float32Array(9),Q_=new Float32Array(4);function Ls(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Y_[l];if(u===void 0&&(u=new Float32Array(l),Y_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Gc(o,e){let i=j_[e];i===void 0&&(i=new Int32Array(e),j_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function ET(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function RT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;Q_.set(r),o.uniformMatrix2fv(this.addr,!1,Q_),fn(i,r)}}function CT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;K_.set(r),o.uniformMatrix3fv(this.addr,!1,K_),fn(i,r)}}function wT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;Z_.set(r),o.uniformMatrix4fv(this.addr,!1,Z_),fn(i,r)}}function DT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function OT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function IT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(q_.compareFunction=Mv,u=q_):u=Bv,i.setTexture2D(e||u,l)}function FT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Fv,l)}function HT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Hv,l)}function GT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Iv,l)}function VT(o){switch(o){case 5126:return ET;case 35664:return TT;case 35665:return bT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return LT;case 35669:case 35673:return NT;case 5125:return OT;case 36294:return PT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function kT(o,e){o.uniform1fv(this.addr,e)}function XT(o,e){const i=Ls(e,this.size,2);o.uniform2fv(this.addr,i)}function WT(o,e){const i=Ls(e,this.size,3);o.uniform3fv(this.addr,i)}function qT(o,e){const i=Ls(e,this.size,4);o.uniform4fv(this.addr,i)}function YT(o,e){const i=Ls(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function jT(o,e){const i=Ls(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ZT(o,e){const i=Ls(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function KT(o,e){o.uniform1iv(this.addr,e)}function QT(o,e){o.uniform2iv(this.addr,e)}function JT(o,e){o.uniform3iv(this.addr,e)}function $T(o,e){o.uniform4iv(this.addr,e)}function tb(o,e){o.uniform1uiv(this.addr,e)}function eb(o,e){o.uniform2uiv(this.addr,e)}function nb(o,e){o.uniform3uiv(this.addr,e)}function ib(o,e){o.uniform4uiv(this.addr,e)}function ab(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Bv,u[h])}function rb(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Fv,u[h])}function sb(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Hv,u[h])}function ob(o,e,i){const r=this.cache,l=e.length,u=Gc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Iv,u[h])}function lb(o){switch(o){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return qT;case 35674:return YT;case 35675:return jT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return $T;case 5125:return tb;case 36294:return eb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ob}}class cb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=VT(i.type)}}class ub{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lb(i.type)}}class fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function J_(o,e){o.seq.push(e),o.map[e.id]=e}function hb(o,e,i){const r=o.name,l=r.length;for(Rh.lastIndex=0;;){const u=Rh.exec(r),h=Rh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){J_(i,p===void 0?new cb(d,o,e):new ub(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new fb(d),J_(i,v)),i=v}}}class Pc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);hb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function $_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const db=37297;let pb=0;function mb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const tv=new se;function gb(o){Te._getMatrix(tv,Te.workingColorSpace,o);const e=`mat3( ${tv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case zc:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ev(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+mb(o.getShaderSource(e),h)}else return l}function _b(o,e){const i=gb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function vb(o,e){let i;switch(e){case yS:i="Linear";break;case ES:i="Reinhard";break;case TS:i="Cineon";break;case bS:i="ACESFilmic";break;case RS:i="AgX";break;case CS:i="Neutral";break;case AS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new ot;function xb(){Te.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),e=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function Mb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function yb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Oo(o){return o!==""}function nv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(o){return o.replace(Eb,bb)}const Tb=new Map;function bb(o,e){let i=ce[e];if(i===void 0){const r=Tb.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return _d(i)}const Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(o){return o.replace(Ab,Rb)}function Rb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function rv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===eS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function wb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Db(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ub(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case fv:e="ENVMAP_BLENDING_MULTIPLY";break;case SS:e="ENVMAP_BLENDING_MIX";break;case MS:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Nb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Cb(i),p=wb(i),_=Db(i),v=Ub(i),x=Lb(i),y=Sb(i),A=Mb(u),C=l.createProgram();let M,g,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Oo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(M=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?ce.tonemapping_pars_fragment:"",i.toneMapping!==qa?vb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,_b("linearToOutputTexel",i.outputColorSpace),xb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=_d(h),h=nv(h,i),h=iv(h,i),d=_d(d),d=nv(d,i),d=iv(d,i),h=av(h),d=av(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===__?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===__?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=z+M+h,w=z+g+d,H=$_(l,l.VERTEX_SHADER,N),V=$_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,H),l.attachShader(C,V),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(B){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(C).trim(),nt=l.getShaderInfoLog(H).trim(),pt=l.getShaderInfoLog(V).trim();let ut=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,V);else{const Z=ev(l,H,"vertex"),W=ev(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+at+`
`+Z+`
`+W)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(nt===""||pt==="")&&(P=!1);P&&(B.diagnostics={runnable:ut,programLog:at,vertexShader:{log:nt,prefix:M},fragmentShader:{log:pt,prefix:g}})}l.deleteShader(H),l.deleteShader(V),j=new Pc(l,C),D=yb(l,C)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,db)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=V,this}let Ob=0;class Pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new zb(e),i.set(e,r)),r}}class zb{constructor(e){this.id=Ob++,this.code=e,this.usedTimes=0}}function Bb(o,e,i,r,l,u,h){const d=new bv,m=new Pb,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,R,B,at,nt){const pt=at.fog,ut=nt.geometry,P=D.isMeshStandardMaterial?at.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),W=Z&&Z.mapping===Fc?Z.image.height:null,yt=A[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const U=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let St,Q,mt,Mt;if(yt){const ye=Ai[yt];St=ye.vertexShader,Q=ye.fragmentShader}else St=D.vertexShader,Q=D.fragmentShader,m.update(D),mt=m.getVertexShaderID(D),Mt=m.getFragmentShaderID(D);const At=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),oe=nt.isInstancedMesh===!0,Qt=nt.isBatchedMesh===!0,Ne=!!D.map,Fe=!!D.matcap,ge=!!Z,I=!!D.aoMap,xn=!!D.lightMap,Me=!!D.bumpMap,de=!!D.normalMap,Gt=!!D.displacementMap,_e=!!D.emissiveMap,jt=!!D.metalnessMap,ae=!!D.roughnessMap,Ze=D.anisotropy>0,L=D.clearcoat>0,E=D.dispersion>0,tt=D.iridescence>0,ft=D.sheen>0,dt=D.transmission>0,lt=Ze&&!!D.anisotropyMap,Ot=L&&!!D.clearcoatMap,Dt=L&&!!D.clearcoatNormalMap,Ht=L&&!!D.clearcoatRoughnessMap,Vt=tt&&!!D.iridescenceMap,xt=tt&&!!D.iridescenceThicknessMap,Pt=ft&&!!D.sheenColorMap,qt=ft&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Rt=!!D.specularColorMap,ie=!!D.specularIntensityMap,k=dt&&!!D.transmissionMap,Ut=dt&&!!D.thicknessMap,Et=!!D.gradientMap,zt=!!D.alphaMap,bt=D.alphaTest>0,_t=!!D.alphaHash,It=!!D.extensions;let ne=qa;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ne=o.toneMapping);const De={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Q,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Qt,batchingColor:Qt&&nt._colorsTexture!==null,instancing:oe,instancingColor:oe&&nt.instanceColor!==null,instancingMorph:oe&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:ws,alphaToCoverage:!!D.alphaToCoverage,map:Ne,matcap:Fe,envMap:ge,envMapMode:ge&&Z.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:xn,bumpMap:Me,normalMap:de,displacementMap:x&&Gt,emissiveMap:_e,normalMapObjectSpace:de&&D.normalMapType===NS,normalMapTangentSpace:de&&D.normalMapType===LS,metalnessMap:jt,roughnessMap:ae,anisotropy:Ze,anisotropyMap:lt,clearcoat:L,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:E,iridescence:tt,iridescenceMap:Vt,iridescenceThicknessMap:xt,sheen:ft,sheenColorMap:Pt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Rt,specularIntensityMap:ie,transmission:dt,transmissionMap:k,thicknessMap:Ut,gradientMap:Et,opaque:D.transparent===!1&&D.blending===Es&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:_t,combine:D.combine,mapUv:Ne&&C(D.map.channel),aoMapUv:I&&C(D.aoMap.channel),lightMapUv:xn&&C(D.lightMap.channel),bumpMapUv:Me&&C(D.bumpMap.channel),normalMapUv:de&&C(D.normalMap.channel),displacementMapUv:Gt&&C(D.displacementMap.channel),emissiveMapUv:_e&&C(D.emissiveMap.channel),metalnessMapUv:jt&&C(D.metalnessMap.channel),roughnessMapUv:ae&&C(D.roughnessMap.channel),anisotropyMapUv:lt&&C(D.anisotropyMap.channel),clearcoatMapUv:Ot&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&C(D.sheenRoughnessMap.channel),specularMapUv:Yt&&C(D.specularMap.channel),specularColorMapUv:Rt&&C(D.specularColorMap.channel),specularIntensityMapUv:ie&&C(D.specularIntensityMap.channel),transmissionMapUv:k&&C(D.transmissionMap.channel),thicknessMapUv:Ut&&C(D.thicknessMap.channel),alphaMapUv:zt&&C(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(de||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ut.attributes.uv&&(Ne||zt),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:nt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ne&&D.map.isVideoTexture===!0&&Te.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:_e&&D.emissiveMap.isVideoTexture===!0&&Te.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===aa,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:It&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&D.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function g(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)R.push(B),R.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(z(R,D),N(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function z(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function N(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const R=A[D.type];let B;if(R){const at=Ai[R];B=uM.clone(at.uniforms)}else B=D.uniforms;return B}function H(D,R){let B;for(let at=0,nt=_.length;at<nt;at++){const pt=_[at];if(pt.cacheKey===R){B=pt,++B.usedTimes;break}}return B===void 0&&(B=new Nb(o,R,D,u),_.push(B)),B}function V(D){if(--D.usedTimes===0){const R=_.indexOf(D);_[R]=_[_.length-1],_.pop(),D.destroy()}}function F(D){m.remove(D)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:w,acquireProgram:H,releaseProgram:V,releaseShaderCache:F,programs:_,dispose:j}}function Ib(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Fb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function sv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ov(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,A,C,M){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=A,g.renderOrder=v.renderOrder,g.z=C,g.group=M),e++,g}function d(v,x,y,A,C,M){const g=h(v,x,y,A,C,M);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(v,x,y,A,C,M){const g=h(v,x,y,A,C,M);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||Fb),r.length>1&&r.sort(x||sv),l.length>1&&l.sort(x||sv)}function _(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function Hb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new ov,o.set(r,[h])):l>=u.length?(h=new ov,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Gb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Ce};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function Vb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let kb=0;function Xb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Wb(o){const e=new Gb,i=Vb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,u=new $e,h=new $e;function d(p){let _=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,A=0,C=0,M=0,g=0,z=0,N=0,w=0,H=0,V=0,F=0;p.sort(Xb);for(let D=0,R=p.length;D<R;D++){const B=p[D],at=B.color,nt=B.intensity,pt=B.distance,ut=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=at.r*nt,v+=at.g*nt,x+=at.b*nt;else if(B.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(B.sh.coefficients[P],nt);F++}else if(B.isDirectionalLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,W=i.get(B);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=ut,r.directionalShadowMatrix[y]=B.shadow.matrix,z++}r.directional[y]=P,y++}else if(B.isSpotLight){const P=e.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(at).multiplyScalar(nt),P.distance=pt,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,r.spot[C]=P;const Z=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,Z.updateMatrices(B),B.castShadow&&V++),r.spotLightMatrix[C]=Z.matrix,B.castShadow){const W=i.get(B);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=ut,w++}C++}else if(B.isRectAreaLight){const P=e.get(B);P.color.copy(at).multiplyScalar(nt),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=P,M++}else if(B.isPointLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const Z=B.shadow,W=i.get(B);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,r.pointShadow[A]=W,r.pointShadowMap[A]=ut,r.pointShadowMatrix[A]=B.shadow.matrix,N++}r.point[A]=P,A++}else if(B.isHemisphereLight){const P=e.get(B);P.skyColor.copy(B.color).multiplyScalar(nt),P.groundColor.copy(B.groundColor).multiplyScalar(nt),r.hemi[g]=P,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==A||j.spotLength!==C||j.rectAreaLength!==M||j.hemiLength!==g||j.numDirectionalShadows!==z||j.numPointShadows!==N||j.numSpotShadows!==w||j.numSpotMaps!==H||j.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=g,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+H-V,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=F,j.directionalLength=y,j.pointLength=A,j.spotLength=C,j.rectAreaLength=M,j.hemiLength=g,j.numDirectionalShadows=z,j.numPointShadows=N,j.numSpotShadows=w,j.numSpotMaps=H,j.numLightProbes=F,r.version=kb++)}function m(p,_){let v=0,x=0,y=0,A=0,C=0;const M=_.matrixWorldInverse;for(let g=0,z=p.length;g<z;g++){const N=p[g];if(N.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(N.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const w=r.rectArea[A];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function lv(o){const e=new Wb(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function qb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new lv(o),e.set(l,[d])):u>=h.length?(d=new lv(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zb(o,e,i){let r=new Nv;const l=new we,u=new we,h=new Je,d=new MM({depthPacking:US}),m=new yM,p={},_=i.maxTextureSize,v={[Ya]:Vn,[Vn]:Ya,[aa]:aa},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Yb,fragmentShader:jb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new Ui;A.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ci(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let g=this.type;this.render=function(V,F,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),at=o.state;at.setBlending(Wa),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const nt=g!==ia&&this.type===ia,pt=g===ia&&this.type!==ia;for(let ut=0,P=V.length;ut<P;ut++){const Z=V[ut],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const yt=W.getFrameExtents();if(l.multiply(yt),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/yt.x),l.x=u.x*yt.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/yt.y),l.y=u.y*yt.y,W.mapSize.y=u.y)),W.map===null||nt===!0||pt===!0){const $=this.type!==ia?{minFilter:cn,magFilter:cn}:{};W.map!==null&&W.map.dispose(),W.map=new ca(l.x,l.y,$),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const U=W.getViewportCount();for(let $=0;$<U;$++){const vt=W.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),at.viewport(h),W.updateMatrices(Z,$),r=W.getFrustum(),w(F,j,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===ia&&z(W,j),W.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(D,R,B)};function z(V,F){const j=e.update(C);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new ca(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(F,null,j,x,C,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(F,null,j,y,C,null)}function N(V,F,j,D){let R=null;const B=j.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(B!==void 0)R=B;else if(R=j.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const at=R.uuid,nt=F.uuid;let pt=p[at];pt===void 0&&(pt={},p[at]=pt);let ut=pt[nt];ut===void 0&&(ut=R.clone(),pt[nt]=ut,F.addEventListener("dispose",H)),R=ut}if(R.visible=F.visible,R.wireframe=F.wireframe,D===ia?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const at=o.properties.get(R);at.light=j}return R}function w(V,F,j,D,R){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&R===ia)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,V.matrixWorld);const nt=e.update(V),pt=V.material;if(Array.isArray(pt)){const ut=nt.groups;for(let P=0,Z=ut.length;P<Z;P++){const W=ut[P],yt=pt[W.materialIndex];if(yt&&yt.visible){const U=N(V,yt,D,R);V.onBeforeShadow(o,V,F,j,nt,U,W),o.renderBufferDirect(j,null,nt,U,V,W),V.onAfterShadow(o,V,F,j,nt,U,W)}}}else if(pt.visible){const ut=N(V,pt,D,R);V.onBeforeShadow(o,V,F,j,nt,ut,null),o.renderBufferDirect(j,null,nt,ut,V,null),V.onAfterShadow(o,V,F,j,nt,ut,null)}}const at=V.children;for(let nt=0,pt=at.length;nt<pt;nt++)w(at[nt],F,j,D,R)}function H(V){V.target.removeEventListener("dispose",H);for(const j in p){const D=p[j],R=V.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const Kb={[Lh]:Nh,[Oh]:Bh,[Ph]:Ih,[As]:zh,[Nh]:Lh,[Bh]:Oh,[Ih]:Ph,[zh]:As};function Qb(o,e){function i(){let k=!1;const Ut=new Je;let Et=null;const zt=new Je(0,0,0,0);return{setMask:function(bt){Et!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){k=bt},setClear:function(bt,_t,It,ne,De){De===!0&&(bt*=ne,_t*=ne,It*=ne),Ut.set(bt,_t,It,ne),zt.equals(Ut)===!1&&(o.clearColor(bt,_t,It,ne),zt.copy(Ut))},reset:function(){k=!1,Et=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(_t){if(Ut!==_t){const It=e.get("EXT_clip_control");_t?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?At(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){Et!==_t&&!k&&(o.depthMask(_t),Et=_t)},setFunc:function(_t){if(Ut&&(_t=Kb[_t]),zt!==_t){switch(_t){case Lh:o.depthFunc(o.NEVER);break;case Nh:o.depthFunc(o.ALWAYS);break;case Oh:o.depthFunc(o.LESS);break;case As:o.depthFunc(o.LEQUAL);break;case Ph:o.depthFunc(o.EQUAL);break;case zh:o.depthFunc(o.GEQUAL);break;case Bh:o.depthFunc(o.GREATER);break;case Ih:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){bt!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),bt=_t)},reset:function(){k=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,It=null,ne=null,De=null;return{setTest:function(ye){k||(ye?At(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(ye){Ut!==ye&&!k&&(o.stencilMask(ye),Ut=ye)},setFunc:function(ye,Xn,hn){(Et!==ye||zt!==Xn||bt!==hn)&&(o.stencilFunc(ye,Xn,hn),Et=ye,zt=Xn,bt=hn)},setOp:function(ye,Xn,hn){(_t!==ye||It!==Xn||ne!==hn)&&(o.stencilOp(ye,Xn,hn),_t=ye,It=Xn,ne=hn)},setLocked:function(ye){k=ye},setClear:function(ye){De!==ye&&(o.clearStencil(ye),De=ye)},reset:function(){k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,It=null,ne=null,De=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,g=null,z=null,N=null,w=null,H=null,V=null,F=new Ce(0,0,0),j=0,D=!1,R=null,B=null,at=null,nt=null,pt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=Z>=2);let yt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new Je().fromArray($),Q=new Je().fromArray(vt);function mt(k,Ut,Et,zt){const bt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Et;It++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return _t}const Mt={};Mt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(As),Me(!1),de(f_),At(o.CULL_FACE),I(Wa);function At(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function oe(k,Ut){return v[k]!==Ut?(o.bindFramebuffer(k,Ut),v[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Qt(k,Ut){let Et=y,zt=!1;if(k){Et=x.get(Ut),Et===void 0&&(Et=[],x.set(Ut,Et));const bt=k.textures;if(Et.length!==bt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,It=bt.length;_t<It;_t++)Et[_t]=o.COLOR_ATTACHMENT0+_t;Et.length=bt.length,zt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Et)}function Ne(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const Fe={[yr]:o.FUNC_ADD,[iS]:o.FUNC_SUBTRACT,[aS]:o.FUNC_REVERSE_SUBTRACT};Fe[rS]=o.MIN,Fe[sS]=o.MAX;const ge={[oS]:o.ZERO,[lS]:o.ONE,[cS]:o.SRC_COLOR,[Dh]:o.SRC_ALPHA,[mS]:o.SRC_ALPHA_SATURATE,[dS]:o.DST_COLOR,[fS]:o.DST_ALPHA,[uS]:o.ONE_MINUS_SRC_COLOR,[Uh]:o.ONE_MINUS_SRC_ALPHA,[pS]:o.ONE_MINUS_DST_COLOR,[hS]:o.ONE_MINUS_DST_ALPHA,[gS]:o.CONSTANT_COLOR,[_S]:o.ONE_MINUS_CONSTANT_COLOR,[vS]:o.CONSTANT_ALPHA,[xS]:o.ONE_MINUS_CONSTANT_ALPHA};function I(k,Ut,Et,zt,bt,_t,It,ne,De,ye){if(k===Wa){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(At(o.BLEND),C=!0),k!==nS){if(k!==M||ye!==D){if((g!==yr||w!==yr)&&(o.blendEquation(o.FUNC_ADD),g=yr,w=yr),ye)switch(k){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case h_:o.blendFunc(o.ONE,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case h_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case d_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,N=null,H=null,V=null,F.set(0,0,0),j=0,M=k,D=ye}return}bt=bt||Ut,_t=_t||Et,It=It||zt,(Ut!==g||bt!==w)&&(o.blendEquationSeparate(Fe[Ut],Fe[bt]),g=Ut,w=bt),(Et!==z||zt!==N||_t!==H||It!==V)&&(o.blendFuncSeparate(ge[Et],ge[zt],ge[_t],ge[It]),z=Et,N=zt,H=_t,V=It),(ne.equals(F)===!1||De!==j)&&(o.blendColor(ne.r,ne.g,ne.b,De),F.copy(ne),j=De),M=k,D=!1}function xn(k,Ut){k.side===aa?Ct(o.CULL_FACE):At(o.CULL_FACE);let Et=k.side===Vn;Ut&&(Et=!Et),Me(Et),k.blending===Es&&k.transparent===!1?I(Wa):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Me(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function de(k){k!==$x?(At(o.CULL_FACE),k!==B&&(k===f_?o.cullFace(o.BACK):k===tS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),B=k}function Gt(k){k!==at&&(P&&o.lineWidth(k),at=k)}function _e(k,Ut,Et){k?(At(o.POLYGON_OFFSET_FILL),(nt!==Ut||pt!==Et)&&(o.polygonOffset(Ut,Et),nt=Ut,pt=Et)):Ct(o.POLYGON_OFFSET_FILL)}function jt(k){k?At(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ae(k){k===void 0&&(k=o.TEXTURE0+ut-1),yt!==k&&(o.activeTexture(k),yt=k)}function Ze(k,Ut,Et){Et===void 0&&(yt===null?Et=o.TEXTURE0+ut-1:Et=yt);let zt=U[Et];zt===void 0&&(zt={type:void 0,texture:void 0},U[Et]=zt),(zt.type!==k||zt.texture!==Ut)&&(yt!==Et&&(o.activeTexture(Et),yt=Et),o.bindTexture(k,Ut||Mt[k]),zt.type=k,zt.texture=Ut)}function L(){const k=U[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function qt(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function Yt(k,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Ut,k.name),Et.set(k,zt))}function Rt(k,Ut){const zt=p.get(Ut).get(k);m.get(Ut)!==zt&&(o.uniformBlockBinding(Ut,zt,k.__bindingPointIndex),m.set(Ut,zt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},yt=null,U={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,g=null,z=null,N=null,w=null,H=null,V=null,F=new Ce(0,0,0),j=0,D=!1,R=null,B=null,at=null,nt=null,pt=null,St.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Ne,setBlending:I,setMaterial:xn,setFlipSided:Me,setCullFace:de,setLineWidth:Gt,setPolygonOffset:_e,setScissorTest:jt,activeTexture:ae,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:Vt,texImage3D:xt,updateUBOMapping:Yt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ft,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ot,scissor:Pt,viewport:qt,reset:ie}}function Jb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return y?new OffscreenCanvas(L,E):Ic("canvas")}function C(L,E,tt){let ft=1;const dt=Ze(L);if((dt.width>tt||dt.height>tt)&&(ft=tt/Math.max(dt.width,dt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(ft*dt.width),Ot=Math.floor(ft*dt.height);v===void 0&&(v=A(lt,Ot));const Dt=E?A(lt,Ot):v;return Dt.width=lt,Dt.height=Ot,Dt.getContext("2d").drawImage(L,0,0,lt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Ot+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function M(L){return L.generateMipmaps}function g(L){o.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,E,tt,ft,dt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=E;if(E===o.RED&&(tt===o.FLOAT&&(lt=o.R32F),tt===o.HALF_FLOAT&&(lt=o.R16F),tt===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.R8UI),tt===o.UNSIGNED_SHORT&&(lt=o.R16UI),tt===o.UNSIGNED_INT&&(lt=o.R32UI),tt===o.BYTE&&(lt=o.R8I),tt===o.SHORT&&(lt=o.R16I),tt===o.INT&&(lt=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(lt=o.RG32F),tt===o.HALF_FLOAT&&(lt=o.RG16F),tt===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(lt=o.RG16UI),tt===o.UNSIGNED_INT&&(lt=o.RG32UI),tt===o.BYTE&&(lt=o.RG8I),tt===o.SHORT&&(lt=o.RG16I),tt===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),tt===o.UNSIGNED_INT&&(lt=o.RGB32UI),tt===o.BYTE&&(lt=o.RGB8I),tt===o.SHORT&&(lt=o.RGB16I),tt===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(lt=o.RGBA32UI),tt===o.BYTE&&(lt=o.RGBA8I),tt===o.SHORT&&(lt=o.RGBA16I),tt===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),E===o.RGBA){const Ot=dt?zc:Te.getTransfer(ft);tt===o.FLOAT&&(lt=o.RGBA32F),tt===o.HALF_FLOAT&&(lt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(lt=Ot===Ie?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function w(L,E){let tt;return L?E===null||E===br||E===zo?tt=o.DEPTH24_STENCIL8:E===Nn?tt=o.DEPTH32F_STENCIL8:E===Po&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===br||E===zo?tt=o.DEPTH_COMPONENT24:E===Nn?tt=o.DEPTH_COMPONENT32F:E===Po&&(tt=o.DEPTH_COMPONENT16),tt}function H(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function V(L){const E=L.target;E.removeEventListener("dispose",V),j(E),E.isVideoTexture&&_.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),R(E)}function j(L){const E=r.get(L);if(E.__webglInit===void 0)return;const tt=L.source,ft=x.get(tt);if(ft){const dt=ft[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(L),Object.keys(ft).length===0&&x.delete(tt)}r.remove(L)}function D(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const tt=L.source,ft=x.get(tt);delete ft[E.__cacheKey],h.memory.textures--}function R(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let dt=0;dt<E.__webglFramebuffer[ft].length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][dt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=L.textures;for(let ft=0,dt=tt.length;ft<dt;ft++){const lt=r.get(tt[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(tt[ft])}r.remove(L)}let B=0;function at(){B=0}function nt(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function pt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ut(L,E){const tt=r.get(L);if(L.isVideoTexture&&jt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(tt,L,E);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function P(L,E){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Mt(tt,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function Z(L,E){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Mt(tt,L,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function W(L,E){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){At(tt,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const yt={[Gh]:o.REPEAT,[ra]:o.CLAMP_TO_EDGE,[Vh]:o.MIRRORED_REPEAT},U={[cn]:o.NEAREST,[wS]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[Kf]:o.LINEAR_MIPMAP_NEAREST,[Tr]:o.LINEAR_MIPMAP_LINEAR},$={[OS]:o.NEVER,[HS]:o.ALWAYS,[PS]:o.LESS,[Mv]:o.LEQUAL,[zS]:o.EQUAL,[FS]:o.GEQUAL,[BS]:o.GREATER,[IS]:o.NOTEQUAL};function vt(L,E){if(E.type===Nn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Kf||E.magFilter===nc||E.magFilter===Tr||E.minFilter===Ri||E.minFilter===Kf||E.minFilter===nc||E.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===cn||E.minFilter!==nc&&E.minFilter!==Tr||E.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(L,E){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",V));const ft=E.source;let dt=x.get(ft);dt===void 0&&(dt={},x.set(ft,dt));const lt=pt(E);if(lt!==L.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),dt[lt].usedTimes++;const Ot=dt[L.__cacheKey];Ot!==void 0&&(dt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(E)),L.__cacheKey=lt,L.__webglTexture=dt[lt].texture}return tt}function Q(L,E,tt){return Math.floor(Math.floor(L/tt)/E)}function mt(L,E,tt,ft){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ft,E.data);else{lt.sort((xt,Pt)=>xt.start-Pt.start);let Ot=0;for(let xt=1;xt<lt.length;xt++){const Pt=lt[Ot],qt=lt[xt],Yt=Pt.start+Pt.count,Rt=Q(qt.start,E.width,4),ie=Q(Pt.start,E.width,4);qt.start<=Yt+1&&Rt===ie&&Q(qt.start+qt.count-1,E.width,4)===Rt?Pt.count=Math.max(Pt.count,qt.start+qt.count-Pt.start):(++Ot,lt[Ot]=qt)}lt.length=Ot+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let xt=0,Pt=lt.length;xt<Pt;xt++){const qt=lt[xt],Yt=Math.floor(qt.start/4),Rt=Math.ceil(qt.count/4),ie=Yt%E.width,k=Math.floor(Yt/E.width),Ut=Rt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ie,k,Ut,Et,tt,ft,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function Mt(L,E,tt){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const dt=St(L,E),lt=E.source;i.bindTexture(ft,L.__webglTexture,o.TEXTURE0+tt);const Ot=r.get(lt);if(lt.version!==Ot.__version||dt===!0){i.activeTexture(o.TEXTURE0+tt);const Dt=Te.getPrimaries(Te.workingColorSpace),Ht=E.colorSpace===Xa?null:Te.getPrimaries(E.colorSpace),Vt=E.colorSpace===Xa||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let xt=C(E.image,!1,l.maxTextureSize);xt=ae(E,xt);const Pt=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Yt=N(E.internalFormat,Pt,qt,E.colorSpace,E.isVideoTexture);vt(ft,E);let Rt;const ie=E.mipmaps,k=E.isVideoTexture!==!0,Ut=Ot.__version===void 0||dt===!0,Et=lt.dataReady,zt=H(E,xt);if(E.isDepthTexture)Yt=w(E.format===Io,E.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,Yt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,Yt,xt.width,xt.height,0,Pt,qt,null));else if(E.isDataTexture)if(ie.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,qt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Pt,qt,Rt.data);E.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,zt,Yt,xt.width,xt.height),Et&&mt(E,xt,Pt,qt)):i.texImage2D(o.TEXTURE_2D,0,Yt,xt.width,xt.height,0,Pt,qt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Yt,ie[0].width,ie[0].height,xt.depth);for(let bt=0,_t=ie.length;bt<_t;bt++)if(Rt=ie[bt],E.format!==bn)if(Pt!==null)if(k){if(Et)if(E.layerUpdates.size>0){const It=I_(Rt.width,Rt.height,E.format,E.type);for(const ne of E.layerUpdates){const De=Rt.data.subarray(ne*It/Rt.data.BYTES_PER_ELEMENT,(ne+1)*It/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ne,Rt.width,Rt.height,1,Pt,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Rt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Yt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,qt,Rt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Yt,Rt.width,Rt.height,xt.depth,0,Pt,qt,Rt.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Rt=ie[bt],E.format!==bn?Pt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,qt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Pt,qt,Rt.data)}else if(E.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Yt,xt.width,xt.height,xt.depth),Et)if(E.layerUpdates.size>0){const bt=I_(xt.width,xt.height,E.format,E.type);for(const _t of E.layerUpdates){const It=xt.data.subarray(_t*bt/xt.data.BYTES_PER_ELEMENT,(_t+1)*bt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,Pt,qt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,qt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,xt.width,xt.height,xt.depth,0,Pt,qt,xt.data);else if(E.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,zt,Yt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,qt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,xt.width,xt.height,xt.depth,0,Pt,qt,xt.data);else if(E.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Yt,xt.width,xt.height);else{let bt=xt.width,_t=xt.height;for(let It=0;It<zt;It++)i.texImage2D(o.TEXTURE_2D,It,Yt,bt,_t,0,Pt,qt,null),bt>>=1,_t>>=1}}else if(ie.length>0){if(k&&Ut){const bt=Ze(ie[0]);i.texStorage2D(o.TEXTURE_2D,zt,Yt,bt.width,bt.height)}for(let bt=0,_t=ie.length;bt<_t;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt,qt,Rt):i.texImage2D(o.TEXTURE_2D,bt,Yt,Pt,qt,Rt);E.generateMipmaps=!1}else if(k){if(Ut){const bt=Ze(xt);i.texStorage2D(o.TEXTURE_2D,zt,Yt,bt.width,bt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,qt,xt)}else i.texImage2D(o.TEXTURE_2D,0,Yt,Pt,qt,xt);M(E)&&g(ft),Ot.__version=lt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function At(L,E,tt){if(E.image.length!==6)return;const ft=St(L,E),dt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+tt);const lt=r.get(dt);if(dt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+tt);const Ot=Te.getPrimaries(Te.workingColorSpace),Dt=E.colorSpace===Xa?null:Te.getPrimaries(E.colorSpace),Ht=E.colorSpace===Xa||Ot===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Vt&&!xt?Pt[_t]=C(E.image[_t],!0,l.maxCubemapSize):Pt[_t]=xt?E.image[_t].image:E.image[_t],Pt[_t]=ae(E,Pt[_t]);const qt=Pt[0],Yt=u.convert(E.format,E.colorSpace),Rt=u.convert(E.type),ie=N(E.internalFormat,Yt,Rt,E.colorSpace),k=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ft===!0,Et=dt.dataReady;let zt=H(E,qt);vt(o.TEXTURE_CUBE_MAP,E);let bt;if(Vt){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,qt.width,qt.height);for(let _t=0;_t<6;_t++){bt=Pt[_t].mipmaps;for(let It=0;It<bt.length;It++){const ne=bt[It];E.format!==bn?Yt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,ne.width,ne.height,Yt,Rt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ie,ne.width,ne.height,0,Yt,Rt,ne.data)}}}else{if(bt=E.mipmaps,k&&Ut){bt.length>0&&zt++;const _t=Ze(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,Yt,Rt,Pt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Pt[_t].width,Pt[_t].height,0,Yt,Rt,Pt[_t].data);for(let It=0;It<bt.length;It++){const De=bt[It].image[_t].image;k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,De.width,De.height,Yt,Rt,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ie,De.width,De.height,0,Yt,Rt,De.data)}}else{k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt,Rt,Pt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Yt,Rt,Pt[_t]);for(let It=0;It<bt.length;It++){const ne=bt[It];k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,Yt,Rt,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ie,Yt,Rt,ne.image[_t])}}}M(E)&&g(o.TEXTURE_CUBE_MAP),lt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ct(L,E,tt,ft,dt,lt){const Ot=u.convert(tt.format,tt.colorSpace),Dt=u.convert(tt.type),Ht=N(tt.internalFormat,Ot,Dt,tt.colorSpace),Vt=r.get(E),xt=r.get(tt);if(xt.__renderTarget=E,!Vt.__hasExternalTextures){const Pt=Math.max(1,E.width>>lt),qt=Math.max(1,E.height>>lt);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,lt,Ht,Pt,qt,E.depth,0,Ot,Dt,null):i.texImage2D(dt,lt,Ht,Pt,qt,0,Ot,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,dt,xt.__webglTexture,0,Gt(E)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,dt,xt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(L,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ft=E.depthTexture,dt=ft&&ft.isDepthTexture?ft.type:null,lt=w(E.stencilBuffer,dt),Ot=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Gt(E);_e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,lt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,L)}else{const ft=E.textures;for(let dt=0;dt<ft.length;dt++){const lt=ft[dt],Ot=u.convert(lt.format,lt.colorSpace),Dt=u.convert(lt.type),Ht=N(lt.internalFormat,Ot,Dt,lt.colorSpace),Vt=Gt(E);tt&&_e(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Ht,E.width,E.height):_e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const dt=ft.__webglTexture,lt=Gt(E);if(E.depthTexture.format===Bo)_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Io)_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const E=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",dt)};ft.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ft}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?Qt(E.__webglFramebuffer[0],L):Qt(E.__webglFramebuffer,L)}else if(tt){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ft],L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(L,E,tt){const ft=r.get(L);E!==void 0&&Ct(ft.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Ne(L)}function ge(L){const E=L.texture,tt=r.get(L),ft=r.get(E);L.addEventListener("dispose",F);const dt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,h.memory.textures++),lt){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)tt.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=r.get(dt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&_e(L)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];tt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const Vt=u.convert(Ht.format,Ht.colorSpace),xt=u.convert(Ht.type),Pt=N(Ht.internalFormat,Vt,xt,Ht.colorSpace,L.isXRRenderTarget===!0),qt=Gt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Pt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(tt.__webglFramebuffer[Dt][Ht],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Ct(tt.__webglFramebuffer[Dt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=dt[Dt],xt=r.get(Vt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),vt(o.TEXTURE_2D,Vt),Ct(tt.__webglFramebuffer,L,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),M(Vt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ft.__webglTexture),vt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(tt.__webglFramebuffer[Ht],L,E,o.COLOR_ATTACHMENT0,Dt,Ht);else Ct(tt.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&g(Dt),i.unbindTexture()}L.depthBuffer&&Ne(L)}function I(L){const E=L.textures;for(let tt=0,ft=E.length;tt<ft;tt++){const dt=E[tt];if(M(dt)){const lt=z(L),Ot=r.get(dt).__webglTexture;i.bindTexture(lt,Ot),g(lt),i.unbindTexture()}}}const xn=[],Me=[];function de(L){if(L.samples>0){if(_e(L)===!1){const E=L.textures,tt=L.width,ft=L.height;let dt=o.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(L),Dt=E.length>1;if(Dt)for(let Vt=0;Vt<E.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=L.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=r.get(E[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,dt,o.NEAREST),m===!0&&(xn.length=0,Me.length=0,xn.push(o.COLOR_ATTACHMENT0+Vt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(xn.push(lt),Me.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<E.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=r.get(E[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Gt(L){return Math.min(l.maxSamples,L.samples)}function _e(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(L){const E=h.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function ae(L,E){const tt=L.colorSpace,ft=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==ws&&tt!==Xa&&(Te.getTransfer(tt)===Ie?(ft!==bn||dt!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=at,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=_e}function $b(o,e){function i(r,l=Xa){let u;const h=Te.getTransfer(l);if(r===la)return o.UNSIGNED_BYTE;if(r===Md)return o.UNSIGNED_SHORT_4_4_4_4;if(r===yd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===mv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===dv)return o.BYTE;if(r===pv)return o.SHORT;if(r===Po)return o.UNSIGNED_SHORT;if(r===Sd)return o.INT;if(r===br)return o.UNSIGNED_INT;if(r===Nn)return o.FLOAT;if(r===Fo)return o.HALF_FLOAT;if(r===gv)return o.ALPHA;if(r===_v)return o.RGB;if(r===bn)return o.RGBA;if(r===Bo)return o.DEPTH_COMPONENT;if(r===Io)return o.DEPTH_STENCIL;if(r===vv)return o.RED;if(r===Ed)return o.RED_INTEGER;if(r===xv)return o.RG;if(r===Td)return o.RG_INTEGER;if(r===bd)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Lc||r===Nc)if(h===Ie)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kh||r===Xh||r===Wh||r===qh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===kh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yh||r===jh||r===Zh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Yh||r===jh)return h===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Zh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$h)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===td)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===id)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ad)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===od)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ld)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oc||r===ud||r===fd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Oc)return h===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ud)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sv||r===hd||r===dd||r===pd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Oc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new On,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Di({vertexShader:tA,fragmentShader:eA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends Us{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,y=null,A=null;const C=new nA,M=i.getContextAttributes();let g=null,z=null;const N=[],w=[],H=new we;let V=null;const F=new ci;F.viewport=new Je;const j=new ci;j.viewport=new Je;const D=[F,j],R=new EM;let B=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=N[Q];return mt===void 0&&(mt=new xh,N[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=N[Q];return mt===void 0&&(mt=new xh,N[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=N[Q];return mt===void 0&&(mt=new xh,N[Q]=mt),mt.getHandSpace()};function nt(Q){const mt=w.indexOf(Q.inputSource);if(mt===-1)return;const Mt=N[mt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function pt(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<N.length;Q++){const mt=w[Q];mt!==null&&(w[Q]=null,N[Q].disconnect(mt))}B=null,at=null,C.reset(),e.setRenderTarget(g),y=null,x=null,v=null,l=null,z=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ut),M.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,Ct=null;M.depth&&(Ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=M.stencil?Io:Bo,At=M.stencil?zo:br);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new ca(x.textureWidth,x.textureHeight,{format:bn,type:la,depthTexture:new Ov(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new ca(y.framebufferWidth,y.framebufferHeight,{format:bn,type:la,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ut(Q){for(let mt=0;mt<Q.removed.length;mt++){const Mt=Q.removed[mt],At=w.indexOf(Mt);At>=0&&(w[At]=null,N[At].disconnect(Mt))}for(let mt=0;mt<Q.added.length;mt++){const Mt=Q.added[mt];let At=w.indexOf(Mt);if(At===-1){for(let oe=0;oe<N.length;oe++)if(oe>=w.length){w.push(Mt),At=oe;break}else if(w[oe]===null){w[oe]=Mt,At=oe;break}if(At===-1)break}const Ct=N[At];Ct&&Ct.connect(Mt)}}const P=new ot,Z=new ot;function W(Q,mt,Mt){P.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const At=P.distanceTo(Z),Ct=mt.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Qt=Ct[14]/(Ct[10]-1),Ne=Ct[14]/(Ct[10]+1),Fe=(Ct[9]+1)/Ct[5],ge=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],xn=(oe[8]+1)/oe[0],Me=Qt*I,de=Qt*xn,Gt=At/(-I+xn),_e=Gt*-I;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const jt=Qt+Gt,ae=Ne+Gt,Ze=Me-_e,L=de+(At-_e),E=Fe*Ne/ae*jt,tt=ge*Ne/ae*jt;Q.projectionMatrix.makePerspective(Ze,L,E,tt,jt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,Mt=Q.far;C.texture!==null&&(C.depthNear>0&&(mt=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),R.near=j.near=F.near=mt,R.far=j.far=F.far=Mt,(B!==R.near||at!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,at=R.far),F.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,R.layers.mask=F.layers.mask|j.layers.mask;const At=Q.parent,Ct=R.cameras;yt(R,At);for(let oe=0;oe<Ct.length;oe++)yt(Ct[oe],At);Ct.length===2?W(R,F,j):R.projectionMatrix.copy(F.projectionMatrix),U(Q,R,At)};function U(Q,mt,Mt){Mt===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=md*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function vt(Q,mt){if(_=mt.getViewerPose(p||h),A=mt,_!==null){const Mt=_.views;y!==null&&(e.setRenderTargetFramebuffer(z,y.framebuffer),e.setRenderTarget(z));let At=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,At=!0);for(let Qt=0;Qt<Mt.length;Qt++){const Ne=Mt[Qt];let Fe=null;if(y!==null)Fe=y.getViewport(Ne);else{const I=v.getViewSubImage(x,Ne);Fe=I.viewport,Qt===0&&(e.setRenderTargetTextures(z,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(z))}let ge=D[Qt];ge===void 0&&(ge=new ci,ge.layers.enable(Qt),ge.viewport=new Je,D[Qt]=ge),ge.matrix.fromArray(Ne.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ne.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(R.matrix.copy(ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),At===!0&&R.cameras.push(ge)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(Mt[0]);Qt&&Qt.isValid&&Qt.texture&&C.init(e,Qt,l.renderState)}}for(let Mt=0;Mt<N.length;Mt++){const At=w[Mt],Ct=N[Mt];At!==null&&Ct!==void 0&&Ct.update(At,mt,p||h)}$&&$(Q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),A=null}const St=new zv;St.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const vr=new ua,aA=new $e;function rA(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function r(M,g){g.color.getRGB(M.fogColor.value,Dv(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,z,N,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),v(M,g)):g.isMeshPhongMaterial?(u(M,g),_(M,g)):g.isMeshStandardMaterial?(u(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,w)):g.isMeshMatcapMaterial?(u(M,g),A(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),C(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,z,N):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Vn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Vn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const z=e.get(g),N=z.envMap,w=z.envMapRotation;N&&(M.envMap.value=N,vr.copy(w),vr.x*=-1,vr.y*=-1,vr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),M.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(vr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,z,N){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*z,M.scale.value=N*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function _(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function v(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,z){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,g){g.matcap&&(M.matcap.value=g.matcap)}function C(M,g){const z=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function sA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,N){const w=N.program;r.uniformBlockBinding(z,w)}function p(z,N){let w=l[z.id];w===void 0&&(A(z),w=_(z),l[z.id]=w,z.addEventListener("dispose",M));const H=N.program;r.updateUBOMapping(z,H);const V=e.render.frame;u[z.id]!==V&&(x(z),u[z.id]=V)}function _(z){const N=v();z.__bindingPointIndex=N;const w=o.createBuffer(),H=z.__size,V=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,H,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,w),w}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const N=l[z.id],w=z.uniforms,H=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let V=0,F=w.length;V<F;V++){const j=Array.isArray(w[V])?w[V]:[w[V]];for(let D=0,R=j.length;D<R;D++){const B=j[D];if(y(B,V,D,H)===!0){const at=B.__offset,nt=Array.isArray(B.value)?B.value:[B.value];let pt=0;for(let ut=0;ut<nt.length;ut++){const P=nt[ut],Z=C(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,at+pt,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,pt),pt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(z,N,w,H){const V=z.value,F=N+"_"+w;if(H[F]===void 0)return typeof V=="number"||typeof V=="boolean"?H[F]=V:H[F]=V.clone(),!0;{const j=H[F];if(typeof V=="number"||typeof V=="boolean"){if(j!==V)return H[F]=V,!0}else if(j.equals(V)===!1)return j.copy(V),!0}return!1}function A(z){const N=z.uniforms;let w=0;const H=16;for(let F=0,j=N.length;F<j;F++){const D=Array.isArray(N[F])?N[F]:[N[F]];for(let R=0,B=D.length;R<B;R++){const at=D[R],nt=Array.isArray(at.value)?at.value:[at.value];for(let pt=0,ut=nt.length;pt<ut;pt++){const P=nt[pt],Z=C(P),W=w%H,yt=W%Z.boundary,U=W+yt;w+=yt,U!==0&&H-U<Z.storage&&(w+=H-U),at.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=w,w+=Z.storage}}}const V=w%H;return V>0&&(w+=H-V),z.__size=w,z.__cache={},this}function C(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function M(z){const N=z.target;N.removeEventListener("dispose",M);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function g(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class oA{constructor(e={}){const{canvas:i=VS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),C=new Int32Array(4);let M=null,g=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=li;let V=0,F=0,j=null,D=-1,R=null;const B=new Je,at=new Je;let nt=null;const pt=new Ce(0);let ut=0,P=i.width,Z=i.height,W=1,yt=null,U=null;const $=new Je(0,0,P,Z),vt=new Je(0,0,P,Z);let St=!1;const Q=new Nv;let mt=!1,Mt=!1;const At=new $e,Ct=new $e,oe=new ot,Qt=new Je,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ge(){return j===null?W:1}let I=r;function xn(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",_t,!1),I===null){const q="webgl2";if(I=xn(q,b),I===null)throw xn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Me,de,Gt,_e,jt,ae,Ze,L,E,tt,ft,dt,lt,Ot,Dt,Ht,Vt,xt,Pt,qt,Yt,Rt,ie,k;function Ut(){Me=new _T(I),Me.init(),Rt=new $b(I,Me),de=new uT(I,Me,e,Rt),Gt=new Qb(I,Me),de.reverseDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),_e=new ST(I),jt=new Ib,ae=new Jb(I,Me,Gt,jt,de,Rt,_e),Ze=new hT(w),L=new gT(w),E=new AM(I),ie=new lT(I,E),tt=new vT(I,E,_e,ie),ft=new yT(I,tt,E,_e),Pt=new MT(I,de,ae),Ht=new fT(jt),dt=new Bb(w,Ze,L,Me,de,ie,Ht),lt=new rA(w,jt),Ot=new Hb,Dt=new qb(Me),xt=new oT(w,Ze,L,Gt,ft,y,m),Vt=new Zb(w,ft,de),k=new sA(I,_e,de,Gt),qt=new cT(I,Me,_e),Yt=new xT(I,Me,_e),_e.programs=dt.programs,w.capabilities=de,w.extensions=Me,w.properties=jt,w.renderLists=Ot,w.shadowMap=Vt,w.state=Gt,w.info=_e}Ut();const Et=new iA(w,I);this.xr=Et,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(P,Z,!1))},this.getSize=function(b){return b.set(P,Z)},this.setSize=function(b,q,rt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,Z=q,i.width=Math.floor(b*W),i.height=Math.floor(q*W),rt===!0&&(i.style.width=b+"px",i.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(P*W,Z*W).floor()},this.setDrawingBufferSize=function(b,q,rt){P=b,Z=q,W=rt,i.width=Math.floor(b*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,q,rt,st){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,q,rt,st),Gt.viewport(B.copy($).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(vt)},this.setScissor=function(b,q,rt,st){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,q,rt,st),Gt.scissor(at.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){Gt.setScissorTest(St=b)},this.setOpaqueSort=function(b){yt=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,rt=!0){let st=0;if(b){let Y=!1;if(j!==null){const Tt=j.texture.format;Y=Tt===bd||Tt===Td||Tt===Ed}if(Y){const Tt=j.texture.type,wt=Tt===la||Tt===br||Tt===Po||Tt===zo||Tt===Md||Tt===yd,Nt=xt.getClearColor(),Bt=xt.getClearAlpha(),te=Nt.r,Kt=Nt.g,kt=Nt.b;wt?(A[0]=te,A[1]=Kt,A[2]=kt,A[3]=Bt,I.clearBufferuiv(I.COLOR,0,A)):(C[0]=te,C[1]=Kt,C[2]=kt,C[3]=Bt,I.clearBufferiv(I.COLOR,0,C))}else st|=I.COLOR_BUFFER_BIT}q&&(st|=I.DEPTH_BUFFER_BIT),rt&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),xt.dispose(),Ot.dispose(),Dt.dispose(),jt.dispose(),Ze.dispose(),L.dispose(),ft.dispose(),ie.dispose(),k.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",rn),Et.removeEventListener("sessionend",Sn),Pn.stop()};function zt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const b=_e.autoReset,q=Vt.enabled,rt=Vt.autoUpdate,st=Vt.needsUpdate,Y=Vt.type;Ut(),_e.autoReset=b,Vt.enabled=q,Vt.autoUpdate=rt,Vt.needsUpdate=st,Vt.type=Y}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const q=b.target;q.removeEventListener("dispose",It),ne(q)}function ne(b){De(b),jt.remove(b)}function De(b){const q=jt.get(b).programs;q!==void 0&&(q.forEach(function(rt){dt.releaseProgram(rt)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,rt,st,Y,Tt){q===null&&(q=Ne);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=Ka(b,q,rt,st,Y);Gt.setMaterial(st,wt);let Bt=rt.index,te=1;if(st.wireframe===!0){if(Bt=tt.getWireframeAttribute(rt),Bt===void 0)return;te=2}const Kt=rt.drawRange,kt=rt.attributes.position;let le=Kt.start*te,Ae=(Kt.start+Kt.count)*te;Tt!==null&&(le=Math.max(le,Tt.start*te),Ae=Math.min(Ae,(Tt.start+Tt.count)*te)),Bt!==null?(le=Math.max(le,0),Ae=Math.min(Ae,Bt.count)):kt!=null&&(le=Math.max(le,0),Ae=Math.min(Ae,kt.count));const Xe=Ae-le;if(Xe<0||Xe===1/0)return;ie.setup(Y,st,Nt,rt,Bt);let fe,Re=qt;if(Bt!==null&&(fe=E.get(Bt),Re=Yt,Re.setIndex(fe)),Y.isMesh)st.wireframe===!0?(Gt.setLineWidth(st.wireframeLinewidth*ge()),Re.setMode(I.LINES)):Re.setMode(I.TRIANGLES);else if(Y.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Gt.setLineWidth(Zt*ge()),Y.isLineSegments?Re.setMode(I.LINES):Y.isLineLoop?Re.setMode(I.LINE_LOOP):Re.setMode(I.LINE_STRIP)}else Y.isPoints?Re.setMode(I.POINTS):Y.isSprite&&Re.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Re.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,Oe=Y._multiDrawCounts,ve=Y._multiDrawCount,dn=Bt?E.get(Bt).bytesPerElement:1,pa=jt.get(st).currentProgram.getUniforms();for(let Ve=0;Ve<ve;Ve++)pa.setValue(I,"_gl_DrawID",Ve),Re.render(Zt[Ve]/dn,Oe[Ve])}else if(Y.isInstancedMesh)Re.renderInstances(le,Xe,Y.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Oe=Math.min(rt.instanceCount,Zt);Re.renderInstances(le,Xe,Oe)}else Re.render(le,Xe)};function ye(b,q,rt){b.transparent===!0&&b.side===aa&&b.forceSinglePass===!1?(b.side=Vn,b.needsUpdate=!0,ha(b,q,rt),b.side=Ya,b.needsUpdate=!0,ha(b,q,rt),b.side=aa):ha(b,q,rt)}this.compile=function(b,q,rt=null){rt===null&&(rt=b),g=Dt.get(rt),g.init(q),N.push(g),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),b!==rt&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const st=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];ye(Nt,rt,Y),st.add(Nt)}else ye(Tt,rt,Y),st.add(Tt)}),g=N.pop(),st},this.compileAsync=function(b,q,rt=null){const st=this.compile(b,q,rt);return new Promise(Y=>{function Tt(){if(st.forEach(function(wt){jt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){Y(b);return}setTimeout(Tt,10)}Me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Xn=null;function hn(b){Xn&&Xn(b)}function rn(){Pn.stop()}function Sn(){Pn.start()}const Pn=new zv;Pn.setAnimationLoop(hn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(b){Xn=b,Et.setAnimationLoop(b),b===null?Pn.stop():Pn.start()},Et.addEventListener("sessionstart",rn),Et.addEventListener("sessionend",Sn),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(q),q=Et.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,q,j),g=Dt.get(b,N.length),g.init(q),N.push(g),Ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,mt=Ht.init(this.clippingPlanes,Mt),M=Ot.get(b,z.length),M.init(),z.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&ja(Tt,q,-1/0,w.sortObjects)}ja(b,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(yt,U),Fe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Fe&&xt.addToRenderList(M,b),this.info.render.frame++,mt===!0&&Ht.beginShadows();const rt=g.state.shadowsArray;Vt.render(rt,b,q),mt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,Y=M.transmissive;if(g.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(Y.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const Bt=Tt[wt];Yo(st,Y,b,Bt)}Fe&&xt.render(b);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const Bt=Tt[wt];qo(M,b,Bt,Bt.viewport)}}else Y.length>0&&Yo(st,Y,b,q),Fe&&xt.render(b),qo(M,b,q);j!==null&&F===0&&(ae.updateMultisampleRenderTarget(j),ae.updateRenderTargetMipmap(j)),b.isScene===!0&&b.onAfterRender(w,b,q),ie.resetDefaultState(),D=-1,R=null,N.pop(),N.length>0?(g=N[N.length-1],mt===!0&&Ht.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function ja(b,q,rt,st){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){st&&Qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const wt=ft.update(b),Nt=b.material;Nt.visible&&M.push(b,wt,Nt,rt,Qt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const wt=ft.update(b),Nt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Qt.copy(wt.boundingSphere.center)),Qt.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Nt)){const Bt=wt.groups;for(let te=0,Kt=Bt.length;te<Kt;te++){const kt=Bt[te],le=Nt[kt.materialIndex];le&&le.visible&&M.push(b,wt,le,rt,Qt.z,kt)}}else Nt.visible&&M.push(b,wt,Nt,rt,Qt.z,null)}}const Tt=b.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)ja(Tt[wt],q,rt,st)}function qo(b,q,rt,st){const Y=b.opaque,Tt=b.transmissive,wt=b.transparent;g.setupLightsView(rt),mt===!0&&Ht.setGlobalState(w.clippingPlanes,rt),st&&Gt.viewport(B.copy(st)),Y.length>0&&Za(Y,q,rt),Tt.length>0&&Za(Tt,q,rt),wt.length>0&&Za(wt,q,rt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Yo(b,q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new ca(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Fo:la,minFilter:Tr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[st.id],wt=st.viewport||B;Tt.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget(),Bt=w.getActiveCubeFace(),te=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(pt),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),Fe&&xt.render(rt);const Kt=w.toneMapping;w.toneMapping=qa;const kt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),mt===!0&&Ht.setGlobalState(w.clippingPlanes,st),Za(b,rt,st),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ae=0,Xe=q.length;Ae<Xe;Ae++){const fe=q[Ae],Re=fe.object,Zt=fe.geometry,Oe=fe.material,ve=fe.group;if(Oe.side===aa&&Re.layers.test(st.layers)){const dn=Oe.side;Oe.side=Vn,Oe.needsUpdate=!0,fa(Re,rt,st,Zt,Oe,ve),Oe.side=dn,Oe.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt,Bt,te),w.setClearColor(pt,ut),kt!==void 0&&(st.viewport=kt),w.toneMapping=Kt}function Za(b,q,rt){const st=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Tt=b.length;Y<Tt;Y++){const wt=b[Y],Nt=wt.object,Bt=wt.geometry,te=wt.group;let Kt=wt.material;Kt.allowOverride===!0&&st!==null&&(Kt=st),Nt.layers.test(rt.layers)&&fa(Nt,q,rt,Bt,Kt,te)}}function fa(b,q,rt,st,Y,Tt){b.onBeforeRender(w,q,rt,st,Y,Tt),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(w,q,rt,st,b,Tt),Y.transparent===!0&&Y.side===aa&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,w.renderBufferDirect(rt,q,st,Y,b,Tt),Y.side=Ya,Y.needsUpdate=!0,w.renderBufferDirect(rt,q,st,Y,b,Tt),Y.side=aa):w.renderBufferDirect(rt,q,st,Y,b,Tt),b.onAfterRender(w,q,rt,st,Y,Tt)}function ha(b,q,rt){q.isScene!==!0&&(q=Ne);const st=jt.get(b),Y=g.state.lights,Tt=g.state.shadowsArray,wt=Y.state.version,Nt=dt.getParameters(b,Y.state,Tt,q,rt),Bt=dt.getProgramCacheKey(Nt);let te=st.programs;st.environment=b.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(b.isMeshStandardMaterial?L:Ze).get(b.envMap||st.environment),st.envMapRotation=st.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,te===void 0&&(b.addEventListener("dispose",It),te=new Map,st.programs=te);let Kt=te.get(Bt);if(Kt!==void 0){if(st.currentProgram===Kt&&st.lightsStateVersion===wt)return Ni(b,Nt),Kt}else Nt.uniforms=dt.getUniforms(b),b.onBeforeCompile(Nt,w),Kt=dt.acquireProgram(Nt,Bt),te.set(Bt,Kt),st.uniforms=Nt.uniforms;const kt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),Ni(b,Nt),st.needsLights=tn(b),st.lightsStateVersion=wt,st.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.directionalShadowMap.value=Y.state.directionalShadowMap,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotShadowMap.value=Y.state.spotShadowMap,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMap.value=Y.state.pointShadowMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=Kt,st.uniformsList=null,Kt}function Li(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Pc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Ni(b,q){const rt=jt.get(b);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Ka(b,q,rt,st,Y){q.isScene!==!0&&(q=Ne),ae.resetTextureUnits();const Tt=q.fog,wt=st.isMeshStandardMaterial?q.environment:null,Nt=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ws,Bt=(st.isMeshStandardMaterial?L:Ze).get(st.envMap||wt),te=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Kt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!rt.morphAttributes.position,le=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color;let Xe=qa;st.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const fe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Re=fe!==void 0?fe.length:0,Zt=jt.get(st),Oe=g.state.lights;if(mt===!0&&(Mt===!0||b!==R)){const pn=b===R&&st.id===D;Ht.setState(st,b,pn)}let ve=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Oe.state.version||Zt.outputColorSpace!==Nt||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isBatchedMesh&&Zt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Zt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Zt.instancingMorph===!1&&Y.morphTexture!==null||Zt.envMap!==Bt||st.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ht.numPlanes||Zt.numIntersection!==Ht.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==Kt||Zt.morphTargets!==kt||Zt.morphNormals!==le||Zt.morphColors!==Ae||Zt.toneMapping!==Xe||Zt.morphTargetsCount!==Re)&&(ve=!0):(ve=!0,Zt.__version=st.version);let dn=Zt.currentProgram;ve===!0&&(dn=ha(st,q,Y));let pa=!1,Ve=!1,Pi=!1;const He=dn.getUniforms(),An=Zt.uniforms;if(Gt.useProgram(dn.program)&&(pa=!0,Ve=!0,Pi=!0),st.id!==D&&(D=st.id,Ve=!0),pa||R!==b){Gt.buffers.depth.getReversed()?(At.copy(b.projectionMatrix),XS(At),WS(At),He.setValue(I,"projectionMatrix",At)):He.setValue(I,"projectionMatrix",b.projectionMatrix),He.setValue(I,"viewMatrix",b.matrixWorldInverse);const Mn=He.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,oe.setFromMatrixPosition(b.matrixWorld)),de.logarithmicDepthBuffer&&He.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Ve=!0,Pi=!0)}if(Y.isSkinnedMesh){He.setOptional(I,Y,"bindMatrix"),He.setOptional(I,Y,"bindMatrixInverse");const pn=Y.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(I,"boneTexture",pn.boneTexture,ae))}Y.isBatchedMesh&&(He.setOptional(I,Y,"batchingTexture"),He.setValue(I,"batchingTexture",Y._matricesTexture,ae),He.setOptional(I,Y,"batchingIdTexture"),He.setValue(I,"batchingIdTexture",Y._indirectTexture,ae),He.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&He.setValue(I,"batchingColorTexture",Y._colorsTexture,ae));const sn=rt.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Pt.update(Y,rt,dn),(Ve||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,He.setValue(I,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=Bt,An.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),Ve&&(He.setValue(I,"toneMappingExposure",w.toneMappingExposure),Zt.needsLights&&da(An,Pi),Tt&&st.fog===!0&&lt.refreshFogUniforms(An,Tt),lt.refreshMaterialUniforms(An,st,W,Z,g.state.transmissionRenderTarget[b.id]),Pc.upload(I,Li(Zt),An,ae)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Pc.upload(I,Li(Zt),An,ae),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(I,"center",Y.center),He.setValue(I,"modelViewMatrix",Y.modelViewMatrix),He.setValue(I,"normalMatrix",Y.normalMatrix),He.setValue(I,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let Mn=0,xi=pn.length;Mn<xi;Mn++){const zi=pn[Mn];k.update(zi,dn),k.bind(zi,dn)}}return dn}function da(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function tn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,q,rt){const st=jt.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),jt.get(b.texture).__webglTexture=q,jt.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const rt=jt.get(b);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const jo=I.createFramebuffer();this.setRenderTarget=function(b,q=0,rt=0){j=b,V=q,F=rt;let st=!0,Y=null,Tt=!1,wt=!1;if(b){const Bt=jt.get(b);if(Bt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(b);else if(Bt.__hasExternalTextures)ae.rebindTextures(b,jt.get(b.texture).__webglTexture,jt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const kt=b.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&jt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(b)}}const te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const Kt=jt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[q])?Y=Kt[q][rt]:Y=Kt[q],Tt=!0):b.samples>0&&ae.useMultisampledRTT(b)===!1?Y=jt.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?Y=Kt[rt]:Y=Kt,B.copy(b.viewport),at.copy(b.scissor),nt=b.scissorTest}else B.copy($).multiplyScalar(W).floor(),at.copy(vt).multiplyScalar(W).floor(),nt=St;if(rt!==0&&(Y=jo),Gt.bindFramebuffer(I.FRAMEBUFFER,Y)&&st&&Gt.drawBuffers(b,Y),Gt.viewport(B),Gt.scissor(at),Gt.setScissorTest(nt),Tt){const Bt=jt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Bt.__webglTexture,rt)}else if(wt){const Bt=jt.get(b.texture),te=q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,rt,te)}else if(b!==null&&rt!==0){const Bt=jt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(b,q,rt,st,Y,Tt,wt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=jt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){Gt.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const te=b.textures[Nt],Kt=te.format,kt=te.type;if(!de.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-st&&rt>=0&&rt<=b.height-Y&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(q,rt,st,Y,Rt.convert(Kt),Rt.convert(kt),Tt))}finally{const te=j!==null?jt.get(j).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(b,q,rt,st,Y,Tt,wt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=jt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt)if(q>=0&&q<=b.width-st&&rt>=0&&rt<=b.height-Y){Gt.bindFramebuffer(I.FRAMEBUFFER,Bt);const te=b.textures[Nt],Kt=te.format,kt=te.type;if(!de.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(q,rt,st,Y,Rt.convert(Kt),Rt.convert(kt),0);const Ae=j!==null?jt.get(j).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Ae);const Xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await kS(I,Xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(le),I.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,rt=0){const st=Math.pow(2,-rt),Y=Math.floor(b.image.width*st),Tt=Math.floor(b.image.height*st),wt=q!==null?q.x:0,Nt=q!==null?q.y:0;ae.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,wt,Nt,Y,Tt),Gt.unbindTexture()};const Zo=I.createFramebuffer(),Oi=I.createFramebuffer();this.copyTextureToTexture=function(b,q,rt=null,st=null,Y=0,Tt=null){Tt===null&&(Y!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let wt,Nt,Bt,te,Kt,kt,le,Ae,Xe;const fe=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if(rt!==null)wt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,Kt=rt.min.y,kt=rt.isBox3?rt.min.z:0;else{const sn=Math.pow(2,-Y);wt=Math.floor(fe.width*sn),Nt=Math.floor(fe.height*sn),b.isDataArrayTexture?Bt=fe.depth:b.isData3DTexture?Bt=Math.floor(fe.depth*sn):Bt=1,te=0,Kt=0,kt=0}st!==null?(le=st.x,Ae=st.y,Xe=st.z):(le=0,Ae=0,Xe=0);const Re=Rt.convert(q.format),Zt=Rt.convert(q.type);let Oe;q.isData3DTexture?(ae.setTexture3D(q,0),Oe=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),Oe=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),Oe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const ve=I.getParameter(I.UNPACK_ROW_LENGTH),dn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pa=I.getParameter(I.UNPACK_SKIP_PIXELS),Ve=I.getParameter(I.UNPACK_SKIP_ROWS),Pi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const He=b.isDataArrayTexture||b.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const sn=jt.get(b),pn=jt.get(q),Mn=jt.get(sn.__renderTarget),xi=jt.get(pn.__renderTarget);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let zi=0;zi<Bt;zi++)He&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(b).__webglTexture,Y,kt+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(q).__webglTexture,Tt,Xe+zi)),I.blitFramebuffer(te,Kt,wt,Nt,le,Ae,wt,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||jt.has(b)){const sn=jt.get(b),pn=jt.get(q);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Zo),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Oi);for(let Mn=0;Mn<Bt;Mn++)He?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,Y,kt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,Y),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Xe+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,Tt),Y!==0?I.blitFramebuffer(te,Kt,wt,Nt,le,Ae,wt,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(Oe,Tt,le,Ae,Xe+Mn,te,Kt,wt,Nt):I.copyTexSubImage2D(Oe,Tt,le,Ae,te,Kt,wt,Nt);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Oe,Tt,le,Ae,Xe,wt,Nt,Bt,Re,Zt,fe.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,Tt,le,Ae,Xe,wt,Nt,Bt,Re,fe.data):I.texSubImage3D(Oe,Tt,le,Ae,Xe,wt,Nt,Bt,Re,Zt,fe):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,le,Ae,wt,Nt,Re,Zt,fe.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,le,Ae,fe.width,fe.height,Re,fe.data):I.texSubImage2D(I.TEXTURE_2D,Tt,le,Ae,wt,Nt,Re,Zt,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pa),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pi),Tt===0&&q.generateMipmaps&&I.generateMipmap(Oe),Gt.unbindTexture()},this.copyTextureToTexture3D=function(b,q,rt=null,st=null,Y=0){return Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,q,rt,st,Y)},this.initRenderTarget=function(b){jt.get(b).__webglFramebuffer===void 0&&ae.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ae.setTextureCube(b,0):b.isData3DTexture?ae.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ae.setTexture2DArray(b,0):ae.setTexture2D(b,0),Gt.unbindTexture()},this.resetState=function(){V=0,F=0,j=null,Gt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const lA=`precision highp float;

// Custom uniforms
uniform sampler2D positionTexture; // Ping-pong texture containing current positions
uniform float time;
uniform vec2 textureSize; // Size of the position texture
uniform float pointSize;

// Custom attributes
attribute vec2 textureIndex; 

varying vec3 vPosition;

void main() {
    // Sample position from texture
    vec3 worldPosition = texture2D(positionTexture, textureIndex).xyz;
    
    // Transform to clip space
    vec4 clipPosition = projectionMatrix * modelViewMatrix * vec4(worldPosition, 1.0);
    
    // Perform perspective division to get normalized device coordinates (-1 to 1)
    vec2 ndc = clipPosition.xy / clipPosition.w;

    // Smooth wrapping in NDC space
    ndc = mod(ndc + 1.0, 2.0) - 1.0;

    // Back to clip space
    clipPosition.xy = ndc * clipPosition.w;

    vPosition = worldPosition;
    gl_Position = clipPosition;
    gl_PointSize = pointSize;
}`,cA=`precision highp float;

varying vec3 vPosition;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`,uA=`precision highp float;

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`,fA=`precision highp float;

uniform sampler2D positionTexture; // Current particle positions
uniform sampler2D originalPositionTexture; // Original sphere positions
uniform float time;
uniform float deltaTime;
uniform int animationMode; // 0 = flowfield, 1 = converge, 2 = rotate
uniform vec2 dimensions;
uniform float flowSpeed;
uniform float noiseScale;
uniform float convergenceProgress;
uniform float flowfieldStartTime;

varying vec2 vUv;

/*
    Hash and Noise functions originally made by Inigo Quilez https://iquilezles.org/
*/
float hash(float n) {
    return fract(sin(n) * 43758.5453);
}

float noise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);

    f = f * f * (3.0 - 2.0 * f);

    float n = p.x + p.y * 57.0 + 113.0 * p.z;

    float res = mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
                        mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
                    mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                        mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
    return res;
}

vec3 rotatePosition(vec3 pos) {
    float rotationSpeed = 0.05;
    float angle = time * rotationSpeed;
    
    vec3 rotatedPos = pos;
    rotatedPos.x = pos.x * cos(angle) - pos.z * sin(angle);
    rotatedPos.z = pos.x * sin(angle) + pos.z * cos(angle);
    
    return rotatedPos;
}

vec3 updateFlowfieldPosition(vec3 currentPos, vec3 originalPos) {
  
    
    // Sample noise at current position
    vec3 noisePos = currentPos * noiseScale;
    
    // Get flowfield angle
    float angle = noise(noisePos) * 6.28318530718;
    
    
    // Calculate velocity
    vec2 velocity = vec2(
        flowSpeed * (cos(angle)),
        flowSpeed * (sin(angle))
    );
    
    // Update position using deltaTime
    vec3 newPos = currentPos + vec3(velocity * deltaTime, 0.0);
    
    return newPos;
}

void main() {
    vec3 currentPos = texture2D(positionTexture, vUv).xyz;
    vec3 originalPos = texture2D(originalPositionTexture, vUv).xyz;
    
    vec3 newPosition = currentPos;
    
    if (animationMode == 2) {
        // Rotating sphere
        newPosition = rotatePosition(originalPos);
    } else if (animationMode == 1) {
        // Converging
        vec3 flowfieldPos = updateFlowfieldPosition(currentPos, originalPos);
        newPosition = mix(flowfieldPos, originalPos, convergenceProgress);
    } else {
        // Flowfield
        newPosition = updateFlowfieldPosition(currentPos, originalPos);
    }
    
    gl_FragColor = vec4(newPosition, 1.0);
}
`;let bi,Ac,Ch,Gn,Rc,_s,Cc,No,na,xr,vs,xs,Ss,_i,wh,cv,Ms=0;const hA=500,dA=.3,pA=2.1;function mA(o,e){const i=e.current;switch(o){case"home":i.animationMode===0?(i.animationMode=1,i.targetMode=2,i.convergenceStartTime=performance.now()):(i.animationMode=2,i.targetMode=2);break;case"about":case"projects":case"contact":i.animationMode!=0&&(i.animationMode=0,i.targetMode=0);break}}function gA({activeButtonId:o}){const e=ka.useRef(null),i=ka.useRef({animationMode:2,targetMode:2,convergenceStartTime:0}),r=ka.useRef({width:0,height:0}),l=()=>window.innerHeight>window.innerWidth,u=()=>({width:Math.min(window.innerWidth,document.documentElement.clientWidth),height:Math.min(window.innerHeight,document.documentElement.clientHeight)});return ka.useEffect(()=>{const h=e.current,{width:d,height:m}=u();Gn=new oA({canvas:h,antialias:!0}),Gn.setSize(d,m),Gn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ch=new TM,Ac=new P_,Ac.background=new Ce(328965);let p=l()?80:70;bi=new ci(p,d/m,.1,100),bi.position.z=5;let _=p/360*2*Math.PI,v=2*Math.tan(_/2)*bi.position.z,x=v*bi.aspect;r.current={width:x,height:v};const y=2,C=new Rd(y,222,222).attributes.position.array,M=C.length/3,g=Math.ceil(Math.sqrt(M)),z=new Float32Array(g*g*4);for(let B=0;B<M;B++){const at=B*4,nt=B*3;z[at]=C[nt],z[at+1]=C[nt+1],z[at+2]=C[nt+2],z[at+3]=1}const N={format:bn,type:Nn,minFilter:cn,magFilter:cn,wrapS:ra,wrapT:ra};na=new Sh(z,g,g,bn,Nn),na.needsUpdate=!0,Object.assign(na,N),xr=new Sh(z,g,g,bn,Nn),xr.needsUpdate=!0,Object.assign(xr,N),vs=new Sh(z,g,g,bn,Nn),vs.needsUpdate=!0,Object.assign(vs,N),xs=new ca(g,g,{format:bn,type:Nn,minFilter:cn,magFilter:cn}),Ss=new ca(g,g,{format:bn,type:Nn,minFilter:cn,magFilter:cn}),Gn.setRenderTarget(xs),Gn.clear(),Gn.setRenderTarget(Ss),Gn.clear(),Gn.setRenderTarget(null),_s=new Ui;const w=new Float32Array(M*3),H=new Float32Array(M*2);for(let B=0;B<M;B++){const at=B*3,nt=B*2;w[at]=0,w[at+1]=0,w[at+2]=0;const pt=B%g/g,ut=Math.floor(B/g)/g;H[nt]=pt,H[nt+1]=ut}_s.setAttribute("position",new ui(w,3)),_s.setAttribute("textureIndex",new ui(H,2));const V={positionTexture:{value:na},originalPositionTexture:{value:vs},time:{value:0},deltaTime:{value:0},animationMode:{value:i.current.animationMode},dimensions:{value:new we(x,v)},flowSpeed:{value:dA},noiseScale:{value:pA},convergenceProgress:{value:1}};_i=new Di({uniforms:V,vertexShader:uA,fragmentShader:fA}),wh=new P_,cv=new Pv(-1,1,1,-1,0,1);const F=new Wo(2,2),j=new Ci(F,_i);wh.add(j),No={positionTexture:{value:na},time:{value:0},textureSize:{value:new we(g,g)},pointSize:{value:1}},Cc=new Di({uniforms:No,vertexShader:lA,fragmentShader:cA}),Rc=new SM(_s,Cc),Rc.rotateX(Math.PI/4),Rc.rotateZ(Math.PI/5),Ac.add(Rc);const D=()=>{requestAnimationFrame(D);const B=Ch.getDelta();Ch.getElapsedTime();const at=i.current;if(at.animationMode===1&&at.targetMode===2){const Z=performance.now()-at.convergenceStartTime,W=Math.min(Z/hA,1);_i.uniforms.convergenceProgress.value=W,W>=1&&(at.animationMode=2)}const nt=performance.now()*.001;_i.uniforms.time.value=nt,_i.uniforms.deltaTime.value=B,_i.uniforms.animationMode.value=at.animationMode;const pt=Ms===0?na:xr,ut=Ms===0?Ss:xs;_i.uniforms.positionTexture.value=pt,Gn.setRenderTarget(ut),Gn.render(wh,cv);const P=Ms===0?Ss.texture:xs.texture;No.positionTexture.value=P,Ms===0?(xr=P,Ms=1):(na=P,Ms=0),Gn.setRenderTarget(null),Gn.render(Ac,bi)};D();const R=()=>{const{width:B,height:at}=u();bi.aspect=B/at,bi.updateProjectionMatrix(),Gn.setSize(B,at);const nt=l()?80:70;bi.fov=nt;let pt=nt/360*2*Math.PI;v=2*Math.tan(pt/2)*bi.position.z,x=v*bi.aspect,r.current={width:x,height:v},_i&&_i.uniforms.dimensions.value.set(x,v),No&&(No.pointSize.value=l()?1.5:1)};return window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R),Gn.dispose(),_s&&_s.dispose(),Cc&&Cc.dispose(),_i&&_i.dispose(),xs&&xs.dispose(),Ss&&Ss.dispose(),na&&na.dispose(),xr&&xr.dispose(),vs&&vs.dispose()}},[]),ka.useEffect(()=>{o&&mA(o,i)},[o]),Wt.jsx("canvas",{ref:e})}const wc="/github.svg",_A="/simple-firefox.svg";function vA(){const o=[{id:"card1",title:"Full-Stack Web Application: Guess The Song",content:"Leveraging a React frontend and a simple Express server backend, this web application allows multiple players to participate in a party game, where they compete to see whose song knowledge is the best. It uses the Spotify API so that the host can input songs or even playlist directly from Spotify.",logos:[wc],links:["https://github.com/Alxruc/guess-the-song"]},{id:"card2",title:"3D Website: Portfolio",content:"This very website uses a custom GPU compute shader inside Three.js to render the background particle system efficiently. The main job of the shader being the flowing effect you are currently seeing.",logos:[wc],links:["https://github.com/Alxruc/portfolio-website"]},{id:"card3",title:"Bachelorthesis: Natural Neighbor Splines",content:"The testing of a novel interpolation method, combining the idea of B-splines with the Natural Neighbor interpolation to potentially generate smooth surfaces. The project was written in C++ using the geometry library CGAL for structures like the Voronoi diagram and Delaunay triangulation",logos:[],links:[]},{id:"card4",title:"Game: 3-PARTITION Tetris",content:'A tetris clone written in C++ using the graphics library SDL2 to visualize the idea and proof of the hardness of the Tetris clone by turning 3-partition problems into Tetris levels. Inspired by the paper "Tetris is Hard, Even to Approximate" by Breukelaar et al.',logos:[wc],links:["https://github.com/Alxruc/3partition-tetris"]},{id:"card5",title:"Browser Extension: Japanese Word of the Day",content:"A simple browser extension designed to aid language learning, by giving the user a random Japanese word every day along with its reading and dictionary entry.",logos:[wc,_A],links:["https://github.com/Alxruc/japanese-wotd","https://addons.mozilla.org/en-US/firefox/addon/japanese-wotd/"]}],[e,i]=ka.useState(0),r=()=>{i(h=>h===0?o.length-1:h-1)},l=()=>{i(h=>h===o.length-1?0:h+1)},u=h=>{if(h===e)return"visible-card";const d=(e-1+o.length)%o.length;return h===d?"hidden-card-left":"hidden-card-right"};return Wt.jsxs(Wt.Fragment,{children:[Wt.jsx("div",{className:"projects-carousel",children:o.map((h,d)=>Wt.jsxs("div",{id:h.id,className:`project-card ${u(d)}`,children:[Wt.jsx("h3",{children:h.title}),Wt.jsx("p",{children:h.content}),h.links&&h.links.length>0&&h.logos&&h.logos.length===h.links.length&&Wt.jsx("div",{className:"project-links",children:h.links.map((m,p)=>Wt.jsx("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:Wt.jsx("img",{src:h.logos[p],alt:"project logo"})},p))})]},h.id))}),Wt.jsxs("div",{className:"project-navigation",children:[Wt.jsx("button",{className:"previous",onClick:r,children:"<"}),Wt.jsx("button",{className:"next",onClick:l,children:">"})]})]})}function xA(){const[o,e]=ka.useState("home"),i=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],r=l=>{e(l)};return Wt.jsxs("div",{children:[Wt.jsxs("div",{className:`name-display ${o==="home"?"visible":"hidden"}`,children:[Wt.jsxs("div",{className:"firstname",children:["Alexander Ruchti",Wt.jsx("div",{className:"gradient-line"})]}),Wt.jsxs("div",{className:"lastname",children:["Software Engineering",Wt.jsx("div",{className:"gradient-line-back"})]})]}),Wt.jsxs("div",{className:`two-column-grid ${o==="about"?"visible":"hidden"}`,children:[Wt.jsxs("div",{className:"card",children:[Wt.jsx("h2",{children:" Education "}),Wt.jsxs("div",{className:"card-content",children:[Wt.jsxs("div",{className:"item",children:["Bachelor of Science in Computer Science, Technical University Berlin ",Wt.jsx("em",{children:"(Completed)"})]}),Wt.jsxs("div",{className:"item",children:["Master of Science in Computer Science, Technical University Berlin ",Wt.jsx("em",{children:"(In Progress)"})]})]})]}),Wt.jsxs("div",{className:"card",children:[Wt.jsx("h2",{children:" Technologies "}),Wt.jsxs("div",{className:"card-content",children:[Wt.jsx("span",{className:"list-title",children:"Languages"}),Wt.jsxs("div",{className:"item",children:[Wt.jsxs("div",{children:[Wt.jsx("strong",{children:"Primary:"})," C++, JavaScript, Python"]}),Wt.jsxs("div",{children:[Wt.jsx("strong",{children:"Secondary:"})," Java, C, C#"]})]}),Wt.jsx("span",{className:"list-title",children:"Frameworks & Libraries"}),Wt.jsxs("div",{className:"item",children:[Wt.jsxs("div",{children:[Wt.jsx("strong",{children:"JavaScript:"})," React, Node.js, ThreeJS"]}),Wt.jsxs("div",{children:[Wt.jsx("strong",{children:"C++:"})," CGAL, SDL2, Eigen"]}),Wt.jsxs("div",{children:[Wt.jsx("strong",{children:"Python:"})," Pandas, PyTorch, SciPy, Numpy"]})]}),Wt.jsx("span",{className:"list-title",children:"Tools & Platforms"}),Wt.jsx("div",{className:"item",children:"Git, Docker, Build Managers (i.e. CMake)"})]})]})]}),Wt.jsx("div",{className:`projects-section ${o==="projects"?"visible":"hidden"}`,children:Wt.jsx(vA,{})}),Wt.jsx("div",{className:`contact-section ${o==="contact"?"visible":"hidden"}`,children:Wt.jsxs("div",{className:"contact-card",children:[Wt.jsx("h1",{children:"Contact Me"}),Wt.jsx("h2",{className:"item",children:"Email: alex@ruchti.dev"})]})}),Wt.jsx(gA,{activeButtonId:o}),Wt.jsx("div",{className:"bottom-navigation",children:i.map(l=>Wt.jsx("button",{className:"nav-button",onClick:()=>r(l.id),children:l.label},l.id))})]})}Jx.createRoot(document.getElementById("root")).render(Wt.jsx(ka.StrictMode,{children:Wt.jsx(xA,{})}));
