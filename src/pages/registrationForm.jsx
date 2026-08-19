import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/slices/authSlice";
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
  Link,
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password, gender }))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
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
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="standard"
            sx={whiteInputStyle}
            inputlabelprops={{ style: { color: "#f8f9fa" } }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="standard"
            sx={{ ...whiteInputStyle, mt: 2 }}
            inputlabelprops={{ style: { color: "#f8f9fa" } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            variant="standard"
            sx={{ ...whiteInputStyle, mt: 2 }}
            inputlabelprops={{ style: { color: "#f8f9fa" } }}
          />
          <FormControl sx={{ mt: 3 }}>
            <FormLabel sx={{ color: "#f8f9fa" }}>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
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

          <Button
            variant="contained"
            sx={{ mt: 3, fontWeight: "bold" }}
            type="submit"
            disabled={loading}
          >
            sign up
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#f8f9fa" }}>
            Already have an account?{" "}
            <Link
              href="/login"
              sx={{
                color: "#fff397",
                textDecoration: "underline",
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
