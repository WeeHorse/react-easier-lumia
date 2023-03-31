import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return <nav className="navbar">
    <NavLink to="/">Shop</NavLink>
    <NavLink to="/about">About us</NavLink>
  </nav>
}