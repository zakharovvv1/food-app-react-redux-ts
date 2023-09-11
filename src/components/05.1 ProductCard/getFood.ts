import { useGetFoodQuery } from "../API/dadata/dadataApi";

export const getFood = async () => {
  let { isLoading, data } = await useGetFoodQuery();
  return { isLoading, data };
};
