import React from 'react'
import { Link } from 'react-router-dom';
import Contentscard from './Contentscard';
import styles from "./readablearticles.module.css";
import iphone14read from "../img/iphone-14-1-3-610x380.jpg";
import newsesperso from "../img/05.09-2-610x380.jpg";
import plane from "../img/A-Shrinking-Plane-Illustration-610x380.jpg";
import dkmag from "../img/DK-Mag-Popular-Phones-15-Mordad-610x380.jpg";
const Readablearticles = () => {
    return (
        <div>
            <div className={styles.Content}>
                <div className={styles.Contentreadable}>
                    <h3>خواندنی ها</h3>
                </div>
                <div className={styles.contentarticle}>
                    <h3><Link to="/">مطالب بیشتر</Link></h3>
                </div>
            </div>
            <div className={styles.Readablearticles}>
                <Contentscard image={iphone14read} text={`احتمال تأخیر در عرضه آیفون ۱۴ قوت گرفت`} />
                <Contentscard image={newsesperso} text={`بررسی اسپرسوساز دستی مدل ۱۰۲۲؛ به‌صرفه و بی‌دردسر`} />
                <Contentscard image={plane} text={`سیاره‌های کوچک‌شونده شاید حلقه‌ی گمشده‌ی تکامل سیارات باشند`} />
                <Contentscard image={dkmag} text={`۱۰ گوشی موبایل محبوب در دیجی‌ کالا (۱۵ مرداد ۱۴۰۱)`} />
            </div>
        </div>
    )
}

export default Readablearticles;