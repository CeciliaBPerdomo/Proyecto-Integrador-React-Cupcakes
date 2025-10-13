import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Estilos 
import {
  FooterWrapper,
  FooterContenido,
  FooterColumna,
  FooterMapa,
  FooterLink,
  FooterCreditos,
  ModoAzulButton,
} from "./FooterSyled"

// Iconos de redes sociales
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { CiFacebook, CiYoutube } from "react-icons/ci";

// Tema
import { toggleTheme } from "../../redux/feature/theme/themeSlice"

const Footer = () => {
  const dispatch = useDispatch();
  const isBlueMode = useSelector((state) => state.theme.isBlueMode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  // const [isBlueMode, setIsBlueMode] = useState(false);

  // const toggleTheme = () => {
  //   if (isBlueMode) {
  //     document.body.removeAttribute("data-theme");
  //     localStorage.setItem("theme", "light");
  //     setIsBlueMode(false);
  //   } else {
  //     document.body.setAttribute("data-theme", "blue");
  //     localStorage.setItem("theme", "blue");
  //     setIsBlueMode(true);
  //   }
  // };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "blue") {
  //     document.body.setAttribute("data-theme", "blue");
  //     setIsBlueMode(true);
  //   }
  // }, []);

  function mensaje() {
    console.log("Gracias por visitar la web de CupcakeLandia 🧁");
    console.log("Esta realizada con mucha harina, ingredientes mágicos y mucho amor ❤️")
    console.log("🧁 Espero que disfrutes tu visita")
    console.log("Esta web está realizada por ❤️ Cecilia Perdomo ❤️")
    console.error("Profe, este modo azul también cuenta, ¿no? 😎, apruebemeeee");
  }

  useEffect(() => {
    mensaje()
  }, [])

  return (
    <FooterWrapper>
      <FooterContenido>

        <FooterColumna>
          <h2>🧁 CupcakeLandia</h2>
          <p>📍 <span>Dirección:</span> Av. Dulce 123, Colonia</p>
          <p>📞 <span>Teléfono:</span> +598 99 999 999</p>
          <p>✉️ <span>Email:</span> holis@cupcakeLandia.uy</p>
          <p> <a href="https://wa.me/59899387921/?text=Hola,%20te%20escribo%20desde%20la%20web%20de%20cupCakelandia."><FaWhatsapp size={24} /></a> <a href="https://www.instagram.com/"><FaInstagram size={24} /></a> <a href="https://www.facebook.com/"><CiFacebook size={24} /></a> <a href="https://www.youtube.com/"><CiYoutube size={24} /></a></p>
        </FooterColumna>

        <FooterColumna>
          <h2>🧁 Nuestra web</h2>
          <FooterLink href="/">Inicio</FooterLink>
          <FooterLink href="/#productos">Cupcakes</FooterLink>
          <FooterLink href="/#nosotros">Acerca de Nosotros</FooterLink>
          <FooterLink href="/#contacto">Contacto</FooterLink>
          <ModoAzulButton onClick={handleToggleTheme} $isBlueMode={isBlueMode} >
            {isBlueMode ? "Pink Mode 🌸" : "Blue Mode 🌙"}
          </ModoAzulButton>
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