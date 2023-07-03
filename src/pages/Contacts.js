import styles from "./Contacts.module.scss"
import React from 'react';
import {Icon} from "../companents/Icon/Icon";
import {iconsDefs} from "../assets/icons/iconsDefs";
import {iconTypes} from "../constants/icons";

const Contacts = () => {
  return (
    <><h3 className={styles.title}>Контакти</h3>
      <div className={styles.wrapContacts}>
        <div>
          <p>Call-центр</p>
          <p>+38 (044) 222-11-33</p>
          <p>+38 (067) 222-11-33</p>
          <p>+38 (050) 222-11-33</p>
          <p>+38 (063) 222-11-33</p>
        </div>
        <div>
          <p>Графік роботи Call-центру</p>
          <p>Пн.-Пт.: 08:00 - 22:00</p>
          <p>Сб.: 09:00 - 20:00</p>
          <p>Нд.: 09:00 - 19:00</p>
        </div>
        <div>
          <p>Електронна пошта</p>
          <p>info@clothes_shop.ua</p>
        </div>
        <div>
          <p>Месенджери</p>
          <p>
            <Icon type={iconTypes.whatsapp}/>
            <Icon type={iconTypes.telegram}/>
          </p>
        </div>
        <div>
          <button>Зв'язатися з директором</button>
        </div>
      </div>

    </>
  );
};

export default Contacts;