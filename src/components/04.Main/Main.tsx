import Product from "../05. Product/Product";
import styles from "./Main.module.css";
import { IProps } from "../Interfaces/IProps";
interface Main {
  isLoading: boolean;
  data: IProps | any;
  category: string;
}
const Main: React.FC<Main> = ({ isLoading, data, category }) => {
  console.log("Новая дата в main", data);
  return (
    <section className={styles.titleCategory}>
      <h2 className={styles.titleCategoryTitle}>{category}</h2>
      <div className={styles.main}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((food: any) => <Product key={food.id} food={food} />)
        )}
      </div>
    </section>
  );
};

export default Main;
