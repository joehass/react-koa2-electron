import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Dialog from "../common/Dialog";
import formStyle from "../common/style";
import {PersonAdd,Lock} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import HttpUtil from '../../util/Http'
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {useStore} from '../../index.js'
import { observer } from "mobx-react";


export const Register =  observer(function(props){
    const store = useStore("RegisterStore");
    const {visibled,onClose} = props;
    const [open,setOpen] = useState(visibled);
    const [value, setValue] = React.useState(1);

    const classes = formStyle();
    return (
        <Dialog
            componet = {register}
            visibled={open}
            onClose = {closeRegister}
        />
    );

    function register(){
        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    注册
                </Typography>
                <form onSubmit={sub}>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <PersonAdd/>
                            </Grid>
                            <Grid item>
                                <TextField name="userAccount" className={classes.textFieldWithIcon} id="input-with-icon-grid" label="用户名" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <PersonAdd/>
                            </Grid>
                            <Grid item>
                                <TextField name="userName" className={classes.textFieldWithIcon} id="input-with-icon-grid" label="昵称" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Lock/>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="password"
                                    label="密码"
                                    className={classes.textFieldWithIcon}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    name="password1"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="flex-end">
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender"
                                    //className={classes.group}
                                    value={value}
                                    onChange={handleChange}
                                >
                                    {/*
                                      container:代表横向排列
                                      item:代表纵向排列

                                      sm: 容器宽度

                                    */}
                                    <Grid container spacing={1}>
                                    <FormControlLabel
                                        value="0"
                                        control={<Radio color="primary" />}
                                        label="男生"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio color="primary"/>}
                                        label="女生"
                                        labelPlacement="start"
                                    />
                                    </Grid>
                                </RadioGroup>
                        </Grid>

                    </div>

                    <Button variant="contained" type="submit" color="primary" className={classes.button}>
                        注册
                    </Button>
                </form>
            </div>
        )
    }

    function closeRegister(){
        setOpen(!{open});
        onClose();
    }

    function handleChange(event) {
        setValue(event.target.value);
    }


    async function sub (value){
        value.preventDefault();//阻止表单提交
        let userName = value.target.userName.value;
        let userAccount = value.target.userAccount.value;
        let password = value.target.password1.value;
        let gender = value.target.gender.value;
        const {registerAction} = store

        let values = {
            userName:userName,
            userAccount:userAccount,
            password:password,
            sex:gender
        }

        await registerAction(values)
    }

    //TODO: 注册之后逻辑
    function registerAfter(){
        const {register} = store
    }
})
