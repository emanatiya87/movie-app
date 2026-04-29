import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import Avatar from "@mui/material/Avatar";

export default function FeaturesSection() {
  const features = [
    {
      icon: <MovieIcon sx={{ fontSize: 40, color: "#ffdd57" }} />,
      title: "Wide Collection",
      desc: "Browse thousands of movies from all genres.",
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: "#ffdd57" }} />,
      title: "Top Ratings",
      desc: "Find trending and top-rated movies easily.",
    },
    {
      icon: <DownloadIcon sx={{ fontSize: 40, color: "#ffdd57" }} />,
      title: "Fast Downloads",
      desc: "Enjoy quick and smooth streaming or downloads.",
    },
  ];

  return (
    <Box sx={{ py: 4, color: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 5, fontWeight: "bold" }}
        >
          App Features
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            justifycontent: "center",
            alignItems: "stretch",
          }}
        >
          {features.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Stack
                spacing={2}
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  p: 3,
                  borderRadius: 2,
                  background: "#1a1a1a",
                  transition: "0.3s",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 3,
                  },
                }}
              >
                <Avatar
                  sx={{
                    background: "black",
                    boxShadow: 3,
                    height: "52px",
                    width: "52px",
                  }}
                >
                  {" "}
                  {item.icon}
                </Avatar>

                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "gray" }}>{item.desc}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
