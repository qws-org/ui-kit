import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as N}from"./index-D4H_InIO.js";import{B as O}from"./useUiKitTheme-CEh8LG3N.js";import{B as z}from"./Button-D7xJtIB7.js";import{T as s}from"./TextField-BEQ-xad6.js";import{S as P}from"./Eye-CyNTCh-E.js";const q={title:"UI-Kit components/TextField",component:s,argTypes:{label:{control:"text",description:"Label for the input field"},errorMessage:{control:"text",description:"Error message if validation fails"},icon:{description:"Optional icon element"},type:{control:"radio",options:["text","password","email","number"],description:"Type of input field"},isDisabled:{control:"boolean",description:"Disables the input field"},isRequired:{control:"boolean",description:"Marks the field as required"}}},a={args:{label:"Username"},render:e=>r.jsx(s,{...e})},t={args:{label:"Username",bg:"white"},render:e=>r.jsx(s,{...e})},o={args:{label:"Username",border:{width:"1px",radius:"4px"},bg:"surface-neutral-dark-default"},render:e=>r.jsx(O,{p:20,bg:"#55239A",children:r.jsx(s,{...e})})},n={render:()=>{const e=()=>{};return r.jsxs("form",{onSubmit:e,children:[r.jsx(s,{name:"email",label:"Email",type:"email"}),r.jsx(z,{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded",children:"Submit"})]})}},i={args:{label:"Password"},render:e=>{const[c,I]=N.useState(!1);return r.jsx(s,{...e,type:c?"text":"password",icon:r.jsx(P,{onClick:()=>I(!c),className:"cursor-pointer",viewBox:"0 0 24 24"})})}},l={args:{label:"Disabled",value:"Some text",isDisabled:!0},render:e=>r.jsx(s,{...e})},m={args:{label:"Error",value:"Some text"},render:e=>r.jsx(s,{...e,errorMessage:"error message"})},d={args:{label:"Test mask",mask:"+\\91 9999999999",maskChar:"_",m:{mb:10}},render:e=>r.jsx(s,{...e})};var u,p,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Username"
  },
  render: args => <TextField {...args} />
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,x,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Username",
    bg: "white"
  },
  render: args => <TextField {...args} />
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,h,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var j,k,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var y,B,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Password"
  },
  render: args => {
    const [isVisible, setIsVisible] = useState(false);
    return <TextField {...args} type={isVisible ? "text" : "password"} icon={<Eye onClick={() => setIsVisible(!isVisible)} className="cursor-pointer" viewBox="0 0 24 24" />} />;
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var D,v,F;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    value: "Some text",
    isDisabled: true
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var V,W,C;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Error",
    value: "Some text"
  },
  render: args => {
    return <TextField {...args} errorMessage={"error message"} />;
  }
}`,...(C=(W=m.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var _,M,U;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Test mask",
    mask: "+\\\\91 9999999999",
    maskChar: "_",
    m: {
      mb: 10
    }
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const A=["Default","WithBgColor","WithCustomization","WithValidation","WithToggleIcon","Disabled","Error","Mask"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:l,Error:m,Mask:d,WithBgColor:t,WithCustomization:o,WithToggleIcon:i,WithValidation:n,__namedExportsOrder:A,default:q},Symbol.toStringTag,{value:"Module"}));export{a as D,n as W,i as a,l as b,Q as s};
