(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={logo:"Header_logo__LpnoK",appear:"Header_appear__2c_1D",appearActive:"Header_appearActive__1-hR4"}},19:function(t,e,n){t.exports={heading:"App_heading__3p1Cw",enter:"App_enter__1eUjB",enterActive:"App_enterActive__OFUb3",exit:"App_exit__2FitM",exitActive:"App_exitActive__2rJAY"}},2:function(t,e,n){t.exports={form:"ContactForm_form__HSrwh",input:"ContactForm_input__3DJiO",button:"ContactForm_button__XGW4T"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n(5),r=n.n(i),s=n(21),o=n(10),l=n(11),u=n(15),_=n(14),m=n(33),h=n(34),b=n(18),j=n.n(b);var p=function(){return Object(a.jsx)(m.a,{in:!0,appear:!0,timeout:500,classNames:j.a,unmountOnExit:!0,children:Object(a.jsx)("header",{children:Object(a.jsx)("h2",{className:j.a.logo,children:"Phonebook"})})})},d=n(35),x=n(9),v=n.n(x),f=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(a.jsx)(d.a,{component:"ul",className:v.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,i=t.number;return Object(a.jsx)(m.a,{timeout:250,classNames:v.a,children:Object(a.jsxs)("li",{className:v.a.contactListItem,children:[Object(a.jsx)("p",{children:c}),Object(a.jsx)("p",{children:i}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:v.a.button})]})},e)}))})},O=n(2),C=n.n(O),A=function(t){Object(u.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){t.setState({name:e.target.value})},t.handleNumberChange=function(e){t.setState({number:e.target.value})},t.handleAddContact=function(){""!==(t.state.name,t.state.number)&&(t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:C.a.form,children:[Object(a.jsxs)("label",{className:C.a.label,children:[" ","Name",Object(a.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleInputChange,className:C.a.input,required:!0})]}),Object(a.jsxs)("label",{className:C.a.label,children:["Number",Object(a.jsx)("input",{type:"text",value:this.state.number,onChange:this.handleNumberChange,className:C.a.input,required:!0})]}),Object(a.jsx)("button",{type:"submit",onClick:this.handleAddContact,className:C.a.button,children:"Add contact"})]})}}]),n}(c.Component),g=n(7),N=n.n(g);var y=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("div",{className:N.a.filter,children:Object(a.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)},className:N.a.input})]})})},L=n(8),F=n.n(L);var S=function(){return Object(a.jsx)("div",{className:F.a.alert,children:Object(a.jsx)("p",{className:F.a.alertText,children:"Contact already exists!"})})},k=n(19),w=n.n(k),I=function(t){Object(u.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",alert:!1},t.addContact=function(e,n){var a={id:Object(h.a)(),name:e,number:n};t.setState((function(t){return t.contacts.map((function(t){return t.name})).includes(e)?{alert:!0}:{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this;e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),!0===this.state.alert&&setTimeout((function(){n.setState({alert:!1})}),5e3)}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=t.alert,i=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{}),Object(a.jsx)(m.a,{in:!0===c,timeout:250,classNames:F.a,unmountOnExit:!0,children:Object(a.jsx)(S,{})}),Object(a.jsx)(A,{onAddContact:this.addContact}),Object(a.jsx)("h3",{className:w.a.heading,children:"Contacts"}),Object(a.jsx)(m.a,{in:e.length>=2,timeout:250,classNames:N.a,unmountOnExit:!0,children:Object(a.jsx)(y,{value:n,onChange:this.changeFilter})}),Object(a.jsx)(m.a,{in:i.length>0,timeout:250,classNames:w.a,unmountOnExit:!0,children:Object(a.jsx)(f,{contacts:i,onRemoveContact:this.removeContact})})]})}}]),n}(c.Component);n(30);r.a.render(Object(a.jsx)(I,{}),document.getElementById("root"))},7:function(t,e,n){t.exports={filter:"Filter_filter__2OKDd",input:"Filter_input__3oE_5",enter:"Filter_enter__15Vm5",enterActive:"Filter_enterActive__34Rp_",exit:"Filter_exit__2U0H8",exitActive:"Filter_exitActive__19tjg"}},8:function(t,e,n){t.exports={alert:"Alert_alert__2sbgr",alertText:"Alert_alertText__1803e",enter:"Alert_enter__1Ko8h",enterActive:"Alert_enterActive__2Niq7",exit:"Alert_exit__3Newh",exitActive:"Alert_exitActive__1s5fO"}},9:function(t,e,n){t.exports={contactList:"ContactsList_contactList__1YCFx",contactListItem:"ContactsList_contactListItem__1PGqy",button:"ContactsList_button__N3hjU",enter:"ContactsList_enter__l5JO3",enterActive:"ContactsList_enterActive__cvxay",exit:"ContactsList_exit__2y_78",exitActive:"ContactsList_exitActive__2BEme"}}},[[31,1,2]]]);
//# sourceMappingURL=main.5dffed01.chunk.js.map