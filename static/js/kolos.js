/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */(function(e,t){"use strict";function n(e){var t=e.length,n=st.type(e);return st.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=Tt[e]={};return st.each(e.match(lt)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(st.acceptData(e)){var o,a,s=st.expando,u="string"==typeof n,l=e.nodeType,c=l?st.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=K.pop()||st.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=st.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=st.extend(c[f],n):c[f].data=st.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[st.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[st.camelCase(n)])):a=o,a}}function o(e,t,n){if(st.acceptData(e)){var r,i,o,a=e.nodeType,u=a?st.cache:e,l=a?e[st.expando]:st.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){st.isArray(t)?t=t.concat(st.map(t,st.camelCase)):t in r?t=[t]:(t=st.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;o>i;i++)delete r[t[i]];if(!(n?s:st.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?st.cleanData([e],!0):st.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Nt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:wt.test(r)?st.parseJSON(r):r}catch(o){}st.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!st.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,st.isFunction(t))return st.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return st.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=st.grep(e,function(e){return 1===e.nodeType});if(Wt.test(t))return st.filter(t,r,!n);t=st.filter(t,r)}return st.grep(e,function(e){return st.inArray(e,t)>=0===n})}function p(e){var t=zt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=nn.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)st._data(n,"globalEval",!t||st._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&st.hasData(e)){var n,r,i,o=st._data(e),a=st._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)st.event.add(t,n,s[n][r])}a.data&&(a.data=st.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!st.support.noCloneEvent&&t[st.expando]){r=st._data(t);for(i in r.events)st.removeEvent(t,i,r.handle);t.removeAttribute(st.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),st.support.html5Clone&&e.innerHTML&&!st.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Zt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=e.getElementsByTagName!==t?e.getElementsByTagName(n||"*"):e.querySelectorAll!==t?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||st.nodeName(i,n)?a.push(i):st.merge(a,b(i,n));return n===t||n&&st.nodeName(e,n)?st.merge([e],a):a}function x(e){Zt.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Nn.length;i--;)if(t=Nn[i]+n,t in e)return t;return r}function w(e,t){return e=t||e,"none"===st.css(e,"display")||!st.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;o>i;i++)n=e[i],n.style&&(r[i]=st._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&w(n)&&(r[i]=st._data(n,"olddisplay",S(n.nodeName)))):r[i]||w(n)||st._data(n,"olddisplay",st.css(n,"display")));for(i=0;o>i;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=mn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=st.css(e,n+wn[o],!0,i)),r?("content"===n&&(a-=st.css(e,"padding"+wn[o],!0,i)),"margin"!==n&&(a-=st.css(e,"border"+wn[o]+"Width",!0,i))):(a+=st.css(e,"padding"+wn[o],!0,i),"padding"!==n&&(a+=st.css(e,"border"+wn[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ln(e),a=st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=un(e,t,o),(0>i||null==i)&&(i=e.style[t]),yn.test(i))return i;r=a&&(st.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=V,n=bn[e];return n||(n=A(e,t),"none"!==n&&n||(cn=(cn||st("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),cn.detach()),bn[e]=n),n}function A(e,t){var n=st(t.createElement(e)).appendTo(t.body),r=st.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(st.isArray(t))st.each(t,function(t,i){n||kn.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==st.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(lt)||[];if(st.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(u){var l;return a[u]=!0,st.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===$n;return o(n.dataTypes[0])||!a["*"]&&o("*")}function H(e,n){var r,i,o=st.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&st.extend(!0,e,i),e}function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(n=a[l+" "+i]||a["* "+i],!n)for(r in a)if(o=r.split(" "),o[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Qn=t}),Qn=st.now()}function B(e,t){st.each(t,function(t,n){for(var r=(rr[t]||[]).concat(rr["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=nr.length,s=st.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qn||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:st.extend({},t),opts:st.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qn||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=st.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);a>o;o++)if(r=nr[o].call(l,e,c,l.opts))return r;return B(l,c),st.isFunction(l.opts.start)&&l.opts.start.call(e,l),st.fx.timer(st.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(n in e)if(r=st.camelCase(n),i=t[r],o=e[n],st.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=st.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&w(e);n.queue||(c=st._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,st.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===st.css(e,"display")&&"none"===st.css(e,"float")&&(st.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",st.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Zn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=st._data(e,"fxshow")||st._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?st(e).show():p.done(function(){st(e).hide()}),p.done(function(){var t;st._removeData(e,"fxshow");for(t in h)st.style(e,t,h[t])});for(r=0;a>r;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||st.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function $(e,t,n,r,i){return new $.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=wn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return st.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var X,U,V=e.document,Y=e.location,J=e.jQuery,G=e.$,Q={},K=[],Z="1.9.0",et=K.concat,tt=K.push,nt=K.slice,rt=K.indexOf,it=Q.toString,ot=Q.hasOwnProperty,at=Z.trim,st=function(e,t){return new st.fn.init(e,t,X)},ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=/\S+/g,ct=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ft=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^[\],:{}\s]*$/,ht=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,mt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,yt=/^-ms-/,vt=/-([\da-z])/gi,bt=function(e,t){return t.toUpperCase()},xt=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",xt,!1),st.ready()):"complete"===V.readyState&&(V.detachEvent("onreadystatechange",xt),st.ready())};st.fn=st.prototype={jquery:Z,constructor:st,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ft.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof st?n[0]:n,st.merge(this,st.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),pt.test(i[1])&&st.isPlainObject(n))for(i in n)st.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=V.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):st.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),st.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return nt.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=st.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return st.each(this,e,t)},ready:function(e){return st.ready.promise().done(e),this},slice:function(){return this.pushStack(nt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(st.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:tt,sort:[].sort,splice:[].splice},st.fn.init.prototype=st.fn,st.extend=st.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||st.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(st.isPlainObject(i)||(o=st.isArray(i)))?(o?(o=!1,a=r&&st.isArray(r)?r:[]):a=r&&st.isPlainObject(r)?r:{},s[n]=st.extend(c,a,i)):i!==t&&(s[n]=i));return s},st.extend({noConflict:function(t){return e.$===st&&(e.$=G),t&&e.jQuery===st&&(e.jQuery=J),st},isReady:!1,readyWait:1,holdReady:function(e){e?st.readyWait++:st.ready(!0)},ready:function(e){if(e===!0?!--st.readyWait:!st.isReady){if(!V.body)return setTimeout(st.ready);st.isReady=!0,e!==!0&&--st.readyWait>0||(U.resolveWith(V,[st]),st.fn.trigger&&st(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===st.type(e)},isArray:Array.isArray||function(e){return"array"===st.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[it.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==st.type(e)||e.nodeType||st.isWindow(e))return!1;try{if(e.constructor&&!ot.call(e,"constructor")&&!ot.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||ot.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=pt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=st.buildFragment([e],t,i),i&&st(i).remove(),st.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=st.trim(n),n&&dt.test(n.replace(gt,"@").replace(mt,"]").replace(ht,"")))?Function("return "+n)():(st.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||st.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&st.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(yt,"ms-").replace(vt,bt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:at&&!at.call("\ufeff\u00a0")?function(e){return null==e?"":at.call(e)}:function(e){return null==e?"":(e+"").replace(ct,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?st.merge(r,"string"==typeof e?[e]:e):tt.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(rt)return rt.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return et.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),st.isFunction(e)?(i=nt.call(arguments,2),o=function(){return e.apply(n||this,i.concat(nt.call(arguments)))},o.guid=e.guid=e.guid||st.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===st.type(r)){o=!0;for(u in r)st.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,st.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(st(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),st.ready.promise=function(t){if(!U)if(U=st.Deferred(),"complete"===V.readyState)setTimeout(st.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xt,!1),e.addEventListener("load",st.ready,!1);else{V.attachEvent("onreadystatechange",xt),e.attachEvent("onload",st.ready);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!st.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}st.ready()}}()}return U.promise(t)},st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),X=st(V);var Tt={};st.Callbacks=function(e){e="string"==typeof e?Tt[e]||r(e):st.extend({},e);var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function r(t){st.each(t,function(t,n){var i=st.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&st.each(arguments,function(e,t){for(var n;(n=st.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return st.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},st.extend({Deferred:function(e){var t=[["resolve","done",st.Callbacks("once memory"),"resolved"],["reject","fail",st.Callbacks("once memory"),"rejected"],["notify","progress",st.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return st.Deferred(function(n){st.each(t,function(t,o){var a=o[0],s=st.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&st.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?st.extend(e,r):r}},i={};return r.pipe=r.then,st.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=nt.call(arguments),a=o.length,s=1!==a||e&&st.isFunction(e.promise)?a:0,u=1===s?e:st.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?nt.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&st.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),st.support=function(){var n,r,i,o,a,s,u,l,c,f,p=V.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!r||!i||!r.length)return{};o=V.createElement("select"),a=o.appendChild(V.createElement("option")),s=p.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",n={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:a.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,n.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,n.optDisabled=!a.disabled;try{delete p.test}catch(d){n.deleteExpando=!1}s=V.createElement("input"),s.setAttribute("value",""),n.input=""===s.getAttribute("value"),s.value="t",s.setAttribute("type","radio"),n.radioValue="t"===s.value,s.setAttribute("checked","t"),s.setAttribute("name","t"),u=V.createDocumentFragment(),u.appendChild(s),n.appendChecked=s.checked,n.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){n.noCloneEvent=!1}),p.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+f,"t"),n[f+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",n.clearCloneStyle="content-box"===p.style.backgroundClip,st(function(){var r,i,o,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=V.getElementsByTagName("body")[0];s&&(r=V.createElement("div"),r.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(r).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=p.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",n.reliableHiddenOffsets=c&&0===o[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",n.boxSizing=4===p.offsetWidth,n.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(n.pixelPosition="1%"!==(e.getComputedStyle(p,null)||{}).top,n.boxSizingReliable="4px"===(e.getComputedStyle(p,null)||{width:"4px"}).width,i=p.appendChild(V.createElement("div")),i.style.cssText=p.style.cssText=a,i.style.marginRight=i.style.width="0",p.style.width="1px",n.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)),p.style.zoom!==t&&(p.innerHTML="",p.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",n.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",n.shrinkWrapBlocks=3!==p.offsetWidth,s.style.zoom=1),s.removeChild(r),r=p=o=i=null)}),r=o=u=a=i=s=null,n}();var wt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Nt=/([A-Z])/g;st.extend({cache:{},expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?st.cache[e[st.expando]]:e[st.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){var t=e.nodeName&&st.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),st.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=st.data(o),1===o.nodeType&&!st._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=st.camelCase(i.substring(5)),a(o,i,u[i]));st._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){st.data(this,e)}):st.access(this,function(n){return n===t?o?a(o,e,st.data(o,e)):null:(this.each(function(){st.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){st.removeData(this,e)})}}),st.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=st._data(e,n),r&&(!i||st.isArray(r)?i=st._data(e,n,st.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=st.queue(e,t),r=n.length,i=n.shift(),o=st._queueHooks(e,t),a=function(){st.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return st._data(e,n)||st._data(e,n,{empty:st.Callbacks("once memory").add(function(){st._removeData(e,t+"queue"),st._removeData(e,n)})})}}),st.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?st.queue(this[0],e):n===t?this:this.each(function(){var t=st.queue(this,e,n);st._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&st.dequeue(this,e)})},dequeue:function(e){return this.each(function(){st.dequeue(this,e)})},delay:function(e,t){return e=st.fx?st.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=st.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=st._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Ct,kt,Et=/[\t\r\n]/g,St=/\r/g,At=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i,Dt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Lt=/^(?:checked|selected)$/i,Ht=st.support.getSetAttribute,Mt=st.support.input;st.fn.extend({attr:function(e,t){return st.access(this,st.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){st.removeAttr(this,e)})},prop:function(e,t){return st.access(this,st.prop,e,t,arguments.length>1)},removeProp:function(e){return e=st.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=st.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?st.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return st.isFunction(e)?this.each(function(n){st(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=st(this),s=t,u=e.match(lt)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&st._data(this,"__className__",this.className),this.className=this.className||e===!1?"":st._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Et," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=st.isFunction(e),this.each(function(r){var o,a=st(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":st.isArray(o)&&(o=st.map(o,function(e){return null==e?"":e+""})),n=st.valHooks[this.type]||st.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=st.valHooks[o.type]||st.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(St,""):null==r?"":r)}}}),st.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(st.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&st.nodeName(n.parentNode,"optgroup"))){if(t=st(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=st.makeArray(t);return st(e).find("option").each(function(){this.selected=st.inArray(st(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return e.getAttribute===t?st.prop(e,n,r):(a=1!==s||!st.isXMLDoc(e),a&&(n=n.toLowerCase(),o=st.attrHooks[n]||(Dt.test(n)?kt:Ct)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(e.getAttribute!==t&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(st.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(lt);if(o&&1===e.nodeType)for(;n=o[i++];)r=st.propFix[n]||n,Dt.test(n)?!Ht&&Lt.test(n)?e[st.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:st.attr(e,n,""),e.removeAttribute(Ht?n:r)},attrHooks:{type:{set:function(e,t){if(!st.support.radioValue&&"radio"===t&&st.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!st.isXMLDoc(e),a&&(n=st.propFix[n]||n,o=st.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):At.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:t}}}}),kt={get:function(e,n){var r=st.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Mt&&Ht?null!=i:Lt.test(n)?e[st.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?st.removeAttr(e,n):Mt&&Ht||!Lt.test(n)?e.setAttribute(!Ht&&st.propFix[n]||n,n):e[st.camelCase("default-"+n)]=e[n]=!0,n}},Mt&&Ht||(st.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return st.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,n,r){return st.nodeName(e,"input")?(e.defaultValue=n,t):Ct&&Ct.set(e,n,r)}}),Ht||(Ct=st.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},st.attrHooks.contenteditable={get:Ct.get,set:function(e,t,n){Ct.set(e,""===t?!1:t,n)}},st.each(["width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),st.support.hrefNormalized||(st.each(["href","src","width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),st.each(["href","src"],function(e,t){st.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),st.support.style||(st.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),st.support.optSelected||(st.propHooks.selected=st.extend(st.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),st.support.enctype||(st.propFix.enctype="encoding"),st.support.checkOn||st.each(["radio","checkbox"],function(){st.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),st.each(["radio","checkbox"],function(){st.valHooks[this]=st.extend(st.valHooks[this],{set:function(e,n){return st.isArray(n)?e.checked=st.inArray(st(e).val(),n)>=0:t}})});var qt=/^(?:input|select|textarea)$/i,_t=/^key/,Ft=/^(?:mouse|contextmenu)|click/,Ot=/^(?:focusinfocus|focusoutblur)$/,Bt=/^([^.]*)(?:\.(.+)|)$/;st.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=3!==e.nodeType&&8!==e.nodeType&&st._data(e);if(y){for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=st.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return st===t||e&&st.event.triggered===e.type?t:st.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=(n||"").match(lt)||[""],c=n.length;c--;)u=Bt.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),p=st.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=st.event.special[h]||{},f=st.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&st.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||(e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),st.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=st.hasData(e)&&st._data(e);if(m&&(u=m.events)){for(t=(t||"").match(lt)||[""],l=t.length;l--;)if(s=Bt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=st.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||st.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)st.event.remove(e,d+t[l],n,r,!0);st.isEmptyObject(u)&&(delete m.handle,st._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=n.type||n,g=n.namespace?n.namespace.split("."):[];if(s=u=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Ot.test(h+st.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,n=n[st.expando]?n:new st.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:st.makeArray(r,[n]),p=st.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!st.isWindow(i)){for(l=p.delegateType||h,Ot.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||V)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,f=(st._data(s,"events")||{})[n.type]&&st._data(s,"handle"),f&&f.apply(s,r),f=c&&s[c],f&&st.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&st.nodeName(i,"a")||!st.acceptData(i)||!c||!i[h]||st.isWindow(i))){u=i[c],u&&(i[c]=null),st.event.triggered=h;try{i[h]()}catch(m){}st.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){e=st.event.fix(e);var n,r,i,o,a,s=[],u=nt.call(arguments),l=(st._data(this,"events")||{})[e.type]||[],c=st.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=st.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,i=((st.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)a=n[r],o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?st(o,this).index(l)>=0:st.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[st.expando])return e;var t,n,r=e,i=st.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new st.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];return e.target||(e.target=r.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||V,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return st.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===V.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=st.extend(new st.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?st.event.trigger(i,null,t):st.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},st.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,n,r){var i="on"+n;e.detachEvent&&(e[i]===t&&(e[i]=null),e.detachEvent(i,r))},st.Event=function(e,n){return this instanceof st.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,n&&st.extend(this,n),this.timeStamp=e&&e.timeStamp||st.now(),this[st.expando]=!0,t):new st.Event(e,n)},st.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},st.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){st.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!st.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),st.support.submitBubbles||(st.event.special.submit={setup:function(){return st.nodeName(this,"form")?!1:(st.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=st.nodeName(n,"input")||st.nodeName(n,"button")?n.form:t;r&&!st._data(r,"submitBubbles")&&(st.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),st._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&st.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return st.nodeName(this,"form")?!1:(st.event.remove(this,"._submit"),t)}}),st.support.changeBubbles||(st.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(st.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),st.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),st.event.simulate("change",this,e,!0)})),!1):(st.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!st._data(t,"changeBubbles")&&(st.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||st.event.simulate("change",this.parentNode,e,!0)}),st._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return st.event.remove(this,"._change"),!qt.test(this.nodeName)}}),st.support.focusinBubbles||st.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){st.event.simulate(t,e.target,st.event.fix(e),!0)};st.event.special[t]={setup:function(){0===n++&&V.addEventListener(e,r,!0)},teardown:function(){0===--n&&V.removeEventListener(e,r,!0)}}}),st.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(a=i,i=function(e){return st().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=st.guid++)),this.each(function(){st.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,st(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){st.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){st.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?st.event.trigger(e,n,r,!0):t},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){st.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},_t.test(t)&&(st.event.fixHooks[t]=st.event.keyHooks),Ft.test(t)&&(st.event.fixHooks[t]=st.event.mouseHooks)}),function(e,t){function n(e){return ht.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>C.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[P]=!0,e}function o(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,g;if((t?t.ownerDocument||t:R)!==L&&D(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!M&&!r){if(i=gt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&O(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,K.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&W.getByClassName&&t.getElementsByClassName)return Q.apply(n,K.call(t.getElementsByClassName(a),0)),n}if(W.qsa&&!q.test(e)){if(c=!0,d=P,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=dt.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return Q.apply(n,K.call(h.querySelectorAll(g),0)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,s,u,l,c=X[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){(!n||(r=ut.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=lt.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));for(o in C.filter)!(r=pt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):X(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=$+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[P]||(t[P]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===N)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||N,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,r,o,a){return r&&!r[P]&&(r=m(r)),o&&!o[P]&&(o=m(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||b(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?Z.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):Q.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=C.relative[e[s].type])c=[d(h(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!C.relative[e[r].type];r++);return m(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],b=null!=c,x=j,T=i||o&&C.find.TAG("*",c&&s.parentNode||s),w=$+=null==x?1:Math.E;for(b&&(j=s!==L&&s,N=n);null!=(f=T[y]);y++){if(o&&f){for(p=0;d=e[p];p++)if(d(f,s,u)){l.push(f);break}b&&($=w,N=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p];p++)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=G.call(l));h=g(h)}Q.apply(l,h),b&&!i&&h.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&($=w,j=x),v};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function x(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!M&&C.relative[o[1].type]){if(t=C.find.ID(a.matches[0].replace(xt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!C.relative[s=a.type]);i--)if((u=C.find[s])&&(r=u(a.matches[0].replace(xt,Tt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Q.apply(n,K.call(r,0)),n;break}}return S(e,l)(r,t,M,n,dt.test(e)),n}function T(){}var w,N,C,k,E,S,A,j,D,L,H,M,q,_,F,O,B,P="sizzle"+-new Date,R=e.document,W={},$=0,I=0,z=r(),X=r(),U=r(),V=typeof t,Y=1<<31,J=[],G=J.pop,Q=J.push,K=J.slice,Z=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),ut=RegExp("^"+et+"*,"+et+"*"),lt=RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=RegExp(ot),ft=RegExp("^"+nt+"$"),pt={ID:RegExp("^#("+tt+")"),CLASS:RegExp("^\\.("+tt+")"),NAME:RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:RegExp("^("+tt.replace("w","w*")+")"),ATTR:RegExp("^"+it),PSEUDO:RegExp("^"+ot),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/\{\s*\[native code\]\s*\}/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,vt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{K.call(H.childNodes,0)[0].nodeType}catch(wt){K=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=a.setDocument=function(e){var r=e?e.ownerDocument||e:R;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,M=E(r),W.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),W.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),W.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),W.getByName=o(function(e){e.id=P+0,e.innerHTML="<a name='"+P+"'></a><div name='"+P+"'></div>",H.insertBefore(e,H.firstChild);var t=r.getElementsByName&&r.getElementsByName(P).length===2+r.getElementsByName(P+0).length;return W.getIdNotName=!r.getElementById(P),H.removeChild(e),t}),C.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},W.getIdNotName?(C.find.ID=function(e,t){if(typeof t.getElementById!==V&&!M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(C.find.ID=function(e,n){if(typeof n.getElementById!==V&&!M){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=W.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},C.find.NAME=W.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},C.find.CLASS=W.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||M?t:n.getElementsByClassName(e)},_=[],q=[":focus"],(W.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||q.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||q.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&q.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(W.matchesSelector=n(F=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){W.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),_.push("!=",ot)}),q=RegExp(q.join("|")),_=RegExp(_.join("|")),O=n(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=H.compareDocumentPosition?function(e,t){var n;return e===t?(A=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||O(R,e)?-1:t===r||O(R,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return A=!0,0;if(e.sourceIndex&&t.sourceIndex)return(~t.sourceIndex||Y)-(O(R,e)&&~e.sourceIndex||Y);if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===R?-1:l[i]===R?1:0},A=!1,[0,0].sort(B),W.detectDuplicates=A,L):L},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==L&&D(e),t=t.replace(bt,"='$1']"),!(!W.matchesSelector||M||_&&_.test(t)||q.test(t)))try{var n=F.call(e,t);if(n||W.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,L,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),O(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==L&&D(e),M||(t=t.toLowerCase()),(n=C.attrHandle[t])?n(e):M||W.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(A=!W.detectDuplicates,e.sort(B),A){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},C=a.selectors={cacheLength:50,createPseudo:i,match:pt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return pt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[P]||(m[P]={}),l=c[e]||[],d=l[0]===$&&l[1],p=l[0]===$&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[$,d,p];break}}else if(v&&(l=(t[P]||(t[P]={}))[e])&&l[0]===$)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[P]||(f[P]={}))[e]=[$,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[P]?r(t):r.length>1?(n=[e,e,"",t],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(at,"$1"));return r[P]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ft.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=M?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w);S=a.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},C.pseudos.nth=C.pseudos.eq,C.filters=T.prototype=C.pseudos,C.setFilters=new T,D(),a.attr=st.attr,st.find=a,st.expr=a.selectors,st.expr[":"]=st.expr.pseudos,st.unique=a.uniqueSort,st.text=a.getText,st.isXMLDoc=a.isXML,st.contains=a.contains}(e);var Pt=/Until$/,Rt=/^(?:parents|prev(?:Until|All))/,Wt=/^.[^:#\[\.,]*$/,$t=st.expr.match.needsContext,It={children:!0,contents:!0,next:!0,prev:!0};st.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(st(e).filter(function(){for(t=0;r.length>t;t++)if(st.contains(r[t],this))return!0}));for(n=[],t=0;this.length>t;t++)st.find(e,this[t],n);return n=this.pushStack(st.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=st(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(st.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?$t.test(e)?st(e,this.context).index(this[0])>=0:st.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=$t.test(e)||"string"!=typeof e?st(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:st.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?st.unique(o):o)},index:function(e){return e?"string"==typeof e?st.inArray(this[0],st(e)):st.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?st(e,t):st.makeArray(e&&e.nodeType?[e]:e),r=st.merge(this.get(),n);return this.pushStack(st.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),st.fn.andSelf=st.fn.addBack,st.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return st.dir(e,"parentNode")},parentsUntil:function(e,t,n){return st.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")
},nextAll:function(e){return st.dir(e,"nextSibling")},prevAll:function(e){return st.dir(e,"previousSibling")},nextUntil:function(e,t,n){return st.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return st.dir(e,"previousSibling",n)},siblings:function(e){return st.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return st.sibling(e.firstChild)},contents:function(e){return st.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:st.merge([],e.childNodes)}},function(e,t){st.fn[e]=function(n,r){var i=st.map(this,t,n);return Pt.test(e)||(r=n),r&&"string"==typeof r&&(i=st.filter(r,i)),i=this.length>1&&!It[e]?st.unique(i):i,this.length>1&&Rt.test(e)&&(i=i.reverse()),this.pushStack(i)}}),st.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?st.find.matchesSelector(t[0],e)?[t[0]]:[]:st.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!st(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var zt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Xt=/ jQuery\d+="(?:null|\d+)"/g,Ut=RegExp("<(?:"+zt+")[\\s/>]","i"),Vt=/^\s+/,Yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Jt=/<([\w:]+)/,Gt=/<tbody/i,Qt=/<|&#?\w+;/,Kt=/<(?:script|style|link)/i,Zt=/^(?:checkbox|radio)$/i,en=/checked\s*(?:[^=]|=\s*.checked.)/i,tn=/^$|\/(?:java|ecma)script/i,nn=/^true\/(.*)/,rn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,on={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:st.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},an=p(V),sn=an.appendChild(V.createElement("div"));on.optgroup=on.option,on.tbody=on.tfoot=on.colgroup=on.caption=on.thead,on.th=on.td,st.fn.extend({text:function(e){return st.access(this,function(e){return e===t?st.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(st.isFunction(e))return this.each(function(t){st(this).wrapAll(e.call(this,t))});if(this[0]){var t=st(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return st.isFunction(e)?this.each(function(t){st(this).wrapInner(e.call(this,t))}):this.each(function(){var t=st(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=st.isFunction(e);return this.each(function(n){st(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){st.nodeName(this,"body")||st(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||st.filter(e,[n]).length>0)&&(t||1!==n.nodeType||st.cleanData(b(n)),n.parentNode&&(t&&st.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&st.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&st.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return st.clone(this,e,t)})},html:function(e){return st.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Xt,""):t;if(!("string"!=typeof e||Kt.test(e)||!st.support.htmlSerialize&&Ut.test(e)||!st.support.leadingWhitespace&&Vt.test(e)||on[(Jt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Yt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(st.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=st.isFunction(e);return t||"string"==typeof e||(e=st(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(st(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=et.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=st.isFunction(y);if(v||!(1>=f||"string"!=typeof y||st.support.checkClone)&&en.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=st.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&st.nodeName(o,"tr"),a=st.map(b(i,"script"),h),s=a.length;f>c;c++)u=i,c!==m&&(u=st.clone(u,!0,!0),s&&st.merge(a,b(u,"script"))),r.call(n&&st.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,st.map(a,g),c=0;s>c;c++)u=a[c],tn.test(u.type||"")&&!st._data(u,"globalEval")&&st.contains(l,u)&&(u.src?st.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):st.globalEval((u.text||u.textContent||u.innerHTML||"").replace(rn,"")));i=o=null}return this}}),st.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){st.fn[e]=function(e){for(var n,r=0,i=[],o=st(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),st(o[r])[t](n),tt.apply(i,n.get());return this.pushStack(i)}}),st.extend({clone:function(e,t,n){var r,i,o,a,s,u=st.contains(e.ownerDocument,e);if(st.support.html5Clone||st.isXMLDoc(e)||!Ut.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(sn.innerHTML=e.outerHTML,sn.removeChild(s=sn.firstChild)),!(st.support.noCloneEvent&&st.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||st.isXMLDoc(e)))for(r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)r[a]&&v(o,r[a]);if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);return r=b(s,"script"),r.length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;f>g;g++)if(o=e[g],o||0===o)if("object"===st.type(o))st.merge(h,o.nodeType?[o]:o);else if(Qt.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Jt.exec(o)||["",""])[1].toLowerCase(),u=on[a]||on._default,s.innerHTML=u[1]+o.replace(Yt,"<$1></$2>")+u[2],c=u[0];c--;)s=s.lastChild;if(!st.support.leadingWhitespace&&Vt.test(o)&&h.push(t.createTextNode(Vt.exec(o)[0])),!st.support.tbody)for(o="table"!==a||Gt.test(o)?"<table>"!==u[1]||Gt.test(o)?0:s:s.firstChild,c=o&&o.childNodes.length;c--;)st.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(st.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),st.support.appendChecked||st.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===st.inArray(o,r))&&(i=st.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),i&&m(s),n))for(c=0;o=s[c++];)tn.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,n){for(var r,i,o,a,s=0,u=st.expando,l=st.cache,c=st.support.deleteExpando,f=st.event.special;null!=(o=e[s]);s++)if((n||st.acceptData(o))&&(i=o[u],r=i&&l[i])){if(r.events)for(a in r.events)f[a]?st.event.remove(o,a):st.removeEvent(o,a,r.handle);l[i]&&(delete l[i],c?delete o[u]:o.removeAttribute!==t?o.removeAttribute(u):o[u]=null,K.push(i))}}});var un,ln,cn,fn=/alpha\([^)]*\)/i,pn=/opacity\s*=\s*([^)]*)/,dn=/^(top|right|bottom|left)$/,hn=/^(none|table(?!-c[ea]).+)/,gn=/^margin/,mn=RegExp("^("+ut+")(.*)$","i"),yn=RegExp("^("+ut+")(?!px)[a-z%]+$","i"),vn=RegExp("^([+-])=("+ut+")","i"),bn={BODY:"block"},xn={position:"absolute",visibility:"hidden",display:"block"},Tn={letterSpacing:0,fontWeight:400},wn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];st.fn.extend({css:function(e,n){return st.access(this,function(e,n,r){var i,o,a={},s=0;if(st.isArray(n)){for(i=ln(e),o=n.length;o>s;s++)a[n[s]]=st.css(e,n[s],!1,i);return a}return r!==t?st.style(e,n,r):st.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?st(this).show():st(this).hide()})}}),st.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=un(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":st.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=st.camelCase(n),l=e.style;if(n=st.cssProps[u]||(st.cssProps[u]=T(l,u)),s=st.cssHooks[n]||st.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=vn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(st.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||st.cssNumber[u]||(r+="px"),st.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=st.camelCase(n);return n=st.cssProps[u]||(st.cssProps[u]=T(e.style,u)),s=st.cssHooks[n]||st.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=un(e,n,i)),"normal"===o&&n in Tn&&(o=Tn[n]),r?(a=parseFloat(o),r===!0||st.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ln=function(t){return e.getComputedStyle(t,null)},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||st.contains(e.ownerDocument,e)||(u=st.style(e,n)),yn.test(u)&&gn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ln=function(e){return e.currentStyle},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),yn.test(u)&&!dn.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),st.each(["height","width"],function(e,n){st.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&hn.test(st.css(e,"display"))?st.swap(e,xn,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&ln(e);return C(e,t,r?k(e,n,r,st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,i),i):0)}}}),st.support.opacity||(st.cssHooks.opacity={get:function(e,t){return pn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=st.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===st.trim(o.replace(fn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=fn.test(o)?o.replace(fn,i):o+" "+i)}}),st(function(){st.support.reliableMarginRight||(st.cssHooks.marginRight={get:function(e,n){return n?st.swap(e,{display:"inline-block"},un,[e,"marginRight"]):t}}),!st.support.pixelPosition&&st.fn.position&&st.each(["top","left"],function(e,n){st.cssHooks[n]={get:function(e,r){return r?(r=un(e,n),yn.test(r)?st(e).position()[n]+"px":r):t}}})}),st.expr&&st.expr.filters&&(st.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!st.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||st.css(e,"display"))},st.expr.filters.visible=function(e){return!st.expr.filters.hidden(e)}),st.each({margin:"",padding:"",border:"Width"},function(e,t){st.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+wn[r]+t]=o[r]||o[r-2]||o[0];return i}},gn.test(e)||(st.cssHooks[e+t].set=C)});var Cn=/%20/g,kn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset)$/i,An=/^(?:input|select|textarea|keygen)/i;st.fn.extend({serialize:function(){return st.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=st.prop(this,"elements");return e?st.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!st(this).is(":disabled")&&An.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Zt.test(e))}).map(function(e,t){var n=st(this).val();return null==n?null:st.isArray(n)?st.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),st.param=function(e,n){var r,i=[],o=function(e,t){t=st.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=st.ajaxSettings&&st.ajaxSettings.traditional),st.isArray(e)||e.jquery&&!st.isPlainObject(e))st.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(Cn,"+")};var jn,Dn,Ln=st.now(),Hn=/\?/,Mn=/#.*$/,qn=/([?&])_=[^&]*/,_n=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Bn=/^\/\//,Pn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Rn=st.fn.load,Wn={},$n={},In="*/".concat("*");try{Dn=Y.href}catch(zn){Dn=V.createElement("a"),Dn.href="",Dn=Dn.href}jn=Pn.exec(Dn.toLowerCase())||[],st.fn.load=function(e,n,r){if("string"!=typeof e&&Rn)return Rn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),st.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&st.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?st("<div>").append(st.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},st.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){st.fn[t]=function(e){return this.on(t,e)}}),st.each(["get","post"],function(e,n){st[n]=function(e,r,i,o){return st.isFunction(r)&&(o=o||i,i=r,r=t),st.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),st.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Fn.test(jn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":In,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":st.parseJSON,"text xml":st.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,st.ajaxSettings),t):H(st.ajaxSettings,e)},ajaxPrefilter:D(Wn),ajaxTransport:D($n),ajax:function(e,n){function r(e,n,r,s){var l,f,v,b,T,N=n;2!==x&&(x=2,u&&clearTimeout(u),i=t,a=s||"",w.readyState=e>0?4:0,r&&(b=M(p,w,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(st.lastModified[o]=T),T=w.getResponseHeader("etag"),T&&(st.etag[o]=T)),304===e?(l=!0,N="notmodified"):(l=q(p,b),N=l.state,f=l.data,v=l.error,l=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",l?g.resolveWith(d,[f,N,w]):g.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[w,p,l?f:v]),m.fireWith(d,[w,N]),c&&(h.trigger("ajaxComplete",[w,p]),--st.active||st.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=st.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?st(d):st.event,g=st.Deferred(),m=st.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=_n.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(g.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((e||p.url||Dn)+"").replace(Mn,"").replace(Bn,jn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=st.trim(p.dataType||"*").toLowerCase().match(lt)||[""],null==p.crossDomain&&(l=Pn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===jn[1]&&l[2]===jn[2]&&(l[3]||("http:"===l[1]?80:443))==(jn[3]||("http:"===jn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=st.param(p.data,p.traditional)),L(Wn,p,n,w),2===x)return w;c=p.global,c&&0===st.active++&&st.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!On.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(Hn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(o)?o.replace(qn,"$1_="+Ln++):o+(Hn.test(o)?"&":"?")+"_="+Ln++)),p.ifModified&&(st.lastModified[o]&&w.setRequestHeader("If-Modified-Since",st.lastModified[o]),st.etag[o]&&w.setRequestHeader("If-None-Match",st.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+In+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)w.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,w,p)===!1||2===x))return w.abort();T="abort";for(f in{success:1,error:1,complete:1})w[f](p[f]);if(i=L($n,p,n,w)){w.readyState=1,c&&h.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(N){if(!(2>x))throw N;r(-1,N)}}else r(-1,"No Transport");return w},getScript:function(e,n){return st.get(e,t,n,"script")},getJSON:function(e,t,n){return st.get(e,t,n,"json")}}),st.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return st.globalEval(e),e}}}),st.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),st.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||st("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Xn=[],Un=/(=)\?(?=&|$)|\?\?/;st.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xn.pop()||st.expando+"_"+Ln++;return this[e]=!0,e}}),st.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Un.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Un.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=st.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Un,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||st.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Xn.push(o)),s&&st.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Vn,Yn,Jn=0,Gn=e.ActiveXObject&&function(){var e;for(e in Vn)Vn[e](t,!0)};st.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,Yn=st.ajaxSettings.xhr(),st.support.cors=!!Yn&&"withCredentials"in Yn,Yn=st.support.ajax=!!Yn,Yn&&st.ajaxTransport(function(n){if(!n.crossDomain||st.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=st.noop,Gn&&delete Vn[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),p&&p.documentElement&&(f.xml=p),"string"==typeof u.responseText&&(f.text=u.responseText);try{l=u.statusText}catch(d){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,l,f,c)},n.async?4===u.readyState?setTimeout(r):(a=++Jn,Gn&&(Vn||(Vn={},st(e).unload(Gn)),Vn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Qn,Kn,Zn=/^(?:toggle|show|hide)$/,er=RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),tr=/queueHooks$/,nr=[W],rr={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=er.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(st.cssNumber[e]?"":"px"),"px"!==r&&s){s=st.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,st.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};st.Animation=st.extend(P,{tweener:function(e,t){st.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],rr[n]=rr[n]||[],rr[n].unshift(t)},prefilter:function(e,t){t?nr.unshift(e):nr.push(e)}}),st.Tween=$,$.prototype={constructor:$,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(st.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop];return this.pos=t=this.options.duration?st.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=st.css(e.elem,e.prop,"auto"),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){st.fx.step[e.prop]?st.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[st.cssProps[e.prop]]||st.cssHooks[e.prop])?st.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},st.each(["toggle","show","hide"],function(e,t){var n=st.fn[t];st.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),st.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=st.isEmptyObject(e),o=st.speed(t,n,r),a=function(){var t=P(this,st.extend({},e),o);a.finish=function(){t.stop(!0)},(i||st._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=st.timers,a=st._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&tr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&st.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=st._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=st.timers,a=r?r.length:0;for(n.finish=!0,st.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),st.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){st.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),st.speed=function(e,t,n){var r=e&&"object"==typeof e?st.extend({},e):{complete:n||!n&&t||st.isFunction(e)&&e,duration:e,easing:n&&t||t&&!st.isFunction(t)&&t};return r.duration=st.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in st.fx.speeds?st.fx.speeds[r.duration]:st.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){st.isFunction(r.old)&&r.old.call(this),r.queue&&st.dequeue(this,r.queue)},r},st.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},st.timers=[],st.fx=$.prototype.init,st.fx.tick=function(){var e,n=st.timers,r=0;for(Qn=st.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||st.fx.stop(),Qn=t},st.fx.timer=function(e){e()&&st.timers.push(e)&&st.fx.start()},st.fx.interval=13,st.fx.start=function(){Kn||(Kn=setInterval(st.fx.tick,st.fx.interval))},st.fx.stop=function(){clearInterval(Kn),Kn=null},st.fx.speeds={slow:600,fast:200,_default:400},st.fx.step={},st.expr&&st.expr.filters&&(st.expr.filters.animated=function(e){return st.grep(st.timers,function(t){return e===t.elem}).length}),st.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){st.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,st.contains(n,o)?(o.getBoundingClientRect!==t&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},st.offset={setOffset:function(e,t,n){var r=st.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=st(e),s=a.offset(),u=st.css(e,"top"),l=st.css(e,"left"),c=("absolute"===r||"fixed"===r)&&st.inArray("auto",[u,l])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),st.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},st.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===st.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),st.nodeName(e[0],"html")||(n=e.offset()),n.top+=st.css(e[0],"borderTopWidth",!0),n.left+=st.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-st.css(r,"marginTop",!0),left:t.left-n.left-st.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!st.nodeName(e,"html")&&"static"===st.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),st.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);st.fn[e]=function(i){return st.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?st(a).scrollLeft():o,r?o:st(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),st.each({Height:"height",Width:"width"},function(e,n){st.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){st.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return st.access(this,function(n,r,i){var o;return st.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?st.css(n,r,s):st.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=st,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return st})})(window);
/**
 * jQuery JSON plugin 2.4.0
 *
 * @author Brantley Harris, 2009-2011
 * @author Timo Tijhof, 2011-2012
 * @source This plugin is heavily influenced by MochiKit's serializeJSON, which is
 *         copyrighted 2005 by Bob Ippolito.
 * @source Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 *         website's http://www.json.org/json2.js, which proclaims:
 *         "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 *         I uphold.
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
(function ($) {
    'use strict';

    var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        hasOwn = Object.prototype.hasOwnProperty;

    /**
     * jQuery.toJSON
     * Converts the given argument into a JSON representation.
     *
     * @param o {Mixed} The json-serializable *thing* to be converted
     *
     * If an object has a toJSON prototype, that will be used to get the representation.
     * Non-integer/string keys are skipped in the object, as are keys that point to a
     * function.
     *
     */
    $.toJSON = typeof JSON === 'object' && JSON.stringify ? JSON.stringify : function (o) {
        if (o === null) {
            return 'null';
        }

        var pairs, k, name, val,
            type = $.type(o);

        if (type === 'undefined') {
            return undefined;
        }

        // Also covers instantiated Number and Boolean objects,
        // which are typeof 'object' but thanks to $.type, we
        // catch them here. I don't know whether it is right
        // or wrong that instantiated primitives are not
        // exported to JSON as an {"object":..}.
        // We choose this path because that's what the browsers did.
        if (type === 'number' || type === 'boolean') {
            return String(o);
        }
        if (type === 'string') {
            return $.quoteString(o);
        }
        if (typeof o.toJSON === 'function') {
            return $.toJSON(o.toJSON());
        }
        if (type === 'date') {
            var month = o.getUTCMonth() + 1,
                day = o.getUTCDate(),
                year = o.getUTCFullYear(),
                hours = o.getUTCHours(),
                minutes = o.getUTCMinutes(),
                seconds = o.getUTCSeconds(),
                milli = o.getUTCMilliseconds();

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            if (milli < 100) {
                milli = '0' + milli;
            }
            if (milli < 10) {
                milli = '0' + milli;
            }
            return '"' + year + '-' + month + '-' + day + 'T' +
                hours + ':' + minutes + ':' + seconds +
                '.' + milli + 'Z"';
        }

        pairs = [];

        if ($.isArray(o)) {
            for (k = 0; k < o.length; k++) {
                pairs.push($.toJSON(o[k]) || 'null');
            }
            return '[' + pairs.join(',') + ']';
        }

        // Any other object (plain object, RegExp, ..)
        // Need to do typeof instead of $.type, because we also
        // want to catch non-plain objects.
        if (typeof o === 'object') {
            for (k in o) {
                // Only include own properties,
                // Filter out inherited prototypes
                if (hasOwn.call(o, k)) {
                    // Keys must be numerical or string. Skip others
                    type = typeof k;
                    if (type === 'number') {
                        name = '"' + k + '"';
                    } else if (type === 'string') {
                        name = $.quoteString(k);
                    } else {
                        continue;
                    }
                    type = typeof o[k];

                    // Invalid values like these return undefined
                    // from toJSON, however those object members
                    // shouldn't be included in the JSON string at all.
                    if (type !== 'function' && type !== 'undefined') {
                        val = $.toJSON(o[k]);
                        pairs.push(name + ':' + val);
                    }
                }
            }
            return '{' + pairs.join(',') + '}';
        }
    };

    /**
     * jQuery.evalJSON
     * Evaluates a given json string.
     *
     * @param str {String}
     */
    $.evalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (str) {
        /*jshint evil: true */
        return eval('(' + str + ')');
    };

    /**
     * jQuery.secureEvalJSON
     * Evals JSON in a way that is *more* secure.
     *
     * @param str {String}
     */
    $.secureEvalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (str) {
        var filtered =
            str
                .replace(/\\["\\\/bfnrtu]/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, '');

        if (/^[\],:{}\s]*$/.test(filtered)) {
            /*jshint evil: true */
            return eval('(' + str + ')');
        }
        throw new SyntaxError('Error parsing JSON, source is not valid.');
    };

    /**
     * jQuery.quoteString
     * Returns a string-repr of a string, escaping quotes intelligently.
     * Mostly a support function for toJSON.
     * Examples:
     * >>> jQuery.quoteString('apple')
     * "apple"
     *
     * >>> jQuery.quoteString('"Where are we going?", she asked.')
     * "\"Where are we going?\", she asked."
     */
    $.quoteString = function (str) {
        if (str.match(escape)) {
            return '"' + str.replace(escape, function (a) {
                var c = meta[a];
                if (typeof c === 'string') {
                    return c;
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + str + '"';
    };

}(jQuery));

// 2.4

kolos = {};
if (kolos.Kolos === undefined) kolos.Kolos = {};
if (kolos.app === undefined) kolos.app = {};
if (kolos.page === undefined) kolos.page = {};
if (kolos.template === undefined) kolos.template = {};
if (kolos.component === undefined) kolos.component = {};
if (kolos.custom === undefined) kolos.custom = {};
if (console === undefined) {
    let console = {
        log: function(text) {}
    }
}

kolos.Class = function(cls){
    var fn = function(){
        //var Self = this;
    };
    cls.call( fn );
    return fn;
};// это для безопасности, чтобы по ошибке не переопределить глобальное свойство
if (kolos.Global === undefined) {
    /**
     * Работа с глобальными объектами, чтобы просто добавлять общий пул, и избежать их пересечения
     */
    kolos.Global = {
        objects: {},
        index: 0,
        add: function(obj) {
            let i = this.index++;
            this.objects[i] = obj;
            return i;
        },
        get: function(id) {
            return this.objects[id];
        },
        remove: function(id) {
            delete this.objects[id];
        },
        getTagId: function(id) {
            return 'kolos-gl-' + id;
        }
    };

}
kolos.Html = {
    getParent: function (element) {
        return $(element).parent()[0];
    },

    getFirstChildren: function (tag) {
        let elements = [];
        // получаем список контейнеров
        let firstChild = $(tag).find(":first-child")[0];
        if (firstChild !== undefined) {
            elements.push(firstChild);
            let otherElements = $(firstChild).siblings();
            for (let i = 0; i < otherElements.length; i++) {
                elements.push(otherElements[i]);
            }
        }
        return elements;
    }
};kolos.Set = function(valuesArr) {
    this.__arr = [];
    this.add = function(element) {
        if (!this.contains(element)) {
            this.__arr.push(element);
        }
    };
    this.remove = function(element) {
        const index = this.__arr.indexOf(element);
        if (index > -1) {
            this.__arr.splice(index, 1);
        }
    };
    this.contains = function(element) {
        return this.__arr.indexOf(element) > -1;
    };
    this.clear = function() {
        this.__arr = [];
    };
    this.getLength =function() {
        this.__arr.length;
    };

    //если переданы в конструктор массив значений, добавляем их через метод добавления, чтобы исключить повторения элементов
    if (valuesArr !== undefined) {
        for (var i in valuesArr) {
            this.add(valuesArr[i]);
        }
    }
};/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */(function(e,t){"use strict";function n(e){var t=e.length,n=st.type(e);return st.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=Tt[e]={};return st.each(e.match(lt)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(st.acceptData(e)){var o,a,s=st.expando,u="string"==typeof n,l=e.nodeType,c=l?st.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=K.pop()||st.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=st.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=st.extend(c[f],n):c[f].data=st.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[st.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[st.camelCase(n)])):a=o,a}}function o(e,t,n){if(st.acceptData(e)){var r,i,o,a=e.nodeType,u=a?st.cache:e,l=a?e[st.expando]:st.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){st.isArray(t)?t=t.concat(st.map(t,st.camelCase)):t in r?t=[t]:(t=st.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;o>i;i++)delete r[t[i]];if(!(n?s:st.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?st.cleanData([e],!0):st.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Nt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:wt.test(r)?st.parseJSON(r):r}catch(o){}st.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!st.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,st.isFunction(t))return st.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return st.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=st.grep(e,function(e){return 1===e.nodeType});if(Wt.test(t))return st.filter(t,r,!n);t=st.filter(t,r)}return st.grep(e,function(e){return st.inArray(e,t)>=0===n})}function p(e){var t=zt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=nn.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)st._data(n,"globalEval",!t||st._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&st.hasData(e)){var n,r,i,o=st._data(e),a=st._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)st.event.add(t,n,s[n][r])}a.data&&(a.data=st.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!st.support.noCloneEvent&&t[st.expando]){r=st._data(t);for(i in r.events)st.removeEvent(t,i,r.handle);t.removeAttribute(st.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),st.support.html5Clone&&e.innerHTML&&!st.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Zt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=e.getElementsByTagName!==t?e.getElementsByTagName(n||"*"):e.querySelectorAll!==t?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||st.nodeName(i,n)?a.push(i):st.merge(a,b(i,n));return n===t||n&&st.nodeName(e,n)?st.merge([e],a):a}function x(e){Zt.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Nn.length;i--;)if(t=Nn[i]+n,t in e)return t;return r}function w(e,t){return e=t||e,"none"===st.css(e,"display")||!st.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;o>i;i++)n=e[i],n.style&&(r[i]=st._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&w(n)&&(r[i]=st._data(n,"olddisplay",S(n.nodeName)))):r[i]||w(n)||st._data(n,"olddisplay",st.css(n,"display")));for(i=0;o>i;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=mn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=st.css(e,n+wn[o],!0,i)),r?("content"===n&&(a-=st.css(e,"padding"+wn[o],!0,i)),"margin"!==n&&(a-=st.css(e,"border"+wn[o]+"Width",!0,i))):(a+=st.css(e,"padding"+wn[o],!0,i),"padding"!==n&&(a+=st.css(e,"border"+wn[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ln(e),a=st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=un(e,t,o),(0>i||null==i)&&(i=e.style[t]),yn.test(i))return i;r=a&&(st.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=V,n=bn[e];return n||(n=A(e,t),"none"!==n&&n||(cn=(cn||st("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),cn.detach()),bn[e]=n),n}function A(e,t){var n=st(t.createElement(e)).appendTo(t.body),r=st.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(st.isArray(t))st.each(t,function(t,i){n||kn.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==st.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(lt)||[];if(st.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(u){var l;return a[u]=!0,st.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===$n;return o(n.dataTypes[0])||!a["*"]&&o("*")}function H(e,n){var r,i,o=st.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&st.extend(!0,e,i),e}function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(n=a[l+" "+i]||a["* "+i],!n)for(r in a)if(o=r.split(" "),o[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Qn=t}),Qn=st.now()}function B(e,t){st.each(t,function(t,n){for(var r=(rr[t]||[]).concat(rr["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=nr.length,s=st.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qn||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:st.extend({},t),opts:st.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qn||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=st.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);a>o;o++)if(r=nr[o].call(l,e,c,l.opts))return r;return B(l,c),st.isFunction(l.opts.start)&&l.opts.start.call(e,l),st.fx.timer(st.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(n in e)if(r=st.camelCase(n),i=t[r],o=e[n],st.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=st.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&w(e);n.queue||(c=st._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,st.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===st.css(e,"display")&&"none"===st.css(e,"float")&&(st.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",st.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Zn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=st._data(e,"fxshow")||st._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?st(e).show():p.done(function(){st(e).hide()}),p.done(function(){var t;st._removeData(e,"fxshow");for(t in h)st.style(e,t,h[t])});for(r=0;a>r;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||st.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function $(e,t,n,r,i){return new $.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=wn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return st.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var X,U,V=e.document,Y=e.location,J=e.jQuery,G=e.$,Q={},K=[],Z="1.9.0",et=K.concat,tt=K.push,nt=K.slice,rt=K.indexOf,it=Q.toString,ot=Q.hasOwnProperty,at=Z.trim,st=function(e,t){return new st.fn.init(e,t,X)},ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=/\S+/g,ct=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ft=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^[\],:{}\s]*$/,ht=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,mt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,yt=/^-ms-/,vt=/-([\da-z])/gi,bt=function(e,t){return t.toUpperCase()},xt=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",xt,!1),st.ready()):"complete"===V.readyState&&(V.detachEvent("onreadystatechange",xt),st.ready())};st.fn=st.prototype={jquery:Z,constructor:st,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ft.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof st?n[0]:n,st.merge(this,st.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),pt.test(i[1])&&st.isPlainObject(n))for(i in n)st.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=V.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):st.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),st.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return nt.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=st.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return st.each(this,e,t)},ready:function(e){return st.ready.promise().done(e),this},slice:function(){return this.pushStack(nt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(st.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:tt,sort:[].sort,splice:[].splice},st.fn.init.prototype=st.fn,st.extend=st.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||st.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(st.isPlainObject(i)||(o=st.isArray(i)))?(o?(o=!1,a=r&&st.isArray(r)?r:[]):a=r&&st.isPlainObject(r)?r:{},s[n]=st.extend(c,a,i)):i!==t&&(s[n]=i));return s},st.extend({noConflict:function(t){return e.$===st&&(e.$=G),t&&e.jQuery===st&&(e.jQuery=J),st},isReady:!1,readyWait:1,holdReady:function(e){e?st.readyWait++:st.ready(!0)},ready:function(e){if(e===!0?!--st.readyWait:!st.isReady){if(!V.body)return setTimeout(st.ready);st.isReady=!0,e!==!0&&--st.readyWait>0||(U.resolveWith(V,[st]),st.fn.trigger&&st(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===st.type(e)},isArray:Array.isArray||function(e){return"array"===st.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[it.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==st.type(e)||e.nodeType||st.isWindow(e))return!1;try{if(e.constructor&&!ot.call(e,"constructor")&&!ot.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||ot.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=pt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=st.buildFragment([e],t,i),i&&st(i).remove(),st.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=st.trim(n),n&&dt.test(n.replace(gt,"@").replace(mt,"]").replace(ht,"")))?Function("return "+n)():(st.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||st.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&st.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(yt,"ms-").replace(vt,bt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:at&&!at.call("\ufeff\u00a0")?function(e){return null==e?"":at.call(e)}:function(e){return null==e?"":(e+"").replace(ct,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?st.merge(r,"string"==typeof e?[e]:e):tt.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(rt)return rt.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return et.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),st.isFunction(e)?(i=nt.call(arguments,2),o=function(){return e.apply(n||this,i.concat(nt.call(arguments)))},o.guid=e.guid=e.guid||st.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===st.type(r)){o=!0;for(u in r)st.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,st.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(st(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),st.ready.promise=function(t){if(!U)if(U=st.Deferred(),"complete"===V.readyState)setTimeout(st.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xt,!1),e.addEventListener("load",st.ready,!1);else{V.attachEvent("onreadystatechange",xt),e.attachEvent("onload",st.ready);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!st.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}st.ready()}}()}return U.promise(t)},st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),X=st(V);var Tt={};st.Callbacks=function(e){e="string"==typeof e?Tt[e]||r(e):st.extend({},e);var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function r(t){st.each(t,function(t,n){var i=st.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&st.each(arguments,function(e,t){for(var n;(n=st.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return st.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},st.extend({Deferred:function(e){var t=[["resolve","done",st.Callbacks("once memory"),"resolved"],["reject","fail",st.Callbacks("once memory"),"rejected"],["notify","progress",st.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return st.Deferred(function(n){st.each(t,function(t,o){var a=o[0],s=st.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&st.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?st.extend(e,r):r}},i={};return r.pipe=r.then,st.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=nt.call(arguments),a=o.length,s=1!==a||e&&st.isFunction(e.promise)?a:0,u=1===s?e:st.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?nt.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&st.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),st.support=function(){var n,r,i,o,a,s,u,l,c,f,p=V.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!r||!i||!r.length)return{};o=V.createElement("select"),a=o.appendChild(V.createElement("option")),s=p.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",n={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:a.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,n.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,n.optDisabled=!a.disabled;try{delete p.test}catch(d){n.deleteExpando=!1}s=V.createElement("input"),s.setAttribute("value",""),n.input=""===s.getAttribute("value"),s.value="t",s.setAttribute("type","radio"),n.radioValue="t"===s.value,s.setAttribute("checked","t"),s.setAttribute("name","t"),u=V.createDocumentFragment(),u.appendChild(s),n.appendChecked=s.checked,n.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){n.noCloneEvent=!1}),p.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+f,"t"),n[f+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",n.clearCloneStyle="content-box"===p.style.backgroundClip,st(function(){var r,i,o,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=V.getElementsByTagName("body")[0];s&&(r=V.createElement("div"),r.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(r).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=p.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",n.reliableHiddenOffsets=c&&0===o[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",n.boxSizing=4===p.offsetWidth,n.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(n.pixelPosition="1%"!==(e.getComputedStyle(p,null)||{}).top,n.boxSizingReliable="4px"===(e.getComputedStyle(p,null)||{width:"4px"}).width,i=p.appendChild(V.createElement("div")),i.style.cssText=p.style.cssText=a,i.style.marginRight=i.style.width="0",p.style.width="1px",n.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)),p.style.zoom!==t&&(p.innerHTML="",p.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",n.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",n.shrinkWrapBlocks=3!==p.offsetWidth,s.style.zoom=1),s.removeChild(r),r=p=o=i=null)}),r=o=u=a=i=s=null,n}();var wt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Nt=/([A-Z])/g;st.extend({cache:{},expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?st.cache[e[st.expando]]:e[st.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){var t=e.nodeName&&st.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),st.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=st.data(o),1===o.nodeType&&!st._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=st.camelCase(i.substring(5)),a(o,i,u[i]));st._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){st.data(this,e)}):st.access(this,function(n){return n===t?o?a(o,e,st.data(o,e)):null:(this.each(function(){st.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){st.removeData(this,e)})}}),st.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=st._data(e,n),r&&(!i||st.isArray(r)?i=st._data(e,n,st.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=st.queue(e,t),r=n.length,i=n.shift(),o=st._queueHooks(e,t),a=function(){st.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return st._data(e,n)||st._data(e,n,{empty:st.Callbacks("once memory").add(function(){st._removeData(e,t+"queue"),st._removeData(e,n)})})}}),st.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?st.queue(this[0],e):n===t?this:this.each(function(){var t=st.queue(this,e,n);st._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&st.dequeue(this,e)})},dequeue:function(e){return this.each(function(){st.dequeue(this,e)})},delay:function(e,t){return e=st.fx?st.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=st.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=st._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Ct,kt,Et=/[\t\r\n]/g,St=/\r/g,At=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i,Dt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Lt=/^(?:checked|selected)$/i,Ht=st.support.getSetAttribute,Mt=st.support.input;st.fn.extend({attr:function(e,t){return st.access(this,st.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){st.removeAttr(this,e)})},prop:function(e,t){return st.access(this,st.prop,e,t,arguments.length>1)},removeProp:function(e){return e=st.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=st.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?st.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return st.isFunction(e)?this.each(function(n){st(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=st(this),s=t,u=e.match(lt)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&st._data(this,"__className__",this.className),this.className=this.className||e===!1?"":st._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Et," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=st.isFunction(e),this.each(function(r){var o,a=st(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":st.isArray(o)&&(o=st.map(o,function(e){return null==e?"":e+""})),n=st.valHooks[this.type]||st.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=st.valHooks[o.type]||st.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(St,""):null==r?"":r)}}}),st.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(st.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&st.nodeName(n.parentNode,"optgroup"))){if(t=st(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=st.makeArray(t);return st(e).find("option").each(function(){this.selected=st.inArray(st(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return e.getAttribute===t?st.prop(e,n,r):(a=1!==s||!st.isXMLDoc(e),a&&(n=n.toLowerCase(),o=st.attrHooks[n]||(Dt.test(n)?kt:Ct)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(e.getAttribute!==t&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(st.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(lt);if(o&&1===e.nodeType)for(;n=o[i++];)r=st.propFix[n]||n,Dt.test(n)?!Ht&&Lt.test(n)?e[st.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:st.attr(e,n,""),e.removeAttribute(Ht?n:r)},attrHooks:{type:{set:function(e,t){if(!st.support.radioValue&&"radio"===t&&st.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!st.isXMLDoc(e),a&&(n=st.propFix[n]||n,o=st.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):At.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:t}}}}),kt={get:function(e,n){var r=st.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Mt&&Ht?null!=i:Lt.test(n)?e[st.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?st.removeAttr(e,n):Mt&&Ht||!Lt.test(n)?e.setAttribute(!Ht&&st.propFix[n]||n,n):e[st.camelCase("default-"+n)]=e[n]=!0,n}},Mt&&Ht||(st.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return st.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,n,r){return st.nodeName(e,"input")?(e.defaultValue=n,t):Ct&&Ct.set(e,n,r)}}),Ht||(Ct=st.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},st.attrHooks.contenteditable={get:Ct.get,set:function(e,t,n){Ct.set(e,""===t?!1:t,n)}},st.each(["width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),st.support.hrefNormalized||(st.each(["href","src","width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),st.each(["href","src"],function(e,t){st.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),st.support.style||(st.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),st.support.optSelected||(st.propHooks.selected=st.extend(st.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),st.support.enctype||(st.propFix.enctype="encoding"),st.support.checkOn||st.each(["radio","checkbox"],function(){st.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),st.each(["radio","checkbox"],function(){st.valHooks[this]=st.extend(st.valHooks[this],{set:function(e,n){return st.isArray(n)?e.checked=st.inArray(st(e).val(),n)>=0:t}})});var qt=/^(?:input|select|textarea)$/i,_t=/^key/,Ft=/^(?:mouse|contextmenu)|click/,Ot=/^(?:focusinfocus|focusoutblur)$/,Bt=/^([^.]*)(?:\.(.+)|)$/;st.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=3!==e.nodeType&&8!==e.nodeType&&st._data(e);if(y){for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=st.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return st===t||e&&st.event.triggered===e.type?t:st.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=(n||"").match(lt)||[""],c=n.length;c--;)u=Bt.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),p=st.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=st.event.special[h]||{},f=st.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&st.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||(e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),st.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=st.hasData(e)&&st._data(e);if(m&&(u=m.events)){for(t=(t||"").match(lt)||[""],l=t.length;l--;)if(s=Bt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=st.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||st.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)st.event.remove(e,d+t[l],n,r,!0);st.isEmptyObject(u)&&(delete m.handle,st._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=n.type||n,g=n.namespace?n.namespace.split("."):[];if(s=u=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Ot.test(h+st.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,n=n[st.expando]?n:new st.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:st.makeArray(r,[n]),p=st.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!st.isWindow(i)){for(l=p.delegateType||h,Ot.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||V)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,f=(st._data(s,"events")||{})[n.type]&&st._data(s,"handle"),f&&f.apply(s,r),f=c&&s[c],f&&st.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&st.nodeName(i,"a")||!st.acceptData(i)||!c||!i[h]||st.isWindow(i))){u=i[c],u&&(i[c]=null),st.event.triggered=h;try{i[h]()}catch(m){}st.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){e=st.event.fix(e);var n,r,i,o,a,s=[],u=nt.call(arguments),l=(st._data(this,"events")||{})[e.type]||[],c=st.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=st.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,i=((st.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)a=n[r],o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?st(o,this).index(l)>=0:st.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[st.expando])return e;var t,n,r=e,i=st.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new st.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];return e.target||(e.target=r.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||V,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return st.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===V.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=st.extend(new st.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?st.event.trigger(i,null,t):st.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},st.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,n,r){var i="on"+n;e.detachEvent&&(e[i]===t&&(e[i]=null),e.detachEvent(i,r))},st.Event=function(e,n){return this instanceof st.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,n&&st.extend(this,n),this.timeStamp=e&&e.timeStamp||st.now(),this[st.expando]=!0,t):new st.Event(e,n)},st.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},st.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){st.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!st.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),st.support.submitBubbles||(st.event.special.submit={setup:function(){return st.nodeName(this,"form")?!1:(st.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=st.nodeName(n,"input")||st.nodeName(n,"button")?n.form:t;r&&!st._data(r,"submitBubbles")&&(st.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),st._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&st.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return st.nodeName(this,"form")?!1:(st.event.remove(this,"._submit"),t)}}),st.support.changeBubbles||(st.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(st.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),st.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),st.event.simulate("change",this,e,!0)})),!1):(st.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!st._data(t,"changeBubbles")&&(st.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||st.event.simulate("change",this.parentNode,e,!0)}),st._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return st.event.remove(this,"._change"),!qt.test(this.nodeName)}}),st.support.focusinBubbles||st.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){st.event.simulate(t,e.target,st.event.fix(e),!0)};st.event.special[t]={setup:function(){0===n++&&V.addEventListener(e,r,!0)},teardown:function(){0===--n&&V.removeEventListener(e,r,!0)}}}),st.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(a=i,i=function(e){return st().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=st.guid++)),this.each(function(){st.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,st(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){st.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){st.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?st.event.trigger(e,n,r,!0):t},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){st.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},_t.test(t)&&(st.event.fixHooks[t]=st.event.keyHooks),Ft.test(t)&&(st.event.fixHooks[t]=st.event.mouseHooks)}),function(e,t){function n(e){return ht.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>C.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[P]=!0,e}function o(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,g;if((t?t.ownerDocument||t:R)!==L&&D(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!M&&!r){if(i=gt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&O(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,K.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&W.getByClassName&&t.getElementsByClassName)return Q.apply(n,K.call(t.getElementsByClassName(a),0)),n}if(W.qsa&&!q.test(e)){if(c=!0,d=P,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=dt.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return Q.apply(n,K.call(h.querySelectorAll(g),0)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,s,u,l,c=X[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){(!n||(r=ut.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=lt.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));for(o in C.filter)!(r=pt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):X(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=$+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[P]||(t[P]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===N)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||N,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,r,o,a){return r&&!r[P]&&(r=m(r)),o&&!o[P]&&(o=m(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||b(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?Z.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):Q.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=C.relative[e[s].type])c=[d(h(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!C.relative[e[r].type];r++);return m(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],b=null!=c,x=j,T=i||o&&C.find.TAG("*",c&&s.parentNode||s),w=$+=null==x?1:Math.E;for(b&&(j=s!==L&&s,N=n);null!=(f=T[y]);y++){if(o&&f){for(p=0;d=e[p];p++)if(d(f,s,u)){l.push(f);break}b&&($=w,N=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p];p++)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=G.call(l));h=g(h)}Q.apply(l,h),b&&!i&&h.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&($=w,j=x),v};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function x(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!M&&C.relative[o[1].type]){if(t=C.find.ID(a.matches[0].replace(xt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!C.relative[s=a.type]);i--)if((u=C.find[s])&&(r=u(a.matches[0].replace(xt,Tt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Q.apply(n,K.call(r,0)),n;break}}return S(e,l)(r,t,M,n,dt.test(e)),n}function T(){}var w,N,C,k,E,S,A,j,D,L,H,M,q,_,F,O,B,P="sizzle"+-new Date,R=e.document,W={},$=0,I=0,z=r(),X=r(),U=r(),V=typeof t,Y=1<<31,J=[],G=J.pop,Q=J.push,K=J.slice,Z=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),ut=RegExp("^"+et+"*,"+et+"*"),lt=RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=RegExp(ot),ft=RegExp("^"+nt+"$"),pt={ID:RegExp("^#("+tt+")"),CLASS:RegExp("^\\.("+tt+")"),NAME:RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:RegExp("^("+tt.replace("w","w*")+")"),ATTR:RegExp("^"+it),PSEUDO:RegExp("^"+ot),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/\{\s*\[native code\]\s*\}/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,vt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{K.call(H.childNodes,0)[0].nodeType}catch(wt){K=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=a.setDocument=function(e){var r=e?e.ownerDocument||e:R;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,M=E(r),W.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),W.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),W.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),W.getByName=o(function(e){e.id=P+0,e.innerHTML="<a name='"+P+"'></a><div name='"+P+"'></div>",H.insertBefore(e,H.firstChild);var t=r.getElementsByName&&r.getElementsByName(P).length===2+r.getElementsByName(P+0).length;return W.getIdNotName=!r.getElementById(P),H.removeChild(e),t}),C.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},W.getIdNotName?(C.find.ID=function(e,t){if(typeof t.getElementById!==V&&!M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(C.find.ID=function(e,n){if(typeof n.getElementById!==V&&!M){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=W.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},C.find.NAME=W.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},C.find.CLASS=W.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||M?t:n.getElementsByClassName(e)},_=[],q=[":focus"],(W.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||q.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||q.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&q.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(W.matchesSelector=n(F=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){W.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),_.push("!=",ot)}),q=RegExp(q.join("|")),_=RegExp(_.join("|")),O=n(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=H.compareDocumentPosition?function(e,t){var n;return e===t?(A=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||O(R,e)?-1:t===r||O(R,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return A=!0,0;if(e.sourceIndex&&t.sourceIndex)return(~t.sourceIndex||Y)-(O(R,e)&&~e.sourceIndex||Y);if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===R?-1:l[i]===R?1:0},A=!1,[0,0].sort(B),W.detectDuplicates=A,L):L},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==L&&D(e),t=t.replace(bt,"='$1']"),!(!W.matchesSelector||M||_&&_.test(t)||q.test(t)))try{var n=F.call(e,t);if(n||W.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,L,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),O(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==L&&D(e),M||(t=t.toLowerCase()),(n=C.attrHandle[t])?n(e):M||W.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(A=!W.detectDuplicates,e.sort(B),A){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},C=a.selectors={cacheLength:50,createPseudo:i,match:pt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return pt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[P]||(m[P]={}),l=c[e]||[],d=l[0]===$&&l[1],p=l[0]===$&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[$,d,p];break}}else if(v&&(l=(t[P]||(t[P]={}))[e])&&l[0]===$)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[P]||(f[P]={}))[e]=[$,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[P]?r(t):r.length>1?(n=[e,e,"",t],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(at,"$1"));return r[P]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ft.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=M?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w);S=a.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},C.pseudos.nth=C.pseudos.eq,C.filters=T.prototype=C.pseudos,C.setFilters=new T,D(),a.attr=st.attr,st.find=a,st.expr=a.selectors,st.expr[":"]=st.expr.pseudos,st.unique=a.uniqueSort,st.text=a.getText,st.isXMLDoc=a.isXML,st.contains=a.contains}(e);var Pt=/Until$/,Rt=/^(?:parents|prev(?:Until|All))/,Wt=/^.[^:#\[\.,]*$/,$t=st.expr.match.needsContext,It={children:!0,contents:!0,next:!0,prev:!0};st.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(st(e).filter(function(){for(t=0;r.length>t;t++)if(st.contains(r[t],this))return!0}));for(n=[],t=0;this.length>t;t++)st.find(e,this[t],n);return n=this.pushStack(st.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=st(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(st.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?$t.test(e)?st(e,this.context).index(this[0])>=0:st.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=$t.test(e)||"string"!=typeof e?st(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:st.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?st.unique(o):o)},index:function(e){return e?"string"==typeof e?st.inArray(this[0],st(e)):st.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?st(e,t):st.makeArray(e&&e.nodeType?[e]:e),r=st.merge(this.get(),n);return this.pushStack(st.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),st.fn.andSelf=st.fn.addBack,st.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return st.dir(e,"parentNode")},parentsUntil:function(e,t,n){return st.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")
},nextAll:function(e){return st.dir(e,"nextSibling")},prevAll:function(e){return st.dir(e,"previousSibling")},nextUntil:function(e,t,n){return st.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return st.dir(e,"previousSibling",n)},siblings:function(e){return st.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return st.sibling(e.firstChild)},contents:function(e){return st.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:st.merge([],e.childNodes)}},function(e,t){st.fn[e]=function(n,r){var i=st.map(this,t,n);return Pt.test(e)||(r=n),r&&"string"==typeof r&&(i=st.filter(r,i)),i=this.length>1&&!It[e]?st.unique(i):i,this.length>1&&Rt.test(e)&&(i=i.reverse()),this.pushStack(i)}}),st.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?st.find.matchesSelector(t[0],e)?[t[0]]:[]:st.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!st(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var zt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Xt=/ jQuery\d+="(?:null|\d+)"/g,Ut=RegExp("<(?:"+zt+")[\\s/>]","i"),Vt=/^\s+/,Yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Jt=/<([\w:]+)/,Gt=/<tbody/i,Qt=/<|&#?\w+;/,Kt=/<(?:script|style|link)/i,Zt=/^(?:checkbox|radio)$/i,en=/checked\s*(?:[^=]|=\s*.checked.)/i,tn=/^$|\/(?:java|ecma)script/i,nn=/^true\/(.*)/,rn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,on={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:st.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},an=p(V),sn=an.appendChild(V.createElement("div"));on.optgroup=on.option,on.tbody=on.tfoot=on.colgroup=on.caption=on.thead,on.th=on.td,st.fn.extend({text:function(e){return st.access(this,function(e){return e===t?st.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(st.isFunction(e))return this.each(function(t){st(this).wrapAll(e.call(this,t))});if(this[0]){var t=st(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return st.isFunction(e)?this.each(function(t){st(this).wrapInner(e.call(this,t))}):this.each(function(){var t=st(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=st.isFunction(e);return this.each(function(n){st(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){st.nodeName(this,"body")||st(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||st.filter(e,[n]).length>0)&&(t||1!==n.nodeType||st.cleanData(b(n)),n.parentNode&&(t&&st.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&st.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&st.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return st.clone(this,e,t)})},html:function(e){return st.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Xt,""):t;if(!("string"!=typeof e||Kt.test(e)||!st.support.htmlSerialize&&Ut.test(e)||!st.support.leadingWhitespace&&Vt.test(e)||on[(Jt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Yt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(st.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=st.isFunction(e);return t||"string"==typeof e||(e=st(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(st(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=et.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=st.isFunction(y);if(v||!(1>=f||"string"!=typeof y||st.support.checkClone)&&en.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=st.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&st.nodeName(o,"tr"),a=st.map(b(i,"script"),h),s=a.length;f>c;c++)u=i,c!==m&&(u=st.clone(u,!0,!0),s&&st.merge(a,b(u,"script"))),r.call(n&&st.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,st.map(a,g),c=0;s>c;c++)u=a[c],tn.test(u.type||"")&&!st._data(u,"globalEval")&&st.contains(l,u)&&(u.src?st.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):st.globalEval((u.text||u.textContent||u.innerHTML||"").replace(rn,"")));i=o=null}return this}}),st.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){st.fn[e]=function(e){for(var n,r=0,i=[],o=st(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),st(o[r])[t](n),tt.apply(i,n.get());return this.pushStack(i)}}),st.extend({clone:function(e,t,n){var r,i,o,a,s,u=st.contains(e.ownerDocument,e);if(st.support.html5Clone||st.isXMLDoc(e)||!Ut.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(sn.innerHTML=e.outerHTML,sn.removeChild(s=sn.firstChild)),!(st.support.noCloneEvent&&st.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||st.isXMLDoc(e)))for(r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)r[a]&&v(o,r[a]);if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);return r=b(s,"script"),r.length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;f>g;g++)if(o=e[g],o||0===o)if("object"===st.type(o))st.merge(h,o.nodeType?[o]:o);else if(Qt.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Jt.exec(o)||["",""])[1].toLowerCase(),u=on[a]||on._default,s.innerHTML=u[1]+o.replace(Yt,"<$1></$2>")+u[2],c=u[0];c--;)s=s.lastChild;if(!st.support.leadingWhitespace&&Vt.test(o)&&h.push(t.createTextNode(Vt.exec(o)[0])),!st.support.tbody)for(o="table"!==a||Gt.test(o)?"<table>"!==u[1]||Gt.test(o)?0:s:s.firstChild,c=o&&o.childNodes.length;c--;)st.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(st.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),st.support.appendChecked||st.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===st.inArray(o,r))&&(i=st.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),i&&m(s),n))for(c=0;o=s[c++];)tn.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,n){for(var r,i,o,a,s=0,u=st.expando,l=st.cache,c=st.support.deleteExpando,f=st.event.special;null!=(o=e[s]);s++)if((n||st.acceptData(o))&&(i=o[u],r=i&&l[i])){if(r.events)for(a in r.events)f[a]?st.event.remove(o,a):st.removeEvent(o,a,r.handle);l[i]&&(delete l[i],c?delete o[u]:o.removeAttribute!==t?o.removeAttribute(u):o[u]=null,K.push(i))}}});var un,ln,cn,fn=/alpha\([^)]*\)/i,pn=/opacity\s*=\s*([^)]*)/,dn=/^(top|right|bottom|left)$/,hn=/^(none|table(?!-c[ea]).+)/,gn=/^margin/,mn=RegExp("^("+ut+")(.*)$","i"),yn=RegExp("^("+ut+")(?!px)[a-z%]+$","i"),vn=RegExp("^([+-])=("+ut+")","i"),bn={BODY:"block"},xn={position:"absolute",visibility:"hidden",display:"block"},Tn={letterSpacing:0,fontWeight:400},wn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];st.fn.extend({css:function(e,n){return st.access(this,function(e,n,r){var i,o,a={},s=0;if(st.isArray(n)){for(i=ln(e),o=n.length;o>s;s++)a[n[s]]=st.css(e,n[s],!1,i);return a}return r!==t?st.style(e,n,r):st.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?st(this).show():st(this).hide()})}}),st.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=un(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":st.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=st.camelCase(n),l=e.style;if(n=st.cssProps[u]||(st.cssProps[u]=T(l,u)),s=st.cssHooks[n]||st.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=vn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(st.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||st.cssNumber[u]||(r+="px"),st.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=st.camelCase(n);return n=st.cssProps[u]||(st.cssProps[u]=T(e.style,u)),s=st.cssHooks[n]||st.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=un(e,n,i)),"normal"===o&&n in Tn&&(o=Tn[n]),r?(a=parseFloat(o),r===!0||st.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ln=function(t){return e.getComputedStyle(t,null)},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||st.contains(e.ownerDocument,e)||(u=st.style(e,n)),yn.test(u)&&gn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ln=function(e){return e.currentStyle},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),yn.test(u)&&!dn.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),st.each(["height","width"],function(e,n){st.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&hn.test(st.css(e,"display"))?st.swap(e,xn,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&ln(e);return C(e,t,r?k(e,n,r,st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,i),i):0)}}}),st.support.opacity||(st.cssHooks.opacity={get:function(e,t){return pn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=st.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===st.trim(o.replace(fn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=fn.test(o)?o.replace(fn,i):o+" "+i)}}),st(function(){st.support.reliableMarginRight||(st.cssHooks.marginRight={get:function(e,n){return n?st.swap(e,{display:"inline-block"},un,[e,"marginRight"]):t}}),!st.support.pixelPosition&&st.fn.position&&st.each(["top","left"],function(e,n){st.cssHooks[n]={get:function(e,r){return r?(r=un(e,n),yn.test(r)?st(e).position()[n]+"px":r):t}}})}),st.expr&&st.expr.filters&&(st.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!st.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||st.css(e,"display"))},st.expr.filters.visible=function(e){return!st.expr.filters.hidden(e)}),st.each({margin:"",padding:"",border:"Width"},function(e,t){st.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+wn[r]+t]=o[r]||o[r-2]||o[0];return i}},gn.test(e)||(st.cssHooks[e+t].set=C)});var Cn=/%20/g,kn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset)$/i,An=/^(?:input|select|textarea|keygen)/i;st.fn.extend({serialize:function(){return st.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=st.prop(this,"elements");return e?st.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!st(this).is(":disabled")&&An.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Zt.test(e))}).map(function(e,t){var n=st(this).val();return null==n?null:st.isArray(n)?st.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),st.param=function(e,n){var r,i=[],o=function(e,t){t=st.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=st.ajaxSettings&&st.ajaxSettings.traditional),st.isArray(e)||e.jquery&&!st.isPlainObject(e))st.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(Cn,"+")};var jn,Dn,Ln=st.now(),Hn=/\?/,Mn=/#.*$/,qn=/([?&])_=[^&]*/,_n=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Bn=/^\/\//,Pn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Rn=st.fn.load,Wn={},$n={},In="*/".concat("*");try{Dn=Y.href}catch(zn){Dn=V.createElement("a"),Dn.href="",Dn=Dn.href}jn=Pn.exec(Dn.toLowerCase())||[],st.fn.load=function(e,n,r){if("string"!=typeof e&&Rn)return Rn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),st.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&st.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?st("<div>").append(st.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},st.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){st.fn[t]=function(e){return this.on(t,e)}}),st.each(["get","post"],function(e,n){st[n]=function(e,r,i,o){return st.isFunction(r)&&(o=o||i,i=r,r=t),st.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),st.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Fn.test(jn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":In,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":st.parseJSON,"text xml":st.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,st.ajaxSettings),t):H(st.ajaxSettings,e)},ajaxPrefilter:D(Wn),ajaxTransport:D($n),ajax:function(e,n){function r(e,n,r,s){var l,f,v,b,T,N=n;2!==x&&(x=2,u&&clearTimeout(u),i=t,a=s||"",w.readyState=e>0?4:0,r&&(b=M(p,w,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(st.lastModified[o]=T),T=w.getResponseHeader("etag"),T&&(st.etag[o]=T)),304===e?(l=!0,N="notmodified"):(l=q(p,b),N=l.state,f=l.data,v=l.error,l=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",l?g.resolveWith(d,[f,N,w]):g.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[w,p,l?f:v]),m.fireWith(d,[w,N]),c&&(h.trigger("ajaxComplete",[w,p]),--st.active||st.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=st.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?st(d):st.event,g=st.Deferred(),m=st.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=_n.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(g.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((e||p.url||Dn)+"").replace(Mn,"").replace(Bn,jn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=st.trim(p.dataType||"*").toLowerCase().match(lt)||[""],null==p.crossDomain&&(l=Pn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===jn[1]&&l[2]===jn[2]&&(l[3]||("http:"===l[1]?80:443))==(jn[3]||("http:"===jn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=st.param(p.data,p.traditional)),L(Wn,p,n,w),2===x)return w;c=p.global,c&&0===st.active++&&st.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!On.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(Hn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(o)?o.replace(qn,"$1_="+Ln++):o+(Hn.test(o)?"&":"?")+"_="+Ln++)),p.ifModified&&(st.lastModified[o]&&w.setRequestHeader("If-Modified-Since",st.lastModified[o]),st.etag[o]&&w.setRequestHeader("If-None-Match",st.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+In+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)w.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,w,p)===!1||2===x))return w.abort();T="abort";for(f in{success:1,error:1,complete:1})w[f](p[f]);if(i=L($n,p,n,w)){w.readyState=1,c&&h.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(N){if(!(2>x))throw N;r(-1,N)}}else r(-1,"No Transport");return w},getScript:function(e,n){return st.get(e,t,n,"script")},getJSON:function(e,t,n){return st.get(e,t,n,"json")}}),st.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return st.globalEval(e),e}}}),st.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),st.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||st("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Xn=[],Un=/(=)\?(?=&|$)|\?\?/;st.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xn.pop()||st.expando+"_"+Ln++;return this[e]=!0,e}}),st.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Un.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Un.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=st.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Un,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||st.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Xn.push(o)),s&&st.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Vn,Yn,Jn=0,Gn=e.ActiveXObject&&function(){var e;for(e in Vn)Vn[e](t,!0)};st.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,Yn=st.ajaxSettings.xhr(),st.support.cors=!!Yn&&"withCredentials"in Yn,Yn=st.support.ajax=!!Yn,Yn&&st.ajaxTransport(function(n){if(!n.crossDomain||st.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=st.noop,Gn&&delete Vn[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),p&&p.documentElement&&(f.xml=p),"string"==typeof u.responseText&&(f.text=u.responseText);try{l=u.statusText}catch(d){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,l,f,c)},n.async?4===u.readyState?setTimeout(r):(a=++Jn,Gn&&(Vn||(Vn={},st(e).unload(Gn)),Vn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Qn,Kn,Zn=/^(?:toggle|show|hide)$/,er=RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),tr=/queueHooks$/,nr=[W],rr={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=er.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(st.cssNumber[e]?"":"px"),"px"!==r&&s){s=st.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,st.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};st.Animation=st.extend(P,{tweener:function(e,t){st.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],rr[n]=rr[n]||[],rr[n].unshift(t)},prefilter:function(e,t){t?nr.unshift(e):nr.push(e)}}),st.Tween=$,$.prototype={constructor:$,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(st.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop];return this.pos=t=this.options.duration?st.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=st.css(e.elem,e.prop,"auto"),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){st.fx.step[e.prop]?st.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[st.cssProps[e.prop]]||st.cssHooks[e.prop])?st.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},st.each(["toggle","show","hide"],function(e,t){var n=st.fn[t];st.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),st.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=st.isEmptyObject(e),o=st.speed(t,n,r),a=function(){var t=P(this,st.extend({},e),o);a.finish=function(){t.stop(!0)},(i||st._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=st.timers,a=st._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&tr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&st.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=st._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=st.timers,a=r?r.length:0;for(n.finish=!0,st.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),st.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){st.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),st.speed=function(e,t,n){var r=e&&"object"==typeof e?st.extend({},e):{complete:n||!n&&t||st.isFunction(e)&&e,duration:e,easing:n&&t||t&&!st.isFunction(t)&&t};return r.duration=st.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in st.fx.speeds?st.fx.speeds[r.duration]:st.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){st.isFunction(r.old)&&r.old.call(this),r.queue&&st.dequeue(this,r.queue)},r},st.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},st.timers=[],st.fx=$.prototype.init,st.fx.tick=function(){var e,n=st.timers,r=0;for(Qn=st.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||st.fx.stop(),Qn=t},st.fx.timer=function(e){e()&&st.timers.push(e)&&st.fx.start()},st.fx.interval=13,st.fx.start=function(){Kn||(Kn=setInterval(st.fx.tick,st.fx.interval))},st.fx.stop=function(){clearInterval(Kn),Kn=null},st.fx.speeds={slow:600,fast:200,_default:400},st.fx.step={},st.expr&&st.expr.filters&&(st.expr.filters.animated=function(e){return st.grep(st.timers,function(t){return e===t.elem}).length}),st.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){st.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,st.contains(n,o)?(o.getBoundingClientRect!==t&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},st.offset={setOffset:function(e,t,n){var r=st.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=st(e),s=a.offset(),u=st.css(e,"top"),l=st.css(e,"left"),c=("absolute"===r||"fixed"===r)&&st.inArray("auto",[u,l])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),st.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},st.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===st.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),st.nodeName(e[0],"html")||(n=e.offset()),n.top+=st.css(e[0],"borderTopWidth",!0),n.left+=st.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-st.css(r,"marginTop",!0),left:t.left-n.left-st.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!st.nodeName(e,"html")&&"static"===st.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),st.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);st.fn[e]=function(i){return st.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?st(a).scrollLeft():o,r?o:st(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),st.each({Height:"height",Width:"width"},function(e,n){st.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){st.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return st.access(this,function(n,r,i){var o;return st.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?st.css(n,r,s):st.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=st,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return st})})(window);
/**
 * jQuery JSON plugin 2.4.0
 *
 * @author Brantley Harris, 2009-2011
 * @author Timo Tijhof, 2011-2012
 * @source This plugin is heavily influenced by MochiKit's serializeJSON, which is
 *         copyrighted 2005 by Bob Ippolito.
 * @source Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 *         website's http://www.json.org/json2.js, which proclaims:
 *         "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 *         I uphold.
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
(function ($) {
    'use strict';

    var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        hasOwn = Object.prototype.hasOwnProperty;

    /**
     * jQuery.toJSON
     * Converts the given argument into a JSON representation.
     *
     * @param o {Mixed} The json-serializable *thing* to be converted
     *
     * If an object has a toJSON prototype, that will be used to get the representation.
     * Non-integer/string keys are skipped in the object, as are keys that point to a
     * function.
     *
     */
    $.toJSON = typeof JSON === 'object' && JSON.stringify ? JSON.stringify : function (o) {
        if (o === null) {
            return 'null';
        }

        var pairs, k, name, val,
            type = $.type(o);

        if (type === 'undefined') {
            return undefined;
        }

        // Also covers instantiated Number and Boolean objects,
        // which are typeof 'object' but thanks to $.type, we
        // catch them here. I don't know whether it is right
        // or wrong that instantiated primitives are not
        // exported to JSON as an {"object":..}.
        // We choose this path because that's what the browsers did.
        if (type === 'number' || type === 'boolean') {
            return String(o);
        }
        if (type === 'string') {
            return $.quoteString(o);
        }
        if (typeof o.toJSON === 'function') {
            return $.toJSON(o.toJSON());
        }
        if (type === 'date') {
            var month = o.getUTCMonth() + 1,
                day = o.getUTCDate(),
                year = o.getUTCFullYear(),
                hours = o.getUTCHours(),
                minutes = o.getUTCMinutes(),
                seconds = o.getUTCSeconds(),
                milli = o.getUTCMilliseconds();

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            if (milli < 100) {
                milli = '0' + milli;
            }
            if (milli < 10) {
                milli = '0' + milli;
            }
            return '"' + year + '-' + month + '-' + day + 'T' +
                hours + ':' + minutes + ':' + seconds +
                '.' + milli + 'Z"';
        }

        pairs = [];

        if ($.isArray(o)) {
            for (k = 0; k < o.length; k++) {
                pairs.push($.toJSON(o[k]) || 'null');
            }
            return '[' + pairs.join(',') + ']';
        }

        // Any other object (plain object, RegExp, ..)
        // Need to do typeof instead of $.type, because we also
        // want to catch non-plain objects.
        if (typeof o === 'object') {
            for (k in o) {
                // Only include own properties,
                // Filter out inherited prototypes
                if (hasOwn.call(o, k)) {
                    // Keys must be numerical or string. Skip others
                    type = typeof k;
                    if (type === 'number') {
                        name = '"' + k + '"';
                    } else if (type === 'string') {
                        name = $.quoteString(k);
                    } else {
                        continue;
                    }
                    type = typeof o[k];

                    // Invalid values like these return undefined
                    // from toJSON, however those object members
                    // shouldn't be included in the JSON string at all.
                    if (type !== 'function' && type !== 'undefined') {
                        val = $.toJSON(o[k]);
                        pairs.push(name + ':' + val);
                    }
                }
            }
            return '{' + pairs.join(',') + '}';
        }
    };

    /**
     * jQuery.evalJSON
     * Evaluates a given json string.
     *
     * @param str {String}
     */
    $.evalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (str) {
        /*jshint evil: true */
        return eval('(' + str + ')');
    };

    /**
     * jQuery.secureEvalJSON
     * Evals JSON in a way that is *more* secure.
     *
     * @param str {String}
     */
    $.secureEvalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (str) {
        var filtered =
            str
                .replace(/\\["\\\/bfnrtu]/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, '');

        if (/^[\],:{}\s]*$/.test(filtered)) {
            /*jshint evil: true */
            return eval('(' + str + ')');
        }
        throw new SyntaxError('Error parsing JSON, source is not valid.');
    };

    /**
     * jQuery.quoteString
     * Returns a string-repr of a string, escaping quotes intelligently.
     * Mostly a support function for toJSON.
     * Examples:
     * >>> jQuery.quoteString('apple')
     * "apple"
     *
     * >>> jQuery.quoteString('"Where are we going?", she asked.')
     * "\"Where are we going?\", she asked."
     */
    $.quoteString = function (str) {
        if (str.match(escape)) {
            return '"' + str.replace(escape, function (a) {
                var c = meta[a];
                if (typeof c === 'string') {
                    return c;
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + str + '"';
    };

}(jQuery));

// 2.4
kolos.Animate = {
    _loaders: {},
    /**
     *
     * @param containerTagId
     * @param text
     * @param height
     * @param timeout
     * @returns {kolos.AnimateLoader}
     */
    loader: function (containerTagId, text, height, timeout) {
        var animate = new kolos.AnimateLoader(containerTagId, text, height, timeout);
        animate.start(); // сразу запускаем его
        return animate;
    },
    /**
     *
     * @param text
     * @param height
     * @param timeout
     * @returns {kolos.AnimateLoaderDialog}
     */
    loaderDialog: function (text, timeout) {
        var animate = new kolos.AnimateLoaderDialog(text, timeout);
        animate.start(); // сразу запускаем его
        return animate;
    },
    init: function() {
        // добавляение стия иконки загрузки
        var cssIcon = `
        <style>
            .icon-load {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.0' width='20px' height='20px' viewBox='0 0 128 128' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23000000' fill-opacity='1'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23e5e5e5' fill-opacity='0.1' transform='rotate(30 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23e5e5e5' fill-opacity='0.1' transform='rotate(60 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23e5e5e5' fill-opacity='0.1' transform='rotate(90 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23cecece' fill-opacity='0.19' transform='rotate(120 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23b7b7b7' fill-opacity='0.28' transform='rotate(150 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%239f9f9f' fill-opacity='0.38' transform='rotate(180 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23898989' fill-opacity='0.46' transform='rotate(210 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23727272' fill-opacity='0.55' transform='rotate(240 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%235c5c5c' fill-opacity='0.64' transform='rotate(270 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%23444444' fill-opacity='0.73' transform='rotate(300 64 64)'/%3E%3Cpath d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z' fill='%232e2e2e' fill-opacity='0.82' transform='rotate(330 64 64)'/%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64' calcMode='discrete' dur='1080ms' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/g%3E%3C/svg%3E");
                background-repeat: no-repeat no-repeat;
                background-position: center center;
                background-size: contain;
                vertical-align: middle;
                margin-top: -3px;
                display: inline-block;
            }
            .icon-load-world {
                background-image: url(data:image/png;base64,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);
                width: 32px;
                height: 32px;
                background-repeat: no-repeat no-repeat;
                background-position: center center;
                background-size: contain;
                vertical-align: middle;
                margin-top: -3px;
                display: inline-block;
            }
            .icon-load-world2 {
                background-image: url(data:image/png;base64,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);
                width: 32px;
                height: 32px;
                background-repeat: no-repeat no-repeat;
                background-position: center center;
                background-size: contain;
                vertical-align: middle;
                margin-top: -3px;
                display: inline-block;
            }
            .icon-load-clock {
                background-image: url(data:image/png;base64,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);
                width: 32px;
                height: 32px;
                background-repeat: no-repeat no-repeat;
                background-position: center center;
                background-size: contain;
                vertical-align: middle;
                margin-top: -3px;
                display: inline-block;
            }
            
        </style>`;
        $('head').append(cssIcon);
    }
};

// инициализируем анимацию
kolos.Animate.init();


kolos.AnimateLoader = function(containerTagId, text, height, timeout, showError) {
    if (text === undefined) {
        text = '';
    }
    if (height === undefined || height === 0) {
        //высоту подстраиваем под высоту контейнера
        height = $(containerTagId).innerHeight();
        if (height === undefined || height === 0) {
            height = 16;
        }
    }
    if (timeout === undefined) {
        timeout = 30 * 60000;
    }
    var Self = this;
    this.globalId = kolos.Global.add(this);
    this.tagId = kolos.Global.getTagId(this.globalId);
    this.containerTagId = containerTagId;
    this._text = text;
    this._height = height;
    this.timeout = timeout;
    this.contentMem = '';
    this.timerTimeout = undefined;

    this._construct = function() {
        // сразу задаём уникальным ключом контенерId
        this.unique(this.containerTagId);
    };

    // this.start__clone = function() {
    //     // клонируем элемент
    //     var clone = $(this.containerTagId).clone(true);
    //     // меняем id на клона
    //     clone.attr('id', clone.attr('id') + '-clone');
    //     // сбрасываем события
    //     clone.removeAttr('href');
    //     clone.removeAttr('onclick');
    //     clone.html('Загрузка');
    //     clone.val('Загрузка...');
    //     $(this.containerTagId).after(clone);
    //     $(this.containerTagId).hide();
    // };


    this.start = function () {
        var html = '<div id="' + this.tagId + '" style="display: inline-block; line-height: ' + this._height + 'px; height: ' + this._height + 'px; min-width: ' + this._height + 'px;">' +
            //'<img class="icon" src="/static/img/load/load1.svg?v=v1.1" height="' + this._height + '"> ' + this._text + '</div>';
            '<span class="icon-load" style="height: 20px; width: 20px;"></span> ' + this._text + '</div>';
        //запоминаем то что было
        this.contentMem = $(this.containerTagId).html();

        //выводим загрузчик
        $(this.containerTagId).html(html);

        if (timeout !== undefined) {
            //выводим индикатор с задержкой, на случай если данные вернутся быстрее чем 500, чтобы не мерцал загрузчик
            this.timerTimeout = setTimeout(function () {
                //Сбрасываем загрузку
                Self.cancel();
                if (showError !== undefined) {
                    $(Self.containerTagId).html('Error: timeout');
                }
            }, timeout);
        }
        return this;
    };

    //задать уникальный ключ, в данном случае предыдущий аниматор останавливается
    this.unique = function(key) {
        if (kolos.Animate._loaders[key] !== undefined) {
            kolos.Animate._loaders[key].cancel();
        }
        kolos.Animate._loaders[key] = this;
        return this;
    };

    this.height = function(height) {
        this._height = height;
        return this;
    };

    this.text = function(text) {
        this._text = text;
        return this;
    };

    this.cancel = function() {
        //сбрасываем таймер задержки
        if (this.timerTimeout !== undefined) {
            clearTimeout(this.timerTimeout);
        }
        //$('#' + this.tagId).remove();
        $(this.containerTagId).html(this.contentMem);
        kolos.Global.remove(this.globalId);
    };

    this.hide = function() {
        this.cancel();
    };

    this.stop = function() {
        this.cancel();
    };

    this._construct();
};


kolos.AnimateLoaderDialog = function(text, timeout, showError) {
    if (text === undefined) {
        text = '';
    }
    if (timeout === undefined) {
        timeout = 30 * 60000;
    }
    var Self = this;
    this.globalId = kolos.Global.add(this);
    this.tagId = '#' + kolos.Global.getTagId(this.globalId);
    this._text = text !== undefined ? text : 'Загрузка...';
    this.timeout = timeout;
    this.timerTimeout = undefined;

    this._construct = function() {
        // сразу задаём уникальным ключом контенерId
        this.unique("AnimateLoaderMessage");
    };


    this.start = function () {
        var html = `<div id="` + this.tagId.slice(1) + `" class="p-norm ib"  style="position: absolute;
            left: 0px;
            top: 0px;
            background: white;
            padding: 10px;
            box-shadow: 2px 3px 10px 0px rgb(200 200 200);
            border: 1px solid #bdc1d6;">
            <span class="icon-load-world2" ></span>
            ` + this._text + `
        </div>`;

        //выводим загрузчик
        $('body').append(html);

        kolos.Utils.toCenterTop(this.tagId);

        if (timeout !== undefined) {
            //выводим индикатор с задержкой, на случай если данные вернутся быстрее чем 500, чтобы не мерцал загрузчик
            this.timerTimeout = setTimeout(function () {
                //Сбрасываем загрузку
                Self.cancel();
                if (showError !== undefined) {
                    $(Self.containerTagId).html('Error: timeout');
                }
            }, timeout);
        }
        return this;
    };

    //задать уникальный ключ, в данном случае предыдущий аниматор останавливается
    this.unique = function(key) {
        if (kolos.Animate._loaders[key] !== undefined) {
            kolos.Animate._loaders[key].cancel();
        }
        kolos.Animate._loaders[key] = this;
        return this;
    };

    this.text = function(text) {
        this._text = text;
        return this;
    };

    this.cancel = function() {
        //сбрасываем таймер задержки
        if (this.timerTimeout !== undefined) {
            clearTimeout(this.timerTimeout);
        }
        $(this.tagId).remove();
        kolos.Global.remove(this.globalId);
    };

    this.hide = function() {
        this.cancel();
    };

    this.stop = function() {
        this.cancel();
    };

    this._construct();
};// внутренний класс
kolos.ComponentContext = function() {
    /** родительский компонент */
    this.parent = undefined;
    this.baseElement = undefined;
    this.fullClassName = undefined;
    this.className = undefined;
    this.namespace = undefined;
    this.name = undefined;
    // ниже инфа заполняется при создании
    this.globalId = undefined;
    this.tagId = undefined;
    /** @type {Element} */
    this.element = undefined;
    /**
     * Компонент подготовлен к инициализации (создан, выставлены необходимые поля)
     * @type {boolean}
     */
    this.isPrepared = false;
    /**
     * Компонент инициализирован
     */
    this.isInit = false;
    this.path = '';
}

kolos.ComponentManager = function (rootPath) {
    let Self = this;
    /**
     * Корневой путь для загрузки скриптов
     * @type {string}
     */
    this.rootPath = rootPath !== undefined ? rootPath : '/';
    /**
     * Все компоненты загружаемые через данный менеджер
     * @type {{}}
     */
    this.__components = {};
    /**
     * Таймер проверяющий загрузку компонетов
     */
    this.__timerCheckInitComponent = undefined;
    /**
     * Кэш классов компонентов
     */
    this.__cacheClass = {};


    this.__filterNameSpace = function(name) {
        return name.replace(/[^a-zA-Zа-яА-Я\.\-\d]/ig, "");
    }

    /**
     * Free components from memory
     */
    this.freeAll = function() {
        for (let i in this.__components) {
            let comp = this.__components[i];
            this.freeComponent(comp);
        }
        this.__components = {};
    }

    this.destroyComponent = function (comp) {
        this.freeComponent(comp);
        // remove dom element
        if (comp.context !== undefined && comp.element !== undefined) {
            $(comp.context.component).remove();
        }
    }

    this.freeComponent = function(comp) {
        try {
            if (comp !== undefined) {
                if (comp.onDestroy !== undefined) {
                    try {
                        comp.onDestroy();
                    } catch (e) {
                        console.log(e);
                    }
                }
                /** @var {kolos.ComponentContext} comp.context */
                if (comp.context !== undefined) {
                    kolos.Global.remove(comp.context.globalId);
                    delete Self.__components[comp.context.globalId];
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * Full destroy components
     */
    this.destroyAll = function() {
        for (let i in this.__components) {
            let comp = this.__components[i];
            this.destroyComponent(comp);
        }
        this.__components = {};
    }

    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------

    /**
     * Построить дерево компонентов
     */
    this.__buildTreeElementComponent = function (elements, parentNode)
    {
        if (parentNode === undefined) {
            parentNode = {
                element: undefined,
                child: []
            };
        }

        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            // достаём класс компонента
            let classComp = $(element).attr('component');

            if (classComp !== undefined) {
                // есть класс, значит это компонент
                let newNode = {
                    'element' : element,
                    'child': []
                }
                // добавляем в родителя
                parentNode.child.push(newNode);
                this.__buildTreeElementComponent($(element).children(), newNode);
            } else {
                // иначе это обычный элемент, обрабатываем его потомков, с текущим родителем
                this.__buildTreeElementComponent($(element).children(), parentNode);
            }
        }

        return parentNode;
    }

    /**
     * Построить контекст для каждого элемента в дереве
     */
    this.__buildContextInTree = function (nodes) {
        for (let i in nodes) {
            let node = nodes[i];
            node.context = this.__buildContext(node.element, undefined);
            this.__buildContextInTree(node.child);
        }
    }


    this.__buildPathComponent = function (context) {
        // формируем url
        let url;
        let subNameSpace = context.namespace.replace('kolos.', '');
        let coreComponents = [
            'component'
        ];
        // компоненты ядра грузим из каталога kolos
        if (coreComponents.includes(subNameSpace)) {
            // формируем адрес загрузки
            url = Self.rootPath
                + '/kolos/' + subNameSpace;
        } else {
            url = Self.rootPath
                + '/' + subNameSpace;
        }
        return url;
    }

    /**
     * @param {kolos.ComponentContext} context
     * @private
     */
    this.__buildUrl = function (context) {
        // формируем url
        return context.path + '/' + context.className + '.js';
    }

    /**
     * Предварительная загрузка скриптов компонентов в дереве
     */
    this.__preloadComponentsInTree = function (nodes) {
        for (let i in nodes) {
            let node = nodes[i];
            let url = this.__buildUrl(node.context);

            // просто загружаем скрипт
            kolos.Utils.loadScriptAndExec(url, undefined);

            this.__preloadComponentsInTree(node.child);
        }
    }

    /**
     * Создать базовую часть компонента по контексту
     */
    this.__createBaseComponentFromContext = function (context, parent, callback) {
        let url = this.__buildUrl(context);
        // загружаем скрипт компонента
        kolos.Utils.loadScriptAndExec(url, function () {

            // материализуем класс компонента из строки (включая пространство имён)
            let componentClass = Self.__getComponentClass(context);

            // создаём компонент
            let component = new componentClass();
            component.context = context;

            // создаём обязательные поля, если ранее не были заданы
            // вложенные компоненты
            if (component.component === undefined) component.component = {};
            // dom элементы компонента, у которых заданы id (для быстрого доступа)
            if (component.element === undefined) component.element = {};
            // дополнительные параметры компонента, которые можно задачть через атрибут param
            if (component.param === undefined) component.param = {};
            // для проверки инициализации вложенных компонентов
            component.__checkSubCompInit = [];
            // методы которые нужно вызвать по готовности компонента
            component.__ready = [];

            // добавляем стандартные методы для вызова по готовности
            // сначала вызывается метод сообщающий о готовности
            if (component.onReady !== undefined) {
                component.__ready.push(component.onReady);
            }

            // добавляем в глобальные объекты и запоминаем его globalId
            context.globalId = kolos.Global.add(component);
            context.tagId = 'k-c-g' + context.globalId;

            // запоминаем компонент в менеджере
            Self.__components[context.globalId] = component;

            if (parent !== undefined) {
                // запоминаем родителя
                context.parent = parent;
                // добавляем в список компонентов родительского компонента
                parent.component[component.context.name] = component;
                // добавляем в список ожидания готовности
                parent.__checkSubCompInit.push(context);
            }


            // делаем метод загрузки простых файлов
            component.loadFile = function(fileName, callback) {
                let urlFile = context.path + '/' + fileName + '?v=' + kolos.Utils.getVer();
                $.ajax({
                    url: urlFile,
                    dataType: 'text',
                    type: 'GET',
                    async: true,
                    success: function (response) {
                        callback(response);
                    }
                });
            }



            // проверяем, если нет метода шаблона в компоненте, то загружаем шаблон отдельно
            if (component.template === undefined) {
                let urlTpl = context.path + '/' + context.className +'.html' + '?v=' + kolos.Utils.getVer();
                $.ajax({
                    url: urlTpl,
                    dataType: 'text',
                    type: 'GET',
                    async: true,
                    success: function (response) {
                        // создаём метод с загруженным шаблоном
                        component.template = function () {
                            return response;
                        }

                        callback(component);
                    }
                });
            } else {
                callback(component);
            }
        });
    }

    /**
     * Посчитать кол-во нод
     */
    this.__getCountNodes = function (nodes, count) {
        if (count === undefined) {
            count = 0;
        }
        for (let i in nodes) {
            count++;
            let node = nodes[i];
            count = this.__getCountNodes(node.child, count);
        }
        return count;
    }

    /**
     * Создать базовую часть компонента для каждой ноды
     */
    this.__createBaseComponentInTree = function (nodes, parent, callbackOneCreated) {
        for (let i in nodes) {
            let node = nodes[i];
            // создаём корневой компонент
            this.__createBaseComponentFromContext(node.context, parent, function (component) {
                node.component = component;

                // рекурсивно создаём компоненты потомков
                Self.__createBaseComponentInTree(node.child, parent, function (childComponent) {
                    // // добавляем в список ожидания инициализации в родительский компонент
                    // component.__checkSubCompInit.push(childComponent.context);
                    callbackOneCreated(childComponent);
                });

                // выполняем каждый раз при создании компонента
                callbackOneCreated(component);
            });
        }
    }

    /**
     * Получить очередь компонентов в обратном порядке начиная с последнего элемента
     * (обратный порядок нужен для инициализации, сначала вложенные компоненты, затем более верхние)
     */
    this.__getQueueComponents = function (nodes) {
        function recurAddToQueue (nodes, queue) {
            if (queue === undefined) {
                queue = [];
            }
            for (let i in nodes) {
                let node = nodes[i];
                queue.push(node.component);
                recurAddToQueue(node.child, queue);
            }
            return queue;
        }
        // строим последовательную очередь
        let queue = recurAddToQueue(nodes);
        // реверсим очередь
        return queue.reverse();
    }

    this.__initComponentAttributes = function (component) {
        let context = component.context;
        let attr = {};

        for (let i in context.baseElement.attributes) {
            let attribute = context.baseElement.attributes[i];
            if (attribute.nodeName) {
                attr[attribute.nodeName] = attribute.nodeValue;
            }
        }

        // удаляем служебные поля
        delete attr['id'];
        delete attr['name'];
        delete attr['component'];
        delete attr['param'];
        // delete attr['class'];
        component.attr = kolos.Utils.merge(component.attr, attr);
    }

    this.__initComponentParam = function (component) {
        let context = component.context;
       // парсим параметры из элемента из атрибута param, и задаём в параметры компонента
        let paramStr = $(context.baseElement).attr('param');
        if (paramStr !== undefined) {
            let paramPairList = paramStr.split(';');
            for (let i in paramPairList) {
                let paramPairStr = paramPairList[i];
                let iSplit = paramPairStr.indexOf(':');
                let keyParam = paramPairStr.substring(0, iSplit).trim();
                let valueParam = paramPairStr.substring(iSplit + 1, paramPairStr.length).trim();
                if (keyParam !== '') {
                    component.param[keyParam] = valueParam;
                }
            }
        }
    }

    function parseParamTag(text) {
        let result = [];
        let open = false;
        let key = '';
        for (let i = 0; i < text.length - 1; i++) {
            let char1 = text[i];
            let char2 = text[i + 1];
            if (char1 === '[' && char2 === '[') {
                open = true;
                i += 2;
                key = '';
            } else if (char1 === ']' && char2 === ']') {
                open = false;
                i += 2;
                result.push(key);
                key = '';
            }

            if (open) {
                key += text[i];
            }
        }
        return result;
    }

    //---------------------------------------------------------------------------------


    this.__buildQueueNode = function (nodes) {
        function recurAddToQueue (nodes, queue) {
            if (queue === undefined) {
                queue = [];
            }
            for (let i in nodes) {
                let node = nodes[i];
                queue.push(node);
                recurAddToQueue(node.child, queue);
            }
            return queue;
        }
        // строим последовательную очередь
        let queue = recurAddToQueue(nodes);
        // реверсим очередь
        return queue.reverse();
    }


    /**
     * Init component from dom element
     * @param {[Element]} elements
     * @param parent
     * @param {function} callback
     * @returns {kolos.ComponentContext}
     */
    this.initComponent = function(elements, parent, callback) {

        // 1) строим дерево элементов компонентов
        let rootNode = this.__buildTreeElementComponent(elements);

        // 2) строим контекст для каждой ноды
        this.__buildContextInTree(rootNode.child);




        // Делаем так, чтобы родительский компонент ждал загрузки
        // Добавляем в ожидание загрузки в родительски компонент
        if (parent !== undefined) {
            let queueNodes = Self.__buildQueueNode(rootNode.child);
            for (let i in queueNodes) {
                if (queueNodes[i] !== undefined) {
                    let nodeTmp = queueNodes[i];
                    // добавляем в список ожидания инициализации в родительский компонент
                    parent.__checkSubCompInit.push(nodeTmp.context);
                }
            }
        }





        // 3) выполняем предварительную загрузку компонентов
        this.__preloadComponentsInTree(rootNode.child);

        // 4) создаём базовую часть компонента каждой ноды
        // считаем кол-во нод
        let countNodes = this.__getCountNodes(rootNode.child);
        let countCreated = 0;
        this.__createBaseComponentInTree(rootNode.child, parent,  function (newComponent) {
            // считаем кол-во созданных компонентов
            countCreated++;

            //console.log(countNodes + ' = ' + countCreated)

            // если все созданы, можно инициализировать
            if (countNodes === countCreated) {

                // пока сюда впиндюрим
                Self.__checkInitTree.push(rootNode);

                // 5) инициализируем все компоненты (очередь в обратно порядке)
                let components = Self.__getQueueComponents(rootNode.child);
                for (let i in components) {

                    let component = components[i];
                    let context = component.context;

                    console.log("-- BEGIN -- >>");

                    kolos.Utils.debug('Init component: ' + component.context.name + ' (' + component.context.fullClassName + ')');

                    // 6) инициализируем атрибуты
                    Self.__initComponentAttributes(component);

                    // 7) инициализируем параметры
                    Self.__initComponentParam(component);



                    //------------

                    // Ниже хардкор... нужно привести в порядок....



                    let contentElements = $(component.context.baseElement).children();

                    // если элементов нет, то пробуем забрать текст
                    if (contentElements.length === 0) {
                        contentElements = $(component.context.baseElement).html();
                    }

                    //console.log(contentElements);


                    let template = component.template();


                    // подготавливаем тег для вложенного контента
                    template = template.replaceAll('[[content]]', '<span id="__content"></span>');


                    // в шаблоне заменяем имя класса на вызов глобального объекта компонента
                    // (таким образов все вызовы будут принадлежать к своему экземпляру)
                    template = kolos.ComponentManager.replaceCallActions(template, component);


                    // достаём все теги в шаблоне формата [[tag]]
                    let paramTag = parseParamTag(template);
                    // заменяем все теги на параметры по ключу (пока таким костыльным способом, потом прикрутим шаблонизатор)
                    for (let i in paramTag) {
                        let keyParam = paramTag[i];
                        template = template.replaceAll(
                            '[[' + keyParam + ']]',
                            component.param[keyParam] !== undefined ? component.param[keyParam] : ''
                        );
                    }



                    let memory = $('<div></div>');

                    memory.append(template);


                    // 8) ищем все элементы с тегом id, и добавляем им префикс, а также делаем ссылку на них
                    let elementIdList = memory.find("[id]");
                    for (let i = 0; i < elementIdList.length; i++) {
                        let el = elementIdList[i];
                        let elTagId = $(el).attr('id');
                        // подменяем tagId
                        $(el).attr('id', context.tagId + '-' + elTagId);
                        // запоминаем элементы для быстрого обращения к ним (например: this.element.label1.innerHTML = 'text')
                        component.element[elTagId] = el;
                    }

                    // 9) достаём первый элемент компонента, он считается главнымs
                    // (считается что весь компонента заворачивается в один элемент, поэтому берём первый)
                    context.element = $(memory).find(":first-child")[0];
                    $(context.element).attr('id', context.tagId);
                    $(context.element).attr('cmp-name', context.name);


                    // 11) переносим атрибуты

                    // предварительно объединяем классы шаблона и класс в атрибутах
                    if (component.attr['class'] !== undefined) {
                        component.attr['class'] = $(context.element).attr('class') + ' ' + component.attr['class'];
                    }

                    for (let attrName in component.attr) {
                        $(context.element).attr(attrName, component.attr[attrName]);
                    }


                    //----


                    Self.initComponent(memory.children(), component, function (newSubComponent) {

                        //console.log('SUB_INIT');

                    });


                    console.error("COMP_AFTER_SUB_TEMPL", component);


                    //---


                    let contentContainer = memory.find('#' + context.tagId + '-__content');

                    $(contentContainer).replaceWith(
                        contentElements
                    );

                    // console.log("ИТОГО:");
                    // console.log(memory.html());


                    // // отрисовываем компонент, когда всё готово
                    // component.__ready.push(function () {
                    //     $(component.context.baseElement).replaceWith(
                    //         memory.children()
                    //     );
                    // });

                    $(component.context.baseElement).replaceWith(
                        memory.children()
                    );


                    console.log("-- END -- <<");



                    // затем добавляем колбэк завершения инициализации менеджера
                    if (callback !== undefined) {
                        component.__ready.push(callback);
                    }





                    // console.error("++++++++++\n", component.__checkSubCompInit);
                    let strSubInit = "\n";
                    for (let f in component.__checkSubCompInit) {
                        /** @type {kolos.ComponentContext} */
                        let cntx = component.__checkSubCompInit[f];
                        strSubInit += cntx.name + ' (' + cntx.fullClassName + ') isInit=' + cntx.isInit + "\n";
                    }

                    // console.error("=========\n", JSON.safeStringify(component), strSubInit);
                    console.error("=========\n", strSubInit);



                    context.isPrepared = true;

                    Self.__checkInitTreeComponents();


                    // // если нет компонентов в ожидание, то запускаем инициализацию
                    // if (kolos.Utils.isEmpty(component.__checkSubCompInit)) {
                    //
                    //
                    //     Self.__checkInitTreeComponents();
                    //
                    //
                    // }



                }

            }
        });

        //console.log(countNodes);
        //console.log(rootNode);
        //console.log(JSON.stringify(rootNode, null, 2));

        //$(baseElement).html(str);

        return undefined;

        //-----------



        // let context = this.__buildContext(baseElement, parent);
        // // загружаем компонент
        // this.__loadAndInitComponent(context, callback);
        // // возвращаем предварительную информацию
        // return context;
    }


    this.__checkInitTree = [];

    this.__checkInitTreeComponents = function () {


        console.error('> ', '__checkInitTreeComponents');


        for (let i = Self.__checkInitTree.length - 1; i >= 0; i--) {

            let rootNode = Self.__checkInitTree[i];

            let queueNodes = Self.__buildQueueNode(rootNode.child);

            let allNodesInit = true;

            for (let i in queueNodes) {
                let node = queueNodes[i];

                let context = node.context;

                console.error("INODE: ", context.name);
                //console.error("INODE: ", );
                // console.error("  -comp: ", node.component);
                // console.error("  -sub: ", node.component.__checkSubCompInit);

                if (node.component !== undefined) {

                    let component = node.component;

                    // если компонент не подготовлен, то прерываем выполнение
                    // (дальше нет смысла, т.к. инициализация начинается с дочерних компонентов, должны сначала они подготовиться)
                    if (!context.isPrepared) {
                        allNodesInit = false;
                        break;
                    }

                    // проверяем что инициализированы вложенные компоненты (если они есть)
                    let allSubInit = true;
                    for (let j in component.__checkSubCompInit) {
                        /** @type {kolos.ComponentContext} subComponentContext */
                        let subComponentContext = component.__checkSubCompInit[j];
                        if (!subComponentContext.isInit) {
                            allSubInit = false;
                        }
                    }

                    // если все подчинённые компоненты инициализированы, то можем инициализировать текущий
                    if (allSubInit) {

                        if (!context.isInit) {
                            // отмечаем как инициализированный
                            context.isInit = true;

                            console.error("READY_C: ", context.name + " (" + context.fullClassName + ')');

                            // очищаем список ожидания инициализации вложенных компонентов
                            component.__checkSubCompInit = [];

                            // выполняем все колбэки готовности
                            for (let k in component.__ready) {
                                // хак: присваиваем колбэк компоненту, чтобы внутри колбэка this это был сам компонент
                                component.__tmpCb = component.__ready[k];
                                component.__tmpCb(component);
                                delete component.__tmpCb;
                            }

                            kolos.Utils.debug('Component ready: ' + context.name + ' (' + context.fullClassName + ')');
                        }

                    } else {
                        allNodesInit = false;
                    }

                }


            } // for (let i in queueNodes)

            if (allNodesInit) {
                //delete Self.__checkInitTree[i];
                Self.__checkInitTree.splice(i, 1);
            }

        }


    }



    this.__buildContext = function (baseElement, parent) {
        // фильтруем идентификатор компонента
        let fullClassName = this.__filterNameSpace( $(baseElement).attr('component') );
        // ищем разделитель для класса и его пространство имён
        let splitIndex = fullClassName.lastIndexOf('.');
        // формируем информацию о компонент
        let context = new kolos.ComponentContext();
        context.parent = parent;
        context.baseElement = baseElement;
        context.fullClassName = fullClassName;
        context.namespace = fullClassName.substring(0, splitIndex);
        context.className = fullClassName.substring(splitIndex + 1);
        context.name = $(baseElement).attr('name');
        // если имя компонента не задано, то берём его из класса
        if (context.name === undefined || context.name === '') {
            context.name = kolos.Utils.firstLow(context.className);
        }
        context.path = this.__buildPathComponent(context);
        return context;
    }

    /**
     * @param {kolos.ComponentContext} context
     * @returns {*}
     * @private
     */
    this.__getComponentClass = function(context) {
        let fullClassName = context.fullClassName;
        if (this.__cacheClass[fullClassName] === undefined) {
            // материализуем класс и засовываем кэш
            this.__cacheClass[fullClassName] = eval(Self.__filterNameSpace(fullClassName));
        }
        return this.__cacheClass[fullClassName];
    }


    /**
     * @param tagId
     * @param parent
     * @param callback
     */
    this.initComponentsFromTag = function(tagId, parent, callback) {
        Self.initComponent($(tagId).children(), parent, callback);

    }

    /**
     * Инициализировать все компоненты на странице
     */
    this.initComponentsOnPage = function() {
        this.initComponentsFromTag('body');
    }

    /**
     * @deprecated пока ещё думаю как изящно это сделать
     * @param componentDescription
     * @param tagId
     * @param parent
     * @param callback
     */
    this.initComponentTo = function (componentDescription, tagId, parent, callback) {
        let element = $(componentDescription);
        $(tagId).html(element);
        Self.initComponent(element, parent, callback);
    }


    this.__construct = function () {
        // // дежурный таймер, на случай если не всё проинициализируется
        // this.__timerCheckInitComponent = setInterval(() => {
        //     Self.__checkInitComponentsAll();
        // }, 1000);
    }
    this.__construct();
};

/**
 * Заменить вызовы действий класса на вызов действий экземпляра
 * @param template
 * @param component
 * @returns {string}
 */
kolos.ComponentManager.replaceCallActions = function (template, component) {
    // в шаблоне заменяем имя класса на вызов глобального объекта компонента
    // (таким образов все вызовы будут принадлежать к своему экземпляру)
    return template.replaceAll(
        component.context.fullClassName,
        'kolos.Global.get(' + component.context.globalId + ')'
    );
}

kolos.Controller = function(){
    var Self = this;

    this.ctrlName = ''; //имя контроллера
    this.varName = ''; //полное имя Controllers.[ctrlName]
    this.engine = {};
    this.path = '';
    this.view = {};
    
    
    // Блок отвечающий за загрузку методов с сервера ------------>>>>>>>
    this.ajax = null;
    this._ready = null;
    this.ready = function(fun){
        this._ready = fun;
    };
    this.server = function(methodName, data, hideWaitMsg){

        var Self = this;

        // если выполнялся ранее, то обрываем
        if(this.ajax != null) this.ajax.abort();

        var url = '/js/c/' + Self.ctrlName + '/' + methodName;

        setTimeout(function(){ // таймер чтобы дать время подцепить функцию ready
            Self.ajax = $.ajax({
                type: 'POST',
                //url: '/ajax/scripts/server',
                url: url,
                async: true,
                //data: 'controller=' + Self.varName + '&methodName=' + methodName + '&params='+encodeURIComponent($.toJSON(params)),
                data: 'data=' + encodeURIComponent($.toJSON(data)),
                beforeSend: function(){
                    //if(!hideWaitMsg) messages.loading.show('ctrl_server','Загрузка данных...');
                },
                error: function(xhr) {
                    if (Self._ready !== undefined) {
                        Self._ready(xhr.status + ' ' + xhr.statusText + "<br>\n" + xhr.responseText);
                    }
                },
                success: function(data){
                    if (Self._ready !== undefined) {
                        var dataResult = undefined;
                        try {
                            dataResult = eval('('+data+')');


                            //FIXME: Убрать! Или переделать в нормальную обработку
                            var debugDataAjax = '';
                            if (dataResult['profilers'] !== undefined) {
                                debugDataAjax += '<pre style="background: #fffddb;>' + url + "<br><br>" + dataResult['profilers'] + '</pre>';
                                Kolos.logInfo(dataResult['profilers']);
                            }
                            if (dataResult['errors'] !== undefined) {
                                debugDataAjax += '<pre style="background: #ffe5d2;">' + url + "<br><br>" + dataResult['errors'] + '</pre>';
                                Kolos.logInfo(dataResult['errors']);
                            }
                            $('#debugDataAjax').html(debugDataAjax);




                        } catch (exception_var){
                            dataResult = data;
                        }
                        try {
                            Self._ready(dataResult);
                        } catch (e) {
                            kolos.Utils.error('Error (controller request callback: ' + Self.ctrlName + '.' + methodName + '): , error: ' + e, true);
                        }
                    }

                    //if(Self._ready)
                    //        Self._ready(data);
                    /*
                    var data_arr = null;
                    try {
                        data_arr = eval('('+data+')');
                    } catch (exception_var){
                        if(Self._ready)
                            Self._ready(exception_var);
                    } finally {
                        if(Self._ready)
                            Self._ready(data_arr);
                    }
                    */
                },
                complete: function(){
                    //if(!hideWaitMsg) messages.loading.hide('ctrl_server');
                }
            });
        }, 50);

        return Self;
    };
    // Блок отвечающий за загрузку методов с сервера ------------<<<<<<<<<
    
    
    
    this.view.render = function(vName){
        /*
        if(Self.views[vName]==null){
            var src = Self.path+'views/'+vName+'.js';
            return Self.engine.ajax(src,{async: true}).complete(function(data){
                Self.views[vName] = data;
            });
        } else {
            return Self.views[vName];
        }
        */
    };
    
    this.init = function(ctrlName){
        this.ctrlName = ctrlName;
        this.varName = 'Controllers.' + ctrlName;


        //this.path = this.engine.path_root + 'controllers/';
        //this.engine.controllers[varName] = this;
        //Loader.loaded(varName);
    };
};
//работа с таймаутами
kolos.Date = {
    setTimeout: function (val) {
        return Date.now() + val;
    },
    checkTimeout: function (variable) {
        return variable < Date.now();
    },
    getTimeoutLeft: function (variable) {
        var left = variable - Date.now();
        return left > 0 ? left : 0;
    },
    now: function () {
        return Date.now(); //UTC
    },
    toSqlFormatUTC(datetime) {
        // если число
        if (!isNaN(datetime)) {
            datetime = new Date(datetime);
        }
        return datetime.toISOString().slice(0, 19).replace('T', ' ');
    },
    toSqlFormat(datetime) {
        // если число
        if (!isNaN(datetime)) {
            datetime = new Date(datetime);
        }
        //форматируем в текущем часовом поясе бразузера
        return datetime.getFullYear() + '-' +
            ('00' + (datetime.getMonth() + 1)).slice(-2) + '-' +
            ('00' + datetime.getDate()).slice(-2) + ' ' +
            ('00' + datetime.getHours()).slice(-2) + ':' +
            ('00' + datetime.getMinutes()).slice(-2) + ':' +
            ('00' + datetime.getSeconds()).slice(-2);

    },
    toDatetime(str) {
        return Date.parse(str);
    },
};kolos.Form = function (tagId) {
    var Self = this;
    this.tagId = tagId;

    this._elements = {};

    this._init = function() {
        //запоминаем все элементы
        $(Self.tagId).find('input, textarea, select').each(function() {
            //для radio отдельная логика
            if ($(this).prop("type") === 'radio') {
                //радио чекеды складываем в массив по значениям
                if (Self._elements[this.name] === undefined) {
                    Self._elements[this.name] = {
                        isArray: true,
                    };
                }
                var valAsKey = $(this).val();
                Self._elements[this.name][valAsKey] = this;
            } else {
                //остальные складываем как обычно
                Self._elements[this.name] = this;
            }
        });
    };

    this._init();




    this.getAll = function() {
        var data = {};
        for (var name in this._elements) {
            //достаём все значения по имени
            data[name] = this.get(name);
        }
        return data;
    };

    this.get = function (name) {

        if (this._elements[name] !== undefined) {
            var element = this._elements[name];
            //если это массив radio
            if (element['isArray'] !== undefined) {

                for (var nameElem in element) {
                    var radio = element[nameElem];
                    //исключаем метку что это массив
                    if (nameElem !== 'isArray') {
                        //возвращаем значение выбранного элемента
                        if ($(radio).prop("checked")) {
                            return $(radio).val()
                        }
                    }
                }

            } else {
                //иначе это обычный элемент
                //если это чекбокс
                if ($(element).prop("type") === 'checkbox') {
                    if ($(element).prop("checked")) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return $(element).val();
                }
            }
        }
        return undefined;
    };

    this.getElement = function (name) {
        if (this._elements[name] !== undefined) {
            return this._elements[name];
        }
        return undefined;
    };

    this.set = function (name, value) {
        if (this._elements[name] !== undefined) {
            var element = this._elements[name];
            //если это массив radio
            if (element['isArray'] !== undefined) {

                //иначе это массив radio
                for (var nameElem in element) {
                    var radio = element[nameElem];

                    //исключаем метку что это массив
                    if (nameElem !== 'isArray') {
                        //выставляем чек для заданного значения
                        if ($(radio).val() == value) { //тут обязательно неявное сравнение, чтобы типы преобразовывались автоматом
                            $(radio).prop('checked', true);
                        }
                    }

                }
            } else {
                if ($(element).prop("type") === 'checkbox') {
                    $(element).prop("checked", value);
                } else {
                    $(element).val(value);
                }
            }
        }
    };

    this.toJson = function() {
        return JSON.stringify(this.getAll());
    }

};
/**
 * Всплывающие сообщения
 * @param tagId
 * @param timeout
 * @constructor
 */
kolos.Hints = function (tagId, timeout) {
    var Self = this;
    this.tagId = tagId;
    this.element = undefined;
    this.timeout = timeout;
    //--
    this._isInit = false;
    this._container = undefined;
    this._hints = {};

    this.message = function(text, timeout) {
        this.info(text, timeout);
    };

    this.info = function(text, timeout) {
        this._addHint(text, 'info', timeout);
    };

    this.success = function(text, timeout) {
        this._addHint(text, 'success', timeout);
    };

    this.warning = function(text) {
        this._addHint(text, 'warning', 0);
    };

    this.error = function(text) {

        this._addHint(text, 'error', 0);
    };

    this.clear = function() {
        for (var i in this._hints) {
            this._hints[i].remove();
        }
    };

    //--


    this._addHint = function(text, style, timeout) {

        // создаём всплывашку
        var hintItem = new kolos.HintItem(
            this,
            text,
            style,
            timeout !== undefined ? timeout : this.timeout
        );

        // добавляем в общий список
        this._hints[hintItem.tagId] = hintItem;
    };


    this._construct = function() {
        if (this.tagId !== undefined) {
            this._container = $(this.tagId);
        } else {
            this.tagId = '#hints-container';
            // если контейнер ещё не созда, создаём его
            if (!$(this.tagId).length) {
                $('head').append('<style>' +
                    '.hints-container { position: fixed; top: 15px; right: 15px; width: 270px; z-index: 999999; } ' +
                    '.hint-close { content: ""; position: relative; float: right; top: 11px; right: 11px; width: 15px; height: 15px; background: transparent url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z\'/%3e%3c/svg%3e") center/0.875em auto no-repeat; border: 0; opacity: 0.5; cursor: pointer; transition: opacity 0.1s ease-in-out; } ' +
                    '</style>');
                this.element = $('<div id="' + this.tagId.slice(1) + '" class="hints-container" style=""></div>');
                $('body').prepend(this.element);
            }
            // берём ссылку на контейнер
            this._container = $(this.tagId);
        }
    };
    this._construct();
};

kolos.HintItem = function(parent, text, style, timeout) {
    var Self = this;
    this.parent = parent;
    this.text = text;
    this.style = style;
    this.timeout = timeout;
    this.globalIndex = kolos.Global.add(this);
    this.tagId = '#' + kolos.Global.getTagId(this.globalIndex);

    this.remove = function(force) {
        // удаляем из общего списка в родителе
        delete this.parent._hints[this.tagId];
        // удаляем из глобального пула
        kolos.Global.remove(this.globalIndex);
        // принудительное удаление без анимации
        if (force !== undefined) {
            $(this.tagId).remove();
        } else {
            // анимация исчезновения и удаление dom элемента
            $(this.tagId)
                .animate({
                    opacity: 0
                }, 200, function() {})
                .animate({
                    height: 0
                }, 200, function() {
                    // удаляем после сворачивания
                    $(this).remove();
                });
        }
    };

    //--

    this._onclick = function() {
        if (!window.getSelection().toString()){
            this.remove();
            return true;
        } else {
            return false;
        }
    };

    // шаблон
    this._template = function(id, text, style, globalIndex, btnClose) {
        return '<div id="' + id + '" class="mb-norm shadow-norm ofh" onclick="return kolos.Global.get(' + globalIndex + ')._onclick();" style="">' +
                    (btnClose ? '<div class="hint-close"></div>' : '') +
                    '<div class="hint ' + style + '">' + text + '</div> ' +
                '</div>';
    };

    this._construct = function() {
        // добавляем элемент в контейнер
        $(this.parent.tagId).append(this._template(
            this.tagId.slice(1),
            this.text,
            this.style,
            this.globalIndex,
            (this.timeout === undefined || this.timeout === 0)
        ));

        // если задан таймаут, что навешиваем таймер удаления
        if (this.timeout !== undefined && this.timeout !== 0) {
            setTimeout(() => {
                Self.remove();
            }, this.timeout);
        }
    };
    this._construct();

};

kolos.Logger = {
    limit: 100,//максимальное кол-во строк
    TYPE_INFO: 1,
    TYPE_WARNING: 2,
    TYPE_ERROR: 3,
    __log: [],
    __handlerDraw: undefined,
    __viewFilter: new kolos.Set([1,2,3]), //фильтр по отображаемым типам

    info: function(text, group) {
        this.__addMessage(this.TYPE_INFO, group, text);
    },
    warning: function(text, group) {
        this.__addMessage(this.TYPE_WARNING, group, text);
    },
    error: function(text, group) {
        this.__addMessage(this.TYPE_ERROR, group, text);
    },

    __addMessage: function(type, group, text) {
        this.__log.push(new kolos.LoggerItem(
            kolos.DateTool.now(),
            type,
            group !== undefined ? group : '',
            text
        ));
        //если привысилии лимит, то удаляем первый элемент
        if (this.__log.length > this.limit * 3) {
            this.__log.shift();
        }
        //отрисовываем лог
        this.__render();
    },

    handlerDraw: function(callback) {
        this.__handlerDraw = callback;
    },

    /** Переключить фильтр */
    toggleFilter: function(type) {
        if (this.__viewFilter.contains(type)) {
            this.__viewFilter.remove(type);
        } else {
            this.__viewFilter.add(type);
        }
        this.__render();
    },

    __render() {
        if (this.__handlerDraw !== undefined) {
            var result = '';
            result += '<style> .root-logger-container td {font-size: 11px;} </style>';
            result += `<div>
                        <a class="` + (this.__viewFilter.contains(this.TYPE_INFO) ? 'bold' : '') + `" href="javascript: kolos.Logger.toggleFilter(` + this.TYPE_INFO + `)">[info]</a>
                        <a class="` + (this.__viewFilter.contains(this.TYPE_WARNING) ? 'bold' : '') + `" href="javascript: kolos.Logger.toggleFilter(` + this.TYPE_WARNING + `)">[warning]</a>
                        <a class="` + (this.__viewFilter.contains(this.TYPE_ERROR) ? 'bold' : '') + `" href="javascript: kolos.Logger.toggleFilter(` + this.TYPE_ERROR + `)">[error]</a>
                        </div>`;
            result += '<pre><table class="root-logger-container" cellpadding="2" cellspacing="0" border="0">';
            //копируем массива
            var arr = this.__log.slice();
            //var start = arr.length - this.limit;
            //if (start < 0) start = 0;
            var count=0;
            //выводим не больше лимита
            for (var i = arr.length-1; i >= 0; i--) {

                /** @var kolos.LoggerItem loggerItem */
                var loggerItem = arr[i];

                //отображаем только выбранные типы
                if (this.__viewFilter.contains(loggerItem.type)) {
                    count++;
                    if (count > this.limit) {
                        break;
                    }

                    var group = '';
                    if (loggerItem.group != '') {
                        group = ' [' + loggerItem.group + '] '
                    }

                    var typeStr = '';
                    var bgColor = 'bgColor';
                    switch (loggerItem.type) {
                        case this.TYPE_INFO:
                            typeStr = 'INFO';
                            break;
                        case this.TYPE_WARNING:
                            typeStr = 'WARNING';
                            bgColor = '#fffab2';
                            break;
                        case this.TYPE_ERROR:
                            typeStr = '<b>ERROR</b>';
                            bgColor = '#ffcece';
                            break;
                    }
                    result += '<tr style="background: ' + bgColor + ';">';
                    result += '<td>' + kolos.DateTool.toSqlFormat(loggerItem.datetime) + '</td>';
                    result += '<td>' + group + '</td>';
                    result += '<td>' + typeStr + '</td>';
                    result += '<td>' + loggerItem.text + '</td>';
                    result += '</tr>';
                }
            }
            result += '</table></pre>';

            this.__handlerDraw(result);
        }
    },
};

kolos.LoggerItem = function(datetime, type, group, text) {
    var Self = this;
    this.datetime = datetime;
    this.type = type;
    this.group = group;
    this.text = text;
};kolos.Modal = {
    _content: 'modal',
    _isInit: false,
    _onClickBackCallback: function() {
        this.close();
    },
    _callOnClickBack: function() {
        if (this._onClickBackCallback !== undefined) {
            this._onClickBackCallback();
        }
    },
    _init: function() {
        var css = '<style>    ' +
            '    #modalBack {\n' +
            '        display: none;\n' +
            '        position: fixed;\n' +
            '        left: 0;\n' +
            '        top: 0;\n' +
            '        width: 100%;\n' +
            '        height: 100%;\n' +
            '        overflow: auto;\n' +
            '        /*background-color: rgba(0,0,0,0.6);*/\n' +
            '        /*background-color: rgba(0, 4, 51, 0.85);*/\n' +
            '        background-color: rgba(6, 32, 52, 0.85);\n' + //rgb(6 32 52 / 80%);
            '        z-index: 1000;\n' +
            '        /*cursor: pointer;*/\n' +
            '    }\n' +
            '    #modalBack #modalContent {\n' +
            '        display: inline-block;\n' +
            '        overflow: hidden;\n' +
            '        /*background-color: #fefefe;*/\n' +
            '        /*border: 1px solid #888;*/\n' +
            '        z-index: 99999;\n' +
            '        cursor: auto;\n' +
            '        min-width: 20px;\n' +
            '        min-height: 20px;\n' +
            '    }' +
            '</style>';
        //document.getElementsByTagName('HEAD')[0].appendChild(css);
        $(document.head).append(css);

        var html = '<div id="modalBack" class="" onclick="kolos.Modal._callOnClickBack()"><div id="modalContent" onclick="event.stopPropagation();"></div></div>';
        $(document.body).prepend(html);
    },

    content: function(content) {
        this._content = content;
        return this;
    },

    capture: function(tagId) {
        this._content = $(tagId).html();
        return this;
    },

    close: function () {
        $('#modalBack').fadeOut(50);
        this._content = '';
        return this;
    },
    onClickBack: function(callback) {
        this._onClickBackCallback = callback;
        return this;
    },
    show: function() {
        var Self = this;
        if (!this._isInit) {
            this._isInit = true;
            this._init();
        }
        //вставляем контент
        $('#modalContent').html(this._content);
        //выравниваем по центу
        kolos.Utils.toCenterTop('#modalContent');
        //отображаем
        $('#modalBack').fadeIn(50);
        //выравниваем по центу
        kolos.Utils.toCenterTop('#modalContent');

        // $('#modalContent').each(function(){
        //     var inputs = $(this).find(':input');
        //     console.log(inputs);
        //     /*for (var i in inputs) {
        //         var inputTag = inputs[i];
        //         console.log(inputTag);
        //     }*/
        // });

        $('#modalContent input').each(function(index){
            var inputJq = $(this);
            //для первого элемента задаём фокус
            if (index === 0) {
                inputJq.focus();
            }
            inputJq.keydown(function(eventObject) {
                // нажата клавиша Esc
                if ( eventObject.which === 27 ) {
                    Self.close();
                }
            });
        });
    }
};kolos.Pagination = function (containerTagId) {
    var Self = this;
    this.containerTagId = containerTagId;
    this.globalIndex = kolos.Global.add(this);
    this._page = 1;
    this._count = 1;
    this._countView = 9;
    this._action = undefined;
    this._syncPagination = undefined; // объект пагинации, с которым нужно синхронизовать

    /**
     *
     * @param page
     * @returns {kolos.Pagination}
     */
    this.page = function (page) {
        this._page = page;
        this.render();
        if (this._syncPagination !== undefined) {
            this._syncPagination._page = page;
            this._syncPagination.render();
        }
        // выполняем действие
        if (this._action !== undefined) {
            this._action(page);
        }
        if (this._syncPagination !== undefined) {
            if (this._syncPagination._action !== undefined) {
                this._syncPagination._action(page);
            }
        }
        return this;
    };

    this.getPage = function() {
        return this._page;
    };

    /**
     *
     * @param callback
     * @returns {kolos.Pagination}
     */
    this.action = function(callback) {
        this._action = callback;
        return this;
    };

    /**
     *
     * @param count
     * @returns {kolos.Pagination}
     */
    this.count = function (count) {
        this._count = count;
        this.render();
        if (this._syncPagination !== undefined) {
            this._syncPagination._count = count;
            this._syncPagination.render();
        }
        return this;
    };


    /**
     * Синхронизовать с другим объектом пагинации
     * @param pagination
     * @returns {kolos.Pagination}
     */
    this.sync = function (pagination) {
        this._syncPagination = pagination;
        pagination._syncPagination = this;
        return this;
    };

    /**
     *
     * @param countView
     * @returns {kolos.Pagination}
     */
    this.countView = function (countView) {
        this._countView = countView;
        this.render();
        if (this._syncPagination !== undefined) {
            this._syncPagination._countView = countView;
            this._syncPagination.render();
        }
        return this;
    };

    this.render = function() {
        var content = '';

        var min = this._page - Math.floor(this._countView / 2);
        if (min < 1) {
            min = 1;
        }

        var max = min + this._countView;
        if (max > this._count) {
            max = this._count;
        }

        if (max - min < this._countView) {
            min = max - this._countView;
            if (min < 1) {
                min = 1;
            }
        }

        //var backward = false;
        //var forward = false;

        // перейти в начало
        if (min > 1) {
            content += '<a class="button ' + (i === this._page ? 'active' : '') + '" href="javascript: kolos.Global.get(' + this.globalIndex + ').page(1)"><i class="icon-m">fast_rewind</i> </a>';
            //content += '<a class="button ' + (i === this._page ? 'active' : '') + '" href="javascript: kolos.Global.get(' + this.globalIndex + ').page(' + (this._page - 1) + ')">< </a>';
        }

        for (var i = min; i<= max; i++) {
            //var btnId = kolos.Global.getTagId(this.globalIndex) + '_' + i;
            content += '<a class="button ' + (i === this._page ? 'active' : '') + '" href="javascript: kolos.Global.get(' + this.globalIndex + ').page(' + i + ')">' + i + '</a>';
        }

        /*if (max < this._count) {
            content += ' . . . ';
            content += '<a class="button" href="javascript: kolos.Global.get(' + this.globalIndex + ').page(' + this._count + ')">' + this._count + '</a>';
        }*/

        // перейти в конце
        if (max < this._count) {
            //content += '<a class="button ' + (i === this._page ? 'active' : '') + '" href="javascript: kolos.Global.get(' + this.globalIndex + ').page(' + (this._page + 1) + ')">> </a>';
            content += '<a class="button ' + (i === this._page ? 'active' : '') + '" href="javascript: kolos.Global.get(' + this.globalIndex + ').page(' + this._count + ')"><i class="icon-m">fast_forward</i> </a>';
        }

        $(this.containerTagId).html(content);
    };

    this.update = function(page, count) {
        if (page !== undefined) {
            this._page = page;
        }
        if (count !== undefined) {
            this._count = count;
        }
        this.render();
    };

};kolos.Request = function(url) {
    var Self = this;
    this._url = url;
    this._buffer = {
        'data': {}
    };
    this._callback = undefined;
    this._callbackError = undefined;
    this._method = 'POST';
    this._ajax = undefined;

    /**
     *
     * @param data
     * @returns {kolos.Request}
     */
    this.data = function(data) {
        this._buffer['data'] = data;
        return this;
    };

    /**
     *
     * @param tpl
     * @returns {kolos.Request}
     */
    this.template = function(tpl) {
        if (this._buffer['tpl'] === undefined) {
            this._buffer['tpl'] = [];
        }
        this._buffer['tpl'].push(tpl);
        return this;
    };

    /**
     *
     * @param callback
     * @returns {kolos.Request}
     */
    this.error = function(callback) {
        this._callbackError = callback;
        return this;
    };

    /**
     * Задать метод POST/GET
     * @param method
     * @returns {kolos.Request}
     */
    this.method = function(method) {
        this._method = method;
        return this;
    };

    /**
     * Запуск выполнения запроса
     * @param callback
     * @returns {kolos.Request}
     */
    this.ready = function(callback) {
        this._callback = callback;

        if (kolos.Utils.__delayRequest) {
            // для отладки
            setTimeout(function(){
                Self._start();
            }, 500);

        } else {
            this._start();
        }
    };

    /**
     * Запуск выполнения запроса, в результате будет объект Response
     * @param callback
     * @returns {kolos.Request}
     */
    this.response = function(callback) {
        // данные преобразуем в response, и передаём дальше в callback
        this.ready(function (data) {
            let resp = new kolos.Response(data);
            callback(resp);
        });
    };

    /**
     * Отмена запроса
     * @returns {kolos.Request}
     */
    this.cancel = function() {
        if (this._ajax !== undefined) {
            this._ajax.abort();
        }
        return this;
    };


    this._ready = function(data) {
        if (this._callback !== undefined) {
            this._callback(data);
        }
    };
    this._start = function() {
        var url = Self._url;
        Self._ajax = $.ajax({
            type: Self._method,
            url: url,
            //dataType: options.dataType,
            async: true,
            //data: 'request=' + $.toJSON(Self._buffer),
            data: Self._buffer['data'],
            beforeSend: function(){
                //messages.loading.show('request','Загрузка данных...');
            },
            success: function(data){

                try {
                    Self._ready(data);
                } catch (e) {
                    kolos.Utils.error('Error callback request (Request._start url: ' + url + '): , error: ' + e, true);
                }


                return;

                try {
                    var dataResult = undefined;
                    try {
                        //dataResult = eval('('+data+')');
                        dataResult = JSON.parse(data);
                        /*
                        dataResult = eval('('+data+')');

                        //FIXME: Убрать! Или переделать в нормальную обработку
                        var debugDataAjax = '';
                        if (dataResult['profilers'] !== undefined) {
                            debugDataAjax += '<pre style="background: #fffddb;>' + url + "<br><br>" + dataResult['profilers'] + '</pre>';
                            Kolos.logInfo(dataResult['profilers']);
                        }
                        if (dataResult['errors'] !== undefined) {
                            debugDataAjax += '<pre style="background: #ffe5d2;">' + url + "<br><br>" + dataResult['errors'] + '</pre>';
                            Kolos.logInfo(dataResult['errors']);
                        }
                        $('#debugDataAjax').html(debugDataAjax);
                        */


                    } catch (exception_var){
                        dataResult = data;
                    }
                    try {
                        Self._ready(dataResult);
                    } catch (e) {
                        kolos.Utils.error('Error (Request callback url: ' + url + '): , error: ' + e, true);
                    }
                } catch (e) {
                    //
                }
            },
            complete: function(){
                //messages.loading.hide('request');
            },
            error: function (jqXHR, exception) {
                if (Self._callbackError === undefined) return;
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                Self._callbackError(msg, jqXHR.status);
            },
        });
    };

};kolos.Response = function(dataIn) {
    this.data = undefined;

    this._response = {};

    this.getData = function() {
        return this.get('data', undefined);
    };

    this.getTemplates = function() {
        return this.get('tpl', []);
    };

    this.getTemplate = function(name) {
        let templates = this.getTemplates();
        if (templates[name] !== undefined) {
            return templates[name];
        }
        return undefined;
    };

    this.getCode = function() {
        return this.get('code', 0);
    };

    this.getMessagesAll = function() {
        return this.get('msg', []);
    };

    this.getMessagesCallback = function(callback) {
        let messages = this.getMessagesAll();
        // выводим первое сообщение
        for (let i in messages) {
            callback(messages[i]);
        }
    };

    this.getMessage = function() {
        let messages = this.getMessagesAll();
        // выводим первое сообщение
        for (let i in messages) {
            return messages[i];
        }
        return undefined;
    };

    /**
     * Получить значение из результата
     * @param key ключ
     * @param def значение по умолчанию
     */
    this.get = function(key, def) {
        if (this._response[key] !== undefined) {
            return this._response[key];
        }
        return def;
    };


    //-- constructor -->>

    try {
        // парсим данные
        this._response = JSON.parse(dataIn);
    } catch (exception_var){
        // при ошибки результат просто подставляем в data
        this._response = {};
        this._response['data'] = dataIn;
    }

};kolos.Route = function () {
    this.cmd = '';
    this.component = '';
    this.method = '';
    this.params = {};
    this.args = [];
}

kolos.Router = function () {
    let Self = this;
    /** @type {kolos.Route} */
    this.route = undefined;
    this.timer = undefined;
    this.hash = undefined;
    this._interval = 500;
    this._subscribers = {};

    this.subscribe = function (command, callback) {
        if (this._subscribers[command] === undefined) {
            this._subscribers[command] = [];
        }
        this._subscribers[command].push(callback);
    }

    /**
     * @returns {kolos.Route}
     */
    this.parseRoute = function () {
        let route = new kolos.Route();

        // запоминаем текущий маршрут
        Self.route = route;

        let hash = Self.hash;

        if (hash.length < 2) {
            return route;
        }

        // обрезаем '#/' либо '#'
        if (hash[1] === '/') {
            hash = hash.substring(2);
        } else {
            hash = hash.substring(1);
        }

        // разделяем на действие и параметры
        let splitActionParams = hash.split('?');
        let action = kolos.Utils.val(splitActionParams, 0, '');
        let paramStr = kolos.Utils.val(splitActionParams, 1, '');

        // парсим действие -->>

        let arr = action.split('/');

        route.cmd = kolos.Utils.val(arr, 0, '');
        route.component = kolos.Utils.val(arr, 1, '');
        route.method = kolos.Utils.val(arr, 2, '');

        // забираем оставшиеся аргументы из пути /cmd/app/method/arg1/arg2/...
        let args = [];
        if (arr.length > 3) {
            for (let i = 3; i < arr.length; i++) {
                args.push(arr[i]);
            }
        }
        route.args = args;

        // парсим параметры -->>

        let params = {};
        let splitPairs = paramStr.split('&');
        for (let i in splitPairs) {
            let pairStr = splitPairs[i];
            let splitPair = pairStr.split('=');
            let key = kolos.Utils.val(splitPair, 0, undefined);
            let value = kolos.Utils.val(splitPair, 1, '');
            if (key !== undefined && key !== '') {
                params[key] = value;
            }
        }
        route.params = params;

        return route;
    }

    this.checkHash = function () {
        if (document.location.hash !== Self.hash) {
            Self.hash = document.location.hash;

            let route = Self.parseRoute();

            kolos.Utils.debug('Route: ' + document.location.hash + ' => ' + JSON.stringify(route));

            // передаём маршрут всем подписчикам
            let subscribers = Self._subscribers[route.cmd];
            if (subscribers !== undefined) {
                for (let i in subscribers) {
                    let callback = subscribers[i];
                    callback(route);
                }
            }

            let subscribersAll = Self._subscribers['*'];
            if (subscribersAll !== undefined) {
                for (let i in subscribersAll) {
                    let callback = subscribersAll[i];
                    callback(route);
                }
            }

        }
    }

    this.destroy = function () {
        clearTimeout(Self.timer);
        window.removeEventListener('hashchange', Self.checkHash);
    }

    this.init = function () {
        Self.timer = setInterval(Self.checkHash, Self._interval);
        window.addEventListener('hashchange', Self.checkHash);
    }
}
kolos.Table = function (containerTagId, data, fields) {
    var Self = this;
    this.containerTagId = containerTagId;
    this.globalIndex = kolos.Global.add(this);
    this._data = data;
    this._fields = undefined;
    this._actions = [];

    /**
     * Выздвать действие к строке
     * @param indexAction
     * @param indexRow
     * @param element
     * @private
     */
    this._callAction = function(indexAction, indexRow, element) {
        if (
            this._actions[indexAction] !== undefined
            && this._data[indexRow] !== undefined
        ) {
            this._actions[indexAction]['callback'](indexRow, this._data[indexRow], element);
        }
    };
    /**
     * Добавить действие
     * @param caption   подпись
     * @param callback  (indexRow, rowData, element) => {}
     * @returns {kolos.Table}
     */
    this.action = function (caption, callback) {
        this._actions.push({
            'caption' : caption,
            'callback': callback
        });
        return this;
    };

    /**
     * Задать поля
     * @param fields
     * @returns {kolos.Table}
     */
    this.fields = function (fields) {
        if (fields.constructor === Array) {
            this._fields = {};
            for (var i in fields) {
                var field = fields[i];
                this._fields[field] = field;
            }
        } else {
            this._fields = fields;
        }
        return this;
    };

    // сразу проверяем, если переданы поля, то назначаем их
    if (fields !== undefined) {
        this.fields(fields);
    }

    this._drawFields = function (index, field, value, rowData) {
        if (this._fieldDrawHandlers[field] !== undefined) {
            return this._fieldDrawHandlers[field](index, value, rowData);
        } else {
            return value;
        }
    };

    this._fieldDrawHandlers = {};

    /**
     * Добавить обработчик отрисовки поля, в параметр handlerCallback передаются переменные index, value
     * @param fieldName
     * @param handlerCallback функция с параметрами function(index, value) { return ... }
     * @returns {kolos.Table}
     */
    this.drawField = function (fieldName, handlerCallback) {
        this._fieldDrawHandlers[fieldName] = handlerCallback;
        return this;
    };

    this.templateContainer = function(content) {
        var fieldsStr = '';

        if (this._fields !== undefined) {
            // отрисовываем заголовки полей
            for (var field in this._fields) {
                fieldsStr += '<th>' + this._fields[field] + '</th>' + "\n";
            }
            // отрисовываем заголовки действий
            for (var i in this._actions) {
                fieldsStr += '<th></th>' + "\n";
            }
        }
        return `<table class="table" border="0" cellpadding="0" cellspacing="0">
            <thead><tr>`
            + fieldsStr
            +`</tr></thead>
            <tbody>` + content + `</tbody>`;
    };

    this.templateRow = function(index, rowData) {

        // если поля пустые, то заполнляем их из данных
        if (this._fields === undefined) {
            this._fields = {};
            for (var field in rowData) {
                this._fields[field] = field;
            }
        }

        var str = '<tr>';

        // отрисовываем поля
        for (var field in this._fields) {
            str += '<td>' + this._drawFields(index, field, rowData[field], rowData) + '</td>';
        }

        // отрисовываем действия
        for (var indexAction in this._actions) {
            str += '<td><a href="javascript: void(0)" onclick="kolos.Global.get(' + this.globalIndex + ')._callAction(' + indexAction + ', ' + index + ', this);">' + this._actions[indexAction]['caption'] + '</a></td>';
        }

        str += '</tr>';

        return str;
    };

    this.render = function() {
        var content = '';

        //отрисовываем строки
        for (var index in this._data) {
            content += this.templateRow(index, this._data[index]);
        }
        //отрисовываем контейнер с уже отрисованными строками, и вставляем в контейнер
        $(this.containerTagId).html(this.templateContainer(content));
    };

    this.update = function(data) {
        if (data !== undefined) {
            this._data = data;
        }
        this.render();
    };

};JSON.safeStringify = (obj, indent = 2) => {
    let cache = [];
    const retVal = JSON.stringify(
        obj,
        (key, value) =>
            typeof value === "object" && value !== null
                ? cache.includes(value)
                    ? undefined
                    : cache.push(value) && value
                : value,
        indent
    );
    cache = null;
    return retVal;
};

kolos.Utils = {

    __debug: false,
    __delayRequest: false,
    __verRand: false,
    __ver: '',
    __verCore: '1.1',
    __loadJs: {},
    __loadCss: {},

    val: function (arr, key, def = undefined) {
        if (arr === undefined || arr[key] === undefined) {
            return def;
        }
        return arr[key];
    },

    setDebugMode: function (val) {
        if (val === undefined) val = true;
        kolos.Utils.__debug = val;
        kolos.Utils.__verRand = val
    },

    setVersion: function (ver) {
        kolos.Utils.__ver = '-' + ver;
    },

    getVer: function () {
        if (kolos.Utils.__verRand) {
            return kolos.Utils.random(0, 99999);
        }
        return kolos.Utils.__verCore + kolos.Utils.__ver;
    },

    /**
     * Load script and call executor after loading
     * @param src
     * @param executor
     */
    loadScriptAndExec: function(src, executor) {

        /**
         * Контекст загрузки скрипта
         * @param src
         */
        let ScriptContext = function (src) {
            let Self = this;
            this.callbackList = [];
            this.isAdd = false;
            this.isLoad = false;

            this.addExecutor = function (callback) {
                this.callbackList.push(callback);
            }

            this.execute = function() {
                // создаём загрузчик скрипт, если не был создан
                this.__createLoader();
                // выполняем колбэки, если скрипт уже загружен
                this.__executeCallback();
            }

            this.__createLoader = function () {
                if (!this.isAdd) {
                    this.isAdd = true;
                    // добавляем скрипт на загрузку
                    let script = document.createElement('script');
                    let head = document.getElementsByTagName('head')[0];
                    script.type = 'text/javascript';
                    script.src  = src + '?v=' + kolos.Utils.getVer();
                    script.onload = function() {
                        Self.isLoad = true;
                        kolos.Utils.debug('Script loaded: ' + src);
                        // выполняем колбэки
                        Self.__executeCallback();
                    }
                    head.appendChild(script);
                }
            }

            this.__executeCallback = function () {
                if (this.isLoad) {
                    let list = Self.callbackList;
                    // затираем колбэки, и считаем их выполнеными
                    Self.callbackList = [];
                    // выполняем каждый колбэки
                    for (let i in list) {
                        let callback = list[i];
                        try {
                            callback();
                        } catch (e) {
                            kolos.Utils.error(e);
                        }
                    }
                }
            }
        }

        if (this.__loadJs[src] === undefined) {
            this.__loadJs[src] = new ScriptContext(src);
        }

        let context = this.__loadJs[src];
        if (executor !== undefined) {
            context.addExecutor(executor);
        }
        context.execute();
    },

    loadScripts: function (urlArr, callback) {
        let Self = kolos.Utils;

        let ScriptBatch = function (urlArr, callback) {
            this.callback = callback;
            this.count = urlArr.length;
            this.counter = 0;

            this.handlerLoad = function() {
                this.counter++;
                if (this.counter >= this.count) {
                    this.callback(urlArr);
                }
            }
        }

        let batch = new ScriptBatch(urlArr, callback);

        for (let i in urlArr) {
            let url = urlArr[i];
            Self.loadScriptAndExec(url, () => {
                batch.handlerLoad();
            });
        }
    },

    loadCss: function (src) {
        if (this.__loadCss[src] !== undefined) {
            return;
        }
        this.__loadCss[src] = true;
        //--
        let link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = src + '?v=' + kolos.Utils.getVer();
        link.media = 'all';
        //link.setAttribute('onload', 'alert("asdfsf")');
        document.getElementsByTagName('HEAD')[0].appendChild(link);
    },

    rawurlencode: function(str){
        str = (str + '').toString();
        return escape(encodeURIComponent(str));
    },

    rawurldecode: function(str){
        str = (str + '').toString();
        return decodeURIComponent(unescape(str));
    },

    objToParams: function(params) {
        var arrTmp = [];
        for (var key in params) {
            arrTmp.push(key + '=' + rawurlencode(params[key]));
        }
        return arrTmp.join('&');
    },

    setCookie: function(name, value, expires, path, domain, secure) {
        // name, value - обязательные параметры
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    },

    getCookie: function(name) {
        var cookie = " " + document.cookie;
        var search = " " + name + "=";
        var setStr = null;
        var offset = 0;
        var end = 0;
        if (cookie.length > 0) {
            offset = cookie.indexOf(search);
            if (offset != -1) {
                offset += search.length;
                end = cookie.indexOf(";", offset)
                if (end == -1) {
                    end = cookie.length;
                }
                setStr = unescape(cookie.substring(offset, end));
            }
        }
        return(setStr);
    },

    getBrowser: function(){
        var ua = navigator.userAgent;
        if (ua.match(/MSIE/)) return 'IE';
        if (ua.match(/Firefox/)) return 'Firefox';
        if (ua.match(/Opera/)) return 'Opera';
        if (ua.match(/Chrome/)) return 'Chrome';
        if (ua.match(/Safari/)) return 'Safari';
    },

    varDump: function(object) {
        var out = "";
        if(object && typeof(object) === "object"){
            for (var i in object) {
                out += i + ": " + object[i] + "\n";
            }
        } else {
            out = object;
        }
        /*if (console !== undefined) {
            console.log("varDump: " + out);
        }*/
        return out;
    },

    isEmpty: function(obj) {
        if (obj === undefined) {
            return false;
        }
        if (typeof(obj) === "object") {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    return false;
                }
            }
            return true;
        } else {
            return obj.length === 0;
        }
    },

    //отложенный запуск по условию
    checkExec: function(funcCheck, funcExec, timeout, funcTimeout) {
        if (timeout === undefined) {
            timeout = 10000; //таймаут по умолчанию
        }
        //задаём таймаут
        var timeoutVar = kolos.DateTool.setTimeout(timeout);
        //запускаем таймер
        var timerInterval = setInterval(function() {
            //если проверка прошла успешно
            if (funcCheck()) {
                clearInterval(timerInterval);
                funcExec();
            }
            //если вышел таймаут
            if (kolos.DateTool.checkTimeout(timeoutVar)) {
                clearInterval(timerInterval);
                if (funcTimeout !== undefined) {
                    funcTimeout();
                }
            }
        }, 200);
    },

    toCenter: function(tagId) {
        var elementJQ = $(tagId);
        var windowJQ = $(window);
        elementJQ.css("position","absolute");
        elementJQ.css("top", Math.max(0, ((windowJQ.height() - $(elementJQ).outerHeight()) / 3) +
            windowJQ.scrollTop()) + "px");
        elementJQ.css("left", Math.max(0, ((windowJQ.width() - $(elementJQ).outerWidth()) / 2) +
            windowJQ.scrollLeft()) + "px");
        return this;
    },

    toCenterTop: function(tagId, percent) {
        if (percent === undefined) {
            percent = 30;
        }
        var elementJQ = $(tagId);
        var windowJQ = $(window);
        elementJQ.css("position","absolute");
        elementJQ.css("top", Math.max(0, ((windowJQ.height() - $(elementJQ).outerHeight()) / (100 / percent)) +
            windowJQ.scrollTop()) + "px");
        elementJQ.css("left", Math.max(0, ((windowJQ.width() - $(elementJQ).outerWidth()) / 2) +
            windowJQ.scrollLeft()) + "px");
        return this;
    },

    firstUp: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    firstLow: function(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    },

    redirect: function (url) {
        document.location.href = url;
    },

    request: function (url) {
        return new kolos.Request(url);
    },

    /**
     * Используется для глобальной локализации
     * @param text
     * @returns string
     */
    text: function (text) {
        return text;
    },

    error: function (msg) {
        console.error('Error: ' + msg);
        if (this.isObject(msg)) {
            console.error(msg);
        }
        if (kolos.app.hint !== undefined) {
            kolos.app.hint.error(msg);
        }
    },

    debug: function (msg) {
        if (this.__debug) {
            console.log(msg);
        }
    },

    isObject: function (value) {
        return value && (typeof value === 'object');
    },

    random: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },

    merge: function (obj1, obj2) {
        let result = {};
        for (let key in obj1) {
            result[key] = obj1[key];
        }
        for (let key in obj2) {
            result[key] = obj2[key];
        }
        return result;
    }

};/**
 * Инструмент загрузки view с сервера
 * @param url
 * @constructor
 */
kolos.ViewServer = function (url) {
    var Self = this;
    this._url = url;
    this._animateTagId = undefined;
    this._animateText = undefined;

    this._load = function (callback) {
        let animate;
        let animateElem;
        if (this._animateTagId !== false) {
            if (this._animateText === undefined) {
                this._animateText = kolos.Kolos.text('Загрузка') + '...';
            }
            animate = kolos.Animate.loaderDialog(this._animateText);
            if (this._animateTagId !== undefined) {
                animateElem = kolos.Animate.loader(this._animateTagId, this._animateText);
            }
        }
        kolos.Kolos.request(this._url)
            .method('GET')
            .error(function(msg) {
                if (Self._animateTagId !== false) {
                    animate.stop();
                    if (animateElem !== undefined) {
                        animateElem.stop();
                    }
                }
                kolos.Utils.error('(ViewServer) Ошибка загрузки формы: ' + Self._url + ', ' + msg, true, 'core');
            })
            .ready(function (data) {
                if (Self._animateTagId !== false) {
                    animate.stop();
                    if (animateElem !== undefined) {
                        animateElem.stop();
                    }
                }
                callback(data);
            });
    };

    /**
     * Задать tagId для отображения анимации загрузки. false - отключить анимацию
     * @param tagId тэг id в формате jquery
     * @returns {kolos.ViewServer}
     */
    this.animate = function (tagId) {
        this._animateTagId = tagId;
        return this;
    };

    /**
     * Задать текст анимации
     * @param tagId
     * @param text
     * @returns {kolos.ViewServer}
     */
    this.text = function (tagId, text) {
        this._animateText = text;
        return this;
    };

    this.toModal = function () {
        this._load(function (data) {
            kolos.Modal
                .content(data)
                //.onClickBack(undefined)
                .show();
        });
    };

    this.toContainer = function (tagId) {
        this._load(function (data) {
            $(tagId).html(data);
        });
    };

    this.toCallback = function (callback) {
        this._load(callback);
    };
};
kolos.app = {
    rootPath: '',
    /** @type {kolos.Hints} */
    hint: undefined,
    /** @type {kolos.Router} router */
    router: undefined,
    /** @type {kolos.ComponentManager} componentManager */
    componentManager: undefined,
    __currentPage: undefined,
    __currentComponent: undefined,

    /**
     * @param {kolos.Route} route
     * @returns {void|*}
     */
    __execRoute: function (route) {

        // изначально команда была только 'page', но теперь даём возможность запускать компоненты из разных директорий
        let dirComponent = route.cmd;

        // создаём элемент в который будет загружен компонент страницы
        let fullClassName = 'kolos.' + dirComponent + '.' + kolos.Utils.firstUp(route.component);

        // инициализируем компонет, если только он уже не был инициализирован
        if (
            kolos.app.__currentPage === undefined
            || kolos.app.__currentPage !== fullClassName
        ) {
            kolos.Utils.debug('Init page: ' + fullClassName);

            let elements = $(`<div component="` + fullClassName + `" ></div>`);

            $('body').html(elements);

            // поновой заталкиваем общий хинт в боди, т.к. мы его перетёрли
            $('body').prepend(kolos.app.hint.element);

            // удаляем все предыдущие компоненты
            this.componentManager.destroyAll();

            this.componentManager.initComponent(elements, undefined, function (component) {

                kolos.app.__currentPage = component.context.fullClassName;
                kolos.app.__currentComponent = component;

                // по умолчанию всегда берём метод index
                if (route.method === undefined || route.method === '') {
                    route.method = 'index';
                }

                if (component[route.method] === undefined) {
                    kolos.Utils.error('Not found method ' + component.context.fullClassName + '.' + route.method + '()');
                    return;
                }

                component[route.method](route.args);

            });

        } else {

            let component = kolos.app.__currentComponent;

            if (component === undefined) {
                kolos.Utils.error('Not found component \'' + route.component + '\'');
                return;
            }

            // по умолчанию всегда берём метод index
            if (route.method === undefined || route.method === '') {
                route.method = 'index';
            }

            if (component[route.method] === undefined) {
                kolos.Utils.error('Not found method ' + component.context.fullClassName + '.' + route.method + '()');
                return;
            }

            component[route.method](route.args);
        }
    },

    initComponent: function (componentClass, tagId, callback) {
        this.componentManager.initComponentTo('<div component="' + componentClass + '"></div>', tagId, undefined, callback);
    },

    init: function (rootPath) {
        let Self = this;

        this.rootPath = rootPath;

        this.hint = new kolos.Hints(undefined, 5000);

        this.router = new kolos.Router();

        this.componentManager = new kolos.ComponentManager(this.rootPath);

        this.componentManager.initComponentsOnPage();

        // this.router.subscribe('page', function (route) {
        //     Self.__execRoute(route);
        // });

        this.router.subscribe('*', function (route) {
            Self.__execRoute(route);
        });

        // // пустой хзш редиректим на компонент kolos.page.Main
        // kolos.app.router.subscribe('', function (route) {
        //     // редиректим на main
        //     kolos.Utils.redirect('#/page/main');
        // });

        this.router.init();
    },

    addRedirect: function (command, toHash) {
        // пустой хзш редиректим на компонент kolos.page.Main
        kolos.app.router.subscribe(command, function (route) {
            // редиректим на main
            kolos.Utils.redirect('#' + toHash);
        });
    },

    addRoute: function (route, callback) {
        this.router.subscribe(route, function (route) {
            callback(route);
        });
    }
};