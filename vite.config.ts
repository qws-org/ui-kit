import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import ignore from "rollup-plugin-ignore";
import path from "node:path";
import { visualizer } from "rollup-plugin-visualizer";
import { entries } from "./vite.entries";

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
      entry: entries,
      name: "MyUIKit",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [
        visualizer({ filename: "stats.html", gzipSize: true }),
        ignore(["*.stories.*"]), // ← не встраивать модули, чьи пути содержат ".stories."
      ],
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
