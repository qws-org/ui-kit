import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "node:path";
import { visualizer } from "rollup-plugin-visualizer";
import { entries } from "./vite.entries";

const ssrCssNull = (): Plugin => ({
  name: "ssr-css-null",
  enforce: "pre",
  load(id: string) {
    if (process.env.UIKIT_SSR_BUILD === "true" && id.endsWith(".css")) {
      // при SSR-билде превращаем импорт .css в пустой модуль
      return "export default {}";
    }
  },
});

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      exclude: ["**/*.stories.*", "vite.config.ts", "tailwind.config.ts"],
    }),
    ssrCssNull(),
  ],
  resolve: {
    alias: { "~": path.resolve(__dirname, "src") },
    mainFields: ["module", "main"],
    dedupe: ["react", "react-dom"],
  },
  css: { postcss: { plugins: [tailwindcss(), autoprefixer()] } },
  build: {
    target: "es2019",
    minify: "terser",
    cssCodeSplit: true, // стили будут отдельным dist/styles.css
    lib: {
      entry: entries,
      name: "MyUIKit",
      fileName: (_, name) => `${name}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [visualizer({ filename: "stats.html", gzipSize: true })],
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^@react-aria\//,
        /^@react-stately\//,
        /^@react-types\//,
        // ← markdown-стек как внешние
        /^react-markdown$/,
        /^remark-gfm$/,
        /^rehype-raw$/,
        /^rehype-sanitize$/,
        // (опционально, чтобы гарантированно не затащило внутрь):
        /^(unified|micromark|hast|mdast|remark|rehype)(-|$)/,
      ],
      output: {
        compact: true,
        exports: "named",
        // ключевой момент: без vendor-чанков
        manualChunks: undefined,
        assetFileNames: (a) =>
          a.name?.endsWith(".css") ? "styles.css" : a.name!,
      },
    },
  },
});
