import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

export const Message = observer(function(props){
    const classes = useStyles();
    const {content,visibled,onClose} = props
    const [anchorEl, setAnchorEl] = React.useState(visibled);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    function handleClose() {
        setAnchorEl(null);
        onClose()
    }

    return (
        <Popover
            id={id}
            open={open}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 20, left: 447 }}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
      >
        <Typography className={classes.typography}>{content}</Typography>
      </Popover>
    )

    function info (message){
        return (
            <Popover
                id={id}
                open={open}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 20, left: 600 }}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
          >
            <Typography className={classes.typography}>{message}</Typography>
          </Popover>
        )
    }
    
})