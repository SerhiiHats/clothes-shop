import React, {useEffect, useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import styles from "./CartShopping.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {decAC, incAC} from "../CardProduct/countAction";

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

    if (count === 1 && k === -1) {
      const tempProducts = order.filter(product => product.idProduct !== id);
      localStorage.setItem("userOrderClothesShop", JSON.stringify(tempProducts));
      setOrder(JSON.parse(localStorage.getItem("userOrderClothesShop")));
      dispatch(decAC());
      return;
    }

    const tempProducts = order.map(product => {
      if (product.idProduct === id) {
        return {...product, quantity: product.quantity + k}
      } else return product;
    })
    localStorage.setItem("userOrderClothesShop", JSON.stringify(tempProducts));
    setOrder(JSON.parse(localStorage.getItem("userOrderClothesShop")));
    k === 1 ? dispatch(incAC()) : dispatch(decAC());
  }

  return (
    <>
    <span className={styles.cart}>
        <span><Icon type={iconTypes.cartShopping} size={"30px"} color={"white"}/></span>
        <span>Кошик</span>
      {countProduct ? <span className={styles.countProducts}>{countProduct}</span> : ""}

    </span>
      <ul className={styles.cartShopping}>
        {order.length === 0 ? <li>
            <div>Cart is empty</div>
          </li>
          : userOrderClothesShop.map(product => {
            console.log(product)
            return (
              <li key={product.idProduct}>
                <div key={product.idProduct}>
                  <p>{product.titleProduct}</p>
                  <p>{product.quantity}<span> од.</span></p>
                  <p>{product.price}<span> грн.</span></p>
                  {/*<p>{Math.round(product.price * product.quantity * 100) / 100}<span> грн.</span></p>*/}
                  <p className={styles.wrapTotalPrice}>
                    <span className={styles.wrapButtons}>
                      <button className={styles.btnSetCount}
                          onClick={() => handleCountProduct(product.idProduct, product.quantity, -1)}>-</button>
                      <span className={styles.quantity}>{product.quantity}</span>
                      <button className={styles.btnSetCount}
                          onClick={() => handleCountProduct(product.idProduct, product.quantity, +1)}>+</button>
                      </span>
                      <span className={styles.totalPrice}>{Math.round(product.price * product.quantity * 100) / 100} грн.</span>
                  </p>
                </div>
                <hr/>
              </li>)
          })}
        <li>totalPrice: {totalPrice} грн.</li>
      </ul>
    </>);
};
export default CartShopping;