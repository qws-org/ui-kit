import{j as e}from"./index-Ft8_MerW.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as r,C as m,a}from"./index-BYf0enIL.js";import{s,D as c}from"./Select.stories-BFC9WnMJ.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-CWxXcqqS.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./useUiKitTheme-ke_UWyhy.js";import"./useFocusable-4mfy1jsF.js";import"./useFocus-ChdfOe-o.js";import"./useSelectableList-CDOXt1ZO.js";import"./useSelectableItem-DUlcbu1M.js";import"./useControlledState-Dxxc-Ijj.js";import"./useOverlayTrigger-DTYi0-Lm.js";import"./DOMLayoutDelegate-Xogrb-fy.js";import"./useField-DXk8RsV2.js";import"./useFormValidation-DhA_msgH.js";import"./Button-BwbWTW3s.js";import"./useButton-BpGCvew5.js";import"./index-DW2zCSF8.js";import"./useUiKitComponents-jwg34nbo.js";import"./Flex-Mc_sPhn9.js";import"./Typography-BtOtJ8FM.js";import"./useSingleSelectListState-Ct_kcQ03.js";import"./Item-CgDplN8L.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
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
`,e.jsx(a,{of:c})]})}function R(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{R as default};
