import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Components/auth/theme';
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
import AdminHospital from "./Components/admin/AdminHospital";
import AdminPage from "./Components/admin/Admin";
import RegisterHospital from "./Components/admin/RegisterHospital";
import AdminDoctors from "./Components/admin/AdminDoctors";
import DoctorProfile from "./Components/Doctor/DoctorProfile";
import Prescribe from "./Components/Doctor/Prescribe";
import DoctorPrescriptions from "./Components/Doctor/DoctorPrescriptions";
import PatientPrescriptions from "./Components/Patient/PatientPrescriptions";
import AdminPatients from "./Components/admin/AdminPatients";
import ProtectedRoutes from "./Components/config/ProtectedRoutes";
import NotAuthorized from "./Components/admin/NotAuthorized";
import SignupPage from './Components/auth/signup';
import LoginPage from "./Components/auth/login";
import PasswordRecoveryPage from './Components/auth/password-recovery';
import PatientProfile from "./PatientProfile";
import ArticleList from "./Articles/ArticleList";
import ArticleDetails from "./Articles/ArticleDetails";
import NewArticle from "./Articles/NewArticle";
import EditArticle from "./Articles/EditArticle";
import DeleteConfirmation from "./Articles/DeleteConfirmation";

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
                <CssBaseline />
                <Routes>
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/patients" element={<ProtectedRoutes><Features /></ProtectedRoutes>} />
                    <Route path="/hospitals" element={<ProtectedRoutes><HospitalList /></ProtectedRoutes>} />
                    <Route path="/hospital" element={<ProtectedRoutes><Hospital /></ProtectedRoutes>} />
                    <Route path="/doctor" element={<ProtectedRoutes><Doctor /></ProtectedRoutes>} />
                    <Route path="/profile" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
                    <Route path="/single" element={<ProtectedRoutes><Single /></ProtectedRoutes>} />
                    <Route path='/admin/hospitals' element={<ProtectedRoutes adminRoute={true}><AdminHospital /></ProtectedRoutes>} />
                    <Route path='/admin/hospital/register' element={<ProtectedRoutes adminRoute={true}><RegisterHospital /></ProtectedRoutes>} />
                    <Route path='/admin/doctors' element={<ProtectedRoutes adminRoute={true}><AdminDoctors /></ProtectedRoutes>} />
                    <Route path='/admin/patients' element={<ProtectedRoutes adminRoute={true}><AdminPatients /></ProtectedRoutes>} />
                    <Route path='/admin' element={<ProtectedRoutes adminRoute={true}><AdminPage /></ProtectedRoutes>} />
                    <Route path='/doctor-profile' element={<ProtectedRoutes><DoctorProfile /></ProtectedRoutes>} />
                    <Route path="/doctor/prescribe" element={<ProtectedRoutes><Prescribe /></ProtectedRoutes>} />
                    <Route path="/doctor/prescriptions" element={<ProtectedRoutes><DoctorPrescriptions /></ProtectedRoutes>} />
                    <Route path="/patient/prescriptions" element={<ProtectedRoutes><PatientPrescriptions /></ProtectedRoutes>} />
                    <Route path="/not-authorized" element={<NotAuthorized />} />
                    <Route path="/articles/delete/:id" element={<ProtectedRoutes><DeleteConfirmation/></ProtectedRoutes>} />
                    <Route path="/articles/edit/:id" element={<ProtectedRoutes><EditArticle/></ProtectedRoutes>} />
                    <Route path="/articles/new" element={<ProtectedRoutes><NewArticle/></ProtectedRoutes>} />
                    <Route path="/articles/:id" element={<ProtectedRoutes><ArticleDetails/></ProtectedRoutes>} />
                    <Route path="/article-list" element={<ProtectedRoutes><ArticleList/></ProtectedRoutes>} />
                    <Route path="/patientProfile" element={<ProtectedRoutes><PatientProfile /></ProtectedRoutes>}/>
                    <Route path="/patient/prescriptions" element={<ProtectedRoutes><PatientPrescriptions /></ProtectedRoutes>}/>

                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
