import {useStates, Outlet} from 'react-easier'
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {    

    return (
        <div id="root">
            <div id="main" className="corners padding transp">
                <h1>Lumia</h1>
                <Navbar/>
                <Outlet/>
            </div>
            <Cart/>
        </div>
    )
}
