function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(S,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=g();if(j(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:T(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={email:"",message:""},h=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea");function T(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log("error ",e.message)}}function w(e){try{const t=localStorage.getItem(e);if(t)return JSON.parse(t)}catch(e){console.log("error ",e.message)}}!function(){const e=w("feedback-form-state");e&&(j.value=e.email,S.value=e.message)}(),h.addEventListener("submit",(e=>{e.preventDefault(),console.log(w("feedback-form-state")),function(e){try{localStorage.removeItem(e)}catch(e){console.log("error ",e.message)}}("feedback-form-state"),e.currentTarget.reset()})),j.addEventListener("input",e(t)((e=>{y.email=e.target.value,T("feedback-form-state",y)}),350)),S.addEventListener("input",e(t)((e=>{y.message=e.target.value,T("feedback-form-state",y)}),350));
//# sourceMappingURL=03-feedback.d6ea0b98.js.map
