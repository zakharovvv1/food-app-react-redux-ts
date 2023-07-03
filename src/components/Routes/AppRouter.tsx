import { Routes, BrowserRouter, Route } from "react-router-dom";
import App from "../../App";
import ProductCard from "../05.1 ProductCard/ProductCardMain";
import ProductCardMain from "../05.1 ProductCard/ProductCardMain";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<ProductCardMain />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
