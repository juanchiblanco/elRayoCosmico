import logoERC from "../../assets/fotosERC/ERClogo.png";
import imgCarousel1 from "../../assets/fotosERC/imgCarousel1.png";
import imgCarousel2 from "../../assets/fotosERC/imgCarousel2.png";
import imgCarousel3 from "../../assets/fotosERC/imgCarousel3.png";
import imgCarousel1Movil from "../../assets/fotosERC/imgCarousel1Movil.png";
import imgCarousel2Movil from "../../assets/fotosERC/imgCarousel2Movil.png";
import imgCarousel3Movil from "../../assets/fotosERC/imgCarousel3Movil.png";
import ERCLondon from "../../assets/fotosERC/ERC-LONDON.jpg";
import ERCMontania from "../../assets/fotosERC/ERC-MONTANIA.jpg";
import { Carousel } from "react-bootstrap";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Inicio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section>
      <Carousel className="carousel d-none d-md-block">
        <Carousel.Item>
          <img
            className="d-block img-carousel img-fluid"
            src={imgCarousel1}
            alt="nunca me fui album"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carousel img-fluid"
            src={imgCarousel2}
            alt="plataformas"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carousel img-fluid"
            src={imgCarousel3}
            alt="Contacto"
          />
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel d-block d-md-none">
        <Carousel.Item>
          <img
            className="d-block img-carousel img-fluid"
            src={imgCarousel1Movil}
            alt="nunca me fui album"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carousel img-fluid"
            src={imgCarousel2Movil}
            alt="plataformas"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-carousel img-fluid"
            src={imgCarousel3Movil}
            alt="Contacto"
          />
        </Carousel.Item>
      </Carousel>
      <article className="container-fluid pb-5 hero1 text-light">
        <div className="d-flex justify-content-center">
          <img
            src={logoERC}
            alt="El Rayo Cosmico"
            className="img-fluid logoERC mt-5"
          />
        </div>
        <h3 className="lead text-center mt-4">Indie rock argentino</h3>
        <p className="raleway container mt-4">
          El Rayo Cósmico es un proyecto de indie rock / alternative rock en
          español que nación en Tucumán, Argentina. Con un sonido melancólico,
          introspectivo y emocional, pero con una energía que empuja hacia
          adelante, El Rayo abre un abanico de energías en sus canciones.
          Guitarras envolventes, bases sólidas y melodías ambientales que pueden
          llevarte de la cama a la calle. De dormir a despertar. De morir a
          renacer.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 my-5 divImgInicio">
          <div>
            <img
              src={ERCLondon}
              alt="El Rayo Cosmico en Londres"
              className="imgInicio rounded shadow"
              data-aos="fade-right"
            />
          </div>
          <div>
            <img
              src={ERCMontania}
              alt="El Rayo Cosmico en la montaña"
              className="imgInicio rounded shadow"
              data-aos="fade-left"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Inicio;
