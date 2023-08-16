import Main from "../04.Main/Main";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";
import imageHighForAll from "../06. AllMain/imageHighForAllFoods.jpg";
import imageSmallForAll from "../06. AllMain/imageSmallForAllFoods.jpg";

const AllMain: React.FC = () => {
  let { isLoading, data } = useGetFoodQuery();

  let newData;
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
  }

  return (
    <>
      <Main
        isLoading={isLoading}
        data={newData?.coldAppetizers}
        category="Холодные закуски"
      />
      <Main
        isLoading={isLoading}
        data={newData?.hotAppetizers}
        category="Горячие закуски"
      />
      <Main isLoading={isLoading} data={newData?.dessert} category="Десерты" />
    </>
  );
};

export default AllMain;
