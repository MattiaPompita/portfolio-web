import style from "./SkillCard.module.css";

const SkillCard = (props) => {
  return (
    <li className={style.skillCard}>
      <div className={style.container}>
        <img className={style.icon} src={props.img}></img>
        <h3 className={style.text}>{props.name}</h3>
      </div>
    </li>
  );
};

export default SkillCard;
