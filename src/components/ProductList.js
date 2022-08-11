import React from 'react';
import { Link } from "react-router-dom";
import styles from "./productList.module.css";
import digiproduct from "../img/275-2750143_microsoft-surface-pad-digital-products-hd-widescreen-surface.jpg";
import machineproduct from "../img/ابزار برقی-min.jpg";
import clothesproduct from "../img/modern-womens-clothing-shop-logo-design-214151584.jpg";
import supermarketproduct from "../img/Supermarket-logo-template-design-vector-Graphics-3812147-1.jpg";
import toyproduct from "../img/vector-logo-game-room-toy-store-children-playroom-246046426.jpg";
import nativeproduct from "../img/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png";
import Beautyandhealthproduct from "../img/Your-Health-and-Beauty01_thumb900.webp";
import Homeandkitchenproduct from "../img/kitchen-appliances-safety-standards-eu.jpg";
import Booksandstationeryproduct from "../img/Stationery_large.jpg";
import sportproduct from "../img/tuv-rheinland-recreation-and-sports-equipment.jpg";
const ProductList = () => {
  return (
    <div>
      <h2 className={styles.producttext}> دسته بندی هایEasy<span>Buy</span> </h2>
      <div className={styles.listproduct}>
        <div>
          <div className={styles.image}>
            <Link to=""><img src={digiproduct} alt="digiproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">کالای دیجیتال</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={machineproduct} alt="machineproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">خودرو، ابزار و تجهیزات صنعتی</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={clothesproduct} alt="clothesproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">مد و پوشاک</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={supermarketproduct} alt="supermarketproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">کالا های سوپرمارکتی</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={toyproduct} alt="toyproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">اسباب بازی، کودک و نوزاد</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={nativeproduct} alt="nativeproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">محصولات بومی و صنعتی</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={Beautyandhealthproduct} alt="Beautyandhealthproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">زیبایی و سلامت</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={Homeandkitchenproduct} alt="Homeandkitchenproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">خانه و آشپزخانه</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={Booksandstationeryproduct} alt="Booksandstationeryproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">کتاب، لوازم و تحریر</Link></h3>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <Link to="/"><img src={sportproduct} alt="sportproduct" /></Link>
          </div>
          <div className={styles.producttype}>
            <h3><Link to="/">ورزش و سفر</Link></h3>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ProductList;