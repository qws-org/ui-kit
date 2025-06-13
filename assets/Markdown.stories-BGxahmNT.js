import{M as y}from"./Markdown-Aor1FtCN.js";const M={title:"UI-Kit typography components/Markdown",component:y,args:{children:`# Заголовок 1

Текст **жирный**, *курсив*, ~~зачеркнутый~~.`,className:"",alignment:"left"},argTypes:{children:{control:"text",description:"Markdown-контент для рендеринга",table:{category:"Контент"}},className:{control:"text",description:"Дополнительный CSS-класс",table:{category:"Стилизация"}},alignment:{control:{type:"select",options:["left","center","right","justify"]},description:"Выравнивание текста внутри Markdown-блока.",table:{category:"Стилизация"}}}},e={},r={args:{children:`
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
    `}},n={args:{children:"<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"}},o={args:{p:32,m:32,d:{p:{px:40,pb:16},m:{my:96}},children:`
### 🌟 Кастомные стили  
- Это список  
- Стили применяются через className  
- Можно настроить разную типографику  
    `,className:"text-purple-400",alignment:"center"}};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"
  }
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var g,u,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    p: 32,
    m: 32,
    d: {
      p: {
        px: 40,
        pb: 16
      },
      m: {
        my: 96
      }
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
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const w=["Default","AdvancedMarkdown","WithHTML","CustomStyled"],f=Object.freeze(Object.defineProperty({__proto__:null,AdvancedMarkdown:r,CustomStyled:o,Default:e,WithHTML:n,__namedExportsOrder:w,default:M},Symbol.toStringTag,{value:"Module"}));export{r as A,o as C,e as D,n as W,f as s};
