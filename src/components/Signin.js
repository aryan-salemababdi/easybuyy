import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button, Checkbox, Typography } from '@mui/material';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



// Images
import signin from "../img/romain-dancre-doplSDELX7E-unsplash.jpg";


// Components
import Navbar from './Navbar';
import Banner from './Banner';


// CSS (Style Sheets)
import styles from "./signin.module.css";


const Signin = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confrimPassword: "",
        isAccepted: false
    })
    const [scroll, setScroll] = useState(false);
    const history = useHistory();
    const valscroll = () => {
        const scrollvalue = document.documentElement.scrollTop;
        scrollvalue > 10 && setScroll(true);
    }
    window.addEventListener("scroll", valscroll);
    const cheangeHandler = (e) => {
        e.target.name === "isAccepted" ? setData({ ...data, [e.target.name]: e.target.checked }) : setData({ ...data, [e.target.name]: e.target.value })
    }
    const resultVariEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) === true ? true : false;
    const resultVarfirstName = /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/.test(data.firstName) === true ? true : false;
    const resultVarlastName = /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/.test(data.lastName) === true ? true : false;
    const resultVarPassword = data.password.length >= 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,30}$/.test(data.password) ? true : false;
    const resultVarConfrimPassword = data.password === data.confrimPassword ? true : false;

    const submitHandler = () => {
        toast.success(` ${data.firstName  + " " +  data.lastName}  عزیز، مرحله اول ثبت نام را با موفقیت انجام داید `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            zIndex:10000,
            progress: undefined,
        })
    }


    return (
        <div>
            <Navbar position="fixed" />
            <Banner image={signin} />
            <form className={styles.formSignin}>
                <div className={scroll ? styles.signinCardAnimate : styles.signinCard}>
                    <h2> ثبت نام در Easy<span style={{ color: "#d64b19" }}>Buy</span> </h2>
                    <div style={{ margin: "15px 0px" }}>
                        <TextField style={{ width: "250px" }} type="name" value={data.firstName} name="firstName" onChange={cheangeHandler} dir='rtl' label="firstName" variant="standard" />
                    </div>
                    <div style={{ margin: "15px 0px" }}>
                        <TextField style={{ width: "250px" }} type="name" value={data.lastName} onChange={cheangeHandler} dir='rtl' name="lastName" label="lastName" variant="standard" />
                    </div>
                    <div style={{ margin: "15px 0px" }}>
                        <TextField style={{ width: "250px" }} type="email" value={data.email} onChange={cheangeHandler} dir='ltr' name="email" label="Email" variant="standard" />
                    </div>
                    <div style={{ margin: "15px 0px" }}>
                        <TextField style={{ width: "250px" }} type="password" value={data.password} onChange={cheangeHandler} dir='ltr' name="password" label="Password" variant="standard" />
                        <br />
                        <small style={{ float: "right", marginRight: "35px", marginTop: "5px" }}>به طور مثال Aryan802, بیشتر از 8 کاراکتر</small>
                    </div>
                    <div style={{ margin: "25px 0px" }}>
                        <TextField style={{ width: "250px" }} type="password" value={data.confrimPassword} onChange={cheangeHandler} dir='ltr' name="confrimPassword" label="confrim Password" variant="standard" />
                    </div>
                    <div style={{ margin: "15px 0px" }}>
                        <label>بنده شرایط و ضوابط سایت <Link to="">EasyBuy</Link> را می پذیرم </label>
                        <Checkbox type="checkbox" value={data.isAccepted} name="isAccepted" onChange={cheangeHandler} />
                    </div>
                    <Button  onClick={submitHandler} className={data.isAccepted && resultVariEmail && resultVarfirstName && resultVarlastName && resultVarPassword && resultVarConfrimPassword ? styles.buttonOn : styles.buttonOff} disabled={!(data.isAccepted && resultVariEmail && resultVarfirstName && resultVarlastName && resultVarPassword && resultVarConfrimPassword)} style={{ margin: "0px 10px" }} variant="contained" color="success">
                        <Typography>ثبت نام</Typography>
                    </Button>
                    <Button onClick={() => history.push("/login")} color="secondary"><Typography style={{ color: "black" }}>ورود</Typography></Button>
                    <ToastContainer style={{zIndex:10000}}
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </form>
        </div>
    )
}

export default Signin;