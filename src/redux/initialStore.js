const getCount = () => {
  let userOrderClothesShop = [];
  if (localStorage.getItem("userOrderClothesShop")) {
    userOrderClothesShop = JSON.parse(localStorage.getItem("userOrderClothesShop"));
    // } else {
    //   userOrderClothesShop = [];
  }

  let tempCount = 0;
  let mapCount = new Map();
  userOrderClothesShop.forEach(product => {
    tempCount += product.quantity;
    mapCount.set(product.idProduct, product.quantity);
  });

  return [tempCount, mapCount];
}

const initialStore = {
  auth: false,
  count: getCount()[0],
  mapQuantity: getCount()[1],
  setStyleNav: false,
}

export default initialStore;