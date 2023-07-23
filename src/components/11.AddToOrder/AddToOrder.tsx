import { useSelector } from "react-redux";
import styles from "./AddToOrder.module.scss";
import AddToOrderItem from "./AddToOrderItem";
import { IProps } from "../Interfaces/IProps";

const AddToOrder: React.FC = () => {
  const buy = useSelector((state) => (state as any).reducerBuy);
  const filterShoppingCart = Object.values(buy).filter((el) => el.length !== 0);

  return (
    <div className={styles.addTo}>
      <div className={styles.title}>ДОБАВИТЬ К ЗАКАЗУ</div>
      <div className={styles.items}>
        <AddToOrderItem filterShoppingCart={filterShoppingCart} />
      </div>
      <div className={styles.orderCheck}>
        <div className={styles.divBack}>
          <div className={styles.left}>
            <div className={styles.total}>
              Итого :{" "}
              <span>
                {filterShoppingCart.reduce((sum: number, el): number => {
                  return (
                    sum +
                    el.reduce((sum: number, food: IProps): number => {
                      return sum + food.price * food.count;
                    }, 0)
                  );
                }, 0)}{" "}
                ₽
              </span>
            </div>
            <div className={styles.notYet}>
              До бесплатной доставки не хватает : <span>100р</span>
            </div>
            <div className={styles.minSumOrder}>
              Минимальная сума заказа 1500 ₽
            </div>
          </div>
          <button className={styles.buyBtnOrder}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default AddToOrder;
