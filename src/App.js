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
        <Card />
        {/* <SmoothScroll> */}
          <Homepage />
          <ChiSono />
          <Skill />
        {/* </SmoothScroll> */}
      </div>
    </Fragment>
  );
}

export default App;
