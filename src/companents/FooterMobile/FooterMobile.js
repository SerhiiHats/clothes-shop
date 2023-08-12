import React, {useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import "./FooterMobile.scss"
import {useNavigate} from "react-router";
import CountProducts from "../CountProducts/CountProducts";
import {useDispatch} from "react-redux";
import {setStyleNavAC} from "./setStyleNavAction";

const FooterMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlerBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
    isOpenMenu ? dispatch(setStyleNavAC(false)) :
      dispatch(setStyleNavAC(true));
  }

  function handlerAbout() {
    showAbout === true ? navigate("/about") : navigate(-1);
    setShowAbout(!showAbout);
  }

  function handlerCart() {
    showCart === true ? navigate("/cart") : navigate(-1);
    setShowCart(!showCart);
  }

  return (
    <>
      <span onClick={handlerBurgerMenu}>
        {isOpenMenu === false ?
          <Icon type={iconTypes.burgerMenuOpen}/> :
          <Icon type={iconTypes.burgerMenuClosed}/>}
      </span>
      <span onClick={handlerAbout}><Icon type={iconTypes.aboutI}/></span>
      <span onClick={handlerCart}>
        <CountProducts/>
      </span>
    </>
  );
};

export default FooterMobile;