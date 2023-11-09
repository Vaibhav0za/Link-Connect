import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import CInput from "../../Components/CInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [pass, setPass] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!pass.trim()) {
      newErrors.pass = "Password is required";
    }

    if (!age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || +age <= 0) {
      newErrors.age = "Please enter a valid age";
    }

    if (!country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (isNaN(mobileNumber) || mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    if (!email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Grid container>
      <Grid mt={10} justifyContent={"center"} gap={2} container>
        <Typography variant="h2">Register here</Typography>
      </Grid>

      <Grid mt={3} justifyContent={"center"} gap={2} container>
        <Grid item xs={2}>
          <CInput
            placeholder={"First Name"}
            startIcon={<AccountCircleIcon />}
            value={firstName}
            onChange={(e) => setFirstName(e)}
            errorMsg={errors.firstName}
          />
        </Grid>
        <Grid item xs={2}>
          <CInput
            placeholder={"Last Name"}
            startIcon={<AccountCircleIcon />}
            value={lastName}
            onChange={(e) => setLastName(e)}
            errorMsg={errors.lastName}
          />
        </Grid>
        <Grid item xs={2}>
          <CInput
            type={"password"}
            placeholder={"Password"}
            startIcon={<KeyIcon />}
            value={pass}
            onChange={(e) => setPass(e)}
            errorMsg={errors.pass}
          />
        </Grid>
      </Grid>

      <Grid mt={3} justifyContent={"center"} gap={2} container>
        <Grid item xs={0.9}>
          <CInput
            placeholder={"Age"}
            startIcon={<AccessibilityIcon />}
            value={age}
            onChange={(e) => setAge(e)}
            errorMsg={errors.age}
          />
        </Grid>
        <Grid item xs={1}>
          <CInput
            placeholder={"Country"}
            startIcon={<PublicIcon />}
            value={country}
            onChange={(e) => setCountry(e)}
            errorMsg={errors.country}
          />
        </Grid>
        <Grid item xs={2}>
          <CInput
            placeholder={"Mobile Number"}
            startIcon={<StayCurrentPortraitIcon />}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e)}
            errorMsg={errors.mobileNumber}
          />
        </Grid>
        <Grid item xs={2}>
          <CInput
            placeholder={"Email Address"}
            startIcon={<AlternateEmailIcon />}
            value={email}
            onChange={(e) => setEmail(e)}
            errorMsg={errors.email}
          />
        </Grid>
      </Grid>

      <Grid gap={2} mt={3} justifyContent={"center"} container>
        <Grid item xs={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              if (validateForm()) {
                console.log("Form is valid. Proceed with signup.");
                // Add your signup logic here
              }
            }}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              navigate("/login");
            }}
          >
            Already Registered ? Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
