import React from "react";
import {makeStyles} from "@mui/styles";
import {Container, Typography, TextField, Button, Link} from "@mui/material";
import {useSpring, animated} from "react-spring";
import axios from "axios";
import Navbar from "../header";
import {useNavigate} from "react-router-dom";
import backendUrl from "../../../src/Components/config/Constants";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(8),
    },
    title: {
        marginBottom: theme.spacing(3),
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
        },
    },
    button: {
        marginTop: theme.spacing(3),
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
        },
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const titleProps = useSpring({
        from: {opacity: 0, transform: "translateY(-30px)"},
        to: {opacity: 1, transform: "translateY(0)"},
    });

    const formProps = useSpring({
        from: {opacity: 0, transform: "translateX(-30px)"},
        to: {opacity: 1, transform: "translateX(0)"},
    });

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Form validation
        if (email === "" || password === "") {
            console.log("Please fill in all fields");
            return;
        }

        if (email === "admin" && password === "admin") {
            sessionStorage.setItem("role", "admin");
            navigate("/admin");
        } else {
            try {
                const response = await axios.post(`${backendUrl}/auth/login`, {
                    email,
                    password,
                });
                const data = response.data.data;
                console.log(data);
                console.log(data.user);
                console.log(data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                sessionStorage.setItem("token", data.token);
                navigate("/");
                // Handle successful login, e.g., redirect to dashboard
            } catch (error) {
                console.error("Error logging in:", error.message);
                window.alert("Error logging in!");
                // Handle login error, e.g., display error message to the user
            }
        }
    };

    return (
        <div>
            <Navbar/>
            <Container className={classes.container}>
                <animated.div style={titleProps}>
                    <Typography variant="h4" className={classes.title}>
                        Log In
                    </Typography>
                </animated.div>
                <animated.form
                    className={classes.form}
                    style={formProps}
                    onSubmit={handleSubmit}
                >
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
                        Forgot Password?
                    </Link>
                </animated.form>
            </Container>
        </div>
    );
};

export default LoginPage;
