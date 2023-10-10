import { useDispatch } from "react-redux";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";
import styles from "./AddToOrder.module.scss";
import add from "./addToOrder.svg";
import { buySlice } from "../../store/buySlice/buySlice";
import imageHighForAll from "../06. AllMain/imageHighForAllFoods.jpg";
import imageSmallForAll from "../06. AllMain/imageSmallForAllFoods.jpg";
import { useNavigate } from "react-router";
import { currentFoodSlice } from "../../store/currentFoodSlice/currentFoodSlice";

const AddToOrderItem: React.FC<any> = ({ filterShoppingCart }) => {
  let { isLoading, data } = useGetFoodQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (data) {
    let data2 = data.map((item: any) =>
      Object.assign(
        {},
        item,
        { count: 1 },
        { imgUrlHigh: imageHighForAll },
        { imgUrlSmall: imageSmallForAll }
      )
    );

    const filterShoppingCartArr = filterShoppingCart.flat();
    let newData = data2.reduce((accum, item) => {
      if (!filterShoppingCartArr.find((el) => el.id === item.id)) {
        accum.push(item);
      }

      return accum;
    }, []);
    console.log(
      "🚀 ~ file: AddToOrderItem.tsx:34 ~ newData ~ newData:",
      newData
    );

    console.log(
      "🚀 ~ file: AddToOrderItem.tsx:34 ~ newData ~ newData:",
      newData
    );

    newData = newData.slice(0, 4);
    return newData.map((el: IProps) => {
      return (
        <div className={styles.divItem}>
          <img
            className={styles.imgItem}
            onClick={() => {
              dispatch(currentFoodSlice.actions.setCurrentFoodItem(el));
              localStorage.setItem("currentFood", JSON.stringify(el));
              navigate(`/${el.id}`);
            }}
            src={el.imgUrlSmall}
            alt=""
          />
          <div className={styles.itemInfo}>
            <div className={styles.name}>{el.name}</div>
            <div className={styles.btnAddPrice}>
              <button
                onClick={() => dispatch(buySlice.actions.addToBuy(el))}
                className={styles.divAddToOrder}
              >
                <div className={styles.btnAddToOrder}>Добавить</div>
                <button className={styles.addImg}>
                  <img src={add} alt="" />
                </button>
              </button>

              <div className={styles.price}>{el.price} ₽</div>
            </div>
          </div>
        </div>
      );
    });
  }
};

export default AddToOrderItem;
