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

import useRedirect  from "../../hooks/useRedirect"
import { Link } from 'react-router-dom';

const Registro = () => {
    const dispatch = useDispatch()

    useRedirect("/")

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
                        dispatch(setUsuarioActual({
                            ...user.usuario
                        }))
                    }
                }}
            >
                <FormFormik>
                    <label htmlFor="nombre">Tú nombre completo</label>
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

                    <p>¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión</Link></p>

                    <BotonSubmit>
                        Registrate!
                    </BotonSubmit>
                </FormFormik>
            </Formik>
            <h3>Tú cuenta más dulce 🍓</h3>
        </ContenedorPrincipal>
    )
}

export default Registro