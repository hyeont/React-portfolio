import AboutMeItem from "./AboutMeItem";
import "./AboutMe.css";

const AboutMe = () => {
  const aboutmeitems = [
    { title: "이름", value: "정현태" },
    { title: "생년원일", value: "99.01.21" },
    { title: "주소지", value: "경기도 광명시" },
    { title: "연락처", value: "010-9730-5525" },
    { title: "이메일", value: "hyun_eon@naver.com" },
  ];

  return (
    <div className="aboutme">
      <div className="title">
        <div className="titleName">About me</div>
        <div className="titleLine"></div>
      </div>
      <div className="aboutMeItems">
        <AboutMeItem
          title={aboutmeitems[0].title}
          value={aboutmeitems[0].value}
        />
        <AboutMeItem
          title={aboutmeitems[1].title}
          value={aboutmeitems[1].value}
        />
        <AboutMeItem
          title={aboutmeitems[2].title}
          value={aboutmeitems[2].value}
        />
        <AboutMeItem
          title={aboutmeitems[3].title}
          value={aboutmeitems[3].value}
        />
        <AboutMeItem
          title={aboutmeitems[4].title}
          value={aboutmeitems[4].value}
        />
      </div>
    </div>
  );
};
export default AboutMe;
