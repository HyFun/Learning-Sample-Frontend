!function(){var t={4963:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},3328:function(t){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},7007:function(t,n,r){var e=r(5286);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},50:function(t,n,r){var e=r(741),o=r(9797),i=r(508),c=r(875),u=r(6886);t.exports=function(t,n){var r=1==t,f=2==t,s=3==t,a=4==t,l=6==t,p=5==t||l,v=n||u;return function(n,u,h){for(var d,y,x=i(n),m=o(x),_=e(u,h,3),g=c(m.length),w=0,b=r?v(n,g):f?v(n,0):void 0;g>w;w++)if((p||w in m)&&(y=_(d=m[w],w,x),t))if(r)b[w]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:b.push(d)}else if(a)return!1;return l?-1:s||a?a:b}}},2736:function(t,n,r){var e=r(5286),o=r(4302),i=r(6314)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},6886:function(t,n,r){var e=r(2736);t.exports=function(t,n){return new(e(t))(n)}},1488:function(t,n,r){var e=r(2032),o=r(6314)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},2032:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},5645:function(t){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},741:function(t,n,r){var e=r(4963);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},1355:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},7057:function(t,n,r){t.exports=!r(4253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2457:function(t,n,r){var e=r(5286),o=r(3816).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},2985:function(t,n,r){var e=r(3816),o=r(5645),i=r(7728),c=r(7234),u=r(741),f=function(t,n,r){var s,a,l,p,v=t&f.F,h=t&f.G,d=t&f.S,y=t&f.P,x=t&f.B,m=h?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,_=h?o:o[n]||(o[n]={}),g=_.prototype||(_.prototype={});for(s in h&&(r=n),r)l=((a=!v&&m&&void 0!==m[s])?m:r)[s],p=x&&a?u(l,e):y&&"function"==typeof l?u(Function.call,l):l,m&&c(m,s,l,t&f.U),_[s]!=l&&i(_,s,p),y&&g[s]!=l&&(g[s]=l)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},4253:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},3531:function(t,n,r){var e=r(741),o=r(8851),i=r(6555),c=r(7007),u=r(875),f=r(9002),s={},a={},l=t.exports=function(t,n,r,l,p){var v,h,d,y,x=p?function(){return t}:f(t),m=e(r,l,n?2:1),_=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(i(x)){for(v=u(t.length);v>_;_++)if((y=n?m(c(h=t[_])[0],h[1]):m(t[_]))===s||y===a)return y}else for(d=x.call(t);!(h=d.next()).done;)if((y=o(d,m,h.value,n))===s||y===a)return y};l.BREAK=s,l.RETURN=a},18:function(t,n,r){t.exports=r(3825)("native-function-to-string",Function.toString)},3816:function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},9181:function(t){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},7728:function(t,n,r){var e=r(9275),o=r(681);t.exports=r(7057)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},639:function(t,n,r){var e=r(3816).document;t.exports=e&&e.documentElement},1734:function(t,n,r){t.exports=!r(7057)&&!r(4253)((function(){return 7!=Object.defineProperty(r(2457)("div"),"a",{get:function(){return 7}}).a}))},7242:function(t){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},9797:function(t,n,r){var e=r(2032);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},6555:function(t,n,r){var e=r(2803),o=r(6314)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},4302:function(t,n,r){var e=r(2032);t.exports=Array.isArray||function(t){return"Array"==e(t)}},5286:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8851:function(t,n,r){var e=r(7007);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},7462:function(t,n,r){var e=r(6314)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],c=i[e]();c.next=function(){return{done:r=!0}},i[e]=function(){return c},t(i)}catch(t){}return r}},2803:function(t){t.exports={}},4461:function(t){t.exports=!1},4351:function(t,n,r){var e=r(3816),o=r(4193).set,i=e.MutationObserver||e.WebKitMutationObserver,c=e.process,u=e.Promise,f="process"==r(2032)(c);t.exports=function(){var t,n,r,s=function(){var e,o;for(f&&(e=c.domain)&&e.exit();t;){o=t.fn,t=t.next;try{o()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(f)r=function(){c.nextTick(s)};else if(!i||e.navigator&&e.navigator.standalone)if(u&&u.resolve){var a=u.resolve(void 0);r=function(){a.then(s)}}else r=function(){o.call(e,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),r=function(){p.data=l=!l}}return function(e){var o={fn:e,next:void 0};n&&(n.next=o),t||(t=o,r()),n=o}}},3499:function(t,n,r){"use strict";var e=r(4963);function o(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)}t.exports.f=function(t){return new o(t)}},9275:function(t,n,r){var e=r(7007),o=r(1734),i=r(1689),c=Object.defineProperty;n.f=r(7057)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},188:function(t){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},94:function(t,n,r){var e=r(7007),o=r(5286),i=r(3499);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},681:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},4408:function(t,n,r){var e=r(7234);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},7234:function(t,n,r){var e=r(3816),o=r(7728),i=r(9181),c=r(3953)("src"),u=r(18),f="toString",s=(""+u).split(f);r(5645).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,r,u){var f="function"==typeof r;f&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(f&&(i(r,c)||o(r,c,t[n]?""+t[n]:s.join(String(n)))),t===e?t[n]=r:u?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,f,(function(){return"function"==typeof this&&this[c]||u.call(this)}))},2974:function(t,n,r){"use strict";var e=r(3816),o=r(9275),i=r(7057),c=r(6314)("species");t.exports=function(t){var n=e[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},2943:function(t,n,r){var e=r(9275).f,o=r(9181),i=r(6314)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},3825:function(t,n,r){var e=r(5645),o=r(3816),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(4461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},8364:function(t,n,r){var e=r(7007),o=r(4963),i=r(6314)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},7717:function(t,n,r){"use strict";var e=r(4253);t.exports=function(t,n){return!!t&&e((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},4193:function(t,n,r){var e,o,i,c=r(741),u=r(7242),f=r(639),s=r(2457),a=r(3816),l=a.process,p=a.setImmediate,v=a.clearImmediate,h=a.MessageChannel,d=a.Dispatch,y=0,x={},m=function(){var t=+this;if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},_=function(t){m.call(t.data)};p&&v||(p=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return x[++y]=function(){u("function"==typeof t?t:Function(t),n)},e(y),y},v=function(t){delete x[t]},"process"==r(2032)(l)?e=function(t){l.nextTick(c(m,t,1))}:d&&d.now?e=function(t){d.now(c(m,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=_,e=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(e=function(t){a.postMessage(t+"","*")},a.addEventListener("message",_,!1)):e="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),m.call(t)}}:function(t){setTimeout(c(m,t,1),0)}),t.exports={set:p,clear:v}},1467:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},875:function(t,n,r){var e=r(1467),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},508:function(t,n,r){var e=r(1355);t.exports=function(t){return Object(e(t))}},1689:function(t,n,r){var e=r(5286);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3953:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},575:function(t,n,r){var e=r(3816).navigator;t.exports=e&&e.userAgent||""},6314:function(t,n,r){var e=r(3825)("wks"),o=r(3953),i=r(3816).Symbol,c="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=e},9002:function(t,n,r){var e=r(1488),o=r(6314)("iterator"),i=r(2803);t.exports=r(5645).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},9371:function(t,n,r){"use strict";var e=r(2985),o=r(50)(1);e(e.P+e.F*!r(7717)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},6253:function(t,n,r){"use strict";var e=r(1488),o={};o[r(6314)("toStringTag")]="z",o+""!="[object z]"&&r(7234)(Object.prototype,"toString",(function(){return"[object "+e(this)+"]"}),!0)},851:function(t,n,r){"use strict";var e,o,i,c,u=r(4461),f=r(3816),s=r(741),a=r(1488),l=r(2985),p=r(5286),v=r(4963),h=r(3328),d=r(3531),y=r(8364),x=r(4193).set,m=r(4351)(),_=r(3499),g=r(188),w=r(575),b=r(94),j="Promise",S=f.TypeError,P=f.process,E=P&&P.versions,O=E&&E.v8||"",T=f.Promise,M="process"==a(P),A=function(){},F=o=_.f,k=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[r(6314)("species")]=function(t){t(A,A)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==O.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var r=t._c;m((function(){for(var e=t._v,o=1==t._s,i=0,c=function(n){var r,i,c,u=o?n.ok:n.fail,f=n.resolve,s=n.reject,a=n.domain;try{u?(o||(2==t._h&&z(t),t._h=1),!0===u?r=e:(a&&a.enter(),r=u(e),a&&(a.exit(),c=!0)),r===n.promise?s(S("Promise-chain cycle")):(i=C(r))?i.call(r,f,s):f(r)):s(e)}catch(t){a&&!c&&a.exit(),s(t)}};r.length>i;)c(r[i++]);t._c=[],t._n=!1,n&&!t._h&&N(t)}))}},N=function(t){x.call(f,(function(){var n,r,e,o=t._v,i=U(t);if(i&&(n=g((function(){M?P.emit("unhandledRejection",o,t):(r=f.onunhandledrejection)?r({promise:t,reason:o}):(e=f.console)&&e.error&&e.error("Unhandled promise rejection",o)})),t._h=M||U(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},U=function(t){return 1!==t._h&&0===(t._a||t._c).length},z=function(t){x.call(f,(function(){var n;M?P.emit("rejectionHandled",t):(n=f.onrejectionhandled)&&n({promise:t,reason:t._v})}))},B=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},I=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw S("Promise can't be resolved itself");(n=C(t))?m((function(){var e={_w:r,_d:!1};try{n.call(t,s(I,e,1),s(B,e,1))}catch(t){B.call(e,t)}})):(r._v=t,r._s=1,R(r,!1))}catch(t){B.call({_w:r,_d:!1},t)}}};k||(T=function(t){h(this,T,j,"_h"),v(t),e.call(this);try{t(s(I,this,1),s(B,this,1))}catch(t){B.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(4408)(T.prototype,{then:function(t,n){var r=F(y(this,T));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=M?P.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new e;this.promise=t,this.resolve=s(I,t,1),this.reject=s(B,t,1)},_.f=F=function(t){return t===T||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!k,{Promise:T}),r(2943)(T,j),r(2974)(j),c=r(5645).Promise,l(l.S+l.F*!k,j,{reject:function(t){var n=F(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!k),j,{resolve:function(t){return b(u&&this===c?T:this,t)}}),l(l.S+l.F*!(k&&r(7462)((function(t){T.all(t).catch(A)}))),j,{all:function(t){var n=this,r=F(n),e=r.resolve,o=r.reject,i=g((function(){var r=[],i=0,c=1;d(t,!1,(function(t){var u=i++,f=!1;r.push(void 0),c++,n.resolve(t).then((function(t){f||(f=!0,r[u]=t,--c||e(r))}),o)})),--c||e(r)}));return i.e&&o(i.v),r.promise},race:function(t){var n=this,r=F(n),e=r.reject,o=g((function(){d(t,!1,(function(t){n.resolve(t).then(r.resolve,e)}))}));return o.e&&e(o.v),r.promise}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}!function(){"use strict";r(6253),r(851),r(9371);console.log(1+2),new Promise((function(t){setTimeout((function(){t("promise")}),1e3)})).then((function(t){console.log(t)})),console.log([1,2,3,4,5].map((function(t){return 2*t})))}()}();