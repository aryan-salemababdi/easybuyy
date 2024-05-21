import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import { Button, Typography } from '@mui/material';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


//Components
import Navbar from './Navbar';



//CSS (Styles Sheets)
import styles from "./login.module.css";
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const history = useHistory();
    const cheangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const resultVariEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) === true ? true : false;
    const resultVarPassword = data.password.length >= 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,30}$/.test(data.password) ? true : false;

    const loginHandler = () => {
        resultVariEmail && resultVarPassword ?
            toast.success("با موفقیت وارد شدید", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            }) :
            toast.error('ایمیل یا رمزعبور وارد شده صحیح نمی باشد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
    }
    return (
        <div>
            <Navbar position="static" scroller={true} />
            <form className={styles.formSignin}>
                <div className={styles.signinCard}>
                    <h2> ورود </h2>
                    <div style={{ margin: "10px 0px" }}>
                        <TextField style={{ width: "250px" }} type="email" value={data.email} onChange={cheangeHandler} dir='ltr' name="email" label="Email" variant="standard" />
                    </div>
                    <div style={{ margin: "10px 0px" }}>
                        <TextField style={{ width: "250px" }} type="password" value={data.password} onChange={cheangeHandler} dir='ltr' name="password" label="Password" variant="standard" />
                        <br />
                    </div>
                    <Button onClick={loginHandler} color="secondary"><Typography style={{ color: "black" }}>ورود</Typography></Button>
                    <Button onClick={() => history.push("/signin")} style={{ margin: "0px 10px" }} variant="contained" color="success">
                        <Typography>ثبت نام</Typography>
                    </Button>
                    <ToastContainer
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

export default Login;