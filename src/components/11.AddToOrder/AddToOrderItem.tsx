import { useDispatch } from "react-redux";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";
import styles from "./AddToOrder.module.scss";
import add from "./addToOrder.svg";
import { buySlice } from "../../store/buySlice/buySlice";

const AddToOrderItem: React.FC<any> = ({ filterShoppingCart }) => {
  let { isLoading, data } = useGetFoodQuery();
  const dispatch = useDispatch();
  if (data) {
    let data2 = data.map((item: any) => Object.assign({}, item, { count: 1 }));

    const filterShoppingCartArr = filterShoppingCart.flat();
    let newData = data2.reduce((accum, item) => {
      if (!filterShoppingCartArr.find((el) => el.id === item.id)) {
        accum.push(item);
      }

      return accum;
    }, []);

    newData = newData.slice(0, 4);
    return newData.map((el: IProps) => {
      return (
        <div className={styles.divItem}>
          <img className={styles.imgItem} src={el.imgUrlSmall} alt="" />
          <div className={styles.name}>{el.name}</div>
          <div
            onClick={() => dispatch(buySlice.actions.addToBuy(el))}
            className={styles.divAddToOrder}
          >
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
