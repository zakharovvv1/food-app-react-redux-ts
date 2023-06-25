import styles from "./Footer.module.css";
import arrow from "./assets/Arrow4.png";
import logo from "./assets/LOGOS.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles["icon-link-block"]} href="#">
        <div className={styles["icon-link"]}>
          <img className={styles.icon} src={arrow} alt="arrow" />
        </div>
      </a>
      <div className={styles["policy-block"]}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.rights}>
          © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
        </div>
        <div className={styles["policy-links"]}>
          <a className={styles["policy-link"]} href="#">
            <span className={styles.test}>Пользовательское соглашение</span>
          </a>
          <a className={styles["policy-link"]} href="#">
            <span className={styles.test}>Карта сайта</span>
          </a>
          <a className={styles["policy-link"]} href="#">
            <span className={styles.test}>Политика конфиденциальности</span>
          </a>
        </div>
      </div>
      <div className={styles["links-block"]}>
        <a className={styles.link} href="#">
          О ресторане
        </a>
        <a className={styles.link} href="#">
          Условия доставки
        </a>
        <a className={styles.link} href="#">
          Возврат товара
        </a>
        <a className={styles.link} href="#">
          Акции
        </a>
      </div>
    </footer>
  );
};

export default Footer;
