"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[5905],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(i,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9787:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),l=["components"],s={},i=void 0,u={unversionedId:"guides/cloudflare-qb",id:"guides/cloudflare-qb",isDocsHomePage:!1,title:"cloudflare-qb",description:"This is the original write up of how to install the CloudFlare reverse proxy for Plex from the QuickBox forums. Since the forums and site are currently gone, I have decided to host it here, for posterity, for as long as this project remains on github.",source:"@site/docs/guides/cloudflare-qb.md",sourceDirName:"guides",slug:"/guides/cloudflare-qb",permalink:"/guides/cloudflare-qb",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/guides/cloudflare-qb.md",tags:[],version:"current",frontMatter:{}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the original write up of how to install the CloudFlare reverse proxy for Plex from the QuickBox forums. Since the forums and site are currently gone, I have decided to host it here, for posterity, for as long as this project remains on github."),(0,a.kt)("p",null,"The following Wiki article will take you through how to Set up a CDN for Plex with CloudFlare & NGINX."),(0,a.kt)("p",null,"Difficulty: Moderate"),(0,a.kt)("p",null,"Requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A second IP (can be done with one, but not the scope of this guide)"),(0,a.kt)("li",{parentName:"ul"},"A domain"),(0,a.kt)("li",{parentName:"ul"},"A free CloudFlare account")),(0,a.kt)("p",null,"Caveats: CloudFlare has the effect of forcing certain levels of TLS encryption on the client. Older clients (such as some SmartTVs) do not support the minimum level of TLS required by CloudFlare, and may prevent them from being able to connect to the server. You can bypass this by rolling your own proxy where you control the level of security."),(0,a.kt)("p",null,"I modified this a bit from the github entry posted here along with the corresponding post on Reddit. This may take a good amount of time to setup, so make sure your read through and understand the instructions before starting! Sure this might be a bit convoluted and setting up apache and nginx to work aside each other is a bit of a pain, but with QuickBox utilizing Apache and Plex not playing well with it, there are few options."),(0,a.kt)("p",null,"Once you understand what\u2019s involved, grab a cup of coffee and let\u2019s get to work!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign up for CloudFlare")),(0,a.kt)("p",null,"The first step is to sign up with an account at CloudFlare and move the nameservers of your domain over to the one\u2019s provided during CloudFlare\u2019s setup. Once CloudFlare is setup, make sure you add your failover IP to a new subdomain, i.e. plex.yourdomain.com. Until we setup Let\u2019s Encrypt for the subdomain, ensure server traffic is not being routed through CloudFlare just yet. (grey icon) Further, under the crypto tab, ensure SSL is set to either Full or Full (Strict)"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add a second IP to your server")),(0,a.kt)("p",null,"As your new nameservers propagate throughout the network, take this time to bring up the second IP on your server. We need this second IP to bind an instance of NGINX to, so that there are no conflicts with our currently running Apache server. If you want to reverse proxy apache through nginx, you could run this all off a single IP, but that won\u2019t be covered here."),(0,a.kt)("p",null,"The setup of an IP may vary from host to host; however for a dedicated machine running Ubuntu, this method should work for most. A failover ip can be brought online by editing the file/etc/network/interfaces to bring a new ip address online for your network interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/network/interfaces\n")),(0,a.kt)("p",null,"Insert at the bottom of interface eth0 (before ipv6 if your server supports it). Replace IP.OF.FAIL.OVER with the IP you were given by your provider and replace eth0 with the name of your adapter if necessary (e.g. enp2s0):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"up ip addr add IP.OF.FAIL.OVER/32 dev eth0\ndown ip addr del IP.OF.FAIL.OVER/32 dev eth0\n")),(0,a.kt)("p",null,"Save and exit. Bring the new interface online with the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ip addr add IP.OF.FAIL.OVER/32 dev eth0\n")),(0,a.kt)("p",null,"You should now be able to ping your new IP. Confirm with a local test:ping IP.OF.FAIL.OVER If your new IP fails to respond to ping, consider consulting your host\u2019s documentation for help."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Bind Apache to the main IP of your server")),(0,a.kt)("p",null,"If you don\u2019t know the IP address of your server you can attempt to be lazy and grab it with this one-liner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sudo ifconfig | grep -m1 "inet addr" | cut -d: -f2 | cut -d" " -f1\n')),(0,a.kt)("p",null,"If that doesn\u2019t work, check the email that your host sent you \ud83d\ude05"),(0,a.kt)("p",null,"Now we need to edit two files in apache to prevent Apache2 from binding to all available interfaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/apache2/ports.conf\n")),(0,a.kt)("p",null,"It should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# If you just change the port or add more ports here, you will likely also\n# have to change the VirtualHost statement in\n# /etc/apache2/sites-enabled/000-default.conf\n \nListen 80\n \n<IfModule ssl_module>\nListen 443\n</IfModule>\n \n<IfModule mod_gnutls.c>\nListen 443\n</IfModule>\n \n# vim: syntax=apache ts=4 sw=4 sts=4 sr noet\n")),(0,a.kt)("p",null,"Alter the file as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# If you just change the port or add more ports here, you will likely also\n# have to change the VirtualHost statement in\n# /etc/apache2/sites-enabled/000-default.conf\n \nListen ORIG.IP.OF.SRV:80\n \n<IfModule ssl_module>\nListen ORIG.IP.OF.SRV:443\n</IfModule>\n \n<IfModule mod_gnutls.c>\nListen ORIG.IP.OF.SRV:443\n</IfModule>\n \n# vim: syntax=apache ts=4 sw=4 sts=4 sr noet\n")),(0,a.kt)("p",null,"Save, exit and load up the next file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/apache2/sites-enabled/default-ssl.conf\n")),(0,a.kt)("p",null,"Find the sections where it says<VirtualHost ",(0,a.kt)("em",{parentName:"p"},":80> and<VirtualHost "),":443>. Replace the asterisks with the ORIG.IP.OF.SRV:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n<VirtualHost ORIG.IP.OF.SRV:80>\n...\n<VirtualHost ORIG.IP.OF.SRV:443>\n")),(0,a.kt)("p",null,"Now, stop Apache2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl stop apache2\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Install NGINX, Let\u2019s Encrypt and bind to the failover IP Start by installing nginx:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install nginx\n")),(0,a.kt)("p",null,"Also, if you do not have Let\u2019s Encrypt installed, now would be the time to do that"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install letsencrypt\n")),(0,a.kt)("p",null,"Now, we need to alter nginx to bind to our new IP and also connect with the Let\u2019s Encrypt servers so that they can issue you an SSL certificate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/nginx/sites-enabled/default\n")),(0,a.kt)("p",null,"Underneath the block you should see"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\nlisten 80 default_server;\n")),(0,a.kt)("p",null,"Insert your failover IP and the .well-known location for Let\u2019s Encrypt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\nlisten IP.OF.FAIL.OVER:80 default_server;\n \nlocation ~ /.well-known {\nallow all;\n}\n")),(0,a.kt)("p",null,"Save and exit. Run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo nginx -t")," to ensure your configuration is valid. If yes, hooray! Let\u2019s take this opportunity to restart nginx and bring our apache2 server back online."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl restart nginx\nsudo systemctl restart apache2\n")),(0,a.kt)("p",null,"Ensure there are no conflicts and both services are currently running (",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status apache2")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status nginx"),")"),(0,a.kt)("p",null,"Now we can use Let\u2019s Encrypt to grab an SSL certificate. Make sure your DNS is pointing at your failover (and not through cloudflare)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo letsencrypt certonly -a webroot --webroot-path=/var/www/html -d plex.yourdomain.com\n")),(0,a.kt)("p",null,"If all goes well you now have shiny new SSL certs for plex.yourdomain.com."),(0,a.kt)("p",null,"Now we will beef up security just a bit more:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo bash\ncd /etc/letsencrypt/live/plex.yourdomain.com/\n")),(0,a.kt)("p",null,"Check the issuing authority of your certificate as per: source"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo openssl x509 -noout -text -in fullchain.pem | grep Issuer:\n")),(0,a.kt)("p",null,"You\u2019ll see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Issuer: C=US, O=Let's Encrypt, CN=Let's Encrypt Authority X3\n")),(0,a.kt)("p",null,"Download the corresponding pem:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'wget -O chain.pem "https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem"\n')),(0,a.kt)("p",null,"Change x3 if necessary to correlate to the authority who issued your certificate."),(0,a.kt)("p",null,"Now we will generate a dhparam for nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir -p /etc/nginx/ssl\ncd /etc/nginx/ssl\nopenssl dhparam -out dhparam.pem 2048\n")),(0,a.kt)("p",null,"We now have everything we need to configure our Plex Reverse Proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /etc/nginx/sites-enabled\nwget -O plex.conf https://raw.githubusercontent.com/toomuchio/plex-nginx-reverseproxy/master/nginx.conf\n")),(0,a.kt)("p",null,"Now we must alter the file to include our failover IP, ssl certificates and dhparam."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano plex.conf\n")),(0,a.kt)("p",null,"Find and insert your failover IP into the two listen parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"listen 80;\nlisten 443 ssl http2;\n")),(0,a.kt)("p",null,"becomes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"listen IP.OF.FAIL.OVER:80;\nlisten IP.OF.FAIL.OVER:443 ssl http2;\n")),(0,a.kt)("p",null,"Next find:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssl_certificate\nssl_certificate_key\n")),(0,a.kt)("p",null,"Insert your letsencrypt certificates here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssl_certificate /etc/letsencrypt/live/plex.yourdomain.com/fullchain.pem;\nssl_certificate_key /etc/letsencrypt/live/plex.yourdomain.com/privkey.pem;\n")),(0,a.kt)("p",null,"Now add our trusted certificate (chain.pem):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssl_trusted_certificate /etc/letsencrypt/live/plex.yourdomain.com/chain.pem;\n")),(0,a.kt)("p",null,"And the dhparam a bit further down:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssl_dhparam /etc/nginx/ssl/dhparam.pem;\n")),(0,a.kt)("p",null,"That\u2019s all the edits we need to make to this file so save and exit. Test your config and cross your fingers!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nginx -t\n")),(0,a.kt)("p",null,"If all goes well, start your server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start nginx\n")),(0,a.kt)("p",null,"Now your Plex should be accessible via",(0,a.kt)("a",{parentName:"p",href:"https://plex.yourdomain.com"},"https://plex.yourdomain.com")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Alter your Plex Server settings")),(0,a.kt)("p",null,"Make sure \u201cShow Advanced Settings\u201d is on. Under the Network tab add a custom access url:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://plex.yourdomain.com:443\n")),(0,a.kt)("p",null,"Under Remote Access, disable remote access"),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Update firewall to prevent external pinging of port 32400")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"iptables -A INPUT -p tcp -s localhost --dport 32400 -j ACCEPT\niptables -A INPUT -p tcp --dport 32400 -j DROP\n")),(0,a.kt)("p",null,"The first rule ensures our localhost is still able to talk with Plex. This allows our proxy to communicate, with the internal server, but the second rule prevents all other access. As such, you should still be able to access your plex installation from both plex.tv/web/app and plex.yourdomain.com. Confirm you are able to, then once you have, ensure these rules stay persistent upon a reboot with iptables-persistent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install iptables-persistent\n")),(0,a.kt)("p",null,"Choose yes during installation to save your current iptables (note if you have any fail2ban rules, they may get included in here. Make sure you have no firewall rules you don\u2019t want to save, though you can remove unintentional additions if needed."),(0,a.kt)("p",null,"At this point, no data should be served from your server via port 32400 and all traffic should flow exclusively through port 443 (you can verify this with tcptrack \u2013 your server will not establish connections via port 32400 during playback though it will try- SYN_CONNECT)."),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Enable CloudFlare CDN for plex.mydomain.com")),(0,a.kt)("p",null,"Change over that grey cloud icon to the orange one!"),(0,a.kt)("p",null,"Your data is now being proxied through CloudFlare\u2019s servers. Congratulations!! Once the DNS switches over to your CloudFlare IP you should see a noticeable improvement in your speeds and jitter."),(0,a.kt)("p",null,"Please note this may not be perfect \u2013 I will do my best to answer questions and update and errors in the guide. Please let me know if you run into issues!"),(0,a.kt)("p",null,"If you\u2019re worried about sending all of your data through cloudflare, the same basic principle could apply to a VPS such as Linode, Vultr or other."))}d.isMDXComponent=!0}}]);