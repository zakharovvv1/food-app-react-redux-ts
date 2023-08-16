import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "./assets/LOGOS.png";
import caller from "./assets/Calling.png";
import stick from "./assets/Stick.png";
import burgerMenu from "./assets/burger.png";
import buyIcon from "./assets/Buy2.png";
import gStick from "./assets/gLine.png";
import search from "./assets/Search.png";
import { fetchAdress } from "../API/dadata/dadataApi.js";
import { useEffect } from "react";
import { IPromtDaData } from "../Interfaces/IHeaders.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IShoppingBasket } from "../Interfaces/IShoppingBasket.js";
import Modal from "../00.Modal/Modal.js";
const Header: React.FC = () => {
  const [adress, setAdress] = useState("");
  const [promt, setPromt] = useState();
  const buy: IShoppingBasket = useSelector(
    (state) => (state as any).reducerBuy
  );
  const [modalWindow, setModalWindow] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchAdress(adress).then((data) => );
  // }, [adress]);

  return (
    <header className={styles["header-block"]}>
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
          <div>
            <div className={styles["contact-text"]}>Контакты:</div>
            <div className={styles["contact-number"]}>+7 (917) 510-57-59</div>
          </div>
        </div>
        <button
          onClick={() => {
            if (
              buy.coldAppetizers.length +
                buy.hotAppetizers.length +
                buy.desserts.length ===
              0
            ) {
              setModalWindow(true);
            } else {
              navigate("/shoppingCart");
            }
          }}
          className={styles.cart}
        >
          <span className={styles["cart-text"]}>Корзина</span>
          <img src={stick} alt="" />
          <span className={styles["cart-count"]}>
            {buy.coldAppetizers.length +
              buy.hotAppetizers.length +
              buy.desserts.length}
          </span>
        </button>
        {modalWindow && (
          <Modal setModalWindow={setModalWindow} modalWindow={modalWindow} />
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
