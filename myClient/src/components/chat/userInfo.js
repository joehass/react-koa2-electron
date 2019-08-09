import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';
import { browserHistory } from 'react-router'
import history from '../../router/history'
import {useStore, useMyReducer} from '../../index'
import useChangePage from "../../util/useChangePage"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    position: "fixed",
    left: 323,
    top: 100,
  },
  content:{
    paddingBottom: 15
  },
  p:{
    padding: "10px 0px"
  },
  b:{
    paddingRight: 50
  },
  button:{
      paddingLeft:66
  }
});

export const UserInfo = observer((props) => {
  const classes = useStyles();
  const chatStore = useStore("ChatStore")
  const {userinfo} = props
  const changePage = useChangePage("openConvers",userinfo)
  return (
    <Card className={classes.card}>
      {/* <CardActionArea> */}
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {userinfo.userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                <b className={classes.b}>亲密号：</b> <b>{userinfo.intimacy}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
            <b className={classes.b}>&emsp;昵称：</b><b>{userinfo.userName}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
            <b className={classes.b}>&emsp;性别：</b><b>{userinfo.sex===0?"男":"女"}</b>
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}


      <CardActions className={classes.button}>
        <Button size="larger" color="primary" onClick={openConver}>
          发消息
        </Button>
      </CardActions>
    </Card>
  );

        function openConver(){
           
        }
})