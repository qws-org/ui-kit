import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as p}from"./index-BqIVwv1J.js";import{M as o,a as i,C as s}from"./index-CV22t337.js";import{s as a,D as m}from"./StripeWrapper.stories-BNSZRaWM.js";import"./index-D4H_InIO.js";import"./iframe-CuI2flP8.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Box-CQyR4qo4.js";import"./useUiKitTheme-C48eyZgp.js";import"./context-Cc1G11um.js";function t(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(o,{of:a}),`
`,r.jsx(e.h1,{id:"stripewrapper",children:"StripeWrapper"}),`
`,r.jsxs(e.p,{children:["Компонент ",r.jsx(e.code,{children:"StripeWrapper"}),` используется для обёртки разделов с декоративным градиентным фоном.
В зависимости от значения `,r.jsx(e.code,{children:"variant"})," меняется внешний вид фона и возможны накладываемые текстуры."]}),`
`,r.jsx(e.h2,{id:"пример-использования",children:"Пример использования"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { StripeWrapper } from "./StripeWrapper";

export const Page = () => {
  return (
    <StripeWrapper variant="default">
      <div style={{ padding: "40px", color: "#fff", fontSize: "18px" }}>
        Это пример содержимого внутри StripeWrapper с вариантом \`default\`.
      </div>
    </StripeWrapper>
  );
};
`})}),`
`,r.jsx(i,{of:m}),`
`,r.jsx(s,{})]})}function D(n={}){const{wrapper:e}={...p(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}export{D as default};
