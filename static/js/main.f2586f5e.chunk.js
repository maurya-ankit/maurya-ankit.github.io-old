(this["webpackJsonpmaurya-ankit.github.io"]=this["webpackJsonpmaurya-ankit.github.io"]||[]).push([[3],{82:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n.n(r),c=(n(82),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(t,e)}))}}function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(127),f=n(128),h=n(133),b=n(69),g={alternate:{main:"rgb(247, 249, 250)",primary:"#e3f2fd",dark:"#e8eaf6"},cardShadow:"rgba(23, 70, 161, .11)",common:{black:"#000",white:"#fff"},type:"light",primary:{main:"#1976d2",light:"rgb(71, 145, 219)",dark:"rgb(17, 82, 147)",contrastText:"#fff"},secondary:{light:"#ffb74d",main:"#f9b934",dark:"#f57c00",contrastText:"rgba(0, 0, 0, 0.87)"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},warning:{light:"#ffb74d",main:"#ff9800",dark:"#f57c00",contrastText:"rgba(0, 0, 0, 0.87)"},info:{light:"#64b5f6",main:"#2196f3",dark:"#1976d2",contrastText:"#fff"},success:{light:"#81c784",main:"#4caf50",dark:"#388e3c",contrastText:"rgba(0, 0, 0, 0.87)"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},contrastThreshold:3,tonalOffset:.2,text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:"#fff",default:"#fff",level2:"#f5f5f5",level1:"#fff",footer:"#1b1642"},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},u={fontFamily:"Nunito",h1:{color:g.text.primary,fontWeight:900,fontSize:"40px",lineHeight:1.1},h2:{color:g.text.primary,fontWeight:900,fontSize:"38px",lineHeight:1.5},h3:{color:g.text.primary,fontWeight:900,fontSize:"32px",lineHeight:1.25},h4:{color:g.text.primary,fontWeight:900,fontSize:"24px",lineHeight:1.35},h5:{color:g.text.primary,fontWeight:900,fontSize:"20px",lineHeight:1.4},h6:{color:g.text.primary,fontWeight:900,fontSize:"18px",lineHeight:1.45},subtitle1:{color:g.text.primary,fontSize:"16px",lineHeight:1.4},subtitle2:{color:g.text.secondary,fontWeight:400,fontSize:"16px",lineHeight:1.4},body1:{color:g.text.primary,fontSize:"14px",lineHeight:1.3},body2:{color:g.text.secondary,fontSize:"14px",lineHeight:1.3},button:{color:g.text.primary,fontSize:"14px",fontWeight:900,lineHeight:1.3},caption:{color:g.text.secondary,fontSize:"12px",lineHeight:1.35},overline:{fontSize:"13px",textTransform:"uppercase",fontWeight:"bold"}},j=Object(h.a)(Object(b.a)({palette:g,layout:{contentWidth:1140},typography:u,zIndex:{appBar:1200,drawer:1100},overrides:{MuiButton:{containedSecondary:{color:"white"}}}})),p=n(28),m=n(119),x=n(121),O=n(123),y=n(118),w=n(120),v=n(122),k=n(29),S=n(3),W=Object(y.a)((function(e){var t;return{root:{padding:0,marginBottom:e.spacing(2)},title:{textDecoration:"none",fontWeight:"bold"},navbtn:(t={marginInline:20,textDecoration:"none",backgroundColor:e.palette.primary.main,padding:10,borderRadius:20,color:"#fff"},Object(p.a)(t,e.breakpoints.down("md"),{marginInline:4}),Object(p.a)(t,"&:hover",{backgroundColor:e.palette.primary.light}),t)}})),z=function(){var e=W();return Object(S.jsx)(m.a,{position:"sticky",color:"transparent",elevation:0,className:e.root,children:Object(S.jsx)(w.a,{maxWidth:"lg",children:Object(S.jsx)(x.a,{children:Object(S.jsxs)(v.a,{container:!0,spacing:1,alignItems:"center",alignContent:"center",justify:"space-between",children:[Object(S.jsx)(v.a,{item:!0,children:Object(S.jsx)(O.a,{variant:"h6",component:k.b,to:"/",className:e.title,children:"Ankit Maurya"})}),Object(S.jsxs)(v.a,{item:!0,children:[Object(S.jsx)(k.b,{to:"/",className:e.navbtn,children:"Home"}),Object(S.jsx)("a",{href:"/resume.pdf",className:e.navbtn,children:"Resume"})]})]})})})})},T=n(130),H=n(124),C=n(67),I=n.n(C),A=n(68),N=n.n(A),B=n(66),P=n.n(B),_=[{icon:Object(S.jsx)(P.a,{color:"secondary"}),url:"https://www.linkedin.com/in/maurya-ankit"},{icon:Object(S.jsx)(I.a,{color:"secondary"}),url:"https://www.facebook.com/me.vector.ankitmaurya/"},{icon:Object(S.jsx)(N.a,{color:"secondary"}),url:"https://www.instagram.com/__maurya___/"}],R=Object(y.a)((function(e){return{footer:{marginTop:20,marginBottom:20,backgroundColor:e.palette.primary.main,borderRadius:e.spacing(2)},contact:{borderRadius:e.spacing(2),padding:e.spacing(1)}}})),E=function(){var e=R();return Object(S.jsx)(T.a,{children:Object(S.jsx)(v.a,{container:!0,spacing:3,direction:"row",justify:"center",alignItems:"flex-start",alignContent:"center",className:e.footer,children:Object(S.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(S.jsxs)(v.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",alignContent:"center",className:e.contact,children:[Object(S.jsxs)(v.a,{item:!0,children:[Object(S.jsx)(O.a,{variant:"h5",color:"primary",align:"center",children:"Stay Tuned"}),Object(S.jsx)(O.a,{variant:"subtitle1",color:"initial",align:"center",children:"Connect with me here \ud83d\udc47"})]}),Object(S.jsx)(v.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",alignContent:"center",wrap:"nowrap",children:_.map((function(e,t){return Object(S.jsx)(v.a,{item:!0,children:Object(S.jsx)(H.a,{"aria-label":"fb",component:"a",href:e.url,target:"_blank",children:e.icon})},t)}))})]})})})})},U=n(132),M=n(9),D=n(129),J=n(53),L=n(45),F=n(131),G=n(126),K=n(125),$=function(){var e=i.a.useState(!1),t=Object(L.a)(e,2),n=t[0],r=t[1],o=i.a.useState(null),c=Object(L.a)(o,2),s=c[0],d=c[1],f=function(e){r(!0),d(e.waiting)};Object(a.useEffect)((function(){l({onUpdate:f})}),[]);var h=function(){null===s||void 0===s||s.postMessage({type:"SKIP_WAITING"}),r(!1),window.location.reload()};return Object(S.jsx)(F.a,{open:n,message:"A new version is available!",onClick:h,TransitionComponent:function(e){return Object(S.jsx)(K.a,Object(J.a)(Object(J.a)({},e),{},{direction:"down"}))},anchorOrigin:{vertical:"top",horizontal:"center"},action:Object(S.jsx)(G.a,{color:"inherit",size:"small",onClick:h,children:"Reload"})})},q=i.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(7)]).then(n.bind(null,321))})),Q=i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,318))})),V=i.a.lazy((function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,322))})),X=i.a.lazy((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,319))}));o.a.render(Object(S.jsxs)(d.a,{theme:j,children:[Object(S.jsx)(f.a,{}),Object(S.jsxs)(k.a,{children:[Object(S.jsx)(z,{}),Object(S.jsx)($,{}),Object(S.jsxs)(w.a,{maxWidth:"lg",children:[Object(S.jsx)(U.a,{children:Object(S.jsx)(M.c,{children:Object(S.jsxs)(a.Suspense,{fallback:Object(S.jsx)(D.a,{}),children:[Object(S.jsx)(M.a,{path:"/",exact:!0,children:Object(S.jsx)(q,{})}),Object(S.jsx)(M.a,{path:"/detail/:id",exact:!0,children:Object(S.jsx)(Q,{})}),Object(S.jsx)(M.a,{path:"/contact",children:Object(S.jsx)(X,{})}),Object(S.jsx)(M.a,{path:"/markdown",children:Object(S.jsx)(V,{})})]})})}),Object(S.jsx)(E,{})]})]})]}),document.getElementById("root")),l()}},[[94,4,5]]]);
//# sourceMappingURL=main.f2586f5e.chunk.js.map