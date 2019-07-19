import React from "react";
import { types,snapshot,applySnapshot} from "mobx-state-tree";
import { observer } from "mobx-react";
import {useStore} from './index'
let id = 1;
const randomId = () => ++id;
export default observer(function Test(){
    const store = useStore();
    async function click(){
        let values = {
            userName:"1",
            userAccount:"2",
            password:"3",
            sex:"0"
        }
        store.RegisterStore.registerAction(values)
        console.log(store.RegisterStore)
    }
  
    return (
        <div>
            <button onClick={click}>
        Add Task
      </button>
      <div>
        <div>

         </div>
      </div>
    </div>
    )
  })