import React from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import styles from "./CartShopping.module.scss";

const CartShopping = () => {
  return (
    <ul>
      <span className={styles.cartShopping}>
        <span><Icon type={iconTypes.cartShopping} size={"30px"} color={"white"}/></span>
        <span>Кошик</span>
      </span>

    </ul>
  );
};

export default CartShopping;