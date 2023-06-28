import styles from "./ProductCard.module.scss";
import buyImg from "./img/shopping-bag.svg";
import { buySlice } from "../../store/buySlice/buySlice";
import { useDispatch, useSelector } from "react-redux";
import { IProps } from "../Interfaces/IProps";
import { IStateBuy } from "../Interfaces/IStateBuy";
import { useNavigate } from "react-router-dom";
import back from "./img/back.svg";
const Product: React.FC<{ food: IProps }> = ({ food }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buy = useSelector((state) => (state as IStateBuy).reducerBuy);
  console.log("В корзине", buy);
  return (
    <>
      <div className={styles.back}>
        <img className={styles.backImg} src={back} alt="" />
        <button onClick={() => navigate("/")}>Вернуться назад</button>
      </div>

      <div className={styles.mainDivCategory}>
        <div className={styles.product}>
          <div className={styles.mainDiv}>
            <div className={styles.ImgDiv}>
              <img
                className={styles.descImg}
                onClick={() => navigate(`/${food.id}`)}
                src={food.imgUrlHigh}
              />
            </div>
            <div className={styles.description}>
              <div className={styles["title-block"]}>
                <span className={styles.title}>{food.name}</span>
                <p className={styles.text}>{food.composition}</p>
              </div>
              <div className={styles["price-block"]}>
                <div className={styles.weight}>Вес: {food.weight} г</div>

                {buy.length !== 0 ? (
                  buy.includes(food) ? (
                    <div className={styles["price-block-flex"]}>
                      <button
                        onClick={() =>
                          dispatch(buySlice.actions.addToBuy(food))
                        }
                        className={styles.btnToBuy}
                      >
                        <div>Уже в корзине</div>
                        <div>
                          <img className={styles.imgBuy} src={buyImg} alt="" />
                        </div>
                      </button>
                      <div className={styles.price}>{food.price + " ₽"}</div>
                    </div>
                  ) : (
                    <div className={styles["price-block-flex"]}>
                      <button
                        onClick={() =>
                          dispatch(buySlice.actions.addToBuy(food))
                        }
                        className={styles.btnToBuy}
                      >
                        <div>В корзину</div>
                        <div>
                          <img className={styles.imgBuy} src={buyImg} alt="" />
                        </div>
                      </button>
                      <div className={styles.price}>{food.price + " ₽"}</div>
                    </div>
                  )
                ) : (
                  <div className={styles["price-block-flex"]}>
                    <button
                      onClick={() => dispatch(buySlice.actions.addToBuy(food))}
                      className={styles.btnToBuy}
                    >
                      <div>Корзина</div>
                      <div className={styles.imgDivBuy}>
                        <img className={styles.imgBuy} src={buyImg} alt="" />
                      </div>
                    </button>
                    <div className={styles.price}>{food.price + " ₽"}</div>
                  </div>
                )}
                <ul className={styles.bzu}>
                  <li>Белки</li>
                  <li>Жиры</li>
                  <li>Углеводы</li>
                  <li>Ккал</li>
                  <li>Вес</li>
                </ul>
                <ul className={styles.bzuNumbers}>
                  <li>{food.proteins}</li>
                  <li>{food.fats}</li>
                  <li>{food.carbohydrates}</li>
                  <li>{food.kilocalories}</li>
                  <li>{food.weight}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
