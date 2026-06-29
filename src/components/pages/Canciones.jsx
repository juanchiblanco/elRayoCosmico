import React from "react";
import { Container, Card, Row, Col, Button, Alert } from "react-bootstrap";
import descoordinadoTapa from "../../assets/fotosERC/descoordinadoTapa.jpg";
import elCieloTapa from "../../assets/fotosERC/elCieloTapa.png";
import porLasNochesTapa from "../../assets/fotosERC/porLasNochesTapa.png";
import paraLlevarTapa from "../../assets/fotosERC/paraLlevarTapa.png";
import NuncaMeFuiAlbum from "../../assets/fotosERC/NuncaMeFuiAlbum.png";
import { Link, useNavigate } from "react-router";

const Canciones = () => {
  const navegacion = useNavigate();

  return (
    <>
      <h2 className="display-6 text-center tituloPagina">
        Discografía completa
      </h2>
      <section className="container-fluid mb-4">
        <article className="container">
          <h5 className="ms-5 fs-3 my-3">Albums</h5>
          <div className="row justify-content-center">
            <Card className="col-12 shadow colorNuncaMeFui">
              <Card.Body>
                <Row>
                  <Col md={6} lg={5}>
                    <div className="d-flex justify-content-center">
                      <img
                        src={NuncaMeFuiAlbum}
                        alt="NuncaMeFui Album Tapa"
                        className="img-fluid shadow"
                      />
                    </div>
                  </Col>
                  <Col md={6} lg={7}>
                    <div className="mt-3 mt-md-0 d-flex flex-column align-content-around">
                      <div className="d-block d-lg-flex my-3">
                        {/* Título */}
                        <h2 className="arapey fs-1 text-light">Nunca Me Fui</h2>
                        <p className="text-light-emphasis ms-auto mt-1">
                          31 min | Febrero 2026
                        </p>
                      </div>
                      <div className="text-light mt-3">
                        <div className="d-flex mx-2">
                          <p>1. Apateísta</p>
                          <p className="ms-auto">6:02</p>
                        </div>
                        <hr className="mt-0" />
                        <div className="d-flex mx-2">
                          <p>2. Avsurdo</p>
                          <p className="ms-auto">4:38</p>
                        </div>
                        <hr className="mt-0" />
                        <div className="d-flex mx-2">
                          <p>3. Yo me muero aquí</p>
                          <p className="ms-auto">4:00</p>
                        </div>
                        <hr className="mt-0" />
                        <div className="d-flex mx-2">
                          <p>4. Carnaval de Venecia</p>
                          <p className="ms-auto">6:15</p>
                        </div>
                        <hr className="mt-0" />
                        <div className="d-flex mx-2">
                          <p>5. Bailando Pegados</p>
                          <p className="ms-auto">4:13</p>
                        </div>
                        <hr className="mt-0" />
                        <div className="d-flex mx-2">
                          <p>6. Volveré</p>
                          <p className="ms-auto">5:48</p>
                        </div>
                        <hr className="mt-0" />
                      </div>
                      <a
                        href="https://open.spotify.com/intl-es/album/2lqEIaUsvbBxYVnSrDiQhe?si=zlG3ll6wRTeT-dXuSAMrKg"
                        className="text-center text-light btn btn-success mt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>
                          Escuchar en Spotify
                          <i className="bi bi-spotify ms-1"></i>
                        </strong>
                      </a>
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
            <Card className="d-flex flex-column shadow col-12 col-md-5 colorDescoordinado">
              <Card.Img
                src={descoordinadoTapa}
                alt="Descoordinado Arte de tapa"
                className="img-fluid my-3"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">Descoordinado</Card.Title>
                <Card.Text className="text-muted mb-4">
                  3 min | Febrero 2023
                </Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto fs-4">
                  <strong>
                    <a
                      href="https://open.spotify.com/playlist/452AGcx9akeEoehhiFj6FD?si=3199e8488d5e4970"
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escuchar<i className="bi bi-spotify fs-5 ms-1"></i>
                    </a>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="d-flex flex-column shadow col-12 col-md-5 colorElCielo">
              <Card.Img
                src={elCieloTapa}
                alt="El Cielo Arte de tapa"
                className="img-fluid my-3"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">El Cielo</Card.Title>
                <Card.Text className="text-muted mb-4">
                  4 min | Octubre 2024
                </Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto fs-4">
                  <strong>
                    <a
                      href="https://open.spotify.com/playlist/452AGcx9akeEoehhiFj6FD?si=3199e8488d5e4970"
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escuchar<i className="bi bi-spotify fs-5 ms-1"></i>
                    </a>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="d-flex flex-column shadow col-12 col-md-5 colorPorLasNoches">
              <Card.Img
                src={porLasNochesTapa}
                alt="Por las Noches Arte de tapa"
                className="img-fluid my-3"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">Por las Noches</Card.Title>
                <Card.Text className="text-muted mb-4">
                  5 min | Noviembre 2024
                </Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto fs-4">
                  <strong>
                    <a
                      href="https://open.spotify.com/playlist/452AGcx9akeEoehhiFj6FD?si=3199e8488d5e4970"
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escuchar<i className="bi bi-spotify fs-5 ms-1"></i>
                    </a>
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="d-flex flex-column shadow col-12 col-md-5 colorParaLlevar">
              <Card.Img
                src={paraLlevarTapa}
                alt="Para Llevar Arte de tapa"
                className="img-fluid my-3"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="arapey fs-1">Para Llevar</Card.Title>
                <Card.Text className="text-muted mb-4">
                  4 min | Diciembre 2024
                </Card.Text>
                <Card.Text className="raleway">
                  Descripción de la canción
                </Card.Text>
                <Card.Text className="ms-auto fs-4">
                  <strong>
                    <a
                      href="https://open.spotify.com/playlist/452AGcx9akeEoehhiFj6FD?si=3199e8488d5e4970"
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escuchar<i className="bi bi-spotify fs-5 ms-1"></i>
                    </a>
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
