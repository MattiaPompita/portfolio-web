import SkillCard from "./SkillCard";
import style from './SkillList.module.css';

const SkillList = () => {
  const skillsCode = [
    { id: 1, name: "Html 5", img: "" },
    { id: 2, name: "Css 3", img: "" },
    { id: 3, name: "React", img: "" },
    { id: 4, name: "Javascript", img: "" },
    { id: 5, name: "Node.js", img: "" },
    { id: 6, name: "Redux", img: "" },
    { id: 7, name: "Next.js", img: "" },
    { id: 8, name: "Sass", img: "" },
  ];

  return (
    <ul className={style.skillContainer}>
      {skillsCode.map((skill) => (
        <SkillCard id={skill.id} name={skill.name} img={skill.img}></SkillCard>
      ))}
    </ul>
  );
};

export default SkillList;
