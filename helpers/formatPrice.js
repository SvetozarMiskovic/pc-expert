export const formatPrice = string => {
  const value = Number(parseFloat(string)?.toFixed(2)).toLocaleString("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return value;
};
