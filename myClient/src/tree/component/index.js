import React from 'react';
import { observer } from "mobx-react";
import { values } from "mobx";
import TodoView from './TodoView'
import TodoCounterView from './TodoCounterView'

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

export default observer(function AppView(props){

    return (
        <div>
      <button onClick={e => props.store.addTodo(randomId(), "New Task")}>
        Add Task
      </button>
      {values(props.store.todos).map(todo => (
        <TodoView todo={todo} />
      ))}
      <TodoCounterView store={props.store} />
    </div>
    )
});