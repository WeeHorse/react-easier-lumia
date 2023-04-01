import {
  useAutoKeys,
  useDebug,
  useStates
} from "react-easier";
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import { mainInitialState } from "./initialStates/main.js";

export default function App() {

  useAutoKeys();
  useDebug();

  const s = useStates('main', mainInitialState());

  return !s.products.length ? null : <>
    <main className="corners padding transp">
      <h1>Lumia</h1>
      <Navbar />
      <Outlet />
    </main>
    <Cart />
  </>;
}