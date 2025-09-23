import React from 'react'

// Formik
import { ErrorMessage, Field } from 'formik';

// Estilos 
import {
    TextAreaStyled,
    ErrorMessageStyled
} from "./TextAreaStyled"


const TextArea = ({ name, rows, placeholder }) => {
    return (
        <Field name={name}>
            {
                ({ field, form: { errors, touched } }) => (
                    <>
                        <TextAreaStyled
                            placeholder={placeholder}
                            rows={rows}
                            {...field}
                            $isError={errors[field.name] && touched[field.name]}
                        >
                        </TextAreaStyled>
                        <ErrorMessage name={field.name}>
                            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
                        </ErrorMessage>
                    </>
                )}
        </Field>
    )
}

export default TextArea