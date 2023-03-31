import { useStates } from 'react-easier';
import { svCurrency } from '../utils/svCurrency';

export default function Products() {

  const { products, cart, search } = useStates('main');

  const add = (product) => {
    cart.items.push(product);
    cart.total = cart.total + product.price;
  };

  const filteredProducts = () => {
    return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())
      || p.description.toLowerCase().includes(search.toLowerCase()))
  };

  return filteredProducts().map((product) =>
    <div className="product">
      <div className="content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button onClick={() => add(product)}>Köp för {svCurrency(product.price)}</button>
      </div>
      <img src={product.image} />
    </div>
  );
}