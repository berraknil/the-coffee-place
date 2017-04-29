import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => (
  <nav>
    <ul className="navigation">
      <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/menu">Menu</NavLink></li>
      <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
      <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
)

export default Navigation
