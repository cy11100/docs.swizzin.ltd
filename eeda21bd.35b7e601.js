(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(137)),i={id:"how-do-i-connect",title:"How do I connect to the server?",sidebar_label:"How do I connect to the server?"},c={unversionedId:"getting-started/how-do-i-connect",id:"getting-started/how-do-i-connect",isDocsHomePage:!1,title:"How do I connect to the server?",description:"In order to connect to your slot for installation, you'll need to access your slot via SSH. Never done that before? Fear not! Read on to find out more.",source:"@site/docs/getting-started/how-do-i-connect.md",slug:"/getting-started/how-do-i-connect",permalink:"/docs/getting-started/how-do-i-connect",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/getting-started/how-do-i-connect.md",version:"current",sidebar_label:"How do I connect to the server?",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Getting started with box",permalink:"/docs/getting-started/box-basics"}},l=[{value:"Step-by-step guide (Linux/OS X)",id:"step-by-step-guide-linuxos-x",children:[]},{value:"Step-by-step guide (PuTTY)",id:"step-by-step-guide-putty",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to connect to your slot for installation, you'll need to access your slot via SSH. Never done that before? Fear not! Read on to find out more."),Object(a.b)("p",null,"When you received your server or VPS, you should have received an email with the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An IP"),Object(a.b)("li",{parentName:"ul"},"A username (often ",Object(a.b)("inlineCode",{parentName:"li"},"root"),")"),Object(a.b)("li",{parentName:"ul"},"A password")),Object(a.b)("p",null,"We'll use all of these pieces of information to connect to your server"),Object(a.b)("h2",{id:"step-by-step-guide-linuxos-x"},"Step-by-step guide (Linux/OS X)"),Object(a.b)("p",null,"Connecting to your slot via Linux or OSX is trivial:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open a terminal")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"ssh <username>@<hostname>")),Object(a.b)("p",{parentName:"li"},"eg: ",Object(a.b)("inlineCode",{parentName:"p"},"ssh liara@xl.swizzin.ltd"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'You may receive a warning about the host key. Type "yes" to verify.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Enter your password")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Done!"))),Object(a.b)("h2",{id:"step-by-step-guide-putty"},"Step-by-step guide (PuTTY)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you don't already have PuTTY installed, you can grab it ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"}),"here"),". Once downloaded, click the .exe and follow the instructions to install.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Once installed you can enter your server details including username and password")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"On first login you may be presented with a warning - this is to confirm that the server identity is correct.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"From there user your username and password to log in. If you are successful you should see a default Linux command prompt, and can now install applications."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Linux ---.swizzin.ltd 4.19.45-xanmod23 #1.190523 SMP PREEMPT Thu May 23 08:39:11 -03 2019 x86_64\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\nliara@---:~$ \n")))}p.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);