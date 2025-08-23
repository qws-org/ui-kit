import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as v}from"./Flex-BCwd3Rr_.js";import"./index-D4lIrffr.js";import"./Box-Dee0_b2w.js";import"./useUiKitTheme-CDzDdjzd.js";import"./context-CsAOKUm5.js";const I={title:"UI-Kit layout/Flex",component:v,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Flex` — это универсальный контейнер для построения макетов с использованием возможностей CSS Flexbox. Он позволяет выравнивать, распределять и управлять дочерними элементами гибко и удобно."}}},argTypes:{justify:{control:"select",options:["center","end","flex-end","flex-start","start","space-around","space-between","space-evenly","stretch"]},align:{control:"select",options:["center","end","flex-end","flex-start","self-end","self-start","start"]},gap:{control:"text"},flexDirection:{control:"select",options:["row","row-reverse","column","column-reverse"]},className:{control:"text"}}},n={args:{justify:"center",align:"center",gap:4,flexDirection:"row",width:400,children:e.jsx("div",{className:"bg-gray-200 p-4",children:"Content"})}},s={args:{justify:"space-between",align:"flex-start",gap:"8px",flexDirection:"column",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 1"}),e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 2"}),e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 3"})]})}},r={args:{justify:"center",align:"center",gap:4,flexDirection:"row",md:{justify:"space-between",align:"flex-start",gap:"8",flexDirection:"column"},d:{justify:"flex-end",align:"flex-start",gap:16,flexDirection:"row-reverse"},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-red-200 p-4",children:"Item 1"}),e.jsx("div",{className:"bg-red-200 p-4",children:"Item 2"}),e.jsx("div",{className:"bg-red-200 p-4",children:"Item 3"})]})}},t={args:{justify:"space-evenly",align:"flex-start",gap:2,flexDirection:"row",p:12,md:{p:{py:64,px:96}},d:{p:{pl:64,pt:96},m:64},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item 1"}),e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item 2"})]})}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    justify: "center",
    align: "center",
    gap: 4,
    flexDirection: "row",
    width: 400,
    children: <div className="bg-gray-200 p-4">Content</div>
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,o,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    justify: "space-between",
    align: "flex-start",
    gap: "8px",
    flexDirection: "column",
    children: <>
        <div className="bg-blue-200 p-4">Item 1</div>
        <div className="bg-blue-200 p-4">Item 2</div>
        <div className="bg-blue-200 p-4">Item 3</div>
      </>
  }
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    justify: "center",
    align: "center",
    gap: 4,
    flexDirection: "row",
    md: {
      justify: "space-between",
      align: "flex-start",
      gap: "8",
      flexDirection: "column"
    },
    d: {
      justify: "flex-end",
      align: "flex-start",
      gap: 16,
      flexDirection: "row-reverse"
    },
    children: <>
        <div className="bg-red-200 p-4">Item 1</div>
        <div className="bg-red-200 p-4">Item 2</div>
        <div className="bg-red-200 p-4">Item 3</div>
      </>
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    justify: "space-evenly",
    align: "flex-start",
    gap: 2,
    flexDirection: "row",
    p: 12,
    md: {
      p: {
        py: 64,
        px: 96
      }
    },
    d: {
      p: {
        pl: 64,
        pt: 96
      },
      m: 64
    },
    children: <>
        <div className="bg-green-300 p-4">Custom Item 1</div>
        <div className="bg-green-300 p-4">Custom Item 2</div>
      </>
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const D=["Default","ColumnLayout","ResponsiveLayout","WithCustomClass"];export{s as ColumnLayout,n as Default,r as ResponsiveLayout,t as WithCustomClass,D as __namedExportsOrder,I as default};
