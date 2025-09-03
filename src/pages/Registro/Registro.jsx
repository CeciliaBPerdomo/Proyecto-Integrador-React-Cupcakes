import React from 'react'
// Formik
import { Formik } from 'formik';
import { registroInitialValues } from "../../formik/initialValues"
import { registroValidationSchema } from "../../formik/validationSchema"

// Estilos
import {
    ContenedorPrincipal,
    FormFormik,
} from "./RegistroStyled"

// Botonecos e inputs
import RegisterLoginInput from '../../components/UI/Input/RegisterLoginInput/RegisterLoginInput';
import BotonSubmit from "../../components/UI/Boton/Submit/BotonSubmit"

// Registro
import { createUser } from '../../axios/axios-usuario';
import { useDispatch } from 'react-redux';
import { setUsuarioActual } from "../../redux/usuario/usuarioSlice"

const Registro = () => {
    const dispatch = useDispatch()
    return (
        <ContenedorPrincipal>
            <h1>🧁 Sé parte del cupcake club</h1>
            <p>Por favor, ingresá tus datos para poder registrarte en nuestra web</p>
            
            <Formik
                initialValues={registroInitialValues}
                validationSchema={registroValidationSchema}
                onSubmit={async (values, actions) => {

                    const user = await createUser(
                        values.nombre,
                        values.email,
                        values.password
                    )

                    actions.resetForm()

                    // se envia al store-persist
                    if (user) {
                        console.log(user)
                        dispatch(setUsuarioActual({
                            ...user.usuario
                        }))
                    }
                }}
            >
                <FormFormik>
                    <RegisterLoginInput
                        name="nombre"
                        type='text'
                        placeholder='Tú nombre completo'
                    />

                    <RegisterLoginInput
                        name="email"
                        type='email'
                        placeholder='Tú correo electrónico'
                    />

                    <RegisterLoginInput
                        name="password"
                        type='password'
                        placeholder='Tú contraseña'
                    />

                    <p>¿Ya tienes cuenta? Inicia sesión</p>

                    <BotonSubmit>
                        Registrate!
                    </BotonSubmit>
                </FormFormik>
            </Formik>
            <p>Tú cuenta más dulce 🍓</p>
        </ContenedorPrincipal>
    )
}

export default Registro