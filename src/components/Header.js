import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div> <span class ="double">Gameplan</span></div>
      </Link>
    </nav>
  );
}

export default Header;