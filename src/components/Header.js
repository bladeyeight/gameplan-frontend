import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div> <span class ="double">Gameplan</span></div>
      </Link>
      <Link to="/register">
          <div className="navLinks">Register                                                                              </div>
      </Link>
      <Link to="/sign">
          <div className="navLinks">Sign in</div>
      </Link>
    </nav>
  );
}

export default Header;