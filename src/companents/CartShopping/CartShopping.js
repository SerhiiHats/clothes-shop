import React from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import styles from "./CartShopping.module.scss";

const CartShopping = () => {
  return (
    <>
    <span className={styles.cart}>
        <span><Icon type={iconTypes.cartShopping} size={"30px"} color={"white"}/></span>
        <span>Кошик</span>
    </span>
    <ul className={styles.cartShopping}>
      <li>fgfdg</li>
      <li>jjyth</li>
      <li>QAA</li>
      <li>QAA</li>
      <li>fasfa</li>
      <li>QAA</li>
      <li>df</li>
      <li>fef</li>
      <li>QAA</li>
      <li>fsfas</li>
    </ul>
    </>
  );
};

export default CartShopping;