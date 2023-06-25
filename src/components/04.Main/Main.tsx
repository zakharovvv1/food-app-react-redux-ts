import Product from "../05. Product/Product";
import styles from "./Main.module.css";
import { IProps } from "../05. Product/Product";
interface Main {
  isLoading: boolean;
  data: IProps | any;
  category: string;
}
const Main: React.FC<Main> = ({ isLoading, data, category }) => {
  return (
    <section className={styles.titleCategory}>
      <h2 className={styles.titleCategoryTitle}>{category}</h2>
      <div className={styles.main}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((food: any, i: number) => <Product key={i} food={food} />)
        )}
      </div>
    </section>
  );
};

export default Main;
