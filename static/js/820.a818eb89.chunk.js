"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{146:function(n,e,t){t.d(e,{e:function(){return g}});var r,a,i,c,u,s=t(689),o=t(87),p=t(168),f=t(444),d=f.ZP.ul(r||(r=(0,p.Z)(["\ndisplay: flex;\n    flex-wrap: wrap;\n    gap:30px;\n    justify-content: center;\n    align-items: center;\n"]))),l=f.ZP.li(a||(a=(0,p.Z)(["\nwidth: 400px;\nheight: 350px;\n\ndisplay: flex;\ngap: 10px;\nalign-items: flex-end;\njustify-content: space-between;\nborder-right: 2px solid #eee;\nborder-bottom: 2px solid #eee;\nborder-left: 2px solid #eee;\nborder-top: 2px solid #eee;\n&:hover {\n  box-shadow: 12px 15px 12px 6px rgba(80, 43, 34, 0.2);\n}\n"]))),x=f.ZP.h2(i||(i=(0,p.Z)(["\ndisplay: flex;\n\n    justify-content: center;\n    align-items: center;\n"]))),h=f.ZP.img(c||(c=(0,p.Z)(["\nwidth: 400px;\nheight: auto;\n"]))),m=f.ZP.div(u||(u=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap:20px;\nalign-items: center;\n"]))),v=t(184),g=function(n){var e=n.movies,t=(0,s.TH)();return e?(0,v.jsx)(d,{children:e.map((function(n){var e=n.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(n.backdrop_path):"https://img1.wsimg.com/isteam/ip/bc473ead-66a2-452b-8269-b247bfe9772e/oopps.jpg/:/rs=w:1280";return(0,v.jsx)(l,{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:t},children:(0,v.jsxs)(m,{children:[(0,v.jsx)(x,{children:n.title}),(0,v.jsx)(h,{src:e,alt:n.title})]})})},n.id)}))}):null}},826:function(n,e,t){t.d(e,{JN:function(){return u},gH:function(){return s},tx:function(){return f},yK:function(){return o},zv:function(){return p}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"504e286e6bcf42ffab497d18ee6d45da"};var u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day",{params:{page:1}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},820:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,i=t(439),c=t(826),u=t(791),s=t(168),o=t(444),p=o.ZP.div(r||(r=(0,s.Z)(["\npadding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap:20px;\n"]))),f=o.ZP.h1(a||(a=(0,s.Z)(["\n\n"]))),d=t(146),l=t(184);var x=function(){var n=(0,u.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1];return(0,u.useEffect)((function(){(0,c.JN)().then((function(n){var e=n.results;r(e)}))}),[]),(0,l.jsxs)(p,{children:[(0,l.jsx)(f,{children:"Trending"}),(0,l.jsx)(d.e,{movies:t})]})}}}]);
//# sourceMappingURL=820.a818eb89.chunk.js.map