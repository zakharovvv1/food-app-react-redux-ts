import Header from "../01.Header/Header";
import Hero from "../02. Hero/Hero";
import { useParams } from "react-router-dom";
import { useGetFoodQuery } from "../API/dadata/dadataApi";
import { IProps } from "../Interfaces/IProps";

import ProductCard from "./ProductCard";
import Navbar from "../03.Navbar/Navbar";
import Product from "../05. Product/Product";
import Main from "../04.Main/Main";
import About from "../07.About/About";
import Contacts from "../08.Contacts/Contacts";
import Footer from "../09.Footer/Footer";

const ProductCardMain = () => {
  const params = useParams();
  let { isLoading, data } = useGetFoodQuery();
  let food;
  if (data) {
    food = data.find((e: IProps) => e.id === params.id);
    data = [...data, data[0], data[1], data[0]];
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
          <Main
            isLoading={isLoading}
            data={data}
            category="С этим товаром покупают"
          />
          <div style={{ paddingTop: 84 }}>
            <Contacts />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductCardMain;
