import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>My Cool App</h1>
      </Link>
      <Link to="/gifs/favorites">Favorites</Link>
    </div>
  );
};

export default Header;
