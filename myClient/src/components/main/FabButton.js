import React, { useReducer, useState } from 'react'
import { observer } from "mobx-react-lite";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import {useMyReducer} from '../../index'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Chat} from '@material-ui/icons/';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
    button: {
        // position: "relative",
        // left: 866,
        // top: 480,
    },

    root: {
        flexGrow: 1,
        position: "relative",
        left: 850,
        top: 440,
        width:0
      },
    ListItemIcon:{
        width:100,
    },

    avatar: {
        margin: 10,
      },
  }));



export const FabButton = observer(function(){
    const initialState = {
        fabOpen:true
    }
    const FabReducer = useMyReducer("FabReducer")
    const [state, dispatch] = useReducer(FabReducer,initialState)
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    return (
        <div className={classes.root}>
            <Grid item xs={1} zeroMinWidth> 
                <Grow in={checked}>
                    <List>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Chat/>
                                </Avatar>
                            </ListItemAvatar>
                        </ListItem>
                    </List>
                </Grow>
                <ClickAwayListener onClickAway={mouseOver}>
                {/* <Zoom
                    in={value === index}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                    }}
                    unmountOnExit
                > */}
                    <Fab color="primary" onClick={mouseOver} aria-label="add" className={classes.button}>
                        <AddIcon/>
                    </Fab>
                    {/* </Zoom> */}
                </ClickAwayListener>
            </Grid>
        </div>
    )
    function mouseOver(){
        setChecked(prev => !prev);
        // dispatch({type:'fabOpen'})
    }
})