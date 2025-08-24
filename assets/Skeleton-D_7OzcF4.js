import{j as e}from"./index-Ft8_MerW.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as i,C as a,a as o}from"./index-BYf0enIL.js";import{s as l,D as d,C as p,a as c}from"./Skeleton.stories-Dp0ibiUR.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-CWxXcqqS.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Card-CfExYSAt.js";import"./index-DW2zCSF8.js";import"./Flex-Mc_sPhn9.js";import"./useUiKitTheme-ke_UWyhy.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"skeleton-component",children:"Skeleton Component"}),`
`,e.jsx(n.p,{children:"Компонент Skeleton используется для отображения состояния загрузки с различными конфигурациями. Он может быть настроен с помощью параметров ширины, высоты, радиуса скругления."}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"default-code-example",children:"Default code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Skeleton from "./Skeleton";

export const Page = () => {
  return <Skeleton width="100px" height="20px" radius={4} />;
};
`})}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"circle-skeleton-code-example",children:"Circle skeleton code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Skeleton from "./Skeleton";

export const Page = () => {
  return <Skeleton width="40px" height="40px" radius={20} />;
};
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"card-skeleton-code-example",children:"Card skeleton code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Skeleton from "./Skeleton";
import { Card } from "./Card";

export const Page = () => {
  return (
    <Card className="p-4 space-y-4 max-w-sm">
      <Skeleton width="100%" height="180px" radius={8} />

      <Skeleton width="60%" height="20px" radius={4} />

      <Skeleton width="80%" height="16px" radius={4} />

      <Skeleton width="70%" height="16px" radius={4} />

      <Skeleton width="50%" height="36px" radius={4} />
    </Card>
  );
};
`})}),`
`,e.jsx(o,{of:c})]})}function P(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{P as default};
