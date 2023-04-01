import { useStates } from 'react-easier';
import Products from "../components/Products";

export default function Shop() {

  const s = useStates('store');

  return <>
    <input placeholder="Sök / Filtrera"  {...s.bind('search')} />
    < Products />
  </>;
}