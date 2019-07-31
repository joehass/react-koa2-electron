import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        minWidth: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
}));

export default (props)=>{
    const {visibled,onClose,componet} = props;
    const [open, setOpen] = React.useState(visibled);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const {width} = props
    //相当于componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
    useEffect(() => {
        // Update the document title using the browser API

    });

    const handleClose = () => {
        setOpen(false);
        onClose()
    };
    const classes = useStyles();
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={visibled}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    {componet()}
                </div>
            </Modal>
        </div>
    );
}
