import nguonSuThat from "../data/nguon-su-that.json";

/**
 * Cổng đọc DUY NHẤT cho `nguon-su-that.json` (xem contracts/nguon-su-that-contract.md).
 * Component mô phỏng app PHẢI import qua đây, không hardcode lại màu/chữ.
 * File JSON nguồn do `docs/web/xuat_nguon_su_that.py` sinh (chỉ đọc mã app);
 * KHÔNG sửa tay — chạy lại script rồi copy đè khi mã app đổi.
 */

export const bangTrangThai = nguonSuThat.bang_trang_thai;
export type TrangThai = keyof typeof bangTrangThai;
export type CheDoMau = "dark" | "light";

export const chuHienThiBanner = nguonSuThat.chu_hien_thi_banner;
export const tenFileVideo = nguonSuThat.ten_file_video;
export const dongLog = nguonSuThat.dong_log;
export const watermark = nguonSuThat.watermark;
export const nhip = nguonSuThat.nhip;
export const qrDieuKhien = nguonSuThat.qr_dieu_khien;

/** Màu nền/chữ của băng trạng thái theo trạng thái + bộ màu (mặc định Tối, theo demo đã duyệt). */
export function layMauTrangThai(
  trangThai: TrangThai,
  cheDo: CheDoMau = "dark",
) {
  return bangTrangThai[trangThai][cheDo];
}

/** Gợi ý hiển thị dưới dòng chính của băng trạng thái. */
export function layGoiYTrangThai(trangThai: TrangThai): string {
  return bangTrangThai[trangThai].hint;
}
