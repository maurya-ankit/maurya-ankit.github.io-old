(this["webpackJsonpmaurya-ankit.github.io"]=this["webpackJsonpmaurya-ankit.github.io"]||[]).push([[6],{156:function(t,e,i){"use strict";e.a={initial:{opacity:0},in:{opacity:1,y:0},out:{opacity:0}}},157:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.1,staggerChildren:.2}}},n={hidden:{y:-20,opacity:0},visible:{y:0,opacity:1}}},321:function(t,e,i){"use strict";i.r(e);var a=i(52),n=i(0),r=i(126),c=i(122),o=i(102),s=i(319),l=i(3),d=Object(c.a)((function(t){return{pink:{color:"#d500f9"},title:{marginRight:20,fontWeight:"bold"},subtitle:{marginTop:20},titleInput:t.typography.h3,descInput:t.typography.subtitle1}})),u=function(t){var e=d(),i=t.about;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{variant:"h3",color:"initial",className:e.title,children:i?Object(l.jsxs)(l.Fragment,{children:[i.title," "]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{animation:"wave"}),Object(l.jsx)(s.a,{animation:"wave"}),Object(l.jsx)(s.a,{animation:"wave",width:"60%"})]})}),Object(l.jsx)(o.a,{variant:"h5",color:"initial",className:e.subtitle,children:Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(l.Fragment,{children:i.subtitle}):Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)(s.a,{animation:"wave"}),Object(l.jsx)(s.a,{width:"60%",animation:"wave"})]})})})]})},b=i(134),m=Object(c.a)((function(){return{img:{borderRadius:30,"&:hover":{}}}})),j=function(t){var e=m(),i=t.about,r=Object(n.useState)(!1),c=Object(a.a)(r,2),o=c[0],d=c[1];return Object(l.jsxs)(b.a,{style:{position:"relative"},children:["   ",i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:i.imgurl,hidden:!o,alt:"Rahul Dixit",width:"300",onLoad:function(){return d(!0)},height:"auto",className:e.img}),!o&&Object(l.jsx)(s.a,{variant:"rect",width:300,height:400,animation:"wave",className:e.img})]}):Object(l.jsx)(s.a,{variant:"rect",animation:"wave",width:300,height:400,className:e.img})]})},h=i(1),g=i(4),p=(i(6),i(5)),v=i(7),f=i(13),O=n.forwardRef((function(t,e){var i=t.absolute,a=void 0!==i&&i,r=t.classes,c=t.className,o=t.component,s=void 0===o?"hr":o,l=t.flexItem,d=void 0!==l&&l,u=t.light,b=void 0!==u&&u,m=t.orientation,j=void 0===m?"horizontal":m,v=t.role,f=void 0===v?"hr"!==s?"separator":void 0:v,O=t.variant,x=void 0===O?"fullWidth":O,y=Object(g.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(s,Object(h.a)({className:Object(p.a)(r.root,c,"fullWidth"!==x&&r[x],a&&r.absolute,d&&r.flexItem,b&&r.light,"vertical"===j&&r.vertical),role:f,ref:e},y))})),x=Object(v.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(f.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(O),y=i(33),w=Object(c.a)((function(t){return{card:{backgroundColor:"#b6e3ff",borderRadius:20,backgroundImage:function(t){return"url(".concat(t.data.image,")")},backgroundSize:"cover",height:400,textDecoration:"none",color:"#000","&:hover":{backgroundColor:"#a6e3ff"},"&:hover $subtitle":{margin:20,display:"block"}},content:{margin:20,backdropFilter:"blur(4px)",padding:10,borderRadius:t.spacing(2)},subtitle:{margin:20,fontSize:20,display:"none",transition:"display 2s",backdropFilter:"blur(4px)",padding:10,borderRadius:t.spacing(2)},btn:{margin:10,marginInline:5},margin:{marginBottom:-10}}})),k=function(t){var e=w(t);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(b.a,{children:Object(l.jsxs)(r.a,{container:!0,spacing:1,direction:"column",justify:"center",alignItems:"center",alignContent:"center",wrap:"nowrap",component:y.b,to:"/detail/".concat(t.data.id),className:e.card,children:[Object(l.jsx)(r.a,{item:!0,children:Object(l.jsx)(o.a,{variant:"h1",color:"initial",className:e.content,children:t.data.title})}),Object(l.jsx)(r.a,{item:!0,children:Object(l.jsxs)(o.a,{variant:"subtitle1",color:"textSecondary",className:e.subtitle,children:[t.data.desc,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate libero similique minus aperiam tenetur placeat et nesciunt quam velit eaque."]})})]})})})},N=i(133),C=i(155),I=i.n(C),S={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},F={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},R=Object(c.a)((function(){return{root:{marginTop:20,marginBottom:20,padding:0}}})),T=function(){var t=R(),e=Object(n.useState)([]),i=Object(a.a)(e,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){I.a.get("/data/cards.json").then((function(t){return o(t.data)}))}),[]),Object(l.jsx)(b.a,{className:t.root,children:Object(l.jsx)(r.a,{container:!0,spacing:3,direction:"row",justify:"flex-start",alignItems:"center",alignContent:"stretch",component:N.a.ul,variants:S,initial:"hidden",animate:"visible",className:t.root,children:c.map((function(t,e){return Object(l.jsx)(r.a,{item:!0,xs:12,sm:6,component:N.a.li,whileHover:{scale:.98},whileTap:{scale:.95},style:{listStyle:"none"},variants:F,children:Object(l.jsx)(k,{data:t})},e)}))})})},D=i(156),L=i(157),q=Object(c.a)((function(){return{root:{marginTop:20,padding:0},footer:{marginTop:20}}}));e.default=function(){var t=q(),e=Object(n.useState)({}),i=Object(a.a)(e,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){I.a.get("/data/aboutme.json").then((function(t){return o(t.data)}))}),[]),Object(l.jsxs)(b.a,{display:"flex",flexDirection:"column",alignItems:"stretch",padding:0,component:N.a.div,initial:"initial",animate:"in",exit:"out",style:{overflow:"hidden"},variants:D.a,children:[Object(l.jsxs)(r.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",alignContent:"stretch",wrap:"wrap-reverse",className:t.root,component:N.a.ul,variants:L.a,initial:"hidden",animate:"visible",children:[Object(l.jsx)(r.a,{item:!0,xs:12,sm:!0,component:N.a.li,style:{listStyle:"none"},variants:L.b,children:Object(l.jsx)(u,{about:c})}),Object(l.jsx)(r.a,{item:!0,component:N.a.li,style:{listStyle:"none"},variants:L.b,children:Object(l.jsx)(j,{about:c})})]}),Object(l.jsx)(T,{}),Object(l.jsx)(x,{})]})}}}]);
//# sourceMappingURL=6.011fd9bc.chunk.js.map