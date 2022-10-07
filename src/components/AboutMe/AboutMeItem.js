import "./AboutMeItem.css";

const AboutMeItem = (props) => {
  return (
    <div className="item">
      <div className="items">
        <div className="aboutme_icon">이미지</div>
        <div className="aboutme_info">
          <div className="aboutme_label">{props.title}</div>
          <div className="aboutme_value">{props.value} </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeItem;
