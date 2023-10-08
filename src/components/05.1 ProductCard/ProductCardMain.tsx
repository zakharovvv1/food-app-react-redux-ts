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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IStateBuy } from "../Interfaces/IStateBuy";
import imageHighForAll from "../06. AllMain/imageHighForAllFoods.jpg";
import imageSmallForAll from "../06. AllMain/imageSmallForAllFoods.jpg";

const ProductCardMain = () => {
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
  //*! Сделать сохранение активного блюда в локале
  const food = useSelector((state) => state as IStateBuy).currentFoodReducer
    .currentFoodItem;
  console.log("foodCurrent!!!!!!!!!!!!!!!!!", food);

  let newData;
  if (data) {
    data = data.map((item: any) =>
      Object.assign(
        {},
        item,
        { count: 1 },
        { imgUrlHigh: imageHighForAll },
        { imgUrlSmall: imageSmallForAll }
      )
    );

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
