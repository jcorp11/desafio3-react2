import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : null);

  return (
    <nav className="navbar">
      <section className="icon">
        <NavLink to="/">
          <img src="./src/assets/img/pokeicon.svg" alt="" />
        </NavLink>
      </section>
      <section className="links">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/choosePokemon">
          Elige Poke
        </NavLink>
      </section>
    </nav>
  );
};
export default Navbar;
