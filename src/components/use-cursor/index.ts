import type { UiKitCursorProps } from "~/components";

type UseCursorBaseProps = {
  m?: UiKitCursorProps;
  md?: UiKitCursorProps;
  d?: UiKitCursorProps;
};

type UseCursorProps = UseCursorBaseProps;

type UseCursorOutput = {
  style?: Record<string, string>;
  className?: string;
};

export const useCursor = (props: UseCursorProps): UseCursorOutput => {
  let className = "";
  const style: UseCursorOutput["style"] = {};

  // cursor
  if (props.m?.cursor) {
    className += `cursor-${props.m.cursor} `;
  }
  const mdCursor = props.md?.cursor ?? props.m?.cursor;
  if (props.md?.cursor && props.md.cursor !== props.m?.cursor) {
    className += `md:cursor-${props.md.cursor} `;
  }
  if (props.d?.cursor && props.d.cursor !== mdCursor) {
    className += `lg:cursor-${props.d.cursor} `;
  }

  // ---------------------------------------------------------------------------

  return {
    className: className.trim(),
    style,
  };
};
