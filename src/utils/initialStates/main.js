import { useFetch } from 'react-easier';

export const mainInitialState = () => ({
  products: useFetch('/products.json', {
    postProcess: x => x.filter(p => p.name !== 'Lampett')
  }),
  search: '',
  cart: {
    items: [],
    total: 0,
    add(product) {
      this.items.push(product);
      this.total = this.total + product.price;
    },
    empty() {
      this.items = [];
      this.total = 0;
    }
  }
});