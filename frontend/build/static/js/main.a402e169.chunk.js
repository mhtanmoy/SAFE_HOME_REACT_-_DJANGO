(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(23),c=a.n(r),s=a(7),i=a(40),o=a(66),l=a(67),d=a(28),u="USER_LOGIN_REQUEST",j="USER_LOGIN_SUCCESS",p="USER_LOGIN_FAIL",b="USER_LOGOUT",h="USER_REGISTER_REQUEST",O="USER_REGISTER_SUCCESS",f="USER_REGISTER_FAIL",x="USER_DETAILS_REQUEST",m="USER_DETAILS_SUCCESS",g="USER_DETAILS_FAIL",v="USER_DETAILS_RESET",y="USER_UPDATE_PROFILE_REQUEST",E="USER_UPDATE_PROFILE_SUCCESS",S="USER_UPDATE_PROFILE_FAIL",I="USER_UPDATE_PROFILE_RESET",T="APARTMENT_LIST_REQUEST",A="APARTMENT_LIST_SUCCESS",_="APARTMENT_LIST_FAIL",C="APARTMENT_LIST_RESET",L="APARTMENT_DETAILS_REQUEST",R="APARTMENT_DETAILS_SUCCESS",w="APARTMENT_DETAILS_FAIL",N="APARTMENT_DELETE_REQUEST",k="APARTMENT_DELETE_SUCCESS",P="APARTMENT_DELETE_FAIL",U="APARTMENT_CREATE_REQUEST",D="APARTMENT_CREATE_SUCCESS",G="APARTMENT_CREATE_FAIL",B="APARTMENT_CREATE_RESET",F="APARTMENT_UPDATE_REQUEST",M="APARTMENT_UPDATE_SUCCESS",Q="APARTMENT_UPDATE_FAIL",K="APARTMENT_UPDATE_RESET",z="BOOKING_CREATE_REQUEST",J="BOOKING_CREATE_SUCCESS",Y="BOOKING_CREATE_FAIL",H="BOOKING_CREATE_RESET",q="BOOKING_DETAILS_REQUEST",$="BOOKING_DETAILS_SUCCESS",W="BOOKING_DETAILS_FAIL",V="BOOKING_PAY_REQUEST",X="BOOKING_PAY_SUCCESS",Z="BOOKING_PAY_FAIL",ee="BOOKING_PAY_RESET",te=Object(i.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0};case j:return{loading:!1,userInfo:t.payload};case p:return{loading:!1,error:t.payload};case b:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case O:return{loading:!1,userInfo:t.payload};case f:return{loading:!1,error:t.payload};case b:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case m:return{loading:!1,user:t.payload};case g:return{loading:!1,error:t.payload};case v:return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case E:return{loading:!1,success:!0,user:t.payload};case S:return{loading:!1,error:t.payload};case I:return{};default:return e}},apartmentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{apartments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0,apartments:[]};case A:return{loading:!1,apartments:t.payload};case _:return{loading:!1,error:t.payload};case C:return{apartments:[]};default:return e}},apartmentDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{apartment:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(d.a)({loading:!0},e);case R:return{loading:!1,apartment:t.payload};case w:return{loading:!1,error:t.payload};default:return e}},apartmentDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case k:return{loading:!1,success:!0};case P:return{loading:!1,error:t.payload};default:return e}},apartmentCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{loading:!0};case D:return{loading:!1,success:!0,apartment:t.payload};case G:return{loading:!1,error:t.payload};case B:return{};default:return e}},apartmentUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{apartment:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return{loading:!0};case M:return{loading:!1,success:!0,apartment:t.payload};case Q:return{loading:!1,error:t.payload};case K:return{apartment:{}};default:return e}},bookingCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{loading:!0};case J:return{loading:!1,success:!0,booking:t.payload};case Y:return{loading:!1,error:t.payload};case H:return{};default:return e}},bookingDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{booking:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case $:return{loading:!1,booking:t.payload};case W:return{loading:!1,error:t.payload};default:return e}},bookingPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{loading:!0};case X:return{loading:!1,success:!0};case Z:return{loading:!1,error:t.payload};case ee:return{};default:return e}}}),ae={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ne=[o.a],re=Object(i.createStore)(te,ae,Object(l.composeWithDevTools)(i.applyMiddleware.apply(void 0,ne))),ce=(a(79),a(80),a(111)),se=a(15),ie=a(9),oe=a(117),le=a(119),de=a(115),ue=a(34),je=a(8),pe=a.n(je),be=a(16),he=a(17),Oe=a.n(he),fe=a(1);var xe=function(){var e=Object(s.c)((function(e){return e.userLogin})).userInfo,t=Object(s.b)();return Object(fe.jsx)("header",{children:Object(fe.jsx)(oe.a,{className:"navbar navbar-expand-lg navbar-dark bg-primary",collapseOnSelect:!0,children:Object(fe.jsxs)(ce.a,{children:[Object(fe.jsx)(ue.LinkContainer,{to:"/",children:Object(fe.jsx)(oe.a.Brand,{children:"SAFE HOME"})}),Object(fe.jsx)(oe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(fe.jsx)(oe.a.Collapse,{id:"basic-navbar-nav",children:Object(fe.jsxs)(le.a,{className:"ml-auto",children:[e?Object(fe.jsxs)(de.a,{title:e.username,id:"username",children:[Object(fe.jsx)(ue.LinkContainer,{to:"/profile",children:Object(fe.jsx)(de.a.Item,{children:"Profile"})}),Object(fe.jsx)(de.a.Item,{onClick:function(){t((function(e){localStorage.removeItem("userInfo"),e({type:b}),e({type:v})}))},children:"Logout"})]}):Object(fe.jsx)(ue.LinkContainer,{to:"/login",children:Object(fe.jsxs)(le.a.Link,{children:[Object(fe.jsx)("i",{className:"fas fa-user"}),"Login"]})}),e&&e.isAdmin&&Object(fe.jsx)(de.a,{title:"Admin",id:"adminname",children:Object(fe.jsx)(ue.LinkContainer,{to:"/admin/userlist",children:Object(fe.jsx)(de.a.Item,{children:"Users"})})})]})})]})})})},me=a(112),ge=a(71);var ve=function(){return Object(fe.jsx)("div",{children:Object(fe.jsx)("footer",{children:Object(fe.jsx)(ce.a,{children:Object(fe.jsx)(me.a,{children:Object(fe.jsx)(ge.a,{className:"text-center py-3",children:"Copyright \xa9 SAFE HOME"})})})})})},ye=a(70),Ee=a(29),Se=a(120),Ie=a(113);var Te=function(){return Object(fe.jsx)(Ie.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block"},children:Object(fe.jsx)("span",{className:"sr-only",children:"Loading..."})})},Ae=a(118);var _e=function(e){var t=e.variant,a=e.children;return Object(fe.jsx)(Ae.a,{variant:t,children:a})},Ce=function(){return function(){var e=Object(be.a)(pe.a.mark((function e(t){var a,n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:T}),e.next=4,Oe.a.get("/api/apartment");case 4:a=e.sent,n=a.data,t({type:A,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:_,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},Le=function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(a){var n,r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:L}),t.next=4,Oe.a.get("/api/apartment/".concat(e));case 4:n=t.sent,r=n.data,a({type:R,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:w,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()};var Re=function(e){var t,a,n=e.apartment,r=Object(s.b)(),c=Object(s.c)((function(e){return e.userLogin})).userInfo,i=Object(s.c)((function(e){return e.apartmentDelete})),o=(i.loading,i.error,i.success,Object(ie.k)(),function(e){window.confirm("Are you sure you want to this apartment?")&&r(function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(a,n){var r,c,s;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:N}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,Oe.a.delete("/api/apartment/delete/".concat(e),s);case 6:t.sent.data,a({type:k}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:P,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(e))});return Object(fe.jsx)("div",{children:Object(fe.jsxs)(Se.a,{className:"my-3 p-3 rounded",children:[Object(fe.jsx)(se.Link,{to:"/apartment/".concat(n.id,"/view"),children:Object(fe.jsx)(Se.a.Img,{src:n.photo})}),Object(fe.jsxs)(Se.a.Body,{children:[Object(fe.jsx)(se.Link,{to:"/apartment/".concat(n.id,"/view"),children:Object(fe.jsx)(Se.a.Title,{as:"div",children:Object(fe.jsx)("strong",{children:n.title})})}),Object(fe.jsxs)(Se.a.Text,{as:"h3",children:["$",n.price]}),c&&c.isAdmin&&Object(fe.jsxs)(Se.a.Text,{as:"h3",children:[Object(fe.jsx)(ue.LinkContainer,{to:"/apartment/".concat(n.id,"/edit"),children:Object(fe.jsx)(ye.a,(t={variant:"dark",className:"btn-sm"},Object(Ee.a)(t,"className","my-1"),Object(Ee.a)(t,"children",Object(fe.jsx)("i",{className:"fas fa-edit"})),t))}),Object(fe.jsx)(ye.a,(a={variant:"danger",className:"btn-sm"},Object(Ee.a)(a,"className","my-1"),Object(Ee.a)(a,"onClick",(function(){return o(n.id)})),Object(Ee.a)(a,"children",Object(fe.jsx)("i",{className:"fas fa-trash"})),a))]})]})]})})};var we=function(e){var t=e.history,a=Object(s.c)((function(e){return e.userLogin})).userInfo,r=Object(s.b)(),c=Object(s.c)((function(e){return e.apartmentList})),i=c.error,o=c.loading,l=c.apartments,d=Object(s.c)((function(e){return e.apartmentDelete})),u=(d.loading,d.error,d.success),j=Object(s.c)((function(e){return e.apartmentCreate})),p=(j.loading,j.error,j.success),b=j.apartment;return Object(n.useEffect)((function(){u?(r({type:C}),r(Ce())):r(Ce()),p&&(r({type:B}),t.push("/apartment/".concat(b.id,"/edit")))}),[r,t,p,u]),Object(fe.jsxs)("div",{children:[a&&a.isAdmin&&Object(fe.jsxs)(ye.a,{className:"my-3",onClick:function(){r(function(){var e=Object(be.a)(pe.a.mark((function e(t,a){var n,r,c,s,i;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:U}),n=a(),r=n.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},e.next=6,Oe.a.post("/api/apartment/create",{},c);case 6:s=e.sent,i=s.data,t({type:D,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:G,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}())},children:[Object(fe.jsx)("i",{className:"fas fa-plus"})," Create Apartment"]}),Object(fe.jsx)("h1",{children:"Apartments"}),o?Object(fe.jsx)(Te,{}):i?Object(fe.jsx)(_e,{variant:"secondary",children:i}):Object(fe.jsx)("div",{children:Object(fe.jsx)(me.a,{children:l.map((function(e){return Object(fe.jsx)(ge.a,{sm:12,md:6,lg:4,xl:3,children:Object(fe.jsx)(Re,{apartment:e,userInfo:a})},e.id)}))})})]})},Ne=a(11),ke=a(116);var Pe=function(e){var t=e.history,a=Object(n.useState)(""),r=Object(Ne.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(""),l=Object(Ne.a)(o,2),d=l[0],u=l[1],p=Object(n.useState)(""),b=Object(Ne.a)(p,2),h=b[0],O=b[1],f=Object(n.useState)(""),v=Object(Ne.a)(f,2),T=v[0],A=v[1],_=Object(s.b)(),C=Object(s.c)((function(e){return e.userDetails})),L=C.error,R=C.loading,w=C.user,N=Object(s.c)((function(e){return e.userLogin})).userInfo,k=Object(s.c)((function(e){return e.userUpdateProfile})).success;return Object(n.useEffect)((function(){var e;N?w&&w.email&&!k&&N.id===w.id?i(w.email):(_({type:I}),_((e="profile",function(){var t=Object(be.a)(pe.a.mark((function t(a,n){var r,c,s,i,o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:x}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,Oe.a.get("/api/users/".concat(e),s);case 6:i=t.sent,o=i.data,a({type:m,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:g,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()))):t.push("/login")}),[_,t,N,w,k]),Object(fe.jsx)("div",{children:Object(fe.jsx)(me.a,{children:Object(fe.jsxs)(ge.a,{md:10,className:"justify-content-md-center my-5",children:[Object(fe.jsx)("h2",{children:"Update Profile"}),T&&Object(fe.jsx)(_e,{variant:"danger",children:T}),L&&Object(fe.jsx)(_e,{variant:"danger",children:L}),R&&Object(fe.jsx)(Te,{}),Object(fe.jsxs)(ke.a,{onSubmit:function(e){e.preventDefault(),d!=h?A("Password do not match"):(_(function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(a,n){var r,c,s,i,o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:y}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,Oe.a.put("/api/users/profile/update",e,s);case 6:i=t.sent,o=i.data,a({type:E,payload:o}),a({type:j,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:S,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,a){return t.apply(this,arguments)}}()}({id:w.id,email:c,password:d})),A(""),t.push("/profile"))},children:[Object(fe.jsxs)(ke.a.Group,{controlId:"email",className:"my-3",children:[Object(fe.jsx)(ke.a.Label,{children:"Email Address"}),Object(fe.jsx)(ke.a.Control,{type:"email",placeholder:"Enter Email",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"password",className:"my-3",children:[Object(fe.jsx)(ke.a.Label,{children:"Password"}),Object(fe.jsx)(ke.a.Control,{type:"password",placeholder:"Enter Password",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"password",className:"my-3",children:[Object(fe.jsx)(ke.a.Label,{children:"Re-Type Password"}),Object(fe.jsx)(ke.a.Control,{type:"password",placeholder:"Confirm Password",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(fe.jsx)(ye.a,{type:"submit",variant:"primary",className:"my-3",children:"Update"})]})]})})})};var Ue=function(e){var t=e.children;return Object(fe.jsx)(ce.a,{children:Object(fe.jsx)(me.a,{className:"justify-content-md-center text-left",children:Object(fe.jsx)(ge.a,{xs:12,md:6,children:t})})})};var De=function(e){var t=e.location,a=e.history,r=Object(n.useState)(""),c=Object(Ne.a)(r,2),i=c[0],o=c[1],l=Object(n.useState)(""),d=Object(Ne.a)(l,2),b=d[0],h=d[1],O=Object(s.b)(),f=t.search?t.search.split("=")[1]:"/",x=Object(s.c)((function(e){return e.userLogin})),m=x.error,g=x.loading,v=x.userInfo;return Object(n.useEffect)((function(){v&&a.push(f)}),[a,v,f]),Object(fe.jsxs)(Ue,{children:[Object(fe.jsx)("h1",{children:"Sign In"}),m&&Object(fe.jsx)(_e,{variant:"danger",children:m}),g&&Object(fe.jsx)(Te,{}),Object(fe.jsxs)(ke.a,{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var a=Object(be.a)(pe.a.mark((function a(n){var r,c,s;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:u}),r={headers:{"Content-type":"application/json"}},a.next=5,Oe.a.post("/api/users/login",{username:e,password:t},r);case 5:c=a.sent,s=c.data,n({type:j,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:p,payload:a.t0.response&&a.t0.response.data.detail?a.t0.response.data.detail:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(i,b))},children:[Object(fe.jsxs)(ke.a.Group,{controlId:"email",children:[Object(fe.jsx)(ke.a.Label,{children:"Email Address"}),Object(fe.jsx)(ke.a.Control,{type:"email",placeholder:"Enter Email",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"password",children:[Object(fe.jsx)(ke.a.Label,{children:"Password"}),Object(fe.jsx)(ke.a.Control,{type:"password",placeholder:"Enter Password",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(fe.jsx)(ye.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object(fe.jsx)(me.a,{className:"py-3",children:Object(fe.jsxs)(ge.a,{children:["New Customer? ",Object(fe.jsx)(se.Link,{to:f?"/register?redirect=".concat(f):"/register",children:"Register"})]})})]})};var Ge=function(e){var t=e.location,a=e.history,r=Object(n.useState)(""),c=Object(Ne.a)(r,2),i=c[0],o=c[1],l=Object(n.useState)(""),d=Object(Ne.a)(l,2),u=d[0],p=d[1],b=Object(n.useState)(""),x=Object(Ne.a)(b,2),m=x[0],g=x[1],v=Object(n.useState)(""),y=Object(Ne.a)(v,2),E=y[0],S=y[1],I=Object(s.b)(),T=t.search?t.search.split("=")[1]:"/",A=Object(s.c)((function(e){return e.userRegister})),_=A.error,C=A.loading,L=A.userInfo;return Object(n.useEffect)((function(){L&&a.push(T)}),[a,L,T]),Object(fe.jsxs)(Ue,{children:[Object(fe.jsx)("h1",{children:"Register"}),E&&Object(fe.jsx)(_e,{variant:"danger",children:E}),_&&Object(fe.jsx)(_e,{variant:"danger",children:_}),C&&Object(fe.jsx)(Te,{}),Object(fe.jsxs)(ke.a,{onSubmit:function(e){e.preventDefault(),u!=m?S("Password did not match"):I(function(e,t){return function(){var a=Object(be.a)(pe.a.mark((function a(n){var r,c,s;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:h}),r={headers:{"Content-type":"application/json"}},a.next=5,Oe.a.post("/api/users/register",{email:e,password:t},r);case 5:c=a.sent,s=c.data,n({type:O,payload:s}),n({type:j,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),n({type:f,payload:a.t0.response&&a.t0.response.data.detail?a.t0.response.data.detail:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}(i,u))},children:[Object(fe.jsxs)(ke.a.Group,{controlId:"email",className:"my-3",children:[Object(fe.jsx)(ke.a.Label,{children:"Email Address"}),Object(fe.jsx)(ke.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"password",className:"my-3",children:[Object(fe.jsx)(ke.a.Label,{children:"Password"}),Object(fe.jsx)(ke.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:u,onChange:function(e){return p(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"confirmpassword",className:"my-3",children:[Object(fe.jsx)(ke.a.Label,{children:"Confirm Password"}),Object(fe.jsx)(ke.a.Control,{required:!0,type:"password",placeholder:"Confirm Password",value:m,onChange:function(e){return g(e.target.value)}})]}),Object(fe.jsx)(ye.a,{type:"submit",variant:"primary",className:"my-3",children:"Register"})]}),Object(fe.jsx)(me.a,{className:"py-3",children:Object(fe.jsxs)(ge.a,{children:["Have a account? ",Object(fe.jsx)(se.Link,{to:T?"/login?redirect=".concat(T):"/login",children:"Sign In"})]})})]})};var Be=function(e){var t=e.history,a=e.match.params.id,r=Object(n.useState)(""),c=Object(Ne.a)(r,2),i=c[0],o=c[1],l=Object(n.useState)(0),d=Object(Ne.a)(l,2),u=d[0],j=d[1],p=Object(n.useState)(!0),b=Object(Ne.a)(p,2),h=b[0],O=b[1],f=Object(n.useState)(""),x=Object(Ne.a)(f,2),m=x[0],g=x[1],v=Object(n.useState)(""),y=Object(Ne.a)(v,2),E=y[0],S=y[1],I=Object(n.useState)(!1),T=Object(Ne.a)(I,2),A=T[0],_=T[1],C=Object(s.b)(),L=Object(s.c)((function(e){return e.apartmentDetails})),w=L.error,N=L.loading,k=L.apartment,P=Object(s.c)((function(e){return e.apartmentUpdate})),U=P.error,D=P.loading,G=P.success;Object(n.useEffect)((function(){G?(C({type:K}),C({type:B}),t.push("/")):k.title&&k.id===Number(a)?(o(k.title),j(k.price),g(k.photo),O(k.availability),S(k.details)):C(Le(a))}),[k,a,t,C,G]);var z=function(){var e=Object(be.a)(pe.a.mark((function e(t){var n,r,c,s,i;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],(r=new FormData).append("image",n),r.append("apartment_id",a),_(!0),e.prev=5,c={headers:{"Content-Type":"multipart/form-data"}},e.next=9,Oe.a.post("/api/apartment/image/update",r,c);case 9:s=e.sent,i=s.data,g(i),_(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),_(!1);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(fe.jsxs)("div",{children:[Object(fe.jsx)(se.Link,{to:"/",children:" Go Back"}),Object(fe.jsxs)(Ue,{children:[Object(fe.jsx)("h1",{children:"Edit Apartment"}),U&&Object(fe.jsx)(_e,{variant:"danger",children:U}),D&&Object(fe.jsx)(Te,{}),N?Object(fe.jsx)(Te,{}):w?Object(fe.jsx)(_e,{variant:"danger",children:w}):Object(fe.jsxs)(ke.a,{onSubmit:function(e){e.preventDefault(),C(function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(a,n){var r,c,s,i,o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:F}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,Oe.a.put("/api/apartment/update/".concat(e.id),e,s);case 6:i=t.sent,o=i.data,a({type:M,payload:o}),a({type:R,payload:o}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:Q,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()}({id:a,title:i,price:u,photo:m,availability:h,details:E}))},children:[Object(fe.jsxs)(ke.a.Group,{controlId:"title",children:[Object(fe.jsx)(ke.a.Label,{children:"Title"}),Object(fe.jsx)(ke.a.Control,{type:"text",placeholder:"Enter Title",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"photo",children:[Object(fe.jsx)(ke.a.Label,{children:"Photo"}),Object(fe.jsx)(ke.a.Control,{type:"text",placeholder:"Enter Photo",value:m,onChange:function(e){return g(e.target.value)}}),Object(fe.jsx)(ke.a.File,{id:"image-file",label:"Choose File",custom:!0,onChange:z}),A&&Object(fe.jsx)(Te,{})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"Price",children:[Object(fe.jsx)(ke.a.Label,{children:"Price"}),Object(fe.jsx)(ke.a.Control,{type:"number",placeholder:"Enter Price",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"Details",children:[Object(fe.jsx)(ke.a.Label,{children:"Details"}),Object(fe.jsx)(ke.a.Control,{type:"text",placeholder:"Enter Details",value:E,onChange:function(e){return S(e.target.value)}})]}),Object(fe.jsxs)(ke.a.Group,{controlId:"availability",children:[Object(fe.jsx)(ke.a.Label,{children:"Availability"}),Object(fe.jsx)(ke.a.Check,{type:"checkbox",Label:"Availability",checked:h,onChange:function(e){return O(e.target.checked)}})]}),Object(fe.jsx)(ye.a,{type:"submit",variant:"primary",children:"Update"})]})]})]})},Fe=a(114),Me=a(121);var Qe=function(e){var t=e.match,a=(e.history,Object(s.b)()),r=Object(s.c)((function(e){return e.apartmentDetails})),c=r.error,i=r.loading,o=r.apartment,l=(Object(s.c)((function(e){return e.userLogin})).userInfo,Object(s.c)((function(e){return e.bookingCreate}))),d=(l.error,l.loading,l.booking);return Object(n.useEffect)((function(){a(Le(t.params.id))}),[a,t]),Object(fe.jsxs)("div",{children:[Object(fe.jsx)(se.Link,{to:"/",className:"btn btn-light my-3",children:"Go Back"}),i?Object(fe.jsx)(Te,{}):c?Object(fe.jsx)(_e,{variant:"secondary",children:c}):Object(fe.jsx)("div",{children:Object(fe.jsxs)(me.a,{children:[Object(fe.jsx)(ge.a,{md:6,children:Object(fe.jsx)(Fe.a,{src:o.photo,alt:o.title,fluid:!0})}),Object(fe.jsx)(ge.a,{md:3,children:Object(fe.jsxs)(Me.a,{variant:"flush",children:[Object(fe.jsx)(Me.a.Item,{children:Object(fe.jsx)("h3",{children:o.title})}),Object(fe.jsxs)(Me.a.Item,{children:["price : $",o.price]}),Object(fe.jsxs)(Me.a.Item,{children:["Details : ",o.details]})]})}),Object(fe.jsx)(ge.a,{md:3,children:Object(fe.jsx)(Se.a,{children:Object(fe.jsxs)(Me.a,{variant:"flush",children:[Object(fe.jsx)(Me.a.Item,{children:Object(fe.jsxs)(me.a,{children:[Object(fe.jsx)(ge.a,{children:"Price : "}),Object(fe.jsx)(ge.a,{children:Object(fe.jsxs)("strong",{children:["$",o.price]})})]})}),Object(fe.jsx)(Me.a.Item,{children:Object(fe.jsxs)(me.a,{children:[Object(fe.jsx)(ge.a,{children:"Status: "}),Object(fe.jsx)(ge.a,{children:o.availability?"Available":"Not Available Right Now"})]})}),Object(fe.jsx)(Me.a.Item,{children:Object(fe.jsx)(ye.a,{onClick:function(){a(function(e){return function(){var t=Object(be.a)(pe.a.mark((function t(a,n){var r,c,s,i,o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:z}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,Oe.a.post("/api/booking/create",e,s);case 6:i=t.sent,o=i.data,a({type:J,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:Y,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}({apartment_id:o.id}))},className:"btn-block",disabled:!o.availability,type:"button",children:"Booking "})}),c&&Object(fe.jsx)(_e,{variant:"danger",children:c}),i&&Object(fe.jsx)(Te,{}),d&&Object(fe.jsxs)(_e,{variant:"primary",children:["Your Booking id is ",d.id,". We will contact you through your e-mail with-in 24 hours. Stay safe."]})]})})})]})})]})};var Ke=function(){return Object(fe.jsxs)(se.HashRouter,{children:[Object(fe.jsx)(xe,{}),Object(fe.jsx)("main",{className:"py-3",children:Object(fe.jsxs)(ce.a,{children:[Object(fe.jsx)(ie.d,{path:"/",component:we,exact:!0}),Object(fe.jsx)(ie.d,{path:"/login",component:De}),Object(fe.jsx)(ie.d,{path:"/register",component:Ge}),Object(fe.jsx)(ie.d,{path:"/apartment/:id/edit",component:Be}),Object(fe.jsx)(ie.d,{path:"/profile",component:Pe}),Object(fe.jsx)(ie.d,{path:"/apartment/:id/view",component:Qe})]})}),Object(fe.jsx)(ve,{})]})},ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};c.a.render(Object(fe.jsx)(s.a,{store:re,children:Object(fe.jsx)(Ke,{})}),document.getElementById("root")),ze()},79:function(e,t,a){},80:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.a402e169.chunk.js.map