import { Fragment } from "react";
import style from "./App.module.css";
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
        </SmoothScroll>
      </div>
    </Fragment>
  );
}

export default App;
