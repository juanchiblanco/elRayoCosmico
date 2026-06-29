import React from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Canciones from "./components/pages/Canciones";
import Videos from "./components/pages/Videos";

function App() {
  return (
    <>
      <Menu></Menu>
      <main className="bgMain">
        <Inicio></Inicio>
        <Canciones></Canciones>
        <Videos></Videos>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
