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

export const ConversationList = observer(function(prop){
    const classes = useStyles();
    const initState = {
        convers:[] // 会话列表
    }

    const conversationStore = useStore("ConversationStore")
    const loginStore = useStore("LoginStore")
    const conversationReducer = useMyReducer("ConversationReducer")
    const [state, dispatch] = useReducer(conversationReducer,initState)

    //当页面渲染时获取所有的会话列表
    useEffect(()=>{
        async function getConvers(){
            if(!!loginStore.user){
                let userid = loginStore.user.intimacy
                await conversationStore.getAllConversation(userid)
                //let conver = conversationStore.conversation
                // dispatch({type:"getConvers",conver})
            }   
        }
        getConvers()
    },[])

    return (
      <div className={classes.div}>
       <Draw>
        <List component="nav" aria-label="main mailbox folders" className={classes.root}>
            {values(conversationStore.conversation).length === 0?
              (<Typography variant="h6" gutterBottom>
                暂时无会话
              </Typography>):(
                <div>
                <ListItem button alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                />
              </ListItem>
              <Divider/>
              </div>
              )
            }
        </List>
        </Draw>
        </div>
    )
})
