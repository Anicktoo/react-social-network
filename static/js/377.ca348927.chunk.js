(self.webpackChunksocial_network_react=self.webpackChunksocial_network_react||[]).push([[377],{3377:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>K});var a=s(5043),r=s(3003),o=s(3923),n=s(7893),i=s(2611),c=s(3216),l=s(579);var u=s(8243),p=s(6968),d=s(6497);const m=s.p+"static/media/confirm.113547f930901328c4c32245200c1723.svg",h=(0,p.G)({"about-container":"ProfileStatus_about-container__PGCwY",about:"ProfileStatus_about__fD1oT","about-input":"ProfileStatus_about-input__dLmE8",confirm:"ProfileStatus_confirm__MSZXH"}),_=t=>{let{aboutMe:e,updateUserStatus:s}=t;const[r,o]=(0,a.useState)(!1),[n,i]=(0,a.useState)(e),[c,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{(new Image).src=m}),[]),(0,a.useEffect)((()=>{i(e),u(!1)}),[e]);const p=()=>{s(n),o(!1),u(!0)};return(0,l.jsx)("div",{className:h("about-container"),children:c?(0,l.jsx)(d.A,{content:"#".repeat(20)}):r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{autoFocus:!0,onBlur:()=>{o(!1),i(e)},onInput:t=>{i(t.target.value)},onKeyUp:t=>"Enter"===t.key&&p(),className:h("about-input"),type:"text",value:n||""}),(0,l.jsx)("button",{onMouseDown:t=>{t.preventDefault()},onClick:p,className:h("confirm"),children:(0,l.jsx)("img",{src:m,alt:"confirm"})})]}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("span",{onClick:()=>{o(!0)},className:h("about"),children:e||"Add your status"})})})},x=(0,p.G)({"account-data":"AccountData_account-data__htMro",wallpaper:"AccountData_wallpaper__TsWU7","wallpaper-default":"AccountData_wallpaper-default__a0pYt","info-container":"AccountData_info-container__FziZa",avatar:"AccountData_avatar__M6EBp",info:"AccountData_info__aSCr7","info-header":"AccountData_info-header__P-3nW","info-data-additional":"AccountData_info-data-additional__2ZScn","info-contacts":"AccountData_info-contacts__Du8TY"});let f;try{f=function(t){const e=t.keys().map((e=>[e.split(/\.\/?/)[1],t(e)]));return Object.fromEntries(e)}(s(1048))}catch(O){if(!(O instanceof TypeError))throw O;f=[]}const g=t=>{let{isFetching:e,photos:s,fullName:a,aboutMe:r,updateUserStatus:o,contacts:n}=t;const i=e?(0,l.jsx)(d.A,{}):s.wallpaper?(0,l.jsx)("img",{src:s.wallpaper,alt:"user's background wallpaper"}):(0,l.jsx)("div",{className:x(["wallpaper-default"])});return(0,l.jsxs)("div",{className:x(["account-data"]),children:[(0,l.jsx)("div",{className:x(["wallpaper"]),children:i}),(0,l.jsxs)("div",{className:x(["info-container"]),children:[(0,l.jsx)("div",{className:x(["avatar"]),children:e?(0,l.jsx)(d.A,{}):(0,l.jsx)("img",{src:s.large,alt:"user's avatar"})}),(0,l.jsxs)("div",{className:x(["info"]),children:[e?(0,l.jsx)(d.A,{content:"#".repeat(20)}):(0,l.jsx)("span",{className:x(["info-header","name"]),children:a}),(0,l.jsx)("div",{className:x(["info-data-additional"]),children:e?(0,l.jsx)(d.A,{content:"#".repeat(20)}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_,{aboutMe:r,updateUserStatus:o}),(0,l.jsx)("div",{className:x(["info-contacts"]),children:Object.entries(n).filter((t=>t[1])).map((t=>{const e=f[t[0]];return(0,l.jsx)("a",{href:t[1],children:(0,l.jsx)("img",{src:e,alt:t[0]})})}))})]})})]})]})]})},v={"new-post":"NewPost_new-post__Jp3Od",imageContainer:"NewPost_imageContainer__reSEn"};var j=s(3842),b=s(5963),w=s(6244),N=s(4971);const F=(0,p.G)({"new-post-wrapper":"NewPostForm_new-post-wrapper__cIu88"}),S=t=>{let{onKeyUp:e,handleSubmit:s,isFetching:a}=t;return(0,l.jsxs)("form",{onKeyUp:t=>{e(t,s)},onSubmit:s,className:F("new-post-wrapper"),children:[(0,l.jsx)(b.A,{name:"newPostText",component:w.f,validate:[N.Q],placeholder:"Write your post..."}),(0,l.jsx)("button",{disabled:a,className:F("mainButton"),children:"Send "})]})};class A extends a.Component{constructor(){super(...arguments),this.onKeyUp=(t,e)=>{"Enter"!==t.key||t.shiftKey||e(t)}}render(){return(0,l.jsx)(S,{...this.props,onKeyUp:this.onKeyUp,isFetching:this.props.isFetching})}}const P=(0,o.Zz)((0,j.A)({form:"newPost"}))(A),k=(0,p.G)(v),I=t=>{let{isFetching:e,photo:s,onSubmit:a}=t;return(0,l.jsxs)("article",{className:k(["new-post","stdBlock"]),children:[(0,l.jsx)("div",{className:v.imageContainer,children:e?(0,l.jsx)(d.A,{styles:{minHeight:"50px"}}):(0,l.jsx)("img",{src:s,alt:"profile avatar"})}),(0,l.jsx)(P,{isFetching:e,onSubmit:a})]})};class y extends a.Component{constructor(){super(...arguments),this.onSubmit=t=>{this.props.addPost(t.newPostText)}}render(){return(0,l.jsx)(I,{...this.props,onSubmit:this.onSubmit})}}const C=(0,o.Zz)((0,r.Ng)(null,{addPost:i.SD}))(y),U={post:"Post_post__QP-CE",imageContainer:"Post_imageContainer__EIrBF",content:"Post_content__LE9Id",text:"Post_text__MfAnn"},D=(0,p.G)(U),E=t=>{let{avatarImgSrc:e,text:s,likes:a}=t;return(0,l.jsxs)("article",{className:D(["post","stdBlock"]),children:[(0,l.jsx)("div",{className:U.imageContainer,children:(0,l.jsx)("img",{src:e,alt:"profile avatar"})}),(0,l.jsxs)("div",{className:U.content,children:[(0,l.jsx)("p",{className:U.text,children:s}),(0,l.jsxs)("p",{className:U.likes,children:["likes: ",a]})]})]})},M="Posts_posts__jBKNk",T=a.memo((t=>{let{posts:e,photo:s,isFetching:a}=t;return(0,l.jsx)("div",{className:M,children:a?Array(2).join(",").split(",").map((t=>(0,l.jsx)(d.A,{classes:["stdBlock"],styles:{minHeight:"200px"}}))):(null===e||void 0===e?void 0:e.map((t=>(0,l.jsx)(E,{...t,avatarImgSrc:s},t.id)))).reverse()})})),G=(0,p.G)({profile:"Profile_profile__TmRFi"}),L=t=>{let{accountInfo:e,common:s,updateUserStatus:a,isFetching:r,newPost:o,addPost:n,changeTextInput:i,posts:c}=t;return(0,l.jsxs)("main",{className:G(["profile"]),children:[(0,l.jsx)(g,{...e,...s,updateUserStatus:a,isFetching:r}),(0,l.jsx)(C,{...o,photo:s.photos.small,addPost:n,changeTextInput:i,isFetching:r}),(0,l.jsx)(T,{posts:c,photo:s.photos.small,isFetching:r})]})};class B extends a.Component{constructor(){super(...arguments),this.state={isFetching:!1}}componentDidMount(){var t;const e=null!==(t=this.props.router.params.userId)&&void 0!==t?t:this.props.userId;this.props.getUserProfile(e),this.props.getUserStatus(e),this.setState({isFetching:!0})}componentDidUpdate(){this.state.isFetching&&this.props.common.photos.small&&this.props.common.photos.wallpaper&&null!==this.props.accountInfo.aboutMe&&this.setState({isFetching:!1})}render(){return(0,l.jsx)(L,{...this.props,isFetching:this.state.isFetching})}}const K=(0,o.Zz)((function(t){return function(e){let s=(0,c.zy)(),a=(0,c.Zp)(),r=(0,c.g)();return(0,l.jsx)(t,{...e,router:{location:s,navigate:a,params:r}})}}),u.A,(0,r.Ng)((function(t){var e,s,a;return{userId:t.auth.id,common:{photos:{small:(null===(e=t.profile.accountInfo.photos)||void 0===e?void 0:e.small)||n.A,large:(null===(s=t.profile.accountInfo.photos)||void 0===s?void 0:s.large)||n.A,wallpaper:null===(a=t.profile.accountInfo.photos)||void 0===a?void 0:a.wallpaper}},accountInfo:t.profile.accountInfo,posts:t.profile.posts}}),{getUserProfile:i.VM,getUserStatus:i.CD,updateUserStatus:i.pU}))(B)},6244:(t,e,s)=>{"use strict";s.d(e,{f:()=>u,p:()=>d});var a=s(978),r=s(6968),o=s(8304),n=s(579);const i=(0,r.G)(o.A),c=t=>e=>{let{input:s,meta:a,hasError:r,...o}=e;return(0,n.jsxs)("div",{className:i(["form-control",r?"error":""]),children:[(0,n.jsx)(t,{...s,...o}),o.labelext&&(0,n.jsx)("label",{htmlFor:o.id,children:o.labelext}),r&&(0,n.jsx)("span",{className:i("error-message"),children:null===a||void 0===a?void 0:a.error})]})},l=c(a.A),u=t=>{let{maxRows:e,meta:s,...a}=t;return(0,n.jsx)(l,{...a,className:i("text-area"),maxRows:e,meta:s,hasError:s.submitFailed})},p=c("input"),d=t=>{let{meta:e,...s}=t;return(0,n.jsx)(p,{...s,meta:e,hasError:e.touched&&e.error})}},6497:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});var a=s(6968);var r=s(579);const o=(0,a.G)({preloader:"Preloader_preloader__br+S7","gradient-move":"Preloader_gradient-move__QAPAx"}),n=t=>{let{content:e,styles:s,classes:a,...n}=t;return(0,r.jsx)("div",{style:s,className:o(["preloader"].concat(a)),children:e})}},8243:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});s(5043);var a=s(3003),r=s(3216),o=s(579);const n=t=>(0,a.Ng)(((t,e)=>{var s;return{isLoggedIn:t.auth.isLoggedIn,userId:null===(s=e.router)||void 0===s?void 0:s.params.userId}}))((e=>e.isLoggedIn||e.userId?(0,o.jsx)(t,{...e}):(0,o.jsx)(r.C5,{to:"/login"})))},4971:(t,e,s)=>{"use strict";s.d(e,{Q:()=>a});const a=t=>{if(!t)return"Field is required"}},8304:(t,e,s)=>{"use strict";s.d(e,{A:()=>a});const a={"form-control":"FormsControls_form-control__Xs-2k",error:"FormsControls_error__XpDEH","error-message":"FormsControls_error-message__ervNF","text-area":"FormsControls_text-area__1PpLI","sum-error-container":"FormsControls_sum-error-container__O0jAX"}},1048:(t,e,s)=>{var a={"./facebook.svg":4787,"./github.svg":8102,"./instagram.svg":8001,"./mainLink.svg":5616,"./twitter.svg":396,"./vk.svg":1098,"./website.svg":9918,"./youtube.svg":8690};function r(t){var e=o(t);return s(e)}function o(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id=1048},4787:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/facebook.4b266d41aedcba79b84b.svg"},8102:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/github.197212f02efa31cf1fd6.svg"},8001:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/instagram.b0a8a3456356050f7aa0.svg"},5616:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/mainLink.73cb443074333541775b.svg"},396:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/twitter.ca6dab938465408e4613.svg"},1098:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/vk.850582a3eb51b1cf13d4.svg"},9918:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/website.5a5945c95c305e75bbb6.svg"},8690:(t,e,s)=>{"use strict";t.exports=s.p+"static/media/youtube.685ede8fb2433895a359.svg"}}]);
//# sourceMappingURL=377.ca348927.chunk.js.map