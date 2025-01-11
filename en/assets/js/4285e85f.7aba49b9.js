"use strict";(self.webpackChunkshop_document=self.webpackChunkshop_document||[]).push([[386],{1110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"HeartBeat/install","title":"Installation Guide","description":"Requirements","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/HeartBeat/install.md","sourceDirName":"HeartBeat","slug":"/HeartBeat/install","permalink":"/ShopDoc/en/HeartBeat/install","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"MainSidebar","previous":{"title":"\u306a\u3081\u3089\u304b\u5fc3\u97f3\u30ae\u30df\u30c3\u30af","permalink":"/ShopDoc/en/category/\u306a\u3081\u3089\u304b\u5fc3\u97f3\u30ae\u30df\u30c3\u30af"},"next":{"title":"About OSC Functionality","permalink":"/ShopDoc/en/HeartBeat/osc"}}');var r=n(4848),s=n(8453);const o={sidebar_position:1},i="Installation Guide",l={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"How to Change the Heartbeat Sound",id:"how-to-change-the-heartbeat-sound",level:3},{value:"How to Change the Appearance of the Heart Rate Counter",id:"how-to-change-the-appearance-of-the-heart-rate-counter",level:3}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"installation-guide",children:"Installation Guide"})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Unity 2022.3.22f1"}),"\n",(0,r.jsx)(t.li,{children:"VRCSDK Latest version"}),"\n",(0,r.jsx)(t.li,{children:"Modular Avatar Latest version"}),"\n"]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"What is the Modular Avatar?"}),(0,r.jsxs)(t.p,{children:["Modular Avatar, MA for short, is a system that allows you to easily add and remove assets to your avatar.",(0,r.jsx)(t.br,{}),"\n","This tool automates the animator's merging process and other tasks.",(0,r.jsx)(t.br,{}),"\n","Just put it in and you're good to go!"]}),(0,r.jsxs)(t.p,{children:["You can install it in VCC at the following link.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"https://modular-avatar.nadena.dev/",children:"https://modular-avatar.nadena.dev/"})]})]}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Drag and drop the prefab located in ",(0,r.jsx)(t.em,{children:"BekoShop/HeartBeat_Gimmick/Prefabs"})," directly under your avatar. If you want to use OSC functionality, select the HeartBeat_OSC prefab. Otherwise, choose the HeartBeat_Manual prefab."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Place the ",(0,r.jsx)(t.strong,{children:"AudioSources (not the prefab itself)"})," within the prefab around the chest area of your avatar.\r\nIt's recommended to place them tentatively and adjust the range within VRChat later.\r\n",(0,r.jsx)(t.img,{alt:"Audio Source Placement",src:n(6245).A+"",width:"1076",height:"731"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"The range cannot be adjusted on Unity because it will be overwritten by the animation. Please adjust it using the Pie Menu in VRChat."})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Place the HR_Counter where you want to display the heart rate, such as on the cheek or above the head. By default, it is set to follow the Head bone.\r\nIt will remain visible by default, but will automatically be hidden when the heart rate is 0.\r\n",(0,r.jsx)(t.img,{alt:"Heart Rate Counter Placement",src:n(1379).A+"",width:"512",height:"310"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Installation Complete!"})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"What if I want to add more heart rate counters?"}),(0,r.jsx)(t.p,{children:"Simply duplicating the HR_Counter object will not work. Please use the CounterOnly prefab instead.\r\nThe CounterOnly prefab does not produce a heartbeat sound and only displays the heart rate."}),(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"You can place as many CounterOnly prefabs as you like, anywhere you like, but be sure to install it alongside the main prefab.\r\nIt will not work on its own."})})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"About the Optional Prefabs"}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"The optional prefabs have reduced parameter usage by removing some features.\r\nIf you are unsure, please use the regular prefab."})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["_NS (No Scaling)\r\nThis version eliminates the in-VRChat sound range setting. Instead, you need to configure it in Unity.\r\nSet the Max Distance of the ",(0,r.jsx)(t.code,{children:"Audio Source"})," component, and then set the initial value of ",(0,r.jsx)(t.code,{children:"HBG/SoundRadius_Float"})," to ",(0,r.jsx)(t.strong,{children:"twice"})," that number.\r\n",(0,r.jsx)(t.img,{alt:"Audio Source Setting",src:n(3980).A+"",width:"1083",height:"839"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"_NM (No Manual)\r\nThis version removes the manual adjustment feature.\r\nRecommended for those who only use the OSC function and do not use the manual adjustment function at all."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"_NS_MS\r\nThis version has the above two features removed.\r\nFor advanced users."}),"\n"]}),"\n"]}),(0,r.jsx)(t.p,{children:"The parameter usage for each is as follows:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Manual_NS: 11bit"}),"\n",(0,r.jsx)(t.li,{children:"OSC_NM: 19bit"}),"\n",(0,r.jsx)(t.li,{children:"OSC_NS: 20bit"}),"\n",(0,r.jsx)(t.li,{children:"OSC_NS_MS: 11bit"}),"\n"]})]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-change-the-heartbeat-sound",children:"How to Change the Heartbeat Sound"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"How to Change Heartbeat Sound",src:n(5818).A+"",width:"512",height:"456"}),(0,r.jsx)(t.br,{}),"\n","In ",(0,r.jsx)(t.em,{children:"Assets/BekoShop/HeartBeat_Gimmick/Resources/Sounds"}),", you will find four types of heartbeat sounds (A, B, C, D) split into two parts each. Apply the sounds corresponding to 0 and 1 to the Audio Sources in the prefab. It is designed to play repeatedly in the order of 0 \u2192 1, but you can apply different types or orders of heartbeat sounds as you like.\r\nPlease refer to the video for how they sound."]}),"\n",(0,r.jsx)("iframe",{src:"https://www.youtube.com/embed/C5gtQQ9TYmc",title:"Heartbeat Sound Samples",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope;web-share",referrerpolicy:"strict-origin-when-cross-origin"}),"\n",(0,r.jsx)(t.h3,{id:"how-to-change-the-appearance-of-the-heart-rate-counter",children:"How to Change the Appearance of the Heart Rate Counter"}),"\n",(0,r.jsx)(t.p,{children:"You can change the appearance by replacing the materials in BekoShop/HeartBeat_Gimmick/RED_SIM_modd/Materials."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1379:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/HBSetting_b-49e2ea0b90e8e5ddfdbfe0418671772a.png"},5818:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/HBSetting_c-33edae778b0a61d2b53731628f1a9868.png"},6245:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/HBSetting_d-c1f9af58f73fbef9a810dd11961f3392.png"},3980:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/HBSetting_e-5867e5bf6c4e44f3d068f03c55597cb3.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);