"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[6262,865],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),r=n(2713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4297:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(50),i=n(6010),o="tabItem_HqPw",s=37,l=39;var c=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=(0,r.Z)(),f=m.tabGroupChoices,b=m.setTabGroupChoices,v=(0,a.useState)(c),y=v[0],h=v[1],k=(0,a.useState)(!1),g=k[0],w=k[1];if(null!=d){var T=f[d];null!=T&&T!==y&&u.some((function(e){return e.value===T}))&&h(T)}var N=function(e){h(e),null!=d&&b(d,e)},z=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",C)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},p)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:(0,i.Z)("tabs__item",t,o,{"tabs__item--active":y===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return z.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(z,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},4564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(9124),s=["components"],l={id:"nzbget",title:"nzbGet",sidebar_label:"nzbGet"},c=void 0,u={unversionedId:"applications/nzbget",id:"applications/nzbget",isDocsHomePage:!1,title:"nzbGet",description:"NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files.",source:"@site/docs/applications/nzbget.mdx",sourceDirName:"applications",slug:"/applications/nzbget",permalink:"/applications/nzbget",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/nzbget.mdx",tags:[],version:"current",frontMatter:{id:"nzbget",title:"nzbGet",sidebar_label:"nzbGet"},sidebar:"docs",previous:{title:"Transmission",permalink:"/applications/transmission"},next:{title:"Sabnzbd",permalink:"/applications/sabnzbd"}},d=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Connect to other clients",id:"connect-to-other-clients",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files."),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"Installing nzbGet is easy. Simply issue the following command from SSH:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install nzbget\n")),(0,i.kt)("p",null,"This command will configure nzbGet for your user."),(0,i.kt)("h2",{id:"how-to-access"},"How to Access"),(0,i.kt)("p",null,"After installation, you can access nzbGet at the url: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/nzbget")),(0,i.kt)("h2",{id:"service-management"},"Service Management"),(0,i.kt)("p",null,"nzbGet is enabled for use with multiple users. Thus, you must call it with the username of the instance to start."),(0,i.kt)("p",null,"The systemd service file resides at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/nzbget@.service\n")),(0,i.kt)(o.default,{service:"nzbget@<username>",mdxType:"SystemdTabs"}),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"If you are unfamiliar with nzbGet, please check out their ",(0,i.kt)("a",{parentName:"p",href:"https://nzbget.net/documentation"},"documentation")," for assistance in getting your news groups setup or learning how to setup post-processing."),(0,i.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,i.kt)("p",null,"The general settings for connecting nzbget to other clients are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host: ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,i.kt)("li",{parentName:"ul"},"Control Port: ",(0,i.kt)("inlineCode",{parentName:"li"},"443")),(0,i.kt)("li",{parentName:"ul"},"URL Base: ",(0,i.kt)("inlineCode",{parentName:"li"},"nzbget")),(0,i.kt)("li",{parentName:"ul"},"SSL: ",(0,i.kt)("inlineCode",{parentName:"li"},"ON")),(0,i.kt)("li",{parentName:"ul"},"Username: ",(0,i.kt)("inlineCode",{parentName:"li"},"<your slot username>")),(0,i.kt)("li",{parentName:"ul"},"Password: ",(0,i.kt)("inlineCode",{parentName:"li"},"<your slot password>"))))}m.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return b}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(4297),s=n(8448),l=n(5654),c=["components"],u={},d=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m=[],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"code"},(0,i.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,i.kt)(l.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,i.kt)(l.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,i.kt)(l.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,i.kt)(l.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,i.kt)(l.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,i.kt)(l.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);