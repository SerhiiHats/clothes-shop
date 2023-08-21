import styles from "./ItemsInCart.module.scss";
import {Icon} from "../../Icon/Icon";
import {iconTypes} from "../../../constants/icons";

const ItemsInCart = ({items, handleCountProduct}) => {

  return (
    <table>
      <tbody>
      {items.map(
        item => (
          <tr key={item.idProduct} id={item.idProduct}>
            <td>
              <div className={styles.wrapImg}><img src={item.image} alt={item.titleProduct} title={item.titleProduct}/>
              </div>
              <div>{item.price} грн.</div>
            </td>
            <td>
              <div className={styles.titleProduct}>{item.titleProduct}</div>
              <div className={styles.wrapButtons}>
                <button className={styles.btnSetCount}
                        onClick={(e) => handleCountProduct(e, item.idProduct, item.quantity, -1)}>-
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button className={styles.btnSetCount}
                        onClick={(e) => handleCountProduct(e, item.idProduct, item.quantity, +1)}>+
                </button>
              </div>
            </td>
            <td>
              <div className={styles.wrapDelete}><span
                onClick={(e) => handleCountProduct(e, item.idProduct, item.quantity, 0)}><Icon
                type={iconTypes.delete} size={"22px"} color={"#171B1E"}/></span>
              </div>
              <div className={styles.itemTotalPrice}>{Math.round(item.price * item.quantity * 100) / 100} грн.</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemsInCart;