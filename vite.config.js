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
        topics: resolve(__dirname, "level1/topics.html"),
        videos: resolve(__dirname, "level1/videos.html"),
        audiobooks: resolve(__dirname, "level1/audiobooks.html"),
        songs: resolve(__dirname, "level1/songs.html"),
        makeFlashcard: resolve(__dirname, "makeFlashcard/index.html"),

        alphabets: resolve(__dirname, "level1/alphabets.html"),
        animals: resolve(__dirname, "level1/animals.html"),
      },
    },
  },
});
