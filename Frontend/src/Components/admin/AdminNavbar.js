import React from 'react';
import {makeStyles} from '@mui/styles';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import {NavLink, useNavigate} from 'react-router-dom';

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
}));

const AdminNavbar = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <NavLink to='/admin' className={classes.navItem} activeClassName="active">
                    Admin Dashboard
                    </NavLink>
                </Typography>
                <NavLink
                    to="/admin/hospitals"
                    className={classes.navItem}
                    activeClassName="active"
                >
                    Hospitals
                </NavLink>
                <NavLink
                    to="/admin/doctors"
                    className={classes.navItem}
                    activeClassName="active"
                >
                    Doctors
                </NavLink>
                <NavLink
                    to="/admin/hospital/register"
                    className={classes.navItem}
                    activeClassName="active"
                >
                    Register Hospital
                </NavLink>
                <NavLink to="/login" onClick={() => {navigate('/login')}} className={classes.navItem} activeClassName="active">
                    Logout
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default AdminNavbar;
