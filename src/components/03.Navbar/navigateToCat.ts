import { useDispatch } from "react-redux";
import { toogleCategories } from "../../store/toogleCategories/toogleCategories";
import { useNavigate } from "react-router";

export const navigateToCat = (category: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(toogleCategories.actions.toggleCategories(category));
  navigate("/");
};
