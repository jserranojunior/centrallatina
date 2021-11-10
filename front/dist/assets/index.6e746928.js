var O=Object.defineProperty,q=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var S=(e,t,a)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))K.call(t,a)&&S(e,a,t[a]);if(R)for(var a of R(t))X.call(t,a)&&S(e,a,t[a]);return e},w=(e,t)=>q(e,G(t));var u=(e,t,a)=>(S(e,typeof t!="symbol"?t+"":t,a),a);import{a as B,_ as h,o as d,c as m,b as E,r as v,d as C,e as l,t as y,f as x,i as N,n as Y,g as T,h as A,j as U,w as $,k as H,l as J,m as Q,p as _,q as Z,s as ee,u as te}from"./vendor.8f242bd7.js";const ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}};ae();class g{constructor(){u(this,"token");u(this,"axiosImage");u(this,"axiosWithoutToken");u(this,"axiosInstance");u(this,"backApiUrl");u(this,"axios");this.token=localStorage.getItem("token"),this.backApiUrl="https://goalbank.alvitre.com.br",console.log(this.backApiUrl),this.axios=B,this.axiosImage=this.axios.create({baseURL:this.backApiUrl,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}),this.axiosWithoutToken=this.axios.create({baseURL:this.backApiUrl}),this.axiosInstance=this.axios.create({baseURL:this.backApiUrl,headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}})}async get(t){return this.axiosInstance.get(t)}async post(t,a){return this.axiosInstance.post(t,a)}async put(t,a){return this.axiosInstance.put(t,a)}async patch(t,a){return this.axiosInstance.patch(t,a)}async delet(t){return this.axiosInstance.delete(t)}async postimage(t,a){return this.axiosImage.post(t,a)}async getWithoutToken(t){return this.axiosWithoutToken.get(t)}async postWithoutToken(t,a){return this.axiosWithoutToken.post(t,a)}async putWithoutToken(t,a){return this.axiosWithoutToken.put(t,a)}}class se{async login(t){const a=new g,o="/login";return a.postWithoutToken(o,t)}async register(t){const a=new g,o="/user";return a.postWithoutToken(o,t)}async getUser(){const t=new g,a="/user";return t.get(a)}}function j(e){if(e){const t=e.split("/")[0],a=e.split("/")[1];return e.split("/")[2]+"-"+("0"+a).slice(-2)+"-"+("0"+t).slice(-2)}else return e}function P(e){if(e){const t=e.split("-")[2],a=e.split("-")[1],o=e.split("-")[0];return("0"+t).slice(-2)+"/"+("0"+a).slice(-2)+"/"+o}else return e}const oe={name:"NotFound"},ne=E('<div class="gradient text-white mt-24 flex items-center"><div class="container mx-auto p-4 flex flex-wrap items-center"><div class="w-full md:w-5/12 text-center p-4"><img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=396&amp;q=80" alt="Not Found"></div><div class="w-full md:w-7/12 text-center md:text-left p-4"><div class="text-6xl font-medium">404</div><div class="text-xl md:text-2xl font-medium mb-4"> Oops. Est\xE1 pagina n\xE3o existe. </div><div class="text-lg mb-8"> Voc\xEA pode ter cometido um erro ou est\xE1 pagina foi removida. </div><a href="/" class="border border-white rounded p-4">IR PARA A HOME</a></div></div></div>',1),re=[ne];function ie(e,t,a,o,s,n){return d(),m("div",null,re)}var ce=h(oe,[["render",ie]]);const le={components:{},data(){return{}},methods:{closeSidebar(){if(document.querySelector(".sidebar")){const e=document.querySelector(".sidebar");localStorage.getItem("sidebar")==="sidebar-open"&&e&&(localStorage.sidebar="sidebar-close",e.classList.remove("sidebar-open"),e.classList.add("sidebar-close"))}},closeSidebarBodyClick(){if(document.querySelector(".sidebar")){const e=localStorage.getItem("sidebar");window.screen.width<768&&e==="sidebar-open"&&this.closeSidebar()}}}},ue={class:"dark:bg-gray-900 dark:text-gray-100"},de={key:0},pe={class:"flex w-full bg-white text-dark dark:bg-gray-700 dark:text-gray-100"},he={key:0,class:"sidebar w-64 z-10 absolute md:static text-dark p-1 dark:bg-gray-700 dark:text-gray-100 no-print bg-albank-2 border-r-2 border-yellow-600"},me={class:"flex flex-wrap items-center p-1 text-sm"},ge={key:0};function fe(e,t,a,o,s,n){return d(),m("div",ue,[e.$slots.header?(d(),m("nav",de,[v(e.$slots,"header")])):C("",!0),l("div",pe,[e.$slots.sidebar?(d(),m("div",he,[l("div",me,[v(e.$slots,"sidebar")])])):C("",!0),l("div",{class:"w-full z-0 absolute md:static bg-albank-2 text-white dark:bg-gray-600 dark:text-gray-100",onClick:t[0]||(t[0]=r=>n.closeSidebarBodyClick())},[v(e.$slots,"mainpage")])]),l("div",null,[e.$slots.footer?(d(),m("nav",ge,[v(e.$slots,"footer")])):C("",!0)])])}var be=h(le,[["render",fe]]);const V=()=>{const e=x({closeSidebar:t,open:!1});function t(){const a=document.getElementById("sidebar");a?a.classList.toggle("hidden"):console.log("notion")}return y(e)};var z="/assets/logo.44e5e661.jpg";const ke={setup(){const e=N("auth"),{closeSidebar:t,open:a}=V(),{Logout:o,auth:s,fields:n}=e;return{Logout:o,auth:s,closeSidebar:t,open:a,fields:n}}},we=l("div",{class:"flex bg-central-1 p-5"},[l("div",{class:"ml-auto"},[l("img",{width:"50",src:z,alt:""})]),l("div",{class:"text-white text-center align-middle mr-auto my-auto text-sm"},[l("p",{class:"pl-6"},"Central Latina \xAE| 2021 - Direitos reservados")])],-1),ye=[we];function xe(e,t,a,o,s,n){return d(),m("div",null,ye)}var _e=h(ke,[["render",xe]]);const Ie={setup(){const e=N("auth"),{closeSidebar:t,open:a}=V(),{Logout:o,auth:s,fields:n}=e;return{Logout:o,auth:s,closeSidebar:t,open:a,fields:n}}},ve=l("div",{class:"flex flex-wrap bg-central-1 p-5"},[l("div",{class:"ml-auto"},[l("img",{width:"100",src:z,alt:""})]),l("div",{class:"text-white text-center align-middle mr-auto my-auto"},[l("p",{class:"pl-6 text-sm"},[l("i",{class:"far fa-clock text-central-2 ml-2"}),T(" SEG-SAB DAS 8:00 AS 18:00 "),l("i",{class:"fas fa-map-marker-alt text-central-2 ml-2"}),T(" Coimbra,435-Br\xE1s Cep:03052-030 "),l("i",{class:"fab fa-whatsapp text-central-2 ml-2"}),T(" (11) 984526015 ")])])],-1),Ae={class:"flex flex-wrap justify-between items-center mx-2 my-1 border-gray-800 border-t border-b"},$e={class:"w-full mx-auto bg-white"},Se=E('<a href="#" class="new-nav-btn"> Albank </a><a href="#" class="new-nav-btn"> Contabilidade </a><a href="#" class="new-nav-btn"> Advocacia </a><a href="#" class="new-nav-btn"> Engenharia </a><a href="#" class="new-nav-btn"> Certificado Digital </a><a href="#" class="new-nav-btn"> Cooperativa </a><a href="#" class="new-nav-btn"> R\xE1dio/TV </a><a href="#" class="new-nav-btn"> Despachante </a><a href="#" class="new-nav-btn"> Corporativa </a><a href="#" class="new-nav-btn"> Projetos </a><a href="#" class="new-nav-btn"> Fale com o Gestor </a>',11),Ce=[Se];function Te(e,t,a,o,s,n){return d(),m("div",null,[ve,l("div",Ae,[l("div",$e,[l("nav",{class:Y("flex flex-wrap justify-between    mx-auto my-auto "+{flex:o.open,hidden:!o.open})},Ce,2)])])])}var Ue=h(Ie,[["render",Te]]);const Le={name:"Cliente",components:{SliferLayout:be,Footer:_e,Navbar:Ue}},We={class:"bg-central-2"};function De(e,t,a,o,s,n){const r=A("Navbar"),c=A("Footer"),p=A("SliferLayout");return d(),U(p,null,{header:$(()=>[H(r)]),mainpage:$(()=>[l("div",We,[v(e.$slots,"cliente")])]),footer:$(()=>[H(c)]),_:3})}var Re=h(Le,[["render",De]]),Be="/assets/banner-home.b479975c.jpeg";const Ee={components:{Cliente:Re}},Ne=l("div",{class:"flex flex-wrap justify-center bg-central-2"},[l("div",{class:"w-full my-12"},[l("img",{class:"mx-auto",src:Be,alt:""})])],-1);function He(e,t,a,o,s,n){const r=A("Cliente");return d(),U(r,null,{cliente:$(()=>[Ne]),_:1})}var je=h(Ee,[["render",He]]);const Pe=[{path:"/:pathMatch(.*)*",name:"NotFound",component:ce},{path:"/",name:"Home",component:je}],f=J({history:Q(),routes:Pe}),L=new se,Ve=()=>{const e=x({ola:"Ola",fields:{email:"",password:""},auth:{erro:"",token:"",data:""},erro:null,loginInputs:{email:"",password:""},registerInputs:{type:"",email:"",password:"",cpf:"",birth_date:"",dtBirth:""},admin:!1,logged:!1,userID:null});async function t(){if(e.auth.erro="",e.auth.data="",e.loginInputs&&e.loginInputs.email&&e.loginInputs.password)return await L.login(e.loginInputs).then(async i=>{i&&i.data&&(console.log(i.data),await r(i.data.token).then(async b=>{console.log("resposta setToken"+b),b&&(e.auth.data="Logado com sucesso!",e.logged=!0,await p().then(async M=>{e.userID=M,await n().then(()=>{f.push({name:"Home"})})}))}),console.log(e.auth.data))}).catch(i=>{console.log("abaixo erro login"),console.log(i.response.data.erro),e.auth.erro=i.response.data.erro,e.logged=!1,e.admin=!1});e.auth.erro="Campos Vazios",r("")}function a(){e.auth.erro="",e.auth.data=""}async function o(){if(e.auth.erro="",e.auth.data="",e.registerInputs&&e.registerInputs.email&&e.registerInputs.password&&e.registerInputs.cpf)return e.registerInputs.dtBirth&&(e.registerInputs.birth_date=j(e.registerInputs.dtBirth)),await L.register(e.registerInputs).then(i=>{i&&i.data&&(e.auth.data="Cadastrado com sucesso!",console.log(e.auth.data))}).catch(i=>{console.log("abaixo erro 2"),console.log(i.response.data.erro),e.auth.erro=i.response.data.erro});e.auth.erro="Campos Vazios",e.registerInputs.birth_date&&(e.registerInputs.birth_date=P(e.registerInputs.birth_date)),r("")}async function s(){if(localStorage.getItem("token")!==e.auth.token){let i;localStorage.getItem("token")!="null"||localStorage.getItem("token")!="undefined"||localStorage.getItem("token")!=null||localStorage.getItem("token")!=null?(i=String(localStorage.getItem("token")),e.logged=!0):(i="",e.logged=!1),await r(i).then(()=>e.auth.token==""?(e.auth.erro="Erro ao fazer login",!1):!0)}if(!e.auth||!e.auth.token||e.auth.token==""||e.auth.token==null||e.auth.token=="undefined"||e.auth.token=="null"||e.auth.token==null||e.auth.token.length==0)return!1;if(e.auth&&e.auth.token!=="")return!0}async function n(){return await s().then(async i=>{if(i)return await p().then(b=>b==2||b==10||b==34?(e.admin=!0,!0):!1)})}async function r(i){return localStorage.setItem("token",i),e.auth.token=i,i?(e.auth.erro="",!0):!1}async function c(){await r("").then(async()=>{e.userID=null,e.admin=!1,e.logged=!1,f.push({name:"Login"})})}async function p(){return await L.getUser().then(i=>{if(i)return e.userID=i.data.data.ID,i.data.data.ID}).catch(i=>{console.log("abaixo erro ao pegar ID usuario"),console.log(i.response.data)})}return w(k({},y(e)),{Logout:c,Login:t,isLogged:s,Register:o,clearMessages:a,isAdmin:n,getUserID:p})};class ze{async SendTokenResetEmail(t){const a=new g,o="/sendemailresetpwd/"+t;return a.getWithoutToken(o)}async getVerifyTokenEmailReset(t){const a=new g,o="/verifytokenemailreset/"+t;return a.getWithoutToken(o)}async setNewPassword(t,a){const o=new g,s="/resetpassword/"+t;return o.putWithoutToken(s,a)}}const W=new ze,Fe=()=>{const e=x({reset:{erro:"",token:"",data:""},email:"",pass:"",verifyToken:!1,updatedUserPassword:!1});async function t(s){if(s>"")return await W.getVerifyTokenEmailReset(s).then(n=>{n&&n.data&&(e.verifyToken=!0),console.log(n)}).catch(n=>{console.log("abaixo erro verify token"),console.log(n.response.data)});console.log(s)}async function a(s){if(s>""&&e.pass>""){const n={password:e.pass};return await W.setNewPassword(s,n).then(r=>{if(console.log(r),r&&r.data&&r.data.data&&r.data.data.ID)return console.log(r.data.data.ID),e.updatedUserPassword=!0,!0}).catch(r=>(console.log("abaixo erro verify token"),console.log(r.response.data.err),e.updatedUserPassword=!1,!1))}else return console.log(s),!1}async function o(){if(e.reset.erro="",e.reset.data="",e.email)return e.reset.data="Enviando e-mail, aguarde...",await W.SendTokenResetEmail(e.email).then(s=>{s&&s.data&&(e.reset.data=s.data.message),console.log(s)}).catch(s=>{console.log("abaixo erro login"),console.log(s.response.data.erro),e.reset.erro=s.response.data.erro});e.reset.erro="Campos Vazios"}return w(k({},y(e)),{sendResetEmail:o,verifyTokenEmailReset:t,updatePassword:a})};class I{constructor(){u(this,"token");u(this,"axiosImage");u(this,"axiosWithoutToken");u(this,"axiosInstance");u(this,"backApiUrl");u(this,"axios");this.token=localStorage.getItem("tokenadm"),this.backApiUrl="https://goalbank.alvitre.com.br",console.log(this.backApiUrl),this.axios=B,this.axiosImage=this.axios.create({baseURL:this.backApiUrl,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}),this.axiosWithoutToken=this.axios.create({baseURL:this.backApiUrl}),this.axiosInstance=this.axios.create({baseURL:this.backApiUrl,headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}})}async get(t){return this.axiosInstance.get(t)}async post(t,a){return this.axiosInstance.post(t,a)}async put(t,a){return this.axiosInstance.put(t,a)}async patch(t,a){return this.axiosInstance.patch(t,a)}async delet(t){return this.axiosInstance.delete(t)}async postimage(t,a){return this.axiosImage.post(t,a)}async getWithoutToken(t){return this.axiosWithoutToken.get(t)}async postWithoutToken(t,a){return this.axiosWithoutToken.post(t,a)}async putWithoutToken(t,a){return this.axiosWithoutToken.put(t,a)}}class Me{async getUserId(t){const a=new I,o="/admin/users/"+t;return a.get(o)}async updateUserId(t){const a=new I,o="/admin/users/"+t.ID;return a.put(o,t)}async getAllUsers(){const t=new I,a="/admin/users";return t.get(a)}}const D=new Me,Oe=()=>{const e=x({users:{},idUserSelected:-0,updateInputs:{type:"",email:"",cpf:"",birth_date:"",dtBirth:"",password:void 0}});async function t(s){return e.idUserSelected=s,await D.getUserId(e.idUserSelected).then(n=>{n&&(e.updateInputs=n.data.data,e.updateInputs.dtBirth=P(n.data.data.birth_date),e.updateInputs.password=void 0,console.log(e.updateInputs),f.push({name:"EditUser"}))}).catch(n=>{console.log("abaixo erro login"),console.log(n.response.data.erro)})}async function a(s,n){return s.birth_date=j(n),e.updateInputs.password=void 0,await D.updateUserId(s).then(r=>{r&&(e.updateInputs=r.data.data,console.log(e.updateInputs),o(),f.push({name:"Users"}))}).catch(r=>{console.log("abaixo erro login"),console.log(r.response.data.erro)})}async function o(){return await D.getAllUsers().then(s=>{s&&(e.users=s.data.data)}).catch(s=>{console.log("abaixo erro login"),console.log(s.response.data.erro)})}return w(k({},y(e)),{getAllUsers:o,selectUser:t,updateUser:a})},qe=()=>{const e=x({bgImagem:"",mobile:!1,linkWhatsApp:"https://web.whatsapp.com/send?phone=5511998068930"});async function t(){navigator.userAgent.toLowerCase().search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!=-1?e.linkWhatsApp="whatsapp://send?phone=5511998068930":e.linkWhatsApp="https://web.whatsapp.com/send?phone=5511998068930"}return w(k({},y(e)),{isMobile:t})};class Ge{async loginadm(t){const a=new I,o="/admin/login";return a.postWithoutToken(o,t)}async register(t){const a=new I,o="/admin/register";return a.postWithoutToken(o,t)}async getAdmin(){const t=new I,a="/admin";return t.get(a)}}const F=new Ge,Ke=()=>{const e=x({fields:{email:"",password:""},authadm:{erro:"",tokenadm:"",data:""},erro:null,loginInputs:{email:"",password:""},logged:!1,userID:null});async function t(){if(e.authadm.erro="",e.authadm.data="",e.loginInputs&&e.loginInputs.email&&e.loginInputs.password)return await F.loginadm(e.loginInputs).then(async c=>{c&&c.data&&(console.log(c.data),await s(c.data.token).then(async p=>{console.log("resposta setToken"+p),p&&(e.authadm.data="Logado com sucesso!",e.authadm.tokenadm&&(e.logged=!0),await r().then(async i=>{e.userID=i,f.push({name:"Admin"})}))}),console.log(e.authadm.data))}).catch(c=>{console.log("abaixo erro login"),console.log(c.response.data.erro),e.authadm.erro=c.response.data.erro,e.logged=!1});e.authadm.erro="Campos Vazios",s("")}function a(){e.authadm.erro="",e.authadm.data=""}async function o(){if(localStorage.getItem("tokenadm")!==e.authadm.tokenadm){let c;localStorage.getItem("tokenadm")!="null"||localStorage.getItem("tokenadm")!="undefined"||localStorage.getItem("tokenadm")!=null||localStorage.getItem("tokenadm")!=null?(c=String(localStorage.getItem("tokenadm")),e.authadm.tokenadm&&(e.logged=!0)):(c="",e.logged=!1),await s(c).then(()=>e.authadm.tokenadm==""?(e.authadm.erro="Erro ao fazer login",!1):!0)}if(!e.authadm||!e.authadm.tokenadm||e.authadm.tokenadm==""||e.authadm.tokenadm==null||e.authadm.tokenadm=="undefined"||e.authadm.tokenadm=="null"||e.authadm.tokenadm==null||e.authadm.tokenadm.length==0)return!1;if(e.authadm&&e.authadm.tokenadm!=="")return!0}async function s(c){return localStorage.setItem("tokenadm",c),e.authadm.tokenadm=c,c?(e.authadm.erro="",!0):!1}async function n(){await s("").then(async()=>{e.userID=null,e.logged=!1,f.push({name:"LoginAdm"})})}async function r(){return await F.getAdmin().then(c=>{if(c)return e.userID=c.data.data.ID,c.data.data.ID}).catch(c=>{console.log("abaixo erro ao pegar ID usuario"),console.log(c.response.data)})}return w(k({},y(e)),{Logout:n,LoginAdm:t,clearMessages:a,getAdminID:r,isLoggedAdm:o})},Xe=new g,Ye=()=>{_("auth",Ve()),_("authadm",Ke()),_("apiconnect",Xe),_("institucional",qe()),_("users",Oe()),_("resetpassword",Fe())};const Je={name:"App",components:{},setup(){Ye()}};function Qe(e,t,a,o,s,n){const r=A("router-view");return d(),U(r)}var Ze=h(Je,[["render",Qe]]);Z(Ze).use(f).use(ee).use(te).mount("#app");
