"use strict";(self.webpackChunksocial_network_react=self.webpackChunksocial_network_react||[]).push([[33],{6033:(e,s,a)=>{a.r(s),a.d(s,{default:()=>z});var r=a(3003),o=a(3923),t=a(8243),n=a(5043),i=a(3216),l=a(5475),m=a(6968);const d={dialog:"DialogItem_dialog__-LAje",active:"DialogItem_active__rLZXK",dialogText:"DialogItem_dialogText__6FsXj",imgContainer:"DialogItem_imgContainer__dknC7",userImg:"DialogItem_userImg__jfMmZ",preview:"DialogItem_preview__FxNLH",userName:"DialogItem_userName__lsUAQ"};var c=a(579);const g=(0,m.G)(d),_=e=>{let{id:s,userImg:a,userName:r,messagePreview:o}=e;const t="/dialogs/".concat(s);return(0,c.jsxs)(l.k2,{to:t,className:e=>g(["dialog"],e),children:[(0,c.jsx)("div",{className:d.imgContainer,children:(0,c.jsx)("img",{className:d.userImg,src:a,alt:"user"})}),(0,c.jsxs)("div",{className:d.dialogText,children:[(0,c.jsx)("div",{className:d.preview,children:(0,c.jsx)("span",{className:d.userName,children:r})}),(0,c.jsx)("div",{className:d.preview,children:(0,c.jsx)("span",{className:d.lastMessage,children:o})})]})]})},u=(0,r.Ng)(((e,s)=>({id:s.dialogItemInfo.id,userName:s.dialogItemInfo.userName,userImg:s.dialogItemInfo.userImg,messagePreview:s.dialogItemInfo.messages[0].text})))(_),x="Dialogs_dialogs__ehYCe",h="Dialogs_dialogContainer__Gm4+k",j="Dialogs_dialogHeader__m79TA",N="Dialogs_dialogHeaderText__Wjb7W",p="Dialogs_dialogItems__DX2f-";var I=a(7762),v=a(3842),f=a(5963);const C=a.p+"static/media/send.135df727ecba31ee5980e5033ee2bf99.svg";var b=a(4971),M=a(6244);const k="AddMessageForm_writingPanel__DfGNr",w="AddMessageForm_inputWrapper__bPJhv",y="AddMessageForm_sendButtonContainer__IYkaU",A=e=>{let{onKeyUp:s,handleSubmit:a}=e;return(0,c.jsx)("form",{onKeyUp:e=>{s(e,a)},onSubmit:a,children:(0,c.jsxs)("div",{className:k,children:[(0,c.jsx)("div",{className:w,children:(0,c.jsx)(f.A,{name:"newMessageBody",component:M.f,maxRows:12,placeholder:"Write your message...",validate:[b.Q]})}),(0,c.jsx)("button",{className:y,children:(0,c.jsx)("img",{src:C,alt:""})})]})})};class D extends n.Component{constructor(){super(...arguments),this.onKeyUp=(e,s)=>{"Enter"!==e.key||e.shiftKey||s(e)}}render(){return(0,c.jsx)(A,{...this.props,onKeyUp:this.onKeyUp})}}const F=(0,o.Zz)((0,v.A)({form:"messages"}))(D),P={message:"Message_message__9dHgH",messageImgContainer:"Message_messageImgContainer__mmlOu",textContainer:"Message_textContainer__PuHc8",textBlock:"Message_textBlock__bdYE9",userName:"Message_userName__r9oqn"},H=e=>{let{userImg:s,userName:a,text:r}=e;return(0,c.jsxs)("div",{className:P.message,children:[(0,c.jsx)("div",{className:P.messageImgContainer,children:(0,c.jsx)("img",{src:s,alt:"user"})}),(0,c.jsxs)("div",{className:P.textContainer,children:[(0,c.jsx)("div",{className:P.textHeader,children:(0,c.jsx)("span",{className:P.userName,children:a})}),(0,c.jsx)("div",{className:P.textBlock,children:(0,c.jsx)("p",{children:r})})]})]})},E=(0,r.Ng)(null)(H),L="MessagesPanel_messageContainer__i9dAQ",S="MessagesPanel_messageHeader__Ur5ZZ",U="MessagesPanel_messageHeaderText__qkkt2",B="MessagesPanel_userImg__JX9pb",K="MessagesPanel_messageItems__TmaQ3",T="MessagesPanel_messagesEnd__hS6tc",X=e=>{let{messages:s,myName:a,myImage:r,userName:o,userImg:t,id:i,onSubmit:l}=e;const m=n.createRef(),d=s.map((e=>{const n=e.your?a:o,i=e.your?r:t;return(0,c.jsx)(E,{...e,userName:n,userImg:i,messages:s},e.id)}));return(0,c.jsxs)("div",{onLoad:()=>{m.current.scrollIntoView({block:"end"})},className:L,children:[(0,c.jsxs)("header",{className:S,children:[(0,c.jsx)("span",{className:U,children:o}),(0,c.jsx)("img",{className:B,src:t,alt:"user"})]}),(0,c.jsxs)("div",{className:K,children:[d,(0,c.jsx)("div",{ref:m,className:T})]}),(0,c.jsx)(F,{onSubmit:l},i)]})};class Z extends n.Component{constructor(){super(...arguments),this.onSubmit=e=>{this.props.sendMessage(this.props.id,e.newMessageBody)}}render(){return(0,c.jsx)(X,{...this.props,onSubmit:this.onSubmit})}}const Q=(0,o.Zz)((0,r.Ng)(((e,s)=>({...s.dialogItemInfo,myImage:e.auth.image,myName:e.auth.login})),{sendMessage:I._z}))(Z),q=e=>{let{dialogs:s}=e;const a=[],r=[];return null===s||void 0===s||s.forEach((e=>{a.push((0,c.jsx)(u,{dialogItemInfo:e},e.id)),r.push((0,c.jsx)(i.qh,{path:"/"+e.id,element:(0,c.jsx)(Q,{id:e.id,dialogItemInfo:e})},e.id))})),(0,c.jsxs)("main",{className:x,children:[(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)("header",{className:j,children:(0,c.jsx)("span",{className:N,children:"All Dialogs"})}),(0,c.jsx)("div",{className:p,children:a})]}),(0,c.jsx)(i.BV,{children:r})]})},z=(0,o.Zz)(t.A,(0,r.Ng)((e=>({dialogs:e.dialogs.dialogs}))))(q)},6244:(e,s,a)=>{a.d(s,{f:()=>d,p:()=>g});var r=a(978),o=a(6968),t=a(8304),n=a(579);const i=(0,o.G)(t.A),l=e=>s=>{let{input:a,meta:r,hasError:o,...t}=s;return(0,n.jsxs)("div",{className:i(["form-control",o?"error":""]),children:[(0,n.jsx)(e,{...a,...t}),t.labelext&&(0,n.jsx)("label",{htmlFor:t.id,children:t.labelext}),o&&(0,n.jsx)("span",{className:i("error-message"),children:null===r||void 0===r?void 0:r.error})]})},m=l(r.A),d=e=>{let{maxRows:s,meta:a,...r}=e;return(0,n.jsx)(m,{...r,className:i("text-area"),maxRows:s,meta:a,hasError:a.submitFailed})},c=l("input"),g=e=>{let{meta:s,...a}=e;return(0,n.jsx)(c,{...a,meta:s,hasError:s.touched&&s.error})}},8243:(e,s,a)=>{a.d(s,{A:()=>n});a(5043);var r=a(3003),o=a(3216),t=a(579);const n=e=>(0,r.Ng)(((e,s)=>{var a;return{isLoggedIn:e.auth.isLoggedIn,userId:null===(a=s.router)||void 0===a?void 0:a.params.userId}}))((s=>s.isLoggedIn||s.userId?(0,t.jsx)(e,{...s}):(0,t.jsx)(o.C5,{to:"/login"})))},4971:(e,s,a)=>{a.d(s,{Q:()=>r});const r=e=>{if(!e)return"Field is required"}},8304:(e,s,a)=>{a.d(s,{A:()=>r});const r={"form-control":"FormsControls_form-control__Xs-2k",error:"FormsControls_error__XpDEH","error-message":"FormsControls_error-message__ervNF","text-area":"FormsControls_text-area__1PpLI","sum-error-container":"FormsControls_sum-error-container__O0jAX"}}}]);
//# sourceMappingURL=33.d21c0560.chunk.js.map