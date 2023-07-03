import styles from "./Modal.module.scss";
import img from "./illustration-cart 1.svg";
import exit from "./exit.svg";
const Modal = ({ setModalWindow, modalWindow }) => {
  console.log(modalWindow);
  console.log(setModalWindow);
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
        <button>Посмотреть меню</button>
      </div>
    </div>
  );
};

export default Modal;
