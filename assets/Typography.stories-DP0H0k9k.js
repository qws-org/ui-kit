import{j as i}from"./jsx-runtime-BO8uF4Og.js";import{T as o}from"./Typography-D-s8iQGY.js";import"./index-D4H_InIO.js";import"./useUiKitTheme-CFnMBFfO.js";const w={title:"UI-Kit typography components/Typography",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["large","medium","small","xsmall"],description:"Size of the Title"},weight:{control:"radio",options:["superbold","bold","semibold","normal","light"]},cursor:{control:"radio",options:["default","pointer","wait","text","move","help","none","all-scroll","grabbing","grab","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","zoom-out","zoom-in","nwse-resize","nesw-resize","ns-resize","ew-resize","sw-resize","se-resize","nw-resize","no-drop","copy","alias","vertical-text","crosshair","cell","progress","context-menu","not-allowed"]},as:{control:"radio",options:["p","span","article","li"]},className:{control:"text"},md:{control:"object",description:"Responsive settings for md screens"},d:{control:"object",description:"Responsive settings for d screens"},lineHeight:{control:"radio",description:"Overrides default line-height from size. Accepts one of the design tokens (e.g., body.desktop.large)."},fontSize:{control:"radio",description:"Overrides default font-size from size. Accepts one of the design tokens (e.g., body.desktop.large)."},italic:{control:"boolean"},display:{control:"radio",options:["block","hidden","inline","inline-block","flex","inline-flex","table","table-cell","grid","table-row"],description:"Display of the Title"}},args:{as:"p",size:"xsmall",fontSize:"button.desktop.xsmall",lineHeight:"body.desktop.small",textDecoration:"underline",cursor:"cell",md:{p:{py:64},fontSize:"body.mobile.small",lineHeight:"body.desktop.large",cursor:"pointer"},d:{lineHeight:"title.mobile.xsmall",fontSize:"headline.desktop.large",cursor:"default"},hover:{fontSize:48,textDecoration:"no-underline"}}},r={render(e){return i.jsx(o,{...e,children:"This is a default description."})}},n={render(e){return i.jsx(o,{...e,fontFamily:"accent",children:"Accent font"})}},t={render(e){return i.jsx(o,{...e,fontFamily:"main",children:"Main font"})}},s={render(e){return i.jsx(o,{...e,fontFamily:"additional",children:"Additional font"})}};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render(args) {
    return <Typography {...args}>This is a default description.</Typography>;
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    return <Typography {...args} fontFamily="accent">
        Accent font
      </Typography>;
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render(args) {
    return <Typography {...args} fontFamily="main">
        Main font
      </Typography>;
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,h,z;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render(args) {
    return <Typography {...args} fontFamily="additional">
        Additional font
      </Typography>;
  }
}`,...(z=(h=s.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const k=["Default","AccentFont","MainFont","AdditionalFont"];export{n as AccentFont,s as AdditionalFont,r as Default,t as MainFont,k as __namedExportsOrder,w as default};
