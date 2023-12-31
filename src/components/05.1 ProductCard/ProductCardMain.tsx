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
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStateBuy } from "../Interfaces/IStateBuy";
import imageHighForAll from "../06. AllMain/imageHighForAllFoods.jpg";
import imageSmallForAll from "../06. AllMain/imageSmallForAllFoods.jpg";
import { UseCurrentFood } from "./UseLocalCurrentFood";
import { getActiveLink } from "react-scroll/modules/mixins/scroller";
import { getAuth } from "firebase/auth";
import { getHistoryOfOrders } from "../hooks/getHistoryOfOrders";
import { UserSlice } from "../../store/user/UserSlice";
import { useSignIn } from "../hooks/useSignIn";
import { imgToFood } from "../06. AllMain/ImgToFood";
const ProductCardMain = () => {
  useSignIn();
  let { isLoading, data } = useGetFoodQuery();
  console.log(
    "🚀 ~ file: ProductCardMain.tsx:22 ~ ProductCardMain ~ data:",
    data
  );
  const params = useParams();
  console.log("params", params);
  const foods = useSelector((state) => (state as IStateBuy).reducerBuy);
  console.log(
    "🚀 ~ file: ProductCardMain.tsx:25 ~ ProductCardMain ~ foods:",
    foods
  );

  const currentFood = Object.values(foods)
    .filter((arr) => arr.length !== 0)
    .flat()
    .find((food) => {
      return food.id === params.id;
    });
  console.log("currentFood", currentFood);

  const food = UseCurrentFood();

  console.log("foodCurrent!!!!!!!!!!!!!!!!!", food);

  let newData;
  if (data) {
    data = data.map((item: any) => imgToFood(item));

    newData = data.reduce((accum, item) => {
      if (item.id !== food.id) {
        accum.push(item);
      }

      return accum;
    }, []);
  }
  console.log("newData", newData);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <Navbar />
          {currentFood ? (
            <ProductCard food={currentFood} />
          ) : (
            <ProductCard food={food} />
          )}

          <Main
            isLoading={isLoading}
            data={newData}
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
