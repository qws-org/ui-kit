import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B8rYRX2K.js";import{M as s,C as i,a as o}from"./index-BnQhhLlR.js";import{s as a,D as l,W as c}from"./Checkbox.stories-BhGiTjXy.js";import"./index-D4lIrffr.js";import"./iframe-Caz9N9Ix.js";import"./index-CLq2iIfz.js";import"./index-D5gmOSW9.js";import"./index-BB7Ugo0s.js";import"./index-COJM9-cB.js";import"./index-DrFu-skq.js";import"./Button-fk38tfQ5.js";import"./useButton-XCm6Pd7v.js";import"./mergeProps-BZNQxkBP.js";import"./useFocus-DvfpPP1Y.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-N1sfzKbq.js";import"./index-DW2zCSF8.js";import"./useUiKitTheme-BHsjZyyA.js";import"./context-CsAOKUm5.js";import"./useUiKitComponents-DIX1Mu9T.js";import"./Checkbox-EAsXL3Gy.js";import"./useFormValidation-Q-SgiexM.js";import"./filterDOMProps-DievmF8q.js";import"./Flex-DQ7WdT-u.js";import"./Box-CAJ1XJ0R.js";import"./useControlledState-YrJM5BK_.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(n.p,{children:"Чекбокс для контроля состояния"}),`
`,e.jsx(i,{}),`
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
`,e.jsx(o,{of:c})]})}function P(r={}){const{wrapper:n}={...m(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{P as default};
