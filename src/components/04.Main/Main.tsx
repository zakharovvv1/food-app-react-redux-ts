import Product from "../05. Product/Product";
import styles from "./Main.module.css";
import { IProps } from "../Interfaces/IProps";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

interface Main {
  isLoading: boolean;
  data: IProps | any;
  category: string;
}
// export const ref = useRef(null);
const Main: React.FC<Main> = ({ isLoading, data, category }) => {
  console.log("Новая дата в main", data);
  debugger;
  return (
    <Element name={category} className={category}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id={category}
        className={styles.titleCategory}
      >
        <h2 className={styles.titleCategoryTitle}>{category}</h2>
        <div className={styles.main}>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data.map((food: any) => <Product key={food.id} food={food} />)
          )}
        </div>
      </motion.section>
    </Element>
  );
};

export default Main;
