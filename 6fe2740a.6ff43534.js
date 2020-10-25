(window.webpackJsonp=window.webpackJsonp||[]).push([[38,16],{138:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(141),l=a(139),o=a(50),c=a.n(o),r=37,u=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,b=e.values,d=e.groupId,m=e.className,p=Object(s.a)(),f=p.tabGroupChoices,v=p.setTabGroupChoices,h=Object(n.useState)(o),O=h[0],j=h[1],y=Object(n.useState)(!1),g=y[0],T=y[1];if(null!=d){var w=f[d];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&j(w)}var x=function(e){j(e),null!=d&&v(d,e)},N=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||T(!0)},C=function(){T(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",C)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":O===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case r:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),k(e)},onFocus:function(){return x(t)},onClick:function(){x(t),T(!1)},onPointerDown:function(){return T(!1)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(2),i=a(6),s=(a(0),a(137)),l=a(138),o=a(140),c=a(142),r={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/docs/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/systemdtabs.mdx",version:"current"},b=[],d={rightToc:b};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"code"},Object(s.b)(l.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"start",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"stop",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"restart",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"enable",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(o.a,{value:"disable",mdxType:"TabItem"},Object(s.b)(c.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),s=(a(0),a(137)),l=a(48),o={id:"tautulli",title:"Tautulli",sidebar_label:"Tautulli"},c={unversionedId:"applications/tautulli",id:"applications/tautulli",isDocsHomePage:!1,title:"Tautulli",description:"A Python based monitoring and tracking tool for Plex Media Server.",source:"@site/docs/applications/tautulli.mdx",slug:"/applications/tautulli",permalink:"/docs/applications/tautulli",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/tautulli.mdx",version:"current",sidebar_label:"Tautulli",sidebar:"docs",previous:{title:"Subsonic",permalink:"/docs/applications/subsonic"},next:{title:"Deluge",permalink:"/docs/applications/deluge"}},r=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:r};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A Python based monitoring and tracking tool for Plex Media Server."),Object(s.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(s.b)("p",null,"Installing Tautulli is easy. Simply issue the following command from SSH:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install tautulli\n")),Object(s.b)("p",null,"This command will configure Tautulli for your user. Installation files have been placed in ",Object(s.b)("inlineCode",{parentName:"p"},"/opt/tautulli"),"."),Object(s.b)("h2",{id:"how-to-access"},"How to Access"),Object(s.b)("p",null,"Once Tautulli has been installed, you can access it from your browser at ",Object(s.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/tautulli"),"."),Object(s.b)("h2",{id:"service-management"},"Service Management"),Object(s.b)("p",null,"The service for Tautulli is managed by systemd. The service file for tautulli resides at:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/tautulli.service\n")),Object(s.b)(l.default,{service:"tautulli",mdxType:"SystemdTabs"}),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"Upon visiting your Tautulli dashboard for the first time, the welcome wizard will run."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Sign in with Plex"),Object(s.b)("li",{parentName:"ol"},"Input settings for Plex:")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"Plex IP: 127.0.0.1\nPort: 32400\n")),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Run through the rest of the wizard."),Object(s.b)("li",{parentName:"ol"},"Tautulli is now connected to Plex.")))}b.isMDXComponent=!0}}]);