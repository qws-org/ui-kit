import type {
  BorderRadius,
  Colors,
  DeepPartial,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Spacing,
  UIKitProviderTheme,
} from "~/components";

export const createTheme = (
  entry?: DeepPartial<UIKitProviderTheme>,
): UIKitProviderTheme => {
  const fontSize: FontSize = {
    "headline.desktop.large": entry?.fontSize?.["headline.desktop.large"] ?? 48,
    "headline.desktop.medium":
      entry?.fontSize?.["headline.desktop.medium"] ?? 42,
    "headline.mobile.large": entry?.fontSize?.["headline.mobile.large"] ?? 24,
    "headline.mobile.medium": entry?.fontSize?.["headline.mobile.medium"] ?? 22,

    "title.desktop.large": entry?.fontSize?.["title.desktop.large"] ?? 48,
    "title.desktop.medium": entry?.fontSize?.["title.desktop.medium"] ?? 36,
    "title.desktop.small": entry?.fontSize?.["title.desktop.small"] ?? 22,
    "title.desktop.xsmall": entry?.fontSize?.["title.desktop.xsmall"] ?? 16,

    "title.mobile.large": entry?.fontSize?.["title.mobile.large"] ?? 28,
    "title.mobile.medium": entry?.fontSize?.["title.mobile.medium"] ?? 22,
    "title.mobile.small": entry?.fontSize?.["title.mobile.small"] ?? 20,
    "title.mobile.xsmall": entry?.fontSize?.["title.mobile.xsmall"] ?? 14,

    "body.desktop.large": entry?.fontSize?.["body.desktop.large"] ?? 18,
    "body.desktop.medium": entry?.fontSize?.["body.desktop.medium"] ?? 16,
    "body.desktop.small": entry?.fontSize?.["body.desktop.small"] ?? 14,
    "body.desktop.xsmall": entry?.fontSize?.["body.desktop.xsmall"] ?? 12,

    "body.mobile.large": entry?.fontSize?.["body.mobile.large"] ?? 16,
    "body.mobile.medium": entry?.fontSize?.["body.mobile.medium"] ?? 14,
    "body.mobile.small": entry?.fontSize?.["body.mobile.small"] ?? 12,
    "body.mobile.xsmall": entry?.fontSize?.["body.mobile.xsmall"] ?? 10,

    "button.desktop.large": entry?.fontSize?.["button.desktop.large"] ?? 22,
    "button.desktop.medium": entry?.fontSize?.["button.desktop.medium"] ?? 20,
    "button.desktop.small": entry?.fontSize?.["button.desktop.small"] ?? 16,
    "button.desktop.xsmall": entry?.fontSize?.["button.desktop.xsmall"] ?? 14,

    "button.mobile.large": entry?.fontSize?.["button.mobile.large"] ?? 22,
    "button.mobile.medium": entry?.fontSize?.["button.mobile.medium"] ?? 20,
    "button.mobile.small": entry?.fontSize?.["button.mobile.small"] ?? 16,
    "button.mobile.xsmall": entry?.fontSize?.["button.mobile.xsmall"] ?? 14,
  };

  const lineHeight: LineHeight = {
    "headline.desktop.large":
      entry?.lineHeight?.["headline.desktop.large"] ?? 48,
    "headline.desktop.medium":
      entry?.lineHeight?.["headline.desktop.medium"] ?? 42,
    "headline.mobile.large": entry?.lineHeight?.["headline.mobile.large"] ?? 24,
    "headline.mobile.medium":
      entry?.lineHeight?.["headline.mobile.medium"] ?? 22,

    "title.desktop.large": entry?.lineHeight?.["title.desktop.large"] ?? 64,
    "title.desktop.medium": entry?.lineHeight?.["title.desktop.medium"] ?? 48,
    "title.desktop.small": entry?.lineHeight?.["title.desktop.small"] ?? 32,
    "title.desktop.xsmall": entry?.lineHeight?.["title.desktop.xsmall"] ?? 20,

    "title.mobile.large": entry?.lineHeight?.["title.mobile.large"] ?? 36,
    "title.mobile.medium": entry?.lineHeight?.["title.mobile.medium"] ?? 30,
    "title.mobile.small": entry?.lineHeight?.["title.mobile.small"] ?? 28,
    "title.mobile.xsmall": entry?.lineHeight?.["title.mobile.xsmall"] ?? 18,

    "body.desktop.large": entry?.lineHeight?.["body.desktop.large"] ?? 24,
    "body.desktop.medium": entry?.lineHeight?.["body.desktop.medium"] ?? 20,
    "body.desktop.small": entry?.lineHeight?.["body.desktop.small"] ?? 18,
    "body.desktop.xsmall": entry?.lineHeight?.["body.desktop.xsmall"] ?? 16,

    "body.mobile.large": entry?.lineHeight?.["body.mobile.large"] ?? 20,
    "body.mobile.medium": entry?.lineHeight?.["body.mobile.medium"] ?? 18,
    "body.mobile.small": entry?.lineHeight?.["body.mobile.small"] ?? 16,
    "body.mobile.xsmall": entry?.lineHeight?.["body.mobile.xsmall"] ?? 14,

    "button.desktop.large": entry?.lineHeight?.["button.desktop.large"] ?? 34,
    "button.desktop.medium": entry?.lineHeight?.["button.desktop.medium"] ?? 28,
    "button.desktop.small": entry?.lineHeight?.["button.desktop.small"] ?? 24,
    "button.desktop.xsmall": entry?.lineHeight?.["button.desktop.xsmall"] ?? 16,

    "button.mobile.large": entry?.lineHeight?.["button.mobile.large"] ?? 34,
    "button.mobile.medium": entry?.lineHeight?.["button.mobile.medium"] ?? 28,
    "button.mobile.small": entry?.lineHeight?.["button.mobile.small"] ?? 24,
    "button.mobile.xsmall": entry?.lineHeight?.["button.mobile.xsmall"] ?? 16,
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

    "background-tetriary": entry?.colors?.["background-tetriary"] ?? "#000000",

    "background-secondary-transparent":
      entry?.colors?.["background-secondary-transparent"] ??
      "rgba(23, 23, 23, 0.7)",

    "background-transparent":
      entry?.colors?.["background-transparent"] ?? "rgba(0, 0, 0, 0.5)",

    "background-accent-vip":
      entry?.colors?.["background-accent-vip"] ??
      "linear-gradient(270deg, #AE6E1D 0%, #FFDA8A 62.74%, #C8842E 100%)",

    "background-accent1":
      entry?.colors?.["background-accent1"] ??
      "linear-gradient(270deg, #F4AD23 0%, #FF3D00 50%, #6A2DC0 100%)",

    "background-accent1-vertical":
      entry?.colors?.["background-accent1-vertical"] ??
      "linear-gradient(135deg, #FBBD13 0%, #FF3E1C 50%, #6A2DC0 100%)",

    "background-accent2":
      entry?.colors?.["background-accent2"] ??
      "linear-gradient(90deg, #FFC169 0%, #FFFAEA 25%, #FBA2C6 42%, #F057A2 55%, #985BE7 70%, #60ABED 85%, #50E6C1 100%)",

    "background-accent2-reversed":
      entry?.colors?.["background-accent2-reversed"] ??
      "linear-gradient(90deg, #50E6C1 0%, #60ABED 20%, #985BE7 40%, #F057A2 60%, #FFB6A9 80%, #FFB957 100%)",

    "background-accent2-vertical":
      entry?.colors?.["background-accent2-reversed"] ??
      "linear-gradient(144.58deg, #FFFAEA 1.33%, #F057A2 33.89%, #985BE7 66.45%, #60ABED 100%)",
    "background-popups1": entry?.colors?.["background-popups1"] ?? "#271D34",
    "background-popups2": entry?.colors?.["background-popups2"] ?? "#322544",

    // border
    "border-accent": entry?.colors?.["border-accent"] ?? "#F9D48C",
    "border-destructive": entry?.colors?.["border-destructive"] ?? "#DD4952",
    "border-primary": entry?.colors?.["background-primary"] ?? "#FFFFFF",
    "border-selected": entry?.colors?.["border-selected"] ?? "#C49BFC",
    "border-subtle":
      entry?.colors?.["border-subtle"] ?? "rgba(255, 255, 255, 0.2)",
    "border-button": entry?.colors?.["border-button"] ?? "#FFFFFF",
    "border-secondary":
      entry?.colors?.["border-secondary"] ?? "rgba(255, 255, 255, 0.5)",

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
      entry?.colors?.["surface-primary-default"] ?? "#893BF7",
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
    "surface-accent-button-default":
      entry?.colors?.["surface-accent-button-default"] ??
      "linear-gradient(270deg, #7DE239 0%, #00C950 100%)",
    "surface-accent-button-hovered":
      entry?.colors?.["surface-accent-button-hovered"] ??
      "linear-gradient(270deg, #00C950 0%, #7DE239 100%)",
    "surface-tag-cash": entry?.colors?.["surface-tag-cash"] ?? "#00A6F4",
    "surface-tag-casino": entry?.colors?.["surface-tag-casino"] ?? "#F6BA46",
    "surface-tag-mtt": entry?.colors?.["surface-tag-mtt"] ?? "#F55C3D",
    "surface-tag-poker": entry?.colors?.["surface-tag-poker"] ?? "#00A63E",
    "surface-tag-quests": entry?.colors?.["surface-tag-quests"] ?? "#4F39F6",
    "surface-tag-social": entry?.colors?.["surface-tag-social"] ?? "#CF3FFF",
    "surface-tag-timer": entry?.colors?.["surface-tag-timer"] ?? "#F93448",
    "surface-tag-vip": entry?.colors?.["surface-tag-vip"] ?? "#FFE849",
  };

  const borderRadius: BorderRadius = {
    banner: entry?.borderRadius?.banner ?? "12px",
    button: entry?.borderRadius?.button ?? "4px",
    "big-card": entry?.borderRadius?.["big-card"] ?? "16px",
    card: entry?.borderRadius?.card ?? "8px",
    chip: entry?.borderRadius?.chip ?? "4px",
    checkbox: entry?.borderRadius?.checkbox ?? "2px",
    form: entry?.borderRadius?.form ?? "4px",
    menus: entry?.borderRadius?.menus ?? "8px",
    popups: entry?.borderRadius?.popups ?? "2px",
  };

  const fontFamily: FontFamily = {
    main_name: `"${entry?.fontFamily?.main_name ?? "Main"}", sans-serif`,
    additional_name: `"${entry?.fontFamily?.additional_name ?? "Additional"}", sans-serif`,
    accent_name: `"${entry?.fontFamily?.accent_name ?? "Accent"}", sans-serif`,
  };

  return {
    global: {
      lineBreak: entry?.global?.lineBreak ?? "normal",
      wordBreak: entry?.global?.wordBreak ?? "auto-phrase",
      ...(entry?.global ?? {}),
    },
    fontSize,
    lineHeight,
    fontWeight,
    fontFamily,
    spacing,
    colors,
    borderRadius,
  };
};
