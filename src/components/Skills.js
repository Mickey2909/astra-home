import meter1 from "../assets/img/skills_1.jpg";
import meter2 from "../assets/img/skills_2.jpg";
import meter3 from "../assets/img/skills_3.jpg";
import meter4 from "../assets/img/skills_4.jpg";
import meter5 from "../assets/img/skills_5.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Especificaciones</h2>
                            <p>Este es un innovador sistema de control del hogar potenciado por los últimos modelos de
                                inteligencia artificial. Nuestro avanzado control por voz, intuye la intención del
                                usuario sin la necesidad de comandos preestablecidos. Deja de limitarte con comandos
                                roboticos como "Asistente, enciende televisión." y pasa a algo mas natural como "Astra,
                                quiero ver una película, que me recomiendas?"</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay autoPlaySpeed={2000} swipeable removeArrowOnDeviceType="mobile"
                                      className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Img"/>
                                    <h5>Inteligencia Artificial</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Img"/>
                                    <h5>Control por voz</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Img"/>
                                    <h5>Dispositivos inteligentes</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Img"/>
                                    <h5>Conexión a internet</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Img"/>
                                    <h5>Recordatorios, pendientes y agenda</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Img"/>
        </section>
    )
}