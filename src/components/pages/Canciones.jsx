import React from "react";
import Card from "react-bootstrap/Card";
import descoordinadoTapa from "../../assets/fotosERC/descoordinadoTapa.jpg";
import elCieloTapa from "../../assets/fotosERC/elCieloTapa.png";
import porLasNochesTapa from "../../assets/fotosERC/porLasNochesTapa.png";
import paraLlevarTapa from "../../assets/fotosERC/paraLlevarTapa.png";
import NuncaMeFuiAlbum from "../../assets/fotosERC/NuncaMeFuiAlbum.png";

const Canciones = () => {
  return (
    <>
      <h2 className="display-6 text-center mt-4">Discografía completa</h2>
      <section className="container-fluid mb-4">
        <article className="container">
          <h5 className="ms-5 fs-3 my-3">Albums</h5>
          <div className="d-flex justify-content-center gap-2">
            <Card className="card-canciones d-flex flex-column shadow">
              <Card.Img
                src={NuncaMeFuiAlbum}
                alt="Nunca Me Fui Arte de tapa"
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">Nunca me fui</Card.Title>
                <Card.Text className="text-truncate"></Card.Text>
                <Card.Text className="raleway">
                  Descripción del album
                </Card.Text>
                <Card.Text className="ms-auto">
                  <strong>
                    Escuchar<i className="bi bi-arrow-right"></i>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </article>
        <hr />
        <article className="container">
          <h5 className="ms-5 fs-3 my-3">Singles</h5>
          <div className="d-flex justify-content-center gap-2">
            <Card className="card-canciones d-flex flex-column shadow">
              <Card.Img
                src={descoordinadoTapa}
                alt="Descoordinado Arte de tapa"
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">Descoordinado</Card.Title>
                <Card.Text className="text-truncate"></Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto">
                  <strong>
                    Escuchar<i className="bi bi-arrow-right"></i>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-canciones d-flex flex-column shadow">
              <Card.Img
                src={elCieloTapa}
                alt="El Cielo Arte de tapa"
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">El Cielo</Card.Title>
                <Card.Text className="text-truncate"></Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto">
                  <strong>
                    Escuchar<i className="bi bi-arrow-right"></i>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-canciones d-flex flex-column shadow">
              <Card.Img
                src={porLasNochesTapa}
                alt="Por las Noches Arte de tapa"
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">Por las Noches</Card.Title>
                <Card.Text className="text-truncate"></Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto">
                  <strong>
                    Escuchar<i className="bi bi-arrow-right"></i>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-canciones d-flex flex-column shadow">
              <Card.Img
                src={paraLlevarTapa}
                alt="Para Llevar Arte de tapa"
                className="img-fluid"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">Para Llevar</Card.Title>
                <Card.Text className="text-truncate"></Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto">
                  <strong>
                    Escuchar<i className="bi bi-arrow-right"></i>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </article>
      </section>
    </>
  );
};

export default Canciones;
