import style from "./ChiSono.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

import Spacer from "../components/helpers/Spacer";

const ChiSono = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const [heightWSize, setHeightWSize] = useState();
  let heightBig = false;

  useEffect(() => {
    setHeightWSize(window.innerHeight);
    console.log(heightWSize);
  }, [heightWSize]);

  if (heightWSize >= 1297) {
    heightBig = true;
  }

  const heightRef = useRef(null);
  const heightText = heightRef?.current?.clientHeight;
  /* ------ FUNCTION ------- */
  const funcMsg = (msg) => {
    console.log(msg);
  };

  /* ------ ANIMATION ------ */

  const lineAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: heightText + (heightBig ? 130 : 90),
      transition: { duration: 1.8, delay: 0.2 },
    },
  };

  const parent = {
    hidden: {
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: "195%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  /* ------ USE EFFECT ------ */
  useEffect(() => {
    console.log(heightRef);

    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={style.section}>
      <motion.div
        whileHover={{  }}
        className={`${style.container} container`}
      >
        <motion.div
          className={style.text}
          variants={parent}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 variants={child} className={style.title}>
            <span>Chi</span>
            <br />

            <span className={style.line1}>Sono </span>
            <motion.div
              variants={lineAnimation}
              ref={ref}
              initial={"hidden"}
              animate={controls}
              className={style.line}
            ></motion.div>
          </motion.h2>

          {/* ----- CHILD ----- */}
          <Spacer name="md" ref={ref} func={funcMsg}></Spacer>
          <motion.p
            variants={child}
            // initial="hidden"
            // animate={controls}
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChiSono;
