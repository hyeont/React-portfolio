import "./TitleCard.css";

const TitleCard = (props) => {
  const classes = "titlecard " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default TitleCard;
