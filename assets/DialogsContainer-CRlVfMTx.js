import{j as s,P as d,N as u,u as g,a as i,g as _,b as m,r as p}from"./index-9QoRBC9x.js";const x="_dialogs_1yeyq_1",f={dialogs:x},j="_dialog_1120a_1",h="_active_1120a_21",N="_userInfoWrapper_1120a_29",v="_userInfo_1120a_29",I="_userName_1120a_65",k="_date_1120a_79",E="_dialogMark_1120a_93",r={dialog:j,active:h,userInfoWrapper:N,userInfo:v,userName:I,date:k,dialogMark:E},D=a=>{const e=a.user,o=a.dialog,t="/chat/"+o.id;return o?s.jsx("div",{children:s.jsx("div",{className:r.dialog+" "+r.active,children:s.jsx(u,{to:t,children:s.jsxs("div",{className:r.userInfoWrapper,children:[s.jsx("img",{alt:"ava",src:e.photos.small!=null?e.photos.small:g}),s.jsxs("div",{className:r.userInfo,children:[s.jsx("p",{className:r.userName,children:e.fullName}),s.jsx("p",{className:r.date,children:"5 minutes ego"})]}),s.jsx("div",{className:r.dialogMark,children:o.id})]})})})}):s.jsx(d,{})},M=a=>{const e=a.dialogs,o=a.users;let t=e.map(n=>{let l=o.find(c=>c.userId===n.participants[1].userId);return l?s.jsx(D,{user:l,dialog:n},n.id):null});return s.jsx("div",{className:f.dialogs,children:t})},y=()=>{const a=i(_),e=i(m);return p.useEffect(()=>{},[]),s.jsx(M,{dialogs:a,users:e})};export{y as default};