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
  "headline.desktop.large": number;
  "headline.desktop.medium": number;
  "headline.mobile.medium": number;
  "headline.mobile.large": number;

  "title.desktop.large": number;
  "title.desktop.medium": number;
  "title.desktop.small": number;
  "title.desktop.xsmall": number;

  "title.mobile.large": number;
  "title.mobile.medium": number;
  "title.mobile.small": number;
  "title.mobile.xsmall": number;

  "body.desktop.large": number;
  "body.desktop.medium": number;
  "body.desktop.small": number;

  "body.mobile.large": number;
  "body.mobile.medium": number;
  "body.mobile.small": number;

  "button.desktop.large": number;
  "button.desktop.medium": number;
  "button.desktop.small": number;
  "button.desktop.xsmall": number;

  "button.mobile.large": number;
  "button.mobile.medium": number;
  "button.mobile.small": number;
  "button.mobile.xsmall": number;
};

export type FontSizeKeys = keyof FontSize;

export type LineHeight = {
  "headline.desktop.large": number;
  "headline.desktop.medium": number;
  "headline.mobile.large": number;
  "headline.mobile.medium": number;

  "title.desktop.large": number;
  "title.desktop.medium": number;
  "title.desktop.small": number;
  "title.desktop.xsmall": number;

  "title.mobile.large": number;
  "title.mobile.medium": number;
  "title.mobile.small": number;
  "title.mobile.xsmall": number;

  "body.desktop.large": number;
  "body.desktop.medium": number;
  "body.desktop.small": number;
  "body.desktop.xsmall": number;

  "body.mobile.large": number;
  "body.mobile.medium": number;
  "body.mobile.small": number;
  "body.mobile.xsmall": number;

  "button.desktop.large": number;
  "button.desktop.medium": number;
  "button.desktop.small": number;
  "button.desktop.xsmall": number;

  "button.mobile.large": number;
  "button.mobile.medium": number;
  "button.mobile.small": number;
  "button.mobile.xsmall": number;
};

export type LineHeightKeys = keyof LineHeight;

export type FontFamily = {
  main: string;
  additional: string;
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
  | "background-transparent"
  | "background-accent1"
  | "background-accent2"
  | "border-accent"
  | "border-destructive"
  | "border-primary"
  | "border-selection"
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

export interface Colors extends Record<ColorKeys, string> {}

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
};
export type UIKitProviderProps = PropsWithChildren<{
  components: {
    Link: UiKitLinkComponent;
  };
  theme: UIKitProviderTheme;
}>;
