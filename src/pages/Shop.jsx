import { useStates } from 'react-easier';
import Products from "../components/Products.jsx";

export default function Shop() {

  const s = useStates('main');

  return <>
    <input placeholder="Sök / Filtrera"  {...s.bind('search')} />
    < Products />
  </>;
}