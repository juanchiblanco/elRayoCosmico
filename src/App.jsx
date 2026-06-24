import React from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Canciones from "./components/pages/Canciones";

function App() {
  return (
    <>
      <Menu></Menu>
      <main className="bgMain">
        <Inicio></Inicio>
        <hr />
        <Canciones></Canciones>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
