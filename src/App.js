import { Fragment } from "react";
import style from "./App.module.css";
import Card from "./components/Card";
import ChiSono from "./components/ChiSono";

import Homepage from "./components/Homepage";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <Fragment>
      <div className={style.main}>
        <SmoothScroll>
          <Homepage />
          <ChiSono />
          <section className={style.skill}>
            <div className={`${style.container} container`}>
              <div className={style.text}>
                <h3 className={style.title}>
                  Skills <br /> Tools
                </h3>
                <div className={style.toggleSwitch}>
                  <h3>Code</h3>
                  <h3>Design</h3>
                </div>
              </div>
              <div className={style.cardContainer}></div>
              <Card />
            </div>
          </section>
        </SmoothScroll>
      </div>
    </Fragment>
  );
}

export default App;
