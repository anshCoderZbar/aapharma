export function cleanText(html) {
  return html.replace(/<[^>]*>|&[^;]+;/gm, "");
}
