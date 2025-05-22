import type { ColorKeys, UiKitOutlineProps } from "~/components";
import { useUiKitTheme } from "~/components";

type UseOutlineBaseProps = {
  m?: UiKitOutlineProps;
  md?: UiKitOutlineProps;
  d?: UiKitOutlineProps;
};

type UseOutlineProps = UseOutlineBaseProps & { hover: UseOutlineBaseProps };

type UseOutlineOutput = {
  style?: Record<string, string>;
  className?: string;
};

export const useOutline = (props: UseOutlineProps): UseOutlineOutput => {
  let className = "";
  const style: UseOutlineOutput["style"] = {};

  const { colors } = useUiKitTheme();

  let shouldAddOutlineClass = false;

  // outline
  if (props.m?.outlineColor) {
    style["--o-color"] =
      colors[props.m?.outlineColor as ColorKeys] ?? props.m?.outlineColor;
    className += `[outline-color:var(--o-color)] `;
    shouldAddOutlineClass = true;
  }

  if (
    props.md?.outlineColor &&
    props.m?.outlineColor !== props.md?.outlineColor
  ) {
    style["--md-o-color"] =
      colors[props.md.outlineColor as ColorKeys] ?? props.md.outlineColor;
    className += `md:[outline-color:var(--md-o-color)] `;
    shouldAddOutlineClass = true;
  }

  const mdOutlineColor = props?.m?.outlineColor ?? props.m?.outlineColor;

  if (props.d?.outlineColor && mdOutlineColor !== props.d?.outlineColor) {
    style["--d-o-color"] =
      colors[props.d.outlineColor as ColorKeys] ?? props.d.outlineColor;
    className += `lg:[outline-color:var(--d-o-color)] `;
    shouldAddOutlineClass = true;
  }
  // ---------------------------------------------------------------------------

  // width

  if (props.m?.outlineWidth) {
    style["--o-width"] = props.m?.outlineWidth;
    className += `[outline-width:var(--o-width)] `;
    shouldAddOutlineClass = true;
  }

  if (props.md?.outlineWidth) {
    style["--md-o-width"] = props.md.outlineWidth;
    className += `md:[outline-width:var(--md-o-width)] `;
    shouldAddOutlineClass = true;
  }

  const mdOutline = props.md?.outlineWidth ?? props.m?.outlineWidth;

  if (props.d?.outlineWidth && mdOutline !== props.d?.outlineWidth) {
    style["--d-o-width"] = props.d?.outlineWidth;
    className += `lg:[outline-width:var(--d-o-width)] `;
    shouldAddOutlineClass = true;
  }

  // ---------------------------------------------------------------------------

  // offset

  if (props.m?.outlineOffset) {
    style["--o-offset"] = props.m?.outlineOffset;
    className += `[outline-offset:var(--o-offset)] `;
    shouldAddOutlineClass = true;
  }

  if (props.md?.outlineOffset) {
    style["--md-o-offset"] = props.md.outlineOffset;
    className += `md:[outline-offset:var(--md-o-offset)] `;
    shouldAddOutlineClass = true;
  }

  const mdOutlineOffset = props.md?.outlineOffset ?? props.m?.outlineOffset;

  if (props.d?.outlineOffset && mdOutlineOffset !== props.d?.outlineOffset) {
    style["--d-o-offset"] = props.d?.outlineOffset;
    className += `lg:[outline-offset:var(--d-o-offset)] `;
    shouldAddOutlineClass = true;
  }
  // ---------------------------------------------------------------------------

  // offset
  if (props.m?.outlineStyle) {
    className += `outline-${props.m.outlineStyle} `;
    shouldAddOutlineClass = true;
  }

  if (props.md?.outlineStyle) {
    className += `md:outline-${props.md.outlineStyle} `;
    shouldAddOutlineClass = true;
  }

  const mdOutlineStyle = props.md?.outlineStyle ?? props.m?.outlineStyle;

  if (props.d?.outlineStyle && mdOutlineStyle !== props.d?.outlineStyle) {
    className += `lg:outline-${props.d.outlineStyle} `;
    shouldAddOutlineClass = true;
  }

  if (shouldAddOutlineClass) {
    className = "outline " + className;
  }
  // ---------------------------------------------------------------------------

  return {
    className: className.trim(),
    style,
  };
};
