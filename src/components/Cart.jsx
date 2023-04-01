import { useStates } from "react-easier";
import { svCurrency } from '../utils/svCurrency';

export default function Cart() {

  const { cart } = useStates('main');

  return <aside id="cart" className="corners padding transp">
    <h3>Varukorg</h3>
    <ul>
      {cart.rows.map(({ quantity, item }) => <li>
        {item.name},&nbsp;{quantity}&nbsp;st<span>
          {svCurrency(item.price * quantity)}</span>
      </li>)}
      <li className="total">Totalt <span>{svCurrency(cart.total)}</span></li>
      <li className="total">Totalt (ex. moms)<span>{svCurrency(cart.total * 0.8)}</span></li>
    </ul>
    <div className="buttonHolder">
      {!cart.rows.length ? null : <>
        <button
          onClick={() => cart.empty()}>
          Töm varukorgen
        </button><br />
        <button
          onClick={() => alert(`
            Nej, du har inte råd med det här!
            Det är ju ${Math.floor(cart.total / 25)} falafflar!
            (Malmö/Lund cheapest-index 2023)
          `)}>
          Gå till kassan
        </button>
      </>}
    </div>
  </aside>;
}