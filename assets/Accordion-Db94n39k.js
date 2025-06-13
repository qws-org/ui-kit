import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-B8rYRX2K.js";import{M as d,C as i,a as t}from"./index-P-GiKtwA.js";import{s,D as c,S as m,a as p,C as l,b as x}from"./Accordion.stories-BcJHWt2p.js";import"./index-D4lIrffr.js";import"./iframe-5PGY8IH9.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./useFocusRing-Cjk9jXmb.js";import"./useFocus-D2ojjsQ8.js";import"./useFocusWithin-C81oifS1.js";import"./mergeProps-GaW3dV0e.js";import"./index-DW2zCSF8.js";import"./Box-DDJXXdIg.js";import"./useUiKitTheme-Dh9h4W8C.js";import"./context-CsAOKUm5.js";import"./Flex-DkManfot.js";import"./useControlledState-YrJM5BK_.js";import"./Grid-BrT_Vj2A.js";import"./Text-CPt9xDgH.js";import"./Markdown-B3h2meT0.js";import"./useUiKitComponents-DIX1Mu9T.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(n.p,{children:"Компонент для показа элементов в выпадающем блоке"}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"default-code-example",children:"Default code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "./Accordion";

const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

const handleExpandedChange = (keys: Set<ID>): void => {
  setExpandedKeys(keys);
  args.onExpandedChange?.(keys);
};

return (
  <Accordion
    {...args}
    onExpandedChange={handleExpandedChange}
    expandedKeys={expandedKeys}
  >
    <Accordion.Item id="item-1" title="Item 1">
      <Text
        content="## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France
"
      />
    </Accordion.Item>
    <Accordion.Item id="item-2" title="Item 2">
      Content for Item 2
    </Accordion.Item>
    <Accordion.Item id="item-3" title="Item 3">
      Content for Item 3
    </Accordion.Item>
  </Accordion>
);
`})}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"secondary-code-example",children:"Secondary code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "./Accordion";

const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

const handleExpandedChange = (keys: Set<ID>): void => {
  setExpandedKeys(keys);
  args.onExpandedChange?.(keys);
};

return (
  <Accordion
    {...args}
    onExpandedChange={handleExpandedChange}
    expandedKeys={expandedKeys}
  >
    <Accordion.Item id="item-1" title="Место для заголовка" variant="secondary">
      <Text
        content="## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
"
      />
    </Accordion.Item>
    <Accordion.Item id="item-2" title="Например текст" variant="secondary">
      Content for Item 2
    </Accordion.Item>
    <Accordion.Item
      id="item-3"
      title={<Link href="/">Или ссылка на главную</Link>}
      variant="secondary"
    >
      Content for Item 3
    </Accordion.Item>
  </Accordion>
);
`})}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h2,{id:"disabled-code-example",children:"Disabled code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "./Accordion";

const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

const handleExpandedChange = (keys: Set<ID>): void => {
  setExpandedKeys(keys);
  args.onExpandedChange?.(keys);
};

return (
  <Accordion
    {...args}
    onExpandedChange={handleExpandedChange}
    expandedKeys={expandedKeys}
  >
    <Accordion.Item id="item-1" title="Disabled" variant="primary" isDisabled>
      {null}
    </Accordion.Item>
  </Accordion>
);
`})}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"customdurations-code-example",children:"CustomDurations code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "./Accordion";

const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

const handleExpandedChange = (keys: Set<ID>): void => {
  setExpandedKeys(keys);
  args.onExpandedChange?.(keys);
};

return (
  <Accordion
    {...args}
    onExpandedChange={handleExpandedChange}
    expandedKeys={expandedKeys}
  >
    <Accordion.Item id="item-1" title="500" variant="primary" duration={500}>
      500ms
    </Accordion.Item>
    <Accordion.Item id="item-2" title="800" variant="primary" duration={800}>
      800ms
    </Accordion.Item>
    <Accordion.Item id="item-3" title="1500" variant="primary" duration={1500}>
      1500ms
    </Accordion.Item>
  </Accordion>
);
`})}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h2,{id:"customheadingwrapper-code-example",children:"CustomHeadingWrapper code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from "./Accordion";
import { Flex } from "../flex/Flex";
import { Grid } from "../grid/Grid";

const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

const handleExpandedChange = (keys: Set<ID>): void => {
  setExpandedKeys(keys);
  args.onExpandedChange?.(keys);
};

return (
  <Accordion
    {...args}
    onExpandedChange={handleExpandedChange}
    expandedKeys={expandedKeys}
  >
    <Accordion.Item
      id="item-1"
      title="Grid with 2 columns"
      variant="primary"
      headingWrapper={(wrapperProps) => (
        <Grid gap={18} cols={2}>
          {wrapperProps.children}
        </Grid>
      )}
    >
      500ms
    </Accordion.Item>
    <Accordion.Item
      id="item-2"
      title="Flex justify-content:center"
      variant="primary"
      headingWrapper={(wrapperProps) => (
        <Flex gap={24} align="center" justify="center" flexDirection="row">
          {wrapperProps.children}
        </Flex>
      )}
    >
      800ms
    </Accordion.Item>
    <Accordion.Item
      headingWrapper={(wrapperProps) => (
        <Flex gap={8} align="end">
          {wrapperProps.children}
        </Flex>
      )}
      id="item-3"
      title="Flex align-items: end"
      variant="primary"
    >
      1500ms
    </Accordion.Item>
  </Accordion>
);
`})}),`
`,e.jsx(t,{of:x})]})}function L(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{L as default};
