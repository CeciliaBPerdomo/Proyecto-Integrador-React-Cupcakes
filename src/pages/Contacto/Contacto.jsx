import React, { useState } from 'react'

// Estilos 
import {
  ContenedorContactos,
  ContenedorPrincipal,
  ContenedorFormulario,
  ContenedorImagen
} from "./ContactoStyled"


// Boton 


const Contacto = () => {

  return (
    <ContenedorContactos>
      <h2>🧁 La dulzura empieza aquí, contactanos!</h2>
      <ContenedorPrincipal>
        <ContenedorFormulario>
          {/* Formulario */}
        </ContenedorFormulario>
        <ContenedorImagen>
          <img
          src='/cupcakes/contacto.jpg'
          alt="Contacto"
          />
        </ContenedorImagen>
      </ContenedorPrincipal>
    </ContenedorContactos>
  )
}

export default Contacto