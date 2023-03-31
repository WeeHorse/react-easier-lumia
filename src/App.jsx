import {useStates, Outlet, useAutoKeys} from 'react-easier' // OBS! import Outlet from react-easier!!
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
export default function App() {  
    useAutoKeys()
    
    // Our store / states
    useStates('products', [
        {
            name: "Taklampa",
            description: "Fluffig! Är det en snöboll eller en maräng? Mått Ø 25 cm, höjd 20 cm.",
            price: 2500,
            image: "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjEyMzEwMS5qcGcifQ==/34537.jpg?q=85&w=670&h=447&dpr=2"
        },
        {
            name: "Bordslampa",
            description: "Lyser uppåt, nedåt, bakåt, framåt och sidåt. Mått Ø 55 cm, höjd 30 cm.",
            price: 6900,
            image: "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjUyMzI0Ni5qcGcifQ==/107942.jpg?q=85&w=670&h=447&dpr=2"
        },
        {
            name: "Golvlampa",
            description: "För dig som har högt till tak. Mått Ø 25 cm, höjd 230 cm.",
            price: 2500,
            image: "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&w=670&h=447&dpr=2"
        },
        {
            name: "Lampett",
            description: "Fransar av Blondie. Mått Ø 29.",
            price: 4895,
            image: "https://02.cdn37.se/lWg/images/2.150514/regal-duo-vagglampett-massing-e27.jpeg"
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

    // Application DOM
    return <>
            <main className="corners padding transp">
                <h1>Lumia</h1>
                <Navbar/>
                <Outlet/> {/* sub routes from root */}
            </main>
            <Cart/>
        </>
}
