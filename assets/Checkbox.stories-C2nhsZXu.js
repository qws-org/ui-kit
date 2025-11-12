import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as a}from"./Button-BHZ5Ep1f.js";import{C as s}from"./Checkbox-nqVuUETW.js";import{F as i}from"./Flex-DZwNDL1C.js";import{T as m}from"./Typography-Cg5jG6_D.js";const f={title:"UI-Kit components/Checkbox",component:s,argTypes:{value:{control:"boolean",description:"Определяет, выбран ли чекбокс",defaultValue:!1},onChange:{action:"clicked",description:"Вызывается при изменении"},className:{control:"text",description:"Дополнительные классы стилей"}}},o={render:()=>{const r=()=>{};return e.jsxs("form",{onSubmit:r,children:[e.jsx(s,{"aria-label":"label",children:"Remember me"}),e.jsx(a,{type:"submit",className:"mt-4 p-2",children:"Submit form"})]})}},n={render:()=>{const r=()=>{};return e.jsxs("form",{onSubmit:r,children:[e.jsx(s,{"aria-label":"label",errorMessage:"some error",children:"Remember me"}),e.jsx(a,{type:"submit",className:"mt-4 p-2",children:"Submit form"})]})}},t={render:()=>{const r=()=>{};return e.jsx("form",{onSubmit:r,children:e.jsx(i,{m:{mb:16},md:{m:{mb:24}},children:e.jsx(s,{errorMessage:"error message","data-testid":"registration-form-remember-password-checkbox",children:e.jsxs(i,{flexWrap:"wrap",whiteSpace:"nowrap",gap:2,align:"center",children:[e.jsx(m,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"I am 18 years old and I accept the"}),e.jsx(a,{href:"/link",p:{px:0,py:0},size:"small",variant:"tertiary",color:"text-selection",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Terms and Conditions"}),e.jsx(m,{color:"text-primary-muted",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"and"}),e.jsx(a,{href:"/link",p:{px:0,py:0},color:"text-selection",size:"small",variant:"tertiary",fontSize:"body.mobile.xsmall",lineHeight:"body.mobile.xsmall",children:"Privacy Policy"})]})})})})}};var l,c,b;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var d,p,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,y,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const g=["Default","WithErrorMessage","WithErrorMessageAndCustomText"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithErrorMessage:n,WithErrorMessageAndCustomText:t,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{o as D,n as W,T as s};
