import style from "./ChiSono.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

import Icon from "../icon/svgIcon";
import Spacer from "../components/helpers/Spacer";
import Thumbnail from "../components/Thumbnail";
import Card from "./Card";

const ChiSono = () => { 

   /* ------ VARIABLES ------- */
  const line1 = "Chi";
  const line2 = "Sono";

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const heightRef = useRef(null);
  const heightText = heightRef?.current?.clientHeight;

  /* ------ FUNCTION ------- */
  const funcMsg = (msg) => {
    console.log(msg);
  };

  /* ------ ANIMATION ------ */
  const paragraph = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1 },
  };

  const lineAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: heightText + 70,
      transition: { duration: 1.8, delay: 0.2 },
    },
  };

  const fadeIn = {
    hidden: { y: 100 },
    visible: {
      y: 0,
      opacity: [0, 0, 0.1, 0.3, 0.5, 0.8, 1],
      scale: [0.7, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        opacity: {
          times: [0, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        },
        scale: {
          times: [0, 1],
        },
      },
    },
  };

  /* ------ USE EFFECT ------ */
  useEffect(() => {
    console.log(heightRef);

    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className={style.section}>
      <div className={`${style.container} container`}>
        <div className={style.text}>
          <motion.h2
            ref={ref}
            variants={paragraph}
            initial="hidden"
            animate={controls}
            className={style.title}
          >
            <div className={style.line1}>
              {line1.split("").map((char, index) => {
                return (
                  <motion.span
                    className={char + "-" + index}
                    key={char + "-" + index}
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                );
              })}{" "}
            </div>
            {line2.split("").map((char, index) => {
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
            <motion.div
              variants={lineAnimation}
              ref={ref}
              initial={"hidden"}
              animate={controls}
              className={style.line}
            ></motion.div>
          </motion.h2>

          {/* ----- CHILD ----- */}
          <Spacer name="md" func={funcMsg}></Spacer>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            className={style.paragraph}
            ref={heightRef}
          >
            Vivo in Emilia-Romagna, ho 23 anni e ho studiato per diventare
            <strong> front-end developer</strong>.<br />A livello accademico ho
            studiato programmazione già dalle superiori, ho esplorato il mondo
            del
            <strong> graphic design</strong> e ho deciso di specializzarmi in{" "}
            <strong> applicazioni web</strong>.
          </motion.p>
        </div>
        <Card />
      </div>
    </section>
  );
};

export default ChiSono;
