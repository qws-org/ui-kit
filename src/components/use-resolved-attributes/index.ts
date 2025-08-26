// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseResolvedAttributesProps = Record<any, any>;
export type ResolvedAttributes = Record<string, string>;

export const useResolvedAttributes = (
  props: UseResolvedAttributesProps,
): ResolvedAttributes => {
  const resolvedProps: ResolvedAttributes = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key.includes("aria-") || key.includes("data-")) {
      resolvedProps[key] = `${value}`;
    }
  });

  return resolvedProps;
};
