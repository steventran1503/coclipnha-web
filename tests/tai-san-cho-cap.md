# Tài sản chờ chủ dự án cấp (cập nhật 28/07/2026, sau đợt rà soát công bố)

T051 — spec 004. Đây là những thứ **web đã chừa sẵn chỗ**, chỉ chờ có thật là
gắn vào. Không thứ nào chặn việc phát hành phần còn lại: chỗ nào chưa có, trang
hiện một câu chờ tử tế thay vì nút chết hay ô trống (FR-021).

Cột "gắn vào đâu" ghi luôn nơi sửa, để lần cấp sau khỏi phải đi tìm.

| # | Thứ còn thiếu | Trang bị ảnh hưởng | Web đang xử ra sao | Gắn vào đâu khi có |
|---|---|---|---|---|
| 1 | **Link tải bản cài** (GitHub Releases) | Tải về | Nút xám "Tải về miễn phí — sắp có" + câu giải thích đang đóng gói | `src/pages/tai-ve.astro` — đổi nút sang `…/releases/latest/download/…` |
| ~~2~~ | ~~**Link Facebook page**~~ — **ĐÃ CÓ 22/08/2026** | Mọi trang (menu + chân trang) | Menu hiện "ⓕ Facebook page" bấm được, chân trang hiện viên "ⓕ Facebook" bấm được | xong — `src/lib/kenhKetNoi.ts` (`LINK_FACEBOOK` = https://www.facebook.com/profile.php?id=61593523655589) |
| ~~3~~ | ~~**Link TikTok**~~ — **ĐÃ CÓ 22/08/2026** | Mọi trang | Menu + chân trang hiện "♪ TikTok" bấm được | xong — `src/lib/kenhKetNoi.ts` (`LINK_TIKTOK` = https://www.tiktok.com/@coclipnha; đã bỏ đuôi `?_r=…&_t=…` là tham số theo dõi lúc bấm chia sẻ trong app) |
| ~~4~~ | ~~**Link nhắn tin Messenger**~~ — **ĐÃ CÓ 22/08/2026** | Mọi trang + Góp ý + Báo lỗi + trang chủ | Cả 4 chỗ đều là nút bấm được, mở thẳng hộp thoại Messenger của page | xong — `src/lib/kenhKetNoi.ts` (`LINK_MESSENGER` = https://m.me/61593523655589). Trang Góp ý/Báo lỗi lấy mặc định qua `NutBieuMau.astro`, trang chủ đọc thẳng — KHÔNG ghi cứng link vào trang nào |
| 5 | **3 link biểu mẫu** (góp ý / báo lỗi / yêu cầu phần mềm) | 3 trang trợ giúp | "Biểu mẫu … — sắp mở" | `src/components/NutBieuMau.astro` |
| 6 | **Ảnh mã VietQR** | Ủng hộ | Ô vuông "Mã chuyển khoản sắp có — tụi mình đang chuẩn bị" | `src/pages/ung-ho.astro` + ảnh vào `public/anh/` |
| 7 | **Link mua + ảnh 2 camera** (EMEET ưu tiên, Ugreen) | Tải về, Thiết bị đề xuất | Thẻ camera đã có tên + lý do + dòng "đã chạy thử"; nút hiện "Link mua — sắp có", ảnh hiện ô chờ | **CHỈ MỘT CHỖ**: `src/data/thiet-bi-goi-y.json` (ô `link`, `anh`, `noi_ban`, `model`). Sửa một lần, cả hai trang cùng đổi. Câu công khai hoa hồng tự gắn kèm, không tắt được |
| 8a | **Video demo NGẮN** (quay màn hình app chạy một ca gói) | Trang chủ — trong khung "Quét thử" đầu trang | Nút hiện "📷 Video app chạy thật — sắp có"; cảnh app tĩnh vẫn hiện đầy đủ | `src/lib/video.ts` — điền `VIDEO_DEMO` |
| 8b | **Video hướng dẫn ĐẦY ĐỦ** (mọi tính năng) | Trang chủ (cuối trang), Tải về, **Hướng dẫn** | Mặt tiền giả YouTube dạng chờ | `src/lib/video.ts` — điền `VIDEO_HUONG_DAN`, **một chỗ cho cả ba trang** |
| 8c | **Video TÌM LẠI VIDEO lúc khách khiếu nại** (clip 8 trong bản đồ video, khối GP-02) | Hướng dẫn (mục cuối trang) | Mặt tiền giả YouTube dạng chờ, chữ chờ nói rõ đang chờ video nào | `src/lib/video.ts` — điền `VIDEO_TIM_LAI` |
| ~~8d~~ | ~~**Video hướng dẫn CÀI ĐẶT** (tải xong rồi cài thế nào)~~ — **ĐÃ CÓ 22/08/2026** | Tải về | Khối "Tải xong rồi cài thế nào?" nằm ngay dưới nút tải, mặt tiền giả bấm mới nạp | xong — `src/lib/video.ts` (`VIDEO_CAI_DAT` = `BrhCx9mKIas`, video "Cách cài đặt CoClipNha – Phần mềm quay video chống trao hàng (Miễn phí)"). Đây là loại video THỨ TƯ, không thay cho 8a/8b/8c |
| ~~9~~ | ~~**File in mã QR A6 + A4**~~ — **ĐÃ CÓ 19/08/2026** | Tải mã QR điều khiển | Trang hiện ảnh hai mã + nút tải PDF A6 sống. Bản A4 4-mã-cắt-rời **bỏ hẳn** (chủ dự án chốt: in mấy tờ thì chọn số bản lúc in) | xong — `public/in/coclipnha-ma-qr-a6.pdf`, ảnh ở `public/anh/qr-*.webp`, gốc JPG ở `public/in/` |
| 10 | **Đánh giá khách hàng thật** | Trang chủ | Cố ý CHƯA có khối đánh giá — chỉ có "Người dùng đầu tiên" kể chuyện ZIN ZIN MOTOR, không gắn sao (FR-019) | chỉ thêm khi có đánh giá thật, không bịa |
| 11 | **Tên miền `coclipnha.com`** (DNS) | Toàn site | Chạy tạm ở `steventran1503.github.io/coclipnha-web` | `astro.config.mjs`: đổi `site`, xoá `base`, thêm `public/CNAME` — làm SAU khi web hoàn thiện |
| 12 | **Ngày đăng 7 bài viết còn lại** | Bài viết | "chưa có ngày đăng cụ thể" (không bịa mốc) | `src/lib/baiViet.ts` |
| 13 | **Câu dẫn cho trang Bài viết** | Bài viết | Vào thẳng 8 thẻ, không có đoạn dẫn | viết 1 câu vào `kho-thong-diep.md` mục 7f rồi gắn vào `bai-viet/index.astro` |
| 14 | **Ảnh chia sẻ mạng xã hội** (1200×630) | Toàn site (thẻ OpenGraph) | Dán link lên Facebook ra thẻ có tít + mô tả nhưng KHÔNG có ảnh | ảnh vào `public/anh/chia-se.jpg` rồi điền `ANH_CHIA_SE` trong `BaseLayout.astro` |
| ~~15~~ | ~~**Ảnh giá đỡ camera**~~ — **ĐÃ CÓ 19/08/2026** | Thiết bị đề xuất | Thẻ giá đỡ đã đủ ảnh + tên + lý do + dòng "đã chạy thử" + nút mua sống | xong — `public/anh/gia-do-camera.webp`, gốc JPG chủ dự án cấp ở `QR module/assets/` |
| ~~16~~ | ~~**Link kênh YouTube**~~ — **ĐÃ CÓ 22/08/2026** | Mọi trang (menu + chân trang) | Menu hiện "▶ Kênh YouTube" bấm được, chân trang hiện viên "▶ YouTube" bấm được | xong — `src/lib/kenhKetNoi.ts` (`LINK_YOUTUBE` = https://www.youtube.com/@coclipnha). ⚠️ Kênh CHƯA có video nào — đây chỉ là link kênh, KHÔNG phải 3 mã video ở mục 8a/8b/8c |

| ~~17~~ | ~~**Ảnh chụp màn hình app thật**~~ — **ĐÃ CÓ 24/08/2026** | Trang chủ, Tải về, Hướng dẫn (3 ô video) | Ô video đang chờ nay hiện ảnh app thật, phủ tối 45%, nút play xám không bấm được | xong — `public/anh/phan-mem-goi-hang-ma-qr-coclipnha.webp`, đường dẫn khai ở `src/lib/video.ts` (`ANH_POSTER_APP`). ⛔ Ảnh đã **làm mờ tên/SĐT/địa chỉ khách** trên tem; bản gốc chưa che nằm ở `QR module/Screenshot app/` — đừng đăng bản đó |

## Nhắc khi gắn tài sản vào

- Cấp link **có hoa hồng** thì câu công khai phải nằm ngay cạnh link (FR-008).
  Với camera thì việc này TỰ ĐỘNG rồi — câu nằm trong `TheThietBi.astro`,
  không tắt được từ file dữ liệu. Muốn đổi cách viết câu đó: sửa
  `CAU_MINH_BACH` trong `src/lib/thietBi.ts`, đừng xoá.
- Cấp mã video YouTube thì kiểm lại trang vẫn nhẹ: mặt tiền giả chỉ tải iframe
  khi người xem bấm — đừng đổi thành iframe nhúng thẳng.
- Điền mã cho **VIDEO_HUONG_DAN** thì ô VD-01 tự đổi: nút play xám → đỏ bấm
  được, và câu **"Bấm play để xem phiên gói hàng thật"** (`CHU_DUOI_VD01`) tự
  hiện dưới khung. Không phải sửa gì thêm ở 3 trang.
- Link **kênh** mạng xã hội khai ở **một chỗ duy nhất** là
  `src/lib/kenhKetNoi.ts` (YouTube/Facebook/TikTok/Messenger) — menu ba gạch và
  chân trang cùng đọc từ đó. Đừng ghi cứng link vào từng component.
- Bốn mã video khai ở **một chỗ duy nhất** là `src/lib/video.ts`. Trước 22/08/2026
  mỗi trang tự khai một hằng số riêng và trang Hướng dẫn thì quên hẳn — điền mã
  ở trang chủ xong khung bên đó vẫn nằm im ở chữ "đang chờ" mà không ai biết.
  ⛔ Đừng khai lại hằng số mã video trong từng trang nữa.
- ⛔ Đừng dồn video CÀI ĐẶT vào ô `VIDEO_HUONG_DAN` cho tiện: ô đó hiện ở ba
  trang dưới tít VD-01 "Xem một ca đóng gói thật" — người xem bấm vào sẽ thấy
  nội dung khác hẳn tít.
- Mỗi lần gắn xong: chạy `npm run build`, `npm run kiem:link`, rồi soát lại
  `tests/checklist-tay-web.md` mục 8.
