import{j as n}from"./index-Ft8_MerW.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as a,C as i,a as s}from"./index-BYf0enIL.js";import{s as m,D as p}from"./Pagination.stories-Ao8LgEIV.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-CWxXcqqS.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Container--iqsP0fh.js";import"./Flex-Mc_sPhn9.js";import"./useUiKitTheme-ke_UWyhy.js";import"./Button-BwbWTW3s.js";import"./useButton-BpGCvew5.js";import"./useFocusable-4mfy1jsF.js";import"./useFocus-ChdfOe-o.js";import"./index-DW2zCSF8.js";import"./useUiKitComponents-jwg34nbo.js";function o(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:m}),`
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
