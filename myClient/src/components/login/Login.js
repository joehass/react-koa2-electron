import {useState} from "react";
import React from "react";
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
// import {Settings,PersonAdd, Close,CropDin,Remove} from '@material-ui/icons';
import Dialog from "../common/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import formStyle from "../common/style";

import axios from 'axios'

export default (props) =>{
    const classes = formStyle();
    const {visibled,onClose,onRister} = props;
    const [open,setOpen] = useState(visibled);
    const [registerOpen,setRegisterOpen] = useState(false);
    return (
        <div>
            <Dialog
                componet = {login}
                visibled={open}
                onClose = {closeLogin}
            />
        </div>
    );

    function login(){
        return (
            <div>
                <Typography variant="h5" id="simple-modal-description">
                    登录
                </Typography>
                <form onSubmit={sub}>
                    <TextField
                        id="user"
                        label="用户名"
                        className={clsx(classes.textField, classes.dense)}
                        margin="dense"
                        name="user"
                    />
                    <TextField
                        id="password"
                        label="密码"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        name="password"
                    />

                    <Button variant="contained" type="submit" color="primary" className={classes.button}>
                        登录
                    </Button>
                    <a style={{color:'rgba(0, 0, 0, 0.65)'}} onClick={registerShow}>
                        <Typography variant="overline" display="block" gutterBottom>
                            没有账号？立即注册
                        </Typography>
                    </a>
                </form>
            </div>
        )
    }

    function registerShow(){
        onRister();
    }

    function closeLogin(){
        setOpen(!open);
        console.log(open);
        onClose()
    }

    function sub(value){
        value.preventDefault();//阻止表单提交
        let user = value.target.user.value;
        let password = value.target.password.value;
        axios.get("http://localhost:2222/login?aa=1").then(function (response) {
            console.log(response)
        })
    }
}
