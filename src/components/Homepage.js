import { motion } from "framer-motion";
import Spacer from "./helpers/Spacer";

import style from "./Homepage.module.css";

const Homepage = () => {
  const paragraph = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1 },
  };


  const parent = {
    hidden: {
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
  };

  const fadeIn = {
    hidden: {
      opacity: 0,
      y: "195%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 },
    },
  };

  const line4 = "scorri se vuoi scoprire qualcosa di me";

  return (
    <div className={style.main}>
      <div className={`${style.container} container`}>
        <motion.div className={style.header} variants={parent} initial="hidden" animate="visible">
          <motion.h1 variants={fadeIn} >
            Ciao, il mio nome è <strong> Mattia </strong>
            <br />
            e questo sono io,
            <br />
            un <strong>front-end developer</strong>.
          </motion.h1>
          <Spacer name="md"></Spacer>
          <div className={style["scrollDown-container"]}>
            <div className={style.line}></div>
            <motion.p
              variants={paragraph}
              initial="hidden"
              animate="visible"
              className={style.scrollDown}
            >
              {line4.split("").map((char, index) => {
                return (
                  <motion.span
                    className={char + "-" + index}
                    key={char + "-" + index}
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
          </div>
        </motion.div>
        {/* <Thumbnail height={"500px"} width={"500px"} bigThumb={true} /> */}
      </div>
    </div>
  );
};

export default Homepage;
