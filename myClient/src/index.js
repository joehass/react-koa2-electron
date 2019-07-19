import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
import './style/index'//引入样式
import AppStore from './store/index'
import Main from './components/main/index'
import SmartTodo from './components/mobxtest/index'
import { useLocalStore} from 'mobx-react-lite'
import { Provider } from 'mobx-react';

const storeContext = React.createContext()
export function App(){
    const store = useLocalStore(AppStore)
    return(
       <storeContext.Provider value={store}>
            <AppRouter/>
       </storeContext.Provider>
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