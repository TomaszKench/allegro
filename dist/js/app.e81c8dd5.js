(function(t){function e(e){for(var a,r,o=e[0],u=e[1],p=e[2],c=0,_=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&_.push(n[r][0]),n[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(_.length)_.shift()();return i.push.apply(i,p||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var u=s[o];0!==n[u]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var l=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"266c":function(t,e,s){"use strict";s("535c")},"3fd9":function(t,e,s){},"4f87":function(t,e,s){},"535c":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("4f87");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("div",{staticClass:"app__form-wrapper",class:{"app__form-wrapper--to-top":t.formToTop}},[s("FormSearch",{staticClass:"app__form",on:{submit:t.fetchRepositories}})],1),s("transition",{attrs:{name:"app__show-transition"}},[s("RepositoriesList",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"app__repositories-list",attrs:{repositories:t.repositories}})],1),s("transition",{attrs:{name:"app__show-transition"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.showAppFailMessage,expression:"showAppFailMessage"}],staticClass:"app__message"},[t._v(" "+t._s(t.translate("APP_FAIL_MESSAGE"))+" ")])]),s("transition",{attrs:{name:"app__show-transition"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.showAppFailMessage,expression:"showAppFailMessage"}],staticClass:"app__message"},[t._v(" "+t._s(t.translate("APP_FAIL_MESSAGE"))+" ")])]),s("transition",{attrs:{name:"app__show-transition"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.showRateLimitMessage,expression:"showRateLimitMessage"}],staticClass:"app__message"},[s("p",[t._v(t._s(t.translate("API_FAIL_RATE_LIMIT")))]),s("p",[t._v(t._s(t.parsedRequestLimitReset))])])]),s("transition",{attrs:{name:"app__show-transition"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.showEmptyListMessage,expression:"showEmptyListMessage"}],staticClass:"app__message"},[t._v(" "+t._s(t.translate("NO_REPOSITORIES"))+" ")])]),s("transition",{attrs:{name:"app__show-transition"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.showUserFailMessage,expression:"showUserFailMessage"}],staticClass:"app__message"},[t._v(" "+t._s(t.translate("NO_USER"))+" ")])]),s("transition",{attrs:{name:"app__show-transition"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoadingSpin,expression:"showLoadingSpin"}],staticClass:" app__loading-spin-wrapper"},[s("div",{staticClass:"loading-spin"})])])],1)},i=[],r=s("1da1"),o=(s("96cf"),s("dca8"),s("caad"),s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"form-search",on:{submit:function(e){return e.preventDefault(),t.emitSubmit(e)}}},[s("BaseTextInput",{staticClass:"form-search__text-input",attrs:{placeholder:t.translate("GITHUB_USERNAME")},model:{value:t.textInputValue,callback:function(e){t.textInputValue=e},expression:"textInputValue"}}),s("button",{staticClass:"form-search__button button",attrs:{type:"submit"}},[t._v(t._s(t.translate("SEARCH")))])],1)}),u=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"base-text-input"},[s("input",{staticClass:"base-text-input__text-input",attrs:{type:"text",required:""},domProps:{value:t.value},on:{input:t.handleInput}}),t.placeholder?s("p",{staticClass:"base-text-input__placeholder"},[t._v(t._s(t.placeholder))]):t._e()])},l=[],c={name:"BaseTextInput",props:{value:{type:String,default:""},placeholder:{type:String,default:""}},methods:{handleInput:function(t){this.$emit("input",t.target.value)}}},_=c,h=(s("c218"),s("2877")),f=Object(h["a"])(_,p,l,!1,null,null,null),m=f.exports,S={name:"FormSearch",components:{BaseTextInput:m},data:function(){return{textInputValue:""}},methods:{emitSubmit:function(){this.$emit("submit",this.textInputValue)}}},d=S,v=(s("266c"),Object(h["a"])(d,o,u,!1,null,null,null)),R=v.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"repositories-list"},[s("thead",{staticClass:"repositories-list__thead"},[s("td",{staticClass:"repositories-list__head-name-td"},[t._v(t._s(t.translate("REPOSITORIES_LIST_NAME_HEADER")))]),s("td",{staticClass:"repositories-list__head-stars-td"},[t._v(t._s(t.translate("REPOSITORIES_LIST_STARS_HEADER")))])]),t._l(t.repositories,(function(e){return s("tr",{key:e.id,staticClass:"repositories-list__content-tr"},[s("td",{staticClass:"repositories-list__name-td"},[s("a",{staticClass:"repositories-list__a",attrs:{href:e.html_url,target:"_blank"}},[t._v(t._s(e.name))])]),s("td",{staticClass:"repositories-list__star-td"},[t._v(" "+t._s(e.stargazers_count)+" ")])])}))],2)},E=[],T={name:"RepositoriesList",props:{repositories:{type:Array,default:function(){return[]},validator:function(t){return t.every((function(t){return a["a"].hasEveryProperties(t,["id","name","html_url","stargazers_count"])}))}}}},L=T,g=(s("f128"),Object(h["a"])(L,w,E,!1,null,null,null)),I=g.exports,O={name:"App",components:{FormSearch:R,RepositoriesList:I},data:function(){return{repositories:[],requestStatus:null,allowSendRequest:!0,appStatus:1,rateLimitResetTimeLeft:null,rateLimitResetInterval:null,appStatusValues:Object.freeze({START:1,WAIT_FOR_RESULT:2,SHOW_RESULT:3})}},computed:{formToTop:function(){return this.appStatus!=this.appStatusValues.START},showAppFailMessage:function(){return this.appStatus==this.appStatusValues.SHOW_RESULT&&([0,400,422].includes(this.requestStatus)||this.requestStatus>=500)},showUserFailMessage:function(){return this.appStatus==this.appStatusValues.SHOW_RESULT&&404==this.requestStatus},showRateLimitMessage:function(){return this.appStatus==this.appStatusValues.SHOW_RESULT&&403==this.requestStatus},showLoadingSpin:function(){return this.appStatus==this.appStatusValues.WAIT_FOR_RESULT},showEmptyListMessage:function(){return this.appStatus==this.appStatusValues.SHOW_RESULT&&this.requestStatus>=200&&this.requestStatus<400&&0==this.repositories.length},showList:function(){return this.appStatus==this.appStatusValues.SHOW_RESULT&&this.requestStatus>=200&&this.requestStatus<400&&this.repositories.length>0},parsedRequestLimitReset:function(){return new Date(1e3*this.rateLimitResetTimeLeft).toISOString().substr(11,8)}},methods:{fetchRepositories:function(t){var e=this;this.allowSendRequest&&(this.appStatus=this.appStatusValues.WAIT_FOR_RESULT,this.sendRequest(t).then((function(t){e.requestStatus=t.status,e.setRepositories(t.response),e.sortRepositoriesByStars()})).catch((function(t){e.handleError(t)})).finally((function(){e.appStatus=e.appStatusValues.SHOW_RESULT})))},handleError:function(t){this.requestStatus=t.status,403==t.status&&this.handleRateLimitError(t)},handleRateLimitError:function(t){var e=this;this.allowSendRequest=!1;var s=t.getResponseHeader("x-ratelimit-reset")-Math.round((new Date).getTime()/1e3);this.rateLimitResetTimeLeft=s,setTimeout((function(){clearInterval(e.rateLimitResetInterval),e.resetApp()}),1e3*s),this.rateLimitResetInterval=setInterval((function(){e.rateLimitResetTimeLeft--}),1e3)},resetApp:function(){this.repositories=[],this.requestStatus=null,this.allowSendRequest=!0,this.appStatus=this.appStatusValues.START,this.rateLimitResetTimeLeft=null},sortRepositoriesByStars:function(){this.repositories.sort((function(t,e){return t.stargazers_count<e.stargazers_count?1:-1}))},setRepositories:function(t){this.repositories=this.parseResponse(t)},parseResponse:function(t){return JSON.parse(t)},sendRequest:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,s){var n=new XMLHttpRequest;n.open("GET",a["a"].endpoint("API_GET_REPOS_BY_USERNAME_ENDPOINT",{username:t})),n.setRequestHeader("Accept","application/vnd.github.v3+json"),n.onreadystatechange=function(){n.readyState==XMLHttpRequest.DONE&&(n.status>=200&&n.status<400&&e(n),s(n))},n.send()})));case 1:case"end":return e.stop()}}),e)})))()}}},b=O,A=(s("5c0b"),Object(h["a"])(b,n,i,!1,null,null,null)),y=A.exports,P=(s("ac1f"),s("5319"),{API_LOCATION:"https://api.github.com",API_GET_REPOS_BY_USERNAME_ENDPOINT:"/users/{username}/repos"}),x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var s in e)t=t.replace("{".concat(s,"}"),e[s]);return t},M={install:function(t){t.endpoint=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return P.API_LOCATION+x(P[t],e)}}},C={GITHUB_USERNAME:"Nazwa użytkownika GitHub",SEARCH:"Szukaj",APP_FAIL_MESSAGE:"Przepraszamy, ale coś poszło nie tak. Postaramy się jak najszybciej rozwiązać problem.",API_FAIL_RATE_LIMIT:"Przykro nam, wyczerpano limit zapytań.. musisz chwilę poczekać.",NO_REPOSITORIES:"Zdaje się, że ten użytkownik nie posiada żadnych repozytoriów.",NO_USER:"Nie udało nam się znaleźć użytkownika o podanej nazwie.",REPOSITORIES_LIST_NAME_HEADER:"Nazwa (odnośnik)",REPOSITORIES_LIST_STARS_HEADER:"Gwiazdki"},N={install:function(t){t.prototype.translate=function(t){return C[t]}}},q={install:function(t){t.hasEveryProperties=function(t,e){return e.every((function(e){return Object.prototype.hasOwnProperty.call(t,e)}))}}};a["a"].config.productionTip=!1,a["a"].use(N),a["a"].use(M),a["a"].use(q),new a["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},8421:function(t,e,s){},"9c0c":function(t,e,s){},c218:function(t,e,s){"use strict";s("8421")},f128:function(t,e,s){"use strict";s("3fd9")}});
//# sourceMappingURL=app.e81c8dd5.js.map