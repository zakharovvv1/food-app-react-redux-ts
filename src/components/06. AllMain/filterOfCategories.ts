import { IProps } from "../Interfaces/IProps";
import { IShoppingBasket } from "../Interfaces/IShoppingBasket";

export const filterCategories = (
  newData: IShoppingBasket,
  category: string,
  arrObjOfAllFoods: any
) => {
  let filteredCat = [] as IProps[];

  switch (category) {
    case "Мясные блюда":
      const meatsId = [
        "b7b0f3ef-1a39-4ed2-84b9-888652479620",
        "88d7be4d-8009-4880-9c3a-cd6d031da98e",
        "ed537e28-ee8e-42ea-8848-a05995eacd99",
        "8d6d71b4-9f54-4707-b092-23a0850d399f",
        "71631b51-71f6-43fd-80c3-1dd4b45dfce0",
        "e8b7d5c6-abf6-4250-a49c-cade676824be",
      ];
      // Далее просто фильтрация мясных блюд
      for (let i = 0; i < meatsId.length; i++) {
        for (let j = 0; j < arrObjOfAllFoods.length; j++) {
          if (meatsId[i] === arrObjOfAllFoods[j].id) {
            filteredCat.push(arrObjOfAllFoods[j]);
            break;
          }
        }
      }

      console.log("arrObjOfAllFoods", arrObjOfAllFoods);
      return {
        category: category,
        filteredCat: filteredCat,
      };
    case "Супы":
      return {
        category: category,
        filteredCat: newData.soups,
      };
    case "Напитки":
      return {
        category: category,
        filteredCat: newData.beverages,
      };
    case "Фирменные блюда":
      return {
        category: category,
        filteredCat: newData.specialties,
      };
    case "Рыбные блюда":
      const fishIds = [
        "da2a1840-5ca9-4210-b444-6c1ad70475a6",
        "fd01a075-fae3-4869-a0c9-c56e7da11c91",
        "5294ebb0-ba58-4133-a853-a2ff1201dbd3",
        "a291f514-d7a0-45d6-bc02-04b2ca85404d",
        "295569ab-4277-4985-8abb-8d558ee42516",
        "5e11eaf4-423c-4fc2-8f5f-47cc6b3e98c1",
      ];
      filteredCat = [] as IProps[];

      for (let i = 0; i < fishIds.length; i++) {
        for (let j = 0; j < arrObjOfAllFoods.length; j++) {
          if (fishIds[i] === arrObjOfAllFoods[j].id) {
            filteredCat.push(arrObjOfAllFoods[j]);
            break;
          }
        }
      }
      return {
        category: category,
        filteredCat: filteredCat,
      };
  }
};
