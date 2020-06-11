import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <Menu inverted>
      <Link to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
      <Link to="/about">
        <Menu.Item>
          About
        </Menu.Item>
      </Link>
      <Link to="/etc">
        <Menu.Item>
          Etc
        </Menu.Item>
      </Link>
    </Menu>
  );
}

export default NavBar;