import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as r,C as m,a as p}from"./index-llz_ILok.js";import{s as a,D as s}from"./Select.stories-B4Mm6DYj.js";import"./index-D4H_InIO.js";import"./iframe-CPgJier-.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./useFocus-CgYBR30T.js";import"./useFocusable-Gju1QyWb.js";import"./useSelectableList-BjjgV7O3.js";import"./useSelectableItem-CpbNzxqt.js";import"./useControlledState-Dxxc-Ijj.js";import"./FocusScope-DUS13MDn.js";import"./context-BAxB0ZoE.js";import"./useLocalizedStringFormatter-_Pjder9J.js";import"./Overlay-ByB2iytR.js";import"./useFocusWithin-DR07ZYpu.js";import"./getScrollParent-CcSDVQFU.js";import"./DOMLayoutDelegate-BzGFjWs9.js";import"./useField-D9D6f-j8.js";import"./useLabels-BjMgE2Wj.js";import"./useFormValidation-DsorJLxy.js";import"./VisuallyHidden-CsyuHRxB.js";import"./Button-BJb9rZYC.js";import"./useButton-CaPSVff3.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-DjQyAppb.js";import"./context-Cc1G11um.js";import"./useUiKitComponents-DylESbeD.js";import"./Flex-3EpvA234.js";import"./Box-DUOut8DD.js";import"./Popover-DeAcN1eT.js";import"./Typography-p8lIsy4w.js";import"./useSingleSelectListState-D7O9wF6B.js";import"./Item-CgDplN8L.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
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
