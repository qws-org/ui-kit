import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as r,C as m,a}from"./index-Bn6zGJbH.js";import{s as p,D as s}from"./Select.stories-C_x8llAa.js";import"./index-D4H_InIO.js";import"./iframe-BcT0rs9s.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Button-CAXjdyie.js";import"./useUiKitTheme-qKKajU3v.js";import"./useButton-YENtSbt8.js";import"./useFocus-CgYBR30T.js";import"./useFocusable-CMHRg9rf.js";import"./useUiKitComponents-CnNCZUzY.js";import"./Flex-CF-VKm85.js";import"./Popover-BAz-NspZ.js";import"./Overlay-CvQAKytZ.js";import"./useControlledState-Dxxc-Ijj.js";import"./FocusScope-BAFQ_4OF.js";import"./useFocusWithin-DR07ZYpu.js";import"./getScrollParent-Bbxi3i5a.js";import"./context-BAxB0ZoE.js";import"./useLabels-BjMgE2Wj.js";import"./useLocalizedStringFormatter-_Pjder9J.js";import"./VisuallyHidden-CsyuHRxB.js";import"./Typography-DJ2ydDmn.js";import"./useMenuTrigger-DdI6U5_Q.js";import"./useSelectableItem-BZpOY1DC.js";import"./DOMLayoutDelegate-BeVqlZGt.js";import"./useField-D9D6f-j8.js";import"./useFormValidation-DsorJLxy.js";import"./useSingleSelectListState-Bq7BdRPx.js";import"./Item-CgDplN8L.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:p}),`
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
`,t.jsx(a,{of:s})]})}function Q(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{Q as default};
