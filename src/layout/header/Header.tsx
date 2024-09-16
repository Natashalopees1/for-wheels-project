import { useState } from "react";
import { HeaderNav } from "./header-style";
import { BrowserRouter, Link } from "react-router-dom";
import menuImage from "../../assets/img/menu.svg";
import whiteImage from "../../assets/img/white.png";

function Header() {
  // Estado para controlar se o menu está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Função que alterna o estado do menu
  function toggleMenu() {
    setMenuAberto((prevState) => !prevState);
  }

  return (
    <HeaderNav>
      <BrowserRouter>
        <header>
          <Link to="/home" className="logo">
            For Wheels
          </Link>

          {/* Ícone de menu para dispositivos móveis */}
          <div className="mobile-menu-icon">
            <button onClick={toggleMenu}>
              <img
                className="icon"
                src={menuAberto ? menuImage : whiteImage} // Alteração de ícone com base no estado
                alt="menu icon"
              />
            </button>
          </div>

          {/* Menu principal */}
          <div className={`mobile-menu ${menuAberto ? "open" : ""}`}>

            <nav className="navbar">
              <Link to="/home" className="nav-item">
                Home
              </Link>
              {/* <Link to="/home" className="nav-item">
                Serviços
              </Link> */}
              <Link to="/sobre" className="nav-item">
                Sobre
              </Link>
              <Link to="/participantes" className="nav-item">
                Participantes
              </Link>
              <Link to="/contato" className="nav-item">
                Contato
              </Link>
              {/* <Link to="/login" className="nav-item">
                Login
              </Link> */}
            </nav>
          </div>

          {/* Ícones de mídia social */}
          <div className="social-media">
            <a href="#">
              <i className="bx bxl-instagram-alt" />
            </a>
            <a href="#">
              <i className="bx bxl-whatsapp" />
            </a>
            <a href="#">
              <i className="bx bxl-twitter" />
            </a>
          </div>
        </header>
      </BrowserRouter>
    </HeaderNav>
  );
}

export default Header;
