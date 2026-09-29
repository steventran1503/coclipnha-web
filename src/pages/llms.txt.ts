// /llms.txt — bản tóm tắt web dành cho trợ lý AI (ChatGPT, Claude, Gemini,
// Perplexity…) theo đề xuất llmstxt.org: một file chữ thuần nói CoClipNha là
// gì, trang nào chứa gì, kèm câu hỏi thường gặp. Trợ lý đọc file này hiểu
// nhanh và trích đúng hơn là tự đoán từ HTML.
//
// Sinh lúc build TỪ CHÍNH kho nội dung (FR-003) — không viết tay lần hai: sửa
// kho-thong-diep.md là file này đổi theo. Chỉ nhãn trang (tên mục điều hướng)
// là nằm trong mã, đúng luật mục 7f.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { layKhoi } from "../lib/khoiNoiDung";
import { DE_TAI_BAI_VIET } from "../lib/baiViet";

const chuThuan = (s: string) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");

export const GET: APIRoute = async ({ site }) => {
  const url = (duong: string) => new URL(duong, site).href;
  const titD = await layKhoi("TIT-D");
  const sm02 = await layKhoi("SM-02");
  const gp05 = await layKhoi("GP-05");
  const kg01 = await layKhoi("KG-01");
  const tb01 = await layKhoi("TB-01");
  const tg = async (ma: string) => (await layKhoi(ma)).data.dien_giai;
  const pb = (await getCollection("kho-thong-diep"))
    .filter((k) => k.data.nhom === "PB")
    .sort((a, b) => a.data.ma.localeCompare(b.data.ma));

  const tatCaBai = await getCollection("bai-viet");
  const baiViet = await Promise.all(
    DE_TAI_BAI_VIET.filter((t) => t.daXong).map(async (t) => {
      const b = tatCaBai.find((x) => x.id === t.slug);
      if (b) return `- [${b.data.tit}](${url(`/bai-viet/${t.slug}/`)}): ${b.data.tom_tat}`;
      const c = await layKhoi(t.maChinh);
      return `- [${c.data.cau_chot}](${url(`/bai-viet/${t.slug}/`)})`;
    }),
  );

  const chu = `# CoClipNha

> Phần mềm miễn phí cho máy tính Windows, quay video lúc shop đóng gói hàng: đưa mã vận đơn qua trước webcam là máy tự quay, video tự đặt tên theo mã vận đơn, mã và giờ in thẳng lên hình để làm bằng chứng khi khách khiếu nại thiếu hàng, sai hàng hay tráo hàng hoàn.

${chuThuan(titD.data.cau_chot)} ${chuThuan(titD.data.dien_giai)}

Điểm chính:
- Giá: miễn phí, không giới hạn ngày dùng, không khoá tính năng, không cần tài khoản. ${chuThuan(sm02.data.dien_giai)}
- Chạy trên: ${chuThuan(kg01.data.dien_giai)}
- Camera: ${chuThuan(tb01.data.cau_chot)} ${chuThuan(tb01.data.dien_giai)}
- Dữ liệu: ${chuThuan(gp05.data.dien_giai)}
- Ngôn ngữ: tiếng Việt, dành cho shop bán hàng online ở Việt Nam.

## Trang chính
- [Trang chủ](${url("/")}): giới thiệu CoClipNha và xem app chạy mô phỏng.
- [Tải về](${url("/tai-ve/")}): tải bộ cài cho Windows 10/11, yêu cầu camera.
- [Hướng dẫn sử dụng](${url("/tro-giup/huong-dan/")}): ${chuThuan(await tg("TG-01"))}
- [Câu hỏi thường gặp](${url("/tro-giup/cau-hoi/")}): ${chuThuan(await tg("TG-02"))}
- [Tải mã QR điều khiển](${url("/tro-giup/tai-qr/")}): ${chuThuan(await tg("TG-03"))}
- [Thiết bị đề xuất](${url("/thiet-bi/")}): camera đã dùng thật trên bàn đóng gói.
- [Về CoClipNha](${url("/gioi-thieu/")}): đội ngũ làm ra phần mềm và đối tác thử nghiệm.
- [Ủng hộ](${url("/ung-ho/")}): cách ủng hộ và tiền ủng hộ đi về đâu.

## Bài viết
${baiViet.join("\n")}

## Câu hỏi thường gặp
${pb.map((k) => `- ${chuThuan(k.data.cau_chot)} ${chuThuan(k.data.dien_giai)}`).join("\n")}
`;

  return new Response(chu, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
