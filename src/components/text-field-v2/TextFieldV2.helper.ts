import type {
  TypographyProps,
  UIKitArrayIndentation,
  UIKitDimentionsParams,
  UseBackgroundProps,
} from "~/components";
import type { TextFieldV2Variant } from "~/components/text-field-v2/TextFieldV2";
import type { UseBorderBaseProps } from "~/components/use-border";
import type { UseOutlineBaseProps } from "~/components/use-outline";

export const getLabelProps = ({
  variant,
  isFocused,
  isLabelFloated,
}: {
  variant: TextFieldV2Variant;
  isFocused: boolean;
  isLabelFloated: boolean;
}): TypographyProps => {
  const variants = {
    primary: {
      as: "label",
      position: {
        type: "absolute",
        left: "32px",
        top: isLabelFloated ? "6px" : "16px",
      },
      opacity: isLabelFloated ? 50 : undefined,
      color: "text-secondary-default",
      fontSize: isLabelFloated ? "body.mobile.xsmall" : "body.mobile.large",
      md: {
        fontSize: isLabelFloated ? "body.desktop.xsmall" : "body.desktop.large",
        lineHeight: isLabelFloated
          ? "body.desktop.xsmall"
          : "body.desktop.large",
      },
      lineHeight: isLabelFloated ? "body.mobile.small" : "body.mobile.large",
    },

    secondary: {
      as: "label",
      position: {
        type: "absolute",
        left: "12px",
        top: isLabelFloated ? "7px" : "15px",
      },
      opacity: isLabelFloated ? 50 : undefined,
      color: isFocused ? "text-selection" : "text-secondary-default",
      fontSize: isLabelFloated ? "body.mobile.xsmall" : "body.mobile.medium",
      md: {
        fontSize: isLabelFloated
          ? "body.desktop.xsmall"
          : "body.desktop.medium",
        lineHeight: isLabelFloated
          ? "body.desktop.xsmall"
          : "body.desktop.medium",
      },
      lineHeight: isLabelFloated ? "body.mobile.small" : "body.mobile.medium",
    },
  } as const;

  return variants[variant];
};

export const getErrorMessageProps = ({
  variant,
}: {
  variant: TextFieldV2Variant;
}): TypographyProps => {
  const variants = {
    primary: {
      as: "p",
      fontSize: "body.mobile.small",
      lineHeight: "body.mobile.small",
      fontWeight: "mobile.normal",
      md: { fontWeight: "desktop.normal" },
      color: "text-destructive",
      m: { mt: 2, ml: 32 },
    },

    secondary: {
      as: "p",
      fontSize: "body.mobile.small",
      lineHeight: "body.mobile.small",
      fontWeight: "mobile.normal",
      md: { fontWeight: "desktop.normal" },
      m: { mt: 4 },
      color: "text-destructive",
    },
  } as const;

  return variants[variant];
};

export const DEFAULT_SPACINGS: {
  padding: Record<TextFieldV2Variant, UIKitArrayIndentation>;
} = {
  padding: { primary: [26, 32, 8, 32], secondary: [22, 12, 6, 12] },
};
export const getOutlineProps = ({
  variant,
  isError,
  isFocused,
}: {
  variant: TextFieldV2Variant;
  isError: boolean;
  isFocused: boolean;
}): UseOutlineBaseProps => {
  const variants = {
    primary: {
      m: {
        outlineColor: isError
          ? "text-destructive"
          : "surface-neutral-dark-default",
        outlineWidth: "1px",
      },
    },

    secondary: {
      m: {
        outlineColor: isError
          ? "text-destructive"
          : isFocused
            ? "border-selected"
            : "surface-neutral-dark-default",
        outlineWidth: "1px",
      },
    },
  } as const;

  return variants[variant];
};
export const getBorderProps = ({
  variant,
  isError,
  isFocused,
}: {
  variant: TextFieldV2Variant;
  isError: boolean;
  isFocused: boolean;
}): UseBorderBaseProps => {
  const variants = {
    primary: {
      m: {
        color: isError ? "text-destructive" : "surface-neutral-dark-default",
        width: "1px",
        radius: "form",
      },
    },

    secondary: {
      m: {
        color: isError
          ? "text-destructive"
          : isFocused
            ? "border-selected"
            : "surface-neutral-dark-default",
        width: "1px",
        radius: "form",
      },
    },
  } as const;

  return variants[variant];
};

export const getBackgroundProps = ({
  variant,
}: {
  variant: TextFieldV2Variant;
}): UseBackgroundProps => {
  const variants = {
    primary: {
      m: {
        bg: "surface-neutral-dark-default",
        bgSize: "cover",
        bgRepeat: "no-repeat",
        bgPosition: "center",
      },
    },

    secondary: {
      m: {
        bg: "surface-neutral-dark-default",
        bgSize: "cover",
        bgRepeat: "no-repeat",
        bgPosition: "center",
      },
    },
  } as const;

  return variants[variant];
};

export const getDimensionProps = ({
  variant,
}: {
  variant: TextFieldV2Variant;
}): UIKitDimentionsParams => {
  const variants = {
    primary: {
      m: {
        width: "100%",
        height: "100%",
        maxHeight: "56px",
      },
    },

    secondary: {
      m: {
        width: "100%",
        height: "100%",
        maxHeight: "48px",
      },
    },
  } as const;

  return variants[variant];
};
