import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "./assets/LOGOS.png";
import caller from "./assets/Calling.png";
import stick from "./assets/Stick.png";
import burgerMenu from "./assets/burger.png";
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
import { getHistoryOfOrders } from "../12. UserProfile/getHistoryOfOrders.js";
import { getAuth } from "firebase/auth/cordova";

const Header: React.FC = () => {
  const root = document.getElementById("root");

  const toogleCat = useSelector((state) => state.toogleCategoriesReducer);
  const toogleCategory = toogleCat.category;
  const dispatch = useDispatch();
  const userSlice = useSelector((state) => state.UserSlice);
  console.log("🚀 ~ file: Header.tsx:29 ~ userSlice:", userSlice);

  const [adress, setAdress] = useState("");
  const [promt, setPromt] = useState();
  const buy: IShoppingBasket = useSelector(
    (state) => (state as any).reducerBuy
  );
  console.log("buy!", buy);
  const [modalWindow, setModalWindow] = useState(false);
  const [logInWindow, setlogInWindow] = useState(false);
  const navigate = useNavigate();
  if (modalWindow || logInWindow) {
    root?.classList.add(styles.root);
  } else {
    root?.classList.remove(styles.root);
  }
  // useEffect(() => {
  //   fetchAdress(adress).then((data) => );
  // }, [adress]);

  return (
    <header id="header" className={styles["header-block"]}>
      <div className={styles.header}>
        <button className={styles["burger-menu"]}>
          <img src={burgerMenu} alt="menu" />
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
          onChange={(event) => setAdress(event.target.value)}
        />
        <ul className={styles.promt}>
          {promt
            ? (promt as any).suggestions.map((p: IPromtDaData, i: number) => {
                return (
                  <li key={i} onClick={() => setAdress(p.value)}>
                    {p.value}
                  </li>
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

          {logInWindow && (
            <LogInModal
              logInWindow={logInWindow}
              setlogInWindow={setlogInWindow}
            />
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
      </div>
      <input
        className={styles["search-mobil"]}
        type="text"
        placeholder="Введите адрес доставки"
      />
    </header>
  );
};

export default Header;
