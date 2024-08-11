import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/uyeol" activeClassName="active">
            Üye Ol
          </NavLink>
        </li>
        <li>
          <NavLink to="/uyegirisi" activeClassName="active">
            Üye Girişi
          </NavLink>
        </li>
        <li>
          <NavLink to="/Kunduz" activeClassName="active">
          Kunduz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
