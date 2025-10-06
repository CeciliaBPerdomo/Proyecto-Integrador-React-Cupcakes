import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    NavbarContainerStyled,
    LinksContainerStyled,
    LogoContainerStyled,
    CartBadge,
    CarritoWrapper,
    MenuIconos,
    TooltipWrapper,
    Tooltip,
    HamburgerButton
} from './NavbarStyles';

//Imagenes e iconos
import logo from "../../assets/LogoCupcakeLandia.png"
import { GiCupcake, GiShoppingCart } from "react-icons/gi";
import { LuCircleUserRound } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { GiCook } from "react-icons/gi";
import { FiAlignJustify } from "react-icons/fi";

// Carrito de compras
import CarritoCompras from './Carrito/CarritoCompras';

// Redux
import { toggleCarrito } from '../../redux/carrito/carritoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenMenu } from '../../redux/usuario/usuarioSlice';
import Usuario from './Usuario/Usuario';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Carrito
    const cantidad = useSelector((state) => state.carrito.itemsCarrito).reduce((acc, item) => (acc += item.cantidad), 0)
    // Login
    const { usuarioActual } = useSelector(state => state.usuario)
    // Menu responsivo
    const [menuOpen, setMenuOpen] = useState(false)


  const handleLinkClick = () => {
        setMenuOpen(false);
    };

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
                        />
                    </Link>
                </LogoContainerStyled>


                {/* Botón hamburguesa (solo mobile) */}
                <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
                    <FiAlignJustify size={30}/>
                </HamburgerButton>

                <MenuIconos className={menuOpen ? "show" : "hide"}>
                    {/* Home */}
                    <LinksContainerStyled
                        whileTap={{ scale: 0.97 }}>
                        <TooltipWrapper>
                            <Link to='/' onClick={handleLinkClick}>
                                <GiCupcake size={30} /> 
                                <span className="link-text">Productos</span>
                            </Link>
                            <Tooltip>Productos</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>

                    {/* Nosotros */}
                    <LinksContainerStyled
                        whileTap={{ scale: 0.97 }}
                    >
                        <TooltipWrapper>
                            <Link to='/' onClick={handleLinkClick}>
                                <GiCook size={30} />
                                <span className="link-text">Nosotros</span>
                            </Link>
                            <Tooltip>Nosotros</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>

                    {/* Contacto */}
                    <LinksContainerStyled whileTap={{ scale: 0.97 }}>
                        <TooltipWrapper>
                            <Link to='/' onClick={handleLinkClick}>
                                <LuSend size={30} />
                                <span className="link-text">Contacto</span>
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
                            <CarritoWrapper to='#' onClick={handleLinkClick}>
                                <GiShoppingCart size={30} />
                                {cantidad > 0 && <CartBadge>{cantidad}</CartBadge>}
                            <span className="link-text">Tu carrito</span>
                            </CarritoWrapper >
                            <Tooltip>Tu carrito</Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>

                    {/*  Inicio sesion */}
                    <LinksContainerStyled
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                            usuarioActual ?
                                dispatch(toggleHiddenMenu()) :
                                navigate("/registrate")
                               handleLinkClick()
                        }}
                    >
                        <TooltipWrapper>
                            <Link>
                                <LuCircleUserRound size={30} />
                                <span className="link-text">{usuarioActual ?  usuarioActual.nombre : "Iniciar sesión"}</span>
                            </Link>
                            <Tooltip> {usuarioActual ? usuarioActual.nombre : "Iniciar sesión"} </Tooltip>
                        </TooltipWrapper>
                    </LinksContainerStyled>
                </MenuIconos>
            </NavbarContainerStyled>

            {/* Carrito de compras */}
            <CarritoCompras />

            {/* Información del usuario */}
            <Usuario />
        </>
    )
}

export default Navbar;