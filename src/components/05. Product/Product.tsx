import styles from "./Product.module.css";
import buyImg from "./assets/Buy.svg";
export interface IProps {
  name: string;
  imgUrl: string;
  price: number;
  description: string;
  weight: number;
}
const Product: React.FC<{ food: IProps }> = ({ food }) => {
  return (
    <div>
      <div className={styles.mainDivCategory}>
        <div className={styles.product}>
          <a href="#">
            {/* {props.count ? (
                            <div className={styles.count}>
                                <div className={styles['count-text']}>{props.count}</div>
                            </div>) : ''
                        } */}
            <img src={food.imgUrl} />
            <div className={styles.description}>
              <div className={styles["title-block"]}>
                <span className={styles.title}>{food.name}</span>
                <span className={styles.weight}>Вес: {food.weight} г</span>
              </div>
              <p className={styles.text}>{food.description}</p>
            </div>
          </a>
          <div className={styles["price-block"]}>
            <div className={styles["price-block-flex"]}>
              <div className={styles.price}>{food.price + " ₽"}</div>
              <button className={styles.btnToBuy}>
                <div>В корзину</div>
                <div>
                  <img className={styles.imgBuy} src={buyImg} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
