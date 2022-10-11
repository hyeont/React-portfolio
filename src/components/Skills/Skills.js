import TitleCard from "../Card/TitleCard";
import "./Skills.css";
import Chart from "./Chart";
import Card from "../Card/Card";

const Skills = (props) => {
  return (
    <TitleCard className="Skills">
      <div id="Skills" className="title">
        <div className="title_name">Skills</div>
        <div className="title_line"></div>
      </div>
      <Card className="chart">
        <Chart />
      </Card>
    </TitleCard>
  );
};

export default Skills;
