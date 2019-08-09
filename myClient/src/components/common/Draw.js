import React from "react"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    div:{
        height: "100%",
        display: "flex",
        zIndex: 1200,
        position: "fixed",
        overflowY: "auto", //对窗口上下进行裁剪
        flexDirection: "column",
        top: 53,
        width:236,
        left: 68,
    },
    paper:{
        height: "100%"
      },
}))

export default function Draw(props){
    const {children} = props
    const classes = useStyles();
    return (
        <div className={classes.div}>
             <Paper className={classes.paper}>
                {children}
            </Paper>
        </div>
    )
}