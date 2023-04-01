import { NavLink } from 'react-router-dom';
import { menuPaths } from '../main';

export default function Navbar() {
  return <nav className="navbar">
    {menuPaths.map(({ path, label }) =>
      <NavLink to={path}>{label}</NavLink>)}
  </nav>
}