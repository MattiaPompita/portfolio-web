import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const parent = {
    hidden: {
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
      },
    },
  };

  const child = {
    hidden: {
      y: "150%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={style.skill}>
      <div className={`container`}>
        <motion.div
          className={style.text}
          variants={parent}
          initial="hidden"
          animate={controls}
        >
          <motion.h3 ref={ref} variants={child} className={style.title}>
            Skills <br /> Tools
          </motion.h3>
          <Spacer name={"xl"}></Spacer>
          <motion.div
            variants={child}
            className={style.switch}
            data-isOn={isOn}
            onClick={toggleSwitch}
          >
            <motion.div
              className={style.handle}
              layout
              transition={spring}
            ></motion.div>
            <motion.h4 className={style.code}>Code</motion.h4>
            <motion.h4 className={style.design}>Design</motion.h4>
          </motion.div>
        </motion.div>
        <Spacer name={"md"} />
        <SkillList />
      </div>
    </section>
  );
};

export default Skill;
