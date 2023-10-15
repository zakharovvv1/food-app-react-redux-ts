import Main from "../04.Main/Main";
import { IProps } from "../Interfaces/IProps";
import imageHighForAll from "../06. AllMain/imageHighForAllFoods.jpg";
import imageSmallForAll from "../06. AllMain/imageSmallForAllFoods.jpg";
import { useDispatch, useSelector } from "react-redux";
import { filterCategories } from "./filterOfCategories";
import { useSignIn } from "../hooks/useSignIn";
import { imgToFood } from "./ImgToFood";
const AllMain: React.FC = () => {
  let { isLoading, data } = useSignIn();
  const dispatch = useDispatch();
  const toogleCat = useSelector((state) => state.toogleCategoriesReducer);

  console.log("data useGetFood", data);
  let newData;
  let arrObjOfAllFoods;
  if (data) {
    console.log(data);
    let data2 = data.map((item: any) => imgToFood(item));
    newData = {
      coldAppetizers: data2.filter(
        (el: IProps) => el.category === "Холодные закуски"
      ),
      beverages: data2.filter((el: IProps) => el.category === "Напитки"),
      soups: data2.filter((el: IProps) => el.category === "Супы"),
      hotAppetizers: data2.filter(
        (el: IProps) => el.category === "Горячие закуски"
      ),
      dessert: data2.filter((el: IProps) => el.category === "Десерты"),
      specialties: data2.filter(
        (el: IProps) => el.category === "Фирменные блюда"
      ),
    };

    arrObjOfAllFoods = Object.values(newData).flat();

    console.log("Все блюда", newData);
  }

  const toogleCategory = toogleCat.category;

  const filteredCat = filterCategories(
    newData,
    toogleCategory,
    arrObjOfAllFoods
  );

  return (
    <>
      <Main
        isLoading={isLoading}
        data={filteredCat ? filteredCat?.filteredCat : newData?.hotAppetizers}
        category={filteredCat ? toogleCategory : "Холодные закуски"}
      />
      <Main
        isLoading={isLoading}
        data={newData?.coldAppetizers}
        category="Горячие закуски"
      />
      <Main isLoading={isLoading} data={newData?.dessert} category="Десерты" />
    </>
  );
};

export default AllMain;
