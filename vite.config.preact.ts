import path from "node:path";

import preact from "@preact/preset-vite"; // <— добавь в devDependencies
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    preact(), // заменяет react-плагин; на сборку библиотеки тоже ок
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      // ключевое: перенаправляем любые импорты react -> preact/compat
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react-dom/client": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "react/jsx-dev-runtime": "preact/jsx-dev-runtime",
    },
    mainFields: ["module", "main"],
  },
  build: {
    emptyOutDir: false, // чтобы не затирать React-сборку
    cssCodeSplit: false,
    lib: {
      entry: {
        index: "src/index.ts",
        accordion: "src/components/accordion/Accordion.tsx",
        box: "src/components/box/Box.tsx",
        breadcrumbs: "src/components/breadcrumbs/Breadcrumbs.tsx",
        button: "src/components/button/Button.tsx",
        card: "src/components/card/Card.tsx",
        checkbox: "src/components/checkbox/Checkbox.tsx",
        container: "src/components/container/Container.tsx",
        dropdown: "src/components/dropdown/Dropdown.tsx",
        flex: "src/components/flex/Flex.tsx",
        grid: "src/components/grid/Grid.tsx",
        "heading-block": "src/components/heading-block/HeadingBlock.tsx",
        image: "src/components/image/index.tsx",
        markdown: "src/components/markdown/Markdown.tsx",
        modal: "src/components/modal/Modal.tsx",
        pagination: "src/components/pagination/Pagination.tsx",
        popover: "src/components/popover/Popover.tsx",
        "popover-trigger": "src/components/popover/PopoverTrigger.tsx",
        select: "src/components/select/Select.tsx",
        skeleton: "src/components/skeleton/Skeleton.tsx",
        table: "src/components/table/Table.tsx",
        text: "src/components/text/Text.tsx",
        "text-field": "src/components/text-field/TextField.tsx",
        title: "src/components/title/Title.tsx",
        typography: "src/components/typography/Typography.tsx",
        provider: "src/components/ui-kit-provider/index.ts",
      },
      name: "MyUIKit",
      fileName: () => `index.es.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "preact",
        "preact/hooks",
        "preact/jsx-runtime",
        "preact/jsx-dev-runtime",
      ],
      output: {
        exports: "named",
        assetFileNames: (assetInfo) =>
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          assetInfo.name?.endsWith(".css") ? "styles.css" : assetInfo.name!,
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // нормализуем слэши под все ОС
          const mod = id.replace(/\\/g, "/");

          // порядок важен: от более конкретных к более общим
          const buckets = [
            // markdown-стек
            ["md-stack", /(?:^|\/)(react-markdown|micromark|parse5)(?:\/|$)/],

            // тонкая грануляция react-aria
            [
              "react-aria-overlays",
              /@react-aria\/(overlays|focus|utils)(?:\/|$)/,
            ],
            ["react-aria-select", /@react-aria\/(listbox|select|menu)(?:\/|$)/],
            ["react-aria-tabs-table", /@react-aria\/(tabs|table)(?:\/|$)/],
            ["micromark-extension-gfm-table", /micromark-extension-gfm-table/],
            ["micromark-core-commonmar", /micromark-core-commonmar/],
            ["mdast-util-to-hast", /mdast-util-to-hast/],
            ["mdast-util-to-markdown", /mdast-util-to-markdown/],
            ["bundle-mjs", /bundle-mjs/],
            ["roperty-information", /roperty-information/],
            ["hast", /hast-/],
            ["tokenizer", /(tokenizer)|(parser)(?:\/|$)/],
            // всё остальное из @react-aria и @react-stately
            ["react-stately", /@react-stately\//],
            ["react-aria", /@react-aria\//],
            ["entities-dist-esm", /entities\/dist\/esm\//],
          ] as const;

          for (const [name, rx] of buckets) {
            if (rx.test(mod)) return name;
          }

          // общий вендорный чанк
          return "vendor";
        },
      },
    },
    target: "es2019",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      ecma: 2019,
      module: true,
      toplevel: true,
      compress: {
        passes: 3,
        drop_console: true,
        drop_debugger: true,
        pure_getters: true,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
        ascii_only: true,
      },
    },
    outDir: "dist-preact",
  },
});
