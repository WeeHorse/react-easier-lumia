import {useStates, Outlet} from 'react-easier'
import Cart from './components/Cart.jsx'
import Navbar from "./components/Navbar.jsx";

export default function App() {

    const states = useStates('products', [
            {
                name: "Taklampa",
                description: "Mått Ø 25 cm, höjd 20 cm.",
                price: 2500,
                image: "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjEyMzEwMS5qcGcifQ==/34537.jpg?q=85&w=670&h=447&dpr=2"
            },
            {
                name: "Bordslampa",
                description: "Mått Ø 55 cm, höjd 30 cm.",
                price: 6900,
                image: "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjUyMzI0Ni5qcGcifQ==/107942.jpg?q=85&w=670&h=447&dpr=2"
            }
        ]
    );

    return (
        <div id="root">
            <div id="main" className="corners padding transp">
                <h1>Lumia</h1>
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    )
}
