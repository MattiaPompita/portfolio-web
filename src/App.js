import { Fragment } from "react";
import style from "./App.module.css";
import ChiSono from "./components/ChiSono";

import Homepage from "./components/Homepage";

function App() {
  return (
    <Fragment>
      <div className={style.main}>
        <Homepage />
        <ChiSono />
      </div>
    </Fragment>
  );
}

export default App;
