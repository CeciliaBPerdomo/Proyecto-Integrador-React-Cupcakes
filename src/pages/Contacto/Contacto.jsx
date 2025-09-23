import React from 'react'

// Estilos 
import {
  ContenedorContactos,
  ContenedorPrincipal,
  ContenedorFormulario,
  ContenedorImagen,
  ContenedorBoton,
} from "./ContactoStyled"

import Loader from "../../components/UI/Loader/Loader"

// Formik
import { Formik } from 'formik';
import { contactoInitialValues } from "../../formik/initialValues"
import { contactoValidationSchema } from "../../formik/validationSchema"
import RegisterLoginInput from '../../components/UI/Input/RegisterLoginInput/RegisterLoginInput';

// Boton 
import BotonSubmit from "../../components/UI/Boton/Submit/BotonSubmit"
import TextArea from '../../components/UI/TextArea/TextArea';

// Envío de email
import emailjs from "@emailjs/browser";
// Sweet Alert 
import Swal from 'sweetalert2'

const Contacto = () => {


  return (
    <ContenedorContactos>
      <h2>🧁 La dulzura empieza aquí, contactanos!</h2>
      <ContenedorPrincipal>
        <Formik
          initialValues={contactoInitialValues}
          validationSchema={contactoValidationSchema}
          onSubmit={async (values, actions) => {
            try {
              const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
              const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
              const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

              await emailjs.send(serviceID, templateID, values, publicKey);

              Swal.fire({
                title: "Mensaje enviado!",
                text: 'Gracias por contactarnos 🚀',
                icon: "success",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                background: "var(--color-primary-light)",
              });

              actions.resetForm();
            } catch (error) {
              console.error("Error de envío: ", error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrió un error al enviar el mensaje 😢',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                position: 'center',
                background: "var(--color-primary-light)",
              });
            } finally {
              actions.setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <ContenedorFormulario>
              <label htmlFor="nombre">Tu nombre</label>
              <RegisterLoginInput
                name="nombre"
                type="text"
                placeholder='Tu nombre'
              />

              <label htmlFor="email">Tu e-mail</label>
              <RegisterLoginInput
                name="email"
                type='email'
                placeholder='Tú correo electrónico'
              />

              <label htmlFor="mensaje">Tu mensaje</label>
              <TextArea
                name="mensaje"
                rows="6"
                placeholder='Tu mensaje o comentario'
              />

              <ContenedorBoton>
                <BotonSubmit disabled={isSubmitting} >
                  {isSubmitting ? <Loader /> : "Enviar mensaje"}
                </BotonSubmit>
              </ContenedorBoton>
            </ContenedorFormulario>
          )}
        </Formik>

        <ContenedorImagen>
          <img
            src='/images/contacto.jpg'
            alt="Contacto"
          />
        </ContenedorImagen>
      </ContenedorPrincipal>
    </ContenedorContactos>
  )
}

export default Contacto