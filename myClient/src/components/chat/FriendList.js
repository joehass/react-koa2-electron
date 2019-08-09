import React, { useReducer, useCallback,useEffect} from 'react'
import { observer } from "mobx-react";
import {useStore, useMyReducer} from '../../index'
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { values } from "mobx";
import List from '@material-ui/core/List';
import Draw from '../common/Draw'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Scrollbars } from 'react-custom-scrollbars';
import { UserInfo } from './userInfo';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      height: "100%",
      maxWidth: 274,
      backgroundColor: theme.palette.background.paper,
      borderRight:"1px rgba(0, 0, 0, 0.12) solid",
    },
    drawer: {
      width: 274,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      top: -69,
      
    },
    div:{
      left:68,
      marginTop: 70
    }
  }));

export const FriendsList = observer(function(prop){
    const classes = useStyles();
    const initState = {
        friendListLength:0,
        showUserinfo:false,
        targetInfo:{}
    }

    const friendStore = useStore("FriendStore")
    const loginStore = useStore("LoginStore")
    const friendListReducer = useMyReducer("FriendListReducer")
    const [state, dispatch] =useReducer(friendListReducer,initState)
    //当页面渲染时获取所有的会话列表
    useEffect(()=>{
        async function getAllFriend(){
            if(!!loginStore.user){
                let userid = loginStore.user.intimacy
                await friendStore.getAllFriend(userid)
                let length = values(friendStore.friend).length
                dispatch({type:"friendListLength",friendListLength:length})
            }  
        }
        getAllFriend()
    },[dispatch])

    return (
      <div className={classes.div}>
       <Draw>
        <List component="nav" aria-label="main mailbox folders" className={classes.root}>
            {values(friendStore.friend).length === 0?
              (<Typography variant="h6" gutterBottom>
                暂时无好友，快使用好友推荐功能增加好友吧
              </Typography>):(
                
                <Scrollbars style={{ width: 236, height: "100%" }}>
                {values(friendStore.friend).map((item,index)=>{
                    return (
                    <div>
                    <ListItem key={index} button alignItems="flex-start" onClick={showUserinfo.bind(this,item)}>
                        <ListItemAvatar>
                            <AccountCircle />
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.user.userName}
                        />
                    </ListItem>
                    <Divider/> 
                    </div>  
                    )
                })}
                </Scrollbars>
              )
            }
        </List>
        </Draw>
            {
                state.showUserinfo?
                <UserInfo
                    userinfo={state.targetInfo}
                />:null
            }
        </div>
    )

    function showUserinfo(userinfo){
        dispatch({type:"showUserinfo",targetInfo:userinfo.user})
    }
})
