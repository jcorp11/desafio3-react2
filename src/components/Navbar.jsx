import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : null);

  return (
    <nav className="navbar">
      <section className="icon">icon</section>
      <section className="links">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/choosePokemon">
          Elige Poke
        </NavLink>
        <NavLink className={setActiveClass} to="/pokemon">
          Pokemones
        </NavLink>
      </section>
    </nav>
  );
};
export default Navbar;
