System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","jimu-ui"],function(e,t){var n={},r={},i={},a={};return{setters:[function(e){n.Fragment=e.Fragment,n.jsx=e.jsx,n.jsxs=e.jsxs},function(e){r.React=e.React,r.css=e.css},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent,i.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){a.Alert=e.Alert,a.Loading=e.Loading,a.LoadingType=e.LoadingType}],execute:function(){e((()=>{var e={686(e){"use strict";e.exports=i},244(e){"use strict";e.exports=r},386(e){"use strict";e.exports=n},321(e){"use strict";e.exports=a}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var o={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(o),s.d(o,{__set_webpack_public_path__:()=>E,default:()=>A});var e=s(386),t=s(244),n=s(686),r=s(321),i=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}l((r=r.apply(e,t||[])).next())})};const a="https://view.eumetsat.int/geoserver/wms";function l(e,t,n){return Math.min(n,Math.max(t,e))}function c(e){var t,n,r;const i=/^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?)?$/i.exec((null!=e?e:"").trim());if(!i)return 60;const a=1440*parseInt(null!==(t=i[1])&&void 0!==t?t:"0",10)+60*parseInt(null!==(n=i[2])&&void 0!==n?n:"0",10)+parseInt(null!==(r=i[3])&&void 0!==r?r:"0",10);return a>0?a:60}function u(e){const t=(null!=e?e:"").trim();if(0===t.length)return null;const n=t.split("/");if(n.length<3)return null;const r=Date.parse(n[0]),i=Date.parse(n[1]);return Number.isNaN(r)||Number.isNaN(i)||i<r?null:{raw:t,startMs:r,endMs:i,stepMinutes:c(n[2])}}function d(e,t){return Array.from(e.children).filter(e=>e.tagName.toLowerCase()===t.toLowerCase())}function p(e){const t=new Date(e),n=e=>String(e).padStart(2,"0");return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`}function m(e){const t=new Date(e),n=e=>String(e).padStart(2,"0");return`${t.getUTCFullYear()}-${n(t.getUTCMonth()+1)}-${n(t.getUTCDate())}T${n(t.getUTCHours())}:${n(t.getUTCMinutes())}:00.000Z`}function f(e){const t=(null!=e?e:"").trim();if(0===t.length)return null;const n=Date.parse(t);return Number.isNaN(n)?null:n}const g=t.css`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`,h=t.css`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 12px 12px;
  gap: 10px;
  background: #121212;
  color: #f5f5f5;
  border-radius: 12px;
  margin: 8px;
  box-sizing: border-box;
`,x=t.css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`,v=t.css`
  flex: 1 1 150px;
  min-width: 140px;
  background: #1e1e1e;
  color: #fff;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  padding: 6px;
`,w=t.css`
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: #fff;
  padding: 6px 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,y=t.css`
  text-align: center;
  font-variant-numeric: tabular-nums;
`,b=t.css`
  font-size: 0.8rem;
  opacity: 0.85;
  text-transform: capitalize;
`,j=t.css`
  font-size: 1.85rem;
  font-weight: 600;
  margin-top: 4px;
  letter-spacing: 0.02em;
`,S=t.css`
  height: 4px;
  background: #2a2a2a;
  border-radius: 2px;
  overflow: hidden;
`,M=t.css`
  height: 100%;
  background: #3b82f6;
  transition: width 0.12s ease-out;
`,C=t.css`
  width: 100%;
  margin: 4px 0 0;
  accent-color: #3b82f6;
