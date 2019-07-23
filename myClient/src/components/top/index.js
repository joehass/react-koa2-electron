import React from 'react'
import {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import {Settings,PersonAdd, Close,CropDin,Remove,Person} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import {Login} from "../login/Login";
import {Register} from "../login/Register";
import { LoginSuccess } from '../login/LoginSuccess';
import {RegisterSuccess} from '../login/registerSuccess';
import {useStore} from '../../index'
import {LoginUserInfo} from '../login/LoginUserInfo'

export default function Top(){

    const store = useStore("LoginStore")
    const [open, setOpen] = useState(false)
    const [loginVisible, setLoginVisible] = useState(false)
    const [regisaterVisible, setRegisaterVisible] = useState(false)
    const [loginSuccessVisible, setLoginSuccessVisible] = useState(false)
    const [registerSuccessVisible, setRegisterSuccessVisible] = useState(false)

    function handleMenu(){
        setOpen(!open)
     };

     function handleClose(){
        setOpen(false)
     };

     function loginShow (){
        setLoginVisible(!loginVisible)
    };

    function onRegister (){
        loginShow();
        setRegisaterVisible(!regisaterVisible)
    }
    function onRegisterClose(){
        setRegisaterVisible(!regisaterVisible)
        
    }

    function onLoginSuccessClose(){
        setLoginSuccessVisible(!loginSuccessVisible)
    }

    function loginSuccess(){
        setLoginVisible(!loginVisible)
        setLoginSuccessVisible(!loginSuccessVisible)
    }

    function closeLogin(){
        setLoginVisible(!loginVisible)
    };

    function registerSuccess(){
        setRegisterSuccessVisible(!registerSuccessVisible)
        onRegisterClose()
    }

    function onRegisterSuccessClose(){
        setRegisterSuccessVisible(!registerSuccessVisible)
    }

        return (
            <div>
                <AppBar position="static">
                    {/*toolbar 子元素同行显示*/}
                    <Toolbar>
                    {store.token === ""?
                        <Button color="inherit" onClick={loginShow} className="login-button">点击登录</Button>
                        :<LoginUserInfo/>
                    }
                        <IconButton
                            //aria-label="Account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Settings/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <Remove/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <CropDin/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <Close/>
                        </IconButton>

                        <Menu
                            style={{
                                left:"76%",
                                top:"-19%"
                            }}
                            //anchorEl={null}
                            id="menu-appbar"
                            keepMounted
                            transformOrigin={{
                                vertical: 'bottom',//设置x轴center
                                horizontal: 'right'//设置y轴
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><PersonAdd/>退出登录</MenuItem>
                            <MenuItem onClick={handleClose}>退出软件</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>

                {
                    loginVisible ?
                        <Login
                            visibled={loginVisible}
                            onClose ={closeLogin}
                            onRister ={onRegister}
                            loginSuccess = {loginSuccess}
                        />
                :null
                }
                {
                    regisaterVisible?
                        <Register
                            visibled={regisaterVisible}
                            onClose = {onRegisterClose}
                            registerSuccess = {registerSuccess}
                        />:null
                }
                {
                    loginSuccessVisible?
                    <LoginSuccess
                        visibled={loginSuccessVisible}
                        onClose = {onLoginSuccessClose}
                        onFauilt = {loginSuccess}
                    />:null
                }
                {
                    registerSuccessVisible?
                    <RegisterSuccess
                        visibled={registerSuccessVisible}
                        onClose={onRegisterSuccessClose}
                    />
                    :null
                }
            </div>
        )
    }
