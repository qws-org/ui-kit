import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as a,C as s,a as i}from"./index-9x1IY543.js";import{s as l,D as m,W as d,a as c,b as x}from"./TextField.stories-Bs8teuHi.js";import"./index-D4H_InIO.js";import"./iframe-B6uVPr9C.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./Button-Bin_V84l.js";import"./useUiKitTheme-Cy0pWRAz.js";import"./useButton-YENtSbt8.js";import"./useFocus-CgYBR30T.js";import"./useFocusable-CMHRg9rf.js";import"./useUiKitComponents-C0Cft4vM.js";import"./useFormValidation-CRkeO8jQ.js";import"./useControlledState-Dxxc-Ijj.js";import"./useField-D9D6f-j8.js";import"./useLabels-BjMgE2Wj.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(n.h1,{id:"textfield",children:"TextField"}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"default-code-example",children:"Default code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextField } from "./TextField";

export const Page = () => {
  return <TextField name="email" label="Email" />;
};
`})}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"with-validation-code-example",children:"With validation code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useForm } from "react-hook-form";
import { TextField } from "./TextField";
interface FormValues {
  email: string;
}

export const Page = () => {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit = (data: FormValues): void => {
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            name="email"
            label="Email"
            errorMessage={error?.message}
          />
        )}
      ></Controller>
      <Button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Submit
      </Button>
    </form>
  );
};
`})}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"with-icon-code-example",children:"With icon code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from "react";
import { TextField } from "./TextField";
import Eye from "~/icons";

export const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      label="Password"
      type={isVisible ? "text" : "password"}
      icon={
        <Eye
          onClick={() => setIsVisible(!isVisible)}
          className="cursor-pointer"
          viewBox="0 0 24 24"
        />
      }
    />
  );
};
`})}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"disabled-input-code-example",children:"Disabled input code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextField } from "./TextField";

export const Page = () => {
  return <TextField label="Disabled" value="Some text" isDisabled={true} />;
};
`})}),`
`,e.jsx(i,{of:x})]})}function I(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{I as default};
