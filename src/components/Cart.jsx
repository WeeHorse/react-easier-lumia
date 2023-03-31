import { useStates } from "react-easier";
import { svCurrency } from '../utils/svCurrency';

export default function Cart() {

  const { cart } = useStates('main');

  const emptyCart = () => {
    cart.items = [];
    cart.total = 0;
  };

  return <aside id="cart" className="corners padding transp">
    <h3>Varukorg</h3>
    <ul>
      {cart.items.map(item => <li>{item.name}<span>{svCurrency(item.price)}</span></li>)}
      <li className="total">Total <span>{svCurrency(cart.total)}</span></li>
    </ul>
    <div className="buttonHolder">
      <button onClick={emptyCart}>Töm varukorgen</button><br />
      <button>Gå till kassan</button>
    </div>
  </aside>;

}