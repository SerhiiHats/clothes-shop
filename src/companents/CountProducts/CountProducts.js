import React from 'react';
import styles from "./CountProducts.module.scss";
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import {useSelector} from "react-redux";

const CountProducts = () => {
  const countProduct = useSelector(store => store.count);

  return (
    <span className={styles.cart}>
        <span><Icon type={iconTypes.cartShopping}/></span>
        <span className={styles.cart__title}>Кошик</span>
      {countProduct !== 0 && (<span className={styles.countProducts}>{countProduct}</span>)}
    </span>
  );
};

export default CountProducts;