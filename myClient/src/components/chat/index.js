import React,{useEffect,useState, useReducer} from 'react'
import { observer } from "mobx-react-lite";
import {ConversationList} from './conversationList'
import {useStore, useMyReducer} from '../../index'
import {ChatBubble,ChatBubbleOutline,People} from '@material-ui/icons/';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import formStyle from "../common/style";
import { FriendsList } from './FriendList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    div:{
        marginTop: 70
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    ListItem:{
        paddingRight:0,
    },
    ListItemIcon:{
        minWidth: 50,
    }
}))

export const Chat = observer(function (props){

    const initState = {
        openConvers:false,
        openFriends:false
    }

    const loginStore = useStore("LoginStore")
    const classesStyle = formStyle();
    const classes = useStyles();
    const chatReducer = useMyReducer("ChatReducer")
    const [state,dispatch] = useReducer(chatReducer,initState)
    let user
    const [open, setOpen] = useState(false)
    
    useEffect(()=>{
        if(!!loginStore.user){
            user = loginStore.user
            setOpen(!open)
            dispatch({type:"openConvers"})
        }
    },[user])
    return (  
        <div>
         <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                        })}
            open={open}
        >
            <List className={classes.div}>
                <ListItem button onClick={openConvers} color="inherit" className={classes.ListItem}>
                    <ListItemIcon className={classes.ListItemIcon}>
                        <Tooltip title="消息" placement="right">
                        <div className={classesStyle.icon}>
                            <ChatBubble  fontSize="large"/>
                        </div>
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText/>
                </ListItem>
                <ListItem button onClick={openFriends} color="inherit" className={classes.ListItem}>
                    <ListItemIcon className={classes.ListItemIcon}>
                        <Tooltip title="好友" placement="right">
                            <div className={classesStyle.icon}>
                                <People  fontSize="large"/>
                            </div>
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText/>
                </ListItem>
            </List>
        </Drawer>
        {
            state.openConvers?
            <ConversationList/>:null
        }
        {
            state.openFriends?
            <FriendsList/>:null
        }
        </div>
    )

    function openConvers(){
        dispatch({type:"openConvers"})
    }

    function openFriends(){
        dispatch({type:"openFriends"})
    }
})