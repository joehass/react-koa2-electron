import React, { useReducer, useCallback } from 'react'
import { observer } from "mobx-react-lite";
import {useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useStore, useMyReducer} from '../../index'
import Grid from '@material-ui/core/Grid';
import formStyle from '../common/style'
import DraggableDialog from '../common/DraggableDialog'
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Message} from '../common/message';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 400,
      minWidth:250
    },

    sex:{
        paddingRight:'29%'
    },
    head:{
        lineHeight:3
      },
      button: {
        margin: theme.spacing(1),
        paddingLeft:64
    },
  }));
  
export const FriendList = observer(function(prop){
    const {visibled,onClose} = prop  
    const classes = useStyles();

    const loginStore = useStore("LoginStore")
    const friendStore = useStore("FriendStore")
    const friendLilstReducer = useMyReducer("FriendListReducer")
   // friendStore.friendsRecommend()//调用好友推荐接口，获取推荐的好友

    const initState = {
        open:visibled,
        fridendSuccess:false
    }

    let friends = friendStore.toJSON().friend


    const [state, dispatch] = useReducer(friendLilstReducer,initState)

    return (
        <DraggableDialog
            component = {main}
            visibled={state.open}
            onClose = {closeFriendList}
        /> 
    )

    function closeFriendList(){
        dispatch({type:'open'})
        onClose()
    }

    async function addFriend(value){
        dispatch({type:'addFriendSuccess'})
        let values = {
            userid:loginStore.user.intimacy,
            friendid:value.user.intimacy
        }
        await friendStore.addFriend(values)
    }
    function onCloseFriend(){
        dispatch({type:'onCloseAddFriendSuccess'})
    }

    function main(){
        return (
            <div>
            <Grid container className={formStyle.root} spacing={1}>
                <Grid item xs={"20"}>
                    <Typography className={classes.head} variant="h6" gutterBottom>
                            好友推荐
                    </Typography>
                    <Grid container justify="center" spacing={2}>
                    {
                        friends.map((item,index)=>{
                            return(
                            <Grid key={index} item>
                                <Card className={classes.card} key={index}>
                                    <CardContent>
                                    <Grid container>
                                    <IconButton
                                        aria-label="Account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                        >
                                        <AccountCircle/>
                                    </IconButton>

                                    <Typography className={classes.head} variant="h6" color="textSecondary" gutterBottom>
                                        {item.user.userName}({item.user.intimacy})
                                    </Typography>
                                        </Grid>
                                        <Button color="primary" className={classes.button} onClick={addFriend.bind(this,item)}>
                                            +加好友
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                )
            }
                    </Grid>
                </Grid>
            </Grid>
            {state.fridendSuccess?
             <Message 
                content={"您已成功添加好友"}
                visibled={state.fridendSuccess}
                onClose = {onCloseFriend}
                />
                :null
            }
            </div>
        )
    }
})