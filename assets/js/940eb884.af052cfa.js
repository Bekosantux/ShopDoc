"use strict";(self.webpackChunkshop_document=self.webpackChunkshop_document||[]).push([[435],{6471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"HeartBeat/advice","title":"\u6ce8\u610f\u4e8b\u9805","description":"- \u30aa\u30d7\u30b7\u30e7\u30f3\u30d7\u30ec\u30cf\u30d6\u3092\u9664\u304d\u3001Unity\u4e0a\u3067\u97f3\u6e90\u306e\u7bc4\u56f2\u8a2d\u5b9a\u3092\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u4e0a\u66f8\u304d\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002VRChat\u5185\u3067\u30d1\u30a4\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u64cd\u4f5c\u3057\u3066\u304f\u3060\u3055\u3044\u3002","source":"@site/docs/HeartBeat/advice.md","sourceDirName":"HeartBeat","slug":"/HeartBeat/advice","permalink":"/ShopDoc/HeartBeat/advice","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"MainSidebar","previous":{"title":"OSC\u6a5f\u80fd\u306b\u3064\u3044\u3066","permalink":"/ShopDoc/HeartBeat/osc"},"next":{"title":"\u30d1\u30a4\u30e1\u30cb\u30e5\u30fc","permalink":"/ShopDoc/HeartBeat/menu"}}');var r=t(4848),s=t(8453);const c={sidebar_position:3},o="\u6ce8\u610f\u4e8b\u9805",a={},l=[];function d(e){const n={h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6ce8\u610f\u4e8b\u9805",children:"\u6ce8\u610f\u4e8b\u9805"})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u30d7\u30ec\u30cf\u30d6\u3092\u9664\u304d\u3001Unity\u4e0a\u3067\u97f3\u6e90\u306e\u7bc4\u56f2\u8a2d\u5b9a\u3092\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u4e0a\u66f8\u304d\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002VRChat\u5185\u3067\u30d1\u30a4\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u64cd\u4f5c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30a2\u30d0\u30bf\u30fc\u306e\u8033(Audio Listener)\u306f\u30d3\u30e5\u30fc\u30dd\u30a4\u30f3\u30c8\u306b\u3042\u308a\u307e\u3059\u3002\u982d\u306e\u534a\u5f84\u5206\u3060\u3051\u5185\u5074\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u3068\u3044\u3046\u3053\u3068\u306a\u306e\u3067\u3001\u3081\u308a\u8fbc\u307f\u3082\u8003\u616e\u3057\u3066\u97f3\u6e90\u306f\u5927\u304d\u3081\u306b\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"OSC\u5229\u7528\u30d7\u30ec\u30cf\u30d6\u306728bit\u3001\u30de\u30cb\u30e5\u30a2\u30eb\u30d7\u30ec\u30cf\u30d6\u306719bit\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30e1\u30e2\u30ea\u3092\u6d88\u8cbb\u3057\u307e\u3059\u3002\u30a2\u30d0\u30bf\u30fc\u5185\u3067\u5408\u8a08256bit\u3092\u8d85\u3048\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7279\u6b8a\u306a\u69cb\u9020\u306e\u305f\u3081\u3001\u5fc3\u97f3\u3092\u4ed6\u306e\u597d\u304d\u306a\u97f3\u6e90\uff08\u97f3\u697d\u3084SE\u306a\u3069\uff09\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093\u3002\u4ed6\u306e\u5fc3\u97f3\u7d20\u6750\u306b\u5dee\u3057\u66ff\u3048\u305f\u3044\u5834\u5408\u3082Audacity\u306a\u3069\u3067\u306e\u7de8\u96c6\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30a2\u30cb\u30e1\u30fc\u30bf\u30fc\u5185\u306e\u5168\u3066\u306e\u30b9\u30c6\u30fc\u30c8\u306fWriteDefault OFF\uff08DBT\u3092\u9664\u304f\uff09\u3067\u7d71\u4e00\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30a2\u30d0\u30bf\u30fc\u5074\u3067WD\u304c\u6b63\u3057\u304f\u7d71\u4e00\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u304c\u3001WD\u304c\u6df7\u5728\u3057\u3066\u3044\u308b\u3068\u4e0d\u5177\u5408\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ed5\u69d8\u4e0a\u3001\u5fc3\u62cd\u6570\u3092\u624b\u52d5\u8abf\u6574\u3059\u308b\u5834\u5408\u306f\u81ea\u5206\u3068\u76f8\u624b\u3067\u5fc3\u62cd\u6570\u306e\u8aa4\u5dee\u304c\xb1\uff11\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);