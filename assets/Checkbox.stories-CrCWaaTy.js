import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as u}from"./Button-BnmsPwwv.js";import{C as n}from"./Checkbox-TJogn293.js";const b={title:"UI-Kit components/Checkbox",component:n,argTypes:{value:{control:"boolean",description:"Определяет, выбран ли чекбокс",defaultValue:!1},onChange:{action:"clicked",description:"Вызывается при изменении"},className:{control:"text",description:"Дополнительные классы стилей"}}},r={render:()=>{const t=()=>{};return e.jsxs("form",{onSubmit:t,children:[e.jsx(n,{"aria-label":"label",children:"Remember me"}),e.jsx(u,{type:"submit",className:"mt-4 p-2",children:"Submit form"})]})}},o={render:()=>{const t=()=>{};return e.jsxs("form",{onSubmit:t,children:[e.jsx(n,{"aria-label":"label",errorMessage:"some error",children:"Remember me"}),e.jsx(u,{type:"submit",className:"mt-4 p-2",children:"Submit form"})]})}};var s,a,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const p=["Default","WithErrorMessage"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithErrorMessage:o,__namedExportsOrder:p,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,o as W,S as s};
