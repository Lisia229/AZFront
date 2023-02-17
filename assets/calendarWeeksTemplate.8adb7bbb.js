const i=new WeakMap,{addEventListener:y,removeEventListener:b}=EventTarget.prototype;function x(e,t){let r=i.get(e);r||(r=[],i.set(e,r)),t.forEach(n=>{y.call(...n),r.push(n)})}function k(e){let t=i.get(e);!t||(t.forEach(r=>{b.call(...r)}),i.delete(e))}if(!Event.prototype.composedPath){const e=(t,r=[])=>{r.push(t);let n;return t.parentNode?n=t.parentNode:t.host?n=t.host:t.defaultView&&(n=t.defaultView),n?e(n,r):r};Event.prototype.composedPath=function(){return e(this.target)}}function u(e,t,r,n=0){const s=e[n];return t(s)?s:s===r||!s.parentElement?void 0:u(e,t,r,n+1)}function m(e,t){const r=typeof t=="function"?t:n=>n.matches(t);return u(e.composedPath(),r,e.currentTarget)}function w(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E(e){return e[e.length-1]}function T(e,...t){return t.forEach(r=>{e.includes(r)||e.push(r)}),e}function P(e,t){return e?e.split(t):[]}function $(e,t,r){const n=t===void 0||e>=t,s=r===void 0||e<=r;return n&&s}function C(e,t,r){return e<t?t:e>r?r:e}function o(e,t,r={},n=0,s=""){const f=Object.keys(r).reduce((p,l)=>{let a=r[l];return typeof a=="function"&&(a=a(n)),`${p} ${l}="${a}"`},e);s+=`<${f}></${e}>`;const c=n+1;return c<t?o(e,t,r,c,s):s}function d(e){return e.replace(/>\s+/g,">").replace(/\s+</,"<")}const h=document.createRange();function v(e){return h.createContextualFragment(e)}function L(e){e.style.display!=="none"&&(e.style.display&&(e.dataset.styleDisplay=e.style.display),e.style.display="none")}function D(e){e.style.display==="none"&&(e.dataset.styleDisplay?(e.style.display=e.dataset.styleDisplay,delete e.dataset.styleDisplay):e.style.display="")}function g(e){e.firstChild&&(e.removeChild(e.firstChild),g(e))}function R(e,t){g(e),t instanceof DocumentFragment?e.appendChild(t):typeof t=="string"?e.appendChild(v(t)):typeof t.forEach=="function"&&t.forEach(r=>{e.appendChild(r)})}const O=d(`<div class="datepicker hidden">
  <div class="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">
    <div class="datepicker-header">
      <div class="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold"></div>
      <div class="datepicker-controls flex justify-between mb-2">
        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"></button>
        <button type="button" class="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch"></button>
        <button type="button" class="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"></button>
      </div>
    </div>
    <div class="datepicker-main p-1"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls flex space-x-2 mt-2">
        <button type="button" class="%buttonClass% today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>
        <button type="button" class="%buttonClass% clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2"></button>
      </div>
    </div>
  </div>
</div>`),F=d(`<div class="days">
  <div class="days-of-week grid grid-cols-7 mb-1">${o("span",7,{class:"dow block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"})}</div>
  <div class="datepicker-grid w-64 grid grid-cols-7">${o("span",42,{class:"block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"})}</div>
</div>`),I=d(`<div class="calendar-weeks">
  <div class="days-of-week flex"><span class="dow h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400"></span></div>
  <div class="weeks">${o("span",6,{class:"week block flex-1 leading-9 border-0 rounded-lg cursor-default text-center text-gray-900 font-semibold text-sm"})}</div>
</div>`);export{v as a,L as b,I as c,F as d,o as e,C as f,m as g,w as h,O as i,x as j,g as k,E as l,$ as m,P as n,T as p,R as r,D as s,k as u};
