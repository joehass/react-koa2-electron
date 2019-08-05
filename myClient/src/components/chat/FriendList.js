import React, { useReducer, useCallback } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { observer } from "mobx-react-lite";

export const FriendList = observer(function(prop){

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
            </ListItem>
            <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                        <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Ali Connors
                     </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }/>
        </List>
    )
})
