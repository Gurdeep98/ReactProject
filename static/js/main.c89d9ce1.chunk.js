(this["webpackJsonpphoto-search"]=this["webpackJsonpphoto-search"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(25),r=c.n(s),i=(c(33),c(15)),o=c(11),j=(c(34),c(26)),l=c.n(j),h=c(61),b=c(28),u=c(62),d=c(27),O=c.n(d),m=c(5);function p(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),j=r[0],d=r[1],p=Object(a.useState)(1),f=Object(o.a)(p,2),g=f[0],x=f[1],v=Object(a.useState)([]),N=Object(o.a)(v,2),S=N[0],k=N[1];return Object(a.useEffect)((function(){var e="https://api.unsplash.com/search/photos?page=".concat(g,"&query=").concat(j,"&client_id=").concat("AHZ8qUDbebRPI4fubsR9H1a409oMm60Igh6VppP7T84");l.a.get(e).then((function(e){k((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.data.results))}))}))}),[j,g]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(h.a,{className:"form-data",children:[Object(m.jsxs)(h.a.Row,{className:"search-form",children:[Object(m.jsx)(b.a,{onChange:function(e){e.preventDefault(),n(e.target.value)},type:"text",name:"photo",placeholder:"Search for Photos",className:"input-bar",value:c}),Object(m.jsx)(u.a,{onClick:function(e){e.preventDefault(),d(c)},className:"search-btn",variant:"dark",children:"Search"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:j}),j?Object(m.jsx)("h4",{children:S.length?"".concat(S.length," images have been found"):"search images"}):"",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"image-load",children:[Object(m.jsx)(O.a,{className:" image-grid",options:{isFitWidth:!0},children:S.map((function(e){return Object(m.jsx)("li",{className:"card-image",children:Object(m.jsx)("img",{src:e.urls.small,width:"385",alt:e.alt_description})},e.id)}))}),j?Object(m.jsx)(u.a,{onClick:function(e){e.preventDefault(),x(g+1)},className:"load-btn",variant:"dark",children:"Load More"}):""]})]})})}var f=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:"React Photo Search"}),Object(m.jsx)(p,{})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),g()}},[[59,1,2]]]);
//# sourceMappingURL=main.c89d9ce1.chunk.js.map