!function(){"use strict";const e=(...e)=>{if("true"==localStorage.getItem("debugWithConsoleLog"))return console.log(...e)};window.console_log=e,_currentTenant.shortCode;var t=new class{getItem(e){return window.sessionStorage.getItem(`Resul_${e}`)}setItem(e,t){return window.sessionStorage.setItem("Resul_"+e,t)}removeItem(e){return window.sessionStorage.removeItem(`Resul_${e}`)}};window.AppRuleListener=class{constructor(){this.BROWSER="Browser",this.BROWSER_VERSION="Browser version",this.CUSTOM_EVENTS="Custom events",this.DEVICETYPE="Device",this.LANGUAGE="Language",this.LAST_VISITED="Last visit",this.LAST_VISITED_PAGE="Last visit page",this.LOCATION="Location",this.NEW_VISITOR="New visitors",this.NOTIFICATION_DISABLED="Notification Disabled",this.OS="Operating system",this.PAGE_DEPTH="Page depth",this.PAGE_VIEWS="Page views",this.RETURNING_VISITORS="Returning visitors",this.SESSION_DURATION="Session duration",this.TIME_SPENT_ON_PAGE="Time spent on page",this.SIGNUP="Sign up",this.TRAFFIC_SOURCE_PAGE_REFERRAL="Traffic source",this.USER_TYPE="User Type",this.WHEN_A_USER_VISITS_A_SPECIFIC_PAGE="When a user visits a specific page",this.PAGE_IN="Page in",this.PAGE_OUT="Page out",this.PAGEOUT="PageOut",this.PAGE_FOCUS_OUT="Page focusout",this.NEWS_LETTER_SUBSCRIBED="Newsletter subscribed",this.IDEAL_DURATION="Ideal time",this.WHEN_A_USER_VISITS_THE_WEBSITE="When a user visits the website",this.USER_REGISTERED="User Registered",this.USER_AGENT="User Agent",this.FORM_NOT_SUBMITTED="form not submitted",this.WEBSITE_CLICKS="Site clicks",this.normal_Rules_Satisfied=!1,this.session_Rules_Satisfied=!1,this.customEventValue="",this.pageDepthValue="",this.customEventValueCheckPass=!1,this.pageOutValue=!1,this.entryLevelBlastList=window.ReWebSDK.utils.LSH.getItem("entryLevelBlastList")||"",this.sessioinLevelBlastList="",this.queuedNotification=[],this.inAppNotificationHandler=null,this.userState="ideal",window.document.onclick=()=>{this.userState="interacted"},window.document.onscroll=()=>{this.userState="interacted"},this.processformNotSubmittedRules(),this.flag=""}init(t){this.getLocationFromAddress(),this.entryLevelRules=[],this.sessionLevelRules=[],this.userTypeLevelRules=[],this.customEventLevelRules=[],this.locationLevelRules=[],this.pageDepthLevelRule=[],this.pageInLevelRule=[],this.pageOutLevelRule=[],this.pageFocusLevelRule=[],this.formNotSubmittedRules=[],this.siteClickLevelRules=[],this.pageDepthLevelRuleChecked="",e("Localrules:: rulesList cache: ",t),e("Localrules:: this.entryLevelBlastList: ",this.entryLevelBlastList),t.dynamicList||(t.dynamicList=t.dynamiclist),"string"==typeof t.dynamicList?t.dynamicList=t.dynamicList:"object"==typeof t.dynamicList&&(t.dynamicList=JSON.stringify(t.dynamicList)),this.values=JSON.parse(JSON.stringify(t));try{e("Localrules:: finding rules calling..."),this.findingRules(),e("Localrules:: singleTimeRules rules calling..."),this.singleTimeRules(),e("Localrules:: multiTimeRules rules calling..."),this.multiTimeRules()}catch(e){}window.addEventListener("inappRuleNotificationClose",(t=>{e("Localrules:: checking queued notification:",this.queuedNotification),this.queuedNotification.length&&(this.loadInapp(this.queuedNotification[this.queuedNotification.length-1]),this.queuedNotification.pop())}))}findingRules(){try{let t=JSON.parse(JSON.stringify(this.values)),s=JSON.parse(t.dynamicList);e("Localrules:: findingRules called",s);for(let t=0;t<s.length;t++){let i=JSON.stringify(s[t].rules);s[t].rules.forEach((e=>JSON.stringify(e.value)));let l=i.toString().toLowerCase();e("Localrules:: Rule detected: ",l),l.includes(this.LAST_VISITED_PAGE.toLowerCase())||l.includes(this.PAGE_VIEWS.toLowerCase())||l.includes(this.SESSION_DURATION.toLowerCase())||l.includes(this.IDEAL_DURATION.toLowerCase())||l.includes(this.WHEN_A_USER_VISITS_A_SPECIFIC_PAGE.toLowerCase())||l.includes(this.TIME_SPENT_ON_PAGE.toLowerCase())||l.includes(this.LOCATION.toLowerCase())||l.includes(this.CUSTOM_EVENTS.toLowerCase())||l.includes(this.PAGE_IN.toLowerCase())||l.includes(this.PAGE_OUT.toLowerCase())||l.includes(this.PAGEOUT.toLowerCase())||l.includes(this.PAGE_FOCUS_OUT.toLowerCase())||l.includes(this.PAGE_DEPTH.toLowerCase())||l.includes(this.FORM_NOT_SUBMITTED.toLowerCase())||l.includes(this.WEBSITE_CLICKS.toLowerCase())||(e("Localrules:: entry rules dynamicList"),this.entryLevelRules.push(s[t])),(l.includes(this.SESSION_DURATION.toLowerCase())||l.includes(this.IDEAL_DURATION.toLowerCase())||l.includes(this.LAST_VISITED_PAGE.toLowerCase())||l.includes(this.PAGE_VIEWS.toLowerCase())||l.includes(this.TIME_SPENT_ON_PAGE.toLowerCase())||l.includes(this.WHEN_A_USER_VISITS_A_SPECIFIC_PAGE.toLowerCase()))&&(e("Localrules:: session rules dynamicList"),this.sessionLevelRules.push(s[t])),(l.includes(this.USER_TYPE.toLowerCase())||l.includes(this.SIGNUP.toLowerCase()))&&this.userTypeLevelRules.push(s[t]),l.includes(this.CUSTOM_EVENTS.toLowerCase())&&(e("Localrules:: found CUSTOM_EVENTS rule"),this.customEventLevelRules.push(s[t])),e("Localrules:: rule",l),l.includes(this.WEBSITE_CLICKS.toLowerCase())&&(e("Localrules:: found WEBSITE_CLICKS rule"),this.siteClickLevelRules.push(s[t])),l.includes(this.PAGE_IN.toLowerCase())&&(e("Localrules:: found page in rule"),this.pageInLevelRule.push(s[t])),(l.includes(this.PAGE_OUT.toLowerCase())||l.includes(this.PAGEOUT.toLowerCase()))&&(e("Localrules:: found page out rule"),this.pageOutLevelRule.push(s[t])),l.includes(this.PAGE_FOCUS_OUT.toLowerCase())&&(e("Localrules:: found page focus rule"),this.pageFocusLevelRule.push(s[t])),l.includes(this.PAGE_DEPTH.toLowerCase())&&(e("Localrules:: found page depth rule"),this.pageDepthLevelRule.push(s[t])),l.includes(this.LOCATION.toLowerCase())&&this.locationLevelRules.push(s[t])}}catch(t){e("Localrules:: err",t)}return[]}singleTimeRules(){let t;try{let s=this.entryLevelBlastList;s=s.replace(/_/g,"").split("dynamicListId"),e("Localrules:: enList",s,this.entryLevelRules),t=this.entryLevelRules.filter((e=>!s.includes(e.dynamicListId+"CMP"+e.campaignId))),t.length?(e("Localrules:: Found difference in singleTimeRules ",t),this.processRules(t,"0")):e("Localrules:: No difference in singleTimeRules... proceeding to next ",t)}catch(t){e("Localrules:: singleTimeRules: ",t)}}multiTimeRules(){if(e("this.sessionLevelRules",this.sessionLevelRules),e("userState",this.userState),this.sessionLevelRules.length){e("Localrules:: processSessionRules starts"),e("Localrules:: session duration function!");let t=0;const s=setInterval((()=>{t++,8==t?(e("Localrules:: session 7sec"),this.processSessionRules()):16==t?(e("Localrules:: session 13sec"),this.processSessionRules()):31==t?(e("Localrules:: session 35sec"),this.processSessionRules()):62==t&&(e("Localrules:: session 61sec"),this.processSessionRules(),clearInterval(s),e("Localrules:: checkSurvive cleared"))}),1e3)}if(e("this.pageDepthLevelRule",this.pageDepthLevelRule),this.pageDepthLevelRule.length){e("Localrules:: hasPageDepth");let t=!1;e("onscroll satisfied:",t),document.addEventListener("scroll",(()=>{switch(e("onscroll satisfied:",t),Number(window.ReWebSDK.utils.SSH.getItem("s_percentage"))){case 20:case 40:case 60:t||(e("onscroll satisfied:",t),t=!0,this.processPageDepthRules());break;case 76:t||(e("onscroll satisfied:",t),t=!0,e("onscroll executing..."),this.processPageDepthRules());break;default:t=!1}}))}e("this.customEventLevelRules",this.customEventLevelRules),this.customEventLevelRules.length&&this.processCustomEventRules(),this.siteClickLevelRules.length&&this.processWebsiteClickRules(),e("this.pageInLevelRule",this.pageInLevelRule),this.pageInLevelRule.length&&this.processPageInLevelRule(),e("this.processPageOutLevelRule",this.pageOutLevelRule),this.pageOutLevelRule.length&&this.processPageOutLevelRule(),e("this.processPageFocusLevelRule",this.pageFocusLevelRule),this.pageFocusLevelRule.length&&this.processPageFocusLevelRule(),e("this.userTypeLevelRules",this.userTypeLevelRules),this.userTypeLevelRules.length&&this.processUserTypeChangeRules(),e("this.locationLevelRules",this.locationLevelRules),this.locationLevelRules.length&&this.processLocationRules()}checkPageViews(e){let t=Number(window.ReWebSDK.utils.SSH.getItem("appViewsPerSession")||0);switch(e){case"Less than 2":return t>1;case"2 to 4":return t>2;case"5 to 7":return t>5;case"More than 7":return t>7}}getNumVal(t){e("Localrules:: key",t);let s=0;return"Less than 25%"==t&&(s=20),"26% to 50%"==t&&(s=40),"51% to 75%"==t&&(s=60),"More than 75%"==t&&(s=76),e("Localrules:: value",s),s}processSessionRules(t){try{let t=this.sessionLevelRules;null!=t&&(e("Localrules:: session size",""+t.length),this.processRules(t,"SessionLevelRules 1"))}catch(t){e(t)}}processUserTypeChangeRules(){const t=()=>{try{let e=this.userTypeLevelRules;null!=e&&this.processRules(e,"UserTyperule 3")}catch(t){e(t)}};window.addEventListener("userRegisterEvent",(function(){e("userRegisterEvent captured"),t()})),t()}processformNotSubmittedRules(){document.querySelectorAll("form").forEach((e=>{if(e.id){const t=e.id;sessionStorage.setItem("form_"+t,"notSubmitted"),e.addEventListener("submit",(()=>{sessionStorage.setItem("form_"+t,"submitted"),window.ReWebSDK.utils.LSH.setItem("formEvents","[]")})),window.ReWebSDK.utils.LSH.getItem("isVisited")||window.ReWebSDK.utils.SSH.getItem("1stsession");const s="form_"+t+"_notSubmitted";window.addEventListener("beforeunload",(()=>{if("notSubmitted"==sessionStorage.getItem("form_"+t)){let e=JSON.parse(window.ReWebSDK.utils.LSH.getItem("formEvents")||"[]");e.length>10&&e.shift(),e.push(s),window.ReWebSDK.utils.LSH.setItem("formEvents",JSON.stringify(e))}}))}}))}processCustomEventRules(){const t=()=>{try{let e=this.customEventLevelRules;null!=e&&this.processRules(e)}catch(t){e(t)}};window.addEventListener("newCustomEvent",(function(){e("new event captured"),t()})),t()}processWebsiteClickRules(){window.addEventListener("click",(e=>{let t=e.target.innerText?e.target.innerText:e.target.value?e.target.value:"";if(t=t.replaceAll(/\s/g,"").toLowerCase(),window.ReWebSDK.utils.SSH.getItem("lastClickEvents")){let e=[...JSON.parse(window.ReWebSDK.utils.SSH.getItem("lastClickEvents")),t];window.ReWebSDK.utils.SSH.setItem("lastClickEvents",JSON.stringify(e))}else window.ReWebSDK.utils.SSH.setItem("lastClickEvents",JSON.stringify([t]))})),(()=>{try{let e=this.siteClickLevelRules;null!=e&&this.processRules(e,"0")}catch(t){e(t)}})()}listAllClickEventListeners(){const e=Array.prototype.slice.call(document.querySelectorAll("*"));e.push(document),e.push(window);const t=[];for(let e in window)/^on/.test(e)&&(t[t.length]=e);let s=[];for(let i=0;i<e.length;i++){const l=e[i];for(let e=0;e<t.length;e++)"function"==typeof l[t[e]]&&"onclick"==t[e]&&(s=[...s,{node:l,type:t[e],func:l[t[e]].toString()}])}return s.sort((function(e,t){return e.type.localeCompare(t.type)}))}processPageInLevelRule(){let t=this.pageInLevelRule,s=0;const i=()=>{e("processRule executions",s),s=1,this.processRules(t)};document.onvisibilitychange=function(){"visible"===document.visibilityState&&i()}}processPageOutLevelRule(){let t=this.pageOutLevelRule;const s=()=>{this.processRules(t)};try{"Mozilla Firefox"==window.ReWebSDK.utils.browserName?(document.documentElement.addEventListener("mouseleave",(()=>{this.pageOutValue=!0,e("Mouse leave page out rule"),s()})),document.documentElement.addEventListener("mouseenter",(()=>{this.pageOutValue=!1,e("Mouse enter page out rule")}))):(document.addEventListener("mouseleave",(t=>{this.pageOutValue=!0,e("Mouse leave page out rule"),s()})),document.addEventListener("mouseenter",(t=>{this.pageOutValue=!1,e("Mouse enter page out rule")})))}catch(t){e("Error Occurred in page in and page out rule check")}}processPageFocusLevelRule(){let e=this.pageFocusLevelRule;const t=()=>{this.processRules(e)};document.addEventListener("mouseleave",(e=>{t()}))}processLocationRules(t,s){const i=()=>{try{let e=this.locationLevelRules;null!=e&&this.processRules(e)}catch(t){e(t)}};window.addEventListener("locationChange",(function(){e("new event captured"),i()}))}getLocationFromAddress(t,s){if(e("geoLocation",window.ReWebSDK.utils.LSH.getItem("lastGeoLocation"),window.ReWebSDK.utils.LSH.getItem("currentGeoLocation")),window.ReWebSDK.utils.LSH.getItem("lastGeoLocation")!=window.ReWebSDK.utils.LSH.getItem("currentGeoLocation")){const e=new CustomEvent("locationChange");window.dispatchEvent(e),window.ReWebSDK.utils.LSH.setItem("lastGeoLocation",window.ReWebSDK.utils.LSH.getItem("currentGeoLocation"))}}processPageDepthRules(){try{e("onscroll func calling...");let t=this.pageDepthLevelRule;null!=t&&this.processRules(t)}catch(t){e(t)}}processRules(t,s=null){e("Localrules:: ruleType: ",s);try{for(let i=0;i<t.length;i++)setTimeout((()=>{var l=t[i].rules;e(`Localrules:: executing rulesList:  ${t[i].campaignId} in ${i} sec(s)`),e("Localrules:: ",l);var o="dynamicListId_DL"+t[i].dynamicListId+"CMP"+t[i].campaignId+"_",r=localStorage.getItem("BLASTED_CAMPAIGN")||"";!r.includes(o)||t[i].isFrequencyEnabled?(e("Localrules:: session camp: ",this.sessioinLevelBlastList,"dynamicListId_"+t[i].dynamicListId+"_"),e("Localrules:: session camp includes: ",this.sessioinLevelBlastList.includes("dynamicListId_"+t[i].dynamicListId+"_")),this.sessioinLevelBlastList.includes("dynamicListId_"+t[i].dynamicListId+"_")?e("session camp blasted already!"):t[i].ruleType.toLowerCase().includes("all")?this.ruleEngineAll(t[i],t[i].campaignId)?(e("Localrules:: App","All Rules "+t[i].dynamicListName+" Satisfied!"),this.normal_Rules_Satisfied=!0,this.blastCampaign(i,t[i]),e("storing BLASTED_CAMPAIGN, ruleType: ",s),localStorage.setItem("BLASTED_CAMPAIGN",o+r),s&&"0"!=s?(e("sessioinLevelBlastList"),this.sessioinLevelBlastList+="dynamicListId_"+t[i].dynamicListId+"_"):s&&"0"==s?(e("entry rule for session: "),this.entryLevelBlastList+="dynamicListId_"+t[i].dynamicListId+"_CMP"+t[i].campaignId,window.ReWebSDK.utils.LSH.setItem("entryLevelBlastList",this.entryLevelBlastList),e("entryLevelBlastList added",this.entryLevelBlastList)):e("Other ruleType",s)):e("All Rules "+t[i].dynamicListName+"Not Satisfied!"):this.ruleEngineAny(t[i],t[i].campaignId)>=Number(t[i].anyCount)&&(e("Localrules:: App","any Rules "+t[i].dynamicListName+" Satisfied!"),this.blastCampaign(i,t[i]),this.normal_Rules_Satisfied=!0,localStorage.setItem("BLASTED_CAMPAIGN",o+r),"0"!=s?(e("sessioinLevelBlastList"),this.sessioinLevelBlastList+="dynamicListId_"+t[i].dynamicListId+"_"):"0"==s&&(this.entryLevelBlastList+="dynamicListId_"+t[i].dynamicListId+"_CMP"+t[i].campaignId,window.ReWebSDK.utils.LSH.setItem("entryLevelBlastList",this.entryLevelBlastList),e("entryLevelBlastList added",this.entryLevelBlastList)))):e("campaign blasted already!")}),1500*i)}catch(t){return e(t),!1}return!1}blastCampaign(s,i){e("passportIdPresent",window.ReWebSDK.userRegister_payloadDefault.passportId,window.ReWebSDK.userRegister_payloadDefault.profileID),e("passportIdPresent2",window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id"),window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id"));let l=window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")!=window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")?window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id"):"",o=l?l.toLowerCase():"",r="";r=o.startsWith("p_")||o.startsWith("t_")||o.startsWith("a_")?"":l;let a={};window.productLiveVisit=!1;let n=t.getItem("rule"+i.campaignId);n&&(a=JSON.parse(n));let u={domain:location.origin,dynamicListID:""+i.dynamicListId,profileId:window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")||"",passportId:r,token:window.ReWebSDK.userRegister_payloadDefault.deviceToken||"",campaignId:""+i.campaignId,tenantId:"camp_"+window.ReWebSDK.userRegister_payloadDefault.tenantId,visitedCount:ReWebSDK.utils.LSH.getItem("visitedCount")};if(a&&Object.keys(a).length&&(u={...u,data:a}),ReWebSDK.getPsuedoCookie){let e=ReWebSDK.getPsuedoCookie("pseudocookie");e=btoa(e),u={...u,uuid:e}}e("blast payload",u),window.ReWebSDK.methods.clientApiService.webSDKBlast(u).then((t=>{if("6da5fc51-c42d-4616-9f68-b80a2f37f335"!=_currentTenant.tenantId&&sessionStorage.removeItem("Resul_lastEvents"),!t.payloadJsonData)return e("websdkblast data null: ",t),!1;const s="object"==typeof t.payloadJsonData?t.payloadJsonData:JSON.parse(t.payloadJsonData);if(e("notificationPayload",s,"Notification"in window),"Notification"in window&&"granted"==Notification.permission&&"false"==s.data.inAppNotification)"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((e=>{e.length&&(s.data.options="object"==typeof s.data.options?JSON.stringify(s.data.options):s.data.options,e[0].active.postMessage({event:"customMsgEvent",data:s.data,priority:"normal",collapse_key:"do_not_collapse"}))}));else{const t=setTimeout((()=>{"object"==typeof s.data.actions&&0==s.data.actions.length&&(s.data.actions=s.data.data.actions),e("checking existing notification"),document.getElementById("ResulticksPagePush-container")?(this.queuedNotification.push(s),e("notification queued: ",this.queuedNotification)):(window.productLiveVisit&&(s.productLiveVisit=productLiveVisit),this.loadInapp(s)),clearTimeout(t)}),this.getRndInteger(2,4))}}))}getRndInteger(e,t){return Math.floor(Math.random()*(t-e+1))+e}loadInapp(t){if(t.data.IsCarousel||"true"==t.data.IsCarousel)window.ReWebSDK.utils.importModule("/carouselNotification.js").then((e=>{carouselNotification(t.data.id,t.data.placement)}));else{const s=()=>{if(window.inAppNotification)try{const s=window.inAppNotification(),{placement:i,overlay:l,isOverlay:o,overlayColor:r,overlayOpacity:a,options:n,title:u,titleColor:c,bodyColor:d,click_actions:L,actions:h,inAppNotificationBgColor:S,inAppNotificationTextColor:g,edmContent:w}=t.data;e("edmContent.data",w);const m=n;let p={placement:i,inAppNotificationBgColor:S,inAppNotificationTextColor:g,titleColor:c,bodyColor:d,overlay:l,isOverlay:o,overlayColor:r,overlayOpacity:a,text:m.body,title:u};if(t.productLiveVisit&&(p={...p,productLiveVisit:!0}),m.icon&&(p.icon=m.icon),L&&(p.click_actions=L),m.hasOwnProperty("type")){switch(m.type){case"image":m.hasOwnProperty("url")&&(p.image=m.url);break;case"video":m.hasOwnProperty("url")&&(p.video=m.url);break;case"edm":m.hasOwnProperty("url")&&(p.edm=m.url);break;case"banner":m.hasOwnProperty("body")&&(p.banner=m.placement)}m.hasOwnProperty("icon")&&(p.icon=m.icon)}h&&(p.actions=h),e("notificationOptions",p),setTimeout((()=>{s.show(p,t.data.id)}),this.getRndInteger(2,4))}catch(t){e("In-App notification has error: ",t)}};document.querySelector('script[src*="inAppNotification.js"]')?s():window.ReWebSDK.utils.importModule("/inAppNotification.js").then((e=>{s()}))}}ruleUserType(){try{return window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")&&window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")&&window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")!==window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")?"identified":"known"}catch(e){}return""}ruleUserRegistered(t){return e("ruleUserRegistered",window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id"),window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")),window.ReWebSDK.utils.LSH.getItem("Res_Profile_Id")!==window.ReWebSDK.utils.LSH.getItem("Res_Passport_Id")?"yes":"no"}ruleNotificationDisabled(){return"denied"==Notification.permission?"yes":"no"}ruleEngineAll(t,s){e("Localrules:: ruleEngineAll:",t.rules);try{for(let e=0;e<t.rules.length;e++)if(!this.ruleEngine(t.rules[e],s))return!1;return e("Localrules:: conditions checked!"),!0}catch(e){}return!1}ruleEngine(s,i){let l=s,o=l.ruleName.toLowerCase();function r(t){e("%c"+JSON.stringify(t,null,1),"font-weight: bold; color: #EC5f67;")}if(o.includes(this.USER_TYPE.toLowerCase())){let e=this.ruleUserType().toLowerCase();if(!l.value.toLowerCase().includes(e))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:e}),!1}else if(o.includes(this.USER_REGISTERED.toLowerCase())){let e=this.ruleUserRegistered();if(!l.value.toLowerCase()==e)return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:e}),!1}else if(o.includes(this.NOTIFICATION_DISABLED.toLowerCase())){if(!l.value.toString().toLowerCase()===this.ruleNotificationDisabled())return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:this.ruleNotificationDisabled()}),!1}else if(o.toString().toLowerCase()==this.LAST_VISITED.toString().toLowerCase()){if(!this.ruleLastVisited(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:window.ReWebSDK.utils.LSH.getItem("lastVisit")}),!1}else if(o.includes(this.WHEN_A_USER_VISITS_THE_WEBSITE.toLowerCase())){if(!new URL(l.value).hostname==location.hostname)return r({msg:"Not satisfied",ruleName:o,rulevalue:{raw:l.value,formatted:new URL(l.value).hostname},value:location.hostname}),!1}else if(o.toString().toLowerCase()==this.LAST_VISITED_PAGE.toString().toLowerCase()){if(!this.ruleLastVisitedPage(l.value.toString().toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:localStorage.getItem("lastLocation")}),!1}else if(o.includes(this.BROWSER.toLowerCase())){let e=this.ruleBrowserCheck().toLowerCase();if(!e.includes(l.value.toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:e}),!1}else if(o.includes(this.BROWSER_VERSION.toLowerCase())){let e=this.ruleBrowserVersionCheck().toLowerCase();if(!e.includes(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:e}),!1}else if(o.includes(this.DEVICETYPE.toLowerCase())){if(!this.ruleDeviceType().toLowerCase().includes(l.value.toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:this.ruleDeviceType()}),!1}else if(o.includes(this.OS.toLowerCase())){if(!window.ReWebSDK.utils.oSname.toLowerCase().includes(l.value.toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:window.ReWebSDK.utils.oSname.toLowerCase()}),!1}else if(o.includes(this.LANGUAGE.toLowerCase())){if(!this.ruleDeviceLanguage(l.value.toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:(navigator.language||navigator.userLanguage).toLowerCase()}),!1}else if(o.includes(this.LOCATION.toLowerCase())){if(!this.userLocation(l.value.toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:window.ReWebSDK.utils.LSH.getItem("currentGeoLocation")}),!1}else if(o.includes(this.NEW_VISITOR.toLowerCase())){if(!(this.ruleNewVisitor().toLowerCase()==l.value.toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:this.ruleNewVisitor()}),!1}else if(o.includes(this.PAGE_VIEWS.toLowerCase())){if(!this.checkPageViews(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:Number(window.ReWebSDK.utils.SSH.getItem("appViewsPerSession"))}),!1}else if(o.includes(this.RETURNING_VISITORS.toLowerCase())){if(!this.ruleReturningVisitor(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:Number(window.ReWebSDK.utils.LSH.getItem("visitedCount"))}),!1}else if(o.includes(this.TRAFFIC_SOURCE_PAGE_REFERRAL.toLowerCase())){let t="true"==this.ruleTrafficSource(l.value);if(e("Localrules:: isFromUrl status: ",t),!t)return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:(document.referrer||location.href).toLowerCase()}),!1}else if(o.includes(this.USER_AGENT.toLowerCase())){if(!("true"==this.ruleUserAgent(l.value)))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:navigator.userAgent.toLowerCase()}),!1;e("Localrules:: ruleUa matched",l.value)}else if(o.includes(this.WHEN_A_USER_VISITS_A_SPECIFIC_PAGE.toLowerCase())){if(!this.ruleUserVisiting(l.value.toLowerCase()))return r({msg:"Not satisfied",ruleName:o,rulevalue:{raw:l.value,formatted:new URL(value).pathname},value:location.pathname}),!1}else if(o.includes(this.SESSION_DURATION.toLowerCase())){if(!this.checkSessionRule(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:ReWebSDK.utils.getCurrentSessionTimeSpent()}),!1}else if(o.includes(this.IDEAL_DURATION.toLowerCase())){if(!this.checkIdealSession(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:this.userState}),!1}else if(o.includes(this.TIME_SPENT_ON_PAGE.toLowerCase())){if(!this.ruleTimeSpentOnPage(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:window.ReWebSDK.utils.getCurrentPageTimeSpent()}),!1}else if(o.includes(this.CUSTOM_EVENTS.toLowerCase())){if(!this.checkCustomEventRule(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:window.ReWebSDK.utils.SSH.getItem("lastEvents")}),!1;{let e=window.ReWebSDK.utils.SSH.getItem("lastEvents");t.setItem("rule"+i,t.getItem(e))}}else if(o.includes(this.WEBSITE_CLICKS.toLowerCase())){if(!this.checkWebsiteClickRule(l.value))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:window.ReWebSDK.utils.SSH.getItem("lastClickEvents")}),!1}else if(o.includes(this.PAGE_DEPTH.toLowerCase())){if(!this.checkPageDepthRule(l.value,i))return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:Number(window.ReWebSDK.utils.SSH.getItem("s_percentage"))}),!1;e("checkPageDepthRule satisfied",l.value),this.pageDepthLevelRuleChecked+=i.toString()+"_"}else if(o.includes(this.PAGE_OUT.toLowerCase())||o.includes(this.PAGEOUT.toLowerCase())){if(!this.pageOutValue)return r({msg:"Not satisfied",ruleName:o,rulevalue:l.value,value:this.pageOutValue}),!1;e("checkPageOutRule satisfied",l.value),this.pageOutValue=!1}return!0}checkPageDepthRule(t,s){let i=Number(window.ReWebSDK.utils.SSH.getItem("s_percentage")),l=s.toString();if(e("Localrules:: page depth rule checking...2"),e("onscroll:: page depth rule checked for campaignID's ",this.pageDepthLevelRuleChecked),e("onscroll:: page depth rule checking for campaign ID ",l),this.pageDepthLevelRuleChecked.includes(l))return!1;switch(t){case"Less than 25%":return i>10;case"26% to 50%":return i>26;case"51% to 75%":return i>51;case"More than 75%":return i>75}}checkCustomEventRule(t){e("Localrules:: cust event: ",t.toLowerCase());let s=!1;if(window.ReWebSDK.utils.LSH.getItem("lastEvents")){e(window.ReWebSDK.utils.LSH.getItem("lastEvents"));let i=window.ReWebSDK.utils.LSH.getItem("lastEvents");i=i.replaceAll(/\s/g,"").toLowerCase(),t=t.replaceAll(/\s/g,"").toLowerCase(),s=window.ReWebSDK.utils.LSH.getItem("lastEvents").includes(t)||i.includes(t)}if(window.ReWebSDK.utils.SSH.getItem("lastEvents")){e(window.ReWebSDK.utils.SSH.getItem("lastEvents"));let i=window.ReWebSDK.utils.SSH.getItem("lastEvents");i=i.replaceAll(/\s/g,"").toLowerCase(),t=t.replaceAll(/\s/g,"").toLowerCase(),s=window.ReWebSDK.utils.SSH.getItem("lastEvents").includes(t)||i.includes(t)}return!s&&window.ReWebSDK.utils.LSH.getItem("formEvents")&&(e(window.ReWebSDK.utils.LSH.getItem("formEvents")),s=window.ReWebSDK.utils.LSH.getItem("formEvents").includes(t)),s}checkWebsiteClickRule(t){e("Localrules:: cust click: ",t.toLowerCase());let s=!1,i="",l="";if(i=(t=t.replaceAll(/\s/g,"").toLowerCase()).split("_")?.[0],l=t.split("_")?.[1],e(i,l),window.ReWebSDK.utils.SSH.getItem("lastClickEvents")){e(window.ReWebSDK.utils.SSH.getItem("lastClickEvents"));let t=JSON.parse(window.ReWebSDK.utils.SSH.getItem("lastClickEvents"));"yes"==i&&t.includes(l)&&(s=!0),"no"!=i||t.includes(l)||(s=!0)}else window.ReWebSDK.utils.SSH.getItem("lastClickEvents")||"no"!=i||(s=!0);return s}checkSessionRule(t){let s=window.ReWebSDK.utils.getCurrentSessionTimeSpent();return e("Localrules:: timeSpent:",s,t.toLowerCase()),t.toLowerCase().includes("less than 10 secs")||t.toLowerCase().includes("10")?(e("Localrules:: more than sessiontime rule satisfied:",s>7),s>7):t.toLowerCase().includes("11secs to 30 secs")||t.toLowerCase().includes("30")?(e("Localrules:: more than sessiontime rule satisfied:",s>15),s>20):t.toLowerCase().includes("31secs to 60 secs")||t.toLowerCase().includes("60")?(e("Localrules:: more than sessiontime rule satisfied:",s>30),s>30):t.toLowerCase().includes("more than 60 secs")||t.toLowerCase().includes("more")||t.toLowerCase().includes("more than 60sec")?(e("Localrules:: more than sessiontime rule satisfied:",s>61),s>61):void 0}checkIdealSession(t){if(e("Localrules:: check ideal func",t,this.checkSessionRule(t),this.userState),this.checkSessionRule(t)&&"ideal"==this.userState)return!0}ruleTimeSpentOnPage(t){let s=window.ReWebSDK.utils.getCurrentPageTimeSpent();return e("Localrules:: timeSpentOnPage:",s,t.toLowerCase()),t.toLowerCase().includes("less than 10 secs")||t.toLowerCase().includes("10")?s>7:t.toLowerCase().includes("11secs to 30secs")||t.toLowerCase().includes("30")?s>15:t.toLowerCase().includes("31secs to 60secs")||t.toLowerCase().includes("60")?s>30:t.toLowerCase().includes("more than 60secs")||t.toLowerCase().includes("more")?s>61:t.toLowerCase().includes("less than 10sec")?s>7:t.toLowerCase().includes("11sec to 30sec")?s>15:t.toLowerCase().includes("31sec to 60sec")?s>30:t.toLowerCase().includes("more than 60sec")?s>61:void 0}ruleEngineAny(t,s){e("Localrules:: dynamicList rule type",t.ruleType);try{let e=[];for(let i=0;i<t.rules.length;i++){let l=t.rules[i];if(l.isMandatory){if(!this.ruleEngine(l,s))return 0;e.push(l)}else this.ruleEngine(l,s)&&e.push(l)}return e.length}catch(t){e("Localrules:: ruleEngineAny err:",t)}return 0}ruleDeviceType(){return window.ReWebSDK.utils.LSH.getItem("dtype")}ruleNewVisitor(){try{return window.ReWebSDK.utils.LSH.getItem("isVisited")||window.ReWebSDK.utils.SSH.getItem("1stsession")?"no":"yes"}catch(t){e("Localrules:: ruleNewVisitor error",t)}return!1}ruleReturningVisitor(t){const s=Number(window.ReWebSDK.utils.LSH.getItem("visitedCount")||0);return e("Localrules:: ruleReturningVisitor",s),s>1}rulePageViews(){try{return Number(window.ReWebSDK.utils.SSH.getItem("appViewsPerSession")||0)}catch(t){e("Localrules:: ruleReturnVisitor error",t)}return!1}ruleReturnVisitor(){try{return Number(window.ReWebSDK.utils.LSH.getItem("isVisited"))>0}catch(t){e("Localrules:: ruleReturnVisitor error",t)}return!1}ruleUserAgent(e){return navigator.userAgent.toLowerCase().includes(e)?"true":"false"}ruleLastVisited(t){try{let o=t.toLowerCase();var s=new Date(window.ReWebSDK.utils.LSH.getItem("lastVisit")),i=(new Date).getTime()-s.getTime(),l=Math.round(i/864e5)-1;if(e("Localrules:: Difference_In_Days",l),o.includes("1 day before"))return l>1;if(o.includes("7 days before"))return l>7;if(o.includes("15 days before"))return l>15;if(o.includes("a month before"))return l>31||l>30}catch(t){e("Localrules:: ruleLastVisited err: "+t)}}ruleLastVisitedPage(t){try{let s=localStorage.getItem("lastLocation")||null;return e("lastvisit:",t,s),!(!s||s==window.location.href)&&s.toLowerCase().includes(t)}catch(e){}return!1}ruleUserVisiting(t){try{e("Localrules:: location",location.pathname,new URL(t).pathname);try{return location.pathname==new URL(t).pathname}catch(e){return location.href.includes(t)}}catch(e){}return!1}ruleAppInBackground(){}ruleBrowserCheck(){return window.ReWebSDK.utils.browserName}ruleBrowserVersionCheck(){return e("Localrules:: BrowserVersion: ",window.ReWebSDK.utils.browserVersion),window.ReWebSDK.utils.browserVersion}ruleAppVersion(t){try{return t.toLowerCase().contains(Util.getAppVersionCode(context).toLowerCase())}catch(t){e(t)}return!1}ruleDeviceLanguage(t){e("find lang: ",t);try{var s=(navigator.language||navigator.userLanguage).toLowerCase();switch(t){case"english":return e("lang: ",s),s.includes("en");default:return!1}}catch(t){e(t)}return!1}userLocation(t){return e("location: ",t),t==window.ReWebSDK.utils.LSH.getItem("currentGeoLocation")}ruleTrafficSource(t){return e("Localrules:: document.referrer || location.href",document.referrer||location.href,document.referrer,location.href),document.referrer&&(document.referrer.includes("visionpublisher")||document.referrer.includes("apparel.html"))?"true":"false"}ruleAppExit(e){appClose=!0,Init(context)}}}();
