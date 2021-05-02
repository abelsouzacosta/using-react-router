import React from "react";

import './Menu.css';

const Menu = (props) => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li><a href="/">This is my link</a></li>
        </ul>
      </nav>
    </aside>
  )
};

export default Menu;