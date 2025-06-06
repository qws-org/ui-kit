import type {
  Colors,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
  UIKitProviderTheme,
} from "~/components";

export const createTheme = (
  entry?: Partial<UIKitProviderTheme>,
): UIKitProviderTheme => {
  const fontSize: FontSize = {
    "headline.desktop.large":
      entry?.fontSize?.["headline.desktop.large"] ?? "48px",
    "headline.desktop.medium":
      entry?.fontSize?.["headline.desktop.medium"] ?? "42px",
    "headline.mobile.large":
      entry?.fontSize?.["headline.mobile.large"] ?? "24px",
    "headline.mobile.medium":
      entry?.fontSize?.["headline.mobile.medium"] ?? "22px",

    "title.desktop.large": entry?.fontSize?.["title.desktop.large"] ?? "48px",
    "title.desktop.medium": entry?.fontSize?.["title.desktop.medium"] ?? "36px",
    "title.desktop.small": entry?.fontSize?.["title.desktop.small"] ?? "22px",
    "title.desktop.xsmall": entry?.fontSize?.["title.desktop.xsmall"] ?? "16px",

    "title.mobile.large": entry?.fontSize?.["title.mobile.large"] ?? "28px",
    "title.mobile.medium": entry?.fontSize?.["title.mobile.medium"] ?? "22px",
    "title.mobile.small": entry?.fontSize?.["title.mobile.small"] ?? "20px",
    "title.mobile.xsmall": entry?.fontSize?.["title.mobile.xsmall"] ?? "14px",

    "body.desktop.large": entry?.fontSize?.["body.desktop.large"] ?? "22px",
    "body.desktop.medium": entry?.fontSize?.["body.desktop.medium"] ?? "18px",
    "body.desktop.small": entry?.fontSize?.["body.desktop.small"] ?? "14px",

    "body.mobile.large": entry?.fontSize?.["body.mobile.large"] ?? "16px",
    "body.mobile.medium": entry?.fontSize?.["body.mobile.medium"] ?? "14px",
    "body.mobile.small": entry?.fontSize?.["body.mobile.small"] ?? "12px",

    "button.desktop.large": entry?.fontSize?.["button.desktop.large"] ?? "22px",
    "button.desktop.medium":
      entry?.fontSize?.["button.desktop.medium"] ?? "20px",
    "button.desktop.small": entry?.fontSize?.["button.desktop.small"] ?? "16px",
    "button.desktop.xsmall":
      entry?.fontSize?.["button.desktop.xsmall"] ?? "14px",

    "button.mobile.large": entry?.fontSize?.["button.mobile.large"] ?? "22px",
    "button.mobile.medium": entry?.fontSize?.["button.mobile.medium"] ?? "20px",
    "button.mobile.small": entry?.fontSize?.["button.mobile.small"] ?? "16px",
    "button.mobile.xsmall": entry?.fontSize?.["button.mobile.xsmall"] ?? "14px",
  };

  const lineHeight: LineHeight = {
    "headline.desktop.large":
      entry?.lineHeight?.["headline.desktop.large"] ?? "48px",
    "headline.desktop.medium":
      entry?.lineHeight?.["headline.desktop.medium"] ?? "42px",
    "headline.mobile.large":
      entry?.lineHeight?.["headline.mobile.large"] ?? "24px",
    "headline.mobile.medium":
      entry?.lineHeight?.["headline.mobile.medium"] ?? "22px",

    "title.desktop.large": entry?.lineHeight?.["title.desktop.large"] ?? "64px",
    "title.desktop.medium":
      entry?.lineHeight?.["title.desktop.medium"] ?? "48px",
    "title.desktop.small": entry?.lineHeight?.["title.desktop.small"] ?? "32px",
    "title.desktop.xsmall":
      entry?.lineHeight?.["title.desktop.xsmall"] ?? "20px",

    "title.mobile.large": entry?.lineHeight?.["title.mobile.large"] ?? "36px",
    "title.mobile.medium": entry?.lineHeight?.["title.mobile.medium"] ?? "30px",
    "title.mobile.small": entry?.lineHeight?.["title.mobile.small"] ?? "28px",
    "title.mobile.xsmall": entry?.lineHeight?.["title.mobile.xsmall"] ?? "18px",

    "body.desktop.large": entry?.lineHeight?.["body.desktop.large"] ?? "24px",
    "body.desktop.medium": entry?.lineHeight?.["body.desktop.medium"] ?? "20px",
    "body.desktop.small": entry?.lineHeight?.["body.desktop.small"] ?? "18px",
    "body.desktop.xsmall": entry?.lineHeight?.["body.desktop.xsmall"] ?? "16px",

    "body.mobile.large": entry?.lineHeight?.["body.mobile.large"] ?? "20px",
    "body.mobile.medium": entry?.lineHeight?.["body.mobile.medium"] ?? "18px",
    "body.mobile.small": entry?.lineHeight?.["body.mobile.small"] ?? "16px",
    "body.mobile.xsmall": entry?.lineHeight?.["body.mobile.xsmall"] ?? "14px",

    "button.desktop.large":
      entry?.lineHeight?.["button.desktop.large"] ?? "34px",
    "button.desktop.medium":
      entry?.lineHeight?.["button.desktop.medium"] ?? "28px",
    "button.desktop.small":
      entry?.lineHeight?.["button.desktop.small"] ?? "24px",
    "button.desktop.xsmall":
      entry?.lineHeight?.["button.desktop.xsmall"] ?? "16px",

    "button.mobile.large": entry?.lineHeight?.["button.mobile.large"] ?? "34px",
    "button.mobile.medium":
      entry?.lineHeight?.["button.mobile.medium"] ?? "28px",
    "button.mobile.small": entry?.lineHeight?.["button.mobile.small"] ?? "24px",
    "button.mobile.xsmall":
      entry?.lineHeight?.["button.mobile.xsmall"] ?? "16px",
  };

  const fontWeight: FontWeight = {
    "desktop.superbold": entry?.fontWeight?.["desktop.superbold"] ?? 900,
    "desktop.bold": entry?.fontWeight?.["desktop.bold"] ?? 700,
    "desktop.semibold": entry?.fontWeight?.["desktop.semibold"] ?? 600,
    "desktop.normal": entry?.fontWeight?.["desktop.normal"] ?? 400,
    "desktop.light": entry?.fontWeight?.["desktop.light"] ?? 100,

    "mobile.superbold": entry?.fontWeight?.["mobile.superbold"] ?? 900,
    "mobile.bold": entry?.fontWeight?.["mobile.bold"] ?? 700,
    "mobile.semibold": entry?.fontWeight?.["mobile.semibold"] ?? 600,
    "mobile.normal": entry?.fontWeight?.["mobile.normal"] ?? 400,
    "mobile.light": entry?.fontWeight?.["mobile.light"] ?? 100,
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
    // background
    "background-primary": entry?.colors?.["background-primary"] ?? "#000000",
    "background-secondary":
      entry?.colors?.["background-secondary"] ?? "#171717",
    "background-transparent":
      entry?.colors?.["background-transparent"] ?? "rgba(0, 0, 0, 0.5)",
    "background-accent1":
      entry?.colors?.["background-accent1"] ??
      "linear-gradient(270deg, #F4AD23 0%, #FF3D00 50%, #6A2DC0 100%)",
    "background-accent2":
      entry?.colors?.["background-accent2"] ??
      "linear-gradient(90deg, #FFC169 0%, #FFFAEA 25%, #FBA2C6 42%, #F057A2 55%, #985BE7 70%, #60ABED 85%, #50E6C1 100%)",

    // border
    "border-accent": entry?.colors?.["border-accent"] ?? "#F9D48C",
    "border-destructive": entry?.colors?.["border-destructive"] ?? "#DD4952",
    "border-primary": entry?.colors?.["background-primary"] ?? "#FFFFFF",
    "border-selected": entry?.colors?.["border-selected"] ?? "#C49BFC",
    "border-subtle":
      entry?.colors?.["border-subtle"] ?? "rgba(255, 255, 255, 0.2)",

    // text
    "text-accent-default": entry?.colors?.["text-accent-default"] ?? "#F6BA46",
    "text-accent-hovered": entry?.colors?.["text-accent-hovered"] ?? "#F9D48C",
    "text-accent-grad":
      entry?.colors?.["text-accent-grad"] ??
      "linear-gradient(180deg, #FBE1B0 0%, #F6BA46 100%)",
    "text-destructive": entry?.colors?.["text-destructive"] ?? "#DD4952",
    "text-disabled":
      entry?.colors?.["text-disabled"] ?? "rgba(255, 255, 255, .2)",
    "text-selection": entry?.colors?.["text-selection"] ?? "#C49BFC",
    "text-success": entry?.colors?.["text-success"] ?? "#66C95B",
    "text-primary-default":
      entry?.colors?.["text-primary-default"] ?? "#FFFFFF",
    "text-primary-hovered":
      entry?.colors?.["text-primary-hovered"] ?? "#A66BFA",
    "text-primary-inverted":
      entry?.colors?.["text-primary-inverted"] ?? "#000000",
    "text-primary-muted":
      entry?.colors?.["text-primary-muted"] ?? "rgba(255, 255, 255, 0.7)",
    "text-secondary-default":
      entry?.colors?.["text-secondary-default"] ?? "rgba(255, 255, 255, 0.5)",
    "text-secondary-hovered":
      entry?.colors?.["text-secondary-hovered"] ?? "#FFFFFF",

    "surface-destructive-default":
      entry?.colors?.["surface-destructive-default"] ?? "#D92933",
    "surface-destructive-subtle":
      entry?.colors?.["surface-destructive-subtle"] ?? "#D9293333",

    "surface-neutral-dark-default":
      entry?.colors?.["surface-neutral-dark-default"] ?? "rgba(0, 0, 0, 0.4)",
    "surface-neutral-dark-hovered":
      entry?.colors?.["surface-neutral-dark-hovered"] ?? "rgba(0, 0, 0, 0.7)",
    "surface-neutral-default":
      entry?.colors?.["surface-neutral-default"] ?? "#FFFFFF1A",
    "surface-neutral-hovered":
      entry?.colors?.["surface-neutral-hovered"] ?? "#FFFFFF33",
    "surface-neutral-light":
      entry?.colors?.["surface-neutral-light"] ?? "rgba(255, 255, 255, 0.2)",
    "surface-neutral-subtle":
      entry?.colors?.["surface-neutral-subtle"] ?? "rgba(255, 255, 255, 0.05)",

    "surface-primary-default":
      entry?.colors?.["surface-primary-default"] ?? "#FFFFFF",
    "surface-primary-dark":
      entry?.colors?.["surface-primary-dark"] ?? "#401A75",
    "surface-primary-hovered":
      entry?.colors?.["surface-primary-hovered"] ?? "#9854F8",
    "surface-primary-subtle":
      entry?.colors?.["surface-primary-subtle"] ?? "#893BF733",
    "surface-primary-grad-default":
      entry?.colors?.["surface-primary-grad-default"] ??
      "linear-gradient(90deg, #6A2DC0 0%, #FF3D00 100%)",
    "surface-primary-grad-hovered":
      entry?.colors?.["surface-primary-grad-hovered"] ??
      "linear-gradient(90deg, #FF3D00 0%, #893BF7 100%)",
    "surface-primary-grad-pressed":
      entry?.colors?.["surface-primary-grad-pressed"] ??
      "linear-gradient(90deg, #A1210B 0%, #55239A 100%)",
    "surface-primary-grad-subtle":
      entry?.colors?.["surface-primary-grad-subtle"] ??
      "linear-gradient(360deg, #2B1050 0%, rgba(43, 16, 80, 0.5) 100%)",

    "surface-tetriary-hovered":
      entry?.colors?.["surface-tetriary-hovered"] ?? "#FFFFFF",

    "surface-secondary-default":
      entry?.colors?.["surface-secondary-default"] ?? "#FFFFFF",
    "surface-secondary-hovered":
      entry?.colors?.["surface-secondary-hovered"] ?? "#D4D4D4",

    "surface-accent1-default":
      entry?.colors?.["surface-accent1-default"] ??
      "linear-gradient(270deg, #55239A 0%, #9854F8 50%, #55239A 100%)",
    "surface-accent2-default":
      entry?.colors?.["surface-accent2-default"] ??
      "linear-gradient(90deg, #DCC3FE 0%, #FFCEA5 33%, #E3FAD6 66%, #CEFDFE 100%)",
    "surface-accent1-hovered":
      entry?.colors?.["surface-accent1-hovered"] ??
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(270deg, #55239A 0%, #9854F8 50%, #55239A 100%)",
    "surface-accent2-hovered":
      entry?.colors?.["surface-accent2-hovered"] ??
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #DCC3FE 0%, #FFCEA5 33%, #E3FAD6 66%, #CEFDFE 100%)",
  };

  return {
    global: entry?.global ?? { lineBreak: "normal", wordBreak: "auto-phrase" },
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily: {
      main: `"${entry?.fontFamily?.main ?? "Main"}", sans-serif`,
      additional: `"${entry?.fontFamily?.additional ?? "Additional"}", sans-serif`,
    },
    spacing,
    colors,
  };
};
