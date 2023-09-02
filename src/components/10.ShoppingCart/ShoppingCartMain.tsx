import Header from "../01.Header/Header";
import Navbar from "../03.Navbar/Navbar";
import Footer from "../09.Footer/Footer";
import ShoppingCartScreen from "./ShoppingCartScreen";
import { motion } from "framer-motion";
const ShoppingCartMain = () => {
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
