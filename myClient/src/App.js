import React from "react";
import { types,snapshot,applySnapshot} from "mobx-state-tree";
import { observer } from "mobx-react";
import Test from "./Test";
let id = 1;
const randomId = () => ++id;
export default function App(props){

    
  
    return (
    <div>
        <Test/>
    </div>
    )
  }