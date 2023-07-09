import styles from "./ItemInCart.module.scss";
import React from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";

const ItemInCart = ({idProduct, titleProduct, quantity, price, handleCountProduct}) => {

  return (
      <li key={idProduct}>
        <div key={idProduct}>
          <p className={styles.wrapTitleProduct}>
            <span>{titleProduct}</span>
            <span onClick={() => handleCountProduct(idProduct, quantity, 0)}><Icon
              type={iconTypes.delete} size={"22px"} color={"#171B1E"}/></span></p>
          <p>{quantity}<span> од.</span></p>
          <p>{price}<span> грн.</span></p>
          <p className={styles.wrapTotalPrice}>
                    <span className={styles.wrapButtons}>
                      <button className={styles.btnSetCount}
                              onClick={() => handleCountProduct(idProduct, quantity, -1)}>-</button>
                      <span className={styles.quantity}>{quantity}</span>
                      <button className={styles.btnSetCount}
                              onClick={() => handleCountProduct(idProduct, quantity, +1)}>+</button>
                      </span>
            <span
              className={styles.totalPrice}>{Math.round(price * quantity * 100) / 100} грн.</span>
          </p>
        </div>
        <hr/>
      </li>
  );
};

export default ItemInCart;