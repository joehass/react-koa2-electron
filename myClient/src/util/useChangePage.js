import {useReducer} from "react"
import {useStore, useMyReducer} from '../index'
import _ from 'lodash';

export default function useChangePage(props) {
    const {}
    const chatReducer = useMyReducer("ChatReducer")
    const [state,dispatch] = useReducer(chatReducer,initState)

    function change(){
        if (_.eq(value,"openConvers")) {
            dispatch({type:"openConvers"})//跳转到会话页面
        }
    
        if (_.eq(value,"openFriends")){
            dispatch({type:"openFriends"})
        }
    }
    return change
}