(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{346:function(t,e,n){"use strict";n.d(e,"a",(function(){return bt}));var r=n(60),o=n(1),a=n.n(o),i=n(31),c=n(24),s=n(540),l=n(541),u=n(288),f=n(5),p=n.n(f),m=n(6),h=n.n(m),d=n(7),y=n.n(d),g=n(9),v=n.n(g),b=n(4),S=n.n(b),E=n(2),w=n(19),I=n(3),R=n(46),D=n(345),_=n(178),k=n(543);function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var x=function(t){y()(n,t);var e=C(n);function n(){return p()(this,n),e.apply(this,arguments)}return h()(n,[{key:"render",value:function(){var t=this;return a.a.createElement(D.a,{Component:_.a,friction:1,tension:100,activeScale:.9,linearGradientProps:{colors:["#FF9800","#F44336"],start:[1,0],end:[.2,0]},leftAvatar:{rounded:!0,source:{uri:"https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"}},title:this.props.name,titleStyle:{color:"white",fontWeight:"bold"},subtitleStyle:{color:"white"},subtitle:this.props.progress,ViewComponent:k.a,chevron:{color:"white"},containerStyle:{borderRadius:5},onPress:function(){console.log(t.props.courseID),t.props.courseID?t.props.navigation.navigate("Sections",{title:t.props.name,courseID:t.props.courseID}):t.props.sectionID?t.props.navigation.navigate("SectionItems",{title:t.props.name,sectionID:t.props.sectionID}):t.props.lessonID&&t.props.navigation.navigate("LessonViewer",{title:t.props.name,lessonID:t.props.lessonID})}})}}]),n}(a.a.Component),A=n(542);function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}function j(t){return t?Math.floor(100*t)/100:0}var N=function(t){y()(n,t);var e=O(n);function n(t){var r;return p()(this,n),(r=e.call(this,t)).state={gyro:{}},A.a.setUpdateInterval(16),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this._subscription=A.a.addListener((function(e){t.setState({gyro:e})}))}},{key:"componentWillUnmount",value:function(){this._subscription&&this._subscription.remove(),this._subscription=null}},{key:"render",value:function(){var t=this.state.gyro,e=t.x,n=t.y,r=(t.z,{transform:[{perspective:300},{rotateX:5*j(n)+"deg"},{rotateY:5*j(e)+"deg"}]});return a.a.createElement(I.a,{style:r},this.props.children)}}]),n}(a.a.Component);function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var z=function(t){y()(n,t);var e=P(n);function n(){return p()(this,n),e.apply(this,arguments)}return h()(n,[{key:"render",value:function(){return a.a.createElement(N,null,a.a.createElement(_.a,{friction:90,tension:100,activeScale:.9,style:{marginBottom:10}},a.a.createElement(k.a,{colors:["#c9e265","#38b6ff"],start:[1,1],end:[0,0],style:{borderRadius:5}},a.a.createElement(I.a,{style:{paddingVertical:10}},this.props.children))))}}]),n}(a.a.Component),J=n(98),W=n(43),B=E.a.create({darkB:{backgroundColor:"#000000",color:"white"},lightB:{backgroundColor:"#fff",color:"black"},darkF:{color:"white"},lightF:{color:"black"}});function L(t){return"dark"==t?B.darkB:B.lightB}function M(t){return"dark"==t?B.darkF:B.lightF}function U(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var T=function(t){y()(n,t);var e=U(n);function n(){return p()(this,n),e.apply(this,arguments)}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=W.Appearance.addChangeListener((function(e){var n=e.colorScheme;console.log(n),t.setState({})}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=W.Appearance.getColorScheme();return a.a.createElement(R.a,{style:[L(t),F.container]},a.a.createElement(z,null,a.a.createElement(w.a,{style:{color:"white",fontWeight:"bold",fontSize:40,textAlign:"center"}},"Welcome back!"),a.a.createElement(w.a,{style:{color:"white",fontSize:30,textAlign:"center"}},"Insert Name Here")),a.a.createElement(z,null,a.a.createElement(I.a,{style:{flexDirection:"row-reverse"}},a.a.createElement(I.a,{style:{padding:5,paddingRight:20,justifyContent:"center"}},a.a.createElement(w.a,{style:{fontSize:40,color:"white",fontWeight:"bold"}},"97")),a.a.createElement(I.a,{style:{marginHorizontal:10,flex:1}},a.a.createElement(w.a,{style:{color:"white",fontSize:25,marginBottom:10}},"Points Earned:"),a.a.createElement(J.a,{progress:.3,width:null,borderWidth:2}),a.a.createElement(w.a,{style:{color:"white",fontSize:20}},"Level: 5")))),a.a.createElement(w.a,{style:[M(t),{fontSize:25,marginBottom:10,marginTop:20,paddingHorizontal:10,textAlign:"center"}]},"Suggested for you:"),a.a.createElement(x,{name:"Chemistry",progress:"Not Started"}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),F=E.a.create({container:{flex:1,padding:10}}),H=n(41),V=n(95),$=n(59),G=n.n($);function K(t,e){var n;if("undefined"===typeof Symbol||null==t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(n)}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var q=function(t){y()(n,t);var e=Y(n);function n(){var t;p()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={classes:null},t}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=W.Appearance.addChangeListener((function(e){e.colorScheme;t.setState({})})),G.a.getItem("courseNames").then((function(e){e&&t.setState({classes:JSON.parse(e)})})),fetch("http://www.educately.co/mobile_app_api.php?data=sections").then((function(t){return console.log("res: "+JSON.stringify(t)),t.json()})).then((function(e){for(var n,r=new Set,o=K(e);!(n=o()).done;){var a=n.value;r.add(a.section_course_id)}for(var i,c=[],s=function(t){c.push(fetch("http://www.educately.co/mobile_app_api.php?data=id&id="+t).then((function(t){return t.json()})).then((function(e){return{name:e[0].post_title,id:t}})))},l=K(r);!(i=l()).done;){s(i.value)}Promise.all(c).then((function(e){e=e.filter((function(t){return null!=t})),console.log("done"),console.log(e),t.setState({classes:e}),G.a.setItem("courseNames",JSON.stringify(e))})),G.a.setItem("sectionsRes",JSON.stringify(e))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=this,e=W.Appearance.getColorScheme();return null==this.state.classes?a.a.createElement(I.a,{style:[L(e),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement(H.a,{size:"large"}),a.a.createElement(w.a,{style:{paddingTop:10}},"Retrieving a List of all courses")):a.a.createElement(I.a,{style:[L(e),Q.container]},a.a.createElement(V.a,{style:L(e),data:this.state.classes,renderItem:function(e){var n=e.item;return a.a.createElement(I.a,{style:{margin:10}},a.a.createElement(x,{name:n.name,progress:"IDK",navigation:t.props.navigation,courseID:n.id}))},keyExtractor:function(t){return t.id}}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),Q=E.a.create({container:{flex:1}});function Z(t,e){var n;if("undefined"===typeof Symbol||null==t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tt(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(n)}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function et(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var nt=function(t){y()(n,t);var e=et(n);function n(t){var r;return p()(this,n),(r=e.call(this,t)).state={sections:null},r.parseRes=function(t){for(var e,n=[],o=Z(t);!(e=o()).done;){var a=e.value;console.log(a.section_course_id+"-"+JSON.stringify(r.props.route.params)),a.section_course_id==r.props.route.params.courseID&&n.push(a)}n.sort((function(t,e){return t.section_order-e.section_order})),console.log(n),r.setState({sections:n})},console.log("title"+r.props.route.params.title),r.props.navigation.setOptions({title:r.props.route.params.title}),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=W.Appearance.addChangeListener((function(e){e.colorScheme;t.setState({})})),G.a.getItem("sectionsRes").then((function(e){e&&t.parseRes(JSON.parse(e))})),fetch("http://www.educately.co/mobile_app_api.php?data=sections").then((function(t){return t.json()})).then((function(e){t.parseRes(e),G.a.setItem("sectionsRes",JSON.stringify(e))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=this,e=W.Appearance.getColorScheme();return null==this.state.sections?a.a.createElement(I.a,{style:[L(e),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement(H.a,{size:"large"}),a.a.createElement(w.a,{style:{paddingTop:10}},"Retrieving the sections in ",this.props.route.params.title)):a.a.createElement(I.a,{style:[L(e),rt.container]},a.a.createElement(V.a,{data:this.state.sections,style:L(e),renderItem:function(e){var n=e.item;return a.a.createElement(I.a,{style:{margin:10}},a.a.createElement(x,{name:n.section_name,progress:n.section_description,navigation:t.props.navigation,sectionID:n.section_id}))},keyExtractor:function(t){return t.section_id}}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),rt=E.a.create({container:{flex:1,backgroundColor:"#fff"}});function ot(t,e){var n;if("undefined"===typeof Symbol||null==t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return at(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return at(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(n)}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function it(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var ct=function(t){y()(n,t);var e=it(n);function n(t){var r;return p()(this,n),(r=e.call(this,t)).state={sectionItems:null},console.log("title"+r.props.route.params.title),r.props.navigation.setOptions({title:r.props.route.params.title}),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=W.Appearance.addChangeListener((function(e){e.colorScheme;t.setState({})})),G.a.getItem("sectionItems"+this.props.route.params.sectionID).then((function(e){e&&t.setState({sectionItems:JSON.parse(e)})})),fetch("http://www.educately.co/mobile_app_api.php?data=section_items&id="+this.props.route.params.sectionID).then((function(t){return t.json()})).then((function(e){e.sort((function(t,e){return t.item_order-e.item_order})),console.log(e);for(var n,r=[],o=ot(e);!(n=o()).done;){var a=n.value;r.push(fetch("http://www.educately.co/mobile_app_api.php?data=id&id="+a.item_id).then((function(t){return t.json()})).then((function(t){return t[0]})))}Promise.all(r).then((function(e){console.log(e),t.setState({sectionItems:e}),G.a.setItem("sectionItems"+t.props.route.params.sectionID,JSON.stringify(e))}))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=this,e=W.Appearance.getColorScheme();return null==this.state.sectionItems?a.a.createElement(I.a,{style:[L(e),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement(H.a,{size:"large"}),a.a.createElement(w.a,{style:{paddingTop:10}},"Retrieving the items in ",this.props.route.params.title)):a.a.createElement(I.a,{style:[L(e),st.container]},a.a.createElement(V.a,{style:L(e),data:this.state.sectionItems,renderItem:function(e){var n=e.item;return a.a.createElement(I.a,{style:{margin:10}},a.a.createElement(x,{name:n.post_title,progress:n.post_type.substring(3).charAt(0).toUpperCase()+n.post_type.substring(3).slice(1),navigation:t.props.navigation,lessonID:n.ID}))},keyExtractor:function(t){return t.ID}}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),st=E.a.create({container:{flex:1,backgroundColor:"#fff"}}),lt=n(347),ut=n(348);function ft(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var pt=function(t){y()(n,t);var e=ft(n);function n(t){var r;return p()(this,n),(r=e.call(this,t)).state={lesson:null},console.log("title"+r.props.route.params.title),r.props.navigation.setOptions({title:r.props.route.params.title}),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=W.Appearance.addChangeListener((function(e){e.colorScheme;t.setState({})})),G.a.getItem("lessonRes"+this.props.route.params.lessonID).then((function(e){e&&t.setState({lesson:JSON.parse(e)})})),fetch("http://www.educately.co/mobile_app_api.php?data=id&id="+this.props.route.params.lessonID).then((function(t){return t.json()})).then((function(e){e[0].post_content=e[0].post_content.replace(/\[embed\].*v=.*\[\/embed\]/g,(function(t){return console.log(t),"<yt id="+t.substring(t.indexOf("v=")+"v=".length,t.indexOf("[/embed]"))+"></yt>"})),e[0].post_content=e[0].post_content.replace(/\[embed\].*\[\/embed\]/g,(function(t){return console.log(t),"<iframe src="+t.substring(t.indexOf("[embed]")+"[embed]".length,t.indexOf("[/embed]"))+"></iframe>"})),e[0].post_content=e[0].post_content.split("\n").map((function(t){return console.log(t+": "+t.match(/<.*>.*<\/.*>/g)),t.match(/<.*>.*<\/.*>/g)&&t.match(/<.*>.*<\/.*>/g).length>0?t:"<p>"+t+"</p>"})).join(""),console.log(e[0].post_content),t.setState({lesson:e[0]}),G.a.setItem("lessonRes"+t.props.route.params.lessonID,JSON.stringify(e[0]))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=W.Appearance.getColorScheme();return null==this.state.lesson?a.a.createElement(I.a,{style:[L(t),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement(H.a,{size:"large"}),a.a.createElement(w.a,{style:{paddingTop:10}},"Retrieving ",this.props.route.params.title)):(console.log(this.state.lesson.post_content),a.a.createElement(R.a,{style:L(t)},a.a.createElement(lt.a,{html:this.state.lesson.post_content,imagesMaxWidth:c.a.get("window").width,tagsStyles:{p:[M(t),{fontSize:20,paddingLeft:10,paddingRight:10}]},renderers:{yt:function(t){return console.log(JSON.stringify(t)),a.a.createElement(ut.a,{height:c.a.get("window").width/16*9,width:c.a.get("window").width,videoId:t.id,play:!0,initialPlayerParams:{cc_lang_pref:"us",showClosedCaptions:!0,modestbranding:!0,rel:!1}})}}}),a.a.createElement(I.a,{style:{height:40}}),a.a.createElement(r.StatusBar,{style:"auto"})))}}]),n}(a.a.Component),mt=(E.a.create({container:{flex:1,backgroundColor:"#fff"}}),n(308)),ht=Object(s.a)(),dt=Object(l.a)(),yt=function(t,e){return{headerStyle:{backgroundColor:"#9edeb3"},headerTintColor:"#fff",headerRight:function(){return c.a.get("window").width>=768?null:a.a.createElement(i.a,{onPress:function(){return e.toggleDrawer()}},a.a.createElement(mt.a,{name:"three-bars",size:24,color:"white",style:{paddingRight:20}}))}}};function gt(){return a.a.createElement(dt.Navigator,null,a.a.createElement(dt.Screen,{name:"Home",component:T,options:function(t){var e=t.navigation;return yt(0,e)}}))}function vt(){return a.a.createElement(dt.Navigator,null,a.a.createElement(dt.Screen,{name:"Courses",component:q,options:function(t){var e=t.navigation;return yt(0,e)}}),a.a.createElement(dt.Screen,{name:"Sections",component:nt,options:function(t){var e=t.navigation;return yt(0,e)}}),a.a.createElement(dt.Screen,{name:"SectionItems",component:ct,options:function(t){var e=t.navigation;return yt(0,e)}}),a.a.createElement(dt.Screen,{name:"LessonViewer",component:pt,options:function(t){var e=t.navigation;return yt(0,e)}}))}function bt(){return a.a.createElement(W.AppearanceProvider,null,a.a.createElement(u.a,null,a.a.createElement(r.StatusBar,{style:"auto"}),a.a.createElement(ht.Navigator,{initialRouteName:"Home",drawerType:c.a.get("window").width>=768?"permanent":"front"},a.a.createElement(ht.Screen,{name:"Home",component:gt}),a.a.createElement(ht.Screen,{name:"Courses",component:vt}))))}},357:function(t,e,n){n(358),t.exports=n(525)},358:function(t,e){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./expo-service-worker.js",{scope:"./"}).then((function(t){})).catch((function(t){console.info("Failed to register service-worker",t)}))}))},512:function(t,e){}},[[357,1,2]]]);
//# sourceMappingURL=app.37059ed7.chunk.js.map