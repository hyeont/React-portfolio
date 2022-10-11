import "./Project1.css";

const Project1 = () => {
  return (
    <div className="project_1">
      <div className="thumbnail">
        <img className="thumbnail_img" alt="thumbnail" src="img/pj1.png" />
      </div>
      <div className="project_discription">
        <div className="project_name">포트폴리오 웹사이트</div>
        <div className="project_period">2022.09</div>
        <div className="project_line"></div>
        <div className="project_description">
          React학습 겸 포트폴리오 용도로 제작한 웹사이트입니다. 웹사이트를
          만들며 scroll, font, chart, ..등 여러 기술들을 학습하며 사용해 볼 수
          있었습니다.
        </div>
        <div className="project_functions">
          <div className="project_function">
            주요 기능
            <div className="project_function__content">
              • 자기소개, 인적 사항, 프로젝트, Github 링크
            </div>
          </div>

          <div className="project_function">
            Github
            <div className="project_function__content">
              <a
                href="https://github.com/hyeont/React-portfolio/tree/develop"
                target="blank"
              >
                • https://github.com/hyeont/React-portfolio/tree/develop
              </a>
            </div>
          </div>

          <div className="project_function">
            URL
            <div className="project_function__content">
              <a href="https://hyeont.github.io/" target="blank">
                • https://hyeont.github.io/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
