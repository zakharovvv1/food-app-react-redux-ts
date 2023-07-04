import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";
import styles from "./AddToOrder.module.scss";

const AddToOrderItem: React.FC = () => {
  let { isLoading, data } = useGetFoodQuery();
  if (data) {
    data = [...data, data[0], data[1]];
    return data.map((el: IProps) => {
      return (
        <div className={styles.divItem}>
          <img src={el.imgUrlSmall} alt="" />
          <div>{el.name}</div>
          <div>
            <button>Добавить</button>
            <img src="" alt="" />
          </div>
          <div>{el.price}</div>
        </div>
      );
    });
  }
};

export default AddToOrderItem;
