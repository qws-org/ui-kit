import type {
  BorderWidthItem,
  BorderWidthSides,
  UiKitBorderWidth,
} from "~/components";
import type {
  UseBorderOutput,
  UseBorderProps,
} from "~/components/use-border/index";

const isSideWidth = (props?: UiKitBorderWidth): props is BorderWidthSides => {
  return (
    typeof props === "object" &&
    ("top" in props || "bottom" in props || "left" in props || "right" in props)
  );
};

const isSingleWidth = (props?: UiKitBorderWidth): props is BorderWidthItem => {
  return typeof props === "string";
};
const transformBorderWidth = (item: UiKitBorderWidth): BorderWidthSides => {
  if (isSideWidth(item)) {
    return item;
  }

  return {
    top: item,
    left: item,
    right: item,
    bottom: item,
  };
};

export const useBorderWidth = (props: UseBorderProps): UseBorderOutput => {
  const style: UseBorderOutput["style"] = {};
  let classNames = "";

  const mBorderWidth = props.m?.width
    ? transformBorderWidth(props.m?.width)
    : undefined;
  const mdBorderWidth = props.md?.width
    ? transformBorderWidth(props.md?.width)
    : mBorderWidth;
  const dBorderWidth = props.d?.width
    ? transformBorderWidth(props.d?.width)
    : mdBorderWidth;

  const universalMWidthValue =
    typeof props.m?.width !== "undefined" && isSingleWidth(props.m?.width)
      ? props.m?.width
      : undefined;

  if (
    mBorderWidth?.top ??
    mBorderWidth?.right ??
    mBorderWidth?.bottom ??
    mBorderWidth?.left
  ) {
    if (typeof universalMWidthValue !== "undefined") {
      style["--b-width"] = universalMWidthValue;
      classNames += `[border-width:var(--b-width)] `;
    } else {
      if (typeof mBorderWidth?.top !== "undefined") {
        style["--top-b-width"] = mBorderWidth?.top;
        classNames += `[border-top-width:var(--top-b-width)] `;
      }
      if (typeof mBorderWidth?.right !== "undefined") {
        style["--bottom-r-width"] = mBorderWidth?.right;
        classNames += `[border-right-width:var(--bottom-r-width)] `;
      }
      if (typeof mBorderWidth?.bottom !== "undefined") {
        style["--bottom-b-width"] = mBorderWidth?.bottom;
        classNames += `[border-bottom-width:var(--bottom-b-width)] `;
      }
      if (typeof mBorderWidth?.left !== "undefined") {
        style["--bottom-l-width"] = mBorderWidth?.left;
        classNames += `[border-left-width:var(--bottom-l-width)] `;
      }
    }
  }

  const universalMdWidthValue =
    typeof props?.md?.width !== "undefined" && isSingleWidth(props.md.width)
      ? props.md.width
      : undefined;

  if (
    mdBorderWidth?.top ??
    mdBorderWidth?.right ??
    mdBorderWidth?.bottom ??
    mdBorderWidth?.left
  ) {
    if (typeof universalMdWidthValue !== "undefined") {
      style["--md-b-width"] = universalMdWidthValue;
      classNames += `md:[border-width:var(--md-b-width)] `;
    } else {
      if (typeof mdBorderWidth?.top !== "undefined") {
        style["--md-top-b-width"] = mdBorderWidth?.top;
        classNames += `md:[border-top-width:var(--md-top-b-width)] `;
      }
      if (typeof mdBorderWidth?.right !== "undefined") {
        style["--md-right-b-width"] = mdBorderWidth?.right;
        classNames += `md:[border-right-width:var(--md-right-b-width)] `;
      }

      if (typeof mdBorderWidth?.bottom !== "undefined") {
        style["--md-bottom-b-width"] = mdBorderWidth?.bottom;
        classNames += `md:[border-bottom-width:var(--md-bottom-b-width)] `;
      }

      if (typeof mdBorderWidth?.left !== "undefined") {
        style["--md-left-b-width"] = mdBorderWidth?.left;
        classNames += `md:[border-left-width:var(--md-left-b-width)] `;
      }
    }
  }

  const universalDWidthValue =
    typeof props?.d?.width !== "undefined" && isSingleWidth(props.d.width)
      ? props.d.width
      : undefined;

  if (
    dBorderWidth?.top ??
    dBorderWidth?.right ??
    dBorderWidth?.bottom ??
    dBorderWidth?.left
  ) {
    if (typeof universalDWidthValue !== "undefined") {
      style["--d-b-width"] = universalDWidthValue;
      classNames += `lg:[border-width:var(--d-b-width)] `;
    } else {
      if (typeof dBorderWidth?.top !== "undefined") {
        style["--d-top-b-width"] = dBorderWidth?.top;
        classNames += `lg:[border-top-width:var(--d-top-b-width)] `;
      }
      if (typeof dBorderWidth?.right !== "undefined") {
        style["--d-right-b-width"] = dBorderWidth?.right;
        classNames += `lg:[border-right-width:var(--d-right-b-width)] `;
      }

      if (typeof dBorderWidth?.bottom !== "undefined") {
        style["--d-bottom-b-width"] = dBorderWidth?.bottom;
        classNames += `lg:[border-bottom-width:var(--d-bottom-b-width)] `;
      }

      if (typeof dBorderWidth?.left !== "undefined") {
        style["--d-left-b-width"] = dBorderWidth?.left;
        classNames += `lg:[border-left-width:var(--d-left-b-width)] `;
      }
    }
  }

  return {
    className: classNames.trim(),
    style,
  };
};
