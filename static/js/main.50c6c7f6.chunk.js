(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(29),r=n.n(c),i=n(8),o=n(2),l=n(17),j=n.n(l),u=n(30),m=n(11),d=n(12),b=n(14),h=n(13),p=n(31),v=n.n(p),O=(n(56),n(1));var x=function(e){var t=e.id,n=e.title,s=e.summary,a=e.poster,c=e.year,r=e.genres,o=e.loc;return Object(O.jsx)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:c,title:n,summary:s,poster:a,genres:r,loc:o}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:a,alt:n,title:n}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:n}),Object(O.jsx)("h5",{className:"movie__year",children:c}),Object(O.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"...."]}),Object(O.jsxs)("p",{className:"movie__url",children:["URL : ",o.slice(0,50)]})]})]})})},f=(n(63),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(j.a.mark((function t(){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json?sort-by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(x,{id:e.id,title:e.title,summary:e.summary,poster:e.medium_cover_image,year:e.year,genres:e.genres,loc:e.url},e.id)}))})})}}]),n}(a.a.Component));n(64);var y=function(e){return Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},_=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(a.a.Component);n(65);var g=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})};var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{path:"/movie/:id",component:_})]})};r.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.50c6c7f6.chunk.js.map