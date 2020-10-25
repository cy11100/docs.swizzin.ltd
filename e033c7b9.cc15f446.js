(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(137)),l={},c={unversionedId:"guides/cloudflare",id:"guides/cloudflare",isDocsHomePage:!1,title:"cloudflare",description:"The following Wiki article will take you through how to Set up a CDN for Plex with CloudFlare & swizzin.",source:"@site/docs/guides/cloudflare.md",slug:"/guides/cloudflare",permalink:"/docs/guides/cloudflare",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/guides/cloudflare.md",version:"current"},i=[],s={rightToc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following Wiki article will take you through how to Set up a CDN for Plex with CloudFlare & swizzin."),Object(a.b)("p",null,"Difficulty: Easy (easier than a QuickBox install, for sure!)"),Object(a.b)("p",null,"Requirements:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A domain"),Object(a.b)("li",{parentName:"ul"},"A free CloudFlare account")),Object(a.b)("p",null,"Caveats: CloudFlare has the effect of forcing certain levels of TLS encryption on the client. Older clients (such as some SmartTVs) do not support the minimum level of TLS required by CloudFlare, and may prevent them from being able to connect to the server. You can bypass this by rolling your own proxy where you control the level of security."),Object(a.b)("p",null,"I modified this a bit from the github entry posted here along with the corresponding post on Reddit and my old QuickBox guide. This may take a some time to setup, so make sure your read through and understand the instructions before starting!"),Object(a.b)("p",null,"Once you understand what\u2019s involved, grab a cup of coffee and let\u2019s get to work!"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Sign up for CloudFlare")),Object(a.b)("p",null,"The first step is to sign up with an account at CloudFlare and move the nameservers of your domain over to the one\u2019s provided during CloudFlare\u2019s setup. Once CloudFlare is setup, make sure you add your server's IP to a new subdomain, i.e. plex.yourdomain.com. Make sure to turn on routing to CloudFlare (orange cloud icon). Further, under the crypto tab, ensure SSL is set to either Full or Full (Strict)"),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Grab the SSL certificate for your domain:")),Object(a.b)("p",null,"First install acme.sh if you have not run the let's encrypt installer from swizzin yet. Ignore the warning about socat if you receive one. We will not be using the standalone webserver to issue certificates"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"curl https://get.acme.sh | sh\n")),Object(a.b)("p",null,"Now, we will issue a certificate, but first we will define a couple variables:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"hostname={YOUR HOSTNAME. eg plex.yourdomain.com}\nexport CF_Key={YOUR CF API KEY}\nexport CF_Email={YOUR CF EMAIL}\n")),Object(a.b)("p",null,"Once you have defined these variables then get the certificates and install them to your nginx directory. You can copy and paste these commands if you have defined your variables correctly, as above:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'mkdir -p /etc/nginx/ssl/${hostname}\n/root/.acme.sh/acme.sh --issue --dns dns_cf -d ${hostname}\n/root/.acme.sh/acme.sh --install-cert -d ${hostname} --key-file /etc/nginx/ssl/${hostname}/key.pem --fullchain-file /etc/nginx/ssl/${hostname}/fullchain.pem --ca-file /etc/nginx/ssl/${hostname}/chain.pem --reloadcmd "service nginx force-reload"\n')),Object(a.b)("p",null,"We now have everything we need to configure our Plex Reverse Proxy:"),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Configure nginx")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"cd /etc/nginx/sites-enabled\nwget -O plex.conf https://raw.githubusercontent.com/toomuchio/plex-nginx-reverseproxy/master/nginx.conf\n")),Object(a.b)("p",null,"Now we must alter the file to include our failover IP, ssl certificates and dhparam."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"nano plex.conf\n")),Object(a.b)("p",null,"Find:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"server_name\n")),Object(a.b)("p",null,"and replace plex.EXAMPLE.COM with your own hostname"),Object(a.b)("p",null,"Then find:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"ssl_certificate\nssl_certificate_key\n")),Object(a.b)("p",null,"Insert your letsencrypt certificates here:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"ssl_certificate /etc/nginx/ssl/{YOUR HOSTNAME}/fullchain.pem;\nssl_certificate_key /etc/nginx/ssl/{YOUR HOSTNAME}/key.pem;\n")),Object(a.b)("p",null,"Now add our trusted certificate (chain.pem):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"ssl_trusted_certificate /etc/nginx/ssl/{YOUR HOSTNAME}/chain.pem;\n")),Object(a.b)("p",null,"And the dhparam already generated on a default swizzin install a bit further down:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"ssl_dhparam /etc/nginx/ssl/dhparam.pem;\n")),Object(a.b)("p",null,"That\u2019s all the edits we need to make to this file so save and exit. Test your config and cross your fingers!"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"nginx -t\n")),Object(a.b)("p",null,"If all goes well, reload your server configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"systemctl reload nginx\n")),Object(a.b)("p",null,"Now your Plex should be accessible via ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://plex.yourdomain.com"}),"https://plex.yourdomain.com")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Alter your Plex Server settings")),Object(a.b)("p",null,"Make sure \u201cShow Advanced Settings\u201d is on. Under the Network tab add a custom access url:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"http://plex.yourdomain.com:80,https://plex.yourdomain.com:443\n")),Object(a.b)("p",null,"Under Remote Access, disable remote access"),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Update firewall to prevent external pinging of port 32400")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"iptables -A INPUT -p tcp -s localhost --dport 32400 -j ACCEPT\niptables -A INPUT -p tcp --dport 32400 -j DROP\n")),Object(a.b)("p",null,"The first rule ensures our localhost is still able to talk with Plex. This allows our proxy to communicate, with the internal server, but the second rule prevents all other access. As such, you should still be able to access your plex installation from both plex.tv/web/app and plex.yourdomain.com. Confirm you are able to, then once you have, ensure these rules stay persistent upon a reboot with iptables-persistent:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"apt install iptables-persistent\n")),Object(a.b)("p",null,"Choose yes during installation to save your current iptables (note if you have any fail2ban rules, they may get included in here. Make sure you have no firewall rules you don\u2019t want to save, though you can remove unintentional additions if needed."),Object(a.b)("p",null,"At this point, no data should be served from your server via port 32400 and all traffic should flow exclusively through port 443 (you can verify this with tcptrack \u2013 your server will not establish connections via port 32400 during playback though it will try- SYN_CONNECT)."),Object(a.b)("ol",{start:6},Object(a.b)("li",{parentName:"ol"},"Test and enjoy!")),Object(a.b)("p",null,"Please note this may not be perfect \u2013 I will do my best to answer questions and update and errors in the guide. Please let me know if you run into issues!"),Object(a.b)("p",null,"If you\u2019re worried about sending all of your data through cloudflare, the same basic principle could apply to a VPS such as Linode, Vultr or other."))}u.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);