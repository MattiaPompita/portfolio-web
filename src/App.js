import { Fragment } from "react";
import style from "./App.module.css";
import Spacer from "./components/helpers/Spacer";
import Homepage from "./components/Homepage";
import Thumbnail from "./components/Thumbnail";

function App() {
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
                front-end developer. A livello accademico ho studiato
                programmazione già dalle superiori, ho esplorato il mondo del
                graphic design e ho deciso di specializzarmi in applicazioni
                web.
              </p>
            </div>
            <div className={style.card}>
              <Thumbnail bigThumb={false}/>
              <div className={style.descContainer}>
                <h3 className={style.name}>Mattia<br/>Pompita</h3>
                <h4 className={style.job}>front-end developer</h4>
                <p className={style.paragraph}>11 Febbraio 1998</p>
                <p className={style.paragraph}>Modena, (MO), Italia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
