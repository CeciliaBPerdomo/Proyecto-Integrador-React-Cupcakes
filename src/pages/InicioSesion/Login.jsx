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
                onSubmit={async (values) => {
                    const usuario = await loginUser(
                        values.email,
                        values.password
                    )

                    if (usuario) {
                        dispatch(setUsuarioActual({
                            ...usuario.usuario,
                            token: usuario.token
                        }))
                    }
                }}
            >
                <FormFormik>
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
                    <p>¿Aún no tienes cuenta? <Link to="/registrate">Registrate</Link></p>
                    <BotonSubmit>Iniciar sesión</BotonSubmit>
                </FormFormik>
            </Formik>

            <p>Tú cuenta más dulce 🍓</p>
        </ContenedorPrincipal>
    )
}

export default Login