import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import{M as r,C as m,a as p}from"./index-DbMMGOpH.js";import{s as a,D as s}from"./Select.stories-DF7Qza_Z.js";import"./index-D4lIrffr.js";import"./iframe-C6cKlpxb.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./mergeProps-GaW3dV0e.js";import"./useFocus-D2ojjsQ8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-USng65Rc.js";import"./useSelectableItem-Djo7LuCV.js";import"./useControlledState-YrJM5BK_.js";import"./useFocusable-BNl4w5lM.js";import"./context-aDVZuYJC.js";import"./DOMLayoutDelegate-BXCuDDgy.js";import"./platform-B5sWMkIr.js";import"./useLocalizedStringFormatter-Ct5GFiyD.js";import"./Overlay-Cl96hl_H.js";import"./useFocusWithin-C81oifS1.js";import"./domHelpers-DlYETLWZ.js";import"./useField-CQxhKAei.js";import"./useLabels-XqkGmuYA.js";import"./useFormValidation-DaIofYaP.js";import"./VisuallyHidden-lHSg-BsG.js";import"./Button-MLfn-IT1.js";import"./useButton-RPoKjpgA.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-DryOdeWV.js";import"./context-CsAOKUm5.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./Flex-Bpd_qDZI.js";import"./Box-C54T_NY9.js";import"./Popover-B7smkQAd.js";import"./Typography-Z8V1F9DW.js";import"./useSingleSelectListState-CVbR9NgS.js";import"./Item-Uk9RLypc.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
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
