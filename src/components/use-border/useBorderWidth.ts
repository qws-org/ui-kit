import type { BorderWidthSides, UiKitBorderWidth } from "~/components";
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

  const m = props.m?.width ? transformBorderWidth(props.m?.width) : undefined;
  const md = props.md?.width ? transformBorderWidth(props.md?.width) : m;
  const d = props.d?.width ? transformBorderWidth(props.d?.width) : undefined;

  if (m) {
    if (m?.top) {
      style["--top-b-width"] = m.top;
      classNames += `[border-top-width:var(--top-b-width)] `;
    }
    if (m?.bottom) {
      style["--bottom-b-width"] = m.bottom;
      classNames += `[border-bottom-width:var(--bottom-b-width)] `;
    }
    if (m?.left) {
      style["--bottom-l-width"] = m.left;
      classNames += `[border-left-width:var(--bottom-l-width)] `;
    }
    if (m?.right) {
      style["--bottom-r-width"] = m.right;
      classNames += `[border-right-width:var(--bottom-r-width)] `;
    }
  }

  if (md && m !== md) {
    if (md.top && md.top !== m?.top) {
      style["--md-top-b-width"] = md.top;
      classNames += `md:[border-top-width:var(--md-top-b-width)] `;
    }

    if (md.bottom && md?.bottom !== m?.bottom) {
      style["--md-bottom-b-width"] = md.bottom;
      classNames += `md:[border-bottom-width:var(--md-bottom-b-width)] `;
    }

    if (md?.left && md?.left !== m?.left) {
      style["--md-left-b-width"] = md.left;
      classNames += `md:[border-left-width:var(--md-left-b-width)] `;
    }

    if (md?.right && md?.right !== m?.right) {
      style["--md-right-b-width"] = md.right;
      classNames += `md:[border-right-width:var(--md-right-b-width)] `;
    }
  }

  const mdColorUniversal = md ?? m;

  if (d && mdColorUniversal !== d) {
    if (d?.top && d?.top !== md?.top) {
      style["--d-top-b-width"] = d.top;
      classNames += `lg:[border-top-width:var(--d-top-b-width)] `;
    }

    if (d?.bottom && d?.bottom !== md?.bottom) {
      style["--d-bottom-b-width"] = d.bottom;
      classNames += `lg:[border-bottom-width:var(--d-bottom-b-width)] `;
    }

    if (d?.left && d?.left !== md?.left) {
      style["--d-left-b-width"] = d.left;
      classNames += `lg:[border-left-width:var(--d-left-b-width)] `;
    }

    if (d?.right && d?.right !== md?.right) {
      style["--d-right-b-width"] = d.right;
      classNames += `lg:[border-right-width:var(--d-right-b-width)] `;
    }
  }

  return {
    className: classNames.trim(),
    style,
  };
};
