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
  headline: {
    desktop: {
      large: number;
      medium: number;
    };
    mobile: {
      large: number;
      medium: number;
    };
  };
  title: {
    desktop: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
    mobile: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
  };
  body: {
    desktop: {
      large: number;
      medium: number;
      small: number;
    };
    mobile: {
      large: number;
      medium: number;
      small: number;
    };
  };
  button: {
    desktop: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
    mobile: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
  };
};
export type LineHeight = {
  headline: {
    desktop: {
      large: number;
      medium: number;
    };
    mobile: {
      large: number;
      medium: number;
    };
  };
  title: {
    desktop: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
    mobile: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
  };
  body: {
    desktop: {
      large: number;
      medium: number;
      small: number;
    };
    mobile: {
      large: number;
      medium: number;
      small: number;
    };
  };
  button: {
    desktop: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
    mobile: {
      large: number;
      medium: number;
      small: number;
      xsmall: number;
    };
  };
};
export type FontFamily = {
  main: string;
  additional: string;
};
export type FontWeight = {
  desktop: {
    superbold: number;
    bold: number;
    semibold: number;
    normal: number;
    light: number;
  };
  mobile: {
    superbold: number;
    bold: number;
    semibold: number;
    normal: number;
    light: number;
  };
};
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
  | "text-accent-grad"
  | "surface-primary-grad-default"
  | "surface-primary-grad-hovered"
  | "surface-primary-grad-pressed"
  | "surface-primary-grad-subtle"
  | "surface-accent1-default"
  | "surface-accent2-default"
  | "surface-accent1-hovered"
  | "surface-accent2-hovered"
  | "background-accent1"
  | "background-accent2"
  | "background-primary"
  | "background-secondary"
  | "background-transparent"
  | "border-accent"
  | "border-destructive"
  | "border-primary"
  | "border-selection"
  | "border-subtle"
  | "text-accent-default"
  | "text-accent-hovered"
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
  | "surface-delete"
  | "surface-disabled"
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
  | "surface-tetriary-hovered"
  | "surface-secondary-default"
  | "surface-secondary-hovered";

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
