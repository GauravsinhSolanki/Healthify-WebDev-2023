import React, { useState, useEffect } from 'react';
import user from "../src/assests/user.png";
import { Grid, IconButton, Box, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import ProfileForm from './ProfileForm';
import Navbar from './Components/header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientProfile = () => {
  const navigate = useNavigate();
  let user1 = JSON.parse(localStorage.getItem("user"));
  console.log("user1", user1);
  useEffect(() => {
    if (user1 === null) {
      navigate('/login');
      return;
    }
  }, [user1, navigate]);

  const [profilePicture, setProfilePicture] = useState(user);

  const handleUploadButtonClick = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) {
        return;
      }
  
      const formData = new FormData();
      formData.append('userId', user1._id);
      formData.append('profilePicture', file);
      console.log(formData);
      // Debugging: Display formData content
      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
  
      const response = await axios.post('https://backend-webdev.onrender.com/uploadProfilePicture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log('Upload progress: ' + percentCompleted + '%');
        },
      });
  
      if (response.status === 200) {
        setProfilePicture(URL.createObjectURL(file));
        toast.success('Profile picture uploaded successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
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
              <Button variant="contained" color="primary" component="label">
                Upload Profile Picture
                <input type="file" hidden accept="image/*" onChange={handleUploadButtonClick} />
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
