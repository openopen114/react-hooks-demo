(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(48)},25:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(25),n(13)),u=n(14),l=n(17),s=n(15),m=n(18),p=n(2),d=n(4),b=n.n(d),f=n(5),h=n.n(f),v=n(16),j=function(){var e=Object(a.useState)(3),t=Object(p.a)(e,2),n=t[0],c=t[1],o=function(e,t){var n=Object(a.useState)(t),r=Object(p.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(e),u=Object(p.a)(i,2),l=u[0],s=u[1],m=Object(a.useState)(!1),d=Object(p.a)(m,2),f=d[0],j=d[1],w=Object(a.useState)(!1),E=Object(p.a)(w,2),O=E[0],g=E[1],k=function(){var e=Object(v.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("=== fetch data url: ".concat(l," ===")),g(!1),j(!0),e.prev=3,e.next=6,b()(l);case 6:t=e.sent,o(t.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),g(!0);case 13:j(!1);case 14:case"end":return e.stop()}},e,this,[[3,10]])}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){k()},[l]);return{data:c,isLoading:f,isError:O,doGet:function(e,t){s(t),e.preventDefault()}}}("https://api.icndb.com/jokes/random/3",{value:[]}),i=o.data,u=o.isLoading,l=o.isError,s=o.doGet;return r.a.createElement(a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return s(e,"https://api.icndb.com/jokes/random/".concat(n))}},r.a.createElement("input",{type:"number",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Search")),l&&r.a.createElement("div",null,"Something went wrong ..."),u?r.a.createElement("div",null,"Loading ..."):r.a.createElement("ol",null,i.value.map(function(e){return r.a.createElement("li",{key:e.id},e.joke)})))},w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"React Hooks"),r.a.createElement("p",null,"API : https://www.icndb.com/api/"),r.a.createElement(j,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.b203a0e8.chunk.js.map