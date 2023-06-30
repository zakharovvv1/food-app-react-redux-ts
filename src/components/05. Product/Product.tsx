import styles from "./Product.module.css";
import buyImg from "./assets/Buy.svg";
import { buySlice } from "../../store/buySlice/buySlice";
import { useDispatch, useSelector } from "react-redux";
import { IProps } from "../Interfaces/IProps";
import { IStateBuy } from "../Interfaces/IStateBuy";
import { useNavigate } from "react-router-dom";
const Product: React.FC<{ food: IProps }> = ({ food }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buy = useSelector((state) => (state as IStateBuy).reducerBuy);
  console.log("В корзине", buy);
  return (
    <div>
      <div className={styles.mainDivCategory}>
        <div className={styles.product}>
          <a className={styles.productLink} href="#">
            {/* {props.count ? (
                            <div className={styles.count}>
                                <div className={styles['count-text']}>{props.count}</div>
                            </div>) : ''
                        } */}

            <img
              className={styles.productImage}
              onClick={() => navigate(`/${food.id}`)}
              src={food.imgUrlSmall}
            />

            <div className={styles.description}>
              <div className={styles["title-block"]}>
                <span className={styles.title}>{food.name}</span>
                <span className={styles.weight}>Вес: {food.weight} г</span>
              </div>
              <p className={styles.text}>{food.description}</p>
            </div>
          </a>
          <div className={styles["price-block"]}>
            {buy.length !== 0 ? (
              buy.includes(food) ? (
                <div className={styles["price-block-flex"]}>
                  <div className={styles.priceInBuy}>{food.price + " ₽"}</div>
                  <button
                    onClick={() => dispatch(buySlice.actions.addToBuy(food))}
                    className={styles.btnToBuy}
                  >
                    <div>Уже в корзине</div>
                    <div>
                      <img className={styles.imgBuy} src={buyImg} alt="" />
                    </div>
                  </button>
                </div>
              ) : (
                <div className={styles["price-block-flex"]}>
                  <div className={styles.price}>{food.price + " ₽"}</div>
                  <button
                    onClick={() => dispatch(buySlice.actions.addToBuy(food))}
                    className={styles.btnToBuy}
                  >
                    <div>В корзину</div>
                    <div>
                      <img className={styles.imgBuy} src={buyImg} alt="" />
                    </div>
                  </button>
                </div>
              )
            ) : (
              <div className={styles["price-block-flex"]}>
                <div className={styles.price}>{food.price + " ₽"}</div>
                <button
                  onClick={() => dispatch(buySlice.actions.addToBuy(food))}
                  className={styles.btnToBuy}
                >
                  <div>В корзину</div>
                  <div>
                    <img className={styles.imgBuy} src={buyImg} alt="" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
