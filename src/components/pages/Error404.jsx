import React from 'react';
import { useNavigate } from 'react-router';

const Error404 = () => {

    const navegacion = useNavigate()

    return (
        <section className="container-fluid hero2 py-5">
              <div className="d-flex flex-column align-items-center container sectionError colorError">
                <h2 className="display-6 text-center text-light tituloPagina">
                  Página no encontrada
                </h2>
                <div className='btn btn-primary' onClick={() => navegacion('/')}> Volver al inicio</div>
              </div>
            </section>
    );
};

export default Error404;