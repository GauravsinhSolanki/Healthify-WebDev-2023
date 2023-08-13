import React from 'react';
import { makeStyles } from '@mui/styles';
import {AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Button} from '@mui/material';
import {NavLink, useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HelpIcon from '@mui/icons-material/Help';
import DescriptionIcon from '@mui/icons-material/Description';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.secondary.main,
    },
    navItem: {
        margin: theme.spacing(0, 1.5),
        color: '#ffffff',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        '&.active': {
            borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '1.5rem',
        color: '#ffffff',
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const isUserLoggedIn = !!sessionStorage.getItem('token');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        handleProfileMenuClose();
        navigate('/login');
    };

    const handleProfileClick = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        if (user.role === 'Doctor') {
            navigate('/doctor-profile');
        } else if (user.role === 'Patient') {
            navigate('/');
        }

        handleProfileMenuClose();
    };

    const navigateToPrescriptions = (event) => {
        event.preventDefault();
        if (user.role === 'Doctor') {
            navigate('/doctor/prescribe');
        } else if (user.role === 'Patient') {
            navigate('/patient/prescriptions');
        }
    };


    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <NavLink to="/" className={classes.navItem} activeClassName="active">
                        Healthify
                    </NavLink>
                </Typography>
                {!isUserLoggedIn ? (
                    <>
                        <NavLink to="/signup" className={classes.navItem} activeClassName="active">
                            <AccountCircleIcon className={classes.icon} />
                            Sign Up
                        </NavLink>
                        <NavLink to="/login" className={classes.navItem} activeClassName="active">
                            <LoginIcon className={classes.icon} />
                            Log In
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/hospitals" className={classes.navItem} activeClassName="active">
                            <LocalHospitalIcon className={classes.icon} />
                            Hospitals
                        </NavLink>
                        <NavLink to="/patientProfile" className={classes.navItem} activeClassName="active">
                            <LocalHospitalIcon className={classes.icon} />
                            Patient
                        </NavLink>
                        <NavLink onClick={navigateToPrescriptions} className={classes.navItem} activeClassName="active">
                            {/* <LocalPharmacyIcon className={classes.icon} /> */}
                            Prescriptions
                        </NavLink>
                        <NavLink to="/faq" className={classes.navItem} activeClassName="active">
                            <HelpIcon className={classes.icon} />
                            FAQ
                        </NavLink>
                        <NavLink to="/blog" className={classes.navItem} activeClassName="active">
                            <DescriptionIcon className={classes.icon} />
                            Blog
                        </NavLink>
                        <NavLink to="/contactUs" className={classes.navItem} activeClassName="active">
                            <MailOutlineIcon className={classes.icon} />
                            Contact Us
                        </NavLink>
                        <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                            <PersonIcon style={{ color: '#ffffff' }} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleProfileMenuClose}
                        >
                            <MenuItem onClick={handleProfileMenuClose}>
                                <NavLink onClick={handleProfileClick} className={classes.navItem} style={{color: "black"}}>
                                    Profile
                                </NavLink>
                                <Button className={classes.navItem} onClick={handleProfileClick} style={{color: "black"}}>
                                    Profile
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleProfileMenuClose}>
                                <NavLink onClick={() => {sessionStorage.removeItem('token')}} to="/" className={classes.navItem} style={{color: "black"}}>
                                    Logout
                                </NavLink>
                                <Button className={classes.navItem} onClick={handleLogout} style={{color: "black"}}>
                                    Logout
                                </Button>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
