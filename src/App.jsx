import {
  useAutoKeys,
  useDebug,
  useStates
} from "react-easier";
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { storeInitialState } from "./initialStates/store";

export default function App() {

  useAutoKeys();
  useDebug();

  const s = useStates('store', storeInitialState());

  return <>
    <main className="corners padding transp" >
      <h1>Lumia</h1>
      <Navbar />
      <Outlet />
    </main >
    <Cart />
  </>;
}