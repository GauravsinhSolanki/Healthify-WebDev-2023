import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backendUrl from "../config/Constants";
import MedicalServices from '@mui/icons-material/MedicalServices';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const PatientPrescriptions = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${backendUrl}/prescription/patient/${user._id}`)
            .then((response) => {
                setPrescriptions(response.data);
            })
            .catch((error) => {
                console.error('An error occurred while fetching the prescriptions:', error);
            });
    }, [user._id]);

    return (
        <div className="container">
            <h1 className="text-center mt-4"><MedicalServices /> My Prescriptions</h1>
            {prescriptions.length === 0 ? (
                <p className="text-center">No prescriptions found</p>
            ) : (
                <table className="table table-bordered mt-4">
                    <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Prescription</th>
                        <th>Expiry Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {prescriptions.map((prescription, index) => (
                        <tr key={index}>
                            <td>{prescription.doctorName}</td>
                            <td>{prescription.prescription}</td>
                            <td>{prescription.expiryDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <Button
                variant="outlined"
                color="secondary"
                style={{ margin: '10px' }}
                onClick={() => navigate('/')}
            >
                Back
            </Button>
        </div>
    );
};

export default PatientPrescriptions;
