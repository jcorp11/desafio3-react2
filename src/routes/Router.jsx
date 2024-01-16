import { Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Choose from "../views/Choose";
import Poke from "../views/Poke";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/choosePokemon" element={<Choose />} />
      <Route path="/pokemon/:id" element={<Poke />} />
    </Routes>
  );
}

export default Router;
