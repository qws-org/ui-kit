import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import{M as i,C as a,a as o}from"./index-D8GfI49G.js";import{s as l,D as p,C as d,a as m}from"./Skeleton.stories-CWqeAOd9.js";import"./index-D4lIrffr.js";import"./iframe-BgQQ7j4A.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Card-Dco74std.js";import"./index-DW2zCSF8.js";import"./Flex-TM4AhM4W.js";import"./Box-wLYmVYdB.js";import"./useUiKitTheme-CDzDdjzd.js";import"./context-CsAOKUm5.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"skeleton-component",children:"Skeleton Component"}),`
`,e.jsx(n.p,{children:"Компонент Skeleton используется для отображения состояния загрузки с различными конфигурациями. Он может быть настроен с помощью параметров ширины, высоты, радиуса скругления."}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"default-code-example",children:"Default code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Skeleton from "./Skeleton";

export const Page = () => {
  return <Skeleton width="100px" height="20px" radius={4} />;
};
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"circle-skeleton-code-example",children:"Circle skeleton code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Skeleton from "./Skeleton";

export const Page = () => {
  return <Skeleton width="40px" height="40px" radius={20} />;
};
`})}),`
`,e.jsx(o,{of:d}),`
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
`,e.jsx(o,{of:m})]})}function _(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{_ as default};
