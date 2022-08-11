import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import styles from "./shop.module.css";

import Cart from './shared/Cart';


// image
import cashier from "../img/simon-kadula--gkndM1GvSA-unsplash.jpg";

import { CartContext } from "../context/CartContextProvider"



const Shop = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <Banner image={cashier} />
      <div className={styles.container}>
        <div className={styles.shopcontainer}>
          {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
        </div>

        {
          state.itemsCounter > 0 && <div className={styles.totaldetails}>
            <div className={styles.detailsbuy}>
              <p  style={{fontWeight:"bold"}}><span>تعداد خرید ها : </span> {state.itemsCounter}</p>
              <p style={{fontWeight:"bold"}}><span>هزینه کل : </span>  $ {state.total}</p>
              <div className={styles.buttonshop}>
                <button className={styles.checkout}> ادامه خرید </button>
                {/* onClick={() => dispatch({ type: "CHECKOUT" })} */}
                <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}> انصراف </button>
              </div>
            </div>
          </div>
        }
        {/* {
          state.checkout && <div>
            <h3>ادامه خرید ...</h3>
            <Link to="/products">Buy More</Link>         // این صفحه هنوز طراحی نشده است ...
          </div>
        } */}

        {
          !state.checkout && state.itemsCounter === 0 && <div className={styles.wantbuy} style={{margin:"20px 0px"}}>
            <h3>چیزی می خوای بخری ؟ </h3>
            <Link to="/products">صفحه محصولات </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Shop;