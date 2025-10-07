import React from 'react'

// Estilos 
import {
  FooterWrapper,
  FooterContenido,
  FooterColumna,
  FooterMapa,
  FooterLink,
  FooterCreditos,
} from "./FooterSyled"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContenido>

        <FooterColumna>
          <h2>🧁 CupcakeLandia</h2>
          <p>📍 <span>Dirección:</span> Av. Dulce 123, Colonia</p>
          <p>📞 <span>Teléfono:</span> +598 99 999 999</p>
          <p>✉️ <span>Email:</span> holis@cupcakeLandia.uy</p>
        </FooterColumna>

        <FooterColumna>
          <h2>🧁 Nuestra web</h2>
          <FooterLink href="/">Inicio</FooterLink>
          <FooterLink href="/#productos">Cupcakes</FooterLink>
          <FooterLink href="/#nosotros">Acerca de Nosotros</FooterLink>
          <FooterLink href="/#contacto">Contacto</FooterLink>
        </FooterColumna>

        <FooterColumna>
          <h2>🧁 CupcakeLandia en Colonia</h2>
          <FooterMapa
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27253.056469008027!2d-57.8754513!3d-34.4712441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3272c4c1a5fd7%3A0x403d48d8a8f76b0!2sColonia%20del%20Sacramento%2C%20Colonia%2C%20Uruguay!5e0!3m2!1ses-419!2suy!4v1690000000000!5m2!1ses-419!2suy"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FooterColumna>
      </FooterContenido>
      <FooterCreditos>
        👩🏻‍💻 Desarrollo web por <a href="https://www.linkedin.com/in/cecilia-perdomo/" target="_blank" rel="noopener noreferrer">
          Cecilia Perdomo
        </a>
      </FooterCreditos>
    </FooterWrapper>
  )
}

export default Footer