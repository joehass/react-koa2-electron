import {useState} from "react";
import React from "react";
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
// import {Settings,PersonAdd, Close,CropDin,Remove} from '@material-ui/icons';
import Dialog from "../common/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import formStyle from "../common/style";
import {useStore} from '../../index.js'

import { observer } from "mobx-react";

export const Login = observer(function(props){
    const store = useStore("LoginStore");
    // const userStore = useStore("UserStore");
    const classes = formStyle();
    const {visibled,onClose,onRister,loginSuccess} = props;
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
                        label="亲密号"
                        className={clsx(classes.textField, classes.dense)}
                        margin="dense"
                        name="intimacy"
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

    async function sub(value){
        value.preventDefault();//阻止表单提交
        let intimacy = parseInt(value.target.intimacy.value)
        let password = value.target.password.value
        let body = {
            intimacy:intimacy,
            password:password
        }
        await store.LoginAction(body)
        // userStore.init(body) //保存登录数据
        afterLogin()
    }

    //登录之后进行的操作
    function afterLogin(){
        loginSuccess()
    }
}
)