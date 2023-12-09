(function(){"use strict";var t={7759:function(t,n,e){var o=e(9242),a=e(3396);const r={id:"app"};function i(t,n,e,o,i,u){const c=(0,a.up)("MainHeader"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("main",r,[(0,a.Wm)(c),(0,a.Wm)(l)])}var u=e(7139);const c=t=>((0,a.dD)("data-v-e9fca5d0"),t=t(),(0,a.Cn)(),t),l={class:"container"},s=c((()=>(0,a._)("h1",null,"Where in the world?",-1))),d=["textContent"];function p(t,n,e,o,r,i){const c=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("nav",null,[(0,a._)("div",l,[s,(0,a._)("span",{onClick:n[0]||(n[0]=(...n)=>t.changeMode&&t.changeMode(...n))},[(0,a.Wm)(c,{icon:"fa-regular fa-moon"}),(0,a._)("span",{class:"app-mode",textContent:(0,u.zw)(`${t.modeButton} Mode`)},null,8,d)])])])}var f=e(65);const{mapState:m,mapMutations:g}=(0,f._p)("modeType");var h={name:"MainHeader",computed:{...m(["mode","modeButton"])},methods:{...g(["updateMode","updateModeButton","changeMode"])},watch:{mode:function(t){localStorage.mode=t,document.documentElement.dataset.mode=t,this.updateModeButton()}},mounted(){this.updateMode()}},y=e(89);const v=(0,y.Z)(h,[["render",p],["__scopeId","data-v-e9fca5d0"]]);var _=v,w={name:"App",components:{MainHeader:_}};const C=(0,y.Z)(w,[["render",i]]);var D=C,x=e(2483);const k={class:"home"},b={class:"container"},I={class:"all-countries"};function R(t,n,e,o,r,i){const u=(0,a.up)("FiltrationTools"),c=(0,a.up)("CountryBox");return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",b,[(0,a.Wm)(u),(0,a._)("section",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.countries,(t=>((0,a.wg)(),(0,a.j4)(c,{key:t.name,countryData:t},null,8,["countryData"])))),128))])])])}const L=t=>((0,a.dD)("data-v-8ba0852e"),t=t(),(0,a.Cn)(),t),N={class:"filtration"},F={class:"div-input"},M={class:"div-select"},z=L((()=>(0,a._)("option",{value:""},"Filter By Region",-1))),B=["value"];function S(t,n,e,r,i,c){const l=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("section",N,[(0,a._)("div",F,[(0,a.Wm)(l,{icon:"fa-solid fa-magnifying-glass"}),(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Search for a country","onUpdate:modelValue":n[0]||(n[0]=t=>c.filterName=t)},null,512),[[o.nr,c.filterName]])]),(0,a._)("div",M,[(0,a.wy)((0,a._)("select",{name:"region","onUpdate:modelValue":n[1]||(n[1]=t=>c.filterRegion=t)},[z,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.regions,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:t},(0,u.zw)(t),9,B)))),128))],512),[[o.bM,c.filterRegion]]),(0,a.Wm)(l,{icon:"fa-solid fa-angle-down"})])])}e(7658);var $={name:"FiltrationTools",data:function(){return{regions:["africa","america","asia","europe","oceania"]}},computed:{filterName:{get(){return this.$store.state.filterName},set(t){this.updateFilterName(t)}},filterRegion:{get(){return this.$store.state.filterRegion},set(t){this.updateFilterRegion(t)}}},methods:{...(0,f.OI)(["updateFilterName","updateFilterRegion"])},watch:{filterRegion:function(t){""===t?this.$router.push({path:"/"}):(this.$route.query.region=null,this.$router.push({query:{region:t}}))}},mounted:function(){if(this.$route.query.region){let t=this.$route.query.region.toLowerCase();this.regions.includes(t)?this.updateFilterRegion(t):(this.updateFilterRegion(""),this.$router.push({path:"/"}))}}};const O=(0,y.Z)($,[["render",S],["__scopeId","data-v-8ba0852e"]]);var j=O;const T=t=>((0,a.dD)("data-v-bbc2bae0"),t=t(),(0,a.Cn)(),t),U=["src","alt"],q=["textContent"],P=T((()=>(0,a._)("span",null,"Population: ",-1))),W=["textContent"],H=T((()=>(0,a._)("span",null,"Region: ",-1))),E=["textContent"],Z=T((()=>(0,a._)("span",null,"Capital: ",-1))),K=["textContent"];function Y(t,n,e,o,r,i){const c=(0,a.up)("router-link");return i.filtration?((0,a.wg)(),(0,a.j4)(c,{key:0,to:{name:"details",params:{name:e.countryData.name}}},{default:(0,a.w5)((()=>[(0,a._)("section",null,[(0,a._)("img",{src:i.countryFlagSrc,alt:`${e.countryData.name} flag`},null,8,U),(0,a._)("div",null,[(0,a._)("h4",{textContent:(0,u.zw)(e.countryData.name)},null,8,q),(0,a._)("div",null,[P,(0,a._)("span",{textContent:(0,u.zw)(i.countryPopulation)},null,8,W)]),(0,a._)("div",null,[H,(0,a._)("span",{textContent:(0,u.zw)(e.countryData.region)},null,8,E)]),(0,a._)("div",null,[Z,(0,a._)("span",{textContent:(0,u.zw)(e.countryData.capital||"No Capital")},null,8,K)])])])])),_:1},8,["to"])):(0,a.kq)("",!0)}e(2087);var V={name:"CountryBox",props:["countryData"],computed:{...(0,f.rn)(["filterName","filterRegion"]),filtration:function(){return!(!new RegExp(this.filterName,"ig").test(this.countryData.name)||!new RegExp(this.filterRegion,"ig").test(this.countryData.region)&&""!==this.filterRegion)},countryFlagSrc:function(){return this.countryData.flags.png.replace("w320","h120")},countryPopulation:function(){return this.countryData.population.toLocaleString()}}};const A=(0,y.Z)(V,[["render",Y],["__scopeId","data-v-bbc2bae0"]]);var G=A,J={name:"HomeView",computed:{...(0,f.rn)(["countries"])},methods:{...(0,f.nv)(["fetchCountries"])},mounted(){this.fetchCountries()},components:{CountryBox:G,FiltrationTools:j}};const Q=(0,y.Z)(J,[["render",R],["__scopeId","data-v-e44e7378"]]);var X=Q;const tt=t=>((0,a.dD)("data-v-61453cfe"),t=t(),(0,a.Cn)(),t),nt={class:"details"},et={class:"container"},ot={key:0,class:"main-content"},at=["src","alt"],rt=["textContent"],it={class:"main-info"},ut=["textContent"],ct=["textContent"],lt=["textContent"],st=["textContent"],dt={key:0},pt=["textContent"],ft=["textContent"],mt={key:0},gt=["textContent"],ht=["textContent"],yt={key:0,class:"borders"},vt=tt((()=>(0,a._)("span",null,"Border Countries:",-1))),_t=["textContent"];function wt(t,n,e,o,r,i){const c=(0,a.up)("font-awesome-icon"),l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",nt,[(0,a._)("div",et,[(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a._)("button",null,[(0,a.Wm)(c,{icon:"fa-solid fa-arrow-left-long"}),(0,a.Uk)("Back ")])])),_:1}),t.countryInfo.name?((0,a.wg)(),(0,a.iD)("div",ot,[(0,a._)("img",{src:i.countryFlagSrc,alt:`${t.countryInfo.name} flag`},null,8,at),(0,a._)("div",null,[(0,a._)("h2",{textContent:(0,u.zw)(t.countryInfo.name)},null,8,rt),(0,a._)("div",it,[(0,a._)("div",null,[(0,a._)("span",null,[(0,a.Uk)("Native Name:"),(0,a._)("span",{textContent:(0,u.zw)(t.countryInfo.nativeName)},null,8,ut)]),(0,a._)("span",null,[(0,a.Uk)("Population:"),(0,a._)("span",{textContent:(0,u.zw)(i.countryPopulation)},null,8,ct)]),(0,a._)("span",null,[(0,a.Uk)("Region:"),(0,a._)("span",{textContent:(0,u.zw)(t.countryInfo.region)},null,8,lt)]),(0,a._)("span",null,[(0,a.Uk)("Sub Region:"),(0,a._)("span",{textContent:(0,u.zw)(t.countryInfo.subregion)},null,8,st)]),t.countryInfo.capital?((0,a.wg)(),(0,a.iD)("span",dt,[(0,a.Uk)("Capital:"),(0,a._)("span",{textContent:(0,u.zw)(t.countryInfo.capital)},null,8,pt)])):(0,a.kq)("",!0)]),(0,a._)("div",null,[(0,a._)("span",null,[(0,a.Uk)("Top Level Domain: "),(0,a._)("span",{textContent:(0,u.zw)(i.countryTopLevelDomain)},null,8,ft)]),t.countryInfo.currencies?((0,a.wg)(),(0,a.iD)("span",mt,[(0,a.Uk)("Currencies:"),(0,a._)("span",{textContent:(0,u.zw)(i.countryCurrencies)},null,8,gt)])):(0,a.kq)("",!0),(0,a._)("span",null,[(0,a.Uk)("Languages:"),(0,a._)("span",{textContent:(0,u.zw)(i.countryLanguages)},null,8,ht)])])]),t.countryInfo.borders?((0,a.wg)(),(0,a.iD)("div",yt,[vt,(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.countryBorders,(t=>((0,a.wg)(),(0,a.iD)("span",{key:t,textContent:(0,u.zw)(t)},null,8,_t)))),128))])])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)])])}var Ct={data:function(){return{countryName:this.$route.params.name.toLowerCase(),countryInfo:""}},computed:{...(0,f.rn)(["countries"]),countryFlagSrc:function(){return this.countryInfo.flags.png.replace("w320","h120")},countryPopulation:function(){return this.countryInfo.population.toLocaleString()},countryTopLevelDomain:function(){return this.countryInfo.topLevelDomain.join(", ")},countryCurrencies:function(){return this.countryInfo.currencies.map((t=>t.name)).join(", ")},countryLanguages:function(){return this.countryInfo.languages.map((t=>t.name)).join(", ")},countryBorders:function(){return this.countryInfo.borders.map((t=>this.countries.filter((n=>n.alpha3Code===t)))).map((t=>t[0].name))}},methods:{...(0,f.nv)(["fetchCountries"])},mounted(){this.fetchCountries().then((()=>{let t=this.countries.map((t=>t.name.toLowerCase()));t.includes(this.countryName)?this.countryInfo=this.countries.filter((t=>t.name.toLowerCase()===this.countryName))[0]:this.$router.push({path:"/"})})).catch((t=>console.log(Error(t))))}};const Dt=(0,y.Z)(Ct,[["render",wt],["__scopeId","data-v-61453cfe"]]);var xt=Dt;const kt=[{path:"/",name:"home",component:X},{path:"/details/:name",name:"details",component:xt},{path:"/:catchAll(.*)",redirect:"/"}],bt=(0,x.p7)({history:(0,x.PO)("/"),routes:kt});var It=bt,Rt={namespaced:!0,strict:!0,state:{mode:"",modeButton:""},getters:{},mutations:{updateMode:function(t){t.mode=localStorage.mode&&"Light"!==localStorage.mode?"Dark":"Light"},updateModeButton:function(t){t.modeButton="Light"===t.mode?"Dark":"Light"},changeMode:function(t){t.mode=localStorage.mode&&"Light"!==localStorage.mode?"Light":"Dark"}}},Lt=(0,f.MT)({strict:!0,namespaced:!0,state:{countryData:"",filterName:"",filterRegion:"",countries:[]},mutations:{updateCountryData:function(t,n){t.countryData=n},updateFilterName:function(t,n){t.filterName=n},updateFilterRegion:function(t,n){t.filterRegion=n},updateCountries:function(t,n){t.countries=n}},actions:{fetchCountries:function({commit:t}){fetch("https://restcountries.com/v2/all").then((t=>t.json())).then((n=>t("updateCountries",n))).catch((t=>console.log(Error(t))))}},modules:{modeType:Rt}}),Nt=e(3494),Ft=e(7749),Mt=e(8539),zt=e(8429),Bt=e(4551);Nt.vI.add(Bt.mdU,zt.DBF,Mt.Y$T,Mt.gc2,Mt.wK6);var St=Ft.GN;(0,o.ri)(D).use(Lt).use(It).component("font-awesome-icon",St).mount("#app")}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,r){if(!o){var i=1/0;for(s=0;s<t.length;s++){o=t[s][0],a=t[s][1],r=t[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(u=!1,r<i&&(i=r));if(u){t.splice(s--,1);var l=a();void 0!==l&&(n=l)}}return n}r=r||0;for(var s=t.length;s>0&&t[s-1][2]>r;s--)t[s]=t[s-1];t[s]=[o,a,r]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,r,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(n){return 0!==t[n]}))){for(a in u)e.o(u,a)&&(e.m[a]=u[a]);if(c)var s=c(e)}for(n&&n(o);l<i.length;l++)r=i[l],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(s)},o=self["webpackChunk_4_vue3"]=self["webpackChunk_4_vue3"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7759)}));o=e.O(o)})();
//# sourceMappingURL=app.cef4d0d0.js.map