import React, { useContext } from 'react'
import styles from "./cart.module.css";


// function
import { shorter } from '../../helper/functions';
import { CartContext } from '../../context/CartContextProvider';

// Icons
import trashIcon from "../../img/trash.svg";



const Cart = (props) => {
  const { dispatch } = useContext(CartContext)
  const { image, title, price, quantity } = props.data;
  return (
    <div>
      <div className={styles.cashier}>
      </div>
      <div className={styles.cartcontainer}>
        <div className={styles.cartshop}>
          <div className={styles.imageproduct}>
            <img src={image} alt={image} />
          </div>
          <div className={styles.shoppriceandtitle}>
            <h3>{shorter(title)}</h3>
            <p>$ {price}</p>
          </div>
          <div className={styles.quantityshop}>
            <p>{quantity}</p>
          </div>
          <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} >-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;