import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        padding: theme.spacing(2),
    },
    textCenter: {
        textAlign: 'center',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <Typography variant="body1" className={classes.textCenter}>
                    &copy; {new Date().getFullYear()} Healthify
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
