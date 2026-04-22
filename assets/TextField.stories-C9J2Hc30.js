import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as N}from"./index-D4H_InIO.js";import{B as O}from"./useUiKitTheme-BGeTiEix.js";import{B as z}from"./Button-eOGHJ8sC.js";import{T as s}from"./TextField-Coh4Yehb.js";import{S as P}from"./Eye-CyNTCh-E.js";const q={title:"UI-Kit components/TextField",component:s,argTypes:{label:{control:"text",description:"Label for the input field"},errorMessage:{control:"text",description:"Error message if validation fails"},icon:{description:"Optional icon element"},type:{control:"radio",options:["text","password","email","number"],description:"Type of input field"},isDisabled:{control:"boolean",description:"Disables the input field"},isRequired:{control:"boolean",description:"Marks the field as required"}}},a={args:{label:"Username"},render:e=>r.jsx(s,{...e})},t={args:{label:"Username",bg:"white"},render:e=>r.jsx(s,{...e})},o={args:{label:"Username",border:{width:"1px",radius:"4px"},bg:"surface-neutral-dark-default"},render:e=>r.jsx(O,{p:20,bg:"#55239A",children:r.jsx(s,{...e})})},n={render:()=>{const e=()=>{};return r.jsxs("form",{onSubmit:e,children:[r.jsx(s,{name:"email",label:"Email",type:"email"}),r.jsx(z,{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded",children:"Submit"})]})}},i={args:{label:"Password"},render:e=>{const[c,I]=N.useState(!1);return r.jsx(s,{...e,type:c?"text":"password",icon:r.jsx(P,{onClick:()=>I(!c),className:"cursor-pointer",viewBox:"0 0 24 24"})})}},l={args:{label:"Disabled",value:"Some text",isDisabled:!0},render:e=>r.jsx(s,{...e})},m={args:{label:"Error",value:"Some text"},render:e=>r.jsx(s,{...e,errorMessage:"error message"})},d={args:{mask:"+\\91 9999999999",maskChar:"_",m:{mb:10}},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(s,{...e,label:"Test mask"}),r.jsx(s,{...e,alwaysShowMask:!0,label:"Test mask with alwaysShowMask"})]})};var u,p,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Username"
  },
  render: args => <TextField {...args} />
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Username",
    bg: "white"
  },
  render: args => <TextField {...args} />
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,S,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Username",
    border: {
      width: "1px",
      radius: "4px"
    },
    bg: "surface-neutral-dark-default"
  },
  render: args => <Box p={20} bg={"#55239A"}>
      <TextField {...args} />
    </Box>
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,k,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const onSubmit = (): void => {
      //
    };
    return <form onSubmit={onSubmit}>
        <TextField name="email" label="Email" type="email" />
        <Button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Submit
        </Button>
      </form>;
  }
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,B,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Password"
  },
  render: args => {
    const [isVisible, setIsVisible] = useState(false);
    return <TextField {...args} type={isVisible ? "text" : "password"} icon={<Eye onClick={() => setIsVisible(!isVisible)} className="cursor-pointer" viewBox="0 0 24 24" />} />;
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,D,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    value: "Some text",
    isDisabled: true
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var v,V,W;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Error",
    value: "Some text"
  },
  render: args => {
    return <TextField {...args} errorMessage={"error message"} />;
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var C,_,U;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    mask: "+\\\\91 9999999999",
    maskChar: "_",
    m: {
      mb: 10
    }
  },
  render: args => {
    return <>
        <TextField {...args} label={"Test mask"} />
        <TextField {...args} alwaysShowMask label={"Test mask with alwaysShowMask"} />
      </>;
  }
}`,...(U=(_=d.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const A=["Default","WithBgColor","WithCustomization","WithValidation","WithToggleIcon","Disabled","Error","Mask"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:l,Error:m,Mask:d,WithBgColor:t,WithCustomization:o,WithToggleIcon:i,WithValidation:n,__namedExportsOrder:A,default:q},Symbol.toStringTag,{value:"Module"}));export{a as D,n as W,i as a,l as b,Q as s};
