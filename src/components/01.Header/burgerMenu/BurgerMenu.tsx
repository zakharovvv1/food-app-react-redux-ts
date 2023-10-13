import styles from "./BurgerMenu.module.scss";
import exitScreen from "../burgerscreen/exit.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const BurgerMenu = ({
  burgerScreen,
  setburgerScreen,
  name,
  setLogInWindow,
}) => {
  const navigate = useNavigate();
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
              <a>Контакты</a>
            </li>
            <li>
              <a>О ресторане</a>
            </li>
            <li>
              <a>Условия доставки</a>
            </li>
            <li>
              <a>Возврат товара</a>
            </li>
            <li>
              <a>Акции</a>
            </li>
            {!name && (
              <li
                onClick={() => {
                  setLogInWindow(true);
                  setburgerScreen(false);
                }}
              >
                <a>Войти</a>
              </li>
            )}

            <li>
              <a
                onClick={() => {
                  navigate("/userProfile");
                }}
              >
                {name}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenu;
