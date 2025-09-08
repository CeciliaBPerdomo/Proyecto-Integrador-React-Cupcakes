import React from 'react'
import { AnimatePresence } from 'framer-motion';

// Estilos 
import {
    ContainerStyled,
    LinkStyled,
} from "./UsuarioStyled"

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setUsuarioActual, toggleHiddenMenu } from '../../../redux/usuario/usuarioSlice';

const Usuario = () => {

    const { hiddenMenu, usuarioActual } = useSelector(state => state.usuario)
    const dispatch = useDispatch()

    return (
        <AnimatePresence>
            {!hiddenMenu && (
                <ContainerStyled
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ duration: 0.5 }}
                    key='cart-user'
                >
                    <h2>Hola 👋 {usuarioActual.nombre}</h2>
                    <p>¿Qué quieres hacer?</p>
                    <hr />
<LinkStyled>Ver mis órdenes</LinkStyled>
                    <span
                        onClick={() => {
                            dispatch(setUsuarioActual(null))
                            dispatch(toggleHiddenMenu())
                        }}>
                        Cerrar sesión
                    </span>
                </ContainerStyled>
            )}
        </AnimatePresence>
    )
}


export default Usuario