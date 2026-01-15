import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{F as r}from"./useUiKitTheme-DOh3e8pA.js";import"./index-D4H_InIO.js";const D={title:"UI-Kit layout/Flex",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Flex` — это универсальный контейнер для построения макетов с использованием возможностей CSS Flexbox. Он позволяет выравнивать, распределять и управлять дочерними элементами гибко и удобно."}}},argTypes:{justify:{control:"select",options:["center","end","flex-end","flex-start","start","space-around","space-between","space-evenly","stretch"]},align:{control:"select",options:["center","end","flex-end","flex-start","self-end","self-start","start"]},gap:{control:"text"},flexDirection:{control:"select",options:["row","row-reverse","column","column-reverse"]},className:{control:"text"}}},n={args:{justify:"center",align:"center",gap:4,flexDirection:"row",width:400,children:e.jsx("div",{className:"bg-gray-200 p-4",children:"Content"})}},s={args:{justify:"space-between",align:"flex-start",gap:"8px",flexDirection:"column",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 1"}),e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 2"}),e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 3"})]})}},a={args:{justify:"center",align:"center",gap:4,flexDirection:"row",md:{justify:"space-between",align:"flex-start",gap:"8",flexDirection:"column"},d:{justify:"flex-end",align:"flex-start",gap:16,flexDirection:"row-reverse"},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-red-200 p-4",children:"Item 1"}),e.jsx("div",{className:"bg-red-200 p-4",children:"Item 2"}),e.jsx("div",{className:"bg-red-200 p-4",children:"Item 3"})]})}},t={args:{justify:"space-evenly",align:"flex-start",gap:2,flexDirection:"row",p:12,md:{p:{py:64,px:96}},d:{p:{pl:64,pt:96},m:64},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item 1"}),e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item 2"})]})}},o={render(N){return e.jsxs(r,{...N,p:12,gap:10,bg:"rgba(0,255,255,0.2)",children:[e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",order:1,md:{order:2},children:"1"}),e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",order:2,md:{order:1},d:{order:0},children:"2"}),e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",order:3,md:{order:0},d:{order:1},children:"3"})]})}};var l,c,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    justify: "center",
    align: "center",
    gap: 4,
    flexDirection: "row",
    width: 400,
    children: <div className="bg-gray-200 p-4">Content</div>
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,x,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var f,b,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,h,y;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render(args) {
    return <Flex {...args} p={12} gap={10} bg="rgba(0,255,255,0.2)">
        <Flex p={10} bg="rgba(255,255,255,0.2)" order={1} md={{
        order: 2
      }}>
          1
        </Flex>
        <Flex p={10} bg="rgba(255,255,255,0.2)" order={2} md={{
        order: 1
      }} d={{
        order: 0
      }}>
          2
        </Flex>
        <Flex p={10} bg="rgba(255,255,255,0.2)" order={3} md={{
        order: 0
      }} d={{
        order: 1
      }}>
          3
        </Flex>
      </Flex>;
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const C=["Default","ColumnLayout","ResponsiveLayout","WithCustomClass","Order"];export{s as ColumnLayout,n as Default,o as Order,a as ResponsiveLayout,t as WithCustomClass,C as __namedExportsOrder,D as default};
