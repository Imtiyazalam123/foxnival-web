import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  styled,
} from "@mui/material";
import NavMenu from "./nav";

const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
  color: "white",
  padding: theme.spacing(12, 0),
  textAlign: "center",
}));

const TeamMemberCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  borderRadius: 16,
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export default function AboutUs() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "Visionary leader with 15 years of industry experience.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Technology expert driving innovation in our company.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Head of Product",
      bio: "Strategic thinker focused on user experience.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavMenu />

      <HeroSection sx={{ width: "100%" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            About Our Company
          </Typography>
          <Typography variant="h5" paragraph>
            Driving innovation and creating value for our customers
          </Typography>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ maxWidth: 800, mx: "auto" }}
        >
          We are committed to delivering cutting-edge solutions that transform
          businesses and empower our clients to achieve their full potential
          through innovative technology and exceptional service.
        </Typography>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TeamMemberCard elevation={3}>
                  <Avatar
                    alt={member.name}
                    src={member.avatar}
                    sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {member.bio}
                  </Typography>
                </TeamMemberCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
