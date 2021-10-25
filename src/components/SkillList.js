import SkillCard from "./SkillCard";
import style from "./SkillList.module.css";

import htmlIcon from '../img/skillPNG/icons8-html-5-480.png';
import cssIcon from '../img/skillPNG/icons8-css3-480.png';
import reactIcon from '../img/skillPNG/icons8-react-native-480.png';
import javascriptIcon from '../img/skillPNG/icons8-javascript-480.png';
import nodeIcon from '../img/skillPNG/node.png';
import reduxIcon from '../img/skillPNG/icons8-redux-480.png';
import nextIcon from '../img/skillPNG/next-js.png';
import sassIcon from '../img/skillPNG/icons8-sass-480.png';

const SkillList = () => {
  const skillsCode = [
    { id: 1, name: "Html 5", img: htmlIcon },
    { id: 2, name: "Css 3", img: cssIcon },
    { id: 3, name: "React", img: reactIcon },
    { id: 4, name: "Javascript", img: javascriptIcon },
    { id: 5, name: "Node.js", img: nodeIcon },
    { id: 6, name: "Redux", img: reduxIcon },
    { id: 7, name: "Next.js", img: nextIcon },
    { id: 8, name: "Sass", img: sassIcon },
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
