webpackJsonp([1],{0:function(t,e){},"0hm1":function(t,e){},"0wtH":function(t,e){},"1/oy":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},GhTP:function(t,e){},IOli:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},JrHP:function(t,e){},LVdU:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing"},[t._m(0),t._v(" "),a("div",{staticClass:"game-selection"},[a("router-link",{attrs:{id:"button",to:"/Destiny2"}},[t._v("Battlefield 1")]),t._v(" "),a("router-link",{attrs:{id:"button",to:"/Destiny2"}},[t._v("TitanFall 2")]),t._v(" "),a("router-link",{attrs:{id:"button",to:"/Destiny2",myPosts:t.posts}},[t._v("Destiny 2")]),t._v(" "),a("router-link",{attrs:{id:"button",to:"/Destiny2"}},[t._v("Overwatch")]),t._v(" "),a("router-link",{attrs:{id:"button",to:"/Destiny2"}},[t._v("Rainbow Six Siege")]),t._v(" "),a("div",{staticClass:"login-user"},[a("router-link",{attrs:{id:"NewUser",to:"/NewUser"}},[t._v("New User?")])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Landing-img"},[e("div",{staticClass:"AppName"},[e("span",{staticClass:"name"},[this._v("Fireteam Finder")])])])}]};var n=a("VU/8")({name:"Landing"},r,!1,function(t){a("wf2y")},"data-v-524d5d73",null).exports,o={name:"App",components:{Landing:n}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(t){a("aYcu")},null,null).exports,m=a("/ocq"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profiles-home"},[a("div",{},[a("b-card",{attrs:{id:"post"}},[a("h3",[t._v("GamerTag: "+t._s(t.user.GamerTag))]),t._v(" "),a("h5",[t._v("Description: "+t._s(t.user.Description))]),t._v(" "),a("b-button",{attrs:{variant:"primary",id:"create-button",to:"/user/"+t.user.id}},[t._v("Details")])],1)],1)])},staticRenderFns:[]};var u=a("VU/8")({name:"Profile",props:["user"]},c,!1,function(t){a("0hm1")},null,null).exports,v=a("mvHQ"),p=a.n(v),d={name:"NewPostForm",data:function(){return{formData:{GamerTag:"",Game:"",Activity:"",Description:"",PlayersNeeded:"",AgeGroup:"",Mic:""}}},methods:{postNewEvent:function(){console.log(this.formData),fetch("https://fireteam-finder.herokuapp.com/posts",{method:"POST",headers:{"Content-type":"application/json"},body:p()(this.formData)}).then(console.log(this.formData,"data"))}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new-form"},[a("div",{staticClass:"form-container"},[a("form",{attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.postNewEvent(e)}}},[a("label",{attrs:{htmlFor:"name"}},[t._v("GamerTag")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.GamerTag,expression:"formData.GamerTag"}],attrs:{type:"text",name:"GamerTag",placeholder:"GamerTag"},domProps:{value:t.formData.GamerTag},on:{input:function(e){e.target.composing||t.$set(t.formData,"GamerTag",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"name"}},[t._v("Game")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Game,expression:"formData.Game"}],attrs:{type:"text",name:"Game",placeholder:"Game"},domProps:{value:t.formData.Game},on:{input:function(e){e.target.composing||t.$set(t.formData,"Game",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"activity"}},[t._v("In Game Activity")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Activity,expression:"formData.Activity"}],attrs:{type:"text",name:"Activity",placeholder:"In Game Activity"},domProps:{value:t.formData.Activity},on:{input:function(e){e.target.composing||t.$set(t.formData,"Activity",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"description"}},[t._v("Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.Description,expression:"formData.Description"}],attrs:{type:"text",name:"description",placeholder:"Description"},domProps:{value:t.formData.Description},on:{input:function(e){e.target.composing||t.$set(t.formData,"Description",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"playersneeded"}},[t._v("Players Needed")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.PlayersNeeded,expression:"formData.PlayersNeeded"}],attrs:{type:"text",name:"PlayersNeeded",placeholder:"Players Needed"},domProps:{value:t.formData.PlayersNeeded},on:{input:function(e){e.target.composing||t.$set(t.formData,"PlayersNeeded",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"agegroup"}},[t._v("Age Group")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.AgeGroup,expression:"formData.AgeGroup"}],attrs:{type:"text",name:"AgeGroup",placeholder:"Below 18, 18-25, 25+"},domProps:{value:t.formData.AgeGroup},on:{input:function(e){e.target.composing||t.$set(t.formData,"AgeGroup",e.target.value)}}}),t._v(" "),a("label",{staticClass:"Mic",attrs:{htmlFor:"mic-needed"}},[t._v("Mic?")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Mic,expression:"formData.Mic"}],attrs:{type:"text",name:"Mic",placeholder:"Yes, No, Don't Care!"},domProps:{value:t.formData.Mic},on:{input:function(e){e.target.composing||t.$set(t.formData,"Mic",e.target.value)}}}),t._v(" "),a("input",{attrs:{id:"submit-button",type:"submit",name:"submit",value:"Submit"}})])])])},staticRenderFns:[]};var _=a("VU/8")(d,f,!1,function(t){a("LVdU")},null,null).exports,g=(a("DmT9"),{name:"SinglePost",props:["post"],methods:{deleteEvent:function(t){console.log("delete was clicked"),console.log("target",t.target.id);t.target.id;fetch("https://fireteam-finder.herokuapp.com/posts/"+this.post.id,{method:"DELETE"})}}}),h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("b-card",{attrs:{id:"post"}},[a("h3",[t._v("GamerTag: "+t._s(t.post.GamerTag))]),t._v(" "),a("h4",[t._v("Game: "+t._s(t.post.Game))]),t._v(" "),a("h4",[t._v("Activity: "+t._s(t.post.Activity))]),t._v(" "),a("h5",[t._v("Players Needed: "+t._s(t.post.PlayersNeeded))]),t._v(" "),a("h5",[t._v("Age Group: "+t._s(t.post.AgeGroup))]),t._v(" "),a("h5",[t._v("Mic: "+t._s(t.post.Mic))]),t._v(" "),a("p",[t._v("Description: "+t._s(t.post.Description))]),t._v(" "),a("button",{attrs:{id:"delete",type:"button",name:"button"},on:{click:this.deleteEvent}},[t._v("Delete")])])],1)},staticRenderFns:[]};var y={name:"PostsList",props:["myPosts"],components:{SinglePost:a("VU/8")(g,h,!1,function(t){a("nDIw")},null,null).exports}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},this._l(this.myPosts,function(t){return e("SinglePost",{key:t.id,attrs:{post:t}})}))},staticRenderFns:[]};var P={name:"HomePagePosts",components:{PostsList:a("VU/8")(y,D,!1,function(t){a("JrHP")},null,null).exports},data:function(){return{posts:[]}},methods:{getData:function(){var t=this;fetch("https://fireteam-finder.herokuapp.com/posts").then(function(t){return t.json()}).then(function(e){t.posts=e.post,console.log("yo",e)})}},mounted:function(){this.getData()}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"posts-page"},[t._m(0),t._v(" "),a("div",{staticClass:"posts"},[a("PostsList",{attrs:{myPosts:t.posts}})],1),t._v(" "),a("div",{staticClass:"profile-messaging"},[a("div",{staticClass:"Profile-section"},[a("b-card",{attrs:{title:"","sub-title":""}},[a("router-link",{attrs:{id:"Profiles",to:"/Profiles"}},[t._v("View Profiles")])],1)],1),t._v(" "),a("div",{staticClass:"Profile-section"},[a("b-card",{attrs:{title:"","sub-title":""}},[a("router-link",{attrs:{id:"Create",to:"/CreatePost"}},[t._v("Create Post")])],1)],1),t._v(" "),a("div",{staticClass:"messaging"},[a("b-card",{attrs:{title:"Chat"}},[a("div",{staticClass:"chat-body",attrs:{id:"chatbox"}},t._l(t.messages,function(e,s){return a("div",{key:s,staticClass:"messages"},[a("p",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.user)+": ")]),t._v(t._s(e.message))])])})),t._v(" "),a("div",{staticClass:"card-footer"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("div",{staticClass:"gorm-group"},[a("label",{attrs:{for:"user"}},[t._v("User:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"gorm-group pb-3"},[a("label",{attrs:{for:"message"}},[t._v("Message:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{id:"Sub-butt",type:"submit"}},[t._v("Send")])])])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Destiny 2")]),this._v(" "),e("img",{attrs:{src:a("PYlE"),alt:""}})])}]};var G=a("VU/8")(P,b,!1,function(t){a("nxyk")},null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-form"},[e("form",{attrs:{id:"form"}},[e("label",{attrs:{htmlFor:"name"}},[this._v("GamerTag")]),this._v(" "),e("input",{attrs:{type:"text",name:"GamerTag",placeholder:"GamerTag"}}),this._v(" "),e("label",{attrs:{htmlFor:"name"}},[this._v("Password")]),this._v(" "),e("input",{attrs:{type:"text",name:"Password",placeholder:"Password"}}),this._v(" "),e("input",{attrs:{id:"submit-button",type:"submit",name:"submit",value:"Submit"}})])])}]};var w=a("VU/8")({name:"Landing"},x,!1,function(t){a("NU1F")},null,null).exports,C={name:"NewUser",data:function(){return{formData:{GamerTag:"",Description:"",PlayStyle:"",FavoriteGames:"",Image:"",Video:""}}},methods:{postNewEvent:function(){fetch("https://fireteam-finder.herokuapp.com/users",{method:"POST",headers:{"Content-type":"application/json"},body:p()(this.formData)})}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new-form"},[a("form",{attrs:{id:"form"},on:{submit:function(e){return e.preventDefault(),t.postNewEvent(e)}}},[a("label",{attrs:{htmlFor:"name"}},[t._v("GamerTag")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.GamerTag,expression:"formData.GamerTag"}],attrs:{type:"text",name:"GamerTag",placeholder:"GamerTag"},domProps:{value:t.formData.GamerTag},on:{input:function(e){e.target.composing||t.$set(t.formData,"GamerTag",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"gamer-img"}},[t._v("Gamer Image")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Image,expression:"formData.Image"}],attrs:{type:"text",name:"Activity",placeholder:"Add Image Link"},domProps:{value:t.formData.Image},on:{input:function(e){e.target.composing||t.$set(t.formData,"Image",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"gamer-video"}},[t._v("Brag Video")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Video,expression:"formData.Video"}],attrs:{type:"text",name:"brag-video",placeholder:"Add Video Link"},domProps:{value:t.formData.Video},on:{input:function(e){e.target.composing||t.$set(t.formData,"Video",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"playstyle"}},[t._v("Play Style")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.PlayStyle,expression:"formData.PlayStyle"}],attrs:{name:"name",rows:"2",cols:"60",placeholder:"Play Style"},domProps:{value:t.formData.PlayStyle},on:{input:function(e){e.target.composing||t.$set(t.formData,"PlayStyle",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"topGames"}},[t._v("Top Games")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.FavoriteGames,expression:"formData.FavoriteGames"}],attrs:{name:"name",rows:"2",cols:"60",placeholder:"Top Games"},domProps:{value:t.formData.FavoriteGames},on:{input:function(e){e.target.composing||t.$set(t.formData,"FavoriteGames",e.target.value)}}}),t._v(" "),a("label",{attrs:{htmlFor:"description"}},[t._v("Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.Description,expression:"formData.Description"}],attrs:{name:"name",rows:"4",cols:"60",placeholder:"Description"},domProps:{value:t.formData.Description},on:{input:function(e){e.target.composing||t.$set(t.formData,"Description",e.target.value)}}}),t._v(" "),a("input",{attrs:{id:"submit-button",type:"submit",name:"submit",value:"Submit"}})])])},staticRenderFns:[]};var F=a("VU/8")(C,N,!1,function(t){a("GhTP")},"data-v-c54d2bac",null).exports,E={name:"ProfileList",props:["myUsers"],components:{Profile:u}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},this._l(this.myUsers,function(t){return e("Profile",{key:t.id,attrs:{user:t}})}))},staticRenderFns:[]};var U={name:"Profiles",components:{ProfileList:a("VU/8")(E,T,!1,function(t){a("IOli")},null,null).exports},data:function(){return{users:[]}},methods:{getData:function(){var t=this;fetch("https://fireteam-finder.herokuapp.com/users").then(function(t){return t.json()}).then(function(e){t.users=e.users,console.log("yo",e)})}},mounted:function(){this.getData()}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile"},[e("div",{staticClass:"posts"},[e("ProfileList",{attrs:{myUsers:this.users}})],1)])},staticRenderFns:[]};var A=a("VU/8")(U,$,!1,function(t){a("0wtH")},null,null).exports,S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SingleProfile"},[a("div",{staticClass:"profile-messaging"},[a("div",{staticClass:"Profile-section"},[a("b-card",[a("h1",[t._v(t._s(this.myEvents[0].GamerTag))]),t._v(" "),a("img",{attrs:{src:this.myEvents[0].Image,alt:"Img"}})])],1),t._v(" "),a("div",{staticClass:"messaging"},[a("b-card",[a("h3",[t._v("Description")]),t._v(" "),a("p",[t._v(t._s(this.myEvents[0].Description))]),t._v(" "),a("h3",[t._v("Play Style")]),t._v(" "),a("p",[t._v(t._s(this.myEvents[0].PlayStyle))]),t._v(" "),a("h3",[t._v("Top Games")]),t._v(" "),a("p",[t._v(t._s(this.myEvents[0].FavoriteGames))])])],1)]),t._v(" "),a("div",{staticClass:"posts"},[a("div",{staticClass:"Brag-video"},[a("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://gameclipscontent-d2001.xboxlive.com/xuid-2535444063957577-private/ff030c65-5d4a-472c-9bae-a426b71281b9.MP4?sv=2015-12-11&sr=b&si=DefaultAccess&sig=rR1jx8BVlcidGNfscnJ25kGBswEs4uwCYY0DE9oxNBw%3D&__gda__=1537898757_cafcff88e1068203592dd07b91228be6",allowfullscreen:""}})],1)])])},staticRenderFns:[]};var k={name:"UserById",components:{SingleProfile:a("VU/8")({name:"SingleProfile",props:["myEvents"]},S,!1,function(t){a("dGJj")},null,null).exports},data:function(){return{users:null,event_id:null}},methods:{getEventData:function(){var t=this;fetch("https://fireteam-finder.herokuapp.com/users/"+this.event_id).then(function(t){return t.json()}).then(function(e){return t.users=e.users}).then(function(){return console.log(t.users[0])})},getQueryString:function(){var t=location.href;console.log(t.split("/")),this.event_id=t.split("/")[5]}},mounted:function(){this.getQueryString(),this.getEventData()}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Event-by"},[this.users?e("SingleProfile",{attrs:{myEvents:this.users}}):this._e()],1)},staticRenderFns:[]};var I=a("VU/8")(k,V,!1,function(t){a("m0Rs")},null,null).exports;s.a.use(m.a);var L=new m.a({routes:[{path:"/",name:"Landing",component:n},{path:"/Destiny2",name:"HomePagePosts",component:G},{path:"/WillKirkhope",name:"Profile",component:u},{path:"/CreatePost",name:"NewPostForm",component:_},{path:"/Login",name:"Login",component:w},{path:"/NewUser",name:"NewUser",component:F},{path:"/Profiles",name:"Profiles",component:A},{path:"/user/:id",name:"UserById",component:I}]}),R=a("e6fC"),M=(a("Jmt5"),a("9M+g"),a("5/be"));s.a.use(R.a),s.a.use(M.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:L,components:{App:l},template:"<App/>"})},NU1F:function(t,e){},PYlE:function(t,e,a){t.exports=a.p+"static/img/destiny-logo-png-2.72addad.png"},aYcu:function(t,e){},dGJj:function(t,e){},m0Rs:function(t,e){},nDIw:function(t,e){},nxyk:function(t,e){},wf2y:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.15d133c54d7bf47676bb.js.map