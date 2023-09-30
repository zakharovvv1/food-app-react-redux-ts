import styles from "./Contacts.module.css";
import fb from "./assets/facebook.png";
import vk from "./assets/vk.png";
import youtube from "./assets/youtube.png";
import instagram from "./assets/instagram.png";
import locIcon from "./assets/Loc.png";
import messageIcon from "./assets/Message.png";
import mobileMap from "./mobile/map.svg";
import pointMap from "./mobile/point map.svg";
const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles["contacts-block"]}>
        <h2 className={styles.title}>КОНТАКТЫ</h2>
        <div className={styles["adress-block"]}>
          <div className={styles.imgBlock}>
            <img src={locIcon} />
          </div>
          <div className={styles.adress}>
            <div className={styles["adress-text"]}>Наш адрес:</div>
            <div className={styles["adress-description"]}>
              МО, городской округ Красногорск, село Ильинкое, Экспериментальная
              улица, 10
            </div>
          </div>
        </div>
        <div className={styles["post-block"]}>
          <div className={styles.imgBlock}>
            <img src={messageIcon} />
          </div>
          <div className={styles.post}>
            <div className={styles["post-text"]}>Наша почта:</div>
            <div className={styles["post-description"]}>
              auto.wash@gmail.com
            </div>
          </div>
        </div>
        <div className={styles["contacts-section"]}>
          <button className={styles.button}>ЗАБРОНИРОВАТЬ СТОЛ</button>
          <button className={styles.button}>Проложить маршрут</button>
          <div>
            <div className={styles.number}>+7 (917) 510-57-59</div>
            <div className={styles["number-text"]}>
              Звоните или оставляйте заявку
            </div>
          </div>
        </div>
        <div className={styles["social-block"]}>
          <div className={styles["social-text"]}>Мы в соц сетях:</div>
          <a className={styles["social-icon"]} href="#">
            <img src={fb} />
          </a>
          <a className={styles["social-icon"]} href="#">
            <img src={vk} />
          </a>
          <a className={styles["social-icon"]} href="#">
            <img src={youtube} />
          </a>
          <a className={styles["social-icon"]} href="#">
            <img src={instagram} />
          </a>
        </div>
      </div>
      <img className={styles.mobileMap} src={mobileMap} alt="" />
      <img className={styles.pointMap} src={pointMap} alt="" />
    </section>
  );
};

export default Contacts;
