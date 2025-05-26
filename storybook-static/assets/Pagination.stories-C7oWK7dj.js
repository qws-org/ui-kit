import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-D4lIrffr.js";import{C as x}from"./Container-qRMNd5zo.js";import{B as h}from"./Button-DLqEWYsL.js";import{F as b}from"./Flex-DaXD7q-5.js";const i=({totalPages:n,currentPage:t,onPageChange:r,itemsPerPage:a,renderPageLabel:g=u=>`${u*a+1} - ${(u+1)*a}`})=>n<=1?null:e.jsx(b,{gap:10,justify:"center",m:{mt:16},md:{m:{mt:24}},children:Array.from({length:n},(u,c)=>e.jsx(h,{minWidth:"fit-content",variant:"secondary",size:"xsmall",p:{px:24,py:8},md:{size:"small",p:{px:24,py:8}},className:`rounded ${t===c?"outline outline-1 outline-[var(--colors-text-selection)] text-[var(--colors-text-selection)]":""}`,onPress:()=>r(c),children:g(c)},c))});try{i.displayName="Pagination",i.__docgenInfo={description:"",displayName:"Pagination",props:{totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},renderPageLabel:{defaultValue:{value:"(page) =>\n    `${page * itemsPerPage + 1} - ${(page + 1) * itemsPerPage}`"},description:"",name:"renderPageLabel",required:!1,type:{name:"((page: number) => ReactNode)"}}}}}catch{}const j={title:"UI-Kit components/Pagination",component:i,argTypes:{totalPages:{control:"number",description:"Общее количество страниц в пагинации."},currentPage:{description:"Текущая активная страница (изменяется в стейте)."},itemsPerPage:{control:"number",description:"Количество элементов на одной странице."},onPageChange:{action:"page changed",description:"Функция-коллбек, вызываемая при смене страницы."},renderPageLabel:{description:"Функция для кастомного отображения номеров страниц."}},args:{totalPages:5,itemsPerPage:10}},s={render:n=>{const[t,r]=y.useState(0),a=`Контент для страницы ${t+1}`;return e.jsxs(e.Fragment,{children:[e.jsx(i,{...n,currentPage:t,onPageChange:r}),e.jsx(x,{justify:"center",className:"mt-20",children:a})]})}},o={render:n=>{const[t,r]=y.useState(0),a=`Страница ${t+1} с кастомным лейблом`;return e.jsxs(e.Fragment,{children:[e.jsx(i,{...n,currentPage:t,onPageChange:r,renderPageLabel:g=>`Страница ${g+1}`}),e.jsx(x,{justify:"center",className:"mt-20",children:a})]})}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(P=o.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const C=["Default","WithCustomLabels"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithCustomLabels:o,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{s as D,v as s};
