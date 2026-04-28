import React from "react";
import logoERC from "../../assets/fotosERC/ERClogo.png";

const Footer = () => {
  return (
    <footer className="text-center text-light bg-dark py-3">
      <img src={logoERC} alt="El Rayo Cosmico" className="img-fluid logoERCfooter my-2" />
      <p>Todos los derechos reservados &copy;</p>
    </footer>
  );
};

export default Footer;
