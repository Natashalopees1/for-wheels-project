import { SobreDiv } from "./sobre-style";
import sobre from "../../assets/img/car1.png";

function Sobre() {

    return (
        <SobreDiv>

            <div className="container">
                <section className="about">
                    <div className="about-image">
                        <img src={sobre} alt="" />
                    </div>
                    <div className="about-content">
                        <h2>For Wheels</h2>
                        <p>Nosso aplicativo é uma solução inovadora que combina recursos de diagnóstico e interação com um ChatBot para ajudar os usuários a entender problemas de forma rápida e eficiente. Com uma interface intuitiva e funcionalidades avançadas, este aplicativo é a ferramenta perfeita para quem busca soluções personalizadas e um atendimento de excelência</p>
                        <a href="" className="read-more">Read More</a>
                    </div>
                </section>
            </div>

        </SobreDiv>

    )

}

export default Sobre;