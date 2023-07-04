import { Routes, BrowserRouter, Route } from "react-router-dom";
import App from "../../App";
import ProductCard from "../05.1 ProductCard/ProductCardMain";
import ProductCardMain from "../05.1 ProductCard/ProductCardMain";
import ShoppingCartMain from "../10.ShoppingCart/ShoppingCartMain";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<ProductCardMain />} />
        <Route path="/shoppingCart" element={<ShoppingCartMain />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
