import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";
import styles from "./AddToOrder.module.scss";
import add from "./addToOrder.svg";

const AddToOrderItem: React.FC = () => {
  let { isLoading, data } = useGetFoodQuery();
  if (data) {
    data = [...data, data[0], data[1]];
    return data.map((el: IProps) => {
      return (
        <div className={styles.divItem}>
          <img src={el.imgUrlSmall} alt="" />
          <div className={styles.name}>{el.name}</div>
          <div className={styles.divAddToOrder}>
            <button className={styles.btnAddToOrder}>Добавить</button>
            <img src={add} alt="" />
          </div>
          <div className={styles.price}>{el.price} ₽</div>
        </div>
      );
    });
  }
};

export default AddToOrderItem;
