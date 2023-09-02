import { useState } from "react";
import styles from "./12. UserProfile.module.scss";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import Header from "../01.Header/Header";
import Navbar from "../03.Navbar/Navbar";
import { motion } from "framer-motion";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { toogleCategories } from "../../store/toogleCategories/toogleCategories";
import Footer from "../09.Footer/Footer";
const daysOfMoth = [
  "День",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
const moths = ["Месяц", "Января", "Февраля", "Марта", "Апреля"];
const UserProfile = () => {
  const [isChangeName, setIsChangedName] = useState(false);
  const auth: any = getAuth();
  const [name, setName] = useState(auth.currentUser.displayName);
  const userSlice = useSelector((state) => state.UserSlice);
  const dispatch = useDispatch();
  const [select, setSelect] = useState({ day: "День", month: "Месяц" });

  dispatch(toogleCategories.actions.toggleCategories(""));
  console.log("select", select);
  return (
    <>
      <Header />
      <Navbar />
      <h2 className={styles.h2}>Личные данные</h2>
      <div className={styles.main}>
        <div className={styles.name}>
          <div className={styles.item}>
            <p>Имя</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Имя"
              value={isChangeName ? name : auth.currentUser.displayName}
              disabled={isChangeName ? false : true}
            />
          </div>

          <div className={styles.buttons}>
            <button onClick={() => setIsChangedName(true)}>Изменить</button>
            {isChangeName && (
              <button
                onClick={() => {
                  setIsChangedName(false);
                  auth.currentUser.displayName = name;
                  updateProfile(auth.currentUser!, {
                    displayName: name,
                  }).then((user) => dispatch(userSlice.actions.setUser(user)));
                }}
              >
                Сохранить
              </button>
            )}
          </div>
        </div>
        <div className={styles.email}>
          <p>Эл. почта</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Имя"
            value={auth.currentUser.email}
            disabled={true}
          />
        </div>
        <div className={styles.dayOfBirth}>
          <p>День рождения</p>
          <select
            onChange={(e) => {
              setSelect((prev) => {
                return {
                  ...prev,
                  day: e.target.value,
                };
              });
            }}
            name=""
            id=""
          >
            {daysOfMoth.map((day) => (
              <option value={day}>{day}</option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setSelect((prev) => {
                return {
                  ...prev,
                  month: e.target.value,
                };
              });
            }}
            name=""
            id=""
          >
            {moths.map((moth) => (
              <option value={moth}>{moth}</option>
            ))}
          </select>
          {select.day !== daysOfMoth[0] && select.month !== moths[0] ? (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              className={styles.birthBtn}
            >
              Сохранить
            </motion.button>
          ) : (
            ""
          )}
        </div>

        <div className={styles.history}>
          <p>История заказов</p>
          <p>Последние 90 дней заказов не было</p>
        </div>
        <button
          onClick={() => {
            const db = getDatabase();
            set(ref(db, "users/" + 12345), {
              username: "Oleg",
              email: "123@mail.ru",
              profile_picture: "wefwefwe",
            });
          }}
        >
          Записать в базу
        </button>
        <button
          onClick={() => {
            const db = getDatabase();
            const starCountRef = ref(db, "users/" + 12345);
            onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
              console.log("data из базы данных", data);
            });
          }}
        >
          Извлечь из базы
        </button>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
