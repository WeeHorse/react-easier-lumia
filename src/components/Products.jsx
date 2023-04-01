import { useStates } from 'react-easier';
import { svCurrency } from '../utils/svCurrency';

export default function Products() {

  const { products, cart, search } = useStates('main');

  return products
    .filter(p => new RegExp(search, 'i').test(p.name + p.description))
    .map((product) =>
      <div className="product">
        <div className="content">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={() => cart.add(product)}>
            Köp för {svCurrency(product.price)}
          </button>
        </div>
        <img src={product.image} />
      </div>
    );
}