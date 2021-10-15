import { useState } from "react";
import style from "./Homepage.module.css";

const Homepage = () => {
  const [isFlip, setFlip] = useState(false);

  const rotatePic = () => {
    setFlip((prevState) => !prevState);
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
          <h1>
            Ciao, il mio nome è <strong>Mattia</strong>
            <br />e questo sono io,
            <br /> un <strong>front-end developer</strong>.
          </h1>
          <div className="spacer-sm"></div>
          <div className={style["scrollDown-container"]}>
            <div className={style.line}></div>
            <p>scorri se vuoi scoprire qualcosa di me</p>
          </div>
        </div>
        <div className={style.pic}>
          <div
            // className={`${!isFlip ? style.front : style.back}`}
            className={style.circle}
            onClick={rotatePic}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
