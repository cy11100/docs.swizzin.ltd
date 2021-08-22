"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4013],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},356:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(4137)),o=["components"],l={id:"functions",title:"Functions to streamline our flow",sidebar_label:"Functions"},s=void 0,u={unversionedId:"dev/functions",id:"dev/functions",isDocsHomePage:!1,title:"Functions to streamline our flow",description:"Snippets",source:"@site/docs/dev/functions.md",sourceDirName:"dev",slug:"/dev/functions",permalink:"/dev/functions",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/dev/functions.md",version:"current",frontMatter:{id:"functions",title:"Functions to streamline our flow",sidebar_label:"Functions"},sidebar:"docs",previous:{title:"Structure",permalink:"/dev/structure"},next:{title:"Beta testing",permalink:"/dev/beta-testing"}},c=[{value:"Snippets",id:"snippets",children:[]},{value:"Functions",id:"functions",children:[{value:"Available from <code>global.sh</code>",id:"available-from-globalsh",children:[]},{value:"Functions that need to be <code>source</code>d",id:"functions-that-need-to-be-sourced",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"snippets"},"Snippets"),(0,r.kt)("p",null,"We are keeping a lot of reusable code in the ",(0,r.kt)("inlineCode",{parentName:"p"},".vscode/*.code-snippets")," files."),(0,r.kt)("p",null,"These give you auto-completions within VSCode and its derivatives, and have pre-defined fields which you can tab-through in order to skip to the next ones."),(0,r.kt)("p",null,"There ",(0,r.kt)("em",{parentName:"p"},"should")," be snippets available for all of the functions declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"global.sh"),"."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Work in progress!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We don't have this chapter written out fully yet. You can find out what most of these do and how they work in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contributors.md")," file in the main repo"))),(0,r.kt)("p",null,"Please make sure to read the ",(0,r.kt)("a",{parentName:"p",href:"/dev/structure"},"structure")," documentation in case you intend to make some changes to these files, or introduce some new ones."),(0,r.kt)("h3",{id:"available-from-globalsh"},"Available from ",(0,r.kt)("inlineCode",{parentName:"h3"},"global.sh")),(0,r.kt)("p",null,"Please check more on this out in the  ",(0,r.kt)("a",{parentName:"p",href:"/dev/structure#globals.sh"},"structure.md chapter on global.sh")),(0,r.kt)("h4",{id:"swizdb-functions"},(0,r.kt)("inlineCode",{parentName:"h4"},"swizdb")," functions"),(0,r.kt)("p",null,"These functions provide a solution to storing arbitrary information organised by keys peristently on the system. This is achieved with simple files, and not any db software."),(0,r.kt)("p",null,"The keys can contain slashes in order to define further structure to the database, in a smilar fashion Windows uses registry keys. Therefore, ",(0,r.kt)("inlineCode",{parentName:"p"},"abc/def")," will create a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"abc")," and store the key ",(0,r.kt)("inlineCode",{parentName:"p"},"def")," in it. You can then retrieve that value under the key ",(0,r.kt)("inlineCode",{parentName:"p"},"abc/def"),"."),(0,r.kt)("p",null,"Available functions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swizdb set $key $value"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stores the content of ",(0,r.kt)("inlineCode",{parentName:"li"},"$value")," under the ",(0,r.kt)("inlineCode",{parentName:"li"},"$key")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swizdb get $key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns the content of ",(0,r.kt)("inlineCode",{parentName:"li"},"$key")),(0,r.kt)("li",{parentName:"ul"},"Returns exit code ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," in case the key is not present"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swizdb path $key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns the full system path of the file which stores the content of ",(0,r.kt)("inlineCode",{parentName:"li"},"$key")),(0,r.kt)("li",{parentName:"ul"},"Returns exit code ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," in case the key is not present"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swizdb clear $key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removes the key and clears its stored value from the filesystem"),(0,r.kt)("li",{parentName:"ul"},"Returns exit code ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," in case the key is not present"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swizdb list [$key]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns a list of present and set full keys "),(0,r.kt)("li",{parentName:"ul"},'Can filter results based on a key "directory".')))),(0,r.kt)("h4",{id:"os-functions"},(0,r.kt)("inlineCode",{parentName:"h4"},"os")," functions"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Documented in the file itself")),(0,r.kt)("h4",{id:"user-functions"},(0,r.kt)("inlineCode",{parentName:"h4"},"user")," functions"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Documented in the file itself")),(0,r.kt)("h4",{id:"echo-functions"},"Echo functions"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Documented in Contributors.md")),(0,r.kt)("h4",{id:"apt-functions"},"Apt functions"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Documented in Contributors.md")),(0,r.kt)("h3",{id:"functions-that-need-to-be-sourced"},"Functions that need to be ",(0,r.kt)("inlineCode",{parentName:"h3"},"source"),"d"),(0,r.kt)("h4",{id:"utils"},(0,r.kt)("inlineCode",{parentName:"h4"},"utils")),(0,r.kt)("p",null,"This file contains various functionality which is difficult to separate or justify an entire file for. It is ",(0,r.kt)("strong",{parentName:"p"},"not")," included in ",(0,r.kt)("inlineCode",{parentName:"p"},"globals.sh")," by default."),(0,r.kt)("p",null,"Functions can be moved out of this file and split into their own if it makes sense, but that's a really loose definition and is usually discussed at PR-level. Obviously, if that happens, corrective action needs to be done wherever the functions were used, and the scripts that use it should vaguely be re-tested."),(0,r.kt)("h4",{id:"python-functions-for-pyenv-and-venv"},"Python functions for ",(0,r.kt)("inlineCode",{parentName:"h4"},"pyenv")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"venv")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Documented inline")),(0,r.kt)("p",null,"These functions handle the installation of the required python versions and creating virtual environments for applications. Please refer to the existing use of these functions in source code."),(0,r.kt)("h4",{id:"tests"},(0,r.kt)("inlineCode",{parentName:"h4"},"tests")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Documented ",(0,r.kt)("strong",{parentName:"em"},"thoroughly")," inline")),(0,r.kt)("p",null,"This file contains small tests which will often attempt to guess at best testing values unless supplied (e.g. ports, or baseurls). Please read the inline documentation thoroughly."))}p.isMDXComponent=!0}}]);