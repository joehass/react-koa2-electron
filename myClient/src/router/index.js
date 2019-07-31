import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect} from "react-router-dom";

import Main from '../components/main/index'
import Login from "../components/login/Login";

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
