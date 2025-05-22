import type { DecoratorFunction } from "@storybook/types";
import type { ReactRenderer } from "@storybook/react";
import { forwardRef } from "react";
import "../../dist/styles.css";
import { createCssVars } from "~/components/ui-kit-provider/createCssVars";
import {
  UIKitProvider,
  UIKitProviderTheme,
  FontSize,
  LineHeight,
  FontWeight,
  Spacing,
  Colors,
} from "~/components";

export const createTheme = (
  currentLang: string,
  entry?: any,
): UIKitProviderTheme => {
  const fontSize: FontSize = {
    headline: {
      desktop: {
        large: entry?.fontSize?.desktop_large_headline ?? 48,
        medium: entry?.fontSize?.desktop_medium_headline ?? 42,
      },
      mobile: {
        large: entry?.fontSize?.mobile_large_headline ?? 24,
        medium: entry?.fontSize?.mobile_medium_headline ?? 22,
      },
    },
    title: {
      desktop: {
        large: entry?.fontSize?.desktop_large_title ?? 48,
        medium: entry?.fontSize?.desktop_medium_title ?? 36,
        small: entry?.fontSize?.desktop_small_title ?? 22,
        xsmall: entry?.fontSize?.desktop_xsmall_title ?? 16,
      },
      mobile: {
        large: entry?.fontSize?.mobile_large_title ?? 28,
        medium: entry?.fontSize?.mobile_medium_title ?? 22,
        small: entry?.fontSize?.mobile_small_title ?? 20,
        xsmall: entry?.fontSize?.mobile_xsmall_title ?? 14,
      },
    },
    body: {
      desktop: {
        large: entry?.fontSize?.desktop_large_body ?? 22,
        medium: entry?.fontSize?.desktop_medium_body ?? 18,
        small: entry?.fontSize?.desktop_small_body ?? 14,
      },
      mobile: {
        large: entry?.fontSize?.mobile_large_body ?? 16,
        medium: entry?.fontSize?.mobile_medium_body ?? 14,
        small: entry?.fontSize?.mobile_small_body ?? 12,
      },
    },
    button: {
      desktop: {
        large: entry?.fontSize?.desktop_large_button ?? 22,
        medium: entry?.fontSize?.desktop_medium_button ?? 20,
        small: entry?.fontSize?.desktop_small_button ?? 16,
        xsmall: entry?.fontSize?.desktop_xsmall_button ?? 14,
      },
      mobile: {
        large: entry?.fontSize?.mobile_large_button ?? 22,
        medium: entry?.fontSize?.mobile_medium_button ?? 20,
        small: entry?.fontSize?.mobile_small_button ?? 16,
        xsmall: entry?.fontSize?.mobile_xsmall_button ?? 14,
      },
    },
  };

  const lineHeight: LineHeight = {
    headline: {
      desktop: {
        large: entry?.lineHeight?.desktop_large_headline ?? 48,
        medium: entry?.lineHeight?.desktop_medium_headline ?? 42,
      },
      mobile: {
        large: entry?.lineHeight?.mobile_large_headline ?? 24,
        medium: entry?.lineHeight?.mobile_medium_headline ?? 22,
      },
    },
    title: {
      desktop: {
        large: entry?.lineHeight?.desktop_large_title ?? 48,
        medium: entry?.lineHeight?.desktop_medium_title ?? 36,
        small: entry?.lineHeight?.desktop_small_title ?? 22,
        xsmall: entry?.lineHeight?.desktop_xsmall_title ?? 16,
      },
      mobile: {
        large: entry?.lineHeight?.mobile_large_title ?? 28,
        medium: entry?.lineHeight?.mobile_medium_title ?? 22,
        small: entry?.lineHeight?.mobile_small_title ?? 20,
        xsmall: entry?.lineHeight?.mobile_xsmall_title ?? 14,
      },
    },
    body: {
      desktop: {
        large: entry?.lineHeight?.desktop_large_body ?? 22,
        medium: entry?.lineHeight?.desktop_medium_body ?? 18,
        small: entry?.lineHeight?.desktop_small_body ?? 14,
      },
      mobile: {
        large: entry?.lineHeight?.mobile_large_body ?? 16,
        medium: entry?.lineHeight?.mobile_medium_body ?? 14,
        small: entry?.lineHeight?.mobile_small_body ?? 14,
      },
    },
    button: {
      desktop: {
        large: entry?.lineHeight?.desktop_large_button ?? 22,
        medium: entry?.lineHeight?.desktop_medium_button ?? 20,
        small: entry?.lineHeight?.desktop_small_button ?? 16,
        xsmall: entry?.lineHeight?.desktop_xsmall_button ?? 16,
      },
      mobile: {
        large: entry?.lineHeight?.mobile_large_button ?? 22,
        medium: entry?.lineHeight?.mobile_medium_button ?? 20,
        small: entry?.lineHeight?.mobile_small_button ?? 16,
        xsmall: entry?.lineHeight?.mobile_xsmall_button ?? 16,
      },
    },
  };

  const fontWeight: FontWeight = {
    desktop: {
      superbold: entry?.fontWeight?.desktop_superbold ?? 900,
      bold: entry?.fontWeight?.desktop_bold ?? 700,
      semibold: entry?.fontWeight?.desktop_semibold ?? 600,
      normal: entry?.fontWeight?.desktop_normal ?? 400,
      light: entry?.fontWeight?.desktop_light ?? 100,
    },
    mobile: {
      superbold: entry?.fontWeight?.mobile_superbold ?? 900,
      bold: entry?.fontWeight?.mobile_bold ?? 700,
      semibold: entry?.fontWeight?.mobile_semibold ?? 600,
      normal: entry?.fontWeight?.mobile_normal ?? 400,
      light: entry?.fontWeight?.mobile_light ?? 100,
    },
  };
  const spacing: Spacing = {
    0: "0px",
    2: "2px",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
    40: "40px",
    48: "48px",
    56: "56px",
    64: "64px",
    80: "80px",
    96: "96px",
    auto: "auto",
  };

  const colors: Colors = {
    "surface-delete": "#DD4952",
    "surface-disabled": "#FFFFFF33",
    // background
    "background-primary": entry?.colors?.background_primary ?? "#000000",
    "background-secondary": entry?.colors?.background_secondary ?? "#171717",
    "background-transparent":
      entry?.colors?.background_transparent ?? "#00000080",
    "background-accent1":
      entry?.colors?.background_accent1 ??
      "linear-gradient(270deg, #F4AD23 0%, #FF3D00 50%, #6A2DC0 100%);",
    "background-accent2":
      entry?.colors?.background_accent2 ??
      "linear-gradient(90deg, #FFC169 0%, #FFFAEA 25%, #FBA2C6 42%, #F057A2 55%, #985BE7 70%, #60ABED 85%, #50E6C1 100%);",

    // border
    "border-accent": entry?.colors?.border_accent ?? "#F9D48C",
    "border-destructive": entry?.colors?.border_destructive ?? "#DD4952",
    "border-primary": entry?.colors?.border_primary ?? "#FFFFFF",
    "border-selection": entry?.colors?.border_selected ?? "#C49BFC",
    "border-subtle": entry?.colors?.border_subtle ?? "#FFFFFF33",

    // text
    "text-accent-default": entry?.colors?.text_accent_default ?? "#F6BA46",
    "text-accent-hovered": entry?.colors?.text_accent_hovered ?? "#F9D48C",
    "text-accent-grad":
      entry?.colors?.text_accent_grad ??
      "linear-gradient(180deg, #FBE1B0 0%, #F6BA46 100%);",
    "text-destructive": entry?.colors?.text_destructive ?? "#DD4952",
    "text-disabled": entry?.colors?.text_disabled ?? "#FFFFFF33",
    "text-selection": entry?.colors?.text_selection ?? "#C49BFC",
    "text-success": entry?.colors?.text_success ?? "#66C95B",
    "text-primary-default": entry?.colors?.text_primary_default ?? "#FFFFFF",
    "text-primary-hovered": entry?.colors?.text_primary_hovered ?? "#A66BFA",
    "text-primary-inverted": entry?.colors?.text_primary_inverted ?? "#000000",
    "text-primary-muted": entry?.colors?.text_primary_muted ?? "#FFFFFFB3",
    "text-secondary-default":
      entry?.colors?.text_secondary_default ?? "#FFFFFF80",
    "text-secondary-hovered":
      entry?.colors?.text_secondary_hovered ?? "#FFFFFF",

    // surface

    "surface-destructive-default":
      entry?.colors?.surface_destructive_default ?? "#D92933",
    "surface-destructive-subtle":
      entry?.colors?.surface_destructive_subtle ?? "#D9293333",

    "surface-neutral-dark-default":
      entry?.colors?.surface_neutral_dark_default ?? "#00000066",
    "surface-neutral-dark-hovered":
      entry?.colors?.surface_neutral_dark_hovered ?? "#000000B3",
    "surface-neutral-default":
      entry?.colors?.surface_neutral_default ?? "#FFFFFF1A",
    "surface-neutral-hovered":
      entry?.colors?.surface_neutral_hovered ?? "#FFFFFF33",
    "surface-neutral-light":
      entry?.colors?.surface_neutral_light ?? "#FFFFFF33",
    "surface-neutral-subtle":
      entry?.colors?.surface_neutral_subtle ?? "#FFFFFF08",

    "surface-primary-default":
      entry?.colors?.surface_primary_default ?? "#FFFFFF",
    "surface-primary-dark": entry?.colors?.surface_primary_dark ?? "#401A75",
    "surface-primary-hovered":
      entry?.colors?.surface_primary_hovered ?? "#9854F8",
    "surface-primary-subtle":
      entry?.colors?.surface_primary_subtle ?? "#893BF733",
    "surface-primary-grad-default":
      entry?.colors?.surface_primary_grad_default ??
      "linear-gradient(90deg, #6A2DC0 0%, #FF3D00 100%);",
    "surface-primary-grad-hovered":
      entry?.colors?.surface_primary_grad_hovered ??
      "linear-gradient(90deg, #FF3D00 0%, #893BF7 100%);",
    "surface-primary-grad-pressed":
      entry?.colors?.surface_primary_grad_pressed ??
      "linear-gradient(90deg, #A1210B 0%, #55239A 100%);",
    "surface-primary-grad-subtle":
      entry?.colors?.surface_primary_grad_subtle ??
      "linear-gradient(360deg, #2B1050 0%, rgba(43, 16, 80, 0.5) 100%);",

    "surface-tetriary-hovered":
      entry?.colors?.surface_tetriary_hovered ?? "#FFFFFF",

    "surface-secondary-default":
      entry?.colors?.surface_secondary_default ?? "#FFFFFF",
    "surface-secondary-hovered":
      entry?.colors?.surface_secondary_hovered ?? "#D4D4D4",

    "surface-accent1-default":
      entry?.colors?.surface_accent1_default ??
      "linear-gradient(270deg, #55239A 0%, #9854F8 50%, #55239A 100%);",
    "surface-accent2-default":
      entry?.colors?.surface_accent2_default ??
      "linear-gradient(270deg, #55239A 0%, #9854F8 50%, #55239A 100%),\n" +
        "linear-gradient(0deg,  rgba(0, 0, 0, 0.2),  rgba(0, 0, 0, 0.2);",
    "surface-accent1-hovered":
      entry?.colors?.surface_accent1_hovered ??
      "linear-gradient(270deg, #55239A 0%, #9854F8 50%, #55239A 100%),\n" +
        "linear-gradient(0deg,  rgba(0, 0, 0, 0.2),  rgba(0, 0, 0, 0.2);",
    "surface-accent2-hovered":
      entry?.colors?.surface_accent2_hovered ??
      "linear-gradient(90deg, #DCC3FE 0%, #FFCEA5 33%, #E3FAD6 66%, #CEFDFE 100%),\n" +
        "linear-gradient(0deg, (0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n",
  };

  return {
    global:
      currentLang === "zh"
        ? { lineBreak: "auto", wordBreak: "auto-phrase" }
        : { lineBreak: "normal", wordBreak: "auto-phrase" },
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily: {
      main: `"${entry?.fonFamily?.main ?? "Main"}", sans-serif`,
      additional: `"${entry?.fonFamily?.additional ?? "Additional"}", sans-serif`,
    },
    spacing,
    colors,
  };
};

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
