import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">My name is</h2>
          <h1 className="i-name">Andrew Chang</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">System Admin</div>
            </div>
          </div>

          <p className="i-desc">
            I enjoy working with team members or business partners. I enjoy
            commuicating with clients and implementing the client's vision in
            developing their websites or other projects.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
