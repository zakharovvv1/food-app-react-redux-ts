import styles from "./Modal.module.scss";
import img from "./illustration-cart 1.svg";
import exit from "./exit.svg";
import { useNavigate } from "react-router";
import { scroller } from "react-scroll";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

const Modal = ({ setModalWindow, modalWindow }) => {
  const toogleCat = useSelector((state) => state.toogleCategoriesReducer);
  const toogleCategory = toogleCat.category;

  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.main}
    >
      <div className={styles.modal}>
        <img className={styles.basket} src={img} alt="" />
        <img
          className={styles.exit}
          src={exit}
          onClick={() => setModalWindow(false)}
          alt=""
        />
        <p>КОРЗИНА ПУСТАЯ</p>
        <button
          onClick={() => {
            setModalWindow(false);
            navigate("/");
            // scroller.scrollTo(toogleCategory, {
            //   duration: 500,
            //   delay: 50,
            //   smooth: true,

            // });
          }}
        >
          Посмотреть меню
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;
