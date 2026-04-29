import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function HeroSection() {
  return (
    <>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2070)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Box sx={{ maxWidth: "600px" }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
              Unlimited Movies, <br />
              TV Shows, & More.
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
              Watch anywhere. Cancel anytime. Start your journey into the world
              of cinema today.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                component={Link}
                to="/movies"
                startIcon={<PlayArrowIcon />}
                sx={{
                  bgcolor: "#fff397",
                  color: "#000",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#e6da86" },
                }}
              >
                Watch now!
              </Button>

              <Button
                component={Link}
                to="/registration"
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  px: 4,
                  "&:hover": { borderColor: "#fff397", color: "#fff397" },
                }}
              >
                Create account
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
