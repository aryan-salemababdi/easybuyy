import React from 'react';
import styles from "./Banner.module.css";
const Banner = ({ image }) => {
    const mystyle = {
        background: `url(${image})`,
        margin: "0px",
        height: "calc(100vh)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: " all 0.2s linear",
        display: "flex",
        color: "#fff",
        listStyle: "none",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div>
            <div style={mystyle}>
                        <input  type="text" placeholder=" هرچیزی که میخوای رو سرچ کن ... " />
            </div>
        </div>
    )
}

export default Banner;