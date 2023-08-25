import { useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toogleCategories } from "../../store/toogleCategories/toogleCategories";
import { useNavigate, useParams } from "react-router";
import { Link, scroller } from "react-scroll";
import * as Scroll from "react-scroll";
let scroll = Scroll.animateScroll;

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUrl = window.location.pathname;
  const toogleCat = useSelector((state) => state.toogleCategoriesReducer);
  const toogleCategory = toogleCat.category;

  console.log("currentUrl", currentUrl);
  useEffect(() => {
    scroller.scrollTo(toogleCategory, {
      duration: 500,
      delay: 50,
      smooth: true,
    });
  }, [currentUrl, toogleCategory]);
  const navigateToCat = (category: string) => {
    dispatch(toogleCategories.actions.toggleCategories(category));
    navigate("/");
    console.log("category", category);
  };

  console.log("toogleCat", toogleCat);

  // console.log("refCurrent", ref);
  return (
    <ul className={styles.navbar}>
      <li>
        <a
          className={
            toogleCat.category === "Холодные закуски" ? styles.active : ""
          }
          // onClick={() => {
          //   ref.current.scrollIntoView({
          //     block: "nearest",
          //     behavior: "smooth",
          //   });
          // }}
          onClick={() => navigateToCat("Холодные закуски")}
        >
          Холодные закуски
        </a>
      </li>
      <li>
        <a
          className={
            toogleCat.category === "Горячие закуски" ? styles.active : ""
          }
          onClick={() => navigateToCat("Горячие закуски")}
        >
          Горячие закузки
        </a>
      </li>
      <li>
        <a
          className={toogleCat.category === "Мясные блюда" ? styles.active : ""}
          onClick={() => navigateToCat("Мясные блюда")}
        >
          Мясные блюда
        </a>
      </li>
      <li>
        <a
          className={toogleCat.category === "Супы" ? styles.active : ""}
          onClick={() => navigateToCat("Супы")}
        >
          Супы
        </a>
      </li>
      <li>
        <a
          className={toogleCat.category === "Рыбные блюда" ? styles.active : ""}
          onClick={() => navigateToCat("Рыбные блюда")}
        >
          Рыбные блюда
        </a>
      </li>
      <li>
        <a
          className={toogleCat.category === "Гриль меню" ? styles.active : ""}
          onClick={() => navigateToCat("Десерты")}
        >
          Десерты
        </a>
      </li>
      <li>
        <a
          className={
            toogleCat.category === "Фирменные блюда" ? styles.active : ""
          }
          onClick={() => navigateToCat("Фирменные блюда")}
        >
          Фирменные блюда
        </a>
      </li>
      <li>
        <a
          className={toogleCat.category === "Напитки" ? styles.active : ""}
          onClick={() => navigateToCat("Напитки")}
        >
          Напитки
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
