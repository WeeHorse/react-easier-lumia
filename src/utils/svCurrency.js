export function svCurrency(x) {
  return new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(x);
}