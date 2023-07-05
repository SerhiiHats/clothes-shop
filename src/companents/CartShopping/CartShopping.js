import React from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import styles from "./CartShopping.module.scss";

const CartShopping = () => {
  return (
    <ul className={styles.cartShopping}>
      <span className={styles.cart}>
        <span><Icon type={iconTypes.cartShopping} size={"30px"} color={"white"}/></span>
        <span>Кошик</span>
      </span>

      <li>fgfdg</li>
      <li>jjyth</li>
      <li>QAA</li>
      <li>QAA</li>
      <li>QAA</li>
      <li>QAA</li>

    </ul>
  );
};

export default CartShopping;