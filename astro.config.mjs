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

// Tên miền thật coclipnha.com (T002, đổi 29/07/2026). Không còn `base` vì web
// nay nằm ở GỐC tên miền chứ không phải thư mục con /coclipnha-web nữa.
//
// ⚠️ Đi kèm `public/CNAME` — hai thứ phải đổi CÙNG LÚC và chỉ đẩy lên SAU KHI
// DNS đã phân giải. Đẩy sớm là GitHub chuyển hướng luôn địa chỉ .github.io
// sang tên miền chưa sống, mất cả đường xem thử tạm.
//
// Muốn quay lại địa chỉ tạm (vd tên miền có sự cố): đặt lại
// site: "https://steventran1503.github.io", base: "/coclipnha-web", và XOÁ
// public/CNAME.
export default defineConfig({
  site: "https://coclipnha.com",
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
