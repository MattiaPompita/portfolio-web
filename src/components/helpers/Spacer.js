import style from "./Spacer.module.css";

const Spacer = (props) => {
  let height;
  if (props.name === "sm") {
    height = "20px";
  }

  if (props.name === "md") {
    height = "40px";
  }

  if (props.name === "xl") {
    height = "60px";
  }

  if (props.name === "xxl") {
    height = "80px";
  }

  return (
    <div className={style[props.name]} style={{ height: height, width: "100%" }}></div>
  );
};

export default Spacer;
