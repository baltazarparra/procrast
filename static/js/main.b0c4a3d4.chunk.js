(window.webpackJsonpprocrast=window.webpackJsonpprocrast||[]).push([[0],{16:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(11),o=t(2),i=t(3),l=t(4),u=t.n(l),s=t(5),f=a.a.createContext([]);function h(e){var n=e.children,t=Object(r.useState)([]),c=Object(i.a)(t,2),o=c[0],l=c[1];return Object(r.useEffect)((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reader.one/api/all/hn,reddit,ph,slashdot,dn,github,medium,lifehacker?limit=3");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,l(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a.a.createElement(f.Provider,{value:[o,l]},n)}var m=t(1),p=t(6);function d(){var e=Object(o.a)(["\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: .8em;\n  color: #666;\n  padding-right: .4em;\n\n  a {\n    color: #666;\n  }\n\n  b {\n      font-weight: bold;\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(o.a)(["\n  display: block;\n  font-family: sans-serif;\n  text-decoration: none;\n  color: #333;\n"]);return b=function(){return e},e}function g(){var e=Object(o.a)(["\n  margin: 1em;\n"]);return g=function(){return e},e}function E(){var e=Object(o.a)(["\n  padding: 1em;\n  background: #f4f4f4;\n  overflow: scroll;\n  height: 100vh;\n"]);return E=function(){return e},e}var v=m.default.ul(E()),x=m.default.li(g()),w=m.default.a(b()),j=m.default.p(d()),k=function(){var e=Object(r.useContext)(f),n=Object(i.a)(e,1)[0];return a.a.createElement(v,null,a.a.createElement(p.Reset,null),n.map((function(e){return a.a.createElement(x,{key:Math.random()},a.a.createElement(w,{href:e.url},e.title),e.author&&a.a.createElement(j,null,"Author: ",e.author),e.score&&a.a.createElement(j,null,"Score: ",e.score),e.comments>0&&a.a.createElement(j,null,a.a.createElement("a",{href:e.comment_link},a.a.createElement("span",null,e.comments)," comments")),e.one_sources[0]&&a.a.createElement(j,null,a.a.createElement("b",null,"source: ",e.one_sources[0])))})))};function O(){var e=Object(o.a)(["\n    text-decoration: none;\n    color: #666;\n"]);return O=function(){return e},e}function y(){var e=Object(o.a)(["\n    font-family: sans-serif;\n    margin: 0 .8em;\n    padding: .6em;\n    color: #666;\n    cursor: pointer;\n    box-shadow: 0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n\n    &:hover {\n        box-shadow: 0 3px 4px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04);\n        text-shadow: 0 3px 4px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.18);\n    }\n"]);return y=function(){return e},e}function z(){var e=Object(o.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    flex: 1;\n    height: 100vh;\n    width: 200px;\n    line-height: 2;\n    text-align: right;\n    background: #eee;\n    \n    &:not(:target) {\n        transform: translateX(100%);\n        transition: right 1.5s;\n    }\n    \n    &:target {\n        transform: translateX(0);\n        transform-origin: bottom left;\n        transition: right 1s;\n    }\n"]);return z=function(){return e},e}function C(){var e=Object(o.a)(["\n    font-family: sans-serif;\n    font-size: 1.4em;\n    padding-left: 1.4em;\n    color: #666;\n"]);return C=function(){return e},e}function M(){var e=Object(o.a)(["\n    font-family: sans-serif;\n    font-size: 1.4em;\n    text-decoration: none;\n    padding-right: 1.4em;\n    color: #666;\n    \n"]);return M=function(){return e},e}function P(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    line-height: 2;\n"]);return P=function(){return e},e}var R=m.default.header(P()),S=m.default.a(M()),_=m.default.h3(C()),H=m.default.nav(z()),J=m.default.li(y()),N=m.default.a(O()),X=function(){var e=Object(r.useContext)(f),n=Object(i.a)(e,2)[1];function t(e){return c.apply(this,arguments)}function c(){return(c=Object(s.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reader.one/api/all/".concat(t,"?limit=25"));case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,a.a.createElement(_,null,"Procast"),a.a.createElement(S,{href:"#nav"},"\u2630Menu")),a.a.createElement(H,{id:"nav"},a.a.createElement(S,{href:"/#"},"\u2630Close"),a.a.createElement("ul",null,a.a.createElement(J,{onClick:function(){return t("hn")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Hacker News")),a.a.createElement(J,{onClick:function(){return t("reddit")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Reddit")),a.a.createElement(J,{onClick:function(){return t("ph")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Product Hunt")),a.a.createElement(J,{onClick:function(){return t("slashdot")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Slashdot")),a.a.createElement(J,{onClick:function(){return t("dn")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Designer News")),a.a.createElement(J,{onClick:function(){return t("github")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Github Trending")),a.a.createElement(J,{onClick:function(){return t("medium")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Medium")),a.a.createElement(J,{onClick:function(){return t("lifehacker")}},a.a.createElement(N,{href:"https://baltazarparra.github.io/procrast/#"},"Lifehacker")))))};function A(){var e=Object(o.a)(["\n  overflow-y: hidden;\n  height: 100vh;\n"]);return A=function(){return e},e}var B=m.default.div(A());function D(){return a.a.createElement(B,null,a.a.createElement(p.Reset,null),a.a.createElement(X,null),a.a.createElement(k,null))}Object(c.render)(a.a.createElement((function(){return a.a.createElement(h,null,a.a.createElement(D,null))}),null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b0c4a3d4.chunk.js.map