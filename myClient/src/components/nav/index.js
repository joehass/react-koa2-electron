import React from "react"
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
import Icon from "antd/es/icon";

export default class Nav extends React.Component{

    state = {
        navItem:[],
        visible:[
            {
                key:'register',
                value:false
            }
        ]
    };

    componentDidMount() {
        const itemLi = [
            {key:'register',value:'注册'},
            {key:'quit',value:'退出软件'}
        ];

        this.setState({
            navItem:itemLi
        })
    }

    render(){
        const {navItem} = this.state;
        return (
            <div className="nav-div">
                <ul>
                    {
                        navItem.map(item=>{
                            return (
                                <li key={item.key} onClick={this.clickli.bind(this,item.key)}>
                                    {this.renderItem(item.key,item.value)}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    renderItem=(title,content)=>{
        return (
            <div className="nav-item">
                {this.renderIcon(title)}
                <Text>
                    {content}
                </Text>
            </div>
        )
    }

    renderIcon=(name)=>{
        switch(name){
            case 'register':
                return (
                    <Icon type="user-add" />
                )
        }
    }

    clickli = (key) =>{
        const {visible} = this.state;
        const {onClick} = this.props;

        visible.map(item=>{
            if (key === item.key){
                item.value = !item.value
            }
        })
        onClick(visible);
    }

    //弹出注册页面
    register = () =>{

    }
}
