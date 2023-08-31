import { useState } from "react";
import styles from "./12. UserProfile.module.scss";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  const [isChangeName, setIsChangedName] = useState(false);
  const auth: any = getAuth();
  const [name, setName] = useState(auth.currentUser.displayName);
  const userSlice = useSelector((state) => state.UserSlice);
  console.log("userSlice", userSlice);
  console.log("auth.currentUser", auth.currentUser);
  console.log("name", name);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
        value={isChangeName ? name : auth.currentUser.displayName}
        disabled={isChangeName ? false : true}
      />
      <button onClick={() => setIsChangedName(true)}>Изменить</button>
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
    </div>
  );
};

export default UserProfile;
