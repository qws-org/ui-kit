import{j as n}from"./index-Ft8_MerW.js";import{useMDXComponents as i}from"./index-BqIVwv1J.js";import{M as p,C as d,a as o}from"./index-DPl9Boyf.js";import{s as m,D as s,S as l,H as c,a,W as w,L as D,C as g,b as x}from"./Dropdown.stories-D2tow2B3.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-PkfGnSBL.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./useUiKitTheme-CYtl-eFU.js";import"./Grid-DFlArAlT.js";import"./useUiKitComponents-CnsSmy5U.js";import"./useFocusable-DgiKHf_j.js";import"./useFocus-DOcXS7Ug.js";import"./useMenuTrigger-BB-0h2PF.js";import"./useSelectableItem-mDVLH0iM.js";import"./useControlledState-Dxxc-Ijj.js";import"./DOMLayoutDelegate-BOL2hZvB.js";import"./useOverlayTrigger-DSHIka3b.js";import"./useButton-BKE6a1No.js";import"./Item-CgDplN8L.js";import"./Typography-QM0IFXKp.js";import"./UserCircle-BQL9HpC5.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:m}),`
`,n.jsx(e.h1,{id:"dropdown",children:"Dropdown"}),`
`,n.jsx(e.p,{children:"Компонент для группировки элементов в выпадающем меню"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"default-code-example",children:"Default code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

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
`,n.jsx(o,{of:s}),`
`,n.jsx(e.h2,{id:"section-code-example",children:"Section code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

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
`,n.jsx(o,{of:l}),`
`,n.jsx(e.h2,{id:"hover-strategy-code-example",children:"Hover strategy code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
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
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h2,{id:"dynamic-items-code-example",children:"Dynamic items code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
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
`,n.jsx(o,{of:a}),`
`,n.jsx(e.h2,{id:"items-with-icon-code-example",children:"Items with icon code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
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
`,n.jsx(o,{of:w}),`
`,n.jsx(e.h2,{id:"link-items-code-example",children:"Link items code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

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
`,n.jsx(o,{of:D}),`
`,n.jsx(e.h2,{id:"custom-wrapper-code-example",children:"Custom wrapper code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";
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
`,n.jsx(o,{of:g}),`
`,n.jsx(e.h2,{id:"custom-offset-code-example",children:"Custom offset code example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dropdown } from "./Dropdown";

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
`,n.jsx(o,{of:x})]})}function U(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{U as default};
