import{M as m}from"./Markdown-2Z893AWB.js";const y={title:"UI-Kit typography components/Markdown",component:m,args:{children:`# Заголовок 1

Текст **жирный**, *курсив*, ~~зачеркнутый~~.`,className:"",alignment:"left"},argTypes:{children:{control:"text",description:"Markdown-контент для рендеринга",table:{category:"Контент"}},className:{control:"text",description:"Дополнительный CSS-класс",table:{category:"Стилизация"}},alignment:{control:{type:"select",options:["left","center","right","justify"]},description:"Выравнивание текста внутри Markdown-блока.",table:{category:"Стилизация"}},display:{control:"radio",options:["block","hidden","inline","inline-block","flex","inline-flex","table","table-cell","grid","table-row"],description:"Display of the Title"}}},e={},t={args:{children:"<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"}},r={args:{p:32,m:32,md:{display:"hidden"},d:{p:{px:40,pb:16},m:{my:96},display:"block"},children:`
### 🌟 Кастомные стили  
- Это список  
- Стили применяются через className  
- Можно настроить разную типографику  
    `,className:"text-purple-400",alignment:"center"}};var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var o,l,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    p: 32,
    m: 32,
    md: {
      display: "hidden"
    },
    d: {
      p: {
        px: 40,
        pb: 16
      },
      m: {
        my: 96
      },
      display: "block"
    },
    children: \`
### 🌟 Кастомные стили  
- Это список  
- Стили применяются через className  
- Можно настроить разную типографику  
    \`,
    className: "text-purple-400",
    alignment: "center"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const g=["Default","WithHTML","CustomStyled"],h=Object.freeze(Object.defineProperty({__proto__:null,CustomStyled:r,Default:e,WithHTML:t,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{r as C,e as D,t as W,h as s};
