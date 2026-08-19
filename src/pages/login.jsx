import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/authSlice";
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

export default function LoginForm() {
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
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
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            sx={{ ...whiteInputStyle, mt: 2 }}
            inputlabelprops={{ style: { color: "#f8f9fa" } }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ ...whiteInputStyle, mt: 2 }}
            inputlabelprops={{ style: { color: "#f8f9fa" } }}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{ mt: 3, fontWeight: "bold" }}
          >
            Login
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#f8f9fa" }}>
            Don't have an account?{" "}
            <Link
              href="/registration"
              sx={{
                color: "#fff397",
                textDecoration: "underline",
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
