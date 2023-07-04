import { useSelector } from "react-redux";
import styles from "./AddToOrder.module.scss";
import AddToOrderItem from "./AddToOrderItem";

const AddToOrder: React.FC = () => {
  const buy = useSelector((state) => (state as any).reducerBuy);
  const filterShoppingCart = Object.values(buy).filter((el) => el.length !== 0);

  return (
    <div className={styles.addTo}>
      <div className={styles.title}>ДОБАВИТЬ К ЗАКАЗУ</div>
      <div className={styles.items}>
        <AddToOrderItem />
      </div>
      <div className={styles.orderCheck}>
        <div className={styles.divBack}>
          <div className={styles.left}>
            <div>Итого : 500</div>
            <div>До бесплатной доставки не хватает : 100р</div>
            <div>Минимальная сума заказа 1500 ₽</div>
          </div>
          <button className={styles.buyBtnOrder}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default AddToOrder;
