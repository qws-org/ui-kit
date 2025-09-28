import{j as n}from"./index-Ft8_MerW.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as a,C as i,a as s}from"./index-BwFTH4k5.js";import{s as m,D as p}from"./Pagination.stories-Cb9qUkAd.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-Cmt_AnbV.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Container-CxiN2yjc.js";import"./useUiKitTheme-Bm1YgxiY.js";import"./Button-Cn_LNC6T.js";import"./useButton-yxU4cSIp.js";import"./useFocusable-dMAG_HWZ.js";import"./useFocus-D4o5HSaK.js";import"./useUiKitComponents-gUHRxiEb.js";function o(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:m}),`
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
`,n.jsx(s,{of:p})]})}function _(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{_ as default};
