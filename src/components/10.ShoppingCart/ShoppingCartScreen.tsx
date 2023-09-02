import styles from "./ShoppingCartScreen.module.scss";
import arrow from "./Arrow 8.svg";
import { useDispatch, useSelector } from "react-redux";
import { IProps } from "../Interfaces/IProps";
import imgDelete from "./deleteFood.svg";
import minus from "./minus.svg";
import plus from "./plus.svg";
import AddToOrder from "../11.AddToOrder/AddToOrder";
import { buySlice } from "../../store/buySlice/buySlice";
import { useNavigate } from "react-router";
const ShoppingCartScreen = () => {
  const buy = useSelector((state) => (state as any).reducerBuy);

  const filterShoppingCartStart = Object.values(buy);
  const filterShoppingCart = Object.values(buy).filter((el) => el.length !== 0);

  const navigate = useNavigate();
  let shoppingCartLength = filterShoppingCart.map((el) => {
    if (el.length === 0) {
      return false;
    } else {
      return true;
    }
  });

  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.topMainDiv}>
        <div className={styles.topDiv}>
          <img className={styles.arrow} src={arrow} alt="" />
          <button>к выборю блюда</button>
        </div>
        <div className={styles.textBag}>Корзина</div>
        <div className={styles.mainScreen}>
          <div className={styles.items}>
            {shoppingCartLength.length !== 0 ? (
              filterShoppingCart.map((el) => {
                return el.map((food: IProps) => {
                  return (
                    <div className={styles.item}>
                      <img
                        className={styles.foodImg}
                        src={food.imgUrlSmall}
                        alt=""
                        onClick={() => navigate(`/${food.id}`)}
                      />
                      <div className={styles.desc}>
                        <div className={styles.foodName}>{food.name}</div>
                        <div className={styles.foodComposition}>
                          {food.composition}
                        </div>
                      </div>
                      <div className={styles.count}>
                        <button
                          onClick={() =>
                            dispatch(buySlice.actions.removeFromBuy(food))
                          }
                          className={styles.imgMinus}
                        >
                          <img src={minus} />
                        </button>

                        <div className={styles.countNumber}>{food.count}</div>
                        <button
                          onClick={() =>
                            dispatch(buySlice.actions.addToBuy(food))
                          }
                          className={styles.imgPlus}
                        >
                          <img src={plus} />
                        </button>
                        <div className={styles.price}>{food.price} ₽</div>
                        <div
                          onClick={() =>
                            dispatch(buySlice.actions.deleteFromBuy(food))
                          }
                          className={styles.imgDelete}
                        >
                          <img src={imgDelete} />
                        </div>
                      </div>
                    </div>
                  );
                });
              })
            ) : (
              <div className={styles.emptyShoppingCart}>
                В корзине ничего нет
              </div>
            )}
          </div>
        </div>
      </div>
      <AddToOrder />
    </>
  );
};
export default ShoppingCartScreen;
