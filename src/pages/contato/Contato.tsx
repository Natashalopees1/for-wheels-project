import { ContatoDiv } from "./contato-style";
import logoImage from "../../assets/img/logo-image.png";



function Contato() {

    return (
        <ContatoDiv>
            <div className="container">
                <div className="item">
                    <div className="contato">
                        <div className="first-text">Vamos entrar em contato</div>
                        <img className="logo-image" src={logoImage} />
                        <div className="social-links">
                            <span className="secnd-text">Conecte conosco:</span>
                            <ul className="social-media1">
                                <li><a href="#"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#"><i className='bx bxl-whatsapp'></i></a></li>
                                <li><a href="#"><i className='bx bxl-youtube'></i></a></li>
                                <li><a href="#"><i className='bx bxl-instagram-alt'></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="enviar-para">
                        <h4 className="third-text">Fale conosco</h4>
                        <form action="">
                            <div className="input-box">
                                <input type="text" className="input" required />
                                <label >Name</label>
                            </div>
                            <div className="input-box">
                                <input type="email" className="input" required />
                                <label >Email</label>
                            </div>
                            <div className="input-box">
                                <input type="tel" className="input" required />
                                <label >Telefone</label>
                            </div>
                            <div className="input-box">
                                <textarea name="" className="input" id="mensagem"></textarea>
                                <label >Mensagem</label>
                            </div>
                            <input type="enviar" className="btn" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
        </ContatoDiv>

    )




}
export default Contato;