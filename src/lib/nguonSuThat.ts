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

/**
 * Băng trạng thái mô phỏng trên web cần 4 dáng: ready/rec/warn thật của app,
 * cộng "saved" (dùng màu + gợi ý của "ready" nhưng chữ chính khác — đúng cách
 * app hiển thị lúc vừa lưu xong, xem `chu_hien_thi_banner`). Khóa RAW dưới đây
 * là nguyên văn khóa trong `nguon-su-that.json`, không phải chữ tự đặt.
 */
export type TrangThaiBang = "ready" | "rec" | "saved" | "warn";

const KHOA_RAW: Record<TrangThaiBang, keyof typeof chuHienThiBanner> = {
  ready: "🟢 Đang chờ mã QR...",
  rec: "🔴 Đang ghi hình",
  saved: "✅ Đã lưu video",
  warn: "⚠️ Cảnh báo: QR trùng đã ghi rồi!",
};

const TRANG_THAI_GOC: Record<TrangThaiBang, TrangThai> = {
  ready: "ready",
  rec: "rec",
  saved: "ready",
  warn: "warn",
};

/** Chữ chính của băng, lấy nguyên văn từ `chu_hien_thi_banner` (FR-006). */
export function layChuBang(ten: TrangThaiBang): string {
  const khoa = KHOA_RAW[ten];
  const chu = chuHienThiBanner[khoa];
  if (!chu) {
    throw new Error(
      `Không tìm thấy chữ hiển thị cho trạng thái băng "${ten}" (khóa "${khoa}") trong nguon-su-that.json.`,
    );
  }
  return chu;
}

/** Màu nền/chữ của băng trạng thái (bản Tối, theo demo đã duyệt). */
export function layMauBang(ten: TrangThaiBang, cheDo: CheDoMau = "dark") {
  return layMauTrangThai(TRANG_THAI_GOC[ten], cheDo);
}

/** Gợi ý dưới dòng chính của băng. */
export function layGoiYBang(ten: TrangThaiBang): string {
  return layGoiYTrangThai(TRANG_THAI_GOC[ten]);
}

/** Dòng nhật ký "đã lưu video", điền số liệu vào đúng mẫu `dong_log.da_luu`. */
export function dongDaLuu(
  tenFile: string,
  kichThuocMb: number,
  thoiLuongGiay: number,
): string {
  return dongLog.da_luu
    .replace("{output_path}", tenFile)
    .replace("{size_mb:.1f}", kichThuocMb.toFixed(1))
    .replace("{duration:.1f}", thoiLuongGiay.toFixed(1));
}

/** Tên file video mô phỏng — điền đúng vào khuôn `ten_file_video.mau`, không gõ lại tay. */
export function sinhTenFile(maDon: string, thoiGian: string, ten = "Hue"): string {
  return tenFileVideo.mau
    .replace("<QR>", maDon)
    .replace("<thoi_gian>", thoiGian)
    .replace("<TenNhanVien>", ten);
}

/** Dòng "QR: <mã>" của watermark, điền vào đúng mẫu `watermark.cac_dong` (không gõ lại "QR: "). */
export function dongQr(maDon: string): string {
  const mau = watermark.cac_dong.find((d) => d.startsWith("QR:")) ?? "QR: {qr}";
  return mau.replace("{qr}", maDon);
}
