import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <a className={styles.active} href="#">
          Холодные закуски
        </a>
      </li>
      <li>
        <a href="#">Горячие закузки</a>
      </li>
      <li>
        <a href="#">Мясные блюда</a>
      </li>
      <li>
        <a href="#">Супы</a>
      </li>
      <li>
        <a href="#">Рыбные блюда</a>
      </li>
      <li>
        <a href="#">Гриль меню</a>
      </li>
      <li>
        <a href="#">Фирменные блюда</a>
      </li>
      <li>
        <a href="#">Напитки</a>
      </li>
    </ul>
  );
};

export default Navbar;
