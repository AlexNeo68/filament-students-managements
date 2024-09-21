/*! For license information please see desktop-header.a54e0552f6c9e4c0.js.LICENSE.txt */
"use strict";(self["webpackChunkavito_desktop_site"]=self["webpackChunkavito_desktop_site"]||[]).push([[7215],{12107:function(e,t,n){n.d(t,{Z:function(){return St}});var r=n(84481),a=n.n(r),l=n(7291),o=n(54833),i=n(22854),c=n(2908),s=n(82444);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d="notifications-counter",f="/js/notifications/count?platform=desktop",p=5*60*1e3,h="profile-notifications";var v=function(){function e(t){var n=t.userId,r=t.currentPage,a=t.updateUI;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"currentPage",void 0),m(this,"updateUI",void 0),m(this,"userId",void 0),this.userId=n,this.updateUI=a,this.currentPage=r,this.checkCurrentUserData(),this.subscribeVisibilityChange(),this.subscribeLocalStorageChange(),document.hidden||(this.isNotificationsPage()?this.resetCounter():this.init())}var t,n,r;return t=e,r=[{key:"removeCounter",value:function(){localStorage.removeItem(d)}}],(n=[{key:"checkCurrentUserData",value:function(){var e=localStorage.getItem(d);if(e)try{JSON.parse(e).userId!==this.userId&&localStorage.removeItem(d)}catch(t){}}},{key:"subscribeVisibilityChange",value:function(){var e=this;document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&(e.isNotificationsPage()?e.resetCounter():e.init())}))}},{key:"subscribeLocalStorageChange",value:function(){var e=this;window.addEventListener("storage",(function(t){if(t.key===d&&t.newValue)try{var n=JSON.parse(t.newValue);e.updateUI(n.unread)}catch(r){}}))}},{key:"init",value:function(){var e,t=null,n=localStorage.getItem(d);if(n)try{t=JSON.parse(n)}catch(r){}t?(e=t.timestamp,Date.now()-e>=p?(localStorage.removeItem(d),this.fetchCounterData()):this.updateUI(t.unread)):this.fetchCounterData()}},{key:"resetCounter",value:function(){localStorage.removeItem(d);var e={userId:this.userId,timestamp:Date.now(),unread:0};localStorage.setItem(d,JSON.stringify(e))}},{key:"fetchCounterData",value:function(){var e=this;fetch(f,{credentials:"same-origin",headers:{Accept:"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(t){var n=t.unread;e.updateUI(n);var r={userId:e.userId,timestamp:Date.now(),unread:n};localStorage.setItem(d,JSON.stringify(r))})).catch((function(){}))}},{key:"isNotificationsPage",value:function(){return this.currentPage===h}}])&&u(t.prototype,n),r&&u(t,r),e}(),g=n(84921),E=n(94627),y="PRO_ONBOARDING_HAS_BEEN_SHOWN",k=n(35258),b=n(93967),C=n.n(b),N=n(5965),S=n(4071),w=n(56118),A=n(93186),_=n(30393),I=n(98061),x=n(46383),O=n(62657),P=n(3982),z=n(54377),L=n(11160),D=n(89562),B=n(92202),j=n(10429),M=n(32686),F=n(3701),T=n(2023),U=function(e){var t=e.size;return r.createElement("svg",{version:"1",xmlns:"http://www.w3.org/2000/svg",style:{width:t,height:t},viewBox:"0 0 36 36"},r.createElement("path",{fill:"currentColor",d:"M17.1 5.4L13.9 14l-9.2.3c-1.3.1-1.3 1.2-.6 1.8l7.2 5.7-2.5 8.8c-.4 1.1.7 1.6 1.5 1.1l7.6-5.1 7.6 5.1c.6.4 1.8.2 1.5-1.1l-2.5-8.8 7.2-5.7c.8-.7.8-1.7-.6-1.8l-9-.3L19 5.4c-.5-1.1-1.5-1.1-1.9 0z"}))},R=r.memo(U),V="index-module-active-_Dqh6",W="index-module-half-star-nI_l4",H="index-module-star-mu0m3",Z="index-module-with-hover-effect-D2P01",J=function(e){var t=e.currentRatingValue,n=void 0===t?0:t,a=e.marker,l=e.markerId,o=e.minRatingValues,i=e.onClick,c=e.onMouseEnter,s=e.size,u=e.value,m=e.withHoverEffect;return r.createElement("li",{className:C()(H,{[Z]:m}),"data-marker":a+l,onClick:function(){i&&i(u)},onMouseEnter:function(){c&&c(u)}},r.createElement("div",{className:C()(n>o[1]&&V)},r.createElement(R,{size:s})),r.createElement("div",{className:C()(W,n>o[0]&&V)},r.createElement(R,{size:s})))},G=r.memo(J),$="index-module-root-hSkuH";function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=[{minRatingValues:[0,0],value:1},{minRatingValues:[1.2,1.7],value:2},{minRatingValues:[2.2,2.7],value:3},{minRatingValues:[3.2,3.7],value:4},{minRatingValues:[4.2,4.7],value:5}],Y=function(e){var t=e.marker,n=e.onChange,a=e.size,l=e.value,o=void 0===l?0:l,i=e.withHoverEffect,c=q(r.useState(o),2),s=c[0],u=c[1],m=function(e){n&&n(e)},d=function(e){i&&u(e)};return r.createElement("ul",{className:$,"data-marker":t,onMouseLeave:function(){i&&u(0)}},X.map((function(e,n){return r.createElement(G,{key:e.value,currentRatingValue:s,marker:t+"/star",markerId:n,minRatingValues:e.minRatingValues,size:a,value:e.value,withHoverEffect:i,onClick:m,onMouseEnter:d})})))},Q=r.memo(Y),ee=function(e){var t=e.className,n=e.children,a=e.orders,l=r.useRef(null),o=a||{},i=o.handleLoad,s=o.purchases,u=void 0===s?0:s,m=o.sales,d=u+(void 0===m?0:m)+(0,c.A)();return r.useEffect((function(){var e=l.current;if(!e)return function(){};var t=new IntersectionObserver((function(e){e.some((function(e){return e.isIntersecting}))&&(null==i||i(),t.disconnect())}));return t.observe(e),function(){t.disconnect()}}),[i]),r.createElement("li",{ref:l,className:t,"data-marker":"header/tooltip-list-item"},n({actionOrdersCount:d}))},te="index-module-root-_UwAE",ne="index-module-group-VAG9D",re="index-module-profile-nav-item-ZUOtC",ae="index-module-profile-nav-item_value-kUBA4",le="index-module-profile-nav-item_entirely-iEQKO",oe="index-module-profile-nav-item_exit-aAS8H",ie="index-module-profile-nav-item-bonus-alENv",ce="index-module-link-grow-xc3qb",se="index-module-rating-line-wbu44",ue="index-module-stars-_tjKs",me="index-module-pro-lk-nav-item-WJsmN",de="index-module-pro-lk-label-a_nNU",fe="index-module-pro-lk-icon-Y_TCq",pe="index-module-pro-lk-onboarding-QL3gw";function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ge=["бонус","бонуса","бонусов"],Ee="https://ipoteka.avito.ru",ye=function(e){return"".concat((0,z.WU)(e)," ₽")},ke=function(e){return"".concat((0,z.WU)(e)," ").concat((0,P.H)(e,ge))},be=function(e){var t,n,l,o,i=e.headerInfo,c=e.hierarchy,s=e.userAccount,u=e.currentPage,m=e.handlers,d=e.host,f=void 0===d?"":d,p=e.unreadFavoritesCount,h=e.unreadMessengerCount,v=e.unreadNotificationsCount,E=e.user,b=e.isSpaEnabled,S=e.isOpened,w=e.ProfileSwitchComponent,A=e.orders,_=e.userAddressesFlow,I=e.isGarageAvailable,x=he((0,r.useState)(!1),2),O=x[0],P=x[1],z=(null==s?void 0:s.isSeparationBalance)&&s.balance.bonus,U=z||(null==E||null===(t=E.tariffInfo)||void 0===t?void 0:t.isVisible),R=(null==E||null===(n=E.tariffInfo)||void 0===n?void 0:n.isActive)||(null==c?void 0:c.isEmployee),V=R||(null==E?void 0:E.hasNdProfSearch);(0,r.useEffect)((function(){var e="PRO_ENTRY_POINT_EVENT_HAS_BEEN_SENT";!sessionStorage.getItem(e)&&S&&(g["default"].sendEvent(6573,1,{has_onboarding:Boolean(null==E?void 0:E.hasProWelcomeOnboarding)}),sessionStorage.setItem(e,"1"))}),[S,E]),(0,r.useEffect)((function(){null===localStorage.getItem(y)&&null!=E&&E.hasProWelcomeOnboarding&&P(!0)}),[E]);var W,H=function(){return a().createElement("li",{className:re,"data-marker":"header/tooltip-list-item"},a().createElement("div",{className:ce},a().createElement(j.r,{href:"".concat(f,"/account")},"Кошелёк")),a().createElement("div",{className:ae,"data-marker":"header/wallet-value"},s?ye(z?s.balance.real:s.balance.total):null,s&&z?a().createElement("span",{className:ie},ke(s.balance.bonus)):null))};return a().createElement("ul",{className:te,"data-marker":"header/tooltip-list"},function(){if(null==i||!i.rating)return null;var e,t=i.rating,n=a().createElement("div",{className:se},(void 0!==t.scoreFloat||void 0!==t.score)&&a().createElement(a().Fragment,null,a().createElement(D.c,{size:"s"},(e=t.scoreFloat||t.score||0,Number(e).toFixed(1).replace(".",","))),a().createElement("span",{className:ue},a().createElement(Q,{value:t.scoreFloat||t.score||0,marker:"stars",size:"20px"}))),a().createElement(B.D,{size:"s"},t.summary));return"ratings"===u?a().createElement(B.D,null,n):a().createElement("div",{className:ne},a().createElement(j.r,{href:"".concat(f,"/profile/rating?page_from=profile_menu"),preset:"default"},n))}(),V&&a().createElement("div",{className:ne},function(){if(!R)return null;var e=null!=c&&c.isEmployee?"https://pro.avito.ru/":"https://pro.avito.ru/?utm_source=avito&utm_medium=organic&utm_content=top_menu_link";return a().createElement("li",{className:C()(re,me)},a().createElement(a().Fragment,null,a().createElement("div",{className:ce},a().createElement(j.r,{href:e,target:"_blank",rel:"noopener noreferrer",onClick:null==m?void 0:m.handleProClick},a().createElement("div",{className:de},a().createElement(B.D,null,"Кабинет")," ",a().createElement("div",{className:fe}),O&&a().createElement("div",{className:pe},a().createElement(L.E,{size:"s"}))))),(null==c?void 0:c.isEmployee)&&(null==c?void 0:c.companyName)&&a().createElement(M.P,{size:"xs",noAccent:!0},"сотрудник компании «",c.companyName,"»")))}(),function(){if(null==E||!E.hasNdProfSearch)return null;var e=(i||{}).realtyDealsNotificationCounter;return a().createElement("li",{className:re,"data-marker":"header/tooltip-list-item"},a().createElement("div",{className:ce},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/realty-deals?from_page=profile_menu_header")},"Подбор новостроек"):a().createElement(k.Link,{to:"/profile/realty-deals?from_page=profile_menu_header",component:j.r},"Подбор новостроек")),e?a().createElement(N.C,{count:e,size:18,px:6,fontWeight:"normal",fontSize:13}):null)}()),a().createElement("div",{className:ne},null!=i&&i.isShowDashboard?a().createElement("li",{className:C()(re),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/dashboard"),onClick:null==m?void 0:m.handleDashboardClick},"Сводка",a().createElement(a().Fragment,null," ",a().createElement(N.C,{count:"Новое",size:18,px:6,fontWeight:"normal",fontSize:13}))):a().createElement(k.Link,{to:"/profile/dashboard",component:j.r,onClick:null==m?void 0:m.handleDashboardClick},"Сводка",a().createElement(a().Fragment,null," ",a().createElement(N.C,{count:"Новое",size:18,px:6,fontWeight:"normal",fontSize:13})))):null,a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile")},"Мои объявления"):a().createElement(k.Link,{to:"/profile",component:j.r},"Мои объявления")),a().createElement(ee,{className:re,orders:A},(function(e){var t=e.actionOrdersCount;return a().createElement(a().Fragment,null,a().createElement("div",{className:ce},f||!b?a().createElement(j.r,{href:"".concat(f,"/orders?source=shortcut")},"Заказы"):a().createElement(k.Link,{to:"/orders?source=shortcut",component:j.r},"Заказы")),t?a().createElement(N.C,{count:t,size:18,px:6,fontWeight:"normal",fontSize:13}):null)})),(W="?page_from=profile_menu",a().createElement("li",{className:C()(re,le)},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/contacts").concat(W)},"Мои отзывы"):a().createElement(k.Link,{to:"/profile/contacts".concat(W),component:j.r},"Мои отзывы"))),a().createElement("li",{className:re,"data-marker":"header/tooltip-list-item"},a().createElement("div",{className:ce},f||!b?a().createElement(j.r,{href:"".concat(f,"/favorites"),"data-marker":"header/username-tooltip/favorites"},"Избранное"):a().createElement(k.Link,{to:"/favorites",component:j.r,"data-marker":"header/username-tooltip/favorites"},"Избранное")),p?a().createElement(B.D,{color:"gray44","data-marker":"header/username-tooltip/favorites/count"},p):null),I?a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/garage")},"Гараж"," ",a().createElement(N.C,{count:"Новое",size:18,px:6,fontWeight:"normal",fontSize:13})):a().createElement(k.Link,{to:"/garage",component:j.r},"Гараж"," ",a().createElement(N.C,{count:"Новое",size:18,px:6,fontWeight:"normal",fontSize:13}))):null),a().createElement("div",{className:ne},a().createElement("li",{className:re,"data-marker":"header/tooltip-list-item"},a().createElement("div",{className:ce},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/messenger"),onClick:null==m?void 0:m.handleMessengerClick},"Сообщения"):a().createElement(k.Link,{to:"/profile/messenger",component:j.r,onClick:null==m?void 0:m.handleMessengerClick},"Сообщения")),h?a().createElement(B.D,{color:"gray44"},h):null),E?a().createElement("li",{className:re,"data-marker":"header/tooltip-list-item"},a().createElement("div",{className:ce},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/notifications")},"Уведомления"):a().createElement(k.Link,{to:"/profile/notifications",component:j.r},"Уведомления")),v?a().createElement(B.D,{color:"gray44"},v):null):null),U?a().createElement(a().Fragment,null,a().createElement("div",{className:ne},H()),null!=E&&null!==(l=E.tariffInfo)&&void 0!==l&&l.isVisible?a().createElement("div",{className:ne},null!=E&&E.tariffInfo?a().createElement("li",{className:re,"data-marker":"header/tooltip-list-item"},a().createElement("div",{className:ce},a().createElement(j.r,{href:"".concat(f).concat(E.tariffInfo.url)},E.tariffInfo.name)),E.tariffInfo.isActive&&E.tariffInfo.hasBalance?a().createElement("div",{className:ae,"data-marker":"header/wallet-value"},ye(E.tariffInfo.balanceLeft),E.tariffInfo.hasBonuses?a().createElement("span",{className:ie},ke(E.tariffInfo.bonusesLeft)):null):null):null):null):null,a().createElement("div",{className:ne},U?null:H(),a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},a().createElement(j.r,{href:"".concat(f,"/paid-services/listing-fees")},"Платные услуги")),null==E||!E.isLegal||E.hasShopSubscription||null!=E&&E.hasAvitoPro?null:a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},a().createElement(j.r,{href:"".concat(f,"/account/documents")},"Бухгалтерия")),function(){if(null!=E&&E.hasShopSubscription||null!=E&&E.isLegal&&null!=E&&E.hasAvitoPro){var e,t="/professionals/accounting";return null!=E&&null!==(e=E.tariffInfo)&&void 0!==e&&e.isVisible?t="/professionals/employees":E.hasShopSubscription&&(t="/professionals/tariff"),a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},a().createElement(j.r,{href:"".concat(f).concat(t)},"Для профессионалов"))}return null}(),a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/campaigns?source=shortcut")},"Спецпредложения"):a().createElement(k.Link,{to:"/profile/campaigns?source=shortcut",component:j.r},"Спецпредложения")),function(){if(null==E||!E.mortgageAccount)return null;var e=E.mortgageAccount.title;return a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},a().createElement(j.r,{href:Ee,rel:"noopener noreferrer",target:"_blank",onClick:null==m?void 0:m.handleMortgageAccountLinkClick},e," ",a().createElement(T.r,null)))}(),function(){if(null==E||!E.loyaltyPreferences)return null;var e=E.loyaltyPreferences,t=e.tag,n=e.title;return a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/loyalty?source=header.menu")},n,t&&a().createElement(a().Fragment,null," ",a().createElement(N.C,{count:t,size:18,px:6,fontWeight:"normal",fontSize:13}))):a().createElement(k.Link,{to:"/loyalty?source=header.menu",component:j.r},n,t&&a().createElement(a().Fragment,null," ",a().createElement(N.C,{count:t,size:18,px:6,fontWeight:"normal",fontSize:13}))))}()),a().createElement("div",{className:ne},function(){if(!_)return null;var e=_.tag;return a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(F.L,{gap:"8"},a().createElement(j.r,{href:"".concat(f,"/profile/address")},"Адреса"),e&&a().createElement(N.C,{count:e,size:18,px:6,fontWeight:"normal",fontSize:13})):a().createElement(F.L,{gap:"8"},a().createElement(k.Link,{to:"/profile/address",component:j.r},"Адреса"),e&&a().createElement(N.C,{count:e,size:18,px:6,fontWeight:"normal",fontSize:13})))}(),a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/basic")},"Управление профилем"):a().createElement(k.Link,{to:"/profile/basic",component:j.r},"Управление профилем")),a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/safety")},"Защита профиля"):a().createElement(k.Link,{to:"/profile/safety",component:j.r},"Защита профиля")),a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/settings")},"Настройки"):a().createElement(k.Link,{to:"/profile/settings",component:j.r},"Настройки")),a().createElement("li",{className:C()(re,le),"data-marker":"header/tooltip-list-item"},f||!b?a().createElement(j.r,{href:"".concat(f,"/profile/settings/delivery")},"Авито Доставка"):a().createElement(k.Link,{to:"/profile/settings/delivery",component:j.r},"Авито Доставка"))),(null==E||null===(o=E.passport)||void 0===o?void 0:o.isFeatureEnabled)&&w&&a().createElement("div",{className:ne},a().createElement(w,{user:E})),a().createElement("div",{className:ne},a().createElement("li",{className:C()(re,le,oe),"data-marker":"header/tooltip-list-item"},a().createElement(j.r,{href:"".concat(f,"/profile/exit")},"Выйти"))))},Ce=a().memo(be),Ne=n(4997),Se=n.n(Ne),we="index-module-root-pgcY0",Ae="index-module-sticky-_WN0D",_e="index-module-inner-wOyp7",Ie="index-module-nav-stRnY",xe="index-module-nav-item-queVi",Oe="index-module-nav-link-YtJag",Pe="index-module-counters-tyDRW",ze="index-module-counter-G2XAH",Le="index-module-badge-_q_9_",De="index-module-profile-AWXhu",Be="index-module-login-K8jzD",je="index-module-responsive-RKSzw",Me="index-module-narrowLayout-hoGLZ",Fe="index-module-wideLayout-lSKnJ",Te="index-module-username-bFXLV",Ue="index-module-dropdown-popup_left-g5Dv4",Re="index-module-dropdown-popup_right-kpb4_",Ve="index-module-avatar-fx_oB",We="index-module-dropdown-kCqP6",He="index-module-dropdown-popup-bm6Iw",Ze="index-module-profile-menu-dropdown-_mUtA",Je="index-module-add-button-wrapper-kWmFw",Ge="index-module-nav-catalogs-_9ZX2",$e="index-module-nav-catalog-link-z_QMm",qe="index-module-nav-catalog-item-a9Xx9",Ke="index-module-nav-item-business-U7iDN",Xe="index-module-nav-link-business-n4fzr",Ye="index-module-nav-link-business-color-ZE6sV",Qe=(0,r.memo)((function(e){var t=e.catalogs,n=e.currentPage,l=e.onClick,o=(0,r.useCallback)((function(e){switch(e.currentTarget.dataset.catalogSlug){case"catalog_auto":Se().set("comparison_from_page","main_menu",{expires:1}),g["default"].sendEvent(11155,1,{target_page:e.currentTarget.dataset.catalogSlug,from_page:n});break;case"catalog_novostroyki":g["default"].sendEvent(6601,2,{node_type:"main_menu",target_page:e.currentTarget.href}),g["default"].sendEvent(11155,1,{target_page:e.currentTarget.dataset.catalogSlug,from_page:n})}g["default"].sendEvents(),l&&l(e)}),[l]);return a().createElement("li",{className:C()(xe,We)},a().createElement("span",{className:C()(Oe,$e)},"Каталоги"," ",a().createElement(O.U,{rotate:180,mt:3})),a().createElement("div",{className:C()(He,Ge)},t.map((function(e){return a().createElement("div",{key:e.slug,className:qe},a().createElement(j.r,{href:e.link,"data-catalog-slug":e.slug,onClick:o},e.title))}))))})),et=n(45792),tt="is-cart-onboarding-label";function nt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return rt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var at=a().createElement(et.w,{color:"gray44",colorHover:"gray28",size:24}),lt=function(e){var t=e.link,n=e.badge,r=e.title,l=e.dataMarker,o=e.cartCount,i=e.className,c=e.isAuthorized,s=e.onClick,u=nt(a().useState(!1),2),m=u[0],d=u[1];return a().useEffect((function(){Boolean(localStorage.getItem(tt))||d(!0)}),[]),a().createElement("a",{className:i,href:t,title:r,"data-marker":l,onClick:s},c?a().createElement(a().Fragment,null,o?a().createElement(N.C.Over,{gap:!0,gapSize:1,gapColor:"gray84",count:o,size:"s",snapTop:-2,snapRight:-5,badge:n},at):a().createElement(L.E.Over,{show:m,gap:!0,gapSize:1,gapColor:"gray84",snapTop:-2,snapRight:-2},at)):at)};function ot(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return it(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return it(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function it(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ct=function(e){var t=e.addButtonText,n=void 0===t?"Разместить объявление":t,l=e.userAccount,o=e.catalogs,i=e.headerInfo,c=e.hierarchy,s=e.cartCount,u=e.profileCount,m=e.currentPage,d=e.handlers,f=e.hasAddButton,p=e.host,h=void 0===p?"":p,v=e.isResponsive,E=e.isNarrowLayout,y=e.isWideLayout,b=e.isSticky,P=e.isSpaEnabled,z=e.unreadFavoritesCount,L=e.unreadMessengerCount,D=e.unreadNotificationsCount,B=e.user,j=e.isAvitoCare,M=void 0===j||j,F=e.ProfileSwitchComponent,T=e.ProfileMenuComponent,U=e.isOneStopPlace,R=e.orders,V=e.userAddressesFlow,W=e.isNewDesignOfBusinessBtn,H=e.isGarageAvailable,Z=ot((0,r.useState)(!1),2),J=Z[0],G=Z[1],$=function(){return a().createElement("div",{className:Pe},a().createElement("a",{className:ze,href:"".concat(h,"/favorites"),title:"Избранное","data-marker":"header/favorites",onClick:null==d?void 0:d.handleFavoritesClick},a().createElement(N.C.Over,{gap:!0,gapSize:1,gapColor:"gray84",count:z,size:"s",snapTop:-2,snapRight:-5,badge:a().createElement(N.C,{className:Le,"data-marker":"header/favorites-counter"})},a().createElement(_.P,{color:"gray44",colorHover:"gray28",size:24}))),B?a().createElement("a",{className:ze,href:"".concat(h,"/profile/notifications"),title:"Уведомления","data-marker":"header/notifications",onClick:function(){g["default"].sendEvent(11156,1,{from_page:m}),g["default"].sendEvents()}},a().createElement(N.C.Over,{gap:!0,gapSize:1,gapColor:"gray84",count:D,size:"s",snapTop:-2,snapRight:-5,badge:a().createElement(N.C,{className:Le,"data-marker":"header/unread-notifications-counter"})},a().createElement(I.l,{color:"gray44",colorHover:"gray28",size:24}))):null,B?a().createElement("a",{className:ze,href:"".concat(h,"/profile/messenger"),title:"Сообщения","data-marker":"header/messenger",onClick:null==d?void 0:d.handleMessengerClick},a().createElement(N.C.Over,{gap:!0,gapSize:1,gapColor:"gray84",count:L,size:"s",snapTop:-2,snapRight:-5,badge:a().createElement(N.C,{className:Le,"data-marker":"header/unread-chats-counter"})},a().createElement(x.P,{color:"gray44",colorHover:"gray28",size:24}))):null,(e=B?"".concat(h,"/order/cart"):"#login?next=/order/cart",a().createElement(lt,{link:e,badge:a().createElement(N.C,{className:Le,"data-marker":"header/cart-counter"}),title:"Корзина",dataMarker:"header/cart",cartCount:s,isAuthorized:Boolean(B),className:ze,onClick:null==d?void 0:d.handleCartClick})));var e},q=function(){if(!B)return null;var e=null==i?void 0:i.isShowDashboard,t="".concat(h,e?"/profile/dashboard":"/profile");return a().createElement("div",{className:C()(Te,We),"data-marker":"header/menu-profile"},a().createElement("a",{href:t,className:C()(Oe,"ym-hide-content"),"data-marker":"header/username-button",onMouseEnter:function(){return G(!0)},onTouchStart:function(){return G(!0)},onMouseLeave:function(){return G(!1)},onTouchEnd:function(){return G(!1)}},B.avatar?a().createElement(N.C.Over,{gap:!0,gapSize:1,gapColor:"gray84",count:u,size:"s",snapTop:0,snapRight:3,badge:a().createElement(N.C,{className:Le,"data-marker":"header/profile-counter"})},a().createElement("img",{className:Ve,src:B.avatar.url,alt:"Аватар",onClick:null==d?void 0:d.handleAvatarClick})):null,a().createElement("span",{onClick:null==d?void 0:d.handleUsernameClick},B.name),a().createElement(O.U,{rotate:180,mt:1})),U&&T?a().createElement("div",{className:Ze},a().createElement(T,null)):a().createElement("div",{className:C()(He,{[Re]:!f,[Ue]:f}),"data-marker":"header/username-tooltip"},a().createElement(Ce,{currentPage:m,handlers:{handleProClick:null==d?void 0:d.handleProfilePopupProClick,handleMessengerClick:null==d?void 0:d.handleProfilePopupMessengerClick,handleDashboardClick:null==d?void 0:d.handleProfilePopupDashboardClick,handleMortgageAccountLinkClick:null==d?void 0:d.handleMortgageAccountLinkClick},headerInfo:i,hierarchy:c,unreadMessengerCount:L,unreadFavoritesCount:z,unreadNotificationsCount:D,userAccount:l,user:B,host:h,isOpened:J,isSpaEnabled:P,isGarageAvailable:H,ProfileSwitchComponent:F,orders:R,userAddressesFlow:V})))},K=function(){var e=C()(we,{[je]:v&&!E,[Me]:E,[Fe]:y});return a().createElement(w.D,{design:"2023"},a().createElement(A.f,null,a().createElement("div",{className:e,"data-marker":"header/navbar"},a().createElement("div",{className:_e},a().createElement("ul",{className:Ie},a().createElement("li",{className:C()(xe,{[Ke]:W})},a().createElement("a",{className:C()(Oe,{[Xe]:W,[Ye]:W}),href:"".concat(h,"/business"),onClick:null==d?void 0:d.handleBusinessClick},"Для бизнеса")),(null==B?void 0:B.hasAvitoPro)&&!U&&a().createElement("li",{className:xe},a().createElement("a",{className:Oe,href:"//pro.avito.ru",rel:"noopener noreferrer",target:"_blank",onClick:null==d?void 0:d.handleProClick},"Авито Pro")),a().createElement("li",{className:xe},a().createElement("a",{className:Oe,href:"//career.avito.com/?utm_source=avito.ru&utm_medium=referral&utm_campaign=test_placement_to_career&utm_content=top_vacancy",rel:"noopener noreferrer",target:"_blank",onClick:null==d?void 0:d.handleLinkClick},"Карьера в Авито")),a().createElement("li",{className:xe},a().createElement("a",{className:Oe,href:"//support.avito.ru",rel:"noopener noreferrer",target:"_blank",onClick:null==d?void 0:d.handleLinkClick},"Помощь")),null!=o&&o.length?a().createElement(Qe,{catalogs:o,currentPage:m,onClick:null==d?void 0:d.handleLinkClick}):null,M&&a().createElement("li",{className:xe},a().createElement("a",{className:Oe,href:"/avito-care?from=mp_header",rel:"noopener noreferrer",target:"_blank",onClick:null==d?void 0:d.handleLinkClick},"Польза"))),$(),B?a().createElement("a",{className:C()(Oe,De),href:"".concat(h,"/profile"),onClick:null==d?void 0:d.handleMyItemsClick},"Мои объявления"):null,q(),B?null:a().createElement("a",{className:C()(Oe,Be),href:"#login?authsrc=h","data-marker":"header/login-button",onClick:null==d?void 0:d.handleLoginClick},"Вход и регистрация"),function(){if(!f)return null;var e="".concat(h,"/additem");return B||(e="#login?next=".concat(encodeURIComponent(e),"&authsrc=ca")),!h&&B&&P?a().createElement("div",{className:Je},a().createElement(k.Link,{to:e,component:S.z,size:"s",preset:"accent",onClick:null==d?void 0:d.handleAddClick},n)):a().createElement("div",{className:Je},a().createElement(S.z,{href:e,size:"s",preset:"accent",onClick:null==d?void 0:d.handleAddClick},n))}()))))};return b?a().createElement("div",{className:Ae},K()):K()},st=a().memo(ct),ut=["hasAddButton","isNewDesignOfBusinessBtn","page","counters","header","isSpaEnabled","user","cartCount","profileCount","userAddressesFlow"];function mt(){return mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}function dt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ft="is-cart-onboarding-label",pt=function(e){var t,n,a,l,o=e.hasAddButton,i=void 0===o||o,c=e.isNewDesignOfBusinessBtn,s=e.page,u=e.counters,m=void 0===u?0:u,d=e.header,f=e.isSpaEnabled,p=e.user,h=e.cartCount,v=e.profileCount,k=e.userAddressesFlow,b=dt(e,ut),C=function(e){if(e&&e.target){var t=e.target.innerText;t&&g["default"].sendEvent(7839,3,{from_page:s,link_button:t,block_type:"header"})}},N=function(){var e;(null===(e=d.headerInfo)||void 0===e?void 0:e.isShowDashboard)&&g["default"].sendEvent(8680,1,{s:"profile"})};return r.createElement(st,mt({},b,{cartCount:h,profileCount:v,currentPage:s,handlers:{handleAddClick:function(){g["default"].sendEvent(2812,0,{pagetype:s}),p||g["default"].sendEvent(330,1,{pagetype:s})},handleAvatarClick:function(){g["default"].sendEvent(2811,0,{from_block:0,pagetype:s}),N()},handleBusinessClick:function(e){E.Z.push({event:"gtm.generalEvent",eventCategory:null!=p&&p.isLegal?"verified":"funnel",eventAction:"create_shop",eventLabel:"header_link",eventValue:"value"}),g["default"].sendEvent(2811,0,{pagetype:s}),C(e)},handleCartClick:function(){g["default"].sendEvent(4647,8,{from_page:s,srcp:"header"}),localStorage.setItem(ft,"true")},handleFavoritesClick:function(){g["default"].sendEvent(2818,0,{pagetype:s})},handleItemsClick:function(){g["default"].sendEvent(2814,0,{pagetype:s})},handleLoginClick:function(){g["default"].sendEvent(3229,0)},handleMessengerClick:function(){g["default"].sendEvent(3184,0,{s:"top_menu"})},handleMortgageAccountLinkClick:function(){g["default"].sendEvent(6918,0,{})},handleMyItemsClick:function(){g["default"].sendEvent(2814,0,{pagetype:s})},handleProClick:function(e){g["default"].sendEvent(3431,1,{from:"header"}),C(e)},handleProfilePopupProClick:function(){localStorage.setItem(y,"1"),g["default"].sendEvent(3431,1,{from:"headerTooltip"}),g["default"].sendEvent(6577,1,{from_type:"header_sheet"})},handleProfilePopupMessengerClick:function(){g["default"].sendEvent(3184,0,{s:"profile_menu"})},handleUsernameClick:function(){g["default"].sendEvent(2811,0,{from_block:1,pagetype:s}),N()},handleProfilePopupDashboardClick:function(){g["default"].sendEvent(8680,1,{s:"profile_menu"})},handleLinkClick:C},headerInfo:{isShowDashboard:null===(t=d.headerInfo)||void 0===t?void 0:t.isShowDashboard,rating:null==d||null===(n=d.headerInfo)||void 0===n?void 0:n.rating,experiments:null==d||null===(a=d.headerInfo)||void 0===a?void 0:a.experiments,realtyDealsNotificationCounter:null==d||null===(l=d.headerInfo)||void 0===l?void 0:l.realtyDealsNotificationCounter},isNewDesignOfBusinessBtn:c,hierarchy:d.hierarchy,catalogs:d.catalogs,isSpaEnabled:f,hasAddButton:i,unreadFavoritesCount:m,user:p,userAccount:d.userAccount,userAddressesFlow:k}))},ht=n(39957);function vt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return gt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function gt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Et=["favoritesCount","hasAddButton","pageId","isSpaEnabled","showProfileOrderBadge","children","ProfileSwitchComponent","userAddressesFlow","isNewDesignOfBusinessBtn"];function yt(){return yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yt.apply(this,arguments)}function kt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ct(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Nt="@avito/app-nc:read-notification",St=function(e){var t,n,a,u,m,d,f=e.favoritesCount,p=e.hasAddButton,h=void 0===p||p,g=e.pageId,E=e.isSpaEnabled,y=e.showProfileOrderBadge,k=e.children,b=e.ProfileSwitchComponent,C=e.userAddressesFlow,N=e.isNewDesignOfBusinessBtn,S=Ct(e,Et),w=kt(r.useState(i.Z.get()),2),A=w[0],_=w[1],I=kt(r.useState(0),2),x=I[0],O=I[1],P=(0,l.$)().header,z=(0,o.a)(),L=(t=Boolean(z),n=(0,r.useRef)(0),a=vt((0,r.useState)({count:0,initial:!1}),2),u=a[0],m=a[1],d=(0,r.useCallback)((function(e){n.current=n.current+1,m({count:e,initial:1===n.current})}),[]),(0,r.useEffect)((function(){return t?ht.P.subscribe(d):ht.P.unsubscribe(d),function(){ht.P.unsubscribe(d)}}),[t,d]),u),D=L.count,B=L.initial,j=y?(0,c.A)(z):0;return r.useEffect((function(){return z&&i.Z.subscribe(_),function(){i.Z.unsubscribe(_)}}),[z]),r.useEffect((function(){var e,t;return z?(e=new v({currentPage:g,userId:z.id,updateUI:function(e){O(e)}}),t=e.fetchCounterData.bind(e),s.Ld(Nt,t,!0)):v.removeCounter(),function(){z&&s.r1(Nt,t)}}),[z,g]),r.createElement(r.Fragment,null,k,r.createElement(pt,yt({},S,{isNewDesignOfBusinessBtn:N,cartCount:D,initialCart:B,profileCount:j,hasAddButton:h,counters:f,header:P,isSpaEnabled:E,user:z,unreadMessengerCount:A,unreadNotificationsCount:x,page:g,ProfileSwitchComponent:b,userAddressesFlow:C})))}}}]);