(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"182e":function(e,t,n){"use strict";n("e99c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Buzz")]),e._v(" | "),n("router-link",{attrs:{to:"/edit"}},[e._v("New Sneakers")]),e._v(" | "),n("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),n("router-view")],1)},s=[],i=n("5530"),o=n("2f62"),l={name:"App",methods:Object(i["a"])({},Object(o["b"])(["load_sneakers"])),mounted:function(){this.load_sneakers()}},c=l,u=(n("034f"),n("2877")),d=Object(u["a"])(c,r,s,!1,null,null,null),m=d.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("SneakersList")],1)],1)],1)],1)},h=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-jumbotron",{attrs:{"bg-variant":"info","text-variant":"white","border-variant":"dark"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Buzz sneakers")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" Find your perfect shoes and clothing at BUZZ! ✓ Newest trends ✓ Lots of brands ")]},proxy:!0}])},[a("div",{attrs:{id:"app"}},[a("img",{attrs:{src:n("71be")}})])])],1)},v=[],k={name:"Header",computed:Object(i["a"])({},Object(o["c"])(["sneakers"]))},w=k,_=Object(u["a"])(w,b,v,!1,null,"43ca6abe",null),g=_.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.sneakers.length?n("b-table",{attrs:{hover:"","sticky-header":"800px",items:e.sneakers,fields:e.fields,"head-variant":"light"},on:{"row-clicked":e.EditSneakers}}):n("h1",[e._v("No Sneakers")])],1)},j=[],y={name:"SneakersList",computed:Object(i["a"])({},Object(o["c"])(["sneakers"])),data:function(){return{fields:[{key:"naziv"},{key:"model"},{key:"opis"},{key:"velicina"},{key:"cena"}]}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["delete_sneakers"])),{},{EditSneakers:function(e,t,n){Ce.push({path:"/edit/".concat(e.id)})}})},O=y,x=(n("182e"),Object(u["a"])(O,S,j,!1,null,null,null)),C=x.exports,z={name:"home",components:{Header:g,SneakersList:C}},U=z,N=Object(u["a"])(U,f,h,!1,null,null,null),M=N.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[e.edit?n("div",[n("EditSneakers",{attrs:{naziv:e.sneakers.naziv,cena:e.sneakers.cena}})],1):n("div",[e.sneakers.length?n("ShowSneakers",{attrs:{sneakers:e.sneakers}}):e._e()],1)])],1),n("b-row",[n("b-col",{staticStyle:{"margin-top":"10px"},attrs:{cm:"2"}},[n("b-button",{attrs:{variant:"primary",size:"lg"},domProps:{innerHTML:e._s(e.edit?"Cancel":"Edit")},on:{click:e.toggleEdit}})],1)],1)],1)],1)},$=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-form",[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Naziv"},model:{value:e.newNaziv,callback:function(t){e.newNaziv=t},expression:"newNaziv"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Model"},model:{value:e.newModel,callback:function(t){e.newModel=t},expression:"newModel"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Opis"},model:{value:e.newOpis,callback:function(t){e.newOpis=t},expression:"newOpis"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Velicina"},model:{value:e.newVelicina,callback:function(t){e.newVelicina=t},expression:"newVelicina"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{attrs:{placeholder:"Cena"},model:{value:e.newCena,callback:function(t){e.newCena=t},expression:"newCena"}})],1),n("b-col",{attrs:{sm:"1"}},[n("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:e.addNew}},[e._v("Save")])],1),this.$route.params.id?n("b-col",{attrs:{sm:"1"}},[n("b-button",{attrs:{variant:"danger",size:"lg"},on:{click:e.izbrisi}},[e._v("Delete")])],1):e._e(),e.errNaz?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji naziv! ")]):e._e(),e.errMod?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji model! ")]):e._e(),e.errOpis?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji opis! ")]):e._e(),e.errVel?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji velicina! ")]):e._e(),e.errCena?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji cena! ")]):e._e()],1)],1)],1)},H=[],V=(n("a9e3"),{name:"EditSneakers",props:{naziv:{type:String,default:""},model:{type:String,default:""},opis:{type:String,default:""},velicina:{type:Number,default:0},cena:{type:Number,default:0}},data:function(){return{newNaziv:"",newModel:"",newOpis:"",newVelicina:0,newCena:0,errNaz:!1,errMod:!1,errOpis:!1,errVel:!1,errCena:!1}},mounted:function(){this.newNaziv=this.naziv,this.newModel=this.model,this.newOpis=this.opis,this.newVelicina=this.velicina,this.newCena=this.cena},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["new_sneakers","change_sneakers","delete_sneakers"])),{},{addNew:function(){this.newNaziv||(this.errNaz=!0),this.newModel||(this.errMod=!0),this.newOpis||(this.errOpis=!0),this.newVelicina||(this.errVel=!0),this.newCena||(this.errCena=!0);var e=JSON.stringify({naziv:this.newNaziv,model:this.newModel,opis:this.newOpis,velicina:this.newVelicina,cena:this.newCena});this.$route.params.id?this.change_sneakers({id:this.$route.params.id,pat:e}):this.new_sneakers(e),this.newNaziv="",this.newModel="",this.newOpis="",this.newVelicina=0,this.newCena=0,this.$route.push("/home")},izbrisi:function(){this.delete_sneakers(this.$route.params.id)}})}),L=V,P=Object(u["a"])(L,I,H,!1,null,"295bfade",null),R=P.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"2"}},[n("label",{attrs:{for:"naziv"}},[e._v("Naziv:")])]),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"naziv"}},[e._v(e._s(e.sneakers.naziv))])])],1),n("b-row",[n("b-col",{attrs:{sm:"2"}},[n("label",{attrs:{for:"model"}},[e._v("Model:")])]),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"model"}},[e._v(e._s(e.sneakers.model))])])],1),n("b-row",[n("b-col",{attrs:{sm:"2"}},[n("label",{attrs:{for:"opis"}},[e._v("Opis:")])]),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"opis"}},[e._v(e._s(e.sneakers.opis))])])],1),n("b-row",[n("b-col",{attrs:{sm:"2"}},[n("label",{attrs:{for:"velicina"}},[e._v("Velicina:")])]),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"velicina"}},[e._v(e._s(e.sneakers.velicina))])])],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2"}},[n("label",{attrs:{for:"pat"}},[e._v("Cena:")])]),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"pat"}},[e._v(e._s(e.sneakers.cena))])])],1)],1)},A=[],J={name:"ShowSneakers",props:{sneakers:Object}},B=J,Z=Object(u["a"])(B,T,A,!1,null,null,null),D=Z.exports,F={name:"Sneakers",components:{Header:g,EditSneakers:R,ShowSneakers:D},data:function(){return{edit:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["sneakers"])),{},{message:function(){for(var e=0;e<this.sneakers.length;e++)if(this.sneakers[e].id===parseInt(this.$route.params.id))return this.sneakers[e]}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["load_sneakers"])),{},{toggleEdit:function(){this.edit=!this.edit}})},q=F,G=Object(u["a"])(q,E,$,!1,null,"457409da",null),K=G.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("EditSneakers")],1)],1)],1)],1)},W=[],X={name:"NewSneakers",components:{Header:g,EditSneakers:R}},Y=X,ee=Object(u["a"])(Y,Q,W,!1,null,"62f7bde0",null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("Register")],1)],1)],1)],1)},ae=[],re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-form",[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Ime"},model:{value:e.newIme,callback:function(t){e.newIme=t},expression:"newIme"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Username"},model:{value:e.newUsername,callback:function(t){e.newUsername=t},expression:"newUsername"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{type:"password",placeholder:"Sifra"},model:{value:e.newSifra,callback:function(t){e.newSifra=t},expression:"newSifra"}})],1),n("b-col",{attrs:{sm:"1"}},[n("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:e.addNew}},[e._v("Registruj")])],1),e.errIme?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji Ime! ")]):e._e(),e.errUsername?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji Username! ")]):e._e(),e.errSifra?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji Sifra! ")]):e._e()],1)],1)],1)},se=[],ie={name:"Register",props:{Ime:{type:String,default:""},Username:{type:String,default:""},Sifra:{type:String,default:""}},data:function(){return{newIme:"",newUsername:"",newSifra:"",errIme:!1,errUsername:!1,errSifra:!1}},mounted:function(){this.newIme=this.Ime,this.newUsername=this.Username,this.newSifra=this.Sifra},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["new_korisnik"])),{},{addNew:function(){alert("PROBAAAAA"),this.newIme||(this.errIme=!0),this.newUsername||(this.errUsername=!0),this.newSifra||(this.errSifra=!0);var e=JSON.stringify({Ime:this.newIme,Username:this.newUsername,Sifra:this.newSifra});this.new_korisnik(e),this.newIme="",this.newUsername="",this.newSifra="",this.$route.push("/home")}})},oe=ie,le=Object(u["a"])(oe,re,se,!1,null,"94792e58",null),ce=le.exports,ue={name:"NewRegister",components:{Header:g,Register:ce}},de=ue,me=Object(u["a"])(de,ne,ae,!1,null,"3cf0c6e0",null),pe=me.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Header"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("Register")],1)],1)],1)],1)},he=[],be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-form",[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Username"},model:{value:e.newUsername,callback:function(t){e.newUsername=t},expression:"newUsername"}})],1),n("b-col",{attrs:{sm:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{type:"password",placeholder:"Sifra"},model:{value:e.newSifra,callback:function(t){e.newSifra=t},expression:"newSifra"}})],1),n("b-col",{attrs:{sm:"1"}},[n("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:e.addNew}},[e._v("Uloguj se")])],1),e.errUsername?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji Username! ")]):e._e(),e.errSifra?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" Mora da postoji Sifra! ")]):e._e()],1)],1)],1)},ve=[],ke={name:"Login",props:{Username:{type:String,default:""},Sifra:{type:String,default:""}},data:function(){return{newUsername:"",newSifra:"",errUsername:!1,errSifra:!1}},mounted:function(){this.newUsername=this.Username,this.newSifra=this.Sifra},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["login"])),{},{addNew:function(){this.newUsername||(this.errUsername=!0),this.newSifra||(this.errSifra=!0);var e=JSON.stringify({Username:this.newUsername,Sifra:this.newSifra});this.login(e),this.newUsername="",this.newSifra="",this.$route.push("/home")}})},we=ke,_e=Object(u["a"])(we,be,ve,!1,null,"2fe96d64",null),ge=(_e.exports,{name:"NewLogin",components:{Header:g,Login:Login}}),Se=ge,je=Object(u["a"])(Se,fe,he,!1,null,"a9d806d4",null),ye=je.exports;a["default"].use(p["a"]);var Oe=[{path:"/",name:"Home",component:M},{path:"/edit",name:"newSneakers",component:te},{path:"/register",name:"Register",component:pe},{path:"/login",name:"Login",component:ye},{path:"/edit/:id",name:"newSneakers",component:te},{path:"/sneakers/:id",name:"sneakers",component:K}],xe=new p["a"]({mode:"history",base:"/",routes:Oe}),Ce=xe;n("a434"),n("d3b7");a["default"].use(o["a"]);var ze=new o["a"].Store({state:{sneakers:[],korisnik:[],token:[]},mutations:{set_token:function(e,t){e.token=t},set_sneakers:function(e,t){e.sneakers=t},add_sneakers:function(e,t){e.sneakers.push(t)},set_korisnik:function(e,t){e.korisnik=t},add_korisnik:function(e,t){e.korisnik.push(t)},remove_sneakers:function(e,t){for(var n=0;n<e.sneakers.length;n++)if(e.sneakers[n].id===t){e.sneakers.splice(n,1);break}},update_sneakers:function(e,t){for(var n=0;n<e.sneakers.length;n++)if(e.sneakers[n].id===parseInt(t.id)){e.sneakers[n].naziv=t.pat.naziv,e.sneakers[n].model=t.pat.model,e.sneakers[n].opis=t.pat.opis,e.sneakers[n].velicina=t.pat.velicina,e.sneakers[n].cena=t.pat.cena;break}}},actions:{load_sneakers:function(e){var t=e.commit;fetch("http://localhost/api/patike",{method:"get"}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){t("set_sneakers",e)})).catch((function(e){"function"===typeof e.text?e.text().then((function(e){alert(e)})):alert(e)}))},delete_sneakers:function(e,t){var n=e.commit;fetch("http://localhost/api/patike/".concat(t),{method:"delete"}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){n("remove_sneakers",e.id)})).catch((function(e){"function"===typeof e.text?e.text().then((function(e){alert(e)})):alert(e)}))},new_sneakers:function(e,t){var n=e.commit;fetch("http://localhost/api/patike",{method:"post",headers:{"Content-Type":"application/json"},body:t}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){n("add_sneakers",e)})).catch((function(e){"function"===typeof e.text?e.text().then((function(e){alert(e)})):alert(e)}))},new_korisnik:function(e,t){var n=e.commit;fetch("http://localhost/api/register",{method:"post",headers:{"Content-Type":"application/json"},body:t}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){n("add_korisnik",e)})).catch((function(e){"function"===typeof e.text?e.text().then((function(e){alert(e)})):alert(e)}))},login:function(e,t){var n=e.commit;fetch("http://localhost/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:t}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){localStorage.setItem("token",e["token"]),n("set_token",e["token"])})).catch((function(e){"function"===typeof e.text?e.text().then((function(e){alert(e)})):alert(e)}))},change_sneakers:function(e,t){var n=e.commit;fetch("http://localhost/api/patike/".concat(t.id),{method:"put",headers:{"Content-Type":"application/json"},body:t.pat}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){n("update_sneakers",{id:t.id,pat:e})})).catch((function(e){"function"===typeof e.text?e.text().then((function(e){alert(e)})):alert(e)}))}}}),Ue=n("5f5b");n("f9e3"),n("2dd8");a["default"].use(Ue["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Ce,store:ze,render:function(e){return e(m)}}).$mount("#app")},"71be":function(e,t,n){e.exports=n.p+"img/buzz.477f695b.png"},"85ec":function(e,t,n){},e99c:function(e,t,n){}});
//# sourceMappingURL=app.4a36750b.js.map