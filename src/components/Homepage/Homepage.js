import style from "./Homepage.module.css";

const Homepage = () => {
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
          <div className={style.circle}>
            
          </div>
          {/* <svg height="400" width="400">
            <circle
              cx="200"
              cy="200"
              r="200"
              stroke="black"
              stroke-width="3"
              fill="red"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
