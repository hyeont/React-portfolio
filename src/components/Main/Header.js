import "./Header.css";

const Header = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_contents">
        <div className="Navbar_title">Hyeon's Portfolio</div>
        <ul className="Navbar_list">
          <li>About me</li>
          <li>Portfolio</li>
          <li>Carrer</li>
        </ul>
      </div>
      {/* <div className="Navbar_hambuger" onClick={null}></div>  작은창*/}
    </div>
  );
};

export default Header;
