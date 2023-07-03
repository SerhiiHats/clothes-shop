import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginAC, LogoutAC} from "./authAction";
import {useNavigate} from "react-router";
import styles from "./Auth.module.scss"

const Auth = () => {

  const auth = useSelector(store => store.auth)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAuth = () => {
    dispatch(loginAC());
    console.log(auth);
    navigate(-1);
  }

  const handleNotAuth = () => {
    dispatch(LogoutAC());
    console.log(auth);
  }

  return (
    <div className={styles.auth}>
      <p className={styles.isOld}>Підтвердити ваш вік</p>
      <button onClick={() => handleAuth()}>Мені більш як 18 років</button>
      <button onClick={() => handleNotAuth()}>Мені не виповнилось 18 років</button>
    </div>
  );
};

export default Auth;