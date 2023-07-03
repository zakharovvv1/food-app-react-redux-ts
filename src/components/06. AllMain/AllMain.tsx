import Main from "../04.Main/Main";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
const AllMain: React.FC = () => {
  let { isLoading, data } = useGetFoodQuery();
  let newData;
  if (data) {
    data = [...data, data[0], data[1], data[0], data[1]];
    newData = data.map((item: any) => Object.assign({}, item, { count: 1 }));
  }

  return (
    <>
      <Main isLoading={isLoading} data={newData} category="Холодные закуски" />
      <Main isLoading={isLoading} data={newData} category="Горячие закуски" />
      <Main isLoading={isLoading} data={newData} category="Мясные блюда" />
    </>
  );
};

export default AllMain;
