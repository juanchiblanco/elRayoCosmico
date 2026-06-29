import React from "react";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Canciones from "./components/pages/Canciones";
import Videos from "./components/pages/Videos";
import { BrowserRouter, Routes, Route } from "react-router";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main className="bgMain">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/discografia"
              element={<Canciones></Canciones>}
            ></Route>
            <Route path="/videos" element={<Videos></Videos>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
