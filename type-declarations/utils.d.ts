type ExtractArrayItemType<T> = T extends Array<infer Item> ? Item : T;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type UiKitFC<Props> = Props & {
  className?: string;
  md?: Props;
  d?: Props;
};

type AtLeastOne<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];
