import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import ignore from "rollup-plugin-ignore";
import path from "node:path";
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
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: "src/index.ts",
      name: "MyUIKit",
      fileName: (format) => `my-ui-kit.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      plugins: [
        ignore(["*.stories.*"]), // ← не встраивать модули, чьи пути содержат ".stories."
      ],
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        exports: "named",
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith(".css") ? "styles.css" : assetInfo.name!,
      },
    },
    sourcemap: true,
    // Минификация через Terser для всех форматов
    minify: "terser",
    terserOptions: {
      compress: true,
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
});
