<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import Navbar from "../header";
import {useNavigate} from "react-router-dom";
import backendUrl from "../../config/Constants";


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
=======
import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import Navbar from "../header";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../../src/Components/config/Constants";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
    marginTop: theme.spacing(8),
  },
  title: {
    marginBottom: theme.spacing(3),
<<<<<<< HEAD
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
=======
    fontFamily: "Roboto Mono, monospace",
    color: "#00adb5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
      maxWidth: "400px",
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
    },
  },
  button: {
    marginTop: theme.spacing(3),
<<<<<<< HEAD
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
=======
    backgroundColor: "#00adb5",
    color: "#ffffff",
    transition: "background-color 0.3s, transform 0.2s",
    "&:hover": {
      backgroundColor: "#007d8f",
      transform: "scale(1.1)",
    },
    "&:active": {
      backgroundColor: "#00565f",
      transform: "scale(0.9)",
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const titleProps = useSpring({
<<<<<<< HEAD
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const formProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
=======
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const formProps = useSpring({
    from: { opacity: 0, transform: "translateX(-30px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  });

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Form validation
<<<<<<< HEAD
    if (email === '' || password === '') {
      console.log('Please fill in all fields');
=======
    if (email === "" || password === "") {
      console.log("Please fill in all fields");
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
      return;
    }

    try {
      // Perform login logic here and send a POST request to the API
      const response = await axios.post(`${backendUrl}/auth/login`, {
        email,
        password,
      });
<<<<<<< HEAD
      console.log('Login successful:', response.data);
=======
      console.log("Login successful:", response.data);
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
      // window.alert('Login successful!');
      navigate("/hospitals");
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
<<<<<<< HEAD
      console.error('Error logging in:', error.message);
      window.alert('Error logging in!');
=======
      console.error("Error logging in:", error.message);
      window.alert("Error logging in!");
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
      // Handle login error, e.g., display error message to the user
    }
  };

  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <animated.div style={titleProps}>
          <Typography variant="h4" className={classes.title}>
            Log In
          </Typography>
        </animated.div>
<<<<<<< HEAD
        <animated.form className={classes.form} style={formProps} onSubmit={handleSubmit}>
=======
        <animated.form
          className={classes.form}
          style={formProps}
          onSubmit={handleSubmit}
        >
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
          <TextField
            label="Email"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
<<<<<<< HEAD
          <Button className={classes.button} variant="contained" size="large" type="submit">
            Log In
          </Button>
          <Link href="#" color="primary" onClick={() => navigate("/password-recovery")}>
=======
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            type="submit"
          >
            Log In
          </Button>
          <Link
            href="#"
            color="primary"
            onClick={() => navigate("/password-recovery")}
          >
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
            Forgot Password?
          </Link>
        </animated.form>
      </Container>
    </div>
  );
};

export default LoginPage;
