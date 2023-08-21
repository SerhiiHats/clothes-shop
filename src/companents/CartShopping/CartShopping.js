import React, {useEffect, useState} from 'react';
import styles from "./CartShopping.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setCountAC, setMapCountAC} from "../CardProduct/countAction";
import ItemsInCart from "./ItemInsCart/ItemsInCart";

const CartShopping = () => {
  const userOrderClothesShop = JSON.parse(localStorage.getItem("userOrderClothesShop"));
  const [order, setOrder] = useState(userOrderClothesShop || []);
  const countProduct = useSelector(store => store.count);
  const dispatch = useDispatch();

  useEffect(() => {
    const tempOrder = JSON.parse(localStorage.getItem("userOrderClothesShop")) || [];
    setOrder(tempOrder);
  }, [countProduct]);

  const totalPrice = order.reduce((sum, currentValue) => sum + currentValue.price * currentValue.quantity, 0);

  const handleCountProduct = (e, id, count, k) => {
    e.stopPropagation();

    if ((count === 1 && k === -1) || k === 0) {
      const tempProducts = order.filter(product => product.idProduct !== id);
      localStorage.setItem("userOrderClothesShop", JSON.stringify(tempProducts));
      setOrder(JSON.parse(localStorage.getItem("userOrderClothesShop")));
      dispatch(setCountAC(-1 * count));
      dispatch(setMapCountAC(id, -1 * count))
      return;
    }

    const tempProducts = order.map(product => {
      if (product.idProduct === id) {
        return {...product, quantity: product.quantity + k}
      } else return product;
    })
    localStorage.setItem("userOrderClothesShop", JSON.stringify(tempProducts));
    setOrder(JSON.parse(localStorage.getItem("userOrderClothesShop")));

    if (k === 1) {
      dispatch(setCountAC(1));
      dispatch(setMapCountAC(id, 1));
    } else {
      dispatch(setCountAC(-1));
      dispatch(setMapCountAC(id, -1));
    }
  }

  const emptyCart = (<div>у Вас ще не має товарів у кошику</div>);

  const totalRow = (
    <div>
      <div className={styles.wrapTotalPrice}>
        <span className={styles.comeback}>Повернутись до покупок</span>
        <span className={styles.price}>Загальна сума:
          <span> {Math.round(totalPrice * 100) / 100} грн.</span>
        </span>
      </div>
      <div>
        <button className={styles.btnShopping}>Оформити замовлення</button>
      </div>
    </div>
  );

  return (
    <div className={styles.cartShopping}>
      {!!order.length ?
        <ItemsInCart
          items={order}
          handleCountProduct={(e, id, count, k) => handleCountProduct(e, id, count, k)}
        />
        : emptyCart}
      {!!order.length && totalRow}
    </div>
  );
};
export default CartShopping;