`,R=t.css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 6px 0 2px;
`,L=t.css`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  background: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`,$=t.css`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  border: none;
  background: #3b82f6;
  color: #fff;
  font-size: 1.35rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`,N=t.css`
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  opacity: 0.75;
`,T=t.css`
  font-size: 0.65rem;
  opacity: 0.55;
  text-align: center;
  a {
    color: #93c5fd;
  }
`,A=s=>{var o,c,A;const{id:E,config:k,useMapWidgetIds:I}=s,D=t.React.useMemo(()=>{var e;return function(e){const t={baseUrl:a,inferredLayerName:""},n=(null!=e?e:"").trim();if(0===n.length)return t;try{const e=new URL(n),t=e.pathname.split("/").filter(Boolean);if(t.length>=4&&"geoserver"===t[0].toLowerCase()&&"ows"===t[t.length-1].toLowerCase()){const n=t[t.length-2];return e.search="",e.hash="",{baseUrl:`${e.origin}${e.pathname}`.replace(/\/$/,""),inferredLayerName:n.length>0?n:""}}return e.search="",e.hash="",{baseUrl:`${e.origin}${e.pathname}`.replace(/\/$/,""),inferredLayerName:""}}catch(e){return t}}(null!==(e=k.eumetsatWmsUrl)&&void 0!==e?e:a)},[k.eumetsatWmsUrl]),P=function(e){const t=(null!=e?e:"").trim();if(0===t.length)return a;try{const e=new URL(t);return e.search="",e.hash="",`${e.origin}${e.pathname}`.replace(/\/$/,"")}catch(e){return a}}(D.baseUrl),U=(null!==(o=k.eumetsatLayerName)&&void 0!==o?o:"").trim()||D.inferredLayerName,_=null!==(c=k.radarOpacity)&&void 0!==c?c:.65,O=null!==(A=k.animationIntervalMs)&&void 0!==A?A:800,W=!1!==k.showRadarOnMap,[z,F]=t.React.useState(null),[J,V]=t.React.useState(!1),[G,B]=t.React.useState(!1),[H,q]=t.React.useState(null),[Y,Z]=t.React.useState(null),[K,Q]=t.React.useState(60),[X,ee]=t.React.useState(null),[te,ne]=t.React.useState(null),[re,ie]=t.React.useState(""),[ae,se]=t.React.useState(""),[oe,le]=t.React.useState(null),[ce,ue]=t.React.useState(null),[de,pe]=t.React.useState(0),[me,fe]=t.React.useState(!1),ge=t.React.useRef(null),he=t.React.useRef(!1),xe=(null==I?void 0:I.length)>0,ve=`exb-weather-eumetsat-${E}`,we=t.React.useMemo(()=>null==oe||null==ce?[]:function(e,t,n,r){const i=60*Math.max(1,n)*1e3;if(t<e)return[];const a=Math.ceil(e/i)*i,s=Math.floor(t/i)*i;if(s<a)return[];const o=[];for(let e=a;e<=s&&(o.push(e),!(o.length>=r));e+=i);return o}(oe,ce,K,96),[oe,ce,K]);t.React.useEffect(()=>{0!==we.length?pe(e=>l(e,0,we.length-1)):pe(0)},[we]);const ye=t.React.useCallback(e=>{if(!(null==e?void 0:e.map))return;const t=e.map.findLayerById(ve);t&&e.map.remove(t),ge.current=null},[ve]);t.React.useEffect(()=>{let e=!1;return i(void 0,void 0,void 0,function*(){B(!0),q(null);try{const t=function(e){const t=new URL(e);return t.searchParams.set("service","WMS"),t.searchParams.set("version","1.3.0"),t.searchParams.set("request","GetCapabilities"),t.toString()}(P),n=yield fetch(t,{mode:"cors",credentials:"omit",cache:"no-store"});if(!n.ok)throw new Error(`WMS capabilities ${n.status}`);const r=function(e){var t,n,r,i;const a=(new DOMParser).parseFromString(e,"text/xml"),s=Array.from(a.getElementsByTagName("Layer")),o=[];for(const e of s){const a=d(e,"Name")[0];if(!(null==a?void 0:a.textContent))continue;const s=d(e,"Title")[0],l=d(e,"Dimension"),c=d(e,"Extent"),p=null!==(t=l.find(e=>{var t;return"time"===(null!==(t=e.getAttribute("name"))&&void 0!==t?t:"").toLowerCase()}))&&void 0!==t?t:c.find(e=>{var t;return"time"===(null!==(t=e.getAttribute("name"))&&void 0!==t?t:"").toLowerCase()});o.push({name:a.textContent.trim(),title:null!==(r=null===(n=null==s?void 0:s.textContent)||void 0===n?void 0:n.trim())&&void 0!==r?r:a.textContent.trim(),time:u(null!==(i=null==p?void 0:p.textContent)&&void 0!==i?i:"")})}return o}(yield n.text()),i=function(e,t){var n;if(0===e.length)return null;const r=t.trim().toLowerCase();if(r.length>0){const t=e.find(e=>e.name.toLowerCase()===r);if(t)return t}const i=e.filter(e=>null!=e.time);return i.find(e=>{const t=`${e.name} ${e.title}`.toLowerCase();return t.includes("precip")||t.includes("rain")})||(null!==(n=i[0])&&void 0!==n?n:e[0])}(r,U);if(!i||!i.time)throw new Error("No se encontr\xf3 capa temporal de precipitaci\xf3n en WMS.");if(e)return;Z(i),Q(60),ee(i.time.startMs),ne(i.time.endMs);const a=p(i.time.startMs),s=p(i.time.endMs);ie(a),se(s),le(i.time.startMs),ue(i.time.endMs)}catch(t){if(!e){const e=Date.now(),n=e-864e5,r=U.trim()||"msg_fes:h60b";Z({name:r,title:r,time:null}),Q(60),ee(n),ne(e),ie(p(n)),se(p(e)),le(n),ue(e),q(`GetCapabilities no disponible; usando fallback de capa ${r}. Detalle: ${t instanceof Error?t.message:String(t)}`)}}finally{e||B(!1)}}),()=>{e=!0}},[P,U]);const be=t.React.useCallback(()=>i(void 0,void 0,void 0,function*(){if(!(null==z?void 0:z.view)||!(null==Y?void 0:Y.name))return null;const e=z.view;if(!W)return ye(e),null;let t=ge.current;if(!t){const[r]=yield(0,n.loadArcGISJSAPIModules)(["esri/layers/WMSLayer"]);ye(e),t=new r({id:ve,url:P,sublayers:[{name:Y.name}],opacity:_,title:`EUMETSAT ${Y.name}`,copyright:"EUMETSAT"}),yield t.load(),e.map.add(t),e.map.reorder(t,e.map.layers.length-1),ge.current=t}return t.opacity=_,t}),[z,Y,W,ye,ve,P,_]),je=t.React.useCallback(e=>i(void 0,void 0,void 0,function*(){if(null==z?void 0:z.view)try{const t=yield z.view.whenLayerView(e);if(!(null==t?void 0:t.updating))return;yield new Promise(e=>{const n=window.setTimeout(()=>{e()},8e3),r=()=>{if(!t.updating)return window.clearTimeout(n),void e();window.requestAnimationFrame(r)};r()})}catch(e){}}),[z]),Se=t.React.useCallback(e=>i(void 0,void 0,void 0,function*(){var t;if(!W||!(null==z?void 0:z.view))return;if(he.current)return;he.current=!0;const n=yield be();if(n)try{n.customLayerParameters=Object.assign(Object.assign({},null!==(t=n.customLayerParameters)&&void 0!==t?t:{}),{time:m(e)}),n.refresh(),yield je(n)}finally{he.current=!1}else he.current=!1}),[W,z,be,je]);t.React.useEffect(()=>{(null==z?void 0:z.view)&&J&&W&&0!==we.length&&Se(we[de]).catch(e=>{q(e instanceof Error?e.message:String(e))})},[z,J,W,we,de,Se]),t.React.useEffect(()=>{(null==z?void 0:z.view)&&!W&&ye(z.view)},[z,W,ye]),t.React.useEffect(()=>{if(!me||we.length<2)return;const e=window.setInterval(()=>{he.current||pe(e=>(e+1)%we.length)},O);return()=>{window.clearInterval(e)}},[me,we.length,O]),t.React.useEffect(()=>()=>{(null==z?void 0:z.view)&&ye(z.view)},[z,ye]);const Me=t.React.useCallback(e=>{V(!1),F(null),e&&e.whenJimuMapViewLoaded().then(()=>{F(e),V(!0)}).catch(()=>{V(!1)})},[]),Ce=we[de],Re=Ce?(de+1)/Math.max(1,we.length)*100:0,Le=Ce?new Date(Ce).toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"\u2014",$e=Ce?new Date(Ce).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"\u2014:\u2014",Ne=null!=oe&&null!=ce?`${new Date(oe).toLocaleString("es-ES")} \u2192 ${new Date(ce).toLocaleString("es-ES")}`:"Rango: sin datos",Te=we.length>0,Ae=we.length>=2,Ee=null!=X?p(X):void 0,ke=null!=te?p(te):void 0;return(0,e.jsxs)("div",{className:"widget-weather-radar jimu-widget m-1",css:g,children:[(0,e.jsx)(n.JimuMapViewComponent,{useMapWidgetId:null==I?void 0:I[0],onActiveViewChange:Me}),!xe&&(0,e.jsx)(r.Alert,{type:"warning",text:"Selecciona un widget Mapa en la configuraci\xf3n del widget.",withIcon:!0}),xe&&(0,e.jsxs)("div",{css:h,children:[null!==H&&(0,e.jsx)(r.Alert,{type:"error",text:H,withIcon:!0}),!G&&null!=X&&null!=te&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{css:x,children:[(0,e.jsx)("input",{css:v,type:"datetime-local",min:Ee,max:ke,value:re,onChange:e=>{ie(e.target.value)}}),(0,e.jsx)("input",{css:v,type:"datetime-local",min:Ee,max:ke,value:ae,onChange:e=>{se(e.target.value)}}),(0,e.jsx)("button",{type:"button",css:w,onClick:()=>{fe(!1),pe(0);const e=f(re),t=f(ae);if(null==e||null==t||null==X||null==te)return;const n=Math.min(e,t),r=Math.max(e,t);le(l(n,X,te)),ue(l(r,X,te))},children:"Aplicar rango"})]}),(0,e.jsxs)("div",{css:N,children:[(0,e.jsxs)("span",{children:["Disponible: ",Ee," \u2192 ",ke]}),(0,e.jsxs)("span",{children:["Paso: ",K," min"]})]})]}),G&&(0,e.jsx)("div",{className:"d-flex align-items-center py-2 justify-content-center",children:(0,e.jsx)(r.Loading,{type:r.LoadingType.Secondary})}),!G&&we.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{css:y,children:[(0,e.jsx)("div",{css:b,children:Le}),(0,e.jsx)("div",{css:j,children:$e})]}),(0,e.jsxs)("div",{css:N,children:[(0,e.jsx)("span",{children:Ne}),!W&&(0,e.jsx)("span",{children:"Capa mapa: off"})]}),(0,e.jsx)("div",{css:S,children:(0,e.jsx)("div",{css:M,style:{width:`${Re}%`}})}),(0,e.jsx)("input",{css:C,type:"range",min:0,max:Math.max(0,we.length-1),step:1,value:de,disabled:!Te,"aria-label":"Instante en el tiempo",onChange:e=>{const t=parseInt(e.target.value,10);Number.isNaN(t)||(pe(t),fe(!1))}}),(0,e.jsxs)("div",{css:R,children:[(0,e.jsx)("button",{type:"button",css:L,"aria-label":"Anterior",disabled:!Te||de<=0,onClick:()=>{pe(e=>Math.max(0,e-1)),fe(!1)},children:"\u23ee"}),(0,e.jsx)("button",{type:"button",css:$,"aria-label":me?"Pausa":"Reproducir",disabled:!Ae,onClick:()=>{fe(e=>!e)},children:me?"\u275a\u275a":"\u25b6"}),(0,e.jsx)("button",{type:"button",css:L,"aria-label":"Siguiente",disabled:!Te||de>=we.length-1,onClick:()=>{pe(e=>Math.min(we.length-1,e+1)),fe(!1)},children:"\u23ed"})]}),(0,e.jsxs)("div",{css:N,children:[(0,e.jsxs)("span",{children:[de+1," / ",we.length]}),(0,e.jsx)("span",{children:Y?`Capa: ${Y.name}`:"\u2014"})]})]}),!G&&null!=X&&null!=te&&0===we.length&&!H&&(0,e.jsx)(r.Alert,{type:"warning",text:"Ning\xfan instante cae en el rango seleccionado.",withIcon:!0}),(0,e.jsxs)("div",{css:T,children:["Datos: ",(0,e.jsx)("a",{href:"https://view.eumetsat.int/geoserver/web/",target:"_blank",rel:"noreferrer",children:"EUMETSAT WMS"})]})]})]})};function E(e){s.p=e}})(),o})())}}});