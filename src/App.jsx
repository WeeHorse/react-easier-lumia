import {
  useAutoKeys,
  useDebug,
  useFetch,
  useStates
} from "react-easier";
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {

  useAutoKeys();
  useDebug();

  const s = useStates('main', {
    products: useFetch('/products.json', {
      postProcess: x => x.filter(p => p.name !== 'Lampett')
    }),
    search: '',
    cart: {
      items: [],
      total: 0
    }
  });

  return !s.products.length ? null : <>
    <main className="corners padding transp">
      <h1>Lumia</h1>
      <Navbar />
      <Outlet />
    </main>
    <Cart />
  </>;
}