import React from "react";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Inicio";

function App() {
  return (
    <>
      <Menu></Menu>
      <main className="bgMain">
        <Inicio></Inicio>
      </main>
    </>
  );
}

export default App;
