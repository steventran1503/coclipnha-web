# Sửa nội dung web CoClipNha — 3 bước, không cần biết code

Mọi câu chữ trên web đều lấy từ **một file duy nhất**:

```
D:\Claude code\QR module\docs\web\kho-thong-diep.md
```

Sửa câu ở đó → web đổi theo. Không phải mở file nào trong kho web.

---

## Ba bước

### Bước 1 — Sửa câu trong kho thông điệp

Mở `kho-thong-diep.md` bằng Notepad (hoặc phần mềm soạn thảo bất kỳ), tìm mã
khối cần sửa rồi sửa chữ. Mỗi khối trông như thế này:

```markdown
### PB-03 · Máy yếu

- **Câu chốt**: Máy yếu có chạy nổi không?
- **Diễn giải**: Chạy được. Có năm mức nén để hạ tải, máy yếu chọn mức nhẹ là quay mượt.
```

Chỉ sửa phần chữ **sau dấu hai chấm**. Đừng đổi dòng `### PB-03 · …` (đó là
mã khối, web tìm nội dung theo mã đó) và đừng xóa dấu `- **Câu chốt**:`.

Muốn biết câu đang sửa hiện ở trang nào? Xem bảng **mục 9 "Bản đồ khối →
trang web"** ở cuối file — mỗi trang liệt kê đủ mã khối nó dùng.

### Bước 2 — Chạy một lệnh

Mở PowerShell ở thư mục `D:\Claude code\QR module` rồi gõ:

```bash
python docs/web/xuat_kho_noi_dung.py
```

Lệnh này **chỉ đọc** `kho-thong-diep.md` (không sửa gì của nó) và ghi ra
`docs/web/kho-noi-dung.json`. Giống hệt thao tác đã quen với
`xuat_nguon_su_that.py`.

Chạy xong nó in ra số khối, ví dụ _"Đã ghi … — 69 khối nội dung."_ Nếu nó báo
**CẢNH BÁO — mục 9 nhắc mã không tách được thành khối**, nghĩa là có mã viết
sai chính tả ở đâu đó — xem lại bước 1.

### Bước 3 — Chép sang kho web rồi commit

Chép file vừa sinh:

```bash
cp "D:/Claude code/QR module/docs/web/kho-noi-dung.json" "D:/Claude code/coclipnha-web/src/content/kho-thong-diep/kho-noi-dung.json"
```

Rồi trong thư mục `D:\Claude code\coclipnha-web`, xem lại đúng chỗ mình vừa
đổi (`git diff`), thấy đúng thì:

```bash
git add -A; git commit -m "Sua noi dung web"; git push
```

Đẩy lên GitHub xong, **GitHub Actions tự dựng lại web** trong vài phút. Không
phải làm gì thêm.

---

## Hai luật phải nhớ

1. **ĐỪNG sửa tay `kho-noi-dung.json`.** File đó do máy sinh ra, lần chạy sau
   sẽ đè mất. Muốn đổi chữ thì sửa `kho-thong-diep.md`.
2. **Xóa một khối đang được trang dùng là web dựng hỏng ngay.** Đó là cố ý:
   thà báo lỗi lúc dựng còn hơn để trang trống trơn lên mạng. Muốn bỏ một
   khối khỏi trang thì nhắn cho người làm web, đừng xóa khối.

---

## Thứ KHÔNG nằm trong kho thông điệp

Ba loại chữ này thuộc về mã, sửa phải nhờ người biết code — cố tình để vậy:

| Loại                        | Ví dụ                                      |
| --------------------------- | ------------------------------------------ |
| Nhãn điều hướng, tít mục    | "← Về trang chủ", "Bước 1", "Cách 1 —"     |
| Câu báo khi tài sản chưa có | "đang chờ link", "sắp có", "đang chuẩn bị" |
| Chữ tiếng Anh của Windows   | "Windows protected your PC", "Run anyway"  |

Chữ tiếng Anh trong hai hình cảnh báo Windows phải giữ **nguyên văn** như máy
shop hiện ra, nên không đưa vào kho nội dung để tránh bị sửa nhầm.

---

## Chữ mô phỏng app thì sao?

Chữ trên **băng trạng thái**, tên file video, dòng nhật ký, watermark… không
nằm ở kho thông điệp mà đọc thẳng từ **mã nguồn app**, qua file
`docs/web/nguon-su-that.json` (script `xuat_nguon_su_that.py` sinh ra).

Lý do: mấy chữ đó phải khớp app **từng chữ một**. Sửa app xong thì chạy:

```bash
python docs/web/xuat_nguon_su_that.py
```

rồi chép `nguon-su-that.json` sang `coclipnha-web/src/data/`, y hệt bước 3.
