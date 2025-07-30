import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainerStyled } from './NavbarStyles';
import logo from "../../assets/LogoCupcakeLandia.png"

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <div>
        <Link to='/'>
          <img
            src={logo}
            alt='Logo CupcakeLandia'
          />
        </Link>
      </div>
        </NavbarContainerStyled>
    )
}

export default Navbar;