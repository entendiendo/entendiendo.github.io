(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{647:function(t,e,n){"use strict";n.r(e);n(38);var r=n(11),o=n(8),c=n(20),l={computed:Object(o.a)({},Object(c.e)("user",["user"])),data:function(){return{notificationActive:!1,dialogActive:!1}},mounted:function(){this.notificationActive="granted"===Notification.permission,console.log(this.$axios)},methods:Object(o.a)({},Object(c.b)("user",["logout"]),{changeVisibilityNotification:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"Notification"in window&&"serviceWorker"in navigator){t.next=3;break}return t.abrupt("return");case 3:if("default"!==Notification.permission){t.next=13;break}return console.log("Usuario pendiente"),t.next=7,Notification.requestPermission();case 7:if("granted"!==t.sent){t.next=13;break}return t.next=11,OneSignal.getUserId();case 11:e=t.sent,this.$axios.$post("/user/playerid/",{player_id:e},{headers:{Authorization:"Token ".concat(this.$cookies.get("auth_token"))}});case 13:if("blocked"!==Notification.permission){t.next=17;break}return console.log("Usuario bloqueado"),this.notificationActive=!1,t.abrupt("return");case 17:if("granted"===Notification.permission){t.next=21;break}return console.log("Usuario permitido"),this.notificationActive=!0,t.abrupt("return");case 21:t.next=25;break;case 23:t.prev=23,t.t0=t.catch(0);case 25:return t.prev=25,this.dialogActive=!1,t.finish(25);case 28:case"end":return t.stop()}},t,this,[[0,23,25,28]])}));return function(){return t.apply(this,arguments)}}()})},v=n(10),component=Object(v.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:"","align-content-start":""}},[t.user?n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Correo electronico",value:t.user.email,disabled:"","full-width":"","hide-details":""}}),t._v(" "),n("v-divider"),t._v(" "),n("v-text-field",{attrs:{label:"Nombre de usuario",value:t.user.username,disabled:"","full-width":"","hide-details":""}}),t._v(" "),n("v-divider"),t._v(" "),t.user.role&&t.user.role.name?[n("v-text-field",{attrs:{label:"Tipo de usuario",value:t.user.role.name,disabled:"","full-width":"","hide-details":""}}),t._v(" "),n("v-divider")]:t._e(),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("v-btn",{staticClass:"px-0",attrs:{flat:"",disabled:t.notificationActive},on:{click:function(e){t.dialogActive=!0}}},[t._v("\n        Notificación activa\n      ")]),t._v(" "),n("v-switch",{attrs:{color:"primary",disabled:t.notificationActive,readonly:""},model:{value:t.notificationActive,callback:function(e){t.notificationActive=e},expression:"notificationActive"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-btn",{attrs:{flat:""},on:{click:t.logout}},[t._v("\n      Cerrar sesion\n    ")])],2):t._e(),t._v(" "),n("v-dialog",{staticClass:"d-flex align-center",attrs:{persistent:"",flat:"","max-width":"300px"},model:{value:t.dialogActive,callback:function(e){t.dialogActive=e},expression:"dialogActive"}},[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.changeVisibilityNotification(e)}}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Activar Notificación "),n("v-icon",[t._v("notifications")])],1)]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialogActive=!1}}},[t._v("Más tarde")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{type:"submit",color:"primary",depressed:""}},[t._v("Activar")])],1)],1)],1)],1)],1)},[],!1,null,"a5e520de",null);e.default=component.exports}}]);