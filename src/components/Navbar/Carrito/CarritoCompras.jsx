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
import { toggleCarrito, vaciarCarrito } from '../../../redux/carrito/carritoSlice';

const CarritoCompras = () => {
    const dispatch = useDispatch()

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
                            {/* Vaciar el carrito */}
                            <Button
                                onClick={() => dispatch(vaciarCarrito())}
                                disabled={!itemsCarrito.length}
                            >
                                Vaciar el carrito
                            </Button>
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
                                        <p> Comprame amigo</p>
                                    )
                                }
                            </CupcakeStyled>

                            <p>Sub-Total: $ {precio}</p>
                            <p>Envío: $ {envio}</p>
                            <hr />
                            <p>Total: $ {precio + envio}</p>
                            <Button
                                disabled={!itemsCarrito.length}
                            >Iniciar pedido
                            </Button>
                        </ContenedorPrincipalStyled>
                    </ContainerStyled>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CarritoCompras