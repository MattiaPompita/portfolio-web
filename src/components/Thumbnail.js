import { useEffect, useState } from "react";

import style from "./Thumbnail.module.css";

import circlePic from "../img/circlePic.png";
import circleAvatar from "../img/avatar.png";
import { motion } from "framer-motion";

const Thumbnail = (props) => {

   /* ------ VARIABLES ------ */

  const [isFlip, setFlip] = useState(true);
  let fadeIn = {};

   /* ------ ANIMATION ------ */
  if (props.bigThumb) {
    fadeIn = {
      hidden: { y: 40 },
      visible: {
        y: 20,
        opacity: [0, 0, 0.1, 0.3, 0.5, 0.8, 1],
        scale: [0.95, 1],
        transition: {
          delay: 0.3,
          duration: 2,
          ease: "easeInOut",
          opacity: { delay: 0.3, times: [0, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
          scale: { delay: 0.3, times: [0, 1] },
        },
      },
    };
  }

   /* ------ FUNCTION ------ */

  const rotatePic = () => {
    setFlip((prevState) => !prevState);
  };



  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={style.circleThumbnail}
    >
      <div className={style.flipPic} onClick={rotatePic}>
        <div className={style.flipperPic}>
          <div
            className={`${!isFlip ? style.circleFront : style.circleFront2}`}
          >
            <div className={style.circle}>
              <img src={circleAvatar} className={`${props.bigThumb ? style.pic : style.picCard}`} alt="" />
            </div>
          </div>
          <div className={`${!isFlip ? style.circleBack : style.circleBack2}`}>
            <div className={style.circle}>
              <img
                src={circlePic}
                className={`${props.bigThumb ? style.pic : style.picCard}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Thumbnail;
