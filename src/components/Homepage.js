import { motion } from "framer-motion";
import Spacer from "./helpers/Spacer";

import style from "./Homepage.module.css";

import Thumbnail from "./Thumbnail";

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

  const fadeIn = {
    hidden: { y: 50 },
    visible: {
      y: 0,
      opacity: [0, 0, 0.1, 0.3, 0.5, 0.8, 1],
      scale: [0.7, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        opacity: {
          times: [0, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        },
        scale: {
          times: [0, 1]
        }
      },
    },
  };

  const line4 = "scorri se vuoi scoprire qualcosa di me";

  return (
    <div className={style.main}>
      <div className={`${style.container}`}>
        <div className={style.header}>
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible">
            Ciao, il mio nome è <strong> Mattia </strong>
            <br />
            e questo sono io,
            <br />
            un <strong>front-end developer</strong>
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
        </div>
        <Thumbnail height={"500px"} width={"500px"} bigThumb={true} />
      </div>
    </div>
  );
};

export default Homepage;
