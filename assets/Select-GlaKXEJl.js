import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import{M as r,C as m,a}from"./index-DeByEmcb.js";import{s,D as p}from"./Select.stories-6kwwKrYR.js";import"./index-D4lIrffr.js";import"./iframe-CJlllouR.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./mergeProps-CASEEftK.js";import"./useUiKitComponents-t3zy5Zo0.js";import"./context-CsAOKUm5.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-GvURuuA5.js";import"./DOMLayoutDelegate-h8l8aDcK.js";import"./useControlledState-YrJM5BK_.js";import"./platform-DzkwHEFt.js";import"./useLocalizedStringFormatter-Da5qmNid.js";import"./useFocusable-cChvM0Y4.js";import"./Overlay-Dtg55f1a.js";import"./useFocusWithin-Yfmk6-fR.js";import"./domHelpers-DlYETLWZ.js";import"./useField-BMaf1bP8.js";import"./useFormValidation-4fgG5orE.js";import"./VisuallyHidden-SZFRcEgu.js";import"./Button-DLqEWYsL.js";import"./useButton-Bw-pT_gu.js";import"./index-DW2zCSF8.js";import"./index-HUzi1mn4.js";import"./Flex-DUmTjnib.js";import"./Box-C6JyXJL8.js";import"./Popover-DjGcZcoV.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
`,e.jsx(t.h1,{id:"select",children:"Select"}),`
`,e.jsx(t.p,{children:"Select — это компонент для отображения выпадающего списка с выбором опции, позволяющий пользователю выбрать один из предложенных вариантов."}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"default-code-example",children:"Default code example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useState } from "react";
import { Item, Key } from "react-stately";
import { Select } from "./Select";

export const Page = () => {
  const options = [
    { id: 1, name: "Aerospace" },
    { id: 2, name: "Mechanical" },
    { id: 3, name: "Civil" },
    { id: 4, name: "Biomedical" },
    { id: 5, name: "Nuclear" },
    { id: 6, name: "Industrial" },
    { id: 7, name: "Chemical" },
    { id: 8, name: "Agricultural" },
    { id: 9, name: "Electrical" },
  ];

  const [state, setState] = useState<Key>(options[0].id);

  return (
    <Select
      selectedKey={state}
      onSelectionChange={(selected) => setState(selected)}
      items={options}
    >
      {(item) => (
        <Item key={item.id}>
          <div>{item.name}</div>
        </Item>
      )}
    </Select>
  );
};
`})}),`
`,e.jsx(a,{of:p})]})}function J(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{J as default};
