import{j as e}from"./index-Ft8_MerW.js";import{G as n}from"./Grid-DFlArAlT.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./useUiKitTheme-CYtl-eFU.js";const E={title:"UI-Kit layout/Grid",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Компонент `Grid` — это универсальный контейнер для построения макетов с использованием возможностей CSS Grid."}}},argTypes:{cols:{control:{type:"number",min:1,max:12},description:"Количество колонок для сетки"},gap:{control:{type:"number",min:0,step:4},description:"Отступ между элементами"},p:{control:{type:"number",min:0,step:4},description:"Внутренний отступ"},m:{control:{type:"number",min:0,step:4},description:"Внешний отступ"},md:{control:{type:"object"},description:"Настройки для планшетных экранов (md)"},d:{control:{type:"object"},description:"Настройки для десктопных экранов (d)"}}},r={args:{cols:12,gap:18,p:32,md:{m:32,gap:4,p:40},d:{m:12,gap:12,p:96}},render:a=>e.jsxs(n,{...a,children:[e.jsx(n.Item,{cSpan:3,className:"bg-blue-500 p-4 text-white",children:"Item 1"}),e.jsx(n.Item,{cSpan:3,className:"bg-green-500 p-4 text-white",children:"Item 2"})]})},s={args:{cols:12,gap:12,md:{cols:6,gap:16,p:{py:64,px:96}},d:{cols:4,gap:24,p:{pl:64,pt:96},m:64},p:32,m:96},render:a=>e.jsxs(n,{...a,children:[e.jsx(n.Item,{cSpan:3,md:{cSpan:2},d:{cSpan:1},className:"bg-yellow-500 p-4 text-white",children:"3 Columns"}),e.jsx(n.Item,{cSpan:6,md:{cSpan:4},d:{cSpan:2},className:"bg-purple-500 p-4 text-white",children:"6 Columns"}),e.jsx(n.Item,{cSpan:3,md:{cSpan:6},d:{cSpan:3},className:"bg-orange-500 p-4 text-white",children:"3 Columns"})]})},t={args:{cols:2,gap:16,md:{cols:3,gap:20},d:{cols:4,gap:24},p:96,m:32},render:a=>e.jsxs(n,{...a,children:[e.jsx(n.Item,{cSpan:1,md:{cSpan:2},d:{cSpan:1},className:"bg-blue-400 p-4 text-white",children:"Responsive Item 1"}),e.jsx(n.Item,{cSpan:1,md:{cSpan:1},d:{cSpan:3},className:"bg-green-400 p-4 text-white",children:"Responsive Item 2"})]})},p={args:{cols:12,gap:8,md:{cols:12,gap:12},d:{cols:12,gap:16}},render:a=>e.jsxs(n,{...a,children:[e.jsx(n.Item,{cSpan:12,className:"bg-indigo-500 p-4 text-white",children:"Full Width Item 1"}),e.jsx(n.Item,{cSpan:12,className:"bg-pink-500 p-4 text-white",children:"Full Width Item 2"})]})},c={args:{cols:4,gap:12,md:{cols:6,gap:16},d:{cols:8,gap:24}},render:a=>e.jsxs(n,{...a,children:[e.jsx(n.Item,{cSpan:2,rSpan:2,className:"bg-red-500 p-4 text-white",children:"Row Span 2"}),e.jsx(n.Item,{cSpan:1,rSpan:1,className:"bg-blue-500 p-4 text-white",children:"Row Span 1"}),e.jsx(n.Item,{cSpan:1,rSpan:1,className:"bg-green-500 p-4 text-white",children:"Row Span 1"})]})},d={args:{cols:12,gap:16,md:{cols:6,gap:12},d:{cols:4,gap:24}},render:a=>e.jsxs(n,{...a,children:[e.jsx(n.Item,{cSpan:4,md:{cSpan:3},d:{cSpan:2},className:"bg-purple-600 p-4 text-white",children:"Left Sidebar"}),e.jsx(n.Item,{cSpan:8,md:{cSpan:6},d:{cSpan:4},className:"bg-yellow-600 p-4 text-white",children:"Main Content"}),e.jsx(n.Item,{cSpan:12,className:"bg-teal-600 p-4 text-white",children:"Full Width Footer"})]})},m={args:{cols:12,gap:8,md:{cols:6,gap:12},d:{cols:4,gap:16}},render:a=>e.jsxs(n,{...a,children:[e.jsx(n.Item,{cSpan:2,md:{cSpan:2},d:{cSpan:1},className:"bg-orange-500 p-4 text-white",children:"2 Columns"}),e.jsx(n.Item,{cSpan:5,md:{cSpan:3},d:{cSpan:2},className:"bg-blue-500 p-4 text-white",children:"5 Columns"}),e.jsx(n.Item,{cSpan:5,md:{cSpan:3},d:{cSpan:2},className:"bg-green-500 p-4 text-white",children:"5 Columns"})]})};var i,o,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 18,
    p: 32,
    md: {
      m: 32,
      gap: 4,
      p: 40
    },
    d: {
      m: 12,
      gap: 12,
      p: 96
    }
  },
  render: args => <Grid {...args}>
      <Grid.Item cSpan={3} className="bg-blue-500 p-4 text-white">
        Item 1
      </Grid.Item>
      <Grid.Item cSpan={3} className="bg-green-500 p-4 text-white">
        Item 2
      </Grid.Item>
    </Grid>
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var g,S,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 12,
    md: {
      cols: 6,
      gap: 16,
      p: {
        py: 64,
        px: 96
      }
    },
    d: {
      cols: 4,
      gap: 24,
      p: {
        pl: 64,
        pt: 96
      },
      m: 64
    },
    p: 32,
    m: 96
  },
  render: args => <Grid {...args}>
      <Grid.Item cSpan={3} md={{
      cSpan: 2
    }} d={{
      cSpan: 1
    }} className="bg-yellow-500 p-4 text-white">
        3 Columns
      </Grid.Item>
      <Grid.Item cSpan={6} md={{
      cSpan: 4
    }} d={{
      cSpan: 2
    }} className="bg-purple-500 p-4 text-white">
        6 Columns
      </Grid.Item>
      <Grid.Item cSpan={3} md={{
      cSpan: 6
    }} d={{
      cSpan: 3
    }} className="bg-orange-500 p-4 text-white">
        3 Columns
      </Grid.Item>
    </Grid>
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var h,u,G;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    cols: 2,
    gap: 16,
    md: {
      cols: 3,
      gap: 20
    },
    d: {
      cols: 4,
      gap: 24
    },
    p: 96,
    m: 32
  },
  render: args => <Grid {...args}>
      <Grid.Item cSpan={1} md={{
      cSpan: 2
    }} d={{
      cSpan: 1
    }} className="bg-blue-400 p-4 text-white">
        Responsive Item 1
      </Grid.Item>
      <Grid.Item cSpan={1} md={{
      cSpan: 1
    }} d={{
      cSpan: 3
    }} className="bg-green-400 p-4 text-white">
        Responsive Item 2
      </Grid.Item>
    </Grid>
}`,...(G=(u=t.parameters)==null?void 0:u.docs)==null?void 0:G.source}}};var I,b,w;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 8,
    md: {
      cols: 12,
      gap: 12
    },
    d: {
      cols: 12,
      gap: 16
    }
  },
  render: args => <Grid {...args}>
      <Grid.Item cSpan={12} className="bg-indigo-500 p-4 text-white">
        Full Width Item 1
      </Grid.Item>
      <Grid.Item cSpan={12} className="bg-pink-500 p-4 text-white">
        Full Width Item 2
      </Grid.Item>
    </Grid>
}`,...(w=(b=p.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var N,j,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    cols: 4,
    gap: 12,
    md: {
      cols: 6,
      gap: 16
    },
    d: {
      cols: 8,
      gap: 24
    }
  },
  render: args => <Grid {...args}>
      <Grid.Item cSpan={2} rSpan={2} className="bg-red-500 p-4 text-white">
        Row Span 2
      </Grid.Item>
      <Grid.Item cSpan={1} rSpan={1} className="bg-blue-500 p-4 text-white">
        Row Span 1
      </Grid.Item>
      <Grid.Item cSpan={1} rSpan={1} className="bg-green-500 p-4 text-white">
        Row Span 1
      </Grid.Item>
    </Grid>
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,R,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 16,
    md: {
      cols: 6,
      gap: 12
    },
    d: {
      cols: 4,
      gap: 24
    }
  },
  render: args => <Grid {...args}>
      <Grid.Item cSpan={4} md={{
      cSpan: 3
    }} d={{
      cSpan: 2
    }} className="bg-purple-600 p-4 text-white">
        Left Sidebar
      </Grid.Item>
      <Grid.Item cSpan={8} md={{
      cSpan: 6
    }} d={{
      cSpan: 4
    }} className="bg-yellow-600 p-4 text-white">
        Main Content
      </Grid.Item>
      <Grid.Item cSpan={12} className="bg-teal-600 p-4 text-white">
        Full Width Footer
      </Grid.Item>
    </Grid>
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var W,L,f;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    cols: 12,
    gap: 8,
    md: {
      cols: 6,
      gap: 12
    },
    d: {
      cols: 4,
      gap: 16
    }
  },
  render: args => <Grid {...args}>
      <Grid.Item cSpan={2} md={{
      cSpan: 2
    }} d={{
      cSpan: 1
    }} className="bg-orange-500 p-4 text-white">
        2 Columns
      </Grid.Item>
      <Grid.Item cSpan={5} md={{
      cSpan: 3
    }} d={{
      cSpan: 2
    }} className="bg-blue-500 p-4 text-white">
        5 Columns
      </Grid.Item>
      <Grid.Item cSpan={5} md={{
      cSpan: 3
    }} d={{
      cSpan: 2
    }} className="bg-green-500 p-4 text-white">
        5 Columns
      </Grid.Item>
    </Grid>
}`,...(f=(L=m.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};const _=["DefaultGrid","MixedColumnsGrid","ResponsiveGridLayout","FullWidthGrid","GridWithRowSpans","ComplexGridLayout","AsymmetricGridLayout"];export{m as AsymmetricGridLayout,d as ComplexGridLayout,r as DefaultGrid,p as FullWidthGrid,c as GridWithRowSpans,s as MixedColumnsGrid,t as ResponsiveGridLayout,_ as __namedExportsOrder,E as default};
