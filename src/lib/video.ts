/**
 * Mã video YouTube của web. Ba mã đầu là Tài sản chờ chủ dự án cấp
 * (tests/tai-san-cho-cap.md mục 8a / 8b / 8c); chưa có mã thì mặt tiền giả
 * hiện trạng thái "đang chờ" có nghĩa, không để khung vỡ (FR-021).
 *
 * ĐỂ MỘT CHỖ vì cùng một video hiện ở NHIỀU trang. Trước đây mỗi trang tự khai
 * một hằng số riêng, hậu quả: trang Hướng dẫn gọi mặt tiền mà KHÔNG hề truyền
 * mã video — điền mã vào trang chủ xong, khung ở trang Hướng dẫn vẫn nằm im ở
 * chữ "đang chờ" mà không ai biết. Điền vào đây là mọi trang cùng sống.
 *
 * Đừng lẫn bốn video (chốt 28/07/2026, thêm mục thứ ba 22/08/2026, thêm mục
 * CÀI ĐẶT 22/08/2026):
 *  - VIDEO_DEMO: đoạn NGẮN quay màn hình app chạy một ca gói — "app chạy ra
 *    sao". Hiện ở khung "Quét thử" đầu trang chủ.
 *  - VIDEO_HUONG_DAN: đoạn ĐẦY ĐỦ mọi tính năng — "dùng thế nào". Hiện ở khối
 *    VD-01 (cuối trang chủ, trang Tải về, đầu trang Hướng dẫn).
 *  - VIDEO_TIM_LAI: đoạn RIÊNG chỉ dạy cách tìm lại video của đúng đơn khách
 *    khiếu nại — chính là clip 8 trong bản đồ video (kho-thong-diep.md mục 10,
 *    khối GP-02). Hiện ở trang Hướng dẫn.
 *  - VIDEO_CAI_DAT: đoạn dạy CÀI phần mềm vào máy — "tải xong rồi làm gì".
 *    Hiện ở trang Tải về, ngay dưới nút tải. ⛔ Đừng dồn mã này vào
 *    VIDEO_HUONG_DAN: ô đó hiện ở 3 trang dưới tít VD-01 "Xem một ca đóng gói
 *    thật", người xem bấm vào sẽ thấy nội dung khác hẳn tít.
 */
export const VIDEO_DEMO: string | undefined = undefined;
export const VIDEO_HUONG_DAN: string | undefined = undefined;
export const VIDEO_TIM_LAI: string | undefined = undefined;
// Chủ dự án cấp 22/08/2026 — "Cách cài đặt CoClipNha – Phần mềm quay video
// chống trao hàng (Miễn phí)", kênh Coclipnha.
export const VIDEO_CAI_DAT: string | undefined = "BrhCx9mKIas";

/**
 * Câu đặt DƯỚI khung video VD-01 ("Xem một ca đóng gói thật") — hiện ở trang
 * chủ, trang Tải về và trang Hướng dẫn. Chỉ hiện khi ĐÃ có mã video; chưa có
 * thì ô video nói "đang được quay", không mời bấm.
 * Khai một chỗ cho cả 3 trang, đừng chép lại vào từng trang.
 */
export const CHU_DUOI_VD01 = "Bấm play để xem phiên gói hàng thật";

/**
 * Ảnh nền TỰ LƯU cho khung video: ảnh chụp màn hình app thật (chủ dự án cấp
 * 24/08/2026), ĐÃ làm mờ tên / số điện thoại / địa chỉ khách trên tem vận đơn.
 * ⛔ Đừng thay bằng ảnh chưa che — bản gốc còn thông tin khách hàng thật.
 *
 * Dùng ở hai chỗ: mặc định cho ô video ĐANG CHỜ (mọi khung), và làm ảnh đại
 * diện cho video VD-01 khi đã có mã — lúc đó web không phải gọi ra
 * `i.ytimg.com` nữa, ảnh cũng nét hơn (ảnh YouTube chỉ 480×360 cho khung 16:9).
 */
export const ANH_POSTER_APP = "anh/phan-mem-goi-hang-ma-qr-coclipnha.webp";

export const ANH_APP_DANG_GHI =
  "anh/phan-mem-quay-video-ma-qr-van-don-coclipnha.webp";
/**
 * Bản CỠ GỐC (1671×940, 101 KB) của ảnh trên — cho `srcset` + link "xem ảnh to".
 * ⚠ Ảnh gốc chủ dự án cấp chỉ rộng 1672px nên KHÔNG có bản 1920: phóng to lên
 * chỉ làm chữ nhoè thêm chứ không nét hơn. Muốn nét hơn phải chụp lại ở màn
 * hình to hơn.
 */
export const ANH_APP_DANG_GHI_2X =
  "anh/phan-mem-quay-video-ma-qr-van-don-coclipnha-1671.webp";

/**
 * Hai câu cho khối ảnh app ĐẦU TRANG CHỦ, đặt ngay DƯỚI khung ảnh — cùng kiểu
 * với câu dưới ô video VD-01 cuối trang (chủ dự án yêu cầu 24/08/2026: "có
 * logo play và dưới logo có dòng chữ như phần ở cuối trang").
 *
 * `CHU_DUOI_QUET_THU` chỉ hiện khi ĐÃ có `VIDEO_DEMO`; chưa có thì hiện
 * `CHU_CHO_QUET_THU` và nút play để XÁM, không bấm được (FR-021 — chưa có
 * video thì đừng mời bấm). Điền `VIDEO_DEMO` là nút tự đỏ + câu tự đổi.
 *
 * ⚠️ Nếu sau này trỏ `VIDEO_DEMO` sang một video KHÁC nội dung (ví dụ video
 * hướng dẫn cài đặt) thì phải sửa câu dưới đây cho khớp — người xem bấm vào mà
 * thấy nội dung khác câu mời là mất tin ngay.
 */
export const CHU_DUOI_QUET_THU = "Bấm play để xem app chạy thật";
export const CHU_CHO_QUET_THU = "Video app chạy thật — sắp có";
