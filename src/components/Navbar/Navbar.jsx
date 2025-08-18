import React from 'react';
import { Link } from 'react-router-dom';
import {
    NavbarContainerStyled,
    LinksContainerStyled,
    LinkContainerStyled,
    LogoContainerStyled
} from './NavbarStyles';

//Imagenes e iconos
import logo from "../../assets/LogoCupcakeLandia.png"
import { GiCupcake, GiShoppingCart } from "react-icons/gi";
import { LuCircleUserRound } from "react-icons/lu";

// Motion 
import { motion } from 'framer-motion';
// Carrito de compras
import CarritoCompras from './Carrito/CarritoCompras';

// Redux
import { toggleCarrito } from '../../redux/carrito/carritoSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()

    return (
        <>
            <NavbarContainerStyled>
                {/* Logo */}
                <LogoContainerStyled>
                    <Link to='/'>
                        <img
                            src={logo}
                            alt='Logo CupcakeLandia'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ height: '95px' }}
                        />
                    </Link>
                </LogoContainerStyled>


                {/* Home */}
                <LinksContainerStyled>
                    <motion.div whileTap={{ scale: 0.97 }}>
                        <Link to='/'>
                            <LinkContainerStyled home>
                                <GiCupcake />
                            </LinkContainerStyled>
                            Home
                        </Link>
                    </motion.div>

                    {/* Shopping cart */}
                    <motion.div
                        whileTap={{ scale: 0.97 }}
                        onClick={() => dispatch(toggleCarrito())}
                    >
                        <Link to='#'>
                            <GiShoppingCart />
                            Tu carrito
                        </Link>
                    </motion.div>

                    {/*  Inicio sesion */}
                    <motion.div whileTap={{ scale: 0.97 }}>
                        <Link to='/'>
                            <LuCircleUserRound />
                            Inicia sesión
                        </Link>
                    </motion.div>
                </LinksContainerStyled>
            </NavbarContainerStyled>

            {/* Carrito de compras */}
            <CarritoCompras />
        </>
    )
}

export default Navbar;