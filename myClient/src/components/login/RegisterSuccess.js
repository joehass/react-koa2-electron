import React from 'react';
import Typography from '@material-ui/core/Typography';
import { observer } from "mobx-react";
import Dialog from "../common/Modal";
import {useStore} from '../../index.js'
import {useState} from "react";

export const RegisterSuccess = observer(function (props){

    const store = useStore("LoginStore")
    const {visibled,onClose} = props;
    const [open,setOpen] = useState(visibled);

    return (
        <Dialog
            componet = {registerSuccess}
            visibled={open}
            onClose = {closeLogin}
        />
    )

    function closeLogin(){
        setOpen(!open);
        console.log(open);
        onClose()
    }

    function registerSuccess(){
        return(
            <div>
                <Typography variant="button" display="block" gutterBottom>       
                    恭喜你注册成功
                  <br/>
                   您的亲密号是{store.user.intimacy},赶快邀请您的小伙伴一起玩耍吧
                </Typography>
            </div>
        )
    }
})