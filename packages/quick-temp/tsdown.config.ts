import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "src/index.ts",
    exports: true,
    // dts: true,
    format: ["esm", "cjs"],
  },
  {
    entry: "src/mktemp.ts",
    exports: true,
    dts: true,
    format: ["esm", "cjs"],
  },
]);
