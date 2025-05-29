import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import{M as a,C as i,a as m}from"./index-BKpzp5Yg.js";import{s,D as p}from"./Pagination.stories-55M2U6oK.js";import"./index-D4lIrffr.js";import"./iframe-CuhLx5RN.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Container-DBlPz0ZB.js";import"./Flex-DGlmxmDu.js";import"./Box-CSaHZSjV.js";import"./index-BQ0PN7Hq.js";import"./context-CsAOKUm5.js";import"./Button-CCEGoc2p.js";import"./useButton-CYvprEwE.js";import"./mergeProps-DUrzxDUC.js";import"./useUiKitComponents-C9IiVWkE.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D8DZ0gut.js";import"./index-DW2zCSF8.js";function e(o){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:s}),`
`,n.jsx(t.h1,{id:"pagination-component",children:"Pagination Component"}),`
`,n.jsx(t.p,{children:"Компонент для отображения пагинации. Он позволяет пользователям переключаться между страницами и отображать количество элементов на каждой странице."}),`
`,n.jsx(i,{}),`
`,n.jsx(t.h3,{id:"default-code-example",children:"Default code example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { useState } from "react";
import { Pagination } from "./Pagination";
import { Container } from "./Container";

const Page = () => {
  const [page, setPage] = useState(0);
  const content = \`Контент для страницы \${page + 1}\`;

  return (
    <>
      <Pagination
        totalPages={5}
        currentPage={page}
        onPageChange={setPage}
        itemsPerPage={10}
      />
      <Container justify="center" className="mt-20">
        {content}
      </Container>
    </>
  );
};
`})}),`
`,n.jsx(m,{of:p})]})}function R(o={}){const{wrapper:t}={...r(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(e,{...o})}):e(o)}export{R as default};
