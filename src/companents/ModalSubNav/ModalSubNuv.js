import React from 'react';
import Portal from "../Portal/Portal";
import styles from "./ModalSubNuv.module.scss";

const ModalSubNuv = ({content, closeHandler}) => {
  return (
    <Portal>
      <div className={styles.modalWrapper} onClick={closeHandler}></div>
      <div className={styles.modal}>
        {content}
        Something
        Something
        Something
        Something
      </div>
    </Portal>
  );
};

export default ModalSubNuv;