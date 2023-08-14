import React, {useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import "./FooterMobile.scss"
import {useNavigate} from "react-router";
import CountProducts from "../CountProducts/CountProducts";
import {useDispatch, useSelector} from "react-redux";
import {setStyleNavAC} from "./setStyleNavAction";
import Modal from "../Modal/Modal";
import About from "../About/About";
import {setShowModalAboutAC} from "../About/aboutAction";

const FooterMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const isShowAbout = useSelector(store => store.showModalAbout);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerModal = () => {
    dispatch(setShowModalAboutAC());
  }

  function handlerBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
    isOpenMenu ? dispatch(setStyleNavAC(false)) :
      dispatch(setStyleNavAC(true));
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
      <span onClick={handlerModal}><Icon type={iconTypes.aboutI}/></span>
      <span onClick={handlerCart}>
        <CountProducts/>
      </span>
      {isShowAbout && <Modal text={<About/>} closeHandler={() => handlerModal()}
      />}
    </>
  );
};

export default FooterMobile;