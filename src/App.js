import { Fragment } from "react";
import style from "./App.module.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Fragment>
      <div className={style.main}>
        <Homepage />
      </div>
    </Fragment>
  );
}

export default App;
