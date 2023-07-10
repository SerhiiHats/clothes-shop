import React, {useEffect, useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import styles from "./CartShopping.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setCountAC} from "../CardProduct/countAction";
import ItemInCart from "../ItemInCart/ItemInCart";

const CartShopping = () => {
  const userOrderClothesShop = JSON.parse(localStorage.getItem("userOrderClothesShop"));
  const [order, setOrder] = useState(userOrderClothesShop || []);
  const [totalPrice, setTotalPrice] = useState(0);
  const countProduct = useSelector(store => store.count);
  const dispatch = useDispatch();

  useEffect(() => {
    const tempOrder = JSON.parse(localStorage.getItem("userOrderClothesShop")) || [];
    let tempTotalPrice = 0;
    console.log(tempOrder)
    tempOrder.forEach(element => {
      tempTotalPrice += element.price * element.quantity;
    });
    setTotalPrice(Math.round(tempTotalPrice * 100) / 100);
    console.log("I am enter")
    setOrder(tempOrder);
  }, [countProduct]);

  const handleCountProduct = (id, count, k) => {

    if ((count === 1 && k === -1) || k === 0) {
      const tempProducts = order.filter(product => product.idProduct !== id);
      localStorage.setItem("userOrderClothesShop", JSON.stringify(tempProducts));
      setOrder(JSON.parse(localStorage.getItem("userOrderClothesShop")));
      dispatch(setCountAC(-1 * count));
      return;
    }

    const tempProducts = order.map(product => {
      if (product.idProduct === id) {
        return {...product, quantity: product.quantity + k}
      } else return product;
    })
    localStorage.setItem("userOrderClothesShop", JSON.stringify(tempProducts));
    setOrder(JSON.parse(localStorage.getItem("userOrderClothesShop")));
    k === 1 ? dispatch(setCountAC(1)) : dispatch(setCountAC(-1));
  }

  return (
    <>
    <span className={styles.cart}>
        <span><Icon type={iconTypes.cartShopping} size={"30px"} color={"white"}/></span>
        <span>Кошик</span>
      {countProduct !== 0 && (<span className={styles.countProducts}>{countProduct}</span>)}
    </span>
      <ul className={styles.cartShopping}>
        {order.length === 0 ?
          (<li><div>Cart is empty</div></li>)
          : userOrderClothesShop.map(product => {
            console.log(product)
            return (<ItemInCart
              key={product.idProduct}
              idProduct={product.idProduct}
              titleProduct={product.titleProduct}
              quantity={product.quantity}
              price={product.price}
              handleCountProduct={(id, count, k) => handleCountProduct(id, count, k)}
            />)
          })}
        <li>Total price: {totalPrice} грн.</li>
        {countProduct !== 0 && (<li><button className={styles.btnShopping}>Оформити замовлення</button></li>)}
      </ul>
    </>);
};
export default CartShopping;