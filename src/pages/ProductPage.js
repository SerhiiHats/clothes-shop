import React, {useEffect, useState} from 'react';
import styles from "./ProductPage.module.scss"
import CardProduct from "../companents/CardProduct/CardProduct";
import axios from "axios";
import {useLocation, useNavigate} from "react-router";
import {RotatingLines} from "react-loader-spinner";

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [visible, setVisible] = useState(true);
    const urlProduct = "https://fakestoreapi.com/products";

    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
      setVisible(true);
      const category = location.state.items;
      axios(urlProduct)
        .then(response => {
          setProduct(response.data.filter(item => item.category === category))
        })
        .catch(error => {
          console.log(error)
          navigation('/error');
        });
      setVisible(false);
    }, [location.state.items]);

    const handleClickCard = (id) => {
      navigation(`/product/${id}`);
      console.log("click")
    }

    return (
      <div className={styles.containerProduct}>
        {visible && <div className={styles.wrapSpinner}>
          <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true}/>
        </div>}
        {product && product.map(item => {
          return (
            <div key={item.id} onClick={() => handleClickCard(item.id)} className={styles.wrapCardProduct}>
              <CardProduct key={item.id}
                           id={item.id} image={item.image}
                           category={item.category}
                           title={item.title}
                           description={item.description}
                           price={item.price} rating={item.rating}/>
            </div>
          )
        })}
      </div>
    );
  }
;

export default ProductPage;