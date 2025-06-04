import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B8rYRX2K.js";import{M as s,C as a,a as o}from"./index-D1rpY6LD.js";import{s as i,D as l,W as c}from"./Checkbox.stories-BPuotAhL.js";import"./index-D4lIrffr.js";import"./iframe-il-6-qox.js";import"./index-CLq2iIfz.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-CxkxwWo1.js";import"./useButton-CYvprEwE.js";import"./mergeProps-DUrzxDUC.js";import"./useUiKitComponents-C9IiVWkE.js";import"./context-CsAOKUm5.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D8DZ0gut.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-C4kvSEf-.js";import"./Checkbox-5QUp86r9.js";import"./useFormValidation-qOg9Jg0s.js";import"./filterDOMProps-DievmF8q.js";import"./Flex-CTyey3MI.js";import"./Box-DzqLYFGs.js";import"./useControlledState-YrJM5BK_.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
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
`,e.jsx(o,{of:c})]})}function O(r={}){const{wrapper:n}={...m(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{O as default};
