import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";
import {IndexRoute} from 'react-router'
// mobx和react-router整合
import {syncHistoryWithStore,useRouterHistory} from 'mobx-react-router';
import {asyncComponent} from './AsyncComponent'

import Main from '../components/main/index'
import Login from "../components/login/Login";
import { useContext } from "unstated-next"
import useAppStore from '../store/index'
import RegisterStore from '../store/registerStore'

function AppRouter(props){
        return(
            <div>
                <Router>
                    <Route path='/' component={Main}/>
                    <Route path='/login' component={Login}/>
                </Router>
            </div>
        )}

export default AppRouter;
