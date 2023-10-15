const imgForFoods = {
  "Ассорти северных рыб":
    "/src/components/06. AllMain/imgs/Холодные закуски/Ассорти северных рыб/assortiSevernyhRyb.jpg",
  "Домашние сыры":
    "/src/components/06. AllMain/imgs/Холодные закуски/Домашние сыры/domashnieSyry.jpg",
  "Овощная грядка":
    "/src/components/06. AllMain/imgs/Холодные закуски/Овощная грядка/ovoshnayaGryadka.jpg",
  "Поке с кальмаром":
    "/src/components/06. AllMain/imgs/Холодные закуски/Поке с кальмаром/pokeSKalmarom.jpg",
  "Поке с лососем":
    "/src/components/06. AllMain/imgs/Холодные закуски/Поке с лососем/pokeSLososem.jpg",
  "Сельдь с картофелем":
    "/src/components/06. AllMain/imgs/Холодные закуски/Сельдь с картофелем/seldSKartofelem.jpg",
  "Бакинский кебаб с сыром":
    "/src/components/06. AllMain/imgs/Горячие закуски/Бакинский кебаб с сыром/bkinskiKebabSSyrom.jpg",
  "Куриная печень по-строгановски":
    "/src/components/06. AllMain/imgs/Горячие закуски/Куриная печень по-строгановски/KurinayaPechenPoStroganovski.jpg",
  "Лосось Терияки":
    "/src/components/06. AllMain/imgs/Горячие закуски/Лосось Терияки/lososTeriyaki.jpg",
  "Отбивная из индейки на мангале":
    "/src/components/06. AllMain/imgs/Горячие закуски/Отбивная из индейки на мангале/otbivnayaIzIndeykiNaMangale.jpg",
  "Форель на углях":
    "/src/components/06. AllMain/imgs/Горячие закуски/Форель на углях/forelNaUglyah.jpg",
  "Шаурма с курицей":
    "/src/components/06. AllMain/imgs/Горячие закуски/Шаурма с курицей/shaurmaSKuricei.jpg",
  "Восточная пахлава":
    "/src/components/06. AllMain/imgs/Десерты/Восточная пахлава/vostochnayaPahlava.jpg",
  Наполеон: "/src/components/06. AllMain/imgs/Десерты/Наполеон/napoleon.jpg",
  Медовик: "/src/components/06. AllMain/imgs/Десерты/Медовик/medovik.jpg",
  Сабрис: "/src/components/06. AllMain/imgs/Десерты/Сабрис/Сабрис.jpg",
  "Хрустящие трубочки с варёной сгущёнкой":
    "/src/components/06. AllMain/imgs/Десерты/Хрустящие трубочки с варёной сгущёнкой/trubochkiSoSgushenkoi.jpg",
  "Эклер с маком":
    "/src/components/06. AllMain/imgs/Десерты/Эклер с маком/Эклер с маком.jpg",
  Боржоми: "/src/components/06. AllMain/imgs/Напитки/Боржоми/borzhomi.jpg",
  "Кока-кола": "/src/components/06. AllMain/imgs/Напитки/Кока-кола/Coka.jpg",
  "Морс клюквенный":
    "/src/components/06. AllMain/imgs/Напитки/Морс клюквенный/morsKlukva.jpg",
  "Сок rich апельсиновый":
    "/src/components/06. AllMain/imgs/Напитки/Сок rich апельсиновый/sokRichApelsin.jpg",
  "Сок rich вишневый":
    "/src/components/06. AllMain/imgs/Напитки/Сок rich вишневый/sokRichVishnya.jpg",
  "Сок rich томатный":
    "/src/components/06. AllMain/imgs/Напитки/Сок rich томатный/sokRichTomat.jpg",
  "Кубанский борщ":
    "/src/components/06. AllMain/imgs/Супы/Кубанский борщ/kubanskiyBorsh.jpg",
  "Куриный суп":
    "/src/components/06. AllMain/imgs/Супы/Куриный суп/kurinySup.jpg",
  "Рыбная солянка":
    "/src/components/06. AllMain/imgs/Супы/Рыбная солянка/ribnayaSolyanka.jpg",
  "Тыквенный крем-суп":
    "/src/components/06. AllMain/imgs/Супы/Тыквенный крем-суп/tykvenniyKremSup.jpg",
  Харчо: "/src/components/06. AllMain/imgs/Супы/Харчо/harcho.jpg",
  Хаш: "/src/components/06. AllMain/imgs/Супы/Хаш/hash.jpg",
  "Вареники с картошкой и сливочным маслом":
    "/src/components/06. AllMain/imgs/Фирменные блюда/Вареники с картошкой и сливочным маслом/vareniki.jpg",
  "Деревенский салат":
    "/src/components/06. AllMain/imgs/Фирменные блюда/Деревенский салат/derevenskiySalat.jpg",
  "Открытые манты":
    "/src/components/06. AllMain/imgs/Фирменные блюда/Открытые манты/otkritieManty.jpg",
  "Салат Мимоза":
    "/src/components/06. AllMain/imgs/Фирменные блюда/Салат Мимоза/salatMimoza.jpg",
  "Самса с телятиной":
    "/src/components/06. AllMain/imgs/Фирменные блюда/Самса с телятиной/samsaSTelyatinoy.jpg",
  "Хачапури по-аджарски":
    "/src/components/06. AllMain/imgs/Фирменные блюда/Хачапури по-аджарски/hachapuriPoAdjarski.jpg",
};
export const imgToFood = (food) => {
  return Object.assign(
    {},
    food,
    { count: 1 },
    { imgUrlHigh: imgForFoods[food.name] },
    { imgUrlSmall: imgForFoods[food.name] }
  );
};
