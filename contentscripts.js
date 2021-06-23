(()=>{var e={672:(e,t,n)=>{var{USER_DETAILS:r}=n(958);class E{constructor(){this.isAuthenticated=!1,this.authData=null}authenticate(){if(!this.isAuthenticated&&document.querySelector(".user-info")){var e={authToken:document.querySelector("meta[name='csrf-token']").getAttribute("content"),fiverUserName:document.querySelector(".user-info a").innerText,userId:document.querySelector("meta[name='user_id']").getAttribute("content")};chrome.runtime.sendMessage({type:r,data:e}),this.isAuthenticated=!0,this.authData=e}}getAuthValues(){return!(!this.isAuthenticated&&(this.authenticate(),!this.isAuthenticated))&&this.authData}static getAuthenticator(){if(E.instance)return E.instance;var e=new E;return E.instance=e,e}}E.instance=null,e.exports={Authenticator:E.getAuthenticator()}},449:(e,t,n)=>{function r(e,t,n,r,E,i,_){try{var o=e[i](_),a=o.value}catch(e){return void n(e)}o.done?t(a):Promise.resolve(a).then(r,E)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(E,i){var _=e.apply(t,n);function o(e){r(_,E,i,o,a,"next",e)}function a(e){r(_,E,i,o,a,"throw",e)}o(void 0)}))}}var{initMoneyCalc:i}=n(386),{setBuyerAccount:_}=n(953),{Authenticator:o}=n(672),{CHECK_ACTIVENESS:a}=n(958),{sendMessage:T}=n(993);function s(){return new Promise((e=>{chrome.runtime.sendMessage({type:a},(function(t){e(!!t&&t.isActive)}))}))}setInterval(E((function*(){o.authenticate(),(yield s())&&_()})),6e4),window.onload=E((function*(){_(),o.authenticate(),(yield s())&&(i(),T())}))},993:(e,t,n)=>{function r(e,t,n,r,E,i,_){try{var o=e[i](_),a=o.value}catch(e){return void n(e)}o.done?t(a):Promise.resolve(a).then(r,E)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(E,i){var _=e.apply(t,n);function o(e){r(_,E,i,o,a,"next",e)}function a(e){r(_,E,i,o,a,"throw",e)}o(void 0)}))}}var{GET_MESSAGES:i,CLEAR_TOBESENT:_}=n(958),{Authenticator:o}=n(672);function a(){return(a=E((function*(e){var t=o.getAuthValues();if(t)for(var n=0;n<e.length;n++){var r=e[n].username,E=e[n].message,i={authenticity_token:t.authToken,message:{body:E,sender_username:t.fiverUserName,to:r,pending_attachment_ids:"",filerr_pending_attachment_ids:"",message_attachment_id:""}};yield fetch("https://www.fiverr.com/messages",{method:"POST",headers:{"x-csrf-token":t.authToken,"content-type":"application/json",referrer:"https://www.fiverr.com/inbox/".concat(r)},body:JSON.stringify(i)}),yield T(),window.close()}}))).apply(this,arguments)}function T(){return new Promise((e=>{setTimeout((function(){e()}),2e3)}))}e.exports={sendMessage:()=>{"#send_message"===window.location.hash&&chrome.runtime.sendMessage({type:i},(function(e){(function(e){return a.apply(this,arguments)})(e.messages).then((e=>{chrome.runtime.sendMessage({type:_},(function(){}))})).catch((e=>{console.error(e)}))}))}}},386:(e,t,n)=>{var r,{CHECK_MONEYCALC_SELECTED:E}=n(958);function i(e){if(!e.startsWith("$"))return!1;var t=e.substring(1,e.length);return!!parseInt(t)}function _(e){var t=e[0],n=parseInt(e.substring(1,e.length)),r=.055*n+n;r<50&&(r+=2);var E=.8*n;document.querySelector("#f_number").innerText=t+n.toFixed(2),document.querySelector("#f_buyeramount").innerText=t+r.toFixed(2),document.querySelector("#f_selleramount").innerText=t+E.toFixed(2)}e.exports={initMoneyCalc:()=>{fetch(chrome.runtime.getURL("/money_index.html")).then((e=>e.text())).then((e=>{var t=(new DOMParser).parseFromString(e,"text/html").body.firstChild;document.body.append(t),r=document.querySelector(".f_money_popup")})).catch(console.error);for(var e=document.querySelectorAll("input, textarea"),t=0;t<e.length;t++)e[t].addEventListener("keyup",(function(e){var t=e.target.value.split(" "),n=t[t.length-1];i(n)?chrome.runtime.sendMessage({type:E},(function(e){e&&e.isActive&&(_(n),r.style.display="flex")})):r.style.display="none"}))}}},953:e=>{var t=!1;e.exports={setBuyerAccount:()=>{if(-1!==window.location.href.indexOf("/requests")&&-1!==window.location.href.indexOf("/users")){var e=document.querySelectorAll("tbody tr");if(!(e.length<1||t)){for(var n=0;n<e.length;n++){var r,E=null===(r=e[n].querySelector("td:nth-child(6) a"))||void 0===r?void 0:r.getAttribute("data-meta");try{if(!E)break;var i=JSON.parse(E),_=document.createElement("div"),o=document.createElement("a");o.href="https://fiverr.com/"+i.username,o.target="_blank";var a=document.createTextNode(i.username);o.append(a),_.append(o),e[n].querySelector("td:nth-child(2)").prepend(_)}catch(e){}}t=!0}}else t=!0}}},958:e=>{e.exports={SEND_BUYER_REQUESTS:"SEND_BUYER_REQUESTS",VISITED_IDS:"VISITED_IDS",USER_DETAILS:"USER_DETAILS",GET_MESSAGES:"GET_MESSAGES",BUYER_REQUEST_TOGGLE:"BUYER_REQUEST_TOGGLE",ALWAYS_ONLINE_TOGGLE:"ALWAYS_ONLINE_TOGGLE",AUTO_RESPONDER_TOGGLE:"AUTO_RESPONDER_TOGGLE",FIVERR_NOTIFICATION_TOGGLE:"FIVERR_NOTIFICATION_TOGGLE",MONEY_CALCULATOR_TOGGLE:"MONEY_CALCULATOR_TOGGLE",BLUR_INCOME_TOGGLE:"BLUR_INCOME_TOGGLE",CHECK_ACTIVENESS:"CHECK_ACTIVENESS",CHECK_MONEYCALC_SELECTED:"CHECK_MONEYCALC_SELECTED",USER_PREFERENCE:"USER_PREFERENCE",ACTIVE_USER:"ACTIVE_USER",CLEAR_TOBESENT:"CLEAR_TOBESENT",URI_DATA:"URI_DATA",API:{BASE:"https://www.smartfiverr.com",ACTIVE_ENDPOINT:"/active",AUTHORIZE_ENDPOINT:"/authorize",PING:"/ping",TRACKER_DATA_ENDPOINT:"/tracker"},URI:{ALWAYS_ONLINE:"ALWAYS_ONLINE",AUTO_RESPONDER_CONTACTS:"AUTO_RESPONDER_CONTACTS",BETTER_NOTIFICATION:"BETTER_NOTIFICATION",BETTER_SPECIFIC_NOTIFICATION:"BETTER_SPECIFIC_NOTIFICATION"},TRACKER:{TRACKER_STORAGE_KEY:"TRACKER_STORAGE_KEY",NUM_OF_AUTORESPONDS:"NUM_OF_AUTORESPONDS",NUM_OF_BETTER_NOTIFICATIONS:"NUM_OF_BETTER_NOTIFICATIONS",NUM_OF_REQUEST_NOTIFICATIONS:"NUM_OF_REQUEST_NOTIFICATIONS",NUM_OF_MONEY_CALCULATOR_TRIGGERS:"NUM_OF_MONEY_CALCULATOR_TRIGGERS",NUM_OF_TIMES_POPUP_OPEN:"NUM_OF_TIMES_POPUP_OPEN",NUM_OF_TIMES_PREFERENCE_OPEN:"NUM_OF_TIMES_PREFERENCE_OPEN"},NOTIFICATIONS:{BETTER_NOTIFICATION_ID:"BETTER_NOTIFICATION_ID",AUTO_RESPONDER_ID:"AUTO_RESPONDER_ID",BUYER_REQUEST_ID:"BUYER_REQUEST_ID"},NOTIFICATION_SOUNDS:{NOTIFICATION_SOUNDS_KEY:"NOTIFICATION_SOUNDS_KEY",GOT_IT_DONE:"GOT_IT_DONE",MOONLESS:"MOONLESS",PIECE_OF_CAKE:"PIECE_OF_CAKE",POINT_BLANK:"POINT_BLANK",TO_THE_POINT:"TO_THE_POINT"}}}},t={};function n(r){var E=t[r];if(void 0!==E)return E.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n(993),n(449)})();