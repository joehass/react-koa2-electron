
import React from 'react';
import { observable } from 'mobx'
import { Observer, useObserver, observer } from 'mobx-react-lite'
import ReactDOM from 'react-dom'

const person = observable({
  name: 'John',
})

// named function is optional (for debugging purposes)
const P1 = observer(function P1({ person }) {
  return <h1>{person.name}</h1>
})

const P2 = ({ person }) => <Observer>{() => <h1>{person.name}</h1>}</Observer>

const P3 = ({ person }) => {
  return useObserver(() => <h1>{person.name}</h1>)
}

ReactDOM.render(
  <div>
    <P1 person={person} />
    <P2 person={person} />
    <P3 person={person} />
  </div>,
  document.getElementById("root")
)

setTimeout(() => {
  person.name = 'Jane'
}, 1000)