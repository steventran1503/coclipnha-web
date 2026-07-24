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
    canh_cho_video: z.string().nullable(),
    trang_su_dung: z.array(z.string()),
  }),
});

export const collections = { "kho-thong-diep": khoThongDiep };
