import { useState } from "react";
import styles from "./LogInModal.module.scss";
import exitImg from "./img/exit.svg";
import { motion } from "framer-motion";
import { initializeApp } from "firebase/app";
import { UserSlice } from "../../store/user/UserSlice";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import SuccesSignUp from "./SuccesSignUp/SuccesSignUp";
import firebase from "firebase/compat/app";
const LogInModal = ({ logInWindow, setlogInWindow }) => {
  const [error, setError] = useState({
    errorSignUp: false,
    errorSignIn: false,
  });
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  console.log("UserSlice", UserSlice.actions);
  const userSlice = useSelector((state) => state.UserSlice);
  console.log("userSlice", userSlice);
  const handleLogin = (email, password) => {
    const auth = getAuth();
    (async () => {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);

        setlogInWindow(false);
        dispatch(UserSlice.actions.setUser(res.user));
      } catch (e) {
        setError({ errorSignIn: true, errorSignUp: false });
        console.error("Ошибка" + e);
      }
    })();
  };

  const signUp = (email, password) => {
    const auth = getAuth();
    (async () => {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        setlogInWindow(false);
        dispatch(UserSlice.actions.setUser(res.user));
      } catch (e) {
        setError({ errorSignIn: false, errorSignUp: true });

        debugger;
        console.error("Ошибка при регистрации" + e);
      }
    })();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.logInForm}
    >
      <img
        onClick={() => {
          setlogInWindow(false);
        }}
        className={styles.exitImg}
        src={exitImg}
        alt="Закрыть окно"
      />
      <div className={styles.logInTitle}>Войти в личный кабинет</div>
      <form action="">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Электронная почта"
          type="text"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Пароль"
          type="password"
        />
        {error.errorSignUp && (
          <motion.p
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: 0 }}
            className={styles.errorMessage}
          >
            Пользователь с таким email уже существует
          </motion.p>
        )}
        {error.errorSignIn && (
          <motion.p
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: 0 }}
            className={styles.errorMessage}
          >
            Неверное имя пользователя или пароль
          </motion.p>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email, pass);
          }}
          className={styles.logInBtn}
        >
          Войти
        </button>
        <div style={{ textAlign: "center" }}>Еще не зарегистирированы? </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signUp(email, pass);
          }}
          className={styles.logInBtn}
        >
          Зарегистрироваться
        </button>
      </form>
    </motion.div>
  );
};

export default LogInModal;
