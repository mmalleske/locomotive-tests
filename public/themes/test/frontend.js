!function(){"use strict";var r="undefined"==typeof global?self:global;if("function"!=typeof r.require){var e={},t={},n={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,u=function(r,e){for(var t,n=[],i=(o.test(e)?r+"/"+e:e).split("/"),u=0,c=i.length;u<c;u++)t=i[u],".."===t?n.pop():"."!==t&&""!==t&&n.push(t);return n.join("/")},c=function(r){return r.split("/").slice(0,-1).join("/")},s=function(e){return function(t){var n=u(c(e),t);return r.require(n,e)}},f=function(r,e){var n=v&&v.createHot(r),i={id:r,exports:{},hot:n};return t[r]=i,e(i.exports,s(r),i),i.exports},a=function(r){return n[r]?a(n[r]):r},l=function(r,e){return a(u(c(r),e))},h=function(r,n){null==n&&(n="/");var o=a(r);if(i.call(t,o))return t[o].exports;if(i.call(e,o))return f(o,e[o]);throw new Error("Cannot find module '"+r+"' from '"+n+"'")};h.alias=function(r,e){n[e]=r};var p=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/,m=function(r){if(p.test(r)){var e=r.replace(p,"");i.call(n,e)&&n[e].replace(p,"")!==e+"/index"||(n[e]=r)}if(d.test(r)){var t=r.replace(d,"");i.call(n,t)||(n[t]=r)}};h.register=h.define=function(r,n){if(r&&"object"==typeof r)for(var o in r)i.call(r,o)&&h.register(o,r[o]);else e[r]=n,delete t[r],m(r)},h.list=function(){var r=[];for(var t in e)i.call(e,t)&&r.push(t);return r};var v=r._hmr&&new r._hmr(l,h,e,t);h._cache=t,h.hmr=v&&v.wrap,h.brunch=!0,r.require=h}}(),function(){var r,e=("undefined"==typeof window?this:window,function(r,e,t){var n={},i=function(e,t){var o;try{return o=r(t+"/node_modules/"+e)}catch(u){if(u.toString().indexOf("Cannot find module")===-1)throw u;if(t.indexOf("node_modules")!==-1){var c=t.split("/"),s=c.lastIndexOf("node_modules"),f=c.slice(0,s).join("/");return i(e,f)}}return n};return function(o){if(o in e&&(o=e[o]),o){if("."!==o[0]&&t){var u=i(o,t);if(u!==n)return u}return r(o)}}});require.register("process/browser.js",function(r,t,n){t=e(t,{},"process"),function(){function r(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function t(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(r){if(a===clearTimeout)return clearTimeout(r);if((a===e||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(r);try{return a(r)}catch(t){try{return a.call(null,r)}catch(t){return a.call(this,r)}}}function o(){d&&h&&(d=!1,h.length?p=h.concat(p):m=-1,p.length&&u())}function u(){if(!d){var r=t(o);d=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,d=!1,i(r)}}function c(r,e){this.fun=r,this.array=e}function s(){}var f,a,l=n.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{a="function"==typeof clearTimeout?clearTimeout:e}catch(t){a=e}}();var h,p=[],d=!1,m=-1;l.nextTick=function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(r,e)),1!==p.length||d||t(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=s,l.addListener=s,l.once=s,l.off=s,l.removeListener=s,l.removeAllListeners=s,l.emit=s,l.binding=function(r){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(r){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}()}),require.register("themes/test/frontend/javascripts/main.es6",function(r,e,t){"use strict";e("process")}),require.alias("process/browser.js","process"),r=require("process"),require.register("___globals___",function(r,e,t){})}(),require("___globals___");