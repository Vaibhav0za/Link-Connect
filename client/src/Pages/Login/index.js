import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import CInput from "../../Components/CInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BaseSetting from "../../apis/setting";
import { getApiData } from "../../apis/apiHelper";
export default function Login() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [togglePass, setTogglePass] = useState(false);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Username is required";
    }

    if (!pass.trim()) {
      newErrors.pass = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleTogglePass = () => {
    setTogglePass(!togglePass);
  };
  return (
    <Grid container>
      <Grid mt={10} justifyContent={"center"} gap={2} container>
        <Typography variant="h2">Login</Typography>
      </Grid>

      <Grid mt={3} justifyContent={"center"} gap={2} container>
        <Grid item xs={2}>
          <CInput
            type={"text"}
            placeholder={"Username"}
            startIcon={<AccountCircleIcon />}
            value={email}
            onChange={(e) => setEmail(e)}
            errorMsg={errors.email}
          />
        </Grid>
      </Grid>
      <Grid mt={3} justifyContent={"center"} gap={2} container>
        <Grid item xs={2}>
          <CInput
            type={togglePass ? "text" : "password"}
            placeholder={"Password"}
            startIcon={<KeyIcon />}
            endIcon={
              togglePass ? (
                <VisibilityOffIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleTogglePass}
                />
              ) : (
                <RemoveRedEyeIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleTogglePass}
                />
              )
            }
            value={pass}
            onChange={(e) => setPass(e)}
            errorMsg={errors.pass}
          />
        </Grid>
      </Grid>

      <Grid gap={2} mt={3} justifyContent={"center"} container>
        <Grid item xs={1}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              if (validateForm()) {
                console.log("Form is valid. Proceed with signup.");
                // Add your signup logic here
                const loginData = {
                  username: email,
                  password: pass,
                };
                const endpoint = `${BaseSetting.endpoint.login}`;
                getApiData(endpoint, "post", loginData)
                  .then((result) => {
                    console.log("result =====>>>>> ", result.status);
                    if (result?.status) {
                      const response = result.login;
                      console.log("response =====>>>>> ", response);
                    } else {
                      console.log("=====>>>>> error");
                    }
                  })
                  .catch((err) => {
                    console.log("=====>>>>> error ", err);
                  });
              }
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={1.6}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Not Registered ? Sign up
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
