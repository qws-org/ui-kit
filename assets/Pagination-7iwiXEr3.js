import{j as n}from"./index-Ft8_MerW.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as a,C as i,a as s}from"./index-DLX3EtSJ.js";import{s as m,D as p}from"./Pagination.stories-CSpj78Nq.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-Df1mjntF.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Container-UdbH1d3R.js";import"./Flex-GcGlCw7p.js";import"./useUiKitTheme-Du1YBrOZ.js";import"./Button-CG0Oxb_m.js";import"./index-DW2zCSF8.js";import"./useButton-BRi74F_i.js";import"./useFocusable-_vzmwkyz.js";import"./useFocus-DEOU5YeA.js";import"./useUiKitComponents-BuxsVqJe.js";function o(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:m}),`
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
`,n.jsx(s,{of:p})]})}function w(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{w as default};
