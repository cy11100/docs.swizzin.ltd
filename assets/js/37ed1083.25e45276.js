"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2542,865,4927],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),r=n(2713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4297:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(50),i=n(6010),o="tabItem_HqPw",l=37,s=39;var c=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=(0,r.Z)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,y=(0,a.useState)(c),f=y[0],k=y[1],g=(0,a.useState)(!1),b=g[0],w=g[1];if(null!=d){var x=v[d];null!=x&&x!==f&&u.some((function(e){return e.value===x}))&&k(x)}var N=function(e){k(e),null!=d&&h(d,e)},T=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",C)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},p)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:(0,i.Z)("tabs__item",t,o,{"tabs__item--active":f===t}),style:b?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),P(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},6371:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return v},default:function(){return y}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(4297),l=n(8448),s=n(9124),c=n(4976),u=["components"],d={id:"plex",title:"Plex",sidebar_label:"Plex"},p=void 0,m={unversionedId:"applications/plex",id:"applications/plex",isDocsHomePage:!1,title:"Plex",description:"Plex media server allows you to aggregate all your personal media and access it anywhere you go.",source:"@site/docs/applications/plex.mdx",sourceDirName:"applications",slug:"/applications/plex",permalink:"/applications/plex",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/plex.mdx",tags:[],version:"current",frontMatter:{id:"plex",title:"Plex",sidebar_label:"Plex"},sidebar:"docs",previous:{title:"Mango",permalink:"/applications/mango"},next:{title:"Tautulli",permalink:"/applications/tautulli"}},v=[{value:"Initial Setup",id:"initial-setup",children:[{value:"Automatic claiming",id:"automatic-claiming",children:[]},{value:"Manual claiming",id:"manual-claiming",children:[]}]},{value:"Service Management",id:"service-management",children:[]},{value:"Adding more users&#39; media to Plex",id:"adding-more-users-media-to-plex",children:[]},{value:"Upgrading",id:"upgrading",children:[]},{value:"Connect to other clients",id:"connect-to-other-clients",children:[]}],h={toc:v};function y(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Plex media server allows you to aggregate all your personal media and access it anywhere you go."),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/how-do-i-connect"},"here"),"."),(0,i.kt)("p",null,"Installing Plex on your slot is easy. Simply issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo box install plex\n")),(0,i.kt)("h3",{id:"automatic-claiming"},"Automatic claiming"),(0,i.kt)("p",null,"As of v1.6.0, swizzin now supports claiming your server during the installation. When you install Plex, you'll be greeted by the prompt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wrap"},"Please visit https://www.plex.tv/claim, login, copy your plex claim token to your clipboard and paste it here. This will automatically claim your server! Otherwise, you can leave this blank and to tunnel to the port instead.\n")),(0,i.kt)("p",null,"Simply visit ",(0,i.kt)("a",{parentName:"p",href:"https://www.plex.tv/claim"},"the link")," to grab your claim code and paste it into the terminal. After Plex is installed, the script will use the claim code to grab a valid token for your user and apply it to your server."),(0,i.kt)("h4",{id:"post-install-automatic-claiming"},"Post-install automatic claiming"),(0,i.kt)("p",null,"If for some reason you didn't claim during installation, you can still run the command manually from SSH."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'claim="<your plex.tv/claim code>" #Change this value.\n. /etc/swizzin/sources/globals.sh\n. /etc/swizzin/sources/functions/plex\nclaimPlex "${claim}"\n')),(0,i.kt)("p",null,"The function will run and if all goes well, you'll receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," message stating that your server as been claimed under your account."),(0,i.kt)("h3",{id:"manual-claiming"},"Manual claiming"),(0,i.kt)("p",null,"After installation, you'll need to create an SSH Tunnel to your server to appear as if you're using the same network as your Plex instance."),(0,i.kt)("p",null,"If you've gotten this far, I'll assume you don't need any reminders on how to connect to the server via SSH ;) However, creating an SSH tunnel takes a bit more effort than simply creating an SSH Connection."),(0,i.kt)("div",{class:"panel"},(0,i.kt)(o.Z,{defaultValue:"linux",values:[{label:"Linux & OSX",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Open a command prompt or terminal"),(0,i.kt)("li",{parentName:"ol"},"Enter the command: ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh username@hostname.ltd -L 8888:localhost:plexport")),(0,i.kt)("li",{parentName:"ol"},"Open your browser window and navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/web")),(0,i.kt)("li",{parentName:"ol"},"The browser will connect to your Plex server and let you know that there is an unclaimed server on your network."))))),(0,i.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please be aware that cmd.exe now ships support for SSH out of the box, so you can very likely use the instructions in the previous tab. If you don't have ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd"),", then use PuTTY."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Open up your PuTTY client again."),(0,i.kt)("li",{parentName:"ol"},"Under gateway, enter the hostname of your server, e.g.: ",(0,i.kt)("inlineCode",{parentName:"li"},"yourhostname.ltd")),(0,i.kt)("li",{parentName:"ol"},"Configure the tunnel:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"On the left hand side, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Connection > SSH > Tunnels")),(0,i.kt)("li",{parentName:"ol"},"Under source port, enter ",(0,i.kt)("inlineCode",{parentName:"li"},"8888")),(0,i.kt)("li",{parentName:"ol"},"Under destination, enter ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:plexport")," "),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Add")))),(0,i.kt)("li",{parentName:"ol"},"Connect to the server by clicking ",(0,i.kt)("inlineCode",{parentName:"li"},"Open")),(0,i.kt)("li",{parentName:"ol"},"PuTTY will prompt you for your username and password like a regular SSH session."),(0,i.kt)("li",{parentName:"ol"},"Once connected, open your browser and navitage to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/web"))),(0,i.kt)("p",{parentName:"div"},"The browser will connect to your Plex server and let you know that there is an unclaimed server on your network.")))))),(0,i.kt)("h2",{id:"service-management"},"Service Management"),(0,i.kt)("p",null,"The systemd service file resides at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/lib/systemd/system/plexmediaserver.service\n")),(0,i.kt)("p",null,"It is not recommended to make edits directly to this file. If you must, please use an override (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl edit plexmediaserver"),")"),(0,i.kt)(s.default,{service:"plexmediaserver",mdxType:"SystemdTabs"}),(0,i.kt)("h2",{id:"adding-more-users-media-to-plex"},"Adding more users' media to Plex"),(0,i.kt)(c.default,{serviceName:"Plex",serviceUsr:"plex",mdxType:"PermsSrv"}),(0,i.kt)("h2",{id:"upgrading"},"Upgrading"),(0,i.kt)("p",null,"You will notice that Plex releases new server installers quite regularly and often. You can handle these ",(0,i.kt)("em",{parentName:"p"},"either")," on your own via ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),", or you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"box upgrade plex")," which will install an automatic update job, and even allow you to use the beta Plex Pass releases if you desire. Feel free to re-run it any time you want it to upgrade again."),(0,i.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,i.kt)("p",null,"If you need to link your Plex instance to another application, such as Sonarr or Tautulli, you can use the following details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Host: 127.0.0.1\nPort: <your plex port>\n")))}y.isMDXComponent=!0},4976:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(5654),l=["components"],s={},c=void 0,u={unversionedId:"snippets/permsmediasrv",id:"snippets/permsmediasrv",isDocsHomePage:!1,title:"permsmediasrv",description:"{props.serviceName} runs as the user {props.serviceUsr}. This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like {props.serviceUsr} to play.",source:"@site/docs/snippets/permsmediasrv.mdx",sourceDirName:"snippets",slug:"/snippets/permsmediasrv",permalink:"/snippets/permsmediasrv",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/permsmediasrv.mdx",tags:[],version:"current",frontMatter:{}},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,n.serviceName," runs as the user ",(0,i.kt)("command",null,n.serviceUsr),". This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like ",n.serviceUsr," to play."),(0,i.kt)("p",null,"During the installation, only the master user is present in this group."),(0,i.kt)("p",null,"In order to access non-master-user files cleanly, please add the ",n.serviceUsr," user to the group of users who can access the desired user's files, and ensure that this group has access to the media you would like to access."),(0,i.kt)(o.Z,{children:"usermod -a -G <aUser> "+n.serviceUsr+"\nchmod g+rx -R /home/<aUser>",className:"bash",mdxType:"CodeBlock"}))}m.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(4297),l=n(8448),s=n(5654),c=["components"],u={},d=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m=[],v={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"code"},(0,i.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);