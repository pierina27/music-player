(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),o=t.n(c);t(67),t(68);function l(e){var a=e.name,t=e.artist,n=e.artistPageUrl,c=e.album;return r.a.createElement("div",{className:"trackInformation"},r.a.createElement("div",{className:"cover"},"Cover"),r.a.createElement("div",{className:"name"},a),r.a.createElement("div",{className:"artist"},t),r.a.createElement("div",{className:"album"},c," (",n,")"))}t(69);function i(e){var a=JSON.parse(e.location.state),t={name:a.user_name,artist:a.user_real_name,albun:a.upload_name,artistPageUrl:a.artist_page_url};return r.a.createElement("div",{className:"player"},r.a.createElement(l,t))}var s=t(19),u=t(21),m=t.n(u),d=t(20),p=t(127),v=t(134),f=t(128),E=t(129),h=t(50),b=t.n(h),g=t(51),y=t.n(g),O=t(49),j=t.n(O),w=t(56),S=t(126),_=t(47),k=t.n(_);t(75);function x(e){var a=e.srcUrl,t=e.pauseSongHandler,n=e.playSongHandler;return r.a.createElement("div",null,r.a.createElement(k.a,{src:a,controls:!0,autoPlay:!0,onPause:t,onPlay:n}))}var D=t(124);t(76);function N(e){var a=e.isLoading,t=e.message;return r.a.createElement("div",{className:"loading"},a&&r.a.createElement(D.a,{className:"center"}),r.a.createElement("h4",null,t))}var C=t(48),P=t.n(C),H=function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(P.a.get("http://ccmixter.org/api/queries?items=limit%3D20%26digrank%3D280%26reqtags%3Dremix%252C-autoplay%26lic%3Dopen%26dataview%3Dlinks_by%26cache%3D_1631703534%26f%3Djsex&total=f%3Dcount%26reqtags%3Dremix%252C-autoplay%26lic%3Dopen%26dataview%3Dlinks_by"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},q=(t(95),Object(w.a)({palette:{primary:{main:"#58FFC1"},secondary:{main:"#D557FF"}}}));var B=Object(s.e)((function(e){var a=e.history,t=Object(n.useState)([]),c=Object(d.a)(t,2),o=c[0],l=c[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),u=s[0],h=s[1],g=Object(n.useState)(0),O=Object(d.a)(g,2),w=O[0],_=O[1],k=Object(n.useState)(0),D=Object(d.a)(k,2),C=D[0],P=D[1],B=Object(n.useState)(""),F=Object(d.a)(B,2),J=F[0],U=F[1],L=Object(n.useState)(!1),W=Object(d.a)(L,2),G=W[0],I=W[1],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.download_url,t=e.upload_id;return function(e){e.preventDefault(),console.log(a,t),a&&h(a),t&&_(+t),I(!0)}},z=function(e){document.querySelector("audio").pause(),I(!1)},R=function(e){return function(){a.push("/detail",JSON.stringify(e))}};return Object(n.useEffect)((function(){!function(){var e,a;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return P(!0),U("Loading the wonderful music..."),t.prev=2,t.next=5,m.a.awrap(H());case 5:e=t.sent,a=e.data,l(a[0].items),U(""),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),U("Sorry connection error.."),l([]);case 15:P(!1);case 16:case"end":return t.stop()}}),null,null,[[2,11]])}()}),[]),r.a.createElement(S.a,{theme:q},r.a.createElement("div",{className:"playlist"},r.a.createElement(p.a,{component:"nav","aria-label":"main mailbox folders"},o.map((function(e){return r.a.createElement(v.a,{button:!0,onClick:w!==+e.upload_id?M(e):z},r.a.createElement(f.a,null,w===+e.upload_id&&G?r.a.createElement(j.a,{color:"primary"}):r.a.createElement(b.a,{color:"secondary"})),r.a.createElement(E.a,{primary:e.upload_name,secondary:e.user_real_name}),r.a.createElement(f.a,{onClick:R(e)},r.a.createElement(y.a,{color:"secondary"})))}))),(C||J)&&r.a.createElement(N,{isLoading:C,message:J})),r.a.createElement(x,{srcUrl:u,pauseSongHandler:z,playSongHandler:M()}))}));var F=Object(s.e)((function(){return r.a.createElement(B,null)})),J=t(130),U=t(135),L=t(131),W=t(32),G=t(132),I=Object(J.a)((function(e){return{root:{flexGrow:1,position:"relative"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var M=Object(s.e)((function(e){var a=e.name,t=e.history,n=I();return r.a.createElement("div",{className:n.root},r.a.createElement(U.a,{position:"static"},r.a.createElement(L.a,{variant:"dense"},r.a.createElement(W.a,{variant:"h6",className:n.title},a),r.a.createElement(G.a,{variant:"contained",color:"secondary",onClick:function(){t.push("/")}},"Home"))))})),z=t(24),R=t(53),$=t(22),A=t(54),K=t(55),Q=t(57),T=function(e){function a(e){var t;return Object(R.a)(this,a),(t=Object(A.a)(this,Object(K.a)(a).call(this,e))).state={error:""},t}return Object(Q.a)(a,e),Object($.a)(a,[{key:"componentDidCatch",value:function(e){this.setState({error:e.message})}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",null,r.a.createElement("h2",null,"Oh-no! Something went wrong"),r.a.createElement("div",null,"Component Stack Error Details: "),r.a.createElement("p",{className:"red"},this.state.error&&this.state.error.toString())):this.props.children}}]),a}(r.a.Component),V=t(133);t(99);var X=function(){return r.a.createElement(T,null,r.a.createElement(z.a,null,r.a.createElement(V.a,{maxWidth:"sm"},r.a.createElement(M,{className:"navBar",name:"Music Player from Matzii"}),r.a.createElement(s.a,{exact:!0,path:"/",component:F}),r.a.createElement(s.a,{path:"/detail",component:i}))))};var Y=function(){return r.a.createElement(X,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,a,t){e.exports=t(100)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},95:function(e,a,t){},99:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.f1713116.chunk.js.map