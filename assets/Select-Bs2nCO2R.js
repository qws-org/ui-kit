import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import{M as r,C as m,a as p}from"./index-Bfhr4E6W.js";import{s as a,D as s}from"./Select.stories-DOkxLD5T.js";import"./index-D4lIrffr.js";import"./iframe-D3JORo6B.js";import"./index-CLq2iIfz.js";import"./index-D5gmOSW9.js";import"./index-BB7Ugo0s.js";import"./index-COJM9-cB.js";import"./index-DrFu-skq.js";import"./Button-By9hWAFk.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-BHsjZyyA.js";import"./context-CsAOKUm5.js";import"./useButton-DzidsXC8.js";import"./useFocus-CQXXRA8U.js";import"./useFocusable-BOYJSphf.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./Flex-C7UOgSUL.js";import"./Box-6kaav-hc.js";import"./Popover-W5vvqBVY.js";import"./Overlay-Bua0Yu3e.js";import"./useControlledState-YrJM5BK_.js";import"./FocusScope-BrTNS4Jf.js";import"./useFocusWithin-CIsqjyvK.js";import"./getScrollParent-BRCFsFyw.js";import"./context-Cl5CEQk8.js";import"./useLabels-n3tdNzqm.js";import"./useLocalizedStringFormatter-DZjTBg1_.js";import"./VisuallyHidden-Db3mqzsr.js";import"./Typography-88DkPW9h.js";import"./useMenuTrigger-DkXfiP5q.js";import"./useSelectableItem-B_JS6ELj.js";import"./getChildNodes-Bq8KL8Fw.js";import"./useField-BilHrmha.js";import"./useSingleSelectListState-Cgw24Jcx.js";import"./useFormValidation-D42ZibEu.js";import"./Item-Uk9RLypc.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
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
