// import { splitVendorChunkPlugin } from "vite";
import { resolve } from "path";
import { defineConfig } from "vite";
// export default defineConfig({
//   plugins: [splitVendorChunkPlugin()],
// });

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        level1: resolve(__dirname, "level1/lvl1.html"),
        level1: resolve(__dirname, "level1/topics.html"),
        level1: resolve(__dirname, "level1/videos.html"),
        level1: resolve(__dirname, "level1/audiobooks.html"),
        makeFlashcard: resolve(__dirname, "makeFlashcard/index.html"),
      },
    },
  },
});
