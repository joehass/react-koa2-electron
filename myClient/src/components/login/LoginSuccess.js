import React from 'react'
import { observer } from "mobx-react";
import Typography from '@material-ui/core/Typography';
import {useStore} from '../../index.js'
import Dialog from "../common/dialog";
import {useState} from "react";

export const LoginSuccess = observer(function(props){
    const store = useStore("LoginStore");
    const {visibled,onClose} = props;
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


    function successLogin(){
        if (store.token!=""){
            return (
                <Typography variant="body1" gutterBottom>
                    欢迎回来${store.user.userName}，开始愉快的玩耍吧
                </Typography>
            )
        }else{
            return (
                <div>
                    <Typography variant="body1" gutterBottom>
                        啊哦，登录失败了，点击在试一次吧
                    </Typography>
                </div>
            ) 
        }
        
    }
})