import Main from "./components/Main/Main";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Record from "./components/Record/Record";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faLocationDot,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/Skills/Skills";

const App = () => {
  const img1 = <FontAwesomeIcon icon={faUser} size="2x" />;
  const img2 = <FontAwesomeIcon icon={faCakeCandles} size="2x" />;
  const img3 = <FontAwesomeIcon icon={faLocationDot} size="2x" />;
  const img4 = <FontAwesomeIcon icon={faMobile} size="2x" />;
  const img5 = <FontAwesomeIcon icon={faEnvelope} size="2x" />;

  const aboutmeitems = [
    { id: "i1", title: "이름", value: "정현태", img: img1 },
    { id: "i2", title: "생년원일", value: "99.01.21", img: img2 },
    { id: "i3", title: "주소지", value: "경기도 광명시", img: img3 },
    { id: "i4", title: "연락처", value: "010-9730-5525", img: img4 },
    { id: "i5", title: "이메일", value: "hyun_eon@naver.com", img: img5 },
  ];

  return (
    <div className="App">
      <Main />
      <AboutMe items={aboutmeitems} />
      <Projects />
      <Skills />
      <Record />
    </div>
  );
};

export default App;
