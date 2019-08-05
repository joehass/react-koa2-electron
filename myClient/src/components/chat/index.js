import React from 'react'
import { observer } from "mobx-react-lite";
import {ConversationList} from './conversationList'

export const Chat = observer(function (props){

    return (
        <ConversationList />
    )
})