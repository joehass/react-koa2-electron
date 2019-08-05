import React, { useReducer, useCallback,useEffect} from 'react'
import { observer } from "mobx-react-lite";
import {useStore, useMyReducer} from '../../index'

export const ConversationList = observer(function(prop){

    const conversationStore = useStore("ConversationStore")
    const loginStore = useStore("LoginStore")

    const convers = useCallback(()=>{
        let userid = loginStore.user.intimacy
        await conversationStore.getAllConversation(userid)
    })

    //当页面渲染时获取所有的会话列表
    useEffect(()=>{
        async function getConvers(){
            
        }

        await getConvers()
    },[getConvers])

    return (
        <div>
            会话列表
        </div>
    )

})
