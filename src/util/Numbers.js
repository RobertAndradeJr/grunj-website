export const parseMoney = (num) =>
  num.toLocaleString("en-US", { style: "currency", currency: "USD" });
