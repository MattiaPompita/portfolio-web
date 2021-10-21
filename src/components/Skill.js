import { useState } from "react";

import style from "./Skill.module.css";

import Spacer from "./helpers/Spacer";
import { motion } from "framer-motion";
import SkillList from "./SkillList";

const Skill = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <section className={style.skill}>
      <div className={`container`}>
        <div className={style.text}>
          <h3 className={style.title}>
            Skills <br /> Tools
          </h3>
          <Spacer name={"xl"}></Spacer>
          <div className={style.switch} data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div
              className={style.handle}
              layout
              transition={spring}
            ></motion.div>
            <h4 className={style.code}>Code</h4>
            <h4 className={style.design}>Design</h4>
          </div>
        </div>
        <Spacer name={"md"} />
        <SkillList />
      </div>
    </section>
  );
};

export default Skill;
