!function(){"use strict";window.aismodule={init:function(){console.log("ais Module:: ais Module Executed!");const e=["/en/","/review/","/review/product/lucky-number.html","/review/product/how-to-move-to-ais-online.html"];if(e.some((e=>e==location.pathname))){if(window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")!=window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")){function t(){if(window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")!=window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")){const t=setInterval((()=>{if(window.ReWebSDK.utils.getCurrentPageTimeSpent()>20){let i="";location.pathname==e[0]?i="IdentifiedUser20s_en":location.pathname==e[1]?i="IdentifiedUser20s_review":location.pathname==e[2]?i="IdentifiedUser20s_luckyNumber":location.pathname==e[3]&&(i="IdentifiedUser20s_aisOnline"),i&&ReWebSDK.customEvent({eventName:i}),clearInterval(t)}}),1e3)}}window.ReWebSDK.utils.LSH.getItem("Token")?t():window.addEventListener("resul_notificationGranted",(function(){t()}))}}}}}();