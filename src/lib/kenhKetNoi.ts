/**
 * MỘT CHỖ DUY NHẤT khai link kênh của CoClipNha (Tài sản chờ chủ dự án cấp —
 * tests/tai-san-cho-cap.md mục 2 / 3 / 4 / 16).
 *
 * Cùng một link hiện ở NHIỀU nơi: menu ba gạch + chân trang (và Messenger còn
 * ở trang chủ, Góp ý, Báo lỗi). Khai một chỗ để điền một lần là mọi nơi cùng
 * sống — đúng bài học của `video.ts`: trước đây mỗi trang tự khai một hằng số
 * riêng nên điền chỗ này xong chỗ kia vẫn nằm im ở chữ "đang chờ".
 *
 * `undefined` = CHƯA có link thật → nơi hiển thị tự chuyển sang chữ mờ "đang
 * chờ / sắp có", KHÔNG để link chết href="#" (FR-021).
 */
export const LINK_YOUTUBE: string | undefined =
  "https://www.youtube.com/@coclipnha";
export const LINK_FACEBOOK: string | undefined =
  "https://www.facebook.com/profile.php?id=61593523655589";
export const LINK_TIKTOK: string | undefined =
  "https://www.tiktok.com/@coclipnha";
/**
 * Link nhắn tin Messenger dạng `https://m.me/…` — số phía sau chính là số của
 * Facebook page ở `LINK_FACEBOOK`. Link này còn hiện ở trang chủ (khối KN-02),
 * trang Góp ý và trang Báo lỗi, tất cả đều đọc từ đây.
 */
export const LINK_MESSENGER: string | undefined = "https://m.me/61593523655589";
