import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import style from "./Contatti.module.css";

import { motion } from "framer-motion";
import Spacer from "./helpers/Spacer";

const Contatti = () => {
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
    <section className={style.contatti}>
      <div className={`container`}>
        <motion.div
          className={style.text}
          variants={parent}
          initial="hidden"
          animate={controls}
        >
          <motion.h3 ref={ref} variants={child} className={style.title}>
            Contattami
          </motion.h3>
          <Spacer name={"xl"} />
          <motion.p variants={child} className={style.paragraph}>
            Contattami se hai bisogno di un sito internet o di un front-end che
            gestisca la parte grafica della tua applicazione web
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contatti;
