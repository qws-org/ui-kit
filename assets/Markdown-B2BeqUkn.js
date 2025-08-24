import{j as n}from"./index-Ft8_MerW.js";import{useMDXComponents as d}from"./index-BqIVwv1J.js";import{M as t,a as s}from"./index-BYf0enIL.js";import{s as a,D as l,A as i,W as c,C as h}from"./Markdown.stories-CKnO-QZa.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-CWxXcqqS.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Markdown-DpTJYixW.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-ke_UWyhy.js";function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:a}),`
`,n.jsx(r.h1,{id:"-markdown",children:"📝 Markdown"}),`
`,n.jsxs(r.p,{children:["Компонент ",n.jsx(r.strong,{children:"Markdown"}),` позволяет безопасно рендерить Markdown-разметку с поддержкой HTML и кастомных стилей.
Используется `,n.jsx(r.code,{children:"react-markdown"})," с ",n.jsx(r.code,{children:"rehype-raw"}),", ",n.jsx(r.code,{children:"remarkGfm"})," и ",n.jsx(r.code,{children:"rehype-sanitize"})," (настроенный), что защищает от XSS-атак."]}),`
`,n.jsx(r.h2,{id:"-возможности",children:"🔹 Возможности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Поддержка ",n.jsx(r.strong,{children:"Markdown"})," и ",n.jsx(r.strong,{children:"GFM"})," (GitHub Flavored Markdown)"]}),`
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
`,n.jsx(s,{of:l}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h3,{id:"2-расширенный-markdown",children:"2. Расширенный Markdown"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`export const Page = () => {
  return (
    <Markdown>
      {\`# 📌 Пример сложного Markdown
| Имя      | Возраст | Город     |
|----------|--------|-----------|
| Иван     | 25     | Москва    |
| Ольга    | 30     | Санкт-Петербург |

\\n\\n\\\`\\\`\\\`tsx
const hello = "Hello, world!";
console.log(hello);
\\\`\\\`\\\`

![Логотип](/public/promo-card.png)
> _Цитата_: "Markdown — это просто и удобно!"
    \`}
    </Markdown>
  );
};
`})}),`
`,n.jsx(s,{of:i}),`
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
`,n.jsx(s,{of:h})]})}function N(e={}){const{wrapper:r}={...d(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{N as default};
