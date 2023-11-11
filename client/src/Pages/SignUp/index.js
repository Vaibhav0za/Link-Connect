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
import BaseSetting from "../../apis/setting";
import { getApiData } from "../../apis/apiHelper";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
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

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!pass.trim()) {
      newErrors.pass = "Password is required";
    }

    if (!age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || age < 10 || age > 80) {
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

  const createUser = () => {
    const postData = {
    };
    console.log(postData.postImg, "<<==blob");
    const endpoint = `${BaseSetting.endpoint.uploadPost}`;
    getApiData(endpoint, "post", postData)
      .then((result) => {
        console.log("result =====>>>>> ", result.status);
        if (result?.status) {
          const response = result.allPosts;
          console.log("response =====>>>>> ", response);
        } else {
          console.log("=====>>>>> error  ");
        }
      })
      .catch((err) => {
        console.log("=====>>>>> error ", err);
      });
  };

  return (
    <Grid container>
      <Grid mt={10} justifyContent={"center"} gap={2} container>
        <Typography variant="h2">Register here</Typography>
      </Grid>

      <Grid mt={3} justifyContent={"center"} gap={2} container>
        <Grid item xs={2}>
          <CInput
            placeholder={"Full Name"}
            startIcon={<AccountCircleIcon />}
            value={firstName}
            onChange={(e) => setFirstName(e)}
            errorMsg={errors.firstName}
          />
        </Grid>
        <Grid item xs={2}>
          <CInput
            placeholder={"username"}
            startIcon={<AccountCircleIcon />}
            value={username}
            onChange={(e) => setUsername(e)}
            errorMsg={errors.username}
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
                createUser();
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
