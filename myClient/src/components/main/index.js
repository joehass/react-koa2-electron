import React,{useEffect} from "react"
import Top from "../top";
import {FabButton} from './FabButton'
import {Chat} from "../chat/index"
//这是主窗口
export default function Main (){

    return(
        <div>
            <Top/>
            <FabButton/>
            <Chat/>
        </div>
    )
}
