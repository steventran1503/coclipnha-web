// Bản đồ 8 đề tài bài viết — nguồn: docs/web/kho-thong-diep.md mục 10 "Bản đồ
// khối → video tự động" (mỗi clip cũng là một bài viết, xem khối BV). Danh
// sách này là cấu trúc điều hướng (slug, thứ tự), KHÔNG phải nội dung — tít +
// tóm tắt mỗi thẻ vẫn đọc qua layKhoi(maChinh) tại nơi dùng (FR-003).
//
// Tách thành module dùng chung để trang chỉ mục (index.astro) và trang khung
// chờ (T045, dùng route động [slug].astro) không phải chép lại danh sách hai
// lần — sửa đề tài chỉ một chỗ.
export interface DeTaiBaiViet {
  slug: string;
  /** Mã khối chính — lấy câu chốt làm tít, diễn giải làm tóm tắt (đúng khối BV). */
  maChinh: string;
  /** Mã khối phụ (nếu có) — vế "cách xử" đặt dưới tít trên thẻ chỉ mục. */
  maPhu?: string;
  daXong: boolean;
}

export const DE_TAI_BAI_VIET: DeTaiBaiViet[] = [
  { slug: "hang-hoan", maChinh: "ND-02", maPhu: "GP-04", daXong: true },
  {
    slug: "quay-tay-khong-ben",
    maChinh: "ND-04",
    maPhu: "GP-01",
    daXong: false,
  },
  { slug: "co-bang-chung", maChinh: "ND-01", maPhu: "GP-03", daXong: false },
  // LỆCH CÓ CHỦ Ý so với mục 10 (mục 10 ghi HD-01..03): HD-01..03 là ba câu
  // dài mô tả từng bước, lấy làm tít thẻ thì tràn cả thẻ. Dùng TG-01 làm
  // tít/tóm tắt thẻ; khi viết bài đầy đủ thì THÂN BÀI mới dùng HD-01..03
  // (chốt 28/07 khi kiểm lại Phase 8 — xem tasks.md).
  { slug: "huong-dan-3-buoc", maChinh: "TG-01", daXong: false },
  // Bai "zin-zin-motor" ke chuyen SHOP, nen doc BC-03 (doi tac thu nghiem)
  // chu khong phai BC-01 (doi ngu phat trien) — tach vai 21/08/2026.
  { slug: "zin-zin-motor", maChinh: "BC-03", daXong: false },
  {
    slug: "mien-phi-va-ung-ho",
    maChinh: "PB-01",
    maPhu: "KG-02",
    daXong: false,
  },
  { slug: "khong-ton-o-cung", maChinh: "GP-06", maPhu: "GP-07", daXong: false },
  { slug: "tim-video-5-giay", maChinh: "GP-02", daXong: false },
];
