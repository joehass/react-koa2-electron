import {useState} from "react";
import React from "react";
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
// import {Settings,PersonAdd, Close,CropDin,Remove} from '@material-ui/icons';
import Dialog from "../common/Dialog";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Toolbar from "../top";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 320,
    },
    dense: {
        marginTop: 19,
    }
}));

export default (props) =>{
    const classes = useStyles();
    const {visibled,onClose} = props;
    const [open,setOpen] = useState(visibled);
    return (
        <div>
            <Dialog
                componet = {login}
                visibled={open}
                onClose = {closeLogin}
            />
        </div>
    );

    function login(){
        return (
            <div>
                <Typography variant="h5" id="simple-modal-description">
                    登录
                </Typography>
                <form onSubmit={sub}>
                    <TextField
                        id="user"
                        label="用户名"
                        className={clsx(classes.textField, classes.dense)}
                        margin="dense"
                        name="user"
                    />
                    <TextField
                        id="password"
                        label="密码"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        name="password"
                    />

                    <Button variant="contained" type="submit" color="primary" className={classes.button}>
                        登录
                    </Button>
                    <a style={{color:'rgba(0, 0, 0, 0.65)'}}>
                    <Typography variant="overline" display="block" gutterBottom>
                        没有账号？立即注册
                    </Typography>
                    </a>
                </form>
            </div>
        )
    }

    function closeLogin(){
        setOpen(!{open});
        onClose()
    }

    function sub(value){
        let user = value.target.user.value;
        let password = value.target.password.value;
    }
}
