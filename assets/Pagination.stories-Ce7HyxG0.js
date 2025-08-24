import{j as e}from"./index-Ft8_MerW.js";import{r as y}from"./index-D4H_InIO.js";import{C as h}from"./Container-r_zmZoAa.js";import{B as x}from"./Button-EikDOQpV.js";import{F as b}from"./Flex-D88M4fXj.js";import"./useUiKitTheme-BNHY2yiO.js";const i=({totalPages:t,currentPage:n,onPageChange:r,itemsPerPage:a,renderPageLabel:g=u=>`${u*a+1} - ${(u+1)*a}`})=>t<=1?null:e.jsx(b,{gap:10,justify:"center",m:{mt:16},md:{m:{mt:24}},children:Array.from({length:t},(u,c)=>e.jsx(x,{minWidth:"fit-content",variant:"secondary",size:"xsmall",p:{px:24,py:8},md:{p:{px:24,py:8},fontSize:"button.desktop.small",lineHeight:"button.desktop.small"},className:`rounded ${n===c?"outline outline-1 outline-[var(--colors-text-selection)] text-[var(--colors-text-selection)]":""}`,onPress:()=>r(c),children:g(c)},c))});try{i.displayName="Pagination",i.__docgenInfo={description:"",displayName:"Pagination",props:{totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},renderPageLabel:{defaultValue:{value:"(page) =>\n    `${page * itemsPerPage + 1} - ${(page + 1) * itemsPerPage}`"},description:"",name:"renderPageLabel",required:!1,type:{name:"((page: number) => ReactNode)"}}}}}catch{}const j={title:"UI-Kit components/Pagination",component:i,argTypes:{totalPages:{control:"number",description:"Общее количество страниц в пагинации."},currentPage:{description:"Текущая активная страница (изменяется в стейте)."},itemsPerPage:{control:"number",description:"Количество элементов на одной странице."},onPageChange:{action:"page changed",description:"Функция-коллбек, вызываемая при смене страницы."},renderPageLabel:{description:"Функция для кастомного отображения номеров страниц."}},args:{totalPages:5,itemsPerPage:10}},s={render:t=>{const[n,r]=y.useState(0),a=`Контент для страницы ${n+1}`;return e.jsxs(e.Fragment,{children:[e.jsx(i,{...t,currentPage:n,onPageChange:r}),e.jsx(h,{justify:"center",className:"mt-20",children:a})]})}},o={render:t=>{const[n,r]=y.useState(0),a=`Страница ${n+1} с кастомным лейблом`;return e.jsxs(e.Fragment,{children:[e.jsx(i,{...t,currentPage:n,onPageChange:r,renderPageLabel:g=>`Страница ${g+1}`}),e.jsx(h,{justify:"center",className:"mt-20",children:a})]})}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(0);
    const content = \`Контент для страницы \${page + 1}\`;
    return <>
        <Pagination {...args} currentPage={page} onPageChange={setPage} />
        <Container justify="center" className="mt-20">
          {content}
        </Container>
      </>;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,P,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(0);
    const content = \`Страница \${page + 1} с кастомным лейблом\`;
    return <>
        <Pagination {...args} currentPage={page} onPageChange={setPage} renderPageLabel={p => \`Страница \${p + 1}\`} />
        <Container justify="center" className="mt-20">
          {content}
        </Container>
      </>;
  }
}`,...(f=(P=o.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const C=["Default","WithCustomLabels"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithCustomLabels:o,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{s as D,q as s};
