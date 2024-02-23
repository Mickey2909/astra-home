// import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/banner_1.jpg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                        <div className="d-flex flex-column justify-content-center">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline ">¡Lanzamiento de la Beta privada!</span>
                                        <h1>ASTRA SMART HOME</h1>
                                        <p>Anímate a ser uno de los primeros en vivir la experiencia de un hogar totalmente inteligente, con un innovador sistema de control de voz global e intuitivo, potenciado con lo último en inteligencia artificial. Qué esperas, únete a esta nueva experiencia!</p>
                                        <button onClick={() => console.log('connect')}>Unirse <ArrowRightCircle size={25}/></button>
                                    </div>}
                            </TrackVisibility>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <div className="image">
                            <img src={headerImg} alt="Header Img"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}