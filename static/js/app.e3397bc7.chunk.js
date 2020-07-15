(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{350:function(t,e,n){"use strict";n.d(e,"a",(function(){return _t}));var r=n(60),o=n(1),a=n.n(o),i=n(31),c=n(24),s=n(554),l=n(555),u=n(289),p=n(5),f=n.n(p),m=n(6),h=n.n(m),d=n(8),y=n.n(d),g=n(9),v=n.n(g),b=n(4),S=n.n(b),w=n(2),E=n(18),_=n(3),I=n(46),R=n(349),k=n(178),D=n(557);function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var x=function(t){y()(n,t);var e=C(n);function n(){return f()(this,n),e.apply(this,arguments)}return h()(n,[{key:"render",value:function(){var t=this;return a.a.createElement(R.a,{Component:k.a,friction:1,tension:100,activeScale:.9,linearGradientProps:{colors:["#FF9800","#F44336"],start:[1,0],end:[.2,0]},leftAvatar:this.props.img?{rounded:!0,source:{uri:this.props.img}}:null,title:this.props.name,titleStyle:{color:"white",fontWeight:"bold"},subtitleStyle:{color:"white"},subtitle:this.props.progress,ViewComponent:D.a,chevron:{color:"white"},containerStyle:{borderRadius:5},onPress:function(){console.log(t.props.courseID),t.props.courseID?t.props.navigation.navigate("Sections",{title:t.props.name,courseID:t.props.courseID,content:t.props.content}):t.props.sectionID?t.props.navigation.navigate("SectionItems",{title:t.props.name,sectionID:t.props.sectionID}):t.props.lessonID&&t.props.navigation.navigate("LessonViewer",{title:t.props.name,lessonID:t.props.lessonID})}})}}]),n}(a.a.Component),A=n(556);function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}function j(t){return t?Math.floor(100*t)/100:0}var N=function(t){y()(n,t);var e=O(n);function n(t){var r;return f()(this,n),(r=e.call(this,t)).state={gyro:{}},A.a.setUpdateInterval(16),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this._subscription=A.a.addListener((function(e){t.setState({gyro:e})}))}},{key:"componentWillUnmount",value:function(){this._subscription&&this._subscription.remove(),this._subscription=null}},{key:"render",value:function(){var t=this.state.gyro,e=t.x,n=t.y,r=(t.z,{transform:[{perspective:300},{rotateX:5*j(n)+"deg"},{rotateY:5*j(e)+"deg"}]});return a.a.createElement(_.a,{style:r},this.props.children)}}]),n}(a.a.Component);function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var z=function(t){y()(n,t);var e=P(n);function n(){return f()(this,n),e.apply(this,arguments)}return h()(n,[{key:"render",value:function(){return a.a.createElement(N,null,a.a.createElement(k.a,{friction:90,tension:100,activeScale:.9,style:{marginBottom:10}},a.a.createElement(D.a,{colors:["#c9e265","#38b6ff"],start:[1,1],end:[0,0],style:{borderRadius:5}},a.a.createElement(_.a,{style:{paddingVertical:10}},this.props.children))))}}]),n}(a.a.Component),B=n(98),J=n(43),W=w.a.create({darkB:{backgroundColor:"#000000"},lightB:{backgroundColor:"#fff"},darkF:{color:"white"},lightF:{color:"black"}});function L(t){return"dark"==t?W.darkB:W.lightB}function T(t){return"dark"==t?W.darkF:W.lightF}function M(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var U=function(t){y()(n,t);var e=M(n);function n(){return f()(this,n),e.apply(this,arguments)}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=J.Appearance.addChangeListener((function(e){var n=e.colorScheme;console.log(n),t.setState({})}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=J.Appearance.getColorScheme();return a.a.createElement(I.a,{style:[L(t),F.container]},a.a.createElement(z,null,a.a.createElement(E.a,{style:{color:"white",fontWeight:"bold",fontSize:40,textAlign:"center"}},"Welcome back!"),a.a.createElement(E.a,{style:{color:"white",fontSize:30,textAlign:"center"}},"Insert Name Here")),a.a.createElement(z,null,a.a.createElement(_.a,{style:{flexDirection:"row-reverse"}},a.a.createElement(_.a,{style:{padding:5,paddingRight:20,justifyContent:"center"}},a.a.createElement(E.a,{style:{fontSize:40,color:"white",fontWeight:"bold"}},"97")),a.a.createElement(_.a,{style:{marginHorizontal:10,flex:1}},a.a.createElement(E.a,{style:{color:"white",fontSize:25,marginBottom:10}},"Points Earned:"),a.a.createElement(B.a,{progress:.3,width:null,borderWidth:2}),a.a.createElement(E.a,{style:{color:"white",fontSize:20}},"Level: 5")))),a.a.createElement(E.a,{style:[T(t),{fontSize:25,marginBottom:10,marginTop:20,paddingHorizontal:10,textAlign:"center"}]},"Suggested for you:"),a.a.createElement(x,{name:"Chemistry",progress:"Not Started"}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),F=w.a.create({container:{flex:1,padding:10}}),H=n(11),V=n.n(H),$=n(41),G=n(95),X=n(55),Y=n.n(X);function q(t,e){var n;if("undefined"===typeof Symbol||null==t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(n)}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var Z=function(t){y()(n,t);var e=Q(n);function n(){var t;f()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={classes:null},t}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=J.Appearance.addChangeListener((function(e){e.colorScheme;t.setState({})})),Y.a.getItem("courseNames").then((function(e){e&&t.setState({classes:JSON.parse(e)})})),fetch("https://www.educately.co/mobile_app_api.php?data=sections").then((function(t){return console.log("res: "+JSON.stringify(t)),t.json()})).then((function(e){for(var n,r=new Set,o=q(e);!(n=o()).done;){var a=n.value;r.add(a.section_course_id)}for(var i,c=[],s=q(r);!(i=s()).done;){var l=i.value;c.push(Promise.all([fetch("https://www.educately.co/mobile_app_api.php?data=id&id="+l).then((function(t){return t.json()})).then((function(t){return"trash"==t[0].post_status?null:t[0]})),fetch("https://www.educately.co/mobile_app_api.php?data=post_meta&id="+l).then((function(t){return t.json()})).then((function(t){for(var e,n={},r=q(t);!(e=r()).done;){var o=e.value;n[o.meta_key]=o.meta_value}return n})).then((function(t){return t._thumbnail_id?fetch("https://www.educately.co/mobile_app_api.php?data=post_meta&id="+t._thumbnail_id).then((function(t){return t.json()})).then((function(e){for(var n,r=q(e);!(n=r()).done;){var o=n.value;if("_wp_attached_file"==o.meta_key){t.thumbnail="https://www.educately.co/wp-content/uploads/"+o.meta_value;break}}return t})):t}))]).then((function(t){return t[0]?V()({},t[0],t[1]):null})))}Promise.all(c).then((function(e){e=e.filter((function(t){return null!=t})),console.log(e),t.setState({classes:e}),Y.a.setItem("courseNames",JSON.stringify(e))})),Y.a.setItem("sectionsRes",JSON.stringify(e))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=this,e=J.Appearance.getColorScheme();return null==this.state.classes?a.a.createElement(_.a,{style:[L(e),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement($.a,{style:T(e),size:"large"}),a.a.createElement(E.a,{style:[T(e),{paddingTop:10}]},"Retrieving a List of all courses")):a.a.createElement(_.a,{style:[L(e),tt.container]},a.a.createElement(G.a,{style:L(e),data:this.state.classes,renderItem:function(e){var n=e.item;return a.a.createElement(_.a,{style:{margin:10}},a.a.createElement(x,{name:n.post_title,progress:n.post_excerpt,navigation:t.props.navigation,courseID:n.ID,img:n.thumbnail,content:n.post_content}))},keyExtractor:function(t){return t.ID}}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),tt=w.a.create({container:{flex:1}});function et(t,e){var n;if("undefined"===typeof Symbol||null==t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(n)}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var ot=function(t){y()(n,t);var e=rt(n);function n(t){var r;return f()(this,n),(r=e.call(this,t)).state={sections:null},r.parseRes=function(t){for(var e,n=[],o=et(t);!(e=o()).done;){var a=e.value;a.section_course_id==r.props.route.params.courseID&&n.push(a)}n.sort((function(t,e){return t.section_order-e.section_order})),console.log(n),r.setState({sections:n})},r.props.navigation.setOptions({title:r.props.route.params.title}),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=J.Appearance.addChangeListener((function(e){e.colorScheme;t.setState({})})),Y.a.getItem("sectionsRes").then((function(e){e&&t.parseRes(JSON.parse(e))})),fetch("https://www.educately.co/mobile_app_api.php?data=sections").then((function(t){return t.json()})).then((function(e){t.parseRes(e),Y.a.setItem("sectionsRes",JSON.stringify(e))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=this,e=J.Appearance.getColorScheme();return null==this.state.sections?a.a.createElement(_.a,{style:[L(e),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement($.a,{style:T(e),size:"large"}),a.a.createElement(E.a,{style:[T(e),{paddingTop:10}]},"Retrieving the sections in ",this.props.route.params.title)):a.a.createElement(_.a,{style:[L(e),at.container]},a.a.createElement(G.a,{ListHeaderComponent:this.props.route.params.content?a.a.createElement(_.a,{style:{margin:10}},a.a.createElement(z,null,a.a.createElement(E.a,{style:{fontSize:20,margin:10}},this.props.route.params.content))):null,data:this.state.sections,style:L(e),renderItem:function(e){var n=e.item;return a.a.createElement(_.a,{style:{margin:10}},a.a.createElement(x,{name:n.section_name,progress:n.section_description,navigation:t.props.navigation,sectionID:n.section_id}))},keyExtractor:function(t){return t.section_id}}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),at=w.a.create({container:{flex:1,backgroundColor:"#fff"}});function it(t,e){var n;if("undefined"===typeof Symbol||null==t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ct(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(n)}function ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function st(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var lt=function(t){y()(n,t);var e=st(n);function n(t){var r;return f()(this,n),(r=e.call(this,t)).state={sectionItems:null},console.log("title"+r.props.route.params.title),r.props.navigation.setOptions({title:r.props.route.params.title}),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=J.Appearance.addChangeListener((function(e){e.colorScheme;t.setState({})})),Y.a.getItem("sectionItems"+this.props.route.params.sectionID).then((function(e){e&&t.setState({sectionItems:JSON.parse(e)})})),fetch("https://www.educately.co/mobile_app_api.php?data=section_items&id="+this.props.route.params.sectionID).then((function(t){return t.json()})).then((function(e){e.sort((function(t,e){return t.item_order-e.item_order})),console.log(e);for(var n,r=[],o=function(t){r.push(fetch("https://www.educately.co/mobile_app_api.php?data=id&id="+t.item_id).then((function(t){return t.json()})).then((function(e){return Y.a.setItem("lessonRes"+t.item_id,JSON.stringify(e[0])),e[0]})))},a=it(e);!(n=a()).done;){o(n.value)}Promise.all(r).then((function(e){console.log(e),t.setState({sectionItems:e}),Y.a.setItem("sectionItems"+t.props.route.params.sectionID,JSON.stringify(e))}))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=this,e=J.Appearance.getColorScheme();return null==this.state.sectionItems?a.a.createElement(_.a,{style:[L(e),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement($.a,{style:T(e),size:"large"}),a.a.createElement(E.a,{style:[T(e),{paddingTop:10}]},"Retrieving the items in ",this.props.route.params.title)):a.a.createElement(_.a,{style:[L(e),ut.container]},a.a.createElement(G.a,{style:L(e),data:this.state.sectionItems,renderItem:function(e){var n=e.item;return a.a.createElement(_.a,{style:{margin:10}},a.a.createElement(x,{name:n.post_title,progress:n.post_type.substring(3).charAt(0).toUpperCase()+n.post_type.substring(3).slice(1),navigation:t.props.navigation,lessonID:n.ID}))},keyExtractor:function(t){return t.ID}}),a.a.createElement(r.StatusBar,{style:"auto"}))}}]),n}(a.a.Component),ut=w.a.create({container:{flex:1,backgroundColor:"#fff"}}),pt=n(7),ft=n(351),mt=n(352),ht=n(344);function dt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var yt=function(t){y()(n,t);var e=dt(n);function n(t){var r;return f()(this,n),(r=e.call(this,t)).state={lesson:null},console.log("title"+r.props.route.params.title),r.props.navigation.setOptions({title:r.props.route.params.title}),r}return h()(n,[{key:"componentDidMount",value:function(){var t=this;this.subscription=J.Appearance.addChangeListener((function(e){e.colorScheme;t.setState()})),Y.a.getItem("lessonRes"+this.props.route.params.lessonID).then((function(e){e&&t.setState({lesson:JSON.parse(e)})})),fetch("https://www.educately.co/mobile_app_api.php?data=id&id="+this.props.route.params.lessonID).then((function(t){return t.json()})).then((function(e){e[0].post_content=e[0].post_content.replace(/\[embed\].*v=.*\[\/embed\]/g,(function(t){return console.log(t),"<yt id="+t.substring(t.indexOf("v=")+"v=".length,t.indexOf("[/embed]"))+"></yt>"})),e[0].post_content=e[0].post_content.replace(/\[embed\].*\[\/embed\]/g,(function(t){return console.log(t),"<iframe src="+t.substring(t.indexOf("[embed]")+"[embed]".length,t.indexOf("[/embed]"))+"></iframe>"})),e[0].post_content=e[0].post_content.split("\n").map((function(t){return console.log(t+": "+t.match(/<.*>.*<\/.*>/g)),t.match(/<.*>.*<\/.*>/g)&&t.match(/<.*>.*<\/.*>/g).length>0?t:"<p>"+t+"</p>"})).join(""),console.log(e[0].post_content),t.setState({lesson:e[0]}),Y.a.setItem("lessonRes"+t.props.route.params.lessonID,JSON.stringify(e[0]))}))}},{key:"componentWillUnmount",value:function(){this.subscription.remove()}},{key:"render",value:function(){var t=J.Appearance.getColorScheme();return null==this.state.lesson?a.a.createElement(_.a,{style:[L(t),{flex:1,padding:10,alignItems:"center",justifyContent:"center"}]},a.a.createElement($.a,{style:T(t),size:"large"}),a.a.createElement(E.a,{style:[T(t),{paddingTop:10}]},"Retrieving ",this.props.route.params.title)):(console.log(this.state.lesson.post_content),a.a.createElement(I.a,{style:L(t)},a.a.createElement(ft.a,{html:this.state.lesson.post_content,imagesMaxWidth:c.a.get("window").width,tagsStyles:{p:V()({},T(t),{fontSize:20,paddingLeft:10,paddingRight:10})},renderers:{yt:function(t){return console.log(JSON.stringify(t)),"web"===pt.a.OS?a.a.createElement(ht.a,{videoId:t.id,opts:{height:""+c.a.get("window").width/16*9,width:"100%",playerVars:{autoplay:1,modestbranding:1,rel:0}}}):a.a.createElement(mt.a,{height:c.a.get("window").width/16*9,width:c.a.get("window").width,videoId:t.id,play:!0,initialPlayerParams:{cc_lang_pref:"us",showClosedCaptions:!0,modestbranding:!0,rel:!1}})}}}),a.a.createElement(_.a,{style:{height:40}}),a.a.createElement(r.StatusBar,{style:"auto"})))}}]),n}(a.a.Component),gt=(w.a.create({container:{flex:1,backgroundColor:"#fff"}}),n(309)),vt=Object(s.a)(),bt=Object(l.a)(),St=function(t,e){return{headerStyle:{backgroundColor:"#9edeb3"},headerTintColor:"#fff",headerRight:function(){return c.a.get("window").width>=768?null:a.a.createElement(i.a,{onPress:function(){return e.toggleDrawer()}},a.a.createElement(gt.a,{name:"three-bars",size:24,color:"white",style:{paddingRight:20}}))}}};function wt(){return a.a.createElement(bt.Navigator,null,a.a.createElement(bt.Screen,{name:"Home",component:U,options:function(t){var e=t.navigation;return St(0,e)}}))}function Et(){return a.a.createElement(bt.Navigator,null,a.a.createElement(bt.Screen,{name:"Courses",component:Z,options:function(t){var e=t.navigation;return St(0,e)}}),a.a.createElement(bt.Screen,{name:"Sections",component:ot,options:function(t){var e=t.navigation;return St(0,e)}}),a.a.createElement(bt.Screen,{name:"SectionItems",component:lt,options:function(t){var e=t.navigation;return St(0,e)}}),a.a.createElement(bt.Screen,{name:"LessonViewer",component:yt,options:function(t){var e=t.navigation;return St(0,e)}}))}function _t(){var t=Object(J.useColorScheme)();return a.a.createElement(J.AppearanceProvider,null,a.a.createElement(u.a,null,a.a.createElement(r.StatusBar,{style:"auto"}),a.a.createElement(vt.Navigator,{initialRouteName:"Home",drawerType:c.a.get("window").width>=768?"permanent":"front",drawerPosition:"right",drawerStyle:L(t),drawerContentOptions:"dark"==t?{activeTintColor:"white",activeBackgroundColor:"grey",inactiveTintColor:"grey"}:null},a.a.createElement(vt.Screen,{name:"Home",component:wt}),a.a.createElement(vt.Screen,{name:"Courses",component:Et}))))}},361:function(t,e,n){n(362),t.exports=n(539)},362:function(t,e){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./expo-service-worker.js",{scope:"./"}).then((function(t){})).catch((function(t){console.info("Failed to register service-worker",t)}))}))},516:function(t,e){}},[[361,1,2]]]);
//# sourceMappingURL=app.e3397bc7.chunk.js.map