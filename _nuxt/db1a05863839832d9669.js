(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{631:function(t,e,r){"use strict";r.r(e);r(38);var n=r(11),o=r(8),c=r(21),d=r(158),l={layout:"auth",name:"RecuperarPassword",head:{title:"Recuperar contraseña confirmación de nueva contraseña — ¿Cuándo rindo?"},data:function(){var t=this.$route.query;return{uid:t.uid,token:t.token,password:"",showPassword:!1,waitingAnswer:!1}},validations:{password:{required:d.required,minLength:Object(d.minLength)(8),maxLength:Object(d.maxLength)(255)}},methods:Object(o.a)({},Object(c.b)("user",["resetConfirmPassword"]),{resetConfirmPasswordAndReport:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.waitingAnswer){t.next=6;break}return this.waitingAnswer=!0,e={new_password:this.password,uid:this.uid,token:this.token},t.next=5,this.resetConfirmPassword(e);case 5:this.waitingAnswer=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},w=r(10),component=Object(w.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{on:{submit:function(e){return e.preventDefault(),t.resetConfirmPasswordAndReport(e)}}},[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("div",{staticClass:"text-xs-center"},[r("v-btn",{staticClass:"py-5 px-5",attrs:{flat:"",icon:"",color:"grey",large:"",to:"/"}},[r("v-icon",{staticStyle:{"font-size":"92px"}},[t._v("account_circle")])],1),t._v(" "),r("h1",{staticClass:"font-weight-regular"},[t._v("Recuperar acceso a tu cuenta")])],1),t._v(" "),r("h2",{staticClass:"text-xs-center font-weight-light"},[t._v("Nueva contraseña")]),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"vpn_key","append-icon":t.showPassword?"visibility":"visibility_off",type:t.showPassword?"text":"password",name:"password",label:"Nueva contraseña",counter:"255"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"primary--text",attrs:{flat:"",to:"/auth/iniciar-sesion"}},[t._v("\n        Acceder\n      ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{type:"submit",depressed:"",loading:t.waitingAnswer,disabled:t.$v.$invalid||t.waitingAnswer,color:"primary"}},[t._v("\n        Recuperar\n        "),r("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[r("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)},[],!1,null,"67ef02db",null);e.default=component.exports}}]);