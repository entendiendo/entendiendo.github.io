(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{556:function(e,t,r){"use strict";r.d(t,"f",function(){return n}),r.d(t,"e",function(){return o}),r.d(t,"a",function(){return c}),r.d(t,"d",function(){return l}),r.d(t,"b",function(){return d}),r.d(t,"c",function(){return m});var n=function(e){return/^[a-zA-Z0-9\-\ñ\Ñ\.\_]+$/.test(e)},o=function(){return"¡No podes usar caracteres especiales! Solo letras de la A a la Z y numeros"},c=function(){return"¡Debes ingresar un email valido!"},l=function(){return"¡Este campo es requerido!"},d=function(e){return"¡Este campo no puede ser mayor a ".concat(e," caractere(s)!")},m=function(e){return"¡Este campo no puede ser menor a ".concat(e," caractere(s)!")}},557:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o});r(37);var n=function(){var object=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=object.universitiesDisabled,t=void 0!==e&&e,r=object.university,n=void 0===r?null:r,o=object.universityDisabled,c=void 0!==o&&o,l=object.faculty,d=void 0===l?null:l,m=object.facultyDisabled,f=void 0!==m&&m,v=object.career,h=void 0===v?null:v,_=object.careerDisabled,x=void 0!==_&&_,y=object.subject,O=void 0===y?null:y,$=object.subjectDisabled,w=void 0!==$&&$,A=[];return A.push({text:"Universidades",disabled:t,href:"/admin/universidades"}),n&&A.push({text:n.name,disabled:c,href:"/admin/universidades/".concat(n.id)}),d&&A.push({text:d.name,disabled:f,href:"/admin/facultades/".concat(d.id)}),h&&A.push({text:h.name,disabled:x,href:"/admin/carreras/".concat(h.id)}),O&&A.push({text:O.name,disabled:w,href:"/admin/materias/".concat(O.id)}),A},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="/admin/universidades/".concat(e);return[{text:"Aulas",disabled:"aulas"==t,href:"".concat(r,"/aulas")},{text:"Planes",disabled:"planes"==t,href:"".concat(r,"/planes")},{text:"Profesores",disabled:"profesores"==t,href:"".concat(r,"/profesores")},{text:"Sedes",disabled:"sedes"==t,href:"".concat(r,"/sedes")},{text:"Tipo de profesores",disabled:"tipo-de-profesores"==t,href:"".concat(r,"/tipo-de-profesores")}]}},558:function(e,t,r){"use strict";r.d(t,"f",function(){return m}),r.d(t,"i",function(){return f}),r.d(t,"g",function(){return v}),r.d(t,"h",function(){return h}),r.d(t,"k",function(){return O}),r.d(t,"n",function(){return $}),r.d(t,"l",function(){return w}),r.d(t,"m",function(){return A}),r.d(t,"b",function(){return E}),r.d(t,"e",function(){return C}),r.d(t,"c",function(){return j}),r.d(t,"d",function(){return N}),r.d(t,"a",function(){return k}),r.d(t,"j",function(){return I}),r.d(t,"o",function(){return F}),r.d(t,"r",function(){return R}),r.d(t,"p",function(){return S}),r.d(t,"q",function(){return L});r(81),r(37);var n=r(556),o=r(158),c=function(e){return{label:"Ingrese el nombre",value:e.form.name,counter:80,autofocus:!0,"error-messages":(t=[],e.$v.form.name.$dirty?(!e.$v.form.name.required&&t.push(Object(n.d)()),!e.$v.form.name.maxLength&&t.push(Object(n.b)(80)),t):t)};var t},l=function(e){return{input:function(t){e.form.name=t},blur:function(t){e&&e.$v&&e.$v.form&&e.$v.form.name&&e.$v.form.name.$touch()}}},d={required:o.required,maxLength:Object(o.maxLength)(80)},m=[{name:"name",type:"v-text-field",attributes:function(e){return c(e)},listeners:function(e){return l(e)},validations:d}],f=[{name:"name",type:"v-text-field",attributes:function(e){return c(e)},listeners:function(e){return l(e)},validations:d}],v=[{name:"name",type:"v-text-field",attributes:function(e){return Object.assign(c(e),{disabled:!0})},listeners:function(e){return l(e)},validations:d}],h=[{name:"name",type:"v-text-field",attributes:function(e){return Object.assign(c(e),{disabled:!0})},listeners:function(e){return l(e)},validations:d}],_=function(e){return{label:"Ingrese el nombre",value:e.form.name,counter:80,autofocus:!0,"error-messages":(t=[],e.$v.form.name.$dirty?(!e.$v.form.name.required&&t.push(Object(n.d)()),!e.$v.form.name.maxLength&&t.push(Object(n.b)(80)),t):t)};var t},x=function(e){return{input:function(t){e.form.name=t},blur:function(t){e&&e.$v&&e.$v.form&&e.$v.form.name&&e.$v.form.name.$touch()}}},y={required:o.required,maxLength:Object(o.maxLength)(80)},O=[{name:"name",type:"v-text-field",attributes:function(e){return _(e)},listeners:function(e){return x(e)},validations:y},{name:"plan_id",type:"v-autocomplete",attributes:function(e){return function(e){return{value:e.form.plan_id,items:e.form.plans,"item-text":"name","item-value":"id","hide-details":!0,"hide-selected":!0,"no-data-text":"No hay planes para seleccionar",label:"Selecciona un plan"}}(e)},listeners:function(e){return function(e){return{input:function(t){e.form.plan_id=t}}}(e)},validations:{}}],$=O,w=[{name:"name",type:"v-text-field",attributes:function(e){return Object.assign(_(e),{disabled:!0})},listeners:function(e){return x(e)},validations:y}],A=w,E=[{name:"date",type:"v-date-picker",attributes:function(e){return{value:e.form.date,"slot-scope":"{ active, toggle }","full-width":!0,color:"success",locale:"es-ar"}},listeners:function(e){return{input:function(t){e.form.date=t}}},validations:{required:o.required}},{name:"time",type:"v-time-picker",attributes:function(e){return{"slot-scope":"{ active, toggle }",value:e.form.time,format:"24hr","full-width":!0,color:"success",locale:"es-ar"}},listeners:function(e){return{input:function(t){e.form.time=t}}},validations:{}},{name:"details",type:"v-text-field",attributes:function(e){return{label:"Ingrese el detalle",value:e.form.details}},listeners:function(e){return{input:function(t){e.form.details=t}}},validations:{}},{name:"classroom_id",type:"v-autocomplete",attributes:function(e){return{items:e.form.classrooms,"item-text":"name","item-value":"id","hide-details":!0,"hide-selected":!0,"no-data-text":"No hay aulas para seleccionar",label:"Selecciona un aula",value:e.form.classroom_id}},listeners:function(e){return{input:function(t){e.form.classroom_id=t}}},validations:{}},{name:"seat_id",type:"v-autocomplete",attributes:function(e){return{items:e.form.seats,"item-text":"name","item-value":"id","hide-details":!0,"hide-selected":!0,"no-data-text":"No hay sedes para seleccionar",label:"Selecciona una sede",value:e.form.seat_id}},listeners:function(e){return{input:function(t){e.form.seat_id=t}}},validations:{}}],C=E,j=[{name:"date",type:"v-text-field",attributes:function(e){return{value:e.form.date,disabled:!0}},listeners:function(e){return{input:function(t){e.form.date=t}}},validations:{required:o.required}}],N=j,k=[{name:"teacher_id",type:"v-autocomplete",attributes:function(e){return{value:e.form.teacher_id,items:e.form.teachers,"error-messages":(t=[],e.$v.form.teacher_id.$dirty?(!e.$v.form.teacher_id.required&&t.push(Object(n.d)()),t):t),"item-text":"fullName","item-value":"id","hide-details":!0,"hide-selected":!0,"no-data-text":"No hay profesores para seleccionar",label:"Selecciona un profesor"};var t},listeners:function(e){return{input:function(t){e.form.teacher_id=t},blur:function(t){e&&e.$v&&e.$v.form&&e.$v.form.teacher_id&&e.$v.form.teacher_id.$touch()}}},validations:{required:o.required}},{name:"role_id",type:"v-select",attributes:function(e){return{value:e.form.role_id,items:e.form.typesOfTeachers,"no-data-text":"No hay cargos para seleccionar",label:"Seleccione un cargo en la mesa","error-messages":(t=[],e.$v.form.role_id.$dirty?(!e.$v.form.role_id.required&&t.push(Object(n.d)()),t):t)};var t},listeners:function(e){return{input:function(t){e.form.role_id=t},blur:function(t){e&&e.$v&&e.$v.form&&e.$v.form.role_id&&e.$v.form.role_id.$touch()}}},validations:{required:o.required}}],I=[{name:"name",type:"v-text-field",attributes:function(e){return{value:e.form.name,disabled:!0}},listeners:function(e){return{}},validations:{}}],F=[{name:"first_name",type:"v-text-field",attributes:function(e){return{value:e.form.first_name,autofocus:!0,counter:50,label:"Nombre del profesor","error-messages":(t=[],e.$v.form.first_name.$dirty?(!e.$v.form.first_name.required&&t.push(Object(n.d)()),!e.$v.form.first_name.maxLength&&t.push(Object(n.b)(50)),t):t)};var t},listeners:function(e){return{input:function(t){e.form.first_name=t},blur:function(t){e&&e.$v&&e.$v.form&&e.$v.form.first_name&&e.$v.form.first_name.$touch()}}},validations:{required:o.required,maxLength:Object(o.maxLength)(50)}},{name:"last_name",type:"v-text-field",attributes:function(e){return{value:e.form.last_name,counter:50,label:"Apellido del profesor","error-messages":(t=[],e.$v.form.last_name.$dirty?(!e.$v.form.last_name.required&&t.push(Object(n.d)()),!e.$v.form.last_name.maxLength&&t.push(Object(n.b)(50)),t):t)};var t},listeners:function(e){return{input:function(t){e.form.last_name=t},blur:function(t){e&&e.$v&&e.$v.form&&e.$v.form.last_name&&e.$v.form.last_name.$touch()}}},validations:{required:o.required,maxLength:Object(o.maxLength)(50)}}],R=F,S=[{name:"fullName",type:"v-text-field",attributes:function(e){return{value:e.form.fullName,disabled:!0,label:"Nombre completo del profesor",counter:50}},listeners:function(e){return{}},validations:{}}],L=S},559:function(e,t,r){"use strict";t.a={data:function(){return{title:"",type:"",dialogActive:!1,form:{},config:[],waitingAnswer:!1}},methods:{setForm:function(e){var title=e.title,t=e.config,r=void 0===t?[]:t,n=e.type,o=e.form,form=void 0===o?{}:o;this.dialogActive=!0,this.type=n,this.title=title,this.config=r,this.form=form},resetForm:function(){this.dialogActive=!1,this.title="",this.type="",this.config=[],this.form={},this.waitingAnswer=!1},submitForm:function(){this[this.type]()}}}},560:function(e,t,r){"use strict";var n=r(558),o=r(559);t.a={mixins:[o.a],data:function(){return{CONFIG_NAME_CREATE:n.f,CONFIG_NAME_UPDATE:n.i,CONFIG_NAME_DELETE:n.g,CONFIG_NAME_RESTORE:n.h}}}},634:function(e,t,r){"use strict";r.r(t);r(37);var n=r(8),o=(r(32),r(115),r(159)),c=(r(38),r(11)),l=r(21),d=r(13),m=r(557),f={mixins:[r(560).a],layout:"admin",watchQuery:["tab"],head:{title:"Administrar Aulas — ¿Cuándo rindo?"},asyncData:function(){var e=Object(c.a)(regeneratorRuntime.mark(function e(t){var r,n,c,l,d,f,v,h,_,x,y,O;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.query.tab,c=void 0===n?"1":n,l=t.params.id,d=[],f=[],v=null,h=l,_=[],x=[],e.prev=7,e.next=10,Promise.all([r.dispatch("services/universities/getOne",{universityId:h,query:""}),r.dispatch("services/classrooms/getAll",{universityId:h,query:"1"==c?"?is_deleted=0":"?is_deleted=1"})]);case 10:y=e.sent,O=Object(o.a)(y,2),v=O[0],f=O[1],d="1"==c?[{text:"Nombre",align:"left",value:"name"},{text:"Acciones",value:"name",sortable:!1}]:[{text:"Nombre",align:"left",value:"name"},{text:"Eliminado",align:"left",value:"modified"},{text:"Acciones",value:"name",sortable:!1}],e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),r.dispatch("notification/handleError",e.t0);case 20:return e.prev=20,_=Object(m.a)({university:v}),x=Object(m.b)(h,"aulas"),e.abrupt("return",{tab:c,headers:d,classrooms:f,university:v,universityId:h,breadcrumbs:_,breadcrumbsUniversity:x});case 25:case"end":return e.stop()}},e,null,[[7,17,20,25]])}));return function(t){return e.apply(this,arguments)}}(),data:function(){return{search:""}},methods:Object(n.a)({},Object(l.b)(["services/classrooms/createOne","services/classrooms/updateOne","notification/handleError","notification/set"]),{createOneAndClean:function(){var e=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.waitingAnswer){e.next=18;break}return this.waitingAnswer=!0,e.prev=2,t={data:{name:this.form.name},universityId:this.universityId},e.next=6,this["services/classrooms/createOne"](t);case 6:r=e.sent,this.classrooms.push(r),n={color:"success",message:'¡Se agrego el aula "'.concat(r.name,'" correctamente!')},this["notification/set"](n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),this["notification/handleError"](e.t0);case 15:return e.prev=15,this.resetForm(),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[2,12,15,18]])}));return function(){return e.apply(this,arguments)}}(),deleteOneAndClean:function(){var e=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.waitingAnswer){e.next=18;break}return this.waitingAnswer=!0,e.prev=2,t={universityId:this.universityId,classroomId:this.form.id,data:{name:this.form.name,is_deleted:!0}},e.next=6,this["services/classrooms/updateOne"](t);case 6:r=e.sent,this.classrooms=Object(d.g)(this.classrooms,["id",r.id]),n={color:"success",message:'¡Se elimino el aula "'.concat(r.name,'" correctamente!')},this["notification/set"](n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),this["notification/handleError"](e.t0);case 15:return e.prev=15,this.resetForm(),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[2,12,15,18]])}));return function(){return e.apply(this,arguments)}}(),restoreOneAndClean:function(){var e=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.waitingAnswer){e.next=18;break}return this.waitingAnswer=!0,e.prev=2,t={universityId:this.universityId,classroomId:this.form.id,data:{name:this.form.name,is_deleted:!1}},e.next=6,this["services/classrooms/updateOne"](t);case 6:r=e.sent,this.classrooms=Object(d.g)(this.classrooms,["id",r.id]),n={color:"success",message:'¡Se restauro el aula "'.concat(r.name,'" correctamente!')},this["notification/set"](n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),this["notification/handleError"](e.t0);case 15:return e.prev=15,this.resetForm(),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[2,12,15,18]])}));return function(){return e.apply(this,arguments)}}(),updateOneAndClean:function(){var e=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.waitingAnswer){e.next=18;break}return this.waitingAnswer=!0,e.prev=2,t={universityId:this.universityId,classroomId:this.form.id,data:{name:this.form.name,is_deleted:!1}},e.next=6,this["services/classrooms/updateOne"](t);case 6:r=e.sent,this.classrooms=Object(d.h)(this.classrooms,["id",r.id],r),n={color:"success",message:'¡Se actualizaron los datos del aula "'.concat(r.name,'" correctamente!')},this["notification/set"](n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),this["notification/handleError"](e.t0);case 15:return e.prev=15,this.resetForm(),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[2,12,15,18]])}));return function(){return e.apply(this,arguments)}}()})},v=r(10),component=Object(v.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:"","align-content-start":""}},[r("v-flex",{attrs:{xs12:""}},[r("base-breadcrumbs",{attrs:{items:e.breadcrumbs,divider:">"}}),e._v(" "),r("base-breadcrumbs",{staticClass:"pt-0",attrs:{items:e.breadcrumbsUniversity,divider:"|"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-tabs-items",{attrs:{touchless:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",{attrs:{value:"1"}},[r("div",{staticClass:"layout align-center mx-3"},[r("v-text-field",{attrs:{"append-icon":"search",label:"Filtrar por nombre del aula",color:"white"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"mb-2",attrs:{color:"secondary",small:"",depressed:""},on:{click:function(t){return e.setForm({title:"Agregar aula",type:"createOneAndClean",form:{name:""},config:e.CONFIG_NAME_CREATE})}}},[r("v-icon",[e._v("add")]),e._v("\n                Aula\n              ")],1)],1),e._v(" "),r("v-data-table",{staticClass:"elevation-0",attrs:{"rows-per-page-text":"Columnas por pagina","no-data-text":"Aun no se cargaron aulas","no-results-text":"No hay resultados para el filtro que aplico",headers:e.headers,items:e.classrooms,search:e.search,"rows-per-page-items":[10,25,50,100],"item-key":"id"},scopedSlots:e._u([{key:"items",fn:function(t){return r("tr",{staticStyle:{"user-select":"none"}},[r("td",{staticClass:"text-truncate"},[e._v(e._s(t.item.name))]),e._v(" "),r("td",{staticClass:"text-truncate"},[r("v-tooltip",{attrs:{bottom:""}},[r("v-icon",{staticClass:"mr-2",attrs:{slot:"activator"},on:{click:function(r){return e.setForm({title:"Editar aula",type:"updateOneAndClean",form:{name:t.item.name,id:t.item.id},config:e.CONFIG_NAME_UPDATE})}},slot:"activator"},[e._v("\n                      edit\n                    ")]),e._v(" "),r("span",[e._v("Editar datos del aula")])],1),e._v(" "),r("v-tooltip",{attrs:{bottom:""}},[r("v-icon",{staticClass:"mr-2",attrs:{slot:"activator"},on:{click:function(r){return e.setForm({title:"Eliminar aula",type:"deleteOneAndClean",form:{name:t.item.name,id:t.item.id},config:e.CONFIG_NAME_DELETE})}},slot:"activator"},[e._v("delete\n                    ")]),e._v(" "),r("span",[e._v("Eliminar a aula de la universidad")])],1)],1)])}}])})],1),e._v(" "),r("v-tab-item",{attrs:{value:"2"}},[r("div",{staticClass:"layout align-center mx-3"},[r("v-text-field",{attrs:{"append-icon":"search",label:"Filtrar nombre del aula",color:"white"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-data-table",{staticClass:"elevation-0",attrs:{"rows-per-page-text":"Columnas por pagina","no-data-text":"Aun no se cargaron aulas","no-results-text":"No hay resultados para el filtro que aplico",headers:e.headers,items:e.classrooms,search:e.search,"rows-per-page-items":[10,25,50,100],"item-key":"id"},scopedSlots:e._u([{key:"items",fn:function(t){return r("tr",{staticStyle:{"user-select":"none"}},[r("td",{staticClass:"text-truncate"},[e._v(e._s(t.item.name))]),e._v(" "),r("td",{staticClass:"text-truncate"},[e._v("\n                  "+e._s(e._f("formatTimeAgo")(new Date(t.item.modified)))+"\n                ")]),e._v(" "),r("td",{staticClass:"text-truncate"},[r("v-tooltip",{attrs:{bottom:""}},[r("v-icon",{staticClass:"mr-2",attrs:{slot:"activator"},on:{click:function(r){return e.setForm({title:"Restaurar aula",type:"restoreOneAndClean",form:{name:t.item.name,id:t.item.id},config:e.CONFIG_NAME_RESTORE})}},slot:"activator"},[e._v("\n                      restore_from_trash\n                    ")]),e._v(" "),r("span",[e._v("Restaurar aulas")])],1)],1)])}}])})],1)],1)],1)],1)],1),e._v(" "),r("custom-form",{attrs:{title:e.title,active:e.dialogActive,config:e.config,form:e.form,waitingAnswer:e.waitingAnswer},on:{"submit-form":e.submitForm,"cancel-form":e.resetForm}})],1)},[],!1,null,null,null);t.default=component.exports}}]);