# Tài sản chờ chủ dự án cấp (tính đến 28/07/2026)

T051 — spec 004. Đây là những thứ **web đã chừa sẵn chỗ**, chỉ chờ có thật là
gắn vào. Không thứ nào chặn việc phát hành phần còn lại: chỗ nào chưa có, trang
hiện một câu chờ tử tế thay vì nút chết hay ô trống (FR-021).

Cột "gắn vào đâu" ghi luôn nơi sửa, để lần cấp sau khỏi phải đi tìm.

| # | Thứ còn thiếu | Trang bị ảnh hưởng | Web đang xử ra sao | Gắn vào đâu khi có |
|---|---|---|---|---|
| 1 | **Link tải bản cài** (GitHub Releases) | Tải về | Nút xám "Tải về miễn phí — sắp có" + câu giải thích đang đóng gói | `src/pages/tai-ve.astro` — đổi nút sang `…/releases/latest/download/…` |
| 2 | **Link Facebook page** | Mọi trang (menu + chân trang) | "ⓕ Facebook page (chờ link)", không bấm được | `MenuBaGach.astro` + `ChanTrang.astro` |
| 3 | **Link TikTok** | Mọi trang | "♪ TikTok (chờ link)" | như trên |
| 4 | **Link nhắn tin Messenger** (`m.me/…`) | Mọi trang + Góp ý + Báo lỗi + trang chủ | "💬 Nhắn tin qua Facebook — đang chờ link" | như trên + 2 trang trợ giúp |
| 5 | **3 link biểu mẫu** (góp ý / báo lỗi / yêu cầu phần mềm) | 3 trang trợ giúp | "Biểu mẫu … — sắp mở" | `src/components/NutBieuMau.astro` |
| 6 | **Ảnh mã VietQR** | Ủng hộ | Ô vuông "Mã VietQR đang chờ cập nhật — sẽ đặt đúng tại ô này" | `src/pages/ung-ho.astro` + ảnh vào `public/anh/` |
| 7 | **Link affiliate camera** (Ugreen / EMEET) | Tải về, Ủng hộ | "Danh sách mẫu gợi ý đang chờ chọn xong" + đã sẵn câu minh bạch hoa hồng | `tai-ve.astro`, `ung-ho.astro` — **link mới PHẢI kèm câu hoa hồng** |
| 8 | **Video demo YouTube + danh sách chương** | Trang chủ, Hướng dẫn sử dụng | Mặt tiền giả YouTube, chưa có mã video thật | component `YoutubeFacade.astro` (truyền `videoId`) |
| 9 | **File in mã QR A6 + A4** | Tải mã QR điều khiển | "Bản in A6 — đang chuẩn bị" | `src/pages/tro-giup/tai-qr.astro` + file vào `public/` |
| 10 | **Đánh giá khách hàng thật** | Trang chủ | Cố ý CHƯA có khối đánh giá — chỉ có "Người dùng đầu tiên" kể chuyện ZIN ZIN MOTOR, không gắn sao (FR-019) | chỉ thêm khi có đánh giá thật, không bịa |
| 11 | **Tên miền `coclipnha.com`** (DNS) | Toàn site | Chạy tạm ở `steventran1503.github.io/coclipnha-web` | `astro.config.mjs`: đổi `site`, xoá `base`, thêm `public/CNAME` — làm SAU khi web hoàn thiện |
| 12 | **Ngày đăng 7 bài viết còn lại** | Bài viết | "chưa có ngày đăng cụ thể" (không bịa mốc) | `src/lib/baiViet.ts` |
| 13 | **Câu dẫn cho trang Bài viết** | Bài viết | Vào thẳng 8 thẻ, không có đoạn dẫn | viết 1 câu vào `kho-thong-diep.md` mục 7f rồi gắn vào `bai-viet/index.astro` |

## Nhắc khi gắn tài sản vào

- Cấp link **hoa hồng** thì câu minh bạch phải nằm ngay cạnh link (FR-008).
- Cấp mã video YouTube thì kiểm lại trang vẫn nhẹ: mặt tiền giả chỉ tải iframe
  khi người xem bấm — đừng đổi thành iframe nhúng thẳng.
- Mỗi lần gắn xong: chạy `npm run build`, `npm run kiem:link`, rồi soát lại
  `tests/checklist-tay-web.md` mục 8.
