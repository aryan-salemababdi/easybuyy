import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Contentscard.module.css";

const Contentscard = props => {
    const {image} = props
    return (
        <div className={styles.container}>
            <Link to="/" >
            <div className={styles.Contentscard}>
                <img src={image} alt={`${image}`} /> 
                <h4>{props.text}</h4>
            </div>
            </Link>
        </div>
    )
}

export default Contentscard;