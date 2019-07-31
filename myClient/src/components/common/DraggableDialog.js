import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    content:{
        height:300
    }
  });

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
    const {visibled,component,onClose} = props
    const [open, setOpen] = React.useState(visibled);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(!open);
        onClose()
    };
    
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                maxWidth={'xl'}
                fullWidth={true}
            >
                <DialogContent classes = {classes.content}>
                    {component()}
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        确定
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        取消
                    </Button>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}