import Header from "../01.Header/Header";
import Hero from "../02. Hero/Hero";
import { useParams } from "react-router-dom";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";

import ProductCard from "./ProductCard";
import Navbar from "../03.Navbar/Navbar";

const ProductCardMain = () => {
  const params = useParams();
  let { isLoading, data } = useGetFoodQuery();
  let food;
  if (data) {
    food = data.find((e: IProps) => e.id === params.id);
  }
  console.log("Food", food);
  console.log("Data", data);
  console.log(params);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <Navbar />
          <ProductCard food={food} />
        </>
      )}
    </>
  );
};

export default ProductCardMain;
