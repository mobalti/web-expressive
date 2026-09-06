import { defineConfig } from "vite";
import { resolve, basename } from "path";
import { glob } from "glob";

export default defineConfig({
  plugins: [
    {
      name: "prevent-css-dedupe",
      enforce: "pre",
      transform(code, id) {
        if (id.endsWith(".css") && id.replace(/\\/g, "/").includes("/alpha/")) {
          const filename = basename(id);
          return code + '\n:root { --alpha-file: "' + filename + '"; }';
        }
      },
    },
  ],
  esbuild: {
    legalComments: "inline",
  },
  build: {
    target: "esnext",
    cssTarget: "esnext",
    cssCodeSplit: true,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.css")
          .filter((file) => !basename(file).startsWith("_"))
          .map((file) => [
            file.replace(/^lib\//, "").replace(/\.css$/, ""),
            resolve(import.meta.dirname, file),
          ])
      ),
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] || assetInfo.name || "";
          const cleanName = name.replace(/^lib\//, "");
          return cleanName;
        },
      },
    },
  },
});
