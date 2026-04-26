import { useState } from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function RegistrationForm() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff397",
      },
    },
  });

  const whiteInputStyle = {
    "& .MuiInputLabel-root": { color: "#f8f9fa" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#fff397" },

    "& .MuiInput-underline:before": { borderBottomColor: "#f8f9fa" },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#fff397 !important",
    },
    "& .MuiInput-underline:after": { borderBottomColor: "#fff397" },

    "& .MuiInput-input": { color: "#f8f9fa" },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%" },
          margin: "0 auto",
          marginTop: "40px",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#f8f9fa", mb: 2, textAlign: "center" }}
        >
          Registration
        </Typography>

        <TextField
          fullWidth
          label="Name"
          variant="standard"
          sx={whiteInputStyle}
          inputlabelprops={{ style: { color: "#f8f9fa" } }}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="standard"
          sx={{ ...whiteInputStyle, mt: 2 }}
          inputlabelprops={{ style: { color: "#f8f9fa" } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="standard"
          sx={{ ...whiteInputStyle, mt: 2 }}
          inputlabelprops={{ style: { color: "#f8f9fa" } }}
        />
        <FormControl sx={{ mt: 3 }}>
          <FormLabel sx={{ color: "#f8f9fa" }}>Gender</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="male"
              control={<Radio sx={{ color: "#f8f9fa" }} />}
              label="Male"
              sx={{ color: "#f8f9fa" }}
            />
            <FormControlLabel
              value="female"
              control={<Radio sx={{ color: "#f8f9fa" }} />}
              label="Female"
              sx={{ color: "#f8f9fa" }}
            />
          </RadioGroup>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#f8f9fa" }} />}
            label="I agree to the terms and conditions"
            sx={{ color: "#f8f9fa" }}
          />
        </Box>

        <Button variant="contained" sx={{ mt: 3, fontWeight: "bold" }}>
          sign up
        </Button>
      </Box>
    </ThemeProvider>
  );
}
