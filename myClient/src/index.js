import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
import AppStore from './store'
import './style/index'//引入样式
// 国际化
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
// 导入mobx组件
import { Provider, Subscribe, Container } from 'unstated';
import useAppStore from './store/index.js'

export function App(){

        const appStore = useAppStore();
        return(
            <Provider {...appStore}>
                <AppRouter/>
            </Provider>
        )
    }

ReactDOM.render(<LocaleProvider locale={zh_CN}><App/></LocaleProvider> , document.getElementById('root'))
