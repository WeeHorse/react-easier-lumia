import { useStates } from 'react-easier';
import Products from "../components/Products";

export default function Shop() {

  const s = useStates('store', { search: 'tak' });
  const l = useStates({ counter: 0 });

  return <>
    <button onClick={() => l.counter++}>{l.counter}</button>
    <input placeholder="Sök / Filtrera"  {...s.bind('search')} />
    < Products />
  </>;
}