import React from 'react';
import {makeStyles} from '@mui/styles';
import {Button, AppBar, Toolbar, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.secondary.main,
    },
    navItem: {
        margin: theme.spacing(0, 1.5),
        color: '#ffffff',
        textDecoration: 'none',
        '&.active': {
            borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '1.5rem',
        color: '#ffffff',
    },
    button: {
        color: '#ffffff',
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <NavLink to="/" className={classes.navItem} activeClassName="active">
                        Healthify
                    </NavLink>
                </Typography>
                <NavLink to="/signup" className={classes.navItem} activeClassName="active">
                    Sign Up
                </NavLink>
                <NavLink to="/login" className={classes.navItem} activeClassName="active">
                    Log In
                </NavLink>
                <NavLink to="/faq" className={classes.navItem} activeClassName="active">
                    FAQ
                </NavLink>
                <NavLink to="/blog" className={classes.navItem} activeClassName="active">
                    Blog
                </NavLink>
                <NavLink to="/contactUs" className={classes.navItem} activeClassName="active">
                    Contact Us
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;