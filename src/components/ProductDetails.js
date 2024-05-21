import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';



//Context
import { ProductContext } from '../context/ProductscontextProvider';


//CSS (Style Sheets)
import styles from "./productDetails.module.css";



//Components
import Navbar from './Navbar';
import Banner from './Banner';



//Images
import ProductDetailsimag from "../img/arturo-rey-5yP83RhaFGA-unsplash.jpg";




const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1]
    const history = useHistory();
    const { image, title, description, price, category } = product;
    return (
        <div>
            <Navbar position="fixed" />
            <Banner image={ProductDetailsimag} />
            <div className={styles.container}>
                <div className={styles.cardDetails}>
                    <div>
                        <img src={image} style={{ width: "200px" }} alt={`${image}`} />
                    </div>
                    <div className={styles.details} style={{ margin: "20px 20px" }}>
                        <h2 style={{ textAlign: "center" }}>{title}</h2>
                        <h4 className={styles.category}> نوع محصول : {category}</h4>
                        <p style={{ textAlign: "right" }}>{description}</p>
                        <br />
                        <br />
                        <div className={styles.buyandinfoprice}>
                            <div><button onClick={() => { history.goBack() }} ><p>صفحه قبل</p></button></div>
                            <div className={styles.price}><p>$ {price}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetails;