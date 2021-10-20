import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import style from "./Card.module.css";
import Spacer from "./helpers/Spacer";
import Thumbnail from "./Thumbnail";
import Icon from "../icon/svgIcon";

const Card = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const fadeIn = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: [0, 0, 0.1, 0.3, 0.5, 0.8, 1],
      scale: [0.7, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        opacity: {
          delay: 0.5,
          times: [0, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        },
        scale: {
          times: [0, 1],
        },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div variants={fadeIn} initial="hidden" animate={controls} ref={ref} className={style.card}>
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
    </motion.div>
  );
};

export default Card;
