import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import{M as r,C as m,a as p}from"./index-Dtt9t80r.js";import{s as a,D as s}from"./Select.stories-WS4abUSl.js";import"./index-D4lIrffr.js";import"./iframe-iLS8BcMk.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./mergeProps-DUrzxDUC.js";import"./useUiKitComponents-C9IiVWkE.js";import"./context-CsAOKUm5.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-DwTC9Pje.js";import"./useSelectableItem-hE6E3-ha.js";import"./useControlledState-YrJM5BK_.js";import"./useFocusable-D8DZ0gut.js";import"./context-AwJ7Bysb.js";import"./DOMLayoutDelegate-CB6F2zeR.js";import"./platform-B5sWMkIr.js";import"./useLocalizedStringFormatter-DRHSxfLT.js";import"./Overlay-Czkf0Q-5.js";import"./useFocusWithin-yXpf04FA.js";import"./domHelpers-DlYETLWZ.js";import"./useField-DETpCQtd.js";import"./useLabels-CiyqkEhI.js";import"./useFormValidation-qOg9Jg0s.js";import"./VisuallyHidden-CCy9mHEe.js";import"./Button-CxkxwWo1.js";import"./useButton-CYvprEwE.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-C4kvSEf-.js";import"./Flex-8R0VwYOh.js";import"./Box-B6khdfe8.js";import"./Popover-BWoZxGs6.js";import"./useSingleSelectListState-CndHVQ32.js";import"./Item-Uk9RLypc.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
`,t.jsx(e.h1,{id:"select",children:"Select"}),`
`,t.jsx(e.p,{children:"Select — это компонент для отображения выпадающего списка с выбором опции, позволяющий пользователю выбрать один из предложенных вариантов."}),`
`,t.jsx(m,{}),`
`,t.jsx(e.h2,{id:"default-code-example",children:"Default code example"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { useState } from "react";
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
`,t.jsx(p,{of:s})]})}function V(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{V as default};
