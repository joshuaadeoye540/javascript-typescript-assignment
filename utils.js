// 7. ES Modules

// Named export: add
export const add = (a, b) => a + b;

// Named export: capitalize
export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Named export: APP_VERSION
export const APP_VERSION = "1.0.0";

// Default export: formatCurrency
const formatCurrency = (amount) =>
  amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

export default formatCurrency;