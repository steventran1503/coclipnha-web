// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// site/base tạm trỏ GitHub Pages mặc định (dạng .github.io/coclipnha-web) —
// khi DNS coclipnha.com trỏ xong (T002, chủ dự án làm sau khi web hoàn
// thiện): đổi site thành "https://coclipnha.com", xoá base, thêm public/CNAME
// chứa "coclipnha.com" (thêm CNAME sớm sẽ làm GitHub tự chuyển hướng URL
// .github.io sang domain chưa phân giải — mất luôn đường xem thử tạm thời).
export default defineConfig({
  site: "https://steventran1503.github.io",
  base: "/coclipnha-web",
  vite: {
    plugins: [tailwindcss()],
  },
});
