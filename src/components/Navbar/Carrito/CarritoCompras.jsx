import React from 'react'

// Estilos
import {
    CarritoStyled,
    ContainerStyled,
    ContenedorPrincipalStyled,
    CupcakeStyled,
    ContenedorHeaderStyled,
} from "./CarrritoComprasStyled"
import { AnimatePresence } from 'framer-motion';

// Botones e iconos
import Button from '../../UI/Boton/Button';
import { IoMdCloseCircleOutline } from "react-icons/io";

// Card de cupcakes
import CupackeCard from "./CupackeCard"
import { useDispatch, useSelector } from 'react-redux';
import { toggleCarrito } from '../../../redux/carrito/carritoSlice';

const CarritoCompras = () => {
    const invisible = useSelector(state => state.carrito.hidden)
    const dispatch = useDispatch()

    return (
        <div>
            {!invisible && (
                <CarritoStyled
                    onClick={() => dispatch(toggleCarrito())}
                    oculto={invisible}
                >
                </CarritoStyled>
            )}

            <AnimatePresence>
                {!invisible && (
                    <ContainerStyled
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ type: 'spring', damping: 27 }}
                        key='cart-modal'
                    >
                        <ContenedorHeaderStyled>
                            <h1>Tus cupcakes</h1>
                            {/* Boton de cierre */}
                            <Button
                                onClick={() => dispatch(toggleCarrito())}
                            >
                                <IoMdCloseCircleOutline />
                            </Button>
                        </ContenedorHeaderStyled>

                        <ContenedorPrincipalStyled>
                            <CupcakeStyled>
                                <CupackeCard />
                            </CupcakeStyled>
                        </ContenedorPrincipalStyled>
                    </ContainerStyled>
                )}

            </AnimatePresence>
        </div>
    )
}

export default CarritoCompras