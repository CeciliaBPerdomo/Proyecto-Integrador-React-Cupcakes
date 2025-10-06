import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

// Estilos 
import {
    ContenedorPrincipal,
    FormFormik,
} from "./LoginStyled"

// Botones e inputs
import BotonSubmit from '../../components/UI/Boton/Submit/BotonSubmit'
import RegisterLoginInput from '../../components/UI/Input/RegisterLoginInput/RegisterLoginInput';

// Formik
import { Formik } from 'formik';
import { loginInitialValues } from "../../formik/initialValues"
import { loginValidationSchema } from "../../formik/validationSchema"

// Inicio de sesión
import { loginUser } from '../../axios/axios-usuario';
import { setUsuarioActual } from '../../redux/usuario/usuarioSlice';

import useRedirect from '../../hooks/useRedirect';

// Mientras se loguea
import Loader from '../../components/UI/Loader/Loader';
// Sweet Alert 
import Swal from 'sweetalert2'

const Login = () => {

    const dispatch = useDispatch()
    useRedirect("/")

    return (
        <ContenedorPrincipal>
            <h1>Inicia sesión con tu cuenta</h1>
            <p>Por favor, ingresá tus datos para poder iniciar sesión en nuestra web.</p>

            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={async (values, actions) => {
                    try {
                        const usuario = await loginUser(values.email, values.password)
                        if (usuario) {
                            dispatch(setUsuarioActual({
                                ...usuario.usuario,
                                token: usuario.token
                            }))

                            Swal.fire({
                                title: "Login",
                                text: 'Inicio de sesión existoso 🚀',
                                icon: "success",
                                timer: 3000,
                                timerProgressBar: true,
                                showConfirmButton: false,
                                background: "var(--color-primary-light)",
                            });
                        }
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
                            <label htmlFor="email">Tu email:</label>
                            <RegisterLoginInput
                                name="email"
                                type='email'
                                placeholder='Tú correo electrónico'
                            />

                            <label htmlFor="password">Tu contraseña:</label>
                            <RegisterLoginInput
                                name="password"
                                type='password'
                                placeholder='Tú contraseña'
                            />
                            <p>¿Aún no tienes cuenta? <Link to="/registrate">Registrate</Link></p>
                            <BotonSubmit>
                                {isSubmitting ? <Loader /> : "Iniciar sesión"}
                            </BotonSubmit>
                        </FormFormik>
                    )}
            </Formik>

            <h3>Tú cuenta más dulce 🍓</h3>
        </ContenedorPrincipal>
    )
}

export default Login