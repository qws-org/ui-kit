import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as m}from"./index-BqIVwv1J.js";import{M as s,C as a,a as o}from"./index-CtFo_Mmx.js";import{s as i,D as l,W as c}from"./Checkbox.stories-B9fQ621c.js";import"./index-D4H_InIO.js";import"./iframe-BkWR46h9.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Button-5eXfwccG.js";import"./useUiKitTheme-CDuF9_Q_.js";import"./useButton-YENtSbt8.js";import"./useFocus-CgYBR30T.js";import"./useFocusable-CMHRg9rf.js";import"./useUiKitComponents-DyQDbwSn.js";import"./Checkbox-6h7kmBjn.js";import"./Typography-DXKVHb9x.js";import"./useControlledState-Dxxc-Ijj.js";import"./useFormValidation-CRkeO8jQ.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(n.p,{children:"Чекбокс для контроля состояния"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"default-code-example",children:"Default code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "~/components/checkbox/Checkbox";


export const Page = () => {
  const { handleSubmit, control } = useForm<FormValues>({
  defaultValues: { isRemember: false },
});

const onSubmit = (data: FormValues): void => {
  alert(JSON.stringify(data));
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      control={control}
      name="isRemember"
      rules={{ required: false }}
      render={({ field, fieldState: { error } }) => (
        <Checkbox aria-label="label" errorMessage={error?.message} {...field}>
          Remember me
        </Checkbox>
      )}
    ></Controller>
  </form>
);
`})}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"witherrormessage-code-example",children:"WithErrorMessage code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Checkbox } from "~/components/checkbox/Checkbox";


export const Page = () => {
const { handleSubmit, control } = useForm<FormValues>({
  defaultValues: { isRemember: false },
});

const onSubmit = (data: FormValues): void => {
  alert(JSON.stringify(data));
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
     <Controller
      control={control}
      name="isRemember"
      rules={{
        required: "Вы должны согласиться с условиями!",
      }}
      render={({ field, fieldState: { error } }) => (
        <Checkbox aria-label="label" errorMessage={error?.message} {...field}>
          Remember me
        </Checkbox>
      )}
    ></Controller>
  </form>
)
);
`})}),`
`,e.jsx(o,{of:c})]})}function W(r={}){const{wrapper:n}={...m(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{W as default};
