export let Categories = [
  { id: 0, title: "Yiyecek&İçecek" },
  { id: 1, title: "Alışveriş" },
  { id: 2, title: "Konut" },
  { id: 3, title: "Ulaşım" },
  { id: 4, title: "Araç" },
  { id: 5, title: "Hayat & Eğlence" },
  { id: 6, title: "İletişim & Bilgisayar" },
  { id: 7, title: "Finansal Giderler" },
  { id: 8, title: "Yatırımlar" },
  { id: 9, title: "Diğer" },
];
//let categoriesId = Categories.length;

export const findCategory = (categoryId) => {
  for (let index = 0; index < Categories.length; index++) {
    if (Categories[index].id === parseInt(categoryId)) {
      return Categories[index];
    }
  }
  return null;
};
