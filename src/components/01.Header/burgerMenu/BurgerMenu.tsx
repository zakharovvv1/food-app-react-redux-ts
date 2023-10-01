import styles from "./BurgerMenu.module.scss";
import exitScreen from "../burgerscreen/exit.svg";
import { motion, AnimatePresence } from "framer-motion";
const BurgerMenu = ({ burgerScreen, setburgerScreen }) => {
  return (
    <AnimatePresence>
      {burgerScreen && (
        <motion.div
          key={"burger"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className={styles.burgerScreen}
        >
          <div
            onClick={() => {
              setburgerScreen(false);
            }}
            className={styles.divBurgerScreen}
          >
            <img className={styles.exitScreenImg} src={exitScreen} alt="" />
          </div>
          <h1>LOGOS</h1>

          <ul className={styles.ulList}>
            <li>
              <a href="">Контакты</a>
            </li>
            <li>
              <a href="">О ресторане</a>
            </li>
            <li>
              <a href="">Условия доставки</a>
            </li>
            <li>
              <a href="">Возврат товара</a>
            </li>
            <li>
              <a href="">Акции</a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenu;
