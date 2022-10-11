import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar_contents">
        <Link to="1" smooth={true}>
          <div className="navbar_title">Hyeon's Portfolio</div>
        </Link>
        <ul className="navbar_list">
          <Link to="About me" smooth={true}>
            <li>About me</li>
          </Link>
          <Link to="Projects" smooth={true}>
            <li>Projects</li>
          </Link>
          <Link to="Skills" smooth={true}>
            <li>Skills</li>
          </Link>
          <Link to="Record" smooth={true}>
            <li>Record</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
