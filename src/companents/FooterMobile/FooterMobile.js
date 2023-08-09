import React, {useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
// import styles from "./FooterMobile.scss";
import "./FooterMobile.scss"
import {useNavigate} from "react-router";
import CountProducts from "../CountProducts/CountProducts";

const FooterMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [comeBack, setComeBack] = useState(false);
  const navigate = useNavigate();

  function handlerBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handlerCart() {
    setComeBack(!comeBack);
    comeBack === false ? navigate("/cart") : navigate(-1);
  }

  return (
    <>
      <span onClick={handlerBurgerMenu}>
        {isOpenMenu === false ?
          <Icon type={iconTypes.burgerMenuOpen}/> :
          <Icon type={iconTypes.burgerMenuClosed}/>}
      </span>
      <span><Icon type={iconTypes.aboutI}/></span>
      <span onClick={handlerCart}>
        <CountProducts/>
      </span>
    </>
  );
};

export default FooterMobile;