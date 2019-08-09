import React,{useEffect,useReducer} from "react"
import Top from "../top";
import {FabButton} from './FabButton'
import {Chat} from "../chat/index"
import {useMyReducer} from '../../index'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ConversationList } from "../chat/conversationList";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    top:{
        zIndex: 10
    }
}))

//这是主窗口
export default function Main (){

    const classes = useStyles();
    const theme = useTheme();

    const initState = {
        chatOpen:false
    }

    const mainReducer = useMyReducer("MainReducer")

    const [state, dispatch] = useReducer(mainReducer, initState)

    function showChat(){
        dispatch({type:"chat"})
    }

    return(
        <div>
            <Top
                showChat={showChat}
            />
            <FabButton/>
            <Chat/>
        </div>
    )
}
