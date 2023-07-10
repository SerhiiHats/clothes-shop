import styles from "./CardProduct.module.scss";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCountAC, setItemCountAC} from "./countAction";
import store from "../../redux/configStore";

const CardProduct = (props) => {

  const {id, image, category, title, description, price, rating, style} = props;

  const dispatch = useDispatch();

  const mapQuantity = useSelector(store => store.mapQuantity);

  useEffect(()=>{

    if (mapQuantity.has(id)){
      console.log("id : " + id + " , значение по ключу = " + mapQuantity.get(id))
    } else {
        console.log("id : " + id + " , значение по ключу отсутствует :" + mapQuantity.get(id))
    }
  },[])

  const userOrder = [{
    "idProduct": id,
    "titleProduct": title,
    "price": price,
    "quantity": 1,
  }];

  let singleStyle = null;
  if (style && style === "singleStyle") {
    singleStyle = {
      maxWidth: "100%",
      display: "flex",
    }
  }

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const userOrderClothesShop = localStorage.getItem("userOrderClothesShop");

    if (!userOrderClothesShop) {
      localStorage.setItem("userOrderClothesShop", JSON.stringify(userOrder));
      dispatch(setCountAC(1));
      dispatch(setItemCountAC(id, 1));
      return;
    }

    const allProductOfUserOrder = JSON.parse(userOrderClothesShop);
    let presentProductOfOrder = false;

    allProductOfUserOrder.forEach(item => {
      if (item.idProduct === id) {
        item.quantity += 1;
        presentProductOfOrder = true;
        dispatch(setCountAC(1));
        dispatch(setItemCountAC(id, 1));
        localStorage.setItem("userOrderClothesShop", JSON.stringify(allProductOfUserOrder));
      }
    });

    if (!presentProductOfOrder) {
      const margeOfProduct = allProductOfUserOrder.concat(userOrder);
      dispatch(setCountAC(1));
      dispatch(setItemCountAC(id, 1));
      localStorage.setItem("userOrderClothesShop", JSON.stringify(margeOfProduct));
    }
  }

  return (
    <div style={singleStyle} key={`item${id}`} id={`item${id}`} className={styles.cardProduct}>
      <img style={style && {width: "50%"}} className={styles.clothesImg} src={image} alt={category} title={title}/>
      <div className={styles.wrapCategory}>
        <h2 className={styles.category}>category: {category}</h2>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.wrapPrice}><span>price: <span className={styles.price}> {price} $ </span> </span>
          <span> rating: {rating.rate} count: {rating.count}</span></p>
        <p className={styles.wrapBtn}>
          {mapQuantity.has(id) ? <button onClick={(e) => addToCart(e)}>In cart {mapQuantity.get(id)}</button> : <button onClick={(e) => addToCart(e)}>Add to cart</button>}
        </p>
      </div>
    </div>
  );
};

export default CardProduct;