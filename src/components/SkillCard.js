import style from "./SkillCard.module.css";

import { motion } from "framer-motion";

const child = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
}

const SkillCard = (props) => {
  return (
    <motion.li variants={child} className={style.skillCard}>
      <div className={style.container}>
        <img className={style.icon} src={props.img} alt=""></img>
        <h3 className={style.text}>{props.name}</h3>
      </div>
    </motion.li>
  );
};

export default SkillCard;
