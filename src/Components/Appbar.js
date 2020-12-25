import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

function Appbar(props) {


    return (
        <>
            <AppBar position="sticky" color="secondary">
                <Toolbar variant="app">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        MyNotes
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Appbar;
