export function cleanText(html) {
  return html.replace(/<[^>]*>|&[^;]+;/gm, "");
}

export const closeModal = () => {
  const modal = document.querySelector(".btn-close");
  modal?.click();
};

export const usdFormater = (currency) => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(currency);
};
