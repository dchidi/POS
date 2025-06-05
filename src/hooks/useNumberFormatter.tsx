export const useNumberFormatter = () => {
  const formatCurrency = (num: number, decimal_place: number = 2) =>
    Number(num).toLocaleString("en-US", {
      minimumFractionDigits: decimal_place,
      maximumFractionDigits: decimal_place,
    });
  return { formatCurrency };
};
