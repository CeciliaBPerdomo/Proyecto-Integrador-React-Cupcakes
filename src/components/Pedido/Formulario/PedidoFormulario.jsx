import React from 'react'

// Estilos 
import {
  FormularioContainerStyled,
  Formik,
  Form,
} from "./PedidoFormularioStyled"



import Input from '../../UI/Boton/Input/Input'
import Button from '../../UI/Boton/Button'

// Formik
import { pedidoInitialValues } from '../../../formik/initialValues'
import { pedidoValidationSchema } from '../../../formik/validationSchema'


const PedidoFormulario = ({ itemsCarrito, envio, precio }) => {
  return (
    <FormularioContainerStyled>
      <h2>Completá con tus datos</h2>

      <Formik
        initialValues={pedidoInitialValues}
        validationSchema={pedidoValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
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
            name="email"
            htmlFor='email'
            type='email'
            id='email'
            placeholder='Tu correo electrónico'
          >
            Correo electrónico:
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
            <button
              type="submit"
            >
              Iniciar Pedido
            </button>
          </div>
        </Form>
      </Formik>
    </FormularioContainerStyled>
  )
}

export default PedidoFormulario