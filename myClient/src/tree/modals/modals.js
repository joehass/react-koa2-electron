import React from "react";
import { render } from "react-dom";
import { types, getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react";
import { values } from "mobx";

const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false)
  })
  .actions(self => {
    function setName(newName) {
      self.name = newName;
    }

    function toggle() {
      self.done = !self.done;
    }

    return { setName, toggle };
  });

const User = types.model({
  name: types.optional(types.string, "")
});

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.map(Todo)
  })
  .views(self => ({
    get pendingCount() {
      return values(self.todos).filter(todo => !todo.done).length;
    },
    get completedCount() {
      return values(self.todos).filter(todo => todo.done).length;
    },
    getTodosWhereDoneIs(done) {
      return values(self.todos).filter(todo => todo.done === done);
    }
  }))
  .actions(self => {
    function addTodo(id, name) {
      self.todos.set(id, Todo.create({ name }));
    }

    return { addTodo };
  });

const store = RootStore.create({
  users: {},
  todos: {
    "1": {
      name: "Eat a cake",
      done: true
    }
  }
});

export default store