(window.webpackJsonp=window.webpackJsonp||[]).push([[23,13],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),i=(n(0),n(137)),a={},c={unversionedId:"snippets/missingdocs",id:"snippets/missingdocs",isDocsHomePage:!1,title:"missingdocs",description:"The docs for this application are not properly written yet. If you need them, please let us know in the Discord and we'll take the time to make them for you.",source:"@site/docs/snippets/missingdocs.md",slug:"/snippets/missingdocs",permalink:"/docs/snippets/missingdocs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/missingdocs.md",version:"current"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Not a 404, but almost")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The docs for this application are not properly written yet. If you need them, please let us know in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://discord.gg/sKjs9UM"}),"Discord")," and we'll take the time to make them for you."))))}p.isMDXComponent=!0},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),i=(n(0),n(137)),a=n(49),c={id:"flood",title:"Flood",sidebar_label:"Flood"},s={unversionedId:"applications/flood",id:"applications/flood",isDocsHomePage:!1,title:"Flood",description:"Flood is a monitoring service for rTorrent built in NodeJS",source:"@site/docs/applications/flood.mdx",slug:"/applications/flood",permalink:"/docs/applications/flood",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/flood.mdx",version:"current",sidebar_label:"Flood",sidebar:"docs",previous:{title:"Deluge",permalink:"/docs/applications/deluge"},next:{title:"qBittorrent",permalink:"/docs/applications/qbittorrent"}},l=[{value:"Installation",id:"installation",children:[]}],p={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Flood is a monitoring service for rTorrent built in NodeJS"),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Installing Flood is easy. Simply open an SSH prompt to your server and issue the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install flood\n")),Object(i.b)("p",null,"This command will install and compile flood for all the users on your server"),Object(i.b)(a.default,{mdxType:"MissingDocs"}))}d.isMDXComponent=!0}}]);