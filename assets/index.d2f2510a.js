import{d as e,p as a,a as s,c as o,o as l,b as t,e as r,t as i,F as n,r as u,u as d,T as c,w as p,f as m,g as y}from"./vendor.905215d5.js";const v=p();a("data-v-4a676ae8");const b={class:"job-list"},g={class:"salary"},h=r("img",{src:"/vue3-vite-simple-demo/assets/rupee.27fb921f.svg",alt:"rupee icon"},null,-1),f=r("div",{class:"description"},[r("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio iusto sequi dignissimos. Pariatur earum assumenda dolores possimus quidem quam, reprehenderit aliquid consequuntur amet non facere.")],-1);s();var q=e({expose:[],props:{jobs:{type:Array,required:!0},order:{required:!0,type:String}},setup(e){const a=e,s=o((()=>[...a.jobs].sort(((e,s)=>e[a.order]>s[a.order]?1:-1))));return(a,o)=>(l(),t("div",b,[r("p",null,"Ordered by "+i(e.order),1),r(c,{name:"list",tag:"ul"},{default:v((()=>[(l(!0),t(n,null,u(d(s),(e=>(l(),t("li",{key:e.id},[r("h2",null,i(e.title)+" in "+i(e.location),1),r("div",g,[h,r("p",null,i(e.salary)+" rupees",1)]),f])))),128))])),_:1})]))}});q.__scopeId="data-v-4a676ae8";const j={class:"app"},k=r("div",{class:"title"},[r("img",{src:"/vue3-vite-simple-demo/assets/heart.c3552760.svg",alt:"site logo"}),r("h1",null,"Hyrule Jobs")],-1),w={class:"order"};y(e({expose:[],setup(e){const a=m([{title:"farm worker",location:"lon lon ranch",salary:3e4,id:"1"},{title:"quarryman",location:"death mountain",salary:4e4,id:"2"},{title:"flute player",location:"the lost woods",salary:35e3,id:"3"},{title:"fisherman",location:"lake hylia",salary:21e3,id:"4"},{title:"prison guard",location:"gerudo valley",salary:32e3,id:"5"}]),s=m("title"),o=e=>{s.value=e};return(e,i)=>(l(),t("div",j,[r("header",null,[k,r("div",w,[r("button",{onClick:i[1]||(i[1]=e=>o("title"))},"order by title"),r("button",{onClick:i[2]||(i[2]=e=>o("salary"))},"order by salary"),r("button",{onClick:i[3]||(i[3]=e=>o("location"))},"order by location")])]),r(q,{jobs:a.value,order:s.value},null,8,["jobs","order"])]))}})).mount("#app");
