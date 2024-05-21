import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import styles from "./Navbar.module.css"
import shopIcon from "../img/Shopping_cart_icon.svg.png";
import { CartContext } from '../context/CartContextProvider';
const Div = styled.div`
width : 2rem;
height : 2rem;
z-index : 20;
display : none;
float:left;
cursor : pointer;
@media ( max-width: 850px) {
    display:flex;
    justify-content : space-around;
    flex-direction : column;
}
div{
    width:2rem;
    height : 0.25rem;
    background : #d64b19;
    margin-right:10px;
    border-radius : 10px;
}
`
const Navbar = ({position,scroller}) => {
    const [scroll, setScroll] = useState(scroller);
    const [open, setOpen] = useState(false);
    const btnref = useRef()
    const { state } = useContext(CartContext);
    const positionNavbar = position;
    const valscroll = () => {
        const scrollvalue = document.documentElement.scrollTop;
        scrollvalue > 10 ? setScroll(true) : setScroll(scroller);
    }
    window.addEventListener("scroll", valscroll);
    useEffect(() => {
        const closenavbarsmall = e => {
            const setOpenbar = e.path[2] !== btnref.current ? setOpen(false) : null;
            return setOpenbar
        };
        document.body.addEventListener("click", closenavbarsmall);
        return () => document.body.addEventListener("click", closenavbarsmall);
    }, [])
    return (
        <div>
            <header style={{position:positionNavbar}} className={scroll ? styles.headertwo : styles.header}>
                <div className={scroll ? styles.listcountinertwo : styles.listcountiner}>
                    <button ref={btnref} style={{ background: "none", border: "none", marginTop: "10px" }} open={open} onClick={() => setOpen(prev => !prev)}>
                        <Div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Div>
                    </button>
                    <div className={open ? styles.navbarsmallopen : styles.navbarsmall}>
                        <ul className={styles.list}>
                            <li>
                                <div className={styles.pageproperty}>
                                    <div className={state.itemsCounter > 0 ? styles.shoppingicon : styles.shoppingiconoff} >
                                        <Link to="/shop"><img src={shopIcon} alt="shopIcon" style={{ width: "30px" }} /></Link>
                                        <span>{state.itemsCounter}</span>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/landing">خانه </Link></li>
                            <li><Link to="/products"> محصولات </Link> </li>
                            <li><Link to="/aboutus"> درباره ما </Link></li>
                            <li className={open ? styles.divisionremove : styles.divisionadd}>
                                <Link to="/division"> دسته بندی</Link>
                                <ul style={{ padding: "10px 0px" }} className={styles.division}>
                                    <li><Link to="/">مد و پوشاک</Link></li>
                                    <hr />
                                    <li><Link to="/">لوازم الکترونیکی</Link></li>
                                    <hr />
                                    <li><Link to="/">خانه و آشپزخانه</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/signin"> ثبت نام </Link></li>
                            <li><Link to="/login"> ورود </Link></li>
                            <li><Link style={{ fontSize: "0.75rem" }} to="./"> لطفا شهر خود را انتخاب کنید </Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Link style={{ textDecoration: "none" }} to="/"><h1> <span> | </span>Easy<span>Buy</span></h1></Link>
                </div>
            </header>
        </div>
    )
}
export default Navbar;
