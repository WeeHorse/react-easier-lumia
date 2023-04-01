import { useFetch } from 'react-easier';

export const mainInitialState = () => ({
  products: useFetch('/products.json', {
    postProcess: x => x.data
  }),
  search: '',
  cart: {
    rows: [],
    total: 0,
    add(product) {
      let entry = this.rows.find(x => x.item.id === product.id)
        || { item: product, quantity: 0 };
      entry.quantity++ || this.rows.push(entry);
      this.total += product.price;
    },
    empty() {
      this.rows = [];
      this.total = 0;
    }
  }
});