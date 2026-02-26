import type { UiKitListStyleProps } from "~/components";

type UseListStyleBaseProps = {
  m?: UiKitListStyleProps;
  md?: UiKitListStyleProps;
  d?: UiKitListStyleProps;
};

type UseListStyleProps = UseListStyleBaseProps;

type UseListStyleOutput = {
  style?: Record<string, string>;
  className?: string;
};

export const useListStyle = (props: UseListStyleProps): UseListStyleOutput => {
  let className = "";
  const style: UseListStyleOutput["style"] = {};

  // type
  if (props.m?.listStyle?.type) {
    className += `list-${props.m.listStyle.type} `;
  }
  const mdType = props.md?.listStyle?.type ?? props.m?.listStyle?.type;
  if (
    props.md?.listStyle?.type &&
    props.md.listStyle.type !== props.m?.listStyle?.type
  ) {
    className += `md:list-${props.md.listStyle.type} `;
  }
  if (props.d?.listStyle?.type && props.d.listStyle.type !== mdType) {
    className += `lg:list-${props.d.listStyle.type} `;
  }

  // position
  if (props.m?.listStyle?.position) {
    className += `list-${props.m.listStyle.position} `;
  }
  const mdPosition =
    props.md?.listStyle?.position ?? props.m?.listStyle?.position;
  if (
    props.md?.listStyle?.position &&
    props.md.listStyle?.position !== props.m?.listStyle?.position
  ) {
    className += `md:list-${props.md.listStyle.position} `;
  }
  if (
    props.d?.listStyle?.position &&
    props.d.listStyle.position !== mdPosition
  ) {
    className += `lg:list-${props.d.listStyle.position} `;
  }

  // ---------------------------------------------------------------------------

  return {
    className: className.trim(),
    style,
  };
};
