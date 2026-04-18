import React from "react";
import logoERC from "../../assets/fotosERC/ERClogo.png";
import imgCarousel1 from "../../assets/fotosERC/imgCarousel1.png";
import imgCarousel2 from "../../assets/fotosERC/imgCarousel2.png";
import imgCarousel3 from "../../assets/fotosERC/imgCarousel3.png";
import imgCarousel1Movil from "../../assets/fotosERC/imgCarousel1Movil.png";
import imgCarousel2Movil from "../../assets/fotosERC/imgCarousel2Movil.png";
import imgCarousel3Movil from "../../assets/fotosERC/imgCarousel3Movil.png";
import { Carousel } from "react-bootstrap";

const Inicio = () => {
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
      <article className="d-flex justify-content-center container-fluid lineaSeparadora mt-4">
        <img
          src={logoERC}
          alt="El Rayo Cosmico"
          className="img-fluid logoERC"
        />
      </article>
    </section>
  );
};

export default Inicio;
