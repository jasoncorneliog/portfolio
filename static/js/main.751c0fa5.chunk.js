(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,a,t){e.exports=t(55)},47:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),n=t(17),c=t.n(n),i=(t(47),t(18)),l=t(19),s=t(22),m=t(20),p=t(37),h=t(5),u=t(24),d=t(36),b=t(30),g=t(16),E=t(6),j=t(78),f=t(79),w=t(39),v=t(23),k=t(80),N=t(75),y=t(76),O=t(77),x=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).smoothScroll=function(e){e.current.scrollIntoView({behavior:"smooth"})},r}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.props.classes;return o.a.createElement("div",{className:a.root},o.a.createElement(k.a,{position:"static",className:a.appBar},o.a.createElement(N.a,null,o.a.createElement("div",{className:a.grow},o.a.createElement(y.a,{color:"inherit",onClick:function(){e.smoothScroll(e.props.projectrefs)}},"Projects"),o.a.createElement(y.a,{color:"inherit"},"Resume")),o.a.createElement(O.a,{href:"https://github.com/jasoncorneliog",color:"inherit",className:a.socialIcons},o.a.createElement(v.a,{icon:["fab","github"]})),o.a.createElement(O.a,{href:"https://www.linkedin.com/in/jasoncorneliog",color:"inherit",className:a.socialIcons},o.a.createElement(v.a,{icon:["fab","linkedin"]})))))}}]),t}(r.Component),C=Object(E.a)((function(e){var a;return{root:{flexGrow:1},appBar:(a={background:"#3494E6"},Object(g.a)(a,"background","-webkit-linear-gradient(to right, #3494E6, #EC6EAD)"),Object(g.a)(a,"background","linear-gradient(to right, #3494E6, #EC6EAD)"),a),grow:{flexGrow:1,margin:"auto"}}}))(x),T=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).projectsRef=o.a.createRef(),r}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.container},o.a.createElement(C,{projectrefs:this.projectsRef}),o.a.createElement("main",{className:e.content},o.a.createElement("div",{className:e.mainContainer},o.a.createElement("div",{className:e.appBarSpacer}),o.a.createElement(j.a,{container:!0},o.a.createElement(j.a,{item:!0,xs:12},o.a.createElement("div",{className:e.banner},o.a.createElement("h1",{className:e.bannerHeader},"Hi, I'm Jason"),o.a.createElement("hr",{className:e.bannerDivider}),o.a.createElement("p",{className:e.bannerText},"A Student & Developer studying Software Engineering at CMU."))))),o.a.createElement("div",{className:e.projContainer,ref:this.projectsRef},o.a.createElement(j.a,{container:!0},o.a.createElement(j.a,{item:!0,xs:12},o.a.createElement("h1",{className:e.projHeader},"My Projects."),o.a.createElement(f.a,null),o.a.createElement("p",{className:e.projPara},"Here are some of the stuff I've been working on!")),o.a.createElement(j.a,{item:!0,md:8,sm:12,xs:12,className:e.projOneGrid},o.a.createElement(w.a,{className:e.projOneButton},o.a.createElement("h2",{className:e.projTitle},o.a.createElement(v.a,{icon:"comment-alt"})," Toons"),o.a.createElement("span",{className:e.projOne}))),o.a.createElement(j.a,{item:!0,md:4,sm:12,xs:12,className:e.projTwoGrid},o.a.createElement(w.a,{className:e.projTwoButton},o.a.createElement("h2",{className:e.projTitle},"ABC"),o.a.createElement("span",{className:e.projTwo}))),o.a.createElement(j.a,{item:!0,md:4,sm:12,xs:12,className:e.projThreeGrid},o.a.createElement(w.a,{className:e.projThreeButton},o.a.createElement("span",{className:e.projThree}))),o.a.createElement(j.a,{item:!0,md:8,sm:12,xs:12,className:e.projFourGrid},o.a.createElement(w.a,{className:e.projFourButton},o.a.createElement("span",{className:e.projFour}))))),o.a.createElement("div",{className:e.appBarSpacer}),o.a.createElement("div",{className:e.footer},o.a.createElement(f.a,null),o.a.createElement("p",{className:e.footerCopyRight},o.a.createElement(v.a,{icon:"copyright"})," Jason Cornelio"))))}}]),t}(r.Component),B=Object(E.a)((function(e){var a;return{content:{width:"100%",margin:"auto"},mainContainer:Object(g.a)({background:"-webkit-linear-gradient(to right, #3494E6, #EC6EAD)"},"background","linear-gradient(to right, #3494E6, #EC6EAD)"),appBarSpacer:e.mixins.toolbar,selfImage:{borderRadius:"50%",display:"block",margin:"0 auto"},banner:{textAlign:"center",backgroundColor:"black",opacity:.7,width:"75%",margin:"auto",borderRadius:"10px"},bannerHeader:{fontSize:"66px",fontWeight:"bold",color:"white"},bannerDivider:{border:"none",borderTop:"5px dotted white",width:"50%",height:"1px",margin:"auto"},bannerText:{color:"white",fontSize:"30px",padding:"1em"},projContainer:(a={width:"50%",margin:"auto",color:"#444444"},Object(g.a)(a,e.breakpoints.down("lg"),{width:"80%"}),Object(g.a)(a,e.breakpoints.down("sm"),{width:"90%"}),a),projPara:{fontSize:"25px"},projOneGrid:{height:"250px",opacity:.85},projTwoGrid:{height:"250px",opacity:.85},projThreeGrid:{height:"250px",opacity:.85},projFourGrid:{height:"250px",opacity:.85},projOneButton:{width:"100%",height:"100%","&:hover, $projOne":{opacity:.9}},projTwoButton:{width:"100%",height:"100%","&:hover, $projTwo":{opacity:.9}},projThreeButton:{width:"100%",height:"100%","&:hover, $projThree":{opacity:.9}},projFourButton:{width:"100%",height:"100%","&:hover, $projFour":{opacity:.9}},projOne:{background:"#833ab4",position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%",opacity:.75},projTwo:{backgroundColor:"#fcb045",position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%",opacity:.75},projThree:{backgroundColor:"#fd1d1d",position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%",opacity:.75},projFour:{backgroundColor:"#518EDD",position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%",opacity:.75},projTitle:{fontSize:"45px"},footer:{margin:"auto",width:"80%",color:"#444444"},footerCopyRight:{float:"right"}}}))(T);u.b.add(d.a,b.a,b.b);var S=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{exact:!0,path:"/",component:B})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.751c0fa5.chunk.js.map