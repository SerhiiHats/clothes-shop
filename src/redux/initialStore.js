const getCount = ()=>{
  const userOrderClothesShop = JSON.parse(localStorage.getItem("userOrderClothesShop")) || [];
  let tempCount = 0;
  console.log(userOrderClothesShop)
  userOrderClothesShop.forEach(product=>{
    tempCount += product.quantity;
  });
  console.log(tempCount);
  return tempCount;
}

const initialStore = {
  auth: false,
  count: getCount(),
}

export default initialStore;