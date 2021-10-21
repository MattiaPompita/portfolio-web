import { motion } from "framer-motion";
import { Fragment } from "react";
import style from "./App.module.css";
import Card from "./components/Card";
import ChiSono from "./components/ChiSono";
import Spacer from "./components/helpers/Spacer";
import { useState } from "react";

import Homepage from "./components/Homepage";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <Fragment>
      <div className={style.main}>
        <Card />
        <SmoothScroll>
          <Homepage />
          <div className={style.prova}></div>
          <ChiSono />
          <section className={style.skill}>
            <div className={`container`}>
              <div className={style.text}>
                <h3 className={style.title}>
                  Skills <br /> Tools
                </h3>
                <Spacer name={"xl"}></Spacer>
                <div
                  className={style.switch}
                  data-isOn={isOn}
                  onClick={toggleSwitch}
                >
                  <motion.div
                    className={style.handle}
                    layout
                    transition={spring}
                  ></motion.div>
                  <h4 className={style.code}>Code</h4>
                  <h4 className={style.design}>Design</h4>
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
