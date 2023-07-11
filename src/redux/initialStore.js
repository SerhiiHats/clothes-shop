const getCount = ()=>{
  const userOrderClothesShop = JSON.parse(localStorage.getItem("userOrderClothesShop") || []) ;
  let tempCount = 0;
  let tempItemCount = {};
  let mapCount = new Map();
  console.log(userOrderClothesShop)
  userOrderClothesShop.forEach(product=>{
    tempCount += product.quantity;
    tempItemCount[product.idProduct] = product.quantity;
    mapCount.set(product.idProduct, product.quantity);
  });
  // console.log(tempCount);
  console.log(tempItemCount);
  console.log(typeof tempItemCount[18])
  console.log(mapCount)
  return [tempCount, tempItemCount, mapCount];
}

const initialStore = {
  auth: false,
  count: getCount()[0],
  quantityItems: getCount()[1],
  mapQuantity: getCount()[2],
}

export default initialStore;