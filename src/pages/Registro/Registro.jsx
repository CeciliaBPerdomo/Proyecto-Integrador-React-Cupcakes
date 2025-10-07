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

import useRedirect from "../../hooks/useRedirect"
import { Link } from 'react-router-dom';

// Mientras se loguea
import Loader from '../../components/UI/Loader/Loader';
// Sweet Alert 
import Swal from 'sweetalert2'

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
                    try {
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

                        Swal.fire({
                            title: "Registro",
                            text: 'Tu registro ha sido existoso 🚀',
                            icon: "success",
                            timer: 3000,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            background: "var(--color-primary-light)",
                        });
                    } catch (error) {
                        console.error(error)
                    } finally {
                        actions.setSubmitting(false);
                    }
                }}
            >
                {
                    ({ isSubmitting }) => (
                        <FormFormik>
                            <label htmlFor="nombre">Tú nombre completo:</label>
                            <RegisterLoginInput
                                name="nombre"
                                type='text'
                                placeholder='Tú nombre completo'
                            />

                            <label htmlFor="email">Tú correo electrónico:</label>
                            <RegisterLoginInput
                                name="email"
                                type='email'
                                placeholder='Tú correo electrónico'
                            />

                            <label htmlFor="password">Tú contraseña:</label>
                            <RegisterLoginInput
                                name="password"
                                type='password'
                                placeholder='Tú contraseña'
                            />

                            <p>¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión</Link></p>

                            <BotonSubmit>
                                {isSubmitting ? <Loader /> : " Registrate!"}
                            </BotonSubmit>
                        </FormFormik>
                    )}
            </Formik>
            <h3>Tú cuenta más dulce 🍓</h3>
        </ContenedorPrincipal>
    )
}

export default Registro