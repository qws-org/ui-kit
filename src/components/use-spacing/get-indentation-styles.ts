import type {
  UIKitAnyIndentationMargin,
  UIKitAnyIndentationPadding,
  UIKitArrayIndentation,
  UIKitAxisIndentationMargin,
  UIKitAxisIndentationPadding,
  UIKitIndentations,
  UIKitIndentationsProps,
  UIKitMarginArrayIndentation,
  UIKitMarginIndentation,
  UiKitMixedXAxisIndentationMargin,
  UiKitMixedXAxisIndentationPadding,
  UiKitMixedYAxisIndentationMargin,
  UiKitMixedYAxisIndentationPadding,
} from "~/components";

const isSinglePadding = (
  entry: UIKitIndentationsProps["p"],
): entry is UIKitIndentations => {
  return typeof entry === "number";
};
const isArrayPadding = (
  entry: UIKitIndentationsProps["p"],
): entry is UIKitArrayIndentation => {
  return Array.isArray(entry);
};

const isAxisDirectionPadding = (
  entry: UIKitIndentationsProps["p"],
): entry is UIKitAxisIndentationPadding => {
  return (
    typeof entry === "object" &&
    ("px" in entry || "py" in entry) &&
    !("pb" in entry) &&
    !("pt" in entry) &&
    !("pr" in entry) &&
    !("pl" in entry)
  );
};

const isMixedXAxisIndentationPadding = (
  entry: UIKitIndentationsProps["p"],
): entry is UiKitMixedXAxisIndentationPadding => {
  return (
    typeof entry === "object" &&
    "px" in entry &&
    ("pt" in entry || "pb" in entry) &&
    !("pr" in entry) &&
    !("pl" in entry)
  );
};

const isMixedYAxisIndentationPadding = (
  entry: UIKitIndentationsProps["p"],
): entry is UiKitMixedYAxisIndentationPadding => {
  return (
    typeof entry === "object" &&
    "py" in entry &&
    ("pl" in entry || "pr" in entry) &&
    !("pt" in entry) &&
    !("pb" in entry)
  );
};

const isMixedXAxisIndentationMargin = (
  entry: UIKitIndentationsProps["m"],
): entry is UiKitMixedXAxisIndentationMargin => {
  return (
    typeof entry === "object" &&
    "mx" in entry &&
    ("mt" in entry || "mb" in entry) &&
    !("mr" in entry) &&
    !("ml" in entry)
  );
};

const isMixedYAxisIndentationMargin = (
  entry: UIKitIndentationsProps["m"],
): entry is UiKitMixedYAxisIndentationMargin => {
  return (
    typeof entry === "object" &&
    "my" in entry &&
    ("ml" in entry || "mr" in entry) &&
    !("mt" in entry) &&
    !("mb" in entry)
  );
};

const isAnyDirectionPadding = (
  entry: UIKitIndentationsProps["p"],
): entry is UIKitAnyIndentationPadding => {
  return (
    typeof entry === "object" &&
    ("pt" in entry || "pb" in entry || "pr" in entry || "pl" in entry) &&
    !("py" in entry) &&
    !("px" in entry)
  );
};

const isSingleMargin = (
  entry: UIKitIndentationsProps["m"],
): entry is UIKitMarginIndentation => {
  return typeof entry === "number";
};
const isArrayMargin = (
  entry: UIKitIndentationsProps["m"],
): entry is UIKitMarginArrayIndentation => {
  return Array.isArray(entry);
};

const isAxisDirectionMargin = (
  entry: UIKitIndentationsProps["m"],
): entry is UIKitAxisIndentationMargin => {
  return (
    typeof entry === "object" &&
    ("mx" in entry || "my" in entry) &&
    !("mb" in entry) &&
    !("mt" in entry) &&
    !("mr" in entry) &&
    !("ml" in entry)
  );
};
const isAnyDirectionMargin = (
  entry: UIKitIndentationsProps["m"],
): entry is UIKitAnyIndentationMargin => {
  return (
    typeof entry === "object" &&
    ("mt" in entry || "mb" in entry || "mr" in entry || "ml" in entry) &&
    !("my" in entry) &&
    !("mx" in entry)
  );
};
type IndentationSpacing = [string, string, string, string];

type Output = {
  padding: IndentationSpacing;
  margin: IndentationSpacing;
};

export const getIndentationsStyles = (
  params: Partial<UIKitIndentationsProps>,
  fallbackSpacing?: {
    padding?: UIKitArrayIndentation;
    margin?: UIKitMarginArrayIndentation;
  },
  prev?: Output,
): Output => {
  const padding: IndentationSpacing = [
    prev?.padding
      ? prev.padding[0]
      : fallbackSpacing?.padding?.[0]
        ? fallbackSpacing.padding[0] + "px"
        : "0px",
    prev?.padding
      ? prev.padding[1]
      : fallbackSpacing?.padding?.[1]
        ? fallbackSpacing.padding[1] + "px"
        : "0px",
    prev?.padding
      ? prev.padding[2]
      : fallbackSpacing?.padding?.[2]
        ? fallbackSpacing.padding[2] + "px"
        : "0px",
    prev?.padding
      ? prev.padding[3]
      : fallbackSpacing?.padding?.[3]
        ? fallbackSpacing.padding[3] + "px"
        : "0px",
  ];

  // Padding
  if (params.p) {
    if (isAnyDirectionPadding(params.p)) {
      if (params.p.pt) {
        padding[0] = params.p.pt + "px";
      }
      if (params.p.pr) {
        padding[1] = params.p.pr + "px";
      }
      if (params.p.pb) {
        padding[2] = params.p.pb + "px";
      }
      if (params.p.pl) {
        padding[3] = params.p.pl + "px";
      }
    }

    if (isAxisDirectionPadding(params.p)) {
      if (params.p.py) {
        const value = params.p.py + "px";
        padding[0] = value;
        padding[2] = value;
      }
      if (params.p.px) {
        const value = params.p.px + "px";
        padding[1] = value;
        padding[3] = value;
      }
    }

    if (isArrayPadding(params.p)) {
      padding[0] = params.p[0] + "px";
      padding[1] = params.p[1] + "px";
      padding[2] = params.p[2] + "px";
      padding[3] = params.p[3] + "px";
    }

    if (isSinglePadding(params.p)) {
      const value = params.p + "px";
      padding[0] = value;
      padding[1] = value;
      padding[2] = value;
      padding[3] = value;
    }

    if (isMixedXAxisIndentationPadding(params.p)) {
      const value = params.p.px + "px";
      padding[1] = value;
      padding[3] = value;

      if (params.p.pt) {
        padding[0] = params.p.pt + "px";
      }

      if (params.p.pb) {
        padding[2] = params.p.pb + "px";
      }
    }

    if (isMixedYAxisIndentationPadding(params.p)) {
      const value = params.p.py + "px";
      padding[0] = value;
      padding[2] = value;

      if (params.p.pr) {
        padding[1] = params.p.pr + "px";
      }

      if (params.p.pl) {
        padding[3] = params.p.pl + "px";
      }
    }
  }

  // Margin
  const margin: IndentationSpacing = [
    prev?.margin
      ? prev.margin[0]
      : fallbackSpacing?.margin?.[0]
        ? fallbackSpacing.margin[0] === "auto"
          ? fallbackSpacing.margin[0]
          : fallbackSpacing.margin[0] + "px"
        : "0px",
    prev?.margin
      ? prev.margin[1]
      : fallbackSpacing?.margin?.[1]
        ? fallbackSpacing.margin[1] === "auto"
          ? fallbackSpacing.margin[1]
          : fallbackSpacing.margin[1] + "px"
        : "0px",
    prev?.margin
      ? prev.margin[2]
      : fallbackSpacing?.margin?.[2]
        ? fallbackSpacing.margin[2] === "auto"
          ? fallbackSpacing.margin[2]
          : fallbackSpacing.margin[2] + "px"
        : "0px",
    prev?.margin
      ? prev.margin[3]
      : fallbackSpacing?.margin?.[3]
        ? fallbackSpacing.margin[3] === "auto"
          ? fallbackSpacing.margin[3]
          : fallbackSpacing.margin[3] + "px"
        : "0px",
  ];

  if (params.m) {
    if (isAnyDirectionMargin(params.m)) {
      if (params.m.mt) {
        margin[0] = params.m.mt === "auto" ? params.m.mt : params.m.mt + "px";
      }
      if (params.m.mr) {
        margin[1] = params.m.mr === "auto" ? params.m.mr : params.m.mr + "px";
      }
      if (params.m.mb) {
        margin[2] = params.m.mb === "auto" ? params.m.mb : params.m.mb + "px";
      }
      if (params.m.ml) {
        margin[3] = params.m.ml === "auto" ? params.m.ml : params.m.ml + "px";
      }
    }

    if (isAxisDirectionMargin(params.m)) {
      if (params.m.my) {
        const value = params.m.my === "auto" ? params.m.my : params.m.my + "px";
        margin[0] = value;
        margin[2] = value;
      }
      if (params.m.mx) {
        const value = params.m.mx === "auto" ? params.m.mx : params.m.mx + "px";
        margin[1] = value;
        margin[3] = value;
      }
    }

    if (isMixedXAxisIndentationMargin(params.m)) {
      const value = params.m.mx === "auto" ? params.m.mx : params.m.mx + "px";
      margin[1] = value;
      margin[3] = value;

      if (params.m.mt) {
        margin[0] = params.m.mt === "auto" ? params.m.mt : params.m.mt + "px";
      }

      if (params.m.mb) {
        margin[0] = params.m.mb === "auto" ? params.m.mb : params.m.mb + "px";
      }
    }

    if (isMixedYAxisIndentationMargin(params.m)) {
      const value = params.m.my === "auto" ? params.m.my : params.m.my + "px";
      margin[0] = value;
      margin[2] = value;

      if (params.m.mr) {
        margin[1] = params.m.mr === "auto" ? params.m.mr : params.m.mr + "px";
      }

      if (params.m.ml) {
        margin[3] = params.m.ml === "auto" ? params.m.ml : params.m.ml + "px";
      }
    }

    if (isArrayMargin(params.m)) {
      margin[0] = params.m[0] === "auto" ? params.m[0] : params.m[0] + "px";
      margin[1] = params.m[1] === "auto" ? params.m[1] : params.m[1] + "px";
      margin[2] = params.m[2] === "auto" ? params.m[2] : params.m[2] + "px";
      margin[3] = params.m[3] === "auto" ? params.m[3] : params.m[3] + "px";
    }

    if (isSingleMargin(params.m)) {
      const value = params.m === "auto" ? params.m : params.m + "px";
      margin[0] = value;
      margin[1] = value;
      margin[2] = value;
      margin[3] = value;
    }
  }

  return { padding, margin };
};
