import duLieu from "../data/thiet-bi-goi-y.json";

/**
 * Cổng đọc DUY NHẤT cho danh sách thiết bị đề xuất (`thiet-bi-goi-y.json`).
 *
 * Vì sao là file dữ liệu riêng chứ không nằm trong kho thông điệp: đây là dữ
 * liệu SẢN PHẨM (tên model, link bán, ảnh) đổi theo thị trường vài tháng một
 * lần, không phải câu chữ marketing. Kho thông điệp vẫn giữ phần lời (TB-01
 * yêu cầu camera, TB-02 giọng nói về chuyện gợi ý) — file này chỉ giữ phần
 * "mẫu nào, mua ở đâu". Chủ dự án sửa được cả hai mà không cần lập trình viên.
 *
 * Trang Tải về và trang Thiết bị đề xuất đều đọc qua đây → đổi thiết bị một
 * lần là cả hai trang cùng đổi (yêu cầu chủ dự án 28/07/2026).
 */

/**
 * 'camera'   = thiết bị bắt buộc;
 * 'phu_kien' = món gắn thêm cho tiện (giá đỡ...);
 * 'man_hinh' = màn hình cho bàn gói (mỗi điểm gói một cái — chốt 22/08/2026).
 */
export type LoaiThietBi = "camera" | "phu_kien" | "man_hinh";

export interface ThietBi {
  ma: string;
  ten: string;
  model: string;
  /** Bỏ trống trong JSON thì hiểu là "camera" (xem loaiCua). */
  loai?: LoaiThietBi;
  uu_tien: number;
  vi_sao: string;
  da_test: string;
  anh: string | null;
  link: string | null;
  noi_ban: string;
  con_ban: boolean;
}

/**
 * Nhãn công khai bắt buộc đặt ngay cạnh mọi link có hoa hồng (FR-008, SC-006).
 *
 * Chủ dự án chốt 19/08/2026: rút còn đúng nhãn "Link tài trợ", bỏ vế giải
 * thích "nơi bán trích hoa hồng..., giá shop trả không đổi" của bản 28/07 vì
 * câu đó dài, đọc nặng nề giữa thẻ camera. Nhãn trơ vẫn là công khai hợp lệ
 * (Shopee Affiliate và Google chỉ đòi có công khai, không đòi câu chữ nào).
 *
 * ĐƯỢC sửa cách viết. KHÔNG được bỏ hẳn: bỏ là vi phạm FR-008, và mất công
 * khai thì rủi ro thật là Shopee khoá tài khoản tiếp thị + Google xếp trang
 * vào nhóm gài link.
 */
export const CAU_MINH_BACH = "Link tài trợ";

/** Loại của một món, mặc định là camera khi JSON bỏ trống ô `loai`. */
export function loaiCua(t: ThietBi): LoaiThietBi {
  return t.loai ?? "camera";
}

const conDeXuat: ThietBi[] = (duLieu.thiet_bi as ThietBi[])
  .filter((t) => t.con_ban)
  .sort((a, b) => a.uu_tien - b.uu_tien);

/**
 * CAMERA còn đề xuất, đã xếp theo ưu tiên (số nhỏ hiện trước).
 *
 * Cố ý CHỈ có camera: trang Tải về cũng đọc danh sách này, mà ở đó câu chốt
 * là "camera lấy nét tự động là yêu cầu BẮT BUỘC". Trộn phụ kiện vào đây thì
 * người đọc tưởng phải mua thêm mới chạy được app.
 */
export const thietBiGoiY: ThietBi[] = conDeXuat.filter(
  (t) => loaiCua(t) === "camera",
);

/**
 * PHỤ KIỆN còn đề xuất (giá đỡ...) — chỉ trang Thiết bị đề xuất dùng tới,
 * xếp sau phần camera (chủ dự án chốt 19/08/2026).
 */
export const phuKienGoiY: ThietBi[] = conDeXuat.filter(
  (t) => loaiCua(t) === "phu_kien",
);

/**
 * MÀN HÌNH còn đề xuất — chỉ trang Thiết bị đề xuất dùng tới, xếp sau phụ kiện
 * (chủ dự án chốt 22/08/2026).
 *
 * Vì sao KHÔNG gộp vào `phu_kien`: chữ trên nút và ô chờ ảnh lấy theo loại;
 * gộp vào thì nút màn hình sẽ hiện "Xem giá đỡ trên Shopee". Và mục màn hình
 * nói chuyện khác hẳn — bao nhiêu điểm gói thì bấy nhiêu màn hình — không nên
 * nằm chung mục giá đỡ camera.
 */
export const manHinhGoiY: ThietBi[] = conDeXuat.filter(
  (t) => loaiCua(t) === "man_hinh",
);

/**
 * Danh xưng để ghép câu trên thẻ ("Xem camera…" / "Xem giá đỡ…" / "Xem màn
 * hình…"). Thẻ dùng chung cho mọi loại nên không được ghi cứng chữ "camera".
 */
const DANH_XUNG: Record<LoaiThietBi, string> = {
  camera: "camera",
  phu_kien: "giá đỡ",
  man_hinh: "màn hình",
};

export function danhXung(t: ThietBi): string {
  return DANH_XUNG[loaiCua(t)];
}

/** Ngày chủ dự án soát lại danh sách lần cuối — hiện trên trang thiết bị. */
export const capNhatLanCuoi: string = duLieu.cap_nhat_lan_cuoi;

/** Tên đầy đủ để hiển thị: gộp hãng + model, model trống thì chỉ còn hãng. */
export function tenDayDu(t: ThietBi): string {
  return t.model ? `${t.ten} ${t.model}` : t.ten;
}
