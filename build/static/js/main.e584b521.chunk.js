(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(n,t){},255:function(n,t){},273:function(n,t){},275:function(n,t){},294:function(n,t){},295:function(n,t){},358:function(n,t){},360:function(n,t){},393:function(n,t){},395:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},409:function(n,t){},411:function(n,t){},424:function(n,t){},436:function(n,t){},439:function(n,t){},444:function(n,t){},452:function(n,t){},461:function(n,t){},463:function(n,t){},533:function(n,t,e){},534:function(n,t,e){"use strict";e.r(t);var c,r,a,o,i,s,l,u,d,x,p,b,j,h,f,g,O=e(1),y=e(85),m=e.n(y),v=e(16),C=e.n(v),w=e(43),A=e(69),S=e(14),E=e(58),T=e(68),N=e.n(T),_=e(220),k=e.n(_),M=e(70),D=e(221),I=e(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},n),{},{account:t.payload.account});default:return n}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},U=Object(M.b)({blockchain:R,data:P}),F=[D.a],W=Object(M.c)(M.a.apply(void 0,F)),Y=Object(M.d)(U,W),z=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},B=function(){return function(){var n=Object(w.a)(C.a.mark((function n(t){var e;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(z("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},H=function(n){return{type:"CONNECTION_FAILED",payload:n}},G=function(n){return function(){var t=Object(w.a)(C.a.mark((function t(e){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(B());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Q=e(15),X=Q.a.div(c||(c=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),q=Q.a.div(r||(r=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),nn=Q.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),tn=(Q.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),en=(Q.a.div(x||(x=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3)),cn=Q.a.button(p||(p=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=Q.a.button(b||(b=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),an=Q.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),on=Q.a.img(h||(h=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),sn=Q.a.img(f||(f=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ln=Q.a.a(g||(g=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var un=function(){var n,t,e=Object(E.b)(),c=Object(E.c)((function(n){return n.blockchain})),r=Object(E.c)((function(n){return n.data})),a=Object(O.useState)(!1),o=Object(A.a)(a,2),i=o[0],s=o[1],l=Object(O.useState)("Click buy to mint your NFT."),u=Object(A.a)(l,2),d=u[0],x=u[1],p=Object(O.useState)(1),b=Object(A.a)(p,2),j=b[0],h=b[1],f=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(A.a)(f,2),y=g[0],m=g[1],v=function(){""!==c.account&&null!==c.smartContract&&e(B(c.account))},S=function(){var n=Object(w.a)(C.a.mark((function n(){var t,e;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,m(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){S()}),[]),Object(O.useEffect)((function(){v()}),[c.account]),Object(en.jsx)(X,{children:Object(en.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(en.jsx)(on,{alt:"logo",src:"/config/images/logo.png"}),Object(en.jsx)(J,{}),Object(en.jsxs)(an,{flex:1,style:{padding:24},test:!0,children:[Object(en.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(en.jsx)(sn,{alt:"example",src:"/config/images/example.gif"})}),Object(en.jsx)(Z,{}),Object(en.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(en.jsxs)(nn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(en.jsx)(ln,{target:"_blank",href:y.SCAN_LINK,children:(n=y.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Object(en.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(en.jsx)(J,{}),Object(en.jsx)(ln,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsxs)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(en.jsx)(q,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(en.jsx)(J,{}),""===c.account||null===c.smartContract?Object(en.jsxs)($,{ai:"center",jc:"center",children:[Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(en.jsx)(J,{}),Object(en.jsx)(cn,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(w.a)(C.a.mark((function n(t){var e,c,r,a,o,i,s,l,u;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return N.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(u=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(G(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(H("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(H("Something went wrong."));case 31:n.next=34;break;case 33:t(H("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(J,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(en.jsx)(V,{}),Object(en.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(en.jsx)(rn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(en.jsx)(V,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(en.jsx)(V,{}),Object(en.jsx)(rn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>10&&(n=10),h(n)}()},children:"+"})]}),Object(en.jsx)(J,{}),Object(en.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(en.jsx)(cn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=y.WEI_COST,t=y.GAS_LIMIT,r=String(n*j),a=String(t*j);console.log("Cost: ",r),console.log("Gas limit: ",a),x("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),x("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(B(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(en.jsx)(V,{})]}),Object(en.jsx)(Z,{}),Object(en.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(en.jsx)(sn,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(en.jsx)(V,{}),Object(en.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(en.jsx)(J,{}),Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},dn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),a(n),o(n)}))};e(533);m.a.render(Object(en.jsx)(E.a,{store:Y,children:Object(en.jsx)(un,{})}),document.getElementById("root")),dn()}},[[534,1,2]]]);
//# sourceMappingURL=main.e584b521.chunk.js.map