import { useStates } from "react-easier";
import { svCurrency } from '../utils/svCurrency';

export default function Cart() {

  const { cart } = useStates('main');

  return <aside id="cart" className="corners padding transp">
    <h3>Varukorg</h3>
    <ul>
      {cart.items.map(item => <li>{item.name}<span>{svCurrency(item.price)}</span></li>)}
      <li className="total">Total <span>{svCurrency(cart.total)}</span></li>
    </ul>
    <div className="buttonHolder">
      <button onClick={() => cart.empty()}>Töm varukorgen</button><br />
      <button>Gå till kassan</button>
    </div>
  </aside>;

}