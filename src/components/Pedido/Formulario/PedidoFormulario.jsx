import React from 'react'

// Estilos 
import {
  FormularioContainerStyled,
  Formik,
  Form,
} from "./PedidoFormularioStyled"


// UI
import Input from '../../UI/Input/Input'
import BotonSubmit from '../../UI/Boton/Submit/BotonSubmit'
import Loader from "../../UI/Loader/Loader"


// Formik
import { pedidoInitialValues } from '../../../formik/initialValues'
import { pedidoValidationSchema } from '../../../formik/validationSchema'

// Envio pedido a api ext
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { crearOrdenes } from '../../../axios/axios-orden'
import { vaciarCarrito } from "../../../redux/carrito/carritoSlice"


const PedidoFormulario = ({ itemsCarrito, envio, precio }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { usuarioActual } = useSelector(state => state.usuario)

  return (
    <FormularioContainerStyled>
      <h2>Completá con tus datos</h2>

      <Formik
        initialValues={pedidoInitialValues}
        validationSchema={pedidoValidationSchema}
        onSubmit={async (values) => {

          // Para que no se rompa en la api 💜
          const itemsActualizados = itemsCarrito.map(item => ({
            id: item.id,
            desc: item.descripcion,
            img: item.imagen,
            price: item.precio,
            quantity: item.cantidad,
            title: item.title
          }));

          const ordenData = {
            items: itemsActualizados,
            price: precio,
            shippingCost: envio,
            total: precio + envio,
            shippingDetails: { ...values }
          }

          try {
            await crearOrdenes(ordenData, dispatch, usuarioActual)
            alert("Felicitaciones por tu compra")
            dispatch(vaciarCarrito(itemsCarrito))
            navigate("/tus-ordenes")
          } catch (error) {
            alert("Error al crear la orden", error)
          }
        }}
        
      >

        {
          ({ isSubmitting }) => (
            <Form>
              <Input
                name="name"
                htmlFor='nombre'
                type='text'
                id='nombre'
                placeholder='Tu nombre'
              >
                Nombre completo:
              </Input>


              <Input
                name="cellphone"
                htmlFor='celular'
                type='text'
                id='celular'
                placeholder='Tu celular'
              >
                Celular:
              </Input>

              <Input
                name="location"
                htmlFor='Ciudad'
                type='text'
                id='ciudad'
                placeholder='Tu ciudad'
              >
                Ciudad:
              </Input>

              <Input
                name="address"
                htmlFor='direccion'
                type='text'
                id='dirección'
                placeholder='Tu dirección'
              >
                Dirección:
              </Input>

              <div>
                <BotonSubmit
                  disabled={!itemsCarrito.length || isSubmitting}
                >
                  {isSubmitting ? <Loader /> : "Iniciar Pedido"}
                </BotonSubmit>
              </div>
            </Form>
          )}
      </Formik>
    </FormularioContainerStyled>
  )
}

export default PedidoFormulario