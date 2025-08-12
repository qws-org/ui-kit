import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-B8rYRX2K.js";import{M as r,C as i,a as e}from"./index-DzllYPrt.js";import{s as m,D as u,W as p}from"./Tabs.stories-C9CsenJG.js";import"./index-D4lIrffr.js";import"./iframe-C0jV0Nhk.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Box-DYkW17j1.js";import"./useUiKitTheme-CDzDdjzd.js";import"./context-CsAOKUm5.js";import"./Button-CkodgV2P.js";import"./useButton-RPoKjpgA.js";import"./mergeProps-GaW3dV0e.js";import"./useFocus-D2ojjsQ8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BNl4w5lM.js";import"./index-DW2zCSF8.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./Container-JthdvK1K.js";import"./Flex-B7HfSnK3.js";import"./useLabels-XqkGmuYA.js";import"./context-aDVZuYJC.js";import"./useSelectableItem-Djo7LuCV.js";import"./useControlledState-YrJM5BK_.js";import"./useSingleSelectListState-CVbR9NgS.js";import"./useHasTabbableChild-jmXaA5kw.js";import"./filterDOMProps-DievmF8q.js";import"./Item-Uk9RLypc.js";function t(s){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:m}),`
`,n.jsx(a.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(a.p,{children:"Tabs — это компонент для Табов"}),`
`,n.jsx(i,{}),`
`,n.jsx(a.h2,{id:"default-code-example",children:"Default code example"}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-tsx",children:`import { Tabs } from "@qws-org/ui-kit";

export const Page = () => {
  return (
    <Tabs aria-label="History of Ancient Rome">
      <Tabs.Item key="FoR" title="Founding of Rome">
        Arma virumque cano, Troiae qui primus ab oris.
      </Tabs.Item>
      <Tabs.Item key="MaR" title="Monarchy and Republic">
        <Box p={10}>Senatus Populusque Romanus.</Box>
      </Tabs.Item>
      <Tabs.Item key="Emp" title="Empire">
        Alea jacta est.
      </Tabs.Item>
    </Tabs>
  );
};
`})}),`
`,n.jsx(a.h2,{id:"controlled-state-example",children:"Controlled state example"}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-tsx",children:`import { Tabs, Button } from "@qws-org/ui-kit";
import { useState } from "react";

export const Page = () => {
  const [state, setState] = useState<string>("MaR");

  return (
    <Tabs
      aria-label="History of Ancient Rome"
      selectedKey={state}
      tabPanelProps={{ p: 8 }}
      tabListProps={{
        m: { mb: 8 },
        p: 4,
      }}
    >
      <Tabs.Item
        key="FoR"
        title={
          <Button
            variant="secondary"
            size="xsmall"
            md={{ size: "small", p: { px: 24, py: 8 } }}
            className={\`rounded\`}
            isActive={state === "FoR"}
            onPress={() => {
              setState("FoR");
            }}
          >
            Tab 1 state
          </Button>
        }
      >
        Senatus Populusque Romanus. asdasd 12132131231231231231 Arma virumque
        cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus
        ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma
        virumque cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae
        qui primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. |
      </Tabs.Item>
      <Tabs.Item
        key="MaR"
        title={
          <Button
            variant="secondary"
            size="xsmall"
            className={\`rounded\`}
            isActive={state === "MaR"}
            md={{ size: "small", p: { px: 24, py: 8 } }}
            onPress={() => {
              setState("MaR");
            }}
          >
            Tab 2 state
          </Button>
        }
      >
        Senatus Populusque Romanus. Troiae qui primus ab oris. | Arma virumque
        cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus
        ab oris. | asdasdas asdasd 2121211 alskdmlaskdmlasknd asd | Arma
        virumque cano, Troiae qui primus ab oris. | asdasdas asdasd 2121211
        alskdmlaskdmlasknd asd a sdasdasdasdasds ss 2121211 alskdmlaskdmlasknd
        asd a sdasdasdasdasds ss
      </Tabs.Item>
      <Tabs.Item
        key="Rak"
        title={
          <Button
            variant="secondary"
            isDisabled={true}
            size="xsmall"
            md={{ size: "small", p: { px: 24, py: 8 } }}
            className={\`rounded\`}
          >
            Tab disabled
          </Button>
        }
      >
        Senatus Populusque Romanus.
      </Tabs.Item>
    </Tabs>
  );
};
`})})]})}function _(s={}){const{wrapper:a}={...o(),...s.components};return a?n.jsx(a,{...s,children:n.jsx(t,{...s})}):t(s)}export{_ as default};
