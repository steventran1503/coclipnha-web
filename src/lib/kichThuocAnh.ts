import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Đọc kích thước (rộng × cao) của ảnh trong `public/` LÚC BUILD, để thẻ <img>
 * trong bài viết có sẵn width/height — thiếu hai số này là trang nhảy chữ khi
 * ảnh tải xong (CLS, Lighthouse trừ điểm). Người viết bài chỉ ghi đường dẫn
 * ảnh trong kho thông điệp, không phải tự đo.
 *
 * Chỉ hiểu WebP (định dạng mọi ảnh bài viết đang dùng). Ảnh không đọc được là
 * DỪNG BUILD — thà báo ngay còn hơn đăng một bài có ảnh vỡ.
 */
export function kichThuocAnh(duong: string): { rong: number; cao: number } {
  const tep = join(process.cwd(), "public", duong);
  let b: Buffer;
  try {
    b = readFileSync(tep);
  } catch {
    throw new Error(`Không thấy ảnh "${duong}" trong public/ — kiểm lại đường dẫn trong mục 11 kho-thong-diep.md.`);
  }
  if (b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") {
    throw new Error(`Ảnh "${duong}" không phải WebP — đổi sang .webp rồi build lại.`);
  }
  const loai = b.toString("ascii", 12, 16);
  if (loai === "VP8X") {
    return { rong: 1 + b.readUIntLE(24, 3), cao: 1 + b.readUIntLE(27, 3) };
  }
  if (loai === "VP8L") {
    const v = b.readUInt32LE(21);
    return { rong: 1 + (v & 0x3fff), cao: 1 + ((v >> 14) & 0x3fff) };
  }
  if (loai === "VP8 ") {
    return { rong: b.readUInt16LE(26) & 0x3fff, cao: b.readUInt16LE(28) & 0x3fff };
  }
  throw new Error(`Không đọc được kích thước ảnh "${duong}".`);
}
