import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://new-mediahub.onrender.com/api/v1/users/login", {
          email,
          password,
        })
        .then((res) => {
          res.data ? navigate("/", { state: { id: email } }) : "";
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elelvation={2} sx={{ padding: 5 }}>
            <form onSubmit={handleSubmit}>
              <h4>Login here</h4>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    id="useremail"
                    value={email}
                    label="Enter your email"
                    placeholder="Email Address"
                    variant="outlined"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </Grid>

                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePassVisibilty}
                            aria-label="toggle password"
                            edge="end"
                          >
                            {values.showPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item>
                  <Button type="submit" variant="outlined">
                    Login
                  </Button>
                </Grid>

                <Grid item>
                  <Link to="/register">Sign up here</Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
