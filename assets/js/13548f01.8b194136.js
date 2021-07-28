(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=i,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(8),r=(n(0),n(165)),o={id:"functions",title:"Functions to streamline our flow",sidebar_label:"Functions"},c={unversionedId:"dev/functions",id:"dev/functions",isDocsHomePage:!1,title:"Functions to streamline our flow",description:"Snippets",source:"@site/docs/dev/functions.md",sourceDirName:"dev",slug:"/dev/functions",permalink:"/dev/functions",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/dev/functions.md",version:"current",sidebar_label:"Functions",frontMatter:{id:"functions",title:"Functions to streamline our flow",sidebar_label:"Functions"},sidebar:"docs",previous:{title:"The project's structure",permalink:"/dev/structure"},next:{title:"So you want to run some pre-release software?",permalink:"/dev/beta-testing"}},l=[{value:"Snippets",id:"snippets",children:[]},{value:"Functions",id:"functions",children:[{value:"Available from <code>global.sh</code>",id:"available-from-globalsh",children:[]},{value:"Functions that need to be <code>source</code>d",id:"functions-that-need-to-be-sourced",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"snippets"},"Snippets"),Object(r.b)("p",null,"We are keeping a lot of reusable code in the ",Object(r.b)("inlineCode",{parentName:"p"},".vscode/*.code-snippets")," files."),Object(r.b)("p",null,"These give you auto-completions within VSCode and its derivatives, and have pre-defined fields which you can tab-through in order to skip to the next ones."),Object(r.b)("p",null,"There ",Object(r.b)("em",{parentName:"p"},"should")," be snippets available for all of the functions declared in ",Object(r.b)("inlineCode",{parentName:"p"},"global.sh"),"."),Object(r.b)("h2",{id:"functions"},"Functions"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Work in progress!")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We don't have this chapter written out fully yet. You can find out what most of these do and how they work in the ",Object(r.b)("inlineCode",{parentName:"p"},"contributors.md")," file in the main repo"))),Object(r.b)("p",null,"Please make sure to read the ",Object(r.b)("a",{parentName:"p",href:"/dev/structure"},"structure")," documentation in case you intend to make some changes to these files, or introduce some new ones."),Object(r.b)("h3",{id:"available-from-globalsh"},"Available from ",Object(r.b)("inlineCode",{parentName:"h3"},"global.sh")),Object(r.b)("p",null,"Please check more on this out in the  ",Object(r.b)("a",{parentName:"p",href:"/dev/structure#globals.sh"},"structure.md chapter on global.sh")),Object(r.b)("h4",{id:"swizdb-functions"},Object(r.b)("inlineCode",{parentName:"h4"},"swizdb")," functions"),Object(r.b)("p",null,"These functions provide a solution to storing arbitrary information organised by keys peristently on the system. This is achieved with simple files, and not any db software."),Object(r.b)("p",null,"The keys can contain slashes in order to define further structure to the database, in a smilar fashion Windows uses registry keys. Therefore, ",Object(r.b)("inlineCode",{parentName:"p"},"abc/def")," will create a directory called ",Object(r.b)("inlineCode",{parentName:"p"},"abc")," and store the key ",Object(r.b)("inlineCode",{parentName:"p"},"def")," in it. You can then retrieve that value under the key ",Object(r.b)("inlineCode",{parentName:"p"},"abc/def"),"."),Object(r.b)("p",null,"Available functions are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"swizdb set $key $value"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Stores the content of ",Object(r.b)("inlineCode",{parentName:"li"},"$value")," under the ",Object(r.b)("inlineCode",{parentName:"li"},"$key")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"swizdb get $key"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Returns the content of ",Object(r.b)("inlineCode",{parentName:"li"},"$key")),Object(r.b)("li",{parentName:"ul"},"Returns exit code ",Object(r.b)("inlineCode",{parentName:"li"},"1")," in case the key is not present"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"swizdb path $key"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Returns the full system path of the file which stores the content of ",Object(r.b)("inlineCode",{parentName:"li"},"$key")),Object(r.b)("li",{parentName:"ul"},"Returns exit code ",Object(r.b)("inlineCode",{parentName:"li"},"1")," in case the key is not present"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"swizdb clear $key"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Removes the key and clears its stored value from the filesystem"),Object(r.b)("li",{parentName:"ul"},"Returns exit code ",Object(r.b)("inlineCode",{parentName:"li"},"1")," in case the key is not present"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"swizdb list [$key]"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Returns a list of present and set full keys "),Object(r.b)("li",{parentName:"ul"},'Can filter results based on a key "directory".')))),Object(r.b)("h4",{id:"os-functions"},Object(r.b)("inlineCode",{parentName:"h4"},"os")," functions"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"documented in the file itself")),Object(r.b)("h4",{id:"user-functions"},Object(r.b)("inlineCode",{parentName:"h4"},"user")," functions"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"documented in the file itself")),Object(r.b)("h4",{id:"echo-functions"},"Echo functions"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"documented in Contributors.md")),Object(r.b)("h4",{id:"apt-functions"},"Apt functions"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"documented in Contributors.md")),Object(r.b)("h3",{id:"functions-that-need-to-be-sourced"},"Functions that need to be ",Object(r.b)("inlineCode",{parentName:"h3"},"source"),"d"),Object(r.b)("h4",{id:"utils"},Object(r.b)("inlineCode",{parentName:"h4"},"utils")),Object(r.b)("p",null,"This file contains various functionality which is difficult to separate or justify an entire file for. It is ",Object(r.b)("strong",{parentName:"p"},"not")," included in ",Object(r.b)("inlineCode",{parentName:"p"},"globals.sh")," by default."),Object(r.b)("p",null,"Functions can be moved out of this file and split into their own if it makes sense, but that's a really loose definition and is usually discussed at PR-level. Obviously, if that happens, corrective action needs to be done wherever the functions were used, and the scripts that use it should vaguely be re-tested."),Object(r.b)("h4",{id:"python-functions-for-pyenv-and-venv"},"Python functions for ",Object(r.b)("inlineCode",{parentName:"h4"},"pyenv")," and ",Object(r.b)("inlineCode",{parentName:"h4"},"venv")))}b.isMDXComponent=!0}}]);