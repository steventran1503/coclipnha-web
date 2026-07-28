// T046/T047 — Kiểm tương phản chữ/nền, KHÔNG chỉ tin Lighthouse.
//
// Lighthouse chỉ chấm những cặp màu nó thấy trên trang lúc chạy; bẫy teal
// #3DB8B0 làm CHỮ trên nền sáng (chỉ 1,96:1) sẽ lọt lưới nếu hôm đó trang
// chưa dùng nền sáng. Script này chấm THẲNG các cặp màu khai trong
// src/styles/global.css nên bắt được cả cặp đang "ngủ".
//
// Chạy: npm run kiem:tuong-phan
// Ngưỡng: WCAG AA — chữ thường ≥ 4,5:1; chữ to (≥ 24px hoặc ≥ 19px đậm) ≥ 3:1.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const goc = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(goc, "src/styles/global.css"), "utf8");

/** Đọc giá trị biến --x từ khối :root của global.css (một nguồn màu duy nhất). */
function bien(ten) {
  const m = css.match(new RegExp(`--${ten}:\\s*(#[0-9a-fA-F]{3,8})`));
  if (!m) throw new Error(`Không tìm thấy biến màu --${ten} trong global.css`);
  return m[1];
}

function rgb(hex) {
  const h = hex.replace("#", "");
  const n =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255);
}

function doSang(hex) {
  const [r, g, b] = rgb(hex).map((v) =>
    v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function tuongPhan(a, b) {
  const [x, y] = [doSang(a), doSang(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

// Cặp màu THẬT đang dùng trên web (mỗi dòng: mô tả, chữ, nền, ngưỡng).
// Thêm dòng mới mỗi khi thiết kế sinh ra cặp chữ/nền mới — đừng để dành cho
// Lighthouse.
const CAP = [
  ["Chữ thân bài trên nền trang", bien("chu"), bien("nen"), 4.5],
  ["Chữ dịu (đoạn văn) trên nền trang", bien("chu-diu"), bien("nen"), 4.5],
  ["Chữ mờ (chú thích) trên nền trang", bien("chu-mo"), bien("nen"), 4.5],
  ["Chữ dịu trên nền thẻ", bien("chu-diu"), bien("the"), 4.5],
  ["Chữ mờ trên nền thẻ", bien("chu-mo"), bien("the"), 4.5],
  ["Liên kết teal trên nền trang", bien("teal"), bien("nen"), 4.5],
  ["Liên kết teal trên nền thẻ", bien("teal"), bien("the"), 4.5],
  ["Nhãn log teal trên nền khối tối", bien("teal"), bien("log-nen"), 4.5],
  ["Chữ trên nút chính (nền teal)", "#0b1220", bien("teal"), 4.5],
  ["Chữ trên nút cam (Camera đề xuất)", "#1b1206", bien("cam"), 4.5],
  ["Nút cam nổi trên nền trang (ranh giới nút)", bien("cam"), bien("nen"), 3],
  ["Cảnh báo đỏ trên nền trang", bien("do"), bien("nen"), 4.5],
  ["Chữ nhật ký trên nền nhật ký", bien("log-chu"), bien("log-nen"), 4.5],
  // Bẫy đã biết: teal sáng làm CHỮ trên nền sáng. Giữ hai dòng này vĩnh viễn —
  // dòng đầu PHẢI trượt (chứng minh không được dùng), dòng sau là bản thay thế.
  ["[BẪY] teal sáng làm chữ trên nền trắng", bien("teal"), "#ffffff", 4.5],
  ["teal đậm (--teal-chu) làm chữ trên nền trắng", bien("teal-chu"), "#ffffff", 4.5],
];

let truot = 0;
console.log("Kiểm tương phản màu (WCAG AA)\n");
for (const [ten, chu, nen, nguong] of CAP) {
  const ti = tuongPhan(chu, nen);
  const dat = ti >= nguong;
  const bay = ten.startsWith("[BẪY]");
  if (!dat && !bay) truot++;
  const dau = bay ? (dat ? "⚠️ " : "○ ") : dat ? "✓ " : "✗ ";
  console.log(
    `${dau}${ti.toFixed(2)}:1 (cần ${nguong}) — ${ten}  [${chu} trên ${nen}]`,
  );
}

console.log("");
if (truot) {
  console.error(`✗ ${truot} cặp màu KHÔNG đạt AA — sửa màu trước khi phát hành.`);
  process.exit(1);
}
console.log("✓ Mọi cặp màu đang dùng đều đạt AA.");
console.log(
  "Lưu ý: dòng [BẪY] mà hiện ⚠️ nghĩa là teal sáng đã đủ tương phản trên nền\n" +
    "trắng — kiểm lại, gần như chắc chắn là ai đó vừa đổi --teal.",
);
