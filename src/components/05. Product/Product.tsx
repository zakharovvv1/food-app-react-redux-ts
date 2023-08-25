import styles from "./Product.module.css";
import buyImg from "./assets/Buy.svg";
import { buySlice } from "../../store/buySlice/buySlice";
import { useDispatch, useSelector } from "react-redux";
import { IProps } from "../Interfaces/IProps";

import { useNavigate } from "react-router-dom";
import { IShoppingBasket } from "../Interfaces/IShoppingBasket";
import { currentFoodSlice } from "../../store/currentFoodSlice/currentFoodSlice";
const Product: React.FC<{ food: IProps }> = ({ food }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buy: IShoppingBasket = useSelector((state: any) => state.reducerBuy);

  if (buy) {
    // Реализация через обычный цикл
    // let test = Object.values(buy);
    // for (let j = 0; j < test.length; j++) {
    //   for (let i = 0; i < test[j].length; i++) {
    //     if (test[j][i].id === food.id) {
    //       debugger;
    //       count = test[j][i].count;
    //       console.log("COUNT", count);
    //       break;
    //     }
    //   }
    // }
    // console.log("Object.values(buy)", Object.values(buy));
    // Object.values(buy).find((f) => {
    //   return f.find((food2) => {
    //     if (food2.id === food.id) {
    //       return food2;
    //     }
    //   });
    // })[0].count;

    // console.log("Test", test);

    return (
      <div>
        <div className={styles.mainDivCategory}>
          <div className={styles.product}>
            <a href="#header" className={styles.productLink}>
              {/* {props.count ? (
                            <div className={styles.count}>
                                <div className={styles['count-text']}>{props.count}</div>
                            </div>) : ''
                        } */}

              <img
                className={styles.productImage}
                onClick={() => {
                  navigate(`/${food.id}`);
                  dispatch(currentFoodSlice.actions.setCurrentFoodItem(food));
                }}
                src={food.imgUrlSmall}
              />
            </a>
            <div className={styles.description}>
              <div className={styles["title-block"]}>
                <span className={styles.title}>{food.name}</span>
                <span className={styles.weight}>Вес: {food.weight} г</span>
              </div>
              <p className={styles.text}>{food.description}</p>
            </div>
            <div className={styles["price-block"]}>
              {buy ? (
                Object.values(buy).find((f) => {
                  if (f.some((food2) => food2.id === food.id)) {
                    ("TRUE");
                    return true;
                  } else {
                    ("FALSE");
                    return false;
                  }
                }) ? (
                  <div className={styles["price-block-flex"]}>
                    <button
                      onClick={() => dispatch(buySlice.actions.addToBuy(food))}
                      className={styles.btnToBuyInBuy}
                    >
                      +
                    </button>
                    {/* <div className={styles.count}>{count}</div> */}
                    <div className={styles.count}>
                      {Object.values(buy).map((f) => {
                        return f.map((food2: IProps) => {
                          if (food2.id === food.id) {
                            return food2.count;
                          }
                        });
                      })}
                    </div>

                    <div className={styles.priceInBuy}>{food.price + " ₽"}</div>
                    <button
                      className={styles.btnToBuyInBuy}
                      onClick={() =>
                        dispatch(buySlice.actions.removeFromBuy(food))
                      }
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <div className={styles["price-block-flex"]}>
                    <div className={styles.price}>{food.price + " ₽"}</div>
                    <button
                      onClick={() => dispatch(buySlice.actions.addToBuy(food))}
                      className={styles.btnToBuy}
                    >
                      <div className={styles.inBag}>В корзину</div>
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
                    <div className={styles.inBag}>В корзину</div>
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
  }
};

export default Product;
