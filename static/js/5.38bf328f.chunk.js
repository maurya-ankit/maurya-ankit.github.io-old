(this["webpackJsonpmaurya-ankit.github.io"]=this["webpackJsonpmaurya-ankit.github.io"]||[]).push([[5],{155:function(t,e,a){"use strict";e.a={initial:{opacity:0},in:{opacity:1,y:0},out:{opacity:0}}},156:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.1,staggerChildren:.2}}},n={hidden:{y:-20,opacity:0},visible:{y:0,opacity:1}}},188:function(t,e,a){"use strict";var i=a(1),n=a(4),r=a(0),o=a(5),c=(a(6),a(13)),s=a(7),l=r.forwardRef((function(t,e){var a=t.animation,c=void 0===a?"pulse":a,s=t.classes,l=t.className,d=t.component,u=void 0===d?"span":d,m=t.height,h=t.variant,b=void 0===h?"text":h,g=t.width,j=Object(n.a)(t,["animation","classes","className","component","height","variant","width"]),p=Boolean(j.children);return r.createElement(u,Object(i.a)({ref:e,className:Object(o.a)(s.root,s[b],l,p&&[s.withChildren,!g&&s.fitContent,!m&&s.heightAuto],!1!==c&&s[c])},j,{style:Object(i.a)({width:g,height:m},j.style)}))}));e.a=Object(s.a)((function(t){return{root:{display:"block",backgroundColor:Object(c.c)(t.palette.text.primary,"light"===t.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:t.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(t.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(l)},189:function(t,e,a){"use strict";var i=a(53),n=a(54);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a(0)),o=(0,i(a(55)).default)(r.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.default=o},190:function(t,e,a){"use strict";var i=a(1),n=a(4),r=a(0),o=(a(6),a(5)),c=a(7),s=a(13),l=r.forwardRef((function(t,e){var a=t.absolute,c=void 0!==a&&a,s=t.classes,l=t.className,d=t.component,u=void 0===d?"hr":d,m=t.flexItem,h=void 0!==m&&m,b=t.light,g=void 0!==b&&b,j=t.orientation,p=void 0===j?"horizontal":j,f=t.role,v=void 0===f?"hr"!==u?"separator":void 0:f,O=t.variant,x=void 0===O?"fullWidth":O,y=Object(n.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(u,Object(i.a)({className:Object(o.a)(s.root,l,"fullWidth"!==x&&s[x],c&&s.absolute,h&&s.flexItem,g&&s.light,"vertical"===p&&s.vertical),role:v,ref:e},y))}));e.a=Object(c.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},300:function(t,e,a){"use strict";a.r(e);var i=a(52),n=a(0),r=a(127),o=a(123),c=a(102),s=a(188),l=a(3),d=Object(o.a)((function(t){return{pink:{color:"#d500f9"},title:{marginRight:20,fontWeight:"bold"},subtitle:{marginTop:20},titleInput:t.typography.h3,descInput:t.typography.subtitle1}})),u=function(t){var e=d(),a=t.about;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.a,{variant:"h3",color:"initial",className:e.title,children:a?Object(l.jsxs)(l.Fragment,{children:[a.title," "]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{animation:"wave"}),Object(l.jsx)(s.a,{animation:"wave"}),Object(l.jsx)(s.a,{animation:"wave",width:"60%"})]})}),Object(l.jsx)(c.a,{variant:"h5",color:"initial",className:e.subtitle,children:Object(l.jsx)(l.Fragment,{children:a?Object(l.jsx)(l.Fragment,{children:a.subtitle}):Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(s.a,{animation:"wave"}),Object(l.jsx)(s.a,{width:"60%",animation:"wave"})]})})})]})},m=a(135),h=Object(o.a)((function(){return{img:{borderRadius:30,"&:hover":{}}}})),b=function(t){var e=h(),a=t.about,r=Object(n.useState)(!1),o=Object(i.a)(r,2),c=o[0],d=o[1];return Object(l.jsxs)(m.a,{style:{position:"relative"},children:["   ",a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:a.imgurl,hidden:!c,alt:"Rahul Dixit",width:"300",onLoad:function(){return d(!0)},height:"auto",className:e.img}),!c&&Object(l.jsx)(s.a,{variant:"rect",width:300,height:400,animation:"wave",className:e.img})]}):Object(l.jsx)(s.a,{variant:"rect",animation:"wave",width:300,height:400,className:e.img})]})},g=a(190),j=a(131),p=a(189),f=a.n(p),v=a(33),O=Object(o.a)((function(t){return{card:{backgroundColor:"#b6e3ff",borderRadius:20,backgroundImage:function(t){return"url(".concat(t.img,")")},height:400,textDecoration:"none",color:"#000","& hover":{backgroundColor:"#fff"}},content:{margin:20},btn:{margin:10,marginInline:5},margin:{marginBottom:-10}}})),x=function(t){var e=O(t),a=t.isAuthenticated,o=t.editing,s=a&&o,d=Object(n.useState)(s&&!1),u=Object(i.a)(d,2);u[0],u[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m.a,{children:Object(l.jsx)(r.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"flex-start",alignContent:"center",wrap:"nowrap",component:s?"div":v.b,to:"/detail/".concat(t.data.id),className:e.card,children:Object(l.jsxs)(r.a,{item:!0,children:[Object(l.jsx)(c.a,{variant:"h3",color:"initial",className:e.content,children:t.data.title}),Object(l.jsx)(c.a,{variant:"subtitle1",color:"initial",className:e.content,children:t.data.desc}),Object(l.jsx)(j.a,{variant:"text",color:"default",endIcon:Object(l.jsx)(f.a,{}),className:e.btn,component:v.b,to:"/detail/".concat(t.data.id),children:"Read More"})]})})})})},y=a.p+"static/media/undraw_Golden_gate_bridge_jkph.e9f8bbce.svg",w=a.p+"static/media/undraw_Code_thinking_re_gka2.753f2580.svg",k=a.p+"static/media/undraw_Container_ship_ok1c.b05b78c9.svg",C=a.p+"static/media/undraw_Outer_space_drqu.638e5f23.svg",I=a(134),N={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},_={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},R=Object(o.a)((function(){return{root:{marginTop:20,marginBottom:20,padding:0}}})),S=[{img:w},{img:y},{img:k},{img:C}],F=function(){var t=R(),e=Object(n.useState)([{title:"Educations",desc:"My Education details so far",id:"Educations"},{title:"Projects",desc:"My Project details so far",id:"Projects"}]),a=Object(i.a)(e,2),o=a[0];a[1];return Object(l.jsx)(m.a,{className:t.root,children:Object(l.jsx)(r.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",alignContent:"stretch",component:I.a.ul,variants:N,initial:"hidden",animate:"visible",className:t.root,children:o.map((function(t,e){return Object(l.jsx)(r.a,{item:!0,xs:12,sm:6,component:I.a.li,whileHover:{scale:.95},whileTap:{scale:.9},style:{listStyle:"none"},variants:_,children:Object(l.jsx)(x,{data:t,img:S[e%S.length].img})},e)}))})})},M=a.p+"static/media/ankit.899255ef.jpg",T=a(155),E=a(156),A=Object(o.a)((function(){return{root:{marginTop:20,padding:0},footer:{marginTop:20}}}));e.default=function(){var t=A(),e=Object(n.useState)({title:"Hi, I am Ankit Maurya",subtitle:"I am a Student a Indian Institute of Information Technology Pune",imgurl:M}),a=Object(i.a)(e,2),o=a[0];a[1];return Object(l.jsxs)(m.a,{display:"flex",flexDirection:"column",alignItems:"stretch",padding:0,component:I.a.div,initial:"initial",animate:"in",exit:"out",style:{overflow:"hidden"},variants:T.a,children:[Object(l.jsxs)(r.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",alignContent:"stretch",wrap:"wrap-reverse",className:t.root,component:I.a.ul,variants:E.a,initial:"hidden",animate:"visible",children:[Object(l.jsx)(r.a,{item:!0,xs:12,sm:!0,component:I.a.li,style:{listStyle:"none"},variants:E.b,children:Object(l.jsx)(u,{about:o})}),Object(l.jsx)(r.a,{item:!0,component:I.a.li,style:{listStyle:"none"},variants:E.b,children:Object(l.jsx)(b,{about:o})})]}),Object(l.jsx)(F,{}),Object(l.jsx)(g.a,{})]})}}}]);
//# sourceMappingURL=5.38bf328f.chunk.js.map