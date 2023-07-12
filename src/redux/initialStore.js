const getCount = () => {
  let userOrderClothesShop;
  if (localStorage.getItem("userOrderClothesShop")) {
    userOrderClothesShop = JSON.parse(localStorage.getItem("userOrderClothesShop"));
  } else {
    userOrderClothesShop = [];
  }
  let tempCount = 0;
  let tempItemCount = {};
  let mapCount = new Map();
  userOrderClothesShop.forEach(product => {
    tempCount += product.quantity;
    tempItemCount[product.idProduct] = product.quantity;
    mapCount.set(product.idProduct, product.quantity);
  });

  return [tempCount, tempItemCount, mapCount];
}

const initialStore = {
  auth: false,
  count: getCount()[0],
  quantityItems: getCount()[1],
  mapQuantity: getCount()[2],
}

export default initialStore;