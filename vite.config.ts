import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import ignore from "rollup-plugin-ignore";
import path from "node:path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      exclude: ["**/*.stories.*", "vite.config.ts", "tailwind.config.ts"],
    }),
  ],
  resolve: {
    alias: {
      // корень src по алиасу "~"
      "~": path.resolve(__dirname, "src"),
    },
    mainFields: ["module", "main"],
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    target: "es2019", // даёт терсеру больше шансов ужать
    sourcemap: false, // если карты не нужны в проде
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
        ascii_only: true, // безопаснее для CDN/старых прокси
        // beautify: false      // по умолчанию false, оставил для явности
      },
    },
    emptyOutDir: true,
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
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [
        visualizer({ filename: "stats.html", gzipSize: true }),
        ignore(["*.stories.*"]), // ← не встраивать модули, чьи пути содержат ".stories."
      ],
      external: ["react", "react-dom", "decode-named-character-reference"],
      output: {
        compact: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        exports: "named",
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith(".css") ? "styles.css" : assetInfo.name!,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react-markdown") ||
              id.includes("micromark") ||
              id.includes("parse5")
            )
              return "md-stack";
            if (id.match(/@react-(aria|stately)\//)) return "react-aria";
            return "vendor";
          }
        },
      },
    },
  },
});
