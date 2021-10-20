import style from "./Card.module.css";
import Spacer from "./helpers/Spacer";
import Thumbnail from "./Thumbnail";
import Icon from "../icon/svgIcon";

const Card = () => {
  return (
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
  );
};

export default Card;
