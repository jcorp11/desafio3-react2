import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./views/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/favoritos" element={<Favorites />} /> */}
      </Routes>
    </>
  );
}

export default App;
