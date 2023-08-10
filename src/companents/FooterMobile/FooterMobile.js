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
  const [comeBack, setComeBack] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlerBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
    if (isOpenMenu) {
      dispatch(setStyleNavAC(false));

    } else {
      dispatch(setStyleNavAC(true));

      if (comeBack) {
        navigate(-1);
        setComeBack(!comeBack);
      }

    }

    // isOpenMenu ? dispatch(setStyleNavAC(false)) :
    //   dispatch(setStyleNavAC(true));
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