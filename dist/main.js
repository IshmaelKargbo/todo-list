(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),i=t.n(o),r=t(645),s=t.n(r)()(i());s.push([e.id,'body {\n  background: rgb(1, 51, 108);\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  color: black;\n  box-sizing: border-box;\n  font-family: Roboto, "Courier New", Courier, monospace;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  padding: 0 10px;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.todo-container {\n  width: 100%;\n  background: white;\n  box-shadow: 0 5px 20px 1px rgb(100, 100, 100);\n}\n\nbutton {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\nh5,\nh2,\nh3,\nh4,\nbutton,\np {\n  margin: 0;\n  padding: 0;\n}\n\n.title-container {\n  display: flex;\n  padding: 15px;\n  border-bottom: 1px solid rgb(211, 211, 211);\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n}\n\n.add-container {\n  border-bottom: 1px solid rgb(211, 211, 211);\n  padding: 15px;\n  display: flex;\n}\n\n.add-container input {\n  width: 100%;\n  border: none;\n  background: transparent;\n  font-style: italic;\n}\n\n.add-container svg {\n  color: rgb(189, 189, 189);\n}\n\n.add-container input:focus {\n  outline: none;\n}\n\n.todo-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.todo-list li {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgb(211, 211, 211);\n  padding: 15px;\n  justify-content: space-between;\n}\n\n.empty {\n  text-align: center;\n  border-bottom: 1px solid rgb(211, 211, 211);\n  padding: 15px;\n  display: none;\n  font-style: italic;\n  color: #ccc;\n}\n\n.todo-list li .edit {\n  flex: 1;\n  border: none;\n}\n\n.todo-list li .title p {\n  flex: 1;\n}\n\n.todo-list li .title {\n  flex: 1;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -webkit-touch-callout: none;\n}\n\n.todo-list li .edit:focus {\n  outline: none;\n}\n\n.todo-list li input[type="checkbox"] {\n  margin-right: 10px;\n}\n\n.clear-complete {\n  text-align: center;\n  padding: 15px 0;\n  width: 100%;\n  display: none;\n  font-size: 15px;\n  color: rgb(163, 163, 163);\n}\n\n@media (min-width: 992px) {\n  .todo-container {\n    width: 30%;\n  }\n\n  main {\n    padding: 0;\n  }\n}\n',""]);const d=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var d=0;d<this.length;d++){var a=this[d][0];null!=a&&(s[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},s=[],d=0;d<e.length;d++){var a=e[d],c=o.base?a[0]+o.base:a[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=t(p),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=i(h,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var d=t(r[s]);n[d].references--}for(var a=o(e,i),c=0;c<r.length;c++){var l=t(r[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=a}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),r=t(569),s=t.n(r),d=t(565),a=t.n(d),c=t(216),l=t.n(c),p=t(589),u=t.n(p),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=a(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=class{#e;#n;#t;#o;constructor(e,n,t){this.#t=t,this.#n=n,this.#e=e,this.#o=!1}get Index(){return this.#e}get Description(){return this.#n}get Completed(){return this.#t}get Edit(){return this.#o}set edit(e){this.#o=e}set description(e){this.#n=e}set completed(e){this.#t=e}data(){return{index:this.#e,description:this.#n,completed:this.#t}}},g=new class{#i=[];constructor(){this.#r()}#r(){const e=localStorage.getItem("todo-store"),n=JSON.parse(e);n&&(this.#i=n.map((e=>new f(e.index,e.description,e.completed))))}#s(){const e=this.#i.map((e=>e.data()));localStorage.setItem("todo-store",JSON.stringify(e))}store(){return this.#i}hasCompleted(){return void 0!==this.#i.find((e=>Boolean(e.Completed)))}add(e){const n=Math.random().toString(36).slice(2),t=new f(n,e,!1);this.#i.push(t),this.#s()}editState(e,n){this.#d();const t=this.#i.findIndex((n=>n.Index===e));if(t<0)return;const o=this.#i[t];o.edit=n,this.#i[t]=o}checkToggle(e,n){const t=this.#i.findIndex((n=>n.Index===e));if(t<0)return;const o=this.#i[t];o.completed=n,this.#i[t]=o,this.#s()}remove(e){this.#i=this.#i.filter((n=>n.Index!==e)),this.#s()}edit(e,n){const t=this.#i.findIndex((n=>n.Index===e));if(t<0)return;const o=this.#i[t];o.description=n,this.#i[t]=o,this.#d(),this.#s()}clearCompleted(){this.#i=this.#i.filter((e=>!e.Completed)),this.#s()}#d(){this.#i=this.#i.map((e=>(e.edit=!1,e)))}},v=document.getElementById("todoList"),x=document.getElementById("form"),b=document.getElementById("empty"),y=document.getElementById("clear"),I=()=>{v.innerHTML="",0===g.store().length?(b.style.display="block",y.style.display="none"):(b.style.display="none",g.hasCompleted()?y.style.display="block":y.style.display="none"),g.store().forEach((e=>{const n=document.createElement("li"),t=`\n      <input value=${e.Description} autofocus type="text" class="edit" id="field_${e.Index}">\n    `,o=`\n      <div class="title">\n          <input id="check_${e.Index}" type="checkbox">\n          <p id="edit_${e.Index}" for="${e.Index}">${e.Description}</p>\n      </div>\n      <button id="del_${e.Index}">\n          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17"\n              viewBox="0 0 17 17">\n              <g>\n              </g>\n              <path\n                  d="M10.935 2.016c-0.218-0.869-0.999-1.516-1.935-1.516-0.932 0-1.71 0.643-1.931 1.516h-3.569v1h11v-1h-3.565zM9 1.5c0.382 0 0.705 0.221 0.875 0.516h-1.733c0.172-0.303 0.485-0.516 0.858-0.516zM13 4h1v10.516c0 0.827-0.673 1.5-1.5 1.5h-7c-0.827 0-1.5-0.673-1.5-1.5v-10.516h1v10.516c0 0.275 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.225 0.5-0.5v-10.516zM8 5v8h-1v-8h1zM11 5v8h-1v-8h1z" />\n          </svg>\n      </button>\n    `;n.innerHTML=e.Edit?t:o,v.appendChild(n);const i=document.getElementById(`edit_${e.Index}`);i&&(e.Completed&&(i.style.textDecoration="line-through"),i.addEventListener("dblclick",(()=>{g.editState(e.Index,!0),I()})));const r=document.getElementById(`check_${e.Index}`);r&&(r.checked=e.Completed,r.value=e.Completed,r.addEventListener("change",(({target:n})=>{const t="true"!==n.value;g.checkToggle(e.Index,t),I()})));const s=document.getElementById(`del_${e.Index}`);if(s&&s.addEventListener("click",(()=>{g.remove(e.Index),I()})),e.Edit){const n=document.getElementById(`field_${e.Index}`);n.focus(),n.value="",n.value=e.Description,n.addEventListener("keypress",(({key:n,target:t})=>{"Enter"===n&&t.value&&(g.edit(e.Index,t.value),I())})),n.addEventListener("blur",(()=>{g.editState(e.Index,!1),I()}))}}))};x.addEventListener("submit",(e=>{e.preventDefault();const n=Object.fromEntries(new FormData(e.target).entries());""!==n.description&&(g.add(n.description),I(),x.reset())})),y.addEventListener("click",(()=>{g.clearCompleted(),I()})),I()})()})();