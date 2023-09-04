import Header from "../01.Header/Header";
import Navbar from "../03.Navbar/Navbar";
import styles from "./Ordering.module.scss";
import arrow from "../10.ShoppingCart/Arrow 8.svg";
import { useState } from "react";
import clock from "./img/clock 1.svg";
import Footer from "../09.Footer/Footer";
import validator from "validator";
import { checkoutOrder } from "./Checkout";
import { IShoppingBasket } from "../Interfaces/IShoppingBasket";
import { useSelector } from "react-redux";
const Ordering = () => {
  const [checkBox, setcheckBox] = useState(false);
  const shoppingBag: IShoppingBasket = useSelector(
    (state) => (state as any).reducerBuy
  );
  const [deliverInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    deliveryMethod: {
      pickup: true,
      restaurant: "",
      delivery: false,
      deliveryInfo: {
        street: "",
        numOfHome: "",
        apartmentNum: null,
        entrance: null,
        floor: null,
        comment: "",
      },
    },
    paymentMethod: "Оплата онлайн",
    deliveryTime: {
      inTheNearFuture: true,
      inTime: "",
    },
    numberOfPersons: 1,
    isCalling: false,
  });
  console.log("deliverInfo", deliverInfo);
  const [validateNumber, setValidateNumber] = useState(
    validator.isMobilePhone(deliverInfo.phone, ["ru-RU"])
  );
  console.log("validateNumber", validateNumber);

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
              value={deliverInfo.name}
              onChange={(e) => {
                setDeliveryInfo((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
              type="text"
              name=""
              id=""
              placeholder="Имя*"
            />
            <input
              onChange={(e) => {
                setDeliveryInfo((prev) => {
                  return {
                    ...prev,
                    phone: e.target.value,
                  };
                });
                setValidateNumber(
                  validator.isMobilePhone(e.target.value, ["ru-RU"])
                );
              }}
              value={deliverInfo.phone}
              type="text"
              name=""
              id=""
              placeholder="Телефон*"
            />
          </div>
          <div className={styles.warnings}>
            {!deliverInfo.name && (
              <p className={styles.phoneCheck}>Имя - обязательное поле</p>
            )}
            {!validateNumber && (
              <p
                className={
                  deliverInfo.name ? styles.phoneCheckTrue : styles.phoneCheck
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
                  setDeliveryInfo((prev) => {
                    return {
                      ...prev,
                      deliveryMethod: {
                        ...prev.deliveryMethod,
                        delivery: true,
                        pickup: false,
                      },
                    };
                  });
                }}
                className={
                  deliverInfo.deliveryMethod.delivery === true
                    ? styles.active
                    : styles.noActive
                }
              >
                Доставка
              </button>
              <button
                onClick={() => {
                  setDeliveryInfo((prev) => {
                    return {
                      ...prev,
                      deliveryMethod: {
                        ...prev.deliveryMethod,
                        delivery: false,
                        pickup: true,
                      },
                    };
                  });
                }}
                className={
                  deliverInfo.deliveryMethod.pickup === true
                    ? styles.active
                    : styles.noActive
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
            {deliverInfo.deliveryMethod.delivery === true && (
              <p className={styles.adressText}>Адрес доставки</p>
            )}
            {deliverInfo.deliveryMethod.pickup === true && (
              <p className={styles.adressText}>Выберите ресторан</p>
            )}
            <div className={styles.adressInputs}>
              {deliverInfo.deliveryMethod.delivery === true && (
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
              {deliverInfo.deliveryMethod.pickup === true && (
                <select
                  onChange={(e) => {
                    setDeliveryInfo((prev) => {
                      console.log("e.target", e.target.value);
                      debugger;
                      return {
                        ...prev,
                        deliveryMethod: {
                          ...prev.deliveryMethod,
                          pickup: true,
                          restaurant: e.target.value,
                        },
                      };
                    });
                  }}
                  className={styles.adressInput}
                  name=""
                  id=""
                >
                  <option value="Ресторан 1">Ресторан 1</option>
                  <option value="Ресторан 2">Ресторан 2</option>
                  <option value="Ресторан 3">Ресторан 3</option>
                  <option value="Ресторан 4">Ресторан 4</option>
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
                  setDeliveryInfo((prev) => {
                    return {
                      ...prev,
                      paymentMethod: "Оплата онлайн",
                    };
                  });
                }}
                className={
                  deliverInfo.paymentMethod === "Оплата онлайн"
                    ? styles.active
                    : styles.noActive
                }
              >
                Оплата онлайн
              </button>
              <button
                onClick={() => {
                  setDeliveryInfo((prev) => {
                    return {
                      ...prev,
                      paymentMethod: "Курьеру картой",
                    };
                  });
                }}
                className={
                  deliverInfo.paymentMethod === "Курьеру картой"
                    ? styles.active
                    : styles.noActive
                }
              >
                Курьеру картой
              </button>
              {
                <button
                  onClick={() => {
                    setDeliveryInfo((prev) => {
                      return {
                        ...prev,
                        paymentMethod: "Наличными",
                      };
                    });
                  }}
                  className={
                    deliverInfo.paymentMethod === "Наличными"
                      ? styles.active
                      : styles.noActive
                  }
                >
                  Наличными
                </button>
              }
            </div>
            {deliverInfo.paymentMethod === "Наличными" && (
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
                    setDeliveryInfo((prev) => {
                      return {
                        ...prev,
                        deliveryTime: {
                          ...prev.deliveryTime,
                          inTheNearFuture: true,
                        },
                      };
                    });
                  }}
                  className={
                    deliverInfo.deliveryTime.inTheNearFuture === true
                      ? styles.active
                      : styles.noActive
                  }
                >
                  В ближайшее время
                </button>
                <button
                  onClick={() => {
                    setDeliveryInfo((prev) => {
                      return {
                        ...prev,
                        deliveryTime: {
                          ...prev.deliveryTime,
                          inTheNearFuture: false,
                        },
                      };
                    });
                  }}
                  className={
                    deliverInfo.deliveryTime.inTheNearFuture === false
                      ? styles.active
                      : styles.noActive
                  }
                >
                  Ко времени
                </button>
              </div>

              {deliverInfo.deliveryTime.inTheNearFuture === false ? (
                <input
                  value={deliverInfo.deliveryTime.inTime}
                  placeholder="Укажите время"
                  type="text"
                />
              ) : (
                ""
              )}
            </div>
            <div className={styles.mansCount}>
              <div className={styles.countText}>Кол-во персон</div>
              <button
                onClick={() => {
                  setDeliveryInfo((prev: any) => {
                    if (prev.numberOfPersons === 1) {
                      return { ...prev, numberOfPersons: 1 };
                    } else {
                      return {
                        ...prev,
                        numberOfPersons: prev.numberOfPersons - 1,
                      };
                    }
                  });
                }}
                className={styles.counter}
              >
                -
              </button>
              <p>{deliverInfo.numberOfPersons}</p>
              <button
                onClick={() => {
                  setDeliveryInfo((prev: any) => {
                    return {
                      ...prev,
                      numberOfPersons: prev.numberOfPersons + 1,
                    };
                  });
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
          <button
            onClick={checkoutOrder.bind(shoppingBag, deliverInfo)}
            disabled={
              checkBox === false ||
              deliverInfo.name === "" ||
              validateNumber === false
            }
            className={styles.checkout}
          >
            Оформить заказ
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ordering;
