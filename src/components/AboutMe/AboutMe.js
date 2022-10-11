import AboutMeItem from "./AboutMeItem";
import "./AboutMe.css";
import TitleCard from "../Card/TitleCard";

const AboutMe = (props) => {
  return (
    <TitleCard className="aboutme">
      <div id="About me" className="title">
        <div className="title_name">About me</div>
        <div className="title_line"></div>
      </div>
      <div className="aboutme_items">
        {props.items.map((item) => (
          <AboutMeItem
            key={item.id}
            title={item.title}
            value={item.value}
            img={item.img}
          />
        ))}
      </div>
    </TitleCard>
  );
};
export default AboutMe;
