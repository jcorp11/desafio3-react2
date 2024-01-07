import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Choose from "./views/Choose";
import Poke from "./views/Poke";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choosePokemon" element={<Choose />} />
        <Route path="/pokemon/:id" element={<Poke />} />
      </Routes>
    </>
  );
}

export default App;
