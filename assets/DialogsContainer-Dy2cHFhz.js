import{j as s,P as c,N as u,u as g,a as i,g as _,b as m,r as p}from"./index-BqLq_VS8.js";const x="_dialogs_1t00o_1",f={dialogs:x},j="_dialog_soda9_1",h="_active_soda9_11",N="_userInfoWrapper_soda9_15",v="_userInfo_soda9_15",I="_userName_soda9_33",k="_date_soda9_40",E="_dialogMark_soda9_47",o={dialog:j,active:h,userInfoWrapper:N,userInfo:v,userName:I,date:k,dialogMark:E},D=a=>{const e=a.user,r=a.dialog,t="/chat/"+r.id;return r?s.jsx("div",{children:s.jsx("div",{className:o.dialog+" "+o.active,children:s.jsx(u,{to:t,children:s.jsxs("div",{className:o.userInfoWrapper,children:[s.jsx("img",{alt:"ava",src:e.photos.small!=null?e.photos.small:g}),s.jsxs("div",{className:o.userInfo,children:[s.jsx("p",{className:o.userName,children:e.fullName}),s.jsx("p",{className:o.date,children:"5 minutes ego"})]}),s.jsx("div",{className:o.dialogMark,children:r.id})]})})})}):s.jsx(c,{})},M=a=>{const e=a.dialogs,r=a.users;let t=e.map(n=>{let l=r.find(d=>d.userId===n.participants[1].userId);return l?s.jsx(D,{user:l,dialog:n},n.id):null});return s.jsx("div",{className:f.dialogs,children:t})},P=()=>{const a=i(_),e=i(m);return p.useEffect(()=>{},[]),s.jsx(M,{dialogs:a,users:e})};export{P as default};
