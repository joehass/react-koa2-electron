import React,{useReducer} from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import formStyle from '../common/style'
import { observer } from "mobx-react-lite";
import {useStore, useMyReducer} from '../../index'
import Dialog from "../common/Modal";

//提醒登录页面
export const LoginTip =  observer(function(props){
    const {visibled,onClose,onLogin} = props  
    const initState = {
        open:visibled
    }
    const friendLilstReducer = useMyReducer("FriendListReducer")

    const [state, dispatch] = useReducer(friendLilstReducer,initState)
    return (
        <Dialog
            componet = {tip}
            visibled={state.open}
            onClose = {closeTip}
        />
    )
    

    function closeTip(){
        dispatch({type:"loginTip"})
        onClose()
    }

    function Login(){
        closeTip()
        onLogin()
    }

    function tip(){
        return (
            <div>
                <Typography variant="body1" gutterBottom>
                    您还没有登录，暂时无法使用此项功能<br/>
                    是否登录？
                </Typography>
                <a style={{color:'rgba(0, 0, 0, 0.65)'}} onClick={Login}>
                        <Typography variant="overline" display="block" gutterBottom>
                            登录
                        </Typography>
                    </a>
                    <a style={{color:'rgba(0, 0, 0, 0.65)'}} onClick={closeTip}>
                        <Typography variant="overline" display="block" gutterBottom>
                            算了，我在想想
                        </Typography>
                    </a>
            </div>
        )
        
    }
})