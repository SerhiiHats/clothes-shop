import React, {useState} from 'react';
import {Icon} from "../Icon/Icon";
import {iconTypes} from "../../constants/icons";
import "./FooterMobile.scss"
import CountProducts from "../CountProducts/CountProducts";
import {useDispatch, useSelector} from "react-redux";
import {setStyleNavAC} from "./setStyleNavAction";
import Modal from "../Modal/Modal";
import About from "../About/About";
import {setShowModalAboutAC} from "../About/aboutAction";
import {setShowCartAction} from "../CartShopping/setShowCartAction";
import ModalSubNuv from "../ModalSubNav/ModalSubNuv";

const FooterMobile = () => {
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isShowAbout = useSelector(store => store.showModalAbout);
  const isOpenMobileNav = useSelector(store => store.setStyleNav);
  const dispatch = useDispatch();

  const handlerModal = () => {
    dispatch(setShowModalAboutAC());
  }

  function handlerBurgerMenu() {
    // setIsOpenMenu(!isOpenMenu);
    // isOpenMenu ? dispatch(setStyleNavAC(false)) :
    //   dispatch(setStyleNavAC(true));
    dispatch(setStyleNavAC(!isOpenMobileNav));
  }

  function handlerModalCart() {
    dispatch(setShowCartAction());
  }

  return (
    <>
      <span onClick={handlerBurgerMenu}>
        {isOpenMobileNav === false ?
          <Icon type={iconTypes.burgerMenuOpen}/> :
         <Icon type={iconTypes.burgerMenuClosed}/>}
      </span>
      <span onClick={handlerModal}><Icon type={iconTypes.aboutI}/></span>
      <span onClick={handlerModalCart}>
        <CountProducts/>
      </span>
      {isShowAbout && <Modal text={<About/>}
                             closeHandler={() => handlerModal()}
                             action={<button className={"btn"} onClick={handlerModal}>Ok</button>}
      />}
      {isOpenMobileNav && <ModalSubNuv
      closeHandler={()=>dispatch(setStyleNavAC(!isOpenMobileNav))}
      />}
    </>
  );
};

export default FooterMobile;