!function(){"use strict";window.productLiveUserCount=function(){window.ReWebSDK.utils.importDynamicModule((window.ReWebSDK.configs.customFileBase||window.ReWebSDK.configs.custombase||"https://sdk.resu.io")+"/scripts/socket.io.js").then((o=>{var e,n,t=0,s=""+Math.random();console.log(`test3 ${t}`),window.productViewCountGlobal=t,document.querySelector(".ResulticksPagePush-liveVisit #ResulJoannLiveCount")&&(console.log(`test3-3 ${t}`),document.querySelector(".ResulticksPagePush-liveVisit #ResulJoannLiveCount").innerHTML=t);try{n=window.location.pathname,e=io("https://wsoc.resu.io/",{transports:["websocket"],reconnection:!0}),window.prodSocket=e,e.on("connect",(function(o){const t={profileId:s,deviceOs:"unknown",deviceType:"",browserName:"",domainName:window.location.hostname,passportId:"",paths:[n]};e.emit("UserVisitPage",t)})),e.on(n+"viewer",(function(o){t=o.users,console.log(`test2 ${t}`),window.productViewCountGlobal=t,document.querySelector(".ResulticksPagePush-liveVisit #ResulJoannLiveCount")&&(console.log(`test2-2 ${t}`),document.querySelector(".ResulticksPagePush-liveVisit #ResulJoannLiveCount").innerHTML=t)})),e.on("connect_error",(function(){})),e.on("disconnect",(function(){console.log("disconnect","disconnect")})),e.on("UserDisconnected",(function(o){try{t=o.users,console.log(`test1 ${t}`),window.productViewCountGlobal=t,document.querySelector(".ResulticksPagePush-liveVisit #ResulJoannLiveCount")&&(console.log(`test1-1 ${t}`),document.querySelector(".ResulticksPagePush-liveVisit #ResulJoannLiveCount").innerHTML=t)}catch(o){}})),console.log(`test4 ${t}`),console.log(`test4-4 ${window}`),window.productViewCountGlobal=t,console.log(`test4-5 ${window.productViewCountGlobal}`)}catch(o){console.log("socketConnect err: ",o)}}))}}();
