import Header from "../01.Header/Header";
import Navbar from "../03.Navbar/Navbar";
import styles from "./Ordering.module.scss";
import arrow from "../10.ShoppingCart/Arrow 8.svg";
import { useState } from "react";
import clock from "./img/clock 1.svg";
import Footer from "../09.Footer/Footer";
import validator from "validator";
const Ordering = () => {
  const [activeBtn, setActiveBtn] = useState("Доставка");
  const [payMethod, setpayMethod] = useState("Оплата онлайн");
  const [deliveryTime, setddeliveryTime] = useState("В ближайшее время");
  const [numberOfPersons, setnumberOfPersons] = useState(1);
  const [checkBox, setcheckBox] = useState(false);
  const [restaurant, setRestaurant] = useState("");
  const [nameAndPhone, setNameAndPhone] = useState({ name: "", phone: "" });
  const [validateNumber, setValidateNumber] = useState(
    validator.isMobilePhone(nameAndPhone.phone, ["ru-RU"])
  );
  console.log("validateNumber", validateNumber);
  console.log("nameAndPhone", nameAndPhone);
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.mainDiv}>
        <div className={styles.backAndTitle}>
          <button className={styles.backBtn}>
            <img src={arrow} alt="" />
            <button>в корзину</button>
          </button>
          <div className={styles.title}>Оформление заказа</div>
        </div>
        <div className={styles.contactInfo}>
          <p>1. Контактная информация</p>
          <div className={styles.inputs}>
            <input
              value={nameAndPhone.name}
              onChange={(e) => {
                setNameAndPhone((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
              type="text"
              name=""
              id=""
              placeholder="Имя*"
            />
            <input
              onChange={(e) => {
                setNameAndPhone((prev) => {
                  return {
                    ...prev,
                    phone: e.target.value,
                  };
                });
                setValidateNumber(
                  validator.isMobilePhone(e.target.value, ["ru-RU"])
                );
              }}
              value={nameAndPhone.phone}
              type="text"
              name=""
              id=""
              placeholder="Телефон*"
            />
          </div>
          <div className={styles.warnings}>
            {!nameAndPhone.name && (
              <p className={styles.phoneCheck}>Имя - обязательное поле</p>
            )}
            {!validateNumber && (
              <p
                className={
                  nameAndPhone.name ? styles.phoneCheckTrue : styles.phoneCheck
                }
              >
                Телефон - обязательное поле
              </p>
            )}
          </div>
        </div>
        <div className={styles.contactInfo}>
          <p>2. Доставка</p>
          <div className={styles.btnsAndTime}>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  setActiveBtn("Доставка");
                }}
                className={
                  activeBtn === "Доставка" ? styles.active : styles.noActive
                }
              >
                Доставка
              </button>
              <button
                onClick={() => {
                  setActiveBtn("Самовывоз");
                }}
                className={
                  activeBtn === "Самовывоз" ? styles.active : styles.noActive
                }
              >
                Самовывоз
              </button>
            </div>
            <div className={styles.timeDiv}>
              <img src={clock} alt="" />
              <p className={styles.time}>Доставим через 1 час 30 минут</p>
            </div>
          </div>
          <div className={styles.adressDiv}>
            {activeBtn === "Доставка" && (
              <p className={styles.adressText}>Адрес доставки</p>
            )}
            {activeBtn === "Самовывоз" && (
              <p className={styles.adressText}>Выберите ресторан</p>
            )}
            <div className={styles.adressInputs}>
              {activeBtn === "Доставка" && (
                <>
                  <input
                    className={styles.adressInput}
                    placeholder="Укажите улицу*"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className={styles.adressInput}
                    placeholder="Номер дома*"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className={styles.adressInput}
                    placeholder="№ квартиры/офиса*"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className={styles.adressInput}
                    placeholder="Подъезд*"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className={styles.adressInput}
                    placeholder="Этаж*"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className={styles.adressInput}
                    placeholder="Комментарий*"
                    type="text"
                    name=""
                    id=""
                  />
                </>
              )}
              {activeBtn === "Самовывоз" && (
                <select
                  onChange={(e) => {
                    setRestaurant(e.target.value);
                  }}
                  className={styles.adressInput}
                  name=""
                  id=""
                >
                  <option value={restaurant}>Ресторан 1</option>
                  <option value={restaurant}>Ресторан 2</option>
                  <option value={restaurant}>Ресторан 3</option>
                  <option value={restaurant}>Ресторан 4</option>
                </select>
              )}
            </div>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <p>3. Оплатить</p>
          <div className={styles.payDiv}>
            <div className={styles.buttonsPay}>
              <button
                onClick={() => {
                  setpayMethod("Оплата онлайн");
                }}
                className={
                  payMethod === "Оплата онлайн"
                    ? styles.active
                    : styles.noActive
                }
              >
                Оплата онлайн
              </button>
              <button
                onClick={() => {
                  setpayMethod("Курьеру картой");
                }}
                className={
                  payMethod === "Курьеру картой"
                    ? styles.active
                    : styles.noActive
                }
              >
                Курьеру картой
              </button>
              {
                <button
                  onClick={() => {
                    setpayMethod("Наличными");
                  }}
                  className={
                    payMethod === "Наличными" ? styles.active : styles.noActive
                  }
                >
                  Наличными
                </button>
              }
            </div>
            {payMethod === "Наличными" && (
              <input
                className={styles.adressInput}
                placeholder="Сдача с "
                type="text"
                name=""
                id=""
              />
            )}
          </div>
        </div>
        <div className={styles.deliveryTime}>
          <p>4. Когда доставить</p>
          <div className={styles.deliveryDiv}>
            <div className={styles.deliveryButtons}>
              <div className={styles.leftDivDelivery}>
                <button
                  onClick={() => {
                    setddeliveryTime("В ближайшее время");
                  }}
                  className={
                    deliveryTime === "В ближайшее время"
                      ? styles.active
                      : styles.noActive
                  }
                >
                  В ближайшее время
                </button>
                <button
                  onClick={() => {
                    setddeliveryTime("Ко времени");
                  }}
                  className={
                    deliveryTime === "Ко времени"
                      ? styles.active
                      : styles.noActive
                  }
                >
                  Ко времени
                </button>
              </div>

              {deliveryTime === "Ко времени" ? (
                <input placeholder="Укажите время" type="text" />
              ) : (
                ""
              )}
            </div>
            <div className={styles.mansCount}>
              <div className={styles.countText}>Кол-во персон</div>
              <button
                onClick={() => {
                  setnumberOfPersons((prev) => {
                    if (prev === 1) {
                      return 1;
                    } else {
                      return prev - 1;
                    }
                  });
                }}
                className={styles.counter}
              >
                -
              </button>
              <p>{numberOfPersons}</p>
              <button
                onClick={() => {
                  setnumberOfPersons((prev) => prev + 1);
                }}
                className={styles.counter}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className={styles.callDiv}>
          <p>Хотите мы позвоним?</p>
          <div className={styles.callRadio}>
            <input name="call" id="Не перезванивать" type="radio" />
            <label htmlFor="Не перезванивать">Не перезванивать</label>
          </div>
          <div className={styles.callRadio}>
            <input name="call" id="Потребуется звонок оператора" type="radio" />
            <label htmlFor="Потребуется звонок оператора">
              Потребуется звонок оператора
            </label>
          </div>
        </div>
        <div className={styles.agree}>
          <input
            onChange={() => {
              setcheckBox(!checkBox);
            }}
            type="checkbox"
            name=""
            id=""
          />
          <p>
            Я согласен на обработку моих перс. данных в соответствии с{" "}
            <span>Условиями</span>
          </p>
          <button disabled={checkBox === false} className={styles.checkout}>
            Оформить заказ
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ordering;