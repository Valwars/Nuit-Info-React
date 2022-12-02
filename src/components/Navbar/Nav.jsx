import "./Nav.css";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import Burger from "../Burger-button/Burger";
import Logo from "../../image/logosida.svg";

const Navigation_bar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <header>
      <div className="mobile-top-bar"></div>
      <div className="logo" onClick={() => home()}>
        <img className="imagenav" src={Logo} alt="marche pas" />
        <h1>SexInfo</h1>
      </div>
      <Burger></Burger>

      <nav className="nav" id="nav">
        <CustomLink to="/Nuit-Info-React/">Accueil</CustomLink>
        <CustomLink to="/Nuit-Info-React/Informations">Informations</CustomLink>
        <CustomLink to="/Nuit-Info-React/Jeu">Jouer</CustomLink>
        <CustomLink to="/Nuit-Info-React/Contact">Contact</CustomLink>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navigation_bar;
