
import wattpadlogo from '../assets/bluelogo.png';
import './Login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import React, { useState } from "react";



function Login() {
    // // Intialize username with setState
    const [username, setUsername] = useState('');

    const onChangeUsername = (e) => {

        setUsername(e.target.value);
        // console.log("USERNAME", username);
    }
    // Create onChangeUsername function
    // set username state with setUsername fuction which declares above

    // Same for Password field
    // Intialize password with setState
    const [password, setpassword] = useState('');

    const onChangepassword = (e) => {


        setpassword(e.target.value);

    }



    const onSubmit = () => {


        console.log("YOU USERNAME AND PASSWORD", username, password)
    }


    // Create onSubmit function which you console [console.log(username, password)]
    return (
        <div className="Login">
            <img src={wattpadlogo} className="Login-logo" alt="logo" />
            <p>
                Where stories live
        </p>

            <div className="row">
                <div className="col-lg-6">
                    <Button className="button" startIcon={<FacebookIcon />} style={{ align: "center", margin: "10px 20px", }} variant="contained" color="primary" > Facebook </Button>
                    <Button className="button" startIcon={<EmailIcon />} style={{ align: "center", margin: "10px 20px", }} variant="contained" >Google</Button>

                </div>
            </div>
            <p style={{ fontSize: "18px", }} >
                -or-
            </p>
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        required
                        id="username"
                        label="Username"
                        variant="filled"
                        onChange={onChangeUsername}
                        style={{ width: "100%", backgroundColor: "white", }}
                    />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={onChangepassword}
                        variant="filled"
                        style={{ width: "100%", backgroundColor: "white", }}
                    />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <Button
                        className="button"
                        variant="contained"
                        color="secondary"

                        style={{ width: "100%" }}
                        onClick={onSubmit}
                    >
                        Start Reading
                    </Button>
                </div>
            </div>
            <p>
                dont have an account? sign up
            </p>
        </div >
    );
}

export default Login;
