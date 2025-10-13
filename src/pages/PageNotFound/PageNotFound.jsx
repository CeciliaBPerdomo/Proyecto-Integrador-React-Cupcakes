import React from 'react'
import { useNavigate } from "react-router-dom";

// Estilos
import {
  ContenedorPrincipal,
  ContenedorInfo,
  ContenedorImagen,
  ContenedorBoton,
} from "./PageNotFoundStyled"

// Boton
import Button from "../../components/UI/Boton/Button"

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <ContenedorPrincipal>

      <ContenedorInfo>
        <h1>Página no encontrada 😢</h1>
        <h2>Ups...!!</h2>
        <h2>El cupcake que buscabas no existe o ya se lo comieron.</h2>

        <ContenedorBoton>
          <Button onClick={() => navigate("/")}>
            🧁 Volver al inicio
          </Button>
        </ContenedorBoton>
      </ContenedorInfo>

      <ContenedorImagen>
        <img src="/images/404.jpg" />
      </ContenedorImagen>
    </ContenedorPrincipal>
  )
}

export default PageNotFound