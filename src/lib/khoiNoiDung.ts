import { getEntry, type CollectionEntry } from "astro:content";

/**
 * Đọc một Khối nội dung theo mã (vd "GP-04"). Ném lỗi ngay tại build time nếu
 * mã không tồn tại trong `kho-noi-dung.json` — chặn lỗi "bịa nội dung"
 * (data-model.md → Khối nội dung → Validation rule).
 */
export async function layKhoi(
  ma: string,
): Promise<CollectionEntry<"kho-thong-diep">> {
  const khoi = await getEntry("kho-thong-diep", ma);
  if (!khoi) {
    throw new Error(
      `Khối nội dung "${ma}" không tồn tại trong kho-noi-dung.json — kiểm tra lại mã hoặc chạy lại xuat_kho_noi_dung.py.`,
    );
  }
  return khoi;
}
