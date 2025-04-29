/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import path, { dirname } from "path";
import ts from "vite-plugin-ts";
import { fileURLToPath } from "url";
// import { terser } from "rollup-plugin-terser";
import terser from "@rollup/plugin-terser";
import builtinModules from "builtin-modules";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [ts()],
  root: ".",
  server: {
    hmr: false,
  },
  ssr: {
    format: "esm",
    target: "node",

    // By default Vite bundles everything except the one we pass via `external` array.
    external: builtinModules,
  },
  build: {
    minify: "terser",
    target: "es2022",
    lib: {
      entry: [path.resolve(__dirname, "src/index.ts")],
      fileName: "index",
    },
    rollupOptions: {
      plugins: [terser({})],
      external: [],
      output: [
        {
          format: "es",
          entryFileNames: "index.mjs",
        },
      ],
    },
  },
});

// vim: syn=javascript nospell
