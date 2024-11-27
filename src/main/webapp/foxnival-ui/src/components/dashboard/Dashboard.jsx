// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Box,
//   CssBaseline,
// } from '@mui/material';
// import {
//   Notifications,
//   AccountCircle,
//   Home,
//   Settings,
//   Chat,
//   Work,
// } from '@mui/icons-material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { styled } from '@mui/system';
// import { Link } from 'react-router-dom'
// import RequestsDashboard from '../section/assign-task/assigntasktable';

// const drawerWidth = 240;
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2196f3',
//     },
//   },
// });

// const StyledDrawer = styled(Drawer)(({ theme }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   '& .MuiDrawer-paper': {
//     width: drawerWidth,
//     boxSizing: 'border-box',
//     backgroundColor: '#1e1e1e',
//     color: 'white',
//   },
// }));

// const StyledListItem = styled(ListItem)(({ theme }) => ({
//   '&:hover': {
//     backgroundColor: '#0d47a1',
//   },
// }));

// const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
//   color: 'white',
// }));

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };



//   return (
//     <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Company Name
//         </Typography>
//         <IconButton size="large" color="inherit">
//           <Notifications />
//         </IconButton>
//         <div>
//           <IconButton
//             size="large"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleMenu}
//             color="inherit"
//           >
//             <AccountCircle />
//           </IconButton>
//           <Menu
//           sx={{mt:'30px'}}
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>My account</MenuItem>
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//           </Menu>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// const Navbar = () => {
//   return (
//     <StyledDrawer variant="permanent">
//       <Toolbar />
//       <Box sx={{ overflow: 'auto' }}>
//         <List>
//           {[
//             { text: 'Home', icon: <Home /> },
//             { text: 'Assign Task', icon: <Work /> },
//             // <Link to = "/assigntask" class="btn btn-success">{ {text: 'Assign Task', icon: <Work /> }}</Link>,
//             { text: 'Manage User', icon: <Settings /> },
//             { text: 'Start Chat', icon: <Chat /> },
//           ].map((item) => (
//             <StyledListItem button key={item.text}>
//               <StyledListItemIcon>{item.icon}</StyledListItemIcon>
//               <ListItemText primary={item.text} />
//             </StyledListItem>
//           ))}
//         </List>
//       </Box>
//     </StyledDrawer>
//   );
// };

// export default function Dashboard() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <Header />
//         <Navbar />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Toolbar />
//           <Typography variant="h4" component="h2" gutterBottom>
//             Welcome to the Dashboard
//           </Typography>
//           <Typography>
//             This is where your main content will be displayed.
//           </Typography>
//         <RequestsDashboard/>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// // import React, { useState } from 'react';
// // import { Navbar, Nav, Container, Dropdown, OverlayTrigger, Popover } from 'react-bootstrap';
// // import { BellFill, PersonCircle, House, Briefcase, PeopleFill, ChatDots } from 'react-bootstrap-icons';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const Header = () => {
// //   return (
// //     <Navbar bg="primary" variant="dark" fixed="top" className="mb-3">
// //       <Container fluid>
// //         <Navbar.Brand href="#home">Company Name</Navbar.Brand>
// //         <Navbar.Toggle />
// //         <Navbar.Collapse className="justify-content-end">
// //           <Nav>
// //             <Nav.Link href="#notifications">
// //               <BellFill size={20} />
// //             </Nav.Link>
// //             <OverlayTrigger
// //               trigger="click"
// //               placement="bottom"
// //               overlay={
// //                 <Popover id="popover-basic">
// //                   <Popover.Body>
// //                     <Nav className="flex-column">
// //                       <Nav.Link href="#profile">Profile</Nav.Link>
// //                       <Nav.Link href="#account">My account</Nav.Link>
// //                       <Nav.Link href="#logout">Logout</Nav.Link>
// //                     </Nav>
// //                   </Popover.Body>
// //                 </Popover>
// //               }
// //             >
// //               <Nav.Link>
// //                 <PersonCircle size={20} />
// //               </Nav.Link>
// //             </OverlayTrigger>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // };

// // const Sidebar = () => {
// //   return (
// //     <Nav className="flex-column bg-light sidebar">
// //       <Nav.Link href="#home"><House size={20} className="me-2" /> Home</Nav.Link>
// //       <Nav.Link href="#assign-task"><Briefcase size={20} className="me-2" /> Assign Task</Nav.Link>
// //       <Nav.Link href="#manage-user"><PeopleFill size={20} className="me-2" /> Manage User</Nav.Link>
// //       <Nav.Link href="#start-chat"><ChatDots size={20} className="me-2" /> Start Chat</Nav.Link>
// //     </Nav>
// //   );
// // };

// // const Dashboard = () => {
// //   return (
// //     <div>
// //       <Header />
// //       <Container fluid>
// //         <div className="row">
// //           <nav className="col-md-2 d-none d-md-block bg-light sidebar">
// //             <div className="position-sticky pt-3">
// //               <Sidebar />
// //             </div>
// //           </nav>
// //           <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
// //             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
// //               <h1 className="h2">Welcome to the Dashboard</h1>
// //             </div>
// //             <p>This is where your main content will be displayed.</p>
// //           </main>
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default Dashboard;

import React from 'react';
import {
  Typography,
  Box,
  styled,
} from '@mui/material';

// Create a styled component to ensure proper margin reset
const DashboardContainer = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(3),
  width: '100%',
  boxSizing: 'border-box',
}));

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography>
        This is where your main content will be displayed.
      </Typography>
    </DashboardContainer>
  );
}