import React from 'react'

// Estilos
import {
    CarritoStyled,
    ContainerStyled,
    ContenedorPrincipalStyled,
    CupcakeStyled,
    ContenedorHeaderStyled,
    ContenedorBotonCierre,
    BotonVaciarStyled,
    SinProductos,
} from "./CarrritoComprasStyled"
import { AnimatePresence } from 'framer-motion';

// Botones e iconos
import Button from '../../UI/Boton/Button';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsCartX } from "react-icons/bs";

// Card de cupcakes
import CupackeCard from "./CupackeCard"
import { useDispatch, useSelector } from 'react-redux';
import { toggleCarrito, vaciarCarrito } from '../../../redux/carrito/carritoSlice';
import { useNavigate } from 'react-router-dom';

const CarritoCompras = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const invisible = useSelector(state => state.carrito.hidden)
    const { itemsCarrito, envio } = useSelector((state) => state.carrito)

    const precio = itemsCarrito.reduce((acc, item) => {
        return (acc += (item.precio * item.cantidad))
    }, 0)

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
                        {/* Boton de cierre */}
                        <ContenedorBotonCierre>
                            <Button onClick={() => dispatch(toggleCarrito())} >
                                <IoMdCloseCircleOutline />
                            </Button>
                        </ContenedorBotonCierre>

                        {/* Encabezado: titulo y vaciar carrito */}
                        <ContenedorHeaderStyled>
                            <h2>Tus cupcakes</h2>
                            <BotonVaciarStyled>
                                <Button
                                    onClick={() => dispatch(vaciarCarrito())}
                                    disabled={!itemsCarrito.length}
                                >
                                    <BsCartX />
                                </Button>
                            </BotonVaciarStyled>
                        </ContenedorHeaderStyled>

                        <ContenedorPrincipalStyled>
                            <CupcakeStyled>
                                {/* Productos que hay en el carrito */}
                                {itemsCarrito?.length ? (
                                    itemsCarrito.map((cupcake) => {
                                        return (
                                            <CupackeCard
                                                key={cupcake.id}
                                                {...cupcake}
                                            />
                                        )
                                    })
                                ) :
                                    (
                                        <SinProductos
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            🛒 Tu carrito está vacío… ¡Vamos por esos cupcakes! 🧁
                                        </SinProductos>
                                    )
                                }
                            </CupcakeStyled>

                            <p>Sub-Total: $ {precio}</p>
                            <p>Envío: $ {envio}</p>
                            <hr />
                            <p>Total: $ {precio + envio}</p>
                            <Button
                                onClick={() => {
                                    navigate("/tu-pedido")
                                    dispatch(toggleCarrito())
                                }}
                                disabled={!itemsCarrito.length}
                            >
                                Iniciar pedido
                            </Button>
                        </ContenedorPrincipalStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CarritoCompras