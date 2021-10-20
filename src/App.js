import { Fragment } from "react";
import style from "./App.module.css";
import Card from "./components/Card";
import ChiSono from "./components/ChiSono";
import Spacer from "./components/helpers/Spacer";

import Homepage from "./components/Homepage";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <Fragment>
      <div className={style.main}>
        <Card />
        <SmoothScroll>
          <Homepage />
          <div className={style.prova}></div>
          <ChiSono />
          <section className={style.skill}>
            <div className={`${style.container} container`}>
              <div className={style.text}>
                <h3 className={style.title}>
                  Skills <br /> Tools
                </h3>
                <Spacer name={"xl"}></Spacer>
                <div className={style.toggleSwitch}>
                  <h4>Code</h4>
                  <h4>Design</h4>
                </div>
              </div>
              <div className={style.cardContainer}></div>
            </div>
          </section>
        </SmoothScroll>
      </div>
    </Fragment>
  );
}

export default App;
