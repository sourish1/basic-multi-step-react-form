(this["webpackJsonpmulti-step-form"]=this["webpackJsonpmulti-step-form"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(11),a(12),a(4)),i=a(1),m=a(5),u=function(e){var t=e.label,a=Object(m.a)(e,["label"]);return l.a.createElement("div",null,l.a.createElement("label",null,t),l.a.createElement("input",Object.assign({type:"text"},a)))},s=function(e){var t=e.setForm,a=e.formData,n=e.navigation,r=a.firstName,c=a.lastName,o=n.next;return l.a.createElement("div",{className:"form"},l.a.createElement("h2",null,"Name"),l.a.createElement(u,{label:"First Name",name:"firstName",value:r,onChange:t}),l.a.createElement(u,{label:"Last Name",name:"lastName",value:c,onChange:t}),l.a.createElement("div",null,l.a.createElement("button",{onClick:o},"Next")))},d=function(e){var t=e.setForm,a=e.formData,n=e.navigation,r=a.address,c=a.city,o=a.state,i=a.pincode,m=n.previous,s=n.next;return l.a.createElement("div",{className:"form"},l.a.createElement("h2",null,"Address"),l.a.createElement(u,{label:"Address",name:"address",value:r,onChange:t}),l.a.createElement(u,{label:"City",name:"city",value:c,onChange:t}),l.a.createElement(u,{label:"State",name:"state",value:o,onChange:t}),l.a.createElement(u,{label:"Pincode",name:"pincode",value:i,onChange:t}),l.a.createElement("div",null,l.a.createElement("button",{onClick:m},"Previous"),l.a.createElement("button",{onClick:s},"Next")))},E=function(e){var t=e.setForm,a=e.formData,n=e.navigation,r=a.phone,c=a.email,o=n.previous,i=n.next;return l.a.createElement("div",{className:"form"},l.a.createElement("h2",null,"Contact Information"),l.a.createElement(u,{label:"Phone",name:"phone",value:r,onChange:t}),l.a.createElement(u,{label:"E-mail",name:"email",value:c,onChange:t}),l.a.createElement("div",null,l.a.createElement("button",{onClick:o},"Previous"),l.a.createElement("button",{onClick:i},"Next")))},v=function(e){e.setForm;var t=e.formData,a=e.navigation,n=t.firstName,r=t.lastName,c=t.address,o=t.city,i=t.state,m=t.pincode,u=t.phone,s=t.email,d=a.go;return l.a.createElement("div",null,l.a.createElement("h2",null,"Review your data"),l.a.createElement("h4",null,"Name",l.a.createElement("button",{onClick:function(){return d("name")}},"Edit")),l.a.createElement("div",null," ","First name: ","".concat(n),",",l.a.createElement("br",null),"Last Name: ","".concat(r)),l.a.createElement("h4",null,"Address",l.a.createElement("button",{onClick:function(){return d("address")}},"Edit")),l.a.createElement("div",null,"Address: ","".concat(c),",",l.a.createElement("br",null),"City: ","".concat(o),",",l.a.createElement("br",null),"State: ","".concat(i),",",l.a.createElement("br",null),"Pincode: ","".concat(m)),l.a.createElement("h4",null,"Contact",l.a.createElement("button",{onClick:function(){return d("contact")}},"Edit")),l.a.createElement("div",null,"Phone: ","".concat(u),",",l.a.createElement("br",null),"E-mail: ","".concat(s)),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return d("submit")}},"Submit")))},b=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Thank you for submitting. We will be in touch"))},f=(a(13),[{id:"name"},{id:"address"},{id:"contact"},{id:"review"},{id:"submit"}]),h={firstName:"",lastName:"",address:"",city:"",state:"",pincode:"",email:"",phone:""},p=function(){var e=Object(i.a)(h),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(i.b)({initialStep:0,steps:f}),c=r.step,m={formData:a,setForm:n,navigation:r.navigation};switch(c.id){case"name":return l.a.createElement(s,m);case"address":return l.a.createElement(d,m);case"contact":return l.a.createElement(E,m);case"review":return l.a.createElement(v,m);case"submit":return l.a.createElement(b,m);default:return null}};var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.eefaef86.chunk.js.map