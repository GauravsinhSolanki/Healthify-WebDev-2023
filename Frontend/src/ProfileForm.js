import React, { useEffect, useState } from 'react';
import { Button, Grid, MenuItem, Select, Snackbar, TextField, Box, Alert } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const TextFieldCustom = ({
    variant,
    type = "text",
    value,
    placeholder,
    onChange,
    name,
    required = false,
    style,
}) => {
    return (
        <TextField
            id="outlined-select"
            variant={variant}
            fullWidth
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            sx={{
                ...style,
                "& input::placeholder": {
                    fontSize: "16px",
                },
            }}
            inputProps={{
                style: {
                    padding: "10px",
                    height: "35px",
                },
            }}
            placeholder={placeholder}
        />
    );
};

export const Header = styled("div")({
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "4px",
    color: "#000",
    // marginTop: "15px",
});

export const SubHeader = ({ title, isRequired }) => {
    return (
        <Box style={{ display: "flex" }}>
            <Header>{title}</Header>
            {isRequired && <span style={{ color: "red" }}>*</span>}
        </Box>
    );
};

const ProfileForm = () => {
  const navigate = useNavigate();
  const [originalData, setOriginalData] = useState(null);
  let user1 = JSON.parse(localStorage.getItem("user"));
  console.log("user1", user1);
  useEffect(() => {
    if (user1 === null) {
      navigate('/login'); // Replace '/login' with the actual login page path
      return;
    }
  }, [user1, navigate]);

  // console.log(user1._id, "userId");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [gender, setGender] = React.useState("Male");
  const [choiceOfHospitality, setChoiceOfHospitality] = React.useState("UMH");
  const [error, setError] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [firstnameError, setFirstnameError] = React.useState(false);
  const [lastnameError, setLastnameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [phoneNoError, setPhoneNoError] = React.useState(false);
  const [addressError, setAddressError] = React.useState(false);
  const [cityError, setCityError] = React.useState(false);
  const [genderError, setGenderError] = React.useState(false);
  const [choiceOfHospitalityError, setChoiceOfHospitalityError] = React.useState(false);
  const [data, setData] = useState(null);
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    if (data) {
      setFirstName(data.firstName || "");
      setLastName(data.lastName || "");
      setEmail(data.email || "");
      setPhoneNo(data.phoneNo || "");
      setAddress(data.address || "");
      setCity(data.city || "");
      setGender(data.gender || "Male");
      setChoiceOfHospitality(data.choiceOfHospitality || "UMH");
    }
  }, [data]);

  useEffect(() => {
    if (user1) {
      axios.get(`https://backend-webdev.onrender.com/getPatient/${user1._id}`)
        .then(response => {
          console.log("response", response);
          const patientData = response.data.body;

          console.log("patientData", patientData);
          if (!data) { 
            setPatientData(patientData);
            setData(patientData);
            setOriginalData(patientData);
          }
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [user1]);

  useEffect(() => {
    if (data) {
      setFirstName(data.firstName || "");
      setLastName(data.lastName || "");
      setEmail(data.email || "");
      setPhoneNo(data.phoneNo || "");
      setAddress(data.address || "");
      setCity(data.city || "");
      setGender(data.gender || "Male");
      setChoiceOfHospitality(data.choiceOfHospitality || "UMH");
    }
  }, [data]);

  let emptyError = false;

  const resetForm = () => {
    setFirstName(originalData.firstName || "");
    setLastName(originalData.lastName || "");
    setEmail(originalData.email || "");
    setPhoneNo(originalData.phoneNo || "");
    setAddress(originalData.address || "");
    setCity(originalData.city || "");
    setGender(originalData.gender || "Male");
    setChoiceOfHospitality(originalData.choiceOfHospitality || "UMH");
    setError(false);
    setIsSubmitted(false);
  };
  
  const handleSubmit = async () => {
    if (firstName === "") {
      setFirstnameError(true);
      emptyError = true;
    } else {
      setFirstnameError(false);
    }
    if (lastName === "") {
      setLastnameError(true);
      emptyError = true;
    } else {
      setLastnameError(false);
    }
    if (email === "") {
      setEmailError(true);
      emptyError = true;
    } else {
      setEmailError(false);
    }
    if (phoneNo === "") {
      setPhoneNoError(true);
      emptyError = true;
    } else {
      setPhoneNoError(false);
    }
    if (address === "") {
      setAddressError(true);
      emptyError = true;
    } else {
      setAddressError(false);
    }
    if (city === "") {
      setCityError(true);
      emptyError = true;
    } else {
      setCityError(false);
    }
    if (gender === "") {
      setGenderError(true);
      emptyError = true;
    } else {
      setGenderError(false);
    }
    if (choiceOfHospitality === "") {
      setChoiceOfHospitalityError(true);
      emptyError = true;
    } else {
      setChoiceOfHospitalityError(false);
    }
    if (emptyError) {
      setError(true);
    } else {
      try {
        const response = await axios.post('https://backend-webdev.onrender.com/createPatient', {
            userId: user1._id,
            firstName,
            lastName,
            email,
            phoneNo,
            address,
            city,
            gender,
            choiceOfHospitality,
        });

        
        const submittedPatientData = {
          firstName,
          lastName,
          email,
          phoneNo,
          address,
          city,
          gender,
          choiceOfHospitality,
        };
        setData(submittedPatientData);
        
        setIsSubmitted(true);
        console.log("ressponse", response);
        toast.success('Patient created successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

    } catch (error) {
      const data = error.response.data.body;
      console.log("data", data);
      toast.error(error.response?.data?.message || 'An error occurred', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      }
    }
  };

  return (
    <div>
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {error && (
          <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={() => {
              setError(false);
            }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={() => {
                setError(false);
              }}
              severity="error"
              sx={{ width: "100%" }}
            >
              Fill all the required fields
            </Alert>
          </Snackbar>
        )}
        {isSubmitted ? (
          <Snackbar
            open={isSubmitted}
            autoHideDuration={6000}
            onClose={() => {
              setIsSubmitted(false);
            }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={() => {
                setIsSubmitted(false);
              }}
              severity="success"
              sx={{ width: "100%" }}
            >
              Form Submitted Successfully
            </Alert>
          </Snackbar>
        ) : null}
        <Grid item xs={12} sm={6}>
          <SubHeader title={"First Name"} isRequired={true} />
          <TextFieldCustom
            autoComplete="fname"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={firstName}
            placeholder={"Enter your first name"}
            onChange={(e) => {
              setFirstName(e.target.value);
              setFirstnameError(false);
            }}
            autoFocus
          />
          {firstnameError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubHeader title={"Last Name"} isRequired={true} />
          <TextFieldCustom
            autoComplete="lname"
            name="lastName"
            required
            value={lastName}
            placeholder={"Enter your last name"}
            onChange={(e) => {
              setLastName(e.target.value);
              setLastnameError(false);
            }}
            fullWidth
            id="lastName"
            label="Last Name"
            autoFocus
          />
          {lastnameError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubHeader title={"Email"} isRequired={true} />
          <TextFieldCustom
            autoComplete="email"
            name="Email"
            value={email}
            placeholder={"Enter your email"}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
          />
          {emailError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubHeader title={"Phone Number"} isRequired={true} />
          <TextFieldCustom
            autoComplete="phoneNo"
            name="phoneNo"
            required
            value={phoneNo}
            placeholder={"Enter your phone number"}
            onChange={(e) => {
              setPhoneNo(e.target.value);
              setPhoneNoError(false);
            }}
            fullWidth
            id="phoneNo"
            label="Phone Number"
            autoFocus
          />
          {phoneNoError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubHeader title={"Address"} isRequired={true} />
          {/* for address */}
          <TextFieldCustom
            autoComplete="address"
            name="address"
            required
            value={address}
            placeholder={"Enter your address"}
            onChange={(e) => {
              setAddress(e.target.value);
              setAddressError(false);
            }}
            fullWidth
            id="address"
            label="Address"
            autoFocus
          />
          {addressError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubHeader title={"City"} isRequired={true} />
          {/* for address */}
          <TextFieldCustom
            autoComplete="city"
            name="city"
            value={city}
            placeholder={"Enter your city"}
            onChange={(e) => {
              setCity(e.target.value);
              setCityError(false);
            }}
            required
            fullWidth
            id="city"
            label="City"
            autoFocus
          />
          {cityError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubHeader title={"Gender"} isRequired={true} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            value={gender}
            fullWidth
            placeholder={"Please select your gender"}
            inputProps={{
              style: {
                padding: "10px",
                height: "35px",
              },
            }}
            InputLabelProps={{ shrink: false }}
            onChange={(e) => {
              setGender(e.target.value);
              setGenderError(false);
            }}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Transgender"}>Transgender</MenuItem>
            <MenuItem value={"Bisexual"}>Bisexual</MenuItem>
            <MenuItem value={"Gay"}>Gay</MenuItem>
            <MenuItem value={"Lesbian"}>Lesbian</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
          {genderError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <SubHeader title={"Choice of Hospitality"} isRequired={true} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Choice of Hospitality"
            value={choiceOfHospitality}
            defaultValue="UMH"
            placeholder={"Please select your choice of hospitality"}
            fullWidth
            inputProps={{
              style: {
                padding: "10px",
                height: "35px",
              },
            }}
            InputLabelProps={{ shrink: false }}
            onChange={(e) => {
              setChoiceOfHospitality(e.target.value);
              setChoiceOfHospitalityError(false);
            }}
          >
            <MenuItem value={"UMH"}>UMH</MenuItem>
            <MenuItem value={"UHS"}>UHS</MenuItem>
            <MenuItem value={"Civil"}>Civil</MenuItem>
          </Select>
          {choiceOfHospitalityError && (
            <span
              style={{
                color: "red",
                display: "flex",
                textAlign: "left",
              }}
            >
              This field is required
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
        <Button
            type="submit"
            style={{
              display: "flex",
              justifyContent: "space-between",  // Updated styling for buttons
              alignItems: "flex-end",
            }}
            container
            spacing={2}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!!patientData}
            >
              Submit
            </Button>
            <span style={{ width: "480px" }} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={resetForm}
            >
              Reset
            </Button>
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default ProfileForm

