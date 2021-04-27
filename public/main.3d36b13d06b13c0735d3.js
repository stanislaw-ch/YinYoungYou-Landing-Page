!function(){"use strict";var e,n,t,r,o,i,c={898:function(e,n,t){t(2462);var r="survey",o="subscribe",i="contact",c="Invalid Resource",a="Member Exists",s="Forgotten Email Not Subscribed",u="Deine E-Mail ist falsch oder ungültig. Gib bitte eine echte E-Mail-Adresse ein.",d="Deine E-Mail ist bereits in unserer Liste.",l="Deine E-Mail wurde dauerhaft gelöscht und kann nicht erneut importiert werden.",f={TEL:"+491702816458",EMAIL:"info",DOMAIN:"yin-young-you.com"},p="true",h="false",m='<h2 class="visually-hidden">Google-analytics</h2>\n    <div class="container">\n      <div class="banner__content-wrapper">\n        <div class="banner__content">\n          <h3>Mhhh… lecker cookies!</h3>\n          <p>Wir verwenden Cookies um die Zugriffe auf unsere Webseite zu analysieren und somit unsere Webseite für Sie zu optimieren. Durch Auswahl “Cookies ablehnen“ können Sie alle nicht notwendigen Cookies blockieren. Technisch notwendige Cookies werden auch bei der Auswahl von „Cookies ablehnen“ gesetzt. Weitere Informationen zum Thema Datenschutz finden Sie <a href="datenschutz.html">hier.</a></p>\n        </div>\n        <div class="banner__button-wrapper">\n          <button class="banner__button banner__button--opt-out" type="button">Cookies ablehnen</button>\n          <button class="banner__button banner__button--opt-in" type="button">Cookies zulassen</button>\n        </div>\n      </div>\n    </div>',v={onAccept:function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-6PWBLDMWTG")},onRevoke:function(){window["ga-disable-G-6PWBLDMWTG"]=!0}};function y(e,n,t,r,o,i,c){try{var a=e[i](c),s=a.value}catch(e){return void t(e)}a.done?n(s):Promise.resolve(s).then(r,o)}var _=function(e,n){var t=e.querySelector(".form__message--error");n.title?function(e,n){e.title===c&&(n.innerText=u),e.title===a&&(n.innerText=d),e.title===s&&(n.innerText=l),n.classList.remove("form__message--hidden")}(n,t):t.classList.remove("form__message--hidden")},b=function(e,n,t){var c=200,a=e.action;n===r&&(a=t),function(e,n){r===n&&e.querySelectorAll('button[type="submit"]').forEach((function(e){e.innerText="Loading...",e.disabled=!0}))}(e,n),fetch(a,{method:e.method,body:new FormData(e)}).then((function(e){return e.json()})).then((function(t){t===c||"pending"===t.status||"success"===t.result?function(e,n){if(r===n&&e.querySelector(".survey__form-success").classList.remove("survey__form-success--hidden"),o===n){var t=e.querySelector(".form__message--success"),c=e.querySelector(".form__button");c.classList.add("form__button--success"),c.innerText="Vielen Dank!",t.classList.remove("form__message--hidden")}if(i===n){var a=e.querySelector(".form__button");a.classList.add("form__button--success"),a.innerText="Vielen Dank für deine Nachricht!",e.reset()}}(e,n):_(e,t)}))};function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E,k,w,S,L=function(){function e(n,t,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=n,this.fields=t,this.formType=r,this.errors=0}var n,t,r;return n=e,(t=[{key:"init",value:function(){this.validateOnEntry(),this.validateOnSubmit()}},{key:"validateOnSubmit",value:function(){var e=this;this.form.addEventListener("submit",(function(n){n.preventDefault(),e.fields.forEach((function(n){var t=e.form.querySelector('[data-type="'.concat(n,'"]'));e.validateFields(t)})),0===e.errors&&b(e.form,e.formType)}))}},{key:"validateOnEntry",value:function(){var e=this;this.fields.forEach((function(n){var t=e.form.querySelector('[data-type="'.concat(n,'"]'));t.addEventListener("input",(function(){var n=e.form.querySelector(".form__message--error"),r=e.form.querySelector(".form__message--success"),o=e.form.querySelector(".form__button");r&&(r.classList.contains("form__message--hidden")||r.classList.add("form__message--hidden")),n&&(n.classList.contains("form__message--hidden")||n.classList.add("form__message--hidden")),o.classList.contains("form__button--success")&&(o.classList.remove("form__button--success"),o.innerText="Abonnieren!","subscribe"===e.formType&&(o.innerText="Abonnieren!"),"contact"===e.formType&&(o.innerText="Nachricht abschicken")),e.validateFields(t)}))}))}},{key:"validateFields",value:function(e){""===e.value.trim()?this.setStatus(e,"Bitte schreib uns eine Nachricht","error"):this.setStatus(e,null,"success"),"email"===e.type&&(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e.value)?(this.setStatus(e,null,"success"),this.errors=0):(this.setStatus(e,"Bitte gib eine gültige E-mail Adresse an","error"),this.errors++))}},{key:"setStatus",value:function(e,n,t){var r=e.parentElement.querySelector(".form__input-message");"success"===t&&(r&&(r.innerText=""),e.classList.remove("form__input--error")),"error"===t&&(e.parentElement.querySelector(".form__input-message").innerText=n,e.classList.add("form__input--error"))}}])&&g(n.prototype,t),r&&g(n,r),e}();t(9055),(w=document.querySelector(".aup__contact"))&&(E=w,k=f.TEL.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,"$1 $2 $3 $4 $5"),E.innerHTML='Telefon: <a href="tel:'.concat(f.TEL,'">').concat(k,'</a> <br>E-Mail: <a href="mailto:').concat(f.EMAIL,"@").concat(f.DOMAIN,'">').concat(f.EMAIL,"&#64;").concat(f.DOMAIN,"</a>")),function(){var e=document.querySelector(".survey form");if(e){var n=e.querySelectorAll("input[type=checkbox]"),t=e.querySelector(".form__option-item--option-list"),o=e.querySelector(".form__option-self"),i=e.querySelector(".survey__form-button--submit"),c=e.querySelector(".survey__form-button--send"),a=e.querySelector(".survey__form-button--cancel"),s=function(e,n){e.disabled=n};n.forEach((function(e){return e.addEventListener("click",(function(e){"option-7"===e.target.id&&(e.target.checked=!1),Array.from(n).some((function(e){return!0===e.checked}))?(s(i,!1),s(c,!1)):(s(i,!0),s(c,!0))}))})),t.addEventListener("click",(function(){t.classList.add("form__option-item--hidden"),o.classList.remove("form__option-self--hidden"),i.classList.add("survey__form-button--hidden"),o.querySelector("input").focus(),o.addEventListener("input",(function(){""===o.querySelector("input").value.trim()?s(c,!0):s(c,!1)}))})),a.addEventListener("click",(function(){t.classList.remove("form__option-item--hidden"),o.classList.add("form__option-self--hidden"),i.classList.remove("survey__form-button--hidden"),t.querySelector(".form__option-input").checked=!1,o.querySelector("input").value=""})),e.addEventListener("submit",(function(n){n.preventDefault(),fetch("./scriptURL.php",{method:"GET"}).then((function(e){return e.json()})).then((function(n){b(e,r,n)}))}))}}(),(S=document.querySelector(".contact__form form"))&&(S.querySelector('input[type="checkbox"]').checked=!1,new L(S,["email","message"],i).init()),function(){var e=document.querySelectorAll(".subscribe form"),n=["email"];e&&e.forEach((function(e){return new L(e,n,o).init()}))}(),null===sessionStorage.getItem("cookies_enabled")&&function(){var e=function(){var e,n=(e=regeneratorRuntime.mark((function e(n,t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.addEventListener("click",(function(){t.remove(),sessionStorage.setItem("cookies_enabled",r),sessionStorage.getItem("cookies_enabled")===p?v.onAccept():v.onRevoke()}));case 2:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){y(i,r,o,c,a,"next",e)}function a(e){y(i,r,o,c,a,"throw",e)}c(void 0)}))});return function(e,t,r){return n.apply(this,arguments)}}();!function(e,n){var t=document.createElement("section");t.classList.add("banner"),t.classList.add("banner__".concat(e)),t.insertAdjacentHTML("afterbegin",n),document.body.appendChild(t)}("google-analytics",m);var n,t,r,o=document.querySelector(".banner__google-analytics");t=(n=o).querySelector(".banner__button--opt-in"),r=n.querySelector(".banner__button--opt-out"),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"animate__";new Promise((function(r){var o="".concat(t).concat(n),i=e;i.classList.add("".concat(t,"animated"),o),i.addEventListener("animationend",(function(e){e.stopPropagation(),i.classList.remove("".concat(t,"animated"),o),r("Animation ended")}),{once:!0})}))}(n,"slideInUp"),e(t,n,p),e(r,n,h)}();t.p,t.p,t.p,t.p},2462:function(e,n,t){var r=t(7134)(e.id,{publicPath:"../",locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},a={};function s(e){if(a[e])return a[e].exports;var n=a[e]={id:e,exports:{}},t={id:e,module:n,factory:c[e],require:s};return s.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require),n.exports}s.m=c,s.c=a,s.i=[],s.x=function(){},s.hu=function(e){return e+"."+s.h()+".hot-update.js"},s.miniCssF=function(e){return"css/vendors.2bc49c7576cfeb2c55d2.css"},s.hmrF=function(){return"main."+s.h()+".hot-update.json"},s.h=function(){return"9005db2837f4431bc9c2"},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},s.l=function(n,t,r,o){if(e[n])e[n].push(t);else{var i,c;if(void 0!==r)for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var d=a[u];if(d.getAttribute("src")==n){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=n),e[n]=[t];var l=function(t,r){i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),c&&document.head.appendChild(i)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e,n,t,r,o={},i=s.c,c=[],a=[],u="idle";function d(e){u=e;for(var n=0;n<a.length;n++)a[n].call(null,e)}function l(e){if(0===n.length)return e();var t=n;return n=[],Promise.all(t).then((function(){return l(e)}))}function f(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return d("check"),s.hmrM().then((function(r){if(!r)return d(m()?"ready":"idle"),null;d("prepare");var o=[];return n=[],t=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,n){return s.hmrC[n](r.c,r.r,r.m,e,t,o),e}),[])).then((function(){return l((function(){return e?h(e):(d("ready"),o)}))}))}))}function p(e){return"ready"!==u?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var n=t.map((function(n){return n(e)}));t=void 0;var o,i=n.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return d("abort"),Promise.resolve().then((function(){throw i[0]}));d("dispose"),n.forEach((function(e){e.dispose&&e.dispose()})),d("apply");var c=function(e){o||(o=e)},a=[];return n.forEach((function(e){if(e.apply){var n=e.apply(c);if(n)for(var t=0;t<n.length;t++)a.push(n[t])}})),o?(d("fail"),Promise.resolve().then((function(){throw o}))):r?h(e).then((function(e){return a.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):(d("idle"),Promise.resolve(a))}function m(){if(r)return t||(t=[]),Object.keys(s.hmrI).forEach((function(e){r.forEach((function(n){s.hmrI[e](n,t)}))})),r=void 0,!0}s.hmrD=o,s.i.push((function(h){var m,v,y,_=h.module,b=function(t,r){var o=i[r];if(!o)return t;var a=function(n){if(o.hot.active){if(i[n]){var a=i[n].parents;-1===a.indexOf(r)&&a.push(r)}else c=[r],e=n;-1===o.children.indexOf(n)&&o.children.push(n)}else console.warn("[HMR] unexpected require("+n+") from disposed module "+r),c=[];return t(n)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(n){t[e]=n}}};for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&"e"!==f&&Object.defineProperty(a,f,s(f));return a.e=function(e){return function(e){switch(u){case"ready":return d("prepare"),n.push(e),l((function(){d("ready")})),e;case"prepare":return n.push(e),e;default:return e}}(t.e(e))},a}(h.require,h.id);_.hot=(m=h.id,v=_,y={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==m,_requireSelf:function(){c=v.parents.slice(),e=m,s(m)},active:!0,accept:function(e,n){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=n||function(){};else y._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._declinedDependencies[e[n]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=y._disposeHandlers.indexOf(e);n>=0&&y._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":t=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,t)})),d("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return u;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var n=a.indexOf(e);n>=0&&a.splice(n,1)},data:o[m]},e=void 0,y),_.parents=c,_.children=[],c=[],h.require=b})),s.hmrC={},s.hmrI={}}(),s.p="",n=function(e,n,t,r){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var c=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=c,s.request=a,o.parentNode.removeChild(o),r(s)}},o.href=n,document.head.appendChild(o),o},t=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(c=t[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===n))return c}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var c;if((o=(c=i[r]).getAttribute("data-href"))===e||o===n)return c}},r=[],o=[],i=function(e){return{dispose:function(){for(var e=0;e<r.length;e++){var n=r[e];n.parentNode&&n.parentNode.removeChild(n)}r.length=0},apply:function(){for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}},s.hmrC.miniCss=function(e,c,a,u,d,l){d.push(i),e.forEach((function(e){var i=s.miniCssF(e),c=s.p+i;const a=t(i,c);a&&u.push(new Promise((function(t,i){var s=n(e,c,(function(){s.as="style",s.rel="preload",t()}),i);r.push(a),o.push(s)})))}))},function(){var e,n,t,r,o={179:0},i=[[1202,216],[898,216]],c={};function a(e){return new Promise((function(n,t){c[e]=n;var r=s.p+s.hu(e),o=new Error;s.l(r,(function(n){if(c[e]){c[e]=void 0;var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,t(o)}}))}))}function u(i){function c(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,c=o.chain,u=s.c[i];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<u.parents.length;d++){var l=u.parents[d],f=s.c[l];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(f.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),a(t[l],[i])):(delete t[l],n.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}s.f&&delete s.f.jsonpHmr,e=void 0;var u={},d=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(s.o(n,p)){var h,m=n[p],v=!1,y=!1,_=!1,b="";switch((h=m?c(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":i.onAccepted&&i.onAccepted(h),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),_=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in l[p]=m,a(d,h.outdatedModules),h.outdatedDependencies)s.o(h.outdatedDependencies,p)&&(u[p]||(u[p]=[]),a(u[p],h.outdatedDependencies[p]));_&&(a(d,[h.moduleId]),l[p]=f)}n=void 0;for(var g,E=[],k=0;k<d.length;k++){var w=d[k];s.c[w]&&s.c[w].hot._selfAccepted&&l[w]!==f&&!s.c[w].hot._selfInvalidated&&E.push({module:w,require:s.c[w].hot._requireSelf,errorHandler:s.c[w].hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete o[e]})),t=void 0;for(var n,r=d.slice();r.length>0;){var i=r.pop(),c=s.c[i];if(c){var a={},l=c.hot._disposeHandlers;for(k=0;k<l.length;k++)l[k].call(null,a);for(s.hmrD[i]=a,c.hot.active=!1,delete s.c[i],delete u[i],k=0;k<c.children.length;k++){var f=s.c[c.children[k]];f&&((e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1))}}}for(var p in u)if(s.o(u,p)&&(c=s.c[p]))for(g=u[p],k=0;k<g.length;k++)n=g[k],(e=c.children.indexOf(n))>=0&&c.children.splice(e,1)},apply:function(e){for(var n in l)s.o(l,n)&&(s.m[n]=l[n]);for(var t=0;t<r.length;t++)r[t](s);for(var o in u)if(s.o(u,o)){var c=s.c[o];if(c){g=u[o];for(var a=[],f=[],p=0;p<g.length;p++){var h=g[p],m=c.hot._acceptedDependencies[h];if(m){if(-1!==a.indexOf(m))continue;a.push(m),f.push(h)}}for(var v=0;v<a.length;v++)try{a[v].call(null,g)}catch(n){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[v],error:n}),i.ignoreErrored||e(n)}}}for(var y=0;y<E.length;y++){var _=E[y],b=_.module;try{_.require(b)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n)}catch(t){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:t,originalError:n}),i.ignoreErrored||e(t),e(n)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:b,error:n}),i.ignoreErrored||e(n)}}return d}}}self.webpackHotUpdate=function(e,t,o){for(var i in t)s.o(t,i)&&(n[i]=t[i]);o&&r.push(o),c[e]&&(c[e](),c[e]=void 0)},s.hmrI.jsonp=function(e,o){n||(n={},r=[],t=[],o.push(u)),s.o(n,e)||(n[e]=s.m[e])},s.hmrC.jsonp=function(i,c,d,l,f,p){f.push(u),e={},t=c,n=d.reduce((function(e,n){return e[n]=!1,e}),{}),r=[],i.forEach((function(n){s.o(o,n)&&void 0!==o[n]&&(l.push(a(n)),e[n]=!0)})),s.f&&(s.f.jsonpHmr=function(n,t){e&&!s.o(e,n)&&s.o(o,n)&&void 0!==o[n]&&(t.push(a(n)),e[n]=!0)})},s.hmrM=function(){if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((function(e){if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))};var d=function(){},l=function(e,n){for(var t,r,c=n[0],a=n[1],u=n[2],l=n[3],f=0,p=[];f<c.length;f++)r=c[f],s.o(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(t in a)s.o(a,t)&&(s.m[t]=a[t]);for(u&&u(s),e&&e(n);p.length;)p.shift()();return l&&i.push.apply(i,l),d()},f=self.webpackChunk=self.webpackChunk||[];function p(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return 0===i.length&&(s.x(),s.x=function(){}),e}f.forEach(l.bind(null,0)),f.push=l.bind(null,f.push.bind(f));var h=s.x;s.x=function(){return s.x=h||function(){},(d=p)()}}(),s.x()}();