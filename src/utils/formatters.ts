export function formatPrice(price: number) {
  const formatedPrice = price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatedPrice;
}
