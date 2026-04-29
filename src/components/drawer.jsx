import {
  Box,
  Typography,
  Button,
  Drawer,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function DrawerComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        sx={{
          color: "#fff",
          mt: 8,
          textAlign: "center",
          alignItems: "center",
        }}
        spacing={2}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          About CineStream
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: "600px", mb: 3, lineHeight: 1.7, color: "#ccc" }}
        >
          CineStream offers unlimited access to movies and TV shows across all
          genres. Our platform delivers smooth streaming, high-quality content,
          and a unique viewing experience.
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "#f6d75b",
            color: "black",
            px: 3,
            py: 1,
            fontWeight: 600,
            "&:hover": { background: "#e6c650" },
          }}
          onClick={() => setOpen(true)}
        >
          Learn More
        </Button>

        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            background: "#111",
            color: "#fff",
            position: "relative",
            p: 3,
          }}
        >
          <IconButton
            sx={{ position: "absolute", right: 10, top: 10, color: "black" }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          <Stack sx={{ mt: 6 }} spacing={2} sx={{ width: "500px", p: 5 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Our Mission
            </Typography>

            <Typography sx={{ color: "black", lineHeight: 1.7 }}>
              At CineStream, our mission is to bring cinematic experiences to
              your home. We curate trending, classic, and top-rated movies to
              keep you entertained 24/7. With smooth streaming, fast loading,
              and a massive content library, CineStream is built for true movie
              lovers.
            </Typography>
          </Stack>
        </Drawer>
      </Stack>
    </Box>
  );
}
