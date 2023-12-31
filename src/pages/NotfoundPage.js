import React from 'react';
import style from "./NotfoundPage.module.scss";
import {Link} from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div className={style.notFound}>
      <h2>This page doesn't exist. Go <Link to={"/"}>home</Link></h2>
    </div>
  );
};

export default NotfoundPage;