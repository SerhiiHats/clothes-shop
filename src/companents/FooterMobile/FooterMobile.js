import React, {useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
// import styles from "./FooterMobile.scss";
import "./FooterMobile.scss"
import CartShopping from "../CartShopping/CartShopping";

const FooterMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [visibleCart, setVisibleCart] = useState(false);

  function handlerBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handlerCart() {
    setVisibleCart(!visibleCart);
  }

  return (
    <>
      <span onClick={handlerBurgerMenu}>
        {isOpenMenu === false ?
          <Icon type={iconTypes.burgerMenuOpen}/> :
          <Icon type={iconTypes.burgerMenuClosed}/>}
      </span>
      <span><Icon type={iconTypes.aboutI}/></span>
      {/*<span><Icon type={iconTypes.cartShopping}/></span>*/}
      <span onClick={handlerCart}><Icon type={iconTypes.cartShopping}/>{visibleCart === true && <CartShopping/>}</span>
    </>
  );
};

export default FooterMobile;