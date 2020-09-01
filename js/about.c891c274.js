(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0444":function(t,e,s){"use strict";var a=s("3a47"),o=s.n(a);o.a},"0e6d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"backgroundBookList"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"bookList1 px-5 py-5"},[s("div",{staticClass:"d-flex justify-content-between"},[t._m(0),s("div",[s("router-link",{attrs:{to:"/",tag:"a"}},[t._v("return home page")])],1)]),s("div"),s("div",{staticClass:"d-flex flex-column"},t._l(t.visibleItems,(function(e,a){return s("bookListItem",{key:a,attrs:{bookId:e.bookId,inStore:e.inStore,bookName:e.bookName,author:e.author,imgUrl:e.imgUrl},on:{"delete-book":function(s){return t.deleteBook(e.bookId)}}})})),1),s("pagination",{attrs:{pages:t.pages,currentPage:t.currentPage},on:{"page:update":t.updatePage}})],1)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h4",[s("b",[t._v("Book List")])])])}],r=(s("fb6a"),s("5530")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookItem d-flex justify-content-between border px-3 mb-3"},[s("div",{staticClass:"d-flex justify-content-start pt-3 pb-3"},[t._m(0),s("div",{staticClass:"d-flex flex-column ml-2"},[s("h3",[t._v(t._s(t.bookName))]),s("h6",{staticStyle:{color:"#8c8c8c"}},[t._v(t._s(t.author))])])]),s("div",{staticClass:"d-flex flex-column align-self-center align-items-center mt-3"},[s("button",{staticClass:"rounded-pill py-1 pl-3 pr-3",class:t.inStore,style:t.inStore?t.inStoreStyle:t.atUserStyle},[s("b",[t._v(t._s(t.inStore?"In Store":"At User"))])]),t.inStore?s("a",{staticClass:"mt-2",staticStyle:{color:"red"},on:{click:t.confirmation}},[t._v("Delete")]):t._e()])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("img",{staticClass:"rounded w-100",attrs:{src:"https://via.placeholder.com/150/771796",alt:""}})])}],l=s("2f62"),c={name:"bookListItem",data:function(){return{inStoreStyle:{color:"#264700",background:"#91d18b"},atUserStyle:{color:"#800000",background:"#ca8b8b",border:"3px solid red"}}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])({delete:"deleteBook"})),{},{confirmation:function(){if(!confirm("Are you sure you want to delete the ".concat(this.bookName)))return!1;this.$emit("delete-book"),this.$toast("".concat(this.bookName," deleted."))}}),props:["bookId","inStore","bookName","author","imgUrl"]},u=c,d=(s("0444"),s("2877")),m=Object(d["a"])(u,i,n,!1,null,null,null),v=m.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.pages>0?s("div",{staticClass:"pagination-wrapper"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},[t.showPreviousLink()?s("span",[s("li",{staticClass:"d-inline-block page-item",on:{click:function(e){return t.updatePage(t.currentPage-1)}}},[s("a",{staticClass:"page-link"},[t._v("Previous")])])]):t._e(),t._l(t.pages,(function(e,a){return s("li",{key:a,staticClass:"page-item",on:{click:function(e){return t.updatePage(a)}}},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(a+1))])])})),t.showNextLink()?s("span",[s("li",{staticClass:"page-item",on:{click:function(e){return t.updatePage(t.currentPage+1)}}},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])]):t._e()],2)])]):t._e()},p=[],b={name:"pagination",data:function(){return{booksLength:this.$store.state.books.length}},props:["currentPage","pages"],methods:{updatePage:function(t){this.$emit("page:update",t),console.log(t)},showPreviousLink:function(){return 0!=this.currentPage},showNextLink:function(){return this.currentPage!=this.pages-1}}},h=b,g=Object(d["a"])(h,f,p,!1,null,null,null),k=g.exports,_={name:"BookList",data:function(){return{bookList:this.$store.state.books,pageLimit:3,currentPage:0,visibleItems:[],pages:"",isShow:!1}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])({delete:"deleteBook"})),{},{updatePage:function(t){this.currentPage=t,this.updateVisibleItems()},updateVisibleItems:function(){this.visibleItems=this.bookList.slice(this.currentPage*this.pageLimit,this.currentPage*this.pageLimit+this.pageLimit),0==this.visibleItems.length&&this.currentPage>0&&this.updatePage(this.currentPage-1)},deleteBook:function(t){this.delete(t),this.updateVisibleItems()}}),created:function(){this.pages=Math.ceil(this.bookList.length/3),console.log(this.pages),this.updateVisibleItems()},components:{bookListItem:v,pagination:k}},C=_,x=(s("5bf0"),Object(d["a"])(C,a,o,!1,null,"782e26ca",null));e["default"]=x.exports},"27f8":function(t,e,s){"use strict";var a=s("8e9b"),o=s.n(a);o.a},"3a47":function(t,e,s){},"471a":function(t,e,s){"use strict";var a=s("d4c2"),o=s.n(a);o.a},"4ee2":function(t,e,s){},"576d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("setUserForm",{on:{onSetSubmit:t.setUser}})],1)},o=[],r=(s("99af"),s("b0c0"),s("5530")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"backgroundSettings"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"settingsStyle d-flex flex-column w-50 mt-4 border-white p-5"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h3",[t._v("Set to User")]),s("div",[s("router-link",{attrs:{to:"/",tag:"a"}},[t._v("return home page")])],1)]),s("div",[s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("form",{on:{submit:function(e){return e.preventDefault(),a(t.submitForm)}}},[s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12"},[s("label",[t._v("Select Book")]),s("ValidationProvider",{attrs:{mode:"passive",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedBook,expression:"selectedBook"}],staticClass:"w-100 px-1 py-1 h-75 rounded-pill",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedBook=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",selected:""},domProps:{value:""}},[t._v(" Please Select a book")]),t._l(t.getAvailableBooks,(function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e.bookName))])}))],2),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 mt-3"},[s("label",[t._v("Insert User ID")]),s("ValidationProvider",{attrs:{mode:"passive",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],staticClass:"w-100 h-75 rounded-pill",attrs:{type:"text",placeholder:"  Please insert user identity number"},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 mt-3"},[s("label",[t._v("User Name")]),s("ValidationProvider",{attrs:{mode:"passive",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"w-100 h-75 rounded-pill",attrs:{type:"text",placeholder:"  Please enter user name and surname"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 mt-3"},[s("label",[t._v("User Address")]),s("ValidationProvider",{attrs:{mode:"passive",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"w-100 rounded",attrs:{name:"",rows:"3",placeholder:"  Please enter user address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btnStyle m-3 h-75 rounded-pill mx-auto d-block w-50",attrs:{type:"submit"}},[t._v("Set to User")])])])])]}}])})],1)])])])])},n=[],l=s("7bb1"),c=s("2f62"),u={name:"SetUserForm",data:function(){return{selectedBook:"",userId:"",userName:"",address:"",availableBooks:""}},components:{ValidationProvider:l["b"],ValidationObserver:l["a"]},computed:Object(r["a"])({},Object(c["c"])(["getAvailableBooks"])),methods:{submitForm:function(){var t={selectedBook:this.selectedBook.bookName,id:this.userId,name:this.userName,address:this.address};this.$emit("onSetSubmit",t),this.clearForm()},clearForm:function(){this.selectedBook="",this.userId="",this.userName="",this.address=""}}},d=u,m=(s("6088"),s("27f8"),s("2877")),v=Object(m["a"])(d,i,n,!1,null,"99f93db4",null),f=v.exports,p={name:"setUser",components:{setUserForm:f},methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])({set:"setToUser"})),{},{setUser:function(t){this.set(t),this.$toast("".concat(t.selectedBook," has been set for ").concat(t.name,"."))}})},b=p,h=Object(m["a"])(b,a,o,!1,null,null,null);e["default"]=h.exports},"5bf0":function(t,e,s){"use strict";var a=s("b6ef"),o=s.n(a);o.a},6088:function(t,e,s){"use strict";var a=s("4ee2"),o=s.n(a);o.a},"6b86":function(t,e,s){"use strict";var a=s("a2aa"),o=s.n(a);o.a},"8e9b":function(t,e,s){},"927c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("addBookForm",{on:{onAddSubmit:t.save}})],1)},o=[],r=s("5530"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"backgroundBookList"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"addStyle d-flex flex-column w-50 mt-4 p-5"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h3",[t._v("Add New Book")]),s("div",[s("router-link",{attrs:{to:"/",tag:"a"}},[t._v("return home page")])],1)]),s("div",[s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("form",{on:{submit:function(e){return e.preventDefault(),a(t.submitForm)}}},[s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 mt-3"},[s("label",[t._v("Book Name")]),s("ValidationProvider",{attrs:{mode:"passive",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bookName,expression:"bookName"}],staticClass:"w-100 h-75 rounded-pill",attrs:{type:"text",placeholder:"  Please enter book name"},domProps:{value:t.bookName},on:{input:function(e){e.target.composing||(t.bookName=e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 mt-3"},[s("label",[t._v("Author")]),s("ValidationProvider",{attrs:{mode:"passive",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"w-100  h-75 rounded-pill",attrs:{type:"text",placeholder:"  Please enter author"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 mt-3"},[s("label",[t._v("Image")]),s("ValidationProvider",{attrs:{mode:"passive",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.imageUrl,expression:"imageUrl"}],staticClass:"w-100 h-75 rounded-pill",attrs:{type:"text",placeholder:"  Book Input URL"},domProps:{value:t.imageUrl},on:{input:function(e){e.target.composing||(t.imageUrl=e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btnStyle m-3 mt-4 h-75 rounded-pill mx-auto d-block w-50",attrs:{type:"submit"}},[t._v("Save")])])])])]}}])})],1)])])])])},n=[],l=s("7bb1"),c={name:"formComp",data:function(){return{id:(new Date).getTime(),bookName:"",author:"",imageUrl:"",inStore:!0}},components:{ValidationProvider:l["b"],ValidationObserver:l["a"]},methods:{submitForm:function(){var t={bookId:this.id,bookName:this.bookName,author:this.author,imageUrl:this.imageUrl,inStore:this.inStore};this.$emit("onAddSubmit",t),this.clearForm()},clearForm:function(){this.bookName="",this.author="",this.imageUrl=""}}},u=c,d=(s("6b86"),s("d3cc"),s("2877")),m=Object(d["a"])(u,i,n,!1,null,"240fb77f",null),v=m.exports,f=s("2f62"),p={name:"Add",components:{addBookForm:v},methods:Object(r["a"])(Object(r["a"])({},Object(f["b"])({add:"addBook"})),{},{save:function(t){this.add(t),this.$toast("Book added to the list")}})},b=p,h=Object(d["a"])(b,a,o,!1,null,null,null);e["default"]=h.exports},"92f6":function(t,e,s){"use strict";var a=s("bb3f"),o=s.n(a);o.a},"99af":function(t,e,s){"use strict";var a=s("23e7"),o=s("d039"),r=s("e8b5"),i=s("861d"),n=s("7b0b"),l=s("50c4"),c=s("8418"),u=s("65f0"),d=s("1dde"),m=s("b622"),v=s("2d00"),f=m("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",h=v>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=d("concat"),k=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},_=!h||!g;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,s,a,o,r,i=n(this),d=u(i,0),m=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?i:arguments[e],k(r)){if(o=l(r.length),m+o>p)throw TypeError(b);for(s=0;s<o;s++,m++)s in r&&c(d,m,r[s])}else{if(m>=p)throw TypeError(b);c(d,m++,r)}return d.length=m,d}})},a2aa:function(t,e,s){},b0c0:function(t,e,s){var a=s("83ab"),o=s("9bf2").f,r=Function.prototype,i=r.toString,n=/^\s*function ([^ (]*)/,l="name";a&&!(l in r)&&o(r,l,{configurable:!0,get:function(){try{return i.call(this).match(n)[1]}catch(t){return""}}})},b6ef:function(t,e,s){},bb3f:function(t,e,s){},c6f7:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"backgroundgettingArea"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"gettingAreaStyle d-flex flex-column w-50 mt-4 p-5"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h3",[t._v("Get from User")]),s("div",[s("router-link",{attrs:{to:"/",tag:"a"}},[t._v("return home page")])],1)]),s("div",{staticClass:"d-flex flex-column align-item-center"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.getFromUser(e)}}},[s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12"},[s("label",[t._v("Select Book")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedBook,expression:"selectedBook"}],staticClass:"w-100 px-1 py-1 rounded-pill",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedBook=e.target.multiple?s:s[0]},function(e){return t.onChange(e)}]}},[s("option",{attrs:{disabled:"",selected:""},domProps:{value:""}},[t._v("Please Select a book")]),t._l(t.books,(function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e.bookName))])}))],2),s("div",{staticClass:"resultArea rounded"},[s("p",[t._v(t._s(t.userName))]),s("p",[t._v(t._s(t.userAdress))])])])]),t._m(0)])])])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btnStyle mt-5 h-50 rounded-pill mx-auto d-block w-50",attrs:{type:"submit"}},[t._v("Get from User")])])])}],r=(s("99af"),s("4de4"),s("c740"),s("b0c0"),s("5530")),i=s("2f62"),n={name:"GetBook",data:function(){return{selectedBook:"",books:this.$store.state.books.filter((function(t){return 0==t.inStore})),userName:"",userAdress:"",bookId:""}},computed:Object(r["a"])({},Object(i["c"])(["getUser"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])({getBook:"getBookFromUser"})),{},{onChange:function(){var t=this;console.log(this.selectedBook.bookName);var e=this.getUser.findIndex((function(e){return e.selectedBook===t.selectedBook.bookName}));this.userName=this.$store.state.users[e].name,console.log(this.$store.state.users[e]),this.userAdress=this.$store.state.users[e].address},getFromUser:function(){this.getBook(this.selectedBook.bookName),this.$toast("".concat(this.selectedBook.bookName," gotten from ").concat(this.userName,".")),this.selectedBook="",this.userName="",this.userAdress=""}})},l=n,c=(s("92f6"),s("471a"),s("2877")),u=Object(c["a"])(l,a,o,!1,null,"3e90fc41",null);e["default"]=u.exports},d3cc:function(t,e,s){"use strict";var a=s("f8f8"),o=s.n(a);o.a},d4c2:function(t,e,s){},f8f8:function(t,e,s){},fb6a:function(t,e,s){"use strict";var a=s("23e7"),o=s("861d"),r=s("e8b5"),i=s("23cb"),n=s("50c4"),l=s("fc6a"),c=s("8418"),u=s("b622"),d=s("1dde"),m=s("ae40"),v=d("slice"),f=m("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),b=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!v||!f},{slice:function(t,e){var s,a,u,d=l(this),m=n(d.length),v=i(t,m),f=i(void 0===e?m:e,m);if(r(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?o(s)&&(s=s[p],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return b.call(d,v,f);for(a=new(void 0===s?Array:s)(h(f-v,0)),u=0;v<f;v++,u++)v in d&&c(a,u,d[v]);return a.length=u,a}})}}]);
//# sourceMappingURL=about.c891c274.js.map