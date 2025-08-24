import{M as y}from"./Markdown-UOEhJh5J.js";const b={title:"UI-Kit typography components/Markdown",component:y,args:{children:`# Заголовок 1

Текст **жирный**, *курсив*, ~~зачеркнутый~~.`,className:"",alignment:"left"},argTypes:{children:{control:"text",description:"Markdown-контент для рендеринга",table:{category:"Контент"}},className:{control:"text",description:"Дополнительный CSS-класс",table:{category:"Стилизация"}},alignment:{control:{type:"select",options:["left","center","right","justify"]},description:"Выравнивание текста внутри Markdown-блока.",table:{category:"Стилизация"}},display:{control:"radio",options:["block","hidden","inline","inline-block","flex","inline-flex","table","table-cell","grid","table-row"],description:"Display of the Title"}}},e={},n={args:{children:`
# 📌 Пример сложного Markdown  
| Имя      | Возраст | Город     |  
|----------|--------|-----------|  
| Иван     | 25     | Москва    |  
| Ольга    | 30     | Санкт-Петербург |  

\`\`\`tsx
const hello = "Hello, world!";
console.log(hello);
\`\`\`

![Логотип](/public/promo-card.png)
> _Цитата_: "Markdown — это просто и удобно!"
    `}},r={args:{children:"<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"}},o={args:{p:32,m:32,md:{display:"hidden"},d:{p:{px:40,pb:16},m:{my:96},display:"block"},children:`
### 🌟 Кастомные стили  
- Это список  
- Стили применяются через className  
- Можно настроить разную типографику  
    `,className:"text-purple-400",alignment:"center"}};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: \`
# 📌 Пример сложного Markdown  
| Имя      | Возраст | Город     |  
|----------|--------|-----------|  
| Иван     | 25     | Москва    |  
| Ольга    | 30     | Санкт-Петербург |  

\\\`\\\`\\\`tsx
const hello = "Hello, world!";
console.log(hello);
\\\`\\\`\\\`

![Логотип](/public/promo-card.png)
> _Цитата_: "Markdown — это просто и удобно!"
    \`
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,i,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,u,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const M=["Default","AdvancedMarkdown","WithHTML","CustomStyled"],k=Object.freeze(Object.defineProperty({__proto__:null,AdvancedMarkdown:n,CustomStyled:o,Default:e,WithHTML:r,__namedExportsOrder:M,default:b},Symbol.toStringTag,{value:"Module"}));export{n as A,o as C,e as D,r as W,k as s};
