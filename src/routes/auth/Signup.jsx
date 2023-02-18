import { Stack, TextField } from "@mui/material";

const Signup = () => {
  return (
    <>
      <Stack spacing={4} style={{alignItems: "center", textAlign:"center", margin: "5em 5em"}}>
        <Stack direction="column" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="outlined" />
        </Stack>
      </Stack>
    </>
  );
};

export default Signup;
