import { NavLink } from "react-router-dom";

type IsActiveType = { isActive: boolean };

const isActive = ({ isActive }: IsActiveType) =>
  isActive ? "nav-link active disabled" : "nav-link";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Todo App</span>
          <div className="navbar-nav ms-auto">
            <NavLink to="/" className={isActive}>
              Home
            </NavLink>
            <NavLink to="/about" className={isActive}>
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
