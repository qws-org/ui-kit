import{M as h}from"./Markdown-ZWyBOL_x.js";const b={title:"UI-Kit typography components/Markdown",component:h,args:{children:`# Заголовок 1

Текст **жирный**, *курсив*, ~~зачеркнутый~~.`,className:"",alignment:"left"},argTypes:{children:{control:"text",description:"Markdown-контент для рендеринга",table:{category:"Контент"}},className:{control:"text",description:"Дополнительный CSS-класс",table:{category:"Стилизация"}},alignment:{control:{type:"select",options:["left","center","right","justify"]},description:"Выравнивание текста внутри Markdown-блока.",table:{category:"Стилизация"}},display:{control:"radio",options:["block","hidden","inline","inline-block","flex","inline-flex","table","table-cell","grid","table-row"],description:"Display of the Title"}}},e={},r={args:{children:"<h1  style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"}},t={args:{clobberPrefix:"test_prefix",children:"<h1 id='test_id' style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"}},s={args:{p:32,m:32,md:{display:"hidden"},d:{p:{px:40,pb:16},m:{my:96},display:"block"},children:`
### 🌟 Кастомные стили  
- Это список  
- Стили применяются через className  
- Можно настроить разную типографику  
    `,className:"text-purple-400",alignment:"center"}};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "<h1  style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    clobberPrefix: "test_prefix",
    children: "<h1 id='test_id' style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>"
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var y,u,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const f=["Default","WithHTML","CustomizeClobberPrefix","CustomStyled"],M=Object.freeze(Object.defineProperty({__proto__:null,CustomStyled:s,CustomizeClobberPrefix:t,Default:e,WithHTML:r,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{s as C,e as D,r as W,M as s};
