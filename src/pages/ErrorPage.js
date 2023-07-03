import React from 'react';
import styles from "./ErrorPage.module.scss";
import {Link} from "react-router-dom";
import {Icon} from "../companents/Icon/Icon";
import {iconTypes} from "../constants/icons";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <Icon type={iconTypes.cancelCircle}/>
      <h2>Something went wrong</h2>
      <p>Please try again in a few minutes.</p>
      <p className={styles.goHome}>Go <Link to={"/"}><Icon type={iconTypes.home}/>home</Link></p>
    </div>
  );
};

export default ErrorPage;