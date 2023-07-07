import React, {useEffect, useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import styles from "./CartShopping.module.scss";

const CartShopping = () => {
  const userOrderClothesShop = JSON.parse(localStorage.getItem("userOrderClothesShop"));

  const [order, setOrder] = useState(userOrderClothesShop || []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let tempProducts = [];
    let tempTotalPrice = 0;
    order.forEach(element => {
      tempTotalPrice += element.price * element.quantity;

    })

    setTotalPrice(Math.round(tempTotalPrice * 100) / 100);
  }, [])

  return (
    <>
    <span className={styles.cart}>
        <span><Icon type={iconTypes.cartShopping} size={"30px"} color={"white"}/></span>
        <span>Кошик</span>
    </span>
    <ul className={styles.cartShopping}>

      {order.length === 0 ? <li >Cart is empty</li>
        : userOrderClothesShop.map(product => {
        return (
          <li key={product.idProduct}>
            <div key={product.idProduct} >
              {/*<div className={style.wrapDescriptionProduct}>*/}
              {/*  <p className={style.titleProduct}>{product.title}</p>*/}
              {/*  <p className={style.priceProduct}>price: {product.price} грн.</p>*/}
                <div className={style.wrapTotalPrice}>
                        <span className={style.wrapButton}>
                          <button onClick={() => handleCountProduct(product.idProduct, product.quantity, -1)}
                                  className={style.btnCount}>-</button>
                          <span className={style.quantity}>
                            {product.quantity}
                          </span>
                          <button onClick={() => handleCountProduct(product.idProduct, product.quantity, +1)}
                                  className={style.btnCount}>+</button></span>
                  <span
                    className={style.totalPrice}>{Math.round(product.price * product.quantity * 100) / 100} грн.</span>
                </div>
              </div>
            </div>)

          </li>

      })}

      {/*<li>fgfdg</li>*/}
      {/*<li>jjyth</li>*/}
      {/*<li>QAA</li>*/}
      {/*<li>QAA</li>*/}
      {/*<li>fasfa</li>*/}
      {/*<li>QAA</li>*/}
      {/*<li>df</li>*/}
      {/*<li>fef</li>*/}
      {/*<li>QAA</li>*/}
      {/*<li>fsfas</li>*/}
    </ul>
    </>
  );
};

export default CartShopping;