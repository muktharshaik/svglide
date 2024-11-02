import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
      insertTypesEntry: true,
      include: ["src/lib/**/*.ts", "src/lib/**/*.tsx"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx", "src/**/*.spec.ts"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "SVGlide",
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        preserveModules: false,
        exports: "named",
        globals: {
          react: "React",
          "react/jsx-runtime": "jsx",
          "react-dom": "ReactDOM",
        },
        inlineDynamicImports: true,
      },
    },
  },
});
