import React from "react";
import logoERC from "../../assets/fotosERC/ERClogo.png";

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
    </section>
  );
};

export default Inicio;
