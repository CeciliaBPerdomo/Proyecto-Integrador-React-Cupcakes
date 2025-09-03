import React from 'react'

// Formik
import { ErrorMessage, Field } from 'formik';

// Estilos
import {
    InputContainerStyled,
    InputStyled,
    ErrorMessageStyled,
} from "./RegisterLoginInputStyle"

const RegisterLoginInput = ({ type, placeholder, name }) => {
    return (
        <Field name={name}>
            {({ field, form: { errors, touched } }) => (
                <InputContainerStyled>
                    <InputStyled
                        type={type}
                        placeholder={placeholder}
                        {...field}
                        isError={errors[field.name] && touched[field.name]}
                    />
                    <ErrorMessage name={field.name}>
                        {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
                    </ErrorMessage>
                </InputContainerStyled>
            )}
        </Field>
    )
}

export default RegisterLoginInput