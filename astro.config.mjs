// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import { DE_TAI_BAI_VIET } from "./src/lib/baiViet.ts";

// Bài viết chưa soạn xong KHÔNG được vào sitemap: gửi Google 7 trang gần như
// trống thì Google đánh giá thấp chất lượng của cả site, không riêng 7 trang
// đó (rà soát 28/07, P3). Trang vẫn tồn tại và vẫn vào được từ trang Bài
// viết — chỉ là không mời Google xếp hạng. Danh sách đọc thẳng từ baiViet.ts
// nên viết xong một bài, đổi `daXong: true` là trang tự vào sitemap, không
// phải nhớ sửa thêm chỗ nào.
const DUONG_BAI_CHUA_XONG = DE_TAI_BAI_VIET.filter((t) => !t.daXong).map(
  (t) => `/bai-viet/${t.slug}/`,
);

// site/base tạm trỏ GitHub Pages mặc định (dạng .github.io/coclipnha-web) —
// khi DNS coclipnha.com trỏ xong (T002, chủ dự án làm sau khi web hoàn
// thiện): đổi site thành "https://coclipnha.com", xoá base, thêm public/CNAME
// chứa "coclipnha.com" (thêm CNAME sớm sẽ làm GitHub tự chuyển hướng URL
// .github.io sang domain chưa phân giải — mất luôn đường xem thử tạm thời).
export default defineConfig({
  site: "https://steventran1503.github.io",
  base: "/coclipnha-web",
  integrations: [
    sitemap({
      filter: (trang) =>
        !DUONG_BAI_CHUA_XONG.some((duong) => trang.endsWith(duong)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
