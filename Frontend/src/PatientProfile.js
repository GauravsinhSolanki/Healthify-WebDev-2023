  import React, { useState } from 'react';
  import user from "../src/assests/user.png";
  import { Grid, Typography, IconButton, Box } from '@mui/material';
  import { Edit } from '@mui/icons-material';
  import ProfileForm from './ProfileForm';
  import Navbar from './Components/header';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {Button} from '@mui/material';

  const PatientProfile = () => {
      const [profilePicture, setProfilePicture] = useState(user);
      const handlePictureChange = (e) => {
          const file = e.target.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                  setProfilePicture(e.target.result);
              };
              reader.readAsDataURL(file);
          }
      };

      const handleUploadButtonClick = () => {
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
            // Perform the upload logic here
            // You can display a success toast if the upload is successful
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
                                  onChange={handlePictureChange}
                              />
                              <Button variant="contained" color="primary" onClick={handleUploadButtonClick}>
                                Upload Profile Picture
                              </Button>
                              {/* <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px" }}>Name</Typography> */}
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
