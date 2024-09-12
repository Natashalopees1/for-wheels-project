import { useState } from "react";
import { MenuForWheels } from "../styled";

export default function Menu(){
    const MeuComponente = () => {
        const [menuAberto, setMenuAberto] = useState(false);
      
        const menuShow = () => {
          setMenuAberto(!menuAberto);
        };
        
    return(
      <>
      <MenuForWheels><header className="header">
        <a href="#" className="logo">For Wheels</a>
        <nav className="navbar">
            <a href="/page/indexhome.html" className="nav-item active">Home</a>
            <a href="#" className="nav-item">Serviços</a>
            <a href="/page/indexsobre.html"  className="nav-item">Sobre</a>
            <a href="/page/indexparticipantes.html" className="nav-item">Participantes</a>
            <a href="/page/indexcontato.html" className="nav-item">Contato</a>
            <a href="/page/indexlogin.html" className="nav-item">Login</a>
        </nav>
        <div className="mobile-menu-icon">
            <button onClick={menuShow}>
                <img className="icon" src= {menuAberto? "src/assets/img/menu.svg": "src/assets/img/white.png"} alt=""/>
            </button>
        </div>
        <div className={`mobile-menu ${menuAberto ? 'open' : ''}`}>
            <nav className="nav">
                <a href="/page/indexhome.html"className="nav-item active">Home</a>
                <a href="#" className="nav-item">Serviços</a>
                <a href="/page/indexsobre.html"  className="nav-item">Sobre</a>
                <a href="/page/indexparticipantes.html" className="nav-item">Participantes</a>
                <a href="/page/indexcontato.html" className="nav-item">Contato</a>
                <a href="/page/indexlogin.html" className="nav-item">Login</a>
            </nav>
        </div>
        <div className="social-media">
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
            <a href="#"><i className='bx bxl-whatsapp'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
        </div>
    </header></MenuForWheels>
      </>
    )
  }
}
  