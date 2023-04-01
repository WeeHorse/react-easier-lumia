// NOTE: 
// this file doesn't have to be .jsx, since there is
// no jsx content in it, but setting the extension to .jsx
// makes it possible for react-easier to give more precise
// line-numbers in its debug log!

import { useFetch } from 'react-easier';

export const storeInitialState = () => ({
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