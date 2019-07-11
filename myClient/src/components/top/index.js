import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import {Settings,PersonAdd, Close,CropDin,Remove} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from "@material-ui/core/Button";
import Login from "../login/Login";
import Register from "../login/Register";
import HttpUtil from "../../util/Http";

export default class Top extends React.Component{

    state = {
        open:false,
        loginVisible:false,
        regisaterVisible:false
    };

     handleMenu = ()=>{
        this.setState({
            open: !this.state.open
        })
     };

     handleClose = ()=>{
        this.setState({
            open:false
        })
     };

    loginShow = ()=>{
        const httpUtil = new HttpUtil();
        httpUtil.getRequest();
       this.setState({
           loginVisible:!this.state.loginVisible
       })
    };

    onRegister = () =>{
        this.loginShow();
        this.setState({
            regisaterVisible:!this.state.regisaterVisible
        })
    }
    onRegisterClose = ()=>{
        this.setState({
            regisaterVisible:!this.state.regisaterVisible
        })
    }

    closeLogin = () =>{
        this.setState({
            loginVisible:!this.state.loginVisible
        })
    };

    render(){
        return (
            <div>
                <AppBar position="static">
                    {/*toolbar 子元素同行显示*/}
                    <Toolbar>
                        <Button color="inherit" onClick={this.loginShow.bind(this)} className="login-button">点击登录</Button>
                        <IconButton
                            //aria-label="Account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu.bind(this)}
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
                            open={this.state.open}
                            onClose={this.handleClose.bind(this)}
                        >
                            <MenuItem onClick={this.handleClose.bind(this)}><PersonAdd/>退出登录</MenuItem>
                            <MenuItem onClick={this.handleClose.bind(this)}>退出软件</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>

                {
                    this.state.loginVisible ?
                        <Login
                            visibled={this.state.loginVisible}
                            onClose = {this.closeLogin.bind(this)}
                            onRister = {this.onRegister.bind(this)}
                        />:null
                }
                {
                    this.state.regisaterVisible?
                        <Register
                            visibled={this.state.regisaterVisible}
                            onClose = {this.onRegisterClose.bind(this)}
                        />:null
                }
            </div>
        )
    }
}
