(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),o=(a(65),a(66),a(105)),u=a(10),i=a(21),l=(a(67),a(15)),m=a(3),p=a.n(m),f=a(7),d=a(8),b=a(34),v=a.n(b);v.a.interceptors.response.use(null,function(e){e.response&&e.response.status>=400&&e.response.status<500||u.b.error(e.message);var t=e.response.data.msg||e.message;return u.b.error(t),Promise.reject(e)});var E=v.a.create({withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}}),w={get:E.get,post:E.post,delete:E.delete,put:E.put,all:E.all},h="/api/auth",x="/api/me",g="/api/signout";function O(e){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post(h,t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get(x));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post(g));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e){window.localStorage.userId=e._id,window.localStorage.userEmail=e.email,window.localStorage.userIsAdmin=e.isAdmin}var q=r.a.createContext(),I=function(e){var t=e.children,a=(e.history,Object(n.useState)(null)),c=Object(d.a)(a,2),s=c[0],o=c[1],u=Object(n.useState)([]),i=Object(d.a)(u,2),l=i[0],m=i[1],b=Object(n.useState)(!1),v=Object(d.a)(b,2),E=v[0],w=v[1],h=function(){var e=Object(f.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:a=e.sent,(n=a.data.user)&&(N(n),o(n),window.location.href="/");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(q.Provider,{value:{onSubmit:h,currUser:s,setCurrUser:o,setQuestions:m,questions:l,isAdmin:E,setIsAdmin:w}},t)},A=a(103),P=function(){var e=Object(n.useContext)(q).currUser;return r.a.createElement("header",{className:"bg-dark p-5 mb-5"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 align-items-center"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h1",{className:"display-4 text-white mt-5 mb-2"},"ABC Limited"),r.a.createElement("p",{className:"lead mb-5 text-white-50"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam."),e&&r.a.createElement(A.a,{as:l.b,to:"/questions",variant:"outline-light",className:"outline text-black"},"Visit Out Questions page")))))},_=a(104),U=a(57),L=a(106),B=a(56),Q=function(e){var t=e.onSubmit,a=Object(B.a)(),n=a.handleSubmit,c=a.register,s=a.errors;return r.a.createElement(L.a,{onSubmit:n(t)},r.a.createElement(L.a.Group,{controlId:"formBasicEmail"},r.a.createElement(L.a.Control,{name:"email",placeholder:"Enter Email",ref:c({required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})}),s.email&&s.email.message),r.a.createElement(L.a.Group,{controlId:"formBasicPassword"},r.a.createElement(L.a.Control,{placeholder:"Enter Password",type:"password",name:"password",ref:c({required:"Required",maxLength:10,minLength:3})}),s.password&&"required"===s.password.type&&"Your input is required",s.password&&"maxLength"===s.password.type&&"Your input exceeded max character if 10",s.password&&"minLength"===s.password.type&&"Your input needs to be more than 2 characters"),r.a.createElement(_.a,{className:"justify-content-md-center"},r.a.createElement(U.a,{xs:12},r.a.createElement(A.a,{style:{width:"100%"},variant:"dark",type:"submit"},"Submit"))))},D=function(){var e=Object(n.useContext)(q),t=e.onSubmit,a=e.currUser;return Object(n.useEffect)(function(){a&&Object(u.b)("Successfully Signed In!")},[a]),r.a.createElement(_.a,{className:"justify-content-md-center mt-5"},r.a.createElement(U.a,{xs:12},r.a.createElement("h2",{className:"text-center mb-5"},"Login")),r.a.createElement(U.a,{lg:4,xs:12},r.a.createElement(Q,{onSubmit:t})))},R="/api/users";function Y(e){return G.apply(this,arguments)}function G(){return(G=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post(R,t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function H(e){return K.apply(this,arguments)}function K(){return(K=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get(R,t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var T=function(e){var t=e.history,a=Object(n.useContext)(q),c=a.currUser,s=a.setCurrUser;Object(n.useEffect)(function(){c&&t.push("/")},[c,t]);var o=function(){var e=Object(f.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:a=e.sent,(n=a.data)&&(Object(u.b)("User registration successful!"),s(n.user));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(_.a,{className:"justify-content-md-center mt-5"},r.a.createElement(U.a,{xs:12},r.a.createElement("h2",{className:"text-center mb-5"},"User Registration")),r.a.createElement(U.a,{xs:4},r.a.createElement(Q,{onSubmit:o})))},Z=a(109),F=a(107),J=function(){var e=Object(n.useContext)(q),t=e.currUser,a=e.setCurrUser,c=e.isAdmin,s=e.setIsAdmin,o=function(){var e=Object(f.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,(n=t.data)&&(Object(u.b)(n.msg),a(null),window.localStorage.userId="",window.localStorage.userEmail="",window.localStorage.userIsAdmin="",window.location.href="/login");case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){Object(f.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,a=t.data,s(a.isAdmin),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("no login",e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))()},[s]),r.a.createElement(Z.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(Z.a.Brand,{to:"/",as:l.b},"ABC Limited"),r.a.createElement(Z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Z.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(F.a,{className:"ml-auto"},r.a.createElement(F.a.Item,null,r.a.createElement(l.c,{exact:!0,activeClassName:"active",className:"nav-link mr-3",to:"/"},"Home")),t&&r.a.createElement(F.a.Item,null,r.a.createElement(l.c,{exact:!0,activeClassName:"active",className:"nav-link mr-3",to:"/questions"},"Questions")),c&&r.a.createElement(F.a.Item,null,r.a.createElement(l.c,{exact:!0,activeClassName:"active",className:"nav-link mr-3",to:"/users"},"Users")),!t&&r.a.createElement(F.a.Item,null,r.a.createElement(l.c,{exact:!0,activeClassName:"active",className:"nav-link mr-3",to:"/login"},"Login")),!t&&r.a.createElement(F.a.Item,null,r.a.createElement(l.c,{exact:!0,activeClassName:"active",className:"nav-link",to:"/register"},"Register")),t&&r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Link,{onClick:o},"Sign Out")))))},W=a(20),$=a(16),V="/api/questions";function z(e){return w.post(V,e)}function M(){return X.apply(this,arguments)}function X(){return(X=Object(f.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get(V));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.delete(V+"/".concat(t)));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ae=function(e){var t=e.question,a=e.index,c=e.admin,s=e.state,o=e.handleChange,i=Object(n.useContext)(q),l=i.questions,m=i.setQuestions,d=function(){var e=Object(f.a)(p.a.mark(function e(t){var a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(t);case 2:a=e.sent,n=a.data._id,r=Object(W.a)(l).filter(function(e){return e._id!==n}),m(r),Object(u.b)("Question Deleted!");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(_.a,{className:"justify-content-center align-items-center mb-3"},r.a.createElement(U.a,{lg:c?10:12,xs:12},r.a.createElement(L.a.Label,null,a+1+". "+t.text),!c&&r.a.createElement(L.a.Control,{value:s[t._id],name:t._id,onChange:o,type:"text",placeholder:"Enter answer"})),c&&r.a.createElement(U.a,{lg:2,xs:12,className:"mb-2"},r.a.createElement(A.a,{style:{width:"100%"},onClick:function(){d(t._id)},variant:"danger"},"Delete")))},ne="/api/answers";function re(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post(ne+"/useranswer",t));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach(function(t){Object($.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ue=function(e){var t=e.history,a=Object(n.useContext)(q),c=a.questions,s=a.setQuestions,o=a.currUser,i=a.setIsAdmin,l=a.isAdmin,m=Object(n.useState)(""),b=Object(d.a)(m,2),v=b[0],E=b[1],h=Object(n.useState)({}),x=Object(d.a)(h,2),g=x[0],O=x[1];function j(e){var t=e.target,a=t.name,n=t.value;O(function(e){return oe({},e,Object($.a)({},a,n))})}Object(n.useEffect)(function(){Object(f.a)(p.a.mark(function e(){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:a=e.sent,n=a.data,i(n.isAdmin),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("no login",e.t0),t.push("/");case 12:case"end":return e.stop()}},e,null,[[0,8]])}))()},[t,i]),Object(n.useEffect)(function(){Object(f.a)(p.a.mark(function e(){var t,a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,(a=t.data)&&(n=window.localStorage.userId,(r=(r=Object(W.a)(a.questions)).map(function(e){var t=e.answers.filter(function(e){return e.author._id===n});return oe({},e,{answers:t})})).forEach(function(e){e.answers.forEach(function(e){O(function(t){return oe({},t,Object($.a)({},e.question,e.text))})})}),s(r));case 5:case"end":return e.stop()}},e)}))()},[s]);var k=function(){var e=Object(f.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,z({text:v});case 3:a=e.sent,(n=a.data)&&(E(""),s(function(e){return[n].concat(Object(W.a)(e))}),Object(u.b)("New Question Created!"));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(p.a.mark(function e(t){var a,n,r,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n in t.preventDefault(),a=[],g)r={text:g[n],author:o._id,question:n},a.push(r);return c=a.map(function(e){return t=e,w.post(ne,t);var t}),e.next=6,Promise.all(c);case 6:e.sent&&Object(u.b)("Submission Successful!");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,null,l&&r.a.createElement(U.a,{xs:12},r.a.createElement(L.a,{onSubmit:function(e){k(e)}},r.a.createElement(_.a,null,r.a.createElement(U.a,{lg:10,xs:12},r.a.createElement(L.a.Group,{controlId:"formBasicEmail"},r.a.createElement(L.a.Control,{value:v,onChange:function(e){E(e.target.value)},type:"text",placeholder:"Enter Your Question"}))),r.a.createElement(U.a,{lg:2,xs:12},r.a.createElement(A.a,{style:{width:"100%"},variant:"dark",type:"submit"},"Submit"))))),r.a.createElement(U.a,{xs:12,className:"mt-5"},r.a.createElement(L.a,{onSubmit:S},c.map(function(e,t){return r.a.createElement(ae,{handleChange:j,state:g,setState:O,key:t,index:t,admin:l,question:e})}),!l&&r.a.createElement(A.a,{className:"mt-2",type:"submit",variant:"dark"},"Submit")))))},ie=function(e){var t=e.children,a=Object(n.useContext)(q),c=a.setCurrUser,s=a.setIsAdmin;return Object(n.useEffect)(function(){Object(f.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(window.localStorage.userId&&window.localStorage.userEmail&&window.localStorage.userIsAdmin)){e.next=4;break}c({_id:window.localStorage.userId,email:window.localStorage.userEmail,isAdmin:window.localStorage.userIsAdmin}),e.next=9;break;case 4:return e.next=6,y();case 6:t=e.sent,(a=t.data)&&(c(a),s(a.isAdmin));case 9:case"end":return e.stop()}},e)}))()},[c,s]),r.a.createElement(r.a.Fragment,null,t," ")},le=a(108),me=a(110),pe=function(e){var t=e.ques,a=e.user,c=Object(n.useState)(""),s=Object(d.a)(c,2),o=s[0],u=s[1];return Object(n.useEffect)(function(){Object(f.a)(p.a.mark(function e(){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={questionId:t._id,userId:a._id},e.next=3,re(n);case 3:(r=e.sent)&&r.data?u(r.data.text):u("No answer yet");case 5:case"end":return e.stop()}},e)}))()},[t,a]),r.a.createElement(_.a,null,r.a.createElement(U.a,{xs:12},r.a.createElement("p",{className:"lead"},r.a.createElement("em",null," ",t.text?t.text:"loading..."," ")),r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},o||"loading..."))))},fe=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(q),o=s.questions,u=s.setQuestions;return Object(n.useEffect)(function(){Object(f.a)(p.a.mark(function e(){var t,a,n,r,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[H(),M()],e.next=3,Promise.all(t);case 3:a=e.sent,n=Object(d.a)(a,2),r=n[0],s=n[1],r&&c(r.data.users),s&&u(s.data.questions);case 9:case"end":return e.stop()}},e)}))()},[u]),r.a.createElement(_.a,null,r.a.createElement(U.a,{xs:12},r.a.createElement(le.a,{defaultActiveKey:"0"},a.map(function(e,t){return r.a.createElement(me.a,{key:e._id},r.a.createElement(me.a.Header,{style:{cursor:"pointer"}},r.a.createElement(le.a.Toggle,{as:"h4",eventKey:t.toString()},"\u263a ",e.email)),r.a.createElement(le.a.Collapse,{eventKey:t.toString()},r.a.createElement(me.a.Body,null,o&&o.map(function(t){return r.a.createElement(pe,{user:e,key:t._id,ques:t})}))))}))))},de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,function(e){var t=e.history;return r.a.createElement(I,{history:t},r.a.createElement(ie,null,r.a.createElement(u.a,{position:"top-center",pauseOnHover:!0,closeOnClick:!0,autoClose:2e3}),r.a.createElement(J,null),r.a.createElement(o.a,{className:"py-5"},r.a.createElement(i.a,{exact:!0,path:"/",component:P}),r.a.createElement(i.a,{exact:!0,path:"/login",component:D}),r.a.createElement(i.a,{exact:!0,path:"/users",component:fe}),r.a.createElement(i.a,{exact:!0,path:"/questions",component:ue}),r.a.createElement(i.a,{exact:!0,path:"/register",component:T}))))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l.a,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,a){e.exports=a(101)},65:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.451ba99b.chunk.js.map