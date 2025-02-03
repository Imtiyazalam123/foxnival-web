
// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, styled } from '@mui/material';

// // [Previous styled components remain the same]

// const StyledBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     borderRadius: 24,
//     overflow: 'hidden',
//     boxShadow: theme.shadows[10],
//     height: '600px',
//     [theme.breakpoints.down('md')]: {
//       flexDirection: 'column',
//       height: 'auto',
//     },
//   }));
  
//   const LeftSection = styled(Box)(({ theme }) => ({
//     width: '50%',
//     background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
//     padding: theme.spacing(6),
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     color: 'white',
//     [theme.breakpoints.down('md')]: {
//       width: '100%',
//       padding: theme.spacing(4),
//     },
//   }));
  
//   const RightSection = styled(Box)(({ theme }) => ({
//     width: '50%',
//     padding: theme.spacing(6),
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     background: 'white',
//     [theme.breakpoints.down('md')]: {
//       width: '100%',
//       padding: theme.spacing(4),
//     },
//   }));

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);
//     // Example: You might want to send this data to a backend API
//     // axios.post('/api/contact', formData)
//   };

//   return (
//     <Box
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         bgcolor: '#ffffff',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         margin: 0,
//         padding: 0,
//         overflow: 'hidden',
//       }}
//     >
//       <StyledBox>
//         {/* Left Section */}
//         <LeftSection>
//           <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//             CONTACT US
//           </Typography>
//           <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
//           </Typography>
//         </LeftSection>

//         {/* Right Section */}
//         <RightSection>
//           <Box 
//             component="form" 
//             onSubmit={handleSubmit} 
//             sx={{ maxWidth: 400, mx: 'auto', width: '100%' }}
//           >
//             <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
//               Get in Touch
//             </Typography>
//             <Typography variant="body1" color="text.secondary" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit
//             </Typography>

//             <TextField
//               fullWidth
//               name="name"
//               label="Your Name"
//               variant="outlined"
//               margin="normal"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <TextField
//               fullWidth
//               name="email"
//               label="Your Mail"
//               variant="outlined"
//               margin="normal"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <TextField
//               fullWidth
//               name="message"
//               label="Your Message"
//               variant="outlined"
//               margin="normal"
//               multiline
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               size="large"
//               sx={{
//                 mt: 2,
//                 height: 48,
//                 borderRadius: 2,
//               }}
//             >
//               SEND
//             </Button>
//           </Box>
//         </RightSection>
//       </StyledBox>
//     </Box>
//   );
// };

// export default ContactUs;



import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  styled,
  Alert
} from "@mui/material";
import NavMenu from "./nav";

// Custom styled components (similar to login page)
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
  color: "white",
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

export default function ContactUs() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Please enter your name."),
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Please enter your email."),
      subject: Yup.string()
        .required("Please enter a subject."),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters.")
        .required("Please enter your message."),
    }),
    onSubmit: async (values) => {
      try {
        // Simulated API call - replace with actual contact form submission logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus({ type: "success", message: "Your message has been sent successfully!" });
      } catch (error) {
        setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    },
  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column", 
        alignItems: 'center',
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
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              CONTACT US
            </Typography>
            <Typography variant="h5" gutterBottom>
              WE'D LOVE TO HEAR FROM YOU
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
              Have a question, suggestion, or just want to say hello? Fill out the form and our team will get back to you as soon as possible.
            </Typography>
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
                Send us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                We're here to help and answer any question you might have.
              </Typography>

              {submitStatus && (
                <Alert 
                  severity={submitStatus.type} 
                  sx={{ mb: 2 }}
                >
                  {submitStatus.message}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  fullWidth
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  fullWidth
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  margin="normal"
                  value={values.subject}
                  onChange={handleChange}
                  error={touched.subject && Boolean(errors.subject)}
                  helperText={touched.subject && errors.subject}
                />

                <TextField
                  fullWidth
                  name="message"
                  label="Your Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />

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
                  Send Message
                </Button>
              </form>
            </Box>
          </FormSection>
        </StyledPaper>
      </Container>
    </Box>
  );
}