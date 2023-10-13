import Main from "../04.Main/Main";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";
import imageHighForAll from "../06. AllMain/imageHighForAllFoods.jpg";
import imageSmallForAll from "../06. AllMain/imageSmallForAllFoods.jpg";
import { useDispatch, useSelector } from "react-redux";
import { filterCategories } from "./filterOfCategories";
import { useEffect, useMemo } from "react";
import { UserSlice } from "../../store/user/UserSlice";
import { useSignIn } from "../hooks/useSignIn";
const AllMain: React.FC = () => {
  useSignIn();
  const dispatch = useDispatch();
  const toogleCat = useSelector((state) => state.toogleCategoriesReducer);
  let { isLoading, data } = useGetFoodQuery();
  console.log("data useGetFood", data);
  let newData;
  let arrObjOfAllFoods;
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

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user");
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      console.log(
        'localStorage.getItem("user")',
        JSON.parse(localStorage.getItem("user")).user
      );
      if (userFromLocalStorage !== null) {
        dispatch(
          UserSlice.actions.setUser(JSON.parse(localStorage.getItem("user")))
        );
      }
    }
  }, []);

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
