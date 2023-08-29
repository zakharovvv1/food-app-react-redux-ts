import { Routes, BrowserRouter, Route, useLocation } from "react-router-dom";
import App from "../../App";
import ProductCard from "../05.1 ProductCard/ProductCardMain";
import ProductCardMain from "../05.1 ProductCard/ProductCardMain";
import ShoppingCartMain from "../10.ShoppingCart/ShoppingCartMain";
import { AnimatePresence } from "framer-motion";
import UserProfile from "../12. UserProfile/12. UserProfile";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<ProductCardMain />} />
        <Route path="/shoppingCart" element={<ShoppingCartMain />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
