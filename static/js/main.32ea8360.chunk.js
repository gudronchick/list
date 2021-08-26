(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{160:function(n,t,e){},267:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e.n(i),c=e(32),o=e.n(c),s=(e(160),e(17)),u=e(4),d=e(5);function l(){var n=Object(u.a)(["\n  color: grey;\n  margin-top: 2px;\n  font-size: 0.9rem;\n"]);return l=function(){return n},n}function b(){var n=Object(u.a)(["\n  font-size: 1.1rem;\n"]);return b=function(){return n},n}function p(){var n=Object(u.a)(['\n  position: absolute;\n  z-index: 9;\n  max-width: 600px;\n  width: 90%;\n  top: 10px;\n  margin: 0 20px;\n  background-color: white;\n  border-left: 4px solid red;\n  box-shadow: 0 0 10px 0 rgb(180, 180, 180);\n  padding: 5px 10px 5px 60px;\n\n  &:after {\n    content: "!";\n    position: absolute;\n    color: #fff;\n    font-weight: 500;\n    font-size: 20px;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    background-color: red;\n    border-radius: 50%;\n    left: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n']);return p=function(){return n},n}function f(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transform-origin: 90% 90%;\n\n  &.","-enter {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  &.","-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 500ms ease-in-out;\n  }\n\n  &.","-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &.","-exit-active {\n    opacity: 0;\n    transform: scale(0);\n    transition: 500ms ease-in-out;\n  }\n"]);return f=function(){return n},n}function h(){var n=Object(u.a)(["\n  width: 370px;\n  min-height: 600px;\n  position: relative;\n  padding-bottom: 15px;\n  @media screen and (max-width: 500px),\n    (orientation: landscape) and (max-width: 820px) and (max-height: 550px) {\n    width: 100%;\n    min-height: 100vh;\n    height: 100%;\n    padding-bottom: 0;\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(u.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: rgb(190, 207, 226);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return j=function(){return n},n}var x=d.a.main(j()),g=d.a.main(h()),m="page",O=d.a.div(f(),m,m,m,m),v=d.a.div(p()),w=d.a.h3(b()),k=d.a.p(l()),y="ADD_TASK",A="TASK_IS_DONE",S="REMOVE_THE_TASK",z="SEND_PUG_NUM",N="MAKE_TASK_IS_DONE",P="ADD_THE_TASK",T="DELETE_THE_TASK",M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1?arguments[1]:void 0;return{type:P,task:n,num:t}},D=e(21),E=e(24),I=e(15),F=e(13),_=e(49),C=e(119);function R(){var n=Object(u.a)(["\n  --close-size: 18px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(197, 197, 197, 0.486);\n  fill: rgb(255, 255, 255);\n  border-radius: 50%;\n  width: var(--close-size);\n  height: var(--close-size);\n  line-height: 15px;\n  text-align: center;\n  cursor: pointer;\n"]);return R=function(){return n},n}function B(){var n=Object(u.a)(["\n  position: relative;\n  z-index: 0;\n"]);return B=function(){return n},n}function J(){var n=Object(u.a)(["\n  all: unset;\n  background: rgb(46, 186, 238);\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n  padding: 15px 0;\n  margin-top: 10px;\n  cursor: pointer;\n\n  &:hover {\n    filter: brightness(90%);\n  }\n"]);return J=function(){return n},n}function K(){var n=Object(u.a)(['\n  position: relative;\n  cursor: pointer;\n  z-index: 1;\n\n  &:after {\n    content: "";\n    position: absolute;\n    border: 6px solid transparent;\n    border-top: 8px solid rgba(204, 204, 204, 0.6);\n    right: 0;\n    top: 50%;\n  }\n\n  &:hover:after {\n    border-top-color: #fff;\n  }\n']);return K=function(){return n},n}function H(){var n=Object(u.a)(["\n  padding: 2px 5px 5px 5px;\n  color: rgb(5, 5, 5);\n\n  &:hover {\n    background: rgb(46, 186, 238);\n    color: rgb(255, 255, 255);\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid rgb(224, 224, 224);\n  }\n"]);return H=function(){return n},n}function L(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: calc(-100% - 23px);\n  right: 0;\n  left: 0;\n  background: rgb(255, 255, 255);\n  display: ",";\n"]);return L=function(){return n},n}function V(){var n=Object(u.a)(["\n  /* all: unset; */\n  width: 100%;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6);\n  padding: 7px 0;\n  margin: 10px 0;\n  color: rgb(235, 235, 235);\n\n  &::placeholder {\n    color: rgb(190, 190, 190);\n  }\n"]);return V=function(){return n},n}var Y=d.a.div(V()),X=d.a.ul(L(),(function(n){return n.isclosed?"none":""})),U=d.a.li(H()),W=Object(d.a)(Y)(K()),q=d.a.button(J()),G=d.a.div(B()),Q=d.a.span(R()),Z=function(n){return Object(r.jsx)(U,{onClick:function(t){n.setRubricName(t.target.textContent)},children:n.title})},$=e(118);function nn(){var n=Object(u.a)(["\n  margin-top: -5px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(u.a)(["\n  text-align: center;\n  color: rgb(212, 121, 121);\n"]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n  margin: 0 auto -5px auto;\n"]);return en=function(){return n},n}function rn(){var n=Object(u.a)(["\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n  &:after {\n    content: ",";\n    position: absolute;\n    bottom: 10px;\n    right: 0;\n    left: 0;\n    height: 1px;\n    background: red;\n    transform-origin: left center;\n    transform: scaleX(0);\n    animation: slideLine 0.5s ease forwards;\n  }\n\n  @keyframes slideLine {\n    from {\n      transform: scaleX(0);\n    }\n    to {\n      transform: scaleX(1);\n    }\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(u.a)(["\n  color: red;\n  font-weight: 500;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"]);return cn=function(){return n},n}function on(){var n=Object(u.a)(["\n  all: unset;\n  width: 100%;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6);\n  padding: 7px 0;\n  margin: 10px 0;\n  color: rgb(235, 235, 235);\n\n  &::placeholder {\n    color: rgb(190, 190, 190);\n  }\n"]);return on=function(){return n},n}var sn=d.a.input(on()),un=d.a.span(cn()),dn=d.a.div(an(),(function(n){return n.isvalidated?'""':""})),ln=d.a.span(rn()),bn=d.a.p(en()),pn=d.a.span(tn()),fn=d.a.p(nn()),hn=function(n){var t=n.type,e=n.placeholder,a=n.id,c=n.isFocusedMode,o=n.setIsFocused,s=Object(E.a)(n,["type","placeholder","id","isFocusedMode","setIsFocused"]),u=s.meta.invalid&&s.meta.touched,d=Object(i.useRef)();return Object(i.useEffect)((function(){c?(d.current.focus(),o(!1)):0===a&&d.current.focus()}),[c,a,o]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(dn,{isvalidated:Number(u),children:Object(r.jsx)(sn,Object(F.a)(Object(F.a)({type:t},s.input),{},{placeholder:e,ref:d}))}),u&&Object(r.jsx)(un,{children:s.meta.error})]})},jn=function(n){var t=Object(i.useState)(!1),e=Object(D.a)(t,2),a=e[0],c=e[1];return Object(r.jsxs)(G,{children:[Object(r.jsx)($.a,{placeholder:n.placeholder,name:n.name,component:hn,type:n.type,validate:n.arrOfValidators,onChange:function(t){var e=t.target.value.trim().length;n.setPrinted(e)},isFocusedMode:a,setIsFocused:c,onFocus:function(){n.setIdFocused(n.id)},id:n.id}),"time"!==n.name&&0!==n.printed&&n.idFocused===n.id&&Object(r.jsx)(Q,{onClick:function(){n.dispatch(Object(_.a)("addTask",n.name,"")),n.setPrinted(0),c(!0)},children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"})})})]})},xn=function(n){var t=n.fields,e=n.dispatch,a=Object(E.a)(n,["fields","dispatch"]),c=Object(i.useState)(!0),o=Object(D.a)(c,2),s=o[0],u=o[1],d=Object(i.useState)(-1),l=Object(D.a)(d,2),b=l[0],p=l[1],f=Object(i.useState)(0),h=Object(D.a)(f,2),j=h[0],x=h[1],g=Object(i.useMemo)((function(){return t.map((function(n){return Object(i.createElement)(jn,Object(F.a)(Object(F.a)({},n),{},{key:n.id,dispatch:e,idFocused:b,setIdFocused:p,printed:j,setPrinted:x}))}))}),[t,e,b,j]);return Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),a.handleSubmit(),x(0)},autoComplete:"off",children:[Object(r.jsxs)(W,{onClick:function(){u((function(n){return!n}))},children:[Object(r.jsx)("div",{children:a.rubricName}),Object(r.jsxs)(X,{isclosed:Number(s),children:[Object(r.jsx)(Z,{title:"Personal",setRubricName:a.setRubricName}),Object(r.jsx)(Z,{title:"Business",setRubricName:a.setRubricName})]})]}),g,Object(r.jsx)(q,{children:"Add your thing"})]})},gn=xn=Object(C.a)({form:"addTask",onSubmitSuccess:function(n,t){return t(Object(_.b)("addTask"))}})(xn),mn=e(31),On=Object(r.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(r.jsx)("path",{stroke:"rgb(64, 178, 219)",strokeWidth:"1",d:"M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"})}),vn=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"})}),wn=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M0 0c2.799 1.2 8.683.955 8.307 6.371l-2.143 2.186c-5.338.093-5.239-5.605-6.164-8.557zm10.884 15.402c2.708 2.048 11.824 8.451 11.824 8.451.754.513 1.662-.417 1.136-1.162 0 0-6.607-8.964-8.719-11.619-1.668-2.101-2.502-2.175-5.46-3.046l-1.953 1.997c.936 2.931 1.033 3.76 3.172 5.379zm-4.877 3.332l2.62-2.626c-.26-.244-.489-.485-.69-.724l-2.637 2.643.707.707zm8.244-11.162l4.804-4.814 2.154 2.155-4.696 4.706c.438.525.813 1.021 1.246 1.584l6.241-6.253-4.949-4.95-6.721 6.733c.705.229 1.328.483 1.921.839zm4.837-3.366l-3.972 3.981c.24.199.484.423.732.681l3.946-3.956-.706-.706zm-9.701 12.554l-3.6 3.607-2.979.825.824-2.979 3.677-3.685c-.356-.583-.617-1.203-.859-1.904l-4.626 4.635-1.824 6.741 6.773-1.791 4.227-4.234c-1-.728-1.03-.749-1.613-1.215z"})});function kn(){var n=Object(u.a)(["\n  width: 55px;\n  height: 55px;\n  line-height: 60px;\n  text-align: center;\n  border: 2px solid rgb(126, 165, 190);\n  border-radius: 50%;\n  margin: 20px auto 40px;\n"]);return kn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  padding: 3px;\n  cursor: pointer;\n"]);return yn=function(){return n},n}function An(){var n=Object(u.a)(["\n  font-weight: 400;\n  color: #fff;\n"]);return An=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Sn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  & svg {\n    fill: rgb(64, 178, 219);\n  }\n"]);return zn=function(){return n},n}var Nn=d.a.div(zn()),Pn=d.a.div(Sn()),Tn=d.a.h3(An()),Mn=d.a.div(yn()),Dn=d.a.div(kn()),En=function(n){return Object(r.jsxs)(Nn,{children:[Object(r.jsxs)(Pn,{children:[Object(r.jsx)(mn.b,{to:"/",children:Object(r.jsx)(Mn,{children:On})}),Object(r.jsx)(Tn,{children:"Add new thing"}),Object(r.jsx)("div",{children:vn})]}),Object(r.jsx)(Dn,{children:wn})]})};function In(){var n=Object(u.a)(["\n  width: 370px;\n  min-height: 600px;\n  background: rgb(70, 82, 157);\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: 0.4s;\n  transform-origin: 90% 90%;\n  @media screen and (max-width: 500px),\n    (orientation: landscape) and (max-width: 820px) {\n    width: 100%;\n    height: 100%;\n  }\n"]);return In=function(){return n},n}var Fn=d.a.div(In()),_n=function(n){var t=n.totalAmount,e=Object(E.a)(n,["totalAmount"]),a=Object(i.useState)("Personal"),c=Object(D.a)(a,2),o=c[0],s=c[1],u=Object(I.e)(),d=Object(i.useRef)(t);return Object(i.useEffect)((function(){"/write"===u.location.pathname&&t!==d.current&&u.push("/")}),[t,u]),Object(r.jsxs)(Fn,{children:[Object(r.jsx)(En,{}),Object(r.jsx)(gn,{rubricName:o,setRubricName:s,fields:e.fields,onSubmit:function(n){n.rubric=o,e.addTask(n)}})]})},Cn=Object(s.b)((function(n){return{fields:n.back.fields,totalAmount:n.list.totalAmount}}),{addTask:M})(_n),Rn=e.p+"static/media/bg.81120049.jpg",Bn=function(n){var t=n.donePercent;return Object(r.jsxs)("svg",{width:"20",height:"20",viewport:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("circle",{r:"8",cx:"10",cy:"10",fill:"transparent",stroke:"lightblue",strokeWidth:"2"}),Object(r.jsx)("circle",{r:"8",cx:"10",cy:"10",fill:"transparent",stroke:"gold",strokeDasharray:8*Math.PI*2,strokeDashoffset:(100-t)/100*Math.PI*16,strokeWidth:"2",transform:"rotate(-90 10 10)"})]})};function Jn(){var n=Object(u.a)(["\n  position: absolute;\n  width: ","%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.116);\n  z-index: 0;\n  transition: 0.4s linear;\n"]);return Jn=function(){return n},n}function Kn(){var n=Object(u.a)(["\n  position: absolute;\n  width: ","%;\n  height: 4px;\n  background: linear-gradient(to right, rgb(161, 194, 255), rgb(70, 67, 255));\n  transition: 0.4s linear;\n  bottom: 0;\n"]);return Kn=function(){return n},n}function Hn(){var n=Object(u.a)(["\n  margin-left: 8px;\n"]);return Hn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return Ln=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  font-weight: 100;\n  font-size: 2.3rem;\n  line-height: 2.3rem;\n  text-shadow: 0 0 2px rgb(90, 90, 90);\n  opacity: 0.99;\n  z-index: 2;\n"]);return Vn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n  margin-left: 0;\n"]);return Yn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n  text-align: right;\n  margin-left: auto;\n  padding-left: 0.8rem;\n"]);return Xn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  padding-top: 8%;\n  opacity: 1;\n  font-size: 1rem;\n  @media (orientation: landscape) and (max-width: 820px) {\n    .amount {\n      padding-top: 15px;\n    }\n  }\n"]);return Un=function(){return n},n}function Wn(){var n=Object(u.a)(["\n  font-size: 0.8rem;\n  opacity: 0.7;\n"]);return Wn=function(){return n},n}function qn(){var n=Object(u.a)(["\n  font-size: 0.8rem;\n  opacity: 0.7;\n"]);return qn=function(){return n},n}function Gn(){var n=Object(u.a)(["\n  justify-content: space-between;\n  display: flex;\n  align-items: flex-end;\n"]);return Gn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 10px 20px 15px 20px;\n  opacity: 0.99;\n  z-index: 1;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  @media screen and (max-width: 500px) {\n    padding: 7px 15px 12px 15px;\n  }\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(u.a)(["\n  width: 100%;\n  height: 200px;\n  position: relative;\n  user-select: none;\n\n  @media (orientation: landscape) and (max-width: 820px) {\n    .front_head {\n      height: 150px;\n    }\n  }\n"]);return $n=function(){return n},n}var nt=d.a.div($n()),tt=d.a.img(Zn()),et=d.a.div(Qn()),rt=d.a.div(Gn()),it=Object(d.a)(rt)(qn()),at=d.a.p(Wn()),ct=Object(d.a)(rt)(Un()),ot=d.a.div(Xn()),st=Object(d.a)(ot)(Yn()),ut=d.a.h2(Vn()),dt=d.a.div(Ln()),lt=d.a.p(Hn()),bt=d.a.div(Kn(),(function(n){return n.widthStyle||0})),pt=d.a.div(Jn(),(function(n){return n.widthStyle||0})),ft=function(n){return Object(r.jsxs)(nt,{children:[Object(r.jsx)(tt,{src:Rn,alt:"Background"}),Object(r.jsxs)(et,{children:[Object(r.jsxs)(ct,{children:[Object(r.jsxs)(ut,{children:["Your",Object(r.jsx)("br",{})," Things"]}),Object(r.jsxs)(ot,{children:[Object(r.jsx)("span",{children:n.rubrics.personal}),Object(r.jsx)(at,{children:"Personal"})]}),Object(r.jsxs)(st,{children:[Object(r.jsx)("span",{children:n.rubrics.business}),Object(r.jsx)(at,{children:"Business"})]})]}),Object(r.jsxs)(it,{children:[Object(r.jsx)("p",{children:n.header.getDate}),Object(r.jsxs)(dt,{children:[Object(r.jsx)(Bn,{donePercent:n.donePercent}),Object(r.jsxs)(lt,{children:[n.donePercent,"% done"]})]})]})]}),Object(r.jsx)(bt,{widthStyle:n.donePercent}),Object(r.jsx)(pt,{widthStyle:100-n.donePercent})]})},ht=Object(s.b)((function(n){return{header:n.front.header,rubrics:n.list.rubrics,donePercent:n.list.donePercent}}),null)(ft);function jt(){var n=Object(u.a)(["\n  padding: 2px;\n  fill: rgb(46, 186, 238);\n  cursor: pointer;\n  position: absolute;\n  bottom: 7px;\n  left: ",";\n  right: ",";\n  fill: ",";\n  pointer-events: ",";\n"]);return jt=function(){return n},n}function xt(){var n=Object(u.a)(["\n  color: ",";\n  background: ",";\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  font-weight: 500;\n  text-align: center;\n  border-radius: 50%;\n  cursor: pointer;\n  margin: 0 2px;\n"]);return xt=function(){return n},n}function gt(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  user-select: none;\n  min-width: 100px;\n  z-index: 0;\n"]);return gt=function(){return n},n}function mt(){var n=Object(u.a)(["\n  width: 100%;\n"]);return mt=function(){return n},n}var Ot=d.a.div(mt()),vt=d.a.ul(gt()),wt=d.a.li(xt(),(function(n){return n.isactive?"#fff":"rgb(46, 186, 238)"}),(function(n){return n.isactive?"rgb(46, 186, 238)":""})),kt=d.a.div(jt(),(function(n){return"prev"===n.direction?"calc(50% - 70px)":"none"}),(function(n){return"next"===n.direction?"calc(50% - 70px)":"none"}),(function(n){return n.isactive?"rgb(212, 212, 212)":""}),(function(n){return n.isactive?"none":"all"})),yt=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})}),At=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})}),St=function(n){var t=n.totalAmount,e=n.addTask,a=n.sendPagNum,c=(Object(E.a)(n,["totalAmount","addTask","sendPagNum"]),Object(i.useState)([])),o=Object(D.a)(c,2),s=o[0],u=o[1],d=Object(i.useState)(1),l=Object(D.a)(d,2),b=l[0],p=l[1],f=Math.ceil(t/4),h=Math.ceil(b/3)-1,j=Object(i.useCallback)((function(n){var t=+n.target.dataset.page;p(t),a(t)}),[a]);Object(i.useEffect)((function(){e(void 0,b)}),[b,e]);return Object(i.useEffect)((function(){4*b-3>t&&t&&p((function(n){return n-1}));for(var n=[],e=3*h+1;e<=3*(h+1)&&!(f<e);e++)n.push(Object(r.jsx)(wt,{isactive:Number(b===e),"data-page":e,onClick:j,children:e},e));u(n)}),[t,b,j,h,f]),Object(r.jsxs)(Ot,{children:[f>3&&Object(r.jsx)(kt,{isactive:Number(b<=1),direction:"prev",onClick:function(){b>1&&(p((function(n){return n-1})),a(b-1))},children:yt}),Object(r.jsx)(vt,{children:s}),f>3&&Object(r.jsx)(kt,{isactive:Number(b>=f),direction:"next",onClick:function(n){p((function(n){return n+1})),a(b+1)},children:At})]})},zt=Object(s.b)((function(n){return{totalAmount:n.list.totalAmount}}),{addTask:M,sendPagNum:function(n){return{type:z,num:n}}})(St);function Nt(){var n=Object(u.a)(["\n  background: rgb(49, 52, 75);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n  fill: ",";\n"]);return Nt=function(){return n},n}function Pt(){var n=Object(u.a)(["\n  background: rgb(119, 207, 119);\n"]);return Pt=function(){return n},n}function Tt(){var n=Object(u.a)(["\n  all: unset;\n  position: relative;\n  cursor: pointer;\n  padding: 3px;\n  width: 50px;\n  text-align: center;\n  font-size: 13px;\n  color: #fff;\n  margin: 2px 0;\n  background: rgb(255, 140, 140);\n"]);return Tt=function(){return n},n}function Mt(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n\n  & > *:hover {\n    filter: brightness(90%);\n  }\n"]);return Mt=function(){return n},n}function Dt(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 1px;\n  right: 0;\n  z-index: 0;\n  background: #fff;\n  text-align: center;\n  opacity: 0;\n  pointer-events: none;\n  animation: ",";\n\n  @keyframes open {\n    from {\n      pointer-events: all;\n    }\n    to {\n      pointer-events: all;\n      opacity: 1;\n    }\n  }\n"]);return Dt=function(){return n},n}function Et(){var n=Object(u.a)(["\n  padding-right: 5px;\n  font-size: 1.1rem;\n  max-width: 230px;\n  width: 100%;\n  font-weight: 500;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: ",";\n"]);return Et=function(){return n},n}function It(){var n=Object(u.a)(["\n  color: rgb(155, 155, 155);\n  font-weight: 500;\n  font-size: 0.8rem;\n  color: ",";\n"]);return It=function(){return n},n}function Ft(){var n=Object(u.a)(["\n  position: relative;\n"]);return Ft=function(){return n},n}function _t(){var n=Object(u.a)(["\n  margin: 0 auto 0 10px;\n"]);return _t=function(){return n},n}function Ct(){var n=Object(u.a)(["\n  border: 2px solid rgb(211, 211, 211);\n  border-color: ",";\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  text-align: center;\n  line-height: 45px;\n  cursor: pointer;\n\n  & > svg {\n    fill: ",";\n  }\n"]);return Ct=function(){return n},n}function Rt(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid rgb(221, 221, 221);\n  cursor: pointer;\n\n  @media (max-height: 600px) {\n    padding: 8px 0;\n  }\n  @media screen and (max-width: 500px) and (min-height: 660px) {\n    padding: 12px 0;\n  }\n"]);return Rt=function(){return n},n}function Bt(){var n=Object(u.a)(["\n  list-style-type: none;\n  background: #fff;\n  user-select: none;\n  position: relative;\n\n  &:last-child {\n    margin-bottom: 50px;\n  }\n\n  &:before {\n    content: ",";\n    position: absolute;\n    left: 15px;\n    top: 50%;\n    font-size: 25px;\n    color: rgb(105, 105, 105);\n    transform: translateY(-50%);\n    pointer-events: none;\n  }\n\n  @media screen and (max-width: 500px) and (min-height: 660px) {\n    padding: 10px 0 5px 0;\n  }\n"]);return Bt=function(){return n},n}var Jt=d.a.li(Bt(),(function(n){return!!n.isdone&&'"\u2714"'})),Kt=d.a.div(Rt()),Ht=d.a.div(Ct(),(function(n){return n.isdone?"rgb(226, 226, 226)":""}),(function(n){return n.isdone?"transparent":""})),Lt=d.a.div(_t()),Vt=d.a.div(Ft()),Yt=d.a.span(It(),(function(n){return n.isdone?"rgb(219, 219, 219)":""})),Xt=d.a.h4(Et(),(function(n){return n.isdone?"rgb(219, 219, 219)":""})),Ut=d.a.div(Dt(),(function(n){return n.isopen?"open 0.2s ease-in forwards":"none"})),Wt=d.a.div(Mt()),qt=d.a.button(Tt()),Gt=Object(d.a)(qt)(Pt()),Qt=d.a.span(Nt(),(function(n){return"delete"===n.purpose?"rgb(255, 140, 140)":"rgb(119, 207, 119)"})),Zt=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"rgb(89, 180, 255)",children:Object(r.jsx)("path",{d:"M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"})}),$t=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"})}),ne=Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"})}),te=function(n){var t=n.idOpened,e=n.setIdOpened,i=Object(E.a)(n,["idOpened","setIdOpened"]);return Object(r.jsxs)(Jt,{isdone:Number(i.done),children:[Object(r.jsxs)(Kt,{onClick:function(n){var r=t!==i.id?i.id:-1;e(r)},children:[Object(r.jsx)(Ht,{isdone:Number(i.done),children:Zt}),Object(r.jsxs)(Lt,{children:[Object(r.jsx)(Xt,{isdone:Number(i.done),children:i.task}),Object(r.jsx)(Yt,{isdone:Number(i.done),children:i.place})]}),Object(r.jsx)(Vt,{children:Object(r.jsx)(Yt,{isdone:Number(i.done),children:i.time})})]}),Object(r.jsx)(Ut,{isopen:Number(t===i.id),children:Object(r.jsxs)(Wt,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)(qt,{onClick:function(){return n=i.id,i.deleteTask(n),void e(-1);var n},children:[Object(r.jsx)(Qt,{purpose:"delete",children:$t}),"Delete"]})}),!i.done&&Object(r.jsx)("div",{children:Object(r.jsxs)(Gt,{onClick:function(){return n=i.id,i.makeTaskIsDone(n),void e(-1);var n},children:[Object(r.jsx)(Qt,{purpose:"done",children:ne}),"Done"]})})]})})]})},ee=Object(s.b)((function(n){return{}}),{makeTaskIsDone:function(n){return{type:N,id:n}},deleteTask:function(n){return{type:T,id:n}}})(te);function re(){var n=Object(u.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  text-align: center;\n  line-height: 18px;\n  background: rgb(114, 114, 114);\n  border-radius: 50%;\n  color: #fff;\n"]);return re=function(){return n},n}function ie(){var n=Object(u.a)(["\n  position: absolute;\n  left: 20px;\n  bottom: 50px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgb(114, 114, 114);\n  user-select: none;\n"]);return ie=function(){return n},n}function ae(){var n=Object(u.a)(["\n  text-align: center;\n  margin: 5px 0;\n  font-weight: 500;\n"]);return ae=function(){return n},n}function ce(){var n=Object(u.a)(["\n  color: rgb(160, 160, 160);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 0.8rem;\n"]);return ce=function(){return n},n}function oe(){var n=Object(u.a)(['\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    background: #fff;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 2px;\n    transition: 0.2s;\n  }\n\n  &:after {\n    transform: translate(-50%, -50%) rotate(90deg);\n  }\n\n  &:hover:before {\n    transform: translate(-50%, -50%) rotate(90deg);\n  }\n\n  &:hover:after {\n    transform: translate(-50%, -50%) rotate(180deg);\n  }\n\n  all: unset;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  background: rgb(46, 186, 238);\n  border-radius: 50%;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  right: 20px;\n  bottom: 35px;\n  box-shadow: 0px 2px 12px 0 rgba(46, 187, 238, 0.562);\n']);return oe=function(){return n},n}function se(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 20px 20px 30px 20px;\n"]);return se=function(){return n},n}function ue(){var n=Object(u.a)(["\n  width: 370px;\n  min-height: 600px;\n  height: 100%;\n  user-select: none;\n  background: rgb(255, 255, 255);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  @media screen and (max-width: 500px),\n    (orientation: landscape) and (max-width: 820px) and (max-height: 550px) {\n    width: 100%;\n    min-height: 100vh;\n    height: 100%;\n  }\n"]);return ue=function(){return n},n}var de=d.a.div(ue()),le=d.a.div(se()),be=d.a.button(oe()),pe=d.a.h1(ce()),fe=d.a.p(ae()),he=d.a.span(ie()),je=d.a.span(re()),xe=function(n){var t=n.state,e=(Object(E.a)(n,["state"]),Object(i.useState)(-1)),a=Object(D.a)(e,2),c=a[0],o=a[1],s=t.list.map((function(n){return Object(i.createElement)(ee,Object(F.a)(Object(F.a)({},n),{},{key:n.id,idOpened:c,setIdOpened:o}))}));return Object(r.jsxs)(de,{children:[Object(r.jsx)(ht,{}),Object(r.jsxs)(le,{children:[Object(r.jsx)(pe,{children:"Inbox"}),!t.list.length&&Object(r.jsx)(fe,{children:"No tasks"}),Object(r.jsx)("ul",{children:s})]}),Object(r.jsxs)(he,{children:["Completed ",Object(r.jsx)(je,{children:t.completedAmount})]}),Object(r.jsx)(mn.b,{to:"/write",children:Object(r.jsx)(be,{})}),Object(r.jsx)(zt,{})]})},ge=Object(s.b)((function(n){return{state:n.list}}))(xe),me=e(269);var Oe=Object(s.b)((function(n){return{isAlertShown:n.common.isAlertShown}}),null)((function(n){var t=n.isAlertShown;return Object(r.jsxs)(x,{children:[t&&Object(r.jsxs)(v,{children:[Object(r.jsx)(w,{children:"Error"}),Object(r.jsx)(k,{children:"Something went wrong..."})]}),Object(r.jsxs)(g,{children:[Object(r.jsx)(I.a,{exact:!0,path:"/",children:function(n){var t=n.match;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(me.a,{in:null!=t,timeout:500,unmountOnExit:!0,children:Object(r.jsx)(ge,{})})})}},"front"),Object(r.jsx)(I.a,{exact:!0,path:"/write",children:function(n){var t=n.match;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(me.a,{in:null!=t,classNames:m,timeout:500,unmountOnExit:!0,children:Object(r.jsx)(O,{children:Object(r.jsx)(Cn,{})})})})}},"back")]})]})})),ve=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,270)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),r(n),i(n),a(n),c(n)}))},we=e(14),ke=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=new Date(n),r=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];return r[e.getMonth()]+" "+e.getDate()+(t?"":", "+e.getFullYear())},ye=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(!n)return"";var t=new Date(n),e=t.getTime(),i=(new Date).getTime(),a=ke(t,!0),c=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),o=t.getHours()<10?"0"+t.getHours():t.getHours(),s=Object(r.jsxs)(ln,{children:[Object(r.jsxs)(bn,{children:[" ",a]})," ",o,":",c]});return i>e?Object(r.jsxs)(pn,{children:["Time is ",Object(r.jsx)(fn,{children:"over"})]}):s},Ae={header:{getDate:ke()}},Se=e(71),ze={list:[],completed:0,rubrics:{business:0,personal:0},completedAmount:0,donePercent:0,totalAmount:0,pagNum:1,isTaskAdded:!1},Ne={fields:[{name:"task",placeholder:"Task*",id:0,type:"text",arrOfValidators:[function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.length?void 0:"Required"}]},{name:"place",placeholder:"Place",id:1,type:"text",arrOfValidators:[]},{name:"time",placeholder:"Time",id:2,type:"datetime-local",arrOfValidators:[]},{name:"notification",placeholder:"Notification",id:3,type:"text",arrOfValidators:[]}]},Pe="ERROR_HANDLER",Te={isAlertShown:!1},Me=e(120),De=Object(we.c)({front:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;return t.type,n},list:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(F.a)(Object(F.a)({},n),{},{list:Object(Se.a)(t.payload.tasks),totalAmount:t.payload.totalAmount,rubrics:t.payload.rubricsAmount,completedAmount:t.payload.completedAmount,donePercent:t.payload.donePercent});case A:var e=n.list.map((function(n){return n.done?n:n.id===t.idDone?n=t.payload.task:n}));return Object(F.a)(Object(F.a)({},n),{},{list:Object(Se.a)(e),completedAmount:t.payload.completedAmount,donePercent:t.payload.donePercent});case S:return Object(F.a)(Object(F.a)({},n),{},{list:Object(Se.a)(t.payload.tasks),totalAmount:t.payload.totalAmount,rubrics:t.payload.rubricsAmount,completedAmount:t.payload.completedAmount,donePercent:t.payload.donePercent});case z:return Object(F.a)(Object(F.a)({},n),{},{pagNum:t.num});default:return n}},back:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return t.type,n},common:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(F.a)(Object(F.a)({},n),{},{isAlertShown:t.isAlertShown});default:return n}},form:Me.a}),Ee=e(128),Ie=e(16),Fe=e.n(Ie),_e=e(18),Ce=e(70),Re=e(127),Be=function(n){var t,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={rubricsAmount:{business:0,personal:0},completedAmount:0,donePercent:0},i=Object(Re.a)(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;"Business"===a.rubric?r.rubricsAmount.business++:r.rubricsAmount.personal++,a.done&&r.completedAmount++}}catch(c){i.e(c)}finally{i.f()}return r.donePercent=Math.round(100*r.completedAmount/n.length)||0,e?{completedAmount:r.completedAmount,donePercent:r.donePercent}:r},Je=function(n,t){return new Promise((function(n,t){n(JSON.parse(localStorage.getItem("tasks"))||[])})).then((function(t){return void 0!==n&&(n={task:n.task,rubric:n.rubric,time:n.time,notification:n.notification||"",place:n.place||"Kiev, Ukraine",id:Math.random(),done:!1},t.push(n)),t=JSON.stringify(t)})).then((function(n){localStorage.setItem("tasks",n),n=JSON.parse(n);for(var e=[],r=4*(t-1);r<=4*t-1&&n[r];r++)e.push(n[r]);return Object(F.a)({tasks:e,totalAmount:n.length},Be(n))}))},Ke=function(n){return new Promise((function(n,t){n(JSON.parse(localStorage.getItem("tasks")))})).then((function(t){var e;t=t.filter((function(t){return t.id===n?(t.done=!0,e=t,t):t}));var r=JSON.stringify(t);return localStorage.setItem("tasks",r),Object(F.a)({task:e},Be(t,!0))}))},He=function(n,t){return new Promise((function(n,t){n(JSON.parse(localStorage.getItem("tasks")))})).then((function(e){e=e.filter((function(t){return t.id!==n})),e=JSON.stringify(e),localStorage.setItem("tasks",e),e=JSON.parse(e);var r=[];4*(t-1)>=e.length&&t--;for(var i=4*(t-1);i<=4*t-1&&e[i];i++)r.push(e[i]);return Object(F.a)({tasks:r,totalAmount:e.length},Be(e))}))},Le=function(){var n=Object(Ce.a)(Fe.a.mark((function n(t,e){var r;return Fe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Je(t,e);case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),Ve=function(){var n=Object(Ce.a)(Fe.a.mark((function n(t){var e;return Fe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Ke(t);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Ye=function(){var n=Object(Ce.a)(Fe.a.mark((function n(t,e){var r;return Fe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,He(t,e);case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),Xe=Fe.a.mark(Ge),Ue=Fe.a.mark(Qe),We=Fe.a.mark(Ze),qe=Fe.a.mark($e);function Ge(){return Fe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_e.d)({type:Pe,isAlertShown:!0});case 2:return n.next=4,Object(_e.c)(2e3);case 4:return n.next=6,Object(_e.d)({type:Pe,isAlertShown:!1});case 6:case"end":return n.stop()}}),Xe)}function Qe(n){var t,e,r;return Fe.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(_e.e)();case 3:return t=i.sent,e=n.num||t.list.pagNum,i.next=7,Object(_e.b)(Le,n.task,e);case 7:return(r=i.sent).tasks.map((function(n){return n.time=ye(n.time),n})),i.next=11,Object(_e.d)({type:y,payload:r});case 11:i.next=17;break;case 13:return i.prev=13,i.t0=i.catch(0),i.next=17,Ge();case 17:case"end":return i.stop()}}),Ue,null,[[0,13]])}function Ze(n){var t;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_e.b)(Ve,n.id);case 3:return(t=e.sent).task.time=ye(t.task.time),e.next=7,Object(_e.d)({type:A,payload:t,idDone:n.id});case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Ge();case 13:case"end":return e.stop()}}),We,null,[[0,9]])}function $e(n){var t,e;return Fe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(_e.e)();case 3:return t=r.sent,r.next=6,Object(_e.b)(Ye,n.id,t.list.pagNum);case 6:return(e=r.sent).tasks.map((function(n){return n.time=ye(n.time),n})),r.next=10,Object(_e.d)({type:S,payload:e});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Ge();case 16:case"end":return r.stop()}}),qe,null,[[0,12]])}var nr=Fe.a.mark(tr);function tr(){return Fe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_e.a)([Object(_e.f)(N,Ze),Object(_e.f)(P,Qe),Object(_e.f)(T,$e)]);case 2:case"end":return n.stop()}}),nr)}var er=tr,rr=Object(Ee.a)(),ir=Object(we.d)(De,Object(we.a)(rr));rr.run(er);var ar=ir;o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(mn.a,{children:Object(r.jsx)(s.a,{store:ar,children:Object(r.jsx)(Oe,{})})})}),document.getElementById("root")),ve()}},[[267,1,2]]]);
//# sourceMappingURL=main.32ea8360.chunk.js.map