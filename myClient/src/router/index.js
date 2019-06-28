import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// mobx和react-router整合
import {syncHistoryWithStore} from 'mobx-react-router';
import Hot from '../components/hot'
import Forword from '../components/forword'
import Recommend from '../components/recommend'


class AppRouter extends React.Component{

    render(){
        return(
                //定义路由
            <Router>
            <div>
                <nav>
                    <li>
                        <Link to='/'>基础</Link>
                    </li>
                    <li>
                        <Link to='/hot'>热榜</Link>
                    </li>
                    <li>
                        <Link to='/forword'>其他</Link>
                    </li>
                </nav>
                <br/>
                <br/>
                <br/>
            <Route path='/' exact component={Recommend} />
            <Route path='/hot' exact component={Hot} />
            <Route path='/forword' exact component={Forword} />
            </div>
        </Router>    
    )}
}

export default AppRouter;