import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignupPage from './Components/auth/signup';
import theme from './Components/auth/theme';
import LoginPage from "./Components/auth/login";
// import {Password} from '@mui/icons-material';
import PasswordRecoveryPage from './Components/auth/password-recovery';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import FAQPage from "./FAQ";
import Features from "./Hospitals/Features/Features";
import ContactUs from "./ContactUs";
import HospitalList from "./Components/HospitalList/HospitalList";
import Hospital from "./Components/Hospital/Hospital";
import Doctor from "./Components/Doctor/Doctor";
import Profile from "./Profile";
import Blog from "./Blog";
import Single from "./Single";

function App() {
    return (
        <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                        <Route path="/signup" element={<SignupPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/password-recovery" element={<PasswordRecoveryPage/>}/>
                        <Route path="/" element={<Home />} />
                        <Route path="/faq" element={<FAQPage />} />
                        <Route path="/patients" element={<Features />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                        <Route path="/hospitals" element={<HospitalList />} />
                        <Route path="/hospital" element={<Hospital />} />
                        <Route path="/doctor" element={<Doctor />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/single" element={<Single />} />
                    </Routes>
                </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
