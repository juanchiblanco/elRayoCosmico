import React from "react";
import { Container, Card, Row, Col, Button, Alert } from "react-bootstrap";
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
          <div className="row justify-content-center">
            <Card className="col-12 shadow">
              <Card.Body>
                <Row>
                  <Col md={6} lg={5}>
                    <div className="d-flex justify-content-center">
                      <img
                        src={NuncaMeFuiAlbum}
                        alt="NuncaMeFui Album Tapa"
                        className="img-fluid"
                      />
                    </div>
                  </Col>

                  {/* Columna de Información */}
                  <Col md={6} lg={7}>
                    <div className="mt-3 mt-md-0 d-flex flex-column align-content-around">
                      {/* Categoría */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="badge">hola</span>
                      </div>

                      {/* Título */}
                      <h2 className="arapey mb-3 fs-1">Nunca Me Fui</h2>
                      <p className="text-muted mb-4">31 min | Febrero 2026 </p>
                      <div>
                        <ul>
                            <li>hola</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </article>
        <hr />
        <article className="container">
          <h5 className="ms-5 fs-3 my-3">Singles</h5>
          <div className="row justify-content-center gap-2">
            <Card className="d-flex flex-column shadow col-12 col-md-5">
              <Card.Img
                src={descoordinadoTapa}
                alt="Descoordinado Arte de tapa"
                className="img-fluid my-3"
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
            <Card className="d-flex flex-column shadow col-12 col-md-5">
              <Card.Img
                src={elCieloTapa}
                alt="El Cielo Arte de tapa"
                className="img-fluid my-3"
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
            <Card className="d-flex flex-column shadow col-12 col-md-5">
              <Card.Img
                src={porLasNochesTapa}
                alt="Por las Noches Arte de tapa"
                className="img-fluid my-3"
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
            <Card className="d-flex flex-column shadow col-12 col-md-5">
              <Card.Img
                src={paraLlevarTapa}
                alt="Para Llevar Arte de tapa"
                className="img-fluid my-3"
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
