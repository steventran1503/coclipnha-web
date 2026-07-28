# Checklist kiểm tay — web coclipnha.com

Máy tự chạy được phần lớn (xem `.github/workflows/kiem-tra.yml`). File này chỉ
gồm những thứ **máy không kiểm hộ được**: mắt người nhìn, điện thoại thật cầm
tay, và những con số phải đúng sự thật.

> KHÔNG gộp vào `tests/CHECKLIST_GIAO_DIEN_TAY.md` của app — đó là vùng khác
> (Hiến pháp Nguyên tắc IV). File này chỉ nói chuyện web.

**Chạy khi nào**: trước mỗi lần đẩy web lên bản chính, và sau mỗi lần sửa
giao diện hoặc kho nội dung.

## 0. Chuẩn bị (2 lệnh)

```bash
npm run build
```

```bash
npm run kiem:phuc-vu
```

Mở `http://localhost:4331/coclipnha-web/`. Cổng 4331 chứ không phải 4321 —
tránh đụng dev server đang chạy sẵn (đã bị nhầm một lần ngày 28/07: quét trúng
bản dev, ra 176 "link chết" giả).

## 1. Tắt JavaScript — web vẫn đọc được (FR-010)

- [ ] DevTools → Ctrl+Shift+P → "Disable JavaScript" → tải lại từng trang
- [ ] Mọi đoạn chữ vẫn hiện (không có khối nào trắng vì chờ hiệu ứng cuộn)
- [ ] Khung mô phỏng app đứng ở một cảnh **có nghĩa**, không phải khung rỗng
- [ ] Menu 3 gạch vẫn mở/đóng được (nó chạy bằng checkbox, không cần JS)
- [ ] Nút "Bấm quét thử" không JS thì không chạy — chấp nhận, miễn cảnh tĩnh
      vẫn kể được chuyện

## 2. Điện thoại thật (FR-011, FR-012) — không dùng chế độ giả lập

- [ ] Mở web trên một điện thoại Android tầm trung qua mạng LAN
- [ ] Cuộn hết trang chủ: không giật, không tự cuộn thay, không khóa cuộn
- [ ] Không trang nào trôi ngang (thử cả trang chủ, Tải về, Bài viết)
- [ ] Bấm "Quét thử": nút ẩn → cảnh chạy → nút hiện lại; xem đủ 5 bước
- [ ] Chữ đọc được ngoài sáng, không phải phóng to

## 3. Số liệu — thà không có còn hơn có số bịa (BC-02)

- [ ] Dung lượng video chỉ dùng **một mốc**: ~10 MB / video 5 phút, ~30 GB /
      tháng cho 100 đơn mỗi ngày. Số nào khác mốc này là sai, phải sửa.
- [ ] Số trong khung mô phỏng app (dung lượng file, ổ đĩa còn trống, số video
      đã dọn) phải cùng hệ với mốc trên — đừng để một video 5 phút thành 80 MB
- [ ] Không có con số nào chưa được chủ dự án xác nhận (số shop đang dùng, số
      vụ khiếu nại thắng, ngày phát hành...)

## 4. Link hoa hồng — minh bạch 100% (FR-008, SC-006)

- [ ] Mọi link mua camera đều có câu nói rõ "có hoa hồng, giá shop trả không
      đổi" **ngay cạnh link**, không giấu ở chân trang
- [ ] Trang Ủng hộ và trang Tải về đều giữ đúng câu đó
- [ ] Không có link tiếp thị nào lẻn vào chỗ khác mà thiếu ghi chú

## 5. Tương phản màu — không chỉ tin Lighthouse

```bash
npm run kiem:tuong-phan
```

- [ ] Script chạy xanh (mọi cặp màu đang dùng đạt AA)
- [ ] Dòng `[BẪY] teal sáng làm chữ trên nền trắng` vẫn **trượt** — nghĩa là
      chưa ai lỡ dùng `#3DB8B0` làm chữ trên nền sáng. Muốn chữ teal trên nền
      sáng thì dùng `--teal-chu` (`#1F7A72`).
- [ ] Nếu thiết kế mới sinh ra cặp chữ/nền chưa có trong danh sách: **thêm dòng
      vào `tests/kiem-tuong-phan.mjs`**, đừng để dành cho Lighthouse
- [ ] Đừng làm mờ khối bằng `opacity` — nó hạ cả chữ lẫn nền, tương phản tụt
      mà nhìn mắt thường không thấy (thẻ "Sắp đăng" đã dính bẫy này 28/07)

## 6. Ngoại lệ tương phản đã biết — ĐỪNG "sửa cho đẹp"

Lighthouse trừ điểm Accessibility ở ba chỗ, và cả ba đều **cố ý giữ nguyên**:

- Băng trạng thái xanh / đỏ trong khung mô phỏng app: màu lấy từ
  `nguon-su-that.json` — đúng màu app thật. Đổi màu ở web = vẽ sai app.
- Hai hình dựng lại cảnh báo SmartScreen: phải giống hệt hộp thoại Windows,
  kể cả nút xám mờ của Windows.
- Điểm Accessibility các trang này vì vậy dừng ở 95–96, không phải 100 — vẫn
  trên ngưỡng 90. Nếu ai đó "sửa" cho lên 100 thì kiểm lại ngay: gần như chắc
  chắn họ vừa bịa màu app.

## 7. Nội dung sửa được không cần lập trình viên (FR-003, SC-003)

- [ ] Câu chữ mới đều nằm trong `docs/web/kho-thong-diep.md` (kho app), chạy
      lại `xuat_kho_noi_dung.py` rồi chép sang web — xem `README-noi-dung.md`
- [ ] Không có đoạn văn nào viết thẳng trong file `.astro` (nhãn điều hướng,
      tít mục và câu "đang chờ / sắp có" thì được, đó là cấu trúc trang)
- [ ] Không có ghi chú nội bộ nào lọt ra trang công khai (đã dính một lần: khối
      `BV` là ghi chú cho người viết nội dung, từng bị in ra trang Bài viết)

## 8. Tài sản còn thiếu

- [ ] Mở `tests/tai-san-cho-cap.md`, đối chiếu: thứ nào đã có thì gắn vào và
      xoá khỏi danh sách; thứ nào chưa có thì trang phải hiện câu chờ tử tế,
      không để nút chết hoặc ô trống (FR-021)
