import{j as s,b as I,c as f,u as j,P as N,d as v,e as M,R as w,a as u,s as P}from"./index-BokavpN7.js";import{M as C}from"./MessageTextarea-DLNbiVni.js";import{a as T}from"./dialogs-selectors-DT3n6bma.js";const A="_chat_d2ply_1",R="_userInfoWrapper_d2ply_25",W="_userInfo_d2ply_25",$="_userName_d2ply_63",E="_date_d2ply_77",S="_messages_d2ply_91",V="_messageItem_d2ply_133",b="_messageArea_d2ply_149",c={chat:A,userInfoWrapper:R,userInfo:W,userName:$,date:E,messages:S,messageItem:V,messageArea:b},k="_message_1ywyy_5",q="_messageText_1ywyy_23",z="_date_1ywyy_31",B="_isRead_1ywyy_41",D="_messageInfo_1ywyy_51",F="_sentMessage_1ywyy_61",G="_receivedMessage_1ywyy_75",l={message:k,messageText:q,date:z,isRead:B,messageInfo:D,sentMessage:F,receivedMessage:G},H=n=>{const t=n.currentUser,r=n.message,m=r.senderId===(t==null?void 0:t.userId)?l.sentMessage:l.receivedMessage;return s.jsxs("div",{className:`${l.message} ${m}`,children:[s.jsx("div",{className:l.messageText,children:r.text}),s.jsxs("div",{className:l.messageInfo,children:[s.jsx("div",{className:l.date,children:r.createdAt}),s.jsx("div",{className:l.isRead,children:r.read?"was read":"no read"})]})]})},J=n=>{const t=n.dialogPage,r=n.users;let{userId:g}=I();const m=f(),i=t.messageValue,p=t.placeholder,d=t.dialogs.find(e=>e.id===parseInt(g||"")),y=d?d.messages:[],o=r.find(e=>e.userId===(d==null?void 0:d.participants[0].userId)),a=r.find(e=>e.userId===(d==null?void 0:d.participants[1].userId));let _=y.map(e=>s.jsx(H,{currentUser:o,message:e},e.id));const h=e=>{m(v(e))},x=()=>{if(i.text&&o&&a){const e={senderId:o.userId,receiverId:a.userId};m(M(e))}};return s.jsxs("div",{className:c.chat,children:[s.jsxs("div",{className:c.userInfoWrapper,children:[s.jsx("img",{alt:"ava",src:(a==null?void 0:a.photos.small)!=null?a==null?void 0:a.photos.small:j}),s.jsxs("div",{className:c.userInfo,children:[s.jsx("p",{className:c.userName,children:a==null?void 0:a.fullName}),s.jsx("p",{className:c.date,children:"5 minutes ego"})]})]}),s.jsx("div",{className:c.messages,children:s.jsx("div",{className:c.messageItem,children:_||s.jsx(N,{})})}),s.jsx(C,{placeholder:p,value:i,handleChange:h,handleClick:x})]})},Q=w.memo(()=>{const n=u(T),t=u(P);return s.jsx(J,{dialogPage:n,users:t})});export{Q as default};
