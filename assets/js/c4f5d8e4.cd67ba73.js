(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(185),i=a(16),s=a(176),o=a(248),c=a.n(o),u=[{title:l.a.createElement(l.a.Fragment,null,"What is swizzin?"),description:l.a.createElement(l.a.Fragment,null,"swizzin is a collection of bash scripts for Debian-based servers which helps you automate the boring and repetitive tasks of installing, managing and adminsitering a seedbox server. Originally based on QuickBox, swizzin forked away and brought new life to the project in the form of extended OS support, the nginx webserver, a custom built dashboard and extended application support.")},{title:l.a.createElement(l.a.Fragment,null,"Is swizzin actively maintained?"),description:l.a.createElement(l.a.Fragment,null,"Yes! swizzin currently supports Debian Stretch and Buster, as well as Ubuntu Xenial, Bionic and Focal. Packages are kept in working order and reported, reproducible issues are promptly patched. Support for operating systems is subject to change based on availability of upstream support; however, new long-term support versions of Debian & Ubuntu will be added accordingly.")},{title:l.a.createElement(l.a.Fragment,null,"Is swizzin bloated?"),description:l.a.createElement(l.a.Fragment,null,"swizzin only installs the applications you request and the dependencies required to support them. In addition to this, there are a few other global dependencies installed during setup which are generally required by a large portion of packages. As far as which packages to install, that's completely up to you!")},{title:l.a.createElement(l.a.Fragment,null,"Why not put it all in docker?"),description:l.a.createElement(l.a.Fragment,null,"We prefer to keep our applications running as close to the metal as possible. There are many valid times and places where docker would be a good systematic choice, however we believe the trade-offs are not worth it for a seedbox scenario. Keeping apps outside of containers helps you grow buffer, and a lets you tinker with everything as much as you want.")},{title:l.a.createElement(l.a.Fragment,null,"Is swizzin good?"),description:l.a.createElement(l.a.Fragment,null,"It won't end world hunger, it's not going to cure AIDS or adopt all the stray dogs, but it will do what it says it does and make your life easier so there's that.")}];function m(e){var t=e.title,a=e.description;return l.a.createElement("div",{className:c.a.question},l.a.createElement("h3",{className:c.a.title},t),l.a.createElement("p",null,a))}var p=function(){return l.a.createElement("section",{id:"faq",className:c.a.faq},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6"},u[0]&&l.a.createElement(m,u[0]),u[1]&&l.a.createElement(m,u[1])),l.a.createElement("div",{className:"col col--6"},u[2]&&l.a.createElement(m,u[2]),u[3]&&l.a.createElement(m,u[3])),l.a.createElement("div",{className:"col col--6"}))))},d=a(3),g=a(165),f=a(196),b=a(1),h=a(249),E=a.n(h);function v(e){var t=e.category,a=e.title,n=e.offset;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--"+(12-n)+" col--offset-"+n},l.a.createElement("div",{className:E.a.headline},t&&l.a.createElement("span",{className:E.a.category},t),a&&l.a.createElement("h2",{className:E.a.title},a))))}v.propTypes={category:b.PropTypes.string,title:b.PropTypes.string,offset:b.PropTypes.number},v.defaultProps={offset:0};var w=v,y=a(250),N=a.n(y),k=[{title:"AutoDL-irssi",url:"applications/autodl"},{title:"Bazarr",url:"applications/bazarr"},{title:"Deluge",url:"applications/deluge"},{title:"DuckDNS",url:"applications/duckdns"},{title:"Emby Server",url:"applications/emby"},{title:"ffmpeg",url:"applications/ffmpeg"},{title:"Filebrowser",url:"applications/filebrowser"},{title:"Flood",url:"applications/flood"},{title:"Jackett",url:"applications/jackett"},{title:"Jellyfin",url:"applications/jellyfin"},{title:"Let's Encrypt",url:"applications/letsencrypt"},{title:"Librespeed",url:"applications/librespeed"},{title:"Lidarr",url:"applications/lidarr"},{title:"The Lounge",url:"applications/lounge"},{title:"Mango",url:"applications/mango"},{title:"Medusa",url:"applications/medusa"},{title:"Netdata",url:"applications/netdata"},{title:"Nextcloud",url:"applications/nextcloud"},{title:"Nginx",url:"applications/nginx"},{title:"NZBGet",url:"applications/nzbget"},{title:"NZBHydra2",url:"applications/nzbhydra"},{title:"Ombi",url:"applications/ombi"},{title:"Organizr",url:"applications/organizr"},{title:"Plex",url:"applications/plex"},{title:"Prowlarr",url:"applications/prowlarr"},{title:"pyLoad",url:"applications/pyload"},{title:"qBittorrent",url:"applications/qbittorrent"},{title:"Quassel",url:"applications/quassel"},{title:"Quota",url:"applications/quota"},{title:"Radarr",url:"applications/radarr"},{title:"Rapidleech",url:"applications/rapidleech"},{title:"Rclone",url:"applications/rclone"},{title:"Resilio Sync",url:"applications/btsync"},{title:"rTorrent",url:"applications/rtorrent"},{title:"ruTorrent",url:"applications/rutorrent"},{title:"SABnzbd",url:"applications/sabnzbd"},{title:"Shellinabox",url:"applications/shellinabox"},{title:"SickChill",url:"applications/sickchill"},{title:"SickGear",url:"applications/sickgear"},{title:"Sonarr v2",url:"applications/sonarr"},{title:"Sonarr v3",url:"applications/sonarrv3"},{title:"Swizzin Panel",url:"applications/panel"},{title:"Syncthing",url:"applications/syncthing"},{title:"Tautulli",url:"applications/tautulli"},{title:"Transmission",url:"applications/transmission"},{title:"Vsftpd",url:"applications/vsftpd"},{title:"Webmin",url:"applications/webmin"},{title:"Wireguard",url:"applications/wireguard"},{title:"X2go",url:"applications/x2go"},{title:"Xmrig",url:"applications/xmrig"},{title:"ZNC",url:"applications/znc"}];function z(e){var t=e.title,a=e.url;return l.a.createElement("div",{className:Object(g.a)("col col--2",N.a.feature,N.a.applications)},l.a.createElement(s.a,{href:a},t))}var A=function(){return l.a.createElement(l.a.Fragment,null,k&&k.length>0&&l.a.createElement("section",{id:"applications",className:N.a.features},l.a.createElement("div",{className:"container"},l.a.createElement(w,{category:"Applications",title:"A whole repository of applications to fit your needs",offset:1}),l.a.createElement("div",{className:"row"},k.map((function(e,t){return l.a.createElement(z,Object(d.a)({key:t},e))}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--5 col--offset-1"},l.a.createElement(s.a,{className:Object(g.a)("button button--primary button--lg",N.a.button),href:"https://feathub.com/liaralabs/swizzin"},l.a.createElement(f.b,{size:24})," App and feature requests"))))))},F=a(251),_=a.n(F),O=[{title:l.a.createElement(l.a.Fragment,null,"One command to rule them all"),description:l.a.createElement(l.a.Fragment,null,"Install, remove and update apps with ease. Make new users and manage their accounts.")},{title:l.a.createElement(l.a.Fragment,null,"All the apps you need"),description:l.a.createElement(l.a.Fragment,null,"From autodl to ZNC and everything in between, you won't need to look elsewhere")},{title:l.a.createElement(l.a.Fragment,null,"Actively maintained"),description:l.a.createElement(l.a.Fragment,null,"Quick response time to breaking changes when new app versions release")},{title:l.a.createElement(l.a.Fragment,null,"Helpful community"),description:l.a.createElement(l.a.Fragment,null,"Need help setting up or making choices? Our community has your back any time")},{title:l.a.createElement(l.a.Fragment,null,"Fast and lean"),description:l.a.createElement(l.a.Fragment,null,"Footprint is as light as the choice of your applications")},{title:l.a.createElement(l.a.Fragment,null,"Trusted by the industry"),description:l.a.createElement(l.a.Fragment,null,"A popular choice of paid hosting providers, as well as  hobbyist self-hosters")},{title:l.a.createElement(l.a.Fragment,null,"Multi-user capable"),description:l.a.createElement(l.a.Fragment,null,"Share your server with others by making them their own server-wide accounts")},{title:l.a.createElement(l.a.Fragment,null,"Little skills necessary"),description:l.a.createElement(l.a.Fragment,null,"As long as you can SSH into your server and you know how to read, sky is the limit. Thoroughly fool-proof")},{title:l.a.createElement(l.a.Fragment,null,"Stability first"),description:l.a.createElement(l.a.Fragment,null,"Built to make those uptimes grow, but not to keep you on last decade's releases")}];function x(e){var t=e.title,a=e.description;return l.a.createElement("div",{className:Object(g.a)("col col--4",_.a.feature)},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__header"},l.a.createElement("h3",null,t)),l.a.createElement("div",{className:"card__body"},l.a.createElement("p",null,a))))}var j=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e.splice(6,3),e}(O);return l.a.createElement(l.a.Fragment,null,e&&e.length>0&&l.a.createElement("section",{id:"features",className:_.a.features},l.a.createElement("div",{className:"container"},l.a.createElement(w,{category:"Features",title:"Manage your box with ease and confidence",offset:1}),l.a.createElement("div",{className:"row"},O.map((function(e,t){return l.a.createElement(x,Object(d.a)({key:t},e))}))))))},S=a(252),q=a.n(S),L=a(177),C=a(253),D=a(270),G=a.n(D),I=a(271),T=a.n(I);var B=function(){var e=Object(i.default)().siteConfig,t=void 0===e?{}:e;return l.a.createElement("header",{id:"hero",className:Object(g.a)("hero",T.a.banner)},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:Object(L.a)("img/logo-sm.png"),alt:"Logo",className:T.a.logo}),l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:Object(g.a)("hero__subtitle",T.a.subtitle)},"An all-in-one seedbox solution for Ubuntu and Debian"),l.a.createElement("div",{className:T.a.buttons},l.a.createElement(q.a,{className:Object(g.a)("button button--primary button--lg",T.a.button),href:"#quick-start"},"Get Started"),l.a.createElement(s.a,{className:Object(g.a)("button button--info button--lg",T.a.button),href:"getting-started"},"Get Help"))),l.a.createElement(C.a,{img:G.a,className:Object(g.a)("shadow-md",T.a.image)}))},K=a(273),P=a(272),Q=a.n(P),H=[{href:"/getting-started/faqs",icon:l.a.createElement(K.b,{size:48}),description:l.a.createElement(l.a.Fragment,null,"Frequently Asked Questions")},{href:"https://discord.gg/sKjs9UM",icon:l.a.createElement(K.a,{size:48}),description:l.a.createElement(l.a.Fragment,null,"Join our Discord to keep in touch")},{href:"getting-started",icon:l.a.createElement(f.a,{size:48}),title:l.a.createElement(l.a.Fragment,null,"Documentation"),description:l.a.createElement(l.a.Fragment,null,"Check our documentation to get your devices up and running in minutes")},{href:"https://github.com/liaralabs/swizzin",icon:l.a.createElement(f.c,{size:48}),title:l.a.createElement(l.a.Fragment,null,"Contribute"),description:l.a.createElement(l.a.Fragment,null,"Help us improve by submitting bugs and feature requests on GitHub")}],Z=function(){return l.a.createElement(l.a.Fragment,null,H&&H.length>0&&l.a.createElement("section",{id:"resouces",className:Q.a.resources},l.a.createElement("div",{className:"container"},l.a.createElement(w,{category:"Resources",title:"Browse our resources to get started with swizzin",offset:1}),l.a.createElement("div",{className:"row"},H[0]&&H[1]&&l.a.createElement("div",{className:Object(g.a)("col",Q.a.resource)},l.a.createElement(M,H[0]),l.a.createElement(M,H[1])),H[2]&&l.a.createElement("div",{className:Object(g.a)("col",Q.a.resource)},l.a.createElement(M,H[2])),H[3]&&l.a.createElement("div",{className:Object(g.a)("col",Q.a.resource)},l.a.createElement(M,H[3]))))))};function M(e){var t=e.href,a=e.icon,n=e.title,r=e.description;return l.a.createElement(s.a,{className:Object(g.a)("card",Q.a.card),to:t},l.a.createElement("div",{className:"card__header"},a&&l.a.createElement("div",{className:"card__icon"},a),n&&l.a.createElement("h3",null,n)),r&&l.a.createElement("div",{className:"card__body"},l.a.createElement("p",null,r)))}var U=a(195),W=a(275),Y=a(274),J=a.n(Y);var R=function(){return l.a.createElement("section",{id:"quick-start",className:J.a.quickstart},l.a.createElement("div",{className:"container"},l.a.createElement(w,{category:"Quick Start",title:"Get up and running within minutes",offset:1}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--5 col--offset-1"},l.a.createElement("p",null,"Use the following commands as root to get the swizzin installer up and running. Depending on your choice of packages and your CPU, you can have your applications up and running within just a few minutes!"),l.a.createElement(s.a,{className:Object(g.a)("button button--primary button--lg",J.a.button),href:"https://github.com/liaralabs/swizzin/blob/master/CHANGELOG.md"},l.a.createElement(f.c,{size:24})," Changelog")),l.a.createElement("div",{className:"col col--5"},l.a.createElement(U.a,null),l.a.createElement("div",{className:J.a.platforms},l.a.createElement("h3",null,"Supported Platforms"),l.a.createElement("div",null,l.a.createElement(W.a,{size:36}),l.a.createElement(W.b,{size:36})))))))},V=a(276),X=a.n(V);t.default=function(){var e=Object(i.default)().siteConfig,t=(void 0===e?{}:e).tagline;return l.a.createElement(r.a,{description:t},l.a.createElement(B,null),l.a.createElement("main",{className:X.a.main},l.a.createElement(j,null),l.a.createElement(A,null),l.a.createElement(R,null),l.a.createElement(p,null),l.a.createElement(Z,null)))}},166:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(170),i=a(165),s=a(58),o=a.n(s),c=37,u=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,m=e.values,p=e.groupId,d=e.className,g=Object(r.a)(),f=g.tabGroupChoices,b=g.setTabGroupChoices,h=Object(n.useState)(s),E=h[0],v=h[1],w=Object(n.useState)(!1),y=w[0],N=w[1];if(null!=p){var k=f[p];null!=k&&k!==E&&m.some((function(e){return e.value===k}))&&v(k)}var z=function(e){v(e),null!=p&&b(p,e)},A=[],F=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},_=function(){N(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",F),window.addEventListener("mousedown",_),function(){window.removeEventListener("keydown",F),window.removeEventListener("mousedown",_)}}),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},m.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":E===t,className:Object(i.a)("tabs__item",t,o.a.tabItem,{"tabs__item--active":E===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return A.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(A,e.target,e),F(e)},onFocus:function(){return z(t)},onClick:function(){z(t),N(!1)},onPointerDown:function(){return N(!1)}},a)}))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===E}))[0]))}},195:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(166),i=a(167),s=a(174),o=[{label:"curl",cmd:"bash <(curl -sL git.io/swizzin) && . ~/.bashrc"},{label:"wget",cmd:"bash <(wget -qO - git.io/swizzin) && . ~/.bashrc"}];t.a=function(){return l.a.createElement(l.a.Fragment,null,o&&o.length&&l.a.createElement(r.a,{defaultValue:o[0].label,values:o.map((function(e,t){return{label:e.label,value:e.label}}))},o.map((function(e,t){return l.a.createElement(i.a,{value:e.label},l.a.createElement("div",{className:"code"},l.a.createElement(s.a,{children:e.cmd,className:"bash"})))}))))}},248:function(e,t,a){e.exports={question:"question_3lwZ",title:"title_2Hsw"}},249:function(e,t,a){e.exports={headline:"headline_HnFF",category:"category_3ZGa",title:"title_2hQh",titleGradient:"titleGradient_Ii-4"}},250:function(e,t,a){e.exports={features:"features_1k3U",applications:"applications_U6oY",button:"button_TK1G"}},251:function(e,t,a){e.exports={features:"features_33CR"}},270:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/panel-screenshot.7e3020a.1892.png 1892w",images:[{path:a.p+"assets/ideal-img/panel-screenshot.7e3020a.1892.png",width:1892,height:1027}],src:a.p+"assets/ideal-img/panel-screenshot.7e3020a.1892.png",toString:function(){return a.p+"assets/ideal-img/panel-screenshot.7e3020a.1892.png"},placeholder:void 0,width:1892,height:1027},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVQI1w3OsW7DMAxFUf+SY1t8JMVITv4fyJLdQ71UKKIGRbPEYLhxOLzksAD3BfzHLA8i6gB3Zu5LSp2ALqpPAPugql/TNDnO6qTiKuKWs5/G0ZHFy3V1EP0PKthOAVn4HaWDGEdey4GYY+kNNZ8p/Q5mZZ/n2WuprvXsyaK4Fpeo56gnqz4yvQLaLeAjzn1ztbaYtIAtXmq1lIZy+Qm4fQBLT1F4rWHaQgAAAABJRU5ErkJggg==",palette:null}},271:function(e,t,a){e.exports={banner:"banner_2id8",logo:"logo_3_Ij",buttons:"buttons_3MO6",button:"button__EX9",subtitle:"subtitle_1WsD",image:"image_11zC"}},272:function(e,t,a){e.exports={resources:"resources_hpxd",resource:"resource_MIY-",card:"card_4S33"}},274:function(e,t,a){e.exports={download:"download_13fu",quickstart:"quickstart_2AMp",button:"button_1mLU",platforms:"platforms_3dQ9",assets:"assets_3xKz",asset:"asset_j2v9",info:"info_3wKH",size:"size_EZic"}},276:function(e,t,a){e.exports={main:"main_1Zpl"}}}]);