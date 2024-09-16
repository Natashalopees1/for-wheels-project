import carImage from "../../assets/img/car.png";
import { HomeDiv } from "./home-style";

function Home() {

    return (
        <HomeDiv>

            <section className="home">
                <div className="home-content">
                    <h1>O lugar para quem gosta de
                        cuidar do carro</h1>
                    <h3 className="name-enterprise">For Wheels</h3>
                    <p>Otimize sua proteção automotiva com nossa tecnologia, manutenções e revisões tanto para quem tem Seguro
                        Safecar, quanto para
                        quem ainda não tem.</p>
                    <a href="#" className="btn">Explore Cars</a>
                </div>

                <div className="home-img">
                    <div className="rhombus">
                        <img className="car-img" src={carImage}
                            alt=""
                        />
                    </div>
                </div>
                <div className="rhombus2"></div>
            </section>
        </HomeDiv>

    )
}

export default Home