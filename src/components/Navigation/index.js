import React from "react";
import { capitolizeFirstLetter } from "../../utils/helpers";
import { Navbar, NavLink } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" bg="dark">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Michael Giddings</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;