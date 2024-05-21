import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import backtoup from "../img/1590631-200.png";
import daysreturn from "../img/days-return.svg";
import expressdelivery from "../img/express-delivery.svg";
import cashondelivery from "../img/cash-on-delivery.svg";
import support from "../img/support.svg";
import originalproducts from "../img/original-products.svg";
import instagram from "../img/Instagram-Icon.png";
import twitter from "../img/Twitter-logo.svg.png";
import linkdin from "../img/download.png";
const Footer = () => {
    const [email, setEmail] = useState("");
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const handleEmailChange = (event) => {
        const emailvalue = event.target.value;
        setEmail(emailvalue);
        return emailvalue;
    };
    const resultVariEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === true ? true : false;
    return (
        <div>
            <hr />
            <div className={styles.property}>
                <div className={styles.companyname}>
                    <h1>Easy<span>Buy</span> <span>|</span> </h1>
                    <p>
                        تلفن پشتیبانی : 09215531809  <span>|</span>  ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                    </p>
                </div>
                <div className={styles.scrollup}>
                    <button onClick={scrolltoTop}><h4>بازگشت به بالا  <span> <img src={backtoup} alt="backtoup" /> </span></h4></button>
                </div>
            </div>
            <div className={styles.possibilities}>
                <div>
                    <img src={expressdelivery} alt="express-delivery" />
                    <h5>امکان تحویل اکسپرس</h5>
                </div>
                <div>
                    <img src={cashondelivery} alt="cash-on-delivery" />
                    <h5>امکان پرداخت در محل</h5>
                </div>
                <div>
                    <img src={support} alt="support" />
                    <h5>7 روز هفته ، 24 ساعته</h5>
                </div>
                <div>
                    <img src={daysreturn} alt="daysreturn" />
                    <h5>هفت روز ضمانت بازگشت کالا </h5>
                </div>
                <div>
                    <img src={originalproducts} alt="original-products" />
                    <h5>ضمانت اصل بودن کالا</h5>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.witheasybuy}>
                    <h3>با Easy<span>Buy</span></h3>
                    <hr />
                    <Link to="/"><h4> اتاق خبر Easy<span>Buy</span></h4></Link>
                    <Link to="/"><h4> فروش در Easy<span>Buy</span></h4></Link>
                    <Link to="/"><h4>فرصت های شغلی</h4></Link>
                    <Link to="/"><h4> تماس با Easy<span>Buy</span></h4></Link>
                    <Link to="/"><h4> درباره Easy<span>Buy</span></h4></Link>
                </div>
                <div className={styles.customerservices}>
                    <h3> خدمات مشتریان </h3>
                    <hr />
                    <Link to="/"><h4>پاسخ به پرسش های متداول</h4></Link>
                    <Link to="/"><h4> رویه های بازگرداندن کالا</h4></Link>
                    <Link to="/"><h4>شرایط استفاده</h4></Link>
                    <Link to="/"><h4> حریم خصوصی</h4></Link>
                    <Link to="/"><h4> گزارش باگ</h4></Link>
                </div>
                <div className={styles.shoppingguide}>
                    <h3> راهنمای خرید از Easy<span>Buy</span></h3>
                    <hr />
                    <Link to="/"><h4> نحوه ثبت سفارش</h4></Link>
                    <Link to="/"><h4> رویه ارسال سفارش</h4></Link>
                    <Link to="/"><h4>شیوه های پرداخت</h4></Link>
                </div>
                <div className={styles.withus}>
                    <h3>همراه ما باشید!</h3>
                    <hr />
                    <div className={styles.apps}>
                        <div className={styles.listicons}>
                            <ul style={{ marginTop: "20px" }}>
                                <li>
                                    <a href="/"><img src={instagram} alt="instagram" /></a></li>
                                <li>
                                    <a href="/"><img src={twitter} alt="twitter" /></a></li>
                                <li>
                                    <a href="/"><img src={linkdin} alt="linkdin" /></a>
                                </li>
                                <li>
                                    <a href="/"><img src={instagram} alt="instagram" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.off}>
                            <Link to="/"><h3>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h3></Link>
                            <div className={styles.inputnews}>
                                <input onChange={handleEmailChange} className='inputreg' type="email" value={email} name="email" placeholder='ایمیل خود را وارد کنید' />
                                <button className={resultVariEmail ? styles.regbutton : styles.regbuttonoff} disabled={!(resultVariEmail)}><h3>ثبت</h3></button>
                                <p className={resultVariEmail ? styles.errormailoff : styles.errormail} >پست الکترونیکی وارد شده درست نیست !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lincenc}>
                &copy;   طراحی شده توسط آرین سالم آبادی
            </div>
        </div>
    )
}

export default Footer;