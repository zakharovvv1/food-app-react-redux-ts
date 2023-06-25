import styles from "./About.module.css";
import Card from "./Card/Card";

const About = () => {
  return (
    <section className={styles.about}>
      <div>
        <h2 className={styles.title}>НАШЕ КАФЕ</h2>
        <p className={styles.text}>
          Мы расположены в одном из самых живописных мест города — на берегу
          реки, это ваш оазис в черте города, куда можно сбежать от шумного и
          пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано
          до мелочей: проект построен из дикого закарпатского сруба, камин в
          основном зале ресторана и панорамные окна с видом на реку, уютные
          беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на
          200 человек, сказочный детский домик и бассейн.
        </p>
        <button className={styles.button}>ПОСМОТРЕТЬ МЕНЮ</button>
      </div>
      <div className={styles.cards}>
        <Card />
      </div>
    </section>
  );
};

export default About;
