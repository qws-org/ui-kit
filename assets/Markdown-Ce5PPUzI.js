import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as t}from"./index-BqIVwv1J.js";import{M as i,a as s}from"./index-BreElDIb.js";import{s as d,D as a,W as c,C as l}from"./Markdown.stories-DVpyqHad.js";import"./index-D4H_InIO.js";import"./iframe-Gw8aZQQ4.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Markdown-ZWyBOL_x.js";import"./useUiKitTheme-BOjJSFQX.js";function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(r.h1,{id:"-markdown",children:"📝 Markdown"}),`
`,n.jsxs(r.p,{children:["Компонент ",n.jsx(r.strong,{children:"Markdown"}),` позволяет безопасно рендерить Markdown-разметку с поддержкой HTML и кастомных стилей.
Используется `,n.jsx(r.code,{children:"react-markdown"})," с ",n.jsx(r.code,{children:"rehype-raw"})," и ",n.jsx(r.code,{children:"rehype-sanitize"})," (настроенный), что защищает от XSS-атак."]}),`
`,n.jsx(r.h2,{id:"-возможности",children:"🔹 Возможности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Рендеринг HTML-контента (опционально)"}),`
`,n.jsx(r.li,{children:"Кастомные классы для стилизации"}),`
`,n.jsx(r.li,{children:"Поддержка ссылок, изображений, таблиц и списков"}),`
`,n.jsx(r.li,{children:"Безопасный рендеринг с возможностью настройки"}),`
`]}),`
`,n.jsx(r.h2,{id:"-использование",children:"🚀 Использование"}),`
`,n.jsx(r.h3,{id:"1-базовый-пример",children:"1. Базовый пример"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`export const Page = () => {
  return (
    <Markdown>
      {\`# Заголовок 1\\n\\nТекст **жирный**, *курсив*, ~~зачеркнутый~~.\`}
    </Markdown>
  );
};
`})}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h3,{id:"3-поддержка-html",children:"3. Поддержка HTML"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`export const Page = () => {
  return (
    <Markdown>
      {\`<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст</p>\`}
    </Markdown>
  );
};
`})}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h3,{id:"4-кастомные-стили",children:"4. Кастомные стили"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`export const Page = () => {
  return (
    <Markdown className="text-purple-400">
      {\`### 🌟 Кастомные стили
- Это список
- Стили применяются через className
- Можно настроить разную типографику  \`}
    </Markdown>
  );
};
`})}),`
`,n.jsx(s,{of:l})]})}function D(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{D as default};
