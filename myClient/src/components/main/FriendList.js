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


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },

    sex:{
        paddingRight:'29%'
    },
    head:{
        paddingRight:'19%'
      }
  });
  
export const FriendList = observer(function(prop){
    const {visibled,onClose} = prop  
    const classes = useStyles();

    const loginStore = useStore("LoginStore")
    const friendStore = useStore("FriendStore")
    const friendLilstReducer = useMyReducer("FriendListReducer")
   // friendStore.friendsRecommend()//调用好友推荐接口，获取推荐的好友

    const initState = {
        open:visibled
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


    function main(){
        return (  
            <Grid container className={formStyle.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={4}>
                    {
                        friends.map((item,index)=>{
                            return(
                                <Grid key={index} item>
                                <Card className={classes.card} key={index}>
                                    <CardContent>
                                    <Grid container>
                                        <AccountCircle />
                                        <Typography className={classes.head} variant="h6" color="textSecondary" gutterBottom>
                                            {item.user.userName}
                                        </Typography>
                                        <Typography className={classes.head} variant="subtitle1" color="textSecondary" gutterBottom>
                                            {item.user.sex == 0 ? '男':'女'}
                                        </Typography>
                                        </Grid>
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
        )
    }
})