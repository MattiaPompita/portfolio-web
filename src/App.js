import { Fragment } from "react";
import style from "./App.module.css";
import Spacer from "./components/helpers/Spacer";
import Homepage from "./components/Homepage";
import Thumbnail from "./components/Thumbnail";

function App() {
  const cake = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="34.286"
      viewBox="0 0 30 34.286"
    >
      <path
        id="Icon_awesome-birthday-cake"
        data-name="Icon awesome-birthday-cake"
        d="M30,25.714c-1.876,0-2.093-2.143-4.989-2.143s-3.136,2.143-5.006,2.143c-1.855,0-2.106-2.143-5.006-2.143-2.869,0-3.162,2.143-4.989,2.143-1.885,0-2.089-2.143-5.006-2.143S1.881,25.714,0,25.714V20.357a3.215,3.215,0,0,1,3.214-3.214H4.286V7.5H8.571v9.643h4.286V7.5h4.286v9.643h4.286V7.5h4.286v9.643h1.071A3.215,3.215,0,0,1,30,20.357Zm0,8.571H0V27.857c2.9,0,3.132-2.143,5.006-2.143s2.093,2.143,5.006,2.143c2.869,0,3.162-2.143,4.989-2.143,1.885,0,2.089,2.143,5.006,2.143s3.132-2.143,5.006-2.143c1.841,0,2.093,2.143,4.989,2.143ZM6.429,6.429A2.136,2.136,0,0,1,4.286,4.286C4.286,2.21,6.429,2.746,6.429,0c.8,0,2.143,1.975,2.143,3.75S7.617,6.429,6.429,6.429Zm8.571,0a2.136,2.136,0,0,1-2.143-2.143C12.857,2.21,15,2.746,15,0c.8,0,2.143,1.975,2.143,3.75S16.189,6.429,15,6.429Zm8.571,0a2.136,2.136,0,0,1-2.143-2.143c0-2.076,2.143-1.54,2.143-4.286.8,0,2.143,1.975,2.143,3.75S24.76,6.429,23.571,6.429Z"
        fill="#f1fffa"
      />
    </svg>
  );

  const pin = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="36.111"
      viewBox="0 0 25 36.111"
    >
      <path
        id="Icon_ionic-ios-pin"
        data-name="Icon ionic-ios-pin"
        d="M20.375,3.375c-6.9,0-12.5,5.2-12.5,11.606,0,9.028,12.5,24.505,12.5,24.505s12.5-15.477,12.5-24.505C32.875,8.575,27.276,3.375,20.375,3.375Zm0,16.571a4.071,4.071,0,1,1,4.071-4.071A4.071,4.071,0,0,1,20.375,19.946Z"
        transform="translate(-7.875 -3.375)"
        fill="#f1fffa"
      />
    </svg>
  );

  const linkedinSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      className={style.linkedin}
    >
      <path
        id="icons8-linkedin"
        d="M41,4H9A5,5,0,0,0,4,9V41a5,5,0,0,0,5,5H41a5,5,0,0,0,5-5V9A5,5,0,0,0,41,4ZM17,20V39H11V20Zm-6-5.53c0-1.4,1.2-2.47,3-2.47a2.705,2.705,0,0,1,3,2.47c0,1.4-1.12,2.53-3,2.53A2.707,2.707,0,0,1,11,14.47ZM39,39H33V29c0-2-1-4-3.5-4.04h-.08C27,24.96,26,27.02,26,29V39H20V20h6v2.56A7.49,7.49,0,0,1,31.81,20C35.78,20,39,22.73,39,28.26Z"
        transform="translate(-4 -4)"
        fill="#f1fffa"
      />
    </svg>
  );
  return (
    <Fragment>
      <div className={style.main}>
        <Homepage />
        <section className={style.section}>
          <div className={`${style.container} container`}>
            <div className={style.text}>
              <h2 className={style.title}>
                <span>Chi</span> <br /> Sono
              </h2>
              <Spacer name="md"></Spacer>
              <p className={style.paragraph}>
                Vivo in Emilia-Romagna, ho 23 anni e ho studiato per diventare
                <strong> front-end developer</strong>.<br />A livello accademico
                ho studiato programmazione già dalle superiori, ho esplorato il
                mondo del
                <strong> graphic design</strong> e ho deciso di specializzarmi
                in <strong> applicazioni web</strong>.
              </p>
            </div>
            <div className={style.card}>
              <Thumbnail bigThumb={false} />
              <div className={style.descContainer}>
                <h3 className={style.name}>Mattia Pompita</h3>
                <Spacer name={"sm"}></Spacer>
                <h4 className={style.job}>front-end developer</h4>
                <Spacer name={"xl"}></Spacer>
                <div className={style.infoContainer}>
                  <div className={style.info}>
                    {cake}
                    <p className={style.desc}>11 Febbraio 1998</p>
                  </div>
                  <Spacer name={"sm"}></Spacer>
                  <div className={style.info}>
                    {pin}
                    <p className={style.desc}>Modena, (MO)</p>
                  </div>
                  
                </div>
              </div>
              {linkedinSvg}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
