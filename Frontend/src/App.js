import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignupPage from './components/auth/signup';
import theme from './components/auth/theme';
import LoginPage from "./components/auth/login";
import {Password} from '@mui/icons-material';
import PasswordRecoveryPage from './components/auth/password-recovery';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/auth/header";

function App() {
    return (
        <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                        <Route path="/" element={<Navbar />}/>
                        <Route path="/signup" element={<SignupPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/password-recovery" element={<PasswordRecoveryPage/>}/>
                    </Routes>
                </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
