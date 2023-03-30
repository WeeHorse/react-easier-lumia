import {useStates} from "react-easier";

export default function Cart(){

    const cart = useStates('cart');


    return <div id="cart" className="corners padding transp">
        <h3>Varukorg</h3>
        <ul>
        <li className="total">Total <span>{cart.total}</span></li>
        </ul>
        <button onClick={() => cart.total = 0}>Töm varukorgen</button>
        <button>Gå till kassan</button>
    </div>

}
