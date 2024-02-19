export function stripHtmlTags(html) {
  return html.replace(/<[^>]*>?/gm, "");
}
