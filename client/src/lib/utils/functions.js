export function cleanText(html) {
  return html.replace(/<[^>]*>|&[^;]+;/gm, "");
}

export const closeModal = () => {
  const modal = document.querySelector(".btn-close");
  modal?.click();
};
