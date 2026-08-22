/**
 * BA mã video YouTube của web — Tài sản chờ chủ dự án cấp
 * (tests/tai-san-cho-cap.md mục 8a / 8b / 8c). Chưa có mã thì mặt tiền giả
 * hiện trạng thái "đang chờ" có nghĩa, không để khung vỡ (FR-021).
 *
 * ĐỂ MỘT CHỖ vì cùng một video hiện ở NHIỀU trang. Trước đây mỗi trang tự khai
 * một hằng số riêng, hậu quả: trang Hướng dẫn gọi mặt tiền mà KHÔNG hề truyền
 * mã video — điền mã vào trang chủ xong, khung ở trang Hướng dẫn vẫn nằm im ở
 * chữ "đang chờ" mà không ai biết. Điền vào đây là mọi trang cùng sống.
 *
 * Đừng lẫn ba video (chốt 28/07/2026, thêm mục thứ ba 22/08/2026):
 *  - VIDEO_DEMO: đoạn NGẮN quay màn hình app chạy một ca gói — "app chạy ra
 *    sao". Hiện ở khung "Quét thử" đầu trang chủ.
 *  - VIDEO_HUONG_DAN: đoạn ĐẦY ĐỦ mọi tính năng — "dùng thế nào". Hiện ở khối
 *    VD-01 (cuối trang chủ, trang Tải về, đầu trang Hướng dẫn).
 *  - VIDEO_TIM_LAI: đoạn RIÊNG chỉ dạy cách tìm lại video của đúng đơn khách
 *    khiếu nại — chính là clip 8 trong bản đồ video (kho-thong-diep.md mục 10,
 *    khối GP-02). Hiện ở trang Hướng dẫn.
 */
export const VIDEO_DEMO: string | undefined = undefined;
export const VIDEO_HUONG_DAN: string | undefined = undefined;
export const VIDEO_TIM_LAI: string | undefined = undefined;
