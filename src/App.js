import { Fragment } from "react";
import style from "./App.module.css";
import Card from "./components/Card";
import ChiSono from "./components/ChiSono";

import Homepage from "./components/Homepage";
import Skill from "./components/Skill";
// import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <Fragment>
      <div className={style.main}>
        {/* <SmoothScroll> */}
        <Homepage />
        <div
          className={style.stickyContainer}
          style={{ width: "100vw", height: "100%" }}
        >
          <Card /><div class="clear"></div>
          <ChiSono />
          <Skill />
        </div>
        {/* </SmoothScroll> */}
      </div>
    </Fragment>
  );
}

export default App;
