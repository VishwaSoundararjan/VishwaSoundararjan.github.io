!function(){"use strict";window.profileIdModule=new Promise((function(e,o){try{const o=window.ReWebSDK.utils.browserName,d=(window.ReWebSDK.utils.LSH.getItem("_uuid"),window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id"),window._currentTenant.tenantName);let r="";window._resMethods.compareObj=function(e,o){for(var t in e)if(e.hasOwnProperty(t)&&e[t]!==o[t])return!1;for(var t in o)if(o.hasOwnProperty(t)&&e[t]!==o[t])return!1;return!0};window.ReWebSDK.utils.LSH.getItem("dtype");const n=window.ReWebSDK.utils.oSname;window._resMethods.clientIP||sessionStorage.getItem("clientIProtocol");let a="";"9a9ec5d2_f860_43e3_a439_9c8450695551"!=window._currentTenant._tenantId&&"b9fa736f_48f6_4acf_8a4b_dd625ca6c001"!=window._currentTenant._tenantId&&"f67f7340_c9e8_46c2_b07a_1ef2dbc8d9fc"!=window._currentTenant._tenantId&&"0e34e9aa_1528_44fa_8599_591e36d0292f"!=window._currentTenant._tenantId&&"64d30bed_45de_4ae2_b492_2b0b41d8b763"!=window._currentTenant._tenantId||(a=window.ReWebSDK.utils.LSH.getCookie("CustID")),d.includes("uti")&&localStorage.getItem("userData")&&(a=JSON.parse(localStorage.getItem("userData")).pan);var t=["_fbp","_pk_id.19.c094","_gid"].map((e=>{if(window.ReWebSDK.utils.LSH.getCookie(e))return new Object({[e.toLowerCase()]:e.includes("_pk")?window.ReWebSDK.utils.LSH.getCookie(e).split(".")[0]:window.ReWebSDK.utils.LSH.getCookie(e)})})).filter((e=>Boolean(e))),s=Object.assign({},...t);try{s.ujId=window.ReWebSDK.utils.SSH.getItem("ujId"),console.log(window.ReWebSDK.utils.SSH.getItem("ujId")),console.log(s)}catch(e){}let p=JSON.stringify(s);const u=window._resMethods.decimalToHexString(window._resMethods.getFPID.get(p));function i(){try{function o(o,t){try{console_log("profileIdModule:: Registering or updating data...");let s=JSON.parse(o);t&&(window.ReWebSDK.utils.LSH.setItem("Res_Profile_Id",t),ReWebSDK.userRegister_payloadDefault.profileID=t,window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")&&"success"!=window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")||(window.ReWebSDK.utils.LSH.setItem("Res_Passport_Id",t),ReWebSDK.userRegister_payloadDefault.passportId=t)),s.profileId=window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")||t,s.passportId=window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")||t,window.ReWebSDK.methods.clientApiService.getResCustomID(btoa(JSON.stringify(s))).then((e=>{console_log("profileIdModule:: Data registered successfully!",e)})),e({status:!0,message:"profile id generated"})}catch(e){}}function t(o,t){try{console_log("profileIdModule:: Registering or updating data...");let s=JSON.parse(o);t&&(window.ReWebSDK.utils.LSH.setItem("Res_Profile_Id",t),ReWebSDK.userRegister_payloadDefault.profileID=t,window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")||(window.ReWebSDK.utils.LSH.setItem("Res_Passport_Id",t),ReWebSDK.userRegister_payloadDefault.passportId=t)),s.profileId=window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")||t,s.passportId=window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")||t,window.ReWebSDK.methods.clientApiService.getCustomID(btoa(JSON.stringify(s))).then((e=>{console_log("profileIdModule:: Data registered successfully!",e)})),e({status:!0,message:"profile id generated"})}catch(e){}}if(a)try{let t=JSON.stringify(s);return console_log("profileIdModule:: profileData with custID"),window.ReWebSDK.utils.LSH.getItem("_profileData")&&window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")?(console_log("profileIdModule:: ",s,JSON.parse(atob(window.ReWebSDK.utils.LSH.getItem("_profileData"))),window._resMethods.compareObj(s,JSON.parse(atob(window.ReWebSDK.utils.LSH.getItem("_profileData"))))),window._resMethods.compareObj(s,JSON.parse(atob(window.ReWebSDK.utils.LSH.getItem("_profileData"))))?void e():(window.ReWebSDK.utils.LSH.setItem("_profileData",btoa(t)),console_log("profileIdModule:: profileDate updated"),void o(t))):(window.ReWebSDK.utils.LSH.setItem("_profileData",btoa(t)),console_log("profileIdModule:: new profileId generated: P_",u),void o(t,"P_"+u))}catch(e){}else try{let o=JSON.stringify(s);return console_log("profileIdModule:: profileData enc",o),console_log("profileIdModule:: profileData without custID"),window.ReWebSDK.utils.LSH.getItem("_profileData")&&window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")?(console_log("profileIdModule:: new ",s),console_log("profileIdModule:: old ",JSON.parse(atob(window.ReWebSDK.utils.LSH.getItem("_profileData")))),console_log("profileIdModule:: Matched ",window._resMethods.compareObj(s,JSON.parse(atob(window.ReWebSDK.utils.LSH.getItem("_profileData"))))),window._resMethods.compareObj(s,JSON.parse(atob(window.ReWebSDK.utils.LSH.getItem("_profileData"))))?void e():(window.ReWebSDK.utils.LSH.setItem("_profileData",btoa(o)),console_log("profileIdModule:: profileDate updated"),void t(o))):(window.ReWebSDK.utils.LSH.setItem("_profileData",btoa(o)),console_log("profileIdModule:: new profileId generated: P_",u),void t(o,"P_"+u))}catch(e){}}catch(e){}}function l(t){try{console_log("profileIdModule:: User trace Report",t);const s=t.filter((e=>e.deviceType==window.ReWebSDK.utils.LSH.getItem("dtype")&&e.osType==n&&!!e.profileId));if(console_log("profileIdModule:: processedData",s),s.length){console_log("profileIdModule:: processedData[0].profileId",s[0].profileId),console_log("profileIdModule:: processedData[0].passportId",s[0].passportId),console_log("profileIdModule:: processedData[0].iPAddress",s[0].iPAddress);let t=s[0];window.ReWebSDK.utils.LSH.setItem("Res_Profile_Id",s[0].profileId),ReWebSDK.userRegister_payloadDefault.passportId=s[0].profileId,"success"==s[0].passportId?r?(window.ReWebSDK.utils.LSH.setItem("Res_Passport_Id",r),ReWebSDK.userRegister_payloadDefault.passportId=r,window.ReWebSDK.methods.clientApiService.getCustomID(btoa(JSON.stringify(t))).then((e=>{console_log("profileIdModule:: Data updated successfully!",e)}))):(window.ReWebSDK.utils.LSH.setItem("Res_Passport_Id",s[0].profileId),ReWebSDK.userRegister_payloadDefault.passportId=s[0].profileId):r?(window.ReWebSDK.utils.LSH.setItem("Res_Passport_Id",r),ReWebSDK.userRegister_payloadDefault.passportId=r,a?(t.custID=a,window.ReWebSDK.methods.clientApiService.getResCustomID(btoa(JSON.stringify(t))).then((e=>{console_log("profileIdModule:: Data registered successfully!",e)}))):window.ReWebSDK.methods.clientApiService.getCustomID(btoa(JSON.stringify(t))).then((e=>{console_log("profileIdModule:: Data updated successfully!",e)}))):(window.ReWebSDK.utils.LSH.setItem("Res_Passport_Id",s[0].passportId),ReWebSDK.userRegister_payloadDefault.passportId=s[0].passportId);try{s[0].browserType!=o&&(t.browserType=o,a?(t.custID=a,window.ReWebSDK.methods.clientApiService.getResCustomID(btoa(JSON.stringify(t))).then((e=>{console_log("profileIdModule:: Data registered successfully!",e)}))):window.ReWebSDK.methods.clientApiService.getCustomID(btoa(JSON.stringify(t))).then((e=>{console_log("profileIdModule:: Data updated successfully!",e)})))}catch(e){}delete t.profileId,delete t.passportId,window.ReWebSDK.utils.LSH.setItem("_profileData",btoa(JSON.stringify(t))),e({status:!0,message:"profile data assigned",values:{profileId:s[0].profileId,passportId:s[0].passportId}})}else console_log("profileIdModule:: no data found"),i(),console_log("profileIdModule:: registering as new user!")}catch(e){}window.dispatchEvent(new CustomEvent("sdk_ready"))}if(console.log("P_"+u),window.ReWebSDK.utils.LSH.getItem("_profileData"))console_log("profileIdModule:: user profiledata exists"),i(),window.dispatchEvent(new CustomEvent("sdk_ready"));else{console_log("profileIdModule:: checking user trace...");try{r=decodeURIComponent(location.href).split("&").filter((e=>e.includes("rid")))[0]||decodeURIComponent(location.href).split("&").filter((e=>e.includes("pid")))[0],r&&(r=r.split("=")[1])}catch(e){r=location.href.split("&").filter((e=>e.includes("rid")))[0]||location.href.split("&").filter((e=>e.includes("pid")))[0],r&&(r=r.split("=")[1])}window.ReWebSDK.methods.clientApiService.getdevicedetails({deviceId:window.ReWebSDK.utils.LSH.getItem("_uuid")||"",custId:a,passportId:r,profileId:"P_"+u,tenantId:window._currentTenant._tenantId,domainName:"5f7a2e8e_1bdb_4739_9d28_278a2759394c"==_currentTenant._tenantId?"https://"+location.hostname.replace("www.",""):location.hostname.replace("www.","")}).then((e=>{console_log("profileIdModule:: results: ",e),console_log("profileIdModule:: results: passportjson",e.passportjson),console_log("profileIdModule:: results: custidjson",e.custidjson),console_log("profileIdModule:: results: deviceJson",e.deviceJson),console_log("profileIdModule:: results: ipJson",e.ipJson),console_log("profileIdModule:: results: profileJson",e.profileJson);var o;console_log("profileIdModule:: UserTraceReport: ",[]),location.href.includes("?")&&r?(o=e.passportjson,console_log("profileIdModule:: Found PassportID: "+JSON.stringify(o)),l(o)):a?function(e){console_log("profileIdModule:: Found CustID: "+e),l(e)}(e.custidjson):(console_log("profileIdModule:: Other strategies called!"),function(e){console_log("profileIdModule:: otherStrategies: data... ",e);const o=e.map((e=>{if(e.length)return e[0]})).filter((e=>Boolean(e)));console_log("profileIdModule:: otherStrategies: Processing data... ",o),l(o)}([e.deviceJson,e.ipJson,e.profileJson]))}))}}catch(e){}}))}();