import{j as e}from"./index-Ft8_MerW.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as m,C as a,a as o}from"./index-Bq-XsrHB.js";import{s as i,D as l,W as c}from"./Checkbox.stories-qpPE0Dp5.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-OGYnBVhp.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Button-CAPFaw_d.js";import"./useUiKitTheme-C5kvrfGz.js";import"./useButton-dd5pBf-q.js";import"./useFocusable-o4p01FMq.js";import"./useFocus-DLFVK8E0.js";import"./useUiKitComponents-DDGs5vYn.js";import"./Checkbox-4GKypD5i.js";import"./useControlledState-Dxxc-Ijj.js";import"./useFormValidation-BlGUgCAh.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:i}),`
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
`,e.jsx(o,{of:c})]})}function y(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{y as default};
