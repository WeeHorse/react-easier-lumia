import {useStates, Outlet} from 'react-easier'
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
            },
            {
                name: "Golvlampa",
                description: "Mått Ø 25 cm, höjd 130 cm.",
                price: 2500,
                image: "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&w=670&h=447&dpr=2"
            },
            {
                name: "Lampett",
                description: "Stor Lampett i tenn av Malin Appelgren. Mått Ø 29.",
                price: 4895,
                image: "https://floralinnea.se/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/stortlampetttenn.jpg"
            },
            {
                name: "Spotlight",
                description: "Jättespotlight. Mått Ø 50 cm, höjd 170 cm.",
                price: 1995,
                image: "https://www.thegreenhead.com/imgs/spotlight-metal-tripod-floor-lamp-2.jpg"
            }
        ]
    )

    const cart = useStates('cart', {
        items: [],
        total: 0
    })

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
