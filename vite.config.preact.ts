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
      entry: "src/index.ts",
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
      },
    },
    sourcemap: true,
    minify: "terser",
    terserOptions: {
      compress: true,
      mangle: true,
      format: { comments: false },
    },
    outDir: "dist-preact",
  },
});
