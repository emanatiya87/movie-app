import React from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterWrapper = styled("footer")({
  color: "#888",
  padding: "48px 0",
  borderTop: "1px solid #333",
  marginTop: "40px",
});

const FooterTitle = styled(Typography)({
  color: "#fff397",
  fontWeight: "bold",
  marginBottom: "16px",
});

const SectionTitle = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
  marginBottom: "16px",
});

const FooterLink = styled(Link)({
  display: "block",
  marginBottom: "8px",
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "#fff",
  },
});

const BottomBar = styled("div")({
  marginTop: "40px",
  paddingTop: "24px",
  borderTop: "1px solid #222",
  textAlign: "center",
});

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <FooterTitle variant="h6">CINESTREAM</FooterTitle>

            <Typography variant="body2">
              The world's best movie database and streaming guide. Discover your
              next favorite story.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton sx={{ color: "#888" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "#888" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "#888" }}>
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <SectionTitle variant="subtitle1">Explore</SectionTitle>

            <FooterLink href="#">Top Rated</FooterLink>
            <FooterLink href="#">Coming Soon</FooterLink>
            <FooterLink href="#">Trailers</FooterLink>
          </Grid>

          <Grid item xs={6} md={2}>
            <SectionTitle variant="subtitle1">Help</SectionTitle>

            <FooterLink href="#">Account</FooterLink>
            <FooterLink href="#">Support Center</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </Grid>
        </Grid>

        <BottomBar>
          <Typography variant="caption">
            © {new Date().getFullYear()} CINESTREAM. All rights reserved by
            Eman.
          </Typography>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}
