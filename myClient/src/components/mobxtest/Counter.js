import React from 'react';
import { observer, useLocalStore } from 'mobx-react-lite'

export const Counter = observer(props => {
  const store = useLocalStore(
    // don't ever destructure source, it won't work
    source => ({
      count: props.initialCount,
      get multiplied() {
        // you shouldn't ever refer to props directly here, it won't see a change
        return source.multiplier * store.count
      },
      inc() {
        store.count += 1
      },
    }),
    props, // note props passed here
  )
  return (
    <>
      <button id="inc" onClick={store.inc}>
        {`Count: ${store.count}`}
      </button>
      <span>{store.multiplied}</span>
    </>
  )
})