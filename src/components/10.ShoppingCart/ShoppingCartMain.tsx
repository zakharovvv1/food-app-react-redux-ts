import { useEffect } from "react";
import Header from "../01.Header/Header";
import Navbar from "../03.Navbar/Navbar";
import Footer from "../09.Footer/Footer";
import { useSignIn } from "../hooks/useSignIn";
import ShoppingCartScreen from "./ShoppingCartScreen";
import { motion } from "framer-motion";
const ShoppingCartMain = () => {
  useEffect(() => {
    document.title = "Корзина";
  }, []);
  useSignIn();
  return (
    <>
      <Header />
      <Navbar />
      <motion.div>
        <ShoppingCartScreen />
      </motion.div>

      <Footer />
    </>
  );
};

export default ShoppingCartMain;
