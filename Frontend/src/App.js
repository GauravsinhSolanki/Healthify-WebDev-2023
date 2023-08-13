import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignupPage from './Components/auth/signup';
import theme from './Components/auth/theme';
import LoginPage from "./Components/auth/login";
// import {Password} from '@mui/icons-material';
import PasswordRecoveryPage from './Components/auth/password-recovery';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
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
import AdminHospital from "./Components/admin/AdminHospital";
import AdminPage from "./Components/admin/Admin";
import RegisterHospital from "./Components/admin/RegisterHospital";
import AdminDoctors from "./Components/admin/AdminDoctors";
import DoctorProfile from "./Components/Doctor/DoctorProfile";
import Prescribe from "./Components/Doctor/Prescribe";
import DoctorPrescriptions from "./Components/Doctor/DoctorPrescriptions";
import PatientPrescriptions from "./Components/Patient/PatientPrescriptions";
import AdminPatients from "./Components/admin/AdminPatients";
import PatientProfile from "./PatientProfile";

function App() {

    const [token, setToken] = useState(sessionStorage.getItem('token'));

    // This effect will run every time the session storage changes, keeping the token state up to date
    useEffect(() => {
        const handleStorageChange = () => {
            setToken(sessionStorage.getItem('token'));
        };

        // Attach the event listener to the window object
        window.addEventListener('storage', handleStorageChange);

        // Clean up by removing the event listener when the component is unmounted
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

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
                        <Route path='/admin/hospitals' element={<AdminHospital />} />
                        <Route path='/admin/hospital/register' element={<RegisterHospital />} />
                        <Route path='/admin/doctors' element={<AdminDoctors />} />
                        <Route path='/admin/patients' element={<AdminPatients />} />
                        <Route path='/admin' element={<AdminPage />} />
                        <Route path='/doctor-profile' element={<DoctorProfile />} />
                        <Route path="/doctor/prescribe" element={<Prescribe />}/>
                        <Route path="/doctor/prescriptions" element={<DoctorPrescriptions />}/>
                        <Route path="/patient/prescriptions" element={<PatientPrescriptions />}/>
                        <Route path="/patientProfile" element={<PatientProfile />}/>
                    </Routes>
                </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
