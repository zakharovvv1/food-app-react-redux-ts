import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "./assets/LOGOS.png";
import caller from "./assets/Calling.png";
import stick from "./assets/Stick.png";
import buyIcon from "./assets/Buy2.png";
import gStick from "./assets/gLine.png";
import search from "./assets/Search.png";
import { IPromtDaData } from "../Interfaces/IHeaders.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IShoppingBasket } from "../Interfaces/IShoppingBasket.js";
import Modal from "../00.Modal/Modal.js";
import { toogleCategories } from "../../store/toogleCategories/toogleCategories";
import logInImg from "./img/Log in.svg";
import LogInModal from "../001.LogInModal/LogInModal.js";
import { CSSTransition } from "react-transition-group";
import shoppingCartImg from "./img/ShoppingCartImg.svg";
import burger from "./img/burger/burger.svg";
import BurgerMenu from "./burgerMenu/BurgerMenu.js";
import { motion } from "framer-motion";
import { fetchAdress } from "../API/dadata/dadataApi.js";
import { UserSlice } from "../../store/user/UserSlice.js";
const Header: React.FC = () => {
  const orderAdressFromLocalStorage = useSelector(
    (state) => state.UserSlice.adressOrder
  );
  console.log(
    "🚀 ~ file: Header.tsx:28 ~ orderAdressFromLocalStorage:",
    orderAdressFromLocalStorage
  );
  const [adress, setAdress] = useState("");
  console.log("🚀 ~ file: Header.tsx:33 ~ adress:", adress);

  useEffect(() => {
    try {
      fetchAdress(adress).then((data) =>
        console.log("data24", setPromt(JSON.parse(data)))
      );
    } finally {
      setAdress(orderAdressFromLocalStorage);
    }
  }, [adress, orderAdressFromLocalStorage]);
  const root = document.getElementById("root");

  const toogleCat = useSelector((state) => state.toogleCategoriesReducer);
  const dispatch = useDispatch();
  const userSlice = useSelector((state) => state.UserSlice);
  const [toggleAdress, setToogleAdress] = useState(false);
  console.log("🚀 ~ file: Header.tsx:29 ~ userSlice:", userSlice);

  console.log("🚀 ~ file: Header.tsx:35 ~ adress:", adress);
  const [promt, setPromt] = useState();
  console.log("🚀 ~ file: Header.tsx:35 ~ promt:", promt);
  const buy: IShoppingBasket = useSelector(
    (state) => (state as any).reducerBuy
  );
  console.log("buy!", buy);
  const [modalWindow, setModalWindow] = useState(false);
  const [logInWindow, setlogInWindow] = useState(false);
  console.log("🚀 ~ file: Header.tsx:58 ~ logInWindow:", logInWindow);
  const [burgerScreen, setburgerScreen] = useState(false);
  console.log("🚀 ~ file: Header.tsx:43 ~ burgerScreen:", burgerScreen);
  const navigate = useNavigate();
  if (modalWindow || logInWindow) {
    root?.classList.add(styles.root);
  } else {
    root?.classList.remove(styles.root);
  }

  return (
    <header id="header" className={styles["header-block"]}>
      {logInWindow && (
        <LogInModal logInWindow={logInWindow} setlogInWindow={setlogInWindow} />
      )}
      <div className={styles.header}>
        <button
          onClick={() => {
            setburgerScreen(true);
          }}
          className={styles["burger-menu"]}
        >
          <img src={burger} alt="menu" />
          <p className={styles.textMenu}>МЕНЮ</p>
        </button>

        <a href="#">
          <img
            className={styles.logo}
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
          />
        </a>
        <input
          className={styles.search}
          type="text"
          placeholder="Введите адрес доставки"
          value={adress}
          onChange={(event) => {
            setAdress(event.target.value);
            setToogleAdress(true);
          }}
        />
        <ul className={styles.promt}>
          {promt && toggleAdress
            ? (promt as any).suggestions.map((p: IPromtDaData, i: number) => {
                return (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={i}
                    onClick={() => {
                      setAdress(p.value);
                      setToogleAdress(false);
                      dispatch(UserSlice.actions.setOrderAdress(p.value));
                      localStorage.setItem("orderAdress", p.value);
                    }}
                  >
                    {p.value}
                  </motion.li>
                );
              })
            : ""}
        </ul>

        <img className={styles.searchImg} src={search} alt="" />

        <div className={styles.contacts}>
          <div className={styles["caller-block"]}>
            <img className={styles.caller} src={caller} />
          </div>
          <div className={styles.phoneNum}>
            <div className={styles["contact-text"]}>Контакты:</div>
            <div className={styles["contact-number"]}>+7 (917) 510-57-59</div>
          </div>
          {userSlice.id ? (
            <a
              className={styles.logIn}
              onClick={() => {
                navigate("/userProfile");
              }}
            >
              <img src={logInImg} className={styles.logInImg}></img>
              {userSlice.name}
            </a>
          ) : (
            <a
              className={styles.logIn}
              onClick={() => {
                setlogInWindow(true);
              }}
            >
              <img src={logInImg} className={styles.logInImg}></img>
              Войти
            </a>
          )}
        </div>
        <button
          onClick={() => {
            if (
              buy.coldAppetizers.length +
                buy.hotAppetizers.length +
                buy.desserts.length +
                buy.beverages.length +
                buy.soups.length +
                buy.specialties.length ===
              0
            ) {
              setModalWindow(true);
            } else {
              navigate("/shoppingCart");
              dispatch(toogleCategories.actions.toggleCategories(null));
            }
          }}
          className={styles.cart}
        >
          <span className={styles["cart-text"]}>Корзина</span>
          <img
            className={styles.shoppingCartImg}
            src={shoppingCartImg}
            alt=""
          />
          <img src={stick} alt="" />
          <span className={styles["cart-count"]}>
            {buy.coldAppetizers.length +
              buy.hotAppetizers.length +
              buy.desserts.length +
              buy.beverages.length +
              buy.soups.length +
              buy.specialties.length}
          </span>
        </button>

        {modalWindow && (
          <CSSTransition
            in={modalWindow}
            classNames="alert"
            timeout={300}
            unmountOnExit
          >
            <Modal setModalWindow={setModalWindow} modalWindow={modalWindow} />
          </CSSTransition>
        )}

        <div className={styles.cart2}>
          <img src={buyIcon} alt="buyIcon" />
          <img src={gStick} alt="" />
          <span>корзина</span>
        </div>

        {burgerScreen && (
          <BurgerMenu
            burgerScreen={burgerScreen}
            setburgerScreen={setburgerScreen}
            name={userSlice.name}
            setLogInWindow={setlogInWindow}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
