(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["employees"],{8785:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("fb6a"),n("dca8");function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},b0c0:function(e,t,n){var a=n("83ab"),r=n("5e77").EXISTS,i=n("9bf2").f,o=Function.prototype,l=o.toString,c=/^\s*function ([^ (]*)/,m="name";a&&!r&&i(o,m,{configurable:!0,get:function(){try{return l.call(this).match(c)[1]}catch(e){return""}}})},bb2f:function(e,t,n){var a=n("d039");e.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cb29:function(e,t,n){"use strict";n.r(t);var a,r,i,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Employees")]),n("button",{on:{click:function(t){e.isAdd=!e.isAdd}}},[e._v("Add New Employee")]),e.isAdd?n("AddEmployee",{staticStyle:{"margin-top":"16px"},on:{saveEmployee:e.afterSaveEmployee}}):e._e(),e._l(e.employee,(function(t,a){return n("div",{key:a},[n("ul",[n("li",[e._v("Name: "+e._s(t.name))]),n("li",[e._v("Email: "+e._s(t.email))])])])}))],2)},l=[],c=n("8785"),m=(n("b0c0"),n("5184")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"AddEmployee"},[n("form",{staticClass:"form-inline"},[n("label",{attrs:{for:"name"}},[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.name,expression:"emp.name"}],attrs:{placeholder:"Enter name"},domProps:{value:e.emp.name},on:{input:function(t){t.target.composing||e.$set(e.emp,"name",t.target.value)}}}),n("label",{attrs:{for:"email"}},[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.emp.email,expression:"emp.email"}],attrs:{placeholder:"Enter email"},domProps:{value:e.emp.email},on:{input:function(t){t.target.composing||e.$set(e.emp,"email",t.target.value)}}}),n("button",{on:{click:e.saveEmployee}},[e._v("Save")])])])},s=[],f={name:"AddEmployee",data:function(){return{emp:{name:"",email:""}}},methods:{saveEmployee:function(){this.$emit("saveEmployee",this.emp)}}},p=f,d=n("2877"),b=Object(d["a"])(p,u,s,!1,null,null,null),v=b.exports,y={name:"Employees",components:{AddEmployee:v},data:function(){return{isAdd:!1}},methods:{afterSaveEmployee:function(e){this.isAdd=!1,this.$apollo.mutate({mutation:Object(m["a"])(a||(a=Object(c["a"])(["\n            mutation InsertEmp($name: String!, $email: String) {\n              insert_employee(objects: { name: $name, email: $email }) {\n                returning {\n                  id\n                }\n              }\n            }\n          "]))),variables:{name:e.name,email:e.email}}).then((function(){alert("Employee Added")}))}},apollo:{employee:{query:Object(m["a"])(r||(r=Object(c["a"])(["\n        query {\n          employee {\n            id\n            name\n            email\n          }\n        }\n      "]))),subscribeToMore:{document:Object(m["a"])(i||(i=Object(c["a"])(["\n          subscription {\n            employee {\n              id\n              name\n              email\n            }\n          }\n        "]))),updateQuery:function(e,t){var n=t.subscriptionData;this.employee=n.data.employee}}}}},E=y,h=Object(d["a"])(E,o,l,!1,null,null,null);t["default"]=h.exports},dca8:function(e,t,n){var a=n("23e7"),r=n("bb2f"),i=n("d039"),o=n("861d"),l=n("f183").onFreeze,c=Object.freeze,m=i((function(){c(1)}));a({target:"Object",stat:!0,forced:m,sham:!r},{freeze:function(e){return c&&o(e)?c(l(e)):e}})},f183:function(e,t,n){var a=n("23e7"),r=n("d012"),i=n("861d"),o=n("1a2d"),l=n("9bf2").f,c=n("241c"),m=n("057f"),u=n("90e3"),s=n("bb2f"),f=!1,p=u("meta"),d=0,b=Object.isExtensible||function(){return!0},v=function(e){l(e,p,{value:{objectID:"O"+d++,weakData:{}}})},y=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,p)){if(!b(e))return"F";if(!t)return"E";v(e)}return e[p].objectID},E=function(e,t){if(!o(e,p)){if(!b(e))return!0;if(!t)return!1;v(e)}return e[p].weakData},h=function(e){return s&&f&&b(e)&&!o(e,p)&&v(e),e},g=function(){j.enable=function(){},f=!0;var e=c.f,t=[].splice,n={};n[p]=1,e(n).length&&(c.f=function(n){for(var a=e(n),r=0,i=a.length;r<i;r++)if(a[r]===p){t.call(a,r,1);break}return a},a({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:m.f}))},j=e.exports={enable:g,fastKey:y,getWeakData:E,onFreeze:h};r[p]=!0},fb6a:function(e,t,n){"use strict";var a=n("23e7"),r=n("e8b5"),i=n("68ee"),o=n("861d"),l=n("23cb"),c=n("07fa"),m=n("fc6a"),u=n("8418"),s=n("b622"),f=n("1dde"),p=f("slice"),d=s("species"),b=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var n,a,s,f=m(this),p=c(f),y=l(e,p),E=l(void 0===t?p:t,p);if(r(f)&&(n=f.constructor,i(n)&&(n===Array||r(n.prototype))?n=void 0:o(n)&&(n=n[d],null===n&&(n=void 0)),n===Array||void 0===n))return b.call(f,y,E);for(a=new(void 0===n?Array:n)(v(E-y,0)),s=0;y<E;y++,s++)y in f&&u(a,s,f[y]);return a.length=s,a}})}}]);
//# sourceMappingURL=employees.87ea8b56.js.map