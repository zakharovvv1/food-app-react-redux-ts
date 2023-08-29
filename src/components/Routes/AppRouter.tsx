import { Routes, BrowserRouter, Route } from "react-router-dom";
import App from "../../App";
import ProductCard from "../05.1 ProductCard/ProductCardMain";
import ProductCardMain from "../05.1 ProductCard/ProductCardMain";
import ShoppingCartMain from "../10.ShoppingCart/ShoppingCartMain";
import AnimatedRoutes from "./AnimatedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};
export default AppRouter;
