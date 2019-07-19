import React from 'react';
import { observer } from "mobx-react";


export default observer(function TodoCounterView(props){
    return (
        <div>
      {props.store.pendingCount} pending, {props.store.completedCount} completed
    </div>
    )
});