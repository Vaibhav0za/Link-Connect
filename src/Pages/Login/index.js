import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import CInput from "../../Components/CInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!pass.trim()) {
      newErrors.pass = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Grid container>
      <Grid mt={10} justifyContent={"center"} gap={2} container>
        <Typography variant="h2">Login</Typography>
      </Grid>

      <Grid mt={3} justifyContent={"center"} gap={2} container>
        <Grid item xs={2}>
          <CInput
            type={"email"}
            placeholder={"Email Address"}
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
            type={"password"}
            placeholder={"Password"}
            startIcon={<KeyIcon />}
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
