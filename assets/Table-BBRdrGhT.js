import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as b}from"./index-B8rYRX2K.js";import{M as T,C as t,a}from"./index-CozCPVVo.js";import{s as r,D as m,W as i,a as s,L as C}from"./Table.stories-BulXszuF.js";import"./index-D4lIrffr.js";import"./iframe-B3aEQFlB.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./UserCircle-Blv_RV81.js";import"./DOMLayoutDelegate-h8l8aDcK.js";import"./useControlledState-YrJM5BK_.js";import"./platform-DzkwHEFt.js";import"./useLocalizedStringFormatter-Da5qmNid.js";import"./useUiKitComponents-t3zy5Zo0.js";import"./context-CsAOKUm5.js";import"./useFocusable-cChvM0Y4.js";import"./filterDOMProps-DievmF8q.js";import"./mergeProps-CASEEftK.js";import"./Box-C0ai5OC4.js";import"./index-HUzi1mn4.js";import"./useFocusRing-msPiLBLp.js";import"./useFocusWithin-Yfmk6-fR.js";import"./Checkbox-Bi8mrlbh.js";import"./useFormValidation-4fgG5orE.js";import"./index-DW2zCSF8.js";import"./Flex-1qlOEQeK.js";import"./VisuallyHidden-SZFRcEgu.js";function o(n){const l={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...b(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{of:r}),`
`,e.jsx(l.h1,{id:"table",children:"Table"}),`
`,e.jsx(l.p,{children:"Таблица — это компонент для отображения структурированных данных в табличном формате."}),`
`,e.jsx(t,{}),`
`,e.jsx(l.h2,{id:"default-code-example",children:"Default code example"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import { Table } from "./Table";

export const Page = () => {
  return (
    <Table aria-label="Example static collection table" className="w-[700px]">
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
`})}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(l.h2,{id:"withcheckbox-code-example",children:"WithCheckbox code example"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import { Table } from "./Table";

export const Page = () => {
  return (
    <Table aria-label="Table with selection" selectionMode="multiple">
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
`})}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(l.h2,{id:"dynamic-collections-code-example",children:"Dynamic Collections code example"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import { Table } from "./Table";
import { ReactNode } from "react";

export const Page = () => {
  const columns = [
    { name: "Name", key: "name" },
    { name: "Type", key: "type" },
    { name: "Icon", key: "icon" },
    { name: "Date Modified", key: "date" },
  ];

  const rows: Array<Record<string, string | number | (() => ReactNode)>> = [
    {
      id: 1,
      name: "Games",
      date: "6/7/2020",
      type: "File folder",
      icon: () => <UserCircle />,
    },
    {
      id: 2,
      name: "Program Files",
      date: "4/7/2021",
      type: "File folder",
      icon: () => <UserCircle />,
    },
    {
      id: 3,
      name: "bootmgr",
      date: "11/20/2010",
      type: "System file",
      icon: () => <UserCircle />,
    },
    {
      id: 4,
      name: "log.txt",
      date: "1/18/2016",
      type: "Text Document",
      icon: () => <UserCircle />,
    },
  ];

  return (
    <Table aria-label="Example dynamic collection table">
      <Table.Header columns={columns}>
        {(column) => <Table.Column>{column.name}</Table.Column>}
      </Table.Header>
      <Table.Body items={rows}>
        {rows.map((row) => (
          <Table.Row>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.date}</Table.Cell>
            <Table.Cell>{row.type}</Table.Cell>
            <Table.Cell>{row.icon()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
`})}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(l.h2,{id:"links-code-example",children:"Links code example"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import { Table } from "./Table";

export const Page = () => {
  return (
    <Table aria-label="Bookmarks" selectionMode="multiple">
      <Table.Header>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>URL</Table.Column>
        <Table.Column>Date added</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row href="https://adobe.com/" target="_blank">
          <Table.Cell>Adobe</Table.Cell>
          <Table.Cell>https://adobe.com/</Table.Cell>
          <Table.Cell>January 28, 2023</Table.Cell>
        </Table.Row>
        <Table.Row href="https://google.com/" target="_blank">
          <Table.Cell>Google</Table.Cell>
          <Table.Cell>https://google.com/</Table.Cell>
          <Table.Cell>April 5, 2023</Table.Cell>
        </Table.Row>
        <Table.Row href="https://nytimes.com/" target="_blank">
          <Table.Cell>New York Times</Table.Cell>
          <Table.Cell>https://nytimes.com/</Table.Cell>
          <Table.Cell>July 12, 2023</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
`})}),`
`,e.jsx(a,{of:C})]})}function S(n={}){const{wrapper:l}={...b(),...n.components};return l?e.jsx(l,{...n,children:e.jsx(o,{...n})}):o(n)}export{S as default};
