import React from "react";

import './Menu.css';

// importando o link do react router
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Param/123">Send a parameter</Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

export default Menu;