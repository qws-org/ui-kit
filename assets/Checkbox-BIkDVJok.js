import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B8rYRX2K.js";import{M as s,C as a,a as o}from"./index-8uVnR5l4.js";import{s as i,D as l,W as c}from"./Checkbox.stories-DwQ52AIO.js";import"./index-D4lIrffr.js";import"./iframe-DykHN_85.js";import"./index-CLq2iIfz.js";import"./index-D5gmOSW9.js";import"./index-BB7Ugo0s.js";import"./index-COJM9-cB.js";import"./index-DrFu-skq.js";import"./Button-By9hWAFk.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-BHsjZyyA.js";import"./context-CsAOKUm5.js";import"./useButton-DzidsXC8.js";import"./useFocus-CQXXRA8U.js";import"./useFocusable-BOYJSphf.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./Checkbox-uia5aHC6.js";import"./Flex-b_z6POeh.js";import"./Box-CJVPrit5.js";import"./useControlledState-YrJM5BK_.js";import"./useFormValidationState-Bf_Dt4YH.js";import"./useFormValidation-D42ZibEu.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
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
`,e.jsx(o,{of:c})]})}function J(r={}){const{wrapper:n}={...m(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{J as default};
