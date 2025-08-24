import{j as e}from"./index-Ft8_MerW.js";import{useMDXComponents as m}from"./index-BqIVwv1J.js";import{M as s,C as a,a as o}from"./index-BYf0enIL.js";import{s as i,D as l,W as c}from"./Checkbox.stories-CIfH4v4s.js";import"./index-D4H_InIO.js";import"./index-BVDRNj0I.js";import"./iframe-CWxXcqqS.js";import"./index-DPVFUrEK.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Button-BwbWTW3s.js";import"./useButton-BpGCvew5.js";import"./useUiKitTheme-ke_UWyhy.js";import"./useFocusable-4mfy1jsF.js";import"./useFocus-ChdfOe-o.js";import"./index-DW2zCSF8.js";import"./useUiKitComponents-jwg34nbo.js";import"./Checkbox-DqYFScfD.js";import"./useFormValidation-DhA_msgH.js";import"./Flex-Mc_sPhn9.js";import"./useControlledState-Dxxc-Ijj.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
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
