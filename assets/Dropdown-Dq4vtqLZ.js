import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import{M as p,C as d,a as e}from"./index-B4Kn7NvO.js";import{s as m,D as s,S as l,H as c,a,W as w,L as D,C as g,b as x}from"./Dropdown.stories-Dcu1aXcu.js";import"./index-D4lIrffr.js";import"./iframe-Cv57I_Xs.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./mergeProps-GaW3dV0e.js";import"./useFocus-D2ojjsQ8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useSelectableList-USng65Rc.js";import"./useSelectableItem-Djo7LuCV.js";import"./useControlledState-YrJM5BK_.js";import"./useFocusable-BNl4w5lM.js";import"./context-aDVZuYJC.js";import"./DOMLayoutDelegate-BXCuDDgy.js";import"./platform-B5sWMkIr.js";import"./useLocalizedStringFormatter-Ct5GFiyD.js";import"./Overlay-Cl96hl_H.js";import"./useFocusWithin-C81oifS1.js";import"./domHelpers-DlYETLWZ.js";import"./Grid-D2lB8SHq.js";import"./index-DW2zCSF8.js";import"./Box-CZTpjBDf.js";import"./useUiKitTheme-CDzDdjzd.js";import"./context-CsAOKUm5.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./Popover-D4m3exf6.js";import"./VisuallyHidden-lHSg-BsG.js";import"./useButton-RPoKjpgA.js";import"./Item-Uk9RLypc.js";import"./Flex-6Vn_NZ6t.js";import"./Typography-B9nr8FfT.js";import"./UserCircle-Blv_RV81.js";function t(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:m}),`
`,n.jsx(o.h1,{id:"dropdown",children:"Dropdown"}),`
`,n.jsx(o.p,{children:"Компонент для группировки элементов в выпадающем меню"}),`
`,n.jsx(d,{}),`
`,n.jsx(o.h2,{id:"default-code-example",children:"Default code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

<Dropdown.Trigger
  strategy="click"
  onAction={(key) => alert(key)}
  triggerElement={<button>Click to Open</button>}
>
  <Dropdown.Item key="adobe">Adobe</Dropdown.Item>
  <Dropdown.Item key="apple">Apple</Dropdown.Item>
  <Dropdown.Item key="google">Google</Dropdown.Item>
  <Dropdown.Item key="microsoft">Microsoft</Dropdown.Item>
</Dropdown.Trigger>;
`})}),`
`,n.jsx(e,{of:s}),`
`,n.jsx(o.h2,{id:"section-code-example",children:"Section code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

<Dropdown.Trigger
  strategy="click"
  onAction={(key) => alert(key)}
  triggerElement={<button>Click to Open</button>}
  cols={2}
>
  <Dropdown.Section title="Styles">
    <Dropdown.Item key="bold">Bold</Dropdown.Item>
    <Dropdown.Item key="underline">Underline</Dropdown.Item>
  </Dropdown.Section>
  <Dropdown.Section title="Align">
    <Dropdown.Item key="left">Left</Dropdown.Item>
    <Dropdown.Item key="middle">Middle</Dropdown.Item>
    <Dropdown.Item key="right">Right</Dropdown.Item>
  </Dropdown.Section>
</Dropdown.Trigger>;
`})}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(o.h2,{id:"hover-strategy-code-example",children:"Hover strategy code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
import { Grid } from "./Grid";

<Dropdown.Trigger
  strategy="hover"
  onAction={(key) => alert(key)}
  triggerElement={<div>Hover to open</div>}
  dropdownWrapper={(wrapperProps) => (
    <Grid gap={8} cols={2}>
      {wrapperProps.children}
    </Grid>
  )}
>
  <Dropdown.Section title="Styles">
    <Dropdown.Item key="italic">Italic</Dropdown.Item>
    <Dropdown.Item key="strike">Strikethrough</Dropdown.Item>
  </Dropdown.Section>
  <Dropdown.Section title="Alignment">
    <Dropdown.Item key="justify">Justify</Dropdown.Item>
    <Dropdown.Item key="left">Left</Dropdown.Item>
    <Dropdown.Item key="right">Right</Dropdown.Item>
  </Dropdown.Section>
</Dropdown.Trigger>;
`})}),`
`,n.jsx(e,{of:c}),`
`,n.jsx(o.h2,{id:"dynamic-items-code-example",children:"Dynamic items code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
import { Grid } from "./Grid";

const openWindows = [
  {
    name: "Left Panel",
    id: "left",
    children: [{ id: 1, name: "Final Copy (1)" }],
  },
  {
    name: "Right Panel",
    id: "right",
    children: [
      { id: 2, name: "index.tsx" },
      { id: 3, name: "package.json" },
      { id: 4, name: "license.txt" },
    ],
  },
];

return (
  <Dropdown.Trigger
    strategy="click"
    onAction={(key) => alert(key)}
    triggerElement={<div>Click me</div>}
    dropdownWrapper={(wrapperProps) => (
      <Grid gap={8} cols={2}>
        {wrapperProps.children}
      </Grid>
    )}
    items={openWindows}
  >
    {(item) => (
      <Dropdown.Section items={item.children} title={item.name}>
        {(sectionItem) => <Dropdown.Item>{sectionItem.name}</Dropdown.Item>}
      </Dropdown.Section>
    )}
  </Dropdown.Trigger>
);
`})}),`
`,n.jsx(e,{of:a}),`
`,n.jsx(o.h2,{id:"items-with-icon-code-example",children:"Items with icon code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
import { Flex } from "./Flex";
import { UserCircle } from "~/icons";

<Dropdown.Trigger
  triggerElement={<div>Click to open</div>}
  onAction={alert}
  disabledKeys={["paste"]}
>
  <Dropdown.Item key="copy">
    <Flex align="center" gap={16}>
      <UserCircle viewBox="0 0 32 32" className="w-6 h-6" />
      <div>Cope</div>
    </Flex>
  </Dropdown.Item>
  <Dropdown.Item key="cut">
    <Flex align="center" gap={16}>
      <UserCircle viewBox="0 0 32 32" className="w-6 h-6" />
      <div>Cut</div>
    </Flex>
  </Dropdown.Item>
  <Dropdown.Item key="paste">
    <Flex align="center" gap={16}>
      <UserCircle viewBox="0 0 32 32" className="w-6 h-6" />
      <div>Paste</div>
    </Flex>
  </Dropdown.Item>
</Dropdown.Trigger>;
`})}),`
`,n.jsx(e,{of:w}),`
`,n.jsx(o.h2,{id:"link-items-code-example",children:"Link items code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

<Dropdown.Trigger triggerElement={<button>Click to open</button>}>
  <Dropdown.Item href="https://adobe.com/" target="_blank">
    Adobe
  </Dropdown.Item>
  <Dropdown.Item href="https://apple.com/" target="_blank">
    Apple
  </Dropdown.Item>
  <Dropdown.Item href="https://google.com/" target="_blank">
    Google
  </Dropdown.Item>
  <Dropdown.Item href="https://microsoft.com/" target="_blank">
    Microsoft
  </Dropdown.Item>
</Dropdown.Trigger>;
`})}),`
`,n.jsx(e,{of:D}),`
`,n.jsx(o.h2,{id:"custom-wrapper-code-example",children:"Custom wrapper code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
import { Grid } from "./Grid";

<Dropdown.Trigger
  strategy="hover"
  onAction={(key) => alert(key)}
  triggerElement={<div>Hover to see</div>}
  dropdownWrapper={(wrapperProps) => (
    <Grid gap={8} cols={2}>
      {wrapperProps.children}
    </Grid>
  )}
>
  <Dropdown.Section title="Styles">
    <Dropdown.Item key="italic">Italic</Dropdown.Item>
    <Dropdown.Item key="strike">Strikethrough</Dropdown.Item>
  </Dropdown.Section>
  <Dropdown.Section title="Alignment">
    <Dropdown.Item key="justify">Justify</Dropdown.Item>
    <Dropdown.Item key="left">Left</Dropdown.Item>
    <Dropdown.Item key="right">Right</Dropdown.Item>
  </Dropdown.Section>
</Dropdown.Trigger>;
`})}),`
`,n.jsx(e,{of:g}),`
`,n.jsx(o.h2,{id:"custom-offset-code-example",children:"Custom offset code example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

<Dropdown.Trigger
  strategy="hover"
  offset={30}
  onAction={(key) => alert(key)}
  triggerElement={<div>Hover to see</div>}
>
  <Dropdown.Section title="Alignment">
    <Dropdown.Item key="justify">Justify</Dropdown.Item>
    <Dropdown.Item key="left">Left</Dropdown.Item>
    <Dropdown.Item key="right">Right</Dropdown.Item>
  </Dropdown.Section>
</Dropdown.Trigger>;
`})}),`
`,n.jsx(e,{of:x})]})}function on(r={}){const{wrapper:o}={...i(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(t,{...r})}):t(r)}export{on as default};
