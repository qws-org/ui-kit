import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as i}from"./Button-2eXOBKa_.js";import{C as a,S as T}from"./Checkbox-DbQnB1pR.js";import{F as r}from"./Flex-Vs_fEaEw.js";import{T as t}from"./Typography-C0hK4pAy.js";import{S as H}from"./Eye-CyNTCh-E.js";const P={title:"UI-Kit components/Checkbox",component:a,argTypes:{value:{control:"boolean",description:"Определяет, выбран ли чекбокс",defaultValue:!1},onChange:{action:"clicked",description:"Вызывается при изменении"},className:{control:"text",description:"Дополнительные классы стилей"}}},l={render:()=>{const o=()=>{};return e.jsxs("form",{onSubmit:o,children:[e.jsx(a,{"aria-label":"label",children:"Remember me"}),e.jsx(i,{type:"submit",className:"mt-4 p-2",children:"Submit form"})]})}},m={render:()=>{const o=()=>{};return e.jsxs("form",{onSubmit:o,children:[e.jsx(a,{"aria-label":"label",errorMessage:"some error",children:"Remember me"}),e.jsx(i,{type:"submit",className:"mt-4 p-2",children:"Submit form"})]})}},s={render:()=>{const o=()=>{};return e.jsx("form",{onSubmit:o,children:e.jsx(r,{m:{mb:16},md:{m:{mb:24}},children:e.jsx(a,{errorMessage:"error message","data-testid":"registration-form-remember-password-checkbox",children:e.jsxs(r,{flexWrap:"wrap",whiteSpace:"nowrap",gap:2,align:"center",children:[e.jsx(t,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"I am 18 years old and I accept the"}),e.jsx(i,{href:"/link",p:{px:0,py:0},size:"small",variant:"tertiary",color:"text-selection",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Terms and Conditions"}),e.jsx(t,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"and"}),e.jsx(i,{href:"/link",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Privacy Policy"})]})})})})}},c={render:()=>{const o=()=>{};return e.jsx("form",{onSubmit:o,children:e.jsx(r,{m:{mb:16},md:{m:{mb:24}},children:e.jsx(a,{"data-testid":"registration-form-remember-password-checkbox",customCheckbox:({isSelected:n})=>e.jsx(r,{justify:"center",align:"center",bg:n?"surface-primary-default":void 0,minWidth:22,minHeight:22,border:{color:n?"surface-primary-default":"border-button",width:"2px",radius:"checkbox"},children:n&&e.jsx(T,{})}),errorMessage:e.jsx(t,{m:{mt:8},color:"text-destructive",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",children:"Please confirm that you have read the Terms and Conditions and Privacy Policy"}),children:e.jsxs(r,{flexWrap:"wrap",whiteSpace:"nowrap",gap:2,align:"center",children:[e.jsx(t,{color:"text-primary-muted",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",children:"I am 18 years old and I accept the"}),e.jsx(i,{href:"/link",p:{px:0,py:0},size:"small",variant:"tertiary",color:"text-selection",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",children:"Terms and Conditions"}),e.jsx(t,{color:"text-primary-muted",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",children:"and"}),e.jsx(i,{href:"/link",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",children:"Privacy Policy"})]})})})})}},d={render:()=>{const o=()=>{};return e.jsx("form",{onSubmit:o,children:e.jsx(r,{m:{mb:16},md:{m:{mb:24}},children:e.jsx(a,{"data-testid":"registration-form-remember-password-checkbox",customCheckbox:({isSelected:n})=>e.jsx(r,{justify:"center",align:"center",bg:n?"orange":"green",minWidth:28,minHeight:28,border:{color:n?"yellow":"border-button",width:"2px",radius:"checkbox"},children:n&&e.jsx(H,{})}),errorMessage:e.jsx(t,{m:{mt:8},color:"text-destructive",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",children:"Please confirm that you have read the Terms and Conditions and Privacy Policy"}),children:e.jsx(r,{flexWrap:"wrap",whiteSpace:"nowrap",gap:2,align:"center",children:e.jsx(t,{color:"text-primary-muted",fontSize:"body.mobile.small",lineHeight:"body.mobile.small",children:"I am 18 years old and I accept the"})})})})})}};var b,p,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const onSubmit = (): void => {
      //
    };
    return <form onSubmit={onSubmit}>
        <Checkbox aria-label="label">Remember me</Checkbox>

        <Button type="submit" className="mt-4 p-2">
          Submit form
        </Button>
      </form>;
  }
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,y,u;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const onSubmit = (): void => {
      //
    };
    return <form onSubmit={onSubmit}>
        <Checkbox aria-label="label" errorMessage={"some error"}>
          Remember me
        </Checkbox>

        <Button type="submit" className="mt-4 p-2">
          Submit form
        </Button>
      </form>;
  }
}`,...(u=(y=m.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,f,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const onSubmit = (): void => {
      //
    };
    return <form onSubmit={onSubmit}>
        <Flex m={{
        mb: 16
      }} md={{
        m: {
          mb: 24
        }
      }}>
          <Checkbox errorMessage={"error message"} data-testid="registration-form-remember-password-checkbox">
            <Flex flexWrap="wrap" whiteSpace="nowrap" gap={2} align="center">
              <Typography color="text-primary-muted" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                I am 18 years old and I accept the
              </Typography>
              <Button href={"/link"} p={{
              px: 0,
              py: 0
            }} size="small" variant="tertiary" color="text-selection" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                Terms and Conditions
              </Button>
              <Typography color="text-primary-muted" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                and
              </Typography>
              <Button href={"/link"} p={{
              px: 0,
              py: 0
            }} color="text-selection" size="small" variant="tertiary" fontSize="body.mobile.xsmall" lineHeight="body.mobile.xsmall">
                Privacy Policy
              </Button>
            </Flex>
          </Checkbox>
        </Flex>
      </form>;
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,k,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const onSubmit = (): void => {
      //
    };
    return <form onSubmit={onSubmit}>
        <Flex m={{
        mb: 16
      }} md={{
        m: {
          mb: 24
        }
      }}>
          <Checkbox data-testid="registration-form-remember-password-checkbox" customCheckbox={({
          isSelected
        }) => <Flex justify={"center"} align={"center"} bg={isSelected ? "surface-primary-default" : undefined} minWidth={22} minHeight={22} border={{
          color: isSelected ? "surface-primary-default" : "border-button",
          width: "2px",
          radius: "checkbox"
        }}>
                {isSelected && <CheckboxIcon />}
              </Flex>} errorMessage={<Typography m={{
          mt: 8
        }} color="text-destructive" fontSize="body.mobile.small" lineHeight="body.mobile.small">
                Please confirm that you have read the Terms and Conditions and
                Privacy Policy
              </Typography>}>
            <Flex flexWrap="wrap" whiteSpace="nowrap" gap={2} align="center">
              <Typography color="text-primary-muted" fontSize="body.mobile.small" lineHeight="body.mobile.small">
                I am 18 years old and I accept the
              </Typography>
              <Button href={"/link"} p={{
              px: 0,
              py: 0
            }} size="small" variant="tertiary" color="text-selection" fontSize="body.mobile.small" lineHeight="body.mobile.small">
                Terms and Conditions
              </Button>
              <Typography color="text-primary-muted" fontSize="body.mobile.small" lineHeight="body.mobile.small">
                and
              </Typography>
              <Button href={"/link"} p={{
              px: 0,
              py: 0
            }} color="text-selection" size="small" variant="tertiary" fontSize="body.mobile.small" lineHeight="body.mobile.small">
                Privacy Policy
              </Button>
            </Flex>
          </Checkbox>
        </Flex>
      </form>;
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,z,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const onSubmit = (): void => {
      //
    };
    return <form onSubmit={onSubmit}>
        <Flex m={{
        mb: 16
      }} md={{
        m: {
          mb: 24
        }
      }}>
          <Checkbox data-testid="registration-form-remember-password-checkbox" customCheckbox={({
          isSelected
        }) => <Flex justify={"center"} align={"center"} bg={isSelected ? "orange" : "green"} minWidth={28} minHeight={28} border={{
          color: isSelected ? "yellow" : "border-button",
          width: "2px",
          radius: "checkbox"
        }}>
                {isSelected && <Eye />}
              </Flex>} errorMessage={<Typography m={{
          mt: 8
        }} color="text-destructive" fontSize="body.mobile.small" lineHeight="body.mobile.small">
                Please confirm that you have read the Terms and Conditions and
                Privacy Policy
              </Typography>}>
            <Flex flexWrap="wrap" whiteSpace="nowrap" gap={2} align="center">
              <Typography color="text-primary-muted" fontSize="body.mobile.small" lineHeight="body.mobile.small">
                I am 18 years old and I accept the
              </Typography>
            </Flex>
          </Checkbox>
        </Flex>
      </form>;
  }
}`,...(w=(z=d.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const F=["Default","WithErrorMessage","WithErrorMessageAndCustomText","ValueChainCheckBox","CustomIconAndCheckbox"],N=Object.freeze(Object.defineProperty({__proto__:null,CustomIconAndCheckbox:d,Default:l,ValueChainCheckBox:c,WithErrorMessage:m,WithErrorMessageAndCustomText:s,__namedExportsOrder:F,default:P},Symbol.toStringTag,{value:"Module"}));export{l as D,m as W,N as s};
