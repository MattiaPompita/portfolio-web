import useImage from "../hook/useImage";
import SkillCard from "./SkillCard";
import style from "./SkillList.module.css";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";



const SkillList = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    
  }, [controls, inView]);

  const parent = {
    hidden: {
      opacity: 0
    },

    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        staggerChildren: 0.4,
      }
    }
  }

  const images = useImage();

  const skillsCode = [
    { id: 1, name: "Html 5", img: images.html },
    { id: 2, name: "Css 3", img: images.css },
    { id: 3, name: "React", img: images.react },
    { id: 4, name: "Javascript", img: images.javascript },
    { id: 5, name: "Node.js", img: images.node },
    { id: 6, name: "Redux", img: images.redux },
    { id: 7, name: "Next.js", img: images.next },
    { id: 8, name: "Sass", img: images.sass },
  ];

  return (
    <motion.ul ref={ref} initial="hidden" animate={controls} variants={parent} className={style.skillContainer}>
      {skillsCode.map((skill) => (
        <SkillCard id={skill.id} name={skill.name} img={skill.img}></SkillCard>
      ))}
    </motion.ul>
  );
};

export default SkillList;
