import React from 'react';
import {makeStyles} from '@mui/styles';
import {Container, Typography, TextField, Button} from '@mui/material';
import {useSpring, animated} from 'react-spring';
import {
    sendPasswordResetEmail
} from 'firebase/auth';
import {auth} from '../config/Firebase';
import Navbar from "../header";
import {useNavigate} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(8),
    },
    title: {
        marginBottom: theme.spacing(3),
        fontFamily: 'Roboto Mono, monospace',
        color: '#00adb5',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '80%',
            maxWidth: '400px',
        },
    },
    button: {
        marginTop: theme.spacing(3),
        backgroundColor: '#00adb5',
        color: '#ffffff',
        transition: 'background-color 0.3s, transform 0.2s',
        '&:hover': {
            backgroundColor: '#007d8f',
            transform: 'scale(1.1)',
        },
        '&:active': {
            backgroundColor: '#00565f',
            transform: 'scale(0.9)',
        },
    },
}));

const PasswordRecoveryPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const titleProps = useSpring({
        from: {opacity: 0, transform: 'translateY(-30px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });

    const formProps = useSpring({
        from: {opacity: 0, transform: 'translateX(-30px)'},
        to: {opacity: 1, transform: 'translateX(0)'},
    });

    const [email, setEmail] = React.useState('');

    const handlePasswordRecovery = async (event) => {
        event.preventDefault();
        // Form validation
        if (email === '') {
            console.log('Please provide your email');
            return;
        }

        try {
            // Perform password recovery logic here and send a POST request to the API
            await sendPasswordResetEmail(auth, email);
            window.alert('Password recovery email sent!');
            navigate('/login');
            // Handle password recovery success, e.g., show a success message to the user
        } catch (error) {
            console.error('Error recovering password:', error.message);
            window.alert('Error recovering password. Please try again later.');
            // Handle password recovery error, e.g., display error message to the user
        }
    };

    return (
        <div>
            <Navbar/>
            <Container className={classes.container}>
                <animated.div style={titleProps}>
                    <Typography variant="h4" className={classes.title}>
                        Password Recovery
                    </Typography>
                </animated.div>
                <animated.form className={classes.form} style={formProps} onSubmit={handlePasswordRecovery}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className={classes.button} variant="contained" size="large" type="submit">
                        Send Recovery Email
                    </Button>
                </animated.form>
            </Container>
        </div>
    );
};

export default PasswordRecoveryPage;
