System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","jimu-ui"],function(e,t){var n={},r={},i={},a={};return{setters:[function(e){n.Fragment=e.Fragment,n.jsx=e.jsx,n.jsxs=e.jsxs},function(e){r.React=e.React,r.css=e.css},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent,i.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){a.Alert=e.Alert,a.Loading=e.Loading,a.LoadingType=e.LoadingType}],execute:function(){e((()=>{var e={686(e){"use strict";e.exports=i},244(e){"use strict";e.exports=r},386(e){"use strict";e.exports=n},321(e){"use strict";e.exports=a}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var o={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(o),s.d(o,{__set_webpack_public_path__:()=>U,default:()=>D});var e=s(386),t=s(244),n=s(686),r=s(321),i=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,o)}l((r=r.apply(e,t||[])).next())})};const a="https://view.eumetsat.int/geoserver/wms";function l(e,t,n){return Math.min(n,Math.max(t,e))}function c(e){var t,n,r;const i=/^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?)?$/i.exec((null!=e?e:"").trim());if(!i)return 60;const a=1440*parseInt(null!==(t=i[1])&&void 0!==t?t:"0",10)+60*parseInt(null!==(n=i[2])&&void 0!==n?n:"0",10)+parseInt(null!==(r=i[3])&&void 0!==r?r:"0",10);return a>0?a:60}function u(e){const t=(null!=e?e:"").trim();if(0===t.length)return null;const n=t.split("/");if(n.length<3)return null;const r=Date.parse(n[0]),i=Date.parse(n[1]);return Number.isNaN(r)||Number.isNaN(i)||i<r?null:{raw:t,startMs:r,endMs:i,stepMinutes:c(n[2])}}function d(e,t){return Array.from(e.children).filter(e=>e.tagName.toLowerCase()===t.toLowerCase())}function p(e){const t=new Date(e),n=e=>String(e).padStart(2,"0");return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`}function g(e){const t=new Date(e),n=e=>String(e).padStart(2,"0");return`${t.getUTCFullYear()}-${n(t.getUTCMonth()+1)}-${n(t.getUTCDate())}T${n(t.getUTCHours())}:${n(t.getUTCMinutes())}:00.000Z`}function m(e){const t=(null!=e?e:"").trim();if(0===t.length)return null;const n=Date.parse(t);return Number.isNaN(n)?null:n}const f=t.css`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  position: relative;
`,x=t.css`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: min(390px, calc(100% - 20px));
  max-height: calc(100% - 20px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
  background: linear-gradient(180deg, rgba(12, 16, 24, 0.62) 0%, rgba(9, 12, 18, 0.56) 100%);
  backdrop-filter: blur(8px);
  color: #f5f5f5;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 14px;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
`,h=t.css`
  width: 220px;
  padding: 7px 8px;
  gap: 4px;
`,b=t.css`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
`,v=t.css`
  flex: 1 1 125px;
  min-width: 120px;
  background: rgba(15, 23, 35, 0.72);
  color: #fff;
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 6px;
  padding: 4px 6px;
  font-size: 0.72rem;
`,w=t.css`
  border: none;
  border-radius: 7px;
  background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
  color: #fff;
  padding: 5px 8px;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,y=t.css`
  text-align: center;
  font-variant-numeric: tabular-nums;
  background: rgba(15, 23, 35, 0.48);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 10px;
  padding: 7px 8px 8px;
`,j=t.css`
  font-size: 0.64rem;
  opacity: 0.78;
  text-transform: capitalize;
`,S=t.css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 2px;
  letter-spacing: 0.03em;
`,M=t.css`
  height: 3px;
  background: rgba(148, 163, 184, 0.3);
  border-radius: 2px;
  overflow: hidden;
`,R=t.css`
  height: 100%;
  background: linear-gradient(90deg, #60a5fa 0%, #2563eb 100%);
  transition: width 0.12s ease-out;
`,C=t.css`
  width: 100%;
  margin: 2px 0 0;
  accent-color: #3b82f6;
`,L=t.css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 3px 0 1px;
`,$=t.css`
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.24);
  background: rgba(30, 41, 59, 0.55);
  color: #fff;
  font-size: 0.82rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`,I=t.css`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(147, 197, 253, 0.5);
  background: radial-gradient(circle at 30% 30%, #60a5fa 0%, #2563eb 65%, #1d4ed8 100%);
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
`,T=t.css`
  display: flex;
  justify-content: space-between;
  font-size: 0.64rem;
  opacity: 0.7;
`,k=t.css`
  font-size: 0.56rem;
  opacity: 0.42;
  text-align: center;
  a {
    color: #93c5fd;
  }
`,N=t.css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.66rem;
  opacity: 0.86;
`,P=t.css`
  border: 1px solid rgba(148, 163, 184, 0.25);
  background: rgba(30, 41, 59, 0.5);
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 0.6rem;
`,A=t.css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: grab;
  user-select: none;
  touch-action: none;
  &:active {
    cursor: grabbing;
  }
`,E=t.css`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(30, 41, 59, 0.55);
  color: #e2e8f0;
  font-size: 0.72rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,D=s=>{var o,c,D;const{id:U,config:z,useMapWidgetIds:_}=s,O=t.React.useMemo(()=>{var e;return function(e){const t={baseUrl:a,inferredLayerName:""},n=(null!=e?e:"").trim();if(0===n.length)return t;try{const e=new URL(n),t=e.pathname.split("/").filter(Boolean);if(t.length>=4&&"geoserver"===t[0].toLowerCase()&&"ows"===t[t.length-1].toLowerCase()){const n=t[t.length-2];return e.search="",e.hash="",{baseUrl:`${e.origin}${e.pathname}`.replace(/\/$/,""),inferredLayerName:n.length>0?n:""}}return e.search="",e.hash="",{baseUrl:`${e.origin}${e.pathname}`.replace(/\/$/,""),inferredLayerName:""}}catch(e){return t}}(null!==(e=z.eumetsatWmsUrl)&&void 0!==e?e:a)},[z.eumetsatWmsUrl]),Y=function(e){const t=(null!=e?e:"").trim();if(0===t.length)return a;try{const e=new URL(t);return e.search="",e.hash="",`${e.origin}${e.pathname}`.replace(/\/$/,"")}catch(e){return a}}(O.baseUrl),F=(null!==(o=z.eumetsatLayerName)&&void 0!==o?o:"").trim()||O.inferredLayerName,W=null!==(c=z.radarOpacity)&&void 0!==c?c:.65,X=null!==(D=z.animationIntervalMs)&&void 0!==D?D:800,J=!1!==z.showRadarOnMap,[V,G]=t.React.useState(null),[B,H]=t.React.useState(!1),[q,Z]=t.React.useState(!1),[K,Q]=t.React.useState(null),[ee,te]=t.React.useState(null),[ne,re]=t.React.useState(60),[ie,ae]=t.React.useState(null),[se,oe]=t.React.useState(null),[le,ce]=t.React.useState(""),[ue,de]=t.React.useState(""),[pe,ge]=t.React.useState(null),[me,fe]=t.React.useState(null),[xe,he]=t.React.useState(0),[be,ve]=t.React.useState(!1),[we,ye]=t.React.useState(!1),[je,Se]=t.React.useState({x:0,y:0}),Me=t.React.useRef(null),Re=t.React.useRef(!1),Ce=t.React.useRef({pointerId:null,startX:0,startY:0,baseX:0,baseY:0}),Le=(null==_?void 0:_.length)>0,$e=`exb-weather-eumetsat-${U}`,Ie=t.React.useMemo(()=>null==pe||null==me?[]:function(e,t,n,r){const i=60*Math.max(1,n)*1e3;if(t<e)return[];const a=Math.ceil(e/i)*i,s=Math.floor(t/i)*i;if(s<a)return[];const o=[];for(let e=a;e<=s&&(o.push(e),!(o.length>=r));e+=i);return o}(pe,me,ne,96),[pe,me,ne]);t.React.useEffect(()=>{0!==Ie.length?he(e=>l(e,0,Ie.length-1)):he(0)},[Ie]);const Te=t.React.useCallback(e=>{if(!(null==e?void 0:e.map))return;const t=e.map.findLayerById($e);t&&e.map.remove(t),Me.current=null},[$e]);t.React.useEffect(()=>{let e=!1;return i(void 0,void 0,void 0,function*(){Z(!0),Q(null);try{const t=function(e){const t=new URL(e);return t.searchParams.set("service","WMS"),t.searchParams.set("version","1.3.0"),t.searchParams.set("request","GetCapabilities"),t.toString()}(Y),n=yield fetch(t,{mode:"cors",credentials:"omit",cache:"no-store"});if(!n.ok)throw new Error(`WMS capabilities ${n.status}`);const r=function(e){var t,n,r,i;const a=(new DOMParser).parseFromString(e,"text/xml"),s=Array.from(a.getElementsByTagName("Layer")),o=[];for(const e of s){const a=d(e,"Name")[0];if(!(null==a?void 0:a.textContent))continue;const s=d(e,"Title")[0],l=d(e,"Dimension"),c=d(e,"Extent"),p=null!==(t=l.find(e=>{var t;return"time"===(null!==(t=e.getAttribute("name"))&&void 0!==t?t:"").toLowerCase()}))&&void 0!==t?t:c.find(e=>{var t;return"time"===(null!==(t=e.getAttribute("name"))&&void 0!==t?t:"").toLowerCase()});o.push({name:a.textContent.trim(),title:null!==(r=null===(n=null==s?void 0:s.textContent)||void 0===n?void 0:n.trim())&&void 0!==r?r:a.textContent.trim(),time:u(null!==(i=null==p?void 0:p.textContent)&&void 0!==i?i:"")})}return o}(yield n.text()),i=function(e,t){var n;if(0===e.length)return null;const r=t.trim().toLowerCase();if(r.length>0){const t=e.find(e=>e.name.toLowerCase()===r);if(t)return t}const i=e.filter(e=>null!=e.time);return i.find(e=>{const t=`${e.name} ${e.title}`.toLowerCase();return t.includes("precip")||t.includes("rain")})||(null!==(n=i[0])&&void 0!==n?n:e[0])}(r,F);if(!i||!i.time)throw new Error("No se encontr\xf3 capa temporal de precipitaci\xf3n en WMS.");if(e)return;te(i),re(60),ae(i.time.startMs),oe(i.time.endMs);const a=p(i.time.startMs),s=p(i.time.endMs);ce(a),de(s),ge(i.time.startMs),fe(i.time.endMs)}catch(t){if(!e){const e=Date.now(),n=e-864e5,r=F.trim()||"msg_fes:h60b";te({name:r,title:r,time:null}),re(60),ae(n),oe(e),ce(p(n)),de(p(e)),ge(n),fe(e),Q(`GetCapabilities no disponible; usando fallback de capa ${r}. Detalle: ${t instanceof Error?t.message:String(t)}`)}}finally{e||Z(!1)}}),()=>{e=!0}},[Y,F]);const ke=t.React.useCallback(()=>i(void 0,void 0,void 0,function*(){if(!(null==V?void 0:V.view)||!(null==ee?void 0:ee.name))return null;const e=V.view;if(!J)return Te(e),null;let t=Me.current;if(!t){const[r]=yield(0,n.loadArcGISJSAPIModules)(["esri/layers/WMSLayer"]);Te(e),t=new r({id:$e,url:Y,sublayers:[{name:ee.name}],opacity:W,title:`EUMETSAT ${ee.name}`,copyright:"EUMETSAT"}),yield t.load(),e.map.add(t),e.map.reorder(t,e.map.layers.length-1),Me.current=t}return t.opacity=W,t}),[V,ee,J,Te,$e,Y,W]),Ne=t.React.useCallback(e=>i(void 0,void 0,void 0,function*(){if(null==V?void 0:V.view)try{const t=yield V.view.whenLayerView(e);if(!(null==t?void 0:t.updating))return;yield new Promise(e=>{const n=window.setTimeout(()=>{e()},8e3),r=()=>{if(!t.updating)return window.clearTimeout(n),void e();window.requestAnimationFrame(r)};r()})}catch(e){}}),[V]),Pe=t.React.useCallback(e=>i(void 0,void 0,void 0,function*(){var t;if(!J||!(null==V?void 0:V.view))return;if(Re.current)return;Re.current=!0;const n=yield ke();if(n)try{n.customLayerParameters=Object.assign(Object.assign({},null!==(t=n.customLayerParameters)&&void 0!==t?t:{}),{time:g(e)}),n.refresh(),yield Ne(n)}finally{Re.current=!1}else Re.current=!1}),[J,V,ke,Ne]);t.React.useEffect(()=>{(null==V?void 0:V.view)&&B&&J&&0!==Ie.length&&Pe(Ie[xe]).catch(e=>{Q(e instanceof Error?e.message:String(e))})},[V,B,J,Ie,xe,Pe]),t.React.useEffect(()=>{(null==V?void 0:V.view)&&!J&&Te(V.view)},[V,J,Te]),t.React.useEffect(()=>{if(!be||Ie.length<2)return;const e=window.setInterval(()=>{Re.current||he(e=>(e+1)%Ie.length)},X);return()=>{window.clearInterval(e)}},[be,Ie.length,X]),t.React.useEffect(()=>()=>{(null==V?void 0:V.view)&&Te(V.view)},[V,Te]);const Ae=t.React.useCallback(e=>{H(!1),G(null),e&&e.whenJimuMapViewLoaded().then(()=>{G(e),H(!0)}).catch(()=>{H(!1)})},[]),Ee=Ie[xe],De=Ee?(xe+1)/Math.max(1,Ie.length)*100:0,Ue=Ee?new Date(Ee).toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"\u2014",ze=Ee?new Date(Ee).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"\u2014:\u2014",_e=null!=pe&&null!=me?`${new Date(pe).toLocaleString("es-ES")} \u2192 ${new Date(me).toLocaleString("es-ES")}`:"Rango: sin datos",Oe=Ie.length>0,Ye=Ie.length>=2,Fe=null!=ie?p(ie):void 0,We=null!=se?p(se):void 0,Xe=e=>{Ce.current.pointerId===e.pointerId&&(Ce.current.pointerId=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))};return(0,e.jsxs)("div",{className:"widget-weather-radar jimu-widget m-1",css:f,children:[(0,e.jsx)(n.JimuMapViewComponent,{useMapWidgetId:null==_?void 0:_[0],onActiveViewChange:Ae}),!Le&&(0,e.jsx)(r.Alert,{type:"warning",text:"Selecciona un widget Mapa en la configuraci\xf3n del widget.",withIcon:!0}),Le&&(0,e.jsxs)("div",{css:[x,we?h:null],style:{transform:`translate(${je.x}px, ${je.y}px)`},children:[(0,e.jsxs)("div",{css:N,children:[(0,e.jsxs)("span",{css:A,onPointerDown:e=>{Ce.current={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,baseX:je.x,baseY:je.y},e.currentTarget.setPointerCapture(e.pointerId)},onPointerMove:e=>{if(Ce.current.pointerId!==e.pointerId)return;const t=e.clientX-Ce.current.startX,n=e.clientY-Ce.current.startY;Se({x:Ce.current.baseX+t,y:Ce.current.baseY+n})},onPointerUp:Xe,onPointerCancel:Xe,children:[(0,e.jsx)("span",{children:"\u22ee\u22ee"}),(0,e.jsx)("span",{children:"Radar timeline"})]}),(0,e.jsxs)("div",{className:"d-flex align-items-center",style:{gap:"6px"},children:[(0,e.jsxs)("span",{css:P,children:[ne,"m"]}),(0,e.jsx)("button",{type:"button",css:E,"aria-label":we?"Restaurar panel":"Minimizar panel",onClick:e=>{e.stopPropagation(),ye(e=>!e)},children:we?"\u25a2":"\u2014"})]})]}),we&&(0,e.jsxs)("div",{css:T,children:[(0,e.jsx)("span",{children:ze}),(0,e.jsxs)("span",{children:[xe+1," / ",Ie.length||0]})]}),!we&&(0,e.jsxs)(e.Fragment,{children:[null!==K&&(0,e.jsx)(r.Alert,{type:"error",text:K,withIcon:!0}),!q&&null!=ie&&null!=se&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{css:b,children:[(0,e.jsx)("input",{css:v,type:"datetime-local",min:Fe,max:We,value:le,onChange:e=>{ce(e.target.value)}}),(0,e.jsx)("input",{css:v,type:"datetime-local",min:Fe,max:We,value:ue,onChange:e=>{de(e.target.value)}}),(0,e.jsx)("button",{type:"button",css:w,onClick:()=>{ve(!1),he(0);const e=m(le),t=m(ue);if(null==e||null==t||null==ie||null==se)return;const n=Math.min(e,t),r=Math.max(e,t);ge(l(n,ie,se)),fe(l(r,ie,se))},children:"Aplicar rango"})]}),(0,e.jsx)("div",{css:T,children:(0,e.jsxs)("span",{children:["Disponible: ",Fe," \u2192 ",We]})})]}),q&&(0,e.jsx)("div",{className:"d-flex align-items-center py-2 justify-content-center",children:(0,e.jsx)(r.Loading,{type:r.LoadingType.Secondary})}),!q&&Ie.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{css:y,children:[(0,e.jsx)("div",{css:j,children:Ue}),(0,e.jsx)("div",{css:S,children:ze})]}),(0,e.jsx)("div",{css:T,children:(0,e.jsx)("span",{children:_e})}),(0,e.jsx)("div",{css:M,children:(0,e.jsx)("div",{css:R,style:{width:`${De}%`}})}),(0,e.jsx)("input",{css:C,type:"range",min:0,max:Math.max(0,Ie.length-1),step:1,value:xe,disabled:!Oe,"aria-label":"Instante en el tiempo",onChange:e=>{const t=parseInt(e.target.value,10);Number.isNaN(t)||(he(t),ve(!1))}}),(0,e.jsxs)("div",{css:L,children:[(0,e.jsx)("button",{type:"button",css:$,"aria-label":"Anterior",disabled:!Oe||xe<=0,onClick:()=>{he(e=>Math.max(0,e-1)),ve(!1)},children:"\u23ee"}),(0,e.jsx)("button",{type:"button",css:I,"aria-label":be?"Pausa":"Reproducir",disabled:!Ye,onClick:()=>{ve(e=>!e)},children:be?"\u275a\u275a":"\u25b6"}),(0,e.jsx)("button",{type:"button",css:$,"aria-label":"Siguiente",disabled:!Oe||xe>=Ie.length-1,onClick:()=>{he(e=>Math.min(Ie.length-1,e+1)),ve(!1)},children:"\u23ed"})]}),(0,e.jsxs)("div",{css:T,children:[(0,e.jsxs)("span",{children:[xe+1," / ",Ie.length]}),(0,e.jsx)("span",{children:ee?`Capa: ${ee.name}`:"\u2014"})]})]}),!q&&null!=ie&&null!=se&&0===Ie.length&&!K&&(0,e.jsx)(r.Alert,{type:"warning",text:"Ning\xfan instante cae en el rango seleccionado.",withIcon:!0}),(0,e.jsxs)("div",{css:k,children:["Datos: ",(0,e.jsx)("a",{href:"https://view.eumetsat.int/geoserver/web/",target:"_blank",rel:"noreferrer",children:"EUMETSAT WMS"})]})]})]})]})};function U(e){s.p=e}})(),o})())}}});