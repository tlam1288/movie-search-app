(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(4),o=c.n(i),a=(c(13),c(8)),r=c(6),l=(c(14),c(15),c(2)),d=(c(16),c(1));var j=function(e){return Object(d.jsx)(d.Fragment,{children:e.movies.map((function(t,c){return Object(d.jsxs)("div",{className:" justify-content-start m-3 ",children:[Object(d.jsx)("img",{src:t.Poster,alt:"movie poster",className:"poster"}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("h5",{children:t.Title}),Object(d.jsx)("h5",{children:t.Year}),Object(d.jsx)("button",{class:"btn btn-primary btn-lg",onClick:function(){return e.handleClick(t)},children:e.status?"Add":"Delete"})]})]},c)}))})};var u=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),u=o[0],b=o[1],m=Object(n.useState)([]),h=Object(r.a)(m,2),O=h[0],f=h[1];function v(e){localStorage.setItem("nominated-movies",JSON.stringify(e))}return Object(n.useEffect)((function(){!function(e){var t="https://www.omdbapi.com/?apikey=8de7c732&s=".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){e.Search&&(s(e.Search),console.log(c))})).catch((function(e){return console.log(e)}))}(u)}),[u]),Object(n.useEffect)((function(){5===O.length&&l.b.info("You have nominated 5 or more films!",{position:l.b.POSITION.TOP_CENTER},{autoClose:1e3})}),[O]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("nominated-movies"));e&&f(e)}),[]),Object(d.jsxs)("div",{className:"container-fluid movie",children:[Object(d.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4 headerDiv",children:Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"The Shoppies"})})}),Object(d.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(d.jsx)("h3",{children:"Nominate your favorite movie for a Shoppie Award!"}),Object(d.jsx)("div",{className:"col col-sm-6",children:Object(d.jsx)("input",{className:"roundedInput",placeholder:"Search for a movie",value:u,onChange:function(e){return b(e.target.value)}})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(j,{movies:c,status:!0,handleClick:function(e){console.log(O),O.includes(e)?l.b.error("This movie has already been nominated!",{position:l.b.POSITION.TOP_CENTER},{autoClose:1e3}):(f([].concat(Object(a.a)(O),[e])),v([].concat(Object(a.a)(O),[e])),l.b.success("Successfully Nominated!",{position:l.b.POSITION.TOP_CENTER},{delay:2e3}))}})}),Object(d.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(d.jsx)("h3",{children:"Movies you have nominated"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(j,{movies:O,status:!1,handleClick:function(e){var t=O.filter((function(t){return t.imdbID!==e.imdbID}));f(t),v(t),l.b.success("Movie deleted!",{position:l.b.POSITION.TOP_CENTER},{delay:2e3})}})}),Object(d.jsx)(l.a,{})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.d84dd69e.chunk.js.map