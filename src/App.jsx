import React from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";

function App() {
  return (
    <>
      <Menu></Menu>
      <main className="bgMain">
        <Inicio></Inicio>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
