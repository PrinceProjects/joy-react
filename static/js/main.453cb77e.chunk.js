(this["webpackJsonpjoke-reader"]=this["webpackJsonpjoke-reader"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/b1.b0849a61.png"},30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(35),a(7)),s=a(1),u=a(10),i=function(e){return e.open?(e.open&&(document.body.style.backgroundColor="rgba(0,0,0,0.2)"),r.a.createElement("div",{className:"side-nav"},r.a.createElement(l.b,{className:"nav-link",to:"/"}," Home "),r.a.createElement(l.b,{className:"nav-link",to:"/read"},"Read"),r.a.createElement(l.b,{className:"nav-link",to:"/favorites"}," Favorites "))):(document.body.style.backgroundColor="rgba(251,251,251,1)",null)},m=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"burger-icon",onClick:function(){return n(!a)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement(i,{open:a}))},d=function(){return r.a.createElement("div",{className:"top-nav"},r.a.createElement("span",{className:"lead"},"JOKE READER"))};var E=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(m,null),r.a.createElement(d,null))},v=a(28),p={zIndex:"1",overflow:"hidden",backgroundImage:"url(".concat(a.n(v).a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",opacity:"0.7"};var b=function(){return r.a.createElement("div",{style:p},r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"main-heading"},"Welcome"),r.a.createElement("p",{className:"home-content"},"Are you bored and want to get refreshed ?",r.a.createElement("br",null)," Or, just want to read some funny jokes ?",r.a.createElement("br",null),r.a.createElement("br",null)," Then you have come at the right place"),r.a.createElement(l.b,{className:"read-link",to:"/read"},"Read"))))};var f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Your favorites"))},h=a(15),k=a.n(h),g=a(29),N=a(12),j=a.n(N),y=function(e){return r.a.createElement("div",{className:"joke-container"},r.a.createElement("div",{className:"setup"}," Setup : ",e.jokes.setup),r.a.createElement("br",null),r.a.createElement("div",{className:"delivery"}," Delivery : ",e.jokes.delivery))},w=function(e){return r.a.createElement("div",{className:"options"},r.a.createElement("button",{className:"next-btn",onClick:function(){return e.setCount(e.count+1)}},"Next"))};var x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),l=Object(u.a)(o,2),s=l[0],i=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(g.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://sv443.net/jokeapi/v2/joke/Any?type=twopart");case 2:return t=e.sent,e.next=5,t.data;case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement("div",{className:"container"},r.a.createElement(y,{jokes:a}),r.a.createElement(w,{count:s,setCount:i}))};a(59);var O=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(E,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:b,exact:!0}),r.a.createElement(s.a,{path:"/read",component:x}),r.a.createElement(s.a,{path:"/favorites",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.453cb77e.chunk.js.map