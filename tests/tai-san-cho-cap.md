# Tài sản chờ chủ dự án cấp (cập nhật 28/07/2026, sau đợt rà soát công bố)

T051 — spec 004. Đây là những thứ **web đã chừa sẵn chỗ**, chỉ chờ có thật là
gắn vào. Không thứ nào chặn việc phát hành phần còn lại: chỗ nào chưa có, trang
hiện một câu chờ tử tế thay vì nút chết hay ô trống (FR-021).

Cột "gắn vào đâu" ghi luôn nơi sửa, để lần cấp sau khỏi phải đi tìm.

| # | Thứ còn thiếu | Trang bị ảnh hưởng | Web đang xử ra sao | Gắn vào đâu khi có |
|---|---|---|---|---|
| 1 | **Link tải bản cài** (GitHub Releases) | Tải về | Nút xám "Tải về miễn phí — sắp có" + câu giải thích đang đóng gói | `src/pages/tai-ve.astro` — đổi nút sang `…/releases/latest/download/…` |
| 2 | **Link Facebook page** | Mọi trang (menu + chân trang) | "ⓕ Facebook page — sắp có", chữ mờ, không bấm được | `MenuBaGach.astro` (điền `href`) + `ChanTrang.astro` |
| 3 | **Link TikTok** | Mọi trang | "♪ TikTok — sắp có" | như trên |
| 4 | **Link nhắn tin Messenger** (`m.me/…`) | Mọi trang + Góp ý + Báo lỗi + trang chủ | "💬 Nhắn tin qua Facebook — đang chờ link" | như trên + 2 trang trợ giúp |
| 5 | **3 link biểu mẫu** (góp ý / báo lỗi / yêu cầu phần mềm) | 3 trang trợ giúp | "Biểu mẫu … — sắp mở" | `src/components/NutBieuMau.astro` |
| 6 | **Ảnh mã VietQR** | Ủng hộ | Ô vuông "Mã chuyển khoản sắp có — tụi mình đang chuẩn bị" | `src/pages/ung-ho.astro` + ảnh vào `public/anh/` |
| 7 | **Link mua + ảnh 2 camera** (EMEET ưu tiên, Ugreen) | Tải về, Thiết bị đề xuất | Thẻ camera đã có tên + lý do + dòng "đã chạy thử"; nút hiện "Link mua — sắp có", ảnh hiện ô chờ | **CHỈ MỘT CHỖ**: `src/data/thiet-bi-goi-y.json` (ô `link`, `anh`, `noi_ban`, `model`). Sửa một lần, cả hai trang cùng đổi. Câu công khai hoa hồng tự gắn kèm, không tắt được |
| 8a | **Video demo NGẮN** (quay màn hình app chạy một ca gói) | Trang chủ — trong khung "Quét thử" đầu trang | Nút hiện "📷 Video app chạy thật — sắp có"; cảnh app tĩnh vẫn hiện đầy đủ | `src/pages/index.astro` — điền `VIDEO_DEMO` |
| 8b | **Video hướng dẫn ĐẦY ĐỦ** (mọi tính năng) | Trang chủ (cuối trang), Tải về | Mặt tiền giả YouTube dạng chờ | `index.astro` + `tai-ve.astro` — điền `VIDEO_HUONG_DAN` |
| ~~9~~ | ~~**File in mã QR A6 + A4**~~ — **ĐÃ CÓ 19/08/2026** | Tải mã QR điều khiển | Trang hiện ảnh hai mã + nút tải PDF A6 sống. Bản A4 4-mã-cắt-rời **bỏ hẳn** (chủ dự án chốt: in mấy tờ thì chọn số bản lúc in) | xong — `public/in/coclipnha-ma-qr-a6.pdf`, ảnh ở `public/anh/qr-*.webp`, gốc JPG ở `public/in/` |
| 10 | **Đánh giá khách hàng thật** | Trang chủ | Cố ý CHƯA có khối đánh giá — chỉ có "Người dùng đầu tiên" kể chuyện ZIN ZIN MOTOR, không gắn sao (FR-019) | chỉ thêm khi có đánh giá thật, không bịa |
| 11 | **Tên miền `coclipnha.com`** (DNS) | Toàn site | Chạy tạm ở `steventran1503.github.io/coclipnha-web` | `astro.config.mjs`: đổi `site`, xoá `base`, thêm `public/CNAME` — làm SAU khi web hoàn thiện |
| 12 | **Ngày đăng 7 bài viết còn lại** | Bài viết | "chưa có ngày đăng cụ thể" (không bịa mốc) | `src/lib/baiViet.ts` |
| 13 | **Câu dẫn cho trang Bài viết** | Bài viết | Vào thẳng 8 thẻ, không có đoạn dẫn | viết 1 câu vào `kho-thong-diep.md` mục 7f rồi gắn vào `bai-viet/index.astro` |
| 14 | **Ảnh chia sẻ mạng xã hội** (1200×630) | Toàn site (thẻ OpenGraph) | Dán link lên Facebook ra thẻ có tít + mô tả nhưng KHÔNG có ảnh | ảnh vào `public/anh/chia-se.jpg` rồi điền `ANH_CHIA_SE` trong `BaseLayout.astro` |
| ~~15~~ | ~~**Ảnh giá đỡ camera**~~ — **ĐÃ CÓ 19/08/2026** | Thiết bị đề xuất | Thẻ giá đỡ đã đủ ảnh + tên + lý do + dòng "đã chạy thử" + nút mua sống | xong — `public/anh/gia-do-camera.webp`, gốc JPG chủ dự án cấp ở `QR module/assets/` |

## Nhắc khi gắn tài sản vào

- Cấp link **có hoa hồng** thì câu công khai phải nằm ngay cạnh link (FR-008).
  Với camera thì việc này TỰ ĐỘNG rồi — câu nằm trong `TheThietBi.astro`,
  không tắt được từ file dữ liệu. Muốn đổi cách viết câu đó: sửa
  `CAU_MINH_BACH` trong `src/lib/thietBi.ts`, đừng xoá.
- Cấp mã video YouTube thì kiểm lại trang vẫn nhẹ: mặt tiền giả chỉ tải iframe
  khi người xem bấm — đừng đổi thành iframe nhúng thẳng.
- Mỗi lần gắn xong: chạy `npm run build`, `npm run kiem:link`, rồi soát lại
  `tests/checklist-tay-web.md` mục 8.
