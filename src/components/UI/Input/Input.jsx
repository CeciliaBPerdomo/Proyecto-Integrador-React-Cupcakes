import React from 'react';

// Estilos 
import { 
  ErrorMessageStyled, 
  InputBoxStyled, 
  InputLabelStyled, 
  InputStyled 
} from './InputStyled';

// Formik
import { ErrorMessage, Field } from 'formik';

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
  return (

    <Field name={name}>
      {
        ({ field, form: { errors, touched } }) => (

          <InputBoxStyled>
            {/* Label */}
            <InputLabelStyled
              htmlFor={htmlFor}
            >
              {children}
            </InputLabelStyled>

            {/* Input */}
            <InputStyled
              type={type}
              id={id}
              placeholder={placeholder} 
              {...field }
              isError = {errors[field.name] && touched[field.name]}
              />

              <ErrorMessage name={field.name}>
                {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
              </ErrorMessage>
          </InputBoxStyled>

        )
      }
    </Field>


  );
};

export default Input;
