import Header from "./Header";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div id="1" className="intro">
        <div className="intro_name">Jeong Hyeon Tae</div>
        <div className="line"></div>
        <div className="intro_jht">
          안녕하세요. 웹 개발자로서 성장하고 싶은 정현태 입니다.
        </div>
        <div className="next">
          <Link to="About me" smooth={true}>
            <FontAwesomeIcon icon={faArrowDownLong} size="2x" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
