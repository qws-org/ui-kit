import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-B8rYRX2K.js";import{M as r,C as i,a as e}from"./index-XQNTQzhb.js";import{s as m,D as u,W as p}from"./Tabs.stories-CRY6YL4t.js";import"./index-D4lIrffr.js";import"./iframe-CaPki8c1.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Box-CCqxjOYT.js";import"./context-CsAOKUm5.js";import"./index-HUzi1mn4.js";import"./Button-BqGQKWfW.js";import"./useButton-CYvprEwE.js";import"./mergeProps-DUrzxDUC.js";import"./useUiKitComponents-C9IiVWkE.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D8DZ0gut.js";import"./index-DW2zCSF8.js";import"./Container-CdrhJll-.js";import"./Flex-DJWhnznN.js";import"./useLabels-CiyqkEhI.js";import"./context-AwJ7Bysb.js";import"./useSelectableItem-hE6E3-ha.js";import"./useControlledState-YrJM5BK_.js";import"./useSingleSelectListState-CndHVQ32.js";import"./useHasTabbableChild-BRVyzT68.js";import"./filterDOMProps-DievmF8q.js";import"./Item-Uk9RLypc.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return a.jsxs(a.Fragment,{children:[a.jsx(r,{of:m}),`
`,a.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,a.jsx(n.p,{children:"Tabs — это компонент для Табов"}),`
`,a.jsx(i,{}),`
`,a.jsx(n.h2,{id:"default-code-example",children:"Default code example"}),`
`,a.jsx(e,{of:u}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-tsx",children:`import { Tabs } from "./Tabs";

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
`,a.jsx(n.h2,{id:"controlled-state-example",children:"Controlled state example"}),`
`,a.jsx(e,{of:p}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-tsx",children:`import { Tabs } from "./Tabs";
import { useState } from "react";

export const Page = () => {
  const [state, setState] = useState<string>("MaR");

  return (
    <Tabs aria-label="History of Ancient Rome" selectedKey={state}>
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
        <Box p={10}>
          Senatus Populusque Romanus. asdasd 12132131231231231231 Arma virumque
          cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui
          primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. |
          Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
          Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab
          oris. |
        </Box>
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
        <Box p={10}>
          Senatus Populusque Romanus. Troiae qui primus ab oris. | Arma virumque
          cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui
          primus ab oris. | asdasdas asdasd 2121211 alskdmlaskdmlasknd asd |
          Arma virumque cano, Troiae qui primus ab oris. | asdasdas asdasd
          2121211 alskdmlaskdmlasknd asd a sdasdasdasdasds ss 2121211
          alskdmlaskdmlasknd asd a sdasdasdasdasds ss
        </Box>
      </Tabs.Item>
      <Tabs.Item
        key="Rak"
        title={
          <Button
            variant="secondary"
            isDisabled={true}
            size="xsmall"
            className={\`rounded\`}
          >
            Tab disabled
          </Button>
        }
      >
        <Box p={10}>Senatus Populusque Romanus. </Box>
      </Tabs.Item>
    </Tabs>
  );
};
`})})]})}function w(s={}){const{wrapper:n}={...o(),...s.components};return n?a.jsx(n,{...s,children:a.jsx(t,{...s})}):t(s)}export{w as default};
