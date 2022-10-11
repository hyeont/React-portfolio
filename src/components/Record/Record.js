import "./Record.css";
import TitleCard from "../Card/TitleCard";
import Card from "../Card/Card";

const Record = () => {
  return (
    <TitleCard className="record">
      <div id="Record" className="title">
        <div className="title_name">Record</div>
        <div className="title_line"></div>
      </div>
      <Card className="record_discription">
        <div className="record_place">백석대학교</div>
        <div className="record_period"> 2017.03 - 2023.02(졸업예정)</div>
        <div className="record_title">• 개인 - React 포트폴리오(2022.09) </div>
        <div className="record_title">• 개인 - 생일 이벤트 (2022.07) </div>
        <div className="record_title">• 학부 - Python으로 게임제작2 (2022)</div>
        <div className="record_title">• 학부 - Python으로 게임제작1 (2021)</div>
        <div className="record_title">• 학부 - 3d 캐릭터 제작 (2021)</div>
        <div className="record_title">• 학부 - C++로 게임 제작 (2021) </div>
      </Card>
    </TitleCard>
  );
};

export default Record;
