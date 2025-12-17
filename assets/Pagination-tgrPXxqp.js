import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as a,C as i,a as s}from"./index-DDemPcoB.js";import{s as m,D as p}from"./Pagination.stories-B-YsxXSv.js";import"./index-D4H_InIO.js";import"./iframe-DqQR06Rk.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Container-BKDHI-cO.js";import"./useUiKitTheme-Bt_xIoyh.js";import"./Button-GRDrw_OS.js";import"./useButton-BW3PNPly.js";import"./useFocus-CgYBR30T.js";import"./useFocusable-C_0kSj5S.js";import"./useUiKitComponents-uxtylMnl.js";function o(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:m}),`
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
`,n.jsx(s,{of:p})]})}function v(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{v as default};
