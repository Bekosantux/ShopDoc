"use strict";(self.webpackChunkshop_document=self.webpackChunkshop_document||[]).push([[643],{4545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>_,default:()=>R,frontMatter:()=>B,metadata:()=>r,toc:()=>E});const r=JSON.parse('{"id":"HeartBeat/osc","title":"OSC\u6a5f\u80fd\u306b\u3064\u3044\u3066","description":"\u5fc3\u97f3\u30ae\u30df\u30c3\u30af\u306e\u4f7f\u7528\u306b\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002","source":"@site/docs/HeartBeat/osc.md","sourceDirName":"HeartBeat","slug":"/HeartBeat/osc","permalink":"/ShopDoc/HeartBeat/osc","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"MainSidebar","previous":{"title":"\u5c0e\u5165\u65b9\u6cd5","permalink":"/ShopDoc/HeartBeat/install"},"next":{"title":"\u6ce8\u610f\u4e8b\u9805","permalink":"/ShopDoc/HeartBeat/advice"}}');var s=n(4848),a=n(8453),o=n(6540),l=n(4164),i=n(5627),u=n(6347),c=n(372),d=n(604),h=n(1861),p=n(8749);function f(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return f(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,h.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=b(e),[a,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,u]=m({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,p.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=i??d;return x({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var g=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),s=o[n].value;s!==r&&(c(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...a,className:(0,l.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=j(e);return(0,s.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,s.jsx)(w,{...t,...e}),(0,s.jsx)(y,{...t,...e})]})}function V(e){const t=(0,g.A)();return(0,s.jsx)(k,{...e,children:f(e.children)},String(t))}const C={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(C.tabItem,r),hidden:n,children:t})}const B={sidebar_position:2},_="OSC\u6a5f\u80fd\u306b\u3064\u3044\u3066",A={},E=[];function I(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"osc\u6a5f\u80fd\u306b\u3064\u3044\u3066",children:"OSC\u6a5f\u80fd\u306b\u3064\u3044\u3066"})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsxs)(V,{children:[(0,s.jsxs)(S,{value:"def",label:"\u6982\u8981",default:!0,children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"\u5fc3\u97f3\u30ae\u30df\u30c3\u30af\u306e\u4f7f\u7528\u306b\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})}),(0,s.jsxs)(t.p,{children:["\u5fc3\u62cd\u6570\u3092VRChat\u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u3067\u3001\u5fc3\u62cd\u6570\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30a2\u30d0\u30bf\u30fc\u3068\u540c\u671f\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,s.jsx)(t.br,{}),"\n","Pulsoid\u3068HRtoVRChat\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u65b9\u6cd5\u3068\u3001\u305d\u308c\u3092\u4ecb\u3055\u305a\u76f4\u63a5\u9001\u4fe1\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\uff08\u305d\u308c\u4ee5\u5916\u306b\u3082\u3042\u308a\u307e\u3059\u304c\u3053\u3053\u3067\u306f\u7701\u7565\u3057\u307e\u3059\uff09",(0,s.jsx)(t.br,{}),"\n","\u3088\u308d\u3057\u3051\u308c\u3070\u3053\u3061\u3089\u3082\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://note.com/bekosan/n/nf6a976867771",children:"VRChat\u306b\u5fc3\u62cd\u6570\u3092\u9001\u308b\u6642\u306e\u74b0\u5883\u30e1\u30e2"})]})]}),(0,s.jsxs)(S,{value:"pulsoid",label:"Pulsoid",children:[(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["\uff01\u5fc5\u305a\u7aef\u672b\u304cPulsoid\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\uff01",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://www.blog.pulsoid.net/monitors",children:"https://www.blog.pulsoid.net/monitors"})]})}),(0,s.jsx)("hr",{}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Pulsoid\u306e\u8a2d\u5b9a","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://note.com/kendesu/n/n81275f17986a",children:"https://note.com/kendesu/n/n81275f17986a"})," \u306e 3.2 \u307e\u3067\u3092\u771f\u4f3c\u3059\u308b"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["PulsoidKey(access_token)\u306e\u53d6\u5f97",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://pulsoid.net/oauth2/authorize?response_type=token&client_id=8c48435f-a0c6-4512-9bf7-6768678b625c&redirect_uri=&scope=data:heart_rate:read&state=&response_mode=web_page",children:"\u30b3\u30b3"}),"\u306b\u79fb\u52d5\u3057\u3066\u3001\u5148\u7a0b\u4f5c\u3063\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3002",(0,s.jsx)(t.br,{}),"\n","\u53f3\u4e0b\u306e Authorize App \u3092\u62bc\u3059\u3068\u30c8\u30fc\u30af\u30f3\u304c\u4f0f\u305b\u5b57\u3067\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001Copy to clipboard \u3067\u30b3\u30d4\u30fc\u3057\u3066\u304a\u304d\u307e\u3059\u3002",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"\u30c8\u30fc\u30af\u30f3\u304c\u6f0f\u308c\u308b\u3068\u4ed6\u4eba\u304b\u3089\u5fc3\u62cd\u6570\u304c\u53d6\u5f97\u51fa\u6765\u3066\u3057\u307e\u3046\u306e\u3067\u53d6\u308a\u6271\u3044\u306b\u306f\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["HRToVRChat\u306e\u8a2d\u5b9a","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://hrtovrchat.fortnite.lol/download#h.ha8hgsfz56g2",children:"https://hrtovrchat.fortnite.lol/download#h.ha8hgsfz56g2"}),(0,s.jsx)(t.br,{}),"\n","\u304b\u3089\u4e00\u756a\u4e0a\u306eWindows\u306eLauncher\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Launcher\u3092\u8d77\u52d5\u3057\u305f\u3089Config\u30bf\u30d6\u3092\u958b\u304d\u3001hrType\u3092 pulsoidsocket \u306b\u5909\u66f4\u3057\u3066\u3001SAVE\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3002\r\n",(0,s.jsx)(t.img,{src:n(8223).A+"",width:"512",height:"452"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u52a0\u3048\u3066pulsoidkey\u3092\u9078\u3073\u3001\u3055\u3063\u304d\u30b3\u30d4\u30fc\u3057\u305f\u30c8\u30fc\u30af\u30f3\u3092\u8cbc\u308a\u4ed8\u3051\u3001SAVE\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\uff01Pulsoid\u3092\u8d77\u52d5\u3057\u305f\u72b6\u614b\u3067Program\u30bf\u30d6\u304b\u3089START\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068OSC\u4fe1\u53f7\u304cVRChat\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),(0,s.jsxs)(S,{value:"ble",label:"Bluetooth LE",children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Bluetooth Low Energy\uff08BLE\uff09\u306b\u5bfe\u5fdc\u3057\u305f\u5fc3\u62cd\u8a08\u304c\u5fc5\u8981\u3067\u3059\u3002"})}),(0,s.jsxs)(t.p,{children:["\u5c02\u7528\u306e\u5fc3\u62cd\u8a08\u3067\u3042\u308c\u3070\u30b9\u30de\u30fc\u30c8\u30a6\u30a9\u30c3\u30c1\u3088\u308a\u3082\u7cbe\u5ea6\u304c\u9ad8\u304f\u96fb\u6c60\u306e\u6301\u3061\u3082\u826f\u3044\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002",(0,s.jsx)(t.br,{}),"\n","\u5c0e\u5165\u3084\u8d77\u52d5\u3082Pulsoid\u306b\u6bd4\u3079\u3066\u304b\u306a\u308a\u30b7\u30f3\u30d7\u30eb\u3067\u975e\u5e38\u306b\u697d\u3067\u3059\u3002",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://www.amazon.co.jp/dp/B08882MGXD",children:"\u30aa\u30b9\u30b9\u30e1\u306e\u5fc3\u62cd\u8a08"})," \u3067\u3059\u3002\u5b89\u3044\u30bf\u30a4\u30df\u30f3\u30b0\u306a\u30894000\u5186\u4ee5\u4e0b\u3067\u8cb7\u3048\u307e\u3059\u3002"]}),(0,s.jsx)("hr",{}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/Bekosantux/Beko.BluetoothHeartRateOSC",children:"https://github.com/Bekosantux/Beko.BluetoothHeartRateOSC"})}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Windows\u306bBLE\u5fc3\u62cd\u8a08\u3092\u30da\u30a2\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"}),"\n"]}),(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"Windows11\u306e\u5834\u5408\u3001\u300cBluetooth\u30c7\u30d0\u30a4\u30b9\u306e\u691c\u51fa\u300d\u8a2d\u5b9a\u3092\u300c\u8a73\u7d30\u300d\u306b\u5909\u66f4\u3057\u306a\u3044\u3068\u4e00\u89a7\u306b\u8868\u793a\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"})}),(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"\u753b\u9762\u53f3\u306eRelease\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305fzip\u3092\u5c55\u958b\u3057\u3066\u3001exe\u30d5\u30a1\u30a4\u30eb\u3092\u5b9f\u884c\u3059\u308b\u3060\u3051\u3067\u4f7f\u3048\u307e\u3059\u3002\uff08\u6570\u5b57\u304c\u51fa\u3066\u304d\u305f\u3089\u6210\u529f\u3002\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u9589\u3058\u3066\u3082\u88cf\u3067\u52d5\u304d\u307e\u3059\u3002\uff09"}),"\n"]})]})]})]})}function R(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(I,{...e})}):I(e)}},8223:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/HRtoVRChat_a-5e9dac7f74a8d81dff37a87fcd09c728.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);