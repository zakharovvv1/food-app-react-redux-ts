import styles from "./Modal.module.scss";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";

const ModalSucces = ({ setModalWindow, modalWindow }) => {
  const root = document.getElementById("root");
  let scroll = Scroll.animateScroll;

  if (modalWindow === "Выполнено") {
    root?.classList.add(styles.root);
  }
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.main}
    >
      <div className={styles.modal}>
        <p>
          Заказ успешно создан! <br></br>Скоро с вами свяжется оператор
        </p>
        <button
          onClick={() => {
            setModalWindow("Не выполняется");
            root?.classList.remove(styles.root);
            navigate("/");
            scroll.scrollToTop();

            // scroller.scrollTo(toogleCategory, {
            //   duration: 500,
            //   delay: 50,
            //   smooth: true,

            // });
          }}
        >
          Хорошо!
        </button>
      </div>
    </motion.div>
  );
};

export default ModalSucces;
