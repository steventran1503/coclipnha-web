/**
 * `import.meta.env.BASE_URL` tự đổi theo `base` trong astro.config.mjs —
 * dùng hàm này thay vì viết "/" cứng, để link vẫn đúng khi domain
 * coclipnha.com trỏ xong và base bị xoá. KHÔNG giả định BASE_URL có sẵn dấu
 * "/" cuối (đã kiểm thật: với base "/coclipnha-web" thì KHÔNG có) — tự thêm
 * để tránh dính chữ kiểu "/coclipnha-webtai-ve/".
 */
export function duongDan(slug: string = ""): string {
  const goc = import.meta.env.BASE_URL;
  const gocCoGach = goc.endsWith("/") ? goc : `${goc}/`;
  return `${gocCoGach}${slug}`;
}
