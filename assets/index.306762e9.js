import{j as f,r as m,R as b,a as v}from"./vendor.95b24c9a.js";const _=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};_();const N="_container_17nos_1";var x={container:N};const r=f.exports.jsx,i=f.exports.jsxs,A=()=>r("header",{className:x.container,children:r("h1",{children:"Dagpengekalkulatoren"})}),E="_container_1lsy2_1",k="_form_1lsy2_11",S="_resultContainer_1lsy2_25",j="_payout_1lsy2_43",D="_sad_1lsy2_57";var c={container:E,form:k,resultContainer:S,payout:j,sad:D};const M=260,u=106399,p=u*6,R=s=>Object.values(s).reduce((n,a)=>n+a),q=(s,n)=>{if(!s||n<=u*3&&s<=u*1.5)return 0;const a=Math.max(s,n/3);return a<p?a:p},I=s=>Math.ceil(s/M),L=()=>{const[s,n]=m.exports.useState(!1),[a,l]=m.exports.useState(0),e=o=>{o.preventDefault();const d={year1:o.target.year1.valueAsNumber,year2:o.target.year2.valueAsNumber,year3:o.target.year3.valueAsNumber};let y=R(d),h=q(d.year1,y),g=I(h);l(g),n(!0)},t=()=>a?i("p",{children:["Du er kvalifisert for dagpenger!",r("br",{}),"Du kan f\xE5 ",i("span",{className:c.payout,children:[a," kr"]})," om dagen"]}):i("p",{children:["Du er dessverre ikke kvalifisert for dagpenger",r("br",{}),r("span",{className:c.sad,children:":("})]});return i("div",{className:c.container,children:[i("form",{className:c.form,onSubmit:o=>e(o),onChange:()=>n(!1),children:[r("input",{name:"year1",placeholder:"Inntekt i fjor",type:"number",min:"0",required:"required"}),r("input",{name:"year2",placeholder:"Inntekt for 2 \xE5r siden",type:"number",min:"0",required:"required"}),r("input",{name:"year3",placeholder:"Inntekt for 3 \xE5r siden",type:"number",min:"0",required:"required"}),r("input",{type:"submit",value:"Beregn"})]}),r("div",{className:c.resultContainer,children:s&&t()})]})},O="_container_gxrfn_1";var $={container:O};const B=()=>i("footer",{className:$.container,children:[i("p",{children:["En oppgave for ",r("a",{href:"https://www.detsombetyrnoe.no/",children:"NAV IT"})]}),i("p",{children:["av ",r("a",{href:"https://github.com/LBlend",children:"Leander West Furumo"})]})]});function P(){return i("div",{className:"App",children:[r(A,{}),r(L,{}),r(B,{})]})}b.render(r(v.StrictMode,{children:r(P,{})}),document.getElementById("root"));
