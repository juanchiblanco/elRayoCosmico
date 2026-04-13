import React from "react";
import logoERC from "../../assets/fotosERC/ERClogo.png";
import descoordinadoTapa from "../../assets/fotosERC/descoordinadoTapa.jpg";
import NuncaMeFuiAlbum from "../../assets/fotosERC/NuncaMeFuiAlbum.png";
import { Carousel } from "react-bootstrap";

const Inicio = () => {
  return (
    <section>
      <article className="d-flex justify-content-center container-fluid lineaSeparadora">
        <img
          src={logoERC}
          alt="El Rayo Cosmico"
          className="img-fluid logoERC mb-0"
        />
      </article>
      <Carousel>
        <Carousel.Item>
            <img
              className="img-fluid"
              src={descoordinadoTapa}
              alt="Descoordinado"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
              className="img-fluid"
              src={NuncaMeFuiAlbum}
              alt="Descoordinado"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
              className="img-fluid"
              src={descoordinadoTapa}
              alt="Descoordinado"
            />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Inicio;
