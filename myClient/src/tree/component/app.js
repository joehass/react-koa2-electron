import React from "react";
import { values } from "mobx";
import { observer } from "mobx-react";

let id = 1;
const randomId = () => ++id;
export const App1 = observer(function app1(props){

    return (
        <div>
            <button onClick={e => props.store.addTodo(randomId(), "New Task")}>
        Add Task
      </button>
      {values(props.store.todos).map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={e => todo.toggle()}
          />
          <input
            type="text"
            value={todo.name}
            onChange={e => todo.setName(e.target.value)}
          />
        </div>
      ))}
    </div>
    )
})