import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  styled
} from "@mui/material";
import { Link } from "react-router-dom";
import NavMenu from "./nav";

const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
  color: "white",
  padding: theme.spacing(12, 0),
  textAlign: "center",
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export default function HomeFront() {
  const features = [
    {
      title: "Feature One",
      description: "Detailed description of the first key feature.",
      icon: "🚀"
    },
    {
      title: "Feature Two", 
      description: "Detailed description of the second key feature.",
      icon: "💡"
    },
    {
      title: "Feature Three",
      description: "Detailed description of the third key feature.",
      icon: "🌟"
    }
  ];

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems:'center' }}>
      <NavMenu />
      
      <HeroSection sx={{ width: "100%" }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our Platform
          </Typography>
          <Typography variant="h5" paragraph>
            Innovative solutions for your business needs
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            component={Link} 
            to="/signup"
            sx={{ mt: 3 }}
          >
            Get Started
          </Button>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}