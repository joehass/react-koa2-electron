import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import history from './history';

import Main from '../components/main/index'
import {Login} from "../components/login/Login";
import {ConversationList} from "../components/chat/conversationList"

function AppRouter(){
        return(
            <div>
                <Router history={history}>
                    <Route path='/' component={Main}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/chat/chatContent' component={ConversationList}/>
                </Router>
            </div>
        )}

export default AppRouter;
