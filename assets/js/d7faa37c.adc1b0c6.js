"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[5357,865],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),r=n(2713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4297:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(50),o=n(6010),i="tabItem_HqPw",l=37,s=39;var u=function(e){var t=e.block,n=e.children,u=e.defaultValue,c=e.values,d=e.groupId,p=e.className,m=(0,r.Z)(),f=m.tabGroupChoices,b=m.setTabGroupChoices,v=(0,a.useState)(u),k=v[0],y=v[1],h=(0,a.useState)(!1),g=h[0],w=h[1];if(null!=d){var N=f[d];null!=N&&N!==k&&c.some((function(e){return e.value===N}))&&y(N)}var x=function(e){y(e),null!=d&&b(d,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},O=function(){w(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",O),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",O)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},p)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":k===t,className:(0,o.Z)("tabs__item",t,i,{"tabs__item--active":k===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===k}))[0]))}},7925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(9124),l=["components"],s={id:"autobrr",title:"Autobrr",sidebar_label:"Autobrr"},u=void 0,c={unversionedId:"applications/autobrr",id:"applications/autobrr",isDocsHomePage:!1,title:"Autobrr",description:"A powerful modern autodl alternative, which monitors IRC announce channels to get releases as soon as they are available and send to your favorite client or to arr's and let them decide to download or not.",source:"@site/docs/applications/autobrr.mdx",sourceDirName:"applications",slug:"/applications/autobrr",permalink:"/applications/autobrr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/autobrr.mdx",tags:[],version:"current",frontMatter:{id:"autobrr",title:"Autobrr",sidebar_label:"Autobrr"},sidebar:"docs",previous:{title:"Applications Index",permalink:"/applications/"},next:{title:"Autodl",permalink:"/applications/autodl"}},d=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Upgrade",id:"upgrade",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A powerful modern autodl alternative, which monitors IRC announce channels to get releases as soon as they are available and send to your favorite client or to arr's and let them decide to download or not."),(0,o.kt)("p",null,"Supported actions/clients:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"qBittorrent"),(0,o.kt)("li",{parentName:"ul"},"Deluge"),(0,o.kt)("li",{parentName:"ul"},"Radarr"),(0,o.kt)("li",{parentName:"ul"},"Sonarr"),(0,o.kt)("li",{parentName:"ul"},"Lidarr"),(0,o.kt)("li",{parentName:"ul"},"Save to watch folder"),(0,o.kt)("li",{parentName:"ul"},"Run custom commands")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Autobrr is in the early stages of development and is considered alpha/beta.\nInstall and use with caution."))),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing autobrr is easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install autobrr\n")),(0,o.kt)("p",null,"This command will configure autobrr for your user."),(0,o.kt)("h2",{id:"upgrade"},"Upgrade"),(0,o.kt)("p",null,"Upgrading autobrr is as easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade autobrr\n")),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After autobrr has been installed, it will be available for access at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/autobrr"),"."),(0,o.kt)("p",null,"The port is randomized at setup, so if you don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx"),", or just need to find the port, check in ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/user/.config/autobrr/config.toml"),"."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Multi-user is enabled, so in order to manipulate the service, you'll also need to specify a username."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/systemd/system/autobrr@.service\n")),(0,o.kt)(i.default,{service:"autobrr@<username>",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to get autobrr working, you need to do the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup indexers",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings/Indexers")," and add indexers"))),(0,o.kt)("li",{parentName:"ul"},"Setup irc",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings/Irc")," and add networks and channels."))),(0,o.kt)("li",{parentName:"ul"},"Setup download clients",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings/Clients")," and add your download clients."))),(0,o.kt)("li",{parentName:"ul"},"Add filters",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"They work similar to autodl-irssi filters.")))))}m.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return b}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(4297),l=n(8448),s=n(5654),u=["components"],c={},d=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m=[],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);