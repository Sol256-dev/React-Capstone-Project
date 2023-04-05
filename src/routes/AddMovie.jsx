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
  import { Link, useNavigate } from "react-router-dom";
  
  const AddMovie = () => {
    const navigate = useNavigate();
    const [userNameDetails, setUserNameDetails] = useState("");
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
  
    const handleSubmit = (e) => {
    //   e.preventDefault();
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       setUserNameDetails(userCredential.user.email);
    //       localStorage.setItem("key", userNameDetails);
    //       console.log(userCredential);
  
    //       window.location.reload(true);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
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
            <Paper elelvation={1} sx={{ padding: 3 }}>
              <form onSubmit={handleSubmit}>
                <h4>Add Media item</h4>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      id="useremail"
                      value={email}
                      label="Media name here"
                      placeholder="Email Address"
                      variant="outlined"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </Grid>
  
                  <Grid item>
                    <TextField
                      type=""
                      fullWidth
                      label="placeholder"
                      placeholder="text here"
                      variant="outlined"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type=""
                      fullWidth
                      label="placeholder"
                      placeholder="text here"
                      variant="outlined"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type=""
                      fullWidth
                      label="placeholder"
                      placeholder="text here"
                      variant="outlined"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type=""
                      fullWidth
                      label="placeholder"
                      placeholder="text here"
                      variant="outlined"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
  
                  <Grid item>
                    <Button type="submit" variant="outlined">
                      Add Media item
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Container>
      </>
    );
  };
  
  export default AddMovie;
  