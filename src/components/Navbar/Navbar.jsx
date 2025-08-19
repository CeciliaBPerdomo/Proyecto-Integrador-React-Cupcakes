import React from 'react';
import { Link } from 'react-router-dom';
import {
    NavbarContainerStyled,
    LinksContainerStyled,
    LinkContainerStyled,
    LogoContainerStyled,
    CartBadge,
    CarritoWrapper,
    MenuIconos,
    TooltipWrapper,
    Tooltip
} from './NavbarStyles';

//Imagenes e iconos
import logo from "../../assets/LogoCupcakeLandia.png"
import { GiCupcake, GiShoppingCart } from "react-icons/gi";
import { LuCircleUserRound } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { GiCook } from "react-icons/gi";

// Carrito de compras
import CarritoCompras from './Carrito/CarritoCompras';

// Redux
import { toggleCarrito } from '../../redux/carrito/carritoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()
    const cantidad = useSelector((state) => state.carrito.itemsCarrito).reduce((acc, item) => (acc += item.cantidad), 0)

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

                <MenuIconos>
                    {/* Home */}
                    <LinksContainerStyled
                        whileTap={{ scale: 0.97 }}>
                        <TooltipWrapper>
                            <Link to='/'>
                                <GiCupcake size={30} />
                            </Link>
                            <Tooltip>Productos</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>

                    {/* Nosotros */}
                    <LinksContainerStyled
                        whileTap={{ scale: 0.97 }}
                    >
                        <TooltipWrapper>
                            <Link to='/'>
                                <GiCook size={30} />
                            </Link>
                            <Tooltip>Nosotros</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>

                    {/* Contacto */}
                    <LinksContainerStyled whileTap={{ scale: 0.97 }}>
                        <TooltipWrapper>
                            <Link to='/'>
                                <LuSend size={30} />
                            </Link>
                            <Tooltip>Contacto</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>

                    {/* Shopping cart */}
                    <LinksContainerStyled
                        whileTap={{ scale: 0.97 }}
                        onClick={() => dispatch(toggleCarrito())}
                    >
                        <TooltipWrapper>
                            <CarritoWrapper to='#'>
                                <GiShoppingCart size={30} />
                                {cantidad > 0 && <CartBadge>{cantidad}</CartBadge>}
                            </CarritoWrapper >
                            <Tooltip>Tu carrito</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>

                    {/*  Inicio sesion */}
                    <LinksContainerStyled whileTap={{ scale: 0.97 }}>
                        <TooltipWrapper>
                            <Link to='/'>
                                <LuCircleUserRound size={30} />
                            </Link>
                            <Tooltip>Iniciar sesión</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>
                </MenuIconos>
            </NavbarContainerStyled>

            {/* Carrito de compras */}
            <CarritoCompras />
        </>
    )
}

export default Navbar;