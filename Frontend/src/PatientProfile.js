import React, { useState, useEffect } from 'react';
import user from "../src/assests/user.png";
import { Grid, Typography, IconButton, Box } from '@mui/material';
import { Edit } from '@mui/icons-material';
import ProfileForm from './ProfileForm';
import Navbar from './Components/header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientProfile = () => {
  const navigate = useNavigate();
  let user1 = JSON.parse(localStorage.getItem("user"));
  console.log("user1", user1);
  useEffect(() => {
    if (user1 === null) {
      navigate('/login'); // Replace '/login' with the actual login page path
      return;
    }
  }, [user1, navigate]);

  const [profilePicture, setProfilePicture] = useState(user);

  const handleUploadButtonClick = async () => {
    if (!profilePicture || profilePicture === user) {
      toast.error('Please upload an image first', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      try {
        const formData = new FormData();
        formData.append('userId', user1._id);
        formData.append('profilePicture', profilePicture);

        // Combine the FileReader logic here
        const file = document.getElementById('profile-picture').files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = async (e) => {
            setProfilePicture(e.target.result);
            try {
              const response = await axios.post('https://backend-webdev.onrender.com/uploadProfilePicture', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              console.log("uploadResponse", response);
              toast.success('Profile picture uploaded successfully', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } catch (error) {
              toast.error('Error uploading profile picture', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              console.error('Error uploading profile picture:', error);
            }
          };
          reader.readAsDataURL(file);
        }
      } catch (error) {
        console.error('Error creating form data:', error);
      }
    }
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div style={{
              backgroundColor: "#F5F5F5",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}>
              <img
                src={profilePicture}
                alt="user"
                style={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid black",
                  padding: "20px",
                  borderRadius: "50%",
                }}
              />
              <label htmlFor="profile-picture">
                <IconButton component="span">
                  <Edit />
                </IconButton>
              </label>
              <input
                accept="image/*"
                id="profile-picture"
                type="file"
                style={{ display: 'none' }}
                onChange={handleUploadButtonClick}
              />
              <Button variant="contained" color="primary" onClick={handleUploadButtonClick}>
                Upload Profile Picture
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "50px" }}>
            <ProfileForm />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PatientProfile;
