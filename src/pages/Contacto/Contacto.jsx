import React, { useState } from 'react'

// Estilos 
import {
  ContenedorContactos,
  ContenedorPrincipal,
  ContenedorFormulario,
  ContenedorImagen,
  FormularioBloque
} from "./ContactoStyled"


// Boton 
import Button from "../../components/UI/Boton/Button"

const Contacto = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Gracias, ${formData.nombre}! Tu mensaje fue enviado.\n\n` +
      `Email: ${formData.email}\nMensaje: ${formData.mensaje}`
    );
    setFormData({ nombre: "", email: "", mensaje: "" });
  };


  return (
    <ContenedorContactos>
      <h2>🧁 La dulzura empieza aquí, contactanos!</h2>

      <ContenedorPrincipal>
        <ContenedorFormulario>
          {/* Nombre */}
          <FormularioBloque>
            <label htmlFor="nombre">Tu nombre</label>
            <input
              type="text"
              placeholder='Tu nombre'
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </FormularioBloque>

          {/* Mail */}
          <FormularioBloque>
            <label htmlFor="email">Tu e-mail</label>
            <input
              type="email"
              placeholder='Tu correo electrónico'
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormularioBloque>

          {/* Mensaje */}
          <FormularioBloque>
            <label htmlFor="mensaje">Tu mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              rows="6"
              placeholder='Tu mensaje o comentario'
              value={formData.mensaje}
              onChange={handleChange}
              required
            >
            </textarea>
          </FormularioBloque>

          <FormularioBloque>
            <Button
              onClick={(e) => handleSubmit(e)}
            >
              Enviar mensaje
            </Button>
          </FormularioBloque>
        </ContenedorFormulario>

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