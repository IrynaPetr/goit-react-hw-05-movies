"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{146:function(t,n,r){r.d(n,{e:function(){return l}});var e,a,u,c,s=r(689),i=r(87),o=r(168),p=r(444),f=p.ZP.ul(e||(e=(0,o.Z)(["\n\n"]))),d=p.ZP.li(a||(a=(0,o.Z)(["\n\n"]))),v=p.ZP.h2(u||(u=(0,o.Z)(["\n\n"]))),h=p.ZP.img(c||(c=(0,o.Z)(["\n\n"]))),m=r(184),l=function(t){var n=t.movies,r=(0,s.TH)();return n?(0,m.jsx)(f,{children:n.map((function(t){var n=t.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(t.backdrop_path):"https://img1.wsimg.com/isteam/ip/bc473ead-66a2-452b-8269-b247bfe9772e/oopps.jpg/:/rs=w:1280";return(0,m.jsx)(d,{children:(0,m.jsxs)(i.rU,{to:"/movies/".concat(t.id),state:{from:r},children:[(0,m.jsx)(v,{children:t.title}),(0,m.jsx)(h,{src:n,alt:t.title})]})},t.id)}))}):null}},826:function(t,n,r){r.d(n,{JN:function(){return s},gH:function(){return i},tx:function(){return f},yK:function(){return o},zv:function(){return p}});var e=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"504e286e6bcf42ffab497d18ee6d45da"};var s=function(){var t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day",{params:{page:1}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},820:function(t,n,r){r.r(n),r.d(n,{default:function(){return h}});var e,a,u=r(439),c=r(826),s=r(791),i=r(168),o=r(444),p=o.ZP.div(e||(e=(0,i.Z)(["\n\n"]))),f=o.ZP.h1(a||(a=(0,i.Z)(["\n\n"]))),d=r(146),v=r(184);var h=function(){var t=(0,s.useState)([]),n=(0,u.Z)(t,2),r=n[0],e=n[1];return(0,s.useEffect)((function(){(0,c.JN)().then((function(t){var n=t.results;e(n)}))}),[]),(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{children:"Trending"}),(0,v.jsx)(d.e,{movies:r})]})}}}]);
//# sourceMappingURL=820.7c5c6460.chunk.js.map