import Main from "../04.Main/Main";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
const AllMain: React.FC = () => {
  let { isLoading, data } = useGetFoodQuery();
  if (data) data = [...data, data[0], data[1], data[0], data[1], data[0]];

  return (
    <>
      <Main isLoading={isLoading} data={data} category="Холодные закуски" />
      <Main isLoading={isLoading} data={data} category="Горячие закуски" />
      <Main isLoading={isLoading} data={data} category="Мясные блюда" />
    </>
  );
};

export default AllMain;
