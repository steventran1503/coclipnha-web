import { defineCollection, z } from "astro:content";
import khoNoiDung from "./content/kho-thong-diep/kho-noi-dung.json";

/**
 * Nguồn: `docs/web/kho-noi-dung.json` (kho app, kho `xuat_kho_noi_dung.py`
 * sinh CHỈ ĐỌC `kho-thong-diep.md`) — đồng bộ tay có review diff sang đây
 * (research.md mục 2b). KHÔNG parse Markdown trực tiếp tại build time.
 */
const khoThongDiep = defineCollection({
  loader: () =>
    khoNoiDung.khoi_noi_dung.map((khoi) => ({
      id: khoi.ma,
      ...khoi,
    })),
  schema: z.object({
    ma: z.string(),
    nhom: z.enum([
      "TIT",
      "SM",
      "ND",
      "SS",
      "GP",
      "HD",
      "TN",
      "BC",
      "PB",
      "TB",
      "VD",
      "TG",
      "DG",
      "KN",
      "BV",
      "KG",
    ]),
    cau_chot: z.string(),
    dien_giai: z.string(),
    // Chữ trên nút, khi khối có nhãn **Nút** riêng trong kho thông điệp
    // (KG-01, KG-02, KN-02) — tách khỏi cau_chot để component không phải chép
    // cứng chữ nút (FR-003).
    nut: z.string().nullable(),
    // Cột dư của bảng nhiều hơn 3 cột (bảng so sánh SS: việc / điện thoại /
    // CoClipNha) — cột 3 trở đi nằm ở đây.
    cot_them: z.array(z.string()),
    canh_cho_video: z.string().nullable(),
    trang_su_dung: z.array(z.string()),
  }),
});

export const collections = { "kho-thong-diep": khoThongDiep };
