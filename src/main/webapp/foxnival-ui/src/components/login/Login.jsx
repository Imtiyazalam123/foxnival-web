import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import userServiceApi from "../../service/UserService";
import { toast } from "react-toastify";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Alert,
  Container,
  styled,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import NavMenu from "./nav";

// Custom styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  borderRadius: 24,
  overflow: "hidden",
  boxShadow: theme.shadows[10],
  height: "600px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
  },
}));

const WelcomeSection = styled(Box)(({ theme }) => ({
  width: "50%",
  background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // Center the image
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: theme.spacing(4),
  },
}));

const FormSection = styled(Box)(({ theme }) => ({
  width: "50%",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "white",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: theme.spacing(4),
  },
}));

export default function Login() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("loggedInUser"))) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .email("Please enter a valid username.")
        .required("Please enter your username."),
      password: Yup.string()
        .min(5, "Password must be at least 5 characters.")
        .required("Please enter your password."),
    }),
    onSubmit: async (values) => {
      userServiceApi
        .login(values.username, values.password)
        .then((res) => {
          if (res?.data) {
            setShowError(false);
            toast.success("Authenticated.");
            sessionStorage.setItem("loggedInUser", JSON.stringify(res?.data));
            navigate("/dashboard");
          }
        })
        .catch((e) => {
          console.error(e);
          if (e?.status === 401) {
            setShowError(true);
            toast.error("Unauthenticated.");
          }
        });
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <NavMenu />
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          m: 0,
          p: 0,
        }}
      >
        <StyledPaper>
          {/* Welcome Section */}
          <WelcomeSection>
            <img
              src="/vectors/login.jpg"
              alt="Login Illustration"
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "contain",
                borderRadius: "20px",
              }}
            />
          </WelcomeSection>

          {/* Form Section */}
          <FormSection>
            <Box sx={{ maxWidth: 400, mx: "auto", width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Sign in
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </Typography>

              {showError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  Please enter valid username or password.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="username"
                  label="User Name"
                  variant="outlined"
                  margin="normal"
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />

                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  margin="normal"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Button color="primary" onClick={handleForgotPassword}>
                    Forgot Password?
                  </Button>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    height: 48,
                    borderRadius: 2,
                  }}
                >
                  Sign in
                </Button>

                <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    style={{
                      color: "#1976d2",
                      textDecoration: "none",
                    }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </form>
            </Box>
          </FormSection>
        </StyledPaper>
      </Container>
    </Box>
  );
}
