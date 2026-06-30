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
      <article className="container-fluid my-5">
        <div className="d-flex justify-content-center">
          <img
            src={logoERC}
            alt="El Rayo Cosmico"
            className="img-fluid logoERC"
          />
        </div>
        <h3 className="lead text-center mt-4">Indie rock argentino</h3>
        <div className="d-flex justify-content-center my-3">
          <div className="d-flex justify-content-center w-25 gap-5">
            <a href="https://open.spotify.com/intl-es/artist/1ajIKeiJJBPatCI8eAGnJh?si=C6prtDf2StaSeehr_XS06Q" className="nav-link">
              <i className="bi bi-spotify fs-5"></i>
            </a>
            <a href="https://www.youtube.com/@elrayocosmico" className="nav-link">
              <i className="bi bi-youtube fs-5"></i>
            </a>
          </div>
        </div>
        <p className="raleway container mt-4">
          El Rayo Cósmico es un proyecto de indie rock / alternative rock en
          español que nación en Tucumán, Argentina. Con un sonido melancólico,
          introspectivo y emocional, pero con una energía que empuja hacia
          adelante, El Rayo abre un abanico de energías en sus canciones.
          Guitarras envolventes, bases sólidas y melodías ambientales que pueden
          llevarte de la cama a la calle. De dormir a despertar. De morir a
          renacer.
        </p>
      </article>
      <article className="d-flex justify-content-center container mb-4">
        <div className="d-flex justify-content-center gap-2">
          <div className="col-12 col-md-6">
            <img
              src={ERCLondon}
              alt="El Rayo Cosmico en Londres"
              className="img-fluid"
              data-aos="fade-right"
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src={ERCMontania}
              alt="El Rayo Cosmico en la montaña"
              className="img-fluid"
              data-aos="fade-left"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Inicio;
