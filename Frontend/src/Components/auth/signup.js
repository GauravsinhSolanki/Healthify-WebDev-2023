import React from 'react';
import {makeStyles} from '@mui/styles';
import {Container, Typography, TextField, Button, MenuItem, FormControl, Select, InputLabel} from '@mui/material';
import {useSpring, animated} from 'react-spring';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Navbar from "../header";
import backendUrl from "../config/Constants";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(8),
    },
    title: {
        marginBottom: theme.spacing(3),
        fontFamily: 'Roboto Mono, monospace', // A techy font
        color: '#00adb5', // A techy color
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
    roleSelect: {
        width: '80%',
        maxWidth: '400px',
        margin: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(3), // Add vertical spacing between last field and button
        backgroundColor: '#00adb5', // A techy color for the button
        color: '#ffffff', // White text on the button
        transition: 'background-color 0.3s, transform 0.2s',
        '&:hover': {
            backgroundColor: '#007d8f', // A techy color on hover
            transform: 'scale(1.1)', // Slight scale-up on hover
        },
        '&:active': {
            backgroundColor: '#00565f', // A techy color on button click
            transform: 'scale(0.9)', // Slight scale-down on button click
        },
    },
    passwordStrengthMeter: {
        width: '80%',
        maxWidth: '400px',
        height: '10px',
        marginTop: theme.spacing(1),
        borderRadius: '5px',
        overflow: 'hidden',
        backgroundColor: '#f1f1f1',
    },
    passwordStrengthBar: {
        height: '100%',
        transition: 'width 0.3s ease',
    },
}));

const SignupPage = () => {
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

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [role, setRole] = React.useState('');
    const [formErrors, setFormErrors] = React.useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });


    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const [passwordStrength, setPasswordStrength] = React.useState(0);

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password);

        // Password strength validation using regular expressions
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const goodRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (strongRegex.test(password)) {
            setPasswordStrength(100);
        } else if (mediumRegex.test(password)) {
            setPasswordStrength(75);
        } else if (goodRegex.test(password)) {
            setPasswordStrength(50);
        } else {
            setPasswordStrength(25);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Form validation
        const errors = {
            firstName: firstName === '',
            lastName: lastName === '',
            email: email === '' || !/^\S+@\S+\.\S+$/.test(email),
            password: password === '',
            confirmPassword: confirmPassword === '' || confirmPassword !== password,
        };
        setFormErrors(errors);

        // If there are no errors, proceed with form submission
        if (!Object.values(errors).some((error) => error)) {
            try {
                // Perform signup logic here and send a POST request to the API
                await axios.post(`${backendUrl}/auth/signup`, {
                    firstName,
                    lastName,
                    email,
                    password,
                    role,
                }).then((res) => {
                    console.log(res.data);
                    window.alert("Account created successfully!");
                    navigate('/login');
                }).catch((err) => {
                    console.error(err);
                    window.alert(err.response.data.error);
                });
                // Handle successful response, e.g., redirect to login page
            } catch (error) {
                console.error('Error submitting the form:', error);
            }
        }
    };

    return (
        <div>
            <Navbar/>
            <Container className={classes.container}>
                <animated.div style={titleProps}>
                    <Typography variant="h4" className={classes.title}>
                        Sign Up
                    </Typography>
                </animated.div>
                <animated.form className={classes.form} style={formProps} onSubmit={handleSubmit}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        required
                        error={formErrors.firstName}
                        helperText={formErrors.firstName && 'Please enter your first name'}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        required
                        error={formErrors.lastName}
                        helperText={formErrors.lastName && 'Please enter your last name'}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        required
                        error={formErrors.email}
                        helperText={formErrors.email && 'Please enter a valid email address'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        error={formErrors.password}
                        helperText={formErrors.password && 'Please enter a strong password'}
                        value={password}
                        onChange={handlePasswordChange} // Attach the function here
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        required
                        error={formErrors.confirmPassword}
                        helperText={formErrors.confirmPassword && 'Please enter the same password as above'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className={classes.passwordStrengthMeter}>
                        <div
                            className={classes.passwordStrengthBar}
                            style={{
                                width: `${passwordStrength}%`,
                                backgroundColor:
                                    passwordStrength >= 75
                                        ? '#4CAF50'
                                        : passwordStrength >= 50
                                            ? '#FFC107'
                                            : passwordStrength >= 25
                                                ? '#f44336'
                                                : '#f1f1f1',
                            }}
                        />
                    </div>
                    <FormControl variant="outlined" className={classes.roleSelect}>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            value={role}
                            onChange={handleRoleChange}
                            label="Role"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Patient">Patient</MenuItem>
                            <MenuItem value="Doctor">Doctor</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        className={classes.button}
                        variant="contained"
                        size="large"
                        type="submit"
                    >
                        Sign Up
                    </Button>
                    {Object.values(formErrors).some((error) => error) && (
                        <Typography variant="body2" className={classes.errorText}>
                            Please fill in all the required fields correctly.
                        </Typography>
                    )}
                </animated.form>
            </Container>
        </div>
    );
};

export default SignupPage;
