import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{r as N}from"./index-D4H_InIO.js";import{B as O}from"./useUiKitTheme-Cs989wUB.js";import{B as z}from"./Button-BEMGKDsV.js";import{T as s}from"./TextField-BsnsNaQO.js";const P=e=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:r.jsx("path",{fill:"#fff",d:"M23.532 10.65C21.929 8.575 17.597 3.75 12 3.75c-5.669 0-9.962 4.829-11.544 6.9a2.2 2.2 0 0 0 .008 2.694C2.068 15.422 6.402 20.25 12 20.25s9.93-4.825 11.53-6.896a2.2 2.2 0 0 0 .002-2.704M12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"})});try{Eye.displayName="Eye",Eye.__docgenInfo={description:"",displayName:"Eye",props:{}}}catch{}const q={title:"UI-Kit components/TextField",component:s,argTypes:{label:{control:"text",description:"Label for the input field"},errorMessage:{control:"text",description:"Error message if validation fails"},icon:{description:"Optional icon element"},type:{control:"radio",options:["text","password","email","number"],description:"Type of input field"},isDisabled:{control:"boolean",description:"Disables the input field"},isRequired:{control:"boolean",description:"Marks the field as required"}}},a={args:{label:"Username"},render:e=>r.jsx(s,{...e})},t={args:{label:"Username",bg:"white"},render:e=>r.jsx(s,{...e})},n={args:{label:"Username",border:{width:"1px",radius:"4px"},bg:"surface-neutral-dark-default"},render:e=>r.jsx(O,{p:20,bg:"#55239A",children:r.jsx(s,{...e})})},o={render:()=>{const e=()=>{};return r.jsxs("form",{onSubmit:e,children:[r.jsx(s,{name:"email",label:"Email",type:"email"}),r.jsx(z,{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded",children:"Submit"})]})}},i={args:{label:"Password"},render:e=>{const[m,U]=N.useState(!1);return r.jsx(s,{...e,type:m?"text":"password",icon:r.jsx(P,{onClick:()=>U(!m),className:"cursor-pointer",viewBox:"0 0 24 24"})})}},l={args:{label:"Disabled",value:"Some text",isDisabled:!0},render:e=>r.jsx(s,{...e})},d={args:{label:"Error",value:"Some text"},render:e=>r.jsx(s,{...e,errorMessage:"error message"})},c={args:{label:"Test mask",mask:"+\\91 9999999999",maskChar:"_",m:{mb:10}},render:e=>r.jsx(s,{...e})};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Username"
  },
  render: args => <TextField {...args} />
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,x,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Username",
    bg: "white"
  },
  render: args => <TextField {...args} />
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,S,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,w,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var E,_,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Password"
  },
  render: args => {
    const [isVisible, setIsVisible] = useState(false);
    return <TextField {...args} type={isVisible ? "text" : "password"} icon={<Eye onClick={() => setIsVisible(!isVisible)} className="cursor-pointer" viewBox="0 0 24 24" />} />;
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var v,B,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    value: "Some text",
    isDisabled: true
  },
  render: args => {
    return <TextField {...args} />;
  }
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var C,F,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Error",
    value: "Some text"
  },
  render: args => {
    return <TextField {...args} errorMessage={"error message"} />;
  }
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,W,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const A=["Default","WithBgColor","WithCustomization","WithValidation","WithToggleIcon","Disabled","Error","Mask"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:l,Error:d,Mask:c,WithBgColor:t,WithCustomization:n,WithToggleIcon:i,WithValidation:o,__namedExportsOrder:A,default:q},Symbol.toStringTag,{value:"Module"}));export{a as D,o as W,i as a,l as b,J as s};
