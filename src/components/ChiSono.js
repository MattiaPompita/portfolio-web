import style from "./ChiSono.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Icon from "../icon/svgIcon";
import Spacer from "../components/helpers/Spacer";
import Thumbnail from "../components/Thumbnail";

const ChiSono = () => {
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
    visible: { opacity: 1, height: 330, transition: { duration: 2, delay: 0.2 } },
  };

  const line1 = "Chi";
  const line2 = "Sono";

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
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
          {/* <h2 className={style.title}> */}
          {/* <span className={style.chi}>Chi</span> <br /> Sono */}
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

          <Spacer name="sm"></Spacer>
          <p className={style.paragraph}>
            Vivo in Emilia-Romagna, ho 23 anni e ho studiato per diventare
            <strong> front-end developer</strong>.<br />A livello accademico ho
            studiato programmazione già dalle superiori, ho esplorato il mondo
            del
            <strong> graphic design</strong> e ho deciso di specializzarmi in{" "}
            <strong> applicazioni web</strong>.
          </p>
        </div>
        <div className={style.card}>
          <Thumbnail bigThumb={false} />
          <div className={style.descContainer}>
            <h3 className={style.name}>Mattia Pompita</h3>
            <Spacer name={"sm"}></Spacer>
            <h4 className={style.job}>front-end developer</h4>
            <Spacer name={"md"}></Spacer>
            <div className={style.infoContainer}>
              <div className={style.info}>
                {Icon.cake}
                <p className={style.desc}>11 Febbraio 1998</p>
              </div>
              <Spacer name={"sm"}></Spacer>
              <div className={style.info}>
                {Icon.pin}
                <p className={style.desc}>Modena, (MO)</p>
              </div>
            </div>
          </div>
          <Spacer name={"md"}></Spacer>
          <div className={style.svgContainer}>{Icon.linkedinSvg}</div>
        </div>
      </div>
    </section>
  );
};

export default ChiSono;
