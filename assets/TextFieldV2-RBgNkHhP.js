import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as r}from"./index-BqIVwv1J.js";import{M as a,C as s,a as i}from"./index-BGTSpsMC.js";import{s as l,P as m,W as d,a as c,D as p}from"./TextFieldV2.stories-Brwvkt_C.js";import"./index-D4H_InIO.js";import"./iframe-Bf3xMTqj.js";import"./index-DPVFUrEK.js";import"./index-BFEZrabH.js";import"./index-BVDRNj0I.js";import"./index-CpTPxDuj.js";import"./index-DrFu-skq.js";import"./index-De9P05t2.js";import"./useFocus-CgYBR30T.js";import"./useFocusable-C_0kSj5S.js";import"./useFormValidation-CRkeO8jQ.js";import"./useControlledState-Dxxc-Ijj.js";import"./useField-D9D6f-j8.js";import"./useLabels-BjMgE2Wj.js";import"./useUiKitTheme-DRsOAG-Q.js";import"./context-Cc1G11um.js";import"./Button-D6IUDoYd.js";import"./index-DW2zCSF8.js";import"./useButton-BW3PNPly.js";import"./useUiKitComponents-DylESbeD.js";import"./Flex-Dk9qKK9N.js";import"./Typography-60h-W8HI.js";import"./Eye-CyNTCh-E.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(n.h1,{id:"textfieldv2",children:"TextFieldV2"}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"primary-code-example",children:"Primary code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextFieldV2 } from "./TextFieldV2";

export const Page = () => {
  return <TextFieldV2 name="email" label="Email" />;
};
`})}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"with-validation-code-example",children:"With validation code example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useForm } from "react-hook-form";
import { TextFieldV2 } from "./TextFieldV2";
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
          <TextFieldV2
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
import { TextFieldV2 } from "./TextFieldV2";
import Eye from "~/icons";

export const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextFieldV2
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextFieldV2 } from "./TextFieldV2";

export const Page = () => {
  return <TextFieldV2 label="Disabled" value="Some text" isDisabled={true} />;
};
`})}),`
`,e.jsx(i,{of:p})]})}function _(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{_ as default};
