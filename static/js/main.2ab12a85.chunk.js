(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(4),o=n.n(s),a=(n(13),n(8)),r=n(6),l=(n(14),n(15),n(2)),d=(n(16),n(1));var j=function(e){return Object(d.jsx)(d.Fragment,{children:e.movies.map((function(t,n){return Object(d.jsxs)("div",{className:" justify-content-start m-3",children:[Object(d.jsx)("img",{src:t.Poster,alt:"movie poster"}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("h5",{children:t.Title}),Object(d.jsx)("h5",{children:t.Year}),Object(d.jsx)("button",{class:"btn btn-primary btn-lg",onClick:function(){return e.handleClick(t)},children:e.status?"Add":"Delete"})]})]},n)}))})};var u=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),o=Object(r.a)(s,2),u=o[0],b=o[1],m=Object(c.useState)([]),h=Object(r.a)(m,2),O=h[0],f=h[1];function v(e){localStorage.setItem("nominated-movies",JSON.stringify(e))}return Object(c.useEffect)((function(){!function(e){var t="https://www.omdbapi.com/?apikey=8de7c732&s=".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){e.Search&&(i(e.Search),console.log(n))})).catch((function(e){return console.log(e)}))}(u)}),[u]),Object(c.useEffect)((function(){5===O.length&&l.b.info("You have nominated 5 or more films!",{position:l.b.POSITION.TOP_CENTER},{autoClose:1e3})}),[O]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("nominated-movies"));e&&f(e)}),[]),Object(d.jsxs)("div",{className:"container-fluid movie",children:[Object(d.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4 headerDiv",children:Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"The Shoppies"})})}),Object(d.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(d.jsx)("h3",{children:"Nominate your favorite movie for a Shoppie Award!"}),Object(d.jsx)("div",{className:"col col-sm-6",children:Object(d.jsx)("input",{className:"roundedInput",placeholder:"Search for a movie",value:u,onChange:function(e){return b(e.target.value)}})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(j,{movies:n,status:!0,handleClick:function(e){console.log(O),O.includes(e)?l.b.error("This movie has already been nominated!",{position:l.b.POSITION.TOP_CENTER},{autoClose:1e3}):(f([].concat(Object(a.a)(O),[e])),v([].concat(Object(a.a)(O),[e])),l.b.success("Successfully Nominated!",{position:l.b.POSITION.TOP_CENTER},{delay:2e3}))}})}),Object(d.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(d.jsx)("h3",{children:"Movies you have nominated"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(j,{movies:O,status:!1,handleClick:function(e){var t=O.filter((function(t){return t.imdbID!==e.imdbID}));f(t),v(t),l.b.success("Movie deleted!",{position:l.b.POSITION.TOP_CENTER},{delay:2e3})}})}),Object(d.jsx)(l.a,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.2ab12a85.chunk.js.map