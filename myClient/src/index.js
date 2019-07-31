import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
import './style/index'//引入样式
import AppStore from './store/index'
import { useLocalStore} from 'mobx-react-lite'
import AppReducer from './reducer/index.js'

const storeContext = React.createContext()
const reducerContext = React.createContext()
export function App(){
    const store = useLocalStore(AppStore)
    const reducerStore = useLocalStore(AppReducer)
    return(
        <reducerContext.Provider value={reducerStore}>
            <storeContext.Provider value={store}>
                <AppRouter/>
            </storeContext.Provider>
       </reducerContext.Provider>
        )
    }

ReactDOM.render(<App/>, document.getElementById('root'))

export function useStore(name){
    const store = React.useContext(storeContext)
    if (!store[name]) {
        throw new Error("没有找到store")
    }
    return store[name]
  }

  export function useMyReducer(name){
    const store = React.useContext(reducerContext)
    if (!store[name]) {
        throw new Error("没有找到reducer")
    }
    return store[name]
  }