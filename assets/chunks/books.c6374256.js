import{o as t,c as a,F as c,r as i,a as r,t as s,m as n}from"./framework.3db99cde.js";const _=["href"],o={class:"px-2"},u={key:0,class:"italic mr-2"},p=["href"],f={__name:"books",props:{books:{type:Array,default:[]}},setup(l){return(h,m)=>(t(),a("ul",null,[(t(!0),a(c,null,i(l.books,e=>(t(),a("li",{key:e.title},[r("a",{class:"font-bold",href:e.book,target:"_blank"},s(e.title),9,_),r("span",o,s(e.description),1),e.author?(t(),a("em",u,"by "+s(e.author),1)):n("",!0),e.ISBN&&e.link?(t(),a("a",{key:1,href:e.link,target:"_blank"},"ISBN "+s(e.ISBN),9,p)):n("",!0),r("span",null,"  "+s(e.year),1)]))),128))]))}};export{f as _};