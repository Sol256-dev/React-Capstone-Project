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
import React, { useContext, useState } from "react";

const Login = () => {
  const [userNameDetails, setUserNameDetails] = useState();
  const [email, setEmail] = useState("");
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

    // const handlePassVisibilty = () => {
    //   setValues({
    //     ...values,
    //     showPass: !values.showPass,
    //   });
    // };

  localStorage.setItem('key', userNameDetails);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserNameDetails(email);
    window.location.reload(true);
    console.log(userNameDetails);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elelvation={2} sx={{ padding: 5 }}>
            <h3>KCF Video Library</h3>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    id="useremail"
                    label="Enter your email"
                    placeholder="Email Address"
                    variant="outlined"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </Grid>

                {/* <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    required
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
                </Grid> */}

                <Grid item>
                  <Button type="submit" variant="outlined">
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
