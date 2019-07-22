import React from 'react'
import { observer } from "mobx-react";
import Typography from '@material-ui/core/Typography';
import {useStore} from '../../index.js'
import Dialog from "../common/Modal";
import {useState} from "react";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      position: 'relative',
    }
  }));

export const LoginSuccess = observer(function(props){
    const classes = useStyles();
    const store = useStore("LoginStore");
    const {visibled,onClose,onFauilt} = props;
    const [open,setOpen] = useState(visibled);
    return (
        <Dialog
            componet = {successLogin}
            visibled={open}
            onClose = {closeLogin}
        />
    )

    function closeLogin(){
        setOpen(!open);
        console.log(open);
        onClose()
    }

    function handleClickAway(){
        onFauilt()
    }

    function successLogin(){
        if (!!store.token){
            return (
                <Typography variant="body1" gutterBottom>
                    欢迎回来{store.user.userName}，开始愉快的玩耍吧
                </Typography>
            )
        }else{
            return (
                <div className={classes.root}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Typography variant="body1" gutterBottom>
                        啊哦，登录失败了
                        <br/>
                        返回登录页面点击在试一次吧
                    </Typography>
                </ClickAwayListener>
                </div>
            ) 
        }
        
    }
})