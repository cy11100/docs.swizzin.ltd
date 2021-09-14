"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[8080,865,2295,1687],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),i=n(2713);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4297:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),i=n(50),r=n(6010),o="tabItem_HqPw",l=37,s=39;var u=function(e){var t=e.block,n=e.children,u=e.defaultValue,p=e.values,c=e.groupId,d=e.className,m=(0,i.Z)(),h=m.tabGroupChoices,b=m.setTabGroupChoices,f=(0,a.useState)(u),k=f[0],g=f[1],y=(0,a.useState)(!1),w=y[0],v=y[1];if(null!=c){var N=h[c];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&g(N)}var C=function(e){g(e),null!=c&&b(c,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},I=function(){v(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",I),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",I)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":k===t,className:(0,r.Z)("tabs__item",t,o,{"tabs__item--active":k===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return C(t)},onClick:function(){C(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===k}))[0]))}},6125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(9733),l=n(9124),s=n(9353),u=["components"],p={id:"calibreweb",title:"Calibre-Web",sidebar_label:"Calibre-Web"},c=void 0,d={unversionedId:"applications/calibreweb",id:"applications/calibreweb",isDocsHomePage:!1,title:"Calibre-Web",description:"Calibre-web is a graphical web frontend for a Calibre Library with many very useful features, such as user management, on-the-fly conversion, Send-to-Kindle and Kobo Sync API.",source:"@site/docs/applications/calibreweb.mdx",sourceDirName:"applications",slug:"/applications/calibreweb",permalink:"/applications/calibreweb",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/calibreweb.mdx",tags:[],version:"current",frontMatter:{id:"calibreweb",title:"Calibre-Web",sidebar_label:"Calibre-Web"},sidebar:"docs",previous:{title:"Airsonic",permalink:"/applications/airsonic"},next:{title:"Emby",permalink:"/applications/emby"}},m=[{value:"Initial Setup",id:"initial-setup",children:[{value:"Options",id:"options",children:[]}]},{value:"Post-install",id:"post-install",children:[]},{value:"User management",id:"user-management",children:[]},{value:"Service management",id:"service-management",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Verbose output",id:"verbose-output",children:[]}]}],h={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Calibre-web is a graphical web frontend for a Calibre Library with many very useful features, such as user management, on-the-fly conversion, Send-to-Kindle and Kobo Sync API."),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"Installing Calibre-web is easy. Simply issue the following command from SSH:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install calibreweb\n")),(0,r.kt)("p",null,"This command will configure and install Calibre-web."),(0,r.kt)("p",null,"You will then be able to access it through either ",(0,r.kt)("inlineCode",{parentName:"p"},"http://domain.tld/calibre")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"http://domain.tld:8083"),", depending on whether or not you have nginx installed."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)(o.default,{mdxType:"InstallOptsWarning"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CALIBRE_LIBRARY_USER"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default: The name of the master user"),(0,r.kt)("li",{parentName:"ul"},"Adds the dedicated calibre-web user to the group of this user"),(0,r.kt)("li",{parentName:"ul"},"Used to infer possible calibre library path if not specified (see below)"),(0,r.kt)("li",{parentName:"ul"},"Calibre-web's admin password will be set to the value of this user's password"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CALIBRE_LIBRARY_PATH"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If exists, then: ",(0,r.kt)("inlineCode",{parentName:"li"},"/home/$CALIBRE_LIBRARY_USER/Calibre Library")),(0,r.kt)("li",{parentName:"ul"},"Otherwise unset, which will skip the library setup and password change procedure"))),(0,r.kt)("li",{parentName:"ul"},"Used to set up the calibre-web basic setup")))),(0,r.kt)("h2",{id:"post-install"},"Post-install"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"*")," Link to your instance of the Calibre Library folder",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"* Note: swizzin should do this for you during install in most cases. You should be told in the output if you need to do this")),(0,r.kt)("li",{parentName:"ul"},"For example ",(0,r.kt)("inlineCode",{parentName:"li"},"/home/masteruser/Calibre Library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Note:")," If you installed calibre through swizzin, this step will be done for you"),(0,r.kt)("li",{parentName:"ul"},"If you would like to add your existing library, you will need to give the ",(0,r.kt)("inlineCode",{parentName:"li"},"calibreweb")," system user access to your library with these commands:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace $theuser with the name of the user which has the library files\nsudo usermod -a -G $theuser calibreweb\nsudo chmod 750 -R /home/$theuser\nsudo chmod 770 /home/$theuser/path/to/library\nsystemctl restart calibre-web\n"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"*")," Change the password of the admin user ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"* Note: swizzin should do this for you during install in most cases. You should be told in the output if you need to do this")),(0,r.kt)("li",{parentName:"ul"},"Log in to calibre using ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),":",(0,r.kt)("inlineCode",{parentName:"li"},"admin123")),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<domain>/calibre/me")," and change the password there.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You might need to fill in an email address for this action to work"))))),(0,r.kt)("li",{parentName:"ol"},"Change the name of the admin user",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in to calibre using ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),":",(0,r.kt)("inlineCode",{parentName:"li"},"<your password>")),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<domain>/calibre/me")," and change the details there",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You might need to fill in an email address for this action to work"))))),(0,r.kt)("li",{parentName:"ol"},"Link or install necessary binaries",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<domain>/calibre-web/admin/config"),' and open the "External binaries" section at the bottom'),(0,r.kt)("li",{parentName:"ul"},"Calibre e-book converter should be in ",(0,r.kt)("strong",{parentName:"li"},"either")," of these paths",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/usr/bin/ebook-convert")," (if installed via apt)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/opt/calibre/ebook-convert")," (if installed through calibre installer)"))),(0,r.kt)("li",{parentName:"ul"},"Kepubify is installed in ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/kepubify")),(0,r.kt)("li",{parentName:"ul"},"If you have ",(0,r.kt)("inlineCode",{parentName:"li"},"unrar")," installed (",(0,r.kt)("inlineCode",{parentName:"li"},"apt install unrar"),"), it will be in ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/kepubify")))),(0,r.kt)("li",{parentName:"ol"},"Set up SMTP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Get an SMTP gate and credentials"),(0,r.kt)("li",{parentName:"ul"},"External guide goes here"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optional:")," configure the direct Google Drive support",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please check ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/janeczku/calibre-web/wiki/Configuration#using-google-drive-integration"},"this article")," for the appropriate steps"),(0,r.kt)("li",{parentName:"ul"},"You only need to do this when you want to keep your entire library in google drive, not if you're using rclone etc.")))),(0,r.kt)("h2",{id:"user-management"},"User management"),(0,r.kt)("p",null,"Calibre-web has its own internal user database ",(0,r.kt)("strong",{parentName:"p"},"which swizzin does not manage in any way"),". Please manage your users through the web interface."),(0,r.kt)("h2",{id:"service-management"},"Service management"),(0,r.kt)("p",null,"Calibre-web runs as its own single process with its own system user."),(0,r.kt)("p",null,"The systemd service for calibre-web resides here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/systemd/system/calibre-web.service\n")),(0,r.kt)("p",null,"You can use the following commands to manage the service."),(0,r.kt)(l.default,{service:"calibre-web",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)(s.default,{mdxType:"Troubleshooting"}),(0,r.kt)("p",null,"Please make sure to consult the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janeczku/calibre-web/issues"},"issues")," of Calibre-web and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janeczku/calibre-web/wiki"},"expansive wiki of the project"),". "),(0,r.kt)("h3",{id:"verbose-output"},"Verbose output"),(0,r.kt)("p",null,"Calibre-web stores its logs in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/calibre-web/calibre-web.log")," and optionally ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/calibre-web/access.log"),"."),(0,r.kt)("p",null,"You can increase the verbosity of the log level by going to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://domain.tld/calibre/admin/config"),', opening the "Logfile Configuration" section and changing the level there.'))}b.isMDXComponent=!0},9733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],l={},s=void 0,u={unversionedId:"snippets/installoptswarning",id:"snippets/installoptswarning",isDocsHomePage:!1,title:"installoptswarning",description:"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you.",source:"@site/docs/snippets/installoptswarning.md",sourceDirName:"snippets",slug:"/snippets/installoptswarning",permalink:"/snippets/installoptswarning",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/installoptswarning.md",tags:[],version:"current",frontMatter:{}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Make sure you know what you're doing!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Please note that it is difficult for us to support these options as they are custom for each install")),(0,r.kt)("p",{parentName:"div"},"None of the options are sanity-checked on install so setting something wrong could break your installation."),(0,r.kt)("p",{parentName:"div"},"Again, you do not need to set these if you don't know what you're doing."))),(0,r.kt)("p",null,"There are a couple options you can set ",(0,r.kt)("strong",{parentName:"p"},"before")," installing transmission through export. "),(0,r.kt)("p",null,"If you'd like to use one of these, run ",(0,r.kt)("inlineCode",{parentName:"p"},"export option=value")," ",(0,r.kt)("strong",{parentName:"p"},"before")," running the install command."))}d.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(4297),l=n(8448),s=n(5654),u=["components"],p={},c=void 0,d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m=[],h={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0},9353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],l={},s=void 0,u={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",tags:[],version:"current",frontMatter:{}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can always also try the ",(0,r.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}d.isMDXComponent=!0}}]);