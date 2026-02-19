import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{F as r}from"./Flex-DrrGj3-4.js";import"./index-D4H_InIO.js";import"./useUiKitTheme-UJd2zieN.js";import"./context-Cc1G11um.js";const _={title:"UI-Kit layout/Flex",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Flex` — это универсальный контейнер для построения макетов с использованием возможностей CSS Flexbox. Он позволяет выравнивать, распределять и управлять дочерними элементами гибко и удобно."}}},argTypes:{justify:{control:"select",options:["center","end","flex-end","flex-start","start","space-around","space-between","space-evenly","stretch"]},align:{control:"select",options:["center","end","flex-end","flex-start","self-end","self-start","start"]},gap:{control:"text"},flexDirection:{control:"select",options:["row","row-reverse","column","column-reverse"]},className:{control:"text"}}},s={args:{justify:"center",align:"center",gap:4,flexDirection:"row",width:400,children:e.jsx("div",{className:"bg-gray-200 p-4",children:"Content"})}},a={args:{justify:"space-between",align:"flex-start",gap:"8px",flexDirection:"column",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 1"}),e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 2"}),e.jsx("div",{className:"bg-blue-200 p-4",children:"Item 3"})]})}},t={args:{justify:"center",align:"center",gap:4,flexDirection:"row",md:{justify:"space-between",align:"flex-start",gap:"8",flexDirection:"column"},d:{justify:"flex-end",align:"flex-start",gap:16,flexDirection:"row-reverse"},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-red-200 p-4",children:"Item 1"}),e.jsx("div",{className:"bg-red-200 p-4",children:"Item 2"}),e.jsx("div",{className:"bg-red-200 p-4",children:"Item 3"})]})}},o={args:{justify:"space-evenly",align:"flex-start",gap:2,flexDirection:"row",p:12,md:{p:{py:64,px:96}},d:{p:{pl:64,pt:96},m:64},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item 1"}),e.jsx("div",{className:"bg-green-300 p-4",children:"Custom Item 2"})]})}},c={render(n){return e.jsxs(r,{...n,p:12,gap:10,bg:"rgba(0,255,255,0.2)",children:[e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",order:1,md:{order:2},children:"1"}),e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",order:2,md:{order:1},d:{order:0},children:"2"}),e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",order:3,md:{order:0},d:{order:1},children:"3"})]})}},l={render(n){return e.jsx(r,{...n,p:12,gap:10,bg:"rgba(0,255,255,0.2)",children:e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",shrink:1,md:{shrink:0},d:{shrink:1},children:"1"})})}},d={render(n){return e.jsx(r,{...n,p:12,gap:10,bg:"rgba(0,255,255,0.2)",children:e.jsx(r,{p:10,bg:"rgba(255,255,255,0.2)",grow:1,md:{grow:0},d:{grow:1},children:"1"})})}};var i,p,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    justify: "center",
    align: "center",
    gap: 4,
    flexDirection: "row",
    width: 400,
    children: <div className="bg-gray-200 p-4">Content</div>
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,x,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var b,f,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,j,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,F,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var I,D,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render(args) {
    return <Flex {...args} p={12} gap={10} bg="rgba(0,255,255,0.2)">
        <Flex p={10} bg="rgba(255,255,255,0.2)" shrink={1} md={{
        shrink: 0
      }} d={{
        shrink: 1
      }}>
          1
        </Flex>
      </Flex>;
  }
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var S,k,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render(args) {
    return <Flex {...args} p={12} gap={10} bg="rgba(0,255,255,0.2)">
        <Flex p={10} bg="rgba(255,255,255,0.2)" grow={1} md={{
        grow: 0
      }} d={{
        grow: 1
      }}>
          1
        </Flex>
      </Flex>;
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const K=["Default","ColumnLayout","ResponsiveLayout","WithCustomClass","Order","Shrink","Grow"];export{a as ColumnLayout,s as Default,d as Grow,c as Order,t as ResponsiveLayout,l as Shrink,o as WithCustomClass,K as __namedExportsOrder,_ as default};
