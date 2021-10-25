import htmlIcon from "../img/skillPNG/icons8-html-5-480.png";
import cssIcon from "../img/skillPNG/icons8-css3-480.png";
import reactIcon from "../img/skillPNG/icons8-react-native-480.png";
import javascriptIcon from "../img/skillPNG/icons8-javascript-480.png";
import nodeIcon from "../img/skillPNG/node.png";
import reduxIcon from "../img/skillPNG/icons8-redux-480.png";
import nextIcon from "../img/skillPNG/next-js.png";
import sassIcon from "../img/skillPNG/icons8-sass-480.png";

export default function useImage() {
  const imgIcon = {
      html: htmlIcon,
      css: cssIcon,
      react: reactIcon,
      javascript: javascriptIcon,
      node: nodeIcon,
      redux: reduxIcon,
      next: nextIcon,
      sass: sassIcon
  }

  return imgIcon;
}
