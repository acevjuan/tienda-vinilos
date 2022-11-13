import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import './style.css'

const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="nav-bar__brand">
        <img className="nav-bar__brand__logo" src={logo} alt="logo de tienda"></img>
      </div>
      <nav className="nav-bar__menu">
        <ul className="nav-bar__menu__list">
          <li className="nav-bar__menu__list__item">
            <NavLink to='/'>HOME</NavLink>
          </li>
          <li className="nav-bar__menu__list__item">
            <NavLink to='/category/nuevos-lanzamientos'>NUEVOS LANZAMIENTOS</NavLink>
          </li>
          <li className="nav-bar__menu__list__item">
            <NavLink to='/category/mas-vendidos'>MÁS VENDIDOS</NavLink>
          </li>
          <li className="nav-bar__menu__list__item">
            <NavLink to='/category/rock'>ROCK</NavLink>
          </li>
          <li className="nav-bar__menu__list__item">
            <NavLink to='/category/indie'>INDIE</NavLink>
          </li>
          <li className="nav-bar__menu__list__item">
            <NavLink to='/category/hip-hop'>HIP HOP</NavLink>
          </li>
          <li className="nav-bar__menu__list__item">
            <NavLink to='/category/jazz'>JAZZ</NavLink>
          </li>
          <li className="nav-bar__menu__list__item">
            <NavLink to='/category/folk'>FOLK</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar