import path from "node:path";

import preact from "@preact/preset-vite"; // <— добавь в devDependencies
import { defineConfig } from "vite";

import { entries } from "./vite.entries";

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
      entry: entries,
      name: "MyUIKit",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "preact",
        "preact/hooks",
        "preact/jsx-runtime",
        "preact/jsx-dev-runtime",
        "react",
        "react-dom",
        "decode-named-character-reference",
        "react-aria",
        "react-stately",
      ],
      treeshake: { moduleSideEffects: false },
      output: {
        exports: "named",
        assetFileNames: (assetInfo) =>
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          assetInfo.name?.endsWith(".css") ? "styles.css" : assetInfo.name!,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react-markdown") ||
              id.includes("micromark") ||
              id.includes("parse5")
            ) {
              return "md-stack";
            }
            if (id.match(/@react-(aria|stately)\//)) return "react-aria";
            return "vendor";
          }
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
