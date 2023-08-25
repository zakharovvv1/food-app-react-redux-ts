import styles from "./Modal.module.scss";
import img from "./illustration-cart 1.svg";
import exit from "./exit.svg";
import { useNavigate } from "react-router";
const Modal = ({ setModalWindow, modalWindow }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
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
          }}
        >
          Посмотреть меню
        </button>
      </div>
    </div>
  );
};

export default Modal;
