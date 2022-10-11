import "./Projects.css";
import TitleCard from "../Card/TitleCard";
import Card from "../Card/Card";
import Project1 from "./Project1";
import Project2 from "./Project2";

const Projects = () => {
  return (
    <TitleCard className="projects">
      <div id="Projects" className="title">
        <div className="title_name">Projects</div>
        <div className="title_line"></div>
      </div>
      <Card className="project">
        <Project1 />
      </Card>
      <Card className="project">
        <Project2 />
      </Card>
    </TitleCard>
  );
};

export default Projects;
