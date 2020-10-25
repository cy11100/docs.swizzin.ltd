(window.webpackJsonp=window.webpackJsonp||[]).push([[72,16],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),s=a(6),i=(a(0),a(137)),c=a(48),r={id:"sickgear",title:"Sickgear",sidebar_label:"Sickgear"},o={unversionedId:"applications/sickgear",id:"applications/sickgear",isDocsHomePage:!1,title:"Sickgear",description:"SickGear is Sick-Beard evolved. Automate your TV enjoyment with innovation, proven stability and reliability.",source:"@site/docs/applications/sickgear.mdx",slug:"/applications/sickgear",permalink:"/docs/applications/sickgear",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/sickgear.mdx",version:"current",sidebar_label:"Sickgear",sidebar:"docs",previous:{title:"Sickchill",permalink:"/docs/applications/sickchill"},next:{title:'Sonarr v2 aka "Stable"',permalink:"/docs/applications/sonarr"}},l=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]}],u={rightToc:l};function d(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"SickGear is Sick-Beard evolved. Automate your TV enjoyment with innovation, proven stability and reliability."),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("p",null,"Installing SickGear is easy. Simply issue the following command from SSH:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"sudo box install sickgear\n")),Object(i.b)("p",null,"This command will install and configure SickGear for your user."),Object(i.b)("h2",{id:"how-to-access"},"How to Access"),Object(i.b)("p",null,"After installation, you can access SickGear at the url: ",Object(i.b)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/sickgear")),Object(i.b)("h2",{id:"service-management"},"Service Management"),Object(i.b)("p",null,"Despite using a multi-user service name, multi-user for SickGear is not enabled by default."),Object(i.b)("p",null,"The systemd service file resides at:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/sickgear@.service\n")),Object(i.b)(c.default,{service:"sickgear@<username>",mdxType:"SystemdTabs"}))}d.isMDXComponent=!0},138:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(141),c=a(139),r=a(50),o=a.n(r),l=37,u=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,d=e.values,b=e.groupId,m=e.className,p=Object(i.a)(),v=p.tabGroupChoices,f=p.setTabGroupChoices,y=Object(n.useState)(r),h=y[0],k=y[1],g=Object(n.useState)(!1),j=g[0],O=g[1];if(null!=b){var w=v[b];null!=w&&w!==h&&d.some((function(e){return e.value===w}))&&k(w)}var T=function(e){k(e),null!=b&&f(b,e)},S=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||O(!0)},N=function(){O(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",N)}}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},m)},d.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",t,o.a.tabItem,{"tabs__item--active":h===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(S,e.target,e),x(e)},onFocus:function(){return T(t)},onClick:function(){T(t),O(!1)},onPointerDown:function(){return O(!1)}},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===h}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(2),s=a(6),i=(a(0),a(137)),c=a(138),r=a(140),o=a(142),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/docs/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/systemdtabs.mdx",version:"current"},d=[],b={rightToc:d};function m(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"code"},Object(i.b)(c.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"start",mdxType:"TabItem"},Object(i.b)(o.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(i.b)(o.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(i.b)(o.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(i.b)(o.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(i.b)(o.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);