"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2110],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2466:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],l={id:"migrating",title:"Migrating swizzin installations across servers",sidebar_label:"Migrating"},s=void 0,p={unversionedId:"guides/migrating",id:"guides/migrating",isDocsHomePage:!1,title:"Migrating swizzin installations across servers",description:"This guide should be used as a generic reference for when you wanna get onto a new Linux server.",source:"@site/docs/guides/migrating.md",sourceDirName:"guides",slug:"/guides/migrating",permalink:"/guides/migrating",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/guides/migrating.md",tags:[],version:"current",frontMatter:{id:"migrating",title:"Migrating swizzin installations across servers",sidebar_label:"Migrating"},sidebar:"docs",previous:{title:"Advanced Setup",permalink:"/guides/advanced-setup"},next:{title:"3rd party customisations",permalink:"/guides/customisations"}},u=[{value:"1. Update everything on old server",id:"1-update-everything-on-old-server",children:[{value:"Server itself",id:"server-itself",children:[]},{value:"Swizzin source code",id:"swizzin-source-code",children:[]},{value:"Any other applications",id:"any-other-applications",children:[]},{value:"(Optional) De-dupe your stuff",id:"optional-de-dupe-your-stuff",children:[]}]},{value:"2. Prepare new server",id:"2-prepare-new-server",children:[{value:"OS &amp; Disks",id:"os--disks",children:[]},{value:"Swizzin",id:"swizzin",children:[]}]},{value:"3. Spin down apps on old server",id:"3-spin-down-apps-on-old-server",children:[]},{value:"4. Transfer data",id:"4-transfer-data",children:[]},{value:"5. Migrate all applications",id:"5-migrate-all-applications",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide should be used as a generic reference for when you wanna get onto a new Linux server."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is still a WIP guide, any experience or suggestions are welcome. If things go wrong, don't blame me. Make sure to always have a backup with a verification plan before doing something stoopet."))),(0,i.kt)("h2",{id:"1-update-everything-on-old-server"},"1. Update everything on old server"),(0,i.kt)("h3",{id:"server-itself"},"Server itself"),(0,i.kt)("p",null,"Do a full ",(0,i.kt)("inlineCode",{parentName:"p"},"apt update && apt upgrade")," run"),(0,i.kt)("h3",{id:"swizzin-source-code"},"Swizzin source code"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo box update")," before "),(0,i.kt)("h3",{id:"any-other-applications"},"Any other applications"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo box upgrade")," any other application remaining"),(0,i.kt)("h3",{id:"optional-de-dupe-your-stuff"},"(Optional) De-dupe your stuff"),(0,i.kt)("p",null,"If you want to make sure you aren't transferring some files that are 100% carbon copies over, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"fdupes")," to hardlink any file that matches another on the same disk 100%."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure you know what you are doing before getting into this, it could lead to some pretty dumb mistakes")),(0,i.kt)("p",null,"I highly suggest only running this for a set of files that you know belong to one user, so that users don't accidntally change each other's files later on."),(0,i.kt)("p",null,"After you install ",(0,i.kt)("inlineCode",{parentName:"p"},"fdupes"),", you can run this command which will ensure that all the files within these directories of the logged in user are hardlinked, and only take up the space of one instance of the file on a disk."),(0,i.kt)("p",null,"This obviously will not work if these directories mount over multiple disks, they all have to be on the same disk for this to work. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"fdupes -r ~/sonarr/ ~/radarr/ ~/transmission/ ~/torrents/rtorrent -n -L\n")),(0,i.kt)("h2",{id:"2-prepare-new-server"},"2. Prepare new server"),(0,i.kt)("h3",{id:"os--disks"},"OS & Disks"),(0,i.kt)("p",null,"Install the latest version of your OS so that you don't have to do a dist upgrade later on."),(0,i.kt)("p",null,"Ensure that your drives are set up just the way you want them ",(0,i.kt)("em",{parentName:"p"},"before")," doing ",(0,i.kt)("em",{parentName:"p"},"anything"),". Swizzin relies on ",(0,i.kt)("inlineCode",{parentName:"p"},"/root")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/home")," a lot so just mount everything how you want to, and swizzin will just blindly follow that filesystem to wherever it leads to."),(0,i.kt)("h3",{id:"swizzin"},"Swizzin"),(0,i.kt)("p",null,"Run the script, maybe check out the advanced options while you're at it so that you can set it and forget it."),(0,i.kt)("h4",{id:"users"},"Users"),(0,i.kt)("p",null,"Create all your users with ",(0,i.kt)("strong",{parentName:"p"},"the same usernames and passwords"),". If you want to change passwords for the users, you'll have to do that after the installation"),(0,i.kt)("h4",{id:"apps"},"Apps"),(0,i.kt)("p",null,"Install the same apps you got on your old system."),(0,i.kt)("p",null,"Make sure to shut them down after you're done installing them so that the configs and everything will not get overwritten after you transfer your stuff."),(0,i.kt)("h2",{id:"3-spin-down-apps-on-old-server"},"3. Spin down apps on old server"),(0,i.kt)("p",null,"You ",(0,i.kt)("strong",{parentName:"p"},"absolutely")," need to stop everything that's happening on the old server. Otherwise you'll be transferring data that might be written into, which is no bueno."),(0,i.kt)("p",null,"You might as well reboot your system into rescue, ",(0,i.kt)("inlineCode",{parentName:"p"},"mount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"chroot")," your old setup in, and start an SSH server."),(0,i.kt)("h2",{id:"4-transfer-data"},"4. Transfer data"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We highly recommend running this in ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," so that you can disconnect from your SSH in case this takes a while."))),(0,i.kt)("p",null,"The most sane way to do this would be to do this from the POV of ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," on the new machine, which will talk to the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," on the old machine. Make yourself a new SSH key with ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," on the new machine, and paste the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"/root/.ssh/id_rsa.pub")," at the bottom of ",(0,i.kt)("inlineCode",{parentName:"p"},"/root/.ssh/authorized_keys"),". Ensure the old machine allows root SSH connections over SSH keys by checking that ",(0,i.kt)("inlineCode",{parentName:"p"},"PermitRootLogin prohibit-password")," is set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"."),(0,i.kt)("p",null,"Check that the ssh connections works before running the command below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -ahH --info=progress2 -e'ssh -p $portNumber' root@oldserver:/home/<oldusername>/ /home/<newusername> --usermap=<oldusername>:<newusername>\n")),(0,i.kt)("p",null,"Breakdown of the parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-a"),": quick way  of  saying  you  want  recursion  and  want  to preserve  almost  everything"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-h"),": human readable output"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-H"),": preserve hardlinks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-e'ssh -p $port'"),": optional, allows you to override the SSH port number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--usermap=[...]"),": ensures that permissions are allocated to the right user afterwards"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--info=progress-2"),": Gives a nice single overview of the whole process")),(0,i.kt)("h2",{id:"5-migrate-all-applications"},"5. Migrate all applications"),(0,i.kt)("p",null,"Check whether some of your apps require some configuration that is not covered with the data transfer rsync command above."),(0,i.kt)("p",null,"Notable examples are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transmission",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The files which bind a logged in user to the right session need to be migrated/re-created. You have two options for migrating this and making it functional:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"First transfer all the data, and then remove and re-install transmission on the target. This will erase every user's ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.conf")," and re-create it alongside the binding for the webserver."),(0,i.kt)("li",{parentName:"ol"},"Copy over all ",(0,i.kt)("inlineCode",{parentName:"li"},"<user>.transmission.conf")," files from ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/nginx/conf.d/")," after all users are created and transmission is installed."))))),(0,i.kt)("li",{parentName:"ul"},"Deluge",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Generally same as transmission"))),(0,i.kt)("li",{parentName:"ul"},"R",(0,i.kt)("strong",{parentName:"li"},"u"),"Torrent",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Reinstall rutorrent after all data is moved"),(0,i.kt)("li",{parentName:"ul"},"Nothing specific should be necessary to do for rtorrent itself."))),(0,i.kt)("li",{parentName:"ul"},"Plex",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"More in ",(0,i.kt)("a",{parentName:"li",href:"https://support.plex.tv/articles/201370363-move-an-install-to-another-system/"},"this guide")," and in ",(0,i.kt)("a",{parentName:"li",href:"https://forums.plex.tv/t/pms-migration-linux/678445/2"},"this guide specifically for Linux")))),(0,i.kt)("li",{parentName:"ul"},"ombi",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"More ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Ombi-app/Ombi/wiki/Backups"},"here")," or ",(0,i.kt)("a",{parentName:"li",href:"https://docs.ombi.app/info/backing-up/"},"here")))),(0,i.kt)("li",{parentName:"ul"},"tautulli",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"More ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Tautulli/Tautulli/wiki/Frequently-Asked-Questions#q-i-need-to-movereinstall-tautulli-can-i-keep-my-history-and-statistics"},"here")))),(0,i.kt)("li",{parentName:"ul"},"Lounge IRC",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Last time I asked, I was told this:\\\n",(0,i.kt)("inlineCode",{parentName:"li"},"[19:51:21] xnaas: just move your entire thelounge folder over\xa0flying_sausages; that's it"),"\\\nSo make sure to install lounge via ",(0,i.kt)("inlineCode",{parentName:"li"},"box"),", stop teh service, and then transfer over the files from ",(0,i.kt)("inlineCode",{parentName:"li"},"/home/thelounge")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"/home/thelounge")))),(0,i.kt)("li",{parentName:"ul"},"znc",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"More ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.znc.in/FAQ#How_do_I_migrate_ZNC_from_one_machine_to_another.3F"},"here")))),(0,i.kt)("li",{parentName:"ul"},"nextcloud",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Loosely follow ",(0,i.kt)("a",{parentName:"li",href:"https://docs.nextcloud.com/server/21/admin_manual/maintenance/migrating.html"},"this guide")," but make sure to check in with us in the discord because I don't have time to write all the differences right now"))),(0,i.kt)("li",{parentName:"ul"},"letsencrypt",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Install before and also after just for good measure"))),(0,i.kt)("li",{parentName:"ul"},"organizr",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Shut down nginx on old server, then transfer the ",(0,i.kt)("inlineCode",{parentName:"li"},"config.php")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"users.db")," files in ",(0,i.kt)("inlineCode",{parentName:"li"},"/srv/organizr")," and its db folder"))),(0,i.kt)("li",{parentName:"ul"},"quota"),(0,i.kt)("li",{parentName:"ul"},"quassel"),(0,i.kt)("li",{parentName:"ul"},"rclone"),(0,i.kt)("li",{parentName:"ul"},"mango"),(0,i.kt)("li",{parentName:"ul"},"Flood"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"... and probably a couple more ..."))))}m.isMDXComponent=!0}}]);