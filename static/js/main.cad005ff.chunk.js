(window.webpackJsonpprocrast=window.webpackJsonpprocrast||[]).push([[0],{23:function(n,e,t){n.exports=t(54)},54:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(20),c=t(3),o=t(6),l=t(7),u=t.n(l),s=t(9),f=a.a.createContext([]);function m(n){var e=n.children,t=Object(r.useState)([]),i=Object(o.a)(t,2),c=i[0],l=i[1];return Object(r.useEffect)((function(){function n(){return(n=Object(s.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://www.reader.one/api/all/hn,reddit,ph,slashdot,dn,github,medium,lifehacker?limit=5");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,l(t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),a.a.createElement(f.Provider,{value:[c,l]},e)}var d=t(2),h=t(10);function p(){var n=Object(c.a)(["\n  display: inline-block;\n  font-family: sans-serif;\n  font-size: .8em;\n  color: #888;\n  padding-right: .4em;\n\n  a {\n    color: #ccc;\n  }\n\n  b {\n      font-weight: bold;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(c.a)(["\n  display: block;\n  font-family: sans-serif;\n  text-decoration: none;\n  color: #bbb;\n"]);return b=function(){return n},n}function g(){var n=Object(c.a)(["\n  padding: 1em;\n  &:hover {\n    background-color: #444;\n  }\n"]);return g=function(){return n},n}function E(){var n=Object(c.a)(["\n  padding: 1em;\n  background: #333;\n  overflow: scroll;\n  height: 100vh;\n\n  @media (min-width: 768px) {\n    flex: 6;\n  }\n"]);return E=function(){return n},n}var x=d.default.ul(E()),v=d.default.li(g()),w=d.default.a(b()),k=d.default.p(p()),j=function(){var n=Object(r.useContext)(f),e=Object(o.a)(n,1)[0];return a.a.createElement(x,null,a.a.createElement(h.Reset,null),e.map((function(n,e){return a.a.createElement(v,{key:e},a.a.createElement(w,{href:n.url},n.title),n.author&&a.a.createElement(k,null,"Author: ",n.author),n.score&&a.a.createElement(k,null,"Score: ",n.score),n.comments>0&&a.a.createElement(k,null,a.a.createElement("a",{href:n.comment_link},a.a.createElement("span",null,n.comments)," comments")),n.one_sources[0]&&a.a.createElement(k,null,a.a.createElement("b",null,"source: ",n.one_sources[0])))})))};function y(){var n=Object(c.a)(["\n    text-decoration: none;\n    color: #ccc;\n"]);return y=function(){return n},n}function O(){var n=Object(c.a)(["\n    font-family: sans-serif;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n    box-shadow: 0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n\n    &:hover {\n        box-shadow: 0 3px 4px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04);\n        text-shadow: 0 3px 4px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.18);\n    }\n\n    @media (min-width: 768px) {\n        display: block;\n        margin: 0;\n        padding: .8em;\n    }\n"]);return O=function(){return n},n}function z(){var n=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    flex: 1;\n    height: 100vh;\n    line-height: 2;\n    text-align: right;\n    background-color: #666;\n    padding: .4em 1em 0 4em;\n    \n    &:not(:target) {\n        transform: translateX(100%);\n        transition: right 1.5s;\n        box-shadow: 0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24);\n    }\n    \n    &:target {\n        transform: translateX(0);\n        transform-origin: bottom left;\n        transition: right 1s;\n    }\n\n    h3 {\n        display: none;\n    }\n\n    @media (min-width: 768px) {\n        position: inherit;\n        flex: 1;\n        text-align: left;\n        padding: 1.4em;\n        margin: 0;\n        line-height: 1;\n\n        h3 {\n            display: block;\n        }\n\n        &:not(:target) {\n            transform: translateX(0);\n        }\n        \n        &:target {\n            transform: translateX(0);\n        }\n    }\n"]);return z=function(){return n},n}function C(){var n=Object(c.a)(["\n    font-family: sans-serif;\n    font-size: 1.4em;\n    padding-left: 1.4em;\n    color: #ccc;\n\n    @media (min-width: 768px) {\n        font-size: 1.4em;\n        font-weight: bold;\n        padding-left: .6em;\n        line-height: 2;\n    }\n"]);return C=function(){return n},n}function P(){var n=Object(c.a)(["\n    font-family: sans-serif;\n    font-size: 1.4em;\n    text-decoration: none;\n    padding-right: 0;\n    color: #ccc;\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n    \n"]);return P=function(){return n},n}function X(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    line-height: 2.4;\n    border-bottom: solid 1px #333;\n    padding-right: 1em;\n    background-color: #666;\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"]);return X=function(){return n},n}var R=d.default.header(X()),S=d.default.a(P()),_=d.default.h3(C()),H=d.default.nav(z()),J=d.default.li(O()),L=d.default.a(y()),M=function(){var n=Object(r.useContext)(f),e=Object(o.a)(n,2)[1];function t(n){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(u.a.mark((function n(t){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://www.reader.one/api/all/".concat(t,"?limit=25"));case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,e(a);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,a.a.createElement(_,null,a.a.createElement("span",{role:"img","aria-label":"coffe"},"\u2615"),"Procrast"),a.a.createElement(S,{href:"#nav"},"\u2630Menu")),a.a.createElement(H,{id:"nav"},a.a.createElement(_,null,a.a.createElement("span",{role:"img","aria-label":"coffe"},"\u2615")," Procrast"),a.a.createElement(S,{href:"https://baltazarparra.github.io/procrast/#"},"\u2630Close"),a.a.createElement("ul",null,a.a.createElement(J,{onClick:function(){return t("hn")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Hacker News")),a.a.createElement(J,{onClick:function(){return t("reddit")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Reddit")),a.a.createElement(J,{onClick:function(){return t("ph")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Product Hunt")),a.a.createElement(J,{onClick:function(){return t("slashdot")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Slashdot")),a.a.createElement(J,{onClick:function(){return t("dn")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Designer News")),a.a.createElement(J,{onClick:function(){return t("github")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Github Trending")),a.a.createElement(J,{onClick:function(){return t("medium")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Medium")),a.a.createElement(J,{onClick:function(){return t("lifehacker")}},a.a.createElement(L,{href:"https://baltazarparra.github.io/procrast/#"},"Lifehacker")))))},N=t(21);function A(){var n=Object(c.a)(["\n  overflow-y: hidden;\n  height: 100vh;\n\n  @media (min-width: 768px) {\n    display: flex;\n  }\n"]);return A=function(){return n},n}var B=d.default.div(A());function D(){return a.a.createElement(B,null,a.a.createElement(h.Reset,null),a.a.createElement(M,null),a.a.createElement(j,null),a.a.createElement(N.Lines,{color:"#ccc",background:"#333"}))}Object(i.render)(a.a.createElement((function(){return a.a.createElement(m,null,a.a.createElement(D,null))}),null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cad005ff.chunk.js.map