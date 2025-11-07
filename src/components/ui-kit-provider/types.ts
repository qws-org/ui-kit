import type {
  ForwardRefExoticComponent,
  LinkHTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from "react";

export type UiKitLinkComponent = ForwardRefExoticComponent<
  PropsWithChildren<LinkHTMLAttributes<HTMLElement>> &
    RefAttributes<HTMLAnchorElement>
>;

export type FontSize = {
  "headline.desktop.large": number | string;
  "headline.desktop.medium": number | string;
  "headline.mobile.medium": number | string;
  "headline.mobile.large": number | string;

  "title.desktop.large": number | string;
  "title.desktop.medium": number | string;
  "title.desktop.small": number | string;
  "title.desktop.xsmall": number | string;

  "title.mobile.large": number | string;
  "title.mobile.medium": number | string;
  "title.mobile.small": number | string;
  "title.mobile.xsmall": number | string;

  "body.desktop.large": number | string;
  "body.desktop.medium": number | string;
  "body.desktop.small": number | string;
  "body.desktop.xsmall": number | string;

  "body.mobile.large": number | string;
  "body.mobile.medium": number | string;
  "body.mobile.small": number | string;
  "body.mobile.xsmall": number | string;

  "button.desktop.large": number | string;
  "button.desktop.medium": number | string;
  "button.desktop.small": number | string;
  "button.desktop.xsmall": number | string;

  "button.mobile.large": number | string;
  "button.mobile.medium": number | string;
  "button.mobile.small": number | string;
  "button.mobile.xsmall": number | string;
};

export type FontSizeKeys = keyof FontSize;

export type LineHeight = {
  "headline.desktop.large": number | string;
  "headline.desktop.medium": number | string;
  "headline.mobile.large": number | string;
  "headline.mobile.medium": number | string;

  "title.desktop.large": number | string;
  "title.desktop.medium": number | string;
  "title.desktop.small": number | string;
  "title.desktop.xsmall": number | string;

  "title.mobile.large": number | string;
  "title.mobile.medium": number | string;
  "title.mobile.small": number | string;
  "title.mobile.xsmall": number | string;

  "body.desktop.large": number | string;
  "body.desktop.medium": number | string;
  "body.desktop.small": number | string;
  "body.desktop.xsmall": number | string;

  "body.mobile.large": number | string;
  "body.mobile.medium": number | string;
  "body.mobile.small": number | string;
  "body.mobile.xsmall": number | string;

  "button.desktop.large": number | string;
  "button.desktop.medium": number | string;
  "button.desktop.small": number | string;
  "button.desktop.xsmall": number | string;

  "button.mobile.large": number | string;
  "button.mobile.medium": number | string;
  "button.mobile.small": number | string;
  "button.mobile.xsmall": number | string;
};

export type LineHeightKeys = keyof LineHeight;

export type FontFamily = {
  main_name: string;
  additional_name: string;
};

export type FontWeight = {
  "desktop.superbold": number;
  "desktop.bold": number;
  "desktop.semibold": number;
  "desktop.normal": number;
  "desktop.light": number;

  "mobile.superbold": number;
  "mobile.bold": number;
  "mobile.semibold": number;
  "mobile.normal": number;
  "mobile.light": number;
};

export type FontWeightKeys = keyof FontWeight;

export type Spacing = {
  0: string;
  2: string;
  4: string;
  8: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
  40: string;
  48: string;
  56: string;
  64: string;
  80: string;
  96: string;
  auto: string;
};

export type ColorKeys =
  | "background-primary"
  | "background-secondary"
  | "background-tetriary"
  | "background-secondary-transparent"
  | "background-transparent"
  | "background-accent-vip"
  | "background-accent1"
  | "background-accent1-vertical"
  | "background-accent2"
  | "background-accent2-vertical"
  | "background-accent2-reversed"
  | "border-accent"
  | "border-button"
  | "border-destructive"
  | "border-primary"
  | "border-secondary"
  | "border-selected"
  | "border-subtle"
  | "text-accent-default"
  | "text-accent-hovered"
  | "text-accent-grad"
  | "text-destructive"
  | "text-disabled"
  | "text-selection"
  | "text-success"
  | "text-primary-default"
  | "text-primary-hovered"
  | "text-primary-inverted"
  | "text-primary-muted"
  | "text-secondary-default"
  | "text-secondary-hovered"
  | "surface-destructive-default"
  | "surface-destructive-subtle"
  | "surface-neutral-dark-default"
  | "surface-neutral-dark-hovered"
  | "surface-neutral-default"
  | "surface-neutral-hovered"
  | "surface-neutral-light"
  | "surface-neutral-subtle"
  | "surface-primary-default"
  | "surface-primary-dark"
  | "surface-primary-hovered"
  | "surface-primary-subtle"
  | "surface-primary-grad-default"
  | "surface-primary-grad-pressed"
  | "surface-primary-grad-hovered"
  | "surface-primary-grad-subtle"
  | "surface-tetriary-hovered"
  | "surface-secondary-default"
  | "surface-secondary-hovered"
  | "surface-accent1-default"
  | "surface-accent1-hovered"
  | "surface-accent2-default"
  | "surface-accent2-hovered";

export type BorderRadiusKeys =
  | "button"
  | "form"
  | "card"
  | "chip"
  | "big-card"
  | "checkbox"
  | "menus"
  | "popups"
  | "banner";

export interface Colors extends Record<ColorKeys, string> {}
export interface BorderRadius extends Record<BorderRadiusKeys, string> {}

export type UIKitProviderTheme = {
  global: {
    wordBreak: "normal" | "break-all" | "keep-all" | "auto-phrase";
    lineBreak: "auto" | "loose" | "normal" | "strict" | "anywhere";
  };
  fontSize: FontSize;
  lineHeight: LineHeight;
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  spacing: Spacing;
  colors: Colors;
  borderRadius: BorderRadius;
};
export type UIKitProviderProps = PropsWithChildren<{
  components: {
    Link: UiKitLinkComponent;
  };
  theme: UIKitProviderTheme;
}>;
