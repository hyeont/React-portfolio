import Header from "./Header";
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <div className='intro'>
        <div className='intro_name'>정현태</div>
        <div className='intro_jht'>소개</div>
        <button className='intro_btn'>더 알아보기</button>
      </div>
    </div>
  );
};

export default Main;
