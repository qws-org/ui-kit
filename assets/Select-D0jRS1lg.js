import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import{M as r,C as m,a as p}from"./index-BLc-jCGZ.js";import{s as a,D as s}from"./Select.stories-CunW_Ixp.js";import"./index-D4lIrffr.js";import"./iframe-P_1ocutt.js";import"./index-CLq2iIfz.js";import"./index-D5gmOSW9.js";import"./index-BB7Ugo0s.js";import"./index-COJM9-cB.js";import"./index-DrFu-skq.js";import"./mergeProps-BZNQxkBP.js";import"./useFocus-DvfpPP1Y.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-CIvweun7.js";import"./useSelectableItem-DQ22AzUs.js";import"./useControlledState-YrJM5BK_.js";import"./useFocusable-N1sfzKbq.js";import"./context-HS_7-J2N.js";import"./DOMLayoutDelegate-D025XxFm.js";import"./platform-BAdLVq7s.js";import"./useLocalizedStringFormatter-CPvLHNrx.js";import"./Overlay-CCJpmfyJ.js";import"./useFocusWithin-Di0NsHIX.js";import"./domHelpers-DlYETLWZ.js";import"./useField-Cqr_UoFf.js";import"./useLabels-BtbtmvqZ.js";import"./useFormValidation-Q-SgiexM.js";import"./VisuallyHidden-C9c9jqDY.js";import"./Button-fk38tfQ5.js";import"./useButton-XCm6Pd7v.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-BHsjZyyA.js";import"./context-CsAOKUm5.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./Flex-b_z6POeh.js";import"./Box-CJVPrit5.js";import"./Popover-CBwOV9YB.js";import"./Typography-S7uqsy0X.js";import"./useSingleSelectListState-HyHKrJUw.js";import"./Item-Uk9RLypc.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
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
`,t.jsx(p,{of:s})]})}function Y(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{Y as default};
