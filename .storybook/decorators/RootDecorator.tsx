import type { DecoratorFunction } from "@storybook/types";
import type { ReactRenderer } from "@storybook/react";
import { forwardRef } from "react";
import "../../dist/styles.css";
import { createCssVars } from "~/components/ui-kit-provider/createCssVars";
import { UIKitProvider } from "~/components";
import { createTheme } from "~/components/ui-kit-provider/createTheme";

export const UiKitDecorator: DecoratorFunction<ReactRenderer> = (Story) => {
  return (
    <div style={createCssVars(createTheme(`en`))}>
      <UIKitProvider
        value={{
          components: {
            Link: forwardRef((props) => {
              return <a {...props}>{props.children}</a>;
            }),
          },
          theme: createTheme(`en`),
        }}
      >
        <Story />
      </UIKitProvider>
    </div>
  );
};
