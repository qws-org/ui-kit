import{j as e}from"./index-Ft8_MerW.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as r,C as m,a}from"./index-DPl9Boyf.js";import{s,D as c}from"./Select.stories-CQO_eqyv.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-PkfGnSBL.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Button-bMtkucD1.js";import"./useUiKitTheme-CYtl-eFU.js";import"./useButton-BKE6a1No.js";import"./useFocusable-DgiKHf_j.js";import"./useFocus-DOcXS7Ug.js";import"./useUiKitComponents-CnsSmy5U.js";import"./Typography-QM0IFXKp.js";import"./useMenuTrigger-BB-0h2PF.js";import"./useSelectableItem-mDVLH0iM.js";import"./useControlledState-Dxxc-Ijj.js";import"./DOMLayoutDelegate-BOL2hZvB.js";import"./useOverlayTrigger-DSHIka3b.js";import"./useField-t4duyfMa.js";import"./useFormValidation-BC5NhZu-.js";import"./useSingleSelectListState-CQD_bKGB.js";import"./Item-CgDplN8L.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
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
`,e.jsx(a,{of:c})]})}function L(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{L as default};
