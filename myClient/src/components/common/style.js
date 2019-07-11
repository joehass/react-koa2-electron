import makeStyles from "@material-ui/core/styles/makeStyles";

//表单统一样式
const formStyle = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    textField: {//不带图标的输入框
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 320,
    },
    dense: {
        marginTop: 19,
    },
    margin: {
        margin: theme.spacing(1),
    },
    textFieldWithIcon:{//带图标的输入框
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 272,
    }
}));

export default formStyle;

