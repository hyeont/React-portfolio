import "./Project2.css";

const Project2 = () => {
  return (
    <div className="project_2">
      <div className="thumbnail2">
        <img className="thumbnail_img2" alt="thumbnail" src="img/pj2.png" />
      </div>
      <div className="project_discription">
        <div className="project_name">생일 이벤트</div>
        <div className="project_period">2022.07</div>
        <div className="project_line"></div>
        <div className="project_description">
          HTML, CSS, JS를 사용한 친구의 생일을 위한 이벤트 페이지입니다. 이상형
          월드컵 사이트에서 아이디어를 얻어 제작하게 되었습니다. 하지만 짧은
          제작 기간으로 최소한의 기능들만 사용되었고 추후 보완할 예정입니다.
        </div>
        <div className="project_functions">
          <div className="project_function">
            주요 기능
            <div className="project_function__content">• 이벤트</div>
          </div>
          <div className="project_function">
            Github
            <div className="project_function__content">
              <a href="https://github.com/hyeont/photo" target="blank">
                • https://github.com/hyeont/photo
              </a>
            </div>
          </div>

          <div className="project_function">
            URL
            <div className="project_function__content">
              <a
                href="https://hyeont.github.io/photo/%EB%AF%BC/main/index.html"
                target="blank"
              >
                • https://hyeont.github.io/photo/%EB%AF%BC/main/index.html
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
