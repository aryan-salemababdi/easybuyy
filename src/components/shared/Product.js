import React, { useContext } from 'react'
import styles from "./Product.module.css";
import { Link } from 'react-router-dom';
import trashIcon from "../../img/trash.svg";
// functions
import { shorter, isInCart, quantityCount } from '../../helper/functions';



// Context

import { CartContext } from '../../context/CartContextProvider';

const Product = ({ productData }) => {

    const { state, dispatch } = useContext(CartContext);
    return (
        <div className={styles.card}>
            <div className={styles.imgproduct}>
                <img src={productData.image} style={{ width: "150px" }} alt="product" />
            </div>
            <h3>{shorter((productData.title))}</h3>
            <p>$ {productData.price}</p>
            <div>
                <div className={styles.propertydetails}>
                    <div className={styles.buttoncontainer}>
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>}
                        {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}><img src={trashIcon} alt="trash" style={{ width: "20px", color: "#fff"}} /></button>}
                        {quantityCount(state, productData.id) > 0 && <span className={styles.counter} >{quantityCount(state, productData.id)}</span>}
                        {
                            isInCart(state, productData.id) ?
                                <button onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                                <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>خرید محصول</button>
                        }
                    </div>
                    <Link to={`/products/${productData.id}`}>اطلاعات بیشتر</Link>
                </div>
            </div>




        </div>
    )
}

export default Product;