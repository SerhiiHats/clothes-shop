import styles from "./ItemsInCart.module.scss";
import {Icon} from "../../Icon/Icon";
import {iconTypes} from "../../../constants/icons";

// const ItemsInCart = ({items, idProduct, titleProduct, quantity, price, handleCountProduct}) => {
const ItemsInCart = ({items, handleCountProduct}) => {
      // const {idProduct, image, titleProduct, quantity, price} = items;

  return (

      <table>
        <tbody>
        {items.map(
          item => (
            <tr key={item.idProduct} id={item.idProduct}>
              <td>
                <div><img width={"100px"} src={item.image} alt={item.titleProduct} title={item.titleProduct}/></div>
                <div>{item.price} грн.</div>

              </td>
              <td>
                <div>{item.titleProduct}</div>
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
                <div><span onClick={(e) => handleCountProduct(e, item.idProduct, item.quantity, 0)}><Icon
                  type={iconTypes.delete} size={"22px"} color={"#171B1E"}/></span>
                </div>
                <div>{Math.round(item.price * item.quantity * 100) / 100} грн.</div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

  );
};
      {/*<div key={`last${idProduct}`}>*/}
      {/*  <div key={`last${idProduct}`}>*/}
      {/*    <div className={styles.wrapTitleProduct}>*/}
      {/*      /!*<img width={"100px"} src={image} alt={item.titleProduct} title={item.titleProduct}/>*!/*/}
      {/*      <span>{titleProduct}</span>*/}
      {/*      <span onClick={(e) => handleCountProduct(e, idProduct, quantity, 0)}><Icon*/}
      {/*        type={iconTypes.delete} size={"22px"} color={"#171B1E"}/></span>*/}
      {/*    </div>*/}
      {/*    <div className={styles.wrapTotalPrice}>*/}
      {/*      <span className={styles.price}>{price}<span> грн.</span></span>*/}
      {/*      <span className={styles.wrapButtons}>*/}
      {/*           <button className={styles.btnSetCount}*/}
      {/*                   onClick={(e) => handleCountProduct(e, idProduct, quantity, -1)}>-</button>*/}
      {/*                <span className={styles.quantity}>{quantity}</span>*/}
      {/*                <button className={styles.btnSetCount}*/}
      {/*                        onClick={(e) => handleCountProduct(e, idProduct, quantity, +1)}>+</button>*/}
      {/*                </span>*/}
      {/*      <span*/}
      {/*        className={styles.totalPrice}>{Math.round(price * quantity * 100) / 100} грн.</span>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <hr/>*/}
      {/*</div>*/}


export default ItemsInCart;