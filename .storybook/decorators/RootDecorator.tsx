import type { DecoratorFunction } from "@storybook/types";
import type { ReactRenderer } from "@storybook/react";
import { forwardRef } from "react";
import { createCssVars } from "~/components/ui-kit-provider/createCssVars";
import { UIKitProvider } from "~/components";
import { createTheme } from "~/components/ui-kit-provider/createTheme";

export const UiKitDecorator: DecoratorFunction<ReactRenderer> = Story => {
  return (
    <div style={createCssVars(createTheme())}>
      <UIKitProvider
        value={{
          components: {
            Link: forwardRef((props, ref) => {
              return (
                <a {...props} ref={ref}>
                  {props.children}
                </a>
              );
            })
          },
          theme: createTheme({
            fontFamily: {
              accent_name: "system-ui",
              main_name: "Inter",
              additional_name: "ui-sans-serif"
            }
          })
        }}
      >
        <Story />
      </UIKitProvider>
    </div>
  );
};
