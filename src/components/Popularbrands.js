import React  from 'react';
import {useHistory } from "react-router-dom";
import Slider from "react-slick";
import styles from "./popularbrands.module.css"
import samsung from "../img/360_197_1.webp";
import apple from "../img/apple_logo_icon_168588.png";
import xiaomi from "../img/Xiaomi-Logo.png";
import sony from "../img/Sony-Logo.png";
import microsoft from "../img/mslogo.jpg";
const Popularbrands = () => {
    const history = useHistory();
    const clickHandler = e => {
            history.push(`/${e.target.attributes[1].nodeValue}`);
    };
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        useTransform:false,
        autoplay: true,
        arrows: false,
        initialSlide: 0,
        cssEase: 'linear',
        rtl: true,
        responsive: [
            {
                breakpoint: 1024, // width to change options
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                    initialSlide: 2
                }
            }
        ]
    };
    return (
        <div>
            <div className={styles.poptext}>
                <h2>  محبوب ترین برندهایEasy<span>Buy</span> </h2>
            </div>
            <div className={styles.popbox}>
                <Slider className={styles.Popularbrands} {...settings}>

                    <div>

                    <img onClick={clickHandler} src={samsung} alt="samsung" />

                    </div>

                    <div>

                        <img  onClick={clickHandler} src={apple} alt="apple" />
                    </div>

                    <div>

                        <img  onClick={clickHandler} src={xiaomi} alt="xiaomi" />
                    </div>
                    <div>
                        <img  onClick={clickHandler} src={sony} alt="sony" />
                    </div>
                    <div>
                        <img  onClick={clickHandler} src={microsoft} alt="microsoft" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Popularbrands;