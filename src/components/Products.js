import React, { useContext } from 'react'
import Product from './shared/Product';
import Banner from './Banner';
import styles from "./Products.module.css";


// Context
import { ProductContext } from '../context/ProductscontextProvider';
import { CartContext } from '../context/CartContextProvider'


// image
import backgroundProduct from "../img/jules-d-ipx0MAblngM-unsplash.jpg";


// Icons
import shopIcon from "../img/Shopping_cart_icon.svg.png";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Products = () => {

    const products = useContext(ProductContext)
    const { state } = useContext(CartContext);
    return (
        <div>
            <Navbar position="fixed" />
            <Banner image={backgroundProduct} />
            <div className={styles.container}>
                <div className={styles.pageproperty}>
                    <div className={state.itemsCounter > 0 ? styles.shoppingicon : styles.shoppingiconoff} >
                        <Link to="/shop"><img src={shopIcon} alt="shopIcon" style={{ width: "30px" }} /></Link>
                        <span>{state.itemsCounter}</span>
                    </div>
                    <h1>خانه - محصولات</h1>
                </div>
                {products.map(product => <Product key={product.id} productData={product} />)}

            </div>
        </div>
    )
}

export default Products;