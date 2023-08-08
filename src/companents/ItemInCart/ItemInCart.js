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
          <span onClick={(e) => handleCountProduct(e, idProduct, quantity, 0)}><Icon
            type={iconTypes.delete} size={"22px"} color={"#171B1E"}/></span></p>
        <p>{quantity}<span> од.</span></p>
        {/*<p></p>*/}
        <div className={styles.wrapTotalPrice}>
           <span className={styles.price}>{price}<span> грн.</span></span>
           <span className={styles.wrapButtons}>
                 <button className={styles.btnSetCount}
                              onClick={(e) => handleCountProduct(e, idProduct, quantity, -1)}>-</button>
                      <span className={styles.quantity}>{quantity}</span>
                      <button className={styles.btnSetCount}
                              onClick={(e) => handleCountProduct(e, idProduct, quantity, +1)}>+</button>
                      </span>
          <span
            className={styles.totalPrice}>{Math.round(price * quantity * 100) / 100} грн.</span>
        </div>
      </div>
      <hr/>
    </li>
  );
};

export default ItemInCart